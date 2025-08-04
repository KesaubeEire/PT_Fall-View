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

      var Fa=Object.defineProperty;var Ni=e=>{throw TypeError(e)};var za=(e,t,r)=>t in e?Fa(e,t,{enumerable:true,configurable:true,writable:true,value:r}):e[t]=r;var Si=(e,t,r)=>za(e,t+"",r),Qn=(e,t,r)=>t.has(e)||Ni("Cannot "+r);var Ye=(e,t,r)=>(Qn(e,t,"read from private field"),r?r.call(e):t.get(e)),or=(e,t,r)=>t.has(e)?Ni("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),Jn=(e,t,r,n)=>(Qn(e,t,"write to private field"),t.set(e,r),r),$i=(e,t,r)=>(Qn(e,t,"access private method"),r);var Ln=Array.isArray,qa=Array.prototype.indexOf,pi=Array.from,Qi=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,Ji=Object.getOwnPropertyDescriptors,Ba=Object.prototype,Za=Array.prototype,gi=Object.getPrototypeOf;function Wa(e){return typeof e=="function"}const Re=()=>{};function Ga(e){return e()}function ri(e){for(var t=0;t<e.length;t++)e[t]();}const Te=2,Ki=4,Cr=8,Mn=16,Ze=32,Dt=64,hn=128,yt=256,pn=512,be=1024,st=2048,bt=4096,ze=8192,Ft=16384,ea=32768,Nn=65536,Ya=1<<17,Ua=1<<19,ta=1<<20,gt=Symbol("$state"),Xa=Symbol("legacy props"),Qa=Symbol("");function ra(e){return e===this.v}function na(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function mi(e){return !na(e,this.v)}function Ja(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Ka(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function es(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ts(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function rs(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function ns(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function is(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function as(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function ss(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let zt=false;function os(){zt=true;}const yi=1,bi=2,ia=4,ls=8,cs=16,us=1,vs=2,ds=4,fs=8,_s=16,hs=1,ps=2,gs=4,ms=1,ys=2,ke=Symbol();function Ve(e,t){var r={f:0,v:e,reactions:null,equals:ra,rv:0,wv:0};return r}function Sn(e,t=false){var n;const r=Ve(e);return t||(r.equals=mi),zt&&ne!==null&&ne.l!==null&&((n=ne.l).s??(n.s=[])).push(r),r}function J(e,t=false){return bs(Sn(e,t))}function bs(e){return ie!==null&&!Je&&ie.f&Te&&(qe===null?$s([e]):qe.push(e)),e}function Se(e,t){return P(e,j(()=>c(e))),t}function P(e,t){return ie!==null&&!Je&&Mr()&&ie.f&(Te|Mn)&&(qe===null||!qe.includes(e))&&ss(),ni(e,t)}function ni(e,t){return e.equals(t)||(e.v,e.v=t,e.wv=wa(),aa(e,st),Mr()&&Q!==null&&Q.f&be&&!(Q.f&(Ze|Dt))&&(Ue===null?Vs([e]):Ue.push(e))),t}function aa(e,t){var r=e.reactions;if(r!==null)for(var n=Mr(),i=r.length,a=0;a<i;a++){var o=r[a],u=o.f;u&st||!n&&o===Q||(je(o,t),u&(be|yt)&&(u&Te?aa(o,bt):In(o)));}}let sa=false;function Nt(e,t=null,r){if(typeof e!="object"||e===null||gt in e)return e;const n=gi(e);if(n!==Ba&&n!==Za)return e;var i=new Map,a=Ln(e),o=Ve(0);a&&i.set("length",Ve(e.length));var u;return new Proxy(e,{defineProperty(l,v,s){(!("value"in s)||s.configurable===false||s.enumerable===false||s.writable===false)&&ns();var h=i.get(v);return h===undefined?(h=Ve(s.value),i.set(v,h)):P(h,Nt(s.value,u)),true},deleteProperty(l,v){var s=i.get(v);if(s===undefined)v in l&&i.set(v,Ve(ke));else {if(a&&typeof v=="string"){var h=i.get("length"),f=Number(v);Number.isInteger(f)&&f<h.v&&P(h,f);}P(s,ke),Vi(o);}return  true},get(l,v,s){var g;if(v===gt)return e;var h=i.get(v),f=v in l;if(h===undefined&&(!f||(g=pt(l,v))!=null&&g.writable)&&(h=Ve(Nt(f?l[v]:ke,u)),i.set(v,h)),h!==undefined){var d=c(h);return d===ke?undefined:d}return Reflect.get(l,v,s)},getOwnPropertyDescriptor(l,v){var s=Reflect.getOwnPropertyDescriptor(l,v);if(s&&"value"in s){var h=i.get(v);h&&(s.value=c(h));}else if(s===undefined){var f=i.get(v),d=f==null?undefined:f.v;if(f!==undefined&&d!==ke)return {enumerable:true,configurable:true,value:d,writable:true}}return s},has(l,v){var d;if(v===gt)return  true;var s=i.get(v),h=s!==undefined&&s.v!==ke||Reflect.has(l,v);if(s!==undefined||Q!==null&&(!h||(d=pt(l,v))!=null&&d.writable)){s===undefined&&(s=Ve(h?Nt(l[v],u):ke),i.set(v,s));var f=c(s);if(f===ke)return  false}return h},set(l,v,s,h){var w;var f=i.get(v),d=v in l;if(a&&v==="length")for(var g=s;g<f.v;g+=1){var m=i.get(g+"");m!==undefined?P(m,ke):g in l&&(m=Ve(ke),i.set(g+"",m));}f===undefined?(!d||(w=pt(l,v))!=null&&w.writable)&&(f=Ve(undefined),P(f,Nt(s,u)),i.set(v,f)):(d=f.v!==ke,P(f,Nt(s,u)));var k=Reflect.getOwnPropertyDescriptor(l,v);if(k!=null&&k.set&&k.set.call(h,s),!d){if(a&&typeof v=="string"){var N=i.get("length"),y=Number(v);Number.isInteger(y)&&y>=N.v&&P(N,y+1);}Vi(o);}return  true},ownKeys(l){c(o);var v=Reflect.ownKeys(l).filter(f=>{var d=i.get(f);return d===undefined||d.v!==ke});for(var[s,h]of i)h.v!==ke&&!(s in l)&&v.push(s);return v},setPrototypeOf(){is();}})}function Vi(e,t=1){P(e,e.v+t);}var gr,oa,la;function ws(){if(gr===undefined){gr=window;var e=Element.prototype,t=Node.prototype;oa=pt(t,"firstChild").get,la=pt(t,"nextSibling").get,e.__click=undefined,e.__className="",e.__attributes=null,e.__styles=null,e.__e=undefined,Text.prototype.__t=undefined;}}function wi(e=""){return document.createTextNode(e)}function jt(e){return oa.call(e)}function $n(e){return la.call(e)}function _(e,t){return jt(e)}function Me(e,t){{var r=jt(e);return r instanceof Comment&&r.data===""?$n(r):r}}function p(e,t=1,r=false){let n=e;for(;t--;)n=$n(n);return n}function xs(e){e.textContent="";}function mr(e){var t=Te|st;Q===null?t|=yt:Q.f|=ta;var r=ie!==null&&ie.f&Te?ie:null;const n={children:null,ctx:ne,deps:null,equals:ra,f:t,fn:e,reactions:null,rv:0,v:null,wv:0,parent:r??Q};return r!==null&&(r.children??(r.children=[])).push(n),n}function Xe(e){const t=mr(e);return t.equals=mi,t}function ca(e){var t=e.children;if(t!==null){e.children=null;for(var r=0;r<t.length;r+=1){var n=t[r];n.f&Te?xi(n):at(n);}}}function Cs(e){for(var t=e.parent;t!==null;){if(!(t.f&Te))return t;t=t.parent;}return null}function ua(e){var t,r=Q;Pe(Cs(e));try{ca(e),t=Ca(e);}finally{Pe(r);}return t}function va(e){var t=ua(e),r=(_t||e.f&yt)&&e.deps!==null?bt:be;je(e,r),e.equals(t)||(e.v=t,e.wv=wa());}function xi(e){ca(e),br(e,0),je(e,Ft),e.v=e.children=e.deps=e.ctx=e.reactions=null;}function da(e){Q===null&&ie===null&&es(),ie!==null&&ie.f&yt&&Ka(),Li&&Ja();}function Es(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e);}function qt(e,t,r,n=true){var i=(e&Dt)!==0,a=Q,o={ctx:ne,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|st,first:null,fn:t,last:null,next:null,parent:i?null:a,prev:null,teardown:null,transitions:null,wv:0};if(r){var u=$t;try{Ti(!0),An(o),o.f|=ea;}catch(s){throw at(o),s}finally{Ti(u);}}else t!==null&&In(o);var l=r&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&(ta|hn))===0;if(!l&&!i&&n&&(a!==null&&Es(o,a),ie!==null&&ie.f&Te)){var v=ie;(v.children??(v.children=[])).push(o);}return o}function Ci(e){const t=qt(Cr,null,false);return je(t,be),t.teardown=e,t}function ii(e){da();var t=Q!==null&&(Q.f&Ze)!==0&&ne!==null&&!ne.m;if(t){var r=ne;(r.e??(r.e=[])).push({fn:e,effect:Q,reaction:ie});}else {var n=Er(e);return n}}function ks(e){return da(),Lr(e)}function Ls(e){const t=qt(Dt,e,true);return (r={})=>new Promise(n=>{r.outro?gn(t,()=>{at(t),n(undefined);}):(at(t),n(undefined));})}function Er(e){return qt(Ki,e,false)}function mt(e,t){var r=ne,n={effect:null,ran:false};r.l.r1.push(n),n.effect=Lr(()=>{e(),!n.ran&&(n.ran=true,P(r.l.r2,true),j(t));});}function kr(){var e=ne;Lr(()=>{if(c(e.l.r2)){for(var t of e.l.r1){var r=t.effect;r.f&be&&je(r,bt),Bt(r)&&An(r),t.ran=false;}e.l.r2.v=false;}});}function Lr(e){return qt(Cr,e,true)}function U(e,t=[],r=mr){const n=t.map(r);return Ei(()=>e(...n.map(c)))}function Ei(e,t=0){return qt(Cr|Mn|t,e,true)}function yr(e,t=true){return qt(Cr|Ze,e,true,t)}function fa(e){var t=e.teardown;if(t!==null){const r=Li,n=ie;Ai(true),Be(null);try{t.call(null);}finally{Ai(r),Be(n);}}}function _a(e){var t=e.deriveds;if(t!==null){e.deriveds=null;for(var r=0;r<t.length;r+=1)xi(t[r]);}}function ha(e,t=false){var r=e.first;for(e.first=e.last=null;r!==null;){var n=r.next;at(r,t),r=n;}}function Ms(e){for(var t=e.first;t!==null;){var r=t.next;t.f&Ze||at(t),t=r;}}function at(e,t=true){var r=false;if((t||e.f&Ua)&&e.nodes_start!==null){for(var n=e.nodes_start,i=e.nodes_end;n!==null;){var a=n===i?null:$n(n);n.remove(),n=a;}r=true;}ha(e,t&&!r),_a(e),br(e,0),je(e,Ft);var o=e.transitions;if(o!==null)for(const l of o)l.stop();fa(e);var u=e.parent;u!==null&&u.first!==null&&pa(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null;}function pa(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r));}function gn(e,t){var r=[];ki(e,r,true),ga(r,()=>{at(e),t&&t();});}function ga(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var i of e)i.out(n);}else t();}function ki(e,t,r){if(!(e.f&ze)){if(e.f^=ze,e.transitions!==null)for(const o of e.transitions)(o.is_global||r)&&t.push(o);for(var n=e.first;n!==null;){var i=n.next,a=(n.f&Nn)!==0||(n.f&Ze)!==0;ki(n,t,a?r:false),n=i;}}}function mn(e){ma(e,true);}function ma(e,t){if(e.f&ze){e.f^=ze,e.f&be||(e.f^=be),Bt(e)&&(je(e,st),In(e));for(var r=e.first;r!==null;){var n=r.next,i=(r.f&Nn)!==0||(r.f&Ze)!==0;ma(r,i?t:false),r=n;}if(e.transitions!==null)for(const a of e.transitions)(a.is_global||t)&&a.in();}}let ai=false,si=[];function Ns(){ai=false;const e=si.slice();si=[],ri(e);}function Vn(e){ai||(ai=true,queueMicrotask(Ns)),si.push(e);}function Ss(){throw new Error("https://svelte.dev/e/invalid_default_snippet")}function ya(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let vn=false,yn=false,bn=null,$t=false,Li=false;function Ti(e){$t=e;}function Ai(e){Li=e;}let oi=[],_r=0;let ie=null,Je=false;function Be(e){ie=e;}let Q=null;function Pe(e){Q=e;}let qe=null;function $s(e){qe=e;}let Le=null,$e=0,Ue=null;function Vs(e){Ue=e;}let ba=1,wn=0,_t=false,ne=null;function wa(){return ++ba}function Mr(){return !zt||ne!==null&&ne.l===null}function Bt(e){var v;var t=e.f;if(t&st)return  true;if(t&bt){var r=e.deps,n=(t&yt)!==0;if(r!==null){var i,a,o=(t&pn)!==0,u=n&&Q!==null&&!_t,l=r.length;if(o||u){for(i=0;i<l;i++)a=r[i],(o||!((v=a==null?undefined:a.reactions)!=null&&v.includes(e)))&&(a.reactions??(a.reactions=[])).push(e);o&&(e.f^=pn);}for(i=0;i<l;i++)if(a=r[i],Bt(a)&&va(a),a.wv>e.wv)return  true}(!n||Q!==null&&!_t)&&je(e,be);}return  false}function Ts(e,t){for(var r=t;r!==null;){if(r.f&hn)try{r.fn(e);return}catch{r.f^=hn;}r=r.parent;}throw vn=false,e}function As(e){return (e.f&Ft)===0&&(e.parent===null||(e.parent.f&hn)===0)}function Tn(e,t,r,n){if(vn){if(r===null&&(vn=false),As(t))throw e;return}r!==null&&(vn=true);{Ts(e,t);return}}function xa(e,t,r=0){var n=e.reactions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];a.f&Te?xa(a,t,r+1):t===a&&(r===0?je(a,st):a.f&be&&je(a,bt),In(a));}}function Ca(e){var d;var t=Le,r=$e,n=Ue,i=ie,a=_t,o=qe,u=ne,l=Je,v=e.f;Le=null,$e=0,Ue=null,ie=v&(Ze|Dt)?null:e,_t=!$t&&(v&yt)!==0,qe=null,ne=e.ctx,Je=false,wn++;try{var s=(0,e.fn)(),h=e.deps;if(Le!==null){var f;if(br(e,$e),h!==null&&$e>0)for(h.length=$e+Le.length,f=0;f<Le.length;f++)h[$e+f]=Le[f];else e.deps=h=Le;if(!_t)for(f=$e;f<h.length;f++)((d=h[f]).reactions??(d.reactions=[])).push(e);}else h!==null&&$e<h.length&&(br(e,$e),h.length=$e);if(Mr()&&Ue!==null&&!(e.f&(Te|bt|st)))for(f=0;f<Ue.length;f++)xa(Ue[f],e);return i!==null&&wn++,s}finally{Le=t,$e=r,Ue=n,ie=i,_t=a,qe=o,ne=u,Je=l;}}function Is(e,t){let r=t.reactions;if(r!==null){var n=qa.call(r,e);if(n!==-1){var i=r.length-1;i===0?r=t.reactions=null:(r[n]=r[i],r.pop());}}r===null&&t.f&Te&&(Le===null||!Le.includes(t))&&(je(t,bt),t.f&(yt|pn)||(t.f^=pn),br(t,0));}function br(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Is(e,r[n]);}function An(e){var t=e.f;if(!(t&Ft)){je(e,be);var r=Q,n=ne;Q=e;try{t&Mn?Ms(e):ha(e),_a(e),fa(e);var i=Ca(e);e.teardown=typeof i=="function"?i:null,e.wv=ba;var a=e.deps,o;}catch(u){Tn(u,e,r,n||e.ctx);}finally{Q=r;}}}function Ps(){if(_r>1e3){_r=0;try{ts();}catch(e){if(bn!==null)Tn(e,bn,null);else throw e}}_r++;}function js(e){var t=e.length;if(t!==0){Ps();var r=$t;$t=true;try{for(var n=0;n<t;n++){var i=e[n];i.f&be||(i.f^=be);var a=[];Ea(i,a),Hs(a);}}finally{$t=r;}}}function Hs(e){var t=e.length;if(t!==0)for(var r=0;r<t;r++){var n=e[r];if(!(n.f&(Ft|ze)))try{Bt(n)&&(An(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?pa(n):n.fn=null));}catch(i){Tn(i,n,null,n.ctx);}}}function Os(){if(yn=false,_r>1001)return;const e=oi;oi=[],js(e),yn||(_r=0,bn=null);}function In(e){yn||(yn=true,queueMicrotask(Os)),bn=e;for(var t=e;t.parent!==null;){t=t.parent;var r=t.f;if(r&(Dt|Ze)){if(!(r&be))return;t.f^=be;}}oi.push(t);}function Ea(e,t){var r=e.first,n=[];e:for(;r!==null;){var i=r.f,a=(i&Ze)!==0,o=a&&(i&be)!==0,u=r.next;if(!o&&!(i&ze))if(i&Cr){if(a)r.f^=be;else try{Bt(r)&&An(r);}catch(h){Tn(h,r,null,r.ctx);}var l=r.first;if(l!==null){r=l;continue}}else i&Ki&&n.push(r);if(u===null){let h=r.parent;for(;h!==null;){if(e===h)break e;var v=h.next;if(v!==null){r=v;continue e}h=h.parent;}}r=u;}for(var s=0;s<n.length;s++)l=n[s],t.push(l),Ea(l,t);}function c(e){var s;var t=e.f,r=(t&Te)!==0;if(r&&t&Ft){var n=ua(e);return xi(e),n}if(ie!==null&&!Je){qe!==null&&qe.includes(e)&&as();var i=ie.deps;e.rv<wn&&(e.rv=wn,Le===null&&i!==null&&i[$e]===e?$e++:Le===null?Le=[e]:Le.push(e));}else if(r&&e.deps===null)for(var a=e,o=a.parent,u=a;o!==null;)if(o.f&Te){var l=o;u=l,o=l.parent;}else {var v=o;(s=v.deriveds)!=null&&s.includes(u)||(v.deriveds??(v.deriveds=[])).push(u);break}return r&&(a=e,Bt(a)&&va(a)),e.v}function j(e){var t=Je;try{return Je=!0,e()}finally{Je=t;}}const Rs=-7169;function je(e,t){e.f=e.f&Rs|t;}function ot(e,t=false,r){ne={p:ne,c:null,e:null,m:false,s:e,x:null,l:null},zt&&!t&&(ne.l={s:null,u:null,r1:[],r2:Ve(false)});}function lt(e){const t=ne;if(t!==null){e!==undefined&&(t.x=e);const o=t.e;if(o!==null){var r=Q,n=ie;t.e=null;try{for(var i=0;i<o.length;i++){var a=o[i];Pe(a.effect),Be(a.reaction),Er(a.fn);}}finally{Pe(r),Be(n);}}ne=t.p,t.m=true;}return e||{}}function ft(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(gt in e)li(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&gt in r&&li(r);}}}function li(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{li(e[n],t);}catch{}const r=gi(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=Ji(r);for(let i in n){const a=n[i].get;if(a)try{a.call(e);}catch{}}}}}const Ds=["touchstart","touchmove"];function Fs(e){return Ds.includes(e)}let Ii=false;function zs(){Ii||(Ii=true,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r);});},{capture:true}));}function ka(e){var t=ie,r=Q;Be(null),Pe(null);try{return e()}finally{Be(t),Pe(r);}}function qs(e,t,r,n=r){e.addEventListener(t,()=>ka(r));const i=e.__on_r;i?e.__on_r=()=>{i(),n(true);}:e.__on_r=()=>n(true),zs();}const Bs=new Set,Pi=new Set;function Zs(e,t,r,n={}){function i(a){if(n.capture||lr.call(t,a),!a.cancelBubble)return ka(()=>r==null?void 0:r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Vn(()=>{t.addEventListener(e,i,n);}):t.addEventListener(e,i,n),i}function Y(e,t,r,n,i){var a={capture:n,passive:i},o=Zs(e,t,r,a);(t===document.body||t===window||t===document)&&Ci(()=>{t.removeEventListener(e,o,a);});}function lr(e){var y;var t=this,r=t.ownerDocument,n=e.type,i=((y=e.composedPath)==null?undefined:y.call(e))||[],a=i[0]||e.target,o=0,u=e.__root;if(u){var l=i.indexOf(u);if(l!==-1&&(t===document||t===window)){e.__root=t;return}var v=i.indexOf(t);if(v===-1)return;l<=v&&(o=l);}if(a=i[o]||e.target,a!==t){Qi(e,"currentTarget",{configurable:true,get(){return a||r}});var s=ie,h=Q;Be(null),Pe(null);try{for(var f,d=[];a!==null;){var g=a.assignedSlot||a.parentNode||a.host||null;try{var m=a["__"+n];if(m!==void 0&&!a.disabled)if(Ln(m)){var[k,...N]=m;k.apply(a,[e,...N]);}else m.call(a,e);}catch(w){f?d.push(w):f=w;}if(e.cancelBubble||g===t||g===null)break;a=g;}if(f){for(let w of d)queueMicrotask(()=>{throw w});throw f}}finally{e.__root=t,delete e.currentTarget,Be(s),Pe(h);}}}function La(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function xn(e,t){var r=Q;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t);}function H(e,t){var r=(t&ms)!==0,n=(t&ys)!==0,i,a=!e.startsWith("<!>");return ()=>{i===undefined&&(i=La(a?e:"<!>"+e),r||(i=jt(i)));var o=n?document.importNode(i,true):i.cloneNode(true);if(r){var u=jt(o),l=o.lastChild;xn(u,l);}else xn(o,o);return o}}function Zt(e,t,r="svg"){var n=!e.startsWith("<!>"),i=`<${r}>${n?e:"<!>"+e}</${r}>`,a;return ()=>{if(!a){var o=La(i),u=jt(o);a=jt(u);}var l=a.cloneNode(true);return xn(l,l),l}}function nt(){var e=document.createDocumentFragment(),t=document.createComment(""),r=wi();return e.append(t,r),xn(t,r),e}function E(e,t){e!==null&&e.before(t);}let ci=true;function D(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"");}function wr(e,t){return Ws(e,t)}const Lt=new Map;function Ws(e,{target:t,anchor:r,props:n={},events:i,context:a,intro:o=true}){ws();var u=new Set,l=h=>{for(var f=0;f<h.length;f++){var d=h[f];if(!u.has(d)){u.add(d);var g=Fs(d);t.addEventListener(d,lr,{passive:g});var m=Lt.get(d);m===undefined?(document.addEventListener(d,lr,{passive:g}),Lt.set(d,1)):Lt.set(d,m+1);}}};l(pi(Bs)),Pi.add(l);var v=undefined,s=Ls(()=>{var h=r??t.appendChild(wi());return yr(()=>{if(a){ot({});var f=ne;f.c=a;}i&&(n.$$events=i),ci=o,v=e(h,n)||{},ci=true,a&&lt();}),()=>{var g;for(var f of u){t.removeEventListener(f,lr);var d=Lt.get(f);--d===0?(document.removeEventListener(f,lr),Lt.delete(f)):Lt.set(f,d);}Pi.delete(l),h!==r&&((g=h.parentNode)==null||g.removeChild(h));}});return Gs.set(v,s),v}let Gs=new WeakMap;function Z(e,t,r=false){var n=e,i=null,a=null,o=ke,u=r?Nn:0,l=false;const v=(h,f=true)=>{l=true,s(f,h);},s=(h,f)=>{o!==(o=h)&&(o?(i?mn(i):f&&(i=yr(()=>f(n))),a&&gn(a,()=>{a=null;})):(a?mn(a):f&&(a=yr(()=>f(n))),i&&gn(i,()=>{i=null;})));};Ei(()=>{l=false,t(v),l||s(null,null);},u);}let dn=null;function cr(e,t){return t}function Ys(e,t,r,n){for(var i=[],a=t.length,o=0;o<a;o++)ki(t[o].e,i,true);var u=a>0&&i.length===0&&r!==null;if(u){var l=r.parentNode;xs(l),l.append(r),n.clear(),et(e,t[0].prev,t[a-1].next);}ga(i,()=>{for(var v=0;v<a;v++){var s=t[v];u||(n.delete(s.k),et(e,s.prev,s.next)),at(s.e,!u);}});}function ht(e,t,r,n,i,a=null){var o=e,u={flags:t,items:new Map,first:null},l=(t&ia)!==0;if(l){var v=e;o=v.appendChild(wi());}var s=null,h=false,f=Xe(()=>{var d=r();return Ln(d)?d:d==null?[]:pi(d)});Ei(()=>{var d=c(f),g=d.length;if(!(h&&g===0)){h=g===0;{var m=ie;Us(d,u,o,i,t,(m.f&ze)!==0,n,r);}a!==null&&(g===0?s?mn(s):s=yr(()=>a(o)):s!==null&&gn(s,()=>{s=null;})),c(f);}});}function Us(e,t,r,n,i,a,o,u){var te,ce,oe,we;var l=(i&ls)!==0,v=(i&(yi|bi))!==0,s=e.length,h=t.items,f=t.first,d=f,g,m=null,k,N=[],y=[],w,O,L,x;if(l)for(x=0;x<s;x+=1)w=e[x],O=o(w,x),L=h.get(O),L!==undefined&&((te=L.a)==null||te.measure(),(k??(k=new Set)).add(L));for(x=0;x<s;x+=1){if(w=e[x],O=o(w,x),L=h.get(O),L===undefined){var $=d?d.e.nodes_start:r;m=Qs($,t,m,m===null?t.first:m.next,w,O,x,n,i,u),h.set(O,m),N=[],y=[],d=m.next;continue}if(v&&Xs(L,w,x,i),L.e.f&ze&&(mn(L.e),l&&((ce=L.a)==null||ce.unfix(),(k??(k=new Set)).delete(L))),L!==d){if(g!==undefined&&g.has(L)){if(N.length<y.length){var M=y[0],R;m=M.prev;var I=N[0],q=N[N.length-1];for(R=0;R<N.length;R+=1)ji(N[R],M,r);for(R=0;R<y.length;R+=1)g.delete(y[R]);et(t,I.prev,q.next),et(t,m,I),et(t,q,M),d=M,m=q,x-=1,N=[],y=[];}else g.delete(L),ji(L,d,r),et(t,L.prev,L.next),et(t,L,m===null?t.first:m.next),et(t,m,L),m=L;continue}for(N=[],y=[];d!==null&&d.k!==O;)(a||!(d.e.f&ze))&&(g??(g=new Set)).add(d),y.push(d),d=d.next;if(d===null)continue;L=d;}N.push(L),m=L,d=L.next;}if(d!==null||g!==undefined){for(var C=g===undefined?[]:pi(g);d!==null;)(a||!(d.e.f&ze))&&C.push(d),d=d.next;var V=C.length;if(V>0){var F=i&ia&&s===0?r:null;if(l){for(x=0;x<V;x+=1)(oe=C[x].a)==null||oe.measure();for(x=0;x<V;x+=1)(we=C[x].a)==null||we.fix();}Ys(t,C,F,h);}}l&&Vn(()=>{var xe;if(k!==undefined)for(L of k)(xe=L.a)==null||xe.apply();}),Q.first=t.first&&t.first.e,Q.last=m&&m.e;}function Xs(e,t,r,n){n&yi&&ni(e.v,t),n&bi?ni(e.i,r):e.i=r;}function Qs(e,t,r,n,i,a,o,u,l,v){var s=dn,h=(l&yi)!==0,f=(l&cs)===0,d=h?f?Sn(i):Ve(i):i,g=l&bi?Ve(o):o,m={i:g,v:d,k:a,a:null,e:null,prev:r,next:n};dn=m;try{return m.e=yr(()=>u(e,d,g,v),sa),m.e.prev=r&&r.e,m.e.next=n&&n.e,r===null?t.first=m:(r.next=m,r.e.next=m.e),n!==null&&(n.prev=m,n.e.prev=m.e),m}finally{dn=s;}}function ji(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,i=t?t.e.nodes_start:r,a=e.e.nodes_start;a!==n;){var o=$n(a);i.before(a),a=o;}}function et(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e);}function Hi(e,t,r,n,i){var u;var a=(u=t.$$slots)==null?undefined:u[r],o=false;a===true&&(a=t.children,o=true),a===undefined?i!==null&&i(e):a(e,o?()=>n:n);}function A(e,t,r,n){var i=e.__attributes??(e.__attributes={});i[t]!==(i[t]=r)&&(t==="style"&&"__styles"in e&&(e.__styles={}),t==="loading"&&(e[Qa]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Js(e).includes(t)?e[t]=r:e.setAttribute(t,r));}var Oi=new Map;function Js(e){var t=Oi.get(e.nodeName);if(t)return t;Oi.set(e.nodeName,t=[]);for(var r,n=e,i=Element.prototype;i!==n;){r=Ji(n);for(var a in r)r[a].set&&t.push(a);n=gi(n);}return t}function Ri(e,t,r){var n=e.__className,i=Ks(t);(n!==i||sa)&&(t==null?e.removeAttribute("class"):e.className=i,e.__className=i);}function Ks(e,t){return (e??"")+""}function ur(e,t,r){if(r){if(e.classList.contains(t))return;e.classList.add(t);}else {if(!e.classList.contains(t))return;e.classList.remove(t);}}function Fe(e,t,r,n){var i=e.__styles??(e.__styles={});i[t]!==r&&(i[t]=r,r==null?e.style.removeProperty(t):e.style.setProperty(t,r,""));}const eo=()=>performance.now(),Qe={tick:e=>requestAnimationFrame(e),now:()=>eo(),tasks:new Set};function Ma(){const e=Qe.now();Qe.tasks.forEach(t=>{t.c(e)||(Qe.tasks.delete(t),t.f());}),Qe.tasks.size!==0&&Qe.tick(Ma);}function to(e){let t;return Qe.tasks.size===0&&Qe.tick(Ma),{promise:new Promise(r=>{Qe.tasks.add(t={c:e,f:r});}),abort(){Qe.tasks.delete(t);}}}function cn(e,t){e.dispatchEvent(new CustomEvent(t));}function ro(e){if(e==="float")return "cssFloat";if(e==="offset")return "cssOffset";if(e.startsWith("--"))return e;const t=e.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function Di(e){const t={},r=e.split(";");for(const n of r){const[i,a]=n.split(":");if(!i||a===undefined)break;const o=ro(i.trim());t[o]=a.trim();}return t}const no=e=>e;function io(e,t,r){var n=dn,i,a,o,u=null;n.a??(n.a={element:e,measure(){i=this.element.getBoundingClientRect();},apply(){if(o==null||o.abort(),a=this.element.getBoundingClientRect(),i.left!==a.left||i.right!==a.right||i.top!==a.top||i.bottom!==a.bottom){const l=t()(this.element,{from:i,to:a},r==null?undefined:r());o=Cn(this.element,l,undefined,1,()=>{o==null||o.abort(),o=undefined;});}},fix(){if(!e.getAnimations().length){var{position:l,width:v,height:s}=getComputedStyle(e);if(l!=="absolute"&&l!=="fixed"){var h=e.style;u={position:h.position,width:h.width,height:h.height,transform:h.transform},h.position="absolute",h.width=v,h.height=s;var f=e.getBoundingClientRect();if(i.left!==f.left||i.top!==f.top){var d=`translate(${i.left-f.left}px, ${i.top-f.top}px)`;h.transform=h.transform?`${h.transform} ${d}`:d;}}}},unfix(){if(u){var l=e.style;l.position=u.position,l.width=u.width,l.height=u.height,l.transform=u.transform;}}}),n.a.element=e;}function Ht(e,t,r,n){var i=(e&hs)!==0,a=(e&ps)!==0,o=i&&a,u=(e&gs)!==0,l=o?"both":i?"in":"out",v,s=t.inert,h=t.style.overflow,f,d;function g(){var w=ie,O=Q;Be(null),Pe(null);try{return v??(v=r()(t,(n==null?void 0:n())??{},{direction:l}))}finally{Be(w),Pe(O);}}var m={is_global:u,in(){var w;if(t.inert=s,!i){d==null||d.abort(),(w=d==null?undefined:d.reset)==null||w.call(d);return}a||f==null||f.abort(),cn(t,"introstart"),f=Cn(t,g(),d,1,()=>{cn(t,"introend"),f==null||f.abort(),f=v=undefined,t.style.overflow=h;});},out(w){if(!a){w==null||w(),v=undefined;return}t.inert=true,cn(t,"outrostart"),d=Cn(t,g(),f,0,()=>{cn(t,"outroend"),w==null||w();});},stop:()=>{f==null||f.abort(),d==null||d.abort();}},k=Q;if((k.transitions??(k.transitions=[])).push(m),i&&ci){var N=u;if(!N){for(var y=k.parent;y&&y.f&Nn;)for(;(y=y.parent)&&!(y.f&Mn););N=!y||(y.f&ea)!==0;}N&&Er(()=>{j(()=>m.in());});}}function Cn(e,t,r,n,i){var a=n===1;if(Wa(t)){var o,u=false;return Vn(()=>{if(!u){var k=t({direction:a?"in":"out"});o=Cn(e,k,r,n,i);}}),{abort:()=>{u=true,o==null||o.abort();},deactivate:()=>o.deactivate(),reset:()=>o.reset(),t:()=>o.t()}}if(r==null||r.deactivate(),!(t!=null&&t.duration))return i(),{abort:Re,deactivate:Re,reset:Re,t:()=>n};const{delay:l=0,css:v,tick:s,easing:h=no}=t;var f=[];if(a&&r===undefined&&(s&&s(0,1),v)){var d=Di(v(0,1));f.push(d,d);}var g=()=>1-n,m=e.animate(f,{duration:l});return m.onfinish=()=>{var k=(r==null?undefined:r.t())??1-n;r==null||r.abort();var N=n-k,y=t.duration*Math.abs(N),w=[];if(y>0){var O=false;if(v)for(var L=Math.ceil(y/16.666666666666668),x=0;x<=L;x+=1){var $=k+N*h(x/L),M=Di(v($,1-$));w.push(M),O||(O=M.overflow==="hidden");}O&&(e.style.overflow="hidden"),g=()=>{var R=m.currentTime;return k+N*h(R/y)},s&&to(()=>{if(m.playState!=="running")return  false;var R=g();return s(R,1-R),true});}m=e.animate(w,{duration:y,fill:"forwards"}),m.onfinish=()=>{g=()=>n,s==null||s(n,1-n),i();};},{abort:()=>{m&&(m.cancel(),m.effect=null,m.onfinish=Re);},deactivate:()=>{i=Re;},reset:()=>{n===0&&(s==null||s(1,0));},t:()=>g()}}function un(e,t,r=t){var n=Mr();qs(e,"input",i=>{var a=i?e.defaultValue:e.value;if(a=Kn(e)?ei(a):a,r(a),n&&a!==(a=t())){var o=e.selectionStart,u=e.selectionEnd;e.value=a??"",u!==null&&(e.selectionStart=o,e.selectionEnd=Math.min(u,e.value.length));}}),j(t)==null&&e.value&&r(Kn(e)?ei(e.value):e.value),Lr(()=>{var i=t();Kn(e)&&i===ei(e.value)||e.type==="date"&&!i&&!e.value||i!==e.value&&(e.value=i??"");});}function Kn(e){var t=e.type;return t==="number"||t==="range"}function ei(e){return e===""?null:+e}function ti(e,t,r){var n=pt(e,t);n&&n.set&&(e[t]=r,Ci(()=>{e[t]=null;}));}var rt,Pt,xr,En,Na;const kn=class kn{constructor(t){or(this,En);or(this,rt,new WeakMap);or(this,Pt);or(this,xr);Jn(this,xr,t);}observe(t,r){var n=Ye(this,rt).get(t)||new Set;return n.add(r),Ye(this,rt).set(t,n),$i(this,En,Na).call(this).observe(t,Ye(this,xr)),()=>{var i=Ye(this,rt).get(t);i.delete(r),i.size===0&&(Ye(this,rt).delete(t),Ye(this,Pt).unobserve(t));}}};rt=new WeakMap,Pt=new WeakMap,xr=new WeakMap,En=new WeakSet,Na=function(){return Ye(this,Pt)??Jn(this,Pt,new ResizeObserver(t=>{for(var r of t){kn.entries.set(r.target,r);for(var n of Ye(this,rt).get(r.target)||[])n(r);}}))},Si(kn,"entries",new WeakMap);let ui=kn;var ao=new ui({box:"border-box"});function Fi(e,t,r){var n=ao.observe(e,()=>r(e[t]));Er(()=>(j(()=>r(e[t])),n));}function zi(e,t){return e===t||(e==null?undefined:e[gt])===t}function tt(e={},t,r,n){return Er(()=>{var i,a;return Lr(()=>{i=a,a=[],j(()=>{e!==r(...a)&&(t(e,...a),i&&zi(r(...i),e)&&t(null,...i));});}),()=>{Vn(()=>{a&&zi(r(...a),e)&&t(null,...a);});}}),e}function Sa(e){return function(...t){var r=t[0];r.target===this&&(e==null||e.apply(this,t));}}function Vt(e){return function(...t){var r=t[0];return r.stopPropagation(),e==null?undefined:e.apply(this,t)}}function wt(e=false){const t=ne,r=t.l.u;if(!r)return;let n=()=>ft(t.s);if(e){let i=0,a={};const o=mr(()=>{let u=false;const l=t.s;for(const v in l)l[v]!==a[v]&&(a[v]=l[v],u=true);return u&&i++,i});n=()=>c(o);}r.b.length&&ks(()=>{qi(t,n),ri(r.b);}),ii(()=>{const i=j(()=>r.m.map(Ga));return ()=>{for(const a of i)typeof a=="function"&&a();}}),r.a.length&&ii(()=>{qi(t,n),ri(r.a);});}function qi(e,t){if(e.l.s)for(const r of e.l.s)c(r);t();}function so(e){var t=Ve(0);return function(){return arguments.length===1?(P(t,c(t)+1),arguments[0]):(c(t),e())}}function Bi(e,t){var a;var r=(a=e.$$events)==null?undefined:a[t.type],n=Ln(r)?r.slice():r==null?[]:[r];for(var i of n)i.call(this,t);}function $a(e,t,r){if(e==null)return t(undefined),Re;const n=j(()=>e.subscribe(t,r));return n.unsubscribe?()=>n.unsubscribe():n}const Mt=[];function Pn(e,t=Re){let r=null;const n=new Set;function i(u){if(na(e,u)&&(e=u,r)){const l=!Mt.length;for(const v of n)v[1](),Mt.push(v,e);if(l){for(let v=0;v<Mt.length;v+=2)Mt[v][0](Mt[v+1]);Mt.length=0;}}}function a(u){i(u(e));}function o(u,l=Re){const v=[u,l];return n.add(v),n.size===1&&(r=t(i,a)||Re),u(e),()=>{n.delete(v),n.size===0&&r&&(r(),r=null);}}return {set:i,update:a,subscribe:o}}function Va(e){let t;return $a(e,r=>t=r)(),t}let vr=false,vi=Symbol();function se(e,t,r){const n=r[t]??(r[t]={store:null,source:Sn(undefined),unsubscribe:Re});if(n.store!==e&&!(vi in r))if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=undefined,n.unsubscribe=Re;else {var i=true;n.unsubscribe=$a(e,a=>{i?n.source.v=a:P(n.source,a);}),i=false;}return e&&vi in r?Va(e):c(n.source)}function ye(e,t){return e.set(t),t}function Wt(){const e={};function t(){Ci(()=>{for(var r in e)e[r].unsubscribe();Qi(e,vi,{enumerable:false,value:true});});}return [e,t]}function he(e,t,r){return e.set(r),t}function Zi(){vr=true;}function oo(e){var t=vr;try{return vr=!1,[e(),vr]}finally{vr=t;}}function Wi(e){for(var t=Q,r=Q;t!==null&&!(t.f&(Ze|Dt));)t=t.parent;try{return Pe(t),e()}finally{Pe(r);}}function _e(e,t,r,n){var $;var i=(r&us)!==0,a=!zt||(r&vs)!==0,o=(r&fs)!==0,u=(r&_s)!==0,l=false,v;o?[v,l]=oo(()=>e[t]):v=e[t];var s=gt in e||Xa in e,h=o&&((($=pt(e,t))==null?undefined:$.set)??(s&&t in e&&(M=>e[t]=M)))||undefined,f=n,d=true,g=false,m=()=>(g=true,d&&(d=false,u?f=j(n):f=n),f);v===undefined&&n!==undefined&&(h&&a&&rs(),v=m(),h&&h(v));var k;if(a)k=()=>{var M=e[t];return M===undefined?m():(d=true,g=false,M)};else {var N=Wi(()=>(i?mr:Xe)(()=>e[t]));N.f|=Ya,k=()=>{var M=c(N);return M!==undefined&&(f=undefined),M===undefined?f:M};}if(!(r&ds))return k;if(h){var y=e.$$legacy;return function(M,R){return arguments.length>0?((!a||!R||y||l)&&h(R?k():M),M):k()}}var w=false,O=false,L=Sn(v),x=Wi(()=>mr(()=>{var M=k(),R=c(L);return w?(w=!1,O=!0,R):(O=!1,L.v=M)}));return i||(x.equals=mi),function(M,R){if(arguments.length>0){const I=R?c(x):a&&o?Nt(M):M;return x.equals(I)||(w=true,P(L,I),g&&f!==undefined&&(f=I),j(()=>c(x))),M}return c(x)}}function jn(e){ne===null&&ya(),zt&&ne.l!==null?lo(ne).m.push(e):ii(()=>{const t=j(e);if(typeof t=="function")return t});}function Ta(e){ne===null&&ya(),jn(()=>()=>j(e));}function lo(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const co="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(co);os();const uo=e=>e;function Ot(e,{delay:t=0,duration:r=400,easing:n=uo}={}){const i=+getComputedStyle(e).opacity;return {delay:t,duration:r,easing:n,css:a=>`opacity: ${a*i}`}}function dt(e,t=()=>{}){if(!e)return;const r=document.querySelector(e);if(r){t(r);return}new MutationObserver((i,a)=>{const o=document.querySelector(e);o&&(a.disconnect(),t(o));}).observe(document.documentElement,{childList:true,subtree:true});}function hr(e){if(typeof e=="string")try{const t=JSON.parse(e);return hr(t)}catch{return e}if(Array.isArray(e))return e.map(t=>hr(t));if(e!==null&&typeof e=="object"){const t={};for(const r in e)e.hasOwnProperty(r)&&(t[r]=hr(e[r]));return t}return e}function Tt(e){if(!e)return "inherit";let t=e.toString().trim();if(t.startsWith("var(")){const o=t.match(/var\(([^)]+)\)/);if(o){const u=o[1],l=getComputedStyle(document.documentElement).getPropertyValue(u).trim();if(l)t=l;else return "inherit"}}if(t.startsWith("rgba(")||t.startsWith("rgb(")){const o=t.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);if(o){const[,u,l,v]=o;return (parseInt(u)*299+parseInt(l)*587+parseInt(v)*114)/1e3<128?"white":"black"}}t=t.replace("#","");let r,n,i;if(t.length===3)r=parseInt(t[0]+t[0],16),n=parseInt(t[1]+t[1],16),i=parseInt(t[2]+t[2],16);else if(t.length===6)r=parseInt(t.substr(0,2),16),n=parseInt(t.substr(2,2),16),i=parseInt(t.substr(4,2),16);else if(t.length===8)r=parseInt(t.substr(0,2),16),n=parseInt(t.substr(2,2),16),i=parseInt(t.substr(4,2),16);else return "inherit";return (r*299+n*587+i*114)/1e3<128?"white":"black"}const Aa="Kesa:Fall",Gi=()=>{try{return hr(localStorage.getItem(Aa))??{}}catch{return {}}},De=(e,t)=>{const r=Gi(),n=e in r?r[e]:t,{subscribe:i,set:a,update:o}=Pn(n);return i(u=>{const l=Gi();localStorage.setItem(Aa,JSON.stringify({...l,[e]:u}));}),{subscribe:i,set:u=>{typeof u=="function"?o(u):a(u);},update:o}},fn=Pn(0),Ia=Pn(""),pr=De("_isFallView",true),dr=Pn(0),di=De("_panelPos",{x:0,y:0}),fi=De("_show_hover_pic",1),fr=De("_card_layout",{min:300,max:600,gap:8}),Ae=De("_card_detail",{all:false,category:true,title:false,topping:true,free:true,size:true,sub_title:false,tags:false,download_collect:false,upload_time:false,statistics:false}),vo=De("_show_nexus_pic",1),_i=De("_block_gay",1),_n=De("_card_radius",{enabled:false,value:16}),Pa=De("_mt_label",{}),ja=De("_mt_categories",{}),St=De("_textColor",{t1:"black",t2:"black",t3:"black"});function fo(e={path:"/search",method:"POST"}){const t=XMLHttpRequest.prototype.open,r=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.open=function(n,i){return this._requestMetadata={method:n.toUpperCase(),url:i,isTarget:i.includes(e.path)&&n.toUpperCase()===e.method},t.apply(this,arguments)},XMLHttpRequest.prototype.send=function(n){var i;if((i=this._requestMetadata)!=null&&i.isTarget){const a=this.onreadystatechange,o=this.onload;this.addEventListener("readystatechange",()=>{this.readyState===4&&this._captureResponseData(),a==null||a.call(this);}),this.onload=v=>{this._captureResponseData(),o==null||o.call(this,v);};const u={url:this._requestMetadata.url,body:n instanceof Document?n.documentElement.outerHTML:n},l=new CustomEvent(`req>${e.method}->${e.path}`,{detail:u});window.dispatchEvent(l);}return r.apply(this,arguments)},XMLHttpRequest.prototype._captureResponseData=function(){if(!this._hasCaptured&&this._requestMetadata.isTarget){try{const n={status:this.status,headers:this.getAllResponseHeaders(),data:this._parseResponse()},i=new CustomEvent(`res>${e.method}->${e.path}`,{detail:n});window.dispatchEvent(i);}catch(n){console.error("<PT-Fall> Capture failed:",n);}this._hasCaptured=true;}},XMLHttpRequest.prototype._parseResponse=function(){var n;try{switch(this.responseType){case "json":return this.response;case "document":return (n=this.responseXML)==null?void 0:n.documentElement.outerHTML;case "arraybuffer":return new Uint8Array(this.response);case "blob":return URL.createObjectURL(this.response);default:return this.responseText}}catch{return this.responseText}};}function _o(e){const t=e-1;return t*t*t+1}function ho(e,{from:t,to:r},n={}){var{delay:i=0,duration:a=x=>Math.sqrt(x)*120,easing:o=_o}=n,u=getComputedStyle(e),l=u.transform==="none"?"":u.transform,[v,s]=u.transformOrigin.split(" ").map(parseFloat);v/=e.clientWidth,s/=e.clientHeight;var h=po(e),f=e.clientWidth/r.width/h,d=e.clientHeight/r.height/h,g=t.left+t.width*v,m=t.top+t.height*s,k=r.left+r.width*v,N=r.top+r.height*s,y=(g-k)*f,w=(m-N)*d,O=t.width/r.width,L=t.height/r.height;return {delay:i,duration:typeof a=="function"?a(Math.sqrt(y*y+w*w)):a,easing:o,css:(x,$)=>{var M=$*y,R=$*w,I=x+$*O,q=x+$*L;return `transform: ${l} translate(${M}px, ${R}px) scale(${I}, ${q});`}}}function po(e){if("currentCSSZoom"in e)return e.currentCSSZoom;for(var t=e,r=1;t!==null;)r*=+getComputedStyle(t).zoom,t=t.parentElement;return r}var go=H('<span class="svelte-b2jtby"> </span>'),mo=H('<div class="svelte-b2jtby"><!></div>'),yo=H('<span class="svelte-b2jtby"> </span>'),bo=H("<div><!></div>"),wo=H("<div></div>");function xo(e,t){ot(t,false);const r=J(),n=J();let i=_e(t,"animate",8,true),a=_e(t,"columnClass",24,()=>""),o=_e(t,"duration",8,200),u=_e(t,"gap",8,20),l=_e(t,"getId",8,y=>typeof y=="number"||typeof y=="string"?y:y[v()]),v=_e(t,"idKey",24,()=>"id"),s=_e(t,"items",8),h=_e(t,"masonryHeight",12,0),f=_e(t,"masonryWidth",12,0),d=_e(t,"maxColWidth",8,500),g=_e(t,"minColWidth",8,330),m=_e(t,"style",24,()=>""),k=_e(t,"class",24,()=>"");mt(()=>(ft(s()),ft(f()),ft(g()),ft(u())),()=>{P(r,Math.min(s().length,Math.floor(f()/(g()+u()))||1));}),mt(()=>(ft(s()),c(r)),()=>{P(n,s().reduce((y,w,O)=>(y[O%y.length].push([w,O]),y),Array(c(r)).fill(null).map(()=>[])));}),kr(),wt();var N=wo();ht(N,5,()=>c(n),cr,(y,w)=>{var O=bo(),L=_(O);{var x=M=>{var R=nt(),I=Me(R);ht(I,9,()=>c(w),([q,C])=>l()(q),(q,C)=>{let V=()=>c(C)[0],F=()=>c(C)[1];var te=mo(),ce=_(te);Hi(ce,t,"default",{get idx(){return F()},get item(){return V()}},oe=>{var we=go(),xe=_(we);U(()=>D(xe,V())),E(oe,we);}),Ht(1,te,()=>Ot,()=>({delay:100,duration:o()})),Ht(2,te,()=>Ot,()=>({delay:0,duration:o()})),io(te,()=>ho,()=>({duration:o()})),E(q,te);}),E(M,R);},$=M=>{var R=nt(),I=Me(R);ht(I,1,()=>c(w),([q,C])=>l()(q),(q,C)=>{let V=()=>c(C)[0],F=()=>c(C)[1];var te=nt(),ce=Me(te);Hi(ce,t,"default",{get idx(){return F()},get item(){return V()}},oe=>{var we=yo(),xe=_(we);U(()=>D(xe,V())),E(oe,we);}),E(q,te);}),E(M,R);};Z(L,M=>{i()?M(x):M($,false);});}U(()=>{Ri(O,`col ${a()??""} svelte-b2jtby`),A(O,"style",`gap: ${u()??""}px; max-width: ${d()??""}px;`);}),E(y,O);}),U(()=>{Ri(N,`masonry ${k()??""} svelte-b2jtby`),A(N,"style",`gap: ${u()??""}px; ${m()??""}`);}),Fi(N,"clientWidth",f),Fi(N,"clientHeight",h),E(e,N),lt();}var Ie=function(){return Ie=Object.assign||function(t){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);}return t},Ie.apply(this,arguments)},Co=function(){function e(t){this.options=t,this.listeners={};}return e.prototype.on=function(t,r){var n=this.listeners[t]||[];this.listeners[t]=n.concat([r]);},e.prototype.triggerEvent=function(t,r){var n=this,i=this.listeners[t]||[];i.forEach(function(a){return a({target:n,event:r})});},e}(),Rt;(function(e){e[e.Add=0]="Add",e[e.Remove=1]="Remove";})(Rt||(Rt={}));var Eo=function(){function e(){this.notifications=[];}return e.prototype.push=function(t){this.notifications.push(t),this.updateFn(t,Rt.Add,this.notifications);},e.prototype.splice=function(t,r){var n=this.notifications.splice(t,r)[0];return this.updateFn(n,Rt.Remove,this.notifications),n},e.prototype.indexOf=function(t){return this.notifications.indexOf(t)},e.prototype.onUpdate=function(t){this.updateFn=t;},e}(),it;(function(e){e.Dismiss="dismiss",e.Click="click";})(it||(it={}));var Yi={types:[{type:"success",className:"notyf__toast--success",backgroundColor:"#3dc763",icon:{className:"notyf__icon--success",tagName:"i"}},{type:"error",className:"notyf__toast--error",backgroundColor:"#ed3d3d",icon:{className:"notyf__icon--error",tagName:"i"}}],duration:2e3,ripple:true,position:{x:"right",y:"bottom"},dismissible:false},ko=function(){function e(){this.notifications=[],this.events={},this.X_POSITION_FLEX_MAP={left:"flex-start",center:"center",right:"flex-end"},this.Y_POSITION_FLEX_MAP={top:"flex-start",center:"center",bottom:"flex-end"};var t=document.createDocumentFragment(),r=this._createHTMLElement({tagName:"div",className:"notyf"});t.appendChild(r),document.body.appendChild(t),this.container=r,this.animationEndEventName=this._getAnimationEndEventName(),this._createA11yContainer();}return e.prototype.on=function(t,r){var n;this.events=Ie(Ie({},this.events),(n={},n[t]=r,n));},e.prototype.update=function(t,r){r===Rt.Add?this.addNotification(t):r===Rt.Remove&&this.removeNotification(t);},e.prototype.removeNotification=function(t){var r=this,n=this._popRenderedNotification(t),i;if(n){i=n.node,i.classList.add("notyf__toast--disappear");var a;i.addEventListener(this.animationEndEventName,a=function(o){o.target===i&&(i.removeEventListener(r.animationEndEventName,a),r.container.removeChild(i));});}},e.prototype.addNotification=function(t){var r=this._renderNotification(t);this.notifications.push({notification:t,node:r}),this._announce(t.options.message||"Notification");},e.prototype._renderNotification=function(t){var r,n=this._buildNotificationCard(t),i=t.options.className;return i&&(r=n.classList).add.apply(r,i.split(" ")),this.container.appendChild(n),n},e.prototype._popRenderedNotification=function(t){for(var r=-1,n=0;n<this.notifications.length&&r<0;n++)this.notifications[n].notification===t&&(r=n);if(r!==-1)return this.notifications.splice(r,1)[0]},e.prototype.getXPosition=function(t){var r;return ((r=t==null?undefined:t.position)===null||r===undefined?undefined:r.x)||"right"},e.prototype.getYPosition=function(t){var r;return ((r=t==null?undefined:t.position)===null||r===undefined?undefined:r.y)||"bottom"},e.prototype.adjustContainerAlignment=function(t){var r=this.X_POSITION_FLEX_MAP[this.getXPosition(t)],n=this.Y_POSITION_FLEX_MAP[this.getYPosition(t)],i=this.container.style;i.setProperty("justify-content",n),i.setProperty("align-items",r);},e.prototype._buildNotificationCard=function(t){var r=this,n=t.options,i=n.icon;this.adjustContainerAlignment(n);var a=this._createHTMLElement({tagName:"div",className:"notyf__toast"}),o=this._createHTMLElement({tagName:"div",className:"notyf__ripple"}),u=this._createHTMLElement({tagName:"div",className:"notyf__wrapper"}),l=this._createHTMLElement({tagName:"div",className:"notyf__message"});l.innerHTML=n.message||"";var v=n.background||n.backgroundColor;if(i){var s=this._createHTMLElement({tagName:"div",className:"notyf__icon"});if((typeof i=="string"||i instanceof String)&&(s.innerHTML=new String(i).valueOf()),typeof i=="object"){var h=i.tagName,f=h===undefined?"i":h,d=i.className,g=i.text,m=i.color,k=m===undefined?v:m,N=this._createHTMLElement({tagName:f,className:d,text:g});k&&(N.style.color=k),s.appendChild(N);}u.appendChild(s);}if(u.appendChild(l),a.appendChild(u),v&&(n.ripple?(o.style.background=v,a.appendChild(o)):a.style.background=v),n.dismissible){var y=this._createHTMLElement({tagName:"div",className:"notyf__dismiss"}),w=this._createHTMLElement({tagName:"button",className:"notyf__dismiss-btn"});y.appendChild(w),u.appendChild(y),a.classList.add("notyf__toast--dismissible"),w.addEventListener("click",function(L){var x,$;($=(x=r.events)[it.Dismiss])===null||$===undefined||$.call(x,{target:t,event:L}),L.stopPropagation();});}a.addEventListener("click",function(L){var x,$;return ($=(x=r.events)[it.Click])===null||$===undefined?undefined:$.call(x,{target:t,event:L})});var O=this.getYPosition(n)==="top"?"upper":"lower";return a.classList.add("notyf__toast--"+O),a},e.prototype._createHTMLElement=function(t){var r=t.tagName,n=t.className,i=t.text,a=document.createElement(r);return n&&(a.className=n),a.textContent=i||null,a},e.prototype._createA11yContainer=function(){var t=this._createHTMLElement({tagName:"div",className:"notyf-announcer"});t.setAttribute("aria-atomic","true"),t.setAttribute("aria-live","polite"),t.style.border="0",t.style.clip="rect(0 0 0 0)",t.style.height="1px",t.style.margin="-1px",t.style.overflow="hidden",t.style.padding="0",t.style.position="absolute",t.style.width="1px",t.style.outline="0",document.body.appendChild(t),this.a11yContainer=t;},e.prototype._announce=function(t){var r=this;this.a11yContainer.textContent="",setTimeout(function(){r.a11yContainer.textContent=t;},100);},e.prototype._getAnimationEndEventName=function(){var t=document.createElement("_fake"),r={MozTransition:"animationend",OTransition:"oAnimationEnd",WebkitTransition:"webkitAnimationEnd",transition:"animationend"},n;for(n in r)if(t.style[n]!==undefined)return r[n];return "animationend"},e}(),Ha=function(){function e(t){var r=this;this.dismiss=this._removeNotification,this.notifications=new Eo,this.view=new ko;var n=this.registerTypes(t);this.options=Ie(Ie({},Yi),t),this.options.types=n,this.notifications.onUpdate(function(i,a){return r.view.update(i,a)}),this.view.on(it.Dismiss,function(i){var a=i.target,o=i.event;r._removeNotification(a),a.triggerEvent(it.Dismiss,o);}),this.view.on(it.Click,function(i){var a=i.target,o=i.event;return a.triggerEvent(it.Click,o)});}return e.prototype.error=function(t){var r=this.normalizeOptions("error",t);return this.open(r)},e.prototype.success=function(t){var r=this.normalizeOptions("success",t);return this.open(r)},e.prototype.open=function(t){var r=this.options.types.find(function(a){var o=a.type;return o===t.type})||{},n=Ie(Ie({},r),t);this.assignProps(["ripple","position","dismissible"],n);var i=new Co(n);return this._pushNotification(i),i},e.prototype.dismissAll=function(){for(;this.notifications.splice(0,1););},e.prototype.assignProps=function(t,r){var n=this;t.forEach(function(i){r[i]=r[i]==null?n.options[i]:r[i];});},e.prototype._pushNotification=function(t){var r=this;this.notifications.push(t);var n=t.options.duration!==undefined?t.options.duration:this.options.duration;n&&setTimeout(function(){return r._removeNotification(t)},n);},e.prototype._removeNotification=function(t){var r=this.notifications.indexOf(t);r!==-1&&this.notifications.splice(r,1);},e.prototype.normalizeOptions=function(t,r){var n={type:t};return typeof r=="string"?n.message=r:typeof r=="object"&&(n=Ie(Ie({},n),r)),n},e.prototype.registerTypes=function(t){var r=(t&&t.types||[]).slice(),n=Yi.types.map(function(i){var a=-1;r.forEach(function(u,l){u.type===i.type&&(a=l);});var o=a!==-1?r.splice(a,1)[0]:{};return Ie(Ie({},i),o)});return n.concat(r)},e}();new Ha({duration:5e3,dismissible:true});const At=new Ha({duration:3e3,dismissible:true,position:{x:"left",y:"top"},types:[{type:"warning",background:"orange",icon:false}]}),Lo="data:image/svg+xml,%3csvg%20stroke='currentColor'%20fill='currentColor'%20stroke-width='0'%20viewBox='0%200%2024%2024'%20height='25'%20width='25'%20xmlns='http://www.w3.org/2000/svg'%20style='%20vertical-align:%20middle;%20--darkreader-inline-fill:%20currentColor;%20--darkreader-inline-stroke:%20currentColor;'%20%3e%3cpath%20d='M12%205c-3.859%200-7%203.141-7%207s3.141%207%207%207%207-3.141%207-7-3.141-7-7-7zm0%2012c-2.757%200-5-2.243-5-5s2.243-5%205-5%205%202.243%205%205-2.243%205-5%205z'%3e%3c/path%3e%3cpath%20d='M12%209c-1.627%200-3%201.373-3%203s1.373%203%203%203%203-1.373%203-3-1.373-3-3-3z'%3e%3c/path%3e%3c/svg%3e",Mo="data:image/svg+xml,%3csvg%20viewBox='64%2064%20896%20896'%20focusable='false'%20data-icon='arrow-up'%20width='1em'%20height='1em'%20fill='green'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M868%20545.5L536.1%20163a31.96%2031.96%200%2000-48.3%200L156%20545.5a7.97%207.97%200%20006%2013.2h81c4.6%200%209-2%2012.1-5.5L474%20300.9V864c0%204.4%203.6%208%208%208h60c4.4%200%208-3.6%208-8V300.9l218.9%20252.3c3%203.5%207.4%205.5%2012.1%205.5h81c6.8%200%2010.5-8%206-13.2z'%3e%3c/path%3e%3c/svg%3e",No="data:image/svg+xml,%3csvg%20viewBox='64%2064%20896%20896'%20focusable='false'%20data-icon='arrow-down'%20width='1em'%20height='1em'%20fill='red'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M862%20465.3h-81c-4.6%200-9%202-12.1%205.5L550%20723.1V160c0-4.4-3.6-8-8-8h-60c-4.4%200-8%203.6-8%208v563.1L255.1%20470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8%200-10.5%208.1-6%2013.2L487.9%20861a31.96%2031.96%200%200048.3%200L868%20478.5c4.5-5.2.8-13.2-6-13.2z'%3e%3c/path%3e%3c/svg%3e",So="data:image/svg+xml,%3csvg%20viewBox='64%2064%20896%20896'%20focusable='false'%20data-icon='download'%20width='1em'%20height='1em'%20fill='currentColor'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M505.7%20661a8%208%200%200012.6%200l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4%200-8%203.6-8%208v338.3H400c-6.7%200-10.4%207.7-6.3%2012.9l112%20141.8zM878%20626h-60c-4.4%200-8%203.6-8%208v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4%200-8%203.6-8%208v198c0%2017.7%2014.3%2032%2032%2032h684c17.7%200%2032-14.3%2032-32V634c0-4.4-3.6-8-8-8z'%3e%3c/path%3e%3c/svg%3e",$o="data:image/svg+xml,%3csvg%20viewBox='64%2064%20896%20896'%20focusable='false'%20data-icon='star'%20width='1em'%20height='1em'%20fill='currentColor'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M908.1%20353.1l-253.9-36.9L540.7%2086.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9%2014.5L369.8%20316.2l-253.9%2036.9c-7%201-13.4%204.3-18.3%209.3a32.05%2032.05%200%2000.6%2045.3l183.7%20179.1-43.4%20252.9a31.95%2031.95%200%200046.4%2033.7L512%20754l227.1%20119.4c6.2%203.3%2013.4%204.4%2020.3%203.2%2017.4-3%2029.1-19.5%2026.1-36.9l-43.4-252.9%20183.7-179.1c5-4.9%208.3-11.3%209.3-18.3%202.7-17.5-9.5-33.7-27-36.3z'%3e%3c/path%3e%3c/svg%3e",Vo="data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cstyle%3e%20.cls-1{fill:%232eb1b7;}%20.cls-2{fill:%2356b54e;}%20.cls-3{fill:%235dc6d1;}%20.cls-4{fill:%2360cc5a;}%20.cls-5{fill:%23ffce69;}%20.cls-6{fill:%236c2e7c;}%20%3c/style%3e%3c/defs%3e%3cg%20id='Icons'%3e%3crect%20class='cls-1'%20height='22'%20rx='4'%20width='22'%20x='1'%20y='1'/%3e%3cpath%20class='cls-2'%20d='M23,18v1a4,4,0,0,1-4,4H5a4,4,0,0,1-3.9-3.1l7.19-7.19a1.008,1.008,0,0,1,1.42,0l1.8,1.8a1,1,0,0,0,1.46-.05l2.33-2.65a1,1,0,0,1,1.46-.05Z'/%3e%3cpath%20class='cls-3'%20d='M23,5v9a4.025,4.025,0,0,1-1.17,2.83l-5.07-5.07a1,1,0,0,0-1.46.05l-2.33,2.65a1,1,0,0,1-1.46.05l-1.8-1.8a1.008,1.008,0,0,0-1.42,0L3.36,17.64A3.988,3.988,0,0,1,1,14V5A4,4,0,0,1,5,1H19A4,4,0,0,1,23,5Z'/%3e%3cpath%20class='cls-4'%20d='M21.83,16.83A4.025,4.025,0,0,1,19,18H5a3.931,3.931,0,0,1-1.64-.36l4.93-4.93a1.008,1.008,0,0,1,1.42,0l1.8,1.8a1,1,0,0,0,1.46-.05l2.33-2.65a1,1,0,0,1,1.46-.05Z'/%3e%3ccircle%20class='cls-5'%20cx='7'%20cy='7'%20r='2'/%3e%3c/g%3e%3cg%20data-name='Layer%204'%20id='Layer_4'%3e%3cpath%20class='cls-6'%20d='M19,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,19,0Zm3,19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3Z'/%3e%3cpath%20class='cls-6'%20d='M7,10A3,3,0,1,0,4,7,3,3,0,0,0,7,10ZM7,6A1,1,0,1,1,6,7,1,1,0,0,1,7,6Z'/%3e%3cpath%20class='cls-6'%20d='M16.707,10.293a.956.956,0,0,0-.74-.293,1.006,1.006,0,0,0-.72.341L12.217,13.8l-2.51-2.511a1,1,0,0,0-1.414,0l-4,4a1,1,0,1,0,1.414,1.414L9,13.414l1.9,1.9L8.247,18.341a1,1,0,0,0,1.506,1.318l3.218-3.678.006,0,.007-.011,3.065-3.5,2.244,2.244a1,1,0,0,0,1.414-1.414Z'/%3e%3c/g%3e%3c/svg%3e",B="https://static.m-team.cc/static/cate/",It={architecture:"Mteam",TL_Selector:"div.app-content__inner",LOADING_PIC:"/static/media/logo.80b63235eaf702e44a8d.png",HOST:"https://test2.m-team.cc",API:{search:{url:"/search",fullUrl:"/api/torrent/search",method:"POST"}},ICON:{SIZE:Lo,SEEDERS:Mo,LEECHERS:No,DOWNLOAD:So,COLLECTION:$o,PIN:"/static/trans.gif",PREVIEW:Vo},CATEGORY:{401:{src:B+"moviesd.png",alt:"電影/SD",color:"#c74854"},402:{src:B+"tvhd.png",alt:"影劇/綜藝/HD",color:"#276fb8"},403:{src:B+"tvsd.png",alt:"影劇/綜藝/SD",color:"#c74854"},404:{src:B+"bbc.png",alt:"紀錄",color:"#23ac38"},405:{src:B+"anime.png",alt:"動畫",color:"#996c34"},406:{src:B+"mv.png",alt:"演唱",color:"#8a57a1"},407:{src:B+"sport.png",alt:"運動",color:"#23ac38"},409:{src:B+"other.png",alt:"Misc(其他)",color:"#996c34"},419:{src:B+"moviehd.png",alt:"電影/HD",color:"#c01a20"},420:{src:B+"moviedvd.png",alt:"電影/DVDiSo",color:"#c74854"},421:{src:B+"moviebd.png",alt:"電影/Blu-Ray",color:"#00a0e9"},422:{src:B+"software.png",alt:"軟體",color:"#f39800"},423:{src:B+"game-pc-3.jpeg",alt:"PC遊戲",color:"#f39800"},427:{src:B+"Study.png",alt:"教育(書面)",color:"#7FC269"},434:{src:B+"flac.png",alt:"Music(無損)",color:"#8a57a1"},435:{src:B+"tvdvd.png",alt:"影劇/綜藝/DVDiSo",color:"#4dbebd"},438:{src:B+"tvbd.png",alt:"影劇/綜藝/BD",color:"#1897d6"},439:{src:B+"movieremux.png",alt:"電影/Remux",color:"#1b2a51"},451:{src:B+"Study_Video.png",alt:"教育(影片)",color:"#7FC269"},442:{src:B+"Study_Audio.png",alt:"有聲書",color:"#7FC269"},448:{src:B+"pcgame.png",alt:"TV遊戲",color:"#f39800"},410:{src:B+"cenhd.png",alt:"AV(有碼)/HD Censored",color:"#F520CB"},411:{src:B+"hgame.png",alt:"H-遊戲",color:"#f49800"},412:{src:B+"hanime.png",alt:"H-動畫",color:"#f49800"},413:{src:B+"hcomic.png",alt:"H-漫畫",color:"#f49800"},424:{src:B+"censd.png",alt:"AV(有碼)/SD Censored",color:"#DA55A9"},425:{src:B+"ivvideo.png",alt:"IV(寫真影集)",color:"#bb1e9a"},426:{src:B+"uendvd.png",alt:"AV(無碼)/DVDiSo Uncensored",color:"#f77afa"},429:{src:B+"uenhd.png",alt:"AV(無碼)/HD Uncensored",color:"#f52bcb"},430:{src:B+"uensd.png",alt:"AV(無碼)/SD Uncensored",color:"#db55a9"},431:{src:B+"cenbd.png",alt:"AV(有碼)/Blu-Ray Censored",color:"#19a7ec"},432:{src:B+"uenbd.png",alt:"AV(無碼)/Blu-Ray Uncensored",color:"#19a7ec"},433:{src:B+"ivpic.png",alt:"IV(寫真圖集)",color:"#bb1e9a"},436:{src:B+"adult0day.png",alt:"AV(網站)/0Day",color:"#bb1e9a"},437:{src:B+"cendvd.png",alt:"AV(有碼)/DVDiSo Censored",color:"#f77afa"},440:{src:B+"gayhd.gif",alt:"AV(Gay)/HD",color:"#f52bcb"}},TAG:{"4k":{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},"8k":{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},hdr:{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},hdr10:{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},"hdr10+":{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},hlg:{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},DoVi:{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},HDRVi:{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},中字:{color:"#ad2a2a",bgColor:"#d14a4a2e"},中配:{color:"#5b3991",bgColor:"#5b399129"}},INDEX:0,Iframe_Width:1260,get_bg_color:function(){const e=getComputedStyle(document.documentElement).getPropertyValue("--background-2"),t=getComputedStyle(document.documentElement).getPropertyValue("--bg-3");return e||t||"#000000"},special:function(){let e=To(),t=Ao();return e&&t},pageLoaded:function(){}};function To(){const e=Array.from(document.querySelectorAll(".ant-table-row-level-0 .ant-col a[href]"));return e.forEach(function(t){t.addEventListener("click",function(r){r.preventDefault(),_iframe_switch.set(1),_iframe_url.set(t.href);});}),e.length}function Ao(){document.querySelectorAll(".ant-image-mask").forEach(r=>{r.remove();});const t=Array.from(document.querySelectorAll(".torrent-list__thumbnail"));return t.forEach(r=>{r.classList+=" preview_Origin";}),t.length}const Mi=".preview_Origin";document.body.addEventListener("mouseover",function(e){if(e.target.matches(Mi)){const t=e,r=e.target;handleMouseOver(t,r);}});document.body.addEventListener("mouseout",function(e){e.target.matches(Mi)&&handleMouseOut(e);});document.body.addEventListener("mousemove",function(e){if(e.target.matches(Mi)){const t=e.target;handleMouseMove(e,t);}});var Io=Zt('<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="18" width="18" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle;"><path d="M7 7h10v2H7zm0 4h7v2H7z"></path><path d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"></path></svg>');function Ui(e){var t=Io();E(e,t);}class Po{constructor(){this.container=null,this.imgElements=null,this.init();}init(){this.container=document.querySelector(".kp_container")||this.createPreview(),document.body.appendChild(this.container);}createPreview(){const t=document.createElement("div");t.className="kp_container",t.style.backgroundColor="rgba(0,0,0,0.8)",t.style.opacity="1",t.style.position="fixed",t.style.zIndex="10000",t.style.pointerEvents="none",t.style.transition="all .3s",t.style.display="none";const r=document.createElement("img");r.className="kp_img",r.style.position="absolute",r.style.zIndex="10002",r.style.pointerEvents="none",r.style.width="100%",r.style.height="100%",r.style.objectFit="contain",t.appendChild(r);const n=document.createElement("img");return n.className="kp_img",n.style.position="absolute",n.style.zIndex="10001",n.style.pointerEvents="none",n.style.width="100%",n.style.height="100%",n.style.objectFit="cover",n.style.filter="blur(8px)",n.style.opacity="0.9",t.appendChild(n),t}handleMouseOver(t,r){if(this.container){if(!r){console.warn("[FALL]: imgEle is null");return}if(Va(vo)){const n=r.getAttribute("src");n&&(document.querySelectorAll(".kp_img").forEach(a=>{a.setAttribute("src",n);}),this.imgElements=r,this.updatePosition(t),this.container.style.display="block");}}}handleMouseMove(t){this.container&&this.container.style.display==="block"&&this.updatePosition(t);}updatePosition(t){const r=this.previewPosition(t);this.container.style.left=r.left,this.container.style.top=r.top,this.container.style.width=r.width,this.container.style.height=r.height;}previewPosition(t){let r=0,n=0;try{r=this.imgElements.naturalWidth,n=this.imgElements.naturalHeight;}catch{}const i=t.clientX,a=t.clientY,o=window.innerWidth,u=window.innerHeight,l={bot:{width:o,height:window.innerHeight-a},top:{width:o,height:a},right:{width:window.innerWidth-i,height:u},left:{width:i,height:u}};let v=0,s="";const h={top:{left:0,top:0,width:o+"px",height:a+"px"},bot:{left:0,top:a+"px",width:o+"px",height:window.innerHeight-a+"px"},left:{left:0,top:0,width:i+"px",height:u+"px"},right:{left:i+"px",top:0,width:window.innerWidth-i+"px",height:u+"px"}};for(const f in l){const d=Math.min(l[f].width/r,l[f].height/n);d>v&&(v=d,s=f);}return h[s]||{left:0,top:0,width:0,height:0}}clearPreview(){document.querySelectorAll(".kp_img").forEach(t=>{t.setAttribute("src","");}),this.container&&(this.container.style.display="none");}destroy(){this.container&&(this.container.style.display="none",clearPreview());}}function jo(){document.querySelectorAll(".kp_img").forEach(t=>{t.setAttribute("src","");});const e=document.querySelector(".kp_container");e&&(e.style.display="none");}window.__clearPreview=jo;const Ho="data:image/svg+xml,%3csvg%20width='256px'%20height='256px'%20viewBox='0%200%2024.00%2024.00'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20transform='matrix(1,%200,%200,%201,%200,%200)'%20%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'%20transform='translate(0,0),%20scale(1)'%20/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%23CCCCCC'%20stroke-width='0.048'%20/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M13%203L13.7071%202.29289C13.5196%202.10536%2013.2652%202%2013%202V3ZM14%2022C14.5523%2022%2015%2021.5523%2015%2021C15%2020.4477%2014.5523%2020%2014%2020V22ZM19%209H20C20%208.73478%2019.8946%208.48043%2019.7071%208.29289L19%209ZM18%2010C18%2010.5523%2018.4477%2011%2019%2011C19.5523%2011%2020%2010.5523%2020%2010H18ZM5.21799%2019.908L4.32698%2020.362H4.32698L5.21799%2019.908ZM6.09202%2020.782L6.54601%2019.891L6.54601%2019.891L6.09202%2020.782ZM6.09202%203.21799L5.63803%202.32698L5.63803%202.32698L6.09202%203.21799ZM5.21799%204.09202L4.32698%203.63803L4.32698%203.63803L5.21799%204.09202ZM13.109%208.45399L14%208V8L13.109%208.45399ZM13.546%208.89101L14%208L13.546%208.89101ZM17.2299%2017.7929C16.8394%2018.1834%2016.8394%2018.8166%2017.2299%2019.2071C17.6204%2019.5976%2018.2536%2019.5976%2018.6441%2019.2071L17.2299%2017.7929ZM15.0316%2015.2507C14.8939%2015.7856%2015.2159%2016.3308%2015.7507%2016.4684C16.2856%2016.6061%2016.8308%2016.2841%2016.9684%2015.7493L15.0316%2015.2507ZM17.9375%2020C17.3852%2020%2016.9375%2020.4477%2016.9375%2021C16.9375%2021.5523%2017.3852%2022%2017.9375%2022V20ZM17.9475%2022C18.4998%2022%2018.9475%2021.5523%2018.9475%2021C18.9475%2020.4477%2018.4998%2020%2017.9475%2020V22ZM13%202H8.2V4H13V2ZM4%206.2V17.8H6V6.2H4ZM8.2%2022H14V20H8.2V22ZM19.7071%208.29289L13.7071%202.29289L12.2929%203.70711L18.2929%209.70711L19.7071%208.29289ZM20%2010V9H18V10H20ZM4%2017.8C4%2018.3436%203.99922%2018.8114%204.03057%2019.195C4.06287%2019.5904%204.13419%2019.9836%204.32698%2020.362L6.10899%2019.454C6.0838%2019.4045%206.04612%2019.3038%206.02393%2019.0322C6.00078%2018.7488%206%2018.3766%206%2017.8H4ZM8.2%2020C7.62345%2020%207.25117%2019.9992%206.96784%2019.9761C6.69617%2019.9539%206.59545%2019.9162%206.54601%2019.891L5.63803%2021.673C6.01641%2021.8658%206.40963%2021.9371%206.80497%2021.9694C7.18864%2022.0008%207.65645%2022%208.2%2022V20ZM4.32698%2020.362C4.6146%2020.9265%205.07354%2021.3854%205.63803%2021.673L6.54601%2019.891C6.35785%2019.7951%206.20487%2019.6422%206.10899%2019.454L4.32698%2020.362ZM8.2%202C7.65645%202%207.18864%201.99922%206.80497%202.03057C6.40963%202.06287%206.01641%202.13419%205.63803%202.32698L6.54601%204.10899C6.59545%204.0838%206.69617%204.04612%206.96784%204.02393C7.25117%204.00078%207.62345%204%208.2%204V2ZM6%206.2C6%205.62345%206.00078%205.25117%206.02393%204.96784C6.04612%204.69617%206.0838%204.59545%206.10899%204.54601L4.32698%203.63803C4.13419%204.01641%204.06287%204.40963%204.03057%204.80497C3.99922%205.18864%204%205.65645%204%206.2H6ZM5.63803%202.32698C5.07354%202.6146%204.6146%203.07354%204.32698%203.63803L6.10899%204.54601C6.20487%204.35785%206.35785%204.20487%206.54601%204.10899L5.63803%202.32698ZM12%203V7.4H14V3H12ZM14.6%2010H19V8H14.6V10ZM12%207.4C12%207.66353%2011.9992%207.92131%2012.0169%208.13823C12.0356%208.36682%2012.0797%208.63656%2012.218%208.90798L14%208C14.0293%208.05751%2014.0189%208.08028%2014.0103%207.97537C14.0008%207.85878%2014%207.69653%2014%207.4H12ZM14.6%208C14.3035%208%2014.1412%207.99922%2014.0246%207.9897C13.9197%207.98113%2013.9425%207.9707%2014%208L13.092%209.78201C13.3634%209.92031%2013.6332%209.96438%2013.8618%209.98305C14.0787%2010.0008%2014.3365%2010%2014.6%2010V8ZM12.218%208.90798C12.4097%209.2843%2012.7157%209.59027%2013.092%209.78201L14%208V8L12.218%208.90798ZM18.937%2016C18.937%2016.1732%2018.8915%2016.3053%2018.6175%2016.5697C18.4638%2016.718%2018.2828%2016.8653%2018.0319%2017.074C17.7936%2017.2723%2017.5141%2017.5087%2017.2299%2017.7929L18.6441%2019.2071C18.86%2018.9913%2019.0805%2018.8033%2019.3109%2018.6116C19.5287%2018.4305%2019.7852%2018.2223%2020.0065%2018.0087C20.4825%2017.5493%2020.937%2016.9314%2020.937%2016H18.937ZM17.937%2015C18.4893%2015%2018.937%2015.4477%2018.937%2016H20.937C20.937%2014.3431%2019.5938%2013%2017.937%2013V15ZM16.9684%2015.7493C17.0795%2015.3177%2017.4724%2015%2017.937%2015V13C16.5377%2013%2015.3645%2013.957%2015.0316%2015.2507L16.9684%2015.7493ZM17.9375%2022H17.9475V20H17.9375V22Z'%20fill='%23c00000'%20/%3e%3c/g%3e%3c/svg%3e",Oo="data:image/svg+xml,%3csvg%20viewBox='-2.4%20-2.4%2028.80%2028.80'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23000000'%20%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'%20/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M15.6%2015.6C15.6%2015.6%2014.25%2013.8%2012%2013.8C9.75%2013.8%208.4%2015.6%208.4%2015.6M14.7%209.3H14.709M9.3%209.3H9.309M21%2012C21%2016.9706%2016.9706%2021%2012%2021C7.02944%2021%203%2016.9706%203%2012C3%207.02944%207.02944%203%2012%203C16.9706%203%2021%207.02944%2021%2012ZM15.15%209.3C15.15%209.54853%2014.9485%209.75%2014.7%209.75C14.4515%209.75%2014.25%209.54853%2014.25%209.3C14.25%209.05147%2014.4515%208.85%2014.7%208.85C14.9485%208.85%2015.15%209.05147%2015.15%209.3ZM9.75%209.3C9.75%209.54853%209.54853%209.75%209.3%209.75C9.05147%209.75%208.85%209.54853%208.85%209.3C8.85%209.05147%209.05147%208.85%209.3%208.85C9.54853%208.85%209.75%209.05147%209.75%209.3Z'%20stroke='%23000000'%20stroke-width='1.8'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3c/g%3e%3c/svg%3e";var Ce=so(()=>It),Ro=H('<div class="card-category svelte-13et45j"><img class="card_category-img svelte-13et45j"> </div>'),Do=H('<a class="__main_title svelte-13et45j" target="_blank" rel="noopener noreferrer"> </a>'),Fo=H('<div class="pic_error svelte-13et45j"><div><img style="height: 100%; width:60px; border-radius:20px;" alt="pic error" class="svelte-13et45j"></div> <div class="ant-typography" style="color: white; font-size:16px;">GAY WARNING<br>同志警告</div></div>'),zo=H('<img class="lazy-image svelte-13et45j">'),qo=H('<div class="pic_error svelte-13et45j" style=""><div><img style="height: 100%;width: 100px;" alt="no pic" class="svelte-13et45j"></div> <div>本种没有图片</div></div>'),Bo=H('<div class="pic_error svelte-13et45j" style=""><div><img style="height: 100%;width: 100px;" alt="pic error" class="svelte-13et45j"></div> <div class="ant-typography">图片加载失败</div></div>'),Zo=H('<div class="hover-trigger svelte-13et45j"><img style="pointer-events: none;" alt="PREVIEW" class="svelte-13et45j"></div>'),Wo=H(`<img style="
                    background: url(/static/media/icons.8bb5446ebbbd07050285.gif) 0 -202px;
                    height: 14px;
                    width: 14px;" alt="PIN" class="svelte-13et45j">`),Go=H('<div class="card_info__topping svelte-13et45j"></div> &nbsp;',1),Yo=H('<div class="_tag svelte-13et45j"> </div>'),Uo=H('<div class="_tag _tag_diy svelte-13et45j">DIY</div>'),Xo=H('<div class="_tag _tag_dub svelte-13et45j">国配</div>'),Qo=H('<div class="_tag _tag_sub svelte-13et45j">中字</div>'),Jo=H('<div class="_tag svelte-13et45j"> </div>'),Ko=H('<div class="cl-tags svelte-13et45j"><!> <!> <!> <!></div>'),el=H(`<img style="
                  background: url(/static/media/icons.8bb5446ebbbd07050285.gif) 0 -202px;
                  height: 14px;
                  width: 14px;" alt="PIN" class="svelte-13et45j">`),tl=H('<div class="card_info__topping svelte-13et45j"></div> &nbsp;',1),rl=H('<div class="_tag svelte-13et45j"> </div>'),nl=H('<div class="card-index svelte-13et45j"><!> <!></div>'),il=H('<div class="card-index card-index-right svelte-13et45j"> </div>'),al=H('<div class="card_info-item card_info__sub_title svelte-13et45j"><div> </div></div>'),sl=H('<div class="_tag _tag_diy svelte-13et45j">DIY</div>'),ol=H('<div class="_tag _tag_dub svelte-13et45j">国配</div>'),ll=H('<div class="_tag _tag_sub svelte-13et45j">中字</div>'),cl=H('<div class="_tag svelte-13et45j"> </div>'),ul=H('<div class="cl-tags svelte-13et45j"><!> <!> <!> <!></div>'),vl=H('<div class="card_info-item card_info__dl_and_cl svelte-13et45j"><button title="(原列表的这俩按钮会消失)">下载 & 收藏</button></div>'),dl=H('<div class="card_info-item card_info__upload_time svelte-13et45j"><div> </div></div>'),fl=H('<div class="card_info-item card_info__statistics svelte-13et45j"><!> &nbsp; <b> </b> &nbsp;&nbsp; <img alt="SVG_Seeders"> &nbsp; <b> </b> &nbsp;&nbsp; <img alt="SVG_Leechers"> &nbsp; <b> </b></div>'),_l=H('<div class="card_info svelte-13et45j"><!>  <!> <!> <!> <!></div>'),hl=H(`<div class="card_holder svelte-13et45j"><!> <div class="card_title"><!></div> <div class="card_pic svelte-13et45j"><!> <!>  <div class="hover-overlay svelte-13et45j"><div class="overlay-content svelte-13et45j"><div class="__inner_index_and_size svelte-13et45j"><div class="card-index __inner_index svelte-13et45j" style="background-color:black; color:white"><!> <!></div> <button class="__iframe_button svelte-13et45j">内窗预览</button> <div class="card-index card-index-right __inner_index __inner_size svelte-13et45j"> </div></div> <div class="card-category card_info-item svelte-13et45j"><img class="card_category-img card_category_square svelte-13et45j" style="width: 36px;height: 36px;"> </div> <div style="width: 100%;" class="card_info-item card_info__sub_title svelte-13et45j"><a class="__main_title __straight svelte-13et45j" target="_blank" rel="noopener noreferrer"> </a></div> <div style="width: 100%;" class="card_info-item card_info__sub_title svelte-13et45j"><div class="__sub_title svelte-13et45j"> </div></div>  <!> <div class="card_info-item card_info__upload_time svelte-13et45j"><div> </div></div> <div class="card_info-item card_info__statistics svelte-13et45j"><div class="__center svelte-13et45j"><!> <b> </b></div> <div class="__center svelte-13et45j"><img style="width: 14px; height: 14px;" alt="SVG_Seeders" class="svelte-13et45j"> <b> </b></div> <div class="__center svelte-13et45j"><img style="width: 14px; height: 14px;" alt="SVG_Leechers" class="svelte-13et45j"> <b> </b></div> <div><button title="(原列表的这俩按钮会消失)" style="
                background-color: inherit; border-color:transparent">下载&收藏</button></div></div></div></div> <!> <!></div> <!></div>`);function pl(e,t){ot(t,false);const[r,n]=Wt(),i=()=>se(ja,"$_mt_categories",r),a=()=>se(Pa,"$_mt_label",r),o=()=>se(_i,"$_block_gay",r),u=()=>se(_n,"$_card_radius",r),l=()=>se(Ae,"$_card_detail",r),v=()=>se(fi,"$_show_hover_pic",r);let s=_e(t,"torrentInfo",8),h=J(false),f=J();s().status.toppingLevel&&P(f,Array(Number(s().status.toppingLevel)).fill());const d=s().status.discount,g=s().status.discountEndTime,m={FREE:"免费",PERCENT_50:"50%"},k=()=>{const b=new Date,T=new Date(g);return Math.floor((T.getTime()-b.getTime())/(1e3*3600))};let N=J(),y=J();const w="rgba(255, 255, 255, 0.5)";let O=J(),L=J();const x=`https://${location.host}/browse?cat=`+s().category;Ce().CATEGORY[s().category]||(P(y,w),At.open({type:"warning",message:`存在未知分类: ${s().category}`}),Ce(Ce().CATEGORY[s().category]={src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZmMDAwMCIvPjwvc3ZnPg==",alt:"未知分类(TG或论坛联系我)",color:w})),P(O,i()[s().category].nameChs??Ce().CATEGORY[s().category].alt),P(L,i()[s().category].image?B+i()[s().category].image:Ce().CATEGORY[s().category].src),P(y,Ce().CATEGORY[s().category].color??w);const $=c(y)?Tt(c(y)):"black";let M=J([]);s().labelsNew.length&&P(M,s().labelsNew.map(b=>{if(Ce().TAG[b])return {key:b,config:Ce().TAG[b]};if(a()){console.warn("[FALL]: 存在本地没有的 tag: ",b);let T;for(const z in a())if(b==a()[z].tag){T=a()[z];break}if(T)return {key:b,config:T}}return null}).filter(Boolean));function R(b){if(b===0)return "0 B";const T=["B","KB","MB","GB","TB"];let z=0,X=b;for(;X>=1024&&z<T.length-1;)X/=1024,z++;return `${X.toFixed(2).replace(/\.?0+$/,"")} ${T[z]}`}let I=J(),q=J();function C(b,T){const z=document.querySelectorAll(`a[href^="/detail/${b}"]`),X=[];z.forEach(S=>{if(!/\/detail\/\d+/.test(S.href))return;const re=S.closest("tr");re&&re.querySelectorAll("button").forEach(ae=>{ae.querySelector("span.ant-btn-icon")&&X.push(ae);});}),X.length?(X[0].style.margin=0,[...new Set(X)].forEach(re=>{T.appendChild(re);})):At.error("没找到捏, 建议在种子详情里下载收藏~");}let V=J(false),F=J(false),te=new Po,ce=J(),oe=J(),we=J(0);function xe(){c(oe)&&P(we,c(oe).offsetHeight);}let W=J(false);const ue="/static/cate/gayhd.gif",Ee="https://static.m-team.cc/static/media/logo.80b63235eaf702e44a8d.png";let He=s().imageList[0]||Ee,G=J(),ct,We=J(false);const Nr=()=>{c(We)||(Se(G,c(G).style.width="100%"),Se(G,c(G).src=He),c(G).classList.add("loaded"),Se(G,c(G).style.opacity=1),P(We,true),c(oe)&&xe());};function Sr(){ye(Ia,"https://"+location.host+"/detail/"+s().id),ye(fn,1);}jn(()=>{c(We)||(ct=new IntersectionObserver(b=>{b.forEach(T=>{T.isIntersecting&&(Nr(),ct.unobserve(c(G)));});},{rootMargin:"100px"}),c(G)&&!c(We)&&ct.observe(c(G)),s().pt_fall_highlight&&c(N).scrollIntoView({behavior:"smooth"}),setTimeout(()=>{},3e3)),xe(),c(G)&&Se(G,c(G).style.width="auto");}),Ta(()=>{ct&&ct.disconnect();}),mt(()=>c(oe),()=>{c(oe)&&xe();}),mt(()=>(ft(s()),o(),c(G),c(oe)),()=>{s().category==440&&o()==0&&c(G)&&(Se(G,c(G).style.width="100%"),Se(G,c(G).src=He),c(G).classList.add("loaded"),Se(G,c(G).style.opacity=1),P(We,true),c(oe)&&xe());}),kr(),wt();var ut=hl(),Gt=_(ut);{var $r=b=>{var T=Ro();A(T,"data-href",x);var z=_(T),X=p(z);U(()=>{A(T,"style",`
      background-color: ${c(y)??"transparent"};
      color: ${$??""}`),A(z,"src",c(L)),A(z,"alt",c(O)),D(X,`    ${c(O)??""}`);}),E(b,T);};Z(Gt,b=>{l().category&&b($r);});}var Vr=p(Gt,2),Yt=_(Vr);{var Tr=b=>{var T=Do(),z=_(T);U(()=>{A(T,"href","/detail/"+s().id),D(z,s().name);}),E(b,T);};Z(Yt,b=>{l().title&&b(Tr);});}var vt=p(Vr,2),Ar=_(vt);{var Hn=b=>{var T=nt(),z=Me(T);{var X=re=>{var ae=Fo(),de=_(ae),ve=_(de);A(ve,"src",ue),U(()=>A(ae,"style",`  background-color: ${c(y)??""}`)),E(re,ae);},S=re=>{var ae=nt(),de=Me(ae);{var ve=K=>{var le=zo();A(le,"data-src",He),tt(le,ee=>P(G,ee),()=>c(G)),U(()=>{A(le,"src",c(We)?He:Ee),A(le,"alt",s().id);}),Y("error",le,()=>{P(W,true),c(G)||console.log(`<${s().index}>[${s().id}] imgElement 丢失.`);}),E(K,le);},Oe=K=>{var le=qo(),ee=_(le),fe=_(ee);A(fe,"src",Oo),E(K,le);};Z(de,K=>{s().imageList[0]?K(ve):K(Oe,false);},true);}E(re,ae);};Z(z,re=>{o()&&s().category==440?re(X):re(S,false);});}E(b,T);},Ir=b=>{var T=Bo(),z=_(T),X=_(z);A(X,"src",Ho);var S=p(z,2);U(re=>A(S,"style",`color: ${re??""}; font-size:16px;`),[()=>Tt(c(y))],Xe),E(b,T);};Z(Ar,b=>{c(W)?b(Ir,false):b(Hn);});}var Ut=p(Ar,2);{var On=b=>{var T=Zo(),z=_(T);U(()=>A(z,"src",Ce().ICON.PREVIEW)),Y("mouseover",T,X=>{P(V,true),te.handleMouseOver(X,c(G));}),E(b,T);};Z(Ut,b=>{v()&&!c(W)&&b(On);});}var Ge=p(Ut,2),Xt=_(Ge),Qt=_(Xt),Pr=_(Qt),jr=_(Pr);{var Hr=b=>{var T=Go(),z=Me(T);ht(z,5,()=>c(f),cr,(X,S)=>{var re=Wo();U(()=>A(re,"src",Ce().ICON.PIN)),E(X,re);}),E(b,T);};Z(jr,b=>{s().status.toppingLevel!="0"&&b(Hr);});}var Jt=p(jr),Rn=p(Jt);{var Dn=b=>{var T=Yo();ur(T,"_tag_discount_free",d=="FREE"),ur(T,"_tag_discount_50",d=="PERCENT_50");var z=_(T);U(X=>D(z,`${m[d]??""}${X??""}`),[()=>g?":"+k()+"小时":""],Xe),E(b,T);};Z(Rn,b=>{d!="NORMAL"&&b(Dn);});}var xt=p(Pr,2),Kt=p(xt,2),Fn=_(Kt),Ct=p(Qt,2);A(Ct,"data-href",x);var Et=_(Ct),Or=p(Et),er=p(Ct,2),tr=_(er),Rr=_(tr),rr=p(er,2),zn=_(rr),qn=_(zn),nr=p(rr,2);{var Dr=b=>{var T=Ko(),z=_(T);{var X=K=>{var le=Uo();E(K,le);};Z(z,K=>{(Number(s().labels)&1)===1&&K(X);});}var S=p(z,2);{var re=K=>{var le=Xo();E(K,le);};Z(S,K=>{(Number(s().labels)&2)===2&&K(re);});}var ae=p(S,2);{var de=K=>{var le=Qo();E(K,le);};Z(ae,K=>{(Number(s().labels)&4)===4&&K(de);});}var ve=p(ae,2);{var Oe=K=>{var le=nt(),ee=Me(le);ht(ee,1,()=>c(M),cr,(fe,ge)=>{var me=Jo(),kt=_(me);U(()=>{A(me,"style",`background-color: ${c(ge).config.bgColor??""}; color: ${c(ge).config.color??""}`),D(kt,c(ge).key);}),E(fe,me);}),E(K,le);};Z(ve,K=>{c(M).length!=0&&K(Oe);});}E(b,T);};Z(nr,b=>{(Number(s().labels)||c(M).length)&&b(Dr);});}var Fr=p(nr,2),Bn=_(Fr),zr=_(Bn),qr=p(Fr,2),Br=_(qr),Zr=_(Br);Ui(Zr);var Wr=p(Zr,2),Gr=_(Wr),Yr=p(Br,2),Ur=_(Yr),Xr=p(Ur,2),Qr=_(Xr),Jr=p(Yr,2),Kr=_(Jr),en=p(Kr,2),tn=_(en),ir=p(Jr,2),rn=_(ir);tt(ir,b=>P(I,b),()=>c(I)),tt(Xt,b=>P(oe,b),()=>c(oe)),tt(Ge,b=>P(ce,b),()=>c(ce));var ar=p(Ge,2);{var nn=b=>{var T=nl(),z=_(T);{var X=de=>{var ve=tl(),Oe=Me(ve);ht(Oe,5,()=>c(f),cr,(K,le)=>{var ee=el();U(()=>A(ee,"src",Ce().ICON.PIN)),E(K,ee);}),E(de,ve);};Z(z,de=>{l().topping&&s().status.toppingLevel!="0"&&de(X);});}var S=p(z),re=p(S);{var ae=de=>{var ve=rl();ur(ve,"_tag_discount_free",d=="FREE"),ur(ve,"_tag_discount_50",d=="PERCENT_50");var Oe=_(ve);U(K=>D(Oe,`${m[d]??""}${K??""}`),[()=>g?":"+k()+"小时":""],Xe),E(de,ve);};Z(re,de=>{l().free&&d!="NORMAL"&&de(ae);});}U(()=>D(S,` ${s().index??""}

          `)),E(b,T);};Z(ar,b=>{c(h)||b(nn);});}var Zn=p(ar,2);{var Wn=b=>{var T=il(),z=_(T);U(X=>{A(T,"style",`background-color: ${c(y)??"transparent"}; color:${$??""}`),D(z,X);},[()=>R(s().size)],Xe),E(b,T);};Z(Zn,b=>{l().size&&!c(h)&&b(Wn);});}var an=p(vt,2);{var sn=b=>{var T=_l(),z=_(T);{var X=ee=>{var fe=al(),ge=_(fe),me=_(ge);U(()=>D(me,s().smallDescr)),E(ee,fe);};Z(z,ee=>{l().sub_title&&ee(X);});}var S=p(z,2);{var re=ee=>{var fe=ul(),ge=_(fe);{var me=pe=>{var Ke=sl();E(pe,Ke);};Z(ge,pe=>{(s().labels&1)===1&&pe(me);});}var kt=p(ge,2);{var on=pe=>{var Ke=ol();E(pe,Ke);};Z(kt,pe=>{(s().labels&2)===2&&pe(on);});}var sr=p(kt,2);{var Gn=pe=>{var Ke=ll();E(pe,Ke);};Z(sr,pe=>{(s().labels&4)===4&&pe(Gn);});}var ln=p(sr,2);{var Yn=pe=>{var Ke=nt(),Oa=Me(Ke);ht(Oa,1,()=>c(M),cr,(Ra,Un)=>{var Xn=cl(),Da=_(Xn);U(()=>{A(Xn,"style",`background-color: ${c(Un).config.bgColor??""}; color: ${c(Un).config.color??""}`),D(Da,c(Un).key);}),E(Ra,Xn);}),E(pe,Ke);};Z(ln,pe=>{c(M).length!=0&&pe(Yn);});}E(ee,fe);};Z(S,ee=>{l().tags&&(Number(s().labels)||c(M).length)&&ee(re);});}var ae=p(S,2);{var de=ee=>{var fe=vl(),ge=_(fe);tt(fe,me=>P(q,me),()=>c(q)),U(()=>A(ge,"style",`
              background-color: ${(c(y)?c(y):"transparent")??""};
              color: ${$??""} ;
              border: 3px solid transparent;
              border-radius: 14px;
              overflow: hidden;
            `)),Y("click",ge,me=>{C(s().id,c(q)),me.target.style.display="none";}),E(ee,fe);};Z(ae,ee=>{l().download_collect&&ee(de);});}var ve=p(ae,2);{var Oe=ee=>{var fe=dl(),ge=_(fe),me=_(ge);U(()=>D(me,`上传时间:${s().createdDate??""}`)),E(ee,fe);};Z(ve,ee=>{l().upload_time&&ee(Oe);});}var K=p(ve,2);{var le=ee=>{var fe=fl(),ge=_(fe);Ui(ge);var me=p(ge,2),kt=_(me),on=p(me,2),sr=p(on,2),Gn=_(sr),ln=p(sr,2),Yn=p(ln,2),pe=_(Yn);U(()=>{D(kt,s().status.comments),A(on,"src",Ce().ICON.SEEDERS),D(Gn,s().status.seeders),A(ln,"src",Ce().ICON.LEECHERS),D(pe,s().status.leechers);}),E(ee,fe);};Z(K,ee=>{l().statistics&&ee(le);});}U(()=>A(T,"style",`
        background-color: ${(c(y)?c(y)+"b0":"transparent")??""};
        color: ${$??""}`)),E(b,T);};Z(an,b=>{(l().sub_title||l().tags||l().download_collect||l().upload_time||l().statistics)&&b(sn);});}tt(ut,b=>P(N,b),()=>c(N)),U(b=>{Fe(ut,"--borderRadius",u().enabled?u().value+"px":"0"),A(vt,"style",`min-height: ${c(we)+24}px;`),Fe(vt,"--cateColor",c(y)+"b0"),D(Jt,` ${s().index??""}

              `),A(xt,"style",`background-color: ${c(y)??"transparent"}; color:${$??""}`),A(Kt,"style",`background-color: ${c(y)??"transparent"}; color:${$??""}`),D(Fn,b),A(Ct,"style",`
            height: 40px;
            background-color: ${c(y)??"transparent"};
            color: ${$??""}`),A(Et,"src",c(L)),A(Et,"alt",c(O)),D(Or,`    ${c(O)??""}`),A(tr,"href","/detail/"+s().id),A(tr,"title",s().name),D(Rr,s().name),D(qn,s().smallDescr),D(zr,`上传时间:${s().createdDate??""}`),D(Gr,s().status.comments),A(Ur,"src",Ce().ICON.SEEDERS),D(Qr,s().status.seeders),A(Kr,"src",Ce().ICON.LEECHERS),D(tn,s().status.leechers),A(ir,"style",`
              background-color: ${(c(y)?c(y):"transparent")??""};
              color: ${$??""} ;
              border-radius: 14px;
              overflow: hidden;
            `);},[()=>R(s().size)],Xe),Y("click",xt,Sr),Y("mousedown",er,Vt(b=>{b.stopPropagation();})),Y("mousedown",rn,Vt(b=>{b.stopPropagation();})),Y("click",rn,Vt(b=>{C(s().id,c(I)),b.target.style.display="none";})),Y("mouseenter",Ge,()=>{c(G)&&Se(G,c(G).style.filter="blur(2px)"),Se(ce,c(ce).style.opacity="1"),P(h,true);}),Y("mousemove",Ge,b=>{P(F,true),c(V)&&c(F)&&te.handleMouseMove(b);}),Y("mouseleave",Ge,()=>{c(G)&&Se(G,c(G).style.filter="none"),Se(ce,c(ce).style.opacity="0"),P(h,false),P(F,false),c(V)&&(P(V,false),te.clearPreview());}),Y("mousedown",Ge,Sa(Sr)),E(e,ut),lt(),n();}var gl=H('<p class="text_center svelte-1vmncc1">没有结果捏</p>'),ml=H('<main><div class="fall_holder svelte-1vmncc1" style=""><!></div></main>');function yl(e,t){var x,$,M,R;ot(t,false);const[r,n]=Wt(),i=()=>se(fr,"$_card_layout",r),a=J();let o=_e(t,"infoList",8),u=J(o().data);c(u).length;let l=J();It.get_bg_color(),Object.keys(c(u)).forEach((I,q)=>{Se(u,c(u)[I].index=q+1);}),console.log("Mteam_Fall:First	"+c(u).length);function v(I,q=true){let C=I.data;console.log("Mteam_Fall:New:	"+C.length),q?(s(),Object.keys(C).forEach((V,F)=>{C[V].index=F+1,F==0&&(C[V].pt_fall_highlight=true);}),P(u,[...C])):(Object.keys(C).forEach((V,F)=>{C[V].index=F+1+c(u).length,F==0&&(C[V].pt_fall_highlight=true);}),P(u,[...c(u),...C]));}function s(){P(u,[]);}function h(I,q){q=="top"&&I.scrollIntoView({behavior:"smooth"}),q=="bottom"&&(I.scrollIntoView({behavior:"auto",block:"end",inline:"nearest"}),I.scrollIntoView({behavior:"auto",block:"end",inline:"nearest"}),I.scrollIntoView({behavior:"auto",block:"end",inline:"nearest"}));}function f(I="top"){h(c(l),I);}let d,g,m;try{d=hr(localStorage.getItem("persist:persist")),g=($=(x=d.sysinfo)==null?void 0:x.sysConf)==null?void 0:$.TORRENT_LABEL_CONFIG,m=(R=(M=d.sysinfo)==null?void 0:M.categoryList)==null?void 0:R.categorys,g&&ye(Pa,g),m&&ye(ja,m);}catch(I){console.error(I),console.log(d);}mt(()=>c(u),()=>{P(a,[...c(u)]);}),kr(),wt();var k=ml(),N=_(k),y=_(N);{var w=I=>{xo(I,{animate:true,get items(){return c(a)},get minColWidth(){return i().min},get maxColWidth(){return i().max},get gap(){return i().gap},children:Ss,$$slots:{default:(q,C)=>{const V=Xe(()=>C.item);pl(q,{get torrentInfo(){return c(V)}});}}});},O=I=>{var q=gl();E(I,q);};Z(y,I=>{c(a).length?I(w):I(O,false);});}tt(k,I=>P(l,I),()=>c(l)),E(e,k),ti(t,"updateList",v),ti(t,"clearList",s),ti(t,"focusFall",f);var L=lt({updateList:v,clearList:s,focusFall:f});return n(),L}let bl="0.3.8";var wl=Zt('<svg class="tgme_logo" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle cx="17" cy="17" fill="#40a9ff" r="17"></circle><path d="m7.06510669 16.9258959c5.22739451-2.1065178 8.71314291-3.4952633 10.45724521-4.1662364 4.9797665-1.9157646 6.0145193-2.2485535 6.6889567-2.2595423.1483363-.0024169.480005.0315855.6948461.192827.1814076.1361492.23132.3200675.2552048.4491519.0238847.1290844.0536269.4231419.0299841.65291-.2698553 2.6225356-1.4375148 8.986738-2.0315537 11.9240228-.2513602 1.2428753-.7499132 1.5088847-1.2290685 1.5496672-1.0413153.0886298-1.8284257-.4857912-2.8369905-1.0972863-1.5782048-.9568691-2.5327083-1.3984317-4.0646293-2.3321592-1.7703998-1.0790837-.212559-1.583655.7963867-2.5529189.2640459-.2536609 4.7753906-4.3097041 4.755976-4.431706-.0070494-.0442984-.1409018-.481649-.2457499-.5678447-.104848-.0861957-.2595946-.0567202-.3712641-.033278-.1582881.0332286-2.6794907 1.5745492-7.5636077 4.6239616-.715635.4545193-1.3638349.6759763-1.9445998.6643712-.64024672-.0127938-1.87182452-.334829-2.78737602-.6100966-1.12296117-.3376271-1.53748501-.4966332-1.45976769-1.0700283.04048-.2986597.32581586-.610598.8560076-.935815z" fill="#fff"></path></g></svg>');function xl(e,t){let r=_e(t,"height",8,34),n=_e(t,"width",8,34);var i=wl();U(()=>{A(i,"height",r()),A(i,"width",n());}),E(e,i);}var Cl=H('<div class="modal-overlay svelte-1a87xm5" role="button" aria-hidden="true"><div class="modal-content svelte-1a87xm5" role="button" aria-hidden="true"><div class="modal-header svelte-1a87xm5"><h3 class="svelte-1a87xm5">关于 PT-Fall</h3> <button class="close-btn svelte-1a87xm5">&times;</button></div> <div class="modal-body svelte-1a87xm5"><h4 class="svelte-1a87xm5">PT-Fall 是一个专为 M-team 站点量身定制的瀑布流视图插件</h4> <p class="svelte-1a87xm5">Github: <a href="https://github.com/KesaubeEire/PT_Fall-View" target="_blank">https://github.com/KesaubeEire/PT_Fall-View</a></p> <p class="svelte-1a87xm5">GreaseFork: <a href="https://greasyfork.org/zh-CN/scripts/543925" target="_blank">https://greasyfork.org/zh-CN/scripts/543925</a></p></div></div></div>'),El=H('<div class="modal-overlay svelte-1a87xm5" role="button" aria-hidden="true"><div class="modal-content svelte-1a87xm5" role="button" aria-hidden="true"><div class="modal-header svelte-1a87xm5"><h3 class="svelte-1a87xm5">FAQ - 常见问题</h3> <button class="close-btn svelte-1a87xm5">&times;</button></div> <div class="modal-body svelte-1a87xm5"><h4 class="svelte-1a87xm5">Q: 如何联系反馈问题</h4> <p class="svelte-1a87xm5"><a class="__btn __btnWide svelte-1a87xm5" href="https://t.me/+Nd_qIisDjQ80ZTc9" target="_blank"><!> &nbsp;Telegram</a></p> <h4 class="svelte-1a87xm5">Q: 找不到悬浮框</h4> <button class="__btn svelte-1a87xm5">重置悬浮框位置</button> <p class="svelte-1a87xm5"><br>可以通过拖拽悬浮框顶部的颜色条来移动悬浮框的位置 <br>从 PTPP 那里来的灵感 ( 感恩 ||T|| 佬 )</p> <h4 class="svelte-1a87xm5">Q: 插件没有生效怎么办</h4> <p class="svelte-1a87xm5">可能是浏览器缓存了请求<br>尝试使用 Ctrl+Shift+R / Ctrl+F5 强制刷新页面</p> <h4 class="svelte-1a87xm5">Q: 如何切换瀑布流视图</h4> <p class="svelte-1a87xm5">点击悬浮面板中的第一个图标(瀑布/列表)按钮<br>即可在瀑布流和原列表视图间切换</p> <h4 class="svelte-1a87xm5">Q: 如何调整卡片布局</h4> <p class="svelte-1a87xm5">点击悬浮面板中的"配置"按钮<br>可以调整卡片的最小 / 最大宽度、间隔等参数</p> <h4 class="svelte-1a87xm5">Q: 快捷键</h4> <p class="svelte-1a87xm5"><span class="modal-code svelte-1a87xm5">x</span> 可以切换瀑布流视图</p> <p class="svelte-1a87xm5"><span class="modal-code svelte-1a87xm5">ESC</span> 可以从 次级菜单 / 配置菜单 / iframe 中退出</p> <h4 class="svelte-1a87xm5">Q: 深色模式颜色有些不对劲怎么办?</h4> <p class="svelte-1a87xm5">先刷新一下试试, 有些字体颜色不能即时更改<br>刷新后就可以了<br>还有颜色不对劲的 telegram 上截图告诉我</p></div></div></div>'),kl=H('<div class="entry_mteam"><div class="ant-typography" style="line-height: 1.5; text-align: center;"><button class="__btn svelte-1a87xm5" id="_ptFall_about">PT-Fall<br><span style="font-weight: 600;"></span></button> <button class="__btn svelte-1a87xm5" id="_ptFall_faq">常见问题<br>FAQ</button></div></div> <!> <!>',1);function Ll(e,t){ot(t,false);const[r,n]=Wt(),i=()=>se(pr,"$_isFallView",r),a=()=>se(St,"$_textColor",r);let o=J(false),u=J(false);function l(){P(o,true);}function v(){P(o,false);}function s(){P(u,true);}function h(){P(u,false);}let f=J();mt(()=>i(),()=>{P(f,i()?"#4ff74f":"yellow");}),kr(),wt();var d=kl();Y("keydown",gr,$=>{$.key==="Escape"&&(v(),h());},true);var g=Me(d),m=_(g),k=_(m),N=p(_(k),2);N.textContent=`[v${bl}]`;var y=p(k,2),w=p(g,2);{var O=$=>{var M=Cl(),R=_(M),I=_(R),q=p(_(I),2);U(()=>A(R,"style",`color: ${a().t3}`)),Y("click",q,h),Y("click",R,Vt(function(C){Bi.call(this,t,C);})),Ht(3,M,()=>Ot,()=>({duration:200})),Y("click",M,h),E($,M);};Z(w,$=>{c(u)&&$(O);});}var L=p(w,2);{var x=$=>{var M=El(),R=_(M),I=_(R),q=p(_(I),2),C=p(I,2),V=p(_(C),2),F=_(V),te=_(F);xl(te,{height:24,width:24});var ce=p(V,4),oe=p(ce,18),we=_(oe),xe=p(oe,2),W=_(xe);U(()=>{A(R,"style",`color: ${a().t3}`),A(F,"style",`color: ${a().t2}`),Fe(F,"--hover","#40a9ff"),A(ce,"style",`color: ${a().t2}`),Fe(ce,"--hover","#40a9ff"),A(we,"style",`color: ${a().t1}`),A(W,"style",`color: ${a().t1}`);}),Y("click",q,v),Y("click",ce,()=>{ye(di,{x:0,y:0});}),Y("click",R,Vt(function(ue){Bi.call(this,t,ue);})),Ht(3,M,()=>Ot,()=>({duration:200})),Y("click",M,v),E($,M);};Z(L,$=>{c(o)&&$(x);});}U(()=>{A(k,"style",`color: ${a().t2}`),Fe(k,"--hover","green"),Fe(N,"color",c(f)),A(y,"style",`color: ${a().t2}`),Fe(y,"--hover","#40a9ff");}),Y("click",k,s),Y("click",y,l),E(e,d),lt(),n();}function Ml(e,t){ot(t,false);const[r,n]=Wt(),i=()=>se(pr,"$_isFallView",r),a=()=>se(St,"$_textColor",r);let o,u,l,v=true,s=false,h=getComputedStyle(document.documentElement).getPropertyValue("--bg-2").trim(),f;const d=J(document.createElement("div"));c(d).classList.add("Fall_DOM"),dt(It.TL_Selector,y),dt('a[href="/index"][target="_self"]',C=>{if(o)At.error("未找到目标链接元素"),console.warn("[FALL]: 未找到目标链接元素");else {C.insertAdjacentHTML("afterend",'<div class="ptFallReadme"></div>');const V=C.parentNode.querySelector(".ptFallReadme");o=wr(Ll,{target:V});}}),jn(()=>{q(),console.log("=====> 启动劫持 pushState 方法 <====="),R(),f=new MutationObserver(()=>{const C=getComputedStyle(document.documentElement).getPropertyValue("--bg-2").trim();C!==h&&(h=C,console.log("--bg-2 变化:",h),q());}),f.observe(document.documentElement,{attributes:true,attributeFilter:["style","class","data-theme"]});}),Ta(()=>{f&&f.disconnect(),N();});let g=J(),m=J();function k(){dt(".ant-pagination",C=>{C&&C.parentNode&&C.parentNode!==c(d)&&P(m,C.parentNode),C&&(P(g,C),i()&&c(d).appendChild(c(g)));});}function N(){c(g)&&c(g).parentNode&&c(g).parentNode.removeChild(c(g));}function y(C){if(C.parentNode){console.log("元素已找到，正在插入兄弟节点:",C),fo();const V={path:"/search",method:"POST"};window.addEventListener("req>POST->/search",F=>{console.log(`<PT-Fall>[Request]  (${V.method} -> ${V.path})
`,F.detail),F.detail.url.includes("api/torrent/search")&&!F.detail.body.includes('"mode":"waterfall"')?s=true:s=false,v=true,v?u&&u.focusFall():u&&u.focusFall("bottom"),N();}),window.addEventListener("res>POST->/search",F=>{const te=JSON.parse(F.detail.data);if(!s){console.warn(`<PT-Fall>[未被接受的Response] (${V.method}->${V.path})[通过事件捕获]:
`,te);return}console.log(`<PT-Fall>[Response] (${V.method}->${V.path})[通过事件捕获]:
`,te),$(i()),w(C),At.success("捕获到 /search !"),l=te.data,u?u.updateList(l,v):u=wr(yl,{target:c(d),props:{infoList:l}}),k();});}else At.error(`找不到指定节点
若总是如此请报告bug`),console.error("无法插入：目标元素没有父节点");}function w(C){const V=C.parentNode.querySelector(".ant-spin-nested-loading"),F=document.createElement("div");F.id="_shield",F.addEventListener("click",()=>{confirm(`[PT-Fall]
如果你认为你被阻挡了请点击确认
这个阻挡效果会被取消
这可能导致显示错误
请确认您不在一般的瀑布流视图下
比如您在逛论坛或者在发种之类的被遮挡了再点`)&&(F.style.display="none");}),V.querySelector("#_shield")||V.appendChild(F);const te=document.createElement("div");te.id="_fallHolder",V.querySelector("#_fallHolder")||(V.appendChild(te),te.appendChild(c(d)));}let O="",L="",x="";function $(C){Se(d,c(d).style.display=C?"block":"none"),dt("#_fallHolder",V=>{V.style.display=C?"block":"none";}),dt("#_shield",V=>{V.style.display=C?"block":"none";}),dt(It.TL_Selector+".flex",V=>{L||(L=getComputedStyle(V).getPropertyValue("max-width"),x=getComputedStyle(V).getPropertyValue("padding-left")),V.style.maxWidth=C?"none":L,V.style.paddingLeft=C?"80px":x,V.style.paddingRight=C?"80px":x;}),dt(It.TL_Selector+" .mx-auto",V=>{O||(O=V.style.margin),V.style.margin=C?0:O;});}window.changeFallView=$;const M=history.pushState;function R(){history.pushState=function(C,V,F){console.log(`%c ====> URL跳转劫持: %c${F}`,"color: cyan","color: white"),F.includes("/browse")||F=="/waterfall"?console.log(`--->属于 browse 范围: ${F}`):(console.warn(`[FALL]: --->不属于 browse 范围: ${F}`),$(false)),M.apply(history,arguments);};}function I(C){return getComputedStyle(document.documentElement).getPropertyValue(C).trim()}function q(){he(St,j(a).t1=Tt(I("--bg-1")),j(a)),he(St,j(a).t2=Tt(I("--bg-2")),j(a)),he(St,j(a).t3=Tt(I("--bg-3")),j(a));}mt(()=>(c(d),i(),c(g),c(m)),()=>{c(d)&&(i()&&c(g)&&c(d).appendChild(c(g)),!i()&&c(g)&&c(m)&&c(m).appendChild(c(g)));}),kr(),wt(),lt(),n();}function Xi(e){if(location.hostname.includes("m-team"))return It}var Nl=H('<div class="switch-container svelte-18ntgfp"><div class="switch-background svelte-18ntgfp"><div class="switch-slider svelte-18ntgfp"></div></div></div>');function Ne(e,t){let r=_e(t,"checked",12,false);function n(){r(!r());}var i=Nl(),a=_(i),o=_(a);U(()=>ur(o,"checked",r())),Y("click",i,n),E(e,i);}var Sl=Zt(`<svg viewBox="0 0 32 32" width="20" height="20" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><defs><style>.cls-1 {
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2px;
      }</style></defs><g data-name="43-browser" id="_43-browser"><rect class="cls-1" height="30" width="30" x="1" y="1"></rect><line class="cls-1" x1="1" x2="31" y1="9" y2="9"></line><line class="cls-1" x1="5" x2="7" y1="5" y2="5"></line><line class="cls-1" x1="11" x2="13" y1="5" y2="5"></line><line class="cls-1" x1="9" x2="25" y1="16" y2="16"></line><line class="cls-1" x1="7" x2="25" y1="20" y2="20"></line><line class="cls-1" x1="7" x2="25" y1="24" y2="24"></line></g></svg>`);function $l(e){var t=Sl();E(e,t);}var Vl=Zt(`<svg width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><defs><style>.cls-1 {
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2px;
      }</style></defs><g data-name="80-setting" id="_80-setting"><circle class="cls-1" cx="10" cy="6" r="3"></circle><circle class="cls-1" cx="22" cy="16" r="3"></circle><circle class="cls-1" cx="10" cy="26" r="3"></circle><line class="cls-1" x1="7" x2="1" y1="6" y2="6"></line><line class="cls-1" x1="15" x2="1" y1="16" y2="16"></line><line class="cls-1" x1="7" x2="1" y1="26" y2="26"></line><line class="cls-1" x1="31" x2="17" y1="26" y2="26"></line><line class="cls-1" x1="31" x2="25" y1="16" y2="16"></line><line class="cls-1" x1="31" x2="17" y1="6" y2="6"></line></g></svg>`);function Tl(e){var t=Vl();E(e,t);}var Al=Zt('<svg enable-background="new 0 0 64 64" width="20" height="20" id="Layer_1" version="1.1" viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19,2.875H3.5c-0.829,0-1.5,0.671-1.5,1.5v19.979c0,0.829,0.671,1.5,1.5,1.5H19c0.829,0,1.5-0.671,1.5-1.5V4.375  C20.5,3.546,19.829,2.875,19,2.875z M17.5,22.854H5V5.875h12.5V22.854z"></path><path d="M19,28.773H3.5c-0.829,0-1.5,0.671-1.5,1.5v6.166c0,0.828,0.671,1.5,1.5,1.5H19c0.829,0,1.5-0.672,1.5-1.5v-6.166  C20.5,29.445,19.829,28.773,19,28.773z M17.5,34.939H5v-3.166h12.5V34.939z"></path><path d="M19,40.859H3.5c-0.829,0-1.5,0.672-1.5,1.5v17.266c0,0.828,0.671,1.5,1.5,1.5H19c0.829,0,1.5-0.672,1.5-1.5V42.359  C20.5,41.531,19.829,40.859,19,40.859z M17.5,58.125H5V43.859h12.5V58.125z"></path><path d="M40,2.875H24.5c-0.829,0-1.5,0.671-1.5,1.5v14.25c0,0.829,0.671,1.5,1.5,1.5H40c0.828,0,1.5-0.671,1.5-1.5V4.375  C41.5,3.546,40.828,2.875,40,2.875z M38.5,17.125H26V5.875h12.5V17.125z"></path><path d="M40,23.125H24.5c-0.829,0-1.5,0.671-1.5,1.5V46.5c0,0.828,0.671,1.5,1.5,1.5H40c0.828,0,1.5-0.672,1.5-1.5V24.625  C41.5,23.796,40.828,23.125,40,23.125z M38.5,45H26V26.125h12.5V45z"></path><path d="M40,51H24.5c-0.829,0-1.5,0.672-1.5,1.5v7.125c0,0.828,0.671,1.5,1.5,1.5H40c0.828,0,1.5-0.672,1.5-1.5V52.5  C41.5,51.672,40.828,51,40,51z M38.5,58.125H26V54h12.5V58.125z"></path><path d="M60.5,2.875H45c-0.828,0-1.5,0.671-1.5,1.5v35.171c0,0.828,0.672,1.5,1.5,1.5h15.5c0.828,0,1.5-0.672,1.5-1.5V4.375  C62,3.546,61.328,2.875,60.5,2.875z M59,38.046H46.5V5.875H59V38.046z"></path><path d="M60.5,44.346H45c-0.828,0-1.5,0.672-1.5,1.5v13.779c0,0.828,0.672,1.5,1.5,1.5h15.5c0.828,0,1.5-0.672,1.5-1.5V45.846  C62,45.018,61.328,44.346,60.5,44.346z M59,58.125H46.5V47.346H59V58.125z"></path></svg>');function Il(e){var t=Al();E(e,t);}var Pl=H('<div><!></div> <div class="flowBtn_text svelte-1gujon8">瀑布</div>',1),jl=H('<div><!></div> <div class="flowBtn_text svelte-1gujon8">列表</div>',1),Hl=H('<div class="config-item svelte-1gujon8"><span> </span> <input type="range" min="0" max="40" step="1" class="svelte-1gujon8"></div>'),Ol=H('<div class="config-menu-overlay svelte-1gujon8"><div class="config-menu svelte-1gujon8"><div class="config-menu-header svelte-1gujon8"><span style="font-size: 18px; font-weight: bold;">配置菜单</span> <button class="close-btn svelte-1gujon8">&times;</button></div> <div class="config-menu-content svelte-1gujon8"><h3 class="svelte-1gujon8"># 卡片布局</h3> <div class="config-item svelte-1gujon8"><span> </span> <input type="range" min="200" step="1" list="values" class="svelte-1gujon8"></div> <div class="config-item svelte-1gujon8"><span> </span> <input type="range" step="1" list="values" class="svelte-1gujon8"></div> <div class="config-item svelte-1gujon8"><span> </span> <input type="range" min="0" max="100" step="1" list="values" class="svelte-1gujon8"></div> <div class="config-item svelte-1gujon8"><span> </span> <!></div> <h3 class="svelte-1gujon8"># 卡片常驻信息展示</h3>  <div class="config-item svelte-1gujon8"><span> </span> <!></div> <div class="config-item svelte-1gujon8"><span> </span> <!></div> <div class="config-item svelte-1gujon8"><span> </span> <!></div> <div class="config-item svelte-1gujon8"><span> </span> <!></div> <div class="config-item svelte-1gujon8"><span> </span> <!></div> <div class="config-item svelte-1gujon8"><span> </span> <!></div> <div class="config-item svelte-1gujon8"><span> </span> <!></div> <div class="config-item svelte-1gujon8"><span> </span> <!></div> <div class="config-item svelte-1gujon8"><span> </span> <!></div> <div class="config-item svelte-1gujon8"><span> </span> <!></div> <h3 class="svelte-1gujon8"># 卡片屏蔽</h3> <div class="config-item svelte-1gujon8"><span> </span> <!></div> <h3 class="svelte-1gujon8"># 卡片样式</h3> <div class="config-item svelte-1gujon8"><span> </span> <!></div> <!></div></div></div>'),Rl=H('<div class="flowP svelte-1gujon8"><div class="flowPDragger svelte-1gujon8" role="button" tabindex="0" aria-hidden="true"><!></div> <div class="flowPHolder ant-typography svelte-1gujon8"><button class="flowBtn svelte-1gujon8"><!></button> <button class="flowBtn svelte-1gujon8"><div><!></div> <div class="flowBtn_text svelte-1gujon8">配置</div></button> <button class="flowBtn svelte-1gujon8">清除悬浮预览图</button></div></div> <!>',1);function Dl(e,t){ot(t,false);const[r,n]=Wt(),i=()=>se(di,"$_panelPos",r),a=()=>se(pr,"$_isFallView",r),o=()=>se(St,"$_textColor",r),u=()=>se(dr,"$_side_panel_switch",r),l=()=>se(fr,"$_card_layout",r),v=()=>se(fi,"$_show_hover_pic",r),s=()=>se(Ae,"$_card_detail",r),h=()=>se(_i,"$_block_gay",r),f=()=>se(_n,"$_card_radius",r);let d=J(),g=false,m=0,k=0;function N(W,ue,Ee){return W<=ue&&(W=ue),W>=Ee&&(W=Ee),W}const y=W=>{W.preventDefault(),g=true,m=W.clientX-c(d).getBoundingClientRect().left,k=W.clientY-c(d).getBoundingClientRect().top;},w=W=>{if(!g)return;const ue=N(W.clientX-m,0,window.innerWidth-(c(d).getBoundingClientRect().width+5)),Ee=N(W.clientY-k,0,window.innerHeight-(c(d).getBoundingClientRect().height+5));ye(di,{x:ue,y:Ee});},O=()=>{g=false;};jn(()=>(window.addEventListener("mousemove",w),window.addEventListener("mouseup",O),()=>{window.removeEventListener("mousemove",w),window.removeEventListener("mouseup",O);})),wt();var L=Rl();Y("keydown",gr,W=>{W.key==="x"&&(ye(pr,!a()),window.changeFallView(a()));},true);var x=Me(L),$=_(x),M=_($);Z(M,W=>{});var R=p($,2),I=_(R),q=_(I);{var C=W=>{var ue=Pl(),Ee=Me(ue),He=_(Ee);Il(He),E(W,ue);},V=W=>{var ue=jl(),Ee=Me(ue),He=_(Ee);$l(He),E(W,ue);};Z(q,W=>{a()?W(C):W(V,false);});}var F=p(I,2),te=_(F),ce=_(te);Tl(ce);var oe=p(F,2);tt(x,W=>P(d,W),()=>c(d));var we=p(x,2);{var xe=W=>{var ue=Ol(),Ee=_(ue),He=_(Ee),G=p(_(He),2),ct=p(He,2),We=p(_(ct),2),Nr=_(We),Sr=_(Nr),ut=p(Nr,2),Gt=p(We,2),$r=_(Gt),Vr=_($r),Yt=p($r,2),Tr=p(Gt,2),vt=_(Tr),Ar=_(vt),Hn=p(vt,2),Ir=p(Tr,2),Ut=_(Ir),On=_(Ut),Ge=p(Ut,2);Ne(Ge,{get checked(){return Zi(),v()},set checked(S){ye(fi,S);},$$legacy:true});var Xt=p(Ir,4),Qt=_(Xt),Pr=_(Qt),jr=p(Qt,2);Ne(jr,{get checked(){return s().category},set checked(S){he(Ae,j(s).category=S,j(s));},$$legacy:true});var Hr=p(Xt,2),Jt=_(Hr),Rn=_(Jt),Dn=p(Jt,2);Ne(Dn,{get checked(){return s().title},set checked(S){he(Ae,j(s).title=S,j(s));},$$legacy:true});var xt=p(Hr,2),Kt=_(xt),Fn=_(Kt),Ct=p(Kt,2);Ne(Ct,{get checked(){return s().topping},set checked(S){he(Ae,j(s).topping=S,j(s));},$$legacy:true});var Et=p(xt,2),Or=_(Et),er=_(Or),tr=p(Or,2);Ne(tr,{get checked(){return s().free},set checked(S){he(Ae,j(s).free=S,j(s));},$$legacy:true});var Rr=p(Et,2),rr=_(Rr),zn=_(rr),qn=p(rr,2);Ne(qn,{get checked(){return s().size},set checked(S){he(Ae,j(s).size=S,j(s));},$$legacy:true});var nr=p(Rr,2),Dr=_(nr),Fr=_(Dr),Bn=p(Dr,2);Ne(Bn,{get checked(){return s().sub_title},set checked(S){he(Ae,j(s).sub_title=S,j(s));},$$legacy:true});var zr=p(nr,2),qr=_(zr),Br=_(qr),Zr=p(qr,2);Ne(Zr,{get checked(){return s().tags},set checked(S){he(Ae,j(s).tags=S,j(s));},$$legacy:true});var Wr=p(zr,2),Gr=_(Wr),Yr=_(Gr),Ur=p(Gr,2);Ne(Ur,{get checked(){return s().download_collect},set checked(S){he(Ae,j(s).download_collect=S,j(s));},$$legacy:true});var Xr=p(Wr,2),Qr=_(Xr),Jr=_(Qr),Kr=p(Qr,2);Ne(Kr,{get checked(){return s().upload_time},set checked(S){he(Ae,j(s).upload_time=S,j(s));},$$legacy:true});var en=p(Xr,2),tn=_(en),ir=_(tn),rn=p(tn,2);Ne(rn,{get checked(){return s().statistics},set checked(S){he(Ae,j(s).statistics=S,j(s));},$$legacy:true});var ar=p(en,4),nn=_(ar),Zn=_(nn),Wn=p(nn,2);Ne(Wn,{get checked(){return Zi(),h()},set checked(S){ye(_i,S);},$$legacy:true});var an=p(ar,4),sn=_(an),b=_(sn),T=p(sn,2);Ne(T,{get checked(){return f().enabled},set checked(S){he(_n,j(f).enabled=S,j(f));},$$legacy:true});var z=p(an,2);{var X=S=>{var re=Hl(),ae=_(re),de=_(ae),ve=p(ae,2);U(()=>D(de,`圆角大小: ${f().value??""} px`)),un(ve,()=>f().value,Oe=>he(_n,j(f).value=Oe,j(f))),E(S,re);};Z(z,S=>{f().enabled&&S(X);});}U((S,re,ae,de,ve)=>{Fe(ue,"--get-text-color",S),A(Ee,"style",`background-color: ${re??""};`),D(Sr,`最小宽度: ${l().min??""} px`),A(ut,"max",ae),D(Vr,`最大宽度: ${l().max??""} px`),A(Yt,"min",de),A(Yt,"max",ve),D(Ar,`卡片间隔: ${l().gap??""} px`),D(On,`显示鼠标悬浮预览大图: ${v()??""}`),D(Pr,`分区: ${s().category??""}`),D(Rn,`标题: ${s().title??""}`),D(Fn,`置顶: ${s().topping??""}`),D(er,`免费: ${s().free??""}`),D(zn,`大小: ${s().size??""}`),D(Fr,`副标题: ${s().sub_title??""}`),D(Br,`标签: ${s().tags??""}`),D(Yr,`下载&收藏: ${s().download_collect??""}`),D(Jr,`上传时间: ${s().upload_time??""}`),D(ir,`评论/上传/下载: ${s().statistics??""}`),D(Zn,`屏蔽 gay 区: ${h()??""}`),D(b,`自定义圆角: ${f().enabled??""}`);},[()=>Tt(Xi().get_bg_color()),()=>Xi().get_bg_color(),()=>Math.max(400,l().max),()=>Math.min(200,l().min),()=>Math.max(800,l().min*2)],Xe),Y("click",G,()=>ye(dr,false)),un(ut,()=>l().min,S=>he(fr,j(l).min=S,j(l))),un(Yt,()=>l().max,S=>he(fr,j(l).max=S,j(l))),un(Hn,()=>l().gap,S=>he(fr,j(l).gap=S,j(l))),Ht(3,ue,()=>Ot,()=>({duration:100})),Y("click",ue,Sa(()=>ye(dr,false))),E(W,ue);};Z(we,W=>{u()&&W(xe);});}U(()=>{A(x,"style",`top:${i().y??""}px; left:${i().x??""}px;`),Fe(x,"--isFallView",a()?"#4ff74f":"yellow"),Fe(R,"--get-text-color",o().t2);}),Y("mousedown",$,y),Y("click",I,()=>{ye(pr,!a()),window.changeFallView(a());}),Y("click",F,()=>{ye(dr,!u());}),Y("click",oe,()=>{window.__clearPreview();}),E(e,L),lt(),n();}var Fl=Zt('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_iconCarrier"><circle cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="1.5"></circle><path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path></g></svg>');function zl(e){var t=Fl();E(e,t);}var ql=H('<div id="_iframe" class="svelte-1axpxde"><div class="_iframe svelte-1axpxde"><iframe frameborder="0" style="width: 1000px;" class="svelte-1axpxde"></iframe> <div class="_iframeCloseBtn svelte-1axpxde"><!></div></div></div>');function Bl(e,t){ot(t,false);const[r,n]=Wt(),i=()=>se(fn,"$_iframe_switch",r),a=()=>se(Ia,"$_iframe_url",r);let o=_e(t,"_app",8),u;function l(){ye(fn,0);}function v(d){d.key==="Escape"&&(console.log(d),ye(fn,0),ye(dr,false));}u=true,u&&wr(Ml,{target:o()}),wr(Dl,{target:o()}),console.log("-------------->  PT_Fall Launch   <--------------"),wt();var s=nt();Y("keydown",gr,v,true);var h=Me(s);{var f=d=>{var g=ql(),m=_(g),k=_(m),N=p(k,2),y=_(N);zl(y),U(()=>{A(k,"src",a()),A(k,"title",a());}),Y("load",k,w=>{const O=w.target.contentDocument||w.target.contentWindow.document;if(!O){console.error("无法访问iframe内容文档, 可能是由于跨域限制。"),At.error("无法访问iframe内容文档, 可能是由于跨域限制。");return}const L=()=>{const $=O.querySelector(".ant-card.detail-view");$&&($.scrollIntoView({behavior:"smooth"}),console.log("成功滚动到目标元素！"),clearInterval(x));},x=setInterval(L,500);L();}),Y("click",k,Vt(w=>{w.stopPropagation();})),Y("click",N,l),Y("click",g,l),Ht(3,g,()=>Ot,()=>({duration:300})),E(d,g);};Z(h,d=>{i()&&d(f);});}E(e,s),lt(),n();}const hi=document.createElement("div");document.body.append(hi);wr(Bl,{target:hi,props:{_app:hi}});

})();