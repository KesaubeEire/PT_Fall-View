<script>
  import { onMount, onDestroy } from 'svelte';

  //---------------------------------------------
  /** 父传值: 种子信息*/
  export let torrentInfo;

  //---------------------------------------------
  // ## 图片懒加载
  // 默认pic
  const placeholder = 'https://static.m-team.cc/static/media/logo.80b63235eaf702e44a8d.png';
  // 真实pic
  let picSrc = torrentInfo.imageList[0] || placeholder;
  // pic dom
  let imgElement;
  // observer
  let observer;

  // 加载真实图片
  const loadRealImage = () => {
    if (picSrc) {
      imgElement.src = picSrc;
      // imgElement.classList.add('loaded'); // NOTE: 这里没起作用, 强行改 opacity 了
      imgElement.style.opacity = 1;
      // console.log(torrentInfo.id + ` Loaded.`);
    }
  };

  // 初始化观察器
  onMount(() => {
    observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            loadRealImage();
            observer.unobserve(imgElement); // 加载后停止观察
          }
        });
      },
      {
        rootMargin: '100px' // 提前100px加载
      }
    );

    if (imgElement) observer.observe(imgElement);
  });

  // 清理观察器
  onDestroy(() => {
    if (observer) observer.disconnect();
  });
</script>

<div class="card_holder">
  <!-- <div class="card_title">{`<${torrentInfo.index}> ` + torrentInfo.name}</div> -->
  <div class="card_title">{`<${torrentInfo.index}> ` + torrentInfo.smallDescr}</div>
  <div class="card_pic">
    <!-- <img src={torrentInfo.imageList[0]} alt={torrentInfo.imageList[0]} /> -->

    <img
      bind:this={imgElement}
      src={placeholder}
      data-src={picSrc}
      on:error={() => {
        // 错误处理
        // console.log(torrentInfo.index);
        if (imgElement) imgElement.src = placeholder;
        else {
          console.log(`<${torrentInfo.index}>[${torrentInfo.id}] imgElement 丢失.`);
        }
      }}
      class="lazy-image"
      alt={torrentInfo.id}
    />
  </div>
</div>

<style scoped>
  .card_pic img {
    width: 100%;
  }
  .lazy-image {
    opacity: 0.2;
    transition: opacity 0.5s ease;
  }
  /* FIXME: 不知道为啥这里不起作用 */
  .lazy-image.loaded {
    opacity: 1;
  }
</style>
