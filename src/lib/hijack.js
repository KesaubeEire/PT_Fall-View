/**
 * 拦截指定 API（改进版：避免原型污染，使用WeakMap）
 * @param {Object} param 指定的 path & method, 默认是 POST->'/search'
 * @returns {Function} 清理函数，调用后可恢复原始XHR行为
 */
export function Launch_Hijack(param = { path: '/search', method: 'POST' }) {
  // 提取参数并设置默认值
  const path = param.path || '/search';
  const method = param.method || 'POST';

  // 保存原生方法
  const nativeOpen = XMLHttpRequest.prototype.open;
  const nativeSend = XMLHttpRequest.prototype.send;

  // 使用WeakMap存储每个XHR实例的元数据，避免污染原型
  const requestMetadataMap = new WeakMap();
  const capturedFlags = new WeakSet();

  // 检查是否为目标请求
  /** @type {(url: string, requestMethod: string) => boolean} */
  function isTargetRequest(url, requestMethod) {
    if (!url.includes(path)) return false;
    if (requestMethod.toUpperCase() !== method.toUpperCase()) return false;
    return true;
  }

  // 解析响应内容
  /** @type {(xhr: XMLHttpRequest) => any} */
  function parseResponse(xhr) {
    try {
      switch (xhr.responseType) {
        case 'json':
          return xhr.response;
        case 'document':
          return xhr.responseXML?.documentElement.textContent || null;
        case 'arraybuffer':
          return new Uint8Array(xhr.response);
        case 'blob':
          return URL.createObjectURL(xhr.response);
        default:
          return xhr.responseText;
      }
    } catch {
      return xhr.responseText;
    }
  }

  // 捕获响应数据
  /** @type {(xhr: XMLHttpRequest) => void} */
  function captureResponseData(xhr) {
    const metadata = requestMetadataMap.get(xhr);
    if (!metadata || !metadata.isTarget || capturedFlags.has(xhr)) {
      return;
    }

    try {
      const responseData = {
        status: xhr.status,
        headers: xhr.getAllResponseHeaders(),
        data: parseResponse(xhr)
      };

      // 触发自定义事件
      const event = new CustomEvent(`res>${method}->${path}`, { detail: responseData });
      window.dispatchEvent(event);
      capturedFlags.add(xhr);
    } catch (e) {
      console.error('<PT-Fall> Capture failed:', e);
    }
  }

  // 劫持open方法
  XMLHttpRequest.prototype.open = function(method, url) {
    const metadata = {
      method: method.toUpperCase(),
      url: url,
      isTarget: isTargetRequest(url, method)
    };
    requestMetadataMap.set(this, metadata);
    return nativeOpen.apply(this, arguments);
  };

  // 劫持send方法
  XMLHttpRequest.prototype.send = function(body) {
    const metadata = requestMetadataMap.get(this);

    if (metadata?.isTarget) {
      const originalOnReadyStateChange = this.onreadystatechange;
      const originalOnLoad = this.onload;

      // 监听readystatechange
      this.addEventListener('readystatechange', function() {
        if (this.readyState === 4) {
          captureResponseData(this);
        }
        originalOnReadyStateChange?.call(this);
      });

      // 兼容onload
      this.onload = function(e) {
        captureResponseData(this);
        originalOnLoad?.call(this, e);
      };

      // 记录请求体
      const reqBody = {
        url: metadata.url,
        body: body instanceof Document ? body.documentElement.textContent || '[Document]' : body
      };

      // 触发请求事件
      const event = new CustomEvent(`req>${method}->${path}`, { detail: reqBody });
      window.dispatchEvent(event);
    }

    return nativeSend.apply(this, arguments);
  };

  // 返回清理函数
  return function cleanup() {
    XMLHttpRequest.prototype.open = nativeOpen;
    XMLHttpRequest.prototype.send = nativeSend;
  };
}
