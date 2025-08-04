// ==UserScript==
// @name            PT瀑布流视图
// @name:en         PT_Fall-View
// @namespace       vite-plugin-monkey
// @version         0.3.8
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
.Fall_DOM{\r
  padding-bottom: 10px; /* \u786E\u4FDD\u5E95\u90E8\u6709\u8DB3\u591F\u7684\u7A7A\u95F4 */\r
  background-color: var(--bg-1);\r
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
  .flowP.svelte-1gujon8 {\r
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
  .flowPDragger.svelte-1gujon8 {\r
    display: flex;\r
    align-items: center;\r
    justify-content: center;\r
    line-height: 14px;\r
    font-size: 12px;\r
    height: 14px;\r
    transition: background-color 0.3s ease-in-out;\r
    background-color: var(--isFallView);\r
\r
    &:hover {\r
      cursor: move; /* \u8BBE\u7F6E\u9F20\u6807\u60AC\u505C\u65F6\u7684\u56FE\u6807\u4E3A\u79FB\u52A8 */\r
    }\r
  }\r
\r
  .flowPHolder.svelte-1gujon8 {\r
    /* position: relative; */\r
    display: flex;\r
    flex-direction: column;\r
    justify-content: center;\r
    align-items: center;\r
    padding-top: 2px;\r
    gap: 4px;\r
  }\r
\r
  .flowBtn.svelte-1gujon8 {\r
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
    & .flowBtn_text:where(.svelte-1gujon8) {\r
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
  .config-menu-overlay.svelte-1gujon8 {\r
    color: var(--get-text-color);\r
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
  .config-menu.svelte-1gujon8 {\r
    background-color: #ffffff;\r
    width: 300px;\r
    height: 100vh;\r
    padding: 20px;\r
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);\r
    overflow-y: auto;\r
  }\r
\r
  .config-menu-header.svelte-1gujon8 {\r
    display: flex;\r
    justify-content: space-between;\r
    align-items: center;\r
    margin-bottom: 12px;\r
  }\r
\r
  .close-btn.svelte-1gujon8 {\r
    background: none;\r
    border: none;\r
    font-size: 24px;\r
    cursor: pointer;\r
    padding: 0 8px;\r
    transform: translateY(-4px);\r
  }\r
\r
  .config-menu-content.svelte-1gujon8 {\r
    display: flex;\r
    flex-direction: column;\r
    gap: 4px;\r
\r
    font-size: 14px;\r
\r
    & h3:where(.svelte-1gujon8) {\r
      margin-top: 28px;\r
    }\r
  }\r
\r
  .config-item.svelte-1gujon8 {\r
    display: flex;\r
    align-items: center;\r
    justify-content: space-between;\r
  }\r
\r
  .config-item.svelte-1gujon8 input:where(.svelte-1gujon8) {\r
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

  var __defProp = Object.defineProperty;
  var __typeError = (msg) => {
    throw TypeError(msg);
  };
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => __defNormalProp(obj, key + "" , value);
  var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
  var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
  var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), member.set(obj, value), value);
  var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
  var _listeners, _observer, _options, _ResizeObserverSingleton_instances, getObserver_fn;
  const DEV = false;
  var is_array = Array.isArray;
  var index_of = Array.prototype.indexOf;
  var array_from = Array.from;
  var define_property = Object.defineProperty;
  var get_descriptor = Object.getOwnPropertyDescriptor;
  var get_descriptors = Object.getOwnPropertyDescriptors;
  var object_prototype = Object.prototype;
  var array_prototype = Array.prototype;
  var get_prototype_of = Object.getPrototypeOf;
  function is_function(thing) {
    return typeof thing === "function";
  }
  const noop = () => {
  };
  function run(fn) {
    return fn();
  }
  function run_all(arr) {
    for (var i = 0; i < arr.length; i++) {
      arr[i]();
    }
  }
  const DERIVED = 1 << 1;
  const EFFECT = 1 << 2;
  const RENDER_EFFECT = 1 << 3;
  const BLOCK_EFFECT = 1 << 4;
  const BRANCH_EFFECT = 1 << 5;
  const ROOT_EFFECT = 1 << 6;
  const BOUNDARY_EFFECT = 1 << 7;
  const UNOWNED = 1 << 8;
  const DISCONNECTED = 1 << 9;
  const CLEAN = 1 << 10;
  const DIRTY = 1 << 11;
  const MAYBE_DIRTY = 1 << 12;
  const INERT = 1 << 13;
  const DESTROYED = 1 << 14;
  const EFFECT_RAN = 1 << 15;
  const EFFECT_TRANSPARENT = 1 << 16;
  const LEGACY_DERIVED_PROP = 1 << 17;
  const HEAD_EFFECT = 1 << 19;
  const EFFECT_HAS_DERIVED = 1 << 20;
  const STATE_SYMBOL = Symbol("$state");
  const LEGACY_PROPS = Symbol("legacy props");
  const LOADING_ATTR_SYMBOL = Symbol("");
  function equals(value) {
    return value === this.v;
  }
  function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || a !== null && typeof a === "object" || typeof a === "function";
  }
  function safe_equals(value) {
    return !safe_not_equal(value, this.v);
  }
  function effect_in_teardown(rune) {
    {
      throw new Error(`https://svelte.dev/e/effect_in_teardown`);
    }
  }
  function effect_in_unowned_derived() {
    {
      throw new Error(`https://svelte.dev/e/effect_in_unowned_derived`);
    }
  }
  function effect_orphan(rune) {
    {
      throw new Error(`https://svelte.dev/e/effect_orphan`);
    }
  }
  function effect_update_depth_exceeded() {
    {
      throw new Error(`https://svelte.dev/e/effect_update_depth_exceeded`);
    }
  }
  function props_invalid_value(key) {
    {
      throw new Error(`https://svelte.dev/e/props_invalid_value`);
    }
  }
  function state_descriptors_fixed() {
    {
      throw new Error(`https://svelte.dev/e/state_descriptors_fixed`);
    }
  }
  function state_prototype_fixed() {
    {
      throw new Error(`https://svelte.dev/e/state_prototype_fixed`);
    }
  }
  function state_unsafe_local_read() {
    {
      throw new Error(`https://svelte.dev/e/state_unsafe_local_read`);
    }
  }
  function state_unsafe_mutation() {
    {
      throw new Error(`https://svelte.dev/e/state_unsafe_mutation`);
    }
  }
  let legacy_mode_flag = false;
  let tracing_mode_flag = false;
  function enable_legacy_mode_flag() {
    legacy_mode_flag = true;
  }
  const EACH_ITEM_REACTIVE = 1;
  const EACH_INDEX_REACTIVE = 1 << 1;
  const EACH_IS_CONTROLLED = 1 << 2;
  const EACH_IS_ANIMATED = 1 << 3;
  const EACH_ITEM_IMMUTABLE = 1 << 4;
  const PROPS_IS_IMMUTABLE = 1;
  const PROPS_IS_RUNES = 1 << 1;
  const PROPS_IS_UPDATED = 1 << 2;
  const PROPS_IS_BINDABLE = 1 << 3;
  const PROPS_IS_LAZY_INITIAL = 1 << 4;
  const TRANSITION_IN = 1;
  const TRANSITION_OUT = 1 << 1;
  const TRANSITION_GLOBAL = 1 << 2;
  const TEMPLATE_FRAGMENT = 1;
  const TEMPLATE_USE_IMPORT_NODE = 1 << 1;
  const UNINITIALIZED = Symbol();
  function source(v, stack) {
    var signal = {
      f: 0,
      // TODO ideally we could skip this altogether, but it causes type errors
      v,
      reactions: null,
      equals,
      rv: 0,
      wv: 0
    };
    return signal;
  }
  // @__NO_SIDE_EFFECTS__
  function mutable_source(initial_value, immutable = false) {
    var _a;
    const s = source(initial_value);
    if (!immutable) {
      s.equals = safe_equals;
    }
    if (legacy_mode_flag && component_context !== null && component_context.l !== null) {
      ((_a = component_context.l).s ?? (_a.s = [])).push(s);
    }
    return s;
  }
  function mutable_state(v, immutable = false) {
    return /* @__PURE__ */ push_derived_source(/* @__PURE__ */ mutable_source(v, immutable));
  }
  // @__NO_SIDE_EFFECTS__
  function push_derived_source(source2) {
    if (active_reaction !== null && !untracking && (active_reaction.f & DERIVED) !== 0) {
      if (derived_sources === null) {
        set_derived_sources([source2]);
      } else {
        derived_sources.push(source2);
      }
    }
    return source2;
  }
  function mutate(source2, value) {
    set(
      source2,
      untrack(() => get$1(source2))
    );
    return value;
  }
  function set(source2, value) {
    if (active_reaction !== null && !untracking && is_runes() && (active_reaction.f & (DERIVED | BLOCK_EFFECT)) !== 0 && // If the source was created locally within the current derived, then
    // we allow the mutation.
    (derived_sources === null || !derived_sources.includes(source2))) {
      state_unsafe_mutation();
    }
    return internal_set(source2, value);
  }
  function internal_set(source2, value) {
    if (!source2.equals(value)) {
      source2.v;
      source2.v = value;
      source2.wv = increment_write_version();
      mark_reactions(source2, DIRTY);
      if (is_runes() && active_effect !== null && (active_effect.f & CLEAN) !== 0 && (active_effect.f & (BRANCH_EFFECT | ROOT_EFFECT)) === 0) {
        if (untracked_writes === null) {
          set_untracked_writes([source2]);
        } else {
          untracked_writes.push(source2);
        }
      }
    }
    return value;
  }
  function mark_reactions(signal, status) {
    var reactions = signal.reactions;
    if (reactions === null) return;
    var runes = is_runes();
    var length = reactions.length;
    for (var i = 0; i < length; i++) {
      var reaction = reactions[i];
      var flags = reaction.f;
      if ((flags & DIRTY) !== 0) continue;
      if (!runes && reaction === active_effect) continue;
      set_signal_status(reaction, status);
      if ((flags & (CLEAN | UNOWNED)) !== 0) {
        if ((flags & DERIVED) !== 0) {
          mark_reactions(
            /** @type {Derived} */
            reaction,
            MAYBE_DIRTY
          );
        } else {
          schedule_effect(
            /** @type {Effect} */
            reaction
          );
        }
      }
    }
  }
  let hydrating = false;
  function proxy(value, parent = null, prev) {
    if (typeof value !== "object" || value === null || STATE_SYMBOL in value) {
      return value;
    }
    const prototype = get_prototype_of(value);
    if (prototype !== object_prototype && prototype !== array_prototype) {
      return value;
    }
    var sources = /* @__PURE__ */ new Map();
    var is_proxied_array = is_array(value);
    var version2 = source(0);
    if (is_proxied_array) {
      sources.set("length", source(
        /** @type {any[]} */
        value.length
      ));
    }
    var metadata;
    return new Proxy(
      /** @type {any} */
      value,
      {
        defineProperty(_, prop2, descriptor) {
          if (!("value" in descriptor) || descriptor.configurable === false || descriptor.enumerable === false || descriptor.writable === false) {
            state_descriptors_fixed();
          }
          var s = sources.get(prop2);
          if (s === undefined) {
            s = source(descriptor.value);
            sources.set(prop2, s);
          } else {
            set(s, proxy(descriptor.value, metadata));
          }
          return true;
        },
        deleteProperty(target, prop2) {
          var s = sources.get(prop2);
          if (s === undefined) {
            if (prop2 in target) {
              sources.set(prop2, source(UNINITIALIZED));
            }
          } else {
            if (is_proxied_array && typeof prop2 === "string") {
              var ls = (
                /** @type {Source<number>} */
                sources.get("length")
              );
              var n = Number(prop2);
              if (Number.isInteger(n) && n < ls.v) {
                set(ls, n);
              }
            }
            set(s, UNINITIALIZED);
            update_version(version2);
          }
          return true;
        },
        get(target, prop2, receiver) {
          var _a;
          if (prop2 === STATE_SYMBOL) {
            return value;
          }
          var s = sources.get(prop2);
          var exists = prop2 in target;
          if (s === undefined && (!exists || ((_a = get_descriptor(target, prop2)) == null ? undefined : _a.writable))) {
            s = source(proxy(exists ? target[prop2] : UNINITIALIZED, metadata));
            sources.set(prop2, s);
          }
          if (s !== undefined) {
            var v = get$1(s);
            return v === UNINITIALIZED ? undefined : v;
          }
          return Reflect.get(target, prop2, receiver);
        },
        getOwnPropertyDescriptor(target, prop2) {
          var descriptor = Reflect.getOwnPropertyDescriptor(target, prop2);
          if (descriptor && "value" in descriptor) {
            var s = sources.get(prop2);
            if (s) descriptor.value = get$1(s);
          } else if (descriptor === undefined) {
            var source2 = sources.get(prop2);
            var value2 = source2 == null ? undefined : source2.v;
            if (source2 !== undefined && value2 !== UNINITIALIZED) {
              return {
                enumerable: true,
                configurable: true,
                value: value2,
                writable: true
              };
            }
          }
          return descriptor;
        },
        has(target, prop2) {
          var _a;
          if (prop2 === STATE_SYMBOL) {
            return true;
          }
          var s = sources.get(prop2);
          var has = s !== undefined && s.v !== UNINITIALIZED || Reflect.has(target, prop2);
          if (s !== undefined || active_effect !== null && (!has || ((_a = get_descriptor(target, prop2)) == null ? undefined : _a.writable))) {
            if (s === undefined) {
              s = source(has ? proxy(target[prop2], metadata) : UNINITIALIZED);
              sources.set(prop2, s);
            }
            var value2 = get$1(s);
            if (value2 === UNINITIALIZED) {
              return false;
            }
          }
          return has;
        },
        set(target, prop2, value2, receiver) {
          var _a;
          var s = sources.get(prop2);
          var has = prop2 in target;
          if (is_proxied_array && prop2 === "length") {
            for (var i = value2; i < /** @type {Source<number>} */
            s.v; i += 1) {
              var other_s = sources.get(i + "");
              if (other_s !== undefined) {
                set(other_s, UNINITIALIZED);
              } else if (i in target) {
                other_s = source(UNINITIALIZED);
                sources.set(i + "", other_s);
              }
            }
          }
          if (s === undefined) {
            if (!has || ((_a = get_descriptor(target, prop2)) == null ? undefined : _a.writable)) {
              s = source(undefined);
              set(s, proxy(value2, metadata));
              sources.set(prop2, s);
            }
          } else {
            has = s.v !== UNINITIALIZED;
            set(s, proxy(value2, metadata));
          }
          var descriptor = Reflect.getOwnPropertyDescriptor(target, prop2);
          if (descriptor == null ? undefined : descriptor.set) {
            descriptor.set.call(receiver, value2);
          }
          if (!has) {
            if (is_proxied_array && typeof prop2 === "string") {
              var ls = (
                /** @type {Source<number>} */
                sources.get("length")
              );
              var n = Number(prop2);
              if (Number.isInteger(n) && n >= ls.v) {
                set(ls, n + 1);
              }
            }
            update_version(version2);
          }
          return true;
        },
        ownKeys(target) {
          get$1(version2);
          var own_keys = Reflect.ownKeys(target).filter((key2) => {
            var source3 = sources.get(key2);
            return source3 === undefined || source3.v !== UNINITIALIZED;
          });
          for (var [key, source2] of sources) {
            if (source2.v !== UNINITIALIZED && !(key in target)) {
              own_keys.push(key);
            }
          }
          return own_keys;
        },
        setPrototypeOf() {
          state_prototype_fixed();
        }
      }
    );
  }
  function update_version(signal, d = 1) {
    set(signal, signal.v + d);
  }
  var $window;
  var first_child_getter;
  var next_sibling_getter;
  function init_operations() {
    if ($window !== undefined) {
      return;
    }
    $window = window;
    var element_prototype = Element.prototype;
    var node_prototype = Node.prototype;
    first_child_getter = get_descriptor(node_prototype, "firstChild").get;
    next_sibling_getter = get_descriptor(node_prototype, "nextSibling").get;
    element_prototype.__click = undefined;
    element_prototype.__className = "";
    element_prototype.__attributes = null;
    element_prototype.__styles = null;
    element_prototype.__e = undefined;
    Text.prototype.__t = undefined;
  }
  function create_text(value = "") {
    return document.createTextNode(value);
  }
  // @__NO_SIDE_EFFECTS__
  function get_first_child(node) {
    return first_child_getter.call(node);
  }
  // @__NO_SIDE_EFFECTS__
  function get_next_sibling(node) {
    return next_sibling_getter.call(node);
  }
  function child(node, is_text) {
    {
      return /* @__PURE__ */ get_first_child(node);
    }
  }
  function first_child(fragment, is_text) {
    {
      var first = (
        /** @type {DocumentFragment} */
        /* @__PURE__ */ get_first_child(
          /** @type {Node} */
          fragment
        )
      );
      if (first instanceof Comment && first.data === "") return /* @__PURE__ */ get_next_sibling(first);
      return first;
    }
  }
  function sibling(node, count = 1, is_text = false) {
    let next_sibling = node;
    while (count--) {
      next_sibling = /** @type {TemplateNode} */
      /* @__PURE__ */ get_next_sibling(next_sibling);
    }
    {
      return next_sibling;
    }
  }
  function clear_text_content(node) {
    node.textContent = "";
  }
  // @__NO_SIDE_EFFECTS__
  function derived(fn) {
    var flags = DERIVED | DIRTY;
    if (active_effect === null) {
      flags |= UNOWNED;
    } else {
      active_effect.f |= EFFECT_HAS_DERIVED;
    }
    var parent_derived = active_reaction !== null && (active_reaction.f & DERIVED) !== 0 ? (
      /** @type {Derived} */
      active_reaction
    ) : null;
    const signal = {
      children: null,
      ctx: component_context,
      deps: null,
      equals,
      f: flags,
      fn,
      reactions: null,
      rv: 0,
      v: (
        /** @type {V} */
        null
      ),
      wv: 0,
      parent: parent_derived ?? active_effect
    };
    if (parent_derived !== null) {
      (parent_derived.children ?? (parent_derived.children = [])).push(signal);
    }
    return signal;
  }
  // @__NO_SIDE_EFFECTS__
  function derived_safe_equal(fn) {
    const signal = /* @__PURE__ */ derived(fn);
    signal.equals = safe_equals;
    return signal;
  }
  function destroy_derived_children(derived2) {
    var children = derived2.children;
    if (children !== null) {
      derived2.children = null;
      for (var i = 0; i < children.length; i += 1) {
        var child2 = children[i];
        if ((child2.f & DERIVED) !== 0) {
          destroy_derived(
            /** @type {Derived} */
            child2
          );
        } else {
          destroy_effect(
            /** @type {Effect} */
            child2
          );
        }
      }
    }
  }
  function get_derived_parent_effect(derived2) {
    var parent = derived2.parent;
    while (parent !== null) {
      if ((parent.f & DERIVED) === 0) {
        return (
          /** @type {Effect} */
          parent
        );
      }
      parent = parent.parent;
    }
    return null;
  }
  function execute_derived(derived2) {
    var value;
    var prev_active_effect = active_effect;
    set_active_effect(get_derived_parent_effect(derived2));
    {
      try {
        destroy_derived_children(derived2);
        value = update_reaction(derived2);
      } finally {
        set_active_effect(prev_active_effect);
      }
    }
    return value;
  }
  function update_derived(derived2) {
    var value = execute_derived(derived2);
    var status = (skip_reaction || (derived2.f & UNOWNED) !== 0) && derived2.deps !== null ? MAYBE_DIRTY : CLEAN;
    set_signal_status(derived2, status);
    if (!derived2.equals(value)) {
      derived2.v = value;
      derived2.wv = increment_write_version();
    }
  }
  function destroy_derived(derived2) {
    destroy_derived_children(derived2);
    remove_reactions(derived2, 0);
    set_signal_status(derived2, DESTROYED);
    derived2.v = derived2.children = derived2.deps = derived2.ctx = derived2.reactions = null;
  }
  function validate_effect(rune) {
    if (active_effect === null && active_reaction === null) {
      effect_orphan();
    }
    if (active_reaction !== null && (active_reaction.f & UNOWNED) !== 0) {
      effect_in_unowned_derived();
    }
    if (is_destroying_effect) {
      effect_in_teardown();
    }
  }
  function push_effect(effect2, parent_effect) {
    var parent_last = parent_effect.last;
    if (parent_last === null) {
      parent_effect.last = parent_effect.first = effect2;
    } else {
      parent_last.next = effect2;
      effect2.prev = parent_last;
      parent_effect.last = effect2;
    }
  }
  function create_effect(type, fn, sync, push2 = true) {
    var is_root = (type & ROOT_EFFECT) !== 0;
    var parent_effect = active_effect;
    var effect2 = {
      ctx: component_context,
      deps: null,
      deriveds: null,
      nodes_start: null,
      nodes_end: null,
      f: type | DIRTY,
      first: null,
      fn,
      last: null,
      next: null,
      parent: is_root ? null : parent_effect,
      prev: null,
      teardown: null,
      transitions: null,
      wv: 0
    };
    if (sync) {
      var previously_flushing_effect = is_flushing_effect;
      try {
        set_is_flushing_effect(true);
        update_effect(effect2);
        effect2.f |= EFFECT_RAN;
      } catch (e) {
        destroy_effect(effect2);
        throw e;
      } finally {
        set_is_flushing_effect(previously_flushing_effect);
      }
    } else if (fn !== null) {
      schedule_effect(effect2);
    }
    var inert = sync && effect2.deps === null && effect2.first === null && effect2.nodes_start === null && effect2.teardown === null && (effect2.f & (EFFECT_HAS_DERIVED | BOUNDARY_EFFECT)) === 0;
    if (!inert && !is_root && push2) {
      if (parent_effect !== null) {
        push_effect(effect2, parent_effect);
      }
      if (active_reaction !== null && (active_reaction.f & DERIVED) !== 0) {
        var derived2 = (
          /** @type {Derived} */
          active_reaction
        );
        (derived2.children ?? (derived2.children = [])).push(effect2);
      }
    }
    return effect2;
  }
  function teardown(fn) {
    const effect2 = create_effect(RENDER_EFFECT, null, false);
    set_signal_status(effect2, CLEAN);
    effect2.teardown = fn;
    return effect2;
  }
  function user_effect(fn) {
    validate_effect();
    var defer = active_effect !== null && (active_effect.f & BRANCH_EFFECT) !== 0 && component_context !== null && !component_context.m;
    if (defer) {
      var context = (
        /** @type {ComponentContext} */
        component_context
      );
      (context.e ?? (context.e = [])).push({
        fn,
        effect: active_effect,
        reaction: active_reaction
      });
    } else {
      var signal = effect(fn);
      return signal;
    }
  }
  function user_pre_effect(fn) {
    validate_effect();
    return render_effect(fn);
  }
  function component_root(fn) {
    const effect2 = create_effect(ROOT_EFFECT, fn, true);
    return (options = {}) => {
      return new Promise((fulfil) => {
        if (options.outro) {
          pause_effect(effect2, () => {
            destroy_effect(effect2);
            fulfil(undefined);
          });
        } else {
          destroy_effect(effect2);
          fulfil(undefined);
        }
      });
    };
  }
  function effect(fn) {
    return create_effect(EFFECT, fn, false);
  }
  function legacy_pre_effect(deps, fn) {
    var context = (
      /** @type {ComponentContextLegacy} */
      component_context
    );
    var token = { effect: null, ran: false };
    context.l.r1.push(token);
    token.effect = render_effect(() => {
      deps();
      if (token.ran) return;
      token.ran = true;
      set(context.l.r2, true);
      untrack(fn);
    });
  }
  function legacy_pre_effect_reset() {
    var context = (
      /** @type {ComponentContextLegacy} */
      component_context
    );
    render_effect(() => {
      if (!get$1(context.l.r2)) return;
      for (var token of context.l.r1) {
        var effect2 = token.effect;
        if ((effect2.f & CLEAN) !== 0) {
          set_signal_status(effect2, MAYBE_DIRTY);
        }
        if (check_dirtiness(effect2)) {
          update_effect(effect2);
        }
        token.ran = false;
      }
      context.l.r2.v = false;
    });
  }
  function render_effect(fn) {
    return create_effect(RENDER_EFFECT, fn, true);
  }
  function template_effect(fn, thunks = [], d = derived) {
    const deriveds = thunks.map(d);
    const effect2 = () => fn(...deriveds.map(get$1));
    return block(effect2);
  }
  function block(fn, flags = 0) {
    return create_effect(RENDER_EFFECT | BLOCK_EFFECT | flags, fn, true);
  }
  function branch(fn, push2 = true) {
    return create_effect(RENDER_EFFECT | BRANCH_EFFECT, fn, true, push2);
  }
  function execute_effect_teardown(effect2) {
    var teardown2 = effect2.teardown;
    if (teardown2 !== null) {
      const previously_destroying_effect = is_destroying_effect;
      const previous_reaction = active_reaction;
      set_is_destroying_effect(true);
      set_active_reaction(null);
      try {
        teardown2.call(null);
      } finally {
        set_is_destroying_effect(previously_destroying_effect);
        set_active_reaction(previous_reaction);
      }
    }
  }
  function destroy_effect_deriveds(signal) {
    var deriveds = signal.deriveds;
    if (deriveds !== null) {
      signal.deriveds = null;
      for (var i = 0; i < deriveds.length; i += 1) {
        destroy_derived(deriveds[i]);
      }
    }
  }
  function destroy_effect_children(signal, remove_dom = false) {
    var effect2 = signal.first;
    signal.first = signal.last = null;
    while (effect2 !== null) {
      var next = effect2.next;
      destroy_effect(effect2, remove_dom);
      effect2 = next;
    }
  }
  function destroy_block_effect_children(signal) {
    var effect2 = signal.first;
    while (effect2 !== null) {
      var next = effect2.next;
      if ((effect2.f & BRANCH_EFFECT) === 0) {
        destroy_effect(effect2);
      }
      effect2 = next;
    }
  }
  function destroy_effect(effect2, remove_dom = true) {
    var removed = false;
    if ((remove_dom || (effect2.f & HEAD_EFFECT) !== 0) && effect2.nodes_start !== null) {
      var node = effect2.nodes_start;
      var end = effect2.nodes_end;
      while (node !== null) {
        var next = node === end ? null : (
          /** @type {TemplateNode} */
          /* @__PURE__ */ get_next_sibling(node)
        );
        node.remove();
        node = next;
      }
      removed = true;
    }
    destroy_effect_children(effect2, remove_dom && !removed);
    destroy_effect_deriveds(effect2);
    remove_reactions(effect2, 0);
    set_signal_status(effect2, DESTROYED);
    var transitions = effect2.transitions;
    if (transitions !== null) {
      for (const transition2 of transitions) {
        transition2.stop();
      }
    }
    execute_effect_teardown(effect2);
    var parent = effect2.parent;
    if (parent !== null && parent.first !== null) {
      unlink_effect(effect2);
    }
    effect2.next = effect2.prev = effect2.teardown = effect2.ctx = effect2.deps = effect2.fn = effect2.nodes_start = effect2.nodes_end = null;
  }
  function unlink_effect(effect2) {
    var parent = effect2.parent;
    var prev = effect2.prev;
    var next = effect2.next;
    if (prev !== null) prev.next = next;
    if (next !== null) next.prev = prev;
    if (parent !== null) {
      if (parent.first === effect2) parent.first = next;
      if (parent.last === effect2) parent.last = prev;
    }
  }
  function pause_effect(effect2, callback) {
    var transitions = [];
    pause_children(effect2, transitions, true);
    run_out_transitions(transitions, () => {
      destroy_effect(effect2);
      if (callback) callback();
    });
  }
  function run_out_transitions(transitions, fn) {
    var remaining = transitions.length;
    if (remaining > 0) {
      var check = () => --remaining || fn();
      for (var transition2 of transitions) {
        transition2.out(check);
      }
    } else {
      fn();
    }
  }
  function pause_children(effect2, transitions, local) {
    if ((effect2.f & INERT) !== 0) return;
    effect2.f ^= INERT;
    if (effect2.transitions !== null) {
      for (const transition2 of effect2.transitions) {
        if (transition2.is_global || local) {
          transitions.push(transition2);
        }
      }
    }
    var child2 = effect2.first;
    while (child2 !== null) {
      var sibling2 = child2.next;
      var transparent = (child2.f & EFFECT_TRANSPARENT) !== 0 || (child2.f & BRANCH_EFFECT) !== 0;
      pause_children(child2, transitions, transparent ? local : false);
      child2 = sibling2;
    }
  }
  function resume_effect(effect2) {
    resume_children(effect2, true);
  }
  function resume_children(effect2, local) {
    if ((effect2.f & INERT) === 0) return;
    effect2.f ^= INERT;
    if ((effect2.f & CLEAN) === 0) {
      effect2.f ^= CLEAN;
    }
    if (check_dirtiness(effect2)) {
      set_signal_status(effect2, DIRTY);
      schedule_effect(effect2);
    }
    var child2 = effect2.first;
    while (child2 !== null) {
      var sibling2 = child2.next;
      var transparent = (child2.f & EFFECT_TRANSPARENT) !== 0 || (child2.f & BRANCH_EFFECT) !== 0;
      resume_children(child2, transparent ? local : false);
      child2 = sibling2;
    }
    if (effect2.transitions !== null) {
      for (const transition2 of effect2.transitions) {
        if (transition2.is_global || local) {
          transition2.in();
        }
      }
    }
  }
  let is_micro_task_queued$1 = false;
  let current_queued_micro_tasks = [];
  function process_micro_tasks() {
    is_micro_task_queued$1 = false;
    const tasks = current_queued_micro_tasks.slice();
    current_queued_micro_tasks = [];
    run_all(tasks);
  }
  function queue_micro_task(fn) {
    if (!is_micro_task_queued$1) {
      is_micro_task_queued$1 = true;
      queueMicrotask(process_micro_tasks);
    }
    current_queued_micro_tasks.push(fn);
  }
  function invalid_default_snippet() {
    {
      throw new Error(`https://svelte.dev/e/invalid_default_snippet`);
    }
  }
  function lifecycle_outside_component(name) {
    {
      throw new Error(`https://svelte.dev/e/lifecycle_outside_component`);
    }
  }
  let is_throwing_error = false;
  let is_micro_task_queued = false;
  let last_scheduled_effect = null;
  let is_flushing_effect = false;
  let is_destroying_effect = false;
  function set_is_flushing_effect(value) {
    is_flushing_effect = value;
  }
  function set_is_destroying_effect(value) {
    is_destroying_effect = value;
  }
  let queued_root_effects = [];
  let flush_count = 0;
  let active_reaction = null;
  let untracking = false;
  function set_active_reaction(reaction) {
    active_reaction = reaction;
  }
  let active_effect = null;
  function set_active_effect(effect2) {
    active_effect = effect2;
  }
  let derived_sources = null;
  function set_derived_sources(sources) {
    derived_sources = sources;
  }
  let new_deps = null;
  let skipped_deps = 0;
  let untracked_writes = null;
  function set_untracked_writes(value) {
    untracked_writes = value;
  }
  let write_version = 1;
  let read_version = 0;
  let skip_reaction = false;
  let component_context = null;
  function increment_write_version() {
    return ++write_version;
  }
  function is_runes() {
    return !legacy_mode_flag || component_context !== null && component_context.l === null;
  }
  function check_dirtiness(reaction) {
    var _a;
    var flags = reaction.f;
    if ((flags & DIRTY) !== 0) {
      return true;
    }
    if ((flags & MAYBE_DIRTY) !== 0) {
      var dependencies = reaction.deps;
      var is_unowned = (flags & UNOWNED) !== 0;
      if (dependencies !== null) {
        var i;
        var dependency;
        var is_disconnected = (flags & DISCONNECTED) !== 0;
        var is_unowned_connected = is_unowned && active_effect !== null && !skip_reaction;
        var length = dependencies.length;
        if (is_disconnected || is_unowned_connected) {
          for (i = 0; i < length; i++) {
            dependency = dependencies[i];
            if (is_disconnected || !((_a = dependency == null ? undefined : dependency.reactions) == null ? undefined : _a.includes(reaction))) {
              (dependency.reactions ?? (dependency.reactions = [])).push(reaction);
            }
          }
          if (is_disconnected) {
            reaction.f ^= DISCONNECTED;
          }
        }
        for (i = 0; i < length; i++) {
          dependency = dependencies[i];
          if (check_dirtiness(
            /** @type {Derived} */
            dependency
          )) {
            update_derived(
              /** @type {Derived} */
              dependency
            );
          }
          if (dependency.wv > reaction.wv) {
            return true;
          }
        }
      }
      if (!is_unowned || active_effect !== null && !skip_reaction) {
        set_signal_status(reaction, CLEAN);
      }
    }
    return false;
  }
  function propagate_error(error, effect2) {
    var current = effect2;
    while (current !== null) {
      if ((current.f & BOUNDARY_EFFECT) !== 0) {
        try {
          current.fn(error);
          return;
        } catch {
          current.f ^= BOUNDARY_EFFECT;
        }
      }
      current = current.parent;
    }
    is_throwing_error = false;
    throw error;
  }
  function should_rethrow_error(effect2) {
    return (effect2.f & DESTROYED) === 0 && (effect2.parent === null || (effect2.parent.f & BOUNDARY_EFFECT) === 0);
  }
  function handle_error(error, effect2, previous_effect, component_context2) {
    if (is_throwing_error) {
      if (previous_effect === null) {
        is_throwing_error = false;
      }
      if (should_rethrow_error(effect2)) {
        throw error;
      }
      return;
    }
    if (previous_effect !== null) {
      is_throwing_error = true;
    }
    {
      propagate_error(error, effect2);
      return;
    }
  }
  function schedule_possible_effect_self_invalidation(signal, effect2, depth = 0) {
    var reactions = signal.reactions;
    if (reactions === null) return;
    for (var i = 0; i < reactions.length; i++) {
      var reaction = reactions[i];
      if ((reaction.f & DERIVED) !== 0) {
        schedule_possible_effect_self_invalidation(
          /** @type {Derived} */
          reaction,
          effect2,
          depth + 1
        );
      } else if (effect2 === reaction) {
        if (depth === 0) {
          set_signal_status(reaction, DIRTY);
        } else if ((reaction.f & CLEAN) !== 0) {
          set_signal_status(reaction, MAYBE_DIRTY);
        }
        schedule_effect(
          /** @type {Effect} */
          reaction
        );
      }
    }
  }
  function update_reaction(reaction) {
    var _a;
    var previous_deps = new_deps;
    var previous_skipped_deps = skipped_deps;
    var previous_untracked_writes = untracked_writes;
    var previous_reaction = active_reaction;
    var previous_skip_reaction = skip_reaction;
    var prev_derived_sources = derived_sources;
    var previous_component_context = component_context;
    var previous_untracking = untracking;
    var flags = reaction.f;
    new_deps = /** @type {null | Value[]} */
    null;
    skipped_deps = 0;
    untracked_writes = null;
    active_reaction = (flags & (BRANCH_EFFECT | ROOT_EFFECT)) === 0 ? reaction : null;
    skip_reaction = !is_flushing_effect && (flags & UNOWNED) !== 0;
    derived_sources = null;
    component_context = reaction.ctx;
    untracking = false;
    read_version++;
    try {
      var result = (
        /** @type {Function} */
        (0, reaction.fn)()
      );
      var deps = reaction.deps;
      if (new_deps !== null) {
        var i;
        remove_reactions(reaction, skipped_deps);
        if (deps !== null && skipped_deps > 0) {
          deps.length = skipped_deps + new_deps.length;
          for (i = 0; i < new_deps.length; i++) {
            deps[skipped_deps + i] = new_deps[i];
          }
        } else {
          reaction.deps = deps = new_deps;
        }
        if (!skip_reaction) {
          for (i = skipped_deps; i < deps.length; i++) {
            ((_a = deps[i]).reactions ?? (_a.reactions = [])).push(reaction);
          }
        }
      } else if (deps !== null && skipped_deps < deps.length) {
        remove_reactions(reaction, skipped_deps);
        deps.length = skipped_deps;
      }
      if (is_runes() && untracked_writes !== null && (reaction.f & (DERIVED | MAYBE_DIRTY | DIRTY)) === 0) {
        for (i = 0; i < /** @type {Source[]} */
        untracked_writes.length; i++) {
          schedule_possible_effect_self_invalidation(
            untracked_writes[i],
            /** @type {Effect} */
            reaction
          );
        }
      }
      if (previous_reaction !== null) {
        read_version++;
      }
      return result;
    } finally {
      new_deps = previous_deps;
      skipped_deps = previous_skipped_deps;
      untracked_writes = previous_untracked_writes;
      active_reaction = previous_reaction;
      skip_reaction = previous_skip_reaction;
      derived_sources = prev_derived_sources;
      component_context = previous_component_context;
      untracking = previous_untracking;
    }
  }
  function remove_reaction(signal, dependency) {
    let reactions = dependency.reactions;
    if (reactions !== null) {
      var index2 = index_of.call(reactions, signal);
      if (index2 !== -1) {
        var new_length = reactions.length - 1;
        if (new_length === 0) {
          reactions = dependency.reactions = null;
        } else {
          reactions[index2] = reactions[new_length];
          reactions.pop();
        }
      }
    }
    if (reactions === null && (dependency.f & DERIVED) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
    // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
    // allows us to skip the expensive work of disconnecting and immediately reconnecting it
    (new_deps === null || !new_deps.includes(dependency))) {
      set_signal_status(dependency, MAYBE_DIRTY);
      if ((dependency.f & (UNOWNED | DISCONNECTED)) === 0) {
        dependency.f ^= DISCONNECTED;
      }
      remove_reactions(
        /** @type {Derived} **/
        dependency,
        0
      );
    }
  }
  function remove_reactions(signal, start_index) {
    var dependencies = signal.deps;
    if (dependencies === null) return;
    for (var i = start_index; i < dependencies.length; i++) {
      remove_reaction(signal, dependencies[i]);
    }
  }
  function update_effect(effect2) {
    var flags = effect2.f;
    if ((flags & DESTROYED) !== 0) {
      return;
    }
    set_signal_status(effect2, CLEAN);
    var previous_effect = active_effect;
    var previous_component_context = component_context;
    active_effect = effect2;
    try {
      if ((flags & BLOCK_EFFECT) !== 0) {
        destroy_block_effect_children(effect2);
      } else {
        destroy_effect_children(effect2);
      }
      destroy_effect_deriveds(effect2);
      execute_effect_teardown(effect2);
      var teardown2 = update_reaction(effect2);
      effect2.teardown = typeof teardown2 === "function" ? teardown2 : null;
      effect2.wv = write_version;
      var deps = effect2.deps;
      var dep;
      if (DEV && tracing_mode_flag && (effect2.f & DIRTY) !== 0 && deps !== null) ;
      if (DEV) ;
    } catch (error) {
      handle_error(error, effect2, previous_effect, previous_component_context || effect2.ctx);
    } finally {
      active_effect = previous_effect;
    }
  }
  function infinite_loop_guard() {
    if (flush_count > 1e3) {
      flush_count = 0;
      try {
        effect_update_depth_exceeded();
      } catch (error) {
        if (last_scheduled_effect !== null) {
          {
            handle_error(error, last_scheduled_effect, null);
          }
        } else {
          throw error;
        }
      }
    }
    flush_count++;
  }
  function flush_queued_root_effects(root_effects) {
    var length = root_effects.length;
    if (length === 0) {
      return;
    }
    infinite_loop_guard();
    var previously_flushing_effect = is_flushing_effect;
    is_flushing_effect = true;
    try {
      for (var i = 0; i < length; i++) {
        var effect2 = root_effects[i];
        if ((effect2.f & CLEAN) === 0) {
          effect2.f ^= CLEAN;
        }
        var collected_effects = [];
        process_effects(effect2, collected_effects);
        flush_queued_effects(collected_effects);
      }
    } finally {
      is_flushing_effect = previously_flushing_effect;
    }
  }
  function flush_queued_effects(effects) {
    var length = effects.length;
    if (length === 0) return;
    for (var i = 0; i < length; i++) {
      var effect2 = effects[i];
      if ((effect2.f & (DESTROYED | INERT)) === 0) {
        try {
          if (check_dirtiness(effect2)) {
            update_effect(effect2);
            if (effect2.deps === null && effect2.first === null && effect2.nodes_start === null) {
              if (effect2.teardown === null) {
                unlink_effect(effect2);
              } else {
                effect2.fn = null;
              }
            }
          }
        } catch (error) {
          handle_error(error, effect2, null, effect2.ctx);
        }
      }
    }
  }
  function process_deferred() {
    is_micro_task_queued = false;
    if (flush_count > 1001) {
      return;
    }
    const previous_queued_root_effects = queued_root_effects;
    queued_root_effects = [];
    flush_queued_root_effects(previous_queued_root_effects);
    if (!is_micro_task_queued) {
      flush_count = 0;
      last_scheduled_effect = null;
    }
  }
  function schedule_effect(signal) {
    {
      if (!is_micro_task_queued) {
        is_micro_task_queued = true;
        queueMicrotask(process_deferred);
      }
    }
    last_scheduled_effect = signal;
    var effect2 = signal;
    while (effect2.parent !== null) {
      effect2 = effect2.parent;
      var flags = effect2.f;
      if ((flags & (ROOT_EFFECT | BRANCH_EFFECT)) !== 0) {
        if ((flags & CLEAN) === 0) return;
        effect2.f ^= CLEAN;
      }
    }
    queued_root_effects.push(effect2);
  }
  function process_effects(effect2, collected_effects) {
    var current_effect = effect2.first;
    var effects = [];
    main_loop: while (current_effect !== null) {
      var flags = current_effect.f;
      var is_branch = (flags & BRANCH_EFFECT) !== 0;
      var is_skippable_branch = is_branch && (flags & CLEAN) !== 0;
      var sibling2 = current_effect.next;
      if (!is_skippable_branch && (flags & INERT) === 0) {
        if ((flags & RENDER_EFFECT) !== 0) {
          if (is_branch) {
            current_effect.f ^= CLEAN;
          } else {
            try {
              if (check_dirtiness(current_effect)) {
                update_effect(current_effect);
              }
            } catch (error) {
              handle_error(error, current_effect, null, current_effect.ctx);
            }
          }
          var child2 = current_effect.first;
          if (child2 !== null) {
            current_effect = child2;
            continue;
          }
        } else if ((flags & EFFECT) !== 0) {
          effects.push(current_effect);
        }
      }
      if (sibling2 === null) {
        let parent = current_effect.parent;
        while (parent !== null) {
          if (effect2 === parent) {
            break main_loop;
          }
          var parent_sibling = parent.next;
          if (parent_sibling !== null) {
            current_effect = parent_sibling;
            continue main_loop;
          }
          parent = parent.parent;
        }
      }
      current_effect = sibling2;
    }
    for (var i = 0; i < effects.length; i++) {
      child2 = effects[i];
      collected_effects.push(child2);
      process_effects(child2, collected_effects);
    }
  }
  function get$1(signal) {
    var _a;
    var flags = signal.f;
    var is_derived = (flags & DERIVED) !== 0;
    if (is_derived && (flags & DESTROYED) !== 0) {
      var value = execute_derived(
        /** @type {Derived} */
        signal
      );
      destroy_derived(
        /** @type {Derived} */
        signal
      );
      return value;
    }
    if (active_reaction !== null && !untracking) {
      if (derived_sources !== null && derived_sources.includes(signal)) {
        state_unsafe_local_read();
      }
      var deps = active_reaction.deps;
      if (signal.rv < read_version) {
        signal.rv = read_version;
        if (new_deps === null && deps !== null && deps[skipped_deps] === signal) {
          skipped_deps++;
        } else if (new_deps === null) {
          new_deps = [signal];
        } else {
          new_deps.push(signal);
        }
      }
    } else if (is_derived && /** @type {Derived} */
    signal.deps === null) {
      var derived2 = (
        /** @type {Derived} */
        signal
      );
      var parent = derived2.parent;
      var target = derived2;
      while (parent !== null) {
        if ((parent.f & DERIVED) !== 0) {
          var parent_derived = (
            /** @type {Derived} */
            parent
          );
          target = parent_derived;
          parent = parent_derived.parent;
        } else {
          var parent_effect = (
            /** @type {Effect} */
            parent
          );
          if (!((_a = parent_effect.deriveds) == null ? undefined : _a.includes(target))) {
            (parent_effect.deriveds ?? (parent_effect.deriveds = [])).push(target);
          }
          break;
        }
      }
    }
    if (is_derived) {
      derived2 = /** @type {Derived} */
      signal;
      if (check_dirtiness(derived2)) {
        update_derived(derived2);
      }
    }
    return signal.v;
  }
  function untrack(fn) {
    var previous_untracking = untracking;
    try {
      untracking = true;
      return fn();
    } finally {
      untracking = previous_untracking;
    }
  }
  const STATUS_MASK = -7169;
  function set_signal_status(signal, status) {
    signal.f = signal.f & STATUS_MASK | status;
  }
  function push(props, runes = false, fn) {
    component_context = {
      p: component_context,
      c: null,
      e: null,
      m: false,
      s: props,
      x: null,
      l: null
    };
    if (legacy_mode_flag && !runes) {
      component_context.l = {
        s: null,
        u: null,
        r1: [],
        r2: source(false)
      };
    }
  }
  function pop(component) {
    const context_stack_item = component_context;
    if (context_stack_item !== null) {
      if (component !== undefined) {
        context_stack_item.x = component;
      }
      const component_effects = context_stack_item.e;
      if (component_effects !== null) {
        var previous_effect = active_effect;
        var previous_reaction = active_reaction;
        context_stack_item.e = null;
        try {
          for (var i = 0; i < component_effects.length; i++) {
            var component_effect = component_effects[i];
            set_active_effect(component_effect.effect);
            set_active_reaction(component_effect.reaction);
            effect(component_effect.fn);
          }
        } finally {
          set_active_effect(previous_effect);
          set_active_reaction(previous_reaction);
        }
      }
      component_context = context_stack_item.p;
      context_stack_item.m = true;
    }
    return component || /** @type {T} */
    {};
  }
  function deep_read_state(value) {
    if (typeof value !== "object" || !value || value instanceof EventTarget) {
      return;
    }
    if (STATE_SYMBOL in value) {
      deep_read(value);
    } else if (!Array.isArray(value)) {
      for (let key in value) {
        const prop2 = value[key];
        if (typeof prop2 === "object" && prop2 && STATE_SYMBOL in prop2) {
          deep_read(prop2);
        }
      }
    }
  }
  function deep_read(value, visited = /* @__PURE__ */ new Set()) {
    if (typeof value === "object" && value !== null && // We don't want to traverse DOM elements
    !(value instanceof EventTarget) && !visited.has(value)) {
      visited.add(value);
      if (value instanceof Date) {
        value.getTime();
      }
      for (let key in value) {
        try {
          deep_read(value[key], visited);
        } catch (e) {
        }
      }
      const proto = get_prototype_of(value);
      if (proto !== Object.prototype && proto !== Array.prototype && proto !== Map.prototype && proto !== Set.prototype && proto !== Date.prototype) {
        const descriptors = get_descriptors(proto);
        for (let key in descriptors) {
          const get2 = descriptors[key].get;
          if (get2) {
            try {
              get2.call(value);
            } catch (e) {
            }
          }
        }
      }
    }
  }
  const PASSIVE_EVENTS = ["touchstart", "touchmove"];
  function is_passive_event(name) {
    return PASSIVE_EVENTS.includes(name);
  }
  let listening_to_form_reset = false;
  function add_form_reset_listener() {
    if (!listening_to_form_reset) {
      listening_to_form_reset = true;
      document.addEventListener(
        "reset",
        (evt) => {
          Promise.resolve().then(() => {
            var _a;
            if (!evt.defaultPrevented) {
              for (
                const e of
                /**@type {HTMLFormElement} */
                evt.target.elements
              ) {
                (_a = e.__on_r) == null ? undefined : _a.call(e);
              }
            }
          });
        },
        // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
        { capture: true }
      );
    }
  }
  function without_reactive_context(fn) {
    var previous_reaction = active_reaction;
    var previous_effect = active_effect;
    set_active_reaction(null);
    set_active_effect(null);
    try {
      return fn();
    } finally {
      set_active_reaction(previous_reaction);
      set_active_effect(previous_effect);
    }
  }
  function listen_to_event_and_reset_event(element, event2, handler, on_reset = handler) {
    element.addEventListener(event2, () => without_reactive_context(handler));
    const prev = element.__on_r;
    if (prev) {
      element.__on_r = () => {
        prev();
        on_reset(true);
      };
    } else {
      element.__on_r = () => on_reset(true);
    }
    add_form_reset_listener();
  }
  const all_registered_events = /* @__PURE__ */ new Set();
  const root_event_handles = /* @__PURE__ */ new Set();
  function create_event(event_name, dom, handler, options = {}) {
    function target_handler(event2) {
      if (!options.capture) {
        handle_event_propagation.call(dom, event2);
      }
      if (!event2.cancelBubble) {
        return without_reactive_context(() => {
          return handler == null ? void 0 : handler.call(this, event2);
        });
      }
    }
    if (event_name.startsWith("pointer") || event_name.startsWith("touch") || event_name === "wheel") {
      queue_micro_task(() => {
        dom.addEventListener(event_name, target_handler, options);
      });
    } else {
      dom.addEventListener(event_name, target_handler, options);
    }
    return target_handler;
  }
  function event(event_name, dom, handler, capture, passive) {
    var options = { capture, passive };
    var target_handler = create_event(event_name, dom, handler, options);
    if (dom === document.body || dom === window || dom === document) {
      teardown(() => {
        dom.removeEventListener(event_name, target_handler, options);
      });
    }
  }
  function handle_event_propagation(event2) {
    var _a;
    var handler_element = this;
    var owner_document = (
      /** @type {Node} */
      handler_element.ownerDocument
    );
    var event_name = event2.type;
    var path = ((_a = event2.composedPath) == null ? undefined : _a.call(event2)) || [];
    var current_target = (
      /** @type {null | Element} */
      path[0] || event2.target
    );
    var path_idx = 0;
    var handled_at = event2.__root;
    if (handled_at) {
      var at_idx = path.indexOf(handled_at);
      if (at_idx !== -1 && (handler_element === document || handler_element === /** @type {any} */
      window)) {
        event2.__root = handler_element;
        return;
      }
      var handler_idx = path.indexOf(handler_element);
      if (handler_idx === -1) {
        return;
      }
      if (at_idx <= handler_idx) {
        path_idx = at_idx;
      }
    }
    current_target = /** @type {Element} */
    path[path_idx] || event2.target;
    if (current_target === handler_element) return;
    define_property(event2, "currentTarget", {
      configurable: true,
      get() {
        return current_target || owner_document;
      }
    });
    var previous_reaction = active_reaction;
    var previous_effect = active_effect;
    set_active_reaction(null);
    set_active_effect(null);
    try {
      var throw_error;
      var other_errors = [];
      while (current_target !== null) {
        var parent_element = current_target.assignedSlot || current_target.parentNode || /** @type {any} */
        current_target.host || null;
        try {
          var delegated = current_target["__" + event_name];
          if (delegated !== void 0 && !/** @type {any} */
          current_target.disabled) {
            if (is_array(delegated)) {
              var [fn, ...data] = delegated;
              fn.apply(current_target, [event2, ...data]);
            } else {
              delegated.call(current_target, event2);
            }
          }
        } catch (error) {
          if (throw_error) {
            other_errors.push(error);
          } else {
            throw_error = error;
          }
        }
        if (event2.cancelBubble || parent_element === handler_element || parent_element === null) {
          break;
        }
        current_target = parent_element;
      }
      if (throw_error) {
        for (let error of other_errors) {
          queueMicrotask(() => {
            throw error;
          });
        }
        throw throw_error;
      }
    } finally {
      event2.__root = handler_element;
      delete event2.currentTarget;
      set_active_reaction(previous_reaction);
      set_active_effect(previous_effect);
    }
  }
  function create_fragment_from_html(html) {
    var elem = document.createElement("template");
    elem.innerHTML = html;
    return elem.content;
  }
  function assign_nodes(start, end) {
    var effect2 = (
      /** @type {Effect} */
      active_effect
    );
    if (effect2.nodes_start === null) {
      effect2.nodes_start = start;
      effect2.nodes_end = end;
    }
  }
  // @__NO_SIDE_EFFECTS__
  function template(content, flags) {
    var is_fragment = (flags & TEMPLATE_FRAGMENT) !== 0;
    var use_import_node = (flags & TEMPLATE_USE_IMPORT_NODE) !== 0;
    var node;
    var has_start = !content.startsWith("<!>");
    return () => {
      if (node === undefined) {
        node = create_fragment_from_html(has_start ? content : "<!>" + content);
        if (!is_fragment) node = /** @type {Node} */
        /* @__PURE__ */ get_first_child(node);
      }
      var clone = (
        /** @type {TemplateNode} */
        use_import_node ? document.importNode(node, true) : node.cloneNode(true)
      );
      if (is_fragment) {
        var start = (
          /** @type {TemplateNode} */
          /* @__PURE__ */ get_first_child(clone)
        );
        var end = (
          /** @type {TemplateNode} */
          clone.lastChild
        );
        assign_nodes(start, end);
      } else {
        assign_nodes(clone, clone);
      }
      return clone;
    };
  }
  // @__NO_SIDE_EFFECTS__
  function ns_template(content, flags, ns = "svg") {
    var has_start = !content.startsWith("<!>");
    var wrapped = `<${ns}>${has_start ? content : "<!>" + content}</${ns}>`;
    var node;
    return () => {
      if (!node) {
        var fragment = (
          /** @type {DocumentFragment} */
          create_fragment_from_html(wrapped)
        );
        var root2 = (
          /** @type {Element} */
          /* @__PURE__ */ get_first_child(fragment)
        );
        {
          node = /** @type {Element} */
          /* @__PURE__ */ get_first_child(root2);
        }
      }
      var clone = (
        /** @type {TemplateNode} */
        node.cloneNode(true)
      );
      {
        assign_nodes(clone, clone);
      }
      return clone;
    };
  }
  function comment() {
    var frag = document.createDocumentFragment();
    var start = document.createComment("");
    var anchor = create_text();
    frag.append(start, anchor);
    assign_nodes(start, anchor);
    return frag;
  }
  function append(anchor, dom) {
    if (anchor === null) {
      return;
    }
    anchor.before(
      /** @type {Node} */
      dom
    );
  }
  let should_intro = true;
  function set_text(text, value) {
    var str = value == null ? "" : typeof value === "object" ? value + "" : value;
    if (str !== (text.__t ?? (text.__t = text.nodeValue))) {
      text.__t = str;
      text.nodeValue = str == null ? "" : str + "";
    }
  }
  function mount(component, options) {
    return _mount(component, options);
  }
  const document_listeners = /* @__PURE__ */ new Map();
  function _mount(Component, { target, anchor, props = {}, events, context, intro = true }) {
    init_operations();
    var registered_events = /* @__PURE__ */ new Set();
    var event_handle = (events2) => {
      for (var i = 0; i < events2.length; i++) {
        var event_name = events2[i];
        if (registered_events.has(event_name)) continue;
        registered_events.add(event_name);
        var passive = is_passive_event(event_name);
        target.addEventListener(event_name, handle_event_propagation, { passive });
        var n = document_listeners.get(event_name);
        if (n === undefined) {
          document.addEventListener(event_name, handle_event_propagation, { passive });
          document_listeners.set(event_name, 1);
        } else {
          document_listeners.set(event_name, n + 1);
        }
      }
    };
    event_handle(array_from(all_registered_events));
    root_event_handles.add(event_handle);
    var component = undefined;
    var unmount = component_root(() => {
      var anchor_node = anchor ?? target.appendChild(create_text());
      branch(() => {
        if (context) {
          push({});
          var ctx = (
            /** @type {ComponentContext} */
            component_context
          );
          ctx.c = context;
        }
        if (events) {
          props.$$events = events;
        }
        should_intro = intro;
        component = Component(anchor_node, props) || {};
        should_intro = true;
        if (context) {
          pop();
        }
      });
      return () => {
        var _a;
        for (var event_name of registered_events) {
          target.removeEventListener(event_name, handle_event_propagation);
          var n = (
            /** @type {number} */
            document_listeners.get(event_name)
          );
          if (--n === 0) {
            document.removeEventListener(event_name, handle_event_propagation);
            document_listeners.delete(event_name);
          } else {
            document_listeners.set(event_name, n);
          }
        }
        root_event_handles.delete(event_handle);
        if (anchor_node !== anchor) {
          (_a = anchor_node.parentNode) == null ? undefined : _a.removeChild(anchor_node);
        }
      };
    });
    mounted_components.set(component, unmount);
    return component;
  }
  let mounted_components = /* @__PURE__ */ new WeakMap();
  function if_block(node, fn, elseif = false) {
    var anchor = node;
    var consequent_effect = null;
    var alternate_effect = null;
    var condition = UNINITIALIZED;
    var flags = elseif ? EFFECT_TRANSPARENT : 0;
    var has_branch = false;
    const set_branch = (fn2, flag = true) => {
      has_branch = true;
      update_branch(flag, fn2);
    };
    const update_branch = (new_condition, fn2) => {
      if (condition === (condition = new_condition)) return;
      if (condition) {
        if (consequent_effect) {
          resume_effect(consequent_effect);
        } else if (fn2) {
          consequent_effect = branch(() => fn2(anchor));
        }
        if (alternate_effect) {
          pause_effect(alternate_effect, () => {
            alternate_effect = null;
          });
        }
      } else {
        if (alternate_effect) {
          resume_effect(alternate_effect);
        } else if (fn2) {
          alternate_effect = branch(() => fn2(anchor));
        }
        if (consequent_effect) {
          pause_effect(consequent_effect, () => {
            consequent_effect = null;
          });
        }
      }
    };
    block(() => {
      has_branch = false;
      fn(set_branch);
      if (!has_branch) {
        update_branch(null, null);
      }
    }, flags);
  }
  let current_each_item = null;
  function index(_, i) {
    return i;
  }
  function pause_effects(state, items, controlled_anchor, items_map) {
    var transitions = [];
    var length = items.length;
    for (var i = 0; i < length; i++) {
      pause_children(items[i].e, transitions, true);
    }
    var is_controlled = length > 0 && transitions.length === 0 && controlled_anchor !== null;
    if (is_controlled) {
      var parent_node = (
        /** @type {Element} */
        /** @type {Element} */
        controlled_anchor.parentNode
      );
      clear_text_content(parent_node);
      parent_node.append(
        /** @type {Element} */
        controlled_anchor
      );
      items_map.clear();
      link(state, items[0].prev, items[length - 1].next);
    }
    run_out_transitions(transitions, () => {
      for (var i2 = 0; i2 < length; i2++) {
        var item = items[i2];
        if (!is_controlled) {
          items_map.delete(item.k);
          link(state, item.prev, item.next);
        }
        destroy_effect(item.e, !is_controlled);
      }
    });
  }
  function each(node, flags, get_collection, get_key, render_fn, fallback_fn = null) {
    var anchor = node;
    var state = { flags, items: /* @__PURE__ */ new Map(), first: null };
    var is_controlled = (flags & EACH_IS_CONTROLLED) !== 0;
    if (is_controlled) {
      var parent_node = (
        /** @type {Element} */
        node
      );
      anchor = parent_node.appendChild(create_text());
    }
    var fallback = null;
    var was_empty = false;
    var each_array = /* @__PURE__ */ derived_safe_equal(() => {
      var collection = get_collection();
      return is_array(collection) ? collection : collection == null ? [] : array_from(collection);
    });
    block(() => {
      var array = get$1(each_array);
      var length = array.length;
      if (was_empty && length === 0) {
        return;
      }
      was_empty = length === 0;
      {
        var effect2 = (
          /** @type {Effect} */
          active_reaction
        );
        reconcile(
          array,
          state,
          anchor,
          render_fn,
          flags,
          (effect2.f & INERT) !== 0,
          get_key,
          get_collection
        );
      }
      if (fallback_fn !== null) {
        if (length === 0) {
          if (fallback) {
            resume_effect(fallback);
          } else {
            fallback = branch(() => fallback_fn(anchor));
          }
        } else if (fallback !== null) {
          pause_effect(fallback, () => {
            fallback = null;
          });
        }
      }
      get$1(each_array);
    });
  }
  function reconcile(array, state, anchor, render_fn, flags, is_inert, get_key, get_collection) {
    var _a, _b, _c, _d;
    var is_animated = (flags & EACH_IS_ANIMATED) !== 0;
    var should_update = (flags & (EACH_ITEM_REACTIVE | EACH_INDEX_REACTIVE)) !== 0;
    var length = array.length;
    var items = state.items;
    var first = state.first;
    var current = first;
    var seen;
    var prev = null;
    var to_animate;
    var matched = [];
    var stashed = [];
    var value;
    var key;
    var item;
    var i;
    if (is_animated) {
      for (i = 0; i < length; i += 1) {
        value = array[i];
        key = get_key(value, i);
        item = items.get(key);
        if (item !== undefined) {
          (_a = item.a) == null ? undefined : _a.measure();
          (to_animate ?? (to_animate = /* @__PURE__ */ new Set())).add(item);
        }
      }
    }
    for (i = 0; i < length; i += 1) {
      value = array[i];
      key = get_key(value, i);
      item = items.get(key);
      if (item === undefined) {
        var child_anchor = current ? (
          /** @type {TemplateNode} */
          current.e.nodes_start
        ) : anchor;
        prev = create_item(
          child_anchor,
          state,
          prev,
          prev === null ? state.first : prev.next,
          value,
          key,
          i,
          render_fn,
          flags,
          get_collection
        );
        items.set(key, prev);
        matched = [];
        stashed = [];
        current = prev.next;
        continue;
      }
      if (should_update) {
        update_item(item, value, i, flags);
      }
      if ((item.e.f & INERT) !== 0) {
        resume_effect(item.e);
        if (is_animated) {
          (_b = item.a) == null ? undefined : _b.unfix();
          (to_animate ?? (to_animate = /* @__PURE__ */ new Set())).delete(item);
        }
      }
      if (item !== current) {
        if (seen !== undefined && seen.has(item)) {
          if (matched.length < stashed.length) {
            var start = stashed[0];
            var j;
            prev = start.prev;
            var a = matched[0];
            var b = matched[matched.length - 1];
            for (j = 0; j < matched.length; j += 1) {
              move(matched[j], start, anchor);
            }
            for (j = 0; j < stashed.length; j += 1) {
              seen.delete(stashed[j]);
            }
            link(state, a.prev, b.next);
            link(state, prev, a);
            link(state, b, start);
            current = start;
            prev = b;
            i -= 1;
            matched = [];
            stashed = [];
          } else {
            seen.delete(item);
            move(item, current, anchor);
            link(state, item.prev, item.next);
            link(state, item, prev === null ? state.first : prev.next);
            link(state, prev, item);
            prev = item;
          }
          continue;
        }
        matched = [];
        stashed = [];
        while (current !== null && current.k !== key) {
          if (is_inert || (current.e.f & INERT) === 0) {
            (seen ?? (seen = /* @__PURE__ */ new Set())).add(current);
          }
          stashed.push(current);
          current = current.next;
        }
        if (current === null) {
          continue;
        }
        item = current;
      }
      matched.push(item);
      prev = item;
      current = item.next;
    }
    if (current !== null || seen !== undefined) {
      var to_destroy = seen === undefined ? [] : array_from(seen);
      while (current !== null) {
        if (is_inert || (current.e.f & INERT) === 0) {
          to_destroy.push(current);
        }
        current = current.next;
      }
      var destroy_length = to_destroy.length;
      if (destroy_length > 0) {
        var controlled_anchor = (flags & EACH_IS_CONTROLLED) !== 0 && length === 0 ? anchor : null;
        if (is_animated) {
          for (i = 0; i < destroy_length; i += 1) {
            (_c = to_destroy[i].a) == null ? undefined : _c.measure();
          }
          for (i = 0; i < destroy_length; i += 1) {
            (_d = to_destroy[i].a) == null ? undefined : _d.fix();
          }
        }
        pause_effects(state, to_destroy, controlled_anchor, items);
      }
    }
    if (is_animated) {
      queue_micro_task(() => {
        var _a2;
        if (to_animate === undefined) return;
        for (item of to_animate) {
          (_a2 = item.a) == null ? undefined : _a2.apply();
        }
      });
    }
    active_effect.first = state.first && state.first.e;
    active_effect.last = prev && prev.e;
  }
  function update_item(item, value, index2, type) {
    if ((type & EACH_ITEM_REACTIVE) !== 0) {
      internal_set(item.v, value);
    }
    if ((type & EACH_INDEX_REACTIVE) !== 0) {
      internal_set(
        /** @type {Value<number>} */
        item.i,
        index2
      );
    } else {
      item.i = index2;
    }
  }
  function create_item(anchor, state, prev, next, value, key, index2, render_fn, flags, get_collection) {
    var previous_each_item = current_each_item;
    var reactive = (flags & EACH_ITEM_REACTIVE) !== 0;
    var mutable = (flags & EACH_ITEM_IMMUTABLE) === 0;
    var v = reactive ? mutable ? /* @__PURE__ */ mutable_source(value) : source(value) : value;
    var i = (flags & EACH_INDEX_REACTIVE) === 0 ? index2 : source(index2);
    var item = {
      i,
      v,
      k: key,
      a: null,
      // @ts-expect-error
      e: null,
      prev,
      next
    };
    current_each_item = item;
    try {
      item.e = branch(() => render_fn(anchor, v, i, get_collection), hydrating);
      item.e.prev = prev && prev.e;
      item.e.next = next && next.e;
      if (prev === null) {
        state.first = item;
      } else {
        prev.next = item;
        prev.e.next = item.e;
      }
      if (next !== null) {
        next.prev = item;
        next.e.prev = item.e;
      }
      return item;
    } finally {
      current_each_item = previous_each_item;
    }
  }
  function move(item, next, anchor) {
    var end = item.next ? (
      /** @type {TemplateNode} */
      item.next.e.nodes_start
    ) : anchor;
    var dest = next ? (
      /** @type {TemplateNode} */
      next.e.nodes_start
    ) : anchor;
    var node = (
      /** @type {TemplateNode} */
      item.e.nodes_start
    );
    while (node !== end) {
      var next_node = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ get_next_sibling(node)
      );
      dest.before(node);
      node = next_node;
    }
  }
  function link(state, prev, next) {
    if (prev === null) {
      state.first = next;
    } else {
      prev.next = next;
      prev.e.next = next && next.e;
    }
    if (next !== null) {
      next.prev = prev;
      next.e.prev = prev && prev.e;
    }
  }
  function slot(anchor, $$props, name, slot_props, fallback_fn) {
    var _a;
    var slot_fn = (_a = $$props.$$slots) == null ? undefined : _a[name];
    var is_interop = false;
    if (slot_fn === true) {
      slot_fn = $$props["children"];
      is_interop = true;
    }
    if (slot_fn === undefined) {
      if (fallback_fn !== null) {
        fallback_fn(anchor);
      }
    } else {
      slot_fn(anchor, is_interop ? () => slot_props : slot_props);
    }
  }
  function set_attribute(element, attribute, value, skip_warning) {
    var attributes = element.__attributes ?? (element.__attributes = {});
    if (attributes[attribute] === (attributes[attribute] = value)) return;
    if (attribute === "style" && "__styles" in element) {
      element.__styles = {};
    }
    if (attribute === "loading") {
      element[LOADING_ATTR_SYMBOL] = value;
    }
    if (value == null) {
      element.removeAttribute(attribute);
    } else if (typeof value !== "string" && get_setters(element).includes(attribute)) {
      element[attribute] = value;
    } else {
      element.setAttribute(attribute, value);
    }
  }
  var setters_cache = /* @__PURE__ */ new Map();
  function get_setters(element) {
    var setters = setters_cache.get(element.nodeName);
    if (setters) return setters;
    setters_cache.set(element.nodeName, setters = []);
    var descriptors;
    var proto = element;
    var element_proto = Element.prototype;
    while (element_proto !== proto) {
      descriptors = get_descriptors(proto);
      for (var key in descriptors) {
        if (descriptors[key].set) {
          setters.push(key);
        }
      }
      proto = get_prototype_of(proto);
    }
    return setters;
  }
  function set_class(dom, value, hash) {
    var prev_class_name = dom.__className;
    var next_class_name = to_class(value);
    if (prev_class_name !== next_class_name || hydrating) {
      if (value == null && true) {
        dom.removeAttribute("class");
      } else {
        dom.className = next_class_name;
      }
      dom.__className = next_class_name;
    }
  }
  function to_class(value, hash) {
    return (value == null ? "" : value) + "";
  }
  function toggle_class(dom, class_name, value) {
    if (value) {
      if (dom.classList.contains(class_name)) return;
      dom.classList.add(class_name);
    } else {
      if (!dom.classList.contains(class_name)) return;
      dom.classList.remove(class_name);
    }
  }
  function set_style(dom, key, value, important) {
    var styles = dom.__styles ?? (dom.__styles = {});
    if (styles[key] === value) {
      return;
    }
    styles[key] = value;
    if (value == null) {
      dom.style.removeProperty(key);
    } else {
      dom.style.setProperty(key, value, "");
    }
  }
  const now = () => performance.now();
  const raf = {
    // don't access requestAnimationFrame eagerly outside method
    // this allows basic testing of user code without JSDOM
    // bunder will eval and remove ternary when the user's app is built
    tick: (
      /** @param {any} _ */
      (_) => requestAnimationFrame(_)
    ),
    now: () => now(),
    tasks: /* @__PURE__ */ new Set()
  };
  function run_tasks() {
    const now2 = raf.now();
    raf.tasks.forEach((task) => {
      if (!task.c(now2)) {
        raf.tasks.delete(task);
        task.f();
      }
    });
    if (raf.tasks.size !== 0) {
      raf.tick(run_tasks);
    }
  }
  function loop(callback) {
    let task;
    if (raf.tasks.size === 0) {
      raf.tick(run_tasks);
    }
    return {
      promise: new Promise((fulfill) => {
        raf.tasks.add(task = { c: callback, f: fulfill });
      }),
      abort() {
        raf.tasks.delete(task);
      }
    };
  }
  function dispatch_event(element, type) {
    element.dispatchEvent(new CustomEvent(type));
  }
  function css_property_to_camelcase(style) {
    if (style === "float") return "cssFloat";
    if (style === "offset") return "cssOffset";
    if (style.startsWith("--")) return style;
    const parts = style.split("-");
    if (parts.length === 1) return parts[0];
    return parts[0] + parts.slice(1).map(
      /** @param {any} word */
      (word) => word[0].toUpperCase() + word.slice(1)
    ).join("");
  }
  function css_to_keyframe(css) {
    const keyframe = {};
    const parts = css.split(";");
    for (const part of parts) {
      const [property, value] = part.split(":");
      if (!property || value === undefined) break;
      const formatted_property = css_property_to_camelcase(property.trim());
      keyframe[formatted_property] = value.trim();
    }
    return keyframe;
  }
  const linear$1 = (t) => t;
  function animation(element, get_fn, get_params) {
    var item = (
      /** @type {EachItem} */
      current_each_item
    );
    var from;
    var to;
    var animation2;
    var original_styles = null;
    item.a ?? (item.a = {
      element,
      measure() {
        from = this.element.getBoundingClientRect();
      },
      apply() {
        animation2 == null ? undefined : animation2.abort();
        to = this.element.getBoundingClientRect();
        if (from.left !== to.left || from.right !== to.right || from.top !== to.top || from.bottom !== to.bottom) {
          const options = get_fn()(this.element, { from, to }, get_params == null ? undefined : get_params());
          animation2 = animate(this.element, options, undefined, 1, () => {
            animation2 == null ? undefined : animation2.abort();
            animation2 = undefined;
          });
        }
      },
      fix() {
        if (element.getAnimations().length) return;
        var { position, width, height } = getComputedStyle(element);
        if (position !== "absolute" && position !== "fixed") {
          var style = (
            /** @type {HTMLElement | SVGElement} */
            element.style
          );
          original_styles = {
            position: style.position,
            width: style.width,
            height: style.height,
            transform: style.transform
          };
          style.position = "absolute";
          style.width = width;
          style.height = height;
          var to2 = element.getBoundingClientRect();
          if (from.left !== to2.left || from.top !== to2.top) {
            var transform = `translate(${from.left - to2.left}px, ${from.top - to2.top}px)`;
            style.transform = style.transform ? `${style.transform} ${transform}` : transform;
          }
        }
      },
      unfix() {
        if (original_styles) {
          var style = (
            /** @type {HTMLElement | SVGElement} */
            element.style
          );
          style.position = original_styles.position;
          style.width = original_styles.width;
          style.height = original_styles.height;
          style.transform = original_styles.transform;
        }
      }
    });
    item.a.element = element;
  }
  function transition(flags, element, get_fn, get_params) {
    var is_intro = (flags & TRANSITION_IN) !== 0;
    var is_outro = (flags & TRANSITION_OUT) !== 0;
    var is_both = is_intro && is_outro;
    var is_global = (flags & TRANSITION_GLOBAL) !== 0;
    var direction = is_both ? "both" : is_intro ? "in" : "out";
    var current_options;
    var inert = element.inert;
    var overflow = element.style.overflow;
    var intro;
    var outro;
    function get_options() {
      var previous_reaction = active_reaction;
      var previous_effect = active_effect;
      set_active_reaction(null);
      set_active_effect(null);
      try {
        return current_options ?? (current_options = get_fn()(element, (get_params == null ? void 0 : get_params()) ?? /** @type {P} */
        {}, {
          direction
        }));
      } finally {
        set_active_reaction(previous_reaction);
        set_active_effect(previous_effect);
      }
    }
    var transition2 = {
      is_global,
      in() {
        var _a;
        element.inert = inert;
        if (!is_intro) {
          outro == null ? undefined : outro.abort();
          (_a = outro == null ? undefined : outro.reset) == null ? undefined : _a.call(outro);
          return;
        }
        if (!is_outro) {
          intro == null ? undefined : intro.abort();
        }
        dispatch_event(element, "introstart");
        intro = animate(element, get_options(), outro, 1, () => {
          dispatch_event(element, "introend");
          intro == null ? undefined : intro.abort();
          intro = current_options = undefined;
          element.style.overflow = overflow;
        });
      },
      out(fn) {
        if (!is_outro) {
          fn == null ? undefined : fn();
          current_options = undefined;
          return;
        }
        element.inert = true;
        dispatch_event(element, "outrostart");
        outro = animate(element, get_options(), intro, 0, () => {
          dispatch_event(element, "outroend");
          fn == null ? undefined : fn();
        });
      },
      stop: () => {
        intro == null ? undefined : intro.abort();
        outro == null ? undefined : outro.abort();
      }
    };
    var e = (
      /** @type {Effect} */
      active_effect
    );
    (e.transitions ?? (e.transitions = [])).push(transition2);
    if (is_intro && should_intro) {
      var run2 = is_global;
      if (!run2) {
        var block2 = (
          /** @type {Effect | null} */
          e.parent
        );
        while (block2 && (block2.f & EFFECT_TRANSPARENT) !== 0) {
          while (block2 = block2.parent) {
            if ((block2.f & BLOCK_EFFECT) !== 0) break;
          }
        }
        run2 = !block2 || (block2.f & EFFECT_RAN) !== 0;
      }
      if (run2) {
        effect(() => {
          untrack(() => transition2.in());
        });
      }
    }
  }
  function animate(element, options, counterpart, t2, on_finish) {
    var is_intro = t2 === 1;
    if (is_function(options)) {
      var a;
      var aborted = false;
      queue_micro_task(() => {
        if (aborted) return;
        var o = options({ direction: is_intro ? "in" : "out" });
        a = animate(element, o, counterpart, t2, on_finish);
      });
      return {
        abort: () => {
          aborted = true;
          a == null ? undefined : a.abort();
        },
        deactivate: () => a.deactivate(),
        reset: () => a.reset(),
        t: () => a.t()
      };
    }
    counterpart == null ? undefined : counterpart.deactivate();
    if (!(options == null ? undefined : options.duration)) {
      on_finish();
      return {
        abort: noop,
        deactivate: noop,
        reset: noop,
        t: () => t2
      };
    }
    const { delay = 0, css, tick, easing = linear$1 } = options;
    var keyframes = [];
    if (is_intro && counterpart === undefined) {
      if (tick) {
        tick(0, 1);
      }
      if (css) {
        var styles = css_to_keyframe(css(0, 1));
        keyframes.push(styles, styles);
      }
    }
    var get_t = () => 1 - t2;
    var animation2 = element.animate(keyframes, { duration: delay });
    animation2.onfinish = () => {
      var t1 = (counterpart == null ? undefined : counterpart.t()) ?? 1 - t2;
      counterpart == null ? undefined : counterpart.abort();
      var delta = t2 - t1;
      var duration = (
        /** @type {number} */
        options.duration * Math.abs(delta)
      );
      var keyframes2 = [];
      if (duration > 0) {
        var needs_overflow_hidden = false;
        if (css) {
          var n = Math.ceil(duration / (1e3 / 60));
          for (var i = 0; i <= n; i += 1) {
            var t = t1 + delta * easing(i / n);
            var styles2 = css_to_keyframe(css(t, 1 - t));
            keyframes2.push(styles2);
            needs_overflow_hidden || (needs_overflow_hidden = styles2.overflow === "hidden");
          }
        }
        if (needs_overflow_hidden) {
          element.style.overflow = "hidden";
        }
        get_t = () => {
          var time = (
            /** @type {number} */
            /** @type {globalThis.Animation} */
            animation2.currentTime
          );
          return t1 + delta * easing(time / duration);
        };
        if (tick) {
          loop(() => {
            if (animation2.playState !== "running") return false;
            var t3 = get_t();
            tick(t3, 1 - t3);
            return true;
          });
        }
      }
      animation2 = element.animate(keyframes2, { duration, fill: "forwards" });
      animation2.onfinish = () => {
        get_t = () => t2;
        tick == null ? undefined : tick(t2, 1 - t2);
        on_finish();
      };
    };
    return {
      abort: () => {
        if (animation2) {
          animation2.cancel();
          animation2.effect = null;
          animation2.onfinish = noop;
        }
      },
      deactivate: () => {
        on_finish = noop;
      },
      reset: () => {
        if (t2 === 0) {
          tick == null ? undefined : tick(1, 0);
        }
      },
      t: () => get_t()
    };
  }
  function bind_value(input, get2, set2 = get2) {
    var runes = is_runes();
    listen_to_event_and_reset_event(input, "input", (is_reset) => {
      var value = is_reset ? input.defaultValue : input.value;
      value = is_numberlike_input(input) ? to_number(value) : value;
      set2(value);
      if (runes && value !== (value = get2())) {
        var start = input.selectionStart;
        var end = input.selectionEnd;
        input.value = value ?? "";
        if (end !== null) {
          input.selectionStart = start;
          input.selectionEnd = Math.min(end, input.value.length);
        }
      }
    });
    if (
      // If we are hydrating and the value has since changed,
      // then use the updated value from the input instead.
      // If defaultValue is set, then value == defaultValue
      // TODO Svelte 6: remove input.value check and set to empty string?
      untrack(get2) == null && input.value
    ) {
      set2(is_numberlike_input(input) ? to_number(input.value) : input.value);
    }
    render_effect(() => {
      var value = get2();
      if (is_numberlike_input(input) && value === to_number(input.value)) {
        return;
      }
      if (input.type === "date" && !value && !input.value) {
        return;
      }
      if (value !== input.value) {
        input.value = value ?? "";
      }
    });
  }
  function is_numberlike_input(input) {
    var type = input.type;
    return type === "number" || type === "range";
  }
  function to_number(value) {
    return value === "" ? null : +value;
  }
  function bind_prop(props, prop2, value) {
    var desc = get_descriptor(props, prop2);
    if (desc && desc.set) {
      props[prop2] = value;
      teardown(() => {
        props[prop2] = null;
      });
    }
  }
  const _ResizeObserverSingleton = class _ResizeObserverSingleton {
    /** @param {ResizeObserverOptions} options */
    constructor(options) {
      __privateAdd(this, _ResizeObserverSingleton_instances);
      /** */
      __privateAdd(this, _listeners, /* @__PURE__ */ new WeakMap());
      /** @type {ResizeObserver | undefined} */
      __privateAdd(this, _observer);
      /** @type {ResizeObserverOptions} */
      __privateAdd(this, _options);
      __privateSet(this, _options, options);
    }
    /**
     * @param {Element} element
     * @param {(entry: ResizeObserverEntry) => any} listener
     */
    observe(element, listener) {
      var listeners = __privateGet(this, _listeners).get(element) || /* @__PURE__ */ new Set();
      listeners.add(listener);
      __privateGet(this, _listeners).set(element, listeners);
      __privateMethod(this, _ResizeObserverSingleton_instances, getObserver_fn).call(this).observe(element, __privateGet(this, _options));
      return () => {
        var listeners2 = __privateGet(this, _listeners).get(element);
        listeners2.delete(listener);
        if (listeners2.size === 0) {
          __privateGet(this, _listeners).delete(element);
          __privateGet(this, _observer).unobserve(element);
        }
      };
    }
  };
  _listeners = new WeakMap();
  _observer = new WeakMap();
  _options = new WeakMap();
  _ResizeObserverSingleton_instances = new WeakSet();
  getObserver_fn = function() {
    return __privateGet(this, _observer) ?? __privateSet(this, _observer, new ResizeObserver(
      /** @param {any} entries */
      (entries) => {
        for (var entry of entries) {
          _ResizeObserverSingleton.entries.set(entry.target, entry);
          for (var listener of __privateGet(this, _listeners).get(entry.target) || []) {
            listener(entry);
          }
        }
      }
    ));
  };
  /** @static */
  __publicField(_ResizeObserverSingleton, "entries", /* @__PURE__ */ new WeakMap());
  let ResizeObserverSingleton = _ResizeObserverSingleton;
  var resize_observer_border_box = /* @__PURE__ */ new ResizeObserverSingleton({
    box: "border-box"
  });
  function bind_element_size(element, type, set2) {
    var unsub = resize_observer_border_box.observe(element, () => set2(element[type]));
    effect(() => {
      untrack(() => set2(element[type]));
      return unsub;
    });
  }
  function is_bound_this(bound_value, element_or_component) {
    return bound_value === element_or_component || (bound_value == null ? undefined : bound_value[STATE_SYMBOL]) === element_or_component;
  }
  function bind_this(element_or_component = {}, update, get_value, get_parts) {
    effect(() => {
      var old_parts;
      var parts;
      render_effect(() => {
        old_parts = parts;
        parts = [];
        untrack(() => {
          if (element_or_component !== get_value(...parts)) {
            update(element_or_component, ...parts);
            if (old_parts && is_bound_this(get_value(...old_parts), element_or_component)) {
              update(null, ...old_parts);
            }
          }
        });
      });
      return () => {
        queue_micro_task(() => {
          if (parts && is_bound_this(get_value(...parts), element_or_component)) {
            update(null, ...parts);
          }
        });
      };
    });
    return element_or_component;
  }
  function self(fn) {
    return function(...args) {
      var event2 = (
        /** @type {Event} */
        args[0]
      );
      if (event2.target === this) {
        fn == null ? undefined : fn.apply(this, args);
      }
    };
  }
  function stopPropagation(fn) {
    return function(...args) {
      var event2 = (
        /** @type {Event} */
        args[0]
      );
      event2.stopPropagation();
      return fn == null ? undefined : fn.apply(this, args);
    };
  }
  function init(immutable = false) {
    const context = (
      /** @type {ComponentContextLegacy} */
      component_context
    );
    const callbacks = context.l.u;
    if (!callbacks) return;
    let props = () => deep_read_state(context.s);
    if (immutable) {
      let version2 = 0;
      let prev = (
        /** @type {Record<string, any>} */
        {}
      );
      const d = /* @__PURE__ */ derived(() => {
        let changed = false;
        const props2 = context.s;
        for (const key in props2) {
          if (props2[key] !== prev[key]) {
            prev[key] = props2[key];
            changed = true;
          }
        }
        if (changed) version2++;
        return version2;
      });
      props = () => get$1(d);
    }
    if (callbacks.b.length) {
      user_pre_effect(() => {
        observe_all(context, props);
        run_all(callbacks.b);
      });
    }
    user_effect(() => {
      const fns = untrack(() => callbacks.m.map(run));
      return () => {
        for (const fn of fns) {
          if (typeof fn === "function") {
            fn();
          }
        }
      };
    });
    if (callbacks.a.length) {
      user_effect(() => {
        observe_all(context, props);
        run_all(callbacks.a);
      });
    }
  }
  function observe_all(context, props) {
    if (context.l.s) {
      for (const signal of context.l.s) get$1(signal);
    }
    props();
  }
  function reactive_import(fn) {
    var s = source(0);
    return function() {
      if (arguments.length === 1) {
        set(s, get$1(s) + 1);
        return arguments[0];
      } else {
        get$1(s);
        return fn();
      }
    };
  }
  function bubble_event($$props, event2) {
    var _a;
    var events = (
      /** @type {Record<string, Function[] | Function>} */
      (_a = $$props.$$events) == null ? undefined : _a[event2.type]
    );
    var callbacks = is_array(events) ? events.slice() : events == null ? [] : [events];
    for (var fn of callbacks) {
      fn.call(this, event2);
    }
  }
  function subscribe_to_store(store, run2, invalidate) {
    if (store == null) {
      run2(undefined);
      return noop;
    }
    const unsub = untrack(
      () => store.subscribe(
        run2,
        // @ts-expect-error
        invalidate
      )
    );
    return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
  }
  const subscriber_queue = [];
  function writable(value, start = noop) {
    let stop = null;
    const subscribers = /* @__PURE__ */ new Set();
    function set2(new_value) {
      if (safe_not_equal(value, new_value)) {
        value = new_value;
        if (stop) {
          const run_queue = !subscriber_queue.length;
          for (const subscriber of subscribers) {
            subscriber[1]();
            subscriber_queue.push(subscriber, value);
          }
          if (run_queue) {
            for (let i = 0; i < subscriber_queue.length; i += 2) {
              subscriber_queue[i][0](subscriber_queue[i + 1]);
            }
            subscriber_queue.length = 0;
          }
        }
      }
    }
    function update(fn) {
      set2(fn(
        /** @type {T} */
        value
      ));
    }
    function subscribe(run2, invalidate = noop) {
      const subscriber = [run2, invalidate];
      subscribers.add(subscriber);
      if (subscribers.size === 1) {
        stop = start(set2, update) || noop;
      }
      run2(
        /** @type {T} */
        value
      );
      return () => {
        subscribers.delete(subscriber);
        if (subscribers.size === 0 && stop) {
          stop();
          stop = null;
        }
      };
    }
    return { set: set2, update, subscribe };
  }
  function get(store) {
    let value;
    subscribe_to_store(store, (_) => value = _)();
    return value;
  }
  let is_store_binding = false;
  let IS_UNMOUNTED = Symbol();
  function store_get(store, store_name, stores) {
    const entry = stores[store_name] ?? (stores[store_name] = {
      store: null,
      source: /* @__PURE__ */ mutable_source(undefined),
      unsubscribe: noop
    });
    if (entry.store !== store && !(IS_UNMOUNTED in stores)) {
      entry.unsubscribe();
      entry.store = store ?? null;
      if (store == null) {
        entry.source.v = undefined;
        entry.unsubscribe = noop;
      } else {
        var is_synchronous_callback = true;
        entry.unsubscribe = subscribe_to_store(store, (v) => {
          if (is_synchronous_callback) {
            entry.source.v = v;
          } else {
            set(entry.source, v);
          }
        });
        is_synchronous_callback = false;
      }
    }
    if (store && IS_UNMOUNTED in stores) {
      return get(store);
    }
    return get$1(entry.source);
  }
  function store_set(store, value) {
    store.set(value);
    return value;
  }
  function setup_stores() {
    const stores = {};
    function cleanup() {
      teardown(() => {
        for (var store_name in stores) {
          const ref = stores[store_name];
          ref.unsubscribe();
        }
        define_property(stores, IS_UNMOUNTED, {
          enumerable: false,
          value: true
        });
      });
    }
    return [stores, cleanup];
  }
  function store_mutate(store, expression, new_value) {
    store.set(new_value);
    return expression;
  }
  function mark_store_binding() {
    is_store_binding = true;
  }
  function capture_store_binding(fn) {
    var previous_is_store_binding = is_store_binding;
    try {
      is_store_binding = false;
      return [fn(), is_store_binding];
    } finally {
      is_store_binding = previous_is_store_binding;
    }
  }
  function with_parent_branch(fn) {
    var effect2 = active_effect;
    var previous_effect = active_effect;
    while (effect2 !== null && (effect2.f & (BRANCH_EFFECT | ROOT_EFFECT)) === 0) {
      effect2 = effect2.parent;
    }
    try {
      set_active_effect(effect2);
      return fn();
    } finally {
      set_active_effect(previous_effect);
    }
  }
  function prop(props, key, flags, fallback) {
    var _a;
    var immutable = (flags & PROPS_IS_IMMUTABLE) !== 0;
    var runes = !legacy_mode_flag || (flags & PROPS_IS_RUNES) !== 0;
    var bindable = (flags & PROPS_IS_BINDABLE) !== 0;
    var lazy = (flags & PROPS_IS_LAZY_INITIAL) !== 0;
    var is_store_sub = false;
    var prop_value;
    if (bindable) {
      [prop_value, is_store_sub] = capture_store_binding(() => (
        /** @type {V} */
        props[key]
      ));
    } else {
      prop_value = /** @type {V} */
      props[key];
    }
    var is_entry_props = STATE_SYMBOL in props || LEGACY_PROPS in props;
    var setter = bindable && (((_a = get_descriptor(props, key)) == null ? undefined : _a.set) ?? (is_entry_props && key in props && ((v) => props[key] = v))) || undefined;
    var fallback_value = (
      /** @type {V} */
      fallback
    );
    var fallback_dirty = true;
    var fallback_used = false;
    var get_fallback = () => {
      fallback_used = true;
      if (fallback_dirty) {
        fallback_dirty = false;
        if (lazy) {
          fallback_value = untrack(
            /** @type {() => V} */
            fallback
          );
        } else {
          fallback_value = /** @type {V} */
          fallback;
        }
      }
      return fallback_value;
    };
    if (prop_value === undefined && fallback !== undefined) {
      if (setter && runes) {
        props_invalid_value();
      }
      prop_value = get_fallback();
      if (setter) setter(prop_value);
    }
    var getter;
    if (runes) {
      getter = () => {
        var value = (
          /** @type {V} */
          props[key]
        );
        if (value === undefined) return get_fallback();
        fallback_dirty = true;
        fallback_used = false;
        return value;
      };
    } else {
      var derived_getter = with_parent_branch(
        () => (immutable ? derived : derived_safe_equal)(() => (
          /** @type {V} */
          props[key]
        ))
      );
      derived_getter.f |= LEGACY_DERIVED_PROP;
      getter = () => {
        var value = get$1(derived_getter);
        if (value !== undefined) fallback_value = /** @type {V} */
        undefined;
        return value === undefined ? fallback_value : value;
      };
    }
    if ((flags & PROPS_IS_UPDATED) === 0) {
      return getter;
    }
    if (setter) {
      var legacy_parent = props.$$legacy;
      return function(value, mutation) {
        if (arguments.length > 0) {
          if (!runes || !mutation || legacy_parent || is_store_sub) {
            setter(mutation ? getter() : value);
          }
          return value;
        } else {
          return getter();
        }
      };
    }
    var from_child = false;
    var was_from_child = false;
    var inner_current_value = /* @__PURE__ */ mutable_source(prop_value);
    var current_value = with_parent_branch(
      () => /* @__PURE__ */ derived(() => {
        var parent_value = getter();
        var child_value = get$1(inner_current_value);
        if (from_child) {
          from_child = false;
          was_from_child = true;
          return child_value;
        }
        was_from_child = false;
        return inner_current_value.v = parent_value;
      })
    );
    if (!immutable) current_value.equals = safe_equals;
    return function(value, mutation) {
      if (arguments.length > 0) {
        const new_value = mutation ? get$1(current_value) : runes && bindable ? proxy(value) : value;
        if (!current_value.equals(new_value)) {
          from_child = true;
          set(inner_current_value, new_value);
          if (fallback_used && fallback_value !== undefined) {
            fallback_value = new_value;
          }
          untrack(() => get$1(current_value));
        }
        return value;
      }
      return get$1(current_value);
    };
  }
  function onMount(fn) {
    if (component_context === null) {
      lifecycle_outside_component();
    }
    if (legacy_mode_flag && component_context.l !== null) {
      init_update_callbacks(component_context).m.push(fn);
    } else {
      user_effect(() => {
        const cleanup = untrack(fn);
        if (typeof cleanup === "function") return (
          /** @type {() => void} */
          cleanup
        );
      });
    }
  }
  function onDestroy(fn) {
    if (component_context === null) {
      lifecycle_outside_component();
    }
    onMount(() => () => untrack(fn));
  }
  function init_update_callbacks(context) {
    var l = (
      /** @type {ComponentContextLegacy} */
      context.l
    );
    return l.u ?? (l.u = { a: [], b: [], m: [] });
  }
  const PUBLIC_VERSION = "5";
  if (typeof window !== "undefined")
    (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(PUBLIC_VERSION);
  enable_legacy_mode_flag();
  const linear = (x) => x;
  function fade(node, { delay = 0, duration = 400, easing = linear } = {}) {
    const o = +getComputedStyle(node).opacity;
    return {
      delay,
      duration,
      easing,
      css: (t) => `opacity: ${t * o}`
    };
  }
  function Tool_Watch_Dom(selector2, func = () => {
  }) {
    if (!selector2) return;
    const targetElement = document.querySelector(selector2);
    if (targetElement) {
      func(targetElement);
      return;
    }
    const observer = new MutationObserver((mutations, obs) => {
      const el = document.querySelector(selector2);
      if (el) {
        obs.disconnect();
        func(el);
      }
    });
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true
    });
  }
  function __JsonParse(data) {
    if (typeof data === "string") {
      try {
        const parsed = JSON.parse(data);
        return __JsonParse(parsed);
      } catch (e) {
        return data;
      }
    }
    if (Array.isArray(data)) {
      return data.map((item) => __JsonParse(item));
    }
    if (data !== null && typeof data === "object") {
      const result = {};
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          result[key] = __JsonParse(data[key]);
        }
      }
      return result;
    }
    return data;
  }
  function getTextColor(background) {
    if (!background) return "inherit";
    let color = background.toString().trim();
    if (color.startsWith("var(")) {
      const varMatch = color.match(/var\(([^)]+)\)/);
      if (varMatch) {
        const varName = varMatch[1];
        const computedValue = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
        if (computedValue) {
          color = computedValue;
        } else {
          return "inherit";
        }
      }
    }
    if (color.startsWith("rgba(") || color.startsWith("rgb(")) {
      const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);
      if (match) {
        const [, red2, green2, blue2] = match;
        const brightness2 = (parseInt(red2) * 299 + parseInt(green2) * 587 + parseInt(blue2) * 114) / 1e3;
        return brightness2 < 128 ? "white" : "black";
      }
    }
    color = color.replace("#", "");
    let red, green, blue;
    if (color.length === 3) {
      red = parseInt(color[0] + color[0], 16);
      green = parseInt(color[1] + color[1], 16);
      blue = parseInt(color[2] + color[2], 16);
    } else if (color.length === 6) {
      red = parseInt(color.substr(0, 2), 16);
      green = parseInt(color.substr(2, 2), 16);
      blue = parseInt(color.substr(4, 2), 16);
    } else if (color.length === 8) {
      red = parseInt(color.substr(0, 2), 16);
      green = parseInt(color.substr(2, 2), 16);
      blue = parseInt(color.substr(4, 2), 16);
    } else {
      return "inherit";
    }
    const brightness = (red * 299 + green * 587 + blue * 114) / 1e3;
    return brightness < 128 ? "white" : "black";
  }
  const PERSIST_NAME = "Kesa:Fall";
  const getPersistedData = () => {
    try {
      return __JsonParse(localStorage.getItem(PERSIST_NAME)) ?? {};
    } catch {
      return {};
    }
  };
  const persistStore = (key, initialValue) => {
    const persisted = getPersistedData();
    const savedValue = key in persisted ? persisted[key] : initialValue;
    const { subscribe, set: set2, update } = writable(savedValue);
    subscribe((value) => {
      const data = getPersistedData();
      localStorage.setItem(PERSIST_NAME, JSON.stringify({ ...data, [key]: value }));
    });
    return {
      subscribe,
      set: (value) => {
        if (typeof value === "function") {
          update(value);
        } else {
          set2(value);
        }
      },
      update
    };
  };
  const _iframe_switch$1 = writable(0);
  const _iframe_url$1 = writable("");
  const _isFallView = persistStore("_isFallView", true);
  const _side_panel_switch = writable(0);
  const _panelPos = persistStore("_panelPos", { x: 0, y: 0 });
  const _show_hover_pic = persistStore("_show_hover_pic", 1);
  const _card_layout = persistStore("_card_layout", {
    // 最小宽度
    min: 300,
    // 最大宽度
    max: 600,
    // 间距
    gap: 8
  });
  const _card_detail = persistStore("_card_detail", {
    // 全局总开关
    all: false,
    // 显示 分区
    category: true,
    // 显示 标题
    title: false,
    // 显示 置顶
    topping: true,
    // 显示 免费
    free: true,
    // 显示 大小
    size: true,
    // 显示 副标题
    sub_title: false,
    // 显示 标签
    tags: false,
    // 显示 下载&收藏
    download_collect: false,
    // 显示 上传时间
    upload_time: false,
    // 显示 评论/上传/下载
    statistics: false
  });
  const _show_nexus_pic = persistStore("_show_nexus_pic", 1);
  const _block_gay = persistStore("_block_gay", 1);
  const _card_radius = persistStore("_card_radius", {
    // 是否启用自定义圆角
    enabled: false,
    // 圆角值 (0-40px)
    value: 16
  });
  const _mt_label = persistStore("_mt_label", {});
  const _mt_categories = persistStore("_mt_categories", {});
  const _textColor = persistStore("_textColor", {
    t1: "black",
    t2: "black",
    t3: "black"
  });
  function Launch_Hijack(param = { path: "/search", method: "POST" }) {
    const nativeOpen = XMLHttpRequest.prototype.open;
    const nativeSend = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.open = function(method, url) {
      this._requestMetadata = {
        method: method.toUpperCase(),
        url,
        isTarget: url.includes(param.path) && method.toUpperCase() === param.method
      };
      return nativeOpen.apply(this, arguments);
    };
    XMLHttpRequest.prototype.send = function(body) {
      var _a;
      if ((_a = this._requestMetadata) == null ? undefined : _a.isTarget) {
        const originalOnReadyStateChange = this.onreadystatechange;
        const originalOnLoad = this.onload;
        this.addEventListener("readystatechange", () => {
          if (this.readyState === 4) {
            this._captureResponseData();
          }
          originalOnReadyStateChange == null ? undefined : originalOnReadyStateChange.call(this);
        });
        this.onload = (e) => {
          this._captureResponseData();
          originalOnLoad == null ? undefined : originalOnLoad.call(this, e);
        };
        const reqBody = {
          url: this._requestMetadata.url,
          body: body instanceof Document ? body.documentElement.outerHTML : body
        };
        const event2 = new CustomEvent(`req>${param.method}->${param.path}`, { detail: reqBody });
        window.dispatchEvent(event2);
      }
      return nativeSend.apply(this, arguments);
    };
    XMLHttpRequest.prototype._captureResponseData = function() {
      if (!this._hasCaptured && this._requestMetadata.isTarget) {
        try {
          const responseData = {
            status: this.status,
            headers: this.getAllResponseHeaders(),
            data: this._parseResponse()
          };
          const event2 = new CustomEvent(`res>${param.method}->${param.path}`, { detail: responseData });
          window.dispatchEvent(event2);
        } catch (e) {
          console.error("<PT-Fall> Capture failed:", e);
        }
        this._hasCaptured = true;
      }
    };
    XMLHttpRequest.prototype._parseResponse = function() {
      var _a;
      try {
        switch (this.responseType) {
          case "json":
            return this.response;
          case "document":
            return (_a = this.responseXML) == null ? void 0 : _a.documentElement.outerHTML;
          case "arraybuffer":
            return new Uint8Array(this.response);
          case "blob":
            return URL.createObjectURL(this.response);
          default:
            return this.responseText;
        }
      } catch {
        return this.responseText;
      }
    };
  }
  function cubicOut(t) {
    const f = t - 1;
    return f * f * f + 1;
  }
  function flip(node, { from, to }, params = {}) {
    var { delay = 0, duration = (d) => Math.sqrt(d) * 120, easing = cubicOut } = params;
    var style = getComputedStyle(node);
    var transform = style.transform === "none" ? "" : style.transform;
    var [ox, oy] = style.transformOrigin.split(" ").map(parseFloat);
    ox /= node.clientWidth;
    oy /= node.clientHeight;
    var zoom = get_zoom(node);
    var sx = node.clientWidth / to.width / zoom;
    var sy = node.clientHeight / to.height / zoom;
    var fx = from.left + from.width * ox;
    var fy = from.top + from.height * oy;
    var tx = to.left + to.width * ox;
    var ty = to.top + to.height * oy;
    var dx = (fx - tx) * sx;
    var dy = (fy - ty) * sy;
    var dsx = from.width / to.width;
    var dsy = from.height / to.height;
    return {
      delay,
      duration: typeof duration === "function" ? duration(Math.sqrt(dx * dx + dy * dy)) : duration,
      easing,
      css: (t, u) => {
        var x = u * dx;
        var y = u * dy;
        var sx2 = t + u * dsx;
        var sy2 = t + u * dsy;
        return `transform: ${transform} translate(${x}px, ${y}px) scale(${sx2}, ${sy2});`;
      }
    };
  }
  function get_zoom(element) {
    if ("currentCSSZoom" in element) {
      return (
        /** @type {number} */
        element.currentCSSZoom
      );
    }
    var current = element;
    var zoom = 1;
    while (current !== null) {
      zoom *= +getComputedStyle(current).zoom;
      current = /** @type {Element | null} */
      current.parentElement;
    }
    return zoom;
  }
  var root_4$2 = /* @__PURE__ */ template(`<span class="svelte-b2jtby"> </span>`);
  var root_3$2 = /* @__PURE__ */ template(`<div class="svelte-b2jtby"><!></div>`);
  var root_7$1 = /* @__PURE__ */ template(`<span class="svelte-b2jtby"> </span>`);
  var root_1$3 = /* @__PURE__ */ template(`<div><!></div>`);
  var root$b = /* @__PURE__ */ template(`<div></div>`);
  function Masonry($$anchor, $$props) {
    push($$props, false);
    const nCols = mutable_state();
    const itemsToCols = mutable_state();
    let animate2 = prop($$props, "animate", 8, true);
    let columnClass = prop($$props, "columnClass", 24, () => ``);
    let duration = prop($$props, "duration", 8, 200);
    let gap = prop($$props, "gap", 8, 20);
    let getId = prop($$props, "getId", 8, (item) => {
      if (typeof item === `number`) return item;
      if (typeof item === `string`) return item;
      return item[idKey()];
    });
    let idKey = prop($$props, "idKey", 24, () => `id`);
    let items = prop($$props, "items", 8);
    let masonryHeight = prop($$props, "masonryHeight", 12, 0);
    let masonryWidth = prop($$props, "masonryWidth", 12, 0);
    let maxColWidth = prop($$props, "maxColWidth", 8, 500);
    let minColWidth = prop($$props, "minColWidth", 8, 330);
    let style = prop($$props, "style", 24, () => ``);
    let className = prop($$props, "class", 24, () => ``);
    legacy_pre_effect(
      () => (deep_read_state(items()), deep_read_state(masonryWidth()), deep_read_state(minColWidth()), deep_read_state(gap())),
      () => {
        set(nCols, Math.min(items().length, Math.floor(masonryWidth() / (minColWidth() + gap())) || 1));
      }
    );
    legacy_pre_effect(
      () => (deep_read_state(items()), get$1(nCols)),
      () => {
        set(itemsToCols, items().reduce(
          (cols, item, idx) => {
            cols[idx % cols.length].push([item, idx]);
            return cols;
          },
          Array(get$1(nCols)).fill(null).map(() => [])
        ));
      }
    );
    legacy_pre_effect_reset();
    init();
    var div = root$b();
    each(div, 5, () => get$1(itemsToCols), index, ($$anchor2, col) => {
      var div_1 = root_1$3();
      var node = child(div_1);
      {
        var consequent = ($$anchor3) => {
          var fragment = comment();
          var node_1 = first_child(fragment);
          each(node_1, 9, () => get$1(col), ([item, idx]) => getId()(item), ($$anchor4, $$item) => {
            let item = () => get$1($$item)[0];
            let idx = () => get$1($$item)[1];
            var div_2 = root_3$2();
            var node_2 = child(div_2);
            slot(
              node_2,
              $$props,
              "default",
              {
                get idx() {
                  return idx();
                },
                get item() {
                  return item();
                }
              },
              ($$anchor5) => {
                var span = root_4$2();
                var text = child(span);
                template_effect(() => set_text(text, item()));
                append($$anchor5, span);
              }
            );
            transition(1, div_2, () => fade, () => ({ delay: 100, duration: duration() }));
            transition(2, div_2, () => fade, () => ({ delay: 0, duration: duration() }));
            animation(div_2, () => flip, () => ({ duration: duration() }));
            append($$anchor4, div_2);
          });
          append($$anchor3, fragment);
        };
        var alternate = ($$anchor3) => {
          var fragment_1 = comment();
          var node_3 = first_child(fragment_1);
          each(node_3, 1, () => get$1(col), ([item, idx]) => getId()(item), ($$anchor4, $$item) => {
            let item = () => get$1($$item)[0];
            let idx = () => get$1($$item)[1];
            var fragment_2 = comment();
            var node_4 = first_child(fragment_2);
            slot(
              node_4,
              $$props,
              "default",
              {
                get idx() {
                  return idx();
                },
                get item() {
                  return item();
                }
              },
              ($$anchor5) => {
                var span_1 = root_7$1();
                var text_1 = child(span_1);
                template_effect(() => set_text(text_1, item()));
                append($$anchor5, span_1);
              }
            );
            append($$anchor4, fragment_2);
          });
          append($$anchor3, fragment_1);
        };
        if_block(node, ($$render) => {
          if (animate2()) $$render(consequent);
          else $$render(alternate, false);
        });
      }
      template_effect(() => {
        set_class(div_1, `col ${columnClass() ?? ""} svelte-b2jtby`);
        set_attribute(div_1, "style", `gap: ${gap() ?? ""}px; max-width: ${maxColWidth() ?? ""}px;`);
      });
      append($$anchor2, div_1);
    });
    template_effect(() => {
      set_class(div, `masonry ${className() ?? ""} svelte-b2jtby`);
      set_attribute(div, "style", `gap: ${gap() ?? ""}px; ${style() ?? ""}`);
    });
    bind_element_size(div, "clientWidth", masonryWidth);
    bind_element_size(div, "clientHeight", masonryHeight);
    append($$anchor, div);
    pop();
  }
  var __assign = function() {
    __assign = Object.assign || function __assign2(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
    };
    return __assign.apply(this, arguments);
  };
  var NotyfNotification = (
    /** @class */
    function() {
      function NotyfNotification2(options) {
        this.options = options;
        this.listeners = {};
      }
      NotyfNotification2.prototype.on = function(eventType, cb) {
        var callbacks = this.listeners[eventType] || [];
        this.listeners[eventType] = callbacks.concat([cb]);
      };
      NotyfNotification2.prototype.triggerEvent = function(eventType, event2) {
        var _this = this;
        var callbacks = this.listeners[eventType] || [];
        callbacks.forEach(function(cb) {
          return cb({ target: _this, event: event2 });
        });
      };
      return NotyfNotification2;
    }()
  );
  var NotyfArrayEvent;
  (function(NotyfArrayEvent2) {
    NotyfArrayEvent2[NotyfArrayEvent2["Add"] = 0] = "Add";
    NotyfArrayEvent2[NotyfArrayEvent2["Remove"] = 1] = "Remove";
  })(NotyfArrayEvent || (NotyfArrayEvent = {}));
  var NotyfArray = (
    /** @class */
    function() {
      function NotyfArray2() {
        this.notifications = [];
      }
      NotyfArray2.prototype.push = function(elem) {
        this.notifications.push(elem);
        this.updateFn(elem, NotyfArrayEvent.Add, this.notifications);
      };
      NotyfArray2.prototype.splice = function(index2, num) {
        var elem = this.notifications.splice(index2, num)[0];
        this.updateFn(elem, NotyfArrayEvent.Remove, this.notifications);
        return elem;
      };
      NotyfArray2.prototype.indexOf = function(elem) {
        return this.notifications.indexOf(elem);
      };
      NotyfArray2.prototype.onUpdate = function(fn) {
        this.updateFn = fn;
      };
      return NotyfArray2;
    }()
  );
  var NotyfEvent;
  (function(NotyfEvent2) {
    NotyfEvent2["Dismiss"] = "dismiss";
    NotyfEvent2["Click"] = "click";
  })(NotyfEvent || (NotyfEvent = {}));
  var DEFAULT_OPTIONS = {
    types: [
      {
        type: "success",
        className: "notyf__toast--success",
        backgroundColor: "#3dc763",
        icon: {
          className: "notyf__icon--success",
          tagName: "i"
        }
      },
      {
        type: "error",
        className: "notyf__toast--error",
        backgroundColor: "#ed3d3d",
        icon: {
          className: "notyf__icon--error",
          tagName: "i"
        }
      }
    ],
    duration: 2e3,
    ripple: true,
    position: {
      x: "right",
      y: "bottom"
    },
    dismissible: false
  };
  var NotyfView = (
    /** @class */
    function() {
      function NotyfView2() {
        this.notifications = [];
        this.events = {};
        this.X_POSITION_FLEX_MAP = {
          left: "flex-start",
          center: "center",
          right: "flex-end"
        };
        this.Y_POSITION_FLEX_MAP = {
          top: "flex-start",
          center: "center",
          bottom: "flex-end"
        };
        var docFrag = document.createDocumentFragment();
        var notyfContainer = this._createHTMLElement({ tagName: "div", className: "notyf" });
        docFrag.appendChild(notyfContainer);
        document.body.appendChild(docFrag);
        this.container = notyfContainer;
        this.animationEndEventName = this._getAnimationEndEventName();
        this._createA11yContainer();
      }
      NotyfView2.prototype.on = function(event2, cb) {
        var _a;
        this.events = __assign(__assign({}, this.events), (_a = {}, _a[event2] = cb, _a));
      };
      NotyfView2.prototype.update = function(notification, type) {
        if (type === NotyfArrayEvent.Add) {
          this.addNotification(notification);
        } else if (type === NotyfArrayEvent.Remove) {
          this.removeNotification(notification);
        }
      };
      NotyfView2.prototype.removeNotification = function(notification) {
        var _this = this;
        var renderedNotification = this._popRenderedNotification(notification);
        var node;
        if (!renderedNotification) {
          return;
        }
        node = renderedNotification.node;
        node.classList.add("notyf__toast--disappear");
        var handleEvent;
        node.addEventListener(this.animationEndEventName, handleEvent = function(event2) {
          if (event2.target === node) {
            node.removeEventListener(_this.animationEndEventName, handleEvent);
            _this.container.removeChild(node);
          }
        });
      };
      NotyfView2.prototype.addNotification = function(notification) {
        var node = this._renderNotification(notification);
        this.notifications.push({ notification, node });
        this._announce(notification.options.message || "Notification");
      };
      NotyfView2.prototype._renderNotification = function(notification) {
        var _a;
        var card = this._buildNotificationCard(notification);
        var className = notification.options.className;
        if (className) {
          (_a = card.classList).add.apply(_a, className.split(" "));
        }
        this.container.appendChild(card);
        return card;
      };
      NotyfView2.prototype._popRenderedNotification = function(notification) {
        var idx = -1;
        for (var i = 0; i < this.notifications.length && idx < 0; i++) {
          if (this.notifications[i].notification === notification) {
            idx = i;
          }
        }
        if (idx !== -1) {
          return this.notifications.splice(idx, 1)[0];
        }
        return;
      };
      NotyfView2.prototype.getXPosition = function(options) {
        var _a;
        return ((_a = options === null || options === undefined ? undefined : options.position) === null || _a === undefined ? undefined : _a.x) || "right";
      };
      NotyfView2.prototype.getYPosition = function(options) {
        var _a;
        return ((_a = options === null || options === undefined ? undefined : options.position) === null || _a === undefined ? undefined : _a.y) || "bottom";
      };
      NotyfView2.prototype.adjustContainerAlignment = function(options) {
        var align = this.X_POSITION_FLEX_MAP[this.getXPosition(options)];
        var justify = this.Y_POSITION_FLEX_MAP[this.getYPosition(options)];
        var style = this.container.style;
        style.setProperty("justify-content", justify);
        style.setProperty("align-items", align);
      };
      NotyfView2.prototype._buildNotificationCard = function(notification) {
        var _this = this;
        var options = notification.options;
        var iconOpts = options.icon;
        this.adjustContainerAlignment(options);
        var notificationElem = this._createHTMLElement({ tagName: "div", className: "notyf__toast" });
        var ripple = this._createHTMLElement({ tagName: "div", className: "notyf__ripple" });
        var wrapper = this._createHTMLElement({ tagName: "div", className: "notyf__wrapper" });
        var message = this._createHTMLElement({ tagName: "div", className: "notyf__message" });
        message.innerHTML = options.message || "";
        var mainColor = options.background || options.backgroundColor;
        if (iconOpts) {
          var iconContainer = this._createHTMLElement({ tagName: "div", className: "notyf__icon" });
          if (typeof iconOpts === "string" || iconOpts instanceof String)
            iconContainer.innerHTML = new String(iconOpts).valueOf();
          if (typeof iconOpts === "object") {
            var _a = iconOpts.tagName, tagName = _a === undefined ? "i" : _a, className_1 = iconOpts.className, text = iconOpts.text, _b = iconOpts.color, color = _b === undefined ? mainColor : _b;
            var iconElement = this._createHTMLElement({ tagName, className: className_1, text });
            if (color)
              iconElement.style.color = color;
            iconContainer.appendChild(iconElement);
          }
          wrapper.appendChild(iconContainer);
        }
        wrapper.appendChild(message);
        notificationElem.appendChild(wrapper);
        if (mainColor) {
          if (options.ripple) {
            ripple.style.background = mainColor;
            notificationElem.appendChild(ripple);
          } else {
            notificationElem.style.background = mainColor;
          }
        }
        if (options.dismissible) {
          var dismissWrapper = this._createHTMLElement({ tagName: "div", className: "notyf__dismiss" });
          var dismissButton = this._createHTMLElement({
            tagName: "button",
            className: "notyf__dismiss-btn"
          });
          dismissWrapper.appendChild(dismissButton);
          wrapper.appendChild(dismissWrapper);
          notificationElem.classList.add("notyf__toast--dismissible");
          dismissButton.addEventListener("click", function(event2) {
            var _a2, _b2;
            (_b2 = (_a2 = _this.events)[NotyfEvent.Dismiss]) === null || _b2 === undefined ? undefined : _b2.call(_a2, { target: notification, event: event2 });
            event2.stopPropagation();
          });
        }
        notificationElem.addEventListener("click", function(event2) {
          var _a2, _b2;
          return (_b2 = (_a2 = _this.events)[NotyfEvent.Click]) === null || _b2 === undefined ? undefined : _b2.call(_a2, { target: notification, event: event2 });
        });
        var className = this.getYPosition(options) === "top" ? "upper" : "lower";
        notificationElem.classList.add("notyf__toast--" + className);
        return notificationElem;
      };
      NotyfView2.prototype._createHTMLElement = function(_a) {
        var tagName = _a.tagName, className = _a.className, text = _a.text;
        var elem = document.createElement(tagName);
        if (className) {
          elem.className = className;
        }
        elem.textContent = text || null;
        return elem;
      };
      NotyfView2.prototype._createA11yContainer = function() {
        var a11yContainer = this._createHTMLElement({ tagName: "div", className: "notyf-announcer" });
        a11yContainer.setAttribute("aria-atomic", "true");
        a11yContainer.setAttribute("aria-live", "polite");
        a11yContainer.style.border = "0";
        a11yContainer.style.clip = "rect(0 0 0 0)";
        a11yContainer.style.height = "1px";
        a11yContainer.style.margin = "-1px";
        a11yContainer.style.overflow = "hidden";
        a11yContainer.style.padding = "0";
        a11yContainer.style.position = "absolute";
        a11yContainer.style.width = "1px";
        a11yContainer.style.outline = "0";
        document.body.appendChild(a11yContainer);
        this.a11yContainer = a11yContainer;
      };
      NotyfView2.prototype._announce = function(message) {
        var _this = this;
        this.a11yContainer.textContent = "";
        setTimeout(function() {
          _this.a11yContainer.textContent = message;
        }, 100);
      };
      NotyfView2.prototype._getAnimationEndEventName = function() {
        var el = document.createElement("_fake");
        var transitions = {
          MozTransition: "animationend",
          OTransition: "oAnimationEnd",
          WebkitTransition: "webkitAnimationEnd",
          transition: "animationend"
        };
        var t;
        for (t in transitions) {
          if (el.style[t] !== undefined) {
            return transitions[t];
          }
        }
        return "animationend";
      };
      return NotyfView2;
    }()
  );
  var Notyf = (
    /** @class */
    function() {
      function Notyf2(opts) {
        var _this = this;
        this.dismiss = this._removeNotification;
        this.notifications = new NotyfArray();
        this.view = new NotyfView();
        var types = this.registerTypes(opts);
        this.options = __assign(__assign({}, DEFAULT_OPTIONS), opts);
        this.options.types = types;
        this.notifications.onUpdate(function(elem, type) {
          return _this.view.update(elem, type);
        });
        this.view.on(NotyfEvent.Dismiss, function(_a) {
          var target = _a.target, event2 = _a.event;
          _this._removeNotification(target);
          target["triggerEvent"](NotyfEvent.Dismiss, event2);
        });
        this.view.on(NotyfEvent.Click, function(_a) {
          var target = _a.target, event2 = _a.event;
          return target["triggerEvent"](NotyfEvent.Click, event2);
        });
      }
      Notyf2.prototype.error = function(payload) {
        var options = this.normalizeOptions("error", payload);
        return this.open(options);
      };
      Notyf2.prototype.success = function(payload) {
        var options = this.normalizeOptions("success", payload);
        return this.open(options);
      };
      Notyf2.prototype.open = function(options) {
        var defaultOpts = this.options.types.find(function(_a) {
          var type = _a.type;
          return type === options.type;
        }) || {};
        var config = __assign(__assign({}, defaultOpts), options);
        this.assignProps(["ripple", "position", "dismissible"], config);
        var notification = new NotyfNotification(config);
        this._pushNotification(notification);
        return notification;
      };
      Notyf2.prototype.dismissAll = function() {
        while (this.notifications.splice(0, 1))
          ;
      };
      Notyf2.prototype.assignProps = function(props, config) {
        var _this = this;
        props.forEach(function(prop2) {
          config[prop2] = config[prop2] == null ? _this.options[prop2] : config[prop2];
        });
      };
      Notyf2.prototype._pushNotification = function(notification) {
        var _this = this;
        this.notifications.push(notification);
        var duration = notification.options.duration !== undefined ? notification.options.duration : this.options.duration;
        if (duration) {
          setTimeout(function() {
            return _this._removeNotification(notification);
          }, duration);
        }
      };
      Notyf2.prototype._removeNotification = function(notification) {
        var index2 = this.notifications.indexOf(notification);
        if (index2 !== -1) {
          this.notifications.splice(index2, 1);
        }
      };
      Notyf2.prototype.normalizeOptions = function(type, payload) {
        var options = { type };
        if (typeof payload === "string") {
          options.message = payload;
        } else if (typeof payload === "object") {
          options = __assign(__assign({}, options), payload);
        }
        return options;
      };
      Notyf2.prototype.registerTypes = function(opts) {
        var incomingTypes = (opts && opts.types || []).slice();
        var finalDefaultTypes = DEFAULT_OPTIONS.types.map(function(defaultType) {
          var userTypeIdx = -1;
          incomingTypes.forEach(function(t, idx) {
            if (t.type === defaultType.type)
              userTypeIdx = idx;
          });
          var userType = userTypeIdx !== -1 ? incomingTypes.splice(userTypeIdx, 1)[0] : {};
          return __assign(__assign({}, defaultType), userType);
        });
        return finalDefaultTypes.concat(incomingTypes);
      };
      return Notyf2;
    }()
  );
  new Notyf({
    duration: 5e3,
    dismissible: true
  });
  const notyf_lt = new Notyf({
    duration: 3e3,
    dismissible: true,
    position: {
      x: "left",
      y: "top"
    },
    types: [
      {
        type: "warning",
        background: "orange",
        icon: false
      }
    ]
  });
  const SVG_Size = "data:image/svg+xml,%3csvg%20stroke='currentColor'%20fill='currentColor'%20stroke-width='0'%20viewBox='0%200%2024%2024'%20height='25'%20width='25'%20xmlns='http://www.w3.org/2000/svg'%20style='%20vertical-align:%20middle;%20--darkreader-inline-fill:%20currentColor;%20--darkreader-inline-stroke:%20currentColor;'%20%3e%3cpath%20d='M12%205c-3.859%200-7%203.141-7%207s3.141%207%207%207%207-3.141%207-7-3.141-7-7-7zm0%2012c-2.757%200-5-2.243-5-5s2.243-5%205-5%205%202.243%205%205-2.243%205-5%205z'%3e%3c/path%3e%3cpath%20d='M12%209c-1.627%200-3%201.373-3%203s1.373%203%203%203%203-1.373%203-3-1.373-3-3-3z'%3e%3c/path%3e%3c/svg%3e";
  const SVG_Seeders = "data:image/svg+xml,%3csvg%20viewBox='64%2064%20896%20896'%20focusable='false'%20data-icon='arrow-up'%20width='1em'%20height='1em'%20fill='green'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M868%20545.5L536.1%20163a31.96%2031.96%200%2000-48.3%200L156%20545.5a7.97%207.97%200%20006%2013.2h81c4.6%200%209-2%2012.1-5.5L474%20300.9V864c0%204.4%203.6%208%208%208h60c4.4%200%208-3.6%208-8V300.9l218.9%20252.3c3%203.5%207.4%205.5%2012.1%205.5h81c6.8%200%2010.5-8%206-13.2z'%3e%3c/path%3e%3c/svg%3e";
  const SVG_Leechers = "data:image/svg+xml,%3csvg%20viewBox='64%2064%20896%20896'%20focusable='false'%20data-icon='arrow-down'%20width='1em'%20height='1em'%20fill='red'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M862%20465.3h-81c-4.6%200-9%202-12.1%205.5L550%20723.1V160c0-4.4-3.6-8-8-8h-60c-4.4%200-8%203.6-8%208v563.1L255.1%20470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8%200-10.5%208.1-6%2013.2L487.9%20861a31.96%2031.96%200%200048.3%200L868%20478.5c4.5-5.2.8-13.2-6-13.2z'%3e%3c/path%3e%3c/svg%3e";
  const SVG_Download = "data:image/svg+xml,%3csvg%20viewBox='64%2064%20896%20896'%20focusable='false'%20data-icon='download'%20width='1em'%20height='1em'%20fill='currentColor'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M505.7%20661a8%208%200%200012.6%200l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4%200-8%203.6-8%208v338.3H400c-6.7%200-10.4%207.7-6.3%2012.9l112%20141.8zM878%20626h-60c-4.4%200-8%203.6-8%208v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4%200-8%203.6-8%208v198c0%2017.7%2014.3%2032%2032%2032h684c17.7%200%2032-14.3%2032-32V634c0-4.4-3.6-8-8-8z'%3e%3c/path%3e%3c/svg%3e";
  const SVG_Collection = "data:image/svg+xml,%3csvg%20viewBox='64%2064%20896%20896'%20focusable='false'%20data-icon='star'%20width='1em'%20height='1em'%20fill='currentColor'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M908.1%20353.1l-253.9-36.9L540.7%2086.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9%2014.5L369.8%20316.2l-253.9%2036.9c-7%201-13.4%204.3-18.3%209.3a32.05%2032.05%200%2000.6%2045.3l183.7%20179.1-43.4%20252.9a31.95%2031.95%200%200046.4%2033.7L512%20754l227.1%20119.4c6.2%203.3%2013.4%204.4%2020.3%203.2%2017.4-3%2029.1-19.5%2026.1-36.9l-43.4-252.9%20183.7-179.1c5-4.9%208.3-11.3%209.3-18.3%202.7-17.5-9.5-33.7-27-36.3z'%3e%3c/path%3e%3c/svg%3e";
  const SVG_Preview = "data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cstyle%3e%20.cls-1{fill:%232eb1b7;}%20.cls-2{fill:%2356b54e;}%20.cls-3{fill:%235dc6d1;}%20.cls-4{fill:%2360cc5a;}%20.cls-5{fill:%23ffce69;}%20.cls-6{fill:%236c2e7c;}%20%3c/style%3e%3c/defs%3e%3cg%20id='Icons'%3e%3crect%20class='cls-1'%20height='22'%20rx='4'%20width='22'%20x='1'%20y='1'/%3e%3cpath%20class='cls-2'%20d='M23,18v1a4,4,0,0,1-4,4H5a4,4,0,0,1-3.9-3.1l7.19-7.19a1.008,1.008,0,0,1,1.42,0l1.8,1.8a1,1,0,0,0,1.46-.05l2.33-2.65a1,1,0,0,1,1.46-.05Z'/%3e%3cpath%20class='cls-3'%20d='M23,5v9a4.025,4.025,0,0,1-1.17,2.83l-5.07-5.07a1,1,0,0,0-1.46.05l-2.33,2.65a1,1,0,0,1-1.46.05l-1.8-1.8a1.008,1.008,0,0,0-1.42,0L3.36,17.64A3.988,3.988,0,0,1,1,14V5A4,4,0,0,1,5,1H19A4,4,0,0,1,23,5Z'/%3e%3cpath%20class='cls-4'%20d='M21.83,16.83A4.025,4.025,0,0,1,19,18H5a3.931,3.931,0,0,1-1.64-.36l4.93-4.93a1.008,1.008,0,0,1,1.42,0l1.8,1.8a1,1,0,0,0,1.46-.05l2.33-2.65a1,1,0,0,1,1.46-.05Z'/%3e%3ccircle%20class='cls-5'%20cx='7'%20cy='7'%20r='2'/%3e%3c/g%3e%3cg%20data-name='Layer%204'%20id='Layer_4'%3e%3cpath%20class='cls-6'%20d='M19,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,19,0Zm3,19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3Z'/%3e%3cpath%20class='cls-6'%20d='M7,10A3,3,0,1,0,4,7,3,3,0,0,0,7,10ZM7,6A1,1,0,1,1,6,7,1,1,0,0,1,7,6Z'/%3e%3cpath%20class='cls-6'%20d='M16.707,10.293a.956.956,0,0,0-.74-.293,1.006,1.006,0,0,0-.72.341L12.217,13.8l-2.51-2.511a1,1,0,0,0-1.414,0l-4,4a1,1,0,1,0,1.414,1.414L9,13.414l1.9,1.9L8.247,18.341a1,1,0,0,0,1.506,1.318l3.218-3.678.006,0,.007-.011,3.065-3.5,2.244,2.244a1,1,0,0,0,1.414-1.414Z'/%3e%3c/g%3e%3c/svg%3e";
  const cate_pic_baseUrl = "https://static.m-team.cc/static/cate/";
  const CONFIG = {
    /** 架构: 备选 => NexusPHP / Mteam / Unit3D... */
    architecture: "Mteam",
    /** 默认的种子表格 dom selector */
    TL_Selector: "div.app-content__inner",
    /** 加载图片等待时的默认图片 */
    LOADING_PIC: "/static/media/logo.80b63235eaf702e44a8d.png",
    /** 网站 host*/
    /** FIXME: 没用的字段了*/
    HOST: "https://test2.m-team.cc",
    /** 网站 api */
    API: {
      /** 查询 */
      search: {
        url: "/search",
        fullUrl: "/api/torrent/search",
        method: "POST"
        // payload 示例
        // NOTE: 好像没啥用了, 毕竟不主动发包了
        // payload: {
        //   categories: [],
        //   pageNumber: 7,
        //   pageSize: 100,
        //   sortDirection: "DESC",
        //   sortField: "CREATED_DATE",
        //   visible: 1,
        // }
      }
      //   // NOTE: 下面这俩就是展示一下, 我反正是拿到下载和收藏的就 dom 不发包了
      //   genDlToken: {
      //     url: '/genDlToken',
      //     fullUrl: '/api/torrent/genDlToken',
      //     method: 'POST',
      //     type: 'formData',
      //     contentForm: {
      //       name1: 'id'
      //     }
      //   },
      //   collection: {
      //     url: '/collection',
      //     fullUrl: '/api/torrent/collection',
      //     method: 'POST',
      //     type: 'formData',
      //     contentForm: {
      //       name1: 'id',
      //       name2: 'make'
      //     }
      //   }
    },
    /**如果站点有自定义的icon, 可以用自定义的 */
    ICON: {
      /** 大小图标 */
      SIZE: SVG_Size,
      /** 评论图标 */
      // COMMENT: SVG_Comment,
      /** 上传人数图标 */
      SEEDERS: SVG_Seeders,
      /** 下载人数图标 */
      LEECHERS: SVG_Leechers,
      /** 下载图标 */
      DOWNLOAD: SVG_Download,
      /** 收藏图标 */
      COLLECTION: SVG_Collection,
      /** 置顶图标 (没用, 看的是 css URL) */
      PIN: "/static/trans.gif",
      /** 时间图标 */
      // TIME: SVG_Time,
      /** 预览图标 */
      PREVIEW: SVG_Preview
    },
    CATEGORY: (
      // 普通分类
      {
        401: {
          src: cate_pic_baseUrl + "moviesd.png",
          alt: "電影/SD",
          color: "#c74854"
        },
        402: {
          src: cate_pic_baseUrl + "tvhd.png",
          alt: "影劇/綜藝/HD",
          color: "#276fb8"
        },
        403: {
          src: cate_pic_baseUrl + "tvsd.png",
          alt: "影劇/綜藝/SD",
          color: "#c74854"
        },
        404: {
          src: cate_pic_baseUrl + "bbc.png",
          alt: "紀錄",
          color: "#23ac38"
        },
        405: {
          src: cate_pic_baseUrl + "anime.png",
          alt: "動畫",
          color: "#996c34"
        },
        406: {
          src: cate_pic_baseUrl + "mv.png",
          alt: "演唱",
          color: "#8a57a1"
        },
        407: {
          src: cate_pic_baseUrl + "sport.png",
          alt: "運動",
          color: "#23ac38"
        },
        409: {
          src: cate_pic_baseUrl + "other.png",
          alt: "Misc(其他)",
          color: "#996c34"
        },
        419: {
          src: cate_pic_baseUrl + "moviehd.png",
          alt: "電影/HD",
          color: "#c01a20"
        },
        420: {
          src: cate_pic_baseUrl + "moviedvd.png",
          alt: "電影/DVDiSo",
          color: "#c74854"
        },
        421: {
          src: cate_pic_baseUrl + "moviebd.png",
          alt: "電影/Blu-Ray",
          color: "#00a0e9"
        },
        422: {
          src: cate_pic_baseUrl + "software.png",
          alt: "軟體",
          color: "#f39800"
        },
        423: {
          src: cate_pic_baseUrl + "game-pc-3.jpeg",
          alt: "PC遊戲",
          color: "#f39800"
        },
        427: {
          src: cate_pic_baseUrl + "Study.png",
          alt: "教育(書面)",
          color: "#7FC269"
        },
        434: {
          src: cate_pic_baseUrl + "flac.png",
          alt: "Music(無損)",
          color: "#8a57a1"
        },
        435: {
          src: cate_pic_baseUrl + "tvdvd.png",
          alt: "影劇/綜藝/DVDiSo",
          color: "#4dbebd"
        },
        438: {
          src: cate_pic_baseUrl + "tvbd.png",
          alt: "影劇/綜藝/BD",
          color: "#1897d6"
        },
        439: {
          src: cate_pic_baseUrl + "movieremux.png",
          alt: "電影/Remux",
          color: "#1b2a51"
        },
        451: {
          src: cate_pic_baseUrl + "Study_Video.png",
          alt: "教育(影片)",
          color: "#7FC269"
        },
        442: {
          src: cate_pic_baseUrl + "Study_Audio.png",
          alt: "有聲書",
          color: "#7FC269"
        },
        448: {
          src: cate_pic_baseUrl + "pcgame.png",
          alt: "TV遊戲",
          color: "#f39800"
        },
        // 成人分类
        410: {
          src: cate_pic_baseUrl + "cenhd.png",
          alt: "AV(有碼)/HD Censored",
          // color: '#db55a9',
          color: "#F520CB"
        },
        411: {
          src: cate_pic_baseUrl + "hgame.png",
          alt: "H-遊戲",
          color: "#f49800"
        },
        412: {
          src: cate_pic_baseUrl + "hanime.png",
          alt: "H-動畫",
          color: "#f49800"
        },
        413: {
          src: cate_pic_baseUrl + "hcomic.png",
          alt: "H-漫畫",
          color: "#f49800"
        },
        424: {
          src: cate_pic_baseUrl + "censd.png",
          alt: "AV(有碼)/SD Censored",
          // color: '#F520CB',
          color: "#DA55A9"
        },
        425: {
          src: cate_pic_baseUrl + "ivvideo.png",
          alt: "IV(寫真影集)",
          color: "#bb1e9a"
        },
        426: {
          src: cate_pic_baseUrl + "uendvd.png",
          alt: "AV(無碼)/DVDiSo Uncensored",
          color: "#f77afa"
        },
        429: {
          src: cate_pic_baseUrl + "uenhd.png",
          alt: "AV(無碼)/HD Uncensored",
          color: "#f52bcb"
        },
        430: {
          src: cate_pic_baseUrl + "uensd.png",
          alt: "AV(無碼)/SD Uncensored",
          color: "#db55a9"
        },
        431: {
          src: cate_pic_baseUrl + "cenbd.png",
          alt: "AV(有碼)/Blu-Ray Censored",
          color: "#19a7ec"
        },
        432: {
          src: cate_pic_baseUrl + "uenbd.png",
          alt: "AV(無碼)/Blu-Ray Uncensored",
          color: "#19a7ec"
        },
        433: {
          src: cate_pic_baseUrl + "ivpic.png",
          alt: "IV(寫真圖集)",
          color: "#bb1e9a"
        },
        436: {
          src: cate_pic_baseUrl + "adult0day.png",
          alt: "AV(網站)/0Day",
          color: "#bb1e9a"
        },
        437: {
          src: cate_pic_baseUrl + "cendvd.png",
          alt: "AV(有碼)/DVDiSo Censored",
          color: "#f77afa"
        },
        440: {
          src: cate_pic_baseUrl + "gayhd.gif",
          alt: "AV(Gay)/HD",
          color: "#f52bcb"
        }
      }
    ),
    // /**如果站点有必要设置分类颜色, 可以用自定义的 */
    // CATEGORY_COLOR: {
    //   // 成人分类
    //   115: '#f52bcb', // AV(有码) 父
    //   120: '#f52bcb', // AV(无码) 父
    //   410: '#f52bcb', // 有码 HD
    //   429: '#f52bcb', // 无码 HD
    //   424: '#DA55A9', // 有码 Xvid
    //   430: '#db55a9', // 无码 Xvid
    //   437: '#f77afa', // 有码 DVD
    //   426: '#f77afa', // 无码 DVD
    //   431: '#19a7ec', // 有码 BluRay
    //   432: '#19a7ec', // 无码 BluRay
    //   440: '#f52bcb', // GAY
    //   436: '#bb1e9a', // 0 day
    //   425: '#bb1e9a', // 写真 video
    //   433: '#bb1e9a', // 写真 pic
    //   411: '#f49800', // H-Game
    //   412: '#f49800', // H-Anime
    //   413: '#f49800', // H-Comic
    //   // 综合分类
    //   100: '#c74854', // Movie 父
    //   401: '#c74854', // Movie SD
    //   419: '#c01a20', // Movie HD
    //   420: '#c74854', // Movie DVD
    //   421: '#00a0e9', // Movie BluRay
    //   439: '#1b2a51', // Movie Remux
    //   105: '#276fb8', // TV影剧综艺 父
    //   403: '#c74854', // TV影剧综艺 SD
    //   402: '#276fb8', // TV影剧综艺 HD
    //   435: '#4dbebd', // TV影剧综艺 DVD
    //   438: '#1897d6', // TV影剧综艺 BluRay
    //   444: '#23ac38', // 纪录片 父
    //   404: '#23ac38', // 纪录片
    //   449: '#996c34', // Anime 父
    //   405: '#996c34', // Anime
    //   443: '#7FC269', // 教育 父
    //   427: '#7FC269', // 教育文档
    //   441: '#7FC269', // 教育影片
    //   442: '#7FC269', // 教育音频
    //   447: '#f39800', // Game 父
    //   423: '#f39800', // Game
    //   448: '#f39800', // TV Game
    //   450: '#996c34', // Other 父
    //   407: '#23ac38', // Sport
    //   422: '#f39800', // Software
    //   409: '#996c34', // Other
    //   // 音乐分类
    //   110: '#8a57a1', // 音乐 父
    //   406: '#8a57a1', // MV
    //   408: '#8a57a1', // Music AAC/ALAC
    //   434: '#8a57a1' // Music 无损
    // },
    // CATEGORY_NAME: {
    //   // 成人分类
    //   115: 'AV(有码)', // AV(有码)
    //   120: 'AV(无码)', // AV(无码)
    //   410: '有码 HD',
    //   429: '无码 HD',
    //   424: '有码 Xvid',
    //   430: '无码 Xvid',
    //   437: '有码 DVD',
    //   426: '无码 DVD',
    //   431: '有码 BluRay',
    //   432: '无码 BluRay',
    //   440: 'GAY',
    //   436: '0 day',
    //   425: '写真 video',
    //   433: '写真 pic',
    //   411: 'H-Game',
    //   412: 'H-Anime',
    //   413: 'H-Comic',
    //   // 综合分类
    //   100: 'Movie', // Movie 父
    //   401: 'Movie SD',
    //   419: 'Movie HD',
    //   420: 'Movie DVD',
    //   421: 'Movie BluRay',
    //   439: 'Movie Remux',
    //   105: 'TV', // 影剧综艺 父
    //   403: 'TV SD',
    //   402: 'TV HD',
    //   435: 'TV DVDiSo',
    //   438: 'TV BluRay',
    //   444: 'Documentary', // 纪录片 父
    //   404: 'Documentary',
    //   449: 'Anime', // 动漫 父
    //   405: 'Anime',
    //   443: '教育', // 父
    //   427: '教育文档',
    //   441: '教育影片',
    //   442: '教育音频',
    //   447: 'Game', // 父
    //   423: 'Game',
    //   448: 'TV Game',
    //   450: '其他', // 父
    //   407: 'Sport',
    //   422: '软件',
    //   409: 'Other',
    //   // 音乐分类
    //   110: 'Music', // 音乐 父
    //   406: 'MV',
    //   408: 'Music AAC/ALAC',
    //   434: 'Music 无损'
    // },
    /* TAG 种类
     * NOTE: 从 /getConf => TORRENT_LABEL_CONFIG 以及
     * NOTE: localstorage => persist:persist => sysinfo.sysConf.TORRENT_LABEL_CONFIG 都能找到新的
     * NOTE: Category 同理
     * NOTE: 这里为了偷懒就写死了, 往后有更新再说
     */
    TAG: {
      "4k": { color: "#4e5561", bgColor: "#ffffff8f", colorV2: "#4a5156", bgColorV2: "#e9e9e9" },
      "8k": { color: "#4e5561", bgColor: "#ffffff8f", colorV2: "#4a5156", bgColorV2: "#e9e9e9" },
      hdr: { color: "#4e5561", bgColor: "#ffffff8f", colorV2: "#4a5156", bgColorV2: "#e9e9e9" },
      hdr10: { color: "#4e5561", bgColor: "#ffffff8f", colorV2: "#4a5156", bgColorV2: "#e9e9e9" },
      "hdr10+": { color: "#4e5561", bgColor: "#ffffff8f", colorV2: "#4a5156", bgColorV2: "#e9e9e9" },
      hlg: { color: "#4e5561", bgColor: "#ffffff8f", colorV2: "#4a5156", bgColorV2: "#e9e9e9" },
      DoVi: { color: "#4e5561", bgColor: "#ffffff8f", colorV2: "#4a5156", bgColorV2: "#e9e9e9" },
      HDRVi: { color: "#4e5561", bgColor: "#ffffff8f", colorV2: "#4a5156", bgColorV2: "#e9e9e9" },
      中字: { color: "#ad2a2a", bgColor: "#d14a4a2e" },
      中配: { color: "#5b3991", bgColor: "#5b399129" }
    },
    /** 索引 */
    INDEX: 0,
    /** iframe 宽度 */
    Iframe_Width: 1260,
    /**获取背景颜色*/
    get_bg_color: function() {
      const next_bg = getComputedStyle(document.documentElement).getPropertyValue("--background-2");
      const normal_bg = getComputedStyle(document.documentElement).getPropertyValue("--bg-3");
      return next_bg || normal_bg || "#000000";
    },
    /** NOTE: 站点特殊操作 */
    special: function() {
      let len1 = table_Iframe_Set();
      let len2 = old_form_show_pic();
      return len1 && len2;
    },
    /** NOTE: 站点下一页加载后操作 */
    pageLoaded: function() {
    }
  };
  function table_Iframe_Set() {
    const lists = Array.from(document.querySelectorAll(".ant-table-row-level-0 .ant-col a[href]"));
    lists.forEach(function(el) {
      el.addEventListener("click", function(event2) {
        event2.preventDefault();
        _iframe_switch.set(1);
        _iframe_url.set(el.href);
      });
    });
    return lists.length;
  }
  function old_form_show_pic() {
    const elementsToRemove = document.querySelectorAll(".ant-image-mask");
    elementsToRemove.forEach((element) => {
      element.remove();
    });
    const lists = Array.from(document.querySelectorAll(".torrent-list__thumbnail"));
    lists.forEach((el) => {
      el.classList += " preview_Origin";
    });
    return lists.length;
  }
  const selector = ".preview_Origin";
  document.body.addEventListener("mouseover", function(e) {
    if (e.target.matches(selector)) {
      const event2 = e;
      const imgEle = e.target;
      handleMouseOver(event2, imgEle);
    }
  });
  document.body.addEventListener("mouseout", function(e) {
    if (e.target.matches(selector)) {
      handleMouseOut(e);
    }
  });
  document.body.addEventListener("mousemove", function(e) {
    if (e.target.matches(selector)) {
      const imgEle = e.target;
      handleMouseMove(e, imgEle);
    }
  });
  var root$a = /* @__PURE__ */ ns_template(`<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="18" width="18" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle;"><path d="M7 7h10v2H7zm0 4h7v2H7z"></path><path d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"></path></svg>`);
  function Icon_comment($$anchor) {
    var svg = root$a();
    append($$anchor, svg);
  }
  class HoverView {
    constructor() {
      this.container = null;
      this.imgElements = null;
      this.init();
    }
    /**
     * 初始化悬浮窗口
     */
    init() {
      this.container = document.querySelector(".kp_container") || this.createPreview();
      document.body.appendChild(this.container);
    }
    /**
     * 创建预览容器
     * @returns {HTMLElement}
     */
    createPreview() {
      const parent = document.createElement("div");
      parent.className = "kp_container";
      parent.style.backgroundColor = "rgba(0,0,0,0.8)";
      parent.style.opacity = "1";
      parent.style.position = "fixed";
      parent.style.zIndex = "10000";
      parent.style.pointerEvents = "none";
      parent.style.transition = "all .3s";
      parent.style.display = "none";
      const img1 = document.createElement("img");
      img1.className = "kp_img";
      img1.style.position = "absolute";
      img1.style.zIndex = "10002";
      img1.style.pointerEvents = "none";
      img1.style.width = "100%";
      img1.style.height = "100%";
      img1.style.objectFit = "contain";
      parent.appendChild(img1);
      const img2 = document.createElement("img");
      img2.className = "kp_img";
      img2.style.position = "absolute";
      img2.style.zIndex = "10001";
      img2.style.pointerEvents = "none";
      img2.style.width = "100%";
      img2.style.height = "100%";
      img2.style.objectFit = "cover";
      img2.style.filter = "blur(8px)";
      img2.style.opacity = "0.9";
      parent.appendChild(img2);
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
        console.warn("[FALL]: imgEle is null");
        return;
      }
      if (get(_show_nexus_pic)) {
        const src = imgEle.getAttribute("src");
        if (src) {
          const kpImgElements = document.querySelectorAll(".kp_img");
          kpImgElements.forEach((kpImg) => {
            kpImg.setAttribute("src", src);
          });
          this.imgElements = imgEle;
          this.updatePosition(touch);
          this.container.style.display = "block";
        }
      }
    }
    /**
     * 处理鼠标移动事件
     * @param {MouseEvent} e
     */
    handleMouseMove(e) {
      if (this.container && this.container.style.display === "block") {
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
    previewPosition(event2) {
      let imgWidth = 0, imgHeight = 0;
      try {
        imgWidth = this.imgElements.naturalWidth;
        imgHeight = this.imgElements.naturalHeight;
      } catch (error) {
      }
      const mouseX = event2.clientX;
      const mouseY = event2.clientY;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const containerSize = {
        bot: { width: viewportWidth, height: window.innerHeight - mouseY },
        top: { width: viewportWidth, height: mouseY },
        right: { width: window.innerWidth - mouseX, height: viewportHeight },
        left: { width: mouseX, height: viewportHeight }
      };
      let maxRatio = 0;
      let maxPosition = "";
      const res = {
        top: { left: 0, top: 0, width: viewportWidth + "px", height: mouseY + "px" },
        bot: { left: 0, top: mouseY + "px", width: viewportWidth + "px", height: window.innerHeight - mouseY + "px" },
        left: { left: 0, top: 0, width: mouseX + "px", height: viewportHeight + "px" },
        right: { left: mouseX + "px", top: 0, width: window.innerWidth - mouseX + "px", height: viewportHeight + "px" }
      };
      for (const key in containerSize) {
        const currentRatio = Math.min(containerSize[key].width / imgWidth, containerSize[key].height / imgHeight);
        if (currentRatio > maxRatio) {
          maxRatio = currentRatio;
          maxPosition = key;
        }
      }
      return res[maxPosition] || { left: 0, top: 0, width: 0, height: 0 };
    }
    /**
     * 清除预览
     */
    clearPreview() {
      document.querySelectorAll(".kp_img").forEach((kpImg) => {
        kpImg.setAttribute("src", "");
      });
      if (this.container) this.container.style.display = "none";
    }
    /**
     * 销毁组件
     */
    destroy() {
      if (this.container) {
        this.container.style.display = "none";
        clearPreview();
      }
    }
  }
  function __clearPreview() {
    document.querySelectorAll(".kp_img").forEach((kpImg) => {
      kpImg.setAttribute("src", "");
    });
    const _container = document.querySelector(".kp_container");
    if (_container) _container.style.display = "none";
  }
  window.__clearPreview = __clearPreview;
  const _PicErrorLOGO = "data:image/svg+xml,%3csvg%20width='256px'%20height='256px'%20viewBox='0%200%2024.00%2024.00'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20transform='matrix(1,%200,%200,%201,%200,%200)'%20%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'%20transform='translate(0,0),%20scale(1)'%20/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%23CCCCCC'%20stroke-width='0.048'%20/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M13%203L13.7071%202.29289C13.5196%202.10536%2013.2652%202%2013%202V3ZM14%2022C14.5523%2022%2015%2021.5523%2015%2021C15%2020.4477%2014.5523%2020%2014%2020V22ZM19%209H20C20%208.73478%2019.8946%208.48043%2019.7071%208.29289L19%209ZM18%2010C18%2010.5523%2018.4477%2011%2019%2011C19.5523%2011%2020%2010.5523%2020%2010H18ZM5.21799%2019.908L4.32698%2020.362H4.32698L5.21799%2019.908ZM6.09202%2020.782L6.54601%2019.891L6.54601%2019.891L6.09202%2020.782ZM6.09202%203.21799L5.63803%202.32698L5.63803%202.32698L6.09202%203.21799ZM5.21799%204.09202L4.32698%203.63803L4.32698%203.63803L5.21799%204.09202ZM13.109%208.45399L14%208V8L13.109%208.45399ZM13.546%208.89101L14%208L13.546%208.89101ZM17.2299%2017.7929C16.8394%2018.1834%2016.8394%2018.8166%2017.2299%2019.2071C17.6204%2019.5976%2018.2536%2019.5976%2018.6441%2019.2071L17.2299%2017.7929ZM15.0316%2015.2507C14.8939%2015.7856%2015.2159%2016.3308%2015.7507%2016.4684C16.2856%2016.6061%2016.8308%2016.2841%2016.9684%2015.7493L15.0316%2015.2507ZM17.9375%2020C17.3852%2020%2016.9375%2020.4477%2016.9375%2021C16.9375%2021.5523%2017.3852%2022%2017.9375%2022V20ZM17.9475%2022C18.4998%2022%2018.9475%2021.5523%2018.9475%2021C18.9475%2020.4477%2018.4998%2020%2017.9475%2020V22ZM13%202H8.2V4H13V2ZM4%206.2V17.8H6V6.2H4ZM8.2%2022H14V20H8.2V22ZM19.7071%208.29289L13.7071%202.29289L12.2929%203.70711L18.2929%209.70711L19.7071%208.29289ZM20%2010V9H18V10H20ZM4%2017.8C4%2018.3436%203.99922%2018.8114%204.03057%2019.195C4.06287%2019.5904%204.13419%2019.9836%204.32698%2020.362L6.10899%2019.454C6.0838%2019.4045%206.04612%2019.3038%206.02393%2019.0322C6.00078%2018.7488%206%2018.3766%206%2017.8H4ZM8.2%2020C7.62345%2020%207.25117%2019.9992%206.96784%2019.9761C6.69617%2019.9539%206.59545%2019.9162%206.54601%2019.891L5.63803%2021.673C6.01641%2021.8658%206.40963%2021.9371%206.80497%2021.9694C7.18864%2022.0008%207.65645%2022%208.2%2022V20ZM4.32698%2020.362C4.6146%2020.9265%205.07354%2021.3854%205.63803%2021.673L6.54601%2019.891C6.35785%2019.7951%206.20487%2019.6422%206.10899%2019.454L4.32698%2020.362ZM8.2%202C7.65645%202%207.18864%201.99922%206.80497%202.03057C6.40963%202.06287%206.01641%202.13419%205.63803%202.32698L6.54601%204.10899C6.59545%204.0838%206.69617%204.04612%206.96784%204.02393C7.25117%204.00078%207.62345%204%208.2%204V2ZM6%206.2C6%205.62345%206.00078%205.25117%206.02393%204.96784C6.04612%204.69617%206.0838%204.59545%206.10899%204.54601L4.32698%203.63803C4.13419%204.01641%204.06287%204.40963%204.03057%204.80497C3.99922%205.18864%204%205.65645%204%206.2H6ZM5.63803%202.32698C5.07354%202.6146%204.6146%203.07354%204.32698%203.63803L6.10899%204.54601C6.20487%204.35785%206.35785%204.20487%206.54601%204.10899L5.63803%202.32698ZM12%203V7.4H14V3H12ZM14.6%2010H19V8H14.6V10ZM12%207.4C12%207.66353%2011.9992%207.92131%2012.0169%208.13823C12.0356%208.36682%2012.0797%208.63656%2012.218%208.90798L14%208C14.0293%208.05751%2014.0189%208.08028%2014.0103%207.97537C14.0008%207.85878%2014%207.69653%2014%207.4H12ZM14.6%208C14.3035%208%2014.1412%207.99922%2014.0246%207.9897C13.9197%207.98113%2013.9425%207.9707%2014%208L13.092%209.78201C13.3634%209.92031%2013.6332%209.96438%2013.8618%209.98305C14.0787%2010.0008%2014.3365%2010%2014.6%2010V8ZM12.218%208.90798C12.4097%209.2843%2012.7157%209.59027%2013.092%209.78201L14%208V8L12.218%208.90798ZM18.937%2016C18.937%2016.1732%2018.8915%2016.3053%2018.6175%2016.5697C18.4638%2016.718%2018.2828%2016.8653%2018.0319%2017.074C17.7936%2017.2723%2017.5141%2017.5087%2017.2299%2017.7929L18.6441%2019.2071C18.86%2018.9913%2019.0805%2018.8033%2019.3109%2018.6116C19.5287%2018.4305%2019.7852%2018.2223%2020.0065%2018.0087C20.4825%2017.5493%2020.937%2016.9314%2020.937%2016H18.937ZM17.937%2015C18.4893%2015%2018.937%2015.4477%2018.937%2016H20.937C20.937%2014.3431%2019.5938%2013%2017.937%2013V15ZM16.9684%2015.7493C17.0795%2015.3177%2017.4724%2015%2017.937%2015V13C16.5377%2013%2015.3645%2013.957%2015.0316%2015.2507L16.9684%2015.7493ZM17.9375%2022H17.9475V20H17.9375V22Z'%20fill='%23c00000'%20/%3e%3c/g%3e%3c/svg%3e";
  const _PicNoLOGO = "data:image/svg+xml,%3csvg%20viewBox='-2.4%20-2.4%2028.80%2028.80'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23000000'%20%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'%20/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M15.6%2015.6C15.6%2015.6%2014.25%2013.8%2012%2013.8C9.75%2013.8%208.4%2015.6%208.4%2015.6M14.7%209.3H14.709M9.3%209.3H9.309M21%2012C21%2016.9706%2016.9706%2021%2012%2021C7.02944%2021%203%2016.9706%203%2012C3%207.02944%207.02944%203%2012%203C16.9706%203%2021%207.02944%2021%2012ZM15.15%209.3C15.15%209.54853%2014.9485%209.75%2014.7%209.75C14.4515%209.75%2014.25%209.54853%2014.25%209.3C14.25%209.05147%2014.4515%208.85%2014.7%208.85C14.9485%208.85%2015.15%209.05147%2015.15%209.3ZM9.75%209.3C9.75%209.54853%209.54853%209.75%209.3%209.75C9.05147%209.75%208.85%209.54853%208.85%209.3C8.85%209.05147%209.05147%208.85%209.3%208.85C9.54853%208.85%209.75%209.05147%209.75%209.3Z'%20stroke='%23000000'%20stroke-width='1.8'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3c/g%3e%3c/svg%3e";
  var $$_import_CONFIG = reactive_import(() => CONFIG);
  var root_1$2 = /* @__PURE__ */ template(`<div class="card-category svelte-13et45j"><img class="card_category-img svelte-13et45j"> </div>`);
  var root_2$2 = /* @__PURE__ */ template(`<a class="__main_title svelte-13et45j" target="_blank" rel="noopener noreferrer"> </a>`);
  var root_4$1 = /* @__PURE__ */ template(`<div class="pic_error svelte-13et45j"><div><img style="height: 100%; width:60px; border-radius:20px;" alt="pic error" class="svelte-13et45j"></div> <div class="ant-typography" style="color: white; font-size:16px;">GAY WARNING<br>同志警告</div></div>`);
  var root_6 = /* @__PURE__ */ template(`<img class="lazy-image svelte-13et45j">`);
  var root_7 = /* @__PURE__ */ template(`<div class="pic_error svelte-13et45j" style=""><div><img style="height: 100%;width: 100px;" alt="no pic" class="svelte-13et45j"></div> <div>本种没有图片</div></div>`);
  var root_8 = /* @__PURE__ */ template(`<div class="pic_error svelte-13et45j" style=""><div><img style="height: 100%;width: 100px;" alt="pic error" class="svelte-13et45j"></div> <div class="ant-typography">图片加载失败</div></div>`);
  var root_9 = /* @__PURE__ */ template(`<div class="hover-trigger svelte-13et45j"><img style="pointer-events: none;" alt="PREVIEW" class="svelte-13et45j"></div>`);
  var root_11 = /* @__PURE__ */ template(`<img style="
                    background: url(/static/media/icons.8bb5446ebbbd07050285.gif) 0 -202px;
                    height: 14px;
                    width: 14px;" alt="PIN" class="svelte-13et45j">`);
  var root_10 = /* @__PURE__ */ template(`<div class="card_info__topping svelte-13et45j"></div> &nbsp;`, 1);
  var root_12 = /* @__PURE__ */ template(`<div class="_tag svelte-13et45j"> </div>`);
  var root_14 = /* @__PURE__ */ template(`<div class="_tag _tag_diy svelte-13et45j">DIY</div>`);
  var root_15 = /* @__PURE__ */ template(`<div class="_tag _tag_dub svelte-13et45j">国配</div>`);
  var root_16 = /* @__PURE__ */ template(`<div class="_tag _tag_sub svelte-13et45j">中字</div>`);
  var root_18 = /* @__PURE__ */ template(`<div class="_tag svelte-13et45j"> </div>`);
  var root_13 = /* @__PURE__ */ template(`<div class="cl-tags svelte-13et45j"><!> <!> <!> <!></div>`);
  var root_21 = /* @__PURE__ */ template(`<img style="
                  background: url(/static/media/icons.8bb5446ebbbd07050285.gif) 0 -202px;
                  height: 14px;
                  width: 14px;" alt="PIN" class="svelte-13et45j">`);
  var root_20 = /* @__PURE__ */ template(`<div class="card_info__topping svelte-13et45j"></div> &nbsp;`, 1);
  var root_22 = /* @__PURE__ */ template(`<div class="_tag svelte-13et45j"> </div>`);
  var root_19 = /* @__PURE__ */ template(`<div class="card-index svelte-13et45j"><!> <!></div>`);
  var root_23 = /* @__PURE__ */ template(`<div class="card-index card-index-right svelte-13et45j"> </div>`);
  var root_25 = /* @__PURE__ */ template(`<div class="card_info-item card_info__sub_title svelte-13et45j"><div> </div></div>`);
  var root_27 = /* @__PURE__ */ template(`<div class="_tag _tag_diy svelte-13et45j">DIY</div>`);
  var root_28 = /* @__PURE__ */ template(`<div class="_tag _tag_dub svelte-13et45j">国配</div>`);
  var root_29 = /* @__PURE__ */ template(`<div class="_tag _tag_sub svelte-13et45j">中字</div>`);
  var root_31 = /* @__PURE__ */ template(`<div class="_tag svelte-13et45j"> </div>`);
  var root_26 = /* @__PURE__ */ template(`<div class="cl-tags svelte-13et45j"><!> <!> <!> <!></div>`);
  var root_32 = /* @__PURE__ */ template(`<div class="card_info-item card_info__dl_and_cl svelte-13et45j"><button title="(原列表的这俩按钮会消失)">下载 & 收藏</button></div>`);
  var root_33 = /* @__PURE__ */ template(`<div class="card_info-item card_info__upload_time svelte-13et45j"><div> </div></div>`);
  var root_34 = /* @__PURE__ */ template(`<div class="card_info-item card_info__statistics svelte-13et45j"><!> &nbsp; <b> </b> &nbsp;&nbsp; <img alt="SVG_Seeders"> &nbsp; <b> </b> &nbsp;&nbsp; <img alt="SVG_Leechers"> &nbsp; <b> </b></div>`);
  var root_24 = /* @__PURE__ */ template(`<div class="card_info svelte-13et45j"><!>  <!> <!> <!> <!></div>`);
  var root$9 = /* @__PURE__ */ template(`<div class="card_holder svelte-13et45j"><!> <div class="card_title"><!></div> <div class="card_pic svelte-13et45j"><!> <!>  <div class="hover-overlay svelte-13et45j"><div class="overlay-content svelte-13et45j"><div class="__inner_index_and_size svelte-13et45j"><div class="card-index __inner_index svelte-13et45j" style="background-color:black; color:white"><!> <!></div> <button class="__iframe_button svelte-13et45j">内窗预览</button> <div class="card-index card-index-right __inner_index __inner_size svelte-13et45j"> </div></div> <div class="card-category card_info-item svelte-13et45j"><img class="card_category-img card_category_square svelte-13et45j" style="width: 36px;height: 36px;"> </div> <div style="width: 100%;" class="card_info-item card_info__sub_title svelte-13et45j"><a class="__main_title __straight svelte-13et45j" target="_blank" rel="noopener noreferrer"> </a></div> <div style="width: 100%;" class="card_info-item card_info__sub_title svelte-13et45j"><div class="__sub_title svelte-13et45j"> </div></div>  <!> <div class="card_info-item card_info__upload_time svelte-13et45j"><div> </div></div> <div class="card_info-item card_info__statistics svelte-13et45j"><div class="__center svelte-13et45j"><!> <b> </b></div> <div class="__center svelte-13et45j"><img style="width: 14px; height: 14px;" alt="SVG_Seeders" class="svelte-13et45j"> <b> </b></div> <div class="__center svelte-13et45j"><img style="width: 14px; height: 14px;" alt="SVG_Leechers" class="svelte-13et45j"> <b> </b></div> <div><button title="(原列表的这俩按钮会消失)" style="
                background-color: inherit; border-color:transparent">下载&收藏</button></div></div></div></div> <!> <!></div> <!></div>`);
  function Mteam_Card($$anchor, $$props) {
    push($$props, false);
    const [$$stores, $$cleanup] = setup_stores();
    const $_mt_categories = () => store_get(_mt_categories, "$_mt_categories", $$stores);
    const $_mt_label = () => store_get(_mt_label, "$_mt_label", $$stores);
    const $_block_gay = () => store_get(_block_gay, "$_block_gay", $$stores);
    const $_card_radius = () => store_get(_card_radius, "$_card_radius", $$stores);
    const $_card_detail = () => store_get(_card_detail, "$_card_detail", $$stores);
    const $_show_hover_pic = () => store_get(_show_hover_pic, "$_show_hover_pic", $$stores);
    let torrentInfo = prop($$props, "torrentInfo", 8);
    let _inner_info_show = mutable_state(false);
    let toppingLevelArray = mutable_state();
    if (torrentInfo().status.toppingLevel) {
      set(toppingLevelArray, Array(Number(torrentInfo().status.toppingLevel)).fill());
    }
    const _discount = torrentInfo().status.discount;
    const _discountEndTime = torrentInfo().status.discountEndTime;
    const _discountText = { FREE: "免费", PERCENT_50: "50%" };
    const _discountCalcTime = () => {
      const now2 = /* @__PURE__ */ new Date();
      const end = new Date(_discountEndTime);
      const res = Math.floor((end.getTime() - now2.getTime()) / (1e3 * 3600));
      return res;
    };
    let card_holder = mutable_state();
    let _cateColor = mutable_state();
    const _defaultColor = "rgba(255, 255, 255, 0.5)";
    let _cateAlt = mutable_state();
    let _catePic = mutable_state();
    const _cateLink = `https://${location.host}/browse?cat=` + torrentInfo().category;
    if (!$$_import_CONFIG().CATEGORY[torrentInfo().category]) {
      set(_cateColor, _defaultColor);
      notyf_lt.open({
        type: "warning",
        message: `存在未知分类: ${torrentInfo().category}`
      });
      $$_import_CONFIG($$_import_CONFIG().CATEGORY[torrentInfo().category] = {
        src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZmMDAwMCIvPjwvc3ZnPg==",
        alt: "未知分类(TG或论坛联系我)",
        color: _defaultColor
      });
    }
    set(_cateAlt, $_mt_categories()[torrentInfo().category].nameChs ?? $$_import_CONFIG().CATEGORY[torrentInfo().category].alt);
    set(_catePic, $_mt_categories()[torrentInfo().category].image ? cate_pic_baseUrl + $_mt_categories()[torrentInfo().category].image : $$_import_CONFIG().CATEGORY[torrentInfo().category].src);
    set(_cateColor, $$_import_CONFIG().CATEGORY[torrentInfo().category].color ?? _defaultColor);
    const _cateFontColor = get$1(_cateColor) ? getTextColor(get$1(_cateColor)) : "black";
    let _labelsNew = mutable_state([]);
    if (torrentInfo().labelsNew.length) {
      set(_labelsNew, torrentInfo().labelsNew.map((labelKey) => {
        if ($$_import_CONFIG().TAG[labelKey]) {
          return {
            key: labelKey,
            config: $$_import_CONFIG().TAG[labelKey]
          };
        } else if ($_mt_label()) {
          console.warn("[FALL]: 存在本地没有的 tag: ", labelKey);
          let res;
          for (const key in $_mt_label()) {
            if (labelKey == $_mt_label()[key].tag) {
              res = $_mt_label()[key];
              break;
            }
          }
          if (res) {
            return { key: labelKey, config: res };
          }
        }
        return null;
      }).filter(Boolean));
    }
    function getFileSize(size) {
      if (size === 0) {
        return "0 B";
      }
      const units = ["B", "KB", "MB", "GB", "TB"];
      let i = 0;
      let sizeCopy = size;
      while (sizeCopy >= 1024 && i < units.length - 1) {
        sizeCopy /= 1024;
        i++;
      }
      const formattedSize = sizeCopy.toFixed(2).replace(/\.?0+$/, "");
      return `${formattedSize} ${units[i]}`;
    }
    let dlclElement_inner = mutable_state();
    let dlclElement_outer = mutable_state();
    function get__DOWN_and_COLLET__Dom(torrentID, dlcl) {
      const detailLinks = document.querySelectorAll(`a[href^="/detail/${torrentID}"]`);
      const targetButtons = [];
      detailLinks.forEach((link2) => {
        if (!/\/detail\/\d+/.test(link2.href)) return;
        const tr = link2.closest("tr");
        if (tr) {
          tr.querySelectorAll("button").forEach((button) => {
            if (button.querySelector("span.ant-btn-icon")) {
              targetButtons.push(button);
            }
          });
        }
      });
      if (targetButtons.length) {
        targetButtons[0].style.margin = 0;
        const uniqueButtons = [...new Set(targetButtons)];
        uniqueButtons.forEach((button) => {
          dlcl.appendChild(button);
        });
      } else {
        notyf_lt.error("没找到捏, 建议在种子详情里下载收藏~");
      }
    }
    let isHovered = mutable_state(false);
    let isMoving = mutable_state(false);
    let hoverView = new HoverView();
    let overlayHolder = mutable_state();
    let overlayContent = mutable_state();
    let overlayContentHeight = mutable_state(0);
    function getOverlayContentHeight() {
      if (get$1(overlayContent)) set(overlayContentHeight, get$1(overlayContent).offsetHeight);
    }
    let _picError = mutable_state(false);
    const static_gay_warn = "/static/cate/gayhd.gif";
    const placeholder = "https://static.m-team.cc/static/media/logo.80b63235eaf702e44a8d.png";
    let picSrc = torrentInfo().imageList[0] || placeholder;
    let imgElement = mutable_state();
    let observer;
    let isLoaded = mutable_state(false);
    const loadRealImage = () => {
      if (!get$1(isLoaded)) {
        mutate(imgElement, get$1(imgElement).style.width = "100%");
        mutate(imgElement, get$1(imgElement).src = picSrc);
        get$1(imgElement).classList.add("loaded");
        mutate(imgElement, get$1(imgElement).style.opacity = 1);
        set(isLoaded, true);
        if (get$1(overlayContent)) {
          getOverlayContentHeight();
        }
      }
    };
    function openIframe() {
      store_set(_iframe_url$1, "https://" + location.host + "/detail/" + torrentInfo().id);
      store_set(_iframe_switch$1, 1);
    }
    onMount(() => {
      if (!get$1(isLoaded)) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                loadRealImage();
                observer.unobserve(get$1(imgElement));
              }
            });
          },
          {
            rootMargin: "100px"
            // 提前100px加载
          }
        );
        if (get$1(imgElement) && !get$1(isLoaded)) observer.observe(get$1(imgElement));
        if (torrentInfo().pt_fall_highlight) {
          get$1(card_holder).scrollIntoView({
            behavior: "smooth"
            // 平滑滚动
          });
        }
        setTimeout(
          () => {
          },
          3e3
        );
      }
      getOverlayContentHeight();
      if (get$1(imgElement)) mutate(imgElement, get$1(imgElement).style.width = "auto");
    });
    onDestroy(() => {
      if (observer) observer.disconnect();
    });
    legacy_pre_effect(() => get$1(overlayContent), () => {
      if (get$1(overlayContent)) {
        getOverlayContentHeight();
      }
    });
    legacy_pre_effect(
      () => (deep_read_state(torrentInfo()), $_block_gay(), get$1(imgElement), get$1(overlayContent)),
      () => {
        if (torrentInfo().category == 440 && $_block_gay() == 0) {
          if (get$1(imgElement)) {
            mutate(imgElement, get$1(imgElement).style.width = "100%");
            mutate(imgElement, get$1(imgElement).src = picSrc);
            get$1(imgElement).classList.add("loaded");
            mutate(imgElement, get$1(imgElement).style.opacity = 1);
            set(isLoaded, true);
            if (get$1(overlayContent)) {
              getOverlayContentHeight();
            }
          }
        }
      }
    );
    legacy_pre_effect_reset();
    init();
    var div = root$9();
    var node = child(div);
    {
      var consequent = ($$anchor2) => {
        var div_1 = root_1$2();
        set_attribute(div_1, "data-href", _cateLink);
        var img = child(div_1);
        var text = sibling(img);
        template_effect(() => {
          set_attribute(div_1, "style", `
      background-color: ${get$1(_cateColor) ?? "transparent"};
      color: ${_cateFontColor ?? ""}`);
          set_attribute(img, "src", get$1(_catePic));
          set_attribute(img, "alt", get$1(_cateAlt));
          set_text(text, `    ${get$1(_cateAlt) ?? ""}`);
        });
        append($$anchor2, div_1);
      };
      if_block(node, ($$render) => {
        if ($_card_detail().category) $$render(consequent);
      });
    }
    var div_2 = sibling(node, 2);
    var node_1 = child(div_2);
    {
      var consequent_1 = ($$anchor2) => {
        var a = root_2$2();
        var text_1 = child(a);
        template_effect(() => {
          set_attribute(a, "href", "/detail/" + torrentInfo().id);
          set_text(text_1, torrentInfo().name);
        });
        append($$anchor2, a);
      };
      if_block(node_1, ($$render) => {
        if ($_card_detail().title) $$render(consequent_1);
      });
    }
    var div_3 = sibling(div_2, 2);
    var node_2 = child(div_3);
    {
      var consequent_4 = ($$anchor2) => {
        var fragment = comment();
        var node_3 = first_child(fragment);
        {
          var consequent_2 = ($$anchor3) => {
            var div_4 = root_4$1();
            var div_5 = child(div_4);
            var img_1 = child(div_5);
            set_attribute(img_1, "src", static_gay_warn);
            template_effect(() => set_attribute(div_4, "style", `  background-color: ${get$1(_cateColor) ?? ""}`));
            append($$anchor3, div_4);
          };
          var alternate_1 = ($$anchor3) => {
            var fragment_1 = comment();
            var node_4 = first_child(fragment_1);
            {
              var consequent_3 = ($$anchor4) => {
                var img_2 = root_6();
                set_attribute(img_2, "data-src", picSrc);
                bind_this(img_2, ($$value) => set(imgElement, $$value), () => get$1(imgElement));
                template_effect(() => {
                  set_attribute(img_2, "src", get$1(isLoaded) ? picSrc : placeholder);
                  set_attribute(img_2, "alt", torrentInfo().id);
                });
                event("error", img_2, () => {
                  set(_picError, true);
                  if (!get$1(imgElement)) {
                    console.log(`<${torrentInfo().index}>[${torrentInfo().id}] imgElement 丢失.`);
                  }
                });
                append($$anchor4, img_2);
              };
              var alternate = ($$anchor4) => {
                var div_6 = root_7();
                var div_7 = child(div_6);
                var img_3 = child(div_7);
                set_attribute(img_3, "src", _PicNoLOGO);
                append($$anchor4, div_6);
              };
              if_block(
                node_4,
                ($$render) => {
                  if (torrentInfo().imageList[0]) $$render(consequent_3);
                  else $$render(alternate, false);
                },
                true
              );
            }
            append($$anchor3, fragment_1);
          };
          if_block(node_3, ($$render) => {
            if ($_block_gay() && torrentInfo().category == 440) $$render(consequent_2);
            else $$render(alternate_1, false);
          });
        }
        append($$anchor2, fragment);
      };
      var alternate_2 = ($$anchor2) => {
        var div_8 = root_8();
        var div_9 = child(div_8);
        var img_4 = child(div_9);
        set_attribute(img_4, "src", _PicErrorLOGO);
        var div_10 = sibling(div_9, 2);
        template_effect(($0) => set_attribute(div_10, "style", `color: ${$0 ?? ""}; font-size:16px;`), [() => getTextColor(get$1(_cateColor))], derived_safe_equal);
        append($$anchor2, div_8);
      };
      if_block(node_2, ($$render) => {
        if (!get$1(_picError)) $$render(consequent_4);
        else $$render(alternate_2, false);
      });
    }
    var node_5 = sibling(node_2, 2);
    {
      var consequent_5 = ($$anchor2) => {
        var div_11 = root_9();
        var img_5 = child(div_11);
        template_effect(() => set_attribute(img_5, "src", $$_import_CONFIG().ICON.PREVIEW));
        event("mouseover", div_11, (e) => {
          set(isHovered, true);
          hoverView.handleMouseOver(e, get$1(imgElement));
        });
        append($$anchor2, div_11);
      };
      if_block(node_5, ($$render) => {
        if ($_show_hover_pic() && !get$1(_picError)) $$render(consequent_5);
      });
    }
    var div_12 = sibling(node_5, 2);
    var div_13 = child(div_12);
    var div_14 = child(div_13);
    var div_15 = child(div_14);
    var node_6 = child(div_15);
    {
      var consequent_6 = ($$anchor2) => {
        var fragment_2 = root_10();
        var div_16 = first_child(fragment_2);
        each(div_16, 5, () => get$1(toppingLevelArray), index, ($$anchor3, _) => {
          var img_6 = root_11();
          template_effect(() => set_attribute(img_6, "src", $$_import_CONFIG().ICON.PIN));
          append($$anchor3, img_6);
        });
        append($$anchor2, fragment_2);
      };
      if_block(node_6, ($$render) => {
        if (torrentInfo().status.toppingLevel != "0") $$render(consequent_6);
      });
    }
    var text_2 = sibling(node_6);
    var node_7 = sibling(text_2);
    {
      var consequent_7 = ($$anchor2) => {
        var div_17 = root_12();
        toggle_class(div_17, "_tag_discount_free", _discount == "FREE");
        toggle_class(div_17, "_tag_discount_50", _discount == "PERCENT_50");
        var text_3 = child(div_17);
        template_effect(
          ($0) => set_text(text_3, `${_discountText[_discount] ?? ""}${$0 ?? ""}`),
          [
            () => _discountEndTime ? ":" + _discountCalcTime() + "小时" : ""
          ],
          derived_safe_equal
        );
        append($$anchor2, div_17);
      };
      if_block(node_7, ($$render) => {
        if (_discount != "NORMAL") $$render(consequent_7);
      });
    }
    var button_1 = sibling(div_15, 2);
    var div_18 = sibling(button_1, 2);
    var text_4 = child(div_18);
    var div_19 = sibling(div_14, 2);
    set_attribute(div_19, "data-href", _cateLink);
    var img_7 = child(div_19);
    var text_5 = sibling(img_7);
    var div_20 = sibling(div_19, 2);
    var a_1 = child(div_20);
    var text_6 = child(a_1);
    var div_21 = sibling(div_20, 2);
    var div_22 = child(div_21);
    var text_7 = child(div_22);
    var node_8 = sibling(div_21, 2);
    {
      var consequent_12 = ($$anchor2) => {
        var div_23 = root_13();
        var node_9 = child(div_23);
        {
          var consequent_8 = ($$anchor3) => {
            var div_24 = root_14();
            append($$anchor3, div_24);
          };
          if_block(node_9, ($$render) => {
            if ((Number(torrentInfo().labels) & 1) === 1) $$render(consequent_8);
          });
        }
        var node_10 = sibling(node_9, 2);
        {
          var consequent_9 = ($$anchor3) => {
            var div_25 = root_15();
            append($$anchor3, div_25);
          };
          if_block(node_10, ($$render) => {
            if ((Number(torrentInfo().labels) & 2) === 2) $$render(consequent_9);
          });
        }
        var node_11 = sibling(node_10, 2);
        {
          var consequent_10 = ($$anchor3) => {
            var div_26 = root_16();
            append($$anchor3, div_26);
          };
          if_block(node_11, ($$render) => {
            if ((Number(torrentInfo().labels) & 4) === 4) $$render(consequent_10);
          });
        }
        var node_12 = sibling(node_11, 2);
        {
          var consequent_11 = ($$anchor3) => {
            var fragment_3 = comment();
            var node_13 = first_child(fragment_3);
            each(node_13, 1, () => get$1(_labelsNew), index, ($$anchor4, label) => {
              var div_27 = root_18();
              var text_8 = child(div_27);
              template_effect(() => {
                set_attribute(div_27, "style", `background-color: ${get$1(label).config.bgColor ?? ""}; color: ${get$1(label).config.color ?? ""}`);
                set_text(text_8, get$1(label).key);
              });
              append($$anchor4, div_27);
            });
            append($$anchor3, fragment_3);
          };
          if_block(node_12, ($$render) => {
            if (get$1(_labelsNew).length != 0) $$render(consequent_11);
          });
        }
        append($$anchor2, div_23);
      };
      if_block(node_8, ($$render) => {
        if (Number(torrentInfo().labels) || get$1(_labelsNew).length) $$render(consequent_12);
      });
    }
    var div_28 = sibling(node_8, 2);
    var div_29 = child(div_28);
    var text_9 = child(div_29);
    var div_30 = sibling(div_28, 2);
    var div_31 = child(div_30);
    var node_14 = child(div_31);
    Icon_comment(node_14);
    var b = sibling(node_14, 2);
    var text_10 = child(b);
    var div_32 = sibling(div_31, 2);
    var img_8 = child(div_32);
    var b_1 = sibling(img_8, 2);
    var text_11 = child(b_1);
    var div_33 = sibling(div_32, 2);
    var img_9 = child(div_33);
    var b_2 = sibling(img_9, 2);
    var text_12 = child(b_2);
    var div_34 = sibling(div_33, 2);
    var button_2 = child(div_34);
    bind_this(div_34, ($$value) => set(dlclElement_inner, $$value), () => get$1(dlclElement_inner));
    bind_this(div_13, ($$value) => set(overlayContent, $$value), () => get$1(overlayContent));
    bind_this(div_12, ($$value) => set(overlayHolder, $$value), () => get$1(overlayHolder));
    var node_15 = sibling(div_12, 2);
    {
      var consequent_15 = ($$anchor2) => {
        var div_35 = root_19();
        var node_16 = child(div_35);
        {
          var consequent_13 = ($$anchor3) => {
            var fragment_4 = root_20();
            var div_36 = first_child(fragment_4);
            each(div_36, 5, () => get$1(toppingLevelArray), index, ($$anchor4, _) => {
              var img_10 = root_21();
              template_effect(() => set_attribute(img_10, "src", $$_import_CONFIG().ICON.PIN));
              append($$anchor4, img_10);
            });
            append($$anchor3, fragment_4);
          };
          if_block(node_16, ($$render) => {
            if ($_card_detail().topping && torrentInfo().status.toppingLevel != "0") $$render(consequent_13);
          });
        }
        var text_13 = sibling(node_16);
        var node_17 = sibling(text_13);
        {
          var consequent_14 = ($$anchor3) => {
            var div_37 = root_22();
            toggle_class(div_37, "_tag_discount_free", _discount == "FREE");
            toggle_class(div_37, "_tag_discount_50", _discount == "PERCENT_50");
            var text_14 = child(div_37);
            template_effect(
              ($0) => set_text(text_14, `${_discountText[_discount] ?? ""}${$0 ?? ""}`),
              [
                () => _discountEndTime ? ":" + _discountCalcTime() + "小时" : ""
              ],
              derived_safe_equal
            );
            append($$anchor3, div_37);
          };
          if_block(node_17, ($$render) => {
            if ($_card_detail().free && _discount != "NORMAL") $$render(consequent_14);
          });
        }
        template_effect(() => set_text(text_13, ` ${torrentInfo().index ?? ""}

          `));
        append($$anchor2, div_35);
      };
      if_block(node_15, ($$render) => {
        if (!get$1(_inner_info_show)) $$render(consequent_15);
      });
    }
    var node_18 = sibling(node_15, 2);
    {
      var consequent_16 = ($$anchor2) => {
        var div_38 = root_23();
        var text_15 = child(div_38);
        template_effect(
          ($0) => {
            set_attribute(div_38, "style", `background-color: ${get$1(_cateColor) ?? "transparent"}; color:${_cateFontColor ?? ""}`);
            set_text(text_15, $0);
          },
          [() => getFileSize(torrentInfo().size)],
          derived_safe_equal
        );
        append($$anchor2, div_38);
      };
      if_block(node_18, ($$render) => {
        if ($_card_detail().size && !get$1(_inner_info_show)) $$render(consequent_16);
      });
    }
    var node_19 = sibling(div_3, 2);
    {
      var consequent_26 = ($$anchor2) => {
        var div_39 = root_24();
        var node_20 = child(div_39);
        {
          var consequent_17 = ($$anchor3) => {
            var div_40 = root_25();
            var div_41 = child(div_40);
            var text_16 = child(div_41);
            template_effect(() => set_text(text_16, torrentInfo().smallDescr));
            append($$anchor3, div_40);
          };
          if_block(node_20, ($$render) => {
            if ($_card_detail().sub_title) $$render(consequent_17);
          });
        }
        var node_21 = sibling(node_20, 2);
        {
          var consequent_22 = ($$anchor3) => {
            var div_42 = root_26();
            var node_22 = child(div_42);
            {
              var consequent_18 = ($$anchor4) => {
                var div_43 = root_27();
                append($$anchor4, div_43);
              };
              if_block(node_22, ($$render) => {
                if ((torrentInfo().labels & 1) === 1) $$render(consequent_18);
              });
            }
            var node_23 = sibling(node_22, 2);
            {
              var consequent_19 = ($$anchor4) => {
                var div_44 = root_28();
                append($$anchor4, div_44);
              };
              if_block(node_23, ($$render) => {
                if ((torrentInfo().labels & 2) === 2) $$render(consequent_19);
              });
            }
            var node_24 = sibling(node_23, 2);
            {
              var consequent_20 = ($$anchor4) => {
                var div_45 = root_29();
                append($$anchor4, div_45);
              };
              if_block(node_24, ($$render) => {
                if ((torrentInfo().labels & 4) === 4) $$render(consequent_20);
              });
            }
            var node_25 = sibling(node_24, 2);
            {
              var consequent_21 = ($$anchor4) => {
                var fragment_5 = comment();
                var node_26 = first_child(fragment_5);
                each(node_26, 1, () => get$1(_labelsNew), index, ($$anchor5, label) => {
                  var div_46 = root_31();
                  var text_17 = child(div_46);
                  template_effect(() => {
                    set_attribute(div_46, "style", `background-color: ${get$1(label).config.bgColor ?? ""}; color: ${get$1(label).config.color ?? ""}`);
                    set_text(text_17, get$1(label).key);
                  });
                  append($$anchor5, div_46);
                });
                append($$anchor4, fragment_5);
              };
              if_block(node_25, ($$render) => {
                if (get$1(_labelsNew).length != 0) $$render(consequent_21);
              });
            }
            append($$anchor3, div_42);
          };
          if_block(node_21, ($$render) => {
            if ($_card_detail().tags && (Number(torrentInfo().labels) || get$1(_labelsNew).length)) $$render(consequent_22);
          });
        }
        var node_27 = sibling(node_21, 2);
        {
          var consequent_23 = ($$anchor3) => {
            var div_47 = root_32();
            var button_3 = child(div_47);
            bind_this(div_47, ($$value) => set(dlclElement_outer, $$value), () => get$1(dlclElement_outer));
            template_effect(() => set_attribute(button_3, "style", `
              background-color: ${(get$1(_cateColor) ? get$1(_cateColor) : "transparent") ?? ""};
              color: ${_cateFontColor ?? ""} ;
              border: 3px solid transparent;
              border-radius: 14px;
              overflow: hidden;
            `));
            event("click", button_3, (e) => {
              get__DOWN_and_COLLET__Dom(torrentInfo().id, get$1(dlclElement_outer));
              e.target.style.display = "none";
            });
            append($$anchor3, div_47);
          };
          if_block(node_27, ($$render) => {
            if ($_card_detail().download_collect) $$render(consequent_23);
          });
        }
        var node_28 = sibling(node_27, 2);
        {
          var consequent_24 = ($$anchor3) => {
            var div_48 = root_33();
            var div_49 = child(div_48);
            var text_18 = child(div_49);
            template_effect(() => set_text(text_18, `上传时间:${torrentInfo().createdDate ?? ""}`));
            append($$anchor3, div_48);
          };
          if_block(node_28, ($$render) => {
            if ($_card_detail().upload_time) $$render(consequent_24);
          });
        }
        var node_29 = sibling(node_28, 2);
        {
          var consequent_25 = ($$anchor3) => {
            var div_50 = root_34();
            var node_30 = child(div_50);
            Icon_comment(node_30);
            var b_3 = sibling(node_30, 2);
            var text_19 = child(b_3);
            var img_11 = sibling(b_3, 2);
            var b_4 = sibling(img_11, 2);
            var text_20 = child(b_4);
            var img_12 = sibling(b_4, 2);
            var b_5 = sibling(img_12, 2);
            var text_21 = child(b_5);
            template_effect(() => {
              set_text(text_19, torrentInfo().status.comments);
              set_attribute(img_11, "src", $$_import_CONFIG().ICON.SEEDERS);
              set_text(text_20, torrentInfo().status.seeders);
              set_attribute(img_12, "src", $$_import_CONFIG().ICON.LEECHERS);
              set_text(text_21, torrentInfo().status.leechers);
            });
            append($$anchor3, div_50);
          };
          if_block(node_29, ($$render) => {
            if ($_card_detail().statistics) $$render(consequent_25);
          });
        }
        template_effect(() => set_attribute(div_39, "style", `
        background-color: ${(get$1(_cateColor) ? get$1(_cateColor) + "b0" : "transparent") ?? ""};
        color: ${_cateFontColor ?? ""}`));
        append($$anchor2, div_39);
      };
      if_block(node_19, ($$render) => {
        if ($_card_detail().sub_title || $_card_detail().tags || $_card_detail().download_collect || $_card_detail().upload_time || $_card_detail().statistics) $$render(consequent_26);
      });
    }
    bind_this(div, ($$value) => set(card_holder, $$value), () => get$1(card_holder));
    template_effect(
      ($0) => {
        set_style(div, "--borderRadius", $_card_radius().enabled ? $_card_radius().value + "px" : "0");
        set_attribute(div_3, "style", `min-height: ${get$1(overlayContentHeight) + 24}px;`);
        set_style(div_3, "--cateColor", get$1(_cateColor) + "b0");
        set_text(text_2, ` ${torrentInfo().index ?? ""}

              `);
        set_attribute(button_1, "style", `background-color: ${get$1(_cateColor) ?? "transparent"}; color:${_cateFontColor ?? ""}`);
        set_attribute(div_18, "style", `background-color: ${get$1(_cateColor) ?? "transparent"}; color:${_cateFontColor ?? ""}`);
        set_text(text_4, $0);
        set_attribute(div_19, "style", `
            height: 40px;
            background-color: ${get$1(_cateColor) ?? "transparent"};
            color: ${_cateFontColor ?? ""}`);
        set_attribute(img_7, "src", get$1(_catePic));
        set_attribute(img_7, "alt", get$1(_cateAlt));
        set_text(text_5, `    ${get$1(_cateAlt) ?? ""}`);
        set_attribute(a_1, "href", "/detail/" + torrentInfo().id);
        set_attribute(a_1, "title", torrentInfo().name);
        set_text(text_6, torrentInfo().name);
        set_text(text_7, torrentInfo().smallDescr);
        set_text(text_9, `上传时间:${torrentInfo().createdDate ?? ""}`);
        set_text(text_10, torrentInfo().status.comments);
        set_attribute(img_8, "src", $$_import_CONFIG().ICON.SEEDERS);
        set_text(text_11, torrentInfo().status.seeders);
        set_attribute(img_9, "src", $$_import_CONFIG().ICON.LEECHERS);
        set_text(text_12, torrentInfo().status.leechers);
        set_attribute(div_34, "style", `
              background-color: ${(get$1(_cateColor) ? get$1(_cateColor) : "transparent") ?? ""};
              color: ${_cateFontColor ?? ""} ;
              border-radius: 14px;
              overflow: hidden;
            `);
      },
      [() => getFileSize(torrentInfo().size)],
      derived_safe_equal
    );
    event("click", button_1, openIframe);
    event("mousedown", div_20, stopPropagation((e) => {
      e.stopPropagation();
    }));
    event("mousedown", button_2, stopPropagation((e) => {
      e.stopPropagation();
    }));
    event("click", button_2, stopPropagation((e) => {
      get__DOWN_and_COLLET__Dom(torrentInfo().id, get$1(dlclElement_inner));
      e.target.style.display = "none";
    }));
    event("mouseenter", div_12, () => {
      if (get$1(imgElement)) mutate(imgElement, get$1(imgElement).style.filter = "blur(2px)");
      mutate(overlayHolder, get$1(overlayHolder).style.opacity = "1");
      set(_inner_info_show, true);
    });
    event("mousemove", div_12, (e) => {
      set(isMoving, true);
      if (get$1(isHovered) && get$1(isMoving)) {
        hoverView.handleMouseMove(e);
      }
    });
    event("mouseleave", div_12, () => {
      if (get$1(imgElement)) mutate(imgElement, get$1(imgElement).style.filter = "none");
      mutate(overlayHolder, get$1(overlayHolder).style.opacity = "0");
      set(_inner_info_show, false);
      set(isMoving, false);
      if (get$1(isHovered)) {
        set(isHovered, false);
        hoverView.clearPreview();
      }
    });
    event("mousedown", div_12, self(openIframe));
    append($$anchor, div);
    pop();
    $$cleanup();
  }
  var root_3$1 = /* @__PURE__ */ template(`<p class="text_center svelte-1vmncc1">没有结果捏</p>`);
  var root$8 = /* @__PURE__ */ template(`<main><div class="fall_holder svelte-1vmncc1" style=""><!></div></main>`);
  function Mteam_Fall($$anchor, $$props) {
    var _a, _b, _c, _d;
    push($$props, false);
    const [$$stores, $$cleanup] = setup_stores();
    const $_card_layout = () => store_get(_card_layout, "$_card_layout", $$stores);
    const items = mutable_state();
    let infoList = prop($$props, "infoList", 8);
    let listContent = mutable_state(infoList().data);
    get$1(listContent).length;
    let fallContainer = mutable_state();
    CONFIG.get_bg_color();
    Object.keys(get$1(listContent)).forEach((key, index2) => {
      mutate(listContent, get$1(listContent)[key].index = index2 + 1);
    });
    console.log("Mteam_Fall:First	" + get$1(listContent).length);
    function updateList(newInfoList, clearPage = true) {
      let list = newInfoList.data;
      console.log("Mteam_Fall:New:	" + list.length);
      if (clearPage) {
        clearList();
        Object.keys(list).forEach((key, index2) => {
          list[key].index = index2 + 1;
          if (index2 == 0) list[key].pt_fall_highlight = true;
        });
        set(listContent, [...list]);
      } else {
        Object.keys(list).forEach((key, index2) => {
          list[key].index = index2 + 1 + get$1(listContent).length;
          if (index2 == 0) list[key].pt_fall_highlight = true;
        });
        set(listContent, [...get$1(listContent), ...list]);
      }
    }
    function clearList() {
      set(listContent, []);
    }
    function viewFocus(dom, pos) {
      if (pos == "top") {
        dom.scrollIntoView({
          behavior: "smooth"
          // 平滑滚动
        });
      }
      if (pos == "bottom") {
        dom.scrollIntoView({
          behavior: "auto",
          // 可选 "smooth" 平滑滚动
          block: "end",
          // 垂直方向对齐到视口底部
          inline: "nearest"
          // 水平方向保持默认
        });
        dom.scrollIntoView({
          behavior: "auto",
          // 可选 "smooth" 平滑滚动
          block: "end",
          // 垂直方向对齐到视口底部
          inline: "nearest"
          // 水平方向保持默认
        });
        dom.scrollIntoView({
          behavior: "auto",
          // 可选 "smooth" 平滑滚动
          block: "end",
          // 垂直方向对齐到视口底部
          inline: "nearest"
          // 水平方向保持默认
        });
      }
    }
    function focusFall(pos = "top") {
      viewFocus(get$1(fallContainer), pos);
    }
    let mt__ls__p_p;
    let store_label;
    let store_categories;
    try {
      mt__ls__p_p = __JsonParse(localStorage.getItem("persist:persist"));
      store_label = (_b = (_a = mt__ls__p_p.sysinfo) == null ? void 0 : _a.sysConf) == null ? void 0 : _b.TORRENT_LABEL_CONFIG;
      store_categories = (_d = (_c = mt__ls__p_p.sysinfo) == null ? void 0 : _c.categoryList) == null ? void 0 : _d.categorys;
      if (store_label) store_set(_mt_label, store_label);
      if (store_categories) store_set(_mt_categories, store_categories);
    } catch (error) {
      console.error(error);
      console.log(mt__ls__p_p);
    }
    legacy_pre_effect(() => get$1(listContent), () => {
      set(items, [...get$1(listContent)]);
    });
    legacy_pre_effect_reset();
    init();
    var main = root$8();
    var div = child(main);
    var node = child(div);
    {
      var consequent = ($$anchor2) => {
        Masonry($$anchor2, {
          animate: true,
          get items() {
            return get$1(items);
          },
          get minColWidth() {
            return $_card_layout().min;
          },
          get maxColWidth() {
            return $_card_layout().max;
          },
          get gap() {
            return $_card_layout().gap;
          },
          children: invalid_default_snippet,
          $$slots: {
            default: ($$anchor3, $$slotProps) => {
              const item = /* @__PURE__ */ derived_safe_equal(() => $$slotProps.item);
              Mteam_Card($$anchor3, {
                get torrentInfo() {
                  return get$1(item);
                }
              });
            }
          }
        });
      };
      var alternate = ($$anchor2) => {
        var p = root_3$1();
        append($$anchor2, p);
      };
      if_block(node, ($$render) => {
        if (get$1(items).length) $$render(consequent);
        else $$render(alternate, false);
      });
    }
    bind_this(main, ($$value) => set(fallContainer, $$value), () => get$1(fallContainer));
    append($$anchor, main);
    bind_prop($$props, "updateList", updateList);
    bind_prop($$props, "clearList", clearList);
    bind_prop($$props, "focusFall", focusFall);
    var $$pop = pop({ updateList, clearList, focusFall });
    $$cleanup();
    return $$pop;
  }
  let version = "0.3.8";
  var root$7 = /* @__PURE__ */ ns_template(`<svg class="tgme_logo" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle cx="17" cy="17" fill="#40a9ff" r="17"></circle><path d="m7.06510669 16.9258959c5.22739451-2.1065178 8.71314291-3.4952633 10.45724521-4.1662364 4.9797665-1.9157646 6.0145193-2.2485535 6.6889567-2.2595423.1483363-.0024169.480005.0315855.6948461.192827.1814076.1361492.23132.3200675.2552048.4491519.0238847.1290844.0536269.4231419.0299841.65291-.2698553 2.6225356-1.4375148 8.986738-2.0315537 11.9240228-.2513602 1.2428753-.7499132 1.5088847-1.2290685 1.5496672-1.0413153.0886298-1.8284257-.4857912-2.8369905-1.0972863-1.5782048-.9568691-2.5327083-1.3984317-4.0646293-2.3321592-1.7703998-1.0790837-.212559-1.583655.7963867-2.5529189.2640459-.2536609 4.7753906-4.3097041 4.755976-4.431706-.0070494-.0442984-.1409018-.481649-.2457499-.5678447-.104848-.0861957-.2595946-.0567202-.3712641-.033278-.1582881.0332286-2.6794907 1.5745492-7.5636077 4.6239616-.715635.4545193-1.3638349.6759763-1.9445998.6643712-.64024672-.0127938-1.87182452-.334829-2.78737602-.6100966-1.12296117-.3376271-1.53748501-.4966332-1.45976769-1.0700283.04048-.2986597.32581586-.610598.8560076-.935815z" fill="#fff"></path></g></svg>`);
  function Icon_telegram($$anchor, $$props) {
    let height = prop($$props, "height", 8, 34);
    let width = prop($$props, "width", 8, 34);
    var svg = root$7();
    template_effect(() => {
      set_attribute(svg, "height", height());
      set_attribute(svg, "width", width());
    });
    append($$anchor, svg);
  }
  var root_1$1 = /* @__PURE__ */ template(`<div class="modal-overlay svelte-1a87xm5" role="button" aria-hidden="true"><div class="modal-content svelte-1a87xm5" role="button" aria-hidden="true"><div class="modal-header svelte-1a87xm5"><h3 class="svelte-1a87xm5">关于 PT-Fall</h3> <button class="close-btn svelte-1a87xm5">&times;</button></div> <div class="modal-body svelte-1a87xm5"><h4 class="svelte-1a87xm5">PT-Fall 是一个专为 M-team 站点量身定制的瀑布流视图插件</h4> <p class="svelte-1a87xm5">Github: <a href="https://github.com/KesaubeEire/PT_Fall-View" target="_blank">https://github.com/KesaubeEire/PT_Fall-View</a></p> <p class="svelte-1a87xm5">GreaseFork: <a href="https://greasyfork.org/zh-CN/scripts/543925" target="_blank">https://greasyfork.org/zh-CN/scripts/543925</a></p></div></div></div>`);
  var root_2$1 = /* @__PURE__ */ template(`<div class="modal-overlay svelte-1a87xm5" role="button" aria-hidden="true"><div class="modal-content svelte-1a87xm5" role="button" aria-hidden="true"><div class="modal-header svelte-1a87xm5"><h3 class="svelte-1a87xm5">FAQ - 常见问题</h3> <button class="close-btn svelte-1a87xm5">&times;</button></div> <div class="modal-body svelte-1a87xm5"><h4 class="svelte-1a87xm5">Q: 如何联系反馈问题</h4> <p class="svelte-1a87xm5"><a class="__btn __btnWide svelte-1a87xm5" href="https://t.me/+Nd_qIisDjQ80ZTc9" target="_blank"><!> &nbsp;Telegram</a></p> <h4 class="svelte-1a87xm5">Q: 找不到悬浮框</h4> <button class="__btn svelte-1a87xm5">重置悬浮框位置</button> <p class="svelte-1a87xm5"><br>可以通过拖拽悬浮框顶部的颜色条来移动悬浮框的位置 <br>从 PTPP 那里来的灵感 ( 感恩 ||T|| 佬 )</p> <h4 class="svelte-1a87xm5">Q: 插件没有生效怎么办</h4> <p class="svelte-1a87xm5">可能是浏览器缓存了请求<br>尝试使用 Ctrl+Shift+R / Ctrl+F5 强制刷新页面</p> <h4 class="svelte-1a87xm5">Q: 如何切换瀑布流视图</h4> <p class="svelte-1a87xm5">点击悬浮面板中的第一个图标(瀑布/列表)按钮<br>即可在瀑布流和原列表视图间切换</p> <h4 class="svelte-1a87xm5">Q: 如何调整卡片布局</h4> <p class="svelte-1a87xm5">点击悬浮面板中的"配置"按钮<br>可以调整卡片的最小 / 最大宽度、间隔等参数</p> <h4 class="svelte-1a87xm5">Q: 快捷键</h4> <p class="svelte-1a87xm5"><span class="modal-code svelte-1a87xm5">x</span> 可以切换瀑布流视图</p> <p class="svelte-1a87xm5"><span class="modal-code svelte-1a87xm5">ESC</span> 可以从 次级菜单 / 配置菜单 / iframe 中退出</p> <h4 class="svelte-1a87xm5">Q: 深色模式颜色有些不对劲怎么办?</h4> <p class="svelte-1a87xm5">先刷新一下试试, 有些字体颜色不能即时更改<br>刷新后就可以了<br>还有颜色不对劲的 telegram 上截图告诉我</p></div></div></div>`);
  var root$6 = /* @__PURE__ */ template(`<div class="entry_mteam"><div class="ant-typography" style="line-height: 1.5; text-align: center;"><button class="__btn svelte-1a87xm5" id="_ptFall_about">PT-Fall<br><span style="font-weight: 600;"></span></button> <button class="__btn svelte-1a87xm5" id="_ptFall_faq">常见问题<br>FAQ</button></div></div> <!> <!>`, 1);
  function Readme($$anchor, $$props) {
    push($$props, false);
    const [$$stores, $$cleanup] = setup_stores();
    const $_isFallView = () => store_get(_isFallView, "$_isFallView", $$stores);
    const $_textColor = () => store_get(_textColor, "$_textColor", $$stores);
    let _modalFAQ = mutable_state(false);
    let _modalAbout = mutable_state(false);
    function openFAQ() {
      set(_modalFAQ, true);
    }
    function closeFAQ() {
      set(_modalFAQ, false);
    }
    function openAbout() {
      set(_modalAbout, true);
    }
    function closeAbout() {
      set(_modalAbout, false);
    }
    let color = mutable_state();
    legacy_pre_effect(() => $_isFallView(), () => {
      set(color, $_isFallView() ? "#4ff74f" : "yellow");
    });
    legacy_pre_effect_reset();
    init();
    var fragment = root$6();
    event(
      "keydown",
      $window,
      (event2) => {
        if (event2.key === "Escape") {
          closeFAQ();
          closeAbout();
        }
      },
      true
    );
    var div = first_child(fragment);
    var div_1 = child(div);
    var button = child(div_1);
    var span = sibling(child(button), 2);
    span.textContent = `[v${version}]`;
    var button_1 = sibling(button, 2);
    var node = sibling(div, 2);
    {
      var consequent = ($$anchor2) => {
        var div_2 = root_1$1();
        var div_3 = child(div_2);
        var div_4 = child(div_3);
        var button_2 = sibling(child(div_4), 2);
        template_effect(() => set_attribute(div_3, "style", `color: ${$_textColor().t3}`));
        event("click", button_2, closeAbout);
        event("click", div_3, stopPropagation(function($$arg) {
          bubble_event.call(this, $$props, $$arg);
        }));
        transition(3, div_2, () => fade, () => ({ duration: 200 }));
        event("click", div_2, closeAbout);
        append($$anchor2, div_2);
      };
      if_block(node, ($$render) => {
        if (get$1(_modalAbout)) $$render(consequent);
      });
    }
    var node_1 = sibling(node, 2);
    {
      var consequent_1 = ($$anchor2) => {
        var div_5 = root_2$1();
        var div_6 = child(div_5);
        var div_7 = child(div_6);
        var button_3 = sibling(child(div_7), 2);
        var div_8 = sibling(div_7, 2);
        var p = sibling(child(div_8), 2);
        var a = child(p);
        var node_2 = child(a);
        Icon_telegram(node_2, { height: 24, width: 24 });
        var button_4 = sibling(p, 4);
        var p_1 = sibling(button_4, 18);
        var span_1 = child(p_1);
        var p_2 = sibling(p_1, 2);
        var span_2 = child(p_2);
        template_effect(() => {
          set_attribute(div_6, "style", `color: ${$_textColor().t3}`);
          set_attribute(a, "style", `color: ${$_textColor().t2}`);
          set_style(a, "--hover", "#40a9ff");
          set_attribute(button_4, "style", `color: ${$_textColor().t2}`);
          set_style(button_4, "--hover", "#40a9ff");
          set_attribute(span_1, "style", `color: ${$_textColor().t1}`);
          set_attribute(span_2, "style", `color: ${$_textColor().t1}`);
        });
        event("click", button_3, closeFAQ);
        event("click", button_4, () => {
          store_set(_panelPos, { x: 0, y: 0 });
        });
        event("click", div_6, stopPropagation(function($$arg) {
          bubble_event.call(this, $$props, $$arg);
        }));
        transition(3, div_5, () => fade, () => ({ duration: 200 }));
        event("click", div_5, closeFAQ);
        append($$anchor2, div_5);
      };
      if_block(node_1, ($$render) => {
        if (get$1(_modalFAQ)) $$render(consequent_1);
      });
    }
    template_effect(() => {
      set_attribute(button, "style", `color: ${$_textColor().t2}`);
      set_style(button, "--hover", "green");
      set_style(span, "color", get$1(color));
      set_attribute(button_1, "style", `color: ${$_textColor().t2}`);
      set_style(button_1, "--hover", "#40a9ff");
    });
    event("click", button, openAbout);
    event("click", button_1, openFAQ);
    append($$anchor, fragment);
    pop();
    $$cleanup();
  }
  function Entry_Mteam($$anchor, $$props) {
    push($$props, false);
    const [$$stores, $$cleanup] = setup_stores();
    const $_isFallView = () => store_get(_isFallView, "$_isFallView", $$stores);
    const $_textColor = () => store_get(_textColor, "$_textColor", $$stores);
    let Readme_Svelte;
    let MteamFall_Svelte;
    let infoList;
    let isClearPage = true;
    let isAcceptSearch = false;
    let varColor_bg2 = getComputedStyle(document.documentElement).getPropertyValue("--bg-2").trim();
    let observer;
    const Fall_DOM = mutable_state(document.createElement("div"));
    get$1(Fall_DOM).classList.add("Fall_DOM");
    Tool_Watch_Dom(CONFIG.TL_Selector, launchFallView);
    Tool_Watch_Dom('a[href="/index"][target="_self"]', (el) => {
      if (!Readme_Svelte) {
        el.insertAdjacentHTML("afterend", '<div class="ptFallReadme"></div>');
        const readmeNode = el.parentNode.querySelector(".ptFallReadme");
        Readme_Svelte = mount(Readme, { target: readmeNode });
      } else {
        notyf_lt.error("未找到目标链接元素");
        console.warn("[FALL]: 未找到目标链接元素");
      }
    });
    onMount(() => {
      _changeStoreTextColor();
      console.log("=====> 启动劫持 pushState 方法 <=====");
      OverWritePushState();
      observer = new MutationObserver(() => {
        const _tmpColor = getComputedStyle(document.documentElement).getPropertyValue("--bg-2").trim();
        if (_tmpColor !== varColor_bg2) {
          varColor_bg2 = _tmpColor;
          console.log("--bg-2 变化:", varColor_bg2);
          _changeStoreTextColor();
        }
      });
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["style", "class", "data-theme"]
        // 监听可能影响 CSS 变量的属性
      });
    });
    onDestroy(() => {
      if (observer) observer.disconnect();
      pageDestroy();
    });
    let pagination = mutable_state();
    let pageFather = mutable_state();
    function pageInit() {
      Tool_Watch_Dom(".ant-pagination", (el) => {
        if (el && el.parentNode && el.parentNode !== get$1(Fall_DOM)) {
          set(pageFather, el.parentNode);
        }
        if (el) {
          set(pagination, el);
          if ($_isFallView()) {
            get$1(Fall_DOM).appendChild(get$1(pagination));
          }
        }
      });
    }
    function pageDestroy() {
      if (get$1(pagination) && get$1(pagination).parentNode) {
        get$1(pagination).parentNode.removeChild(get$1(pagination));
      }
    }
    function launchFallView(el) {
      if (el.parentNode) {
        console.log("元素已找到，正在插入兄弟节点:", el);
        Launch_Hijack();
        const param = { path: "/search", method: "POST" };
        window.addEventListener("req>POST->/search", (e) => {
          console.log(`<PT-Fall>[Request]  (${param.method} -> ${param.path})
`, e.detail);
          if (e.detail.url.includes("api/torrent/search") && !e.detail.body.includes('"mode":"waterfall"')) {
            isAcceptSearch = true;
          } else {
            isAcceptSearch = false;
          }
          isClearPage = true;
          if (isClearPage) {
            if (MteamFall_Svelte) MteamFall_Svelte.focusFall();
          } else {
            if (MteamFall_Svelte) MteamFall_Svelte.focusFall("bottom");
          }
          pageDestroy();
        });
        window.addEventListener(`res>POST->/search`, (e) => {
          const rawObject = JSON.parse(e.detail.data);
          if (!isAcceptSearch) {
            console.warn(`<PT-Fall>[未被接受的Response] (${param.method}->${param.path})[通过事件捕获]:
`, rawObject);
            return;
          }
          console.log(`<PT-Fall>[Response] (${param.method}->${param.path})[通过事件捕获]:
`, rawObject);
          changeFallView($_isFallView());
          add_Fall_DOM(el);
          notyf_lt.success("捕获到 /search !");
          infoList = rawObject.data;
          if (MteamFall_Svelte) {
            MteamFall_Svelte.updateList(infoList, isClearPage);
          } else {
            MteamFall_Svelte = mount(Mteam_Fall, {
              target: get$1(Fall_DOM),
              props: { infoList }
            });
          }
          pageInit();
        });
      } else {
        notyf_lt.error("找不到指定节点\n若总是如此请报告bug");
        console.error("无法插入：目标元素没有父节点");
      }
    }
    function add_Fall_DOM(el) {
      const contentNode = el.parentNode.querySelector(".ant-spin-nested-loading");
      const shield = document.createElement("div");
      shield.id = "_shield";
      shield.addEventListener("click", () => {
        if (confirm("[PT-Fall]\n如果你认为你被阻挡了请点击确认\n这个阻挡效果会被取消\n这可能导致显示错误\n请确认您不在一般的瀑布流视图下\n比如您在逛论坛或者在发种之类的被遮挡了再点")) {
          shield.style.display = "none";
        }
      });
      if (!contentNode.querySelector("#_shield")) {
        contentNode.appendChild(shield);
      }
      const fallHolder = document.createElement("div");
      fallHolder.id = "_fallHolder";
      if (!contentNode.querySelector("#_fallHolder")) {
        contentNode.appendChild(fallHolder);
        fallHolder.appendChild(get$1(Fall_DOM));
      }
    }
    let _mx_margin_back = "";
    let _mx_next_max_width = "";
    let _mx_next_padding = "";
    function changeFallView(isFallView) {
      mutate(Fall_DOM, get$1(Fall_DOM).style.display = isFallView ? "block" : "none");
      Tool_Watch_Dom("#_fallHolder", (el) => {
        el.style.display = isFallView ? "block" : "none";
      });
      Tool_Watch_Dom("#_shield", (el) => {
        el.style.display = isFallView ? "block" : "none";
      });
      Tool_Watch_Dom(CONFIG.TL_Selector + ".flex", (el) => {
        if (!_mx_next_max_width) {
          _mx_next_max_width = getComputedStyle(el).getPropertyValue("max-width");
          _mx_next_padding = getComputedStyle(el).getPropertyValue("padding-left");
        }
        el.style.maxWidth = isFallView ? "none" : _mx_next_max_width;
        el.style.paddingLeft = isFallView ? "80px" : _mx_next_padding;
        el.style.paddingRight = isFallView ? "80px" : _mx_next_padding;
      });
      Tool_Watch_Dom(CONFIG.TL_Selector + " .mx-auto", (el) => {
        if (!_mx_margin_back) _mx_margin_back = el.style.margin;
        el.style.margin = isFallView ? 0 : _mx_margin_back;
      });
    }
    window.changeFallView = changeFallView;
    const originalPushState = history.pushState;
    function OverWritePushState() {
      history.pushState = function(state, title, path) {
        console.log(`%c ====> URL跳转劫持: %c${path}`, "color: cyan", "color: white");
        if (path.includes("/browse") || path == "/waterfall") {
          console.log(`--->属于 browse 范围: ${path}`);
        } else {
          console.warn(`[FALL]: --->不属于 browse 范围: ${path}`);
          changeFallView(false);
        }
        originalPushState.apply(history, arguments);
      };
    }
    function getVar(varName) {
      return getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
    }
    function _changeStoreTextColor() {
      store_mutate(_textColor, untrack($_textColor).t1 = getTextColor(getVar("--bg-1")), untrack($_textColor));
      store_mutate(_textColor, untrack($_textColor).t2 = getTextColor(getVar("--bg-2")), untrack($_textColor));
      store_mutate(_textColor, untrack($_textColor).t3 = getTextColor(getVar("--bg-3")), untrack($_textColor));
    }
    legacy_pre_effect(
      () => (get$1(Fall_DOM), $_isFallView(), get$1(pagination), get$1(pageFather)),
      () => {
        if (get$1(Fall_DOM)) {
          if ($_isFallView() && get$1(pagination)) {
            get$1(Fall_DOM).appendChild(get$1(pagination));
          }
          if (!$_isFallView() && get$1(pagination) && get$1(pageFather)) {
            get$1(pageFather).appendChild(get$1(pagination));
          }
        }
      }
    );
    legacy_pre_effect_reset();
    init();
    pop();
    $$cleanup();
  }
  function getSiteConfig(domain) {
    if (location.hostname.includes("m-team")) {
      return CONFIG;
    }
  }
  var root$5 = /* @__PURE__ */ template(`<div class="switch-container svelte-18ntgfp"><div class="switch-background svelte-18ntgfp"><div class="switch-slider svelte-18ntgfp"></div></div></div>`);
  function Switch($$anchor, $$props) {
    let checked = prop($$props, "checked", 12, false);
    function handleClick() {
      checked(!checked());
    }
    var div = root$5();
    var div_1 = child(div);
    var div_2 = child(div_1);
    template_effect(() => toggle_class(div_2, "checked", checked()));
    event("click", div, handleClick);
    append($$anchor, div);
  }
  var root$4 = /* @__PURE__ */ ns_template(`<svg viewBox="0 0 32 32" width="20" height="20" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><defs><style>.cls-1 {
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2px;
      }</style></defs><g data-name="43-browser" id="_43-browser"><rect class="cls-1" height="30" width="30" x="1" y="1"></rect><line class="cls-1" x1="1" x2="31" y1="9" y2="9"></line><line class="cls-1" x1="5" x2="7" y1="5" y2="5"></line><line class="cls-1" x1="11" x2="13" y1="5" y2="5"></line><line class="cls-1" x1="9" x2="25" y1="16" y2="16"></line><line class="cls-1" x1="7" x2="25" y1="20" y2="20"></line><line class="cls-1" x1="7" x2="25" y1="24" y2="24"></line></g></svg>`);
  function Icon_list($$anchor) {
    var svg = root$4();
    append($$anchor, svg);
  }
  var root$3 = /* @__PURE__ */ ns_template(`<svg width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><defs><style>.cls-1 {
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2px;
      }</style></defs><g data-name="80-setting" id="_80-setting"><circle class="cls-1" cx="10" cy="6" r="3"></circle><circle class="cls-1" cx="22" cy="16" r="3"></circle><circle class="cls-1" cx="10" cy="26" r="3"></circle><line class="cls-1" x1="7" x2="1" y1="6" y2="6"></line><line class="cls-1" x1="15" x2="1" y1="16" y2="16"></line><line class="cls-1" x1="7" x2="1" y1="26" y2="26"></line><line class="cls-1" x1="31" x2="17" y1="26" y2="26"></line><line class="cls-1" x1="31" x2="25" y1="16" y2="16"></line><line class="cls-1" x1="31" x2="17" y1="6" y2="6"></line></g></svg>`);
  function Icon_config($$anchor) {
    var svg = root$3();
    append($$anchor, svg);
  }
  var root$2 = /* @__PURE__ */ ns_template(`<svg enable-background="new 0 0 64 64" width="20" height="20" id="Layer_1" version="1.1" viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19,2.875H3.5c-0.829,0-1.5,0.671-1.5,1.5v19.979c0,0.829,0.671,1.5,1.5,1.5H19c0.829,0,1.5-0.671,1.5-1.5V4.375  C20.5,3.546,19.829,2.875,19,2.875z M17.5,22.854H5V5.875h12.5V22.854z"></path><path d="M19,28.773H3.5c-0.829,0-1.5,0.671-1.5,1.5v6.166c0,0.828,0.671,1.5,1.5,1.5H19c0.829,0,1.5-0.672,1.5-1.5v-6.166  C20.5,29.445,19.829,28.773,19,28.773z M17.5,34.939H5v-3.166h12.5V34.939z"></path><path d="M19,40.859H3.5c-0.829,0-1.5,0.672-1.5,1.5v17.266c0,0.828,0.671,1.5,1.5,1.5H19c0.829,0,1.5-0.672,1.5-1.5V42.359  C20.5,41.531,19.829,40.859,19,40.859z M17.5,58.125H5V43.859h12.5V58.125z"></path><path d="M40,2.875H24.5c-0.829,0-1.5,0.671-1.5,1.5v14.25c0,0.829,0.671,1.5,1.5,1.5H40c0.828,0,1.5-0.671,1.5-1.5V4.375  C41.5,3.546,40.828,2.875,40,2.875z M38.5,17.125H26V5.875h12.5V17.125z"></path><path d="M40,23.125H24.5c-0.829,0-1.5,0.671-1.5,1.5V46.5c0,0.828,0.671,1.5,1.5,1.5H40c0.828,0,1.5-0.672,1.5-1.5V24.625  C41.5,23.796,40.828,23.125,40,23.125z M38.5,45H26V26.125h12.5V45z"></path><path d="M40,51H24.5c-0.829,0-1.5,0.672-1.5,1.5v7.125c0,0.828,0.671,1.5,1.5,1.5H40c0.828,0,1.5-0.672,1.5-1.5V52.5  C41.5,51.672,40.828,51,40,51z M38.5,58.125H26V54h12.5V58.125z"></path><path d="M60.5,2.875H45c-0.828,0-1.5,0.671-1.5,1.5v35.171c0,0.828,0.672,1.5,1.5,1.5h15.5c0.828,0,1.5-0.672,1.5-1.5V4.375  C62,3.546,61.328,2.875,60.5,2.875z M59,38.046H46.5V5.875H59V38.046z"></path><path d="M60.5,44.346H45c-0.828,0-1.5,0.672-1.5,1.5v13.779c0,0.828,0.672,1.5,1.5,1.5h15.5c0.828,0,1.5-0.672,1.5-1.5V45.846  C62,45.018,61.328,44.346,60.5,44.346z M59,58.125H46.5V47.346H59V58.125z"></path></svg>`);
  function Icon_masonry($$anchor) {
    var svg = root$2();
    append($$anchor, svg);
  }
  var root_2 = /* @__PURE__ */ template(`<div><!></div> <div class="flowBtn_text svelte-1gujon8">瀑布</div>`, 1);
  var root_3 = /* @__PURE__ */ template(`<div><!></div> <div class="flowBtn_text svelte-1gujon8">列表</div>`, 1);
  var root_5 = /* @__PURE__ */ template(`<div class="config-item svelte-1gujon8"><span> </span> <input type="range" min="0" max="40" step="1" class="svelte-1gujon8"></div>`);
  var root_4 = /* @__PURE__ */ template(`<div class="config-menu-overlay svelte-1gujon8"><div class="config-menu svelte-1gujon8"><div class="config-menu-header svelte-1gujon8"><span style="font-size: 18px; font-weight: bold;">配置菜单</span> <button class="close-btn svelte-1gujon8">&times;</button></div> <div class="config-menu-content svelte-1gujon8"><h3 class="svelte-1gujon8"># 卡片布局</h3> <div class="config-item svelte-1gujon8"><span> </span> <input type="range" min="200" step="1" list="values" class="svelte-1gujon8"></div> <div class="config-item svelte-1gujon8"><span> </span> <input type="range" step="1" list="values" class="svelte-1gujon8"></div> <div class="config-item svelte-1gujon8"><span> </span> <input type="range" min="0" max="100" step="1" list="values" class="svelte-1gujon8"></div> <div class="config-item svelte-1gujon8"><span> </span> <!></div> <h3 class="svelte-1gujon8"># 卡片常驻信息展示</h3>  <div class="config-item svelte-1gujon8"><span> </span> <!></div> <div class="config-item svelte-1gujon8"><span> </span> <!></div> <div class="config-item svelte-1gujon8"><span> </span> <!></div> <div class="config-item svelte-1gujon8"><span> </span> <!></div> <div class="config-item svelte-1gujon8"><span> </span> <!></div> <div class="config-item svelte-1gujon8"><span> </span> <!></div> <div class="config-item svelte-1gujon8"><span> </span> <!></div> <div class="config-item svelte-1gujon8"><span> </span> <!></div> <div class="config-item svelte-1gujon8"><span> </span> <!></div> <div class="config-item svelte-1gujon8"><span> </span> <!></div> <h3 class="svelte-1gujon8"># 卡片屏蔽</h3> <div class="config-item svelte-1gujon8"><span> </span> <!></div> <h3 class="svelte-1gujon8"># 卡片样式</h3> <div class="config-item svelte-1gujon8"><span> </span> <!></div> <!></div></div></div>`);
  var root$1 = /* @__PURE__ */ template(`<div class="flowP svelte-1gujon8"><div class="flowPDragger svelte-1gujon8" role="button" tabindex="0" aria-hidden="true"><!></div> <div class="flowPHolder ant-typography svelte-1gujon8"><button class="flowBtn svelte-1gujon8"><!></button> <button class="flowBtn svelte-1gujon8"><div><!></div> <div class="flowBtn_text svelte-1gujon8">配置</div></button> <button class="flowBtn svelte-1gujon8">清除悬浮预览图</button></div></div> <!>`, 1);
  function FlowPanel($$anchor, $$props) {
    push($$props, false);
    const [$$stores, $$cleanup] = setup_stores();
    const $_panelPos = () => store_get(_panelPos, "$_panelPos", $$stores);
    const $_isFallView = () => store_get(_isFallView, "$_isFallView", $$stores);
    const $_textColor = () => store_get(_textColor, "$_textColor", $$stores);
    const $_side_panel_switch = () => store_get(_side_panel_switch, "$_side_panel_switch", $$stores);
    const $_card_layout = () => store_get(_card_layout, "$_card_layout", $$stores);
    const $_show_hover_pic = () => store_get(_show_hover_pic, "$_show_hover_pic", $$stores);
    const $_card_detail = () => store_get(_card_detail, "$_card_detail", $$stores);
    const $_block_gay = () => store_get(_block_gay, "$_block_gay", $$stores);
    const $_card_radius = () => store_get(_card_radius, "$_card_radius", $$stores);
    let flowP = mutable_state();
    let isMouseDown = false;
    let offsetX = 0;
    let offsetY = 0;
    function posRangeIn(target, min, max) {
      if (target <= min) target = min;
      if (target >= max) target = max;
      return target;
    }
    const onMouseDown = (e) => {
      e.preventDefault();
      isMouseDown = true;
      offsetX = e.clientX - get$1(flowP).getBoundingClientRect().left;
      offsetY = e.clientY - get$1(flowP).getBoundingClientRect().top;
    };
    const onMouseMove = (e) => {
      if (!isMouseDown) return;
      const res_X = posRangeIn(e.clientX - offsetX, 0, window.innerWidth - (get$1(flowP).getBoundingClientRect().width + 5));
      const res_Y = posRangeIn(e.clientY - offsetY, 0, window.innerHeight - (get$1(flowP).getBoundingClientRect().height + 5));
      store_set(_panelPos, { x: res_X, y: res_Y });
    };
    const onMouseUp = () => {
      isMouseDown = false;
    };
    onMount(() => {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
      return () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
      };
    });
    init();
    var fragment = root$1();
    event(
      "keydown",
      $window,
      (event2) => {
        if (event2.key === "x") {
          store_set(_isFallView, !$_isFallView());
          window.changeFallView($_isFallView());
        }
      },
      true
    );
    var div = first_child(fragment);
    var div_1 = child(div);
    var node = child(div_1);
    {
      if_block(node, ($$render) => {
      });
    }
    var div_2 = sibling(div_1, 2);
    var button = child(div_2);
    var node_1 = child(button);
    {
      var consequent_1 = ($$anchor2) => {
        var fragment_1 = root_2();
        var div_3 = first_child(fragment_1);
        var node_2 = child(div_3);
        Icon_masonry(node_2);
        append($$anchor2, fragment_1);
      };
      var alternate = ($$anchor2) => {
        var fragment_2 = root_3();
        var div_4 = first_child(fragment_2);
        var node_3 = child(div_4);
        Icon_list(node_3);
        append($$anchor2, fragment_2);
      };
      if_block(node_1, ($$render) => {
        if ($_isFallView()) $$render(consequent_1);
        else $$render(alternate, false);
      });
    }
    var button_1 = sibling(button, 2);
    var div_5 = child(button_1);
    var node_4 = child(div_5);
    Icon_config(node_4);
    var button_2 = sibling(button_1, 2);
    bind_this(div, ($$value) => set(flowP, $$value), () => get$1(flowP));
    var node_5 = sibling(div, 2);
    {
      var consequent_3 = ($$anchor2) => {
        var div_6 = root_4();
        var div_7 = child(div_6);
        var div_8 = child(div_7);
        var button_3 = sibling(child(div_8), 2);
        var div_9 = sibling(div_8, 2);
        var div_10 = sibling(child(div_9), 2);
        var span_1 = child(div_10);
        var text = child(span_1);
        var input = sibling(span_1, 2);
        var div_11 = sibling(div_10, 2);
        var span_2 = child(div_11);
        var text_1 = child(span_2);
        var input_1 = sibling(span_2, 2);
        var div_12 = sibling(div_11, 2);
        var span_3 = child(div_12);
        var text_2 = child(span_3);
        var input_2 = sibling(span_3, 2);
        var div_13 = sibling(div_12, 2);
        var span_4 = child(div_13);
        var text_3 = child(span_4);
        var node_6 = sibling(span_4, 2);
        Switch(node_6, {
          get checked() {
            mark_store_binding();
            return $_show_hover_pic();
          },
          set checked($$value) {
            store_set(_show_hover_pic, $$value);
          },
          $$legacy: true
        });
        var div_14 = sibling(div_13, 4);
        var span_5 = child(div_14);
        var text_4 = child(span_5);
        var node_7 = sibling(span_5, 2);
        Switch(node_7, {
          get checked() {
            return $_card_detail().category;
          },
          set checked($$value) {
            store_mutate(_card_detail, untrack($_card_detail).category = $$value, untrack($_card_detail));
          },
          $$legacy: true
        });
        var div_15 = sibling(div_14, 2);
        var span_6 = child(div_15);
        var text_5 = child(span_6);
        var node_8 = sibling(span_6, 2);
        Switch(node_8, {
          get checked() {
            return $_card_detail().title;
          },
          set checked($$value) {
            store_mutate(_card_detail, untrack($_card_detail).title = $$value, untrack($_card_detail));
          },
          $$legacy: true
        });
        var div_16 = sibling(div_15, 2);
        var span_7 = child(div_16);
        var text_6 = child(span_7);
        var node_9 = sibling(span_7, 2);
        Switch(node_9, {
          get checked() {
            return $_card_detail().topping;
          },
          set checked($$value) {
            store_mutate(_card_detail, untrack($_card_detail).topping = $$value, untrack($_card_detail));
          },
          $$legacy: true
        });
        var div_17 = sibling(div_16, 2);
        var span_8 = child(div_17);
        var text_7 = child(span_8);
        var node_10 = sibling(span_8, 2);
        Switch(node_10, {
          get checked() {
            return $_card_detail().free;
          },
          set checked($$value) {
            store_mutate(_card_detail, untrack($_card_detail).free = $$value, untrack($_card_detail));
          },
          $$legacy: true
        });
        var div_18 = sibling(div_17, 2);
        var span_9 = child(div_18);
        var text_8 = child(span_9);
        var node_11 = sibling(span_9, 2);
        Switch(node_11, {
          get checked() {
            return $_card_detail().size;
          },
          set checked($$value) {
            store_mutate(_card_detail, untrack($_card_detail).size = $$value, untrack($_card_detail));
          },
          $$legacy: true
        });
        var div_19 = sibling(div_18, 2);
        var span_10 = child(div_19);
        var text_9 = child(span_10);
        var node_12 = sibling(span_10, 2);
        Switch(node_12, {
          get checked() {
            return $_card_detail().sub_title;
          },
          set checked($$value) {
            store_mutate(_card_detail, untrack($_card_detail).sub_title = $$value, untrack($_card_detail));
          },
          $$legacy: true
        });
        var div_20 = sibling(div_19, 2);
        var span_11 = child(div_20);
        var text_10 = child(span_11);
        var node_13 = sibling(span_11, 2);
        Switch(node_13, {
          get checked() {
            return $_card_detail().tags;
          },
          set checked($$value) {
            store_mutate(_card_detail, untrack($_card_detail).tags = $$value, untrack($_card_detail));
          },
          $$legacy: true
        });
        var div_21 = sibling(div_20, 2);
        var span_12 = child(div_21);
        var text_11 = child(span_12);
        var node_14 = sibling(span_12, 2);
        Switch(node_14, {
          get checked() {
            return $_card_detail().download_collect;
          },
          set checked($$value) {
            store_mutate(_card_detail, untrack($_card_detail).download_collect = $$value, untrack($_card_detail));
          },
          $$legacy: true
        });
        var div_22 = sibling(div_21, 2);
        var span_13 = child(div_22);
        var text_12 = child(span_13);
        var node_15 = sibling(span_13, 2);
        Switch(node_15, {
          get checked() {
            return $_card_detail().upload_time;
          },
          set checked($$value) {
            store_mutate(_card_detail, untrack($_card_detail).upload_time = $$value, untrack($_card_detail));
          },
          $$legacy: true
        });
        var div_23 = sibling(div_22, 2);
        var span_14 = child(div_23);
        var text_13 = child(span_14);
        var node_16 = sibling(span_14, 2);
        Switch(node_16, {
          get checked() {
            return $_card_detail().statistics;
          },
          set checked($$value) {
            store_mutate(_card_detail, untrack($_card_detail).statistics = $$value, untrack($_card_detail));
          },
          $$legacy: true
        });
        var div_24 = sibling(div_23, 4);
        var span_15 = child(div_24);
        var text_14 = child(span_15);
        var node_17 = sibling(span_15, 2);
        Switch(node_17, {
          get checked() {
            mark_store_binding();
            return $_block_gay();
          },
          set checked($$value) {
            store_set(_block_gay, $$value);
          },
          $$legacy: true
        });
        var div_25 = sibling(div_24, 4);
        var span_16 = child(div_25);
        var text_15 = child(span_16);
        var node_18 = sibling(span_16, 2);
        Switch(node_18, {
          get checked() {
            return $_card_radius().enabled;
          },
          set checked($$value) {
            store_mutate(_card_radius, untrack($_card_radius).enabled = $$value, untrack($_card_radius));
          },
          $$legacy: true
        });
        var node_19 = sibling(div_25, 2);
        {
          var consequent_2 = ($$anchor3) => {
            var div_26 = root_5();
            var span_17 = child(div_26);
            var text_16 = child(span_17);
            var input_3 = sibling(span_17, 2);
            template_effect(() => set_text(text_16, `圆角大小: ${$_card_radius().value ?? ""} px`));
            bind_value(input_3, () => $_card_radius().value, ($$value) => store_mutate(_card_radius, untrack($_card_radius).value = $$value, untrack($_card_radius)));
            append($$anchor3, div_26);
          };
          if_block(node_19, ($$render) => {
            if ($_card_radius().enabled) $$render(consequent_2);
          });
        }
        template_effect(
          ($0, $1, $2, $3, $4) => {
            set_style(div_6, "--get-text-color", $0);
            set_attribute(div_7, "style", `background-color: ${$1 ?? ""};`);
            set_text(text, `最小宽度: ${$_card_layout().min ?? ""} px`);
            set_attribute(input, "max", $2);
            set_text(text_1, `最大宽度: ${$_card_layout().max ?? ""} px`);
            set_attribute(input_1, "min", $3);
            set_attribute(input_1, "max", $4);
            set_text(text_2, `卡片间隔: ${$_card_layout().gap ?? ""} px`);
            set_text(text_3, `显示鼠标悬浮预览大图: ${$_show_hover_pic() ?? ""}`);
            set_text(text_4, `分区: ${$_card_detail().category ?? ""}`);
            set_text(text_5, `标题: ${$_card_detail().title ?? ""}`);
            set_text(text_6, `置顶: ${$_card_detail().topping ?? ""}`);
            set_text(text_7, `免费: ${$_card_detail().free ?? ""}`);
            set_text(text_8, `大小: ${$_card_detail().size ?? ""}`);
            set_text(text_9, `副标题: ${$_card_detail().sub_title ?? ""}`);
            set_text(text_10, `标签: ${$_card_detail().tags ?? ""}`);
            set_text(text_11, `下载&收藏: ${$_card_detail().download_collect ?? ""}`);
            set_text(text_12, `上传时间: ${$_card_detail().upload_time ?? ""}`);
            set_text(text_13, `评论/上传/下载: ${$_card_detail().statistics ?? ""}`);
            set_text(text_14, `屏蔽 gay 区: ${$_block_gay() ?? ""}`);
            set_text(text_15, `自定义圆角: ${$_card_radius().enabled ?? ""}`);
          },
          [
            () => getTextColor(getSiteConfig().get_bg_color()),
            () => getSiteConfig().get_bg_color(),
            () => Math.max(400, $_card_layout().max),
            () => Math.min(200, $_card_layout().min),
            () => Math.max(800, $_card_layout().min * 2)
          ],
          derived_safe_equal
        );
        event("click", button_3, () => store_set(_side_panel_switch, false));
        bind_value(input, () => $_card_layout().min, ($$value) => store_mutate(_card_layout, untrack($_card_layout).min = $$value, untrack($_card_layout)));
        bind_value(input_1, () => $_card_layout().max, ($$value) => store_mutate(_card_layout, untrack($_card_layout).max = $$value, untrack($_card_layout)));
        bind_value(input_2, () => $_card_layout().gap, ($$value) => store_mutate(_card_layout, untrack($_card_layout).gap = $$value, untrack($_card_layout)));
        transition(3, div_6, () => fade, () => ({ duration: 100 }));
        event("click", div_6, self(() => store_set(_side_panel_switch, false)));
        append($$anchor2, div_6);
      };
      if_block(node_5, ($$render) => {
        if ($_side_panel_switch()) $$render(consequent_3);
      });
    }
    template_effect(() => {
      set_attribute(div, "style", `top:${$_panelPos().y ?? ""}px; left:${$_panelPos().x ?? ""}px;`);
      set_style(div, "--isFallView", $_isFallView() ? "#4ff74f" : "yellow");
      set_style(div_2, "--get-text-color", $_textColor().t2);
    });
    event("mousedown", div_1, onMouseDown);
    event("click", button, () => {
      store_set(_isFallView, !$_isFallView());
      window.changeFallView($_isFallView());
    });
    event("click", button_1, () => {
      store_set(_side_panel_switch, !$_side_panel_switch());
    });
    event("click", button_2, () => {
      window.__clearPreview();
    });
    append($$anchor, fragment);
    pop();
    $$cleanup();
  }
  var root = /* @__PURE__ */ ns_template(`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_iconCarrier"><circle cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="1.5"></circle><path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path></g></svg>`);
  function Icon_roundClose($$anchor) {
    var svg = root();
    append($$anchor, svg);
  }
  var root_1 = /* @__PURE__ */ template(`<div id="_iframe" class="svelte-1axpxde"><div class="_iframe svelte-1axpxde"><iframe frameborder="0" style="width: 1000px;" class="svelte-1axpxde"></iframe> <div class="_iframeCloseBtn svelte-1axpxde"><!></div></div></div>`);
  function App($$anchor, $$props) {
    push($$props, false);
    const [$$stores, $$cleanup] = setup_stores();
    const $_iframe_switch = () => store_get(_iframe_switch$1, "$_iframe_switch", $$stores);
    const $_iframe_url = () => store_get(_iframe_url$1, "$_iframe_url", $$stores);
    let _app2 = prop($$props, "_app", 8);
    let ifMteam;
    function closeIframe() {
      store_set(_iframe_switch$1, 0);
    }
    function key_closePanels(event2) {
      if (event2.key === "Escape") {
        console.log(event2);
        store_set(_iframe_switch$1, 0);
        store_set(_side_panel_switch, false);
      }
    }
    ifMteam = true;
    if (ifMteam) {
      mount(Entry_Mteam, { target: _app2() });
    }
    mount(FlowPanel, { target: _app2() });
    console.log("-------------->  PT_Fall Launch   <--------------");
    init();
    var fragment = comment();
    event("keydown", $window, key_closePanels, true);
    var node = first_child(fragment);
    {
      var consequent = ($$anchor2) => {
        var div = root_1();
        var div_1 = child(div);
        var iframe = child(div_1);
        var div_2 = sibling(iframe, 2);
        var node_1 = child(div_2);
        Icon_roundClose(node_1);
        template_effect(() => {
          set_attribute(iframe, "src", $_iframe_url());
          set_attribute(iframe, "title", $_iframe_url());
        });
        event("load", iframe, (e) => {
          const iframeContent = e.target.contentDocument || e.target.contentWindow.document;
          if (!iframeContent) {
            console.error("无法访问iframe内容文档, 可能是由于跨域限制。");
            notyf_lt.error("无法访问iframe内容文档, 可能是由于跨域限制。");
            return;
          }
          const checkElement = () => {
            const targetElement = iframeContent.querySelector(".ant-card.detail-view");
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: "smooth" });
              console.log("成功滚动到目标元素！");
              clearInterval(checkInterval);
            }
          };
          const checkInterval = setInterval(checkElement, 500);
          checkElement();
        });
        event("click", iframe, stopPropagation((e) => {
          e.stopPropagation();
        }));
        event("click", div_2, closeIframe);
        event("click", div, closeIframe);
        transition(3, div, () => fade, () => ({ duration: 300 }));
        append($$anchor2, div);
      };
      if_block(node, ($$render) => {
        if ($_iframe_switch()) $$render(consequent);
      });
    }
    append($$anchor, fragment);
    pop();
    $$cleanup();
  }
  const _app = document.createElement("div");
  document.body.append(_app);
  mount(App, {
    target: _app,
    props: { _app }
  });

})();