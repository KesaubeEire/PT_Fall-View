// ==UserScript==
// @name            PT瀑布流视图
// @name:en         PT_Fall-View
// @namespace       vite-plugin-monkey
// @version         0.3.13
// @author          Kesa
// @description     PT瀑布流视图(2025重构)
// @description:en  PT Fall/Masonry View (restructured 2025)
// @license         MIT
// @icon            https://avatars.githubusercontent.com/u/23617963
// @match           https://kp.m-team.cc/*
// @match           https://zp.m-team.io/*
// @match           https://xp.m-team.cc/*
// @match           https://ap.m-team.cc/*
// @match           https://next.m-team.cc/*
// @match           https://xp.m-team.io/*
// @match           https://test2.m-team.cc/*
// @match           https://ob.m-team.cc/*
// @exclude         */offers.php*
// @exclude         */index.php*
// @exclude         */forums.php*
// @exclude         */viewrequests.php*
// @exclude         */seek.php*
// @exclude         *m-team*/detail/*
// @exclude         *m-team*/showcase*
// @exclude         *m-team*/showcaseDetail*
// @grant           none
// @run-at          document-start
// ==/UserScript==

(n=>{if(typeof GM_addStyle=="function"){GM_addStyle(n);return}const e=document.createElement("style");e.textContent=n,document.head.append(e)})(` button:focus,
button:focus-visible {
  /* outline: 2px auto -webkit-focus-ring-color; */
  /* outline: none; */
  outline: 3px solid var(--bg-3);
}

.Fall_DOM{
  padding-bottom: 10px; /* \u786E\u4FDD\u5E95\u90E8\u6709\u8DB3\u591F\u7684\u7A7A\u95F4 */
  background-color: var(--bg-1);
}

#_fallHolder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 10px;
  z-index: 101;
}

#_shield {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  cursor: help;
  transition: background-color 0.3s ease;
}
#_shield:hover {
  background-color: rgba(0, 0, 0, 0.9);
}

  :where(div.masonry.svelte-b2jtby) {
    display: flex;
    justify-content: center;
    overflow-wrap: anywhere;
    box-sizing: border-box;
  }
  :where(div.masonry.svelte-b2jtby div.col:where(.svelte-b2jtby)) {
    display: grid;
    height: max-content;
    width: 100%;
  }

@-webkit-keyframes notyf-fadeinup{0%{opacity:0;transform:translateY(25%)}to{opacity:1;transform:translateY(0)}}@keyframes notyf-fadeinup{0%{opacity:0;transform:translateY(25%)}to{opacity:1;transform:translateY(0)}}@-webkit-keyframes notyf-fadeinleft{0%{opacity:0;transform:translateX(25%)}to{opacity:1;transform:translateX(0)}}@keyframes notyf-fadeinleft{0%{opacity:0;transform:translateX(25%)}to{opacity:1;transform:translateX(0)}}@-webkit-keyframes notyf-fadeoutright{0%{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(25%)}}@keyframes notyf-fadeoutright{0%{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(25%)}}@-webkit-keyframes notyf-fadeoutdown{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(25%)}}@keyframes notyf-fadeoutdown{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(25%)}}@-webkit-keyframes ripple{0%{transform:scale(0) translateY(-45%) translateX(13%)}to{transform:scale(1) translateY(-45%) translateX(13%)}}@keyframes ripple{0%{transform:scale(0) translateY(-45%) translateX(13%)}to{transform:scale(1) translateY(-45%) translateX(13%)}}.notyf{position:fixed;top:0;left:0;height:100%;width:100%;color:#fff;z-index:9999;display:flex;flex-direction:column;align-items:flex-end;justify-content:flex-end;pointer-events:none;box-sizing:border-box;padding:20px}.notyf__icon--error,.notyf__icon--success{height:21px;width:21px;background:#fff;border-radius:50%;display:block;margin:0 auto;position:relative}.notyf__icon--error:after,.notyf__icon--error:before{content:"";background:currentColor;display:block;position:absolute;width:3px;border-radius:3px;left:9px;height:12px;top:5px}.notyf__icon--error:after{transform:rotate(-45deg)}.notyf__icon--error:before{transform:rotate(45deg)}.notyf__icon--success:after,.notyf__icon--success:before{content:"";background:currentColor;display:block;position:absolute;width:3px;border-radius:3px}.notyf__icon--success:after{height:6px;transform:rotate(-45deg);top:9px;left:6px}.notyf__icon--success:before{height:11px;transform:rotate(45deg);top:5px;left:10px}.notyf__toast{display:block;overflow:hidden;pointer-events:auto;-webkit-animation:notyf-fadeinup .3s ease-in forwards;animation:notyf-fadeinup .3s ease-in forwards;box-shadow:0 3px 7px 0 rgba(0,0,0,.25);position:relative;padding:0 15px;border-radius:2px;max-width:300px;transform:translateY(25%);box-sizing:border-box;flex-shrink:0}.notyf__toast--disappear{transform:translateY(0);-webkit-animation:notyf-fadeoutdown .3s forwards;animation:notyf-fadeoutdown .3s forwards;-webkit-animation-delay:.25s;animation-delay:.25s}.notyf__toast--disappear .notyf__icon,.notyf__toast--disappear .notyf__message{-webkit-animation:notyf-fadeoutdown .3s forwards;animation:notyf-fadeoutdown .3s forwards;opacity:1;transform:translateY(0)}.notyf__toast--disappear .notyf__dismiss{-webkit-animation:notyf-fadeoutright .3s forwards;animation:notyf-fadeoutright .3s forwards;opacity:1;transform:translateX(0)}.notyf__toast--disappear .notyf__message{-webkit-animation-delay:.05s;animation-delay:.05s}.notyf__toast--upper{margin-bottom:20px}.notyf__toast--lower{margin-top:20px}.notyf__toast--dismissible .notyf__wrapper{padding-right:30px}.notyf__ripple{height:400px;width:400px;position:absolute;transform-origin:bottom right;right:0;top:0;border-radius:50%;transform:scale(0) translateY(-51%) translateX(13%);z-index:5;-webkit-animation:ripple .4s ease-out forwards;animation:ripple .4s ease-out forwards}.notyf__wrapper{display:flex;align-items:center;padding-top:17px;padding-bottom:17px;padding-right:15px;border-radius:3px;position:relative;z-index:10}.notyf__icon{width:22px;text-align:center;font-size:1.3em;opacity:0;-webkit-animation:notyf-fadeinup .3s forwards;animation:notyf-fadeinup .3s forwards;-webkit-animation-delay:.3s;animation-delay:.3s;margin-right:13px}.notyf__dismiss{position:absolute;top:0;right:0;height:100%;width:26px;margin-right:-15px;-webkit-animation:notyf-fadeinleft .3s forwards;animation:notyf-fadeinleft .3s forwards;-webkit-animation-delay:.35s;animation-delay:.35s;opacity:0}.notyf__dismiss-btn{background-color:rgba(0,0,0,.25);border:none;cursor:pointer;transition:opacity .2s ease,background-color .2s ease;outline:none;opacity:.35;height:100%;width:100%}.notyf__dismiss-btn:after,.notyf__dismiss-btn:before{content:"";background:#fff;height:12px;width:2px;border-radius:3px;position:absolute;left:calc(50% - 1px);top:calc(50% - 5px)}.notyf__dismiss-btn:after{transform:rotate(-45deg)}.notyf__dismiss-btn:before{transform:rotate(45deg)}.notyf__dismiss-btn:hover{opacity:.7;background-color:rgba(0,0,0,.15)}.notyf__dismiss-btn:active{opacity:.8}.notyf__message{vertical-align:middle;position:relative;opacity:0;-webkit-animation:notyf-fadeinup .3s forwards;animation:notyf-fadeinup .3s forwards;-webkit-animation-delay:.25s;animation-delay:.25s;line-height:1.5em}@media only screen and (max-width:480px){.notyf{padding:0}.notyf__ripple{height:600px;width:600px;-webkit-animation-duration:.5s;animation-duration:.5s}.notyf__toast{max-width:none;border-radius:0;box-shadow:0 -2px 7px 0 rgba(0,0,0,.13);width:100%}.notyf__dismiss{width:56px}}

  .card_holder.svelte-18y66sj {
    border-radius: var(--borderRadius);
    overflow: hidden;
  }

  /* \u5361\u7247\u5206\u7C7B */
  .card-category.svelte-18y66sj {
    height: 20px;
    padding: 0 2px;
    border: 1px;
    background: black;
    color: white;
    font-weight: 900;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* \u5361\u7247\u79CD\u7C7Btag\u9884\u89C8\u56FE */
  .card_category-img.svelte-18y66sj {
    /* height: 18px; */
    height: 35px;
    width: 28px;

    /* background-size: 100% 141%; */
    background-position: center top;

    /* padding-left: 5%; */
    padding-top: 6px;
  }

  .card_category_square.svelte-18y66sj {
    width: 40px;
    height: 40px;
    padding-top: 0;
    border-radius: 10px;
  }

  /* (unused) .card_new_page_highlight {
    /* position: absolute; *\\/
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(8, 68, 0, 0.5);
    color: white;
    text-align: center;
    padding: 8px 8px;
  }*/

  .lazy-image.svelte-18y66sj {
    opacity: 0.2;
    transition: opacity 0.5s ease;
  }
  /* (unused) .lazy-image.loaded {
    opacity: 1;
  }*/
  .card_info.svelte-18y66sj {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding: 0px 8px;

    & .card_info-item:where(.svelte-18y66sj) {
      display: flex;
      justify-content: space-around;
      align-items: center;

      /* min-height: 32px; */
      width: 100%;
    }

    & .card_info__dl_and_cl:where(.svelte-18y66sj) {
      display: flex;
      justify-content: center;
      align-items: center;

      height: 32px;
    }

    & .card_info__statistics:where(.svelte-18y66sj) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .card_info__topping.svelte-18y66sj {
    display: flex;
    /* justify-content: center; */
    align-items: center;
  }

  .__main_title.svelte-18y66sj {
    white-space: pre-wrap;
    /* word-wrap: break-word; */
    /* overflow-wrap: break-word; */
    /* font-size: 16px; */
    font-weight: bold;
    text-align: center;
    display: flex;
    justify-content: center;
    padding-left: 0.5rem;
    padding-right: 0.5rem;

    &:hover {
      text-decoration: underline;
    }
  }

  /* \u6807\u7B7E */
  .cl-tags.svelte-18y66sj {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    gap: 2px;

    padding-top: 4px;
    padding-bottom: 4px;
  }
  ._tag.svelte-18y66sj {
    /* padding: 1px 6px; */
    height: 1.3em;
    line-height: 1.3em;
    padding: 0 0.5em;
    border-radius: 6px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    font-size: 12px;
  }
  ._tag_diy.svelte-18y66sj {
    color: #ffffff;
    background-color: rgb(90, 189, 72);
  }
  ._tag_dub.svelte-18y66sj {
    color: #ffffff;
    background-color: rgb(90, 59, 20);
  }
  ._tag_sub.svelte-18y66sj {
    color: #ffffff;
    background-color: rgb(59, 74, 127);
  }
  ._tag_discount_50.svelte-18y66sj {
    background-color: rgb(255, 85, 0);
    color: #ffffff;
  }
  ._tag_discount_free.svelte-18y66sj {
    background-color: rgb(16, 142, 233);
    color: #ffffff;
  }

  .card_pic.svelte-18y66sj {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    /* flex-direction: column; */

    background-color: var(--cateColor);
  }

  .card_pic.svelte-18y66sj img:where(.svelte-18y66sj) {
    width: 100%;
    height: 100%;
  }

  .pic_error.svelte-18y66sj {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 10px;
    gap: 10px;
    line-height: 24px;
  }

  /* \u5361\u7247\u7D22\u5F15 */
  .card-index.svelte-18y66sj {
    position: absolute;
    top: 0;
    left: 0;
    padding: 4px 9px 4px 9px;
    margin: 0;
    /* height: 20px; */
    line-height: 16px;
    font-size: 16px;
    font-weight: bold;

    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    /* border-top-right-radius: 100px; */
    /* border-bottom-right-radius: 100px; */

    z-index: 2;

    display: flex;
    align-items: center;

    pointer-events: none;
  }

  /* \u5361\u7247\u7D22\u5F15_\u53F3 */
  .card-index-right.svelte-18y66sj {
    left: initial;
    right: 0;
    padding: 4px 4px 4px 8px;

    background-color: rgb(0, 0, 0);
    color: white;

    /* border-top-left-radius: 20px; */
    /* border-bottom-left-radius: 20px; */
  }

  /* \u60AC\u6D6E\u9884\u89C8: \u5C40\u90E8\u89E6\u53D1\u5668 */
  .hover-trigger.svelte-18y66sj {
    position: absolute;
    top: 28px;
    right: 8px;
    /* padding-right: 19px; */
    /* padding-left: 2px; */
    padding: 0;
    width: 42px;
    margin: 0;
    height: 40px;
    line-height: 16px;
    font-size: 16px;

    /* background-color: rgb(255, 187, 16); */

    opacity: 0.5;

    /* color: yellow; */
    /* border-top-right-radius: 0px; */
    /* border-bottom-left-radius: 100px; */
    border-radius: 9999px;

    display: flex;
    align-items: center;

    /* pointer-events: none; */

    z-index: 2;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.8;
    }
  }

  /* \u6DFB\u52A0\u60AC\u6D6E\u6548\u679C\u76F8\u5173\u6837\u5F0F */
  .hover-overlay.svelte-18y66sj {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s ease;
    /* pointer-events: none; */
    z-index: 1;
  }

  .overlay-content.svelte-18y66sj {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.9) 20%, transparent 100%);
    background: rgba(255, 255, 255, 0.9);
    /* background-color: rgba(0, 0, 0, 0.5); */

    padding: 0 0px 2px;
    /* border-radius: 4px; */
    color: #333;
    font-size: 14px;
    white-space: nowrap;

    display: flex;
    flex-direction: column;

    & .card_info-item:where(.svelte-18y66sj) {
      display: flex;
      justify-content: center;
      align-items: center;

      padding: 2px;

      padding-left: 8px;
      padding-right: 8px;
    }

    & .__main_title:where(.svelte-18y66sj) {
      text-align: center;
      white-space: pre-wrap;
      /* word-wrap: break-word; */
      /* overflow-wrap: break-word; */

      /* font-size: 16px; */
      font-weight: bold;

      &:hover {
        text-decoration: underline;
      }
    }

    & .__sub_title:where(.svelte-18y66sj) {
      white-space: pre-wrap;
      /* word-wrap: break-word; */
      /* overflow-wrap: break-word; */
      overflow: hidden;
    }

    & .card_info__statistics:where(.svelte-18y66sj) {
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      height: 32px;
    }
  }

  .__center.svelte-18y66sj {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .__inner_index_and_size.svelte-18y66sj {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    width: 100%;
    left: 0;
    top: -24px;
  }

  .__inner_index.svelte-18y66sj {
    position: relative;
    width: fit-content;

    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .__inner_size.svelte-18y66sj {
    position: relative;
    width: fit-content;

    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .__iframe_button.svelte-18y66sj {
    flex: 1;
    height: 24px;
    padding: 4px 8px;
    margin: 0;
    border: none;
    background: none;
    outline: none;
    appearance: none;
    box-sizing: border-box;
    white-space: nowrap;
    opacity: 1;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.7;
    }
  }


  .fall_holder.svelte-1vmncc1 {
    background-color: var(--bg-1);

    overflow: hidden;
  }

  .text_center.svelte-1vmncc1 {
    text-align: center;
    padding: 8px 0;
    margin: 0;
  }


  .__btn.svelte-1a87xm5 {
    background-color: var(--bg-2);
    color: white;
    border: none;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 14px;
    transition: background-color 0.3s;
    cursor: pointer;
  }

  .__btnWide.svelte-1a87xm5 {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .__btn.svelte-1a87xm5:hover {
    background-color: var(--hover);
  }

  .modal-overlay.svelte-1a87xm5 {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 25000;
  }

  .modal-content.svelte-1a87xm5 {
    background: var(--bg-3);
    border-radius: 8px;
    border: 4px solid var(--bg-2);
    /* padding: 12px; */
    width: 500px;
    max-width: 90vw;
    max-height: 80vh;
    overflow-y: auto;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .modal-header.svelte-1a87xm5 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    border-bottom: 4px solid var(--bg-2);
  }

  .modal-header.svelte-1a87xm5 h3:where(.svelte-1a87xm5) {
    margin: 0;
    font-size: 16px;
  }

  .close-btn.svelte-1a87xm5 {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    padding: 0;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-body.svelte-1a87xm5 {
    padding: 0px 20px 10px;
    line-height: 1.6;
  }

  .modal-body.svelte-1a87xm5 h4:where(.svelte-1a87xm5) {
    margin: 16px 0 8px 0;
    color: #1890ff;
  }

  .modal-body.svelte-1a87xm5 p:where(.svelte-1a87xm5) {
    margin: 0 0 12px 0;
  }

  .modal-code.svelte-1a87xm5 {
    background-color: var(--bg-1);
    padding: 4px;
    border-radius: 4px;
  }


  .switch-container.svelte-18ntgfp {
    display: inline-block;
    cursor: pointer;
  }

  .switch-background.svelte-18ntgfp {
    position: relative;
    width: 48px;
    height: 24px;
    background-color: #e0e0e0;
    border-radius: 12px;
    transition: background-color 0.2s;
  }

  .switch-slider.svelte-18ntgfp {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    top: 2px;
    left: 2px;
    transition: all 0.2s;
  }

  .switch-slider.checked.svelte-18ntgfp {
    transform: translateX(24px);
    /* // \u6DFB\u52A0\u84DD\u8272\u80CC\u666F */
    background-color: #2196f3;
  }

  .switch-background.svelte-18ntgfp:hover {
    background-color: #d0d0d0;
  }

  .switch-container.svelte-18ntgfp:active .switch-slider:where(.svelte-18ntgfp) {
    transform: translateX(24px) scale(0.95);
  }


  .flowP.svelte-4gkzar {
    position: fixed;

    width: 80px;
    max-height: 300px;

    border-radius: 12px;
    overflow: hidden;

    padding-bottom: 8px;
    padding: 0px 0px 8px;

    /* background-color: #fff4; */
    background-color: var(--bg-1);
    transition:
      opacity 0.3s,
      border 0.3s;

    font-size: 16px;

    opacity: 0.7;

    z-index: 15000;

    border: 2px solid transparent;
    &:hover {
      opacity: 1;
      border: 2px solid var(--isFallView);
    }
  }

  .flowPDragger.svelte-4gkzar {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 14px;
    font-size: 12px;
    height: 14px;
    transition: background-color 0.3s ease-in-out;
    background-color: var(--isFallView);

    &:hover {
      cursor: move; /* \u8BBE\u7F6E\u9F20\u6807\u60AC\u505C\u65F6\u7684\u56FE\u6807\u4E3A\u79FB\u52A8 */
    }
  }

  .flowPHolder.svelte-4gkzar {
    /* position: relative; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 2px;
    gap: 4px;
  }

  .flowBtn.svelte-4gkzar {
    padding: 4px;
    border-radius: 4px;
    border: 2px solid transparent;
    transition: all 0.2s;

    font-size: 14px;
    /* font-weight: bold; */

    width: 72px;

    background-color: var(--bg-2);
    color: var(--get-text-color);

    &:hover {
      border-color: var(--bg-3);
    }

    &:active {
      transform: translateY(4px);
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    }

    & .flowBtn_text:where(.svelte-4gkzar) {
      padding-top: 3px;
      padding-bottom: 3px;
    }

    /* @media (prefers-color-scheme: dark) {
      background-color: #2a2a2a;
      color: #ffffff;

      &:hover {
        background-color: #3a3a3a;
        color: #ffffff;
      }
    } */
  }

  /* \u914D\u7F6E\u83DC\u5355\u6837\u5F0F */
  .config-menu-overlay.svelte-4gkzar {
    color: var(--get-text-color);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: flex-end;
    z-index: 20000;
  }

  .config-menu.svelte-4gkzar {
    background-color: #ffffff;
    width: 300px;
    height: 100vh;
    padding: 20px;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
    overflow-y: auto;
  }

  .config-menu-header.svelte-4gkzar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }

  .close-btn.svelte-4gkzar {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    padding: 0 8px;
    transform: translateY(-4px);
  }

  .config-menu-content.svelte-4gkzar {
    display: flex;
    flex-direction: column;
    gap: 4px;

    font-size: 14px;

    & h3:where(.svelte-4gkzar) {
      margin-top: 28px;
    }
  }

  .config-item.svelte-4gkzar {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .config-item.svelte-4gkzar span:where(.svelte-4gkzar) {
    display: flex;
    justify-content: end;
  }

  .config-item.svelte-4gkzar ._single_item:where(.svelte-4gkzar) {
    padding-right: 8px;
    flex: 1;
  }

  .config-item.svelte-4gkzar input:where(.svelte-4gkzar) {
    width: 120px;
  }


  div#_iframe_holder.svelte-126sfo0 {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 38, 38, 0.607);
    z-index: 30000;

    display: flex;
  }

  div._iframe_back.svelte-126sfo0 {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  div._iframe_parent.svelte-126sfo0 {
    position: relative;
    /* width: 1246px; */
    height: 96%;
    margin: auto;
    display: flex;
    align-items: center;
  }

  div._iframe_parent.svelte-126sfo0 iframe:where(.svelte-126sfo0) {
    height: 100%;
    border-radius: 20px;
    user-select: none;
  }

  ._iframeCloseBtn.svelte-126sfo0 {
    width: 40px;
    height: 40px;
    background: white;

    position: absolute;

    top: 10px;
    right: 10px;

    border-radius: 40px;
    transition: all 0.5s;

    z-index: 30001;

    /* \u60AC\u6D6E */
    &:hover {
      opacity: 0.7;
      transform: scale(1.2);
    }
    /* \u70B9\u51FB(\u957F\u6309\u624D\u660E\u663E) */
    &:active {
      opacity: 0.9;
      transform: scale(1.9);
    }
  }

  .resize-handle.svelte-126sfo0 {
    position: absolute;
    width: 16px;
    height: 100%;
    background: var(--textColor2);
    cursor: col-resize;
    transition: all 0.2s ease;
    z-index: 1;
    opacity: 0.4;

    &:hover {
      opacity: 0.6;
    }

    &:active {
      opacity: 0.8;
      background: var(--textColor1);
    }
  }

  .resize-handle-left.svelte-126sfo0 {
    left: -16px;
    border-radius: 6px 0 0 6px;
  }

  .resize-handle-right.svelte-126sfo0 {
    right: -16px;
    border-radius: 0 6px 6px 0;
  }

  .iframe-overlay.svelte-126sfo0 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 30001;
    user-select: none;
  } `);

(function () {
      'use strict';

      var qs=Object.defineProperty;var $i=e=>{throw TypeError(e)};var Bs=(e,t,r)=>t in e?qs(e,t,{enumerable:true,configurable:true,writable:true,value:r}):e[t]=r;var Wn=(e,t,r)=>Bs(e,typeof t!="symbol"?t+"":t,r),Gn=(e,t,r)=>t.has(e)||$i("Cannot "+r);var Ke=(e,t,r)=>(Gn(e,t,"read from private field"),r?r.call(e):t.get(e)),_r=(e,t,r)=>t.has(e)?$i("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),Un=(e,t,r,n)=>(Gn(e,t,"write to private field"),t.set(e,r),r),Ai=(e,t,r)=>(Gn(e,t,"access private method"),r);var yn=Array.isArray,_i=Array.from,Zs=Object.defineProperty,xt=Object.getOwnPropertyDescriptor,Qi=Object.getOwnPropertyDescriptors,Ws=Object.prototype,Gs=Array.prototype,hi=Object.getPrototypeOf;function Us(e){return typeof e=="function"}const je=()=>{};function Xs(e){return e()}function Kn(e){for(var t=0;t<e.length;t++)e[t]();}const qe=2,Ji=4,Ar=8,bn=16,Be=32,Tr=64,ei=128,Lt=256,cn=512,Ve=1024,Et=2048,Vr=4096,Ue=8192,Wt=16384,Ki=32768,wn=65536,Ys=1<<17,Qs=1<<19,es=1<<20,Ct=Symbol("$state"),Js=Symbol("legacy props"),Ks=Symbol("");function ts(e){return e===this.v}function rs(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function gi(e){return !rs(e,this.v)}function ea(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ta(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ra(e){throw new Error("https://svelte.dev/e/effect_orphan")}function na(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ia(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function sa(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function aa(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function oa(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function la(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let Gt=false;function ca(){Gt=true;}const pi=1,mi=2,ns=4,ua=8,va=16,da=1,fa=2,_a=4,ha=8,ga=16,pa=1,ma=2,ya=4,ba=1,wa=2,$e=Symbol();function ze(e,t){var r={f:0,v:e,reactions:null,equals:ts,version:0};return r}function xn(e,t=false){var n;const r=ze(e);return t||(r.equals=gi),Gt&&se!==null&&se.l!==null&&((n=se.l).s??(n.s=[])).push(r),r}function q(e,t=false){return xa(xn(e,t))}function xa(e){return te!==null&&te.f&qe&&(Xe===null?Ta([e]):Xe.push(e)),e}function Ie(e,t){return L(e,z(()=>s(e))),t}function L(e,t){return te!==null&&En()&&te.f&(qe|bn)&&(Xe===null||!Xe.includes(e))&&la(),ti(e,t)}function ti(e,t){return e.equals(t)||(e.v=t,e.version=bs(),is(e,Et),En()&&X!==null&&X.f&Ve&&!(X.f&Be)&&(Le!==null&&Le.includes(e)?(Ze(X,Et),Mn(X)):ut===null?Va([e]):ut.push(e))),t}function is(e,t){var r=e.reactions;if(r!==null)for(var n=En(),i=r.length,o=0;o<i;o++){var l=r[o],v=l.f;v&Et||!n&&l===X||(Ze(l,t),v&(Ve|Lt)&&(v&qe?is(l,Vr):Mn(l)));}}let ss=false;function Pt(e,t=null,r){if(typeof e!="object"||e===null||Ct in e)return e;const n=hi(e);if(n!==Ws&&n!==Gs)return e;var i=new Map,o=yn(e),l=ze(0);o&&i.set("length",ze(e.length));var v;return new Proxy(e,{defineProperty(f,d,c){(!("value"in c)||c.configurable===false||c.enumerable===false||c.writable===false)&&sa();var a=i.get(d);return a===void 0?(a=ze(c.value),i.set(d,a)):L(a,Pt(c.value,v)),true},deleteProperty(f,d){var c=i.get(d);if(c===void 0)d in f&&i.set(d,ze($e));else {if(o&&typeof d=="string"){var a=i.get("length"),u=Number(d);Number.isInteger(u)&&u<a.v&&L(a,u);}L(c,$e),Ti(l);}return  true},get(f,d,c){var m;if(d===Ct)return e;var a=i.get(d),u=d in f;if(a===void 0&&(!u||(m=xt(f,d))!=null&&m.writable)&&(a=ze(Pt(u?f[d]:$e,v)),i.set(d,a)),a!==void 0){var _=s(a);return _===$e?void 0:_}return Reflect.get(f,d,c)},getOwnPropertyDescriptor(f,d){var c=Reflect.getOwnPropertyDescriptor(f,d);if(c&&"value"in c){var a=i.get(d);a&&(c.value=s(a));}else if(c===void 0){var u=i.get(d),_=u==null?void 0:u.v;if(u!==void 0&&_!==$e)return {enumerable:true,configurable:true,value:_,writable:true}}return c},has(f,d){var _;if(d===Ct)return  true;var c=i.get(d),a=c!==void 0&&c.v!==$e||Reflect.has(f,d);if(c!==void 0||X!==null&&(!a||(_=xt(f,d))!=null&&_.writable)){c===void 0&&(c=ze(a?Pt(f[d],v):$e),i.set(d,c));var u=s(c);if(u===$e)return  false}return a},set(f,d,c,a){var I;var u=i.get(d),_=d in f;if(o&&d==="length")for(var m=c;m<u.v;m+=1){var p=i.get(m+"");p!==void 0?L(p,$e):m in f&&(p=ze($e),i.set(m+"",p));}u===void 0?(!_||(I=xt(f,d))!=null&&I.writable)&&(u=ze(void 0),L(u,Pt(c,v)),i.set(d,u)):(_=u.v!==$e,L(u,Pt(c,v)));var N=Reflect.getOwnPropertyDescriptor(f,d);if(N!=null&&N.set&&N.set.call(a,c),!_){if(o&&typeof d=="string"){var C=i.get("length"),y=Number(d);Number.isInteger(y)&&y>=C.v&&L(C,y+1);}Ti(l);}return  true},ownKeys(f){s(l);var d=Reflect.ownKeys(f).filter(u=>{var _=i.get(u);return _===void 0||_.v!==$e});for(var[c,a]of i)a.v!==$e&&!(c in f)&&d.push(c);return d},setPrototypeOf(){aa();}})}function Ti(e,t=1){L(e,e.v+t);}var Er,as,os;function Ca(){if(Er===void 0){Er=window;var e=Element.prototype,t=Node.prototype;as=xt(t,"firstChild").get,os=xt(t,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0;}}function yi(e=""){return document.createTextNode(e)}function Dt(e){return as.call(e)}function Cn(e){return os.call(e)}function h(e,t){return Dt(e)}function Te(e,t){{var r=Dt(e);return r instanceof Comment&&r.data===""?Cn(r):r}}function g(e,t=1,r=false){let n=e;for(;t--;)n=Cn(n);return n}function ka(e){e.textContent="";}function un(e){var t=qe|Et;X===null?t|=Lt:X.f|=es;var r=te!==null&&te.f&qe?te:null;const n={children:null,ctx:se,deps:null,equals:ts,f:t,fn:e,reactions:null,v:null,version:0,parent:r??X};return r!==null&&(r.children??(r.children=[])).push(n),n}function Lr(e){const t=un(e);return t.equals=gi,t}function ls(e){var t=e.children;if(t!==null){e.children=null;for(var r=0;r<t.length;r+=1){var n=t[r];n.f&qe?bi(n):vt(n);}}}function Ea(e){for(var t=e.parent;t!==null;){if(!(t.f&qe))return t;t=t.parent;}return null}function cs(e){var t,r=X;De(Ea(e));try{ls(e),t=ws(e);}finally{De(r);}return t}function us(e){var t=cs(e),r=(yt||e.f&Lt)&&e.deps!==null?Vr:Ve;Ze(e,r),e.equals(t)||(e.v=t,e.version=bs());}function bi(e){ls(e),Nr(e,0),Ze(e,Wt),e.v=e.children=e.deps=e.ctx=e.reactions=null;}function vs(e){X===null&&te===null&&ra(),te!==null&&te.f&Lt&&ta(),ki&&ea();}function La(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e);}function Ut(e,t,r,n=true){var i=(e&Tr)!==0,o=X,l={ctx:se,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|Et,first:null,fn:t,last:null,next:null,parent:i?null:o,prev:null,teardown:null,transitions:null,version:0};if(r){var v=zt;try{Vi(!0),Or(l),l.f|=Ki;}catch(c){throw vt(l),c}finally{Vi(v);}}else t!==null&&Mn(l);var f=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&es)===0;if(!f&&!i&&n&&(o!==null&&La(l,o),te!==null&&te.f&qe)){var d=te;(d.children??(d.children=[])).push(l);}return l}function wi(e){const t=Ut(Ar,null,false);return Ze(t,Ve),t.teardown=e,t}function ri(e){vs();var t=X!==null&&(X.f&Be)!==0&&se!==null&&!se.m;if(t){var r=se;(r.e??(r.e=[])).push({fn:e,effect:X,reaction:te});}else {var n=Ir(e);return n}}function Ma(e){return vs(),zr(e)}function Na(e){const t=Ut(Tr,e,true);return (r={})=>new Promise(n=>{r.outro?vn(t,()=>{vt(t),n(void 0);}):(vt(t),n(void 0));})}function Ir(e){return Ut(Ji,e,false)}function Ae(e,t){var r=se,n={effect:null,ran:false};r.l.r1.push(n),n.effect=zr(()=>{e(),!n.ran&&(n.ran=true,L(r.l.r2,true),z(t));});}function Pr(){var e=se;zr(()=>{if(s(e.l.r2)){for(var t of e.l.r1){var r=t.effect;r.f&Ve&&Ze(r,Vr),Xt(r)&&Or(r),t.ran=false;}e.l.r2.v=false;}});}function zr(e){return Ut(Ar,e,true)}function D(e){return xi(e)}function xi(e,t=0){return Ut(Ar|bn|t,e,true)}function Mr(e,t=true){return Ut(Ar|Be,e,true,t)}function ds(e){var t=e.teardown;if(t!==null){const r=ki,n=te;Ii(true),Ye(null);try{t.call(null);}finally{Ii(r),Ye(n);}}}function fs(e){var t=e.deriveds;if(t!==null){e.deriveds=null;for(var r=0;r<t.length;r+=1)bi(t[r]);}}function _s(e,t=false){var r=e.first;for(e.first=e.last=null;r!==null;){var n=r.next;vt(r,t),r=n;}}function Sa(e){for(var t=e.first;t!==null;){var r=t.next;t.f&Be||vt(t),t=r;}}function vt(e,t=true){var r=false;if((t||e.f&Qs)&&e.nodes_start!==null){for(var n=e.nodes_start,i=e.nodes_end;n!==null;){var o=n===i?null:Cn(n);n.remove(),n=o;}r=true;}_s(e,t&&!r),fs(e),Nr(e,0),Ze(e,Wt);var l=e.transitions;if(l!==null)for(const f of l)f.stop();ds(e);var v=e.parent;v!==null&&v.first!==null&&hs(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null;}function hs(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r));}function vn(e,t){var r=[];Ci(e,r,true),gs(r,()=>{vt(e),t&&t();});}function gs(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var i of e)i.out(n);}else t();}function Ci(e,t,r){if(!(e.f&Ue)){if(e.f^=Ue,e.transitions!==null)for(const l of e.transitions)(l.is_global||r)&&t.push(l);for(var n=e.first;n!==null;){var i=n.next,o=(n.f&wn)!==0||(n.f&Be)!==0;Ci(n,t,o?r:false),n=i;}}}function dn(e){ps(e,true);}function ps(e,t){if(e.f&Ue){Xt(e)&&Or(e),e.f^=Ue;for(var r=e.first;r!==null;){var n=r.next,i=(r.f&wn)!==0||(r.f&Be)!==0;ps(r,i?t:false),r=n;}if(e.transitions!==null)for(const o of e.transitions)(o.is_global||t)&&o.in();}}let ni=false,ii=[];function $a(){ni=false;const e=ii.slice();ii=[],Kn(e);}function kn(e){ni||(ni=true,queueMicrotask($a)),ii.push(e);}function Aa(){throw new Error("https://svelte.dev/e/invalid_default_snippet")}function ms(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let sn=false,fn=false,_n=null,zt=false,ki=false;function Vi(e){zt=e;}function Ii(e){ki=e;}let si=[],wr=0;let te=null;function Ye(e){te=e;}let X=null;function De(e){X=e;}let Xe=null;function Ta(e){Xe=e;}let Le=null,Pe=0,ut=null;function Va(e){ut=e;}let ys=1,yt=false,se=null;function bs(){return ++ys}function En(){return !Gt||se!==null&&se.l===null}function Xt(e){var l,v;var t=e.f;if(t&Et)return  true;if(t&Vr){var r=e.deps,n=(t&Lt)!==0;if(r!==null){var i;if(t&cn){for(i=0;i<r.length;i++)((l=r[i]).reactions??(l.reactions=[])).push(e);e.f^=cn;}for(i=0;i<r.length;i++){var o=r[i];if(Xt(o)&&us(o),n&&X!==null&&!yt&&!((v=o==null?void 0:o.reactions)!=null&&v.includes(e))&&(o.reactions??(o.reactions=[])).push(e),o.version>e.version)return  true}}(!n||X!==null&&!yt)&&Ze(e,Ve);}return  false}function Ia(e,t){for(var r=t;r!==null;){if(r.f&ei)try{r.fn(e);return}catch{r.f^=ei;}r=r.parent;}throw sn=false,e}function Pa(e){return (e.f&Wt)===0&&(e.parent===null||(e.parent.f&ei)===0)}function Ln(e,t,r,n){if(sn){if(r===null&&(sn=false),Pa(t))throw e;return}r!==null&&(sn=true);{Ia(e,t);return}}function ws(e){var u;var t=Le,r=Pe,n=ut,i=te,o=yt,l=Xe,v=se,f=e.f;Le=null,Pe=0,ut=null,te=f&(Be|Tr)?null:e,yt=!zt&&(f&Lt)!==0,Xe=null,se=e.ctx;try{var d=(0,e.fn)(),c=e.deps;if(Le!==null){var a;if(Nr(e,Pe),c!==null&&Pe>0)for(c.length=Pe+Le.length,a=0;a<Le.length;a++)c[Pe+a]=Le[a];else e.deps=c=Le;if(!yt)for(a=Pe;a<c.length;a++)((u=c[a]).reactions??(u.reactions=[])).push(e);}else c!==null&&Pe<c.length&&(Nr(e,Pe),c.length=Pe);return d}finally{Le=t,Pe=r,ut=n,te=i,yt=o,Xe=l,se=v;}}function za(e,t){let r=t.reactions;if(r!==null){var n=r.indexOf(e);if(n!==-1){var i=r.length-1;i===0?r=t.reactions=null:(r[n]=r[i],r.pop());}}r===null&&t.f&qe&&(Le===null||!Le.includes(t))&&(Ze(t,Vr),t.f&(Lt|cn)||(t.f^=cn),Nr(t,0));}function Nr(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)za(e,r[n]);}function Or(e){var t=e.f;if(!(t&Wt)){Ze(e,Ve);var r=X,n=se;X=e;try{t&bn?Sa(e):_s(e),fs(e),ds(e);var i=ws(e);e.teardown=typeof i=="function"?i:null,e.version=ys;}catch(o){Ln(o,e,r,n||e.ctx);}finally{X=r;}}}function Oa(){if(wr>1e3){wr=0;try{na();}catch(e){if(_n!==null)Ln(e,_n,null);else throw e}}wr++;}function Ha(e){var t=e.length;if(t!==0){Oa();var r=zt;zt=true;try{for(var n=0;n<t;n++){var i=e[n];i.f&Ve||(i.f^=Ve);var o=[];xs(i,o),Fa(o);}}finally{zt=r;}}}function Fa(e){var t=e.length;if(t!==0)for(var r=0;r<t;r++){var n=e[r];if(!(n.f&(Wt|Ue)))try{Xt(n)&&(Or(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?hs(n):n.fn=null));}catch(i){Ln(i,n,null,n.ctx);}}}function Ra(){if(fn=false,wr>1001)return;const e=si;si=[],Ha(e),fn||(wr=0,_n=null);}function Mn(e){fn||(fn=true,queueMicrotask(Ra)),_n=e;for(var t=e;t.parent!==null;){t=t.parent;var r=t.f;if(r&(Tr|Be)){if(!(r&Ve))return;t.f^=Ve;}}si.push(t);}function xs(e,t){var r=e.first,n=[];e:for(;r!==null;){var i=r.f,o=(i&Be)!==0,l=o&&(i&Ve)!==0,v=r.next;if(!l&&!(i&Ue))if(i&Ar){if(o)r.f^=Ve;else try{Xt(r)&&Or(r);}catch(a){Ln(a,r,null,r.ctx);}var f=r.first;if(f!==null){r=f;continue}}else i&Ji&&n.push(r);if(v===null){let a=r.parent;for(;a!==null;){if(e===a)break e;var d=a.next;if(d!==null){r=d;continue e}a=a.parent;}}r=v;}for(var c=0;c<n.length;c++)f=n[c],t.push(f),xs(f,t);}function s(e){var c;var t=e.f,r=(t&qe)!==0;if(r&&t&Wt){var n=cs(e);return bi(e),n}if(te!==null){Xe!==null&&Xe.includes(e)&&oa();var i=te.deps;Le===null&&i!==null&&i[Pe]===e?Pe++:Le===null?Le=[e]:Le.push(e),ut!==null&&X!==null&&X.f&Ve&&!(X.f&Be)&&ut.includes(e)&&(Ze(X,Et),Mn(X));}else if(r&&e.deps===null)for(var o=e,l=o.parent,v=o;l!==null;)if(l.f&qe){var f=l;v=f,l=f.parent;}else {var d=l;(c=d.deriveds)!=null&&c.includes(v)||(d.deriveds??(d.deriveds=[])).push(v);break}return r&&(o=e,Xt(o)&&us(o)),e.v}function z(e){const t=te;try{return te=null,e()}finally{te=t;}}const Da=-7169;function Ze(e,t){e.f=e.f&Da|t;}function dt(e,t=false,r){se={p:se,c:null,e:null,m:false,s:e,x:null,l:null},Gt&&!t&&(se.l={s:null,u:null,r1:[],r2:ze(false)});}function ft(e){const t=se;if(t!==null){e!==void 0&&(t.x=e);const l=t.e;if(l!==null){var r=X,n=te;t.e=null;try{for(var i=0;i<l.length;i++){var o=l[i];De(o.effect),Ye(o.reaction),Ir(o.fn);}}finally{De(r),Ye(n);}}se=t.p,t.m=true;}return e||{}}function mt(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Ct in e)ai(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&Ct in r&&ai(r);}}}function ai(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{ai(e[n],t);}catch{}const r=hi(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=Qi(r);for(let i in n){const o=n[i].get;if(o)try{o.call(e);}catch{}}}}}const ja=["touchstart","touchmove"];function qa(e){return ja.includes(e)}let Pi=false;function Ba(){Pi||(Pi=true,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r);});},{capture:true}));}function Cs(e){var t=te,r=X;Ye(null),De(null);try{return e()}finally{Ye(t),De(r);}}function Za(e,t,r,n=r){e.addEventListener(t,()=>Cs(r));const i=e.__on_r;i?e.__on_r=()=>{i(),n(true);}:e.__on_r=()=>n(true),Ba();}const Wa=new Set,zi=new Set;function Ga(e,t,r,n){function i(o){if(n.capture||hr.call(t,o),!o.cancelBubble)return Cs(()=>r.call(this,o))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?kn(()=>{t.addEventListener(e,i,n);}):t.addEventListener(e,i,n),i}function B(e,t,r,n,i){var o={capture:n,passive:i},l=Ga(e,t,r,o);(t===document.body||t===window||t===document)&&wi(()=>{t.removeEventListener(e,l,o);});}function hr(e){var y;var t=this,r=t.ownerDocument,n=e.type,i=((y=e.composedPath)==null?void 0:y.call(e))||[],o=i[0]||e.target,l=0,v=e.__root;if(v){var f=i.indexOf(v);if(f!==-1&&(t===document||t===window)){e.__root=t;return}var d=i.indexOf(t);if(d===-1)return;f<=d&&(l=f);}if(o=i[l]||e.target,o!==t){Zs(e,"currentTarget",{configurable:true,get(){return o||r}});var c=te,a=X;Ye(null),De(null);try{for(var u,_=[];o!==null;){var m=o.assignedSlot||o.parentNode||o.host||null;try{var p=o["__"+n];if(p!==void 0&&!o.disabled)if(yn(p)){var[N,...C]=p;N.apply(o,[e,...C]);}else p.call(o,e);}catch(I){u?_.push(I):u=I;}if(e.cancelBubble||m===t||m===null)break;o=m;}if(u){for(let I of _)queueMicrotask(()=>{throw I});throw u}}finally{e.__root=t,delete e.currentTarget,Ye(c),De(a);}}}function ks(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function hn(e,t){var r=X;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t);}function P(e,t){var r=(t&ba)!==0,n=(t&wa)!==0,i,o=!e.startsWith("<!>");return ()=>{i===void 0&&(i=ks(o?e:"<!>"+e),r||(i=Dt(i)));var l=n?document.importNode(i,true):i.cloneNode(true);if(r){var v=Dt(l),f=l.lastChild;hn(v,f);}else hn(l,l);return l}}function Yt(e,t,r="svg"){var n=!e.startsWith("<!>"),i=`<${r}>${n?e:"<!>"+e}</${r}>`,o;return ()=>{if(!o){var l=ks(i),v=Dt(l);o=Dt(v);}var f=o.cloneNode(true);return hn(f,f),f}}function lt(){var e=document.createDocumentFragment(),t=document.createComment(""),r=yi();return e.append(t,r),hn(t,r),e}function S(e,t){e!==null&&e.before(t);}let oi=true;function ee(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"");}function Sr(e,t){return Ua(e,t)}const Vt=new Map;function Ua(e,{target:t,anchor:r,props:n={},events:i,context:o,intro:l=true}){Ca();var v=new Set,f=a=>{for(var u=0;u<a.length;u++){var _=a[u];if(!v.has(_)){v.add(_);var m=qa(_);t.addEventListener(_,hr,{passive:m});var p=Vt.get(_);p===void 0?(document.addEventListener(_,hr,{passive:m}),Vt.set(_,1)):Vt.set(_,p+1);}}};f(_i(Wa)),zi.add(f);var d=void 0,c=Na(()=>{var a=r??t.appendChild(yi());return Mr(()=>{if(o){dt({});var u=se;u.c=o;}i&&(n.$$events=i),oi=l,d=e(a,n)||{},oi=true,o&&ft();}),()=>{var m;for(var u of v){t.removeEventListener(u,hr);var _=Vt.get(u);--_===0?(document.removeEventListener(u,hr),Vt.delete(u)):Vt.set(u,_);}zi.delete(f),a!==r&&((m=a.parentNode)==null||m.removeChild(a));}});return Xa.set(d,c),d}let Xa=new WeakMap;function G(e,t,r=false){var n=e,i=null,o=null,l=$e,v=r?wn:0,f=false;const d=(a,u=true)=>{f=true,c(u,a);},c=(a,u)=>{l!==(l=a)&&(l?(i?dn(i):u&&(i=Mr(()=>u(n))),o&&vn(o,()=>{o=null;})):(o?dn(o):u&&(o=Mr(()=>u(n))),i&&vn(i,()=>{i=null;})));};xi(()=>{f=false,t(d),f||c(null,null);},v);}let an=null;function gr(e,t){return t}function Ya(e,t,r,n){for(var i=[],o=t.length,l=0;l<o;l++)Ci(t[l].e,i,true);var v=o>0&&i.length===0&&r!==null;if(v){var f=r.parentNode;ka(f),f.append(r),n.clear(),st(e,t[0].prev,t[o-1].next);}gs(i,()=>{for(var d=0;d<o;d++){var c=t[d];v||(n.delete(c.k),st(e,c.prev,c.next)),vt(c.e,!v);}});}function bt(e,t,r,n,i,o=null){var l=e,v={flags:t,items:new Map,first:null},f=(t&ns)!==0;if(f){var d=e;l=d.appendChild(yi());}var c=null,a=false;xi(()=>{var u=r(),_=yn(u)?u:u==null?[]:_i(u),m=_.length;if(!(a&&m===0)){a=m===0;{var p=te;Qa(_,v,l,i,t,(p.f&Ue)!==0,n);}o!==null&&(m===0?c?dn(c):c=Mr(()=>o(l)):c!==null&&vn(c,()=>{c=null;})),r();}});}function Qa(e,t,r,n,i,o,l,v){var R,oe,fe,K;var f=(i&ua)!==0,d=(i&(pi|mi))!==0,c=e.length,a=t.items,u=t.first,_=u,m,p=null,N,C=[],y=[],I,M,k,b;if(f)for(b=0;b<c;b+=1)I=e[b],M=l(I,b),k=a.get(M),k!==void 0&&((R=k.a)==null||R.measure(),(N??(N=new Set)).add(k));for(b=0;b<c;b+=1){if(I=e[b],M=l(I,b),k=a.get(M),k===void 0){var V=_?_.e.nodes_start:r;p=Ka(V,t,p,p===null?t.first:p.next,I,M,b,n,i),a.set(M,p),C=[],y=[],_=p.next;continue}if(d&&Ja(k,I,b,i),k.e.f&Ue&&(dn(k.e),f&&((oe=k.a)==null||oe.unfix(),(N??(N=new Set)).delete(k))),k!==_){if(m!==void 0&&m.has(k)){if(C.length<y.length){var E=y[0],x;p=E.prev;var Z=C[0],j=C[C.length-1];for(x=0;x<C.length;x+=1)Oi(C[x],E,r);for(x=0;x<y.length;x+=1)m.delete(y[x]);st(t,Z.prev,j.next),st(t,p,Z),st(t,j,E),_=E,p=j,b-=1,C=[],y=[];}else m.delete(k),Oi(k,_,r),st(t,k.prev,k.next),st(t,k,p===null?t.first:p.next),st(t,p,k),p=k;continue}for(C=[],y=[];_!==null&&_.k!==M;)(o||!(_.e.f&Ue))&&(m??(m=new Set)).add(_),y.push(_),_=_.next;if(_===null)continue;k=_;}C.push(k),p=k,_=k.next;}if(_!==null||m!==void 0){for(var W=m===void 0?[]:_i(m);_!==null;)(o||!(_.e.f&Ue))&&W.push(_),_=_.next;var Q=W.length;if(Q>0){var ae=i&ns&&c===0?r:null;if(f){for(b=0;b<Q;b+=1)(fe=W[b].a)==null||fe.measure();for(b=0;b<Q;b+=1)(K=W[b].a)==null||K.fix();}Ya(t,W,ae,a);}}f&&kn(()=>{var xe;if(N!==void 0)for(k of N)(xe=k.a)==null||xe.apply();}),X.first=t.first&&t.first.e,X.last=p&&p.e;}function Ja(e,t,r,n){n&pi&&ti(e.v,t),n&mi?ti(e.i,r):e.i=r;}function Ka(e,t,r,n,i,o,l,v,f,d){var c=an,a=(f&pi)!==0,u=(f&va)===0,_=a?u?xn(i):ze(i):i,m=f&mi?ze(l):l,p={i:m,v:_,k:o,a:null,e:null,prev:r,next:n};an=p;try{return p.e=Mr(()=>v(e,_,m),ss),p.e.prev=r&&r.e,p.e.next=n&&n.e,r===null?t.first=p:(r.next=p,r.e.next=p.e),n!==null&&(n.prev=p,n.e.prev=p.e),p}finally{an=c;}}function Oi(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,i=t?t.e.nodes_start:r,o=e.e.nodes_start;o!==n;){var l=Cn(o);i.before(o),o=l;}}function st(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e);}function Hi(e,t,r,n,i){var v;var o=(v=t.$$slots)==null?void 0:v[r],l=false;o===true&&(o=t.children,l=true),o===void 0?i!==null&&i(e):o(e,l?()=>n:n);}function A(e,t,r,n){var i=e.__attributes??(e.__attributes={});i[t]!==(i[t]=r)&&(t==="style"&&"__styles"in e&&(e.__styles={}),t==="loading"&&(e[Ks]=r),r==null?e.removeAttribute(t):typeof r!="string"&&eo(e).includes(t)?e[t]=r:e.setAttribute(t,r));}var Fi=new Map;function eo(e){var t=Fi.get(e.nodeName);if(t)return t;Fi.set(e.nodeName,t=[]);for(var r,n=e,i=Element.prototype;i!==n;){r=Qi(n);for(var o in r)r[o].set&&t.push(o);n=hi(n);}return t}function Ri(e,t,r){var n=e.__className,i=to(t);(n!==i||ss)&&(t==null?e.removeAttribute("class"):e.className=i,e.__className=i);}function to(e,t){return (e??"")+""}function pr(e,t,r){if(r){if(e.classList.contains(t))return;e.classList.add(t);}else {if(!e.classList.contains(t))return;e.classList.remove(t);}}function Re(e,t,r,n){var i=e.__styles??(e.__styles={});i[t]!==r&&(i[t]=r,r==null?e.style.removeProperty(t):e.style.setProperty(t,r,""));}const ro=()=>performance.now(),et={tick:e=>requestAnimationFrame(e),now:()=>ro(),tasks:new Set};function Es(){const e=et.now();et.tasks.forEach(t=>{t.c(e)||(et.tasks.delete(t),t.f());}),et.tasks.size!==0&&et.tick(Es);}function no(e){let t;return et.tasks.size===0&&et.tick(Es),{promise:new Promise(r=>{et.tasks.add(t={c:e,f:r});}),abort(){et.tasks.delete(t);}}}function tn(e,t){e.dispatchEvent(new CustomEvent(t));}function io(e){if(e==="float")return "cssFloat";if(e==="offset")return "cssOffset";if(e.startsWith("--"))return e;const t=e.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function Di(e){const t={},r=e.split(";");for(const n of r){const[i,o]=n.split(":");if(!i||o===void 0)break;const l=io(i.trim());t[l]=o.trim();}return t}const so=e=>e;function ao(e,t,r){var n=an,i,o,l,v=null;n.a??(n.a={element:e,measure(){i=this.element.getBoundingClientRect();},apply(){if(l==null||l.abort(),o=this.element.getBoundingClientRect(),i.left!==o.left||i.right!==o.right||i.top!==o.top||i.bottom!==o.bottom){const f=t()(this.element,{from:i,to:o},r==null?void 0:r());l=gn(this.element,f,void 0,1,()=>{l==null||l.abort(),l=void 0;});}},fix(){if(!e.getAnimations().length){var{position:f,width:d,height:c}=getComputedStyle(e);if(f!=="absolute"&&f!=="fixed"){var a=e.style;v={position:a.position,width:a.width,height:a.height,transform:a.transform},a.position="absolute",a.width=d,a.height=c;var u=e.getBoundingClientRect();if(i.left!==u.left||i.top!==u.top){var _=`translate(${i.left-u.left}px, ${i.top-u.top}px)`;a.transform=a.transform?`${a.transform} ${_}`:_;}}}},unfix(){if(v){var f=e.style;f.position=v.position,f.width=v.width,f.height=v.height,f.transform=v.transform;}}}),n.a.element=e;}function jt(e,t,r,n){var i=(e&pa)!==0,o=(e&ma)!==0,l=i&&o,v=(e&ya)!==0,f=l?"both":i?"in":"out",d,c=t.inert,a,u;function _(){var y=te,I=X;Ye(null),De(null);try{return d??(d=r()(t,(n==null?void 0:n())??{},{direction:f}))}finally{Ye(y),De(I);}}var m={is_global:v,in(){var y;if(t.inert=c,!i){u==null||u.abort(),(y=u==null?void 0:u.reset)==null||y.call(u);return}o||a==null||a.abort(),tn(t,"introstart"),a=gn(t,_(),u,1,()=>{tn(t,"introend"),a==null||a.abort(),a=d=void 0;});},out(y){if(!o){y==null||y(),d=void 0;return}t.inert=true,tn(t,"outrostart"),u=gn(t,_(),a,0,()=>{tn(t,"outroend"),y==null||y();});},stop:()=>{a==null||a.abort(),u==null||u.abort();}},p=X;if((p.transitions??(p.transitions=[])).push(m),i&&oi){var N=v;if(!N){for(var C=p.parent;C&&C.f&wn;)for(;(C=C.parent)&&!(C.f&bn););N=!C||(C.f&Ki)!==0;}N&&Ir(()=>{z(()=>m.in());});}}function gn(e,t,r,n,i){var o=n===1;if(Us(t)){var l,v=false;return kn(()=>{if(!v){var N=t({direction:o?"in":"out"});l=gn(e,N,r,n,i);}}),{abort:()=>{v=true,l==null||l.abort();},deactivate:()=>l.deactivate(),reset:()=>l.reset(),t:()=>l.t()}}if(r==null||r.deactivate(),!(t!=null&&t.duration))return i(),{abort:je,deactivate:je,reset:je,t:()=>n};const{delay:f=0,css:d,tick:c,easing:a=so}=t;var u=[];if(o&&r===void 0&&(c&&c(0,1),d)){var _=Di(d(0,1));u.push(_,_);}var m=()=>1-n,p=e.animate(u,{duration:f});return p.onfinish=()=>{var N=(r==null?void 0:r.t())??1-n;r==null||r.abort();var C=n-N,y=t.duration*Math.abs(C),I=[];if(y>0){if(d)for(var M=Math.ceil(y/16.666666666666668),k=0;k<=M;k+=1){var b=N+C*a(k/M),V=d(b,1-b);I.push(Di(V));}m=()=>{var E=p.currentTime;return N+C*a(E/y)},c&&no(()=>{if(p.playState!=="running")return  false;var E=m();return c(E,1-E),true});}p=e.animate(I,{duration:y,fill:"forwards"}),p.onfinish=()=>{m=()=>n,c==null||c(n,1-n),i();};},{abort:()=>{p&&(p.cancel(),p.effect=null,p.onfinish=je);},deactivate:()=>{i=je;},reset:()=>{n===0&&(c==null||c(1,0));},t:()=>m()}}function rn(e,t,r=t){var n=En();Za(e,"input",i=>{var o=i?e.defaultValue:e.value;if(o=Xn(e)?Yn(o):o,r(o),n&&o!==(o=t())){var l=e.selectionStart,v=e.selectionEnd;e.value=o??"",v!==null&&(e.selectionStart=l,e.selectionEnd=Math.min(v,e.value.length));}}),z(t)==null&&e.value&&r(Xn(e)?Yn(e.value):e.value),zr(()=>{var i=t();Xn(e)&&i===Yn(e.value)||e.type==="date"&&!i&&!e.value||i!==e.value&&(e.value=i??"");});}function Xn(e){var t=e.type;return t==="number"||t==="range"}function Yn(e){return e===""?null:+e}function Qn(e,t,r){var n=xt(e,t);n&&n.set&&(e[t]=r,wi(()=>{e[t]=null;}));}var ot,Rt,$r,pn,Ls;const mn=class mn{constructor(t){_r(this,pn);_r(this,ot,new WeakMap);_r(this,Rt);_r(this,$r);Un(this,$r,t);}observe(t,r){var n=Ke(this,ot).get(t)||new Set;return n.add(r),Ke(this,ot).set(t,n),Ai(this,pn,Ls).call(this).observe(t,Ke(this,$r)),()=>{var i=Ke(this,ot).get(t);i.delete(r),i.size===0&&(Ke(this,ot).delete(t),Ke(this,Rt).unobserve(t));}}};ot=new WeakMap,Rt=new WeakMap,$r=new WeakMap,pn=new WeakSet,Ls=function(){return Ke(this,Rt)??Un(this,Rt,new ResizeObserver(t=>{for(var r of t){mn.entries.set(r.target,r);for(var n of Ke(this,ot).get(r.target)||[])n(r);}}))},Wn(mn,"entries",new WeakMap);let li=mn;var oo=new li({box:"border-box"});function ji(e,t,r){var n=oo.observe(e,()=>r(e[t]));Ir(()=>(z(()=>r(e[t])),n));}function qi(e,t){return e===t||(e==null?void 0:e[Ct])===t}function at(e={},t,r,n){return Ir(()=>{var i,o;return zr(()=>{i=o,o=[],z(()=>{e!==r(...o)&&(t(e,...o),i&&qi(r(...i),e)&&t(null,...i));});}),()=>{kn(()=>{o&&qi(r(...o),e)&&t(null,...o);});}}),e}function Ei(e){return function(...t){var r=t[0];r.target===this&&(e==null||e.apply(this,t));}}function xr(e){return function(...t){var r=t[0];return r.stopPropagation(),e==null?void 0:e.apply(this,t)}}function Mt(e=false){const t=se,r=t.l.u;if(!r)return;let n=()=>mt(t.s);if(e){let i=0,o={};const l=un(()=>{let v=false;const f=t.s;for(const d in f)f[d]!==o[d]&&(o[d]=f[d],v=true);return v&&i++,i});n=()=>s(l);}r.b.length&&Ma(()=>{Bi(t,n),Kn(r.b);}),ri(()=>{const i=z(()=>r.m.map(Xs));return ()=>{for(const o of i)typeof o=="function"&&o();}}),r.a.length&&ri(()=>{Bi(t,n),Kn(r.a);});}function Bi(e,t){if(e.l.s)for(const r of e.l.s)s(r);t();}function lo(e){var t=ze(0);return function(){return arguments.length===1?(L(t,s(t)+1),arguments[0]):(s(t),e())}}function Zi(e,t){var o;var r=(o=e.$$events)==null?void 0:o[t.type],n=yn(r)?r.slice():r==null?[]:[r];for(var i of n)i.call(this,t);}function Ms(e,t,r){if(e==null)return t(void 0),je;const n=z(()=>e.subscribe(t,r));return n.unsubscribe?()=>n.unsubscribe():n}let mr=false;function ce(e,t,r){const n=r[t]??(r[t]={store:null,source:xn(void 0),unsubscribe:je});if(n.store!==e)if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=void 0,n.unsubscribe=je;else {var i=true;n.unsubscribe=Ms(e,o=>{i?n.source.v=o:L(n.source,o);}),i=false;}return s(n.source)}function ye(e,t){return e.set(t),t}function Qt(){const e={};return wi(()=>{for(var t in e)e[t].unsubscribe();}),e}function me(e,t,r){return e.set(r),t}function nn(){mr=true;}function co(e){var t=mr;try{return mr=!1,[e(),mr]}finally{mr=t;}}function Wi(e){for(var t=X,r=X;t!==null&&!(t.f&(Be|Tr));)t=t.parent;try{return De(t),e()}finally{De(r);}}function pe(e,t,r,n){var V;var i=(r&da)!==0,o=!Gt||(r&fa)!==0,l=(r&ha)!==0,v=(r&ga)!==0,f=false,d;l?[d,f]=co(()=>e[t]):d=e[t];var c=Ct in e||Js in e,a=((V=xt(e,t))==null?void 0:V.set)??(c&&l&&t in e?E=>e[t]=E:void 0),u=n,_=true,m=false,p=()=>(m=true,_&&(_=false,v?u=z(n):u=n),u);d===void 0&&n!==void 0&&(a&&o&&ia(),d=p(),a&&a(d));var N;if(o)N=()=>{var E=e[t];return E===void 0?p():(_=true,m=false,E)};else {var C=Wi(()=>(i?un:Lr)(()=>e[t]));C.f|=Ys,N=()=>{var E=s(C);return E!==void 0&&(u=void 0),E===void 0?u:E};}if(!(r&_a))return N;if(a){var y=e.$$legacy;return function(E,x){return arguments.length>0?((!o||!x||y||f)&&a(x?N():E),E):N()}}var I=false,M=false,k=xn(d),b=Wi(()=>un(()=>{var E=N(),x=s(k);return I?(I=!1,M=!0,x):(M=!1,k.v=E)}));return i||(b.equals=gi),function(E,x){if(arguments.length>0){const Z=x?s(b):o&&l?Pt(E):E;return b.equals(Z)||(I=true,L(k,Z),m&&u!==void 0&&(u=Z),z(()=>s(b))),E}return s(b)}}function Nn(e){se===null&&ms(),Gt&&se.l!==null?uo(se).m.push(e):ri(()=>{const t=z(e);if(typeof t=="function")return t});}function Li(e){se===null&&ms(),Nn(()=>()=>z(e));}function uo(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const vo="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(vo);ca();const fo=e=>e;function qt(e,{delay:t=0,duration:r=400,easing:n=fo}={}){const i=+getComputedStyle(e).opacity;return {delay:t,duration:r,easing:n,css:o=>`opacity: ${o*i}`}}function pt(e,t=()=>{}){if(!e)return ()=>{};const r=document.querySelector(e);if(r)return t(r),()=>{};let n=false;const i=new MutationObserver((o,l)=>{const v=document.querySelector(e);v&&(n||(l.disconnect(),n=true),t(v));});return i.observe(document.documentElement,{childList:true,subtree:true}),()=>{n||(i.disconnect(),n=true);}}function Ot(e){if(typeof e=="string")try{const t=JSON.parse(e);return Ot(t)}catch{return e}if(Array.isArray(e))return e.map(t=>Ot(t));if(e!==null&&typeof e=="object"){const t={};for(const r in e)e.hasOwnProperty(r)&&(t[r]=Ot(e[r]));return t}return e}window.__JsonParse=Ot;function kt(e){if(!e)return "inherit";let t=e.toString().trim();if(t.startsWith("var(")){const l=t.match(/var\(([^)]+)\)/);if(l){const v=l[1],f=getComputedStyle(document.documentElement).getPropertyValue(v).trim();if(f)t=f;else return "inherit"}}if(t.startsWith("rgba(")||t.startsWith("rgb(")){const l=t.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);if(l){const[,v,f,d]=l;return (parseInt(v)*299+parseInt(f)*587+parseInt(d)*114)/1e3<128?"#FFFFFF":"#000000"}}t=t.replace("#","");let r,n,i;if(t.length===3)r=parseInt(t[0]+t[0],16),n=parseInt(t[1]+t[1],16),i=parseInt(t[2]+t[2],16);else if(t.length===6)r=parseInt(t.substr(0,2),16),n=parseInt(t.substr(2,2),16),i=parseInt(t.substr(4,2),16);else if(t.length===8)r=parseInt(t.substr(0,2),16),n=parseInt(t.substr(2,2),16),i=parseInt(t.substr(4,2),16);else return "inherit";return (r*299+n*587+i*114)/1e3<128?"#FFFFFF":"#000000"}const It=[];function Sn(e,t=je){let r=null;const n=new Set;function i(v){if(rs(e,v)&&(e=v,r)){const f=!It.length;for(const d of n)d[1](),It.push(d,e);if(f){for(let d=0;d<It.length;d+=2)It[d][0](It[d+1]);It.length=0;}}}function o(v){i(v(e));}function l(v,f=je){const d=[v,f];return n.add(d),n.size===1&&(r=t(i,o)||je),v(e),()=>{n.delete(d),n.size===0&&r&&(r(),r=null);}}return {set:i,update:o,subscribe:l}}function Jn(e){let t;return Ms(e,r=>t=r)(),t}const Ns="Kesa:Fall",Gi=()=>{try{return Ot(localStorage.getItem(Ns))??{}}catch{return {}}},Oe=(e,t)=>{const r=Gi(),n=e in r?r[e]:t,{subscribe:i,set:o,update:l}=Sn(n);return i(v=>{const f=Gi();localStorage.setItem(Ns,JSON.stringify({...f,[e]:v}));}),{subscribe:i,set:v=>{typeof v=="function"?l(v):o(v);},update:l}},on=Sn(0),Ss=Sn(""),Cr=Oe("_isFallView",true),yr=Sn(0),ci=Oe("_panelPos",{x:0,y:0}),ui=Oe("_show_hover_pic",1),kr=Oe("_state_hover_pic",false),vi=Oe("_pic_failed_showInfo",1),br=Oe("_card_layout",{min:300,max:600,gap:8}),He=Oe("_card_detail",{all:false,category:true,title:false,topping:true,free:true,size:true,sub_title:false,tags:false,download_collect:false,upload_time:false,statistics:false}),_o=Oe("_show_nexus_pic",1),di=Oe("_block_gay",1),ln=Oe("_card_radius",{enabled:true,value:16}),$s=Oe("_mt_label",{}),As=Oe("_mt_categories",{}),wt=Oe("_textColor",{t1:"black",t2:"black",t3:"black"});function ho(e={path:"/search",method:"POST"}){const t=e.path||"/search",r=e.method||"POST";if(typeof XMLHttpRequest>"u")return console.warn("[PT-Fall] XMLHttpRequest not available, skipping hijack"),()=>{};const n=XMLHttpRequest.prototype.open,i=XMLHttpRequest.prototype.send,o=window.fetch,l=new WeakMap,v=new WeakSet;function f(a,u){return !(!a.includes(t)||u.toUpperCase()!==r.toUpperCase())}function d(a){var u;try{switch(a.responseType){case "json":return a.response;case "document":return ((u=a.responseXML)==null?void 0:u.documentElement.textContent)||null;case "arraybuffer":return new Uint8Array(a.response);case "blob":return URL.createObjectURL(a.response);default:return a.responseText}}catch{return a.responseText}}function c(a){const u=l.get(a);if(!(!u||!u.isTarget||v.has(a)))try{const _={status:a.status,headers:a.getAllResponseHeaders(),data:d(a)},m=new CustomEvent(`res>${r}->${t}`,{detail:_});window.dispatchEvent(m),v.add(a);}catch(_){console.error("<PT-Fall> Capture failed:",_);}}return XMLHttpRequest.prototype.open=function(a,u){console.log(`[PT-Fall] XHR.open: ${a} ${u}`,performance.now());const _={method:a.toUpperCase(),url:u,isTarget:f(u,a)};return l.set(this,_),n.apply(this,arguments)},XMLHttpRequest.prototype.send=function(a){const u=l.get(this);if(u!=null&&u.isTarget){const _=this.onreadystatechange,m=this.onload;this.addEventListener("readystatechange",function(){this.readyState===4&&c(this),_==null||_.call(this);}),this.onload=function(C){c(this),m==null||m.call(this,C);};const p={url:u.url,body:a instanceof Document?a.documentElement.textContent||"[Document]":a},N=new CustomEvent(`req>${r}->${t}`,{detail:p});window.dispatchEvent(N);}return i.apply(this,arguments)},o?window.fetch=async function(...a){const[u,_={}]=a,m=typeof u=="string"?u:u instanceof Request?u.url:String(u),p=(_.method||"GET").toUpperCase(),N=_.body,C=f(m,p);if(C){console.log(`[PT-Fall] fetch: ${p} ${m}`,performance.now());const y={url:m,body:N instanceof Document?N.documentElement.textContent||"[Document]":N},I=new CustomEvent(`req>${r}->${t}`,{detail:y});window.dispatchEvent(I);}return o.apply(this,a).then(y=>{if(C){const I=y.clone(),k=(y.headers.get("content-type")||"").includes("application/json");return I[k?"json":"text"]().then(b=>{const V={status:y.status,headers:Array.from(y.headers.entries()).reduce((x,[Z,j])=>(x[Z]=j,x),{}),data:k?JSON.stringify(b):b},E=new CustomEvent(`res>${r}->${t}`,{detail:V});return window.dispatchEvent(E),y}).catch(b=>(console.error("<PT-Fall> Failed to parse fetch response:",b),y))}return y})}:console.warn("[PT-Fall] fetch API not available, skipping fetch hijack"),function(){XMLHttpRequest.prototype.open=n,XMLHttpRequest.prototype.send=i,o&&(window.fetch=o);}}function go(e){const t=e-1;return t*t*t+1}function po(e,{from:t,to:r},n={}){var i=getComputedStyle(e),o=mo(e),l=i.transform==="none"?"":i.transform,[v,f]=i.transformOrigin.split(" ").map(parseFloat),d=t.width/r.width,c=t.height/r.height,a=(t.left+d*v-(r.left+v))/o,u=(t.top+c*f-(r.top+f))/o,{delay:_=0,duration:m=N=>Math.sqrt(N)*120,easing:p=go}=n;return {delay:_,duration:typeof m=="function"?m(Math.sqrt(a*a+u*u)):m,easing:p,css:(N,C)=>{var y=C*a,I=C*u,M=N+C*d,k=N+C*c;return `transform: ${l} scale(${M}, ${k}) translate(${y}px, ${I}px);`}}}function mo(e){if("currentCSSZoom"in e)return e.currentCSSZoom;for(var t=e,r=1;t!==null;)r*=+getComputedStyle(t).zoom,t=t.parentElement;return r}var yo=P('<span class="svelte-b2jtby"> </span>'),bo=P('<div class="svelte-b2jtby"><!></div>'),wo=P('<span class="svelte-b2jtby"> </span>'),xo=P("<div><!></div>"),Co=P("<div></div>");function ko(e,t){dt(t,false);const r=q(),n=q();let i=pe(t,"animate",8,true),o=pe(t,"columnClass",24,()=>""),l=pe(t,"duration",8,200),v=pe(t,"gap",8,20),f=pe(t,"getId",8,y=>typeof y=="number"||typeof y=="string"?y:y[d()]),d=pe(t,"idKey",24,()=>"id"),c=pe(t,"items",8),a=pe(t,"masonryHeight",12,0),u=pe(t,"masonryWidth",12,0),_=pe(t,"maxColWidth",8,500),m=pe(t,"minColWidth",8,330),p=pe(t,"style",24,()=>""),N=pe(t,"class",24,()=>"");Ae(()=>(mt(c()),mt(u()),mt(m()),mt(v())),()=>{L(r,Math.min(c().length,Math.floor(u()/(m()+v()))||1));}),Ae(()=>(mt(c()),s(r)),()=>{L(n,c().reduce((y,I,M)=>(y[M%y.length].push([I,M]),y),Array(s(r)).fill(null).map(()=>[])));}),Pr(),Mt();var C=Co();bt(C,5,()=>s(n),gr,(y,I)=>{var M=xo(),k=h(M);{var b=E=>{var x=lt(),Z=Te(x);bt(Z,9,()=>s(I),([j,W])=>f()(j),(j,W)=>{let Q=()=>s(W)[0],ae=()=>s(W)[1];var R=bo(),oe=h(R);Hi(oe,t,"default",{get idx(){return ae()},get item(){return Q()}},fe=>{var K=yo(),xe=h(K);D(()=>ee(xe,Q())),S(fe,K);}),jt(1,R,()=>qt,()=>({delay:100,duration:l()})),jt(2,R,()=>qt,()=>({delay:0,duration:l()})),ao(R,()=>po,()=>({duration:l()})),S(j,R);}),S(E,x);},V=E=>{var x=lt(),Z=Te(x);bt(Z,1,()=>s(I),([j,W])=>f()(j),(j,W)=>{let Q=()=>s(W)[0],ae=()=>s(W)[1];var R=lt(),oe=Te(R);Hi(oe,t,"default",{get idx(){return ae()},get item(){return Q()}},fe=>{var K=wo(),xe=h(K);D(()=>ee(xe,Q())),S(fe,K);}),S(j,R);}),S(E,x);};G(k,E=>{i()?E(b):E(V,false);});}D(()=>{Ri(M,`col ${o()??""} svelte-b2jtby`),A(M,"style",`gap: ${v()??""}px; max-width: ${_()??""}px;`);}),S(y,M);}),D(()=>{Ri(C,`masonry ${N()??""} svelte-b2jtby`),A(C,"style",`gap: ${v()??""}px; ${p()??""}`);}),ji(C,"clientWidth",u),ji(C,"clientHeight",a),S(e,C),ft();}/*! *****************************************************************************
      Copyright (c) Microsoft Corporation.

      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.

      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */var Fe=function(){return Fe=Object.assign||function(t){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);}return t},Fe.apply(this,arguments)},Eo=function(){function e(t){this.options=t,this.listeners={};}return e.prototype.on=function(t,r){var n=this.listeners[t]||[];this.listeners[t]=n.concat([r]);},e.prototype.triggerEvent=function(t,r){var n=this,i=this.listeners[t]||[];i.forEach(function(o){return o({target:n,event:r})});},e}(),Bt;(function(e){e[e.Add=0]="Add",e[e.Remove=1]="Remove";})(Bt||(Bt={}));var Lo=function(){function e(){this.notifications=[];}return e.prototype.push=function(t){this.notifications.push(t),this.updateFn(t,Bt.Add,this.notifications);},e.prototype.splice=function(t,r){var n=this.notifications.splice(t,r)[0];return this.updateFn(n,Bt.Remove,this.notifications),n},e.prototype.indexOf=function(t){return this.notifications.indexOf(t)},e.prototype.onUpdate=function(t){this.updateFn=t;},e}(),ct;(function(e){e.Dismiss="dismiss",e.Click="click";})(ct||(ct={}));var Ui={types:[{type:"success",className:"notyf__toast--success",backgroundColor:"#3dc763",icon:{className:"notyf__icon--success",tagName:"i"}},{type:"error",className:"notyf__toast--error",backgroundColor:"#ed3d3d",icon:{className:"notyf__icon--error",tagName:"i"}}],duration:2e3,ripple:true,position:{x:"right",y:"bottom"},dismissible:false},Mo=function(){function e(){this.notifications=[],this.events={},this.X_POSITION_FLEX_MAP={left:"flex-start",center:"center",right:"flex-end"},this.Y_POSITION_FLEX_MAP={top:"flex-start",center:"center",bottom:"flex-end"};var t=document.createDocumentFragment(),r=this._createHTMLElement({tagName:"div",className:"notyf"});t.appendChild(r),document.body.appendChild(t),this.container=r,this.animationEndEventName=this._getAnimationEndEventName(),this._createA11yContainer();}return e.prototype.on=function(t,r){var n;this.events=Fe(Fe({},this.events),(n={},n[t]=r,n));},e.prototype.update=function(t,r){r===Bt.Add?this.addNotification(t):r===Bt.Remove&&this.removeNotification(t);},e.prototype.removeNotification=function(t){var r=this,n=this._popRenderedNotification(t),i;if(n){i=n.node,i.classList.add("notyf__toast--disappear");var o;i.addEventListener(this.animationEndEventName,o=function(l){l.target===i&&(i.removeEventListener(r.animationEndEventName,o),r.container.removeChild(i));});}},e.prototype.addNotification=function(t){var r=this._renderNotification(t);this.notifications.push({notification:t,node:r}),this._announce(t.options.message||"Notification");},e.prototype._renderNotification=function(t){var r,n=this._buildNotificationCard(t),i=t.options.className;return i&&(r=n.classList).add.apply(r,i.split(" ")),this.container.appendChild(n),n},e.prototype._popRenderedNotification=function(t){for(var r=-1,n=0;n<this.notifications.length&&r<0;n++)this.notifications[n].notification===t&&(r=n);if(r!==-1)return this.notifications.splice(r,1)[0]},e.prototype.getXPosition=function(t){var r;return ((r=t==null?void 0:t.position)===null||r===void 0?void 0:r.x)||"right"},e.prototype.getYPosition=function(t){var r;return ((r=t==null?void 0:t.position)===null||r===void 0?void 0:r.y)||"bottom"},e.prototype.adjustContainerAlignment=function(t){var r=this.X_POSITION_FLEX_MAP[this.getXPosition(t)],n=this.Y_POSITION_FLEX_MAP[this.getYPosition(t)],i=this.container.style;i.setProperty("justify-content",n),i.setProperty("align-items",r);},e.prototype._buildNotificationCard=function(t){var r=this,n=t.options,i=n.icon;this.adjustContainerAlignment(n);var o=this._createHTMLElement({tagName:"div",className:"notyf__toast"}),l=this._createHTMLElement({tagName:"div",className:"notyf__ripple"}),v=this._createHTMLElement({tagName:"div",className:"notyf__wrapper"}),f=this._createHTMLElement({tagName:"div",className:"notyf__message"});f.innerHTML=n.message||"";var d=n.background||n.backgroundColor;if(i){var c=this._createHTMLElement({tagName:"div",className:"notyf__icon"});if((typeof i=="string"||i instanceof String)&&(c.innerHTML=new String(i).valueOf()),typeof i=="object"){var a=i.tagName,u=a===void 0?"i":a,_=i.className,m=i.text,p=i.color,N=p===void 0?d:p,C=this._createHTMLElement({tagName:u,className:_,text:m});N&&(C.style.color=N),c.appendChild(C);}v.appendChild(c);}if(v.appendChild(f),o.appendChild(v),d&&(n.ripple?(l.style.background=d,o.appendChild(l)):o.style.background=d),n.dismissible){var y=this._createHTMLElement({tagName:"div",className:"notyf__dismiss"}),I=this._createHTMLElement({tagName:"button",className:"notyf__dismiss-btn"});y.appendChild(I),v.appendChild(y),o.classList.add("notyf__toast--dismissible"),I.addEventListener("click",function(k){var b,V;(V=(b=r.events)[ct.Dismiss])===null||V===void 0||V.call(b,{target:t,event:k}),k.stopPropagation();});}o.addEventListener("click",function(k){var b,V;return (V=(b=r.events)[ct.Click])===null||V===void 0?void 0:V.call(b,{target:t,event:k})});var M=this.getYPosition(n)==="top"?"upper":"lower";return o.classList.add("notyf__toast--"+M),o},e.prototype._createHTMLElement=function(t){var r=t.tagName,n=t.className,i=t.text,o=document.createElement(r);return n&&(o.className=n),o.textContent=i||null,o},e.prototype._createA11yContainer=function(){var t=this._createHTMLElement({tagName:"div",className:"notyf-announcer"});t.setAttribute("aria-atomic","true"),t.setAttribute("aria-live","polite"),t.style.border="0",t.style.clip="rect(0 0 0 0)",t.style.height="1px",t.style.margin="-1px",t.style.overflow="hidden",t.style.padding="0",t.style.position="absolute",t.style.width="1px",t.style.outline="0",document.body.appendChild(t),this.a11yContainer=t;},e.prototype._announce=function(t){var r=this;this.a11yContainer.textContent="",setTimeout(function(){r.a11yContainer.textContent=t;},100);},e.prototype._getAnimationEndEventName=function(){var t=document.createElement("_fake"),r={MozTransition:"animationend",OTransition:"oAnimationEnd",WebkitTransition:"webkitAnimationEnd",transition:"animationend"},n;for(n in r)if(t.style[n]!==void 0)return r[n];return "animationend"},e}(),Ts=function(){function e(t){var r=this;this.dismiss=this._removeNotification,this.notifications=new Lo,this.view=new Mo;var n=this.registerTypes(t);this.options=Fe(Fe({},Ui),t),this.options.types=n,this.notifications.onUpdate(function(i,o){return r.view.update(i,o)}),this.view.on(ct.Dismiss,function(i){var o=i.target,l=i.event;r._removeNotification(o),o.triggerEvent(ct.Dismiss,l);}),this.view.on(ct.Click,function(i){var o=i.target,l=i.event;return o.triggerEvent(ct.Click,l)});}return e.prototype.error=function(t){var r=this.normalizeOptions("error",t);return this.open(r)},e.prototype.success=function(t){var r=this.normalizeOptions("success",t);return this.open(r)},e.prototype.open=function(t){var r=this.options.types.find(function(o){var l=o.type;return l===t.type})||{},n=Fe(Fe({},r),t);this.assignProps(["ripple","position","dismissible"],n);var i=new Eo(n);return this._pushNotification(i),i},e.prototype.dismissAll=function(){for(;this.notifications.splice(0,1););},e.prototype.assignProps=function(t,r){var n=this;t.forEach(function(i){r[i]=r[i]==null?n.options[i]:r[i];});},e.prototype._pushNotification=function(t){var r=this;this.notifications.push(t);var n=t.options.duration!==void 0?t.options.duration:this.options.duration;n&&setTimeout(function(){return r._removeNotification(t)},n);},e.prototype._removeNotification=function(t){var r=this.notifications.indexOf(t);r!==-1&&this.notifications.splice(r,1);},e.prototype.normalizeOptions=function(t,r){var n={type:t};return typeof r=="string"?n.message=r:typeof r=="object"&&(n=Fe(Fe({},n),r)),n},e.prototype.registerTypes=function(t){var r=(t&&t.types||[]).slice(),n=Ui.types.map(function(i){var o=-1;r.forEach(function(v,f){v.type===i.type&&(o=f);});var l=o!==-1?r.splice(o,1)[0]:{};return Fe(Fe({},i),l)});return n.concat(r)},e}();new Ts({duration:5e3,dismissible:true});const Ht=new Ts({duration:3e3,dismissible:true,position:{x:"left",y:"top"},types:[{type:"warning",background:"orange",icon:false}]}),No="data:image/svg+xml,%3csvg%20stroke='currentColor'%20fill='currentColor'%20stroke-width='0'%20viewBox='0%200%2024%2024'%20height='25'%20width='25'%20xmlns='http://www.w3.org/2000/svg'%20style='%20vertical-align:%20middle;%20--darkreader-inline-fill:%20currentColor;%20--darkreader-inline-stroke:%20currentColor;'%20%3e%3cpath%20d='M12%205c-3.859%200-7%203.141-7%207s3.141%207%207%207%207-3.141%207-7-3.141-7-7-7zm0%2012c-2.757%200-5-2.243-5-5s2.243-5%205-5%205%202.243%205%205-2.243%205-5%205z'%3e%3c/path%3e%3cpath%20d='M12%209c-1.627%200-3%201.373-3%203s1.373%203%203%203%203-1.373%203-3-1.373-3-3-3z'%3e%3c/path%3e%3c/svg%3e",So="data:image/svg+xml,%3csvg%20viewBox='64%2064%20896%20896'%20focusable='false'%20data-icon='arrow-up'%20width='1em'%20height='1em'%20fill='green'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M868%20545.5L536.1%20163a31.96%2031.96%200%2000-48.3%200L156%20545.5a7.97%207.97%200%20006%2013.2h81c4.6%200%209-2%2012.1-5.5L474%20300.9V864c0%204.4%203.6%208%208%208h60c4.4%200%208-3.6%208-8V300.9l218.9%20252.3c3%203.5%207.4%205.5%2012.1%205.5h81c6.8%200%2010.5-8%206-13.2z'%3e%3c/path%3e%3c/svg%3e",$o="data:image/svg+xml,%3csvg%20viewBox='64%2064%20896%20896'%20focusable='false'%20data-icon='arrow-down'%20width='1em'%20height='1em'%20fill='red'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M862%20465.3h-81c-4.6%200-9%202-12.1%205.5L550%20723.1V160c0-4.4-3.6-8-8-8h-60c-4.4%200-8%203.6-8%208v563.1L255.1%20470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8%200-10.5%208.1-6%2013.2L487.9%20861a31.96%2031.96%200%200048.3%200L868%20478.5c4.5-5.2.8-13.2-6-13.2z'%3e%3c/path%3e%3c/svg%3e",Ao="data:image/svg+xml,%3csvg%20viewBox='64%2064%20896%20896'%20focusable='false'%20data-icon='download'%20width='1em'%20height='1em'%20fill='currentColor'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M505.7%20661a8%208%200%200012.6%200l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4%200-8%203.6-8%208v338.3H400c-6.7%200-10.4%207.7-6.3%2012.9l112%20141.8zM878%20626h-60c-4.4%200-8%203.6-8%208v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4%200-8%203.6-8%208v198c0%2017.7%2014.3%2032%2032%2032h684c17.7%200%2032-14.3%2032-32V634c0-4.4-3.6-8-8-8z'%3e%3c/path%3e%3c/svg%3e",To="data:image/svg+xml,%3csvg%20viewBox='64%2064%20896%20896'%20focusable='false'%20data-icon='star'%20width='1em'%20height='1em'%20fill='currentColor'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M908.1%20353.1l-253.9-36.9L540.7%2086.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9%2014.5L369.8%20316.2l-253.9%2036.9c-7%201-13.4%204.3-18.3%209.3a32.05%2032.05%200%2000.6%2045.3l183.7%20179.1-43.4%20252.9a31.95%2031.95%200%200046.4%2033.7L512%20754l227.1%20119.4c6.2%203.3%2013.4%204.4%2020.3%203.2%2017.4-3%2029.1-19.5%2026.1-36.9l-43.4-252.9%20183.7-179.1c5-4.9%208.3-11.3%209.3-18.3%202.7-17.5-9.5-33.7-27-36.3z'%3e%3c/path%3e%3c/svg%3e",Vo="data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cstyle%3e%20.cls-1{fill:%232eb1b7;}%20.cls-2{fill:%2356b54e;}%20.cls-3{fill:%235dc6d1;}%20.cls-4{fill:%2360cc5a;}%20.cls-5{fill:%23ffce69;}%20.cls-6{fill:%236c2e7c;}%20%3c/style%3e%3c/defs%3e%3cg%20id='Icons'%3e%3crect%20class='cls-1'%20height='22'%20rx='4'%20width='22'%20x='1'%20y='1'/%3e%3cpath%20class='cls-2'%20d='M23,18v1a4,4,0,0,1-4,4H5a4,4,0,0,1-3.9-3.1l7.19-7.19a1.008,1.008,0,0,1,1.42,0l1.8,1.8a1,1,0,0,0,1.46-.05l2.33-2.65a1,1,0,0,1,1.46-.05Z'/%3e%3cpath%20class='cls-3'%20d='M23,5v9a4.025,4.025,0,0,1-1.17,2.83l-5.07-5.07a1,1,0,0,0-1.46.05l-2.33,2.65a1,1,0,0,1-1.46.05l-1.8-1.8a1.008,1.008,0,0,0-1.42,0L3.36,17.64A3.988,3.988,0,0,1,1,14V5A4,4,0,0,1,5,1H19A4,4,0,0,1,23,5Z'/%3e%3cpath%20class='cls-4'%20d='M21.83,16.83A4.025,4.025,0,0,1,19,18H5a3.931,3.931,0,0,1-1.64-.36l4.93-4.93a1.008,1.008,0,0,1,1.42,0l1.8,1.8a1,1,0,0,0,1.46-.05l2.33-2.65a1,1,0,0,1,1.46-.05Z'/%3e%3ccircle%20class='cls-5'%20cx='7'%20cy='7'%20r='2'/%3e%3c/g%3e%3cg%20data-name='Layer%204'%20id='Layer_4'%3e%3cpath%20class='cls-6'%20d='M19,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,19,0Zm3,19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3Z'/%3e%3cpath%20class='cls-6'%20d='M7,10A3,3,0,1,0,4,7,3,3,0,0,0,7,10ZM7,6A1,1,0,1,1,6,7,1,1,0,0,1,7,6Z'/%3e%3cpath%20class='cls-6'%20d='M16.707,10.293a.956.956,0,0,0-.74-.293,1.006,1.006,0,0,0-.72.341L12.217,13.8l-2.51-2.511a1,1,0,0,0-1.414,0l-4,4a1,1,0,1,0,1.414,1.414L9,13.414l1.9,1.9L8.247,18.341a1,1,0,0,0,1.506,1.318l3.218-3.678.006,0,.007-.011,3.065-3.5,2.244,2.244a1,1,0,0,0,1.414-1.414Z'/%3e%3c/g%3e%3c/svg%3e",U="https://static.m-team.cc/static/cate/",Ft={architecture:"Mteam",TL_Selector:"div.app-content__inner",LOADING_PIC:"/static/media/logo.80b63235eaf702e44a8d.png",API:{search:{url:"/search",fullUrl:"/api/torrent/search",method:"POST"}},ICON:{SIZE:No,SEEDERS:So,LEECHERS:$o,DOWNLOAD:Ao,COLLECTION:To,PIN:"/static/trans.gif",PREVIEW:Vo},CATEGORY:{401:{src:U+"moviesd.png",alt:"電影/SD",color:"#c74854"},402:{src:U+"tvhd.png",alt:"影劇/綜藝/HD",color:"#276fb8"},403:{src:U+"tvsd.png",alt:"影劇/綜藝/SD",color:"#00a0e9"},404:{src:U+"bbc.png",alt:"紀錄",color:"#23ac38"},405:{src:U+"anime.png",alt:"動畫",color:"#996c34"},406:{src:U+"mv.png",alt:"演唱",color:"#8a57a1"},407:{src:U+"sport.png",alt:"運動",color:"#23ac38"},409:{src:U+"other.png",alt:"Misc(其他)",color:"#996c34"},419:{src:U+"moviehd.png",alt:"電影/HD",color:"#c01a20"},420:{src:U+"moviedvd.png",alt:"電影/DVDiSo",color:"#c74854"},421:{src:U+"moviebd.png",alt:"電影/Blu-Ray",color:"#00a0e9"},422:{src:U+"software.png",alt:"軟體",color:"#f39800"},423:{src:U+"game-pc-3.jpeg",alt:"PC遊戲",color:"#f39800"},427:{src:U+"Study.png",alt:"教育(書面)",color:"#7FC269"},434:{src:U+"flac.png",alt:"Music(無損)",color:"#8a57a1"},435:{src:U+"tvdvd.png",alt:"影劇/綜藝/DVDiSo",color:"#4dbebd"},438:{src:U+"tvbd.png",alt:"影劇/綜藝/BD",color:"#1897d6"},439:{src:U+"movieremux.png",alt:"電影/Remux",color:"#1b2a51"},451:{src:U+"Study_Video.png",alt:"教育(影片)",color:"#7FC269"},442:{src:U+"Study_Audio.png",alt:"有聲書",color:"#7FC269"},448:{src:U+"pcgame.png",alt:"TV遊戲",color:"#f39800"},410:{src:U+"cenhd.png",alt:"AV(有碼)/HD Censored",color:"#F520CB"},411:{src:U+"hgame.png",alt:"H-遊戲",color:"#f49800"},412:{src:U+"hanime.png",alt:"H-動畫",color:"#f49800"},413:{src:U+"hcomic.png",alt:"H-漫畫",color:"#f49800"},424:{src:U+"censd.png",alt:"AV(有碼)/SD Censored",color:"#DA55A9"},425:{src:U+"ivvideo.png",alt:"IV(寫真影集)",color:"#bb1e9a"},426:{src:U+"uendvd.png",alt:"AV(無碼)/DVDiSo Uncensored",color:"#f77afa"},429:{src:U+"uenhd.png",alt:"AV(無碼)/HD Uncensored",color:"#f52bcb"},430:{src:U+"uensd.png",alt:"AV(無碼)/SD Uncensored",color:"#db55a9"},431:{src:U+"cenbd.png",alt:"AV(有碼)/Blu-Ray Censored",color:"#19a7ec"},432:{src:U+"uenbd.png",alt:"AV(無碼)/Blu-Ray Uncensored",color:"#19a7ec"},433:{src:U+"ivpic.png",alt:"IV(寫真圖集)",color:"#bb1e9a"},436:{src:U+"adult0day.png",alt:"AV(網站)/0Day",color:"#bb1e9a"},437:{src:U+"cendvd.png",alt:"AV(有碼)/DVDiSo Censored",color:"#f77afa"},440:{src:U+"gayhd.gif",alt:"AV(Gay)/HD",color:"#f52bcb"}},TAG:{"4k":{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},"8k":{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},hdr:{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},hdr10:{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},"hdr10+":{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},hlg:{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},DoVi:{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},HDRVi:{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},中字:{color:"#ad2a2a",bgColor:"#d14a4a2e"},中配:{color:"#5b3991",bgColor:"#5b399129"}},INDEX:0,Iframe_Width:1260,get_bg_color:function(){const e=getComputedStyle(document.documentElement).getPropertyValue("--background-2"),t=getComputedStyle(document.documentElement).getPropertyValue("--bg-3");return e||t||"#000000"},special:function(){let e=Io(),t=Po();return e&&t},pageLoaded:function(){}};function Io(){const e=Array.from(document.querySelectorAll(".ant-table-row-level-0 .ant-col a[href]"));return e.forEach(function(t){t.addEventListener("click",function(r){r.preventDefault(),_iframe_switch.set(1),_iframe_url.set(t.href);});}),e.length}function Po(){document.querySelectorAll(".ant-image-mask").forEach(r=>{r.remove();});const t=Array.from(document.querySelectorAll(".torrent-list__thumbnail"));return t.forEach(r=>{r.classList+=" preview_Origin";}),t.length}const Mi=".preview_Origin";document.body.addEventListener("mouseover",function(e){if(e.target.matches(Mi)){const t=e,r=e.target;handleMouseOver(t,r);}});document.body.addEventListener("mouseout",function(e){e.target.matches(Mi)&&handleMouseOut(e);});document.body.addEventListener("mousemove",function(e){if(e.target.matches(Mi)){const t=e.target;handleMouseMove(e,t);}});var zo=Yt('<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="18" width="18" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle;"><path d="M7 7h10v2H7zm0 4h7v2H7z"></path><path d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"></path></svg>');function Xi(e){var t=zo();S(e,t);}const Ge=class Ge{static getInstance(){return Ge.instance||(Ge.instance=new Ge),Ge.instance}constructor(){if(Ge.instance)return Ge.instance;Ge.instance=this,this.container=null,this.imgElements=null,this.img_bg=null,this.img_main=null,this.unsubscribe=null,this.init(),this.unsubscribe=kr.subscribe(t=>{this.container&&(console.log(`[HoverView]<${Date.now()}> _state_hover_pic changed to ${t}, clearing preview`),this.img_main&&(this.img_main.style.objectFit=t?"contain":"scale-down"));});}init(){this.container=document.querySelector(".kp_container")||this.createPreview(),document.body.appendChild(this.container);}createPreview(){const t=Object.assign(document.createElement("div"),{className:"kp_container",style:`
      background-color: rgba(0,0,0,0.8);
      opacity: 1;
      position: fixed;
      z-index: 10000;
      pointer-events: none;
      transition: all .3s;
      display: none;
      `});return this.img_main=Object.assign(document.createElement("img"),{className:"kp_img",style:`
      position: absolute;
      z-index: 10002;
      pointer-events: none;
      width: 100%;
      height: 100%;
      object-fit: ${Jn(kr)?"contain":"scale-down"};
      `}),t.appendChild(this.img_main),this.img_bg=Object.assign(document.createElement("img"),{className:"kp_img",style:`
      position: absolute;
      z-index: 10001;
      pointer-events: none;
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: blur(8px);
      opacity: 0.9;
      `}),t.appendChild(this.img_bg),t}handleMouseOver(t,r){if(this.container){if(!r){console.warn("[FALL]: imgEle is null");return}if(this.img_main&&(this.img_main.style.objectFit=Jn(kr)?"contain":"scale-down"),Jn(_o)){const n=r.getAttribute("src");n&&(document.querySelectorAll(".kp_img").forEach(o=>{o.setAttribute("src",n);}),this.imgElements=r,this.updatePosition(t),this.container.style.display="block");}}}handleMouseMove(t){this.container&&this.container.style.display==="block"&&this.updatePosition(t);}updatePosition(t){const r=this.previewPosition(t);this.container.style.left=r.left,this.container.style.top=r.top,this.container.style.width=r.width,this.container.style.height=r.height;}previewPosition(t){let r=0,n=0;try{r=this.imgElements.naturalWidth,n=this.imgElements.naturalHeight;}catch{}const i=t.clientX,o=t.clientY,l=window.innerWidth,v=window.innerHeight,f={bot:{width:l,height:window.innerHeight-o},top:{width:l,height:o},right:{width:window.innerWidth-i,height:v},left:{width:i,height:v}};let d=0,c="";const a={top:{left:0,top:0,width:l+"px",height:o+"px"},bot:{left:0,top:o+"px",width:l+"px",height:window.innerHeight-o+"px"},left:{left:0,top:0,width:i+"px",height:v+"px"},right:{left:i+"px",top:0,width:window.innerWidth-i+"px",height:v+"px"}};for(const u in f){const _=Math.min(f[u].width/r,f[u].height/n);_>d&&(d=_,c=u);}return a[c]||{left:0,top:0,width:0,height:0}}clearPreview(){document.querySelectorAll(".kp_img").forEach(t=>{t.setAttribute("src","");}),this.container&&(this.container.style.display="none");}changeState(){if(this.img_main){let t=this.img_main.style.objectFit;this.img_main.style.objectFit=t=="contain"?"scale-down":"contain";}}destroy(){this.container&&(this.container.style.display="none",this.clearPreview()),this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null);}};Wn(Ge,"instance",null);let Zt=Ge;function Oo(){document.querySelectorAll(".kp_img").forEach(t=>{t.setAttribute("src","");});const e=document.querySelector(".kp_container");e&&(e.style.display="none");}window.__clearPreview=Oo;Zt.getInstance();const Ho="data:image/svg+xml,%3csvg%20width='256px'%20height='256px'%20viewBox='0%200%2024.00%2024.00'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20transform='matrix(1,%200,%200,%201,%200,%200)'%20%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'%20transform='translate(0,0),%20scale(1)'%20/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%23CCCCCC'%20stroke-width='0.048'%20/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M13%203L13.7071%202.29289C13.5196%202.10536%2013.2652%202%2013%202V3ZM14%2022C14.5523%2022%2015%2021.5523%2015%2021C15%2020.4477%2014.5523%2020%2014%2020V22ZM19%209H20C20%208.73478%2019.8946%208.48043%2019.7071%208.29289L19%209ZM18%2010C18%2010.5523%2018.4477%2011%2019%2011C19.5523%2011%2020%2010.5523%2020%2010H18ZM5.21799%2019.908L4.32698%2020.362H4.32698L5.21799%2019.908ZM6.09202%2020.782L6.54601%2019.891L6.54601%2019.891L6.09202%2020.782ZM6.09202%203.21799L5.63803%202.32698L5.63803%202.32698L6.09202%203.21799ZM5.21799%204.09202L4.32698%203.63803L4.32698%203.63803L5.21799%204.09202ZM13.109%208.45399L14%208V8L13.109%208.45399ZM13.546%208.89101L14%208L13.546%208.89101ZM17.2299%2017.7929C16.8394%2018.1834%2016.8394%2018.8166%2017.2299%2019.2071C17.6204%2019.5976%2018.2536%2019.5976%2018.6441%2019.2071L17.2299%2017.7929ZM15.0316%2015.2507C14.8939%2015.7856%2015.2159%2016.3308%2015.7507%2016.4684C16.2856%2016.6061%2016.8308%2016.2841%2016.9684%2015.7493L15.0316%2015.2507ZM17.9375%2020C17.3852%2020%2016.9375%2020.4477%2016.9375%2021C16.9375%2021.5523%2017.3852%2022%2017.9375%2022V20ZM17.9475%2022C18.4998%2022%2018.9475%2021.5523%2018.9475%2021C18.9475%2020.4477%2018.4998%2020%2017.9475%2020V22ZM13%202H8.2V4H13V2ZM4%206.2V17.8H6V6.2H4ZM8.2%2022H14V20H8.2V22ZM19.7071%208.29289L13.7071%202.29289L12.2929%203.70711L18.2929%209.70711L19.7071%208.29289ZM20%2010V9H18V10H20ZM4%2017.8C4%2018.3436%203.99922%2018.8114%204.03057%2019.195C4.06287%2019.5904%204.13419%2019.9836%204.32698%2020.362L6.10899%2019.454C6.0838%2019.4045%206.04612%2019.3038%206.02393%2019.0322C6.00078%2018.7488%206%2018.3766%206%2017.8H4ZM8.2%2020C7.62345%2020%207.25117%2019.9992%206.96784%2019.9761C6.69617%2019.9539%206.59545%2019.9162%206.54601%2019.891L5.63803%2021.673C6.01641%2021.8658%206.40963%2021.9371%206.80497%2021.9694C7.18864%2022.0008%207.65645%2022%208.2%2022V20ZM4.32698%2020.362C4.6146%2020.9265%205.07354%2021.3854%205.63803%2021.673L6.54601%2019.891C6.35785%2019.7951%206.20487%2019.6422%206.10899%2019.454L4.32698%2020.362ZM8.2%202C7.65645%202%207.18864%201.99922%206.80497%202.03057C6.40963%202.06287%206.01641%202.13419%205.63803%202.32698L6.54601%204.10899C6.59545%204.0838%206.69617%204.04612%206.96784%204.02393C7.25117%204.00078%207.62345%204%208.2%204V2ZM6%206.2C6%205.62345%206.00078%205.25117%206.02393%204.96784C6.04612%204.69617%206.0838%204.59545%206.10899%204.54601L4.32698%203.63803C4.13419%204.01641%204.06287%204.40963%204.03057%204.80497C3.99922%205.18864%204%205.65645%204%206.2H6ZM5.63803%202.32698C5.07354%202.6146%204.6146%203.07354%204.32698%203.63803L6.10899%204.54601C6.20487%204.35785%206.35785%204.20487%206.54601%204.10899L5.63803%202.32698ZM12%203V7.4H14V3H12ZM14.6%2010H19V8H14.6V10ZM12%207.4C12%207.66353%2011.9992%207.92131%2012.0169%208.13823C12.0356%208.36682%2012.0797%208.63656%2012.218%208.90798L14%208C14.0293%208.05751%2014.0189%208.08028%2014.0103%207.97537C14.0008%207.85878%2014%207.69653%2014%207.4H12ZM14.6%208C14.3035%208%2014.1412%207.99922%2014.0246%207.9897C13.9197%207.98113%2013.9425%207.9707%2014%208L13.092%209.78201C13.3634%209.92031%2013.6332%209.96438%2013.8618%209.98305C14.0787%2010.0008%2014.3365%2010%2014.6%2010V8ZM12.218%208.90798C12.4097%209.2843%2012.7157%209.59027%2013.092%209.78201L14%208V8L12.218%208.90798ZM18.937%2016C18.937%2016.1732%2018.8915%2016.3053%2018.6175%2016.5697C18.4638%2016.718%2018.2828%2016.8653%2018.0319%2017.074C17.7936%2017.2723%2017.5141%2017.5087%2017.2299%2017.7929L18.6441%2019.2071C18.86%2018.9913%2019.0805%2018.8033%2019.3109%2018.6116C19.5287%2018.4305%2019.7852%2018.2223%2020.0065%2018.0087C20.4825%2017.5493%2020.937%2016.9314%2020.937%2016H18.937ZM17.937%2015C18.4893%2015%2018.937%2015.4477%2018.937%2016H20.937C20.937%2014.3431%2019.5938%2013%2017.937%2013V15ZM16.9684%2015.7493C17.0795%2015.3177%2017.4724%2015%2017.937%2015V13C16.5377%2013%2015.3645%2013.957%2015.0316%2015.2507L16.9684%2015.7493ZM17.9375%2022H17.9475V20H17.9375V22Z'%20fill='%23c00000'%20/%3e%3c/g%3e%3c/svg%3e",Fo="data:image/svg+xml,%3csvg%20viewBox='-2.4%20-2.4%2028.80%2028.80'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23000000'%20%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'%20/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M15.6%2015.6C15.6%2015.6%2014.25%2013.8%2012%2013.8C9.75%2013.8%208.4%2015.6%208.4%2015.6M14.7%209.3H14.709M9.3%209.3H9.309M21%2012C21%2016.9706%2016.9706%2021%2012%2021C7.02944%2021%203%2016.9706%203%2012C3%207.02944%207.02944%203%2012%203C16.9706%203%2021%207.02944%2021%2012ZM15.15%209.3C15.15%209.54853%2014.9485%209.75%2014.7%209.75C14.4515%209.75%2014.25%209.54853%2014.25%209.3C14.25%209.05147%2014.4515%208.85%2014.7%208.85C14.9485%208.85%2015.15%209.05147%2015.15%209.3ZM9.75%209.3C9.75%209.54853%209.54853%209.75%209.3%209.75C9.05147%209.75%208.85%209.54853%208.85%209.3C8.85%209.05147%209.05147%208.85%209.3%208.85C9.54853%208.85%209.75%209.05147%209.75%209.3Z'%20stroke='%23000000'%20stroke-width='1.8'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3c/g%3e%3c/svg%3e";var we=lo(()=>Ft),Ro=P('<div class="card-category svelte-18y66sj"><img class="card_category-img svelte-18y66sj"> </div>'),Do=P('<a class="__main_title svelte-18y66sj" target="_blank" rel="noopener noreferrer"> </a>'),jo=P('<div class="pic_error svelte-18y66sj"><div><img style="height: 100%; width:60px; border-radius:20px;" alt="pic error" class="svelte-18y66sj"></div> <div class="ant-typography" style="color: white; font-size:16px;">GAY WARNING<br>同志警告</div></div>'),qo=P('<img class="lazy-image svelte-18y66sj">'),Bo=P('<div class="pic_error svelte-18y66sj" style=""><div><img style="height: 100%;width: 100px;" alt="no pic" class="svelte-18y66sj"></div> <div>本种没有图片</div></div>'),Zo=P('<div class="pic_error svelte-18y66sj" style=""><div><img style="height: 100%;width: 100px;" alt="pic error" class="svelte-18y66sj"></div> <div class="ant-typography">图片加载失败</div></div>'),Wo=P('<div class="hover-trigger svelte-18y66sj" role="button" aria-label="悬浮预览" tabindex="0"><img style="pointer-events: none;" alt="PREVIEW" class="svelte-18y66sj"></div>'),Go=P(`<img style="
                    background: url(/static/media/icons.8bb5446ebbbd07050285.gif) 0 -202px;
                    height: 14px;
                    width: 14px;" alt="PIN" class="svelte-18y66sj">`),Uo=P('<div class="card_info__topping svelte-18y66sj"></div> &nbsp;',1),Xo=P('<div class="_tag svelte-18y66sj"> </div>'),Yo=P('<div class="_tag _tag_diy svelte-18y66sj">DIY</div>'),Qo=P('<div class="_tag _tag_dub svelte-18y66sj">国配</div>'),Jo=P('<div class="_tag _tag_sub svelte-18y66sj">中字</div>'),Ko=P('<div class="_tag svelte-18y66sj"> </div>'),el=P('<div class="cl-tags svelte-18y66sj"><!> <!> <!> <!></div>'),tl=P(`<img style="
                  background: url(/static/media/icons.8bb5446ebbbd07050285.gif) 0 -202px;
                  height: 14px;
                  width: 14px;" alt="PIN" class="svelte-18y66sj">`),rl=P('<div class="card_info__topping svelte-18y66sj"></div> &nbsp;',1),nl=P('<div class="_tag svelte-18y66sj"> </div>'),il=P('<div class="card-index svelte-18y66sj"><!> <!></div>'),sl=P('<div class="card-index card-index-right svelte-18y66sj"> </div>'),al=P('<div class="card_info-item card_info__sub_title svelte-18y66sj" style="padding-top: 4px;"><div> </div></div>'),ol=P('<div class="_tag _tag_diy svelte-18y66sj">DIY</div>'),ll=P('<div class="_tag _tag_dub svelte-18y66sj">国配</div>'),cl=P('<div class="_tag _tag_sub svelte-18y66sj">中字</div>'),ul=P('<div class="_tag svelte-18y66sj"> </div>'),vl=P('<div class="cl-tags svelte-18y66sj"><!> <!> <!> <!></div>'),dl=P('<div class="card_info-item card_info__dl_and_cl svelte-18y66sj"><button title="(原列表的这俩按钮会消失)">下载 & 收藏</button></div>'),fl=P('<div class="card_info-item card_info__upload_time svelte-18y66sj"><div> </div></div>'),_l=P('<div class="card_info-item card_info__statistics svelte-18y66sj"><!> &nbsp; <b> </b> &nbsp;&nbsp; <img alt="SVG_Seeders"> &nbsp; <b> </b> &nbsp;&nbsp; <img alt="SVG_Leechers"> &nbsp; <b> </b></div>'),hl=P('<div class="card_info svelte-18y66sj"><!>  <!> <!> <!> <!></div>'),gl=P(`<div class="card_holder svelte-18y66sj"><!> <div class="card_title"><!></div> <div class="card_pic svelte-18y66sj"><!> <!>  <div class="hover-overlay svelte-18y66sj"><div class="overlay-content svelte-18y66sj"><div class="__inner_index_and_size svelte-18y66sj"><div class="card-index __inner_index svelte-18y66sj" style="background-color:black; color:white"><!> <!></div> <button class="__iframe_button svelte-18y66sj">内窗预览</button> <div class="card-index card-index-right __inner_index __inner_size svelte-18y66sj"> </div></div> <div class="card-category card_info-item svelte-18y66sj"><img class="card_category-img card_category_square svelte-18y66sj" style="width: 36px;height: 36px;"> </div> <div style="width: 100%;" class="card_info-item card_info__sub_title svelte-18y66sj"><a class="__main_title __straight svelte-18y66sj" target="_blank" rel="noopener noreferrer"> </a></div> <div style="width: 100%;" class="card_info-item card_info__sub_title svelte-18y66sj"><div class="__sub_title svelte-18y66sj"> </div></div>  <!> <div class="card_info-item card_info__upload_time svelte-18y66sj"><div> </div></div> <div class="card_info-item card_info__statistics svelte-18y66sj"><div class="__center svelte-18y66sj"><!> <b> </b></div> <div class="__center svelte-18y66sj"><img style="width: 14px; height: 14px;" alt="SVG_Seeders" class="svelte-18y66sj"> <b> </b></div> <div class="__center svelte-18y66sj"><img style="width: 14px; height: 14px;" alt="SVG_Leechers" class="svelte-18y66sj"> <b> </b></div> <div><button title="(原列表的这俩按钮会消失)" style="
                background-color: inherit; border-color:transparent">下载&收藏</button></div></div></div></div> <!> <!></div> <!></div>`);function pl(e,t){dt(t,false);const r=Qt(),n=()=>ce(As,"$_mt_categories",r),i=()=>ce($s,"$_mt_label",r),o=()=>ce(di,"$_block_gay",r),l=()=>ce(He,"$_card_detail",r),v=()=>ce(ln,"$_card_radius",r),f=()=>ce(vi,"$_pic_failed_showInfo",r),d=()=>ce(ui,"$_show_hover_pic",r);let c=pe(t,"_torrentInfo",8),a=q(),u=q(false),_=q([]),m=q("NORMAL"),p=q(null);const N={FREE:"免费",PERCENT_50:"50%"},C=()=>{const w=new Date,$=new Date(s(p));return Math.floor(($.getTime()-w.getTime())/(1e3*3600))};let y=q();const I="rgba(255, 255, 255, 0.5)";let M=q(I),k=q("未知分类"),b=q(""),V=q(""),E=q("black"),x=q([]);function Z(w){if(w===0)return "0 B";const $=["B","KB","MB","GB","TB"];let F=0,J=w;for(;J>=1024&&F<$.length-1;)J/=1024,F++;return `${J.toFixed(2).replace(/\.?0+$/,"")} ${$[F]}`}let j=q(),W=q();function Q(w,$){const F=document.querySelectorAll(`a[href^="/detail/${w}"]`),J=[];F.forEach(de=>{if(!/\/detail\/\d+/.test(de.href))return;const ve=de.closest("tr");ve&&ve.querySelectorAll("button").forEach(he=>{he.querySelector("span.ant-btn-icon")&&J.push(he);});}),J.length?(J[0].style.margin=0,[...new Set(J)].forEach(ve=>{$.appendChild(ve);})):Ht.error("没找到捏, 建议在种子详情里下载收藏~");}let ae=q(false),R=q(false),oe=Zt.getInstance(),fe=q(),K=q(),xe=q(0);function O(){s(K)&&L(xe,s(K).offsetHeight);}let ie=q(false),T=q(false);const re="/static/cate/gayhd.gif";let Me=q(false);const ue="https://static.m-team.cc/static/media/logo.80b63235eaf702e44a8d.png";let Qe=q(ue),Y=q(),_t,tt=q(false);const Hr=()=>{s(Qe)&&!s(tt)&&(Ie(Y,s(Y).style.width="100%"),Ie(Y,s(Y).src=s(Qe)),s(Y).classList.add("loaded"),Ie(Y,s(Y).style.opacity=1),L(tt,true),s(K)&&O());};function Jt(){ye(Ss,"https://"+location.host+"/detail/"+s(a).id),ye(on,1);}Nn(()=>{s(tt)||(_t=new IntersectionObserver(w=>{w.forEach($=>{$.isIntersecting&&(Hr(),_t.unobserve(s(Y)));});},{rootMargin:"100px"}),s(Y)&&!s(tt)&&_t.observe(s(Y)),s(a).pt_fall_highlight&&s(y).scrollIntoView({behavior:"smooth"})),O(),s(Y)&&Ie(Y,s(Y).style.width="auto");}),Li(()=>{_t&&_t.disconnect();}),Ae(()=>mt(c()),()=>{var w,$,F,J,de,ve,he;!c()||typeof c()!="object"?(console.warn("Mteam_Card: _torrentInfo 数据格式错误",c()),L(a,{id:"error",name:"数据错误",category:"0",imageList:[],labelsNew:[],size:0,status:{toppingLevel:"0",discount:"NORMAL",discountEndTime:null,comments:"0",seeders:"0",leechers:"0",timesCompleted:"0"},smallDescr:"",labels:"0",createdDate:"",index:0})):L(a,{...c(),id:c().id||"unknown",name:c().name||"未知种子",category:c().category||"0",imageList:Array.isArray(c().imageList)?c().imageList:[],labelsNew:Array.isArray(c().labelsNew)?c().labelsNew:[],size:typeof c().size=="number"?c().size:typeof c().size=="string"&&Number(c().size)||0,status:{toppingLevel:((w=c().status)==null?void 0:w.toppingLevel)||"0",discount:(($=c().status)==null?void 0:$.discount)||"NORMAL",discountEndTime:((F=c().status)==null?void 0:F.discountEndTime)||null,comments:((J=c().status)==null?void 0:J.comments)||"0",seeders:((de=c().status)==null?void 0:de.seeders)||"0",leechers:((ve=c().status)==null?void 0:ve.leechers)||"0",timesCompleted:((he=c().status)==null?void 0:he.timesCompleted)||"0",...c().status},smallDescr:c().smallDescr||"",labels:c().labels||"0",createdDate:c().createdDate||"",index:typeof c().index=="number"?c().index:0});}),Ae(()=>s(a),()=>{s(a).status.toppingLevel&&s(a).status.toppingLevel!=="0"?L(_,Array(Number(s(a).status.toppingLevel)).fill()):L(_,[]);}),Ae(()=>s(a),()=>{L(m,s(a).status.discount),L(p,s(a).status.discountEndTime);}),Ae(()=>(s(a),we(),n(),s(M),kt),()=>{var w,$,F,J,de;L(V,`https://${location.host}/browse?cat=`+s(a).category),we().CATEGORY[s(a).category]||(Ht.open({type:"warning",message:`存在未知分类: ${s(a).category}`}),we(we().CATEGORY[s(a).category]={src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZmMDAwMCIvPjwvc3ZnPg==",alt:"未知分类(TG或论坛联系我)",color:I})),L(k,((w=n()[s(a).category])==null?void 0:w.nameChs)??(($=we().CATEGORY[s(a).category])==null?void 0:$.alt)??"未知分类"),L(b,(F=n()[s(a).category])!=null&&F.image?U+n()[s(a).category].image:((J=we().CATEGORY[s(a).category])==null?void 0:J.src)??""),L(M,((de=we().CATEGORY[s(a).category])==null?void 0:de.color)??I),L(E,s(M)?kt(s(M)):"black");}),Ae(()=>(s(a),we(),i()),()=>{L(x,[]),s(a).labelsNew.length&&L(x,s(a).labelsNew.map(w=>{if(we().TAG[w])return {key:w,config:we().TAG[w]};if(i()){console.warn("[FALL]: 存在本地没有的 tag: ",w);let $;for(const F in i())if(w==i()[F].tag){$=i()[F];break}if($)return {key:w,config:$}}return null}).filter(Boolean));}),Ae(()=>s(K),()=>{s(K)&&O();}),Ae(()=>s(a),()=>{L(Qe,s(a).imageList[0]||ue);}),Ae(()=>(s(a),o(),s(Y),s(Qe),s(K)),()=>{s(a).category==440&&o()==0&&s(Y)&&(Ie(Y,s(Y).style.width="100%"),Ie(Y,s(Y).src=s(Qe)),s(Y).classList.add("loaded"),Ie(Y,s(Y).style.opacity=1),L(tt,true),s(K)&&O());}),Ae(()=>l(),()=>{L(Me,l().sub_title||l().tags||l().download_collect||l().upload_time||l().statistics);}),Pr(),Mt();var Nt=gl(),Kt=h(Nt);{var Fr=w=>{var $=Ro(),F=h($),J=g(F);D(()=>{A($,"data-href",s(V)),A($,"style",`
      background-color: ${s(M)??"transparent"??""};
      color: ${s(E)??""}`),A(F,"src",s(b)),A(F,"alt",s(k)),ee(J,`    ${s(k)??""}`);}),S(w,$);};G(Kt,w=>{l().category&&w(Fr);});}var St=g(Kt,2),$n=h(St);{var er=w=>{var $=Do(),F=h($);D(()=>{A($,"href","/detail/"+s(a).id),ee(F,s(a).name);}),S(w,$);};G($n,w=>{(l().title||f()&&(s(ie)||s(T)))&&w(er);});}var ht=g(St,2),tr=h(ht);{var An=w=>{var $=lt(),F=Te($);{var J=ve=>{var he=jo(),Ne=h(he),Ce=h(Ne);A(Ce,"src",re),D(()=>A(he,"style",`  background-color: ${s(M)??""}`)),S(ve,he);},de=ve=>{var he=lt(),Ne=Te(he);{var Ce=le=>{var _e=qo();at(_e,ne=>L(Y,ne),()=>s(Y)),D(()=>{A(_e,"src",s(tt)?s(Qe):ue),A(_e,"data-src",s(Qe)),A(_e,"alt",s(a).id);}),B("error",_e,()=>{L(ie,true),s(Y)||console.log(`<${s(a).index}>[${s(a).id}] imgElement 丢失.`);}),S(le,_e);},Je=le=>{var _e=Bo(),ne=h(_e),ge=h(ne);A(ge,"src",Fo),B("load",ge,()=>{L(T,true);}),S(le,_e);};G(Ne,le=>{s(a).imageList[0]?le(Ce):le(Je,false);},true);}S(ve,he);};G(F,ve=>{o()&&s(a).category==440?ve(J):ve(de,false);});}S(w,$);},Tn=w=>{var $=Zo(),F=h($),J=h(F);A(J,"src",Ho);var de=g(F,2);const ve=Lr(()=>`color: ${kt(s(M))??""}; font-size:16px;`);D(()=>A(de,"style",s(ve))),S(w,$);};G(tr,w=>{s(ie)?w(Tn,false):w(An);});}var rr=g(tr,2);{var Vn=w=>{var $=Wo(),F=h($);D(()=>A(F,"src",we().ICON.PREVIEW)),B("click",$,()=>{oe.changeState();}),B("mouseover",$,J=>{L(ae,true),oe.handleMouseOver(J,s(Y));}),B("keydown",$,J=>{J.key==="Escape"&&oe.clearPreview();}),S(w,$);};G(rr,w=>{d()&&!(s(ie)||s(T))&&w(Vn);});}var We=g(rr,2),Rr=h(We),nr=h(Rr),Dr=h(nr),ir=h(Dr);{var In=w=>{var $=Uo(),F=Te($);bt(F,5,()=>s(_),gr,(J,de)=>{var ve=Go();D(()=>A(ve,"src",we().ICON.PIN)),S(J,ve);}),S(w,$);};G(ir,w=>{s(a).status.toppingLevel!="0"&&w(In);});}var sr=g(ir),Pn=g(sr);{var jr=w=>{var $=Xo(),F=h($);D(()=>ee(F,`${N[s(m)]??""}${(s(p)?":"+C()+"小时":"")??""}`)),D(()=>{pr($,"_tag_discount_free",s(m)=="FREE"),pr($,"_tag_discount_50",s(m)=="PERCENT_50");}),S(w,$);};G(Pn,w=>{s(m)!="NORMAL"&&w(jr);});}var ar=g(Dr,2),or=g(ar,2),zn=h(or);D(()=>ee(zn,Z(s(a).size)));var gt=g(nr,2),lr=h(gt),qr=g(lr),cr=g(gt,2),$t=h(cr),On=h($t),ur=g(cr,2),Hn=h(ur),Br=h(Hn),Zr=g(ur,2);{var Wr=w=>{var $=el(),F=h($);{var J=le=>{var _e=Yo();S(le,_e);};G(F,le=>{(Number(s(a).labels)&1)===1&&le(J);});}var de=g(F,2);{var ve=le=>{var _e=Qo();S(le,_e);};G(de,le=>{(Number(s(a).labels)&2)===2&&le(ve);});}var he=g(de,2);{var Ne=le=>{var _e=Jo();S(le,_e);};G(he,le=>{(Number(s(a).labels)&4)===4&&le(Ne);});}var Ce=g(he,2);{var Je=le=>{var _e=lt(),ne=Te(_e);bt(ne,1,()=>s(x),gr,(ge,ke)=>{var Ee=Ko(),Tt=h(Ee);D(()=>{A(Ee,"style",`background-color: ${s(ke).config.bgColor??""}; color: ${s(ke).config.color??""}`),ee(Tt,s(ke).key);}),S(ge,Ee);}),S(le,_e);};G(Ce,le=>{s(x).length!=0&&le(Je);});}S(w,$);};G(Zr,w=>{(Number(s(a).labels)||s(x).length)&&w(Wr);});}var Gr=g(Zr,2),Ur=h(Gr),Fn=h(Ur),Xr=g(Gr,2),Yr=h(Xr),Qr=h(Yr);Xi(Qr);var Rn=g(Qr,2),H=h(Rn),rt=g(Yr,2),nt=h(rt),vr=g(nt,2),dr=h(vr),At=g(rt,2),Jr=h(At),Vs=g(Jr,2),Is=h(Vs),Dn=g(At,2),Ni=h(Dn);at(Dn,w=>L(j,w),()=>s(j)),at(Rr,w=>L(K,w),()=>s(K)),at(We,w=>L(fe,w),()=>s(fe));var Si=g(We,2);{var Ps=w=>{var $=il(),F=h($);{var J=Ne=>{var Ce=rl(),Je=Te(Ce);bt(Je,5,()=>s(_),gr,(le,_e)=>{var ne=tl();D(()=>A(ne,"src",we().ICON.PIN)),S(le,ne);}),S(Ne,Ce);};G(F,Ne=>{l().topping&&s(a).status.toppingLevel!="0"&&Ne(J);});}var de=g(F),ve=g(de);{var he=Ne=>{var Ce=nl(),Je=h(Ce);D(()=>ee(Je,`${N[s(m)]??""}${(s(p)?":"+C()+"小时":"")??""}`)),D(()=>{pr(Ce,"_tag_discount_free",s(m)=="FREE"),pr(Ce,"_tag_discount_50",s(m)=="PERCENT_50");}),S(Ne,Ce);};G(ve,Ne=>{l().free&&s(m)!="NORMAL"&&Ne(he);});}D(()=>ee(de,` ${s(a).index??""}

          `)),S(w,$);};G(Si,w=>{s(u)||w(Ps);});}var zs=g(Si,2);{var Os=w=>{var $=sl(),F=h($);D(()=>ee(F,Z(s(a).size))),D(()=>A($,"style",`background-color: ${s(M)??"transparent"??""}; color:${s(E)??""}`)),S(w,$);};G(zs,w=>{l().size&&!s(u)&&w(Os);});}var Hs=g(ht,2);{var Fs=w=>{var $=hl(),F=h($);{var J=ne=>{var ge=al(),ke=h(ge),Ee=h(ke);D(()=>ee(Ee,s(a).smallDescr)),S(ne,ge);};G(F,ne=>{(l().sub_title||f()&&(s(ie)||s(T)))&&ne(J);});}var de=g(F,2);{var ve=ne=>{var ge=vl(),ke=h(ge);{var Ee=be=>{var it=ol();S(be,it);};G(ke,be=>{(s(a).labels&1)===1&&be(Ee);});}var Tt=g(ke,2);{var Kr=be=>{var it=ll();S(be,it);};G(Tt,be=>{(s(a).labels&2)===2&&be(Kr);});}var fr=g(Tt,2);{var jn=be=>{var it=cl();S(be,it);};G(fr,be=>{(s(a).labels&4)===4&&be(jn);});}var en=g(fr,2);{var qn=be=>{var it=lt(),Rs=Te(it);bt(Rs,1,()=>s(x),gr,(Ds,Bn)=>{var Zn=ul(),js=h(Zn);D(()=>{A(Zn,"style",`background-color: ${s(Bn).config.bgColor??""}; color: ${s(Bn).config.color??""}`),ee(js,s(Bn).key);}),S(Ds,Zn);}),S(be,it);};G(en,be=>{s(x).length!=0&&be(qn);});}S(ne,ge);};G(de,ne=>{l().tags&&(Number(s(a).labels)||s(x).length)&&ne(ve);});}var he=g(de,2);{var Ne=ne=>{var ge=dl(),ke=h(ge);at(ge,Ee=>L(W,Ee),()=>s(W)),D(()=>A(ke,"style",`
              background-color: ${(s(M)?s(M):"transparent")??""};
              color: ${s(E)??""} ;
              border: 3px solid transparent;
              border-radius: 14px;
              overflow: hidden;
            `)),B("click",ke,Ee=>{Q(s(a).id,s(W)),Ee.target.style.display="none";}),S(ne,ge);};G(he,ne=>{l().download_collect&&ne(Ne);});}var Ce=g(he,2);{var Je=ne=>{var ge=fl(),ke=h(ge),Ee=h(ke);D(()=>ee(Ee,`上传时间:${s(a).createdDate??""}`)),S(ne,ge);};G(Ce,ne=>{l().upload_time&&ne(Je);});}var le=g(Ce,2);{var _e=ne=>{var ge=_l(),ke=h(ge);Xi(ke);var Ee=g(ke,2),Tt=h(Ee),Kr=g(Ee,2),fr=g(Kr,2),jn=h(fr),en=g(fr,2),qn=g(en,2),be=h(qn);D(()=>{ee(Tt,s(a).status.comments),A(Kr,"src",we().ICON.SEEDERS),ee(jn,s(a).status.seeders),A(en,"src",we().ICON.LEECHERS),ee(be,s(a).status.leechers);}),S(ne,ge);};G(le,ne=>{l().statistics&&ne(_e);});}D(()=>A($,"style",`
        background-color: ${(s(M)?s(M)+"b0":"transparent")??""};
        color: ${s(E)??""}`)),S(w,$);};G(Hs,w=>{(s(Me)||f()&&(s(ie)||s(T)))&&w(Fs);});}at(Nt,w=>L(y,w),()=>s(y)),D(()=>{Re(Nt,"--borderRadius",v().enabled?v().value+"px":"0"),A(St,"style",`background-color: ${s(M)+"10"}`),A(ht,"style",`min-height: ${s(xe)+24}px;`),Re(ht,"--cateColor",s(M)+"b0"),ee(sr,` ${s(a).index??""}

              `),A(ar,"style",`background-color: ${s(M)??"transparent"??""}; color:${s(E)??""}`),A(or,"style",`background-color: ${s(M)??"transparent"??""}; color:${s(E)??""}`),A(gt,"data-href",s(V)),A(gt,"style",`
            height: 40px;
            background-color: ${s(M)??"transparent"??""};
            color: ${s(E)??""}`),A(lr,"src",s(b)),A(lr,"alt",s(k)),ee(qr,`    ${s(k)??""}`),A($t,"href","/detail/"+s(a).id),A($t,"title",s(a).name),ee(On,s(a).name),ee(Br,s(a).smallDescr),ee(Fn,`上传时间:${s(a).createdDate??""}`),ee(H,s(a).status.comments),A(nt,"src",we().ICON.SEEDERS),ee(dr,s(a).status.seeders),A(Jr,"src",we().ICON.LEECHERS),ee(Is,s(a).status.leechers),A(Dn,"style",`
              background-color: ${(s(M)?s(M):"transparent")??""};
              color: ${s(E)??""} ;
              border-radius: 14px;
              overflow: hidden;
            `);}),B("click",ar,Jt),B("mousedown",cr,xr(w=>{w.stopPropagation();})),B("mousedown",Ni,xr(w=>{w.stopPropagation();})),B("click",Ni,xr(w=>{Q(s(a).id,s(j)),w.target.style.display="none";})),B("mouseenter",We,()=>{s(Y)&&Ie(Y,s(Y).style.filter="blur(2px)"),Ie(fe,s(fe).style.opacity="1"),L(u,true);}),B("mousemove",We,w=>{L(R,true),s(ae)&&s(R)&&oe.handleMouseMove(w);}),B("mouseleave",We,()=>{s(Y)&&Ie(Y,s(Y).style.filter="none"),Ie(fe,s(fe).style.opacity="0"),L(u,false),L(R,false),s(ae)&&(L(ae,false),oe.clearPreview());}),B("mousedown",We,Ei(Jt)),S(e,Nt),ft();}var ml=P('<p class="text_center svelte-1vmncc1">没有结果捏</p>'),yl=P('<main><div class="fall_holder svelte-1vmncc1" style=""><!></div></main>');function bl(e,t){var M,k,b,V,E;dt(t,false);const r=Qt(),n=()=>ce(br,"$_card_layout",r),i=q();let o=pe(t,"infoList",8),l=q(Array.isArray((M=o())==null?void 0:M.data)?o().data.filter(x=>x&&typeof x=="object"):[]);s(l).length;let v=q();Ft.get_bg_color(),Object.keys(s(l)).forEach((x,Z)=>{s(l)[x]&&Ie(l,s(l)[x].index=Z+1);}),console.log("Mteam_Fall:First	"+s(l).length);function f(x,Z=true){let j=Array.isArray(x==null?void 0:x.data)?x.data:[];const W=j.filter(Q=>Q&&typeof Q=="object");if(console.log("Mteam_Fall:New:	"+j.length+" (有效数据: "+W.length+")"),W.length===0){console.warn("Mteam_Fall: 没有有效数据，跳过更新");return}Z?(d(),W.forEach((Q,ae)=>{Q.index=ae+1,ae==0&&(Q.pt_fall_highlight=true);}),L(l,[...W])):(W.forEach((Q,ae)=>{Q.index=ae+1+s(l).length,ae==0&&(Q.pt_fall_highlight=true);}),L(l,[...s(l),...W]));}function d(){L(l,[]);}function c(x,Z){Z=="top"&&x.scrollIntoView({behavior:"smooth"}),Z=="bottom"&&(x.scrollIntoView({behavior:"auto",block:"end",inline:"nearest"}),x.scrollIntoView({behavior:"auto",block:"end",inline:"nearest"}),x.scrollIntoView({behavior:"auto",block:"end",inline:"nearest"}));}function a(x="top"){c(s(v),x);}let u,_,m;try{u=Ot(localStorage.getItem("persist:persist")),_=(b=(k=u.sysinfo)==null?void 0:k.sysConf)==null?void 0:b.TORRENT_LABEL_CONFIG,m=(E=(V=u.sysinfo)==null?void 0:V.categoryList)==null?void 0:E.categorys,_&&ye($s,_),m&&ye(As,m);}catch(x){console.error(x),console.log(u);}Ae(()=>s(l),()=>{L(i,[...s(l)]);}),Pr(),Mt();var p=yl(),N=h(p),C=h(N);{var y=x=>{ko(x,{animate:true,get items(){return s(i)},get minColWidth(){return n().min},get maxColWidth(){return n().max},get gap(){return n().gap},children:Aa,$$slots:{default:(Z,j)=>{const W=Lr(()=>j.item);pl(Z,{get _torrentInfo(){return s(W)}});}}});},I=x=>{var Z=ml();S(x,Z);};G(C,x=>{s(i).length?x(y):x(I,false);});}return at(p,x=>L(v,x),()=>s(v)),S(e,p),Qn(t,"updateList",f),Qn(t,"clearList",d),Qn(t,"focusFall",a),ft({updateList:f,clearList:d,focusFall:a})}let wl="0.3.13";var xl=Yt('<svg class="tgme_logo" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle cx="17" cy="17" fill="#40a9ff" r="17"></circle><path d="m7.06510669 16.9258959c5.22739451-2.1065178 8.71314291-3.4952633 10.45724521-4.1662364 4.9797665-1.9157646 6.0145193-2.2485535 6.6889567-2.2595423.1483363-.0024169.480005.0315855.6948461.192827.1814076.1361492.23132.3200675.2552048.4491519.0238847.1290844.0536269.4231419.0299841.65291-.2698553 2.6225356-1.4375148 8.986738-2.0315537 11.9240228-.2513602 1.2428753-.7499132 1.5088847-1.2290685 1.5496672-1.0413153.0886298-1.8284257-.4857912-2.8369905-1.0972863-1.5782048-.9568691-2.5327083-1.3984317-4.0646293-2.3321592-1.7703998-1.0790837-.212559-1.583655.7963867-2.5529189.2640459-.2536609 4.7753906-4.3097041 4.755976-4.431706-.0070494-.0442984-.1409018-.481649-.2457499-.5678447-.104848-.0861957-.2595946-.0567202-.3712641-.033278-.1582881.0332286-2.6794907 1.5745492-7.5636077 4.6239616-.715635.4545193-1.3638349.6759763-1.9445998.6643712-.64024672-.0127938-1.87182452-.334829-2.78737602-.6100966-1.12296117-.3376271-1.53748501-.4966332-1.45976769-1.0700283.04048-.2986597.32581586-.610598.8560076-.935815z" fill="#fff"></path></g></svg>');function Cl(e,t){let r=pe(t,"height",8,34),n=pe(t,"width",8,34);var i=xl();D(()=>{A(i,"height",r()),A(i,"width",n());}),S(e,i);}var kl=P('<div class="modal-overlay svelte-1a87xm5" role="button" aria-hidden="true"><div class="modal-content svelte-1a87xm5" role="button" aria-hidden="true"><div class="modal-header svelte-1a87xm5"><h3 class="svelte-1a87xm5">关于 PT-Fall</h3> <button class="close-btn svelte-1a87xm5">&times;</button></div> <div class="modal-body svelte-1a87xm5"><h4 class="svelte-1a87xm5">PT-Fall 是一个专为 M-team 站点量身定制的瀑布流视图插件</h4> <p class="svelte-1a87xm5">Github: <a href="https://github.com/KesaubeEire/PT_Fall-View" target="_blank">https://github.com/KesaubeEire/PT_Fall-View</a></p> <p class="svelte-1a87xm5">GreaseFork: <a href="https://greasyfork.org/zh-CN/scripts/543925" target="_blank">https://greasyfork.org/zh-CN/scripts/543925</a></p></div></div></div>'),El=P('<div class="modal-overlay svelte-1a87xm5" role="button" aria-hidden="true"><div class="modal-content svelte-1a87xm5" role="button" aria-hidden="true"><div class="modal-header svelte-1a87xm5"><h3 class="svelte-1a87xm5">FAQ - 常见问题</h3> <button class="close-btn svelte-1a87xm5">&times;</button></div> <div class="modal-body svelte-1a87xm5"><h4 class="svelte-1a87xm5">Q: 如何联系反馈问题</h4> <p class="svelte-1a87xm5"><a class="__btn __btnWide svelte-1a87xm5" href="https://t.me/+Nd_qIisDjQ80ZTc9" target="_blank"><!> &nbsp;Telegram</a></p> <h4 class="svelte-1a87xm5">Q: 找不到悬浮框</h4> <button class="__btn svelte-1a87xm5">重置悬浮框位置</button> <p class="svelte-1a87xm5"><br>可以通过拖拽悬浮框顶部的颜色条来移动悬浮框的位置 <br>从 PTPP 那里来的灵感 ( 感恩 ||T|| 佬 )</p> <h4 class="svelte-1a87xm5">Q: 插件没有生效怎么办</h4> <p class="svelte-1a87xm5">可能是浏览器缓存了请求<br>尝试使用 Ctrl+Shift+R / Ctrl+F5 强制刷新页面</p> <h4 class="svelte-1a87xm5">Q: 如何切换瀑布流视图</h4> <p class="svelte-1a87xm5">点击悬浮面板中的第一个图标(瀑布/列表)按钮<br>即可在瀑布流和原列表视图间切换</p> <h4 class="svelte-1a87xm5">Q: 如何调整卡片布局</h4> <p class="svelte-1a87xm5">点击悬浮面板中的"配置"按钮<br>可以调整卡片的最小 / 最大宽度、间隔等参数</p> <h4 class="svelte-1a87xm5">Q: 快捷键</h4> <p class="svelte-1a87xm5"><span class="modal-code svelte-1a87xm5">x</span> 可以切换瀑布流视图</p> <p class="svelte-1a87xm5"><span class="modal-code svelte-1a87xm5">ESC</span> 可以从 次级菜单 / 配置菜单 / iframe 中退出</p> <h4 class="svelte-1a87xm5">Q: 深色模式颜色有些不对劲怎么办?</h4> <p class="svelte-1a87xm5">先刷新一下试试, 有些字体颜色不能即时更改<br>刷新后就可以了<br>还有颜色不对劲的 telegram 上截图告诉我</p></div></div></div>'),Ll=P('<div class="entry_mteam"><div class="ant-typography" style="line-height: 1.5; text-align: center;"><button class="__btn svelte-1a87xm5" id="_ptFall_about">PT-Fall<br><span style="font-weight: 600;"></span></button> <button class="__btn svelte-1a87xm5" id="_ptFall_faq">常见问题<br>FAQ</button></div></div> <!> <!>',1);function Ml(e,t){dt(t,false);const r=Qt(),n=()=>ce(Cr,"$_isFallView",r),i=()=>ce(wt,"$_textColor",r);let o=q(false),l=q(false);function v(){L(o,true);}function f(){L(o,false);}function d(){L(l,true);}function c(){L(l,false);}let a=q();Ae(()=>n(),()=>{L(a,n()?"#4ff74f":"yellow");}),Pr(),Mt();var u=Ll();B("keydown",Er,b=>{b.key==="Escape"&&(f(),c());},true);var _=Te(u),m=h(_),p=h(m),N=g(h(p),2);N.textContent=`[v${wl}]`;var C=g(p,2),y=g(_,2);{var I=b=>{var V=kl(),E=h(V),x=h(E),Z=g(h(x),2);D(()=>A(E,"style",`color: ${i().t3}`)),B("click",Z,c),B("click",E,xr(function(j){Zi.call(this,t,j);})),jt(3,V,()=>qt,()=>({duration:200})),B("click",V,c),S(b,V);};G(y,b=>{s(l)&&b(I);});}var M=g(y,2);{var k=b=>{var V=El(),E=h(V),x=h(E),Z=g(h(x),2),j=g(x,2),W=g(h(j),2),Q=h(W),ae=h(Q);Cl(ae,{height:24,width:24});var R=g(W,4),oe=g(R,18),fe=h(oe),K=g(oe,2),xe=h(K);D(()=>{A(E,"style",`color: ${i().t3}`),A(Q,"style",`color: ${i().t2}`),Re(Q,"--hover","#40a9ff"),A(R,"style",`color: ${i().t2}`),Re(R,"--hover","#40a9ff"),A(fe,"style",`color: ${i().t1}`),A(xe,"style",`color: ${i().t1}`);}),B("click",Z,f),B("click",R,()=>{ye(ci,{x:0,y:0});}),B("click",E,xr(function(O){Zi.call(this,t,O);})),jt(3,V,()=>qt,()=>({duration:200})),B("click",V,f),S(b,V);};G(M,b=>{s(o)&&b(k);});}D(()=>{A(p,"style",`color: ${i().t2}`),Re(p,"--hover","green"),Re(N,"color",s(a)),A(C,"style",`color: ${i().t2}`),Re(C,"--hover","#40a9ff");}),B("click",p,d),B("click",C,v),S(e,u),ft();}function Nl(e,t){dt(t,false);const r=Qt(),n=()=>ce(Cr,"$_isFallView",r),i=()=>ce(wt,"$_textColor",r);let o,l,v,f=true,d=false,c=getComputedStyle(document.documentElement).getPropertyValue("--bg-2").trim(),a,u=null,_=null,m=null,p=[],N=null,C=[];const y=q(document.createElement("div"));s(y).classList.add("Fall_DOM"),console.log("=====> 启动劫持 XHR 和 Fetch 请求 <=====");const I=ho();I&&p.push(I);const M=pt(Ft.TL_Selector,Z);M&&p.push(M);const k=pt('a[href="/index"][target="_self"]',O=>{if(o)Ht.error("未找到目标链接元素"),console.warn("[FALL]: 未找到目标链接元素");else {const ie=document.createElement("div");ie.className="ptFallReadme",O.parentNode.insertBefore(ie,O.nextSibling),o=Sr(Ml,{target:ie});}});k&&p.push(k),Nn(()=>{xe(),console.log("=====> 启动劫持 pushState 方法 <====="),fe(),a=new MutationObserver(()=>{const O=getComputedStyle(document.documentElement).getPropertyValue("--bg-2").trim();O!==c&&(c=O,console.log("--bg-2 变化:",c),xe());}),a.observe(document.documentElement,{attributes:true,attributeFilter:["style","class","data-theme"]});}),Li(()=>{if(a&&a.disconnect(),u&&(window.removeEventListener("req>POST->/search",u),u=null),_&&(window.removeEventListener("res>POST->/search",_),_=null),oe&&(history.pushState=oe),m){const O=document.querySelector("#_shield");O&&O.removeEventListener("click",m),m=null;}p.forEach(O=>O()),p=[],C.forEach(O=>O()),C=[],window.MteamFall_Svelte&&delete window.MteamFall_Svelte,x();});let b=q(),V=q();function E(){return pt(".ant-pagination",O=>{O&&O.parentNode&&O.parentNode!==s(y)&&L(V,O.parentNode),O&&(L(b,O),n()&&s(y).appendChild(s(b)));})}function x(){N&&(N(),N=null),s(b)&&s(b).parentNode&&s(b).parentNode.removeChild(s(b));}function Z(O){if(O.parentNode){console.log("元素已找到，正在插入兄弟节点:",O);const ie={path:"/search",method:"POST"};u=T=>{console.log(`<PT-Fall>[Request]  (${ie.method} -> ${ie.path})
`,T.detail),T.detail.url.includes("api/torrent/search")&&!T.detail.body.includes('"mode":"waterfall"')?d=true:d=false,f=true,f?l&&l.focusFall():l&&l.focusFall("bottom"),x();},window.addEventListener("req>POST->/search",u),_=T=>{const re=JSON.parse(T.detail.data);if(!d){console.warn(`<PT-Fall>[未被接受的Response] (${ie.method}->${ie.path})[通过事件捕获]:
`,re);return}console.log(`<PT-Fall>[Response] (${ie.method}->${ie.path})[通过事件捕获]:
`,re),R(n()),j(O),Ht.success("捕获到 /search !"),v=re.data,l?l.updateList(v,f):l=Sr(bl,{target:s(y),props:{infoList:v}}),N&&N(),N=E();},window.addEventListener("res>POST->/search",_);}else Ht.error(`找不到指定节点
若总是如此请报告bug`),console.error("无法插入：目标元素没有父节点");}function j(O){const ie=O.parentNode.querySelector(".ant-spin-container"),T=document.createElement("div");T.id="_shield",m=()=>{confirm(`[PT-Fall]
如果你认为你被阻挡了请点击确认
这个阻挡效果会被取消
这可能导致显示错误
请确认您不在一般的瀑布流视图下
比如您在逛论坛或者在发种之类的被遮挡了再点`)&&(T.style.display="none");},T.addEventListener("click",m),ie.querySelector("#_shield")||ie.appendChild(T);const re=document.createElement("div");re.id="_fallHolder",ie.querySelector("#_fallHolder")||(ie.appendChild(re),re.appendChild(s(y)));}let W="",Q="",ae="";function R(O){C.forEach(ue=>ue()),C=[],Ie(y,s(y).style.display=O?"block":"none");const ie=pt("#_fallHolder",ue=>{ue.style.display=O?"block":"none";});C.push(ie);const T=pt("#_shield",ue=>{ue.style.display=O?"block":"none";});C.push(T);const re=pt(Ft.TL_Selector+".flex",ue=>{Q||(Q=getComputedStyle(ue).getPropertyValue("max-width"),ae=getComputedStyle(ue).getPropertyValue("padding-left")),ue.style.maxWidth=O?"none":Q,ue.style.paddingLeft=O?"80px":ae,ue.style.paddingRight=O?"80px":ae;});C.push(re);const Me=pt(Ft.TL_Selector+" .mx-auto",ue=>{W||(W=ue.style.margin),ue.style.margin=O?0:W;});C.push(Me);}window.changeFallView=R;const oe=history.pushState;function fe(){history.pushState=function(O,ie,T){console.log(`%c ====> URL跳转劫持: %c${T}`,"color: cyan","color: white"),T.includes("/browse")||T=="/waterfall"?console.log(`--->属于 browse 范围: ${T}`):(console.warn(`[FALL]: --->不属于 browse 范围: ${T}`),R(false)),oe.apply(history,arguments);};}function K(O){return getComputedStyle(document.documentElement).getPropertyValue(O).trim()}function xe(){me(wt,z(i).t1=kt(K("--bg-1")),z(i)),me(wt,z(i).t2=kt(K("--bg-2")),z(i)),me(wt,z(i).t3=kt(K("--bg-3")),z(i));}Ae(()=>(s(y),n(),s(b),s(V)),()=>{s(y)&&(n()&&s(b)&&s(y).appendChild(s(b)),!n()&&s(b)&&s(V)&&s(V).appendChild(s(b)));}),Pr(),Mt(),ft();}function Yi(e){if(location.hostname.includes("m-team"))return Ft}var Sl=P('<div class="switch-container svelte-18ntgfp"><div class="switch-background svelte-18ntgfp"><div class="switch-slider svelte-18ntgfp"></div></div></div>');function Se(e,t){let r=pe(t,"checked",12,false);function n(){r(!r());}var i=Sl(),o=h(i),l=h(o);D(()=>pr(l,"checked",r())),B("click",i,n),S(e,i);}var $l=Yt(`<svg viewBox="0 0 32 32" width="20" height="20" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><defs><style>.cls-1 {
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2px;
      }</style></defs><g data-name="43-browser" id="_43-browser"><rect class="cls-1" height="30" width="30" x="1" y="1"></rect><line class="cls-1" x1="1" x2="31" y1="9" y2="9"></line><line class="cls-1" x1="5" x2="7" y1="5" y2="5"></line><line class="cls-1" x1="11" x2="13" y1="5" y2="5"></line><line class="cls-1" x1="9" x2="25" y1="16" y2="16"></line><line class="cls-1" x1="7" x2="25" y1="20" y2="20"></line><line class="cls-1" x1="7" x2="25" y1="24" y2="24"></line></g></svg>`);function Al(e){var t=$l();S(e,t);}var Tl=Yt(`<svg width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><defs><style>.cls-1 {
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2px;
      }</style></defs><g data-name="80-setting" id="_80-setting"><circle class="cls-1" cx="10" cy="6" r="3"></circle><circle class="cls-1" cx="22" cy="16" r="3"></circle><circle class="cls-1" cx="10" cy="26" r="3"></circle><line class="cls-1" x1="7" x2="1" y1="6" y2="6"></line><line class="cls-1" x1="15" x2="1" y1="16" y2="16"></line><line class="cls-1" x1="7" x2="1" y1="26" y2="26"></line><line class="cls-1" x1="31" x2="17" y1="26" y2="26"></line><line class="cls-1" x1="31" x2="25" y1="16" y2="16"></line><line class="cls-1" x1="31" x2="17" y1="6" y2="6"></line></g></svg>`);function Vl(e){var t=Tl();S(e,t);}var Il=Yt('<svg enable-background="new 0 0 64 64" width="20" height="20" id="Layer_1" version="1.1" viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19,2.875H3.5c-0.829,0-1.5,0.671-1.5,1.5v19.979c0,0.829,0.671,1.5,1.5,1.5H19c0.829,0,1.5-0.671,1.5-1.5V4.375  C20.5,3.546,19.829,2.875,19,2.875z M17.5,22.854H5V5.875h12.5V22.854z"></path><path d="M19,28.773H3.5c-0.829,0-1.5,0.671-1.5,1.5v6.166c0,0.828,0.671,1.5,1.5,1.5H19c0.829,0,1.5-0.672,1.5-1.5v-6.166  C20.5,29.445,19.829,28.773,19,28.773z M17.5,34.939H5v-3.166h12.5V34.939z"></path><path d="M19,40.859H3.5c-0.829,0-1.5,0.672-1.5,1.5v17.266c0,0.828,0.671,1.5,1.5,1.5H19c0.829,0,1.5-0.672,1.5-1.5V42.359  C20.5,41.531,19.829,40.859,19,40.859z M17.5,58.125H5V43.859h12.5V58.125z"></path><path d="M40,2.875H24.5c-0.829,0-1.5,0.671-1.5,1.5v14.25c0,0.829,0.671,1.5,1.5,1.5H40c0.828,0,1.5-0.671,1.5-1.5V4.375  C41.5,3.546,40.828,2.875,40,2.875z M38.5,17.125H26V5.875h12.5V17.125z"></path><path d="M40,23.125H24.5c-0.829,0-1.5,0.671-1.5,1.5V46.5c0,0.828,0.671,1.5,1.5,1.5H40c0.828,0,1.5-0.672,1.5-1.5V24.625  C41.5,23.796,40.828,23.125,40,23.125z M38.5,45H26V26.125h12.5V45z"></path><path d="M40,51H24.5c-0.829,0-1.5,0.672-1.5,1.5v7.125c0,0.828,0.671,1.5,1.5,1.5H40c0.828,0,1.5-0.672,1.5-1.5V52.5  C41.5,51.672,40.828,51,40,51z M38.5,58.125H26V54h12.5V58.125z"></path><path d="M60.5,2.875H45c-0.828,0-1.5,0.671-1.5,1.5v35.171c0,0.828,0.672,1.5,1.5,1.5h15.5c0.828,0,1.5-0.672,1.5-1.5V4.375  C62,3.546,61.328,2.875,60.5,2.875z M59,38.046H46.5V5.875H59V38.046z"></path><path d="M60.5,44.346H45c-0.828,0-1.5,0.672-1.5,1.5v13.779c0,0.828,0.672,1.5,1.5,1.5h15.5c0.828,0,1.5-0.672,1.5-1.5V45.846  C62,45.018,61.328,44.346,60.5,44.346z M59,58.125H46.5V47.346H59V58.125z"></path></svg>');function Pl(e){var t=Il();S(e,t);}var zl=P('<div><!></div> <div class="flowBtn_text svelte-4gkzar">瀑布</div>',1),Ol=P('<div><!></div> <div class="flowBtn_text svelte-4gkzar">列表</div>',1),Hl=P('<div class="config-item svelte-4gkzar"><div class="_single_item svelte-4gkzar"><span class="svelte-4gkzar"> </span></div> <!></div>'),Fl=P('<div class="config-item svelte-4gkzar"><span class="svelte-4gkzar"> </span> <input type="range" min="0" max="40" step="1" class="svelte-4gkzar"></div>'),Rl=P('<div class="config-menu-overlay svelte-4gkzar"><div class="config-menu svelte-4gkzar"><div class="config-menu-header svelte-4gkzar"><span style="font-size: 18px; font-weight: bold;">配置菜单</span> <button class="close-btn svelte-4gkzar">&times;</button></div> <div class="config-menu-content svelte-4gkzar"><h3 class="svelte-4gkzar"># 卡片布局</h3> <div class="config-item svelte-4gkzar"><span class="svelte-4gkzar"> </span> <input type="range" min="200" step="1" list="values" class="svelte-4gkzar"></div> <div class="config-item svelte-4gkzar"><span class="svelte-4gkzar"> </span> <input type="range" step="1" list="values" class="svelte-4gkzar"></div> <div class="config-item svelte-4gkzar"><span class="svelte-4gkzar"> </span> <input type="range" min="0" max="100" step="1" list="values" class="svelte-4gkzar"></div> <h3 class="svelte-4gkzar"># 特殊配置</h3> <div class="config-item svelte-4gkzar"><div class="_single_item svelte-4gkzar"><span class="svelte-4gkzar">图片加载失败时显示标题</span></div> <!></div> <div class="config-item svelte-4gkzar"><div class="_single_item svelte-4gkzar"><span class="svelte-4gkzar">显示鼠标悬浮预览大图</span></div> <!></div> <!> <h3 class="svelte-4gkzar"># 卡片常驻信息展示</h3>  <div class="config-item svelte-4gkzar"><div class="_single_item svelte-4gkzar"><span class="svelte-4gkzar">分区</span></div> <!></div> <div class="config-item svelte-4gkzar"><div class="_single_item svelte-4gkzar"><span class="svelte-4gkzar">标题</span></div> <!></div> <div class="config-item svelte-4gkzar"><div class="_single_item svelte-4gkzar"><span class="svelte-4gkzar">置顶</span></div> <!></div> <div class="config-item svelte-4gkzar"><div class="_single_item svelte-4gkzar"><span class="svelte-4gkzar">免费</span></div> <!></div> <div class="config-item svelte-4gkzar"><div class="_single_item svelte-4gkzar"><span class="svelte-4gkzar">大小</span></div> <!></div> <div class="config-item svelte-4gkzar"><div class="_single_item svelte-4gkzar"><span class="svelte-4gkzar">副标题</span></div> <!></div> <div class="config-item svelte-4gkzar"><div class="_single_item svelte-4gkzar"><span class="svelte-4gkzar">标签</span></div> <!></div> <div class="config-item svelte-4gkzar"><div class="_single_item svelte-4gkzar"><span class="svelte-4gkzar">下载&收藏</span></div> <!></div> <div class="config-item svelte-4gkzar"><div class="_single_item svelte-4gkzar"><span class="svelte-4gkzar">上传时间</span></div> <!></div> <div class="config-item svelte-4gkzar"><div class="_single_item svelte-4gkzar"><span class="svelte-4gkzar">评论/上传/下载</span></div> <!></div> <h3 class="svelte-4gkzar"># 卡片屏蔽</h3> <div class="config-item svelte-4gkzar"><div class="_single_item svelte-4gkzar"><span class="svelte-4gkzar">屏蔽 gay 区</span></div> <!></div> <h3 class="svelte-4gkzar"># 卡片样式</h3> <div class="config-item svelte-4gkzar"><div class="_single_item svelte-4gkzar"><span class="svelte-4gkzar">自定义圆角</span></div> <!></div> <!></div></div></div>'),Dl=P('<div class="flowP svelte-4gkzar"><div class="flowPDragger svelte-4gkzar" role="button" tabindex="0" aria-hidden="true"><!></div> <div class="flowPHolder ant-typography svelte-4gkzar"><button class="flowBtn svelte-4gkzar"><!></button> <button class="flowBtn svelte-4gkzar"><div><!></div> <div class="flowBtn_text svelte-4gkzar">配置</div></button> <button class="flowBtn svelte-4gkzar">清除悬浮预览图</button> <!></div></div> <!>',1);function jl(e,t){dt(t,false);const r=Qt(),n=()=>ce(ci,"$_panelPos",r),i=()=>ce(Cr,"$_isFallView",r),o=()=>ce(wt,"$_textColor",r),l=()=>ce(yr,"$_side_panel_switch",r),v=()=>ce(br,"$_card_layout",r),f=()=>ce(vi,"$_pic_failed_showInfo",r),d=()=>ce(ui,"$_show_hover_pic",r),c=()=>ce(kr,"$_state_hover_pic",r),a=()=>ce(He,"$_card_detail",r),u=()=>ce(di,"$_block_gay",r),_=()=>ce(ln,"$_card_radius",r);let m=q(),p=false,N=0,C=0;function y(T,re,Me){return T<=re&&(T=re),T>=Me&&(T=Me),T}const I=T=>{T.preventDefault(),p=true,N=T.clientX-s(m).getBoundingClientRect().left,C=T.clientY-s(m).getBoundingClientRect().top;},M=T=>{if(!p)return;const re=y(T.clientX-N,0,window.innerWidth-(s(m).getBoundingClientRect().width+5)),Me=y(T.clientY-C,0,window.innerHeight-(s(m).getBoundingClientRect().height+5));ye(ci,{x:re,y:Me});},k=()=>{p=false;};Nn(()=>(window.addEventListener("mousemove",M),window.addEventListener("mouseup",k),()=>{window.removeEventListener("mousemove",M),window.removeEventListener("mouseup",k);})),Mt();var b=Dl();B("keydown",Er,T=>{T.key==="x"&&(ye(Cr,!i()),window.changeFallView(i()));},true);var V=Te(b),E=h(V),x=h(E);G(x,T=>{});var Z=g(E,2),j=h(Z),W=h(j);{var Q=T=>{var re=zl(),Me=Te(re),ue=h(Me);Pl(ue),S(T,re);},ae=T=>{var re=Ol(),Me=Te(re),ue=h(Me);Al(ue),S(T,re);};G(W,T=>{i()?T(Q):T(ae,false);});}var R=g(j,2),oe=h(R),fe=h(oe);Vl(fe);var K=g(R,2),xe=g(K,2);G(xe,T=>{}),at(V,T=>L(m,T),()=>s(m));var O=g(V,2);{var ie=T=>{var re=Rl();const Me=Lr(()=>kt(Yi().get_bg_color()));D(()=>Re(re,"--get-text-color",s(Me)));var ue=h(re);const Qe=Lr(()=>`background-color: ${Yi().get_bg_color()??""};`);var Y=h(ue),_t=g(h(Y),2),tt=g(Y,2),Hr=g(h(tt),2),Jt=h(Hr),Nt=h(Jt),Kt=g(Jt,2);D(()=>A(Kt,"max",Math.max(400,v().max)));var Fr=g(Hr,2),St=h(Fr),$n=h(St),er=g(St,2);D(()=>A(er,"min",Math.min(200,v().min))),D(()=>A(er,"max",Math.max(800,v().min*2)));var ht=g(Fr,2),tr=h(ht),An=h(tr),Tn=g(tr,2),rr=g(ht,4),Vn=g(h(rr),2);Se(Vn,{get checked(){return nn(),f()},set checked(H){ye(vi,H);},$$legacy:true});var We=g(rr,2),Rr=g(h(We),2);Se(Rr,{get checked(){return nn(),d()},set checked(H){ye(ui,H);},$$legacy:true});var nr=g(We,2);{var Dr=H=>{var rt=Hl(),nt=h(rt),vr=h(nt),dr=h(vr),At=g(nt,2);Se(At,{get checked(){return nn(),c()},set checked(Jr){ye(kr,Jr);},$$legacy:true}),D(()=>ee(dr,`预览大图默认状态: ${(c()?"尽量铺满":"尽量原图大小")??""}`)),S(H,rt);};G(nr,H=>{d()&&H(Dr);});}var ir=g(nr,4),In=g(h(ir),2);Se(In,{get checked(){return a().category},set checked(H){me(He,z(a).category=H,z(a));},$$legacy:true});var sr=g(ir,2),Pn=g(h(sr),2);Se(Pn,{get checked(){return a().title},set checked(H){me(He,z(a).title=H,z(a));},$$legacy:true});var jr=g(sr,2),ar=g(h(jr),2);Se(ar,{get checked(){return a().topping},set checked(H){me(He,z(a).topping=H,z(a));},$$legacy:true});var or=g(jr,2),zn=g(h(or),2);Se(zn,{get checked(){return a().free},set checked(H){me(He,z(a).free=H,z(a));},$$legacy:true});var gt=g(or,2),lr=g(h(gt),2);Se(lr,{get checked(){return a().size},set checked(H){me(He,z(a).size=H,z(a));},$$legacy:true});var qr=g(gt,2),cr=g(h(qr),2);Se(cr,{get checked(){return a().sub_title},set checked(H){me(He,z(a).sub_title=H,z(a));},$$legacy:true});var $t=g(qr,2),On=g(h($t),2);Se(On,{get checked(){return a().tags},set checked(H){me(He,z(a).tags=H,z(a));},$$legacy:true});var ur=g($t,2),Hn=g(h(ur),2);Se(Hn,{get checked(){return a().download_collect},set checked(H){me(He,z(a).download_collect=H,z(a));},$$legacy:true});var Br=g(ur,2),Zr=g(h(Br),2);Se(Zr,{get checked(){return a().upload_time},set checked(H){me(He,z(a).upload_time=H,z(a));},$$legacy:true});var Wr=g(Br,2),Gr=g(h(Wr),2);Se(Gr,{get checked(){return a().statistics},set checked(H){me(He,z(a).statistics=H,z(a));},$$legacy:true});var Ur=g(Wr,4),Fn=g(h(Ur),2);Se(Fn,{get checked(){return nn(),u()},set checked(H){ye(di,H);},$$legacy:true});var Xr=g(Ur,4),Yr=g(h(Xr),2);Se(Yr,{get checked(){return _().enabled},set checked(H){me(ln,z(_).enabled=H,z(_));},$$legacy:true});var Qr=g(Xr,2);{var Rn=H=>{var rt=Fl(),nt=h(rt),vr=h(nt),dr=g(nt,2);D(()=>ee(vr,`圆角大小: ${_().value??""} px`)),rn(dr,()=>_().value,At=>me(ln,z(_).value=At,z(_))),S(H,rt);};G(Qr,H=>{_().enabled&&H(Rn);});}D(()=>{A(ue,"style",s(Qe)),ee(Nt,`最小宽度: ${v().min??""} px`),ee($n,`最大宽度: ${v().max??""} px`),ee(An,`卡片间隔: ${v().gap??""} px`);}),B("click",_t,()=>ye(yr,false)),rn(Kt,()=>v().min,H=>me(br,z(v).min=H,z(v))),rn(er,()=>v().max,H=>me(br,z(v).max=H,z(v))),rn(Tn,()=>v().gap,H=>me(br,z(v).gap=H,z(v))),jt(3,re,()=>qt,()=>({duration:100})),B("click",re,Ei(()=>ye(yr,false))),S(T,re);};G(O,T=>{l()&&T(ie);});}D(()=>{A(V,"style",`top:${n().y??""}px; left:${n().x??""}px;`),Re(V,"--isFallView",i()?"#4ff74f":"yellow"),Re(Z,"--get-text-color",o().t2);}),B("mousedown",E,I),B("click",j,()=>{ye(Cr,!i()),window.changeFallView(i());}),B("click",R,()=>{ye(yr,!l());}),B("click",K,()=>{window.__clearPreview();}),S(e,b),ft();}var ql=Yt('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_iconCarrier"><circle cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="1.5"></circle><path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path></g></svg>');function Bl(e){var t=ql();S(e,t);}var Zl=P('<div class="iframe-overlay svelte-126sfo0"></div>'),Wl=P('<div id="_iframe_holder" class="svelte-126sfo0"><div class="_iframe_back svelte-126sfo0"></div> <div class="_iframe_parent svelte-126sfo0"><div class="resize-handle resize-handle-left svelte-126sfo0"></div> <!> <iframe sandbox="allow-same-origin allow-scripts allow-popups allow-forms" allow="fullscreen" frameborder="0" class="svelte-126sfo0"></iframe> <div class="_iframeCloseBtn svelte-126sfo0"><!></div> <div class="resize-handle resize-handle-right svelte-126sfo0"></div></div></div>');function Gl(e,t){dt(t,false);const r=Qt(),n=()=>ce(on,"$_iframe_switch",r),i=()=>ce(wt,"$_textColor",r),o=()=>ce(Ss,"$_iframe_url",r);let l=pe(t,"_app",8),v;function f(){c||ye(on,0);}let d=q(1e3),c=false,a=q(false),u=q(null),_=()=>{};function m(M,k){const b=M.clientX,V=s(d);c=true,L(a,true),document.body.style.userSelect="none",_=E=>{if(!c)return;const x=E.clientX-b,Z=k==="right"?V+x*2:V-x*2;L(d,Math.max(1e3,Math.min(Z,window.innerWidth*.95)));},window.addEventListener("mousemove",_),window.addEventListener("mouseup",p);}function p(){c=false,L(a,false),document.body.style.userSelect="",window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",p);}function N(M){M.key==="Escape"&&(ye(on,0),ye(yr,false),Zt.getInstance()&&Zt.getInstance().clearPreview());}v=true,v&&Sr(Nl,{target:l()}),Sr(jl,{target:l()}),console.log("-------------->  PT_Fall Launch   <--------------"),Li(()=>{s(u)&&(clearInterval(s(u)),L(u,null)),window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",p);}),Mt();var C=lt();B("keydown",Er,N,true);var y=Te(C);{var I=M=>{var k=Wl(),b=h(k),V=g(b,2),E=h(V),x=g(E,2);{var Z=R=>{var oe=Zl();S(R,oe);};G(x,R=>{s(a)&&R(Z);});}var j=g(x,2),W=g(j,2),Q=h(W);Bl(Q);var ae=g(W,2);D(()=>{Re(V,"--textColor1",i().t1),Re(V,"--textColor2",i().t1+"90"),A(j,"src",o()),A(j,"title",o()),A(j,"style",`width: ${s(d)??""}px;`);}),B("click",b,Ei(f),true),B("mousedown",E,R=>m(R,"left")),B("load",j,R=>{s(u)&&(clearInterval(s(u)),L(u,null));const oe=R.target.contentDocument||R.target.contentWindow.document;if(!oe){console.error("无法访问iframe内容文档, 可能是由于跨域限制。"),Ht.error("无法访问iframe内容文档, 可能是由于跨域限制。");return}const fe=()=>{const K=oe.querySelector(".ant-card.detail-view");K&&(K.scrollIntoView({behavior:"smooth"}),console.log("成功滚动到目标元素！"),clearInterval(s(u)),L(u,null));};L(u,setInterval(fe,500)),fe();}),B("click",j,R=>{p(),R.stopPropagation();}),B("mouseup",j,R=>{p();}),B("click",W,f),B("mousedown",ae,R=>m(R,"right")),jt(3,k,()=>qt,()=>({duration:300})),S(M,k);};G(y,M=>{n()&&M(I);});}S(e,C),ft();}const fi=document.createElement("div");document.body.append(fi);Sr(Gl,{target:fi,props:{_app:fi}});

})();