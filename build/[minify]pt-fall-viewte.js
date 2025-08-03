// ==UserScript==
// @name            PT瀑布流视图
// @name:en         PT_Fall-View
// @namespace       vite-plugin-monkey
// @version         0.3.7
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

(n=>{if(typeof GM_addStyle=="function"){GM_addStyle(n);return}const r=document.createElement("style");r.textContent=n,document.head.append(r)})(` button:focus,\r
button:focus-visible {\r
  /* outline: 2px auto -webkit-focus-ring-color; */\r
  /* outline: none; */\r
  outline: 3px solid var(--bg-3);\r
}\r
\r
#_fallHolder {\r
  position: absolute;\r
  top: 0;\r
  left: 0;\r
  width: 100%;\r
  min-height: 10px;\r
  z-index: 101;\r
}\r
\r
#_shield {\r
  position: absolute;\r
  top: 0;\r
  left: 0;\r
  width: 100%;\r
  height: 100%;\r
  background-color: rgba(0, 0, 0, 0.5);\r
  z-index: 100;\r
  cursor: help;\r
  transition: background-color 0.3s ease;\r
}\r
#_shield:hover {\r
  background-color: rgba(0, 0, 0, 0.9);\r
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
\r
  .card_holder.svelte-13et45j {\r
    border-radius: var(--borderRadius);\r
    overflow: hidden;\r
  }\r
\r
  /* \u5361\u7247\u5206\u7C7B */\r
  .card-category.svelte-13et45j {\r
    height: 20px;\r
    padding: 0 2px;\r
    border: 1px;\r
    background: black;\r
    color: white;\r
    font-weight: 900;\r
    overflow: hidden;\r
    white-space: nowrap;\r
    text-overflow: ellipsis;\r
\r
    display: flex;\r
    align-items: center;\r
    justify-content: center;\r
  }\r
\r
  /* \u5361\u7247\u79CD\u7C7Btag\u9884\u89C8\u56FE */\r
  .card_category-img.svelte-13et45j {\r
    /* height: 18px; */\r
    height: 35px;\r
    width: 28px;\r
\r
    /* background-size: 100% 141%; */\r
    background-position: center top;\r
\r
    /* padding-left: 5%; */\r
    padding-top: 6px;\r
  }\r
\r
  .card_category_square.svelte-13et45j {\r
    width: 40px;\r
    height: 40px;\r
    padding-top: 0;\r
    border-radius: 10px;\r
  }\r
\r
  /* (unused) .card_new_page_highlight {\r
    /* position: absolute; *\\/\r
    top: 0;\r
    left: 0;\r
    width: 100%;\r
    height: 100%;\r
    background-color: rgba(8, 68, 0, 0.5);\r
    color: white;\r
    text-align: center;\r
    padding: 8px 8px;\r
  }*/\r
  .card_pic.svelte-13et45j img:where(.svelte-13et45j) {\r
    width: 100%;\r
    height: 100%;\r
  }\r
  .lazy-image.svelte-13et45j {\r
    opacity: 0.2;\r
    transition: opacity 0.5s ease;\r
  }\r
  /* FIXME: \u4E0D\u77E5\u9053\u4E3A\u5565\u8FD9\u91CC\u4E0D\u8D77\u4F5C\u7528 */\r
  /* (unused) .lazy-image.loaded {\r
    opacity: 1;\r
  }*/\r
  .card_info.svelte-13et45j {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    flex-direction: column;\r
\r
    padding: 0px 8px;\r
\r
    & .card_info-item:where(.svelte-13et45j) {\r
      display: flex;\r
      justify-content: space-around;\r
      align-items: center;\r
\r
      /* min-height: 32px; */\r
      width: 100%;\r
    }\r
\r
    & .card_info__dl_and_cl:where(.svelte-13et45j) {\r
      display: flex;\r
      justify-content: center;\r
      align-items: center;\r
\r
      height: 32px;\r
    }\r
\r
    & .card_info__statistics:where(.svelte-13et45j) {\r
      display: flex;\r
      justify-content: center;\r
      align-items: center;\r
    }\r
  }\r
\r
  .card_info__topping.svelte-13et45j {\r
    display: flex;\r
    /* justify-content: center; */\r
    align-items: center;\r
  }\r
\r
  .__main_title.svelte-13et45j {\r
    white-space: pre-wrap;\r
    word-wrap: break-word;\r
    overflow-wrap: break-word;\r
\r
    /* font-size: 16px; */\r
    font-weight: bold;\r
\r
    &:hover {\r
      text-decoration: underline;\r
    }\r
  }\r
\r
  /* \u6807\u7B7E */\r
  .cl-tags.svelte-13et45j {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    flex-wrap: wrap;\r
\r
    gap: 2px;\r
\r
    padding-top: 4px;\r
    padding-bottom: 4px;\r
  }\r
  ._tag.svelte-13et45j {\r
    /* padding: 1px 6px; */\r
    height: 1.3em;\r
    line-height: 1.3em;\r
    padding: 0 0.5em;\r
    border-radius: 6px;\r
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r
    font-size: 12px;\r
  }\r
  ._tag_diy.svelte-13et45j {\r
    color: #ffffff;\r
    background-color: rgb(90, 189, 72);\r
  }\r
  ._tag_dub.svelte-13et45j {\r
    color: #ffffff;\r
    background-color: rgb(90, 59, 20);\r
  }\r
  ._tag_sub.svelte-13et45j {\r
    color: #ffffff;\r
    background-color: rgb(59, 74, 127);\r
  }\r
  ._tag_discount_50.svelte-13et45j {\r
    background-color: rgb(255, 85, 0);\r
    color: #ffffff;\r
  }\r
  ._tag_discount_free.svelte-13et45j {\r
    background-color: rgb(16, 142, 233);\r
    color: #ffffff;\r
  }\r
\r
  .card_pic.svelte-13et45j {\r
    position: relative;\r
    display: flex;\r
    align-items: center;\r
    justify-content: center;\r
    background-color: var(--cateColor);\r
  }\r
\r
  .pic_error.svelte-13et45j {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    width: 100%;\r
    height: 100%;\r
    padding: 10px;\r
    gap: 10px;\r
    line-height: 24px;\r
  }\r
\r
  /* \u5361\u7247\u7D22\u5F15 */\r
  .card-index.svelte-13et45j {\r
    position: absolute;\r
    top: 0;\r
    left: 0;\r
    padding: 4px 9px 4px 9px;\r
    margin: 0;\r
    /* height: 20px; */\r
    line-height: 16px;\r
    font-size: 16px;\r
    font-weight: bold;\r
\r
    background-color: rgba(0, 0, 0, 0.5);\r
    color: white;\r
    /* border-top-right-radius: 100px; */\r
    /* border-bottom-right-radius: 100px; */\r
\r
    z-index: 2;\r
\r
    display: flex;\r
    align-items: center;\r
\r
    pointer-events: none;\r
  }\r
\r
  /* \u5361\u7247\u7D22\u5F15_\u53F3 */\r
  .card-index-right.svelte-13et45j {\r
    left: initial;\r
    right: 0;\r
    padding: 4px 4px 4px 8px;\r
\r
    background-color: rgb(0, 0, 0);\r
    color: white;\r
\r
    /* border-top-left-radius: 20px; */\r
    /* border-bottom-left-radius: 20px; */\r
  }\r
\r
  /* \u60AC\u6D6E\u9884\u89C8: \u5C40\u90E8\u89E6\u53D1\u5668 */\r
  .hover-trigger.svelte-13et45j {\r
    position: absolute;\r
    top: 28px;\r
    right: 8px;\r
    /* padding-right: 19px; */\r
    /* padding-left: 2px; */\r
    padding: 0;\r
    width: 42px;\r
    margin: 0;\r
    height: 40px;\r
    line-height: 16px;\r
    font-size: 16px;\r
\r
    /* background-color: rgb(255, 187, 16); */\r
\r
    opacity: 0.5;\r
\r
    /* color: yellow; */\r
    /* border-top-right-radius: 0px; */\r
    /* border-bottom-left-radius: 100px; */\r
    border-radius: 9999px;\r
\r
    display: flex;\r
    align-items: center;\r
\r
    /* pointer-events: none; */\r
\r
    z-index: 2;\r
    transition: opacity 0.3s ease;\r
\r
    &:hover {\r
      opacity: 0.8;\r
    }\r
  }\r
\r
  /* \u6DFB\u52A0\u60AC\u6D6E\u6548\u679C\u76F8\u5173\u6837\u5F0F */\r
  .hover-overlay.svelte-13et45j {\r
    position: absolute;\r
    bottom: 0;\r
    left: 0;\r
    width: 100%;\r
    height: 100%;\r
    background: rgba(0, 0, 0, 0.5);\r
    opacity: 0;\r
    transition: opacity 0.3s ease;\r
    /* pointer-events: none; */\r
    z-index: 1;\r
  }\r
\r
  .overlay-content.svelte-13et45j {\r
    width: 100%;\r
    position: absolute;\r
    bottom: 0;\r
    left: 50%;\r
    transform: translateX(-50%);\r
\r
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.9) 20%, transparent 100%);\r
    background: rgba(255, 255, 255, 0.9);\r
    /* background-color: rgba(0, 0, 0, 0.5); */\r
\r
    padding: 0 0px 2px;\r
    /* border-radius: 4px; */\r
    color: #333;\r
    font-size: 14px;\r
    white-space: nowrap;\r
\r
    display: flex;\r
    flex-direction: column;\r
\r
    & .card_info-item:where(.svelte-13et45j) {\r
      display: flex;\r
      justify-content: center;\r
      align-items: center;\r
\r
      padding: 2px;\r
\r
      padding-left: 8px;\r
      padding-right: 8px;\r
    }\r
\r
    & .__main_title:where(.svelte-13et45j) {\r
      text-align: center;\r
      white-space: pre-wrap;\r
      word-wrap: break-word;\r
      overflow-wrap: break-word;\r
\r
      /* font-size: 16px; */\r
      font-weight: bold;\r
\r
      &:hover {\r
        text-decoration: underline;\r
      }\r
    }\r
\r
    & .__sub_title:where(.svelte-13et45j) {\r
      white-space: pre-wrap;\r
      word-wrap: break-word;\r
      overflow-wrap: break-word;\r
      overflow: hidden;\r
    }\r
\r
    & .card_info__statistics:where(.svelte-13et45j) {\r
      display: flex;\r
      justify-content: space-evenly;\r
      align-items: center;\r
\r
      height: 32px;\r
    }\r
  }\r
\r
  .__center.svelte-13et45j {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
  }\r
\r
  .__inner_index_and_size.svelte-13et45j {\r
    display: flex;\r
    justify-content: space-between;\r
    align-items: center;\r
    position: absolute;\r
    width: 100%;\r
    left: 0;\r
    top: -24px;\r
  }\r
\r
  .__inner_index.svelte-13et45j {\r
    position: relative;\r
    width: fit-content;\r
\r
    display: flex;\r
    justify-content: flex-start;\r
    align-items: center;\r
  }\r
\r
  .__inner_size.svelte-13et45j {\r
    position: relative;\r
    width: fit-content;\r
\r
    display: flex;\r
    justify-content: flex-end;\r
    align-items: center;\r
  }\r
\r
  .__iframe_button.svelte-13et45j {\r
    flex: 1;\r
    height: 24px;\r
    padding: 4px 8px;\r
    margin: 0;\r
    border: none;\r
    background: none;\r
    outline: none;\r
    appearance: none;\r
    box-sizing: border-box;\r
    white-space: nowrap;\r
    opacity: 1;\r
    transition: opacity 0.3s ease;\r
\r
    &:hover {\r
      opacity: 0.7;\r
    }\r
  }\r

\r
  .fall_holder.svelte-1vmncc1 {\r
    background-color: var(--bg-1);\r
\r
    overflow: hidden;\r
  }\r
\r
  .text_center.svelte-1vmncc1 {\r
    text-align: center;\r
    padding: 8px 0;\r
    margin: 0;\r
  }\r

\r
  .__btn.svelte-1a87xm5 {\r
    background-color: var(--bg-2);\r
    color: white;\r
    border: none;\r
    padding: 4px 8px;\r
    border-radius: 4px;\r
    font-size: 14px;\r
    transition: background-color 0.3s;\r
    cursor: pointer;\r
  }\r
\r
  .__btnWide.svelte-1a87xm5 {\r
    height: 40px;\r
    display: flex;\r
    align-items: center;\r
    justify-content: center;\r
  }\r
\r
  .__btn.svelte-1a87xm5:hover {\r
    background-color: var(--hover);\r
  }\r
\r
  .modal-overlay.svelte-1a87xm5 {\r
    position: fixed;\r
    top: 0;\r
    left: 0;\r
    right: 0;\r
    bottom: 0;\r
    background-color: rgba(0, 0, 0, 0.5);\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    z-index: 25000;\r
  }\r
\r
  .modal-content.svelte-1a87xm5 {\r
    background: var(--bg-3);\r
    border-radius: 8px;\r
    border: 4px solid var(--bg-2);\r
    /* padding: 12px; */\r
    width: 500px;\r
    max-width: 90vw;\r
    max-height: 80vh;\r
    overflow-y: auto;\r
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\r
  }\r
\r
  .modal-header.svelte-1a87xm5 {\r
    display: flex;\r
    justify-content: space-between;\r
    align-items: center;\r
    padding: 16px 20px;\r
    border-bottom: 4px solid var(--bg-2);\r
  }\r
\r
  .modal-header.svelte-1a87xm5 h3:where(.svelte-1a87xm5) {\r
    margin: 0;\r
    font-size: 16px;\r
  }\r
\r
  .close-btn.svelte-1a87xm5 {\r
    background: none;\r
    border: none;\r
    font-size: 24px;\r
    cursor: pointer;\r
    padding: 0;\r
    width: 24px;\r
    height: 24px;\r
    display: flex;\r
    align-items: center;\r
    justify-content: center;\r
  }\r
\r
  .modal-body.svelte-1a87xm5 {\r
    padding: 0px 20px 10px;\r
    line-height: 1.6;\r
  }\r
\r
  .modal-body.svelte-1a87xm5 h4:where(.svelte-1a87xm5) {\r
    margin: 16px 0 8px 0;\r
    color: #1890ff;\r
  }\r
\r
  .modal-body.svelte-1a87xm5 p:where(.svelte-1a87xm5) {\r
    margin: 0 0 12px 0;\r
  }\r
\r
  .modal-code.svelte-1a87xm5 {\r
    background-color: var(--bg-1);\r
    padding: 4px;\r
    border-radius: 4px;\r
  }\r

\r
  .switch-container.svelte-18ntgfp {\r
    display: inline-block;\r
    cursor: pointer;\r
  }\r
\r
  .switch-background.svelte-18ntgfp {\r
    position: relative;\r
    width: 48px;\r
    height: 24px;\r
    background-color: #e0e0e0;\r
    border-radius: 12px;\r
    transition: background-color 0.2s;\r
  }\r
\r
  .switch-slider.svelte-18ntgfp {\r
    position: absolute;\r
    width: 20px;\r
    height: 20px;\r
    background-color: white;\r
    border-radius: 50%;\r
    top: 2px;\r
    left: 2px;\r
    transition: all 0.2s;\r
  }\r
\r
  .switch-slider.checked.svelte-18ntgfp {\r
    transform: translateX(24px);\r
    /* // \u6DFB\u52A0\u84DD\u8272\u80CC\u666F */\r
    background-color: #2196f3;\r
  }\r
\r
  .switch-background.svelte-18ntgfp:hover {\r
    background-color: #d0d0d0;\r
  }\r
\r
  .switch-container.svelte-18ntgfp:active .switch-slider:where(.svelte-18ntgfp) {\r
    transform: translateX(24px) scale(0.95);\r
  }\r

\r
  .flowP.svelte-3a4txt {\r
    position: fixed;\r
\r
    width: 80px;\r
    max-height: 300px;\r
\r
    border-radius: 12px;\r
    overflow: hidden;\r
\r
    padding-bottom: 8px;\r
    padding: 0px 0px 8px;\r
\r
    /* background-color: #fff4; */\r
    background-color: var(--bg-1);\r
    transition:\r
      opacity 0.3s,\r
      border 0.3s;\r
\r
    font-size: 16px;\r
\r
    opacity: 0.7;\r
\r
    z-index: 15000;\r
\r
    border: 2px solid transparent;\r
    &:hover {\r
      opacity: 1;\r
      border: 2px solid var(--isFallView);\r
    }\r
  }\r
\r
  .flowPDragger.svelte-3a4txt {\r
    height: 12px;\r
    transition: background-color 0.3s ease-in-out;\r
    background-color: var(--isFallView);\r
\r
    &:hover {\r
      cursor: move; /* \u8BBE\u7F6E\u9F20\u6807\u60AC\u505C\u65F6\u7684\u56FE\u6807\u4E3A\u79FB\u52A8 */\r
    }\r
  }\r
\r
  .flowPHolder.svelte-3a4txt {\r
    /* position: relative; */\r
    display: flex;\r
    flex-direction: column;\r
    justify-content: center;\r
    align-items: center;\r
    padding-top: 2px;\r
    gap: 4px;\r
  }\r
\r
  .flowBtn.svelte-3a4txt {\r
    padding: 4px;\r
    border-radius: 4px;\r
    border: 2px solid transparent;\r
    transition: all 0.2s;\r
\r
    font-size: 14px;\r
    /* font-weight: bold; */\r
\r
    width: 72px;\r
\r
    background-color: var(--bg-2);\r
    color: var(--get-text-color);\r
\r
    &:hover {\r
      border-color: var(--bg-3);\r
    }\r
\r
    &:active {\r
      transform: translateY(4px);\r
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\r
    }\r
\r
    & .flowBtn_text:where(.svelte-3a4txt) {\r
      padding-top: 3px;\r
      padding-bottom: 3px;\r
    }\r
\r
    /* @media (prefers-color-scheme: dark) {\r
      background-color: #2a2a2a;\r
      color: #ffffff;\r
\r
      &:hover {\r
        background-color: #3a3a3a;\r
        color: #ffffff;\r
      }\r
    } */\r
  }\r
\r
  /* \u914D\u7F6E\u83DC\u5355\u6837\u5F0F */\r
  .config-menu-overlay.svelte-3a4txt {\r
    position: fixed;\r
    top: 0;\r
    left: 0;\r
    right: 0;\r
    bottom: 0;\r
    background-color: rgba(0, 0, 0, 0.5);\r
    display: flex;\r
    justify-content: flex-end;\r
    z-index: 20000;\r
  }\r
\r
  .config-menu.svelte-3a4txt {\r
    background-color: #ffffff;\r
    width: 300px;\r
    height: 100vh;\r
    padding: 20px;\r
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);\r
    overflow-y: auto;\r
  }\r
\r
  .config-menu-header.svelte-3a4txt {\r
    display: flex;\r
    justify-content: space-between;\r
    align-items: center;\r
    margin-bottom: 12px;\r
  }\r
\r
  .close-btn.svelte-3a4txt {\r
    background: none;\r
    border: none;\r
    font-size: 24px;\r
    cursor: pointer;\r
    padding: 0 8px;\r
    transform: translateY(-4px);\r
  }\r
\r
  .config-menu-content.svelte-3a4txt {\r
    display: flex;\r
    flex-direction: column;\r
    gap: 4px;\r
\r
    font-size: 14px;\r
\r
    & h3:where(.svelte-3a4txt) {\r
      margin-top: 28px;\r
    }\r
  }\r
\r
  .config-item.svelte-3a4txt {\r
    display: flex;\r
    align-items: center;\r
    justify-content: space-between;\r
  }\r
\r
  .config-item.svelte-3a4txt input:where(.svelte-3a4txt) {\r
    width: 120px;\r
  }\r

\r
  div#_iframe.svelte-1axpxde {\r
    position: fixed;\r
    top: 0;\r
    left: 0;\r
    width: 100vw;\r
    height: 100vh;\r
    background-color: rgba(0, 38, 38, 0.607);\r
    z-index: 30000;\r
\r
    display: flex;\r
  }\r
\r
  div._iframe.svelte-1axpxde {\r
    position: relative;\r
    /* width: 1246px; */\r
    height: 96%;\r
    margin: auto;\r
  }\r
\r
  div._iframe.svelte-1axpxde iframe:where(.svelte-1axpxde) {\r
    height: 100%;\r
    border-radius: 20px;\r
  }\r
\r
  ._iframeCloseBtn.svelte-1axpxde {\r
    width: 40px;\r
    height: 40px;\r
    background: white;\r
\r
    position: absolute;\r
\r
    top: 10px;\r
    right: 10px;\r
\r
    border-radius: 40px;\r
    transition: all 0.5s;\r
\r
    /* \u60AC\u6D6E */\r
    &:hover {\r
      opacity: 0.7;\r
      transform: scale(1.2);\r
    }\r
    /* \u70B9\u51FB(\u957F\u6309\u624D\u660E\u663E) */\r
    &:active {\r
      opacity: 0.9;\r
      transform: scale(1.9);\r
    }\r
  } `);

(function () {
      'use strict';

      var Da=Object.defineProperty;var Mi=e=>{throw TypeError(e)};var Fa=(e,t,r)=>t in e?Da(e,t,{enumerable:true,configurable:true,writable:true,value:r}):e[t]=r;var Ni=(e,t,r)=>Fa(e,t+"",r),Xn=(e,t,r)=>t.has(e)||Mi("Cannot "+r);var Ge=(e,t,r)=>(Xn(e,t,"read from private field"),r?r.call(e):t.get(e)),sr=(e,t,r)=>t.has(e)?Mi("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),Qn=(e,t,r,n)=>(Xn(e,t,"write to private field"),t.set(e,r),r),Si=(e,t,r)=>(Xn(e,t,"access private method"),r);var En=Array.isArray,ja=Array.prototype.indexOf,hi=Array.from,Ui=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,Xi=Object.getOwnPropertyDescriptors,za=Object.prototype,qa=Array.prototype,pi=Object.getPrototypeOf;function Ba(e){return typeof e=="function"}const De=()=>{};function Za(e){return e()}function ti(e){for(var t=0;t<e.length;t++)e[t]();}const $e=2,Qi=4,xr=8,kn=16,Be=32,Dt=64,dn=128,gt=256,_n=512,we=1024,st=2048,mt=4096,je=8192,Ft=16384,Ji=32768,Ln=65536,Wa=1<<17,Ga=1<<19,Ki=1<<20,pt=Symbol("$state"),Ya=Symbol("legacy props"),Ua=Symbol("");function ea(e){return e===this.v}function ta(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function gi(e){return !ta(e,this.v)}function Xa(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Qa(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Ja(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Ka(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function es(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function ts(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function rs(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ns(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function is(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let jt=false;function as(){jt=true;}const mi=1,yi=2,ra=4,ss=8,os=16,ls=1,cs=2,us=4,vs=8,fs=16,ds=1,_s=2,hs=4,ps=1,gs=2,Ee=Symbol();function Se(e,t){var r={f:0,v:e,reactions:null,equals:ea,rv:0,wv:0};return r}function Mn(e,t=false){var n;const r=Se(e);return t||(r.equals=gi),jt&&ee!==null&&ee.l!==null&&((n=ee.l).s??(n.s=[])).push(r),r}function te(e,t=false){return ms(Mn(e,t))}function ms(e){return re!==null&&!Je&&re.f&$e&&(ze===null?Ns([e]):ze.push(e)),e}function Ve(e,t){return P(e,I(()=>v(e))),t}function P(e,t){return re!==null&&!Je&&kr()&&re.f&($e|kn)&&(ze===null||!ze.includes(e))&&is(),ri(e,t)}function ri(e,t){return e.equals(t)||(e.v,e.v=t,e.wv=ya(),na(e,st),kr()&&X!==null&&X.f&we&&!(X.f&(Be|Dt))&&(Ye===null?Ss([e]):Ye.push(e))),t}function na(e,t){var r=e.reactions;if(r!==null)for(var n=kr(),i=r.length,a=0;a<i;a++){var o=r[a],c=o.f;c&st||!n&&o===X||(He(o,t),c&(we|gt)&&(c&$e?na(o,mt):An(o)));}}let ia=false;function Mt(e,t=null,r){if(typeof e!="object"||e===null||pt in e)return e;const n=pi(e);if(n!==za&&n!==qa)return e;var i=new Map,a=En(e),o=Se(0);a&&i.set("length",Se(e.length));var c;return new Proxy(e,{defineProperty(l,u,s){(!("value"in s)||s.configurable===false||s.enumerable===false||s.writable===false)&&ts();var h=i.get(u);return h===undefined?(h=Se(s.value),i.set(u,h)):P(h,Mt(s.value,c)),true},deleteProperty(l,u){var s=i.get(u);if(s===undefined)u in l&&i.set(u,Se(Ee));else {if(a&&typeof u=="string"){var h=i.get("length"),f=Number(u);Number.isInteger(f)&&f<h.v&&P(h,f);}P(s,Ee),$i(o);}return  true},get(l,u,s){var w;if(u===pt)return e;var h=i.get(u),f=u in l;if(h===undefined&&(!f||(w=ht(l,u))!=null&&w.writable)&&(h=Se(Mt(f?l[u]:Ee,c)),i.set(u,h)),h!==undefined){var d=v(h);return d===Ee?undefined:d}return Reflect.get(l,u,s)},getOwnPropertyDescriptor(l,u){var s=Reflect.getOwnPropertyDescriptor(l,u);if(s&&"value"in s){var h=i.get(u);h&&(s.value=v(h));}else if(s===undefined){var f=i.get(u),d=f==null?undefined:f.v;if(f!==undefined&&d!==Ee)return {enumerable:true,configurable:true,value:d,writable:true}}return s},has(l,u){var d;if(u===pt)return  true;var s=i.get(u),h=s!==undefined&&s.v!==Ee||Reflect.has(l,u);if(s!==undefined||X!==null&&(!h||(d=ht(l,u))!=null&&d.writable)){s===undefined&&(s=Se(h?Mt(l[u],c):Ee),i.set(u,s));var f=v(s);if(f===Ee)return  false}return h},set(l,u,s,h){var C;var f=i.get(u),d=u in l;if(a&&u==="length")for(var w=s;w<f.v;w+=1){var m=i.get(w+"");m!==undefined?P(m,Ee):w in l&&(m=Se(Ee),i.set(w+"",m));}f===undefined?(!d||(C=ht(l,u))!=null&&C.writable)&&(f=Se(undefined),P(f,Mt(s,c)),i.set(u,f)):(d=f.v!==Ee,P(f,Mt(s,c)));var k=Reflect.getOwnPropertyDescriptor(l,u);if(k!=null&&k.set&&k.set.call(h,s),!d){if(a&&typeof u=="string"){var $=i.get("length"),g=Number(u);Number.isInteger(g)&&g>=$.v&&P($,g+1);}$i(o);}return  true},ownKeys(l){v(o);var u=Reflect.ownKeys(l).filter(f=>{var d=i.get(f);return d===undefined||d.v!==Ee});for(var[s,h]of i)h.v!==Ee&&!(s in l)&&u.push(s);return u},setPrototypeOf(){rs();}})}function $i(e,t=1){P(e,e.v+t);}var pr,aa,sa;function ys(){if(pr===undefined){pr=window;var e=Element.prototype,t=Node.prototype;aa=ht(t,"firstChild").get,sa=ht(t,"nextSibling").get,e.__click=undefined,e.__className="",e.__attributes=null,e.__styles=null,e.__e=undefined,Text.prototype.__t=undefined;}}function bi(e=""){return document.createTextNode(e)}function It(e){return aa.call(e)}function Nn(e){return sa.call(e)}function _(e,t){return It(e)}function Le(e,t){{var r=It(e);return r instanceof Comment&&r.data===""?Nn(r):r}}function p(e,t=1,r=false){let n=e;for(;t--;)n=Nn(n);return n}function bs(e){e.textContent="";}function gr(e){var t=$e|st;X===null?t|=gt:X.f|=Ki;var r=re!==null&&re.f&$e?re:null;const n={children:null,ctx:ee,deps:null,equals:ea,f:t,fn:e,reactions:null,rv:0,v:null,wv:0,parent:r??X};return r!==null&&(r.children??(r.children=[])).push(n),n}function Ae(e){const t=gr(e);return t.equals=gi,t}function oa(e){var t=e.children;if(t!==null){e.children=null;for(var r=0;r<t.length;r+=1){var n=t[r];n.f&$e?wi(n):at(n);}}}function ws(e){for(var t=e.parent;t!==null;){if(!(t.f&$e))return t;t=t.parent;}return null}function la(e){var t,r=X;Pe(ws(e));try{oa(e),t=wa(e);}finally{Pe(r);}return t}function ca(e){var t=la(e),r=(dt||e.f&gt)&&e.deps!==null?mt:we;He(e,r),e.equals(t)||(e.v=t,e.wv=ya());}function wi(e){oa(e),yr(e,0),He(e,Ft),e.v=e.children=e.deps=e.ctx=e.reactions=null;}function ua(e){X===null&&re===null&&Ja(),re!==null&&re.f&gt&&Qa(),ki&&Xa();}function xs(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e);}function zt(e,t,r,n=true){var i=(e&Dt)!==0,a=X,o={ctx:ee,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|st,first:null,fn:t,last:null,next:null,parent:i?null:a,prev:null,teardown:null,transitions:null,wv:0};if(r){var c=St;try{Vi(!0),Tn(o),o.f|=Ji;}catch(s){throw at(o),s}finally{Vi(c);}}else t!==null&&An(o);var l=r&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&(Ki|dn))===0;if(!l&&!i&&n&&(a!==null&&xs(o,a),re!==null&&re.f&$e)){var u=re;(u.children??(u.children=[])).push(o);}return o}function xi(e){const t=zt(xr,null,false);return He(t,we),t.teardown=e,t}function ni(e){ua();var t=X!==null&&(X.f&Be)!==0&&ee!==null&&!ee.m;if(t){var r=ee;(r.e??(r.e=[])).push({fn:e,effect:X,reaction:re});}else {var n=Cr(e);return n}}function Cs(e){return ua(),Er(e)}function Es(e){const t=zt(Dt,e,true);return (r={})=>new Promise(n=>{r.outro?hn(t,()=>{at(t),n(undefined);}):(at(t),n(undefined));})}function Cr(e){return zt(Qi,e,false)}function Pt(e,t){var r=ee,n={effect:null,ran:false};r.l.r1.push(n),n.effect=Er(()=>{e(),!n.ran&&(n.ran=true,P(r.l.r2,true),I(t));});}function Sn(){var e=ee;Er(()=>{if(v(e.l.r2)){for(var t of e.l.r1){var r=t.effect;r.f&we&&He(r,mt),qt(r)&&Tn(r),t.ran=false;}e.l.r2.v=false;}});}function Er(e){return zt(xr,e,true)}function G(e,t=[],r=gr){const n=t.map(r);return Ci(()=>e(...n.map(v)))}function Ci(e,t=0){return zt(xr|kn|t,e,true)}function mr(e,t=true){return zt(xr|Be,e,true,t)}function va(e){var t=e.teardown;if(t!==null){const r=ki,n=re;Ti(true),qe(null);try{t.call(null);}finally{Ti(r),qe(n);}}}function fa(e){var t=e.deriveds;if(t!==null){e.deriveds=null;for(var r=0;r<t.length;r+=1)wi(t[r]);}}function da(e,t=false){var r=e.first;for(e.first=e.last=null;r!==null;){var n=r.next;at(r,t),r=n;}}function ks(e){for(var t=e.first;t!==null;){var r=t.next;t.f&Be||at(t),t=r;}}function at(e,t=true){var r=false;if((t||e.f&Ga)&&e.nodes_start!==null){for(var n=e.nodes_start,i=e.nodes_end;n!==null;){var a=n===i?null:Nn(n);n.remove(),n=a;}r=true;}da(e,t&&!r),fa(e),yr(e,0),He(e,Ft);var o=e.transitions;if(o!==null)for(const l of o)l.stop();va(e);var c=e.parent;c!==null&&c.first!==null&&_a(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null;}function _a(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r));}function hn(e,t){var r=[];Ei(e,r,true),ha(r,()=>{at(e),t&&t();});}function ha(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var i of e)i.out(n);}else t();}function Ei(e,t,r){if(!(e.f&je)){if(e.f^=je,e.transitions!==null)for(const o of e.transitions)(o.is_global||r)&&t.push(o);for(var n=e.first;n!==null;){var i=n.next,a=(n.f&Ln)!==0||(n.f&Be)!==0;Ei(n,t,a?r:false),n=i;}}}function pn(e){pa(e,true);}function pa(e,t){if(e.f&je){e.f^=je,e.f&we||(e.f^=we),qt(e)&&(He(e,st),An(e));for(var r=e.first;r!==null;){var n=r.next,i=(r.f&Ln)!==0||(r.f&Be)!==0;pa(r,i?t:false),r=n;}if(e.transitions!==null)for(const a of e.transitions)(a.is_global||t)&&a.in();}}let ii=false,ai=[];function Ls(){ii=false;const e=ai.slice();ai=[],ti(e);}function $n(e){ii||(ii=true,queueMicrotask(Ls)),ai.push(e);}function Ms(){throw new Error("https://svelte.dev/e/invalid_default_snippet")}function ga(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let cn=false,gn=false,mn=null,St=false,ki=false;function Vi(e){St=e;}function Ti(e){ki=e;}let si=[],dr=0;let re=null,Je=false;function qe(e){re=e;}let X=null;function Pe(e){X=e;}let ze=null;function Ns(e){ze=e;}let ke=null,Ne=0,Ye=null;function Ss(e){Ye=e;}let ma=1,yn=0,dt=false,ee=null;function ya(){return ++ma}function kr(){return !jt||ee!==null&&ee.l===null}function qt(e){var u;var t=e.f;if(t&st)return  true;if(t&mt){var r=e.deps,n=(t&gt)!==0;if(r!==null){var i,a,o=(t&_n)!==0,c=n&&X!==null&&!dt,l=r.length;if(o||c){for(i=0;i<l;i++)a=r[i],(o||!((u=a==null?undefined:a.reactions)!=null&&u.includes(e)))&&(a.reactions??(a.reactions=[])).push(e);o&&(e.f^=_n);}for(i=0;i<l;i++)if(a=r[i],qt(a)&&ca(a),a.wv>e.wv)return  true}(!n||X!==null&&!dt)&&He(e,we);}return  false}function $s(e,t){for(var r=t;r!==null;){if(r.f&dn)try{r.fn(e);return}catch{r.f^=dn;}r=r.parent;}throw cn=false,e}function Vs(e){return (e.f&Ft)===0&&(e.parent===null||(e.parent.f&dn)===0)}function Vn(e,t,r,n){if(cn){if(r===null&&(cn=false),Vs(t))throw e;return}r!==null&&(cn=true);{$s(e,t);return}}function ba(e,t,r=0){var n=e.reactions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];a.f&$e?ba(a,t,r+1):t===a&&(r===0?He(a,st):a.f&we&&He(a,mt),An(a));}}function wa(e){var d;var t=ke,r=Ne,n=Ye,i=re,a=dt,o=ze,c=ee,l=Je,u=e.f;ke=null,Ne=0,Ye=null,re=u&(Be|Dt)?null:e,dt=!St&&(u&gt)!==0,ze=null,ee=e.ctx,Je=false,yn++;try{var s=(0,e.fn)(),h=e.deps;if(ke!==null){var f;if(yr(e,Ne),h!==null&&Ne>0)for(h.length=Ne+ke.length,f=0;f<ke.length;f++)h[Ne+f]=ke[f];else e.deps=h=ke;if(!dt)for(f=Ne;f<h.length;f++)((d=h[f]).reactions??(d.reactions=[])).push(e);}else h!==null&&Ne<h.length&&(yr(e,Ne),h.length=Ne);if(kr()&&Ye!==null&&!(e.f&($e|mt|st)))for(f=0;f<Ye.length;f++)ba(Ye[f],e);return i!==null&&yn++,s}finally{ke=t,Ne=r,Ye=n,re=i,dt=a,ze=o,ee=c,Je=l;}}function Ts(e,t){let r=t.reactions;if(r!==null){var n=ja.call(r,e);if(n!==-1){var i=r.length-1;i===0?r=t.reactions=null:(r[n]=r[i],r.pop());}}r===null&&t.f&$e&&(ke===null||!ke.includes(t))&&(He(t,mt),t.f&(gt|_n)||(t.f^=_n),yr(t,0));}function yr(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Ts(e,r[n]);}function Tn(e){var t=e.f;if(!(t&Ft)){He(e,we);var r=X,n=ee;X=e;try{t&kn?ks(e):da(e),fa(e),va(e);var i=wa(e);e.teardown=typeof i=="function"?i:null,e.wv=ma;var a=e.deps,o;}catch(c){Vn(c,e,r,n||e.ctx);}finally{X=r;}}}function As(){if(dr>1e3){dr=0;try{Ka();}catch(e){if(mn!==null)Vn(e,mn,null);else throw e}}dr++;}function Is(e){var t=e.length;if(t!==0){As();var r=St;St=true;try{for(var n=0;n<t;n++){var i=e[n];i.f&we||(i.f^=we);var a=[];xa(i,a),Ps(a);}}finally{St=r;}}}function Ps(e){var t=e.length;if(t!==0)for(var r=0;r<t;r++){var n=e[r];if(!(n.f&(Ft|je)))try{qt(n)&&(Tn(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?_a(n):n.fn=null));}catch(i){Vn(i,n,null,n.ctx);}}}function Hs(){if(gn=false,dr>1001)return;const e=si;si=[],Is(e),gn||(dr=0,mn=null);}function An(e){gn||(gn=true,queueMicrotask(Hs)),mn=e;for(var t=e;t.parent!==null;){t=t.parent;var r=t.f;if(r&(Dt|Be)){if(!(r&we))return;t.f^=we;}}si.push(t);}function xa(e,t){var r=e.first,n=[];e:for(;r!==null;){var i=r.f,a=(i&Be)!==0,o=a&&(i&we)!==0,c=r.next;if(!o&&!(i&je))if(i&xr){if(a)r.f^=we;else try{qt(r)&&Tn(r);}catch(h){Vn(h,r,null,r.ctx);}var l=r.first;if(l!==null){r=l;continue}}else i&Qi&&n.push(r);if(c===null){let h=r.parent;for(;h!==null;){if(e===h)break e;var u=h.next;if(u!==null){r=u;continue e}h=h.parent;}}r=c;}for(var s=0;s<n.length;s++)l=n[s],t.push(l),xa(l,t);}function v(e){var s;var t=e.f,r=(t&$e)!==0;if(r&&t&Ft){var n=la(e);return wi(e),n}if(re!==null&&!Je){ze!==null&&ze.includes(e)&&ns();var i=re.deps;e.rv<yn&&(e.rv=yn,ke===null&&i!==null&&i[Ne]===e?Ne++:ke===null?ke=[e]:ke.push(e));}else if(r&&e.deps===null)for(var a=e,o=a.parent,c=a;o!==null;)if(o.f&$e){var l=o;c=l,o=l.parent;}else {var u=o;(s=u.deriveds)!=null&&s.includes(c)||(u.deriveds??(u.deriveds=[])).push(c);break}return r&&(a=e,qt(a)&&ca(a)),e.v}function I(e){var t=Je;try{return Je=!0,e()}finally{Je=t;}}const Os=-7169;function He(e,t){e.f=e.f&Os|t;}function ot(e,t=false,r){ee={p:ee,c:null,e:null,m:false,s:e,x:null,l:null},jt&&!t&&(ee.l={s:null,u:null,r1:[],r2:Se(false)});}function lt(e){const t=ee;if(t!==null){e!==undefined&&(t.x=e);const o=t.e;if(o!==null){var r=X,n=re;t.e=null;try{for(var i=0;i<o.length;i++){var a=o[i];Pe(a.effect),qe(a.reaction),Cr(a.fn);}}finally{Pe(r),qe(n);}}ee=t.p,t.m=true;}return e||{}}function ft(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(pt in e)oi(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&pt in r&&oi(r);}}}function oi(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{oi(e[n],t);}catch{}const r=pi(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=Xi(r);for(let i in n){const a=n[i].get;if(a)try{a.call(e);}catch{}}}}}const Rs=["touchstart","touchmove"];function Ds(e){return Rs.includes(e)}let Ai=false;function Fs(){Ai||(Ai=true,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r);});},{capture:true}));}function Ca(e){var t=re,r=X;qe(null),Pe(null);try{return e()}finally{qe(t),Pe(r);}}function js(e,t,r,n=r){e.addEventListener(t,()=>Ca(r));const i=e.__on_r;i?e.__on_r=()=>{i(),n(true);}:e.__on_r=()=>n(true),Fs();}const zs=new Set,Ii=new Set;function qs(e,t,r,n={}){function i(a){if(n.capture||or.call(t,a),!a.cancelBubble)return Ca(()=>r==null?void 0:r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?$n(()=>{t.addEventListener(e,i,n);}):t.addEventListener(e,i,n),i}function W(e,t,r,n,i){var a={capture:n,passive:i},o=qs(e,t,r,a);(t===document.body||t===window||t===document)&&xi(()=>{t.removeEventListener(e,o,a);});}function or(e){var g;var t=this,r=t.ownerDocument,n=e.type,i=((g=e.composedPath)==null?undefined:g.call(e))||[],a=i[0]||e.target,o=0,c=e.__root;if(c){var l=i.indexOf(c);if(l!==-1&&(t===document||t===window)){e.__root=t;return}var u=i.indexOf(t);if(u===-1)return;l<=u&&(o=l);}if(a=i[o]||e.target,a!==t){Ui(e,"currentTarget",{configurable:true,get(){return a||r}});var s=re,h=X;qe(null),Pe(null);try{for(var f,d=[];a!==null;){var w=a.assignedSlot||a.parentNode||a.host||null;try{var m=a["__"+n];if(m!==void 0&&!a.disabled)if(En(m)){var[k,...$]=m;k.apply(a,[e,...$]);}else m.call(a,e);}catch(C){f?d.push(C):f=C;}if(e.cancelBubble||w===t||w===null)break;a=w;}if(f){for(let C of d)queueMicrotask(()=>{throw C});throw f}}finally{e.__root=t,delete e.currentTarget,qe(s),Pe(h);}}}function Ea(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function bn(e,t){var r=X;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t);}function H(e,t){var r=(t&ps)!==0,n=(t&gs)!==0,i,a=!e.startsWith("<!>");return ()=>{i===undefined&&(i=Ea(a?e:"<!>"+e),r||(i=It(i)));var o=n?document.importNode(i,true):i.cloneNode(true);if(r){var c=It(o),l=o.lastChild;bn(c,l);}else bn(o,o);return o}}function Bt(e,t,r="svg"){var n=!e.startsWith("<!>"),i=`<${r}>${n?e:"<!>"+e}</${r}>`,a;return ()=>{if(!a){var o=Ea(i),c=It(o);a=It(c);}var l=a.cloneNode(true);return bn(l,l),l}}function nt(){var e=document.createDocumentFragment(),t=document.createComment(""),r=bi();return e.append(t,r),bn(t,r),e}function M(e,t){e!==null&&e.before(t);}let li=true;function D(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"");}function br(e,t){return Bs(e,t)}const Et=new Map;function Bs(e,{target:t,anchor:r,props:n={},events:i,context:a,intro:o=true}){ys();var c=new Set,l=h=>{for(var f=0;f<h.length;f++){var d=h[f];if(!c.has(d)){c.add(d);var w=Ds(d);t.addEventListener(d,or,{passive:w});var m=Et.get(d);m===undefined?(document.addEventListener(d,or,{passive:w}),Et.set(d,1)):Et.set(d,m+1);}}};l(hi(zs)),Ii.add(l);var u=undefined,s=Es(()=>{var h=r??t.appendChild(bi());return mr(()=>{if(a){ot({});var f=ee;f.c=a;}i&&(n.$$events=i),li=o,u=e(h,n)||{},li=true,a&&lt();}),()=>{var w;for(var f of c){t.removeEventListener(f,or);var d=Et.get(f);--d===0?(document.removeEventListener(f,or),Et.delete(f)):Et.set(f,d);}Ii.delete(l),h!==r&&((w=h.parentNode)==null||w.removeChild(h));}});return Zs.set(u,s),u}let Zs=new WeakMap;function B(e,t,r=false){var n=e,i=null,a=null,o=Ee,c=r?Ln:0,l=false;const u=(h,f=true)=>{l=true,s(f,h);},s=(h,f)=>{o!==(o=h)&&(o?(i?pn(i):f&&(i=mr(()=>f(n))),a&&hn(a,()=>{a=null;})):(a?pn(a):f&&(a=mr(()=>f(n))),i&&hn(i,()=>{i=null;})));};Ci(()=>{l=false,t(u),l||s(null,null);},c);}let un=null;function lr(e,t){return t}function Ws(e,t,r,n){for(var i=[],a=t.length,o=0;o<a;o++)Ei(t[o].e,i,true);var c=a>0&&i.length===0&&r!==null;if(c){var l=r.parentNode;bs(l),l.append(r),n.clear(),et(e,t[0].prev,t[a-1].next);}ha(i,()=>{for(var u=0;u<a;u++){var s=t[u];c||(n.delete(s.k),et(e,s.prev,s.next)),at(s.e,!c);}});}function _t(e,t,r,n,i,a=null){var o=e,c={flags:t,items:new Map,first:null},l=(t&ra)!==0;if(l){var u=e;o=u.appendChild(bi());}var s=null,h=false,f=Ae(()=>{var d=r();return En(d)?d:d==null?[]:hi(d)});Ci(()=>{var d=v(f),w=d.length;if(!(h&&w===0)){h=w===0;{var m=re;Gs(d,c,o,i,t,(m.f&je)!==0,n,r);}a!==null&&(w===0?s?pn(s):s=mr(()=>a(o)):s!==null&&hn(s,()=>{s=null;})),v(f);}});}function Gs(e,t,r,n,i,a,o,c){var ie,ne,Ce,pe;var l=(i&ss)!==0,u=(i&(mi|yi))!==0,s=e.length,h=t.items,f=t.first,d=f,w,m=null,k,$=[],g=[],C,O,S,E;if(l)for(E=0;E<s;E+=1)C=e[E],O=o(C,E),S=h.get(O),S!==undefined&&((ie=S.a)==null||ie.measure(),(k??(k=new Set)).add(S));for(E=0;E<s;E+=1){if(C=e[E],O=o(C,E),S=h.get(O),S===undefined){var A=d?d.e.nodes_start:r;m=Us(A,t,m,m===null?t.first:m.next,C,O,E,n,i,c),h.set(O,m),$=[],g=[],d=m.next;continue}if(u&&Ys(S,C,E,i),S.e.f&je&&(pn(S.e),l&&((ne=S.a)==null||ne.unfix(),(k??(k=new Set)).delete(S))),S!==d){if(w!==undefined&&w.has(S)){if($.length<g.length){var b=g[0],x;m=b.prev;var L=$[0],R=$[$.length-1];for(x=0;x<$.length;x+=1)Pi($[x],b,r);for(x=0;x<g.length;x+=1)w.delete(g[x]);et(t,L.prev,R.next),et(t,m,L),et(t,R,b),d=b,m=R,E-=1,$=[],g=[];}else w.delete(S),Pi(S,d,r),et(t,S.prev,S.next),et(t,S,m===null?t.first:m.next),et(t,m,S),m=S;continue}for($=[],g=[];d!==null&&d.k!==O;)(a||!(d.e.f&je))&&(w??(w=new Set)).add(d),g.push(d),d=d.next;if(d===null)continue;S=d;}$.push(S),m=S,d=S.next;}if(d!==null||w!==undefined){for(var q=w===undefined?[]:hi(w);d!==null;)(a||!(d.e.f&je))&&q.push(d),d=d.next;var Q=q.length;if(Q>0){var oe=i&ra&&s===0?r:null;if(l){for(E=0;E<Q;E+=1)(Ce=q[E].a)==null||Ce.measure();for(E=0;E<Q;E+=1)(pe=q[E].a)==null||pe.fix();}Ws(t,q,oe,h);}}l&&$n(()=>{var F;if(k!==undefined)for(S of k)(F=S.a)==null||F.apply();}),X.first=t.first&&t.first.e,X.last=m&&m.e;}function Ys(e,t,r,n){n&mi&&ri(e.v,t),n&yi?ri(e.i,r):e.i=r;}function Us(e,t,r,n,i,a,o,c,l,u){var s=un,h=(l&mi)!==0,f=(l&os)===0,d=h?f?Mn(i):Se(i):i,w=l&yi?Se(o):o,m={i:w,v:d,k:a,a:null,e:null,prev:r,next:n};un=m;try{return m.e=mr(()=>c(e,d,w,u),ia),m.e.prev=r&&r.e,m.e.next=n&&n.e,r===null?t.first=m:(r.next=m,r.e.next=m.e),n!==null&&(n.prev=m,n.e.prev=m.e),m}finally{un=s;}}function Pi(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,i=t?t.e.nodes_start:r,a=e.e.nodes_start;a!==n;){var o=Nn(a);i.before(a),a=o;}}function et(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e);}function Hi(e,t,r,n,i){var c;var a=(c=t.$$slots)==null?undefined:c[r],o=false;a===true&&(a=t.children,o=true),a===undefined?i!==null&&i(e):a(e,o?()=>n:n);}function T(e,t,r,n){var i=e.__attributes??(e.__attributes={});i[t]!==(i[t]=r)&&(t==="style"&&"__styles"in e&&(e.__styles={}),t==="loading"&&(e[Ua]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Xs(e).includes(t)?e[t]=r:e.setAttribute(t,r));}var Oi=new Map;function Xs(e){var t=Oi.get(e.nodeName);if(t)return t;Oi.set(e.nodeName,t=[]);for(var r,n=e,i=Element.prototype;i!==n;){r=Xi(n);for(var a in r)r[a].set&&t.push(a);n=pi(n);}return t}function Ri(e,t,r){var n=e.__className,i=Qs(t);(n!==i||ia)&&(t==null?e.removeAttribute("class"):e.className=i,e.__className=i);}function Qs(e,t){return (e??"")+""}function cr(e,t,r){if(r){if(e.classList.contains(t))return;e.classList.add(t);}else {if(!e.classList.contains(t))return;e.classList.remove(t);}}function Xe(e,t,r,n){var i=e.__styles??(e.__styles={});i[t]!==r&&(i[t]=r,r==null?e.style.removeProperty(t):e.style.setProperty(t,r,""));}const Js=()=>performance.now(),Qe={tick:e=>requestAnimationFrame(e),now:()=>Js(),tasks:new Set};function ka(){const e=Qe.now();Qe.tasks.forEach(t=>{t.c(e)||(Qe.tasks.delete(t),t.f());}),Qe.tasks.size!==0&&Qe.tick(ka);}function Ks(e){let t;return Qe.tasks.size===0&&Qe.tick(ka),{promise:new Promise(r=>{Qe.tasks.add(t={c:e,f:r});}),abort(){Qe.tasks.delete(t);}}}function on(e,t){e.dispatchEvent(new CustomEvent(t));}function eo(e){if(e==="float")return "cssFloat";if(e==="offset")return "cssOffset";if(e.startsWith("--"))return e;const t=e.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function Di(e){const t={},r=e.split(";");for(const n of r){const[i,a]=n.split(":");if(!i||a===undefined)break;const o=eo(i.trim());t[o]=a.trim();}return t}const to=e=>e;function ro(e,t,r){var n=un,i,a,o,c=null;n.a??(n.a={element:e,measure(){i=this.element.getBoundingClientRect();},apply(){if(o==null||o.abort(),a=this.element.getBoundingClientRect(),i.left!==a.left||i.right!==a.right||i.top!==a.top||i.bottom!==a.bottom){const l=t()(this.element,{from:i,to:a},r==null?undefined:r());o=wn(this.element,l,undefined,1,()=>{o==null||o.abort(),o=undefined;});}},fix(){if(!e.getAnimations().length){var{position:l,width:u,height:s}=getComputedStyle(e);if(l!=="absolute"&&l!=="fixed"){var h=e.style;c={position:h.position,width:h.width,height:h.height,transform:h.transform},h.position="absolute",h.width=u,h.height=s;var f=e.getBoundingClientRect();if(i.left!==f.left||i.top!==f.top){var d=`translate(${i.left-f.left}px, ${i.top-f.top}px)`;h.transform=h.transform?`${h.transform} ${d}`:d;}}}},unfix(){if(c){var l=e.style;l.position=c.position,l.width=c.width,l.height=c.height,l.transform=c.transform;}}}),n.a.element=e;}function Ht(e,t,r,n){var i=(e&ds)!==0,a=(e&_s)!==0,o=i&&a,c=(e&hs)!==0,l=o?"both":i?"in":"out",u,s=t.inert,h=t.style.overflow,f,d;function w(){var C=re,O=X;qe(null),Pe(null);try{return u??(u=r()(t,(n==null?void 0:n())??{},{direction:l}))}finally{qe(C),Pe(O);}}var m={is_global:c,in(){var C;if(t.inert=s,!i){d==null||d.abort(),(C=d==null?undefined:d.reset)==null||C.call(d);return}a||f==null||f.abort(),on(t,"introstart"),f=wn(t,w(),d,1,()=>{on(t,"introend"),f==null||f.abort(),f=u=undefined,t.style.overflow=h;});},out(C){if(!a){C==null||C(),u=undefined;return}t.inert=true,on(t,"outrostart"),d=wn(t,w(),f,0,()=>{on(t,"outroend"),C==null||C();});},stop:()=>{f==null||f.abort(),d==null||d.abort();}},k=X;if((k.transitions??(k.transitions=[])).push(m),i&&li){var $=c;if(!$){for(var g=k.parent;g&&g.f&Ln;)for(;(g=g.parent)&&!(g.f&kn););$=!g||(g.f&Ji)!==0;}$&&Cr(()=>{I(()=>m.in());});}}function wn(e,t,r,n,i){var a=n===1;if(Ba(t)){var o,c=false;return $n(()=>{if(!c){var k=t({direction:a?"in":"out"});o=wn(e,k,r,n,i);}}),{abort:()=>{c=true,o==null||o.abort();},deactivate:()=>o.deactivate(),reset:()=>o.reset(),t:()=>o.t()}}if(r==null||r.deactivate(),!(t!=null&&t.duration))return i(),{abort:De,deactivate:De,reset:De,t:()=>n};const{delay:l=0,css:u,tick:s,easing:h=to}=t;var f=[];if(a&&r===undefined&&(s&&s(0,1),u)){var d=Di(u(0,1));f.push(d,d);}var w=()=>1-n,m=e.animate(f,{duration:l});return m.onfinish=()=>{var k=(r==null?undefined:r.t())??1-n;r==null||r.abort();var $=n-k,g=t.duration*Math.abs($),C=[];if(g>0){var O=false;if(u)for(var S=Math.ceil(g/16.666666666666668),E=0;E<=S;E+=1){var A=k+$*h(E/S),b=Di(u(A,1-A));C.push(b),O||(O=b.overflow==="hidden");}O&&(e.style.overflow="hidden"),w=()=>{var x=m.currentTime;return k+$*h(x/g)},s&&Ks(()=>{if(m.playState!=="running")return  false;var x=w();return s(x,1-x),true});}m=e.animate(C,{duration:g,fill:"forwards"}),m.onfinish=()=>{w=()=>n,s==null||s(n,1-n),i();};},{abort:()=>{m&&(m.cancel(),m.effect=null,m.onfinish=De);},deactivate:()=>{i=De;},reset:()=>{n===0&&(s==null||s(1,0));},t:()=>w()}}function ln(e,t,r=t){var n=kr();js(e,"input",i=>{var a=i?e.defaultValue:e.value;if(a=Jn(e)?Kn(a):a,r(a),n&&a!==(a=t())){var o=e.selectionStart,c=e.selectionEnd;e.value=a??"",c!==null&&(e.selectionStart=o,e.selectionEnd=Math.min(c,e.value.length));}}),I(t)==null&&e.value&&r(Jn(e)?Kn(e.value):e.value),Er(()=>{var i=t();Jn(e)&&i===Kn(e.value)||e.type==="date"&&!i&&!e.value||i!==e.value&&(e.value=i??"");});}function Jn(e){var t=e.type;return t==="number"||t==="range"}function Kn(e){return e===""?null:+e}function ei(e,t,r){var n=ht(e,t);n&&n.set&&(e[t]=r,xi(()=>{e[t]=null;}));}var rt,At,wr,xn,La;const Cn=class Cn{constructor(t){sr(this,xn);sr(this,rt,new WeakMap);sr(this,At);sr(this,wr);Qn(this,wr,t);}observe(t,r){var n=Ge(this,rt).get(t)||new Set;return n.add(r),Ge(this,rt).set(t,n),Si(this,xn,La).call(this).observe(t,Ge(this,wr)),()=>{var i=Ge(this,rt).get(t);i.delete(r),i.size===0&&(Ge(this,rt).delete(t),Ge(this,At).unobserve(t));}}};rt=new WeakMap,At=new WeakMap,wr=new WeakMap,xn=new WeakSet,La=function(){return Ge(this,At)??Qn(this,At,new ResizeObserver(t=>{for(var r of t){Cn.entries.set(r.target,r);for(var n of Ge(this,rt).get(r.target)||[])n(r);}}))},Ni(Cn,"entries",new WeakMap);let ci=Cn;var no=new ci({box:"border-box"});function Fi(e,t,r){var n=no.observe(e,()=>r(e[t]));Cr(()=>(I(()=>r(e[t])),n));}function ji(e,t){return e===t||(e==null?undefined:e[pt])===t}function tt(e={},t,r,n){return Cr(()=>{var i,a;return Er(()=>{i=a,a=[],I(()=>{e!==r(...a)&&(t(e,...a),i&&ji(r(...i),e)&&t(null,...i));});}),()=>{$n(()=>{a&&ji(r(...a),e)&&t(null,...a);});}}),e}function Ma(e){return function(...t){var r=t[0];r.target===this&&(e==null||e.apply(this,t));}}function $t(e){return function(...t){var r=t[0];return r.stopPropagation(),e==null?undefined:e.apply(this,t)}}function yt(e=false){const t=ee,r=t.l.u;if(!r)return;let n=()=>ft(t.s);if(e){let i=0,a={};const o=gr(()=>{let c=false;const l=t.s;for(const u in l)l[u]!==a[u]&&(a[u]=l[u],c=true);return c&&i++,i});n=()=>v(o);}r.b.length&&Cs(()=>{zi(t,n),ti(r.b);}),ni(()=>{const i=I(()=>r.m.map(Za));return ()=>{for(const a of i)typeof a=="function"&&a();}}),r.a.length&&ni(()=>{zi(t,n),ti(r.a);});}function zi(e,t){if(e.l.s)for(const r of e.l.s)v(r);t();}function io(e){var t=Se(0);return function(){return arguments.length===1?(P(t,v(t)+1),arguments[0]):(v(t),e())}}function qi(e,t){var a;var r=(a=e.$$events)==null?undefined:a[t.type],n=En(r)?r.slice():r==null?[]:[r];for(var i of n)i.call(this,t);}function Na(e,t,r){if(e==null)return t(undefined),De;const n=I(()=>e.subscribe(t,r));return n.unsubscribe?()=>n.unsubscribe():n}const kt=[];function In(e,t=De){let r=null;const n=new Set;function i(c){if(ta(e,c)&&(e=c,r)){const l=!kt.length;for(const u of n)u[1](),kt.push(u,e);if(l){for(let u=0;u<kt.length;u+=2)kt[u][0](kt[u+1]);kt.length=0;}}}function a(c){i(c(e));}function o(c,l=De){const u=[c,l];return n.add(u),n.size===1&&(r=t(i,a)||De),c(e),()=>{n.delete(u),n.size===0&&r&&(r(),r=null);}}return {set:i,update:a,subscribe:o}}function Sa(e){let t;return Na(e,r=>t=r)(),t}let ur=false,ui=Symbol();function se(e,t,r){const n=r[t]??(r[t]={store:null,source:Mn(undefined),unsubscribe:De});if(n.store!==e&&!(ui in r))if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=undefined,n.unsubscribe=De;else {var i=true;n.unsubscribe=Na(e,a=>{i?n.source.v=a:P(n.source,a);}),i=false;}return e&&ui in r?Sa(e):v(n.source)}function be(e,t){return e.set(t),t}function Zt(){const e={};function t(){xi(()=>{for(var r in e)e[r].unsubscribe();Ui(e,ui,{enumerable:false,value:true});});}return [e,t]}function he(e,t,r){return e.set(r),t}function Bi(){ur=true;}function ao(e){var t=ur;try{return ur=!1,[e(),ur]}finally{ur=t;}}function Zi(e){for(var t=X,r=X;t!==null&&!(t.f&(Be|Dt));)t=t.parent;try{return Pe(t),e()}finally{Pe(r);}}function fe(e,t,r,n){var A;var i=(r&ls)!==0,a=!jt||(r&cs)!==0,o=(r&vs)!==0,c=(r&fs)!==0,l=false,u;o?[u,l]=ao(()=>e[t]):u=e[t];var s=pt in e||Ya in e,h=o&&(((A=ht(e,t))==null?undefined:A.set)??(s&&t in e&&(b=>e[t]=b)))||undefined,f=n,d=true,w=false,m=()=>(w=true,d&&(d=false,c?f=I(n):f=n),f);u===undefined&&n!==undefined&&(h&&a&&es(),u=m(),h&&h(u));var k;if(a)k=()=>{var b=e[t];return b===undefined?m():(d=true,w=false,b)};else {var $=Zi(()=>(i?gr:Ae)(()=>e[t]));$.f|=Wa,k=()=>{var b=v($);return b!==undefined&&(f=undefined),b===undefined?f:b};}if(!(r&us))return k;if(h){var g=e.$$legacy;return function(b,x){return arguments.length>0?((!a||!x||g||l)&&h(x?k():b),b):k()}}var C=false,O=false,S=Mn(u),E=Zi(()=>gr(()=>{var b=k(),x=v(S);return C?(C=!1,O=!0,x):(O=!1,S.v=b)}));return i||(E.equals=gi),function(b,x){if(arguments.length>0){const L=x?v(E):a&&o?Mt(b):b;return E.equals(L)||(C=true,P(S,L),w&&f!==undefined&&(f=L),I(()=>v(E))),b}return v(E)}}function Pn(e){ee===null&&ga(),jt&&ee.l!==null?so(ee).m.push(e):ni(()=>{const t=I(e);if(typeof t=="function")return t});}function $a(e){ee===null&&ga(),Pn(()=>()=>I(e));}function so(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const oo="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(oo);as();const lo=e=>e;function Ot(e,{delay:t=0,duration:r=400,easing:n=lo}={}){const i=+getComputedStyle(e).opacity;return {delay:t,duration:r,easing:n,css:a=>`opacity: ${a*i}`}}function Lt(e,t=()=>{}){if(!e)return;const r=document.querySelector(e);if(r){t(r);return}new MutationObserver((i,a)=>{const o=document.querySelector(e);o&&(a.disconnect(),t(o));}).observe(document.documentElement,{childList:true,subtree:true});}function _r(e){if(typeof e=="string")try{const t=JSON.parse(e);return _r(t)}catch{return e}if(Array.isArray(e))return e.map(t=>_r(t));if(e!==null&&typeof e=="object"){const t={};for(const r in e)e.hasOwnProperty(r)&&(t[r]=_r(e[r]));return t}return e}function Ue(e){if(!e)return "inherit";let t=e.toString().trim();if(t.startsWith("var(")){const o=t.match(/var\(([^)]+)\)/);if(o){const c=o[1],l=getComputedStyle(document.documentElement).getPropertyValue(c).trim();if(l)t=l;else return "inherit"}}if(t.startsWith("rgba(")||t.startsWith("rgb(")){const o=t.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);if(o){const[,c,l,u]=o;return (parseInt(c)*299+parseInt(l)*587+parseInt(u)*114)/1e3<128?"white":"black"}}t=t.replace("#","");let r,n,i;if(t.length===3)r=parseInt(t[0]+t[0],16),n=parseInt(t[1]+t[1],16),i=parseInt(t[2]+t[2],16);else if(t.length===6)r=parseInt(t.substr(0,2),16),n=parseInt(t.substr(2,2),16),i=parseInt(t.substr(4,2),16);else if(t.length===8)r=parseInt(t.substr(0,2),16),n=parseInt(t.substr(2,2),16),i=parseInt(t.substr(4,2),16);else return "inherit";return (r*299+n*587+i*114)/1e3<128?"white":"black"}const Va="Kesa:Fall",Wi=()=>{try{return _r(localStorage.getItem(Va))??{}}catch{return {}}},Fe=(e,t)=>{const r=Wi(),n=e in r?r[e]:t,{subscribe:i,set:a,update:o}=In(n);return i(c=>{const l=Wi();localStorage.setItem(Va,JSON.stringify({...l,[e]:c}));}),{subscribe:i,set:c=>{typeof c=="function"?o(c):a(c);},update:o}},vn=In(0),Ta=In(""),hr=Fe("_isFallView",true),vr=In(0),vi=Fe("_panelPos",{x:0,y:0}),fi=Fe("_show_hover_pic",1),fr=Fe("_card_layout",{min:300,max:600,gap:8}),Te=Fe("_card_detail",{all:false,category:true,title:false,topping:true,free:true,size:true,sub_title:false,tags:false,download_collect:false,upload_time:false,statistics:false}),co=Fe("_show_nexus_pic",1),di=Fe("_block_gay",1),fn=Fe("_card_radius",{enabled:false,value:16}),Aa=Fe("_mt_label",{}),Ia=Fe("_mt_categories",{}),Nt=Fe("_textColor",{t1:"black",t2:"black",t3:"black"});function uo(e={path:"/search",method:"POST"}){const t=XMLHttpRequest.prototype.open,r=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.open=function(n,i){return this._requestMetadata={method:n.toUpperCase(),url:i,isTarget:i.includes(e.path)&&n.toUpperCase()===e.method},t.apply(this,arguments)},XMLHttpRequest.prototype.send=function(n){var i;if((i=this._requestMetadata)!=null&&i.isTarget){const a=this.onreadystatechange,o=this.onload;this.addEventListener("readystatechange",()=>{this.readyState===4&&this._captureResponseData(),a==null||a.call(this);}),this.onload=u=>{this._captureResponseData(),o==null||o.call(this,u);};const c={url:this._requestMetadata.url,body:n instanceof Document?n.documentElement.outerHTML:n},l=new CustomEvent(`req>${e.method}->${e.path}`,{detail:c});window.dispatchEvent(l);}return r.apply(this,arguments)},XMLHttpRequest.prototype._captureResponseData=function(){if(!this._hasCaptured&&this._requestMetadata.isTarget){try{const n={status:this.status,headers:this.getAllResponseHeaders(),data:this._parseResponse()},i=new CustomEvent(`res>${e.method}->${e.path}`,{detail:n});window.dispatchEvent(i);}catch(n){console.error("<PT-Fall> Capture failed:",n);}this._hasCaptured=true;}},XMLHttpRequest.prototype._parseResponse=function(){var n;try{switch(this.responseType){case "json":return this.response;case "document":return (n=this.responseXML)==null?void 0:n.documentElement.outerHTML;case "arraybuffer":return new Uint8Array(this.response);case "blob":return URL.createObjectURL(this.response);default:return this.responseText}}catch{return this.responseText}};}function vo(e){const t=e-1;return t*t*t+1}function fo(e,{from:t,to:r},n={}){var{delay:i=0,duration:a=E=>Math.sqrt(E)*120,easing:o=vo}=n,c=getComputedStyle(e),l=c.transform==="none"?"":c.transform,[u,s]=c.transformOrigin.split(" ").map(parseFloat);u/=e.clientWidth,s/=e.clientHeight;var h=_o(e),f=e.clientWidth/r.width/h,d=e.clientHeight/r.height/h,w=t.left+t.width*u,m=t.top+t.height*s,k=r.left+r.width*u,$=r.top+r.height*s,g=(w-k)*f,C=(m-$)*d,O=t.width/r.width,S=t.height/r.height;return {delay:i,duration:typeof a=="function"?a(Math.sqrt(g*g+C*C)):a,easing:o,css:(E,A)=>{var b=A*g,x=A*C,L=E+A*O,R=E+A*S;return `transform: ${l} translate(${b}px, ${x}px) scale(${L}, ${R});`}}}function _o(e){if("currentCSSZoom"in e)return e.currentCSSZoom;for(var t=e,r=1;t!==null;)r*=+getComputedStyle(t).zoom,t=t.parentElement;return r}var ho=H('<span class="svelte-b2jtby"> </span>'),po=H('<div class="svelte-b2jtby"><!></div>'),go=H('<span class="svelte-b2jtby"> </span>'),mo=H("<div><!></div>"),yo=H("<div></div>");function bo(e,t){ot(t,false);const r=te(),n=te();let i=fe(t,"animate",8,true),a=fe(t,"columnClass",24,()=>""),o=fe(t,"duration",8,200),c=fe(t,"gap",8,20),l=fe(t,"getId",8,g=>typeof g=="number"||typeof g=="string"?g:g[u()]),u=fe(t,"idKey",24,()=>"id"),s=fe(t,"items",8),h=fe(t,"masonryHeight",12,0),f=fe(t,"masonryWidth",12,0),d=fe(t,"maxColWidth",8,500),w=fe(t,"minColWidth",8,330),m=fe(t,"style",24,()=>""),k=fe(t,"class",24,()=>"");Pt(()=>(ft(s()),ft(f()),ft(w()),ft(c())),()=>{P(r,Math.min(s().length,Math.floor(f()/(w()+c()))||1));}),Pt(()=>(ft(s()),v(r)),()=>{P(n,s().reduce((g,C,O)=>(g[O%g.length].push([C,O]),g),Array(v(r)).fill(null).map(()=>[])));}),Sn(),yt();var $=yo();_t($,5,()=>v(n),lr,(g,C)=>{var O=mo(),S=_(O);{var E=b=>{var x=nt(),L=Le(x);_t(L,9,()=>v(C),([R,q])=>l()(R),(R,q)=>{let Q=()=>v(q)[0],oe=()=>v(q)[1];var ie=po(),ne=_(ie);Hi(ne,t,"default",{get idx(){return oe()},get item(){return Q()}},Ce=>{var pe=ho(),F=_(pe);G(()=>D(F,Q())),M(Ce,pe);}),Ht(1,ie,()=>Ot,()=>({delay:100,duration:o()})),Ht(2,ie,()=>Ot,()=>({delay:0,duration:o()})),ro(ie,()=>fo,()=>({duration:o()})),M(R,ie);}),M(b,x);},A=b=>{var x=nt(),L=Le(x);_t(L,1,()=>v(C),([R,q])=>l()(R),(R,q)=>{let Q=()=>v(q)[0],oe=()=>v(q)[1];var ie=nt(),ne=Le(ie);Hi(ne,t,"default",{get idx(){return oe()},get item(){return Q()}},Ce=>{var pe=go(),F=_(pe);G(()=>D(F,Q())),M(Ce,pe);}),M(R,ie);}),M(b,x);};B(S,b=>{i()?b(E):b(A,false);});}G(()=>{Ri(O,`col ${a()??""} svelte-b2jtby`),T(O,"style",`gap: ${c()??""}px; max-width: ${d()??""}px;`);}),M(g,O);}),G(()=>{Ri($,`masonry ${k()??""} svelte-b2jtby`),T($,"style",`gap: ${c()??""}px; ${m()??""}`);}),Fi($,"clientWidth",f),Fi($,"clientHeight",h),M(e,$),lt();}var Ie=function(){return Ie=Object.assign||function(t){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);}return t},Ie.apply(this,arguments)},wo=function(){function e(t){this.options=t,this.listeners={};}return e.prototype.on=function(t,r){var n=this.listeners[t]||[];this.listeners[t]=n.concat([r]);},e.prototype.triggerEvent=function(t,r){var n=this,i=this.listeners[t]||[];i.forEach(function(a){return a({target:n,event:r})});},e}(),Rt;(function(e){e[e.Add=0]="Add",e[e.Remove=1]="Remove";})(Rt||(Rt={}));var xo=function(){function e(){this.notifications=[];}return e.prototype.push=function(t){this.notifications.push(t),this.updateFn(t,Rt.Add,this.notifications);},e.prototype.splice=function(t,r){var n=this.notifications.splice(t,r)[0];return this.updateFn(n,Rt.Remove,this.notifications),n},e.prototype.indexOf=function(t){return this.notifications.indexOf(t)},e.prototype.onUpdate=function(t){this.updateFn=t;},e}(),it;(function(e){e.Dismiss="dismiss",e.Click="click";})(it||(it={}));var Gi={types:[{type:"success",className:"notyf__toast--success",backgroundColor:"#3dc763",icon:{className:"notyf__icon--success",tagName:"i"}},{type:"error",className:"notyf__toast--error",backgroundColor:"#ed3d3d",icon:{className:"notyf__icon--error",tagName:"i"}}],duration:2e3,ripple:true,position:{x:"right",y:"bottom"},dismissible:false},Co=function(){function e(){this.notifications=[],this.events={},this.X_POSITION_FLEX_MAP={left:"flex-start",center:"center",right:"flex-end"},this.Y_POSITION_FLEX_MAP={top:"flex-start",center:"center",bottom:"flex-end"};var t=document.createDocumentFragment(),r=this._createHTMLElement({tagName:"div",className:"notyf"});t.appendChild(r),document.body.appendChild(t),this.container=r,this.animationEndEventName=this._getAnimationEndEventName(),this._createA11yContainer();}return e.prototype.on=function(t,r){var n;this.events=Ie(Ie({},this.events),(n={},n[t]=r,n));},e.prototype.update=function(t,r){r===Rt.Add?this.addNotification(t):r===Rt.Remove&&this.removeNotification(t);},e.prototype.removeNotification=function(t){var r=this,n=this._popRenderedNotification(t),i;if(n){i=n.node,i.classList.add("notyf__toast--disappear");var a;i.addEventListener(this.animationEndEventName,a=function(o){o.target===i&&(i.removeEventListener(r.animationEndEventName,a),r.container.removeChild(i));});}},e.prototype.addNotification=function(t){var r=this._renderNotification(t);this.notifications.push({notification:t,node:r}),this._announce(t.options.message||"Notification");},e.prototype._renderNotification=function(t){var r,n=this._buildNotificationCard(t),i=t.options.className;return i&&(r=n.classList).add.apply(r,i.split(" ")),this.container.appendChild(n),n},e.prototype._popRenderedNotification=function(t){for(var r=-1,n=0;n<this.notifications.length&&r<0;n++)this.notifications[n].notification===t&&(r=n);if(r!==-1)return this.notifications.splice(r,1)[0]},e.prototype.getXPosition=function(t){var r;return ((r=t==null?undefined:t.position)===null||r===undefined?undefined:r.x)||"right"},e.prototype.getYPosition=function(t){var r;return ((r=t==null?undefined:t.position)===null||r===undefined?undefined:r.y)||"bottom"},e.prototype.adjustContainerAlignment=function(t){var r=this.X_POSITION_FLEX_MAP[this.getXPosition(t)],n=this.Y_POSITION_FLEX_MAP[this.getYPosition(t)],i=this.container.style;i.setProperty("justify-content",n),i.setProperty("align-items",r);},e.prototype._buildNotificationCard=function(t){var r=this,n=t.options,i=n.icon;this.adjustContainerAlignment(n);var a=this._createHTMLElement({tagName:"div",className:"notyf__toast"}),o=this._createHTMLElement({tagName:"div",className:"notyf__ripple"}),c=this._createHTMLElement({tagName:"div",className:"notyf__wrapper"}),l=this._createHTMLElement({tagName:"div",className:"notyf__message"});l.innerHTML=n.message||"";var u=n.background||n.backgroundColor;if(i){var s=this._createHTMLElement({tagName:"div",className:"notyf__icon"});if((typeof i=="string"||i instanceof String)&&(s.innerHTML=new String(i).valueOf()),typeof i=="object"){var h=i.tagName,f=h===undefined?"i":h,d=i.className,w=i.text,m=i.color,k=m===undefined?u:m,$=this._createHTMLElement({tagName:f,className:d,text:w});k&&($.style.color=k),s.appendChild($);}c.appendChild(s);}if(c.appendChild(l),a.appendChild(c),u&&(n.ripple?(o.style.background=u,a.appendChild(o)):a.style.background=u),n.dismissible){var g=this._createHTMLElement({tagName:"div",className:"notyf__dismiss"}),C=this._createHTMLElement({tagName:"button",className:"notyf__dismiss-btn"});g.appendChild(C),c.appendChild(g),a.classList.add("notyf__toast--dismissible"),C.addEventListener("click",function(S){var E,A;(A=(E=r.events)[it.Dismiss])===null||A===undefined||A.call(E,{target:t,event:S}),S.stopPropagation();});}a.addEventListener("click",function(S){var E,A;return (A=(E=r.events)[it.Click])===null||A===undefined?undefined:A.call(E,{target:t,event:S})});var O=this.getYPosition(n)==="top"?"upper":"lower";return a.classList.add("notyf__toast--"+O),a},e.prototype._createHTMLElement=function(t){var r=t.tagName,n=t.className,i=t.text,a=document.createElement(r);return n&&(a.className=n),a.textContent=i||null,a},e.prototype._createA11yContainer=function(){var t=this._createHTMLElement({tagName:"div",className:"notyf-announcer"});t.setAttribute("aria-atomic","true"),t.setAttribute("aria-live","polite"),t.style.border="0",t.style.clip="rect(0 0 0 0)",t.style.height="1px",t.style.margin="-1px",t.style.overflow="hidden",t.style.padding="0",t.style.position="absolute",t.style.width="1px",t.style.outline="0",document.body.appendChild(t),this.a11yContainer=t;},e.prototype._announce=function(t){var r=this;this.a11yContainer.textContent="",setTimeout(function(){r.a11yContainer.textContent=t;},100);},e.prototype._getAnimationEndEventName=function(){var t=document.createElement("_fake"),r={MozTransition:"animationend",OTransition:"oAnimationEnd",WebkitTransition:"webkitAnimationEnd",transition:"animationend"},n;for(n in r)if(t.style[n]!==undefined)return r[n];return "animationend"},e}(),Pa=function(){function e(t){var r=this;this.dismiss=this._removeNotification,this.notifications=new xo,this.view=new Co;var n=this.registerTypes(t);this.options=Ie(Ie({},Gi),t),this.options.types=n,this.notifications.onUpdate(function(i,a){return r.view.update(i,a)}),this.view.on(it.Dismiss,function(i){var a=i.target,o=i.event;r._removeNotification(a),a.triggerEvent(it.Dismiss,o);}),this.view.on(it.Click,function(i){var a=i.target,o=i.event;return a.triggerEvent(it.Click,o)});}return e.prototype.error=function(t){var r=this.normalizeOptions("error",t);return this.open(r)},e.prototype.success=function(t){var r=this.normalizeOptions("success",t);return this.open(r)},e.prototype.open=function(t){var r=this.options.types.find(function(a){var o=a.type;return o===t.type})||{},n=Ie(Ie({},r),t);this.assignProps(["ripple","position","dismissible"],n);var i=new wo(n);return this._pushNotification(i),i},e.prototype.dismissAll=function(){for(;this.notifications.splice(0,1););},e.prototype.assignProps=function(t,r){var n=this;t.forEach(function(i){r[i]=r[i]==null?n.options[i]:r[i];});},e.prototype._pushNotification=function(t){var r=this;this.notifications.push(t);var n=t.options.duration!==undefined?t.options.duration:this.options.duration;n&&setTimeout(function(){return r._removeNotification(t)},n);},e.prototype._removeNotification=function(t){var r=this.notifications.indexOf(t);r!==-1&&this.notifications.splice(r,1);},e.prototype.normalizeOptions=function(t,r){var n={type:t};return typeof r=="string"?n.message=r:typeof r=="object"&&(n=Ie(Ie({},n),r)),n},e.prototype.registerTypes=function(t){var r=(t&&t.types||[]).slice(),n=Gi.types.map(function(i){var a=-1;r.forEach(function(c,l){c.type===i.type&&(a=l);});var o=a!==-1?r.splice(a,1)[0]:{};return Ie(Ie({},i),o)});return n.concat(r)},e}();new Pa({duration:5e3,dismissible:true});const Vt=new Pa({duration:3e3,dismissible:true,position:{x:"left",y:"top"},types:[{type:"warning",background:"orange",icon:false}]}),Eo="data:image/svg+xml,%3csvg%20stroke='currentColor'%20fill='currentColor'%20stroke-width='0'%20viewBox='0%200%2024%2024'%20height='25'%20width='25'%20xmlns='http://www.w3.org/2000/svg'%20style='%20vertical-align:%20middle;%20--darkreader-inline-fill:%20currentColor;%20--darkreader-inline-stroke:%20currentColor;'%20%3e%3cpath%20d='M12%205c-3.859%200-7%203.141-7%207s3.141%207%207%207%207-3.141%207-7-3.141-7-7-7zm0%2012c-2.757%200-5-2.243-5-5s2.243-5%205-5%205%202.243%205%205-2.243%205-5%205z'%3e%3c/path%3e%3cpath%20d='M12%209c-1.627%200-3%201.373-3%203s1.373%203%203%203%203-1.373%203-3-1.373-3-3-3z'%3e%3c/path%3e%3c/svg%3e",ko="data:image/svg+xml,%3csvg%20viewBox='64%2064%20896%20896'%20focusable='false'%20data-icon='arrow-up'%20width='1em'%20height='1em'%20fill='green'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M868%20545.5L536.1%20163a31.96%2031.96%200%2000-48.3%200L156%20545.5a7.97%207.97%200%20006%2013.2h81c4.6%200%209-2%2012.1-5.5L474%20300.9V864c0%204.4%203.6%208%208%208h60c4.4%200%208-3.6%208-8V300.9l218.9%20252.3c3%203.5%207.4%205.5%2012.1%205.5h81c6.8%200%2010.5-8%206-13.2z'%3e%3c/path%3e%3c/svg%3e",Lo="data:image/svg+xml,%3csvg%20viewBox='64%2064%20896%20896'%20focusable='false'%20data-icon='arrow-down'%20width='1em'%20height='1em'%20fill='red'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M862%20465.3h-81c-4.6%200-9%202-12.1%205.5L550%20723.1V160c0-4.4-3.6-8-8-8h-60c-4.4%200-8%203.6-8%208v563.1L255.1%20470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8%200-10.5%208.1-6%2013.2L487.9%20861a31.96%2031.96%200%200048.3%200L868%20478.5c4.5-5.2.8-13.2-6-13.2z'%3e%3c/path%3e%3c/svg%3e",Mo="data:image/svg+xml,%3csvg%20viewBox='64%2064%20896%20896'%20focusable='false'%20data-icon='download'%20width='1em'%20height='1em'%20fill='currentColor'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M505.7%20661a8%208%200%200012.6%200l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4%200-8%203.6-8%208v338.3H400c-6.7%200-10.4%207.7-6.3%2012.9l112%20141.8zM878%20626h-60c-4.4%200-8%203.6-8%208v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4%200-8%203.6-8%208v198c0%2017.7%2014.3%2032%2032%2032h684c17.7%200%2032-14.3%2032-32V634c0-4.4-3.6-8-8-8z'%3e%3c/path%3e%3c/svg%3e",No="data:image/svg+xml,%3csvg%20viewBox='64%2064%20896%20896'%20focusable='false'%20data-icon='star'%20width='1em'%20height='1em'%20fill='currentColor'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M908.1%20353.1l-253.9-36.9L540.7%2086.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9%2014.5L369.8%20316.2l-253.9%2036.9c-7%201-13.4%204.3-18.3%209.3a32.05%2032.05%200%2000.6%2045.3l183.7%20179.1-43.4%20252.9a31.95%2031.95%200%200046.4%2033.7L512%20754l227.1%20119.4c6.2%203.3%2013.4%204.4%2020.3%203.2%2017.4-3%2029.1-19.5%2026.1-36.9l-43.4-252.9%20183.7-179.1c5-4.9%208.3-11.3%209.3-18.3%202.7-17.5-9.5-33.7-27-36.3z'%3e%3c/path%3e%3c/svg%3e",So="data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cstyle%3e%20.cls-1{fill:%232eb1b7;}%20.cls-2{fill:%2356b54e;}%20.cls-3{fill:%235dc6d1;}%20.cls-4{fill:%2360cc5a;}%20.cls-5{fill:%23ffce69;}%20.cls-6{fill:%236c2e7c;}%20%3c/style%3e%3c/defs%3e%3cg%20id='Icons'%3e%3crect%20class='cls-1'%20height='22'%20rx='4'%20width='22'%20x='1'%20y='1'/%3e%3cpath%20class='cls-2'%20d='M23,18v1a4,4,0,0,1-4,4H5a4,4,0,0,1-3.9-3.1l7.19-7.19a1.008,1.008,0,0,1,1.42,0l1.8,1.8a1,1,0,0,0,1.46-.05l2.33-2.65a1,1,0,0,1,1.46-.05Z'/%3e%3cpath%20class='cls-3'%20d='M23,5v9a4.025,4.025,0,0,1-1.17,2.83l-5.07-5.07a1,1,0,0,0-1.46.05l-2.33,2.65a1,1,0,0,1-1.46.05l-1.8-1.8a1.008,1.008,0,0,0-1.42,0L3.36,17.64A3.988,3.988,0,0,1,1,14V5A4,4,0,0,1,5,1H19A4,4,0,0,1,23,5Z'/%3e%3cpath%20class='cls-4'%20d='M21.83,16.83A4.025,4.025,0,0,1,19,18H5a3.931,3.931,0,0,1-1.64-.36l4.93-4.93a1.008,1.008,0,0,1,1.42,0l1.8,1.8a1,1,0,0,0,1.46-.05l2.33-2.65a1,1,0,0,1,1.46-.05Z'/%3e%3ccircle%20class='cls-5'%20cx='7'%20cy='7'%20r='2'/%3e%3c/g%3e%3cg%20data-name='Layer%204'%20id='Layer_4'%3e%3cpath%20class='cls-6'%20d='M19,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,19,0Zm3,19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3Z'/%3e%3cpath%20class='cls-6'%20d='M7,10A3,3,0,1,0,4,7,3,3,0,0,0,7,10ZM7,6A1,1,0,1,1,6,7,1,1,0,0,1,7,6Z'/%3e%3cpath%20class='cls-6'%20d='M16.707,10.293a.956.956,0,0,0-.74-.293,1.006,1.006,0,0,0-.72.341L12.217,13.8l-2.51-2.511a1,1,0,0,0-1.414,0l-4,4a1,1,0,1,0,1.414,1.414L9,13.414l1.9,1.9L8.247,18.341a1,1,0,0,0,1.506,1.318l3.218-3.678.006,0,.007-.011,3.065-3.5,2.244,2.244a1,1,0,0,0,1.414-1.414Z'/%3e%3c/g%3e%3c/svg%3e",z="https://static.m-team.cc/static/cate/",Tt={architecture:"Mteam",TL_Selector:"div.app-content__inner",LOADING_PIC:"/static/media/logo.80b63235eaf702e44a8d.png",HOST:"https://test2.m-team.cc",API:{search:{url:"/search",fullUrl:"/api/torrent/search",method:"POST"}},ICON:{SIZE:Eo,SEEDERS:ko,LEECHERS:Lo,DOWNLOAD:Mo,COLLECTION:No,PIN:"/static/trans.gif",PREVIEW:So},CATEGORY:{401:{src:z+"moviesd.png",alt:"電影/SD",color:"#c74854"},402:{src:z+"tvhd.png",alt:"影劇/綜藝/HD",color:"#276fb8"},403:{src:z+"tvsd.png",alt:"影劇/綜藝/SD",color:"#c74854"},404:{src:z+"bbc.png",alt:"紀錄",color:"#23ac38"},405:{src:z+"anime.png",alt:"動畫",color:"#996c34"},406:{src:z+"mv.png",alt:"演唱",color:"#8a57a1"},407:{src:z+"sport.png",alt:"運動",color:"#23ac38"},409:{src:z+"other.png",alt:"Misc(其他)",color:"#996c34"},419:{src:z+"moviehd.png",alt:"電影/HD",color:"#c01a20"},420:{src:z+"moviedvd.png",alt:"電影/DVDiSo",color:"#c74854"},421:{src:z+"moviebd.png",alt:"電影/Blu-Ray",color:"#00a0e9"},422:{src:z+"software.png",alt:"軟體",color:"#f39800"},423:{src:z+"game-pc-3.jpeg",alt:"PC遊戲",color:"#f39800"},427:{src:z+"Study.png",alt:"教育(書面)",color:"#7FC269"},434:{src:z+"flac.png",alt:"Music(無損)",color:"#8a57a1"},435:{src:z+"tvdvd.png",alt:"影劇/綜藝/DVDiSo",color:"#4dbebd"},438:{src:z+"tvbd.png",alt:"影劇/綜藝/BD",color:"#1897d6"},439:{src:z+"movieremux.png",alt:"電影/Remux",color:"#1b2a51"},451:{src:z+"Study_Video.png",alt:"教育(影片)",color:"#7FC269"},442:{src:z+"Study_Audio.png",alt:"有聲書",color:"#7FC269"},448:{src:z+"pcgame.png",alt:"TV遊戲",color:"#f39800"},410:{src:z+"cenhd.png",alt:"AV(有碼)/HD Censored",color:"#F520CB"},411:{src:z+"hgame.png",alt:"H-遊戲",color:"#f49800"},412:{src:z+"hanime.png",alt:"H-動畫",color:"#f49800"},413:{src:z+"hcomic.png",alt:"H-漫畫",color:"#f49800"},424:{src:z+"censd.png",alt:"AV(有碼)/SD Censored",color:"#DA55A9"},425:{src:z+"ivvideo.png",alt:"IV(寫真影集)",color:"#bb1e9a"},426:{src:z+"uendvd.png",alt:"AV(無碼)/DVDiSo Uncensored",color:"#f77afa"},429:{src:z+"uenhd.png",alt:"AV(無碼)/HD Uncensored",color:"#f52bcb"},430:{src:z+"uensd.png",alt:"AV(無碼)/SD Uncensored",color:"#db55a9"},431:{src:z+"cenbd.png",alt:"AV(有碼)/Blu-Ray Censored",color:"#19a7ec"},432:{src:z+"uenbd.png",alt:"AV(無碼)/Blu-Ray Uncensored",color:"#19a7ec"},433:{src:z+"ivpic.png",alt:"IV(寫真圖集)",color:"#bb1e9a"},436:{src:z+"adult0day.png",alt:"AV(網站)/0Day",color:"#bb1e9a"},437:{src:z+"cendvd.png",alt:"AV(有碼)/DVDiSo Censored",color:"#f77afa"},440:{src:z+"gayhd.gif",alt:"AV(Gay)/HD",color:"#f52bcb"}},TAG:{"4k":{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},"8k":{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},hdr:{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},hdr10:{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},"hdr10+":{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},hlg:{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},DoVi:{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},HDRVi:{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},中字:{color:"#ad2a2a",bgColor:"#d14a4a2e"},中配:{color:"#5b3991",bgColor:"#5b399129"}},INDEX:0,Iframe_Width:1260,get_bg_color:function(){return getComputedStyle(document.documentElement).getPropertyValue("--bg-3")},special:function(){let e=$o(),t=Vo();return e&&t},pageLoaded:function(){}};function $o(){const e=Array.from(document.querySelectorAll(".ant-table-row-level-0 .ant-col a[href]"));return e.forEach(function(t){t.addEventListener("click",function(r){r.preventDefault(),_iframe_switch.set(1),_iframe_url.set(t.href);});}),e.length}function Vo(){document.querySelectorAll(".ant-image-mask").forEach(r=>{r.remove();});const t=Array.from(document.querySelectorAll(".torrent-list__thumbnail"));return t.forEach(r=>{r.classList+=" preview_Origin";}),t.length}const Li=".preview_Origin";document.body.addEventListener("mouseover",function(e){if(e.target.matches(Li)){const t=e,r=e.target;handleMouseOver(t,r);}});document.body.addEventListener("mouseout",function(e){e.target.matches(Li)&&handleMouseOut(e);});document.body.addEventListener("mousemove",function(e){if(e.target.matches(Li)){const t=e.target;handleMouseMove(e,t);}});var To=Bt('<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="18" width="18" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle;"><path d="M7 7h10v2H7zm0 4h7v2H7z"></path><path d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"></path></svg>');function Yi(e){var t=To();M(e,t);}class Ao{constructor(){this.container=null,this.imgElements=null,this.init();}init(){this.container=document.querySelector(".kp_container")||this.createPreview(),document.body.appendChild(this.container);}createPreview(){const t=document.createElement("div");t.className="kp_container",t.style.backgroundColor="rgba(0,0,0,0.8)",t.style.opacity="1",t.style.position="fixed",t.style.zIndex="10000",t.style.pointerEvents="none",t.style.transition="all .3s",t.style.display="none";const r=document.createElement("img");r.className="kp_img",r.style.position="absolute",r.style.zIndex="10002",r.style.pointerEvents="none",r.style.width="100%",r.style.height="100%",r.style.objectFit="contain",t.appendChild(r);const n=document.createElement("img");return n.className="kp_img",n.style.position="absolute",n.style.zIndex="10001",n.style.pointerEvents="none",n.style.width="100%",n.style.height="100%",n.style.objectFit="cover",n.style.filter="blur(8px)",n.style.opacity="0.9",t.appendChild(n),t}handleMouseOver(t,r){if(this.container){if(!r){console.warn("[FALL]: imgEle is null");return}if(Sa(co)){const n=r.getAttribute("src");n&&(document.querySelectorAll(".kp_img").forEach(a=>{a.setAttribute("src",n);}),this.imgElements=r,this.updatePosition(t),this.container.style.display="block");}}}handleMouseMove(t){this.container&&this.container.style.display==="block"&&this.updatePosition(t);}updatePosition(t){const r=this.previewPosition(t);this.container.style.left=r.left,this.container.style.top=r.top,this.container.style.width=r.width,this.container.style.height=r.height;}previewPosition(t){let r=0,n=0;try{r=this.imgElements.naturalWidth,n=this.imgElements.naturalHeight;}catch{}const i=t.clientX,a=t.clientY,o=window.innerWidth,c=window.innerHeight,l={bot:{width:o,height:window.innerHeight-a},top:{width:o,height:a},right:{width:window.innerWidth-i,height:c},left:{width:i,height:c}};let u=0,s="";const h={top:{left:0,top:0,width:o+"px",height:a+"px"},bot:{left:0,top:a+"px",width:o+"px",height:window.innerHeight-a+"px"},left:{left:0,top:0,width:i+"px",height:c+"px"},right:{left:i+"px",top:0,width:window.innerWidth-i+"px",height:c+"px"}};for(const f in l){const d=Math.min(l[f].width/r,l[f].height/n);d>u&&(u=d,s=f);}return h[s]||{left:0,top:0,width:0,height:0}}clearPreview(){document.querySelectorAll(".kp_img").forEach(t=>{t.setAttribute("src","");}),this.container&&(this.container.style.display="none");}destroy(){this.container&&(this.container.style.display="none",clearPreview());}}function Io(){document.querySelectorAll(".kp_img").forEach(t=>{t.setAttribute("src","");});const e=document.querySelector(".kp_container");e&&(e.style.display="none");}window.__clearPreview=Io;const Po="data:image/svg+xml,%3csvg%20width='256px'%20height='256px'%20viewBox='0%200%2024.00%2024.00'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20transform='matrix(1,%200,%200,%201,%200,%200)'%20%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'%20transform='translate(0,0),%20scale(1)'%20/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%23CCCCCC'%20stroke-width='0.048'%20/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M13%203L13.7071%202.29289C13.5196%202.10536%2013.2652%202%2013%202V3ZM14%2022C14.5523%2022%2015%2021.5523%2015%2021C15%2020.4477%2014.5523%2020%2014%2020V22ZM19%209H20C20%208.73478%2019.8946%208.48043%2019.7071%208.29289L19%209ZM18%2010C18%2010.5523%2018.4477%2011%2019%2011C19.5523%2011%2020%2010.5523%2020%2010H18ZM5.21799%2019.908L4.32698%2020.362H4.32698L5.21799%2019.908ZM6.09202%2020.782L6.54601%2019.891L6.54601%2019.891L6.09202%2020.782ZM6.09202%203.21799L5.63803%202.32698L5.63803%202.32698L6.09202%203.21799ZM5.21799%204.09202L4.32698%203.63803L4.32698%203.63803L5.21799%204.09202ZM13.109%208.45399L14%208V8L13.109%208.45399ZM13.546%208.89101L14%208L13.546%208.89101ZM17.2299%2017.7929C16.8394%2018.1834%2016.8394%2018.8166%2017.2299%2019.2071C17.6204%2019.5976%2018.2536%2019.5976%2018.6441%2019.2071L17.2299%2017.7929ZM15.0316%2015.2507C14.8939%2015.7856%2015.2159%2016.3308%2015.7507%2016.4684C16.2856%2016.6061%2016.8308%2016.2841%2016.9684%2015.7493L15.0316%2015.2507ZM17.9375%2020C17.3852%2020%2016.9375%2020.4477%2016.9375%2021C16.9375%2021.5523%2017.3852%2022%2017.9375%2022V20ZM17.9475%2022C18.4998%2022%2018.9475%2021.5523%2018.9475%2021C18.9475%2020.4477%2018.4998%2020%2017.9475%2020V22ZM13%202H8.2V4H13V2ZM4%206.2V17.8H6V6.2H4ZM8.2%2022H14V20H8.2V22ZM19.7071%208.29289L13.7071%202.29289L12.2929%203.70711L18.2929%209.70711L19.7071%208.29289ZM20%2010V9H18V10H20ZM4%2017.8C4%2018.3436%203.99922%2018.8114%204.03057%2019.195C4.06287%2019.5904%204.13419%2019.9836%204.32698%2020.362L6.10899%2019.454C6.0838%2019.4045%206.04612%2019.3038%206.02393%2019.0322C6.00078%2018.7488%206%2018.3766%206%2017.8H4ZM8.2%2020C7.62345%2020%207.25117%2019.9992%206.96784%2019.9761C6.69617%2019.9539%206.59545%2019.9162%206.54601%2019.891L5.63803%2021.673C6.01641%2021.8658%206.40963%2021.9371%206.80497%2021.9694C7.18864%2022.0008%207.65645%2022%208.2%2022V20ZM4.32698%2020.362C4.6146%2020.9265%205.07354%2021.3854%205.63803%2021.673L6.54601%2019.891C6.35785%2019.7951%206.20487%2019.6422%206.10899%2019.454L4.32698%2020.362ZM8.2%202C7.65645%202%207.18864%201.99922%206.80497%202.03057C6.40963%202.06287%206.01641%202.13419%205.63803%202.32698L6.54601%204.10899C6.59545%204.0838%206.69617%204.04612%206.96784%204.02393C7.25117%204.00078%207.62345%204%208.2%204V2ZM6%206.2C6%205.62345%206.00078%205.25117%206.02393%204.96784C6.04612%204.69617%206.0838%204.59545%206.10899%204.54601L4.32698%203.63803C4.13419%204.01641%204.06287%204.40963%204.03057%204.80497C3.99922%205.18864%204%205.65645%204%206.2H6ZM5.63803%202.32698C5.07354%202.6146%204.6146%203.07354%204.32698%203.63803L6.10899%204.54601C6.20487%204.35785%206.35785%204.20487%206.54601%204.10899L5.63803%202.32698ZM12%203V7.4H14V3H12ZM14.6%2010H19V8H14.6V10ZM12%207.4C12%207.66353%2011.9992%207.92131%2012.0169%208.13823C12.0356%208.36682%2012.0797%208.63656%2012.218%208.90798L14%208C14.0293%208.05751%2014.0189%208.08028%2014.0103%207.97537C14.0008%207.85878%2014%207.69653%2014%207.4H12ZM14.6%208C14.3035%208%2014.1412%207.99922%2014.0246%207.9897C13.9197%207.98113%2013.9425%207.9707%2014%208L13.092%209.78201C13.3634%209.92031%2013.6332%209.96438%2013.8618%209.98305C14.0787%2010.0008%2014.3365%2010%2014.6%2010V8ZM12.218%208.90798C12.4097%209.2843%2012.7157%209.59027%2013.092%209.78201L14%208V8L12.218%208.90798ZM18.937%2016C18.937%2016.1732%2018.8915%2016.3053%2018.6175%2016.5697C18.4638%2016.718%2018.2828%2016.8653%2018.0319%2017.074C17.7936%2017.2723%2017.5141%2017.5087%2017.2299%2017.7929L18.6441%2019.2071C18.86%2018.9913%2019.0805%2018.8033%2019.3109%2018.6116C19.5287%2018.4305%2019.7852%2018.2223%2020.0065%2018.0087C20.4825%2017.5493%2020.937%2016.9314%2020.937%2016H18.937ZM17.937%2015C18.4893%2015%2018.937%2015.4477%2018.937%2016H20.937C20.937%2014.3431%2019.5938%2013%2017.937%2013V15ZM16.9684%2015.7493C17.0795%2015.3177%2017.4724%2015%2017.937%2015V13C16.5377%2013%2015.3645%2013.957%2015.0316%2015.2507L16.9684%2015.7493ZM17.9375%2022H17.9475V20H17.9375V22Z'%20fill='%23c00000'%20/%3e%3c/g%3e%3c/svg%3e",Ho="data:image/svg+xml,%3csvg%20viewBox='-2.4%20-2.4%2028.80%2028.80'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23000000'%20%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'%20/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M15.6%2015.6C15.6%2015.6%2014.25%2013.8%2012%2013.8C9.75%2013.8%208.4%2015.6%208.4%2015.6M14.7%209.3H14.709M9.3%209.3H9.309M21%2012C21%2016.9706%2016.9706%2021%2012%2021C7.02944%2021%203%2016.9706%203%2012C3%207.02944%207.02944%203%2012%203C16.9706%203%2021%207.02944%2021%2012ZM15.15%209.3C15.15%209.54853%2014.9485%209.75%2014.7%209.75C14.4515%209.75%2014.25%209.54853%2014.25%209.3C14.25%209.05147%2014.4515%208.85%2014.7%208.85C14.9485%208.85%2015.15%209.05147%2015.15%209.3ZM9.75%209.3C9.75%209.54853%209.54853%209.75%209.3%209.75C9.05147%209.75%208.85%209.54853%208.85%209.3C8.85%209.05147%209.05147%208.85%209.3%208.85C9.54853%208.85%209.75%209.05147%209.75%209.3Z'%20stroke='%23000000'%20stroke-width='1.8'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3c/g%3e%3c/svg%3e";var xe=io(()=>Tt),Oo=H('<div class="card-category svelte-13et45j"><img class="card_category-img svelte-13et45j"> </div>'),Ro=H('<a class="__main_title svelte-13et45j" target="_blank" rel="noopener noreferrer"> </a>'),Do=H('<div class="pic_error svelte-13et45j"><div><img style="height: 100%; width:60px; border-radius:20px;" alt="pic error" class="svelte-13et45j"></div> <div class="ant-typography" style="color: white; font-size:16px;">GAY WARNING<br>同志警告</div></div>'),Fo=H('<img class="lazy-image svelte-13et45j">'),jo=H('<div class="pic_error svelte-13et45j" style=""><div><img style="height: 100%;width: 100px;" alt="no pic" class="svelte-13et45j"></div> <div>本种没有图片</div></div>'),zo=H('<div class="pic_error svelte-13et45j" style=""><div><img style="height: 100%;width: 100px;" alt="pic error" class="svelte-13et45j"></div> <div class="ant-typography">图片加载失败</div></div>'),qo=H('<div class="hover-trigger svelte-13et45j"><img style="pointer-events: none;" alt="PREVIEW" class="svelte-13et45j"></div>'),Bo=H(`<img style="
                    background: url(/static/media/icons.8bb5446ebbbd07050285.gif) 0 -202px;
                    height: 14px;
                    width: 14px;" alt="PIN" class="svelte-13et45j">`),Zo=H('<div class="card_info__topping svelte-13et45j"></div> &nbsp;',1),Wo=H('<div class="_tag svelte-13et45j"> </div>'),Go=H('<div class="_tag _tag_diy svelte-13et45j">DIY</div>'),Yo=H('<div class="_tag _tag_dub svelte-13et45j">国配</div>'),Uo=H('<div class="_tag _tag_sub svelte-13et45j">中字</div>'),Xo=H('<div class="_tag svelte-13et45j"> </div>'),Qo=H('<div class="cl-tags svelte-13et45j"><!> <!> <!> <!></div>'),Jo=H(`<img style="
                  background: url(/static/media/icons.8bb5446ebbbd07050285.gif) 0 -202px;
                  height: 14px;
                  width: 14px;" alt="PIN" class="svelte-13et45j">`),Ko=H('<div class="card_info__topping svelte-13et45j"></div> &nbsp;',1),el=H('<div class="_tag svelte-13et45j"> </div>'),tl=H('<div class="card-index svelte-13et45j"><!> <!></div>'),rl=H('<div class="card-index card-index-right svelte-13et45j"> </div>'),nl=H('<div class="card_info-item card_info__sub_title svelte-13et45j"><div> </div></div>'),il=H('<div class="_tag _tag_diy svelte-13et45j">DIY</div>'),al=H('<div class="_tag _tag_dub svelte-13et45j">国配</div>'),sl=H('<div class="_tag _tag_sub svelte-13et45j">中字</div>'),ol=H('<div class="_tag svelte-13et45j"> </div>'),ll=H('<div class="cl-tags svelte-13et45j"><!> <!> <!> <!></div>'),cl=H('<div class="card_info-item card_info__dl_and_cl svelte-13et45j"><button title="(原列表的这俩按钮会消失)">下载 & 收藏</button></div>'),ul=H('<div class="card_info-item card_info__upload_time svelte-13et45j"><div> </div></div>'),vl=H('<div class="card_info-item card_info__statistics svelte-13et45j"><!> &nbsp; <b> </b> &nbsp;&nbsp; <img alt="SVG_Seeders"> &nbsp; <b> </b> &nbsp;&nbsp; <img alt="SVG_Leechers"> &nbsp; <b> </b></div>'),fl=H('<div class="card_info svelte-13et45j"><!>  <!> <!> <!> <!></div>'),dl=H(`<div class="card_holder svelte-13et45j"><!> <div class="card_title"><!></div> <div class="card_pic svelte-13et45j"><!> <!>  <div class="hover-overlay svelte-13et45j"><div class="overlay-content svelte-13et45j"><div class="__inner_index_and_size svelte-13et45j"><div class="card-index __inner_index svelte-13et45j" style="background-color:black; color:white"><!> <!></div> <button class="__iframe_button svelte-13et45j">内窗预览</button> <div class="card-index card-index-right __inner_index __inner_size svelte-13et45j"> </div></div> <div class="card-category card_info-item svelte-13et45j"><img class="card_category-img card_category_square svelte-13et45j" style="width: 36px;height: 36px;"> </div> <div style="width: 100%;" class="card_info-item card_info__sub_title svelte-13et45j"><a class="__main_title __straight svelte-13et45j" target="_blank" rel="noopener noreferrer"> </a></div> <div style="width: 100%;" class="card_info-item card_info__sub_title svelte-13et45j"><div class="__sub_title svelte-13et45j"> </div></div>  <!> <div class="card_info-item card_info__upload_time svelte-13et45j"><div> </div></div> <div class="card_info-item card_info__statistics svelte-13et45j"><div class="__center svelte-13et45j"><!> <b> </b></div> <div class="__center svelte-13et45j"><img style="width: 14px; height: 14px;" alt="SVG_Seeders" class="svelte-13et45j"> <b> </b></div> <div class="__center svelte-13et45j"><img style="width: 14px; height: 14px;" alt="SVG_Leechers" class="svelte-13et45j"> <b> </b></div> <div><button title="(原列表的这俩按钮会消失)" style="
                background-color: inherit; border-color:transparent">下载&收藏</button></div></div></div></div> <!> <!></div> <!></div>`);function _l(e,t){ot(t,false);const[r,n]=Zt(),i=()=>se(Ia,"$_mt_categories",r),a=()=>se(Aa,"$_mt_label",r),o=()=>se(di,"$_block_gay",r),c=()=>se(fn,"$_card_radius",r),l=()=>se(Te,"$_card_detail",r),u=()=>se(fi,"$_show_hover_pic",r);let s=fe(t,"torrentInfo",8),h=te(false),f=te();s().status.toppingLevel&&P(f,Array(Number(s().status.toppingLevel)).fill());const d=s().status.discount,w=s().status.discountEndTime,m={FREE:"免费",PERCENT_50:"50%"},k=()=>{const y=new Date,V=new Date(w);return Math.floor((V.getTime()-y.getTime())/(1e3*3600))};let $=te(),g=te();const C="rgba(255, 255, 255, 0.5)";let O=te(),S=te();const E=`https://${location.host}/browse?cat=`+s().category;xe().CATEGORY[s().category]||(P(g,C),Vt.open({type:"warning",message:`存在未知分类: ${s().category}`}),xe(xe().CATEGORY[s().category]={src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZmMDAwMCIvPjwvc3ZnPg==",alt:"未知分类(TG或论坛联系我)",color:C})),P(O,i()[s().category].nameChs??xe().CATEGORY[s().category].alt),P(S,i()[s().category].image?z+i()[s().category].image:xe().CATEGORY[s().category].src),P(g,xe().CATEGORY[s().category].color??C);let A=te([]);s().labelsNew.length&&P(A,s().labelsNew.map(y=>{if(xe().TAG[y])return {key:y,config:xe().TAG[y]};if(a()){console.warn("[FALL]: 存在本地没有的 tag: ",y);let V;for(const j in a())if(y==a()[j].tag){V=a()[j];break}if(V)return {key:y,config:V}}return null}).filter(Boolean));function b(y){if(y===0)return "0 B";const V=["B","KB","MB","GB","TB"];let j=0,Y=y;for(;Y>=1024&&j<V.length-1;)Y/=1024,j++;return `${Y.toFixed(2).replace(/\.?0+$/,"")} ${V[j]}`}let x=te(),L=te();function R(y,V){const j=document.querySelectorAll(`a[href^="/detail/${y}"]`),Y=[];j.forEach(N=>{if(!/\/detail\/\d+/.test(N.href))return;const K=N.closest("tr");K&&K.querySelectorAll("button").forEach(ae=>{ae.querySelector("span.ant-btn-icon")&&Y.push(ae);});}),Y.length?(Y[0].style.margin=0,[...new Set(Y)].forEach(K=>{V.appendChild(K);})):Vt.error("没找到捏, 建议在种子详情里下载收藏~");}let q=te(false),Q=te(false),oe=new Ao,ie=te(),ne=te(),Ce=te(0);function pe(){v(ne)&&P(Ce,v(ne).offsetHeight);}let F=te(false);const ce="/static/cate/gayhd.gif",me="https://static.m-team.cc/static/media/logo.80b63235eaf702e44a8d.png";let Oe=s().imageList[0]||me,Z=te(),ct,Ze=te(false);const Lr=()=>{v(Ze)||(Ve(Z,v(Z).style.width="100%"),Ve(Z,v(Z).src=Oe),v(Z).classList.add("loaded"),Ve(Z,v(Z).style.opacity=1),P(Ze,true),v(ne)&&pe());};function Mr(){be(Ta,"https://"+location.host+"/detail/"+s().id),be(vn,1);}Pn(()=>{v(Ze)||(ct=new IntersectionObserver(y=>{y.forEach(V=>{V.isIntersecting&&(Lr(),ct.unobserve(v(Z)));});},{rootMargin:"100px"}),v(Z)&&!v(Ze)&&ct.observe(v(Z)),s().pt_fall_highlight&&v($).scrollIntoView({behavior:"smooth"}),setTimeout(()=>{},3e3)),pe(),v(Z)&&Ve(Z,v(Z).style.width="auto");}),$a(()=>{ct&&ct.disconnect();}),Pt(()=>v(ne),()=>{v(ne)&&pe();}),Pt(()=>(ft(s()),o(),v(Z),v(ne)),()=>{s().category==440&&o()==0&&v(Z)&&(Ve(Z,v(Z).style.width="100%"),Ve(Z,v(Z).src=Oe),v(Z).classList.add("loaded"),Ve(Z,v(Z).style.opacity=1),P(Ze,true),v(ne)&&pe());}),Sn(),yt();var ut=dl(),Wt=_(ut);{var Nr=y=>{var V=Oo();T(V,"data-href",E);var j=_(V),Y=p(j);G(N=>{T(V,"style",`
      background-color: ${v(g)??"transparent"};
      color: ${N??""}`),T(j,"src",v(S)),T(j,"alt",v(O)),D(Y,`    ${v(O)??""}`);},[()=>v(g)?Ue(v(g)):"black"],Ae),M(y,V);};B(Wt,y=>{l().category&&y(Nr);});}var Sr=p(Wt,2),Gt=_(Sr);{var $r=y=>{var V=Ro(),j=_(V);G(()=>{T(V,"href","/detail/"+s().id),D(j,s().name);}),M(y,V);};B(Gt,y=>{l().title&&y($r);});}var vt=p(Sr,2),Vr=_(vt);{var Hn=y=>{var V=nt(),j=Le(V);{var Y=K=>{var ae=Do(),ue=_(ae),de=_(ue);T(de,"src",ce),G(()=>T(ae,"style",`  background-color: ${v(g)??""}`)),M(K,ae);},N=K=>{var ae=nt(),ue=Le(ae);{var de=J=>{var le=Fo();T(le,"data-src",Oe),tt(le,U=>P(Z,U),()=>v(Z)),G(()=>{T(le,"src",v(Ze)?Oe:me),T(le,"alt",s().id);}),W("error",le,()=>{P(F,true),v(Z)||console.log(`<${s().index}>[${s().id}] imgElement 丢失.`);}),M(J,le);},Re=J=>{var le=jo(),U=_(le),ve=_(U);T(ve,"src",Ho),M(J,le);};B(ue,J=>{s().imageList[0]?J(de):J(Re,false);},true);}M(K,ae);};B(j,K=>{o()&&s().category==440?K(Y):K(N,false);});}M(y,V);},Tr=y=>{var V=zo(),j=_(V),Y=_(j);T(Y,"src",Po);var N=p(j,2);G(K=>T(N,"style",`color: ${K??""}; font-size:16px;`),[()=>Ue(v(g))],Ae),M(y,V);};B(Vr,y=>{v(F)?y(Tr,false):y(Hn);});}var Yt=p(Vr,2);{var On=y=>{var V=qo(),j=_(V);G(()=>T(j,"src",xe().ICON.PREVIEW)),W("mouseover",V,Y=>{P(q,true),oe.handleMouseOver(Y,v(Z));}),M(y,V);};B(Yt,y=>{u()&&!v(F)&&y(On);});}var We=p(Yt,2),Ut=_(We),Xt=_(Ut),Ar=_(Xt),Ir=_(Ar);{var Pr=y=>{var V=Zo(),j=Le(V);_t(j,5,()=>v(f),lr,(Y,N)=>{var K=Bo();G(()=>T(K,"src",xe().ICON.PIN)),M(Y,K);}),M(y,V);};B(Ir,y=>{s().status.toppingLevel!="0"&&y(Pr);});}var Qt=p(Ir),Rn=p(Qt);{var Dn=y=>{var V=Wo();cr(V,"_tag_discount_free",d=="FREE"),cr(V,"_tag_discount_50",d=="PERCENT_50");var j=_(V);G(Y=>D(j,`${m[d]??""}${Y??""}`),[()=>w?":"+k()+"小时":""],Ae),M(y,V);};B(Rn,y=>{d!="NORMAL"&&y(Dn);});}var bt=p(Ar,2),Jt=p(bt,2),Fn=_(Jt),wt=p(Xt,2);T(wt,"data-href",E);var xt=_(wt),Hr=p(xt),Kt=p(wt,2),er=_(Kt),Or=_(er),tr=p(Kt,2),jn=_(tr),zn=_(jn),rr=p(tr,2);{var Rr=y=>{var V=Qo(),j=_(V);{var Y=J=>{var le=Go();M(J,le);};B(j,J=>{(Number(s().labels)&1)===1&&J(Y);});}var N=p(j,2);{var K=J=>{var le=Yo();M(J,le);};B(N,J=>{(Number(s().labels)&2)===2&&J(K);});}var ae=p(N,2);{var ue=J=>{var le=Uo();M(J,le);};B(ae,J=>{(Number(s().labels)&4)===4&&J(ue);});}var de=p(ae,2);{var Re=J=>{var le=nt(),U=Le(le);_t(U,1,()=>v(A),lr,(ve,ye)=>{var _e=Xo(),Ct=_(_e);G(()=>{T(_e,"style",`background-color: ${v(ye).config.bgColor??""}; color: ${v(ye).config.color??""}`),D(Ct,v(ye).key);}),M(ve,_e);}),M(J,le);};B(de,J=>{v(A).length!=0&&J(Re);});}M(y,V);};B(rr,y=>{(Number(s().labels)||v(A).length)&&y(Rr);});}var Dr=p(rr,2),qn=_(Dr),Fr=_(qn),jr=p(Dr,2),zr=_(jr),qr=_(zr);Yi(qr);var Br=p(qr,2),Zr=_(Br),Wr=p(zr,2),Gr=_(Wr),Yr=p(Gr,2),Ur=_(Yr),Xr=p(Wr,2),Qr=_(Xr),Jr=p(Qr,2),Kr=_(Jr),nr=p(Xr,2),en=_(nr);tt(nr,y=>P(x,y),()=>v(x)),tt(Ut,y=>P(ne,y),()=>v(ne)),tt(We,y=>P(ie,y),()=>v(ie));var ir=p(We,2);{var tn=y=>{var V=tl(),j=_(V);{var Y=ue=>{var de=Ko(),Re=Le(de);_t(Re,5,()=>v(f),lr,(J,le)=>{var U=Jo();G(()=>T(U,"src",xe().ICON.PIN)),M(J,U);}),M(ue,de);};B(j,ue=>{l().topping&&s().status.toppingLevel!="0"&&ue(Y);});}var N=p(j),K=p(N);{var ae=ue=>{var de=el();cr(de,"_tag_discount_free",d=="FREE"),cr(de,"_tag_discount_50",d=="PERCENT_50");var Re=_(de);G(J=>D(Re,`${m[d]??""}${J??""}`),[()=>w?":"+k()+"小时":""],Ae),M(ue,de);};B(K,ue=>{l().free&&d!="NORMAL"&&ue(ae);});}G(()=>D(N,` ${s().index??""}

          `)),M(y,V);};B(ir,y=>{v(h)||y(tn);});}var Bn=p(ir,2);{var Zn=y=>{var V=rl(),j=_(V);G((Y,N)=>{T(V,"style",`background-color: ${v(g)??"transparent"}; color:${Y??""}`),D(j,N);},[()=>v(g)?Ue(v(g)):"black",()=>b(s().size)],Ae),M(y,V);};B(Bn,y=>{l().size&&!v(h)&&y(Zn);});}var rn=p(vt,2);{var nn=y=>{var V=fl(),j=_(V);{var Y=U=>{var ve=nl(),ye=_(ve),_e=_(ye);G(()=>D(_e,s().smallDescr)),M(U,ve);};B(j,U=>{l().sub_title&&U(Y);});}var N=p(j,2);{var K=U=>{var ve=ll(),ye=_(ve);{var _e=ge=>{var Ke=il();M(ge,Ke);};B(ye,ge=>{(s().labels&1)===1&&ge(_e);});}var Ct=p(ye,2);{var an=ge=>{var Ke=al();M(ge,Ke);};B(Ct,ge=>{(s().labels&2)===2&&ge(an);});}var ar=p(Ct,2);{var Wn=ge=>{var Ke=sl();M(ge,Ke);};B(ar,ge=>{(s().labels&4)===4&&ge(Wn);});}var sn=p(ar,2);{var Gn=ge=>{var Ke=nt(),Ha=Le(Ke);_t(Ha,1,()=>v(A),lr,(Oa,Yn)=>{var Un=ol(),Ra=_(Un);G(()=>{T(Un,"style",`background-color: ${v(Yn).config.bgColor??""}; color: ${v(Yn).config.color??""}`),D(Ra,v(Yn).key);}),M(Oa,Un);}),M(ge,Ke);};B(sn,ge=>{v(A).length!=0&&ge(Gn);});}M(U,ve);};B(N,U=>{l().tags&&(Number(s().labels)||v(A).length)&&U(K);});}var ae=p(N,2);{var ue=U=>{var ve=cl(),ye=_(ve);tt(ve,_e=>P(L,_e),()=>v(L)),G(_e=>T(ye,"style",`
              background-color: ${(v(g)?v(g):"transparent")??""};
              color: ${_e??""} ;
              border: 3px solid transparent;
              border-radius: 14px;
              overflow: hidden;
            `),[()=>v(g)?Ue(v(g)):"black"],Ae),W("click",ye,_e=>{R(s().id,v(L)),_e.target.style.display="none";}),M(U,ve);};B(ae,U=>{l().download_collect&&U(ue);});}var de=p(ae,2);{var Re=U=>{var ve=ul(),ye=_(ve),_e=_(ye);G(()=>D(_e,`上传时间:${s().createdDate??""}`)),M(U,ve);};B(de,U=>{l().upload_time&&U(Re);});}var J=p(de,2);{var le=U=>{var ve=vl(),ye=_(ve);Yi(ye);var _e=p(ye,2),Ct=_(_e),an=p(_e,2),ar=p(an,2),Wn=_(ar),sn=p(ar,2),Gn=p(sn,2),ge=_(Gn);G(()=>{D(Ct,s().status.comments),T(an,"src",xe().ICON.SEEDERS),D(Wn,s().status.seeders),T(sn,"src",xe().ICON.LEECHERS),D(ge,s().status.leechers);}),M(U,ve);};B(J,U=>{l().statistics&&U(le);});}G(U=>T(V,"style",`
        background-color: ${(v(g)?v(g)+"b0":"transparent")??""};
        color: ${U??""}`),[()=>v(g)?Ue(v(g)):"black"],Ae),M(y,V);};B(rn,y=>{(l().sub_title||l().tags||l().download_collect||l().upload_time||l().statistics)&&y(nn);});}tt(ut,y=>P($,y),()=>v($)),G((y,V)=>{Xe(ut,"--borderRadius",c().enabled?c().value+"px":"0"),T(vt,"style",`min-height: ${v(Ce)+24}px;`),Xe(vt,"--cateColor",v(g)+"b0"),D(Qt,` ${s().index??""}

              `),T(bt,"style",`background-color: ${v(g)??"transparent"}; color:${y??""}`),T(Jt,"style",`background-color: ${v(g)??"transparent"}; color:${y??""}`),D(Fn,V),T(wt,"style",`
            height: 40px;
            background-color: ${v(g)??"transparent"};
            color: ${y??""}`),T(xt,"src",v(S)),T(xt,"alt",v(O)),D(Hr,`    ${v(O)??""}`),T(er,"href","/detail/"+s().id),T(er,"title",s().name),D(Or,s().name),D(zn,s().smallDescr),D(Fr,`上传时间:${s().createdDate??""}`),D(Zr,s().status.comments),T(Gr,"src",xe().ICON.SEEDERS),D(Ur,s().status.seeders),T(Qr,"src",xe().ICON.LEECHERS),D(Kr,s().status.leechers),T(nr,"style",`
              background-color: ${(v(g)?v(g):"transparent")??""};
              color: ${y??""} ;
              border-radius: 14px;
              overflow: hidden;
            `);},[()=>v(g)?Ue(v(g)):"black",()=>b(s().size)],Ae),W("click",bt,Mr),W("mousedown",Kt,$t(y=>{y.stopPropagation();})),W("mousedown",en,$t(y=>{y.stopPropagation();})),W("click",en,$t(y=>{R(s().id,v(x)),y.target.style.display="none";})),W("mouseenter",We,()=>{v(Z)&&Ve(Z,v(Z).style.filter="blur(2px)"),Ve(ie,v(ie).style.opacity="1"),P(h,true);}),W("mousemove",We,y=>{P(Q,true),v(q)&&v(Q)&&oe.handleMouseMove(y);}),W("mouseleave",We,()=>{v(Z)&&Ve(Z,v(Z).style.filter="none"),Ve(ie,v(ie).style.opacity="0"),P(h,false),P(Q,false),v(q)&&(P(q,false),oe.clearPreview());}),W("mousedown",We,Ma(Mr)),M(e,ut),lt(),n();}var hl=H('<p class="text_center svelte-1vmncc1">没有结果捏</p>'),pl=H('<main><div class="fall_holder svelte-1vmncc1" style=""><!></div></main>');function gl(e,t){var E,A,b,x;ot(t,false);const[r,n]=Zt(),i=()=>se(fr,"$_card_layout",r),a=te();let o=fe(t,"infoList",8),c=te(o().data);v(c).length;let l=te();Tt.get_bg_color(),Object.keys(v(c)).forEach((L,R)=>{Ve(c,v(c)[L].index=R+1);}),console.log("Mteam_Fall:First	"+v(c).length);function u(L,R=true){let q=L.data;console.log("Mteam_Fall:New:	"+q.length),R?(s(),Object.keys(q).forEach((Q,oe)=>{q[Q].index=oe+1,oe==0&&(q[Q].pt_fall_highlight=true);}),P(c,[...q])):(Object.keys(q).forEach((Q,oe)=>{q[Q].index=oe+1+v(c).length,oe==0&&(q[Q].pt_fall_highlight=true);}),P(c,[...v(c),...q]));}function s(){P(c,[]);}function h(L,R){R=="top"&&L.scrollIntoView({behavior:"smooth"}),R=="bottom"&&(L.scrollIntoView({behavior:"auto",block:"end",inline:"nearest"}),L.scrollIntoView({behavior:"auto",block:"end",inline:"nearest"}),L.scrollIntoView({behavior:"auto",block:"end",inline:"nearest"}));}function f(L="top"){h(v(l),L);}let d,w,m;try{d=_r(localStorage.getItem("persist:persist")),w=(A=(E=d.sysinfo)==null?void 0:E.sysConf)==null?void 0:A.TORRENT_LABEL_CONFIG,m=(x=(b=d.sysinfo)==null?void 0:b.categoryList)==null?void 0:x.categorys,w&&be(Aa,w),m&&be(Ia,m);}catch(L){console.error(L),console.log(d);}Pt(()=>v(c),()=>{P(a,[...v(c)]);}),Sn(),yt();var k=pl(),$=_(k),g=_($);{var C=L=>{bo(L,{animate:true,get items(){return v(a)},get minColWidth(){return i().min},get maxColWidth(){return i().max},get gap(){return i().gap},children:Ms,$$slots:{default:(R,q)=>{const Q=Ae(()=>q.item);_l(R,{get torrentInfo(){return v(Q)}});}}});},O=L=>{var R=hl();M(L,R);};B(g,L=>{v(a).length?L(C):L(O,false);});}tt(k,L=>P(l,L),()=>v(l)),M(e,k),ei(t,"updateList",u),ei(t,"clearList",s),ei(t,"focusFall",f);var S=lt({updateList:u,clearList:s,focusFall:f});return n(),S}let ml="0.3.7";var yl=Bt('<svg class="tgme_logo" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle cx="17" cy="17" fill="#40a9ff" r="17"></circle><path d="m7.06510669 16.9258959c5.22739451-2.1065178 8.71314291-3.4952633 10.45724521-4.1662364 4.9797665-1.9157646 6.0145193-2.2485535 6.6889567-2.2595423.1483363-.0024169.480005.0315855.6948461.192827.1814076.1361492.23132.3200675.2552048.4491519.0238847.1290844.0536269.4231419.0299841.65291-.2698553 2.6225356-1.4375148 8.986738-2.0315537 11.9240228-.2513602 1.2428753-.7499132 1.5088847-1.2290685 1.5496672-1.0413153.0886298-1.8284257-.4857912-2.8369905-1.0972863-1.5782048-.9568691-2.5327083-1.3984317-4.0646293-2.3321592-1.7703998-1.0790837-.212559-1.583655.7963867-2.5529189.2640459-.2536609 4.7753906-4.3097041 4.755976-4.431706-.0070494-.0442984-.1409018-.481649-.2457499-.5678447-.104848-.0861957-.2595946-.0567202-.3712641-.033278-.1582881.0332286-2.6794907 1.5745492-7.5636077 4.6239616-.715635.4545193-1.3638349.6759763-1.9445998.6643712-.64024672-.0127938-1.87182452-.334829-2.78737602-.6100966-1.12296117-.3376271-1.53748501-.4966332-1.45976769-1.0700283.04048-.2986597.32581586-.610598.8560076-.935815z" fill="#fff"></path></g></svg>');function bl(e,t){let r=fe(t,"height",8,34),n=fe(t,"width",8,34);var i=yl();G(()=>{T(i,"height",r()),T(i,"width",n());}),M(e,i);}var wl=H('<div class="modal-overlay svelte-1a87xm5" role="button" aria-hidden="true"><div class="modal-content svelte-1a87xm5" role="button" aria-hidden="true"><div class="modal-header svelte-1a87xm5"><h3 class="svelte-1a87xm5">关于 PT-Fall</h3> <button class="close-btn svelte-1a87xm5">&times;</button></div> <div class="modal-body svelte-1a87xm5"><h4 class="svelte-1a87xm5">PT-Fall 是一个专为 M-team 站点量身定制的瀑布流视图插件</h4> <p class="svelte-1a87xm5">Github: <a href="https://github.com/KesaubeEire/PT_Fall-View" target="_blank">https://github.com/KesaubeEire/PT_Fall-View</a></p> <p class="svelte-1a87xm5">GreaseFork: <a href="https://greasyfork.org/zh-CN/scripts/543925" target="_blank">https://greasyfork.org/zh-CN/scripts/543925</a></p></div></div></div>'),xl=H('<div class="modal-overlay svelte-1a87xm5" role="button" aria-hidden="true"><div class="modal-content svelte-1a87xm5" role="button" aria-hidden="true"><div class="modal-header svelte-1a87xm5"><h3 class="svelte-1a87xm5">FAQ - 常见问题</h3> <button class="close-btn svelte-1a87xm5">&times;</button></div> <div class="modal-body svelte-1a87xm5"><h4 class="svelte-1a87xm5">Q: 如何联系反馈问题</h4> <p class="svelte-1a87xm5"><a class="__btn __btnWide svelte-1a87xm5" href="https://t.me/+Nd_qIisDjQ80ZTc9" target="_blank"><!> &nbsp;Telegram</a></p> <h4 class="svelte-1a87xm5">Q: 找不到悬浮框</h4> <button class="__btn svelte-1a87xm5">重置悬浮框位置</button> <p class="svelte-1a87xm5"><br>可以通过拖拽悬浮框顶部的颜色条来移动悬浮框的位置 <br>从 PTPP 那里来的灵感 ( 感恩 ||T|| 佬 )</p> <h4 class="svelte-1a87xm5">Q: 插件没有生效怎么办</h4> <p class="svelte-1a87xm5">可能是浏览器缓存了请求<br>尝试使用 Ctrl+Shift+R / Ctrl+F5 强制刷新页面</p> <h4 class="svelte-1a87xm5">Q: 如何切换瀑布流视图</h4> <p class="svelte-1a87xm5">点击悬浮面板中的第一个图标(瀑布/列表)按钮<br>即可在瀑布流和原列表视图间切换</p> <h4 class="svelte-1a87xm5">Q: 如何调整卡片布局</h4> <p class="svelte-1a87xm5">点击悬浮面板中的"配置"按钮<br>可以调整卡片的最小 / 最大宽度、间隔等参数</p> <h4 class="svelte-1a87xm5">Q: 快捷键</h4> <p class="svelte-1a87xm5"><span class="modal-code svelte-1a87xm5">x</span> 可以切换瀑布流视图</p> <p class="svelte-1a87xm5"><span class="modal-code svelte-1a87xm5">ESC</span> 可以从 次级菜单 / 配置菜单 / iframe 中退出</p> <h4 class="svelte-1a87xm5">Q: 深色模式颜色有些不对劲怎么办?</h4> <p class="svelte-1a87xm5">先刷新一下试试, 有些字体颜色不能即时更改<br>刷新后就可以了<br>还有颜色不对劲的 telegram 上截图告诉我</p></div></div></div>'),Cl=H('<div class="entry_mteam"><div class="ant-typography" style="line-height: 1.5; text-align: center;"><button class="__btn svelte-1a87xm5" id="_ptFall_about">PT-Fall<br><span style="font-weight: 600;"></span></button> <button class="__btn svelte-1a87xm5" id="_ptFall_faq">常见问题<br>FAQ</button></div></div> <!> <!>',1);function El(e,t){ot(t,false);const[r,n]=Zt(),i=()=>se(hr,"$_isFallView",r),a=()=>se(Nt,"$_textColor",r);let o=te(false),c=te(false);function l(){P(o,true);}function u(){P(o,false);}function s(){P(c,true);}function h(){P(c,false);}let f=te();Pt(()=>i(),()=>{P(f,i()?"#4ff74f":"yellow");}),Sn(),yt();var d=Cl();W("keydown",pr,A=>{A.key==="Escape"&&(u(),h());},true);var w=Le(d),m=_(w),k=_(m),$=p(_(k),2);$.textContent=`[v${ml}]`;var g=p(k,2),C=p(w,2);{var O=A=>{var b=wl(),x=_(b),L=_(x),R=p(_(L),2);G(()=>T(x,"style",`color: ${a().t3}`)),W("click",R,h),W("click",x,$t(function(q){qi.call(this,t,q);})),Ht(3,b,()=>Ot,()=>({duration:200})),W("click",b,h),M(A,b);};B(C,A=>{v(c)&&A(O);});}var S=p(C,2);{var E=A=>{var b=xl(),x=_(b),L=_(x),R=p(_(L),2),q=p(L,2),Q=p(_(q),2),oe=_(Q),ie=_(oe);bl(ie,{height:24,width:24});var ne=p(Q,4),Ce=p(ne,18),pe=_(Ce),F=p(Ce,2),ce=_(F);G(()=>{T(x,"style",`color: ${a().t3}`),T(oe,"style",`color: ${a().t2}`),Xe(oe,"--hover","#40a9ff"),T(ne,"style",`color: ${a().t2}`),Xe(ne,"--hover","#40a9ff"),T(pe,"style",`color: ${a().t1}`),T(ce,"style",`color: ${a().t1}`);}),W("click",R,u),W("click",ne,()=>{be(vi,{x:0,y:0});}),W("click",x,$t(function(me){qi.call(this,t,me);})),Ht(3,b,()=>Ot,()=>({duration:200})),W("click",b,u),M(A,b);};B(S,A=>{v(o)&&A(E);});}G(()=>{T(k,"style",`color: ${a().t2}`),Xe(k,"--hover","green"),Xe($,"color",v(f)),T(g,"style",`color: ${a().t2}`),Xe(g,"--hover","#40a9ff");}),W("click",k,s),W("click",g,l),M(e,d),lt(),n();}function kl(e,t){ot(t,false);const[r,n]=Zt(),i=()=>se(hr,"$_isFallView",r),a=()=>se(Nt,"$_textColor",r);let o,c,l,u=true,s=false,h=getComputedStyle(document.documentElement).getPropertyValue("--bg-2").trim(),f;const d=document.createElement("div");d.classList.add("Fall_DOM"),Lt(Tt.TL_Selector,w),Lt('a[href="/index"][target="_self"]',b=>{if(o)Vt.error("未找到目标链接元素"),console.warn("[FALL]: 未找到目标链接元素");else {b.insertAdjacentHTML("afterend",'<div class="ptFallReadme"></div>');const x=b.parentNode.querySelector(".ptFallReadme");o=br(El,{target:x});}}),Pn(()=>{A(),console.log("=====> 启动劫持 pushState 方法 <====="),S(),f=new MutationObserver(()=>{const b=getComputedStyle(document.documentElement).getPropertyValue("--bg-2").trim();b!==h&&(h=b,console.log("--bg-2 变化:",h),A());}),f.observe(document.documentElement,{attributes:true,attributeFilter:["style","class","data-theme"]});}),$a(()=>{f&&f.disconnect();});function w(b){if(b.parentNode){console.log("元素已找到，正在插入兄弟节点:",b),uo();const x={path:"/search",method:"POST"};window.addEventListener("req>POST->/search",L=>{console.log(`<PT-Fall>[Request]  (${x.method} -> ${x.path})
`,L.detail),L.detail.url.includes("api/torrent/search")&&!L.detail.body.includes('"mode":"waterfall"')?s=true:s=false,u=true,u?c&&c.focusFall():c&&c.focusFall("bottom");}),window.addEventListener("res>POST->/search",L=>{const R=JSON.parse(L.detail.data);if(!s){console.warn(`<PT-Fall>[未被接受的Response] (${x.method}->${x.path})[通过事件捕获]:
`,R);return}console.log(`<PT-Fall>[Response] (${x.method}->${x.path})[通过事件捕获]:
`,R),C(i()),m(b),Vt.success("捕获到 /search !"),l=R.data,c?c.updateList(l,u):c=br(gl,{target:d,props:{infoList:l}});});}else Vt.error(`找不到指定节点
若总是如此请报告bug`),console.error("无法插入：目标元素没有父节点");}function m(b){const x=b.parentNode.querySelector(".ant-spin-nested-loading"),L=document.createElement("div");L.id="_shield",L.addEventListener("click",()=>{confirm(`[PT-Fall]
如果你认为你被阻挡了请点击确认
这个阻挡效果会被取消
这可能导致显示错误
请确认您不在一般的瀑布流视图下
比如您在逛论坛或者在发种之类的被遮挡了再点`)&&(L.style.display="none");}),x.querySelector("#_shield")||x.appendChild(L);const R=document.createElement("div");R.id="_fallHolder",x.querySelector("#_fallHolder")||(x.appendChild(R),R.appendChild(d));}let k="",$="",g="";function C(b){d.style.display=b?"block":"none",Lt("#_fallHolder",x=>{x.style.display=b?"block":"none";}),Lt("#_shield",x=>{x.style.display=b?"block":"none";}),Lt(Tt.TL_Selector+".flex",x=>{$||($=getComputedStyle(x).getPropertyValue("max-width"),g=getComputedStyle(x).getPropertyValue("padding-left")),x.style.maxWidth=b?"none":$,x.style.paddingLeft=b?"80px":g,x.style.paddingRight=b?"80px":g;}),Lt(Tt.TL_Selector+" .mx-auto",x=>{k||(k=x.style.margin),x.style.margin=b?0:k;});}window.changeFallView=C;const O=history.pushState;function S(){history.pushState=function(b,x,L){console.log(`%c ====> URL跳转劫持: %c${L}`,"color: cyan","color: white"),L.includes("/browse")||L=="/waterfall"?console.log(`--->属于 browse 范围: ${L}`):(console.warn(`[FALL]: --->不属于 browse 范围: ${L}`),C(false)),O.apply(history,arguments);};}function E(b){return getComputedStyle(document.documentElement).getPropertyValue(b).trim()}function A(){he(Nt,I(a).t1=Ue(E("--bg-1")),I(a)),he(Nt,I(a).t2=Ue(E("--bg-2")),I(a)),he(Nt,I(a).t3=Ue(E("--bg-3")),I(a));}yt(),lt(),n();}function Ll(e){if(location.hostname.includes("m-team"))return Tt}var Ml=H('<div class="switch-container svelte-18ntgfp"><div class="switch-background svelte-18ntgfp"><div class="switch-slider svelte-18ntgfp"></div></div></div>');function Me(e,t){let r=fe(t,"checked",12,false);function n(){r(!r());}var i=Ml(),a=_(i),o=_(a);G(()=>cr(o,"checked",r())),W("click",i,n),M(e,i);}var Nl=Bt(`<svg viewBox="0 0 32 32" width="20" height="20" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><defs><style>.cls-1 {
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2px;
      }</style></defs><g data-name="43-browser" id="_43-browser"><rect class="cls-1" height="30" width="30" x="1" y="1"></rect><line class="cls-1" x1="1" x2="31" y1="9" y2="9"></line><line class="cls-1" x1="5" x2="7" y1="5" y2="5"></line><line class="cls-1" x1="11" x2="13" y1="5" y2="5"></line><line class="cls-1" x1="9" x2="25" y1="16" y2="16"></line><line class="cls-1" x1="7" x2="25" y1="20" y2="20"></line><line class="cls-1" x1="7" x2="25" y1="24" y2="24"></line></g></svg>`);function Sl(e){var t=Nl();M(e,t);}var $l=Bt(`<svg width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><defs><style>.cls-1 {
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2px;
      }</style></defs><g data-name="80-setting" id="_80-setting"><circle class="cls-1" cx="10" cy="6" r="3"></circle><circle class="cls-1" cx="22" cy="16" r="3"></circle><circle class="cls-1" cx="10" cy="26" r="3"></circle><line class="cls-1" x1="7" x2="1" y1="6" y2="6"></line><line class="cls-1" x1="15" x2="1" y1="16" y2="16"></line><line class="cls-1" x1="7" x2="1" y1="26" y2="26"></line><line class="cls-1" x1="31" x2="17" y1="26" y2="26"></line><line class="cls-1" x1="31" x2="25" y1="16" y2="16"></line><line class="cls-1" x1="31" x2="17" y1="6" y2="6"></line></g></svg>`);function Vl(e){var t=$l();M(e,t);}var Tl=Bt('<svg enable-background="new 0 0 64 64" width="20" height="20" id="Layer_1" version="1.1" viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19,2.875H3.5c-0.829,0-1.5,0.671-1.5,1.5v19.979c0,0.829,0.671,1.5,1.5,1.5H19c0.829,0,1.5-0.671,1.5-1.5V4.375  C20.5,3.546,19.829,2.875,19,2.875z M17.5,22.854H5V5.875h12.5V22.854z"></path><path d="M19,28.773H3.5c-0.829,0-1.5,0.671-1.5,1.5v6.166c0,0.828,0.671,1.5,1.5,1.5H19c0.829,0,1.5-0.672,1.5-1.5v-6.166  C20.5,29.445,19.829,28.773,19,28.773z M17.5,34.939H5v-3.166h12.5V34.939z"></path><path d="M19,40.859H3.5c-0.829,0-1.5,0.672-1.5,1.5v17.266c0,0.828,0.671,1.5,1.5,1.5H19c0.829,0,1.5-0.672,1.5-1.5V42.359  C20.5,41.531,19.829,40.859,19,40.859z M17.5,58.125H5V43.859h12.5V58.125z"></path><path d="M40,2.875H24.5c-0.829,0-1.5,0.671-1.5,1.5v14.25c0,0.829,0.671,1.5,1.5,1.5H40c0.828,0,1.5-0.671,1.5-1.5V4.375  C41.5,3.546,40.828,2.875,40,2.875z M38.5,17.125H26V5.875h12.5V17.125z"></path><path d="M40,23.125H24.5c-0.829,0-1.5,0.671-1.5,1.5V46.5c0,0.828,0.671,1.5,1.5,1.5H40c0.828,0,1.5-0.672,1.5-1.5V24.625  C41.5,23.796,40.828,23.125,40,23.125z M38.5,45H26V26.125h12.5V45z"></path><path d="M40,51H24.5c-0.829,0-1.5,0.672-1.5,1.5v7.125c0,0.828,0.671,1.5,1.5,1.5H40c0.828,0,1.5-0.672,1.5-1.5V52.5  C41.5,51.672,40.828,51,40,51z M38.5,58.125H26V54h12.5V58.125z"></path><path d="M60.5,2.875H45c-0.828,0-1.5,0.671-1.5,1.5v35.171c0,0.828,0.672,1.5,1.5,1.5h15.5c0.828,0,1.5-0.672,1.5-1.5V4.375  C62,3.546,61.328,2.875,60.5,2.875z M59,38.046H46.5V5.875H59V38.046z"></path><path d="M60.5,44.346H45c-0.828,0-1.5,0.672-1.5,1.5v13.779c0,0.828,0.672,1.5,1.5,1.5h15.5c0.828,0,1.5-0.672,1.5-1.5V45.846  C62,45.018,61.328,44.346,60.5,44.346z M59,58.125H46.5V47.346H59V58.125z"></path></svg>');function Al(e){var t=Tl();M(e,t);}var Il=H('<div><!></div> <div class="flowBtn_text svelte-3a4txt">瀑布</div>',1),Pl=H('<div><!></div> <div class="flowBtn_text svelte-3a4txt">列表</div>',1),Hl=H('<div class="config-item svelte-3a4txt"><span> </span> <input type="range" min="0" max="40" step="1" class="svelte-3a4txt"></div>'),Ol=H('<div class="config-menu-overlay svelte-3a4txt"><div class="config-menu svelte-3a4txt"><div class="config-menu-header svelte-3a4txt"><span style="font-size: 18px; font-weight: bold;">配置菜单</span> <button class="close-btn svelte-3a4txt">&times;</button></div> <div class="config-menu-content svelte-3a4txt"><h3 class="svelte-3a4txt"># 卡片布局</h3> <div class="config-item svelte-3a4txt"><span> </span> <input type="range" min="200" step="1" list="values" class="svelte-3a4txt"></div> <div class="config-item svelte-3a4txt"><span> </span> <input type="range" step="1" list="values" class="svelte-3a4txt"></div> <div class="config-item svelte-3a4txt"><span> </span> <input type="range" min="0" max="100" step="1" list="values" class="svelte-3a4txt"></div> <div class="config-item svelte-3a4txt"><span> </span> <!></div> <h3 class="svelte-3a4txt"># 卡片常驻信息展示</h3>  <div class="config-item svelte-3a4txt"><span> </span> <!></div> <div class="config-item svelte-3a4txt"><span> </span> <!></div> <div class="config-item svelte-3a4txt"><span> </span> <!></div> <div class="config-item svelte-3a4txt"><span> </span> <!></div> <div class="config-item svelte-3a4txt"><span> </span> <!></div> <div class="config-item svelte-3a4txt"><span> </span> <!></div> <div class="config-item svelte-3a4txt"><span> </span> <!></div> <div class="config-item svelte-3a4txt"><span> </span> <!></div> <div class="config-item svelte-3a4txt"><span> </span> <!></div> <div class="config-item svelte-3a4txt"><span> </span> <!></div> <h3 class="svelte-3a4txt"># 卡片屏蔽</h3> <div class="config-item svelte-3a4txt"><span> </span> <!></div> <h3 class="svelte-3a4txt"># 卡片样式</h3> <div class="config-item svelte-3a4txt"><span> </span> <!></div> <!></div></div></div>'),Rl=H('<div class="flowP svelte-3a4txt"><div class="flowPDragger svelte-3a4txt" role="button" tabindex="0" aria-hidden="true"></div> <div class="flowPHolder ant-typography svelte-3a4txt"><button class="flowBtn svelte-3a4txt"><!></button> <button class="flowBtn svelte-3a4txt"><div><!></div> <div class="flowBtn_text svelte-3a4txt">配置</div></button> <button class="flowBtn svelte-3a4txt">清除悬浮预览图</button></div></div> <!>',1);function Dl(e,t){ot(t,false);const[r,n]=Zt(),i=()=>se(vi,"$_panelPos",r),a=()=>se(hr,"$_isFallView",r),o=()=>se(Nt,"$_textColor",r),c=()=>se(vr,"$_side_panel_switch",r),l=()=>se(fr,"$_card_layout",r),u=()=>se(fi,"$_show_hover_pic",r),s=()=>se(Te,"$_card_detail",r),h=()=>se(di,"$_block_gay",r),f=()=>se(fn,"$_card_radius",r);let d=te(),w=false,m=0,k=0;function $(F,ce,me){return F<=ce&&(F=ce),F>=me&&(F=me),F}const g=F=>{F.preventDefault(),w=true,m=F.clientX-v(d).getBoundingClientRect().left,k=F.clientY-v(d).getBoundingClientRect().top;},C=F=>{if(!w)return;const ce=$(F.clientX-m,0,window.innerWidth-(v(d).getBoundingClientRect().width+5)),me=$(F.clientY-k,0,window.innerHeight-(v(d).getBoundingClientRect().height+5));be(vi,{x:ce,y:me});},O=()=>{w=false;};Pn(()=>(window.addEventListener("mousemove",C),window.addEventListener("mouseup",O),()=>{window.removeEventListener("mousemove",C),window.removeEventListener("mouseup",O);})),yt();var S=Rl();W("keydown",pr,F=>{F.key==="x"&&(be(hr,!a()),window.changeFallView(a()));},true);var E=Le(S),A=_(E),b=p(A,2),x=_(b),L=_(x);{var R=F=>{var ce=Il(),me=Le(ce),Oe=_(me);Al(Oe),M(F,ce);},q=F=>{var ce=Pl(),me=Le(ce),Oe=_(me);Sl(Oe),M(F,ce);};B(L,F=>{a()?F(R):F(q,false);});}var Q=p(x,2),oe=_(Q),ie=_(oe);Vl(ie);var ne=p(Q,2);tt(E,F=>P(d,F),()=>v(d));var Ce=p(E,2);{var pe=F=>{var ce=Ol(),me=_(ce),Oe=_(me),Z=p(_(Oe),2),ct=p(Oe,2),Ze=p(_(ct),2),Lr=_(Ze),Mr=_(Lr),ut=p(Lr,2),Wt=p(Ze,2),Nr=_(Wt),Sr=_(Nr),Gt=p(Nr,2),$r=p(Wt,2),vt=_($r),Vr=_(vt),Hn=p(vt,2),Tr=p($r,2),Yt=_(Tr),On=_(Yt),We=p(Yt,2);Me(We,{get checked(){return Bi(),u()},set checked(N){be(fi,N);},$$legacy:true});var Ut=p(Tr,4),Xt=_(Ut),Ar=_(Xt),Ir=p(Xt,2);Me(Ir,{get checked(){return s().category},set checked(N){he(Te,I(s).category=N,I(s));},$$legacy:true});var Pr=p(Ut,2),Qt=_(Pr),Rn=_(Qt),Dn=p(Qt,2);Me(Dn,{get checked(){return s().title},set checked(N){he(Te,I(s).title=N,I(s));},$$legacy:true});var bt=p(Pr,2),Jt=_(bt),Fn=_(Jt),wt=p(Jt,2);Me(wt,{get checked(){return s().topping},set checked(N){he(Te,I(s).topping=N,I(s));},$$legacy:true});var xt=p(bt,2),Hr=_(xt),Kt=_(Hr),er=p(Hr,2);Me(er,{get checked(){return s().free},set checked(N){he(Te,I(s).free=N,I(s));},$$legacy:true});var Or=p(xt,2),tr=_(Or),jn=_(tr),zn=p(tr,2);Me(zn,{get checked(){return s().size},set checked(N){he(Te,I(s).size=N,I(s));},$$legacy:true});var rr=p(Or,2),Rr=_(rr),Dr=_(Rr),qn=p(Rr,2);Me(qn,{get checked(){return s().sub_title},set checked(N){he(Te,I(s).sub_title=N,I(s));},$$legacy:true});var Fr=p(rr,2),jr=_(Fr),zr=_(jr),qr=p(jr,2);Me(qr,{get checked(){return s().tags},set checked(N){he(Te,I(s).tags=N,I(s));},$$legacy:true});var Br=p(Fr,2),Zr=_(Br),Wr=_(Zr),Gr=p(Zr,2);Me(Gr,{get checked(){return s().download_collect},set checked(N){he(Te,I(s).download_collect=N,I(s));},$$legacy:true});var Yr=p(Br,2),Ur=_(Yr),Xr=_(Ur),Qr=p(Ur,2);Me(Qr,{get checked(){return s().upload_time},set checked(N){he(Te,I(s).upload_time=N,I(s));},$$legacy:true});var Jr=p(Yr,2),Kr=_(Jr),nr=_(Kr),en=p(Kr,2);Me(en,{get checked(){return s().statistics},set checked(N){he(Te,I(s).statistics=N,I(s));},$$legacy:true});var ir=p(Jr,4),tn=_(ir),Bn=_(tn),Zn=p(tn,2);Me(Zn,{get checked(){return Bi(),h()},set checked(N){be(di,N);},$$legacy:true});var rn=p(ir,4),nn=_(rn),y=_(nn),V=p(nn,2);Me(V,{get checked(){return f().enabled},set checked(N){he(fn,I(f).enabled=N,I(f));},$$legacy:true});var j=p(rn,2);{var Y=N=>{var K=Hl(),ae=_(K),ue=_(ae),de=p(ae,2);G(()=>D(ue,`圆角大小: ${f().value??""} px`)),ln(de,()=>f().value,Re=>he(fn,I(f).value=Re,I(f))),M(N,K);};B(j,N=>{f().enabled&&N(Y);});}G((N,K,ae,ue)=>{T(me,"style",`background-color: ${N??""};`),D(Mr,`最小宽度: ${l().min??""} px`),T(ut,"max",K),D(Sr,`最大宽度: ${l().max??""} px`),T(Gt,"min",ae),T(Gt,"max",ue),D(Vr,`卡片间隔: ${l().gap??""} px`),D(On,`显示鼠标悬浮预览大图: ${u()??""}`),D(Ar,`分区: ${s().category??""}`),D(Rn,`标题: ${s().title??""}`),D(Fn,`置顶: ${s().topping??""}`),D(Kt,`免费: ${s().free??""}`),D(jn,`大小: ${s().size??""}`),D(Dr,`副标题: ${s().sub_title??""}`),D(zr,`标签: ${s().tags??""}`),D(Wr,`下载&收藏: ${s().download_collect??""}`),D(Xr,`上传时间: ${s().upload_time??""}`),D(nr,`评论/上传/下载: ${s().statistics??""}`),D(Bn,`屏蔽 gay 区: ${h()??""}`),D(y,`自定义圆角: ${f().enabled??""}`);},[()=>Ll().get_bg_color(),()=>Math.max(400,l().max),()=>Math.min(200,l().min),()=>Math.max(800,l().min*2)],Ae),W("click",Z,()=>be(vr,false)),ln(ut,()=>l().min,N=>he(fr,I(l).min=N,I(l))),ln(Gt,()=>l().max,N=>he(fr,I(l).max=N,I(l))),ln(Hn,()=>l().gap,N=>he(fr,I(l).gap=N,I(l))),Ht(3,ce,()=>Ot,()=>({duration:100})),W("click",ce,Ma(()=>be(vr,false))),M(F,ce);};B(Ce,F=>{c()&&F(pe);});}G(()=>{T(E,"style",`top:${i().y??""}px; left:${i().x??""}px;`),Xe(E,"--isFallView",a()?"#4ff74f":"yellow"),Xe(b,"--get-text-color",o().t2);}),W("mousedown",A,g),W("click",x,()=>{be(hr,!a()),window.changeFallView(a());}),W("click",Q,()=>{be(vr,!c());}),W("click",ne,()=>{window.__clearPreview();}),M(e,S),lt(),n();}var Fl=Bt('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_iconCarrier"><circle cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="1.5"></circle><path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path></g></svg>');function jl(e){var t=Fl();M(e,t);}var zl=H('<div id="_iframe" class="svelte-1axpxde"><div class="_iframe svelte-1axpxde"><iframe frameborder="0" style="width: 1000px;" class="svelte-1axpxde"></iframe> <div class="_iframeCloseBtn svelte-1axpxde"><!></div></div></div>');function ql(e,t){ot(t,false);const[r,n]=Zt(),i=()=>se(vn,"$_iframe_switch",r),a=()=>se(Ta,"$_iframe_url",r);let o=fe(t,"_app",8),c;function l(){be(vn,0);}function u(d){d.key==="Escape"&&(console.log(d),be(vn,0),be(vr,false));}c=true,c&&br(kl,{target:o()}),br(Dl,{target:o()}),console.log("-------------->  PT_Fall Launch   <--------------"),yt();var s=nt();W("keydown",pr,u,true);var h=Le(s);{var f=d=>{var w=zl(),m=_(w),k=_(m),$=p(k,2),g=_($);jl(g),G(()=>{T(k,"src",a()),T(k,"title",a());}),W("load",k,C=>{const O=C.target.contentDocument||C.target.contentWindow.document;if(!O){console.error("无法访问iframe内容文档, 可能是由于跨域限制。"),Vt.error("无法访问iframe内容文档, 可能是由于跨域限制。");return}const S=()=>{const A=O.querySelector(".ant-card.detail-view");A&&(A.scrollIntoView({behavior:"smooth"}),console.log("成功滚动到目标元素！"),clearInterval(E));},E=setInterval(S,500);S();}),W("click",k,$t(C=>{C.stopPropagation();})),W("click",$,l),W("click",w,l),Ht(3,w,()=>Ot,()=>({duration:300})),M(d,w);};B(h,d=>{i()&&d(f);});}M(e,s),lt(),n();}const _i=document.createElement("div");document.body.append(_i);br(ql,{target:_i,props:{_app:_i}});

})();