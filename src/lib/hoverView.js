/**
 * 悬浮大图组件
 */
import { get } from 'svelte/store';
import { _show_nexus_pic } from '@/stores';

export class HoverView {
  constructor() {
    this.container = null;
    this.imgElements = null;
    this.buffer = null;

    this.init(); // 自动初始化
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
    const parent = document.createElement('div');
    parent.className = 'kp_container';
    parent.style.backgroundColor = 'rgba(0,0,0,0.8)';
    parent.style.opacity = '1';
    parent.style.position = 'fixed';
    parent.style.zIndex = '10000';
    parent.style.pointerEvents = 'none';
    parent.style.transition = 'all .3s';
    parent.style.display = 'none';

    const img1 = document.createElement('img');
    img1.className = 'kp_img';
    img1.style.position = 'absolute';
    img1.style.zIndex = '10002';
    img1.style.pointerEvents = 'none';
    img1.style.width = '100%';
    img1.style.height = '100%';
    img1.style.objectFit = 'contain';
    parent.appendChild(img1);

    const img2 = document.createElement('img');
    img2.className = 'kp_img';
    img2.style.position = 'absolute';
    img2.style.zIndex = '10001';
    img2.style.pointerEvents = 'none';
    img2.style.width = '100%';
    img2.style.height = '100%';
    img2.style.objectFit = 'cover';
    img2.style.filter = 'blur(8px)';
    img2.style.opacity = '0.9';
    parent.appendChild(img2);

    return parent;
  }

  /**
   * 处理鼠标进入事件
   * @param {MouseEvent} e
   * @param {HTMLElement} imgEle
   */
  handleMouseOver(e, imgEle) {
    if (get(_show_nexus_pic)) {
      const src = imgEle.getAttribute('src');
      if (src) {
        const kpImgElements = document.querySelectorAll('.kp_img');
        kpImgElements.forEach(kpImg => {
          kpImg.setAttribute('src', src);
        });
        this.updatePosition(e);
        this.imgElements = imgEle;
        this.container.style.display = 'block';
      }
    }
  }

  /**
   * 处理鼠标移动事件
   * @param {MouseEvent} e
   */
  handleMouseMove(e) {
    if (this.container.style.display === 'block') {
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

    for (const key in containerSize) {
      const currentRatio = Math.min(containerSize[key].width / imgWidth, containerSize[key].height / imgHeight);
      if (currentRatio > maxRatio) {
        maxRatio = currentRatio;
        maxPosition = key;
      }
    }

    // 根据最大比例位置计算容器的位置和大小
    return (
      {
        top: { left: 0, top: 0, width: viewportWidth + 'px', height: mouseY + 'px' },
        bot: { left: 0, top: mouseY + 'px', width: viewportWidth + 'px', height: window.innerHeight - mouseY + 'px' },
        left: { left: 0, top: 0, width: mouseX + 'px', height: viewportHeight + 'px' },
        right: { left: mouseX + 'px', top: 0, width: window.innerWidth - mouseX + 'px', height: viewportHeight + 'px' }
      }[maxPosition] || { left: 0, top: 0, width: 0, height: 0 }
    );
  }

  /**
   * 清除预览
   */
  clearPreview() {
    document.querySelectorAll('.kp_img').forEach(kpImg => {
      kpImg.setAttribute('src', '');
    });
    this.container.style.display = 'none';
  }

  /**
   * 销毁组件
   */
  destroy() {
    if (this.buffer) clearTimeout(this.buffer);
    if (this.container) {
      this.container.style.display = 'none';
      clearPreview();
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
  _container.style.display = 'none';
}

window.__clearPreview = __clearPreview;

// 导出组件
export default HoverView;
