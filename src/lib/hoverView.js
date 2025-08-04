/**
 * 悬浮大图组件
 */
import { get } from 'svelte/store';
import { _show_nexus_pic, _state_hover_pic } from '@/stores';

export class HoverView {
  static instance = null;

  /**
   * 获取 HoverView 实例
   * @returns {HoverView}
   */
  static getInstance() {
    if (!HoverView.instance) {
      HoverView.instance = new HoverView();
    }
    return HoverView.instance;
  }

  constructor() {
    // 确保单例
    if (HoverView.instance) {
      return HoverView.instance;
    }
    HoverView.instance = this;

    this.container = null;
    this.imgElements = null;
    this.img_bg = null;
    this.img_main = null;
    this.unsubscribe = null;

    this.init(); // 自动初始化

    // NOTE: 订阅 _state_hover_pic 的变化
    this.unsubscribe = _state_hover_pic.subscribe(value => {
      if (this.container) {
        // this.clearPreview();
        console.log(`[HoverView]<${Date.now()}> _state_hover_pic changed to ${value}, clearing preview`);
        if (this.img_main) this.img_main.style.objectFit = value ? 'contain' : 'scale-down';
      }
    });
  }

  /**
   * 初始化悬浮窗口
   */
  init() {
    this.container = document.querySelector('.kp_container') || this.createPreview();
    document.body.appendChild(this.container);
  }

  /**
   * 创建预览容器
   * @returns {HTMLElement}
   */
  createPreview() {
    const parent = Object.assign(document.createElement('div'), {
      className: 'kp_container',
      style: `
      background-color: rgba(0,0,0,0.8);
      opacity: 1;
      position: fixed;
      z-index: 10000;
      pointer-events: none;
      transition: all .3s;
      display: none;
      `
    });

    this.img_main = Object.assign(document.createElement('img'), {
      className: 'kp_img',
      style: `
      position: absolute;
      z-index: 10002;
      pointer-events: none;
      width: 100%;
      height: 100%;
      object-fit: ${get(_state_hover_pic) ? 'contain' : 'scale-down'};
      `
    });
    parent.appendChild(this.img_main);

    this.img_bg = Object.assign(document.createElement('img'), {
      className: 'kp_img',
      style: `
      position: absolute;
      z-index: 10001;
      pointer-events: none;
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: blur(8px);
      opacity: 0.9;
      `
    });
    parent.appendChild(this.img_bg);

    return parent;
  }

  /**
   * 处理鼠标进入事件
   * @param {MouseEvent} touch
   * @param {HTMLElement} imgEle
   */
  handleMouseOver(touch, imgEle) {
    if (!this.container) return;
    if (!imgEle) {
      console.warn('[FALL]: imgEle is null');
      return;
    }

    // 重置预览状态
    if (this.img_main) this.img_main.style.objectFit = get(_state_hover_pic) ? 'contain' : 'scale-down';

    if (get(_show_nexus_pic)) {
      const src = imgEle.getAttribute('src');
      if (src) {
        const kpImgElements = document.querySelectorAll('.kp_img');
        kpImgElements.forEach(kpImg => {
          kpImg.setAttribute('src', src);
        });
        this.imgElements = imgEle;
        this.updatePosition(touch);
        this.container.style.display = 'block';
      }
    }
  }

  /**
   * 处理鼠标移动事件
   * @param {MouseEvent} e
   */
  handleMouseMove(e) {
    if (this.container && this.container.style.display === 'block') {
      this.updatePosition(e);
    }
  }

  /**
   * 更新位置
   * @param {MouseEvent} e
   */
  updatePosition(e) {
    const cssPos = this.previewPosition(e);
    this.container.style.left = cssPos.left;
    this.container.style.top = cssPos.top;
    this.container.style.width = cssPos.width;
    this.container.style.height = cssPos.height;
  }

  /**
   * 获取图片位置
   * @param {MouseEvent} event
   * @returns {Object}
   */
  previewPosition(event) {
    // 获取图片的原始宽度和高度
    let imgWidth = 0,
      imgHeight = 0;

    try {
      imgWidth = this.imgElements.naturalWidth;
      imgHeight = this.imgElements.naturalHeight;
    } catch (error) {}

    // 计算图片的宽高比
    let ratio = imgWidth / imgHeight;

    // 设置图片的偏移量, 初始为 10
    let offsetX = 0;
    let offsetY = 0;

    // 定义视口缓冲距离
    const borderY = 10;
    const borderX = 10;

    // 获取鼠标位置
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // 获取视口宽高
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // 获取鼠标位置到视口上下左右的距离
    const distanceToTop = mouseY;
    const distanceToBottom = viewportHeight - mouseY;
    const distanceToLeft = mouseX;
    const distanceToRight = viewportWidth - mouseX;

    const containerSize = {
      bot: { width: viewportWidth, height: window.innerHeight - mouseY },
      top: { width: viewportWidth, height: mouseY },
      right: { width: window.innerWidth - mouseX, height: viewportHeight },
      left: { width: mouseX, height: viewportHeight }
    };

    /**定义可容纳最大比例 */
    let maxRatio = 0;
    /**定义可容纳最大比例的位置 */
    let maxPosition = '';

    const res = {
      top: { left: 0, top: 0, width: viewportWidth + 'px', height: mouseY + 'px' },
      bot: { left: 0, top: mouseY + 'px', width: viewportWidth + 'px', height: window.innerHeight - mouseY + 'px' },
      left: { left: 0, top: 0, width: mouseX + 'px', height: viewportHeight + 'px' },
      right: { left: mouseX + 'px', top: 0, width: window.innerWidth - mouseX + 'px', height: viewportHeight + 'px' }
    };

    for (const key in containerSize) {
      const currentRatio = Math.min(containerSize[key].width / imgWidth, containerSize[key].height / imgHeight);
      if (currentRatio > maxRatio) {
        maxRatio = currentRatio;
        maxPosition = key;
      }
      // res[key].ratio = currentRatio;
    }

    // console.log(`x: ${mouseX}, y: ${mouseY}, img: ${imgWidth}x${imgHeight} , max: ${maxPosition}`);
    // console.log(`res: `, res);
    // console.log(`containerSize: ${JSON.stringify(containerSize)}`);

    // 根据最大比例位置计算容器的位置和大小
    return res[maxPosition] || { left: 0, top: 0, width: 0, height: 0 };
  }

  /**
   * 清除预览
   */
  clearPreview() {
    document.querySelectorAll('.kp_img').forEach(kpImg => {
      kpImg.setAttribute('src', '');
    });
    if (this.container) this.container.style.display = 'none';
  }

  /**
   * 切换预览状态
   */
  changeState() {
    if (this.img_main) {
      let oldState = this.img_main.style.objectFit;
      // 让 state 相反
      this.img_main.style.objectFit = oldState == 'contain' ? 'scale-down' : 'contain';
    }
  }

  /**
   * 销毁组件
   */
  destroy() {
    if (this.container) {
      this.container.style.display = 'none';
      this.clearPreview();
    }
    // 取消订阅，防止内存泄漏
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
    }
  }
}

/**
 * export: 清除预览
 */
export function __clearPreview() {
  document.querySelectorAll('.kp_img').forEach(kpImg => {
    kpImg.setAttribute('src', '');
  });
  const _container = document.querySelector('.kp_container');
  if (_container) _container.style.display = 'none';
}

window.__clearPreview = __clearPreview;

// 创建单例实例
const hoverViewInstance = HoverView.getInstance();

// 导出单例实例
export default hoverViewInstance;
