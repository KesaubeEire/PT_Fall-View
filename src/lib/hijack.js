/**
 * 拦截指定 API
 * @param {Object} param 指定的 path & method, 默认是 POST->'/search'
 */
export function Launch_Hijack(param = { path: '/search', method: 'POST' }) {
  /* 保存原生 XMLHttpRequest 原型方法 */
  const nativeOpen = XMLHttpRequest.prototype.open;
  const nativeSend = XMLHttpRequest.prototype.send;

  // 劫持 open 方法记录请求信息
  XMLHttpRequest.prototype.open = function (method, url) {
    this._requestMetadata = {
      method: method.toUpperCase(),
      url: url,
      isTarget: url.includes(param.path) && method.toUpperCase() === param.method
    };
    return nativeOpen.apply(this, arguments);
  };

  // 劫持 send 方法注入响应监听
  XMLHttpRequest.prototype.send = function (body) {
    if (this._requestMetadata?.isTarget) {
      const originalOnReadyStateChange = this.onreadystatechange;
      const originalOnLoad = this.onload;

      // 监听所有状态变化
      this.addEventListener('readystatechange', () => {
        if (this.readyState === 4) {
          this._captureResponseData();
        }
        originalOnReadyStateChange?.call(this);
      });

      // 兼容 onload 直接监听
      this.onload = e => {
        this._captureResponseData();
        originalOnLoad?.call(this, e);
      };

      const reqBody = {
        url: this._requestMetadata.url,
        body: body instanceof Document ? body.documentElement.outerHTML : body
      };

      // 记录请求体
      // console.log(`<PT-Fall>[Request]  (${param.method} -> ${param.path})\n`, reqBody);

      // 触发自定义事件（使用）
      const event = new CustomEvent(`req>${param.method}->${param.path}`, { detail: reqBody });
      window.dispatchEvent(event);
    }

    return nativeSend.apply(this, arguments);
  };

  // 响应数据捕获方法
  XMLHttpRequest.prototype._captureResponseData = function () {
    if (!this._hasCaptured && this._requestMetadata.isTarget) {
      try {
        const responseData = {
          status: this.status,
          headers: this.getAllResponseHeaders(),
          data: this._parseResponse()
        };

        // 输出到控制台
        // const { data } = responseData;
        // console.log(`<PT-Fall>[Response] (${param.method} -> ${param.path})\n`, JSON.parse(data));

        // 触发自定义事件（使用）
        const event = new CustomEvent(`res>${param.method}->${param.path}`, { detail: responseData });
        window.dispatchEvent(event);
      } catch (e) {
        console.error('<PT-Fall> Capture failed:', e);
      }
      this._hasCaptured = true; // 防止重复触发
    }
  };

  // 自动解析响应内容
  XMLHttpRequest.prototype._parseResponse = function () {
    try {
      switch (this.responseType) {
        case 'json':
          return this.response;
        case 'document':
          return this.responseXML?.documentElement.outerHTML;
        case 'arraybuffer':
          return new Uint8Array(this.response);
        case 'blob':
          return URL.createObjectURL(this.response);
        default:
          return this.responseText;
      }
    } catch {
      return this.responseText;
    }
  };

  /******************** 使用示例 ********************/
  // 监听捕获事件（使用）
  // window.addEventListener(`${param.method}->${param.path}`, e => {
  //   const { data } = e.detail;
  //   console.log(`<PT-Fall>[Response] (${param.method}->${param.path})[通过事件捕获]:\n`, JSON.parse(data));
  // });

  // 原始请求示例
  // const xhr = new XMLHttpRequest();
  // xhr.open('POST', '/search');
  // xhr.onload = function () {
  //   console.log('原始回调收到的响应:', this.response); // 未被修改
  // };
  // xhr.send(JSON.stringify({ query: 'test' }));
}
