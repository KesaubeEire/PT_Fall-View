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
    let existingContainer = document.querySelector('.kp_container');
    this.container = existingContainer || this.createPreview();
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
    let imgWidth = 0;
    let imgHeight = 0;
    try {
      imgWidth = this.imgElements.naturalWidth;
      imgHeight = this.imgElements.naturalHeight;
    } catch (error) {}

    // 计算图片的宽高比
    let ratio = imgWidth / imgHeight;

    // 设置图片的偏移量, 初始为 10
    let offsetX = 0;
    let offsetY = 0;

    // 获取鼠标位置
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // 获取视口宽高
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // 定义视口缓冲距离
    const borderY = 10;
    const borderX = 10;

    // 获取鼠标位置到视口上下左右的距离
    const distanceToTop = mouseY;
    const distanceToBottom = viewportHeight - mouseY;
    const distanceToLeft = mouseX;
    const distanceToRight = viewportWidth - mouseX;

    // 定义size对象
    const picSize = {
      width: imgWidth,
      height: imgHeight
    };
    const containerSize = {
      bot: {
        width: viewportWidth,
        height: distanceToBottom
      },
      top: {
        width: viewportWidth,
        height: distanceToTop
      },
      right: {
        width: distanceToRight,
        height: viewportHeight
      },
      left: {
        width: distanceToLeft,
        height: viewportHeight
      }
    };

    /**定义可容纳最大比例 */
    let maxRatio = 0;
    /**定义可容纳最大比例的位置 */
    let maxPosition = '';

    for (const key in containerSize) {
      if (Object.hasOwnProperty.call(containerSize, key)) {
        const element = containerSize[key];
        const currentRatio = Math.min(element.width / picSize.width, element.height / picSize.height);
        if (currentRatio > maxRatio) {
          maxRatio = currentRatio;
          maxPosition = key;
        }
      }
    }

    // 根据最大比例位置计算容器的位置和大小
    const result = {
      top: {
        left: 0,
        top: 0,
        width: viewportWidth + 'px',
        height: distanceToTop + 'px'
      },
      bot: {
        left: 0,
        top: distanceToTop + 'px',
        width: viewportWidth + 'px',
        height: distanceToBottom + 'px'
      },
      left: {
        left: 0,
        top: 0,
        width: distanceToLeft + 'px',
        height: viewportHeight + 'px'
      },
      right: {
        left: distanceToLeft + 'px',
        top: 0,
        width: distanceToRight + 'px',
        height: viewportHeight + 'px'
      },
      default: {
        left: 0,
        top: 0,
        width: 0,
        height: 0
      }
    };

    return maxPosition ? result[maxPosition] : result.default;
  }

  /**
   * 清除预览
   */
  clearPreview() {
    const kpImgElements = document.querySelectorAll('.kp_img');
    kpImgElements.forEach(kpImg => {
      kpImg.setAttribute('src', '');
    });
    this.container.style.display = 'none';
  }

  /**
   * 销毁组件
   */
  destroy() {
    if (this.buffer) {
      clearTimeout(this.buffer);
    }
    if (this.container) {
      this.container.style.display = 'none';
      this.clearPreview();
    }
  }
}

// 导出组件
export default HoverView;
