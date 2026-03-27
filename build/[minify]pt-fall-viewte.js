// ==UserScript==
// @name            PT瀑布流视图
// @name:en         PT_Fall-View
// @namespace       vite-plugin-monkey
// @version         0.3.12
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

  .card_holder.svelte-1q2qbu1 {
    border-radius: var(--borderRadius);
    overflow: hidden;
  }

  /* \u5361\u7247\u5206\u7C7B */
  .card-category.svelte-1q2qbu1 {
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
  .card_category-img.svelte-1q2qbu1 {
    /* height: 18px; */
    height: 35px;
    width: 28px;

    /* background-size: 100% 141%; */
    background-position: center top;

    /* padding-left: 5%; */
    padding-top: 6px;
  }

  .card_category_square.svelte-1q2qbu1 {
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

  .lazy-image.svelte-1q2qbu1 {
    opacity: 0.2;
    transition: opacity 0.5s ease;
  }
  /* FIXME: \u4E0D\u77E5\u9053\u4E3A\u5565\u8FD9\u91CC\u4E0D\u8D77\u4F5C\u7528 */
  /* (unused) .lazy-image.loaded {
    opacity: 1;
  }*/
  .card_info.svelte-1q2qbu1 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding: 0px 8px;

    & .card_info-item:where(.svelte-1q2qbu1) {
      display: flex;
      justify-content: space-around;
      align-items: center;

      /* min-height: 32px; */
      width: 100%;
    }

    & .card_info__dl_and_cl:where(.svelte-1q2qbu1) {
      display: flex;
      justify-content: center;
      align-items: center;

      height: 32px;
    }

    & .card_info__statistics:where(.svelte-1q2qbu1) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .card_info__topping.svelte-1q2qbu1 {
    display: flex;
    /* justify-content: center; */
    align-items: center;
  }

  .__main_title.svelte-1q2qbu1 {
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
  .cl-tags.svelte-1q2qbu1 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    gap: 2px;

    padding-top: 4px;
    padding-bottom: 4px;
  }
  ._tag.svelte-1q2qbu1 {
    /* padding: 1px 6px; */
    height: 1.3em;
    line-height: 1.3em;
    padding: 0 0.5em;
    border-radius: 6px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    font-size: 12px;
  }
  ._tag_diy.svelte-1q2qbu1 {
    color: #ffffff;
    background-color: rgb(90, 189, 72);
  }
  ._tag_dub.svelte-1q2qbu1 {
    color: #ffffff;
    background-color: rgb(90, 59, 20);
  }
  ._tag_sub.svelte-1q2qbu1 {
    color: #ffffff;
    background-color: rgb(59, 74, 127);
  }
  ._tag_discount_50.svelte-1q2qbu1 {
    background-color: rgb(255, 85, 0);
    color: #ffffff;
  }
  ._tag_discount_free.svelte-1q2qbu1 {
    background-color: rgb(16, 142, 233);
    color: #ffffff;
  }

  .card_pic.svelte-1q2qbu1 {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    /* flex-direction: column; */

    background-color: var(--cateColor);
  }

  .card_pic.svelte-1q2qbu1 img:where(.svelte-1q2qbu1) {
    width: 100%;
    height: 100%;
  }

  .pic_error.svelte-1q2qbu1 {
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
  .card-index.svelte-1q2qbu1 {
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
  .card-index-right.svelte-1q2qbu1 {
    left: initial;
    right: 0;
    padding: 4px 4px 4px 8px;

    background-color: rgb(0, 0, 0);
    color: white;

    /* border-top-left-radius: 20px; */
    /* border-bottom-left-radius: 20px; */
  }

  /* \u60AC\u6D6E\u9884\u89C8: \u5C40\u90E8\u89E6\u53D1\u5668 */
  .hover-trigger.svelte-1q2qbu1 {
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
  .hover-overlay.svelte-1q2qbu1 {
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

  .overlay-content.svelte-1q2qbu1 {
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

    & .card_info-item:where(.svelte-1q2qbu1) {
      display: flex;
      justify-content: center;
      align-items: center;

      padding: 2px;

      padding-left: 8px;
      padding-right: 8px;
    }

    & .__main_title:where(.svelte-1q2qbu1) {
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

    & .__sub_title:where(.svelte-1q2qbu1) {
      white-space: pre-wrap;
      /* word-wrap: break-word; */
      /* overflow-wrap: break-word; */
      overflow: hidden;
    }

    & .card_info__statistics:where(.svelte-1q2qbu1) {
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      height: 32px;
    }
  }

  .__center.svelte-1q2qbu1 {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .__inner_index_and_size.svelte-1q2qbu1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    width: 100%;
    left: 0;
    top: -24px;
  }

  .__inner_index.svelte-1q2qbu1 {
    position: relative;
    width: fit-content;

    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .__inner_size.svelte-1q2qbu1 {
    position: relative;
    width: fit-content;

    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .__iframe_button.svelte-1q2qbu1 {
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

      var Ba=Object.defineProperty;var Si=e=>{throw TypeError(e)};var Za=(e,t,r)=>t in e?Ba(e,t,{enumerable:true,configurable:true,writable:true,value:r}):e[t]=r;var Wn=(e,t,r)=>Za(e,typeof t!="symbol"?t+"":t,r),Gn=(e,t,r)=>t.has(e)||Si("Cannot "+r);var Je=(e,t,r)=>(Gn(e,t,"read from private field"),r?r.call(e):t.get(e)),_r=(e,t,r)=>t.has(e)?Si("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),Yn=(e,t,r,n)=>(Gn(e,t,"write to private field"),t.set(e,r),r),qi=(e,t,r)=>(Gn(e,t,"access private method"),r);var bn=Array.isArray,_i=Array.from,ja=Object.defineProperty,xt=Object.getOwnPropertyDescriptor,Xi=Object.getOwnPropertyDescriptors,Wa=Object.prototype,Ga=Array.prototype,hi=Object.getPrototypeOf;function Ya(e){return typeof e=="function"}const Re=()=>{};function Ua(e){return e()}function Kn(e){for(var t=0;t<e.length;t++)e[t]();}const Fe=2,Qi=4,$r=8,yn=16,De=32,Ar=64,ei=128,Lt=256,cn=512,qe=1024,Et=2048,Vr=4096,Ge=8192,Wt=16384,Ji=32768,wn=65536,Xa=1<<17,Qa=1<<19,Ki=1<<20,Ct=Symbol("$state"),Ja=Symbol("legacy props"),Ka=Symbol("");function ea(e){return e===this.v}function ta(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function gi(e){return !ta(e,this.v)}function es(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ts(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function rs(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ns(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function is(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function as(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ss(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function os(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function ls(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let Gt=false;function cs(){Gt=true;}const pi=1,mi=2,ra=4,us=8,vs=16,ds=1,fs=2,_s=4,hs=8,gs=16,ps=1,ms=2,bs=4,ys=1,ws=2,Me=Symbol();function Te(e,t){var r={f:0,v:e,reactions:null,equals:ea,version:0};return r}function xn(e,t=false){var n;const r=Te(e);return t||(r.equals=gi),Gt&&ae!==null&&ae.l!==null&&((n=ae.l).s??(n.s=[])).push(r),r}function Z(e,t=false){return xs(xn(e,t))}function xs(e){return ne!==null&&ne.f&Fe&&(Ye===null?As([e]):Ye.push(e)),e}function Ae(e,t){return S(e,I(()=>a(e))),t}function S(e,t){return ne!==null&&En()&&ne.f&(Fe|yn)&&(Ye===null||!Ye.includes(e))&&ls(),ti(e,t)}function ti(e,t){return e.equals(t)||(e.v=t,e.version=ba(),na(e,Et),En()&&G!==null&&G.f&qe&&!(G.f&De)&&(ke!==null&&ke.includes(e)?(Be(G,Et),Mn(G)):ut===null?Vs([e]):ut.push(e))),t}function na(e,t){var r=e.reactions;if(r!==null)for(var n=En(),i=r.length,s=0;s<i;s++){var l=r[s],u=l.f;u&Et||!n&&l===G||(Be(l,t),u&(qe|Lt)&&(u&Fe?na(l,Vr):Mn(l)));}}let ia=false;function zt(e,t=null,r){if(typeof e!="object"||e===null||Ct in e)return e;const n=hi(e);if(n!==Wa&&n!==Ga)return e;var i=new Map,s=bn(e),l=Te(0);s&&i.set("length",Te(e.length));var u;return new Proxy(e,{defineProperty(d,v,c){(!("value"in c)||c.configurable===false||c.enumerable===false||c.writable===false)&&as();var o=i.get(v);return o===void 0?(o=Te(c.value),i.set(v,o)):S(o,zt(c.value,u)),true},deleteProperty(d,v){var c=i.get(v);if(c===void 0)v in d&&i.set(v,Te(Me));else {if(s&&typeof v=="string"){var o=i.get("length"),f=Number(v);Number.isInteger(f)&&f<o.v&&S(o,f);}S(c,Me),$i(l);}return  true},get(d,v,c){var m;if(v===Ct)return e;var o=i.get(v),f=v in d;if(o===void 0&&(!f||(m=xt(d,v))!=null&&m.writable)&&(o=Te(zt(f?d[v]:Me,u)),i.set(v,o)),o!==void 0){var h=a(o);return h===Me?void 0:h}return Reflect.get(d,v,c)},getOwnPropertyDescriptor(d,v){var c=Reflect.getOwnPropertyDescriptor(d,v);if(c&&"value"in c){var o=i.get(v);o&&(c.value=a(o));}else if(c===void 0){var f=i.get(v),h=f==null?void 0:f.v;if(f!==void 0&&h!==Me)return {enumerable:true,configurable:true,value:h,writable:true}}return c},has(d,v){var h;if(v===Ct)return  true;var c=i.get(v),o=c!==void 0&&c.v!==Me||Reflect.has(d,v);if(c!==void 0||G!==null&&(!o||(h=xt(d,v))!=null&&h.writable)){c===void 0&&(c=Te(o?zt(d[v],u):Me),i.set(v,c));var f=a(c);if(f===Me)return  false}return o},set(d,v,c,o){var N;var f=i.get(v),h=v in d;if(s&&v==="length")for(var m=c;m<f.v;m+=1){var p=i.get(m+"");p!==void 0?S(p,Me):m in d&&(p=Te(Me),i.set(m+"",p));}f===void 0?(!h||(N=xt(d,v))!=null&&N.writable)&&(f=Te(void 0),S(f,zt(c,u)),i.set(v,f)):(h=f.v!==Me,S(f,zt(c,u)));var M=Reflect.getOwnPropertyDescriptor(d,v);if(M!=null&&M.set&&M.set.call(o,c),!h){if(s&&typeof v=="string"){var q=i.get("length"),w=Number(v);Number.isInteger(w)&&w>=q.v&&S(q,w+1);}$i(l);}return  true},ownKeys(d){a(l);var v=Reflect.ownKeys(d).filter(f=>{var h=i.get(f);return h===void 0||h.v!==Me});for(var[c,o]of i)o.v!==Me&&!(c in d)&&v.push(c);return v},setPrototypeOf(){ss();}})}function $i(e,t=1){S(e,e.v+t);}var Er,aa,sa;function Cs(){if(Er===void 0){Er=window;var e=Element.prototype,t=Node.prototype;aa=xt(t,"firstChild").get,sa=xt(t,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0;}}function bi(e=""){return document.createTextNode(e)}function Ft(e){return aa.call(e)}function Cn(e){return sa.call(e)}function _(e,t){return Ft(e)}function Se(e,t){{var r=Ft(e);return r instanceof Comment&&r.data===""?Cn(r):r}}function g(e,t=1,r=false){let n=e;for(;t--;)n=Cn(n);return n}function ks(e){e.textContent="";}function un(e){var t=Fe|Et;G===null?t|=Lt:G.f|=Ki;var r=ne!==null&&ne.f&Fe?ne:null;const n={children:null,ctx:ae,deps:null,equals:ea,f:t,fn:e,reactions:null,v:null,version:0,parent:r??G};return r!==null&&(r.children??(r.children=[])).push(n),n}function Lr(e){const t=un(e);return t.equals=gi,t}function oa(e){var t=e.children;if(t!==null){e.children=null;for(var r=0;r<t.length;r+=1){var n=t[r];n.f&Fe?yi(n):vt(n);}}}function Es(e){for(var t=e.parent;t!==null;){if(!(t.f&Fe))return t;t=t.parent;}return null}function la(e){var t,r=G;He(Es(e));try{oa(e),t=ya(e);}finally{He(r);}return t}function ca(e){var t=la(e),r=(bt||e.f&Lt)&&e.deps!==null?Vr:qe;Be(e,r),e.equals(t)||(e.v=t,e.version=ba());}function yi(e){oa(e),Nr(e,0),Be(e,Wt),e.v=e.children=e.deps=e.ctx=e.reactions=null;}function ua(e){G===null&&ne===null&&rs(),ne!==null&&ne.f&Lt&&ts(),ki&&es();}function Ls(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e);}function Yt(e,t,r,n=true){var i=(e&Ar)!==0,s=G,l={ctx:ae,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|Et,first:null,fn:t,last:null,next:null,parent:i?null:s,prev:null,teardown:null,transitions:null,version:0};if(r){var u=It;try{Ai(!0),Pr(l),l.f|=Ji;}catch(c){throw vt(l),c}finally{Ai(u);}}else t!==null&&Mn(l);var d=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&Ki)===0;if(!d&&!i&&n&&(s!==null&&Ls(l,s),ne!==null&&ne.f&Fe)){var v=ne;(v.children??(v.children=[])).push(l);}return l}function wi(e){const t=Yt($r,null,false);return Be(t,qe),t.teardown=e,t}function ri(e){ua();var t=G!==null&&(G.f&De)!==0&&ae!==null&&!ae.m;if(t){var r=ae;(r.e??(r.e=[])).push({fn:e,effect:G,reaction:ne});}else {var n=Tr(e);return n}}function Ms(e){return ua(),Ir(e)}function Ns(e){const t=Yt(Ar,e,true);return (r={})=>new Promise(n=>{r.outro?vn(t,()=>{vt(t),n(void 0);}):(vt(t),n(void 0));})}function Tr(e){return Yt(Qi,e,false)}function Ne(e,t){var r=ae,n={effect:null,ran:false};r.l.r1.push(n),n.effect=Ir(()=>{e(),!n.ran&&(n.ran=true,S(r.l.r2,true),I(t));});}function zr(){var e=ae;Ir(()=>{if(a(e.l.r2)){for(var t of e.l.r1){var r=t.effect;r.f&qe&&Be(r,Vr),Ut(r)&&Pr(r),t.ran=false;}e.l.r2.v=false;}});}function Ir(e){return Yt($r,e,true)}function F(e){return xi(e)}function xi(e,t=0){return Yt($r|yn|t,e,true)}function Mr(e,t=true){return Yt($r|De,e,true,t)}function va(e){var t=e.teardown;if(t!==null){const r=ki,n=ne;Vi(true),Ue(null);try{t.call(null);}finally{Vi(r),Ue(n);}}}function da(e){var t=e.deriveds;if(t!==null){e.deriveds=null;for(var r=0;r<t.length;r+=1)yi(t[r]);}}function fa(e,t=false){var r=e.first;for(e.first=e.last=null;r!==null;){var n=r.next;vt(r,t),r=n;}}function Ss(e){for(var t=e.first;t!==null;){var r=t.next;t.f&De||vt(t),t=r;}}function vt(e,t=true){var r=false;if((t||e.f&Qa)&&e.nodes_start!==null){for(var n=e.nodes_start,i=e.nodes_end;n!==null;){var s=n===i?null:Cn(n);n.remove(),n=s;}r=true;}fa(e,t&&!r),da(e),Nr(e,0),Be(e,Wt);var l=e.transitions;if(l!==null)for(const d of l)d.stop();va(e);var u=e.parent;u!==null&&u.first!==null&&_a(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null;}function _a(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r));}function vn(e,t){var r=[];Ci(e,r,true),ha(r,()=>{vt(e),t&&t();});}function ha(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var i of e)i.out(n);}else t();}function Ci(e,t,r){if(!(e.f&Ge)){if(e.f^=Ge,e.transitions!==null)for(const l of e.transitions)(l.is_global||r)&&t.push(l);for(var n=e.first;n!==null;){var i=n.next,s=(n.f&wn)!==0||(n.f&De)!==0;Ci(n,t,s?r:false),n=i;}}}function dn(e){ga(e,true);}function ga(e,t){if(e.f&Ge){Ut(e)&&Pr(e),e.f^=Ge;for(var r=e.first;r!==null;){var n=r.next,i=(r.f&wn)!==0||(r.f&De)!==0;ga(r,i?t:false),r=n;}if(e.transitions!==null)for(const s of e.transitions)(s.is_global||t)&&s.in();}}let ni=false,ii=[];function qs(){ni=false;const e=ii.slice();ii=[],Kn(e);}function kn(e){ni||(ni=true,queueMicrotask(qs)),ii.push(e);}function $s(){throw new Error("https://svelte.dev/e/invalid_default_snippet")}function pa(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let an=false,fn=false,_n=null,It=false,ki=false;function Ai(e){It=e;}function Vi(e){ki=e;}let ai=[],wr=0;let ne=null;function Ue(e){ne=e;}let G=null;function He(e){G=e;}let Ye=null;function As(e){Ye=e;}let ke=null,Ve=0,ut=null;function Vs(e){ut=e;}let ma=1,bt=false,ae=null;function ba(){return ++ma}function En(){return !Gt||ae!==null&&ae.l===null}function Ut(e){var l,u;var t=e.f;if(t&Et)return  true;if(t&Vr){var r=e.deps,n=(t&Lt)!==0;if(r!==null){var i;if(t&cn){for(i=0;i<r.length;i++)((l=r[i]).reactions??(l.reactions=[])).push(e);e.f^=cn;}for(i=0;i<r.length;i++){var s=r[i];if(Ut(s)&&ca(s),n&&G!==null&&!bt&&!((u=s==null?void 0:s.reactions)!=null&&u.includes(e))&&(s.reactions??(s.reactions=[])).push(e),s.version>e.version)return  true}}(!n||G!==null&&!bt)&&Be(e,qe);}return  false}function Ts(e,t){for(var r=t;r!==null;){if(r.f&ei)try{r.fn(e);return}catch{r.f^=ei;}r=r.parent;}throw an=false,e}function zs(e){return (e.f&Wt)===0&&(e.parent===null||(e.parent.f&ei)===0)}function Ln(e,t,r,n){if(an){if(r===null&&(an=false),zs(t))throw e;return}r!==null&&(an=true);{Ts(e,t);return}}function ya(e){var f;var t=ke,r=Ve,n=ut,i=ne,s=bt,l=Ye,u=ae,d=e.f;ke=null,Ve=0,ut=null,ne=d&(De|Ar)?null:e,bt=!It&&(d&Lt)!==0,Ye=null,ae=e.ctx;try{var v=(0,e.fn)(),c=e.deps;if(ke!==null){var o;if(Nr(e,Ve),c!==null&&Ve>0)for(c.length=Ve+ke.length,o=0;o<ke.length;o++)c[Ve+o]=ke[o];else e.deps=c=ke;if(!bt)for(o=Ve;o<c.length;o++)((f=c[o]).reactions??(f.reactions=[])).push(e);}else c!==null&&Ve<c.length&&(Nr(e,Ve),c.length=Ve);return v}finally{ke=t,Ve=r,ut=n,ne=i,bt=s,Ye=l,ae=u;}}function Is(e,t){let r=t.reactions;if(r!==null){var n=r.indexOf(e);if(n!==-1){var i=r.length-1;i===0?r=t.reactions=null:(r[n]=r[i],r.pop());}}r===null&&t.f&Fe&&(ke===null||!ke.includes(t))&&(Be(t,Vr),t.f&(Lt|cn)||(t.f^=cn),Nr(t,0));}function Nr(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Is(e,r[n]);}function Pr(e){var t=e.f;if(!(t&Wt)){Be(e,qe);var r=G,n=ae;G=e;try{t&yn?Ss(e):fa(e),da(e),va(e);var i=ya(e);e.teardown=typeof i=="function"?i:null,e.version=ma;}catch(s){Ln(s,e,r,n||e.ctx);}finally{G=r;}}}function Ps(){if(wr>1e3){wr=0;try{ns();}catch(e){if(_n!==null)Ln(e,_n,null);else throw e}}wr++;}function Os(e){var t=e.length;if(t!==0){Ps();var r=It;It=true;try{for(var n=0;n<t;n++){var i=e[n];i.f&qe||(i.f^=qe);var s=[];wa(i,s),Hs(s);}}finally{It=r;}}}function Hs(e){var t=e.length;if(t!==0)for(var r=0;r<t;r++){var n=e[r];if(!(n.f&(Wt|Ge)))try{Ut(n)&&(Pr(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?_a(n):n.fn=null));}catch(i){Ln(i,n,null,n.ctx);}}}function Rs(){if(fn=false,wr>1001)return;const e=ai;ai=[],Os(e),fn||(wr=0,_n=null);}function Mn(e){fn||(fn=true,queueMicrotask(Rs)),_n=e;for(var t=e;t.parent!==null;){t=t.parent;var r=t.f;if(r&(Ar|De)){if(!(r&qe))return;t.f^=qe;}}ai.push(t);}function wa(e,t){var r=e.first,n=[];e:for(;r!==null;){var i=r.f,s=(i&De)!==0,l=s&&(i&qe)!==0,u=r.next;if(!l&&!(i&Ge))if(i&$r){if(s)r.f^=qe;else try{Ut(r)&&Pr(r);}catch(o){Ln(o,r,null,r.ctx);}var d=r.first;if(d!==null){r=d;continue}}else i&Qi&&n.push(r);if(u===null){let o=r.parent;for(;o!==null;){if(e===o)break e;var v=o.next;if(v!==null){r=v;continue e}o=o.parent;}}r=u;}for(var c=0;c<n.length;c++)d=n[c],t.push(d),wa(d,t);}function a(e){var c;var t=e.f,r=(t&Fe)!==0;if(r&&t&Wt){var n=la(e);return yi(e),n}if(ne!==null){Ye!==null&&Ye.includes(e)&&os();var i=ne.deps;ke===null&&i!==null&&i[Ve]===e?Ve++:ke===null?ke=[e]:ke.push(e),ut!==null&&G!==null&&G.f&qe&&!(G.f&De)&&ut.includes(e)&&(Be(G,Et),Mn(G));}else if(r&&e.deps===null)for(var s=e,l=s.parent,u=s;l!==null;)if(l.f&Fe){var d=l;u=d,l=d.parent;}else {var v=l;(c=v.deriveds)!=null&&c.includes(u)||(v.deriveds??(v.deriveds=[])).push(u);break}return r&&(s=e,Ut(s)&&ca(s)),e.v}function I(e){const t=ne;try{return ne=null,e()}finally{ne=t;}}const Fs=-7169;function Be(e,t){e.f=e.f&Fs|t;}function dt(e,t=false,r){ae={p:ae,c:null,e:null,m:false,s:e,x:null,l:null},Gt&&!t&&(ae.l={s:null,u:null,r1:[],r2:Te(false)});}function ft(e){const t=ae;if(t!==null){e!==void 0&&(t.x=e);const l=t.e;if(l!==null){var r=G,n=ne;t.e=null;try{for(var i=0;i<l.length;i++){var s=l[i];He(s.effect),Ue(s.reaction),Tr(s.fn);}}finally{He(r),Ue(n);}}ae=t.p,t.m=true;}return e||{}}function mt(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Ct in e)si(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&Ct in r&&si(r);}}}function si(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{si(e[n],t);}catch{}const r=hi(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=Xi(r);for(let i in n){const s=n[i].get;if(s)try{s.call(e);}catch{}}}}}const Ds=["touchstart","touchmove"];function Bs(e){return Ds.includes(e)}let Ti=false;function Zs(){Ti||(Ti=true,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r);});},{capture:true}));}function xa(e){var t=ne,r=G;Ue(null),He(null);try{return e()}finally{Ue(t),He(r);}}function js(e,t,r,n=r){e.addEventListener(t,()=>xa(r));const i=e.__on_r;i?e.__on_r=()=>{i(),n(true);}:e.__on_r=()=>n(true),Zs();}const Ws=new Set,zi=new Set;function Gs(e,t,r,n){function i(s){if(n.capture||hr.call(t,s),!s.cancelBubble)return xa(()=>r.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?kn(()=>{t.addEventListener(e,i,n);}):t.addEventListener(e,i,n),i}function D(e,t,r,n,i){var s={capture:n,passive:i},l=Gs(e,t,r,s);(t===document.body||t===window||t===document)&&wi(()=>{t.removeEventListener(e,l,s);});}function hr(e){var w;var t=this,r=t.ownerDocument,n=e.type,i=((w=e.composedPath)==null?void 0:w.call(e))||[],s=i[0]||e.target,l=0,u=e.__root;if(u){var d=i.indexOf(u);if(d!==-1&&(t===document||t===window)){e.__root=t;return}var v=i.indexOf(t);if(v===-1)return;d<=v&&(l=d);}if(s=i[l]||e.target,s!==t){ja(e,"currentTarget",{configurable:true,get(){return s||r}});var c=ne,o=G;Ue(null),He(null);try{for(var f,h=[];s!==null;){var m=s.assignedSlot||s.parentNode||s.host||null;try{var p=s["__"+n];if(p!==void 0&&!s.disabled)if(bn(p)){var[M,...q]=p;M.apply(s,[e,...q]);}else p.call(s,e);}catch(N){f?h.push(N):f=N;}if(e.cancelBubble||m===t||m===null)break;s=m;}if(f){for(let N of h)queueMicrotask(()=>{throw N});throw f}}finally{e.__root=t,delete e.currentTarget,Ue(c),He(o);}}}function Ca(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function hn(e,t){var r=G;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t);}function z(e,t){var r=(t&ys)!==0,n=(t&ws)!==0,i,s=!e.startsWith("<!>");return ()=>{i===void 0&&(i=Ca(s?e:"<!>"+e),r||(i=Ft(i)));var l=n?document.importNode(i,true):i.cloneNode(true);if(r){var u=Ft(l),d=l.lastChild;hn(u,d);}else hn(l,l);return l}}function Xt(e,t,r="svg"){var n=!e.startsWith("<!>"),i=`<${r}>${n?e:"<!>"+e}</${r}>`,s;return ()=>{if(!s){var l=Ca(i),u=Ft(l);s=Ft(u);}var d=s.cloneNode(true);return hn(d,d),d}}function lt(){var e=document.createDocumentFragment(),t=document.createComment(""),r=bi();return e.append(t,r),hn(t,r),e}function L(e,t){e!==null&&e.before(t);}let oi=true;function re(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"");}function Sr(e,t){return Ys(e,t)}const Vt=new Map;function Ys(e,{target:t,anchor:r,props:n={},events:i,context:s,intro:l=true}){Cs();var u=new Set,d=o=>{for(var f=0;f<o.length;f++){var h=o[f];if(!u.has(h)){u.add(h);var m=Bs(h);t.addEventListener(h,hr,{passive:m});var p=Vt.get(h);p===void 0?(document.addEventListener(h,hr,{passive:m}),Vt.set(h,1)):Vt.set(h,p+1);}}};d(_i(Ws)),zi.add(d);var v=void 0,c=Ns(()=>{var o=r??t.appendChild(bi());return Mr(()=>{if(s){dt({});var f=ae;f.c=s;}i&&(n.$$events=i),oi=l,v=e(o,n)||{},oi=true,s&&ft();}),()=>{var m;for(var f of u){t.removeEventListener(f,hr);var h=Vt.get(f);--h===0?(document.removeEventListener(f,hr),Vt.delete(f)):Vt.set(f,h);}zi.delete(d),o!==r&&((m=o.parentNode)==null||m.removeChild(o));}});return Us.set(v,c),v}let Us=new WeakMap;function B(e,t,r=false){var n=e,i=null,s=null,l=Me,u=r?wn:0,d=false;const v=(o,f=true)=>{d=true,c(f,o);},c=(o,f)=>{l!==(l=o)&&(l?(i?dn(i):f&&(i=Mr(()=>f(n))),s&&vn(s,()=>{s=null;})):(s?dn(s):f&&(s=Mr(()=>f(n))),i&&vn(i,()=>{i=null;})));};xi(()=>{d=false,t(v),d||c(null,null);},u);}let sn=null;function gr(e,t){return t}function Xs(e,t,r,n){for(var i=[],s=t.length,l=0;l<s;l++)Ci(t[l].e,i,true);var u=s>0&&i.length===0&&r!==null;if(u){var d=r.parentNode;ks(d),d.append(r),n.clear(),at(e,t[0].prev,t[s-1].next);}ha(i,()=>{for(var v=0;v<s;v++){var c=t[v];u||(n.delete(c.k),at(e,c.prev,c.next)),vt(c.e,!u);}});}function yt(e,t,r,n,i,s=null){var l=e,u={flags:t,items:new Map,first:null},d=(t&ra)!==0;if(d){var v=e;l=v.appendChild(bi());}var c=null,o=false;xi(()=>{var f=r(),h=bn(f)?f:f==null?[]:_i(f),m=h.length;if(!(o&&m===0)){o=m===0;{var p=ne;Qs(h,u,l,i,t,(p.f&Ge)!==0,n);}s!==null&&(m===0?c?dn(c):c=Mr(()=>s(l)):c!==null&&vn(c,()=>{c=null;})),r();}});}function Qs(e,t,r,n,i,s,l,u){var K,ue,T,A;var d=(i&us)!==0,v=(i&(pi|mi))!==0,c=e.length,o=t.items,f=t.first,h=f,m,p=null,M,q=[],w=[],N,k,E,x;if(d)for(x=0;x<c;x+=1)N=e[x],k=l(N,x),E=o.get(k),E!==void 0&&((K=E.a)==null||K.measure(),(M??(M=new Set)).add(E));for(x=0;x<c;x+=1){if(N=e[x],k=l(N,x),E=o.get(k),E===void 0){var P=h?h.e.nodes_start:r;p=Ks(P,t,p,p===null?t.first:p.next,N,k,x,n,i),o.set(k,p),q=[],w=[],h=p.next;continue}if(v&&Js(E,N,x,i),E.e.f&Ge&&(dn(E.e),d&&((ue=E.a)==null||ue.unfix(),(M??(M=new Set)).delete(E))),E!==h){if(m!==void 0&&m.has(E)){if(q.length<w.length){var C=w[0],y;p=C.prev;var O=q[0],Y=q[q.length-1];for(y=0;y<q.length;y+=1)Ii(q[y],C,r);for(y=0;y<w.length;y+=1)m.delete(w[y]);at(t,O.prev,Y.next),at(t,p,O),at(t,Y,C),h=C,p=Y,x-=1,q=[],w=[];}else m.delete(E),Ii(E,h,r),at(t,E.prev,E.next),at(t,E,p===null?t.first:p.next),at(t,p,E),p=E;continue}for(q=[],w=[];h!==null&&h.k!==k;)(s||!(h.e.f&Ge))&&(m??(m=new Set)).add(h),w.push(h),h=h.next;if(h===null)continue;E=h;}q.push(E),p=E,h=E.next;}if(h!==null||m!==void 0){for(var j=m===void 0?[]:_i(m);h!==null;)(s||!(h.e.f&Ge))&&j.push(h),h=h.next;var J=j.length;if(J>0){var U=i&ra&&c===0?r:null;if(d){for(x=0;x<J;x+=1)(T=j[x].a)==null||T.measure();for(x=0;x<J;x+=1)(A=j[x].a)==null||A.fix();}Xs(t,j,U,o);}}d&&kn(()=>{var te;if(M!==void 0)for(E of M)(te=E.a)==null||te.apply();}),G.first=t.first&&t.first.e,G.last=p&&p.e;}function Js(e,t,r,n){n&pi&&ti(e.v,t),n&mi?ti(e.i,r):e.i=r;}function Ks(e,t,r,n,i,s,l,u,d,v){var c=sn,o=(d&pi)!==0,f=(d&vs)===0,h=o?f?xn(i):Te(i):i,m=d&mi?Te(l):l,p={i:m,v:h,k:s,a:null,e:null,prev:r,next:n};sn=p;try{return p.e=Mr(()=>u(e,h,m),ia),p.e.prev=r&&r.e,p.e.next=n&&n.e,r===null?t.first=p:(r.next=p,r.e.next=p.e),n!==null&&(n.prev=p,n.e.prev=p.e),p}finally{sn=c;}}function Ii(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,i=t?t.e.nodes_start:r,s=e.e.nodes_start;s!==n;){var l=Cn(s);i.before(s),s=l;}}function at(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e);}function Pi(e,t,r,n,i){var u;var s=(u=t.$$slots)==null?void 0:u[r],l=false;s===true&&(s=t.children,l=true),s===void 0?i!==null&&i(e):s(e,l?()=>n:n);}function V(e,t,r,n){var i=e.__attributes??(e.__attributes={});i[t]!==(i[t]=r)&&(t==="style"&&"__styles"in e&&(e.__styles={}),t==="loading"&&(e[Ka]=r),r==null?e.removeAttribute(t):typeof r!="string"&&eo(e).includes(t)?e[t]=r:e.setAttribute(t,r));}var Oi=new Map;function eo(e){var t=Oi.get(e.nodeName);if(t)return t;Oi.set(e.nodeName,t=[]);for(var r,n=e,i=Element.prototype;i!==n;){r=Xi(n);for(var s in r)r[s].set&&t.push(s);n=hi(n);}return t}function Hi(e,t,r){var n=e.__className,i=to(t);(n!==i||ia)&&(t==null?e.removeAttribute("class"):e.className=i,e.__className=i);}function to(e,t){return (e??"")+""}function pr(e,t,r){if(r){if(e.classList.contains(t))return;e.classList.add(t);}else {if(!e.classList.contains(t))return;e.classList.remove(t);}}function Oe(e,t,r,n){var i=e.__styles??(e.__styles={});i[t]!==r&&(i[t]=r,r==null?e.style.removeProperty(t):e.style.setProperty(t,r,""));}const ro=()=>performance.now(),Ke={tick:e=>requestAnimationFrame(e),now:()=>ro(),tasks:new Set};function ka(){const e=Ke.now();Ke.tasks.forEach(t=>{t.c(e)||(Ke.tasks.delete(t),t.f());}),Ke.tasks.size!==0&&Ke.tick(ka);}function no(e){let t;return Ke.tasks.size===0&&Ke.tick(ka),{promise:new Promise(r=>{Ke.tasks.add(t={c:e,f:r});}),abort(){Ke.tasks.delete(t);}}}function tn(e,t){e.dispatchEvent(new CustomEvent(t));}function io(e){if(e==="float")return "cssFloat";if(e==="offset")return "cssOffset";if(e.startsWith("--"))return e;const t=e.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function Ri(e){const t={},r=e.split(";");for(const n of r){const[i,s]=n.split(":");if(!i||s===void 0)break;const l=io(i.trim());t[l]=s.trim();}return t}const ao=e=>e;function so(e,t,r){var n=sn,i,s,l,u=null;n.a??(n.a={element:e,measure(){i=this.element.getBoundingClientRect();},apply(){if(l==null||l.abort(),s=this.element.getBoundingClientRect(),i.left!==s.left||i.right!==s.right||i.top!==s.top||i.bottom!==s.bottom){const d=t()(this.element,{from:i,to:s},r==null?void 0:r());l=gn(this.element,d,void 0,1,()=>{l==null||l.abort(),l=void 0;});}},fix(){if(!e.getAnimations().length){var{position:d,width:v,height:c}=getComputedStyle(e);if(d!=="absolute"&&d!=="fixed"){var o=e.style;u={position:o.position,width:o.width,height:o.height,transform:o.transform},o.position="absolute",o.width=v,o.height=c;var f=e.getBoundingClientRect();if(i.left!==f.left||i.top!==f.top){var h=`translate(${i.left-f.left}px, ${i.top-f.top}px)`;o.transform=o.transform?`${o.transform} ${h}`:h;}}}},unfix(){if(u){var d=e.style;d.position=u.position,d.width=u.width,d.height=u.height,d.transform=u.transform;}}}),n.a.element=e;}function Dt(e,t,r,n){var i=(e&ps)!==0,s=(e&ms)!==0,l=i&&s,u=(e&bs)!==0,d=l?"both":i?"in":"out",v,c=t.inert,o,f;function h(){var w=ne,N=G;Ue(null),He(null);try{return v??(v=r()(t,(n==null?void 0:n())??{},{direction:d}))}finally{Ue(w),He(N);}}var m={is_global:u,in(){var w;if(t.inert=c,!i){f==null||f.abort(),(w=f==null?void 0:f.reset)==null||w.call(f);return}s||o==null||o.abort(),tn(t,"introstart"),o=gn(t,h(),f,1,()=>{tn(t,"introend"),o==null||o.abort(),o=v=void 0;});},out(w){if(!s){w==null||w(),v=void 0;return}t.inert=true,tn(t,"outrostart"),f=gn(t,h(),o,0,()=>{tn(t,"outroend"),w==null||w();});},stop:()=>{o==null||o.abort(),f==null||f.abort();}},p=G;if((p.transitions??(p.transitions=[])).push(m),i&&oi){var M=u;if(!M){for(var q=p.parent;q&&q.f&wn;)for(;(q=q.parent)&&!(q.f&yn););M=!q||(q.f&Ji)!==0;}M&&Tr(()=>{I(()=>m.in());});}}function gn(e,t,r,n,i){var s=n===1;if(Ya(t)){var l,u=false;return kn(()=>{if(!u){var M=t({direction:s?"in":"out"});l=gn(e,M,r,n,i);}}),{abort:()=>{u=true,l==null||l.abort();},deactivate:()=>l.deactivate(),reset:()=>l.reset(),t:()=>l.t()}}if(r==null||r.deactivate(),!(t!=null&&t.duration))return i(),{abort:Re,deactivate:Re,reset:Re,t:()=>n};const{delay:d=0,css:v,tick:c,easing:o=ao}=t;var f=[];if(s&&r===void 0&&(c&&c(0,1),v)){var h=Ri(v(0,1));f.push(h,h);}var m=()=>1-n,p=e.animate(f,{duration:d});return p.onfinish=()=>{var M=(r==null?void 0:r.t())??1-n;r==null||r.abort();var q=n-M,w=t.duration*Math.abs(q),N=[];if(w>0){if(v)for(var k=Math.ceil(w/16.666666666666668),E=0;E<=k;E+=1){var x=M+q*o(E/k),P=v(x,1-x);N.push(Ri(P));}m=()=>{var C=p.currentTime;return M+q*o(C/w)},c&&no(()=>{if(p.playState!=="running")return  false;var C=m();return c(C,1-C),true});}p=e.animate(N,{duration:w,fill:"forwards"}),p.onfinish=()=>{m=()=>n,c==null||c(n,1-n),i();};},{abort:()=>{p&&(p.cancel(),p.effect=null,p.onfinish=Re);},deactivate:()=>{i=Re;},reset:()=>{n===0&&(c==null||c(1,0));},t:()=>m()}}function rn(e,t,r=t){var n=En();js(e,"input",i=>{var s=i?e.defaultValue:e.value;if(s=Un(e)?Xn(s):s,r(s),n&&s!==(s=t())){var l=e.selectionStart,u=e.selectionEnd;e.value=s??"",u!==null&&(e.selectionStart=l,e.selectionEnd=Math.min(u,e.value.length));}}),I(t)==null&&e.value&&r(Un(e)?Xn(e.value):e.value),Ir(()=>{var i=t();Un(e)&&i===Xn(e.value)||e.type==="date"&&!i&&!e.value||i!==e.value&&(e.value=i??"");});}function Un(e){var t=e.type;return t==="number"||t==="range"}function Xn(e){return e===""?null:+e}function Qn(e,t,r){var n=xt(e,t);n&&n.set&&(e[t]=r,wi(()=>{e[t]=null;}));}var ot,Rt,qr,pn,Ea;const mn=class mn{constructor(t){_r(this,pn);_r(this,ot,new WeakMap);_r(this,Rt);_r(this,qr);Yn(this,qr,t);}observe(t,r){var n=Je(this,ot).get(t)||new Set;return n.add(r),Je(this,ot).set(t,n),qi(this,pn,Ea).call(this).observe(t,Je(this,qr)),()=>{var i=Je(this,ot).get(t);i.delete(r),i.size===0&&(Je(this,ot).delete(t),Je(this,Rt).unobserve(t));}}};ot=new WeakMap,Rt=new WeakMap,qr=new WeakMap,pn=new WeakSet,Ea=function(){return Je(this,Rt)??Yn(this,Rt,new ResizeObserver(t=>{for(var r of t){mn.entries.set(r.target,r);for(var n of Je(this,ot).get(r.target)||[])n(r);}}))},Wn(mn,"entries",new WeakMap);let li=mn;var oo=new li({box:"border-box"});function Fi(e,t,r){var n=oo.observe(e,()=>r(e[t]));Tr(()=>(I(()=>r(e[t])),n));}function Di(e,t){return e===t||(e==null?void 0:e[Ct])===t}function st(e={},t,r,n){return Tr(()=>{var i,s;return Ir(()=>{i=s,s=[],I(()=>{e!==r(...s)&&(t(e,...s),i&&Di(r(...i),e)&&t(null,...i));});}),()=>{kn(()=>{s&&Di(r(...s),e)&&t(null,...s);});}}),e}function Ei(e){return function(...t){var r=t[0];r.target===this&&(e==null||e.apply(this,t));}}function xr(e){return function(...t){var r=t[0];return r.stopPropagation(),e==null?void 0:e.apply(this,t)}}function Mt(e=false){const t=ae,r=t.l.u;if(!r)return;let n=()=>mt(t.s);if(e){let i=0,s={};const l=un(()=>{let u=false;const d=t.s;for(const v in d)d[v]!==s[v]&&(s[v]=d[v],u=true);return u&&i++,i});n=()=>a(l);}r.b.length&&Ms(()=>{Bi(t,n),Kn(r.b);}),ri(()=>{const i=I(()=>r.m.map(Ua));return ()=>{for(const s of i)typeof s=="function"&&s();}}),r.a.length&&ri(()=>{Bi(t,n),Kn(r.a);});}function Bi(e,t){if(e.l.s)for(const r of e.l.s)a(r);t();}function lo(e){var t=Te(0);return function(){return arguments.length===1?(S(t,a(t)+1),arguments[0]):(a(t),e())}}function Zi(e,t){var s;var r=(s=e.$$events)==null?void 0:s[t.type],n=bn(r)?r.slice():r==null?[]:[r];for(var i of n)i.call(this,t);}function La(e,t,r){if(e==null)return t(void 0),Re;const n=I(()=>e.subscribe(t,r));return n.unsubscribe?()=>n.unsubscribe():n}let mr=false;function oe(e,t,r){const n=r[t]??(r[t]={store:null,source:xn(void 0),unsubscribe:Re});if(n.store!==e)if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=void 0,n.unsubscribe=Re;else {var i=true;n.unsubscribe=La(e,s=>{i?n.source.v=s:S(n.source,s);}),i=false;}return a(n.source)}function pe(e,t){return e.set(t),t}function Qt(){const e={};return wi(()=>{for(var t in e)e[t].unsubscribe();}),e}function ge(e,t,r){return e.set(r),t}function nn(){mr=true;}function co(e){var t=mr;try{return mr=!1,[e(),mr]}finally{mr=t;}}function ji(e){for(var t=G,r=G;t!==null&&!(t.f&(De|Ar));)t=t.parent;try{return He(t),e()}finally{He(r);}}function _e(e,t,r,n){var P;var i=(r&ds)!==0,s=!Gt||(r&fs)!==0,l=(r&hs)!==0,u=(r&gs)!==0,d=false,v;l?[v,d]=co(()=>e[t]):v=e[t];var c=Ct in e||Ja in e,o=((P=xt(e,t))==null?void 0:P.set)??(c&&l&&t in e?C=>e[t]=C:void 0),f=n,h=true,m=false,p=()=>(m=true,h&&(h=false,u?f=I(n):f=n),f);v===void 0&&n!==void 0&&(o&&s&&is(),v=p(),o&&o(v));var M;if(s)M=()=>{var C=e[t];return C===void 0?p():(h=true,m=false,C)};else {var q=ji(()=>(i?un:Lr)(()=>e[t]));q.f|=Xa,M=()=>{var C=a(q);return C!==void 0&&(f=void 0),C===void 0?f:C};}if(!(r&_s))return M;if(o){var w=e.$$legacy;return function(C,y){return arguments.length>0?((!s||!y||w||d)&&o(y?M():C),C):M()}}var N=false,k=false,E=xn(v),x=ji(()=>un(()=>{var C=M(),y=a(E);return N?(N=!1,k=!0,y):(k=!1,E.v=C)}));return i||(x.equals=gi),function(C,y){if(arguments.length>0){const O=y?a(x):s&&l?zt(C):C;return x.equals(O)||(N=true,S(E,O),m&&f!==void 0&&(f=O),I(()=>a(x))),C}return a(x)}}function Nn(e){ae===null&&pa(),Gt&&ae.l!==null?uo(ae).m.push(e):ri(()=>{const t=I(e);if(typeof t=="function")return t});}function Ma(e){ae===null&&pa(),Nn(()=>()=>I(e));}function uo(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const vo="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(vo);cs();const fo=e=>e;function Bt(e,{delay:t=0,duration:r=400,easing:n=fo}={}){const i=+getComputedStyle(e).opacity;return {delay:t,duration:r,easing:n,css:s=>`opacity: ${s*i}`}}function pt(e,t=()=>{}){if(!e)return;const r=document.querySelector(e);if(r){t(r);return}const n=new MutationObserver((i,s)=>{const l=document.querySelector(e);l&&(s.disconnect(),t(l));});return n.observe(document.documentElement,{childList:true,subtree:true}),()=>{n.disconnect();}}function Pt(e){if(typeof e=="string")try{const t=JSON.parse(e);return Pt(t)}catch{return e}if(Array.isArray(e))return e.map(t=>Pt(t));if(e!==null&&typeof e=="object"){const t={};for(const r in e)e.hasOwnProperty(r)&&(t[r]=Pt(e[r]));return t}return e}window.__JsonParse=Pt;function kt(e){if(!e)return "inherit";let t=e.toString().trim();if(t.startsWith("var(")){const l=t.match(/var\(([^)]+)\)/);if(l){const u=l[1],d=getComputedStyle(document.documentElement).getPropertyValue(u).trim();if(d)t=d;else return "inherit"}}if(t.startsWith("rgba(")||t.startsWith("rgb(")){const l=t.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);if(l){const[,u,d,v]=l;return (parseInt(u)*299+parseInt(d)*587+parseInt(v)*114)/1e3<128?"#FFFFFF":"#000000"}}t=t.replace("#","");let r,n,i;if(t.length===3)r=parseInt(t[0]+t[0],16),n=parseInt(t[1]+t[1],16),i=parseInt(t[2]+t[2],16);else if(t.length===6)r=parseInt(t.substr(0,2),16),n=parseInt(t.substr(2,2),16),i=parseInt(t.substr(4,2),16);else if(t.length===8)r=parseInt(t.substr(0,2),16),n=parseInt(t.substr(2,2),16),i=parseInt(t.substr(4,2),16);else return "inherit";return (r*299+n*587+i*114)/1e3<128?"#FFFFFF":"#000000"}const Tt=[];function Sn(e,t=Re){let r=null;const n=new Set;function i(u){if(ta(e,u)&&(e=u,r)){const d=!Tt.length;for(const v of n)v[1](),Tt.push(v,e);if(d){for(let v=0;v<Tt.length;v+=2)Tt[v][0](Tt[v+1]);Tt.length=0;}}}function s(u){i(u(e));}function l(u,d=Re){const v=[u,d];return n.add(v),n.size===1&&(r=t(i,s)||Re),u(e),()=>{n.delete(v),n.size===0&&r&&(r(),r=null);}}return {set:i,update:s,subscribe:l}}function Jn(e){let t;return La(e,r=>t=r)(),t}const Na="Kesa:Fall",Wi=()=>{try{return Pt(localStorage.getItem(Na))??{}}catch{return {}}},ze=(e,t)=>{const r=Wi(),n=e in r?r[e]:t,{subscribe:i,set:s,update:l}=Sn(n);return i(u=>{const d=Wi();localStorage.setItem(Na,JSON.stringify({...d,[e]:u}));}),{subscribe:i,set:u=>{typeof u=="function"?l(u):s(u);},update:l}},on=Sn(0),Sa=Sn(""),Cr=ze("_isFallView",true),br=Sn(0),ci=ze("_panelPos",{x:0,y:0}),ui=ze("_show_hover_pic",1),kr=ze("_state_hover_pic",false),vi=ze("_pic_failed_showInfo",1),yr=ze("_card_layout",{min:300,max:600,gap:8}),Ie=ze("_card_detail",{all:false,category:true,title:false,topping:true,free:true,size:true,sub_title:false,tags:false,download_collect:false,upload_time:false,statistics:false}),_o=ze("_show_nexus_pic",1),di=ze("_block_gay",1),ln=ze("_card_radius",{enabled:true,value:16}),qa=ze("_mt_label",{}),$a=ze("_mt_categories",{}),wt=ze("_textColor",{t1:"black",t2:"black",t3:"black"});function ho(e={path:"/search",method:"POST"}){const t=XMLHttpRequest.prototype.open,r=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.open=function(n,i){return this._requestMetadata={method:n.toUpperCase(),url:i,isTarget:i.includes(e.path)&&n.toUpperCase()===e.method},t.apply(this,arguments)},XMLHttpRequest.prototype.send=function(n){var i;if((i=this._requestMetadata)!=null&&i.isTarget){const s=this.onreadystatechange,l=this.onload;this.addEventListener("readystatechange",()=>{this.readyState===4&&this._captureResponseData(),s==null||s.call(this);}),this.onload=v=>{this._captureResponseData(),l==null||l.call(this,v);};const u={url:this._requestMetadata.url,body:n instanceof Document?n.documentElement.textContent||"[Document]":n},d=new CustomEvent(`req>${e.method}->${e.path}`,{detail:u});window.dispatchEvent(d);}return r.apply(this,arguments)},XMLHttpRequest.prototype._captureResponseData=function(){if(!this._hasCaptured&&this._requestMetadata.isTarget){try{const n={status:this.status,headers:this.getAllResponseHeaders(),data:this._parseResponse()},i=new CustomEvent(`res>${e.method}->${e.path}`,{detail:n});window.dispatchEvent(i);}catch(n){console.error("<PT-Fall> Capture failed:",n);}this._hasCaptured=true;}},XMLHttpRequest.prototype._parseResponse=function(){var n;try{switch(this.responseType){case "json":return this.response;case "document":return ((n=this.responseXML)==null?void 0:n.documentElement.textContent)||null;case "arraybuffer":return new Uint8Array(this.response);case "blob":return URL.createObjectURL(this.response);default:return this.responseText}}catch{return this.responseText}};}function go(e){const t=e-1;return t*t*t+1}function po(e,{from:t,to:r},n={}){var i=getComputedStyle(e),s=mo(e),l=i.transform==="none"?"":i.transform,[u,d]=i.transformOrigin.split(" ").map(parseFloat),v=t.width/r.width,c=t.height/r.height,o=(t.left+v*u-(r.left+u))/s,f=(t.top+c*d-(r.top+d))/s,{delay:h=0,duration:m=M=>Math.sqrt(M)*120,easing:p=go}=n;return {delay:h,duration:typeof m=="function"?m(Math.sqrt(o*o+f*f)):m,easing:p,css:(M,q)=>{var w=q*o,N=q*f,k=M+q*v,E=M+q*c;return `transform: ${l} scale(${k}, ${E}) translate(${w}px, ${N}px);`}}}function mo(e){if("currentCSSZoom"in e)return e.currentCSSZoom;for(var t=e,r=1;t!==null;)r*=+getComputedStyle(t).zoom,t=t.parentElement;return r}var bo=z('<span class="svelte-b2jtby"> </span>'),yo=z('<div class="svelte-b2jtby"><!></div>'),wo=z('<span class="svelte-b2jtby"> </span>'),xo=z("<div><!></div>"),Co=z("<div></div>");function ko(e,t){dt(t,false);const r=Z(),n=Z();let i=_e(t,"animate",8,true),s=_e(t,"columnClass",24,()=>""),l=_e(t,"duration",8,200),u=_e(t,"gap",8,20),d=_e(t,"getId",8,w=>typeof w=="number"||typeof w=="string"?w:w[v()]),v=_e(t,"idKey",24,()=>"id"),c=_e(t,"items",8),o=_e(t,"masonryHeight",12,0),f=_e(t,"masonryWidth",12,0),h=_e(t,"maxColWidth",8,500),m=_e(t,"minColWidth",8,330),p=_e(t,"style",24,()=>""),M=_e(t,"class",24,()=>"");Ne(()=>(mt(c()),mt(f()),mt(m()),mt(u())),()=>{S(r,Math.min(c().length,Math.floor(f()/(m()+u()))||1));}),Ne(()=>(mt(c()),a(r)),()=>{S(n,c().reduce((w,N,k)=>(w[k%w.length].push([N,k]),w),Array(a(r)).fill(null).map(()=>[])));}),zr(),Mt();var q=Co();yt(q,5,()=>a(n),gr,(w,N)=>{var k=xo(),E=_(k);{var x=C=>{var y=lt(),O=Se(y);yt(O,9,()=>a(N),([Y,j])=>d()(Y),(Y,j)=>{let J=()=>a(j)[0],U=()=>a(j)[1];var K=yo(),ue=_(K);Pi(ue,t,"default",{get idx(){return U()},get item(){return J()}},T=>{var A=bo(),te=_(A);F(()=>re(te,J())),L(T,A);}),Dt(1,K,()=>Bt,()=>({delay:100,duration:l()})),Dt(2,K,()=>Bt,()=>({delay:0,duration:l()})),so(K,()=>po,()=>({duration:l()})),L(Y,K);}),L(C,y);},P=C=>{var y=lt(),O=Se(y);yt(O,1,()=>a(N),([Y,j])=>d()(Y),(Y,j)=>{let J=()=>a(j)[0],U=()=>a(j)[1];var K=lt(),ue=Se(K);Pi(ue,t,"default",{get idx(){return U()},get item(){return J()}},T=>{var A=wo(),te=_(A);F(()=>re(te,J())),L(T,A);}),L(Y,K);}),L(C,y);};B(E,C=>{i()?C(x):C(P,false);});}F(()=>{Hi(k,`col ${s()??""} svelte-b2jtby`),V(k,"style",`gap: ${u()??""}px; max-width: ${h()??""}px;`);}),L(w,k);}),F(()=>{Hi(q,`masonry ${M()??""} svelte-b2jtby`),V(q,"style",`gap: ${u()??""}px; ${p()??""}`);}),Fi(q,"clientWidth",f),Fi(q,"clientHeight",o),L(e,q),ft();}/*! *****************************************************************************
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
      ***************************************************************************** */var Pe=function(){return Pe=Object.assign||function(t){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);}return t},Pe.apply(this,arguments)},Eo=function(){function e(t){this.options=t,this.listeners={};}return e.prototype.on=function(t,r){var n=this.listeners[t]||[];this.listeners[t]=n.concat([r]);},e.prototype.triggerEvent=function(t,r){var n=this,i=this.listeners[t]||[];i.forEach(function(s){return s({target:n,event:r})});},e}(),Zt;(function(e){e[e.Add=0]="Add",e[e.Remove=1]="Remove";})(Zt||(Zt={}));var Lo=function(){function e(){this.notifications=[];}return e.prototype.push=function(t){this.notifications.push(t),this.updateFn(t,Zt.Add,this.notifications);},e.prototype.splice=function(t,r){var n=this.notifications.splice(t,r)[0];return this.updateFn(n,Zt.Remove,this.notifications),n},e.prototype.indexOf=function(t){return this.notifications.indexOf(t)},e.prototype.onUpdate=function(t){this.updateFn=t;},e}(),ct;(function(e){e.Dismiss="dismiss",e.Click="click";})(ct||(ct={}));var Gi={types:[{type:"success",className:"notyf__toast--success",backgroundColor:"#3dc763",icon:{className:"notyf__icon--success",tagName:"i"}},{type:"error",className:"notyf__toast--error",backgroundColor:"#ed3d3d",icon:{className:"notyf__icon--error",tagName:"i"}}],duration:2e3,ripple:true,position:{x:"right",y:"bottom"},dismissible:false},Mo=function(){function e(){this.notifications=[],this.events={},this.X_POSITION_FLEX_MAP={left:"flex-start",center:"center",right:"flex-end"},this.Y_POSITION_FLEX_MAP={top:"flex-start",center:"center",bottom:"flex-end"};var t=document.createDocumentFragment(),r=this._createHTMLElement({tagName:"div",className:"notyf"});t.appendChild(r),document.body.appendChild(t),this.container=r,this.animationEndEventName=this._getAnimationEndEventName(),this._createA11yContainer();}return e.prototype.on=function(t,r){var n;this.events=Pe(Pe({},this.events),(n={},n[t]=r,n));},e.prototype.update=function(t,r){r===Zt.Add?this.addNotification(t):r===Zt.Remove&&this.removeNotification(t);},e.prototype.removeNotification=function(t){var r=this,n=this._popRenderedNotification(t),i;if(n){i=n.node,i.classList.add("notyf__toast--disappear");var s;i.addEventListener(this.animationEndEventName,s=function(l){l.target===i&&(i.removeEventListener(r.animationEndEventName,s),r.container.removeChild(i));});}},e.prototype.addNotification=function(t){var r=this._renderNotification(t);this.notifications.push({notification:t,node:r}),this._announce(t.options.message||"Notification");},e.prototype._renderNotification=function(t){var r,n=this._buildNotificationCard(t),i=t.options.className;return i&&(r=n.classList).add.apply(r,i.split(" ")),this.container.appendChild(n),n},e.prototype._popRenderedNotification=function(t){for(var r=-1,n=0;n<this.notifications.length&&r<0;n++)this.notifications[n].notification===t&&(r=n);if(r!==-1)return this.notifications.splice(r,1)[0]},e.prototype.getXPosition=function(t){var r;return ((r=t==null?void 0:t.position)===null||r===void 0?void 0:r.x)||"right"},e.prototype.getYPosition=function(t){var r;return ((r=t==null?void 0:t.position)===null||r===void 0?void 0:r.y)||"bottom"},e.prototype.adjustContainerAlignment=function(t){var r=this.X_POSITION_FLEX_MAP[this.getXPosition(t)],n=this.Y_POSITION_FLEX_MAP[this.getYPosition(t)],i=this.container.style;i.setProperty("justify-content",n),i.setProperty("align-items",r);},e.prototype._buildNotificationCard=function(t){var r=this,n=t.options,i=n.icon;this.adjustContainerAlignment(n);var s=this._createHTMLElement({tagName:"div",className:"notyf__toast"}),l=this._createHTMLElement({tagName:"div",className:"notyf__ripple"}),u=this._createHTMLElement({tagName:"div",className:"notyf__wrapper"}),d=this._createHTMLElement({tagName:"div",className:"notyf__message"});d.innerHTML=n.message||"";var v=n.background||n.backgroundColor;if(i){var c=this._createHTMLElement({tagName:"div",className:"notyf__icon"});if((typeof i=="string"||i instanceof String)&&(c.innerHTML=new String(i).valueOf()),typeof i=="object"){var o=i.tagName,f=o===void 0?"i":o,h=i.className,m=i.text,p=i.color,M=p===void 0?v:p,q=this._createHTMLElement({tagName:f,className:h,text:m});M&&(q.style.color=M),c.appendChild(q);}u.appendChild(c);}if(u.appendChild(d),s.appendChild(u),v&&(n.ripple?(l.style.background=v,s.appendChild(l)):s.style.background=v),n.dismissible){var w=this._createHTMLElement({tagName:"div",className:"notyf__dismiss"}),N=this._createHTMLElement({tagName:"button",className:"notyf__dismiss-btn"});w.appendChild(N),u.appendChild(w),s.classList.add("notyf__toast--dismissible"),N.addEventListener("click",function(E){var x,P;(P=(x=r.events)[ct.Dismiss])===null||P===void 0||P.call(x,{target:t,event:E}),E.stopPropagation();});}s.addEventListener("click",function(E){var x,P;return (P=(x=r.events)[ct.Click])===null||P===void 0?void 0:P.call(x,{target:t,event:E})});var k=this.getYPosition(n)==="top"?"upper":"lower";return s.classList.add("notyf__toast--"+k),s},e.prototype._createHTMLElement=function(t){var r=t.tagName,n=t.className,i=t.text,s=document.createElement(r);return n&&(s.className=n),s.textContent=i||null,s},e.prototype._createA11yContainer=function(){var t=this._createHTMLElement({tagName:"div",className:"notyf-announcer"});t.setAttribute("aria-atomic","true"),t.setAttribute("aria-live","polite"),t.style.border="0",t.style.clip="rect(0 0 0 0)",t.style.height="1px",t.style.margin="-1px",t.style.overflow="hidden",t.style.padding="0",t.style.position="absolute",t.style.width="1px",t.style.outline="0",document.body.appendChild(t),this.a11yContainer=t;},e.prototype._announce=function(t){var r=this;this.a11yContainer.textContent="",setTimeout(function(){r.a11yContainer.textContent=t;},100);},e.prototype._getAnimationEndEventName=function(){var t=document.createElement("_fake"),r={MozTransition:"animationend",OTransition:"oAnimationEnd",WebkitTransition:"webkitAnimationEnd",transition:"animationend"},n;for(n in r)if(t.style[n]!==void 0)return r[n];return "animationend"},e}(),Aa=function(){function e(t){var r=this;this.dismiss=this._removeNotification,this.notifications=new Lo,this.view=new Mo;var n=this.registerTypes(t);this.options=Pe(Pe({},Gi),t),this.options.types=n,this.notifications.onUpdate(function(i,s){return r.view.update(i,s)}),this.view.on(ct.Dismiss,function(i){var s=i.target,l=i.event;r._removeNotification(s),s.triggerEvent(ct.Dismiss,l);}),this.view.on(ct.Click,function(i){var s=i.target,l=i.event;return s.triggerEvent(ct.Click,l)});}return e.prototype.error=function(t){var r=this.normalizeOptions("error",t);return this.open(r)},e.prototype.success=function(t){var r=this.normalizeOptions("success",t);return this.open(r)},e.prototype.open=function(t){var r=this.options.types.find(function(s){var l=s.type;return l===t.type})||{},n=Pe(Pe({},r),t);this.assignProps(["ripple","position","dismissible"],n);var i=new Eo(n);return this._pushNotification(i),i},e.prototype.dismissAll=function(){for(;this.notifications.splice(0,1););},e.prototype.assignProps=function(t,r){var n=this;t.forEach(function(i){r[i]=r[i]==null?n.options[i]:r[i];});},e.prototype._pushNotification=function(t){var r=this;this.notifications.push(t);var n=t.options.duration!==void 0?t.options.duration:this.options.duration;n&&setTimeout(function(){return r._removeNotification(t)},n);},e.prototype._removeNotification=function(t){var r=this.notifications.indexOf(t);r!==-1&&this.notifications.splice(r,1);},e.prototype.normalizeOptions=function(t,r){var n={type:t};return typeof r=="string"?n.message=r:typeof r=="object"&&(n=Pe(Pe({},n),r)),n},e.prototype.registerTypes=function(t){var r=(t&&t.types||[]).slice(),n=Gi.types.map(function(i){var s=-1;r.forEach(function(u,d){u.type===i.type&&(s=d);});var l=s!==-1?r.splice(s,1)[0]:{};return Pe(Pe({},i),l)});return n.concat(r)},e}();new Aa({duration:5e3,dismissible:true});const Ot=new Aa({duration:3e3,dismissible:true,position:{x:"left",y:"top"},types:[{type:"warning",background:"orange",icon:false}]}),No="data:image/svg+xml,%3csvg%20stroke='currentColor'%20fill='currentColor'%20stroke-width='0'%20viewBox='0%200%2024%2024'%20height='25'%20width='25'%20xmlns='http://www.w3.org/2000/svg'%20style='%20vertical-align:%20middle;%20--darkreader-inline-fill:%20currentColor;%20--darkreader-inline-stroke:%20currentColor;'%20%3e%3cpath%20d='M12%205c-3.859%200-7%203.141-7%207s3.141%207%207%207%207-3.141%207-7-3.141-7-7-7zm0%2012c-2.757%200-5-2.243-5-5s2.243-5%205-5%205%202.243%205%205-2.243%205-5%205z'%3e%3c/path%3e%3cpath%20d='M12%209c-1.627%200-3%201.373-3%203s1.373%203%203%203%203-1.373%203-3-1.373-3-3-3z'%3e%3c/path%3e%3c/svg%3e",So="data:image/svg+xml,%3csvg%20viewBox='64%2064%20896%20896'%20focusable='false'%20data-icon='arrow-up'%20width='1em'%20height='1em'%20fill='green'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M868%20545.5L536.1%20163a31.96%2031.96%200%2000-48.3%200L156%20545.5a7.97%207.97%200%20006%2013.2h81c4.6%200%209-2%2012.1-5.5L474%20300.9V864c0%204.4%203.6%208%208%208h60c4.4%200%208-3.6%208-8V300.9l218.9%20252.3c3%203.5%207.4%205.5%2012.1%205.5h81c6.8%200%2010.5-8%206-13.2z'%3e%3c/path%3e%3c/svg%3e",qo="data:image/svg+xml,%3csvg%20viewBox='64%2064%20896%20896'%20focusable='false'%20data-icon='arrow-down'%20width='1em'%20height='1em'%20fill='red'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M862%20465.3h-81c-4.6%200-9%202-12.1%205.5L550%20723.1V160c0-4.4-3.6-8-8-8h-60c-4.4%200-8%203.6-8%208v563.1L255.1%20470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8%200-10.5%208.1-6%2013.2L487.9%20861a31.96%2031.96%200%200048.3%200L868%20478.5c4.5-5.2.8-13.2-6-13.2z'%3e%3c/path%3e%3c/svg%3e",$o="data:image/svg+xml,%3csvg%20viewBox='64%2064%20896%20896'%20focusable='false'%20data-icon='download'%20width='1em'%20height='1em'%20fill='currentColor'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M505.7%20661a8%208%200%200012.6%200l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4%200-8%203.6-8%208v338.3H400c-6.7%200-10.4%207.7-6.3%2012.9l112%20141.8zM878%20626h-60c-4.4%200-8%203.6-8%208v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4%200-8%203.6-8%208v198c0%2017.7%2014.3%2032%2032%2032h684c17.7%200%2032-14.3%2032-32V634c0-4.4-3.6-8-8-8z'%3e%3c/path%3e%3c/svg%3e",Ao="data:image/svg+xml,%3csvg%20viewBox='64%2064%20896%20896'%20focusable='false'%20data-icon='star'%20width='1em'%20height='1em'%20fill='currentColor'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M908.1%20353.1l-253.9-36.9L540.7%2086.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9%2014.5L369.8%20316.2l-253.9%2036.9c-7%201-13.4%204.3-18.3%209.3a32.05%2032.05%200%2000.6%2045.3l183.7%20179.1-43.4%20252.9a31.95%2031.95%200%200046.4%2033.7L512%20754l227.1%20119.4c6.2%203.3%2013.4%204.4%2020.3%203.2%2017.4-3%2029.1-19.5%2026.1-36.9l-43.4-252.9%20183.7-179.1c5-4.9%208.3-11.3%209.3-18.3%202.7-17.5-9.5-33.7-27-36.3z'%3e%3c/path%3e%3c/svg%3e",Vo="data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cstyle%3e%20.cls-1{fill:%232eb1b7;}%20.cls-2{fill:%2356b54e;}%20.cls-3{fill:%235dc6d1;}%20.cls-4{fill:%2360cc5a;}%20.cls-5{fill:%23ffce69;}%20.cls-6{fill:%236c2e7c;}%20%3c/style%3e%3c/defs%3e%3cg%20id='Icons'%3e%3crect%20class='cls-1'%20height='22'%20rx='4'%20width='22'%20x='1'%20y='1'/%3e%3cpath%20class='cls-2'%20d='M23,18v1a4,4,0,0,1-4,4H5a4,4,0,0,1-3.9-3.1l7.19-7.19a1.008,1.008,0,0,1,1.42,0l1.8,1.8a1,1,0,0,0,1.46-.05l2.33-2.65a1,1,0,0,1,1.46-.05Z'/%3e%3cpath%20class='cls-3'%20d='M23,5v9a4.025,4.025,0,0,1-1.17,2.83l-5.07-5.07a1,1,0,0,0-1.46.05l-2.33,2.65a1,1,0,0,1-1.46.05l-1.8-1.8a1.008,1.008,0,0,0-1.42,0L3.36,17.64A3.988,3.988,0,0,1,1,14V5A4,4,0,0,1,5,1H19A4,4,0,0,1,23,5Z'/%3e%3cpath%20class='cls-4'%20d='M21.83,16.83A4.025,4.025,0,0,1,19,18H5a3.931,3.931,0,0,1-1.64-.36l4.93-4.93a1.008,1.008,0,0,1,1.42,0l1.8,1.8a1,1,0,0,0,1.46-.05l2.33-2.65a1,1,0,0,1,1.46-.05Z'/%3e%3ccircle%20class='cls-5'%20cx='7'%20cy='7'%20r='2'/%3e%3c/g%3e%3cg%20data-name='Layer%204'%20id='Layer_4'%3e%3cpath%20class='cls-6'%20d='M19,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,19,0Zm3,19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3Z'/%3e%3cpath%20class='cls-6'%20d='M7,10A3,3,0,1,0,4,7,3,3,0,0,0,7,10ZM7,6A1,1,0,1,1,6,7,1,1,0,0,1,7,6Z'/%3e%3cpath%20class='cls-6'%20d='M16.707,10.293a.956.956,0,0,0-.74-.293,1.006,1.006,0,0,0-.72.341L12.217,13.8l-2.51-2.511a1,1,0,0,0-1.414,0l-4,4a1,1,0,1,0,1.414,1.414L9,13.414l1.9,1.9L8.247,18.341a1,1,0,0,0,1.506,1.318l3.218-3.678.006,0,.007-.011,3.065-3.5,2.244,2.244a1,1,0,0,0,1.414-1.414Z'/%3e%3c/g%3e%3c/svg%3e",W="https://static.m-team.cc/static/cate/",Ht={architecture:"Mteam",TL_Selector:"div.app-content__inner",LOADING_PIC:"/static/media/logo.80b63235eaf702e44a8d.png",HOST:"https://test2.m-team.cc",API:{search:{url:"/search",fullUrl:"/api/torrent/search",method:"POST"}},ICON:{SIZE:No,SEEDERS:So,LEECHERS:qo,DOWNLOAD:$o,COLLECTION:Ao,PIN:"/static/trans.gif",PREVIEW:Vo},CATEGORY:{401:{src:W+"moviesd.png",alt:"電影/SD",color:"#c74854"},402:{src:W+"tvhd.png",alt:"影劇/綜藝/HD",color:"#276fb8"},403:{src:W+"tvsd.png",alt:"影劇/綜藝/SD",color:"#00a0e9"},404:{src:W+"bbc.png",alt:"紀錄",color:"#23ac38"},405:{src:W+"anime.png",alt:"動畫",color:"#996c34"},406:{src:W+"mv.png",alt:"演唱",color:"#8a57a1"},407:{src:W+"sport.png",alt:"運動",color:"#23ac38"},409:{src:W+"other.png",alt:"Misc(其他)",color:"#996c34"},419:{src:W+"moviehd.png",alt:"電影/HD",color:"#c01a20"},420:{src:W+"moviedvd.png",alt:"電影/DVDiSo",color:"#c74854"},421:{src:W+"moviebd.png",alt:"電影/Blu-Ray",color:"#00a0e9"},422:{src:W+"software.png",alt:"軟體",color:"#f39800"},423:{src:W+"game-pc-3.jpeg",alt:"PC遊戲",color:"#f39800"},427:{src:W+"Study.png",alt:"教育(書面)",color:"#7FC269"},434:{src:W+"flac.png",alt:"Music(無損)",color:"#8a57a1"},435:{src:W+"tvdvd.png",alt:"影劇/綜藝/DVDiSo",color:"#4dbebd"},438:{src:W+"tvbd.png",alt:"影劇/綜藝/BD",color:"#1897d6"},439:{src:W+"movieremux.png",alt:"電影/Remux",color:"#1b2a51"},451:{src:W+"Study_Video.png",alt:"教育(影片)",color:"#7FC269"},442:{src:W+"Study_Audio.png",alt:"有聲書",color:"#7FC269"},448:{src:W+"pcgame.png",alt:"TV遊戲",color:"#f39800"},410:{src:W+"cenhd.png",alt:"AV(有碼)/HD Censored",color:"#F520CB"},411:{src:W+"hgame.png",alt:"H-遊戲",color:"#f49800"},412:{src:W+"hanime.png",alt:"H-動畫",color:"#f49800"},413:{src:W+"hcomic.png",alt:"H-漫畫",color:"#f49800"},424:{src:W+"censd.png",alt:"AV(有碼)/SD Censored",color:"#DA55A9"},425:{src:W+"ivvideo.png",alt:"IV(寫真影集)",color:"#bb1e9a"},426:{src:W+"uendvd.png",alt:"AV(無碼)/DVDiSo Uncensored",color:"#f77afa"},429:{src:W+"uenhd.png",alt:"AV(無碼)/HD Uncensored",color:"#f52bcb"},430:{src:W+"uensd.png",alt:"AV(無碼)/SD Uncensored",color:"#db55a9"},431:{src:W+"cenbd.png",alt:"AV(有碼)/Blu-Ray Censored",color:"#19a7ec"},432:{src:W+"uenbd.png",alt:"AV(無碼)/Blu-Ray Uncensored",color:"#19a7ec"},433:{src:W+"ivpic.png",alt:"IV(寫真圖集)",color:"#bb1e9a"},436:{src:W+"adult0day.png",alt:"AV(網站)/0Day",color:"#bb1e9a"},437:{src:W+"cendvd.png",alt:"AV(有碼)/DVDiSo Censored",color:"#f77afa"},440:{src:W+"gayhd.gif",alt:"AV(Gay)/HD",color:"#f52bcb"}},TAG:{"4k":{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},"8k":{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},hdr:{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},hdr10:{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},"hdr10+":{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},hlg:{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},DoVi:{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},HDRVi:{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},中字:{color:"#ad2a2a",bgColor:"#d14a4a2e"},中配:{color:"#5b3991",bgColor:"#5b399129"}},INDEX:0,Iframe_Width:1260,get_bg_color:function(){const e=getComputedStyle(document.documentElement).getPropertyValue("--background-2"),t=getComputedStyle(document.documentElement).getPropertyValue("--bg-3");return e||t||"#000000"},special:function(){let e=To(),t=zo();return e&&t},pageLoaded:function(){}};function To(){const e=Array.from(document.querySelectorAll(".ant-table-row-level-0 .ant-col a[href]"));return e.forEach(function(t){t.addEventListener("click",function(r){r.preventDefault(),_iframe_switch.set(1),_iframe_url.set(t.href);});}),e.length}function zo(){document.querySelectorAll(".ant-image-mask").forEach(r=>{r.remove();});const t=Array.from(document.querySelectorAll(".torrent-list__thumbnail"));return t.forEach(r=>{r.classList+=" preview_Origin";}),t.length}const Li=".preview_Origin";document.body.addEventListener("mouseover",function(e){if(e.target.matches(Li)){const t=e,r=e.target;handleMouseOver(t,r);}});document.body.addEventListener("mouseout",function(e){e.target.matches(Li)&&handleMouseOut(e);});document.body.addEventListener("mousemove",function(e){if(e.target.matches(Li)){const t=e.target;handleMouseMove(e,t);}});var Io=Xt('<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="18" width="18" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle;"><path d="M7 7h10v2H7zm0 4h7v2H7z"></path><path d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"></path></svg>');function Yi(e){var t=Io();L(e,t);}const We=class We{static getInstance(){return We.instance||(We.instance=new We),We.instance}constructor(){if(We.instance)return We.instance;We.instance=this,this.container=null,this.imgElements=null,this.img_bg=null,this.img_main=null,this.unsubscribe=null,this.init(),this.unsubscribe=kr.subscribe(t=>{this.container&&(console.log(`[HoverView]<${Date.now()}> _state_hover_pic changed to ${t}, clearing preview`),this.img_main&&(this.img_main.style.objectFit=t?"contain":"scale-down"));});}init(){this.container=document.querySelector(".kp_container")||this.createPreview(),document.body.appendChild(this.container);}createPreview(){const t=Object.assign(document.createElement("div"),{className:"kp_container",style:`
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
      `}),t.appendChild(this.img_bg),t}handleMouseOver(t,r){if(this.container){if(!r){console.warn("[FALL]: imgEle is null");return}if(this.img_main&&(this.img_main.style.objectFit=Jn(kr)?"contain":"scale-down"),Jn(_o)){const n=r.getAttribute("src");n&&(document.querySelectorAll(".kp_img").forEach(s=>{s.setAttribute("src",n);}),this.imgElements=r,this.updatePosition(t),this.container.style.display="block");}}}handleMouseMove(t){this.container&&this.container.style.display==="block"&&this.updatePosition(t);}updatePosition(t){const r=this.previewPosition(t);this.container.style.left=r.left,this.container.style.top=r.top,this.container.style.width=r.width,this.container.style.height=r.height;}previewPosition(t){let r=0,n=0;try{r=this.imgElements.naturalWidth,n=this.imgElements.naturalHeight;}catch{}const i=t.clientX,s=t.clientY,l=window.innerWidth,u=window.innerHeight,d={bot:{width:l,height:window.innerHeight-s},top:{width:l,height:s},right:{width:window.innerWidth-i,height:u},left:{width:i,height:u}};let v=0,c="";const o={top:{left:0,top:0,width:l+"px",height:s+"px"},bot:{left:0,top:s+"px",width:l+"px",height:window.innerHeight-s+"px"},left:{left:0,top:0,width:i+"px",height:u+"px"},right:{left:i+"px",top:0,width:window.innerWidth-i+"px",height:u+"px"}};for(const f in d){const h=Math.min(d[f].width/r,d[f].height/n);h>v&&(v=h,c=f);}return o[c]||{left:0,top:0,width:0,height:0}}clearPreview(){document.querySelectorAll(".kp_img").forEach(t=>{t.setAttribute("src","");}),this.container&&(this.container.style.display="none");}changeState(){if(this.img_main){let t=this.img_main.style.objectFit;this.img_main.style.objectFit=t=="contain"?"scale-down":"contain";}}destroy(){this.container&&(this.container.style.display="none",this.clearPreview()),this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null);}};Wn(We,"instance",null);let jt=We;function Po(){document.querySelectorAll(".kp_img").forEach(t=>{t.setAttribute("src","");});const e=document.querySelector(".kp_container");e&&(e.style.display="none");}window.__clearPreview=Po;jt.getInstance();const Oo="data:image/svg+xml,%3csvg%20width='256px'%20height='256px'%20viewBox='0%200%2024.00%2024.00'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20transform='matrix(1,%200,%200,%201,%200,%200)'%20%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'%20transform='translate(0,0),%20scale(1)'%20/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%23CCCCCC'%20stroke-width='0.048'%20/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M13%203L13.7071%202.29289C13.5196%202.10536%2013.2652%202%2013%202V3ZM14%2022C14.5523%2022%2015%2021.5523%2015%2021C15%2020.4477%2014.5523%2020%2014%2020V22ZM19%209H20C20%208.73478%2019.8946%208.48043%2019.7071%208.29289L19%209ZM18%2010C18%2010.5523%2018.4477%2011%2019%2011C19.5523%2011%2020%2010.5523%2020%2010H18ZM5.21799%2019.908L4.32698%2020.362H4.32698L5.21799%2019.908ZM6.09202%2020.782L6.54601%2019.891L6.54601%2019.891L6.09202%2020.782ZM6.09202%203.21799L5.63803%202.32698L5.63803%202.32698L6.09202%203.21799ZM5.21799%204.09202L4.32698%203.63803L4.32698%203.63803L5.21799%204.09202ZM13.109%208.45399L14%208V8L13.109%208.45399ZM13.546%208.89101L14%208L13.546%208.89101ZM17.2299%2017.7929C16.8394%2018.1834%2016.8394%2018.8166%2017.2299%2019.2071C17.6204%2019.5976%2018.2536%2019.5976%2018.6441%2019.2071L17.2299%2017.7929ZM15.0316%2015.2507C14.8939%2015.7856%2015.2159%2016.3308%2015.7507%2016.4684C16.2856%2016.6061%2016.8308%2016.2841%2016.9684%2015.7493L15.0316%2015.2507ZM17.9375%2020C17.3852%2020%2016.9375%2020.4477%2016.9375%2021C16.9375%2021.5523%2017.3852%2022%2017.9375%2022V20ZM17.9475%2022C18.4998%2022%2018.9475%2021.5523%2018.9475%2021C18.9475%2020.4477%2018.4998%2020%2017.9475%2020V22ZM13%202H8.2V4H13V2ZM4%206.2V17.8H6V6.2H4ZM8.2%2022H14V20H8.2V22ZM19.7071%208.29289L13.7071%202.29289L12.2929%203.70711L18.2929%209.70711L19.7071%208.29289ZM20%2010V9H18V10H20ZM4%2017.8C4%2018.3436%203.99922%2018.8114%204.03057%2019.195C4.06287%2019.5904%204.13419%2019.9836%204.32698%2020.362L6.10899%2019.454C6.0838%2019.4045%206.04612%2019.3038%206.02393%2019.0322C6.00078%2018.7488%206%2018.3766%206%2017.8H4ZM8.2%2020C7.62345%2020%207.25117%2019.9992%206.96784%2019.9761C6.69617%2019.9539%206.59545%2019.9162%206.54601%2019.891L5.63803%2021.673C6.01641%2021.8658%206.40963%2021.9371%206.80497%2021.9694C7.18864%2022.0008%207.65645%2022%208.2%2022V20ZM4.32698%2020.362C4.6146%2020.9265%205.07354%2021.3854%205.63803%2021.673L6.54601%2019.891C6.35785%2019.7951%206.20487%2019.6422%206.10899%2019.454L4.32698%2020.362ZM8.2%202C7.65645%202%207.18864%201.99922%206.80497%202.03057C6.40963%202.06287%206.01641%202.13419%205.63803%202.32698L6.54601%204.10899C6.59545%204.0838%206.69617%204.04612%206.96784%204.02393C7.25117%204.00078%207.62345%204%208.2%204V2ZM6%206.2C6%205.62345%206.00078%205.25117%206.02393%204.96784C6.04612%204.69617%206.0838%204.59545%206.10899%204.54601L4.32698%203.63803C4.13419%204.01641%204.06287%204.40963%204.03057%204.80497C3.99922%205.18864%204%205.65645%204%206.2H6ZM5.63803%202.32698C5.07354%202.6146%204.6146%203.07354%204.32698%203.63803L6.10899%204.54601C6.20487%204.35785%206.35785%204.20487%206.54601%204.10899L5.63803%202.32698ZM12%203V7.4H14V3H12ZM14.6%2010H19V8H14.6V10ZM12%207.4C12%207.66353%2011.9992%207.92131%2012.0169%208.13823C12.0356%208.36682%2012.0797%208.63656%2012.218%208.90798L14%208C14.0293%208.05751%2014.0189%208.08028%2014.0103%207.97537C14.0008%207.85878%2014%207.69653%2014%207.4H12ZM14.6%208C14.3035%208%2014.1412%207.99922%2014.0246%207.9897C13.9197%207.98113%2013.9425%207.9707%2014%208L13.092%209.78201C13.3634%209.92031%2013.6332%209.96438%2013.8618%209.98305C14.0787%2010.0008%2014.3365%2010%2014.6%2010V8ZM12.218%208.90798C12.4097%209.2843%2012.7157%209.59027%2013.092%209.78201L14%208V8L12.218%208.90798ZM18.937%2016C18.937%2016.1732%2018.8915%2016.3053%2018.6175%2016.5697C18.4638%2016.718%2018.2828%2016.8653%2018.0319%2017.074C17.7936%2017.2723%2017.5141%2017.5087%2017.2299%2017.7929L18.6441%2019.2071C18.86%2018.9913%2019.0805%2018.8033%2019.3109%2018.6116C19.5287%2018.4305%2019.7852%2018.2223%2020.0065%2018.0087C20.4825%2017.5493%2020.937%2016.9314%2020.937%2016H18.937ZM17.937%2015C18.4893%2015%2018.937%2015.4477%2018.937%2016H20.937C20.937%2014.3431%2019.5938%2013%2017.937%2013V15ZM16.9684%2015.7493C17.0795%2015.3177%2017.4724%2015%2017.937%2015V13C16.5377%2013%2015.3645%2013.957%2015.0316%2015.2507L16.9684%2015.7493ZM17.9375%2022H17.9475V20H17.9375V22Z'%20fill='%23c00000'%20/%3e%3c/g%3e%3c/svg%3e",Ho="data:image/svg+xml,%3csvg%20viewBox='-2.4%20-2.4%2028.80%2028.80'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23000000'%20%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'%20/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M15.6%2015.6C15.6%2015.6%2014.25%2013.8%2012%2013.8C9.75%2013.8%208.4%2015.6%208.4%2015.6M14.7%209.3H14.709M9.3%209.3H9.309M21%2012C21%2016.9706%2016.9706%2021%2012%2021C7.02944%2021%203%2016.9706%203%2012C3%207.02944%207.02944%203%2012%203C16.9706%203%2021%207.02944%2021%2012ZM15.15%209.3C15.15%209.54853%2014.9485%209.75%2014.7%209.75C14.4515%209.75%2014.25%209.54853%2014.25%209.3C14.25%209.05147%2014.4515%208.85%2014.7%208.85C14.9485%208.85%2015.15%209.05147%2015.15%209.3ZM9.75%209.3C9.75%209.54853%209.54853%209.75%209.3%209.75C9.05147%209.75%208.85%209.54853%208.85%209.3C8.85%209.05147%209.05147%208.85%209.3%208.85C9.54853%208.85%209.75%209.05147%209.75%209.3Z'%20stroke='%23000000'%20stroke-width='1.8'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3c/g%3e%3c/svg%3e";var be=lo(()=>Ht),Ro=z('<div class="card-category svelte-1q2qbu1"><img class="card_category-img svelte-1q2qbu1"> </div>'),Fo=z('<a class="__main_title svelte-1q2qbu1" target="_blank" rel="noopener noreferrer"> </a>'),Do=z('<div class="pic_error svelte-1q2qbu1"><div><img style="height: 100%; width:60px; border-radius:20px;" alt="pic error" class="svelte-1q2qbu1"></div> <div class="ant-typography" style="color: white; font-size:16px;">GAY WARNING<br>同志警告</div></div>'),Bo=z('<img class="lazy-image svelte-1q2qbu1">'),Zo=z('<div class="pic_error svelte-1q2qbu1" style=""><div><img style="height: 100%;width: 100px;" alt="no pic" class="svelte-1q2qbu1"></div> <div>本种没有图片</div></div>'),jo=z('<div class="pic_error svelte-1q2qbu1" style=""><div><img style="height: 100%;width: 100px;" alt="pic error" class="svelte-1q2qbu1"></div> <div class="ant-typography">图片加载失败</div></div>'),Wo=z('<div class="hover-trigger svelte-1q2qbu1" role="button" aria-label="悬浮预览" tabindex="0"><img style="pointer-events: none;" alt="PREVIEW" class="svelte-1q2qbu1"></div>'),Go=z(`<img style="
                    background: url(/static/media/icons.8bb5446ebbbd07050285.gif) 0 -202px;
                    height: 14px;
                    width: 14px;" alt="PIN" class="svelte-1q2qbu1">`),Yo=z('<div class="card_info__topping svelte-1q2qbu1"></div> &nbsp;',1),Uo=z('<div class="_tag svelte-1q2qbu1"> </div>'),Xo=z('<div class="_tag _tag_diy svelte-1q2qbu1">DIY</div>'),Qo=z('<div class="_tag _tag_dub svelte-1q2qbu1">国配</div>'),Jo=z('<div class="_tag _tag_sub svelte-1q2qbu1">中字</div>'),Ko=z('<div class="_tag svelte-1q2qbu1"> </div>'),el=z('<div class="cl-tags svelte-1q2qbu1"><!> <!> <!> <!></div>'),tl=z(`<img style="
                  background: url(/static/media/icons.8bb5446ebbbd07050285.gif) 0 -202px;
                  height: 14px;
                  width: 14px;" alt="PIN" class="svelte-1q2qbu1">`),rl=z('<div class="card_info__topping svelte-1q2qbu1"></div> &nbsp;',1),nl=z('<div class="_tag svelte-1q2qbu1"> </div>'),il=z('<div class="card-index svelte-1q2qbu1"><!> <!></div>'),al=z('<div class="card-index card-index-right svelte-1q2qbu1"> </div>'),sl=z('<div class="card_info-item card_info__sub_title svelte-1q2qbu1" style="padding-top: 4px;"><div> </div></div>'),ol=z('<div class="_tag _tag_diy svelte-1q2qbu1">DIY</div>'),ll=z('<div class="_tag _tag_dub svelte-1q2qbu1">国配</div>'),cl=z('<div class="_tag _tag_sub svelte-1q2qbu1">中字</div>'),ul=z('<div class="_tag svelte-1q2qbu1"> </div>'),vl=z('<div class="cl-tags svelte-1q2qbu1"><!> <!> <!> <!></div>'),dl=z('<div class="card_info-item card_info__dl_and_cl svelte-1q2qbu1"><button title="(原列表的这俩按钮会消失)">下载 & 收藏</button></div>'),fl=z('<div class="card_info-item card_info__upload_time svelte-1q2qbu1"><div> </div></div>'),_l=z('<div class="card_info-item card_info__statistics svelte-1q2qbu1"><!> &nbsp; <b> </b> &nbsp;&nbsp; <img alt="SVG_Seeders"> &nbsp; <b> </b> &nbsp;&nbsp; <img alt="SVG_Leechers"> &nbsp; <b> </b></div>'),hl=z('<div class="card_info svelte-1q2qbu1"><!>  <!> <!> <!> <!></div>'),gl=z(`<div class="card_holder svelte-1q2qbu1"><!> <div class="card_title"><!></div> <div class="card_pic svelte-1q2qbu1"><!> <!>  <div class="hover-overlay svelte-1q2qbu1"><div class="overlay-content svelte-1q2qbu1"><div class="__inner_index_and_size svelte-1q2qbu1"><div class="card-index __inner_index svelte-1q2qbu1" style="background-color:black; color:white"><!> <!></div> <button class="__iframe_button svelte-1q2qbu1">内窗预览</button> <div class="card-index card-index-right __inner_index __inner_size svelte-1q2qbu1"> </div></div> <div class="card-category card_info-item svelte-1q2qbu1"><img class="card_category-img card_category_square svelte-1q2qbu1" style="width: 36px;height: 36px;"> </div> <div style="width: 100%;" class="card_info-item card_info__sub_title svelte-1q2qbu1"><a class="__main_title __straight svelte-1q2qbu1" target="_blank" rel="noopener noreferrer"> </a></div> <div style="width: 100%;" class="card_info-item card_info__sub_title svelte-1q2qbu1"><div class="__sub_title svelte-1q2qbu1"> </div></div>  <!> <div class="card_info-item card_info__upload_time svelte-1q2qbu1"><div> </div></div> <div class="card_info-item card_info__statistics svelte-1q2qbu1"><div class="__center svelte-1q2qbu1"><!> <b> </b></div> <div class="__center svelte-1q2qbu1"><img style="width: 14px; height: 14px;" alt="SVG_Seeders" class="svelte-1q2qbu1"> <b> </b></div> <div class="__center svelte-1q2qbu1"><img style="width: 14px; height: 14px;" alt="SVG_Leechers" class="svelte-1q2qbu1"> <b> </b></div> <div><button title="(原列表的这俩按钮会消失)" style="
                background-color: inherit; border-color:transparent">下载&收藏</button></div></div></div></div> <!> <!></div> <!></div>`);function pl(e,t){dt(t,false);const r=Qt(),n=()=>oe($a,"$_mt_categories",r),i=()=>oe(qa,"$_mt_label",r),s=()=>oe(di,"$_block_gay",r),l=()=>oe(Ie,"$_card_detail",r),u=()=>oe(ln,"$_card_radius",r),d=()=>oe(vi,"$_pic_failed_showInfo",r),v=()=>oe(ui,"$_show_hover_pic",r);let c=_e(t,"_torrentInfo",8),o=Z(),f=Z(false),h=Z([]),m=Z("NORMAL"),p=Z(null);const M={FREE:"免费",PERCENT_50:"50%"},q=()=>{const b=new Date,$=new Date(a(p));return Math.floor(($.getTime()-b.getTime())/(1e3*3600))};let w=Z();const N="rgba(255, 255, 255, 0.5)";let k=Z(N),E=Z("未知分类"),x=Z(""),P=Z(""),C=Z("black"),y=Z([]);function O(b){if(b===0)return "0 B";const $=["B","KB","MB","GB","TB"];let R=0,ee=b;for(;ee>=1024&&R<$.length-1;)ee/=1024,R++;return `${ee.toFixed(2).replace(/\.?0+$/,"")} ${$[R]}`}let Y=Z(),j=Z();function J(b,$){const R=document.querySelectorAll(`a[href^="/detail/${b}"]`),ee=[];R.forEach(ce=>{if(!/\/detail\/\d+/.test(ce.href))return;const le=ce.closest("tr");le&&le.querySelectorAll("button").forEach(de=>{de.querySelector("span.ant-btn-icon")&&ee.push(de);});}),ee.length?(ee[0].style.margin=0,[...new Set(ee)].forEach(le=>{$.appendChild(le);})):Ot.error("没找到捏, 建议在种子详情里下载收藏~");}let U=Z(false),K=Z(false),ue=jt.getInstance(),T=Z(),A=Z(),te=Z(0);function ye(){a(A)&&S(te,a(A).offsetHeight);}let et=Z(false),X=Z(false);const he="/static/cate/gayhd.gif";let $e=Z(false);const Ze="https://static.m-team.cc/static/media/logo.80b63235eaf702e44a8d.png";let Xe=Z(Ze),Q=Z(),_t,tt=Z(false);const Or=()=>{a(Xe)&&!a(tt)&&(Ae(Q,a(Q).style.width="100%"),Ae(Q,a(Q).src=a(Xe)),a(Q).classList.add("loaded"),Ae(Q,a(Q).style.opacity=1),S(tt,true),a(A)&&ye());};function Jt(){pe(Sa,"https://"+location.host+"/detail/"+a(o).id),pe(on,1);}Nn(()=>{a(tt)||(_t=new IntersectionObserver(b=>{b.forEach($=>{$.isIntersecting&&(Or(),_t.unobserve(a(Q)));});},{rootMargin:"100px"}),a(Q)&&!a(tt)&&_t.observe(a(Q)),a(o).pt_fall_highlight&&a(w).scrollIntoView({behavior:"smooth"})),ye(),a(Q)&&Ae(Q,a(Q).style.width="auto");}),Ma(()=>{_t&&_t.disconnect();}),Ne(()=>mt(c()),()=>{var b,$,R,ee,ce,le,de;!c()||typeof c()!="object"?(console.warn("Mteam_Card: _torrentInfo 数据格式错误",c()),S(o,{id:"error",name:"数据错误",category:"0",imageList:[],labelsNew:[],size:0,status:{toppingLevel:"0",discount:"NORMAL",discountEndTime:null,comments:"0",seeders:"0",leechers:"0",timesCompleted:"0"},smallDescr:"",labels:"0",createdDate:"",index:0})):S(o,{...c(),id:c().id||"unknown",name:c().name||"未知种子",category:c().category||"0",imageList:Array.isArray(c().imageList)?c().imageList:[],labelsNew:Array.isArray(c().labelsNew)?c().labelsNew:[],size:typeof c().size=="number"?c().size:typeof c().size=="string"&&Number(c().size)||0,status:{toppingLevel:((b=c().status)==null?void 0:b.toppingLevel)||"0",discount:(($=c().status)==null?void 0:$.discount)||"NORMAL",discountEndTime:((R=c().status)==null?void 0:R.discountEndTime)||null,comments:((ee=c().status)==null?void 0:ee.comments)||"0",seeders:((ce=c().status)==null?void 0:ce.seeders)||"0",leechers:((le=c().status)==null?void 0:le.leechers)||"0",timesCompleted:((de=c().status)==null?void 0:de.timesCompleted)||"0",...c().status},smallDescr:c().smallDescr||"",labels:c().labels||"0",createdDate:c().createdDate||"",index:typeof c().index=="number"?c().index:0});}),Ne(()=>a(o),()=>{a(o).status.toppingLevel&&a(o).status.toppingLevel!=="0"?S(h,Array(Number(a(o).status.toppingLevel)).fill()):S(h,[]);}),Ne(()=>a(o),()=>{S(m,a(o).status.discount),S(p,a(o).status.discountEndTime);}),Ne(()=>(a(o),be(),n(),a(k),kt),()=>{var b,$,R,ee,ce;S(P,`https://${location.host}/browse?cat=`+a(o).category),be().CATEGORY[a(o).category]||(Ot.open({type:"warning",message:`存在未知分类: ${a(o).category}`}),be(be().CATEGORY[a(o).category]={src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZmMDAwMCIvPjwvc3ZnPg==",alt:"未知分类(TG或论坛联系我)",color:N})),S(E,((b=n()[a(o).category])==null?void 0:b.nameChs)??(($=be().CATEGORY[a(o).category])==null?void 0:$.alt)??"未知分类"),S(x,(R=n()[a(o).category])!=null&&R.image?W+n()[a(o).category].image:((ee=be().CATEGORY[a(o).category])==null?void 0:ee.src)??""),S(k,((ce=be().CATEGORY[a(o).category])==null?void 0:ce.color)??N),S(C,a(k)?kt(a(k)):"black");}),Ne(()=>(a(o),be(),i()),()=>{S(y,[]),a(o).labelsNew.length&&S(y,a(o).labelsNew.map(b=>{if(be().TAG[b])return {key:b,config:be().TAG[b]};if(i()){console.warn("[FALL]: 存在本地没有的 tag: ",b);let $;for(const R in i())if(b==i()[R].tag){$=i()[R];break}if($)return {key:b,config:$}}return null}).filter(Boolean));}),Ne(()=>a(A),()=>{a(A)&&ye();}),Ne(()=>a(o),()=>{S(Xe,a(o).imageList[0]||Ze);}),Ne(()=>(a(o),s(),a(Q),a(Xe),a(A)),()=>{a(o).category==440&&s()==0&&a(Q)&&(Ae(Q,a(Q).style.width="100%"),Ae(Q,a(Q).src=a(Xe)),a(Q).classList.add("loaded"),Ae(Q,a(Q).style.opacity=1),S(tt,true),a(A)&&ye());}),Ne(()=>l(),()=>{S($e,l().sub_title||l().tags||l().download_collect||l().upload_time||l().statistics);}),zr(),Mt();var Nt=gl(),Kt=_(Nt);{var Hr=b=>{var $=Ro(),R=_($),ee=g(R);F(()=>{V($,"data-href",a(P)),V($,"style",`
      background-color: ${a(k)??"transparent"??""};
      color: ${a(C)??""}`),V(R,"src",a(x)),V(R,"alt",a(E)),re(ee,`    ${a(E)??""}`);}),L(b,$);};B(Kt,b=>{l().category&&b(Hr);});}var St=g(Kt,2),qn=_(St);{var er=b=>{var $=Fo(),R=_($);F(()=>{V($,"href","/detail/"+a(o).id),re(R,a(o).name);}),L(b,$);};B(qn,b=>{(l().title||d()&&(a(et)||a(X)))&&b(er);});}var ht=g(St,2),tr=_(ht);{var $n=b=>{var $=lt(),R=Se($);{var ee=le=>{var de=Do(),Ee=_(de),we=_(Ee);V(we,"src",he),F(()=>V(de,"style",`  background-color: ${a(k)??""}`)),L(le,de);},ce=le=>{var de=lt(),Ee=Se(de);{var we=se=>{var ve=Bo();st(ve,ie=>S(Q,ie),()=>a(Q)),F(()=>{V(ve,"src",a(tt)?a(Xe):Ze),V(ve,"data-src",a(Xe)),V(ve,"alt",a(o).id);}),D("error",ve,()=>{S(et,true),a(Q)||console.log(`<${a(o).index}>[${a(o).id}] imgElement 丢失.`);}),L(se,ve);},Qe=se=>{var ve=Zo(),ie=_(ve),fe=_(ie);V(fe,"src",Ho),D("load",fe,()=>{S(X,true);}),L(se,ve);};B(Ee,se=>{a(o).imageList[0]?se(we):se(Qe,false);},true);}L(le,de);};B(R,le=>{s()&&a(o).category==440?le(ee):le(ce,false);});}L(b,$);},An=b=>{var $=jo(),R=_($),ee=_(R);V(ee,"src",Oo);var ce=g(R,2);const le=Lr(()=>`color: ${kt(a(k))??""}; font-size:16px;`);F(()=>V(ce,"style",a(le))),L(b,$);};B(tr,b=>{a(et)?b(An,false):b($n);});}var rr=g(tr,2);{var Vn=b=>{var $=Wo(),R=_($);F(()=>V(R,"src",be().ICON.PREVIEW)),D("click",$,()=>{ue.changeState();}),D("mouseover",$,ee=>{S(U,true),ue.handleMouseOver(ee,a(Q));}),D("keydown",$,ee=>{ee.key==="Escape"&&ue.clearPreview();}),L(b,$);};B(rr,b=>{v()&&!(a(et)||a(X))&&b(Vn);});}var je=g(rr,2),Rr=_(je),nr=_(Rr),Fr=_(nr),ir=_(Fr);{var Tn=b=>{var $=Yo(),R=Se($);yt(R,5,()=>a(h),gr,(ee,ce)=>{var le=Go();F(()=>V(le,"src",be().ICON.PIN)),L(ee,le);}),L(b,$);};B(ir,b=>{a(o).status.toppingLevel!="0"&&b(Tn);});}var ar=g(ir),zn=g(ar);{var Dr=b=>{var $=Uo(),R=_($);F(()=>re(R,`${M[a(m)]??""}${(a(p)?":"+q()+"小时":"")??""}`)),F(()=>{pr($,"_tag_discount_free",a(m)=="FREE"),pr($,"_tag_discount_50",a(m)=="PERCENT_50");}),L(b,$);};B(zn,b=>{a(m)!="NORMAL"&&b(Dr);});}var sr=g(Fr,2),or=g(sr,2),In=_(or);F(()=>re(In,O(a(o).size)));var gt=g(nr,2),lr=_(gt),Br=g(lr),cr=g(gt,2),qt=_(cr),Pn=_(qt),ur=g(cr,2),On=_(ur),Zr=_(On),jr=g(ur,2);{var Wr=b=>{var $=el(),R=_($);{var ee=se=>{var ve=Xo();L(se,ve);};B(R,se=>{(Number(a(o).labels)&1)===1&&se(ee);});}var ce=g(R,2);{var le=se=>{var ve=Qo();L(se,ve);};B(ce,se=>{(Number(a(o).labels)&2)===2&&se(le);});}var de=g(ce,2);{var Ee=se=>{var ve=Jo();L(se,ve);};B(de,se=>{(Number(a(o).labels)&4)===4&&se(Ee);});}var we=g(de,2);{var Qe=se=>{var ve=lt(),ie=Se(ve);yt(ie,1,()=>a(y),gr,(fe,xe)=>{var Ce=Ko(),At=_(Ce);F(()=>{V(Ce,"style",`background-color: ${a(xe).config.bgColor??""}; color: ${a(xe).config.color??""}`),re(At,a(xe).key);}),L(fe,Ce);}),L(se,ve);};B(we,se=>{a(y).length!=0&&se(Qe);});}L(b,$);};B(jr,b=>{(Number(a(o).labels)||a(y).length)&&b(Wr);});}var Gr=g(jr,2),Yr=_(Gr),Hn=_(Yr),Ur=g(Gr,2),Xr=_(Ur),Qr=_(Xr);Yi(Qr);var Rn=g(Qr,2),H=_(Rn),rt=g(Xr,2),nt=_(rt),vr=g(nt,2),dr=_(vr),$t=g(rt,2),Jr=_($t),Va=g(Jr,2),Ta=_(Va),Fn=g($t,2),Mi=_(Fn);st(Fn,b=>S(Y,b),()=>a(Y)),st(Rr,b=>S(A,b),()=>a(A)),st(je,b=>S(T,b),()=>a(T));var Ni=g(je,2);{var za=b=>{var $=il(),R=_($);{var ee=Ee=>{var we=rl(),Qe=Se(we);yt(Qe,5,()=>a(h),gr,(se,ve)=>{var ie=tl();F(()=>V(ie,"src",be().ICON.PIN)),L(se,ie);}),L(Ee,we);};B(R,Ee=>{l().topping&&a(o).status.toppingLevel!="0"&&Ee(ee);});}var ce=g(R),le=g(ce);{var de=Ee=>{var we=nl(),Qe=_(we);F(()=>re(Qe,`${M[a(m)]??""}${(a(p)?":"+q()+"小时":"")??""}`)),F(()=>{pr(we,"_tag_discount_free",a(m)=="FREE"),pr(we,"_tag_discount_50",a(m)=="PERCENT_50");}),L(Ee,we);};B(le,Ee=>{l().free&&a(m)!="NORMAL"&&Ee(de);});}F(()=>re(ce,` ${a(o).index??""}

          `)),L(b,$);};B(Ni,b=>{a(f)||b(za);});}var Ia=g(Ni,2);{var Pa=b=>{var $=al(),R=_($);F(()=>re(R,O(a(o).size))),F(()=>V($,"style",`background-color: ${a(k)??"transparent"??""}; color:${a(C)??""}`)),L(b,$);};B(Ia,b=>{l().size&&!a(f)&&b(Pa);});}var Oa=g(ht,2);{var Ha=b=>{var $=hl(),R=_($);{var ee=ie=>{var fe=sl(),xe=_(fe),Ce=_(xe);F(()=>re(Ce,a(o).smallDescr)),L(ie,fe);};B(R,ie=>{(l().sub_title||d()&&(a(et)||a(X)))&&ie(ee);});}var ce=g(R,2);{var le=ie=>{var fe=vl(),xe=_(fe);{var Ce=me=>{var it=ol();L(me,it);};B(xe,me=>{(a(o).labels&1)===1&&me(Ce);});}var At=g(xe,2);{var Kr=me=>{var it=ll();L(me,it);};B(At,me=>{(a(o).labels&2)===2&&me(Kr);});}var fr=g(At,2);{var Dn=me=>{var it=cl();L(me,it);};B(fr,me=>{(a(o).labels&4)===4&&me(Dn);});}var en=g(fr,2);{var Bn=me=>{var it=lt(),Ra=Se(it);yt(Ra,1,()=>a(y),gr,(Fa,Zn)=>{var jn=ul(),Da=_(jn);F(()=>{V(jn,"style",`background-color: ${a(Zn).config.bgColor??""}; color: ${a(Zn).config.color??""}`),re(Da,a(Zn).key);}),L(Fa,jn);}),L(me,it);};B(en,me=>{a(y).length!=0&&me(Bn);});}L(ie,fe);};B(ce,ie=>{l().tags&&(Number(a(o).labels)||a(y).length)&&ie(le);});}var de=g(ce,2);{var Ee=ie=>{var fe=dl(),xe=_(fe);st(fe,Ce=>S(j,Ce),()=>a(j)),F(()=>V(xe,"style",`
              background-color: ${(a(k)?a(k):"transparent")??""};
              color: ${a(C)??""} ;
              border: 3px solid transparent;
              border-radius: 14px;
              overflow: hidden;
            `)),D("click",xe,Ce=>{J(a(o).id,a(j)),Ce.target.style.display="none";}),L(ie,fe);};B(de,ie=>{l().download_collect&&ie(Ee);});}var we=g(de,2);{var Qe=ie=>{var fe=fl(),xe=_(fe),Ce=_(xe);F(()=>re(Ce,`上传时间:${a(o).createdDate??""}`)),L(ie,fe);};B(we,ie=>{l().upload_time&&ie(Qe);});}var se=g(we,2);{var ve=ie=>{var fe=_l(),xe=_(fe);Yi(xe);var Ce=g(xe,2),At=_(Ce),Kr=g(Ce,2),fr=g(Kr,2),Dn=_(fr),en=g(fr,2),Bn=g(en,2),me=_(Bn);F(()=>{re(At,a(o).status.comments),V(Kr,"src",be().ICON.SEEDERS),re(Dn,a(o).status.seeders),V(en,"src",be().ICON.LEECHERS),re(me,a(o).status.leechers);}),L(ie,fe);};B(se,ie=>{l().statistics&&ie(ve);});}F(()=>V($,"style",`
        background-color: ${(a(k)?a(k)+"b0":"transparent")??""};
        color: ${a(C)??""}`)),L(b,$);};B(Oa,b=>{(a($e)||d()&&(a(et)||a(X)))&&b(Ha);});}st(Nt,b=>S(w,b),()=>a(w)),F(()=>{Oe(Nt,"--borderRadius",u().enabled?u().value+"px":"0"),V(St,"style",`background-color: ${a(k)+"10"}`),V(ht,"style",`min-height: ${a(te)+24}px;`),Oe(ht,"--cateColor",a(k)+"b0"),re(ar,` ${a(o).index??""}

              `),V(sr,"style",`background-color: ${a(k)??"transparent"??""}; color:${a(C)??""}`),V(or,"style",`background-color: ${a(k)??"transparent"??""}; color:${a(C)??""}`),V(gt,"data-href",a(P)),V(gt,"style",`
            height: 40px;
            background-color: ${a(k)??"transparent"??""};
            color: ${a(C)??""}`),V(lr,"src",a(x)),V(lr,"alt",a(E)),re(Br,`    ${a(E)??""}`),V(qt,"href","/detail/"+a(o).id),V(qt,"title",a(o).name),re(Pn,a(o).name),re(Zr,a(o).smallDescr),re(Hn,`上传时间:${a(o).createdDate??""}`),re(H,a(o).status.comments),V(nt,"src",be().ICON.SEEDERS),re(dr,a(o).status.seeders),V(Jr,"src",be().ICON.LEECHERS),re(Ta,a(o).status.leechers),V(Fn,"style",`
              background-color: ${(a(k)?a(k):"transparent")??""};
              color: ${a(C)??""} ;
              border-radius: 14px;
              overflow: hidden;
            `);}),D("click",sr,Jt),D("mousedown",cr,xr(b=>{b.stopPropagation();})),D("mousedown",Mi,xr(b=>{b.stopPropagation();})),D("click",Mi,xr(b=>{J(a(o).id,a(Y)),b.target.style.display="none";})),D("mouseenter",je,()=>{a(Q)&&Ae(Q,a(Q).style.filter="blur(2px)"),Ae(T,a(T).style.opacity="1"),S(f,true);}),D("mousemove",je,b=>{S(K,true),a(U)&&a(K)&&ue.handleMouseMove(b);}),D("mouseleave",je,()=>{a(Q)&&Ae(Q,a(Q).style.filter="none"),Ae(T,a(T).style.opacity="0"),S(f,false),S(K,false),a(U)&&(S(U,false),ue.clearPreview());}),D("mousedown",je,Ei(Jt)),L(e,Nt),ft();}var ml=z('<p class="text_center svelte-1vmncc1">没有结果捏</p>'),bl=z('<main><div class="fall_holder svelte-1vmncc1" style=""><!></div></main>');function yl(e,t){var k,E,x,P,C;dt(t,false);const r=Qt(),n=()=>oe(yr,"$_card_layout",r),i=Z();let s=_e(t,"infoList",8),l=Z(Array.isArray((k=s())==null?void 0:k.data)?s().data.filter(y=>y&&typeof y=="object"):[]);a(l).length;let u=Z();Ht.get_bg_color(),Object.keys(a(l)).forEach((y,O)=>{a(l)[y]&&Ae(l,a(l)[y].index=O+1);}),console.log("Mteam_Fall:First	"+a(l).length);function d(y,O=true){let Y=Array.isArray(y==null?void 0:y.data)?y.data:[];const j=Y.filter(J=>J&&typeof J=="object");if(console.log("Mteam_Fall:New:	"+Y.length+" (有效数据: "+j.length+")"),j.length===0){console.warn("Mteam_Fall: 没有有效数据，跳过更新");return}O?(v(),j.forEach((J,U)=>{J.index=U+1,U==0&&(J.pt_fall_highlight=true);}),S(l,[...j])):(j.forEach((J,U)=>{J.index=U+1+a(l).length,U==0&&(J.pt_fall_highlight=true);}),S(l,[...a(l),...j]));}function v(){S(l,[]);}function c(y,O){O=="top"&&y.scrollIntoView({behavior:"smooth"}),O=="bottom"&&(y.scrollIntoView({behavior:"auto",block:"end",inline:"nearest"}),y.scrollIntoView({behavior:"auto",block:"end",inline:"nearest"}),y.scrollIntoView({behavior:"auto",block:"end",inline:"nearest"}));}function o(y="top"){c(a(u),y);}let f,h,m;try{f=Pt(localStorage.getItem("persist:persist")),h=(x=(E=f.sysinfo)==null?void 0:E.sysConf)==null?void 0:x.TORRENT_LABEL_CONFIG,m=(C=(P=f.sysinfo)==null?void 0:P.categoryList)==null?void 0:C.categorys,h&&pe(qa,h),m&&pe($a,m);}catch(y){console.error(y),console.log(f);}Ne(()=>a(l),()=>{S(i,[...a(l)]);}),zr(),Mt();var p=bl(),M=_(p),q=_(M);{var w=y=>{ko(y,{animate:true,get items(){return a(i)},get minColWidth(){return n().min},get maxColWidth(){return n().max},get gap(){return n().gap},children:$s,$$slots:{default:(O,Y)=>{const j=Lr(()=>Y.item);pl(O,{get _torrentInfo(){return a(j)}});}}});},N=y=>{var O=ml();L(y,O);};B(q,y=>{a(i).length?y(w):y(N,false);});}return st(p,y=>S(u,y),()=>a(u)),L(e,p),Qn(t,"updateList",d),Qn(t,"clearList",v),Qn(t,"focusFall",o),ft({updateList:d,clearList:v,focusFall:o})}let wl="0.3.12";var xl=Xt('<svg class="tgme_logo" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle cx="17" cy="17" fill="#40a9ff" r="17"></circle><path d="m7.06510669 16.9258959c5.22739451-2.1065178 8.71314291-3.4952633 10.45724521-4.1662364 4.9797665-1.9157646 6.0145193-2.2485535 6.6889567-2.2595423.1483363-.0024169.480005.0315855.6948461.192827.1814076.1361492.23132.3200675.2552048.4491519.0238847.1290844.0536269.4231419.0299841.65291-.2698553 2.6225356-1.4375148 8.986738-2.0315537 11.9240228-.2513602 1.2428753-.7499132 1.5088847-1.2290685 1.5496672-1.0413153.0886298-1.8284257-.4857912-2.8369905-1.0972863-1.5782048-.9568691-2.5327083-1.3984317-4.0646293-2.3321592-1.7703998-1.0790837-.212559-1.583655.7963867-2.5529189.2640459-.2536609 4.7753906-4.3097041 4.755976-4.431706-.0070494-.0442984-.1409018-.481649-.2457499-.5678447-.104848-.0861957-.2595946-.0567202-.3712641-.033278-.1582881.0332286-2.6794907 1.5745492-7.5636077 4.6239616-.715635.4545193-1.3638349.6759763-1.9445998.6643712-.64024672-.0127938-1.87182452-.334829-2.78737602-.6100966-1.12296117-.3376271-1.53748501-.4966332-1.45976769-1.0700283.04048-.2986597.32581586-.610598.8560076-.935815z" fill="#fff"></path></g></svg>');function Cl(e,t){let r=_e(t,"height",8,34),n=_e(t,"width",8,34);var i=xl();F(()=>{V(i,"height",r()),V(i,"width",n());}),L(e,i);}var kl=z('<div class="modal-overlay svelte-1a87xm5" role="button" aria-hidden="true"><div class="modal-content svelte-1a87xm5" role="button" aria-hidden="true"><div class="modal-header svelte-1a87xm5"><h3 class="svelte-1a87xm5">关于 PT-Fall</h3> <button class="close-btn svelte-1a87xm5">&times;</button></div> <div class="modal-body svelte-1a87xm5"><h4 class="svelte-1a87xm5">PT-Fall 是一个专为 M-team 站点量身定制的瀑布流视图插件</h4> <p class="svelte-1a87xm5">Github: <a href="https://github.com/KesaubeEire/PT_Fall-View" target="_blank">https://github.com/KesaubeEire/PT_Fall-View</a></p> <p class="svelte-1a87xm5">GreaseFork: <a href="https://greasyfork.org/zh-CN/scripts/543925" target="_blank">https://greasyfork.org/zh-CN/scripts/543925</a></p></div></div></div>'),El=z('<div class="modal-overlay svelte-1a87xm5" role="button" aria-hidden="true"><div class="modal-content svelte-1a87xm5" role="button" aria-hidden="true"><div class="modal-header svelte-1a87xm5"><h3 class="svelte-1a87xm5">FAQ - 常见问题</h3> <button class="close-btn svelte-1a87xm5">&times;</button></div> <div class="modal-body svelte-1a87xm5"><h4 class="svelte-1a87xm5">Q: 如何联系反馈问题</h4> <p class="svelte-1a87xm5"><a class="__btn __btnWide svelte-1a87xm5" href="https://t.me/+Nd_qIisDjQ80ZTc9" target="_blank"><!> &nbsp;Telegram</a></p> <h4 class="svelte-1a87xm5">Q: 找不到悬浮框</h4> <button class="__btn svelte-1a87xm5">重置悬浮框位置</button> <p class="svelte-1a87xm5"><br>可以通过拖拽悬浮框顶部的颜色条来移动悬浮框的位置 <br>从 PTPP 那里来的灵感 ( 感恩 ||T|| 佬 )</p> <h4 class="svelte-1a87xm5">Q: 插件没有生效怎么办</h4> <p class="svelte-1a87xm5">可能是浏览器缓存了请求<br>尝试使用 Ctrl+Shift+R / Ctrl+F5 强制刷新页面</p> <h4 class="svelte-1a87xm5">Q: 如何切换瀑布流视图</h4> <p class="svelte-1a87xm5">点击悬浮面板中的第一个图标(瀑布/列表)按钮<br>即可在瀑布流和原列表视图间切换</p> <h4 class="svelte-1a87xm5">Q: 如何调整卡片布局</h4> <p class="svelte-1a87xm5">点击悬浮面板中的"配置"按钮<br>可以调整卡片的最小 / 最大宽度、间隔等参数</p> <h4 class="svelte-1a87xm5">Q: 快捷键</h4> <p class="svelte-1a87xm5"><span class="modal-code svelte-1a87xm5">x</span> 可以切换瀑布流视图</p> <p class="svelte-1a87xm5"><span class="modal-code svelte-1a87xm5">ESC</span> 可以从 次级菜单 / 配置菜单 / iframe 中退出</p> <h4 class="svelte-1a87xm5">Q: 深色模式颜色有些不对劲怎么办?</h4> <p class="svelte-1a87xm5">先刷新一下试试, 有些字体颜色不能即时更改<br>刷新后就可以了<br>还有颜色不对劲的 telegram 上截图告诉我</p></div></div></div>'),Ll=z('<div class="entry_mteam"><div class="ant-typography" style="line-height: 1.5; text-align: center;"><button class="__btn svelte-1a87xm5" id="_ptFall_about">PT-Fall<br><span style="font-weight: 600;"></span></button> <button class="__btn svelte-1a87xm5" id="_ptFall_faq">常见问题<br>FAQ</button></div></div> <!> <!>',1);function Ml(e,t){dt(t,false);const r=Qt(),n=()=>oe(Cr,"$_isFallView",r),i=()=>oe(wt,"$_textColor",r);let s=Z(false),l=Z(false);function u(){S(s,true);}function d(){S(s,false);}function v(){S(l,true);}function c(){S(l,false);}let o=Z();Ne(()=>n(),()=>{S(o,n()?"#4ff74f":"yellow");}),zr(),Mt();var f=Ll();D("keydown",Er,x=>{x.key==="Escape"&&(d(),c());},true);var h=Se(f),m=_(h),p=_(m),M=g(_(p),2);M.textContent=`[v${wl}]`;var q=g(p,2),w=g(h,2);{var N=x=>{var P=kl(),C=_(P),y=_(C),O=g(_(y),2);F(()=>V(C,"style",`color: ${i().t3}`)),D("click",O,c),D("click",C,xr(function(Y){Zi.call(this,t,Y);})),Dt(3,P,()=>Bt,()=>({duration:200})),D("click",P,c),L(x,P);};B(w,x=>{a(l)&&x(N);});}var k=g(w,2);{var E=x=>{var P=El(),C=_(P),y=_(C),O=g(_(y),2),Y=g(y,2),j=g(_(Y),2),J=_(j),U=_(J);Cl(U,{height:24,width:24});var K=g(j,4),ue=g(K,18),T=_(ue),A=g(ue,2),te=_(A);F(()=>{V(C,"style",`color: ${i().t3}`),V(J,"style",`color: ${i().t2}`),Oe(J,"--hover","#40a9ff"),V(K,"style",`color: ${i().t2}`),Oe(K,"--hover","#40a9ff"),V(T,"style",`color: ${i().t1}`),V(te,"style",`color: ${i().t1}`);}),D("click",O,d),D("click",K,()=>{pe(ci,{x:0,y:0});}),D("click",C,xr(function(ye){Zi.call(this,t,ye);})),Dt(3,P,()=>Bt,()=>({duration:200})),D("click",P,d),L(x,P);};B(k,x=>{a(s)&&x(E);});}F(()=>{V(p,"style",`color: ${i().t2}`),Oe(p,"--hover","green"),Oe(M,"color",a(o)),V(q,"style",`color: ${i().t2}`),Oe(q,"--hover","#40a9ff");}),D("click",p,v),D("click",q,u),L(e,f),ft();}function Nl(e,t){dt(t,false);const r=Qt(),n=()=>oe(Cr,"$_isFallView",r),i=()=>oe(wt,"$_textColor",r);let s,l,u,d=true,v=false,c=getComputedStyle(document.documentElement).getPropertyValue("--bg-2").trim(),o,f=null,h=null,m=null,p=[];const M=Z(document.createElement("div"));a(M).classList.add("Fall_DOM"),console.log("=====> 启动劫持 XHR 和 Fetch 请求 <====="),ho();const q=pt(Ht.TL_Selector,P);q&&p.push(q);const w=pt('a[href="/index"][target="_self"]',T=>{if(s)Ot.error("未找到目标链接元素"),console.warn("[FALL]: 未找到目标链接元素");else {const A=document.createElement("div");A.className="ptFallReadme",T.parentNode.insertBefore(A,T.nextSibling),s=Sr(Ml,{target:A});}});w&&p.push(w),Nn(()=>{ue(),console.log("=====> 启动劫持 pushState 方法 <====="),U(),o=new MutationObserver(()=>{const T=getComputedStyle(document.documentElement).getPropertyValue("--bg-2").trim();T!==c&&(c=T,console.log("--bg-2 变化:",c),ue());}),o.observe(document.documentElement,{attributes:true,attributeFilter:["style","class","data-theme"]});}),Ma(()=>{if(o&&o.disconnect(),f&&(window.removeEventListener("req>POST->/search",f),f=null),h&&(window.removeEventListener("res>POST->/search",h),h=null),J&&(history.pushState=J),m){const T=document.querySelector("#_shield");T&&T.removeEventListener("click",m),m=null;}p.forEach(T=>T()),p=[],window.MteamFall_Svelte&&delete window.MteamFall_Svelte,x();});let N=Z(),k=Z();function E(){pt(".ant-pagination",T=>{T&&T.parentNode&&T.parentNode!==a(M)&&S(k,T.parentNode),T&&(S(N,T),n()&&a(M).appendChild(a(N)));});}function x(){a(N)&&a(N).parentNode&&a(N).parentNode.removeChild(a(N));}function P(T){if(T.parentNode){console.log("元素已找到，正在插入兄弟节点:",T);const A={path:"/search",method:"POST"};f=te=>{console.log(`<PT-Fall>[Request]  (${A.method} -> ${A.path})
`,te.detail),te.detail.url.includes("api/torrent/search")&&!te.detail.body.includes('"mode":"waterfall"')?v=true:v=false,d=true,d?l&&l.focusFall():l&&l.focusFall("bottom"),x();},window.addEventListener("req>POST->/search",f),h=te=>{const ye=JSON.parse(te.detail.data);if(!v){console.warn(`<PT-Fall>[未被接受的Response] (${A.method}->${A.path})[通过事件捕获]:
`,ye);return}console.log(`<PT-Fall>[Response] (${A.method}->${A.path})[通过事件捕获]:
`,ye),j(n()),C(T),Ot.success("捕获到 /search !"),u=ye.data,l?l.updateList(u,d):l=Sr(yl,{target:a(M),props:{infoList:u}}),E();},window.addEventListener("res>POST->/search",h);}else Ot.error(`找不到指定节点
若总是如此请报告bug`),console.error("无法插入：目标元素没有父节点");}function C(T){const A=T.parentNode.querySelector(".ant-spin-nested-loading"),te=document.createElement("div");te.id="_shield",m=()=>{confirm(`[PT-Fall]
如果你认为你被阻挡了请点击确认
这个阻挡效果会被取消
这可能导致显示错误
请确认您不在一般的瀑布流视图下
比如您在逛论坛或者在发种之类的被遮挡了再点`)&&(te.style.display="none");},te.addEventListener("click",m),A.querySelector("#_shield")||A.appendChild(te);const ye=document.createElement("div");ye.id="_fallHolder",A.querySelector("#_fallHolder")||(A.appendChild(ye),ye.appendChild(a(M)));}let y="",O="",Y="";function j(T){Ae(M,a(M).style.display=T?"block":"none"),pt("#_fallHolder",A=>{A.style.display=T?"block":"none";}),pt("#_shield",A=>{A.style.display=T?"block":"none";}),pt(Ht.TL_Selector+".flex",A=>{O||(O=getComputedStyle(A).getPropertyValue("max-width"),Y=getComputedStyle(A).getPropertyValue("padding-left")),A.style.maxWidth=T?"none":O,A.style.paddingLeft=T?"80px":Y,A.style.paddingRight=T?"80px":Y;}),pt(Ht.TL_Selector+" .mx-auto",A=>{y||(y=A.style.margin),A.style.margin=T?0:y;});}window.changeFallView=j;const J=history.pushState;function U(){history.pushState=function(T,A,te){console.log(`%c ====> URL跳转劫持: %c${te}`,"color: cyan","color: white"),te.includes("/browse")||te=="/waterfall"?console.log(`--->属于 browse 范围: ${te}`):(console.warn(`[FALL]: --->不属于 browse 范围: ${te}`),j(false)),J.apply(history,arguments);};}function K(T){return getComputedStyle(document.documentElement).getPropertyValue(T).trim()}function ue(){ge(wt,I(i).t1=kt(K("--bg-1")),I(i)),ge(wt,I(i).t2=kt(K("--bg-2")),I(i)),ge(wt,I(i).t3=kt(K("--bg-3")),I(i));}Ne(()=>(a(M),n(),a(N),a(k)),()=>{a(M)&&(n()&&a(N)&&a(M).appendChild(a(N)),!n()&&a(N)&&a(k)&&a(k).appendChild(a(N)));}),zr(),Mt(),ft();}function Ui(e){if(location.hostname.includes("m-team"))return Ht}var Sl=z('<div class="switch-container svelte-18ntgfp"><div class="switch-background svelte-18ntgfp"><div class="switch-slider svelte-18ntgfp"></div></div></div>');function Le(e,t){let r=_e(t,"checked",12,false);function n(){r(!r());}var i=Sl(),s=_(i),l=_(s);F(()=>pr(l,"checked",r())),D("click",i,n),L(e,i);}var ql=Xt(`<svg viewBox="0 0 32 32" width="20" height="20" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><defs><style>.cls-1 {
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2px;
      }</style></defs><g data-name="43-browser" id="_43-browser"><rect class="cls-1" height="30" width="30" x="1" y="1"></rect><line class="cls-1" x1="1" x2="31" y1="9" y2="9"></line><line class="cls-1" x1="5" x2="7" y1="5" y2="5"></line><line class="cls-1" x1="11" x2="13" y1="5" y2="5"></line><line class="cls-1" x1="9" x2="25" y1="16" y2="16"></line><line class="cls-1" x1="7" x2="25" y1="20" y2="20"></line><line class="cls-1" x1="7" x2="25" y1="24" y2="24"></line></g></svg>`);function $l(e){var t=ql();L(e,t);}var Al=Xt(`<svg width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><defs><style>.cls-1 {
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2px;
      }</style></defs><g data-name="80-setting" id="_80-setting"><circle class="cls-1" cx="10" cy="6" r="3"></circle><circle class="cls-1" cx="22" cy="16" r="3"></circle><circle class="cls-1" cx="10" cy="26" r="3"></circle><line class="cls-1" x1="7" x2="1" y1="6" y2="6"></line><line class="cls-1" x1="15" x2="1" y1="16" y2="16"></line><line class="cls-1" x1="7" x2="1" y1="26" y2="26"></line><line class="cls-1" x1="31" x2="17" y1="26" y2="26"></line><line class="cls-1" x1="31" x2="25" y1="16" y2="16"></line><line class="cls-1" x1="31" x2="17" y1="6" y2="6"></line></g></svg>`);function Vl(e){var t=Al();L(e,t);}var Tl=Xt('<svg enable-background="new 0 0 64 64" width="20" height="20" id="Layer_1" version="1.1" viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19,2.875H3.5c-0.829,0-1.5,0.671-1.5,1.5v19.979c0,0.829,0.671,1.5,1.5,1.5H19c0.829,0,1.5-0.671,1.5-1.5V4.375  C20.5,3.546,19.829,2.875,19,2.875z M17.5,22.854H5V5.875h12.5V22.854z"></path><path d="M19,28.773H3.5c-0.829,0-1.5,0.671-1.5,1.5v6.166c0,0.828,0.671,1.5,1.5,1.5H19c0.829,0,1.5-0.672,1.5-1.5v-6.166  C20.5,29.445,19.829,28.773,19,28.773z M17.5,34.939H5v-3.166h12.5V34.939z"></path><path d="M19,40.859H3.5c-0.829,0-1.5,0.672-1.5,1.5v17.266c0,0.828,0.671,1.5,1.5,1.5H19c0.829,0,1.5-0.672,1.5-1.5V42.359  C20.5,41.531,19.829,40.859,19,40.859z M17.5,58.125H5V43.859h12.5V58.125z"></path><path d="M40,2.875H24.5c-0.829,0-1.5,0.671-1.5,1.5v14.25c0,0.829,0.671,1.5,1.5,1.5H40c0.828,0,1.5-0.671,1.5-1.5V4.375  C41.5,3.546,40.828,2.875,40,2.875z M38.5,17.125H26V5.875h12.5V17.125z"></path><path d="M40,23.125H24.5c-0.829,0-1.5,0.671-1.5,1.5V46.5c0,0.828,0.671,1.5,1.5,1.5H40c0.828,0,1.5-0.672,1.5-1.5V24.625  C41.5,23.796,40.828,23.125,40,23.125z M38.5,45H26V26.125h12.5V45z"></path><path d="M40,51H24.5c-0.829,0-1.5,0.672-1.5,1.5v7.125c0,0.828,0.671,1.5,1.5,1.5H40c0.828,0,1.5-0.672,1.5-1.5V52.5  C41.5,51.672,40.828,51,40,51z M38.5,58.125H26V54h12.5V58.125z"></path><path d="M60.5,2.875H45c-0.828,0-1.5,0.671-1.5,1.5v35.171c0,0.828,0.672,1.5,1.5,1.5h15.5c0.828,0,1.5-0.672,1.5-1.5V4.375  C62,3.546,61.328,2.875,60.5,2.875z M59,38.046H46.5V5.875H59V38.046z"></path><path d="M60.5,44.346H45c-0.828,0-1.5,0.672-1.5,1.5v13.779c0,0.828,0.672,1.5,1.5,1.5h15.5c0.828,0,1.5-0.672,1.5-1.5V45.846  C62,45.018,61.328,44.346,60.5,44.346z M59,58.125H46.5V47.346H59V58.125z"></path></svg>');function zl(e){var t=Tl();L(e,t);}var Il=z('<div><!></div> <div class="flowBtn_text svelte-4gkzar">瀑布</div>',1),Pl=z('<div><!></div> <div class="flowBtn_text svelte-4gkzar">列表</div>',1),Ol=z('<div class="config-item svelte-4gkzar"><div class="_single_item svelte-4gkzar"><span class="svelte-4gkzar"> </span></div> <!></div>'),Hl=z('<div class="config-item svelte-4gkzar"><span class="svelte-4gkzar"> </span> <input type="range" min="0" max="40" step="1" class="svelte-4gkzar"></div>'),Rl=z('<div class="config-menu-overlay svelte-4gkzar"><div class="config-menu svelte-4gkzar"><div class="config-menu-header svelte-4gkzar"><span style="font-size: 18px; font-weight: bold;">配置菜单</span> <button class="close-btn svelte-4gkzar">&times;</button></div> <div class="config-menu-content svelte-4gkzar"><h3 class="svelte-4gkzar"># 卡片布局</h3> <div class="config-item svelte-4gkzar"><span class="svelte-4gkzar"> </span> <input type="range" min="200" step="1" list="values" class="svelte-4gkzar"></div> <div class="config-item svelte-4gkzar"><span class="svelte-4gkzar"> </span> <input type="range" step="1" list="values" class="svelte-4gkzar"></div> <div class="config-item svelte-4gkzar"><span class="svelte-4gkzar"> </span> <input type="range" min="0" max="100" step="1" list="values" class="svelte-4gkzar"></div> <h3 class="svelte-4gkzar"># 特殊配置</h3> <div class="config-item svelte-4gkzar"><div class="_single_item svelte-4gkzar"><span class="svelte-4gkzar">图片加载失败时显示标题</span></div> <!></div> <div class="config-item svelte-4gkzar"><div class="_single_item svelte-4gkzar"><span class="svelte-4gkzar">显示鼠标悬浮预览大图</span></div> <!></div> <!> <h3 class="svelte-4gkzar"># 卡片常驻信息展示</h3>  <div class="config-item svelte-4gkzar"><div class="_single_item svelte-4gkzar"><span class="svelte-4gkzar">分区</span></div> <!></div> <div class="config-item svelte-4gkzar"><div class="_single_item svelte-4gkzar"><span class="svelte-4gkzar">标题</span></div> <!></div> <div class="config-item svelte-4gkzar"><div class="_single_item svelte-4gkzar"><span class="svelte-4gkzar">置顶</span></div> <!></div> <div class="config-item svelte-4gkzar"><div class="_single_item svelte-4gkzar"><span class="svelte-4gkzar">免费</span></div> <!></div> <div class="config-item svelte-4gkzar"><div class="_single_item svelte-4gkzar"><span class="svelte-4gkzar">大小</span></div> <!></div> <div class="config-item svelte-4gkzar"><div class="_single_item svelte-4gkzar"><span class="svelte-4gkzar">副标题</span></div> <!></div> <div class="config-item svelte-4gkzar"><div class="_single_item svelte-4gkzar"><span class="svelte-4gkzar">标签</span></div> <!></div> <div class="config-item svelte-4gkzar"><div class="_single_item svelte-4gkzar"><span class="svelte-4gkzar">下载&收藏</span></div> <!></div> <div class="config-item svelte-4gkzar"><div class="_single_item svelte-4gkzar"><span class="svelte-4gkzar">上传时间</span></div> <!></div> <div class="config-item svelte-4gkzar"><div class="_single_item svelte-4gkzar"><span class="svelte-4gkzar">评论/上传/下载</span></div> <!></div> <h3 class="svelte-4gkzar"># 卡片屏蔽</h3> <div class="config-item svelte-4gkzar"><div class="_single_item svelte-4gkzar"><span class="svelte-4gkzar">屏蔽 gay 区</span></div> <!></div> <h3 class="svelte-4gkzar"># 卡片样式</h3> <div class="config-item svelte-4gkzar"><div class="_single_item svelte-4gkzar"><span class="svelte-4gkzar">自定义圆角</span></div> <!></div> <!></div></div></div>'),Fl=z('<div class="flowP svelte-4gkzar"><div class="flowPDragger svelte-4gkzar" role="button" tabindex="0" aria-hidden="true"><!></div> <div class="flowPHolder ant-typography svelte-4gkzar"><button class="flowBtn svelte-4gkzar"><!></button> <button class="flowBtn svelte-4gkzar"><div><!></div> <div class="flowBtn_text svelte-4gkzar">配置</div></button> <button class="flowBtn svelte-4gkzar">清除悬浮预览图</button> <!></div></div> <!>',1);function Dl(e,t){dt(t,false);const r=Qt(),n=()=>oe(ci,"$_panelPos",r),i=()=>oe(Cr,"$_isFallView",r),s=()=>oe(wt,"$_textColor",r),l=()=>oe(br,"$_side_panel_switch",r),u=()=>oe(yr,"$_card_layout",r),d=()=>oe(vi,"$_pic_failed_showInfo",r),v=()=>oe(ui,"$_show_hover_pic",r),c=()=>oe(kr,"$_state_hover_pic",r),o=()=>oe(Ie,"$_card_detail",r),f=()=>oe(di,"$_block_gay",r),h=()=>oe(ln,"$_card_radius",r);let m=Z(),p=false,M=0,q=0;function w(X,he,$e){return X<=he&&(X=he),X>=$e&&(X=$e),X}const N=X=>{X.preventDefault(),p=true,M=X.clientX-a(m).getBoundingClientRect().left,q=X.clientY-a(m).getBoundingClientRect().top;},k=X=>{if(!p)return;const he=w(X.clientX-M,0,window.innerWidth-(a(m).getBoundingClientRect().width+5)),$e=w(X.clientY-q,0,window.innerHeight-(a(m).getBoundingClientRect().height+5));pe(ci,{x:he,y:$e});},E=()=>{p=false;};Nn(()=>(window.addEventListener("mousemove",k),window.addEventListener("mouseup",E),()=>{window.removeEventListener("mousemove",k),window.removeEventListener("mouseup",E);})),Mt();var x=Fl();D("keydown",Er,X=>{X.key==="x"&&(pe(Cr,!i()),window.changeFallView(i()));},true);var P=Se(x),C=_(P),y=_(C);B(y,X=>{});var O=g(C,2),Y=_(O),j=_(Y);{var J=X=>{var he=Il(),$e=Se(he),Ze=_($e);zl(Ze),L(X,he);},U=X=>{var he=Pl(),$e=Se(he),Ze=_($e);$l(Ze),L(X,he);};B(j,X=>{i()?X(J):X(U,false);});}var K=g(Y,2),ue=_(K),T=_(ue);Vl(T);var A=g(K,2),te=g(A,2);B(te,X=>{}),st(P,X=>S(m,X),()=>a(m));var ye=g(P,2);{var et=X=>{var he=Rl();const $e=Lr(()=>kt(Ui().get_bg_color()));F(()=>Oe(he,"--get-text-color",a($e)));var Ze=_(he);const Xe=Lr(()=>`background-color: ${Ui().get_bg_color()??""};`);var Q=_(Ze),_t=g(_(Q),2),tt=g(Q,2),Or=g(_(tt),2),Jt=_(Or),Nt=_(Jt),Kt=g(Jt,2);F(()=>V(Kt,"max",Math.max(400,u().max)));var Hr=g(Or,2),St=_(Hr),qn=_(St),er=g(St,2);F(()=>V(er,"min",Math.min(200,u().min))),F(()=>V(er,"max",Math.max(800,u().min*2)));var ht=g(Hr,2),tr=_(ht),$n=_(tr),An=g(tr,2),rr=g(ht,4),Vn=g(_(rr),2);Le(Vn,{get checked(){return nn(),d()},set checked(H){pe(vi,H);},$$legacy:true});var je=g(rr,2),Rr=g(_(je),2);Le(Rr,{get checked(){return nn(),v()},set checked(H){pe(ui,H);},$$legacy:true});var nr=g(je,2);{var Fr=H=>{var rt=Ol(),nt=_(rt),vr=_(nt),dr=_(vr),$t=g(nt,2);Le($t,{get checked(){return nn(),c()},set checked(Jr){pe(kr,Jr);},$$legacy:true}),F(()=>re(dr,`预览大图默认状态: ${(c()?"尽量铺满":"尽量原图大小")??""}`)),L(H,rt);};B(nr,H=>{v()&&H(Fr);});}var ir=g(nr,4),Tn=g(_(ir),2);Le(Tn,{get checked(){return o().category},set checked(H){ge(Ie,I(o).category=H,I(o));},$$legacy:true});var ar=g(ir,2),zn=g(_(ar),2);Le(zn,{get checked(){return o().title},set checked(H){ge(Ie,I(o).title=H,I(o));},$$legacy:true});var Dr=g(ar,2),sr=g(_(Dr),2);Le(sr,{get checked(){return o().topping},set checked(H){ge(Ie,I(o).topping=H,I(o));},$$legacy:true});var or=g(Dr,2),In=g(_(or),2);Le(In,{get checked(){return o().free},set checked(H){ge(Ie,I(o).free=H,I(o));},$$legacy:true});var gt=g(or,2),lr=g(_(gt),2);Le(lr,{get checked(){return o().size},set checked(H){ge(Ie,I(o).size=H,I(o));},$$legacy:true});var Br=g(gt,2),cr=g(_(Br),2);Le(cr,{get checked(){return o().sub_title},set checked(H){ge(Ie,I(o).sub_title=H,I(o));},$$legacy:true});var qt=g(Br,2),Pn=g(_(qt),2);Le(Pn,{get checked(){return o().tags},set checked(H){ge(Ie,I(o).tags=H,I(o));},$$legacy:true});var ur=g(qt,2),On=g(_(ur),2);Le(On,{get checked(){return o().download_collect},set checked(H){ge(Ie,I(o).download_collect=H,I(o));},$$legacy:true});var Zr=g(ur,2),jr=g(_(Zr),2);Le(jr,{get checked(){return o().upload_time},set checked(H){ge(Ie,I(o).upload_time=H,I(o));},$$legacy:true});var Wr=g(Zr,2),Gr=g(_(Wr),2);Le(Gr,{get checked(){return o().statistics},set checked(H){ge(Ie,I(o).statistics=H,I(o));},$$legacy:true});var Yr=g(Wr,4),Hn=g(_(Yr),2);Le(Hn,{get checked(){return nn(),f()},set checked(H){pe(di,H);},$$legacy:true});var Ur=g(Yr,4),Xr=g(_(Ur),2);Le(Xr,{get checked(){return h().enabled},set checked(H){ge(ln,I(h).enabled=H,I(h));},$$legacy:true});var Qr=g(Ur,2);{var Rn=H=>{var rt=Hl(),nt=_(rt),vr=_(nt),dr=g(nt,2);F(()=>re(vr,`圆角大小: ${h().value??""} px`)),rn(dr,()=>h().value,$t=>ge(ln,I(h).value=$t,I(h))),L(H,rt);};B(Qr,H=>{h().enabled&&H(Rn);});}F(()=>{V(Ze,"style",a(Xe)),re(Nt,`最小宽度: ${u().min??""} px`),re(qn,`最大宽度: ${u().max??""} px`),re($n,`卡片间隔: ${u().gap??""} px`);}),D("click",_t,()=>pe(br,false)),rn(Kt,()=>u().min,H=>ge(yr,I(u).min=H,I(u))),rn(er,()=>u().max,H=>ge(yr,I(u).max=H,I(u))),rn(An,()=>u().gap,H=>ge(yr,I(u).gap=H,I(u))),Dt(3,he,()=>Bt,()=>({duration:100})),D("click",he,Ei(()=>pe(br,false))),L(X,he);};B(ye,X=>{l()&&X(et);});}F(()=>{V(P,"style",`top:${n().y??""}px; left:${n().x??""}px;`),Oe(P,"--isFallView",i()?"#4ff74f":"yellow"),Oe(O,"--get-text-color",s().t2);}),D("mousedown",C,N),D("click",Y,()=>{pe(Cr,!i()),window.changeFallView(i());}),D("click",K,()=>{pe(br,!l());}),D("click",A,()=>{window.__clearPreview();}),L(e,x),ft();}var Bl=Xt('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_iconCarrier"><circle cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="1.5"></circle><path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path></g></svg>');function Zl(e){var t=Bl();L(e,t);}var jl=z('<div class="iframe-overlay svelte-126sfo0"></div>'),Wl=z('<div id="_iframe_holder" class="svelte-126sfo0"><div class="_iframe_back svelte-126sfo0"></div> <div class="_iframe_parent svelte-126sfo0"><div class="resize-handle resize-handle-left svelte-126sfo0"></div> <!> <iframe frameborder="0" class="svelte-126sfo0"></iframe> <div class="_iframeCloseBtn svelte-126sfo0"><!></div> <div class="resize-handle resize-handle-right svelte-126sfo0"></div></div></div>');function Gl(e,t){dt(t,false);const r=Qt(),n=()=>oe(on,"$_iframe_switch",r),i=()=>oe(wt,"$_textColor",r),s=()=>oe(Sa,"$_iframe_url",r);let l=_e(t,"_app",8),u;function d(){c||pe(on,0);}let v=Z(1e3),c=false,o=Z(false),f=()=>{};function h(N,k){const E=N.clientX,x=a(v);c=true,S(o,true),document.body.style.userSelect="none",f=P=>{if(!c)return;const C=P.clientX-E,y=k==="right"?x+C*2:x-C*2;S(v,Math.max(1e3,Math.min(y,window.innerWidth*.95)));},window.addEventListener("mousemove",f),window.addEventListener("mouseup",m);}function m(){c=false,S(o,false),document.body.style.userSelect="",window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",m);}function p(N){N.key==="Escape"&&(pe(on,0),pe(br,false),jt.getInstance()&&jt.getInstance().clearPreview());}u=true,u&&Sr(Nl,{target:l()}),Sr(Dl,{target:l()}),console.log("-------------->  PT_Fall Launch   <--------------"),Mt();var M=lt();D("keydown",Er,p,true);var q=Se(M);{var w=N=>{var k=Wl(),E=_(k),x=g(E,2),P=_(x),C=g(P,2);{var y=U=>{var K=jl();L(U,K);};B(C,U=>{a(o)&&U(y);});}var O=g(C,2),Y=g(O,2),j=_(Y);Zl(j);var J=g(Y,2);F(()=>{Oe(x,"--textColor1",i().t1),Oe(x,"--textColor2",i().t1+"90"),V(O,"src",s()),V(O,"title",s()),V(O,"style",`width: ${a(v)??""}px;`);}),D("click",E,Ei(d),true),D("mousedown",P,U=>h(U,"left")),D("load",O,U=>{const K=U.target.contentDocument||U.target.contentWindow.document;if(!K){console.error("无法访问iframe内容文档, 可能是由于跨域限制。"),Ot.error("无法访问iframe内容文档, 可能是由于跨域限制。");return}const ue=()=>{const A=K.querySelector(".ant-card.detail-view");A&&(A.scrollIntoView({behavior:"smooth"}),console.log("成功滚动到目标元素！"),clearInterval(T));},T=setInterval(ue,500);ue();}),D("click",O,U=>{m(),U.stopPropagation();}),D("mouseup",O,U=>{m();}),D("click",Y,d),D("mousedown",J,U=>h(U,"right")),Dt(3,k,()=>Bt,()=>({duration:300})),L(N,k);};B(q,N=>{n()&&N(w);});}L(e,M),ft();}const fi=document.createElement("div");document.body.append(fi);Sr(Gl,{target:fi,props:{_app:fi}});

})();