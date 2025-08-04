// ==UserScript==
// @name            PT瀑布流视图
// @name:en         PT_Fall-View
// @namespace       vite-plugin-monkey
// @version         0.3.9
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

      var Ba=Object.defineProperty;var Ii=e=>{throw TypeError(e)};var Za=(e,t,r)=>t in e?Ba(e,t,{enumerable:true,configurable:true,writable:true,value:r}):e[t]=r;var ti=(e,t,r)=>Za(e,typeof t!="symbol"?t+"":t,r),ri=(e,t,r)=>t.has(e)||Ii("Cannot "+r);var Ge=(e,t,r)=>(ri(e,t,"read from private field"),r?r.call(e):t.get(e)),fr=(e,t,r)=>t.has(e)?Ii("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),ni=(e,t,r,n)=>(ri(e,t,"write to private field"),t.set(e,r),r),Pi=(e,t,r)=>(ri(e,t,"access private method"),r);var kn=Array.isArray,Wa=Array.prototype.indexOf,xi=Array.from,ta=Object.defineProperty,gt=Object.getOwnPropertyDescriptor,ra=Object.getOwnPropertyDescriptors,Ga=Object.prototype,Ya=Array.prototype,Ci=Object.getPrototypeOf;function Ua(e){return typeof e=="function"}const Re=()=>{};function Xa(e){return e()}function li(e){for(var t=0;t<e.length;t++)e[t]();}const Ae=2,na=4,Sr=8,Ln=16,Ze=32,qt=64,_n=128,bt=256,hn=512,xe=1024,st=2048,wt=4096,ze=8192,Bt=16384,ia=32768,Mn=65536,Qa=1<<17,Ja=1<<19,aa=1<<20,mt=Symbol("$state"),Ka=Symbol("legacy props"),es=Symbol("");function sa(e){return e===this.v}function oa(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Ei(e){return !oa(e,this.v)}function ts(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function rs(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ns(e){throw new Error("https://svelte.dev/e/effect_orphan")}function is(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function as(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function ss(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function os(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ls(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function cs(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let Zt=false;function us(){Zt=true;}const ki=1,Li=2,la=4,vs=8,ds=16,fs=1,_s=2,hs=4,ps=8,gs=16,ms=1,ys=2,bs=4,ws=1,xs=2,Me=Symbol();function Te(e,t){var r={f:0,v:e,reactions:null,equals:sa,rv:0,wv:0};return r}function Nn(e,t=false){var n;const r=Te(e);return t||(r.equals=Ei),Zt&&ne!==null&&ne.l!==null&&((n=ne.l).s??(n.s=[])).push(r),r}function te(e,t=false){return Cs(Nn(e,t))}function Cs(e){return ie!==null&&!Qe&&ie.f&Ae&&(qe===null?As([e]):qe.push(e)),e}function Se(e,t){return P(e,H(()=>c(e))),t}function P(e,t){return ie!==null&&!Qe&&Ir()&&ie.f&(Ae|Ln)&&(qe===null||!qe.includes(e))&&cs(),ci(e,t)}function ci(e,t){return e.equals(t)||(e.v,e.v=t,e.wv=ka(),ca(e,st),Ir()&&ee!==null&&ee.f&xe&&!(ee.f&(Ze|qt))&&(Ye===null?Is([e]):Ye.push(e))),t}function ca(e,t){var r=e.reactions;if(r!==null)for(var n=Ir(),i=r.length,a=0;a<i;a++){var s=r[a],v=s.f;v&st||!n&&s===ee||(He(s,t),v&(xe|bt)&&(v&Ae?ca(s,wt):An(s)));}}let ua=false;function St(e,t=null,r){if(typeof e!="object"||e===null||mt in e)return e;const n=Ci(e);if(n!==Ga&&n!==Ya)return e;var i=new Map,a=kn(e),s=Te(0);a&&i.set("length",Te(e.length));var v;return new Proxy(e,{defineProperty(l,d,o){(!("value"in o)||o.configurable===false||o.enumerable===false||o.writable===false)&&ss();var u=i.get(d);return u===undefined?(u=Te(o.value),i.set(d,u)):P(u,St(o.value,v)),true},deleteProperty(l,d){var o=i.get(d);if(o===undefined)d in l&&i.set(d,Te(Me));else {if(a&&typeof d=="string"){var u=i.get("length"),_=Number(d);Number.isInteger(_)&&_<u.v&&P(u,_);}P(o,Me),ji(s);}return  true},get(l,d,o){var g;if(d===mt)return e;var u=i.get(d),_=d in l;if(u===undefined&&(!_||(g=gt(l,d))!=null&&g.writable)&&(u=Te(St(_?l[d]:Me,v)),i.set(d,u)),u!==undefined){var f=c(u);return f===Me?undefined:f}return Reflect.get(l,d,o)},getOwnPropertyDescriptor(l,d){var o=Reflect.getOwnPropertyDescriptor(l,d);if(o&&"value"in o){var u=i.get(d);u&&(o.value=c(u));}else if(o===undefined){var _=i.get(d),f=_==null?undefined:_.v;if(_!==undefined&&f!==Me)return {enumerable:true,configurable:true,value:f,writable:true}}return o},has(l,d){var f;if(d===mt)return  true;var o=i.get(d),u=o!==undefined&&o.v!==Me||Reflect.has(l,d);if(o!==undefined||ee!==null&&(!u||(f=gt(l,d))!=null&&f.writable)){o===undefined&&(o=Te(u?St(l[d],v):Me),i.set(d,o));var _=c(o);if(_===Me)return  false}return u},set(l,d,o,u){var x;var _=i.get(d),f=d in l;if(a&&d==="length")for(var g=o;g<_.v;g+=1){var m=i.get(g+"");m!==undefined?P(m,Me):g in l&&(m=Te(Me),i.set(g+"",m));}_===undefined?(!f||(x=gt(l,d))!=null&&x.writable)&&(_=Te(undefined),P(_,St(o,v)),i.set(d,_)):(f=_.v!==Me,P(_,St(o,v)));var L=Reflect.getOwnPropertyDescriptor(l,d);if(L!=null&&L.set&&L.set.call(u,o),!f){if(a&&typeof d=="string"){var V=i.get("length"),y=Number(d);Number.isInteger(y)&&y>=V.v&&P(V,y+1);}ji(s);}return  true},ownKeys(l){c(s);var d=Reflect.ownKeys(l).filter(_=>{var f=i.get(_);return f===undefined||f.v!==Me});for(var[o,u]of i)u.v!==Me&&!(o in l)&&d.push(o);return d},setPrototypeOf(){os();}})}function ji(e,t=1){P(e,e.v+t);}var Er,va,da;function Es(){if(Er===undefined){Er=window;var e=Element.prototype,t=Node.prototype;va=gt(t,"firstChild").get,da=gt(t,"nextSibling").get,e.__click=undefined,e.__className="",e.__attributes=null,e.__styles=null,e.__e=undefined,Text.prototype.__t=undefined;}}function Mi(e=""){return document.createTextNode(e)}function Ot(e){return va.call(e)}function $n(e){return da.call(e)}function h(e,t){return Ot(e)}function $e(e,t){{var r=Ot(e);return r instanceof Comment&&r.data===""?$n(r):r}}function p(e,t=1,r=false){let n=e;for(;t--;)n=$n(n);return n}function ks(e){e.textContent="";}function kr(e){var t=Ae|st;ee===null?t|=bt:ee.f|=aa;var r=ie!==null&&ie.f&Ae?ie:null;const n={children:null,ctx:ne,deps:null,equals:sa,f:t,fn:e,reactions:null,rv:0,v:null,wv:0,parent:r??ee};return r!==null&&(r.children??(r.children=[])).push(n),n}function Ue(e){const t=kr(e);return t.equals=Ei,t}function fa(e){var t=e.children;if(t!==null){e.children=null;for(var r=0;r<t.length;r+=1){var n=t[r];n.f&Ae?Ni(n):at(n);}}}function Ls(e){for(var t=e.parent;t!==null;){if(!(t.f&Ae))return t;t=t.parent;}return null}function _a(e){var t,r=ee;je(Ls(e));try{fa(e),t=Ma(e);}finally{je(r);}return t}function ha(e){var t=_a(e),r=(ht||e.f&bt)&&e.deps!==null?wt:xe;He(e,r),e.equals(t)||(e.v=t,e.wv=ka());}function Ni(e){fa(e),Mr(e,0),He(e,Bt),e.v=e.children=e.deps=e.ctx=e.reactions=null;}function pa(e){ee===null&&ie===null&&ns(),ie!==null&&ie.f&bt&&rs(),Ti&&ts();}function Ms(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e);}function Wt(e,t,r,n=true){var i=(e&qt)!==0,a=ee,s={ctx:ne,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|st,first:null,fn:t,last:null,next:null,parent:i?null:a,prev:null,teardown:null,transitions:null,wv:0};if(r){var v=Tt;try{Hi(!0),Tn(s),s.f|=ia;}catch(o){throw at(s),o}finally{Hi(v);}}else t!==null&&An(s);var l=r&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(aa|_n))===0;if(!l&&!i&&n&&(a!==null&&Ms(s,a),ie!==null&&ie.f&Ae)){var d=ie;(d.children??(d.children=[])).push(s);}return s}function $i(e){const t=Wt(Sr,null,false);return He(t,xe),t.teardown=e,t}function ui(e){pa();var t=ee!==null&&(ee.f&Ze)!==0&&ne!==null&&!ne.m;if(t){var r=ne;(r.e??(r.e=[])).push({fn:e,effect:ee,reaction:ie});}else {var n=Vr(e);return n}}function Ns(e){return pa(),Ar(e)}function $s(e){const t=Wt(qt,e,true);return (r={})=>new Promise(n=>{r.outro?pn(t,()=>{at(t),n(undefined);}):(at(t),n(undefined));})}function Vr(e){return Wt(na,e,false)}function yt(e,t){var r=ne,n={effect:null,ran:false};r.l.r1.push(n),n.effect=Ar(()=>{e(),!n.ran&&(n.ran=true,P(r.l.r2,true),H(t));});}function Tr(){var e=ne;Ar(()=>{if(c(e.l.r2)){for(var t of e.l.r1){var r=t.effect;r.f&xe&&He(r,wt),Gt(r)&&Tn(r),t.ran=false;}e.l.r2.v=false;}});}function Ar(e){return Wt(Sr,e,true)}function U(e,t=[],r=kr){const n=t.map(r);return Si(()=>e(...n.map(c)))}function Si(e,t=0){return Wt(Sr|Ln|t,e,true)}function Lr(e,t=true){return Wt(Sr|Ze,e,true,t)}function ga(e){var t=e.teardown;if(t!==null){const r=Ti,n=ie;Oi(true),Be(null);try{t.call(null);}finally{Oi(r),Be(n);}}}function ma(e){var t=e.deriveds;if(t!==null){e.deriveds=null;for(var r=0;r<t.length;r+=1)Ni(t[r]);}}function ya(e,t=false){var r=e.first;for(e.first=e.last=null;r!==null;){var n=r.next;at(r,t),r=n;}}function Ss(e){for(var t=e.first;t!==null;){var r=t.next;t.f&Ze||at(t),t=r;}}function at(e,t=true){var r=false;if((t||e.f&Ja)&&e.nodes_start!==null){for(var n=e.nodes_start,i=e.nodes_end;n!==null;){var a=n===i?null:$n(n);n.remove(),n=a;}r=true;}ya(e,t&&!r),ma(e),Mr(e,0),He(e,Bt);var s=e.transitions;if(s!==null)for(const l of s)l.stop();ga(e);var v=e.parent;v!==null&&v.first!==null&&ba(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null;}function ba(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r));}function pn(e,t){var r=[];Vi(e,r,true),wa(r,()=>{at(e),t&&t();});}function wa(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var i of e)i.out(n);}else t();}function Vi(e,t,r){if(!(e.f&ze)){if(e.f^=ze,e.transitions!==null)for(const s of e.transitions)(s.is_global||r)&&t.push(s);for(var n=e.first;n!==null;){var i=n.next,a=(n.f&Mn)!==0||(n.f&Ze)!==0;Vi(n,t,a?r:false),n=i;}}}function gn(e){xa(e,true);}function xa(e,t){if(e.f&ze){e.f^=ze,e.f&xe||(e.f^=xe),Gt(e)&&(He(e,st),An(e));for(var r=e.first;r!==null;){var n=r.next,i=(r.f&Mn)!==0||(r.f&Ze)!==0;xa(r,i?t:false),r=n;}if(e.transitions!==null)for(const a of e.transitions)(a.is_global||t)&&a.in();}}let vi=false,di=[];function Vs(){vi=false;const e=di.slice();di=[],li(e);}function Sn(e){vi||(vi=true,queueMicrotask(Vs)),di.push(e);}function Ts(){throw new Error("https://svelte.dev/e/invalid_default_snippet")}function Ca(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let cn=false,mn=false,yn=null,Tt=false,Ti=false;function Hi(e){Tt=e;}function Oi(e){Ti=e;}let fi=[],br=0;let ie=null,Qe=false;function Be(e){ie=e;}let ee=null;function je(e){ee=e;}let qe=null;function As(e){qe=e;}let Ne=null,Ve=0,Ye=null;function Is(e){Ye=e;}let Ea=1,bn=0,ht=false,ne=null;function ka(){return ++Ea}function Ir(){return !Zt||ne!==null&&ne.l===null}function Gt(e){var d;var t=e.f;if(t&st)return  true;if(t&wt){var r=e.deps,n=(t&bt)!==0;if(r!==null){var i,a,s=(t&hn)!==0,v=n&&ee!==null&&!ht,l=r.length;if(s||v){for(i=0;i<l;i++)a=r[i],(s||!((d=a==null?undefined:a.reactions)!=null&&d.includes(e)))&&(a.reactions??(a.reactions=[])).push(e);s&&(e.f^=hn);}for(i=0;i<l;i++)if(a=r[i],Gt(a)&&ha(a),a.wv>e.wv)return  true}(!n||ee!==null&&!ht)&&He(e,xe);}return  false}function Ps(e,t){for(var r=t;r!==null;){if(r.f&_n)try{r.fn(e);return}catch{r.f^=_n;}r=r.parent;}throw cn=false,e}function js(e){return (e.f&Bt)===0&&(e.parent===null||(e.parent.f&_n)===0)}function Vn(e,t,r,n){if(cn){if(r===null&&(cn=false),js(t))throw e;return}r!==null&&(cn=true);{Ps(e,t);return}}function La(e,t,r=0){var n=e.reactions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];a.f&Ae?La(a,t,r+1):t===a&&(r===0?He(a,st):a.f&xe&&He(a,wt),An(a));}}function Ma(e){var f;var t=Ne,r=Ve,n=Ye,i=ie,a=ht,s=qe,v=ne,l=Qe,d=e.f;Ne=null,Ve=0,Ye=null,ie=d&(Ze|qt)?null:e,ht=!Tt&&(d&bt)!==0,qe=null,ne=e.ctx,Qe=false,bn++;try{var o=(0,e.fn)(),u=e.deps;if(Ne!==null){var _;if(Mr(e,Ve),u!==null&&Ve>0)for(u.length=Ve+Ne.length,_=0;_<Ne.length;_++)u[Ve+_]=Ne[_];else e.deps=u=Ne;if(!ht)for(_=Ve;_<u.length;_++)((f=u[_]).reactions??(f.reactions=[])).push(e);}else u!==null&&Ve<u.length&&(Mr(e,Ve),u.length=Ve);if(Ir()&&Ye!==null&&!(e.f&(Ae|wt|st)))for(_=0;_<Ye.length;_++)La(Ye[_],e);return i!==null&&bn++,o}finally{Ne=t,Ve=r,Ye=n,ie=i,ht=a,qe=s,ne=v,Qe=l;}}function Hs(e,t){let r=t.reactions;if(r!==null){var n=Wa.call(r,e);if(n!==-1){var i=r.length-1;i===0?r=t.reactions=null:(r[n]=r[i],r.pop());}}r===null&&t.f&Ae&&(Ne===null||!Ne.includes(t))&&(He(t,wt),t.f&(bt|hn)||(t.f^=hn),Mr(t,0));}function Mr(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Hs(e,r[n]);}function Tn(e){var t=e.f;if(!(t&Bt)){He(e,xe);var r=ee,n=ne;ee=e;try{t&Ln?Ss(e):ya(e),ma(e),ga(e);var i=Ma(e);e.teardown=typeof i=="function"?i:null,e.wv=Ea;var a=e.deps,s;}catch(v){Vn(v,e,r,n||e.ctx);}finally{ee=r;}}}function Os(){if(br>1e3){br=0;try{is();}catch(e){if(yn!==null)Vn(e,yn,null);else throw e}}br++;}function Rs(e){var t=e.length;if(t!==0){Os();var r=Tt;Tt=true;try{for(var n=0;n<t;n++){var i=e[n];i.f&xe||(i.f^=xe);var a=[];Na(i,a),Ds(a);}}finally{Tt=r;}}}function Ds(e){var t=e.length;if(t!==0)for(var r=0;r<t;r++){var n=e[r];if(!(n.f&(Bt|ze)))try{Gt(n)&&(Tn(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?ba(n):n.fn=null));}catch(i){Vn(i,n,null,n.ctx);}}}function Fs(){if(mn=false,br>1001)return;const e=fi;fi=[],Rs(e),mn||(br=0,yn=null);}function An(e){mn||(mn=true,queueMicrotask(Fs)),yn=e;for(var t=e;t.parent!==null;){t=t.parent;var r=t.f;if(r&(qt|Ze)){if(!(r&xe))return;t.f^=xe;}}fi.push(t);}function Na(e,t){var r=e.first,n=[];e:for(;r!==null;){var i=r.f,a=(i&Ze)!==0,s=a&&(i&xe)!==0,v=r.next;if(!s&&!(i&ze))if(i&Sr){if(a)r.f^=xe;else try{Gt(r)&&Tn(r);}catch(u){Vn(u,r,null,r.ctx);}var l=r.first;if(l!==null){r=l;continue}}else i&na&&n.push(r);if(v===null){let u=r.parent;for(;u!==null;){if(e===u)break e;var d=u.next;if(d!==null){r=d;continue e}u=u.parent;}}r=v;}for(var o=0;o<n.length;o++)l=n[o],t.push(l),Na(l,t);}function c(e){var o;var t=e.f,r=(t&Ae)!==0;if(r&&t&Bt){var n=_a(e);return Ni(e),n}if(ie!==null&&!Qe){qe!==null&&qe.includes(e)&&ls();var i=ie.deps;e.rv<bn&&(e.rv=bn,Ne===null&&i!==null&&i[Ve]===e?Ve++:Ne===null?Ne=[e]:Ne.push(e));}else if(r&&e.deps===null)for(var a=e,s=a.parent,v=a;s!==null;)if(s.f&Ae){var l=s;v=l,s=l.parent;}else {var d=s;(o=d.deriveds)!=null&&o.includes(v)||(d.deriveds??(d.deriveds=[])).push(v);break}return r&&(a=e,Gt(a)&&ha(a)),e.v}function H(e){var t=Qe;try{return Qe=!0,e()}finally{Qe=t;}}const zs=-7169;function He(e,t){e.f=e.f&zs|t;}function ot(e,t=false,r){ne={p:ne,c:null,e:null,m:false,s:e,x:null,l:null},Zt&&!t&&(ne.l={s:null,u:null,r1:[],r2:Te(false)});}function lt(e){const t=ne;if(t!==null){e!==undefined&&(t.x=e);const s=t.e;if(s!==null){var r=ee,n=ie;t.e=null;try{for(var i=0;i<s.length;i++){var a=s[i];je(a.effect),Be(a.reaction),Vr(a.fn);}}finally{je(r),Be(n);}}ne=t.p,t.m=true;}return e||{}}function _t(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(mt in e)_i(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&mt in r&&_i(r);}}}function _i(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{_i(e[n],t);}catch{}const r=Ci(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=ra(r);for(let i in n){const a=n[i].get;if(a)try{a.call(e);}catch{}}}}}const qs=["touchstart","touchmove"];function Bs(e){return qs.includes(e)}let Ri=false;function Zs(){Ri||(Ri=true,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r);});},{capture:true}));}function $a(e){var t=ie,r=ee;Be(null),je(null);try{return e()}finally{Be(t),je(r);}}function Ws(e,t,r,n=r){e.addEventListener(t,()=>$a(r));const i=e.__on_r;i?e.__on_r=()=>{i(),n(true);}:e.__on_r=()=>n(true),Zs();}const Gs=new Set,Di=new Set;function Ys(e,t,r,n={}){function i(a){if(n.capture||_r.call(t,a),!a.cancelBubble)return $a(()=>r==null?void 0:r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Sn(()=>{t.addEventListener(e,i,n);}):t.addEventListener(e,i,n),i}function G(e,t,r,n,i){var a={capture:n,passive:i},s=Ys(e,t,r,a);(t===document.body||t===window||t===document)&&$i(()=>{t.removeEventListener(e,s,a);});}function _r(e){var y;var t=this,r=t.ownerDocument,n=e.type,i=((y=e.composedPath)==null?undefined:y.call(e))||[],a=i[0]||e.target,s=0,v=e.__root;if(v){var l=i.indexOf(v);if(l!==-1&&(t===document||t===window)){e.__root=t;return}var d=i.indexOf(t);if(d===-1)return;l<=d&&(s=l);}if(a=i[s]||e.target,a!==t){ta(e,"currentTarget",{configurable:true,get(){return a||r}});var o=ie,u=ee;Be(null),je(null);try{for(var _,f=[];a!==null;){var g=a.assignedSlot||a.parentNode||a.host||null;try{var m=a["__"+n];if(m!==void 0&&!a.disabled)if(kn(m)){var[L,...V]=m;L.apply(a,[e,...V]);}else m.call(a,e);}catch(x){_?f.push(x):_=x;}if(e.cancelBubble||g===t||g===null)break;a=g;}if(_){for(let x of f)queueMicrotask(()=>{throw x});throw _}}finally{e.__root=t,delete e.currentTarget,Be(o),je(u);}}}function Sa(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function wn(e,t){var r=ee;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t);}function j(e,t){var r=(t&ws)!==0,n=(t&xs)!==0,i,a=!e.startsWith("<!>");return ()=>{i===undefined&&(i=Sa(a?e:"<!>"+e),r||(i=Ot(i)));var s=n?document.importNode(i,true):i.cloneNode(true);if(r){var v=Ot(s),l=s.lastChild;wn(v,l);}else wn(s,s);return s}}function Yt(e,t,r="svg"){var n=!e.startsWith("<!>"),i=`<${r}>${n?e:"<!>"+e}</${r}>`,a;return ()=>{if(!a){var s=Sa(i),v=Ot(s);a=Ot(v);}var l=a.cloneNode(true);return wn(l,l),l}}function nt(){var e=document.createDocumentFragment(),t=document.createComment(""),r=Mi();return e.append(t,r),wn(t,r),e}function C(e,t){e!==null&&e.before(t);}let hi=true;function D(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"");}function Nr(e,t){return Us(e,t)}const Nt=new Map;function Us(e,{target:t,anchor:r,props:n={},events:i,context:a,intro:s=true}){Es();var v=new Set,l=u=>{for(var _=0;_<u.length;_++){var f=u[_];if(!v.has(f)){v.add(f);var g=Bs(f);t.addEventListener(f,_r,{passive:g});var m=Nt.get(f);m===undefined?(document.addEventListener(f,_r,{passive:g}),Nt.set(f,1)):Nt.set(f,m+1);}}};l(xi(Gs)),Di.add(l);var d=undefined,o=$s(()=>{var u=r??t.appendChild(Mi());return Lr(()=>{if(a){ot({});var _=ne;_.c=a;}i&&(n.$$events=i),hi=s,d=e(u,n)||{},hi=true,a&&lt();}),()=>{var g;for(var _ of v){t.removeEventListener(_,_r);var f=Nt.get(_);--f===0?(document.removeEventListener(_,_r),Nt.delete(_)):Nt.set(_,f);}Di.delete(l),u!==r&&((g=u.parentNode)==null||g.removeChild(u));}});return Xs.set(d,o),d}let Xs=new WeakMap;function W(e,t,r=false){var n=e,i=null,a=null,s=Me,v=r?Mn:0,l=false;const d=(u,_=true)=>{l=true,o(_,u);},o=(u,_)=>{s!==(s=u)&&(s?(i?gn(i):_&&(i=Lr(()=>_(n))),a&&pn(a,()=>{a=null;})):(a?gn(a):_&&(a=Lr(()=>_(n))),i&&pn(i,()=>{i=null;})));};Si(()=>{l=false,t(d),l||o(null,null);},v);}let un=null;function hr(e,t){return t}function Qs(e,t,r,n){for(var i=[],a=t.length,s=0;s<a;s++)Vi(t[s].e,i,true);var v=a>0&&i.length===0&&r!==null;if(v){var l=r.parentNode;ks(l),l.append(r),n.clear(),et(e,t[0].prev,t[a-1].next);}wa(i,()=>{for(var d=0;d<a;d++){var o=t[d];v||(n.delete(o.k),et(e,o.prev,o.next)),at(o.e,!v);}});}function pt(e,t,r,n,i,a=null){var s=e,v={flags:t,items:new Map,first:null},l=(t&la)!==0;if(l){var d=e;s=d.appendChild(Mi());}var o=null,u=false,_=Ue(()=>{var f=r();return kn(f)?f:f==null?[]:xi(f)});Si(()=>{var f=c(_),g=f.length;if(!(u&&g===0)){u=g===0;{var m=ie;Js(f,v,s,i,t,(m.f&ze)!==0,n,r);}a!==null&&(g===0?o?gn(o):o=Lr(()=>a(s)):o!==null&&pn(o,()=>{o=null;})),c(_);}});}function Js(e,t,r,n,i,a,s,v){var K,ce,le,Ce;var l=(i&vs)!==0,d=(i&(ki|Li))!==0,o=e.length,u=t.items,_=t.first,f=_,g,m=null,L,V=[],y=[],x,O,M,E;if(l)for(E=0;E<o;E+=1)x=e[E],O=s(x,E),M=u.get(O),M!==undefined&&((K=M.a)==null||K.measure(),(L??(L=new Set)).add(M));for(E=0;E<o;E+=1){if(x=e[E],O=s(x,E),M=u.get(O),M===undefined){var $=f?f.e.nodes_start:r;m=eo($,t,m,m===null?t.first:m.next,x,O,E,n,i,v),u.set(O,m),V=[],y=[],f=m.next;continue}if(d&&Ks(M,x,E,i),M.e.f&ze&&(gn(M.e),l&&((ce=M.a)==null||ce.unfix(),(L??(L=new Set)).delete(M))),M!==f){if(g!==undefined&&g.has(M)){if(V.length<y.length){var k=y[0],R;m=k.prev;var I=V[0],z=V[V.length-1];for(R=0;R<V.length;R+=1)Fi(V[R],k,r);for(R=0;R<y.length;R+=1)g.delete(y[R]);et(t,I.prev,z.next),et(t,m,I),et(t,z,k),f=k,m=z,E-=1,V=[],y=[];}else g.delete(M),Fi(M,f,r),et(t,M.prev,M.next),et(t,M,m===null?t.first:m.next),et(t,m,M),m=M;continue}for(V=[],y=[];f!==null&&f.k!==O;)(a||!(f.e.f&ze))&&(g??(g=new Set)).add(f),y.push(f),f=f.next;if(f===null)continue;M=f;}V.push(M),m=M,f=M.next;}if(f!==null||g!==undefined){for(var w=g===undefined?[]:xi(g);f!==null;)(a||!(f.e.f&ze))&&w.push(f),f=f.next;var T=w.length;if(T>0){var B=i&la&&o===0?r:null;if(l){for(E=0;E<T;E+=1)(le=w[E].a)==null||le.measure();for(E=0;E<T;E+=1)(Ce=w[E].a)==null||Ce.fix();}Qs(t,w,B,u);}}l&&Sn(()=>{var Ee;if(L!==undefined)for(M of L)(Ee=M.a)==null||Ee.apply();}),ee.first=t.first&&t.first.e,ee.last=m&&m.e;}function Ks(e,t,r,n){n&ki&&ci(e.v,t),n&Li?ci(e.i,r):e.i=r;}function eo(e,t,r,n,i,a,s,v,l,d){var o=un,u=(l&ki)!==0,_=(l&ds)===0,f=u?_?Nn(i):Te(i):i,g=l&Li?Te(s):s,m={i:g,v:f,k:a,a:null,e:null,prev:r,next:n};un=m;try{return m.e=Lr(()=>v(e,f,g,d),ua),m.e.prev=r&&r.e,m.e.next=n&&n.e,r===null?t.first=m:(r.next=m,r.e.next=m.e),n!==null&&(n.prev=m,n.e.prev=m.e),m}finally{un=o;}}function Fi(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,i=t?t.e.nodes_start:r,a=e.e.nodes_start;a!==n;){var s=$n(a);i.before(a),a=s;}}function et(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e);}function zi(e,t,r,n,i){var v;var a=(v=t.$$slots)==null?undefined:v[r],s=false;a===true&&(a=t.children,s=true),a===undefined?i!==null&&i(e):a(e,s?()=>n:n);}function A(e,t,r,n){var i=e.__attributes??(e.__attributes={});i[t]!==(i[t]=r)&&(t==="style"&&"__styles"in e&&(e.__styles={}),t==="loading"&&(e[es]=r),r==null?e.removeAttribute(t):typeof r!="string"&&to(e).includes(t)?e[t]=r:e.setAttribute(t,r));}var qi=new Map;function to(e){var t=qi.get(e.nodeName);if(t)return t;qi.set(e.nodeName,t=[]);for(var r,n=e,i=Element.prototype;i!==n;){r=ra(n);for(var a in r)r[a].set&&t.push(a);n=Ci(n);}return t}function Bi(e,t,r){var n=e.__className,i=ro(t);(n!==i||ua)&&(t==null?e.removeAttribute("class"):e.className=i,e.__className=i);}function ro(e,t){return (e??"")+""}function pr(e,t,r){if(r){if(e.classList.contains(t))return;e.classList.add(t);}else {if(!e.classList.contains(t))return;e.classList.remove(t);}}function Fe(e,t,r,n){var i=e.__styles??(e.__styles={});i[t]!==r&&(i[t]=r,r==null?e.style.removeProperty(t):e.style.setProperty(t,r,""));}const no=()=>performance.now(),Xe={tick:e=>requestAnimationFrame(e),now:()=>no(),tasks:new Set};function Va(){const e=Xe.now();Xe.tasks.forEach(t=>{t.c(e)||(Xe.tasks.delete(t),t.f());}),Xe.tasks.size!==0&&Xe.tick(Va);}function io(e){let t;return Xe.tasks.size===0&&Xe.tick(Va),{promise:new Promise(r=>{Xe.tasks.add(t={c:e,f:r});}),abort(){Xe.tasks.delete(t);}}}function on(e,t){e.dispatchEvent(new CustomEvent(t));}function ao(e){if(e==="float")return "cssFloat";if(e==="offset")return "cssOffset";if(e.startsWith("--"))return e;const t=e.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function Zi(e){const t={},r=e.split(";");for(const n of r){const[i,a]=n.split(":");if(!i||a===undefined)break;const s=ao(i.trim());t[s]=a.trim();}return t}const so=e=>e;function oo(e,t,r){var n=un,i,a,s,v=null;n.a??(n.a={element:e,measure(){i=this.element.getBoundingClientRect();},apply(){if(s==null||s.abort(),a=this.element.getBoundingClientRect(),i.left!==a.left||i.right!==a.right||i.top!==a.top||i.bottom!==a.bottom){const l=t()(this.element,{from:i,to:a},r==null?undefined:r());s=xn(this.element,l,undefined,1,()=>{s==null||s.abort(),s=undefined;});}},fix(){if(!e.getAnimations().length){var{position:l,width:d,height:o}=getComputedStyle(e);if(l!=="absolute"&&l!=="fixed"){var u=e.style;v={position:u.position,width:u.width,height:u.height,transform:u.transform},u.position="absolute",u.width=d,u.height=o;var _=e.getBoundingClientRect();if(i.left!==_.left||i.top!==_.top){var f=`translate(${i.left-_.left}px, ${i.top-_.top}px)`;u.transform=u.transform?`${u.transform} ${f}`:f;}}}},unfix(){if(v){var l=e.style;l.position=v.position,l.width=v.width,l.height=v.height,l.transform=v.transform;}}}),n.a.element=e;}function Rt(e,t,r,n){var i=(e&ms)!==0,a=(e&ys)!==0,s=i&&a,v=(e&bs)!==0,l=s?"both":i?"in":"out",d,o=t.inert,u=t.style.overflow,_,f;function g(){var x=ie,O=ee;Be(null),je(null);try{return d??(d=r()(t,(n==null?void 0:n())??{},{direction:l}))}finally{Be(x),je(O);}}var m={is_global:v,in(){var x;if(t.inert=o,!i){f==null||f.abort(),(x=f==null?undefined:f.reset)==null||x.call(f);return}a||_==null||_.abort(),on(t,"introstart"),_=xn(t,g(),f,1,()=>{on(t,"introend"),_==null||_.abort(),_=d=undefined,t.style.overflow=u;});},out(x){if(!a){x==null||x(),d=undefined;return}t.inert=true,on(t,"outrostart"),f=xn(t,g(),_,0,()=>{on(t,"outroend"),x==null||x();});},stop:()=>{_==null||_.abort(),f==null||f.abort();}},L=ee;if((L.transitions??(L.transitions=[])).push(m),i&&hi){var V=v;if(!V){for(var y=L.parent;y&&y.f&Mn;)for(;(y=y.parent)&&!(y.f&Ln););V=!y||(y.f&ia)!==0;}V&&Vr(()=>{H(()=>m.in());});}}function xn(e,t,r,n,i){var a=n===1;if(Ua(t)){var s,v=false;return Sn(()=>{if(!v){var L=t({direction:a?"in":"out"});s=xn(e,L,r,n,i);}}),{abort:()=>{v=true,s==null||s.abort();},deactivate:()=>s.deactivate(),reset:()=>s.reset(),t:()=>s.t()}}if(r==null||r.deactivate(),!(t!=null&&t.duration))return i(),{abort:Re,deactivate:Re,reset:Re,t:()=>n};const{delay:l=0,css:d,tick:o,easing:u=so}=t;var _=[];if(a&&r===undefined&&(o&&o(0,1),d)){var f=Zi(d(0,1));_.push(f,f);}var g=()=>1-n,m=e.animate(_,{duration:l});return m.onfinish=()=>{var L=(r==null?undefined:r.t())??1-n;r==null||r.abort();var V=n-L,y=t.duration*Math.abs(V),x=[];if(y>0){var O=false;if(d)for(var M=Math.ceil(y/16.666666666666668),E=0;E<=M;E+=1){var $=L+V*u(E/M),k=Zi(d($,1-$));x.push(k),O||(O=k.overflow==="hidden");}O&&(e.style.overflow="hidden"),g=()=>{var R=m.currentTime;return L+V*u(R/y)},o&&io(()=>{if(m.playState!=="running")return  false;var R=g();return o(R,1-R),true});}m=e.animate(x,{duration:y,fill:"forwards"}),m.onfinish=()=>{g=()=>n,o==null||o(n,1-n),i();};},{abort:()=>{m&&(m.cancel(),m.effect=null,m.onfinish=Re);},deactivate:()=>{i=Re;},reset:()=>{n===0&&(o==null||o(1,0));},t:()=>g()}}function ln(e,t,r=t){var n=Ir();Ws(e,"input",i=>{var a=i?e.defaultValue:e.value;if(a=ii(e)?ai(a):a,r(a),n&&a!==(a=t())){var s=e.selectionStart,v=e.selectionEnd;e.value=a??"",v!==null&&(e.selectionStart=s,e.selectionEnd=Math.min(v,e.value.length));}}),H(t)==null&&e.value&&r(ii(e)?ai(e.value):e.value),Ar(()=>{var i=t();ii(e)&&i===ai(e.value)||e.type==="date"&&!i&&!e.value||i!==e.value&&(e.value=i??"");});}function ii(e){var t=e.type;return t==="number"||t==="range"}function ai(e){return e===""?null:+e}function si(e,t,r){var n=gt(e,t);n&&n.set&&(e[t]=r,$i(()=>{e[t]=null;}));}var rt,Ht,$r,Cn,Ta;const En=class En{constructor(t){fr(this,Cn);fr(this,rt,new WeakMap);fr(this,Ht);fr(this,$r);ni(this,$r,t);}observe(t,r){var n=Ge(this,rt).get(t)||new Set;return n.add(r),Ge(this,rt).set(t,n),Pi(this,Cn,Ta).call(this).observe(t,Ge(this,$r)),()=>{var i=Ge(this,rt).get(t);i.delete(r),i.size===0&&(Ge(this,rt).delete(t),Ge(this,Ht).unobserve(t));}}};rt=new WeakMap,Ht=new WeakMap,$r=new WeakMap,Cn=new WeakSet,Ta=function(){return Ge(this,Ht)??ni(this,Ht,new ResizeObserver(t=>{for(var r of t){En.entries.set(r.target,r);for(var n of Ge(this,rt).get(r.target)||[])n(r);}}))},ti(En,"entries",new WeakMap);let pi=En;var lo=new pi({box:"border-box"});function Wi(e,t,r){var n=lo.observe(e,()=>r(e[t]));Vr(()=>(H(()=>r(e[t])),n));}function Gi(e,t){return e===t||(e==null?undefined:e[mt])===t}function tt(e={},t,r,n){return Vr(()=>{var i,a;return Ar(()=>{i=a,a=[],H(()=>{e!==r(...a)&&(t(e,...a),i&&Gi(r(...i),e)&&t(null,...i));});}),()=>{Sn(()=>{a&&Gi(r(...a),e)&&t(null,...a);});}}),e}function Aa(e){return function(...t){var r=t[0];r.target===this&&(e==null||e.apply(this,t));}}function At(e){return function(...t){var r=t[0];return r.stopPropagation(),e==null?undefined:e.apply(this,t)}}function xt(e=false){const t=ne,r=t.l.u;if(!r)return;let n=()=>_t(t.s);if(e){let i=0,a={};const s=kr(()=>{let v=false;const l=t.s;for(const d in l)l[d]!==a[d]&&(a[d]=l[d],v=true);return v&&i++,i});n=()=>c(s);}r.b.length&&Ns(()=>{Yi(t,n),li(r.b);}),ui(()=>{const i=H(()=>r.m.map(Xa));return ()=>{for(const a of i)typeof a=="function"&&a();}}),r.a.length&&ui(()=>{Yi(t,n),li(r.a);});}function Yi(e,t){if(e.l.s)for(const r of e.l.s)c(r);t();}function co(e){var t=Te(0);return function(){return arguments.length===1?(P(t,c(t)+1),arguments[0]):(c(t),e())}}function Ui(e,t){var a;var r=(a=e.$$events)==null?undefined:a[t.type],n=kn(r)?r.slice():r==null?[]:[r];for(var i of n)i.call(this,t);}function Ia(e,t,r){if(e==null)return t(undefined),Re;const n=H(()=>e.subscribe(t,r));return n.unsubscribe?()=>n.unsubscribe():n}const $t=[];function In(e,t=Re){let r=null;const n=new Set;function i(v){if(oa(e,v)&&(e=v,r)){const l=!$t.length;for(const d of n)d[1](),$t.push(d,e);if(l){for(let d=0;d<$t.length;d+=2)$t[d][0]($t[d+1]);$t.length=0;}}}function a(v){i(v(e));}function s(v,l=Re){const d=[v,l];return n.add(d),n.size===1&&(r=t(i,a)||Re),v(e),()=>{n.delete(d),n.size===0&&r&&(r(),r=null);}}return {set:i,update:a,subscribe:s}}function vn(e){let t;return Ia(e,r=>t=r)(),t}let gr=false,gi=Symbol();function oe(e,t,r){const n=r[t]??(r[t]={store:null,source:Nn(undefined),unsubscribe:Re});if(n.store!==e&&!(gi in r))if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=undefined,n.unsubscribe=Re;else {var i=true;n.unsubscribe=Ia(e,a=>{i?n.source.v=a:P(n.source,a);}),i=false;}return e&&gi in r?vn(e):c(n.source)}function me(e,t){return e.set(t),t}function Ut(){const e={};function t(){$i(()=>{for(var r in e)e[r].unsubscribe();ta(e,gi,{enumerable:false,value:true});});}return [e,t]}function he(e,t,r){return e.set(r),t}function oi(){gr=true;}function uo(e){var t=gr;try{return gr=!1,[e(),gr]}finally{gr=t;}}function Xi(e){for(var t=ee,r=ee;t!==null&&!(t.f&(Ze|qt));)t=t.parent;try{return je(t),e()}finally{je(r);}}function _e(e,t,r,n){var $;var i=(r&fs)!==0,a=!Zt||(r&_s)!==0,s=(r&ps)!==0,v=(r&gs)!==0,l=false,d;s?[d,l]=uo(()=>e[t]):d=e[t];var o=mt in e||Ka in e,u=s&&((($=gt(e,t))==null?undefined:$.set)??(o&&t in e&&(k=>e[t]=k)))||undefined,_=n,f=true,g=false,m=()=>(g=true,f&&(f=false,v?_=H(n):_=n),_);d===undefined&&n!==undefined&&(u&&a&&as(),d=m(),u&&u(d));var L;if(a)L=()=>{var k=e[t];return k===undefined?m():(f=true,g=false,k)};else {var V=Xi(()=>(i?kr:Ue)(()=>e[t]));V.f|=Qa,L=()=>{var k=c(V);return k!==undefined&&(_=undefined),k===undefined?_:k};}if(!(r&hs))return L;if(u){var y=e.$$legacy;return function(k,R){return arguments.length>0?((!a||!R||y||l)&&u(R?L():k),k):L()}}var x=false,O=false,M=Nn(d),E=Xi(()=>kr(()=>{var k=L(),R=c(M);return x?(x=!1,O=!0,R):(O=!1,M.v=k)}));return i||(E.equals=Ei),function(k,R){if(arguments.length>0){const I=R?c(E):a&&s?St(k):k;return E.equals(I)||(x=true,P(M,I),g&&_!==undefined&&(_=I),H(()=>c(E))),k}return c(E)}}function Pn(e){ne===null&&Ca(),Zt&&ne.l!==null?vo(ne).m.push(e):ui(()=>{const t=H(e);if(typeof t=="function")return t});}function Pa(e){ne===null&&Ca(),Pn(()=>()=>H(e));}function vo(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const fo="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(fo);us();const _o=e=>e;function Dt(e,{delay:t=0,duration:r=400,easing:n=_o}={}){const i=+getComputedStyle(e).opacity;return {delay:t,duration:r,easing:n,css:a=>`opacity: ${a*i}`}}function ft(e,t=()=>{}){if(!e)return;const r=document.querySelector(e);if(r){t(r);return}new MutationObserver((i,a)=>{const s=document.querySelector(e);s&&(a.disconnect(),t(s));}).observe(document.documentElement,{childList:true,subtree:true});}function wr(e){if(typeof e=="string")try{const t=JSON.parse(e);return wr(t)}catch{return e}if(Array.isArray(e))return e.map(t=>wr(t));if(e!==null&&typeof e=="object"){const t={};for(const r in e)e.hasOwnProperty(r)&&(t[r]=wr(e[r]));return t}return e}function It(e){if(!e)return "inherit";let t=e.toString().trim();if(t.startsWith("var(")){const s=t.match(/var\(([^)]+)\)/);if(s){const v=s[1],l=getComputedStyle(document.documentElement).getPropertyValue(v).trim();if(l)t=l;else return "inherit"}}if(t.startsWith("rgba(")||t.startsWith("rgb(")){const s=t.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);if(s){const[,v,l,d]=s;return (parseInt(v)*299+parseInt(l)*587+parseInt(d)*114)/1e3<128?"white":"black"}}t=t.replace("#","");let r,n,i;if(t.length===3)r=parseInt(t[0]+t[0],16),n=parseInt(t[1]+t[1],16),i=parseInt(t[2]+t[2],16);else if(t.length===6)r=parseInt(t.substr(0,2),16),n=parseInt(t.substr(2,2),16),i=parseInt(t.substr(4,2),16);else if(t.length===8)r=parseInt(t.substr(0,2),16),n=parseInt(t.substr(2,2),16),i=parseInt(t.substr(4,2),16);else return "inherit";return (r*299+n*587+i*114)/1e3<128?"white":"black"}const ja="Kesa:Fall",Qi=()=>{try{return wr(localStorage.getItem(ja))??{}}catch{return {}}},Oe=(e,t)=>{const r=Qi(),n=e in r?r[e]:t,{subscribe:i,set:a,update:s}=In(n);return i(v=>{const l=Qi();localStorage.setItem(ja,JSON.stringify({...l,[e]:v}));}),{subscribe:i,set:v=>{typeof v=="function"?s(v):a(v);},update:s}},dn=In(0),Ha=In(""),xr=Oe("_isFallView",true),mr=In(0),mi=Oe("_panelPos",{x:0,y:0}),yi=Oe("_show_hover_pic",1),Cr=Oe("_state_hover_pic",1),yr=Oe("_card_layout",{min:300,max:600,gap:8}),Ie=Oe("_card_detail",{all:false,category:true,title:false,topping:true,free:true,size:true,sub_title:false,tags:false,download_collect:false,upload_time:false,statistics:false}),ho=Oe("_show_nexus_pic",1),bi=Oe("_block_gay",1),fn=Oe("_card_radius",{enabled:false,value:16}),Oa=Oe("_mt_label",{}),Ra=Oe("_mt_categories",{}),Vt=Oe("_textColor",{t1:"black",t2:"black",t3:"black"});function po(e={path:"/search",method:"POST"}){const t=XMLHttpRequest.prototype.open,r=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.open=function(n,i){return this._requestMetadata={method:n.toUpperCase(),url:i,isTarget:i.includes(e.path)&&n.toUpperCase()===e.method},t.apply(this,arguments)},XMLHttpRequest.prototype.send=function(n){var i;if((i=this._requestMetadata)!=null&&i.isTarget){const a=this.onreadystatechange,s=this.onload;this.addEventListener("readystatechange",()=>{this.readyState===4&&this._captureResponseData(),a==null||a.call(this);}),this.onload=d=>{this._captureResponseData(),s==null||s.call(this,d);};const v={url:this._requestMetadata.url,body:n instanceof Document?n.documentElement.outerHTML:n},l=new CustomEvent(`req>${e.method}->${e.path}`,{detail:v});window.dispatchEvent(l);}return r.apply(this,arguments)},XMLHttpRequest.prototype._captureResponseData=function(){if(!this._hasCaptured&&this._requestMetadata.isTarget){try{const n={status:this.status,headers:this.getAllResponseHeaders(),data:this._parseResponse()},i=new CustomEvent(`res>${e.method}->${e.path}`,{detail:n});window.dispatchEvent(i);}catch(n){console.error("<PT-Fall> Capture failed:",n);}this._hasCaptured=true;}},XMLHttpRequest.prototype._parseResponse=function(){var n;try{switch(this.responseType){case "json":return this.response;case "document":return (n=this.responseXML)==null?void 0:n.documentElement.outerHTML;case "arraybuffer":return new Uint8Array(this.response);case "blob":return URL.createObjectURL(this.response);default:return this.responseText}}catch{return this.responseText}};}function go(e){const t=e-1;return t*t*t+1}function mo(e,{from:t,to:r},n={}){var{delay:i=0,duration:a=E=>Math.sqrt(E)*120,easing:s=go}=n,v=getComputedStyle(e),l=v.transform==="none"?"":v.transform,[d,o]=v.transformOrigin.split(" ").map(parseFloat);d/=e.clientWidth,o/=e.clientHeight;var u=yo(e),_=e.clientWidth/r.width/u,f=e.clientHeight/r.height/u,g=t.left+t.width*d,m=t.top+t.height*o,L=r.left+r.width*d,V=r.top+r.height*o,y=(g-L)*_,x=(m-V)*f,O=t.width/r.width,M=t.height/r.height;return {delay:i,duration:typeof a=="function"?a(Math.sqrt(y*y+x*x)):a,easing:s,css:(E,$)=>{var k=$*y,R=$*x,I=E+$*O,z=E+$*M;return `transform: ${l} translate(${k}px, ${R}px) scale(${I}, ${z});`}}}function yo(e){if("currentCSSZoom"in e)return e.currentCSSZoom;for(var t=e,r=1;t!==null;)r*=+getComputedStyle(t).zoom,t=t.parentElement;return r}var bo=j('<span class="svelte-b2jtby"> </span>'),wo=j('<div class="svelte-b2jtby"><!></div>'),xo=j('<span class="svelte-b2jtby"> </span>'),Co=j("<div><!></div>"),Eo=j("<div></div>");function ko(e,t){ot(t,false);const r=te(),n=te();let i=_e(t,"animate",8,true),a=_e(t,"columnClass",24,()=>""),s=_e(t,"duration",8,200),v=_e(t,"gap",8,20),l=_e(t,"getId",8,y=>typeof y=="number"||typeof y=="string"?y:y[d()]),d=_e(t,"idKey",24,()=>"id"),o=_e(t,"items",8),u=_e(t,"masonryHeight",12,0),_=_e(t,"masonryWidth",12,0),f=_e(t,"maxColWidth",8,500),g=_e(t,"minColWidth",8,330),m=_e(t,"style",24,()=>""),L=_e(t,"class",24,()=>"");yt(()=>(_t(o()),_t(_()),_t(g()),_t(v())),()=>{P(r,Math.min(o().length,Math.floor(_()/(g()+v()))||1));}),yt(()=>(_t(o()),c(r)),()=>{P(n,o().reduce((y,x,O)=>(y[O%y.length].push([x,O]),y),Array(c(r)).fill(null).map(()=>[])));}),Tr(),xt();var V=Eo();pt(V,5,()=>c(n),hr,(y,x)=>{var O=Co(),M=h(O);{var E=k=>{var R=nt(),I=$e(R);pt(I,9,()=>c(x),([z,w])=>l()(z),(z,w)=>{let T=()=>c(w)[0],B=()=>c(w)[1];var K=wo(),ce=h(K);zi(ce,t,"default",{get idx(){return B()},get item(){return T()}},le=>{var Ce=bo(),Ee=h(Ce);U(()=>D(Ee,T())),C(le,Ce);}),Rt(1,K,()=>Dt,()=>({delay:100,duration:s()})),Rt(2,K,()=>Dt,()=>({delay:0,duration:s()})),oo(K,()=>mo,()=>({duration:s()})),C(z,K);}),C(k,R);},$=k=>{var R=nt(),I=$e(R);pt(I,1,()=>c(x),([z,w])=>l()(z),(z,w)=>{let T=()=>c(w)[0],B=()=>c(w)[1];var K=nt(),ce=$e(K);zi(ce,t,"default",{get idx(){return B()},get item(){return T()}},le=>{var Ce=xo(),Ee=h(Ce);U(()=>D(Ee,T())),C(le,Ce);}),C(z,K);}),C(k,R);};W(M,k=>{i()?k(E):k($,false);});}U(()=>{Bi(O,`col ${a()??""} svelte-b2jtby`),A(O,"style",`gap: ${v()??""}px; max-width: ${f()??""}px;`);}),C(y,O);}),U(()=>{Bi(V,`masonry ${L()??""} svelte-b2jtby`),A(V,"style",`gap: ${v()??""}px; ${m()??""}`);}),Wi(V,"clientWidth",_),Wi(V,"clientHeight",u),C(e,V),lt();}var Pe=function(){return Pe=Object.assign||function(t){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);}return t},Pe.apply(this,arguments)},Lo=function(){function e(t){this.options=t,this.listeners={};}return e.prototype.on=function(t,r){var n=this.listeners[t]||[];this.listeners[t]=n.concat([r]);},e.prototype.triggerEvent=function(t,r){var n=this,i=this.listeners[t]||[];i.forEach(function(a){return a({target:n,event:r})});},e}(),Ft;(function(e){e[e.Add=0]="Add",e[e.Remove=1]="Remove";})(Ft||(Ft={}));var Mo=function(){function e(){this.notifications=[];}return e.prototype.push=function(t){this.notifications.push(t),this.updateFn(t,Ft.Add,this.notifications);},e.prototype.splice=function(t,r){var n=this.notifications.splice(t,r)[0];return this.updateFn(n,Ft.Remove,this.notifications),n},e.prototype.indexOf=function(t){return this.notifications.indexOf(t)},e.prototype.onUpdate=function(t){this.updateFn=t;},e}(),it;(function(e){e.Dismiss="dismiss",e.Click="click";})(it||(it={}));var Ji={types:[{type:"success",className:"notyf__toast--success",backgroundColor:"#3dc763",icon:{className:"notyf__icon--success",tagName:"i"}},{type:"error",className:"notyf__toast--error",backgroundColor:"#ed3d3d",icon:{className:"notyf__icon--error",tagName:"i"}}],duration:2e3,ripple:true,position:{x:"right",y:"bottom"},dismissible:false},No=function(){function e(){this.notifications=[],this.events={},this.X_POSITION_FLEX_MAP={left:"flex-start",center:"center",right:"flex-end"},this.Y_POSITION_FLEX_MAP={top:"flex-start",center:"center",bottom:"flex-end"};var t=document.createDocumentFragment(),r=this._createHTMLElement({tagName:"div",className:"notyf"});t.appendChild(r),document.body.appendChild(t),this.container=r,this.animationEndEventName=this._getAnimationEndEventName(),this._createA11yContainer();}return e.prototype.on=function(t,r){var n;this.events=Pe(Pe({},this.events),(n={},n[t]=r,n));},e.prototype.update=function(t,r){r===Ft.Add?this.addNotification(t):r===Ft.Remove&&this.removeNotification(t);},e.prototype.removeNotification=function(t){var r=this,n=this._popRenderedNotification(t),i;if(n){i=n.node,i.classList.add("notyf__toast--disappear");var a;i.addEventListener(this.animationEndEventName,a=function(s){s.target===i&&(i.removeEventListener(r.animationEndEventName,a),r.container.removeChild(i));});}},e.prototype.addNotification=function(t){var r=this._renderNotification(t);this.notifications.push({notification:t,node:r}),this._announce(t.options.message||"Notification");},e.prototype._renderNotification=function(t){var r,n=this._buildNotificationCard(t),i=t.options.className;return i&&(r=n.classList).add.apply(r,i.split(" ")),this.container.appendChild(n),n},e.prototype._popRenderedNotification=function(t){for(var r=-1,n=0;n<this.notifications.length&&r<0;n++)this.notifications[n].notification===t&&(r=n);if(r!==-1)return this.notifications.splice(r,1)[0]},e.prototype.getXPosition=function(t){var r;return ((r=t==null?undefined:t.position)===null||r===undefined?undefined:r.x)||"right"},e.prototype.getYPosition=function(t){var r;return ((r=t==null?undefined:t.position)===null||r===undefined?undefined:r.y)||"bottom"},e.prototype.adjustContainerAlignment=function(t){var r=this.X_POSITION_FLEX_MAP[this.getXPosition(t)],n=this.Y_POSITION_FLEX_MAP[this.getYPosition(t)],i=this.container.style;i.setProperty("justify-content",n),i.setProperty("align-items",r);},e.prototype._buildNotificationCard=function(t){var r=this,n=t.options,i=n.icon;this.adjustContainerAlignment(n);var a=this._createHTMLElement({tagName:"div",className:"notyf__toast"}),s=this._createHTMLElement({tagName:"div",className:"notyf__ripple"}),v=this._createHTMLElement({tagName:"div",className:"notyf__wrapper"}),l=this._createHTMLElement({tagName:"div",className:"notyf__message"});l.innerHTML=n.message||"";var d=n.background||n.backgroundColor;if(i){var o=this._createHTMLElement({tagName:"div",className:"notyf__icon"});if((typeof i=="string"||i instanceof String)&&(o.innerHTML=new String(i).valueOf()),typeof i=="object"){var u=i.tagName,_=u===undefined?"i":u,f=i.className,g=i.text,m=i.color,L=m===undefined?d:m,V=this._createHTMLElement({tagName:_,className:f,text:g});L&&(V.style.color=L),o.appendChild(V);}v.appendChild(o);}if(v.appendChild(l),a.appendChild(v),d&&(n.ripple?(s.style.background=d,a.appendChild(s)):a.style.background=d),n.dismissible){var y=this._createHTMLElement({tagName:"div",className:"notyf__dismiss"}),x=this._createHTMLElement({tagName:"button",className:"notyf__dismiss-btn"});y.appendChild(x),v.appendChild(y),a.classList.add("notyf__toast--dismissible"),x.addEventListener("click",function(M){var E,$;($=(E=r.events)[it.Dismiss])===null||$===undefined||$.call(E,{target:t,event:M}),M.stopPropagation();});}a.addEventListener("click",function(M){var E,$;return ($=(E=r.events)[it.Click])===null||$===undefined?undefined:$.call(E,{target:t,event:M})});var O=this.getYPosition(n)==="top"?"upper":"lower";return a.classList.add("notyf__toast--"+O),a},e.prototype._createHTMLElement=function(t){var r=t.tagName,n=t.className,i=t.text,a=document.createElement(r);return n&&(a.className=n),a.textContent=i||null,a},e.prototype._createA11yContainer=function(){var t=this._createHTMLElement({tagName:"div",className:"notyf-announcer"});t.setAttribute("aria-atomic","true"),t.setAttribute("aria-live","polite"),t.style.border="0",t.style.clip="rect(0 0 0 0)",t.style.height="1px",t.style.margin="-1px",t.style.overflow="hidden",t.style.padding="0",t.style.position="absolute",t.style.width="1px",t.style.outline="0",document.body.appendChild(t),this.a11yContainer=t;},e.prototype._announce=function(t){var r=this;this.a11yContainer.textContent="",setTimeout(function(){r.a11yContainer.textContent=t;},100);},e.prototype._getAnimationEndEventName=function(){var t=document.createElement("_fake"),r={MozTransition:"animationend",OTransition:"oAnimationEnd",WebkitTransition:"webkitAnimationEnd",transition:"animationend"},n;for(n in r)if(t.style[n]!==undefined)return r[n];return "animationend"},e}(),Da=function(){function e(t){var r=this;this.dismiss=this._removeNotification,this.notifications=new Mo,this.view=new No;var n=this.registerTypes(t);this.options=Pe(Pe({},Ji),t),this.options.types=n,this.notifications.onUpdate(function(i,a){return r.view.update(i,a)}),this.view.on(it.Dismiss,function(i){var a=i.target,s=i.event;r._removeNotification(a),a.triggerEvent(it.Dismiss,s);}),this.view.on(it.Click,function(i){var a=i.target,s=i.event;return a.triggerEvent(it.Click,s)});}return e.prototype.error=function(t){var r=this.normalizeOptions("error",t);return this.open(r)},e.prototype.success=function(t){var r=this.normalizeOptions("success",t);return this.open(r)},e.prototype.open=function(t){var r=this.options.types.find(function(a){var s=a.type;return s===t.type})||{},n=Pe(Pe({},r),t);this.assignProps(["ripple","position","dismissible"],n);var i=new Lo(n);return this._pushNotification(i),i},e.prototype.dismissAll=function(){for(;this.notifications.splice(0,1););},e.prototype.assignProps=function(t,r){var n=this;t.forEach(function(i){r[i]=r[i]==null?n.options[i]:r[i];});},e.prototype._pushNotification=function(t){var r=this;this.notifications.push(t);var n=t.options.duration!==undefined?t.options.duration:this.options.duration;n&&setTimeout(function(){return r._removeNotification(t)},n);},e.prototype._removeNotification=function(t){var r=this.notifications.indexOf(t);r!==-1&&this.notifications.splice(r,1);},e.prototype.normalizeOptions=function(t,r){var n={type:t};return typeof r=="string"?n.message=r:typeof r=="object"&&(n=Pe(Pe({},n),r)),n},e.prototype.registerTypes=function(t){var r=(t&&t.types||[]).slice(),n=Ji.types.map(function(i){var a=-1;r.forEach(function(v,l){v.type===i.type&&(a=l);});var s=a!==-1?r.splice(a,1)[0]:{};return Pe(Pe({},i),s)});return n.concat(r)},e}();new Da({duration:5e3,dismissible:true});const Pt=new Da({duration:3e3,dismissible:true,position:{x:"left",y:"top"},types:[{type:"warning",background:"orange",icon:false}]}),$o="data:image/svg+xml,%3csvg%20stroke='currentColor'%20fill='currentColor'%20stroke-width='0'%20viewBox='0%200%2024%2024'%20height='25'%20width='25'%20xmlns='http://www.w3.org/2000/svg'%20style='%20vertical-align:%20middle;%20--darkreader-inline-fill:%20currentColor;%20--darkreader-inline-stroke:%20currentColor;'%20%3e%3cpath%20d='M12%205c-3.859%200-7%203.141-7%207s3.141%207%207%207%207-3.141%207-7-3.141-7-7-7zm0%2012c-2.757%200-5-2.243-5-5s2.243-5%205-5%205%202.243%205%205-2.243%205-5%205z'%3e%3c/path%3e%3cpath%20d='M12%209c-1.627%200-3%201.373-3%203s1.373%203%203%203%203-1.373%203-3-1.373-3-3-3z'%3e%3c/path%3e%3c/svg%3e",So="data:image/svg+xml,%3csvg%20viewBox='64%2064%20896%20896'%20focusable='false'%20data-icon='arrow-up'%20width='1em'%20height='1em'%20fill='green'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M868%20545.5L536.1%20163a31.96%2031.96%200%2000-48.3%200L156%20545.5a7.97%207.97%200%20006%2013.2h81c4.6%200%209-2%2012.1-5.5L474%20300.9V864c0%204.4%203.6%208%208%208h60c4.4%200%208-3.6%208-8V300.9l218.9%20252.3c3%203.5%207.4%205.5%2012.1%205.5h81c6.8%200%2010.5-8%206-13.2z'%3e%3c/path%3e%3c/svg%3e",Vo="data:image/svg+xml,%3csvg%20viewBox='64%2064%20896%20896'%20focusable='false'%20data-icon='arrow-down'%20width='1em'%20height='1em'%20fill='red'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M862%20465.3h-81c-4.6%200-9%202-12.1%205.5L550%20723.1V160c0-4.4-3.6-8-8-8h-60c-4.4%200-8%203.6-8%208v563.1L255.1%20470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8%200-10.5%208.1-6%2013.2L487.9%20861a31.96%2031.96%200%200048.3%200L868%20478.5c4.5-5.2.8-13.2-6-13.2z'%3e%3c/path%3e%3c/svg%3e",To="data:image/svg+xml,%3csvg%20viewBox='64%2064%20896%20896'%20focusable='false'%20data-icon='download'%20width='1em'%20height='1em'%20fill='currentColor'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M505.7%20661a8%208%200%200012.6%200l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4%200-8%203.6-8%208v338.3H400c-6.7%200-10.4%207.7-6.3%2012.9l112%20141.8zM878%20626h-60c-4.4%200-8%203.6-8%208v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4%200-8%203.6-8%208v198c0%2017.7%2014.3%2032%2032%2032h684c17.7%200%2032-14.3%2032-32V634c0-4.4-3.6-8-8-8z'%3e%3c/path%3e%3c/svg%3e",Ao="data:image/svg+xml,%3csvg%20viewBox='64%2064%20896%20896'%20focusable='false'%20data-icon='star'%20width='1em'%20height='1em'%20fill='currentColor'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M908.1%20353.1l-253.9-36.9L540.7%2086.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9%2014.5L369.8%20316.2l-253.9%2036.9c-7%201-13.4%204.3-18.3%209.3a32.05%2032.05%200%2000.6%2045.3l183.7%20179.1-43.4%20252.9a31.95%2031.95%200%200046.4%2033.7L512%20754l227.1%20119.4c6.2%203.3%2013.4%204.4%2020.3%203.2%2017.4-3%2029.1-19.5%2026.1-36.9l-43.4-252.9%20183.7-179.1c5-4.9%208.3-11.3%209.3-18.3%202.7-17.5-9.5-33.7-27-36.3z'%3e%3c/path%3e%3c/svg%3e",Io="data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cstyle%3e%20.cls-1{fill:%232eb1b7;}%20.cls-2{fill:%2356b54e;}%20.cls-3{fill:%235dc6d1;}%20.cls-4{fill:%2360cc5a;}%20.cls-5{fill:%23ffce69;}%20.cls-6{fill:%236c2e7c;}%20%3c/style%3e%3c/defs%3e%3cg%20id='Icons'%3e%3crect%20class='cls-1'%20height='22'%20rx='4'%20width='22'%20x='1'%20y='1'/%3e%3cpath%20class='cls-2'%20d='M23,18v1a4,4,0,0,1-4,4H5a4,4,0,0,1-3.9-3.1l7.19-7.19a1.008,1.008,0,0,1,1.42,0l1.8,1.8a1,1,0,0,0,1.46-.05l2.33-2.65a1,1,0,0,1,1.46-.05Z'/%3e%3cpath%20class='cls-3'%20d='M23,5v9a4.025,4.025,0,0,1-1.17,2.83l-5.07-5.07a1,1,0,0,0-1.46.05l-2.33,2.65a1,1,0,0,1-1.46.05l-1.8-1.8a1.008,1.008,0,0,0-1.42,0L3.36,17.64A3.988,3.988,0,0,1,1,14V5A4,4,0,0,1,5,1H19A4,4,0,0,1,23,5Z'/%3e%3cpath%20class='cls-4'%20d='M21.83,16.83A4.025,4.025,0,0,1,19,18H5a3.931,3.931,0,0,1-1.64-.36l4.93-4.93a1.008,1.008,0,0,1,1.42,0l1.8,1.8a1,1,0,0,0,1.46-.05l2.33-2.65a1,1,0,0,1,1.46-.05Z'/%3e%3ccircle%20class='cls-5'%20cx='7'%20cy='7'%20r='2'/%3e%3c/g%3e%3cg%20data-name='Layer%204'%20id='Layer_4'%3e%3cpath%20class='cls-6'%20d='M19,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,19,0Zm3,19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3Z'/%3e%3cpath%20class='cls-6'%20d='M7,10A3,3,0,1,0,4,7,3,3,0,0,0,7,10ZM7,6A1,1,0,1,1,6,7,1,1,0,0,1,7,6Z'/%3e%3cpath%20class='cls-6'%20d='M16.707,10.293a.956.956,0,0,0-.74-.293,1.006,1.006,0,0,0-.72.341L12.217,13.8l-2.51-2.511a1,1,0,0,0-1.414,0l-4,4a1,1,0,1,0,1.414,1.414L9,13.414l1.9,1.9L8.247,18.341a1,1,0,0,0,1.506,1.318l3.218-3.678.006,0,.007-.011,3.065-3.5,2.244,2.244a1,1,0,0,0,1.414-1.414Z'/%3e%3c/g%3e%3c/svg%3e",Z="https://static.m-team.cc/static/cate/",jt={architecture:"Mteam",TL_Selector:"div.app-content__inner",LOADING_PIC:"/static/media/logo.80b63235eaf702e44a8d.png",HOST:"https://test2.m-team.cc",API:{search:{url:"/search",fullUrl:"/api/torrent/search",method:"POST"}},ICON:{SIZE:$o,SEEDERS:So,LEECHERS:Vo,DOWNLOAD:To,COLLECTION:Ao,PIN:"/static/trans.gif",PREVIEW:Io},CATEGORY:{401:{src:Z+"moviesd.png",alt:"電影/SD",color:"#c74854"},402:{src:Z+"tvhd.png",alt:"影劇/綜藝/HD",color:"#276fb8"},403:{src:Z+"tvsd.png",alt:"影劇/綜藝/SD",color:"#c74854"},404:{src:Z+"bbc.png",alt:"紀錄",color:"#23ac38"},405:{src:Z+"anime.png",alt:"動畫",color:"#996c34"},406:{src:Z+"mv.png",alt:"演唱",color:"#8a57a1"},407:{src:Z+"sport.png",alt:"運動",color:"#23ac38"},409:{src:Z+"other.png",alt:"Misc(其他)",color:"#996c34"},419:{src:Z+"moviehd.png",alt:"電影/HD",color:"#c01a20"},420:{src:Z+"moviedvd.png",alt:"電影/DVDiSo",color:"#c74854"},421:{src:Z+"moviebd.png",alt:"電影/Blu-Ray",color:"#00a0e9"},422:{src:Z+"software.png",alt:"軟體",color:"#f39800"},423:{src:Z+"game-pc-3.jpeg",alt:"PC遊戲",color:"#f39800"},427:{src:Z+"Study.png",alt:"教育(書面)",color:"#7FC269"},434:{src:Z+"flac.png",alt:"Music(無損)",color:"#8a57a1"},435:{src:Z+"tvdvd.png",alt:"影劇/綜藝/DVDiSo",color:"#4dbebd"},438:{src:Z+"tvbd.png",alt:"影劇/綜藝/BD",color:"#1897d6"},439:{src:Z+"movieremux.png",alt:"電影/Remux",color:"#1b2a51"},451:{src:Z+"Study_Video.png",alt:"教育(影片)",color:"#7FC269"},442:{src:Z+"Study_Audio.png",alt:"有聲書",color:"#7FC269"},448:{src:Z+"pcgame.png",alt:"TV遊戲",color:"#f39800"},410:{src:Z+"cenhd.png",alt:"AV(有碼)/HD Censored",color:"#F520CB"},411:{src:Z+"hgame.png",alt:"H-遊戲",color:"#f49800"},412:{src:Z+"hanime.png",alt:"H-動畫",color:"#f49800"},413:{src:Z+"hcomic.png",alt:"H-漫畫",color:"#f49800"},424:{src:Z+"censd.png",alt:"AV(有碼)/SD Censored",color:"#DA55A9"},425:{src:Z+"ivvideo.png",alt:"IV(寫真影集)",color:"#bb1e9a"},426:{src:Z+"uendvd.png",alt:"AV(無碼)/DVDiSo Uncensored",color:"#f77afa"},429:{src:Z+"uenhd.png",alt:"AV(無碼)/HD Uncensored",color:"#f52bcb"},430:{src:Z+"uensd.png",alt:"AV(無碼)/SD Uncensored",color:"#db55a9"},431:{src:Z+"cenbd.png",alt:"AV(有碼)/Blu-Ray Censored",color:"#19a7ec"},432:{src:Z+"uenbd.png",alt:"AV(無碼)/Blu-Ray Uncensored",color:"#19a7ec"},433:{src:Z+"ivpic.png",alt:"IV(寫真圖集)",color:"#bb1e9a"},436:{src:Z+"adult0day.png",alt:"AV(網站)/0Day",color:"#bb1e9a"},437:{src:Z+"cendvd.png",alt:"AV(有碼)/DVDiSo Censored",color:"#f77afa"},440:{src:Z+"gayhd.gif",alt:"AV(Gay)/HD",color:"#f52bcb"}},TAG:{"4k":{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},"8k":{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},hdr:{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},hdr10:{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},"hdr10+":{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},hlg:{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},DoVi:{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},HDRVi:{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},中字:{color:"#ad2a2a",bgColor:"#d14a4a2e"},中配:{color:"#5b3991",bgColor:"#5b399129"}},INDEX:0,Iframe_Width:1260,get_bg_color:function(){const e=getComputedStyle(document.documentElement).getPropertyValue("--background-2"),t=getComputedStyle(document.documentElement).getPropertyValue("--bg-3");return e||t||"#000000"},special:function(){let e=Po(),t=jo();return e&&t},pageLoaded:function(){}};function Po(){const e=Array.from(document.querySelectorAll(".ant-table-row-level-0 .ant-col a[href]"));return e.forEach(function(t){t.addEventListener("click",function(r){r.preventDefault(),_iframe_switch.set(1),_iframe_url.set(t.href);});}),e.length}function jo(){document.querySelectorAll(".ant-image-mask").forEach(r=>{r.remove();});const t=Array.from(document.querySelectorAll(".torrent-list__thumbnail"));return t.forEach(r=>{r.classList+=" preview_Origin";}),t.length}const Ai=".preview_Origin";document.body.addEventListener("mouseover",function(e){if(e.target.matches(Ai)){const t=e,r=e.target;handleMouseOver(t,r);}});document.body.addEventListener("mouseout",function(e){e.target.matches(Ai)&&handleMouseOut(e);});document.body.addEventListener("mousemove",function(e){if(e.target.matches(Ai)){const t=e.target;handleMouseMove(e,t);}});var Ho=Yt('<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="18" width="18" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle;"><path d="M7 7h10v2H7zm0 4h7v2H7z"></path><path d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"></path></svg>');function Ki(e){var t=Ho();C(e,t);}const De=class De{static getInstance(){return De.instance||(De.instance=new De),De.instance}constructor(){if(De.instance)return De.instance;De.instance=this,this.container=null,this.imgElements=null,this.img_bg=null,this.img_main=null,this.unsubscribe=null,this.init(),this.unsubscribe=Cr.subscribe(t=>{this.container&&(console.log(`[HoverView]<${Date.now()}> _state_hover_pic changed to ${t}, clearing preview`),this.img_main&&(this.img_main.style.objectFit=t?"contain":"scale-down"));});}init(){this.container=document.querySelector(".kp_container")||this.createPreview(),document.body.appendChild(this.container);}createPreview(){const t=Object.assign(document.createElement("div"),{className:"kp_container",style:`
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
      object-fit: ${vn(Cr)?"contain":"scale-down"};
      `}),t.appendChild(this.img_main),this.img_bg=Object.assign(document.createElement("img"),{className:"kp_img",style:`
      position: absolute;
      z-index: 10001;
      pointer-events: none;
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: blur(8px);
      opacity: 0.9;
      `}),t.appendChild(this.img_bg),t}handleMouseOver(t,r){if(this.container){if(!r){console.warn("[FALL]: imgEle is null");return}if(this.img_main&&(this.img_main.style.objectFit=vn(Cr)?"contain":"scale-down"),vn(ho)){const n=r.getAttribute("src");n&&(document.querySelectorAll(".kp_img").forEach(a=>{a.setAttribute("src",n);}),this.imgElements=r,this.updatePosition(t),this.container.style.display="block");}}}handleMouseMove(t){this.container&&this.container.style.display==="block"&&this.updatePosition(t);}updatePosition(t){const r=this.previewPosition(t);this.container.style.left=r.left,this.container.style.top=r.top,this.container.style.width=r.width,this.container.style.height=r.height;}previewPosition(t){let r=0,n=0;try{r=this.imgElements.naturalWidth,n=this.imgElements.naturalHeight;}catch{}const i=t.clientX,a=t.clientY,s=window.innerWidth,v=window.innerHeight,l={bot:{width:s,height:window.innerHeight-a},top:{width:s,height:a},right:{width:window.innerWidth-i,height:v},left:{width:i,height:v}};let d=0,o="";const u={top:{left:0,top:0,width:s+"px",height:a+"px"},bot:{left:0,top:a+"px",width:s+"px",height:window.innerHeight-a+"px"},left:{left:0,top:0,width:i+"px",height:v+"px"},right:{left:i+"px",top:0,width:window.innerWidth-i+"px",height:v+"px"}};for(const _ in l){const f=Math.min(l[_].width/r,l[_].height/n);f>d&&(d=f,o=_);}return u[o]||{left:0,top:0,width:0,height:0}}clearPreview(){document.querySelectorAll(".kp_img").forEach(t=>{t.setAttribute("src","");}),this.container&&(this.container.style.display="none");}changeState(){if(this.img_main){let t=this.img_main.style.objectFit;this.img_main.style.objectFit=t=="contain"?"scale-down":"contain";}}destroy(){this.container&&(this.container.style.display="none",this.clearPreview()),this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null);}};ti(De,"instance",null);let zt=De;function Oo(){document.querySelectorAll(".kp_img").forEach(t=>{t.setAttribute("src","");});const e=document.querySelector(".kp_container");e&&(e.style.display="none");}window.__clearPreview=Oo;zt.getInstance();const Ro="data:image/svg+xml,%3csvg%20width='256px'%20height='256px'%20viewBox='0%200%2024.00%2024.00'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20transform='matrix(1,%200,%200,%201,%200,%200)'%20%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'%20transform='translate(0,0),%20scale(1)'%20/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%23CCCCCC'%20stroke-width='0.048'%20/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M13%203L13.7071%202.29289C13.5196%202.10536%2013.2652%202%2013%202V3ZM14%2022C14.5523%2022%2015%2021.5523%2015%2021C15%2020.4477%2014.5523%2020%2014%2020V22ZM19%209H20C20%208.73478%2019.8946%208.48043%2019.7071%208.29289L19%209ZM18%2010C18%2010.5523%2018.4477%2011%2019%2011C19.5523%2011%2020%2010.5523%2020%2010H18ZM5.21799%2019.908L4.32698%2020.362H4.32698L5.21799%2019.908ZM6.09202%2020.782L6.54601%2019.891L6.54601%2019.891L6.09202%2020.782ZM6.09202%203.21799L5.63803%202.32698L5.63803%202.32698L6.09202%203.21799ZM5.21799%204.09202L4.32698%203.63803L4.32698%203.63803L5.21799%204.09202ZM13.109%208.45399L14%208V8L13.109%208.45399ZM13.546%208.89101L14%208L13.546%208.89101ZM17.2299%2017.7929C16.8394%2018.1834%2016.8394%2018.8166%2017.2299%2019.2071C17.6204%2019.5976%2018.2536%2019.5976%2018.6441%2019.2071L17.2299%2017.7929ZM15.0316%2015.2507C14.8939%2015.7856%2015.2159%2016.3308%2015.7507%2016.4684C16.2856%2016.6061%2016.8308%2016.2841%2016.9684%2015.7493L15.0316%2015.2507ZM17.9375%2020C17.3852%2020%2016.9375%2020.4477%2016.9375%2021C16.9375%2021.5523%2017.3852%2022%2017.9375%2022V20ZM17.9475%2022C18.4998%2022%2018.9475%2021.5523%2018.9475%2021C18.9475%2020.4477%2018.4998%2020%2017.9475%2020V22ZM13%202H8.2V4H13V2ZM4%206.2V17.8H6V6.2H4ZM8.2%2022H14V20H8.2V22ZM19.7071%208.29289L13.7071%202.29289L12.2929%203.70711L18.2929%209.70711L19.7071%208.29289ZM20%2010V9H18V10H20ZM4%2017.8C4%2018.3436%203.99922%2018.8114%204.03057%2019.195C4.06287%2019.5904%204.13419%2019.9836%204.32698%2020.362L6.10899%2019.454C6.0838%2019.4045%206.04612%2019.3038%206.02393%2019.0322C6.00078%2018.7488%206%2018.3766%206%2017.8H4ZM8.2%2020C7.62345%2020%207.25117%2019.9992%206.96784%2019.9761C6.69617%2019.9539%206.59545%2019.9162%206.54601%2019.891L5.63803%2021.673C6.01641%2021.8658%206.40963%2021.9371%206.80497%2021.9694C7.18864%2022.0008%207.65645%2022%208.2%2022V20ZM4.32698%2020.362C4.6146%2020.9265%205.07354%2021.3854%205.63803%2021.673L6.54601%2019.891C6.35785%2019.7951%206.20487%2019.6422%206.10899%2019.454L4.32698%2020.362ZM8.2%202C7.65645%202%207.18864%201.99922%206.80497%202.03057C6.40963%202.06287%206.01641%202.13419%205.63803%202.32698L6.54601%204.10899C6.59545%204.0838%206.69617%204.04612%206.96784%204.02393C7.25117%204.00078%207.62345%204%208.2%204V2ZM6%206.2C6%205.62345%206.00078%205.25117%206.02393%204.96784C6.04612%204.69617%206.0838%204.59545%206.10899%204.54601L4.32698%203.63803C4.13419%204.01641%204.06287%204.40963%204.03057%204.80497C3.99922%205.18864%204%205.65645%204%206.2H6ZM5.63803%202.32698C5.07354%202.6146%204.6146%203.07354%204.32698%203.63803L6.10899%204.54601C6.20487%204.35785%206.35785%204.20487%206.54601%204.10899L5.63803%202.32698ZM12%203V7.4H14V3H12ZM14.6%2010H19V8H14.6V10ZM12%207.4C12%207.66353%2011.9992%207.92131%2012.0169%208.13823C12.0356%208.36682%2012.0797%208.63656%2012.218%208.90798L14%208C14.0293%208.05751%2014.0189%208.08028%2014.0103%207.97537C14.0008%207.85878%2014%207.69653%2014%207.4H12ZM14.6%208C14.3035%208%2014.1412%207.99922%2014.0246%207.9897C13.9197%207.98113%2013.9425%207.9707%2014%208L13.092%209.78201C13.3634%209.92031%2013.6332%209.96438%2013.8618%209.98305C14.0787%2010.0008%2014.3365%2010%2014.6%2010V8ZM12.218%208.90798C12.4097%209.2843%2012.7157%209.59027%2013.092%209.78201L14%208V8L12.218%208.90798ZM18.937%2016C18.937%2016.1732%2018.8915%2016.3053%2018.6175%2016.5697C18.4638%2016.718%2018.2828%2016.8653%2018.0319%2017.074C17.7936%2017.2723%2017.5141%2017.5087%2017.2299%2017.7929L18.6441%2019.2071C18.86%2018.9913%2019.0805%2018.8033%2019.3109%2018.6116C19.5287%2018.4305%2019.7852%2018.2223%2020.0065%2018.0087C20.4825%2017.5493%2020.937%2016.9314%2020.937%2016H18.937ZM17.937%2015C18.4893%2015%2018.937%2015.4477%2018.937%2016H20.937C20.937%2014.3431%2019.5938%2013%2017.937%2013V15ZM16.9684%2015.7493C17.0795%2015.3177%2017.4724%2015%2017.937%2015V13C16.5377%2013%2015.3645%2013.957%2015.0316%2015.2507L16.9684%2015.7493ZM17.9375%2022H17.9475V20H17.9375V22Z'%20fill='%23c00000'%20/%3e%3c/g%3e%3c/svg%3e",Do="data:image/svg+xml,%3csvg%20viewBox='-2.4%20-2.4%2028.80%2028.80'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23000000'%20%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'%20/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M15.6%2015.6C15.6%2015.6%2014.25%2013.8%2012%2013.8C9.75%2013.8%208.4%2015.6%208.4%2015.6M14.7%209.3H14.709M9.3%209.3H9.309M21%2012C21%2016.9706%2016.9706%2021%2012%2021C7.02944%2021%203%2016.9706%203%2012C3%207.02944%207.02944%203%2012%203C16.9706%203%2021%207.02944%2021%2012ZM15.15%209.3C15.15%209.54853%2014.9485%209.75%2014.7%209.75C14.4515%209.75%2014.25%209.54853%2014.25%209.3C14.25%209.05147%2014.4515%208.85%2014.7%208.85C14.9485%208.85%2015.15%209.05147%2015.15%209.3ZM9.75%209.3C9.75%209.54853%209.54853%209.75%209.3%209.75C9.05147%209.75%208.85%209.54853%208.85%209.3C8.85%209.05147%209.05147%208.85%209.3%208.85C9.54853%208.85%209.75%209.05147%209.75%209.3Z'%20stroke='%23000000'%20stroke-width='1.8'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3c/g%3e%3c/svg%3e";var ke=co(()=>jt),Fo=j('<div class="card-category svelte-13et45j"><img class="card_category-img svelte-13et45j"> </div>'),zo=j('<a class="__main_title svelte-13et45j" target="_blank" rel="noopener noreferrer"> </a>'),qo=j('<div class="pic_error svelte-13et45j"><div><img style="height: 100%; width:60px; border-radius:20px;" alt="pic error" class="svelte-13et45j"></div> <div class="ant-typography" style="color: white; font-size:16px;">GAY WARNING<br>同志警告</div></div>'),Bo=j('<img class="lazy-image svelte-13et45j">'),Zo=j('<div class="pic_error svelte-13et45j" style=""><div><img style="height: 100%;width: 100px;" alt="no pic" class="svelte-13et45j"></div> <div>本种没有图片</div></div>'),Wo=j('<div class="pic_error svelte-13et45j" style=""><div><img style="height: 100%;width: 100px;" alt="pic error" class="svelte-13et45j"></div> <div class="ant-typography">图片加载失败</div></div>'),Go=j('<div class="hover-trigger svelte-13et45j" role="button" aria-label="悬浮预览" tabindex="0"><img style="pointer-events: none;" alt="PREVIEW" class="svelte-13et45j"></div>'),Yo=j(`<img style="
                    background: url(/static/media/icons.8bb5446ebbbd07050285.gif) 0 -202px;
                    height: 14px;
                    width: 14px;" alt="PIN" class="svelte-13et45j">`),Uo=j('<div class="card_info__topping svelte-13et45j"></div> &nbsp;',1),Xo=j('<div class="_tag svelte-13et45j"> </div>'),Qo=j('<div class="_tag _tag_diy svelte-13et45j">DIY</div>'),Jo=j('<div class="_tag _tag_dub svelte-13et45j">国配</div>'),Ko=j('<div class="_tag _tag_sub svelte-13et45j">中字</div>'),el=j('<div class="_tag svelte-13et45j"> </div>'),tl=j('<div class="cl-tags svelte-13et45j"><!> <!> <!> <!></div>'),rl=j(`<img style="
                  background: url(/static/media/icons.8bb5446ebbbd07050285.gif) 0 -202px;
                  height: 14px;
                  width: 14px;" alt="PIN" class="svelte-13et45j">`),nl=j('<div class="card_info__topping svelte-13et45j"></div> &nbsp;',1),il=j('<div class="_tag svelte-13et45j"> </div>'),al=j('<div class="card-index svelte-13et45j"><!> <!></div>'),sl=j('<div class="card-index card-index-right svelte-13et45j"> </div>'),ol=j('<div class="card_info-item card_info__sub_title svelte-13et45j"><div> </div></div>'),ll=j('<div class="_tag _tag_diy svelte-13et45j">DIY</div>'),cl=j('<div class="_tag _tag_dub svelte-13et45j">国配</div>'),ul=j('<div class="_tag _tag_sub svelte-13et45j">中字</div>'),vl=j('<div class="_tag svelte-13et45j"> </div>'),dl=j('<div class="cl-tags svelte-13et45j"><!> <!> <!> <!></div>'),fl=j('<div class="card_info-item card_info__dl_and_cl svelte-13et45j"><button title="(原列表的这俩按钮会消失)">下载 & 收藏</button></div>'),_l=j('<div class="card_info-item card_info__upload_time svelte-13et45j"><div> </div></div>'),hl=j('<div class="card_info-item card_info__statistics svelte-13et45j"><!> &nbsp; <b> </b> &nbsp;&nbsp; <img alt="SVG_Seeders"> &nbsp; <b> </b> &nbsp;&nbsp; <img alt="SVG_Leechers"> &nbsp; <b> </b></div>'),pl=j('<div class="card_info svelte-13et45j"><!>  <!> <!> <!> <!></div>'),gl=j(`<div class="card_holder svelte-13et45j"><!> <div class="card_title"><!></div> <div class="card_pic svelte-13et45j"><!> <!>  <div class="hover-overlay svelte-13et45j"><div class="overlay-content svelte-13et45j"><div class="__inner_index_and_size svelte-13et45j"><div class="card-index __inner_index svelte-13et45j" style="background-color:black; color:white"><!> <!></div> <button class="__iframe_button svelte-13et45j">内窗预览</button> <div class="card-index card-index-right __inner_index __inner_size svelte-13et45j"> </div></div> <div class="card-category card_info-item svelte-13et45j"><img class="card_category-img card_category_square svelte-13et45j" style="width: 36px;height: 36px;"> </div> <div style="width: 100%;" class="card_info-item card_info__sub_title svelte-13et45j"><a class="__main_title __straight svelte-13et45j" target="_blank" rel="noopener noreferrer"> </a></div> <div style="width: 100%;" class="card_info-item card_info__sub_title svelte-13et45j"><div class="__sub_title svelte-13et45j"> </div></div>  <!> <div class="card_info-item card_info__upload_time svelte-13et45j"><div> </div></div> <div class="card_info-item card_info__statistics svelte-13et45j"><div class="__center svelte-13et45j"><!> <b> </b></div> <div class="__center svelte-13et45j"><img style="width: 14px; height: 14px;" alt="SVG_Seeders" class="svelte-13et45j"> <b> </b></div> <div class="__center svelte-13et45j"><img style="width: 14px; height: 14px;" alt="SVG_Leechers" class="svelte-13et45j"> <b> </b></div> <div><button title="(原列表的这俩按钮会消失)" style="
                background-color: inherit; border-color:transparent">下载&收藏</button></div></div></div></div> <!> <!></div> <!></div>`);function ml(e,t){ot(t,false);const[r,n]=Ut(),i=()=>oe(Ra,"$_mt_categories",r),a=()=>oe(Oa,"$_mt_label",r),s=()=>oe(bi,"$_block_gay",r),v=()=>oe(fn,"$_card_radius",r),l=()=>oe(Ie,"$_card_detail",r),d=()=>oe(yi,"$_show_hover_pic",r);let o=_e(t,"torrentInfo",8),u=te(false),_=te();o().status.toppingLevel&&P(_,Array(Number(o().status.toppingLevel)).fill());const f=o().status.discount,g=o().status.discountEndTime,m={FREE:"免费",PERCENT_50:"50%"},L=()=>{const b=new Date,N=new Date(g);return Math.floor((N.getTime()-b.getTime())/(1e3*3600))};let V=te(),y=te();const x="rgba(255, 255, 255, 0.5)";let O=te(),M=te();const E=`https://${location.host}/browse?cat=`+o().category;ke().CATEGORY[o().category]||(P(y,x),Pt.open({type:"warning",message:`存在未知分类: ${o().category}`}),ke(ke().CATEGORY[o().category]={src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZmMDAwMCIvPjwvc3ZnPg==",alt:"未知分类(TG或论坛联系我)",color:x})),P(O,i()[o().category].nameChs??ke().CATEGORY[o().category].alt),P(M,i()[o().category].image?Z+i()[o().category].image:ke().CATEGORY[o().category].src),P(y,ke().CATEGORY[o().category].color??x);const $=c(y)?It(c(y)):"black";let k=te([]);o().labelsNew.length&&P(k,o().labelsNew.map(b=>{if(ke().TAG[b])return {key:b,config:ke().TAG[b]};if(a()){console.warn("[FALL]: 存在本地没有的 tag: ",b);let N;for(const F in a())if(b==a()[F].tag){N=a()[F];break}if(N)return {key:b,config:N}}return null}).filter(Boolean));function R(b){if(b===0)return "0 B";const N=["B","KB","MB","GB","TB"];let F=0,Q=b;for(;Q>=1024&&F<N.length-1;)Q/=1024,F++;return `${Q.toFixed(2).replace(/\.?0+$/,"")} ${N[F]}`}let I=te(),z=te();function w(b,N){const F=document.querySelectorAll(`a[href^="/detail/${b}"]`),Q=[];F.forEach(ue=>{if(!/\/detail\/\d+/.test(ue.href))return;const ae=ue.closest("tr");ae&&ae.querySelectorAll("button").forEach(de=>{de.querySelector("span.ant-btn-icon")&&Q.push(de);});}),Q.length?(Q[0].style.margin=0,[...new Set(Q)].forEach(ae=>{N.appendChild(ae);})):Pt.error("没找到捏, 建议在种子详情里下载收藏~");}let T=te(false),B=te(false),K=zt.getInstance(),ce=te(),le=te(),Ce=te(0);function Ee(){c(le)&&P(Ce,c(le).offsetHeight);}let ct=te(false);const X="/static/cate/gayhd.gif",ve="https://static.m-team.cc/static/media/logo.80b63235eaf702e44a8d.png";let ye=o().imageList[0]||ve,q=te(),ut,Je=te(false);const Pr=()=>{c(Je)||(Se(q,c(q).style.width="100%"),Se(q,c(q).src=ye),c(q).classList.add("loaded"),Se(q,c(q).style.opacity=1),P(Je,true),c(le)&&Ee());};function Xt(){me(Ha,"https://"+location.host+"/detail/"+o().id),me(dn,1);}Pn(()=>{c(Je)||(ut=new IntersectionObserver(b=>{b.forEach(N=>{N.isIntersecting&&(Pr(),ut.unobserve(c(q)));});},{rootMargin:"100px"}),c(q)&&!c(Je)&&ut.observe(c(q)),o().pt_fall_highlight&&c(V).scrollIntoView({behavior:"smooth"}),setTimeout(()=>{},3e3)),Ee(),c(q)&&Se(q,c(q).style.width="auto");}),Pa(()=>{ut&&ut.disconnect();}),yt(()=>c(le),()=>{c(le)&&Ee();}),yt(()=>(_t(o()),s(),c(q),c(le)),()=>{o().category==440&&s()==0&&c(q)&&(Se(q,c(q).style.width="100%"),Se(q,c(q).src=ye),c(q).classList.add("loaded"),Se(q,c(q).style.opacity=1),P(Je,true),c(le)&&Ee());}),Tr(),xt();var Ct=gl(),Qt=h(Ct);{var jr=b=>{var N=Fo();A(N,"data-href",E);var F=h(N),Q=p(F);U(()=>{A(N,"style",`
      background-color: ${c(y)??"transparent"};
      color: ${$??""}`),A(F,"src",c(M)),A(F,"alt",c(O)),D(Q,`    ${c(O)??""}`);}),C(b,N);};W(Qt,b=>{l().category&&b(jr);});}var Jt=p(Qt,2),jn=h(Jt);{var Kt=b=>{var N=zo(),F=h(N);U(()=>{A(N,"href","/detail/"+o().id),D(F,o().name);}),C(b,N);};W(jn,b=>{l().title&&b(Kt);});}var vt=p(Jt,2),er=h(vt);{var Hn=b=>{var N=nt(),F=$e(N);{var Q=ae=>{var de=qo(),S=h(de),se=h(S);A(se,"src",X),U(()=>A(de,"style",`  background-color: ${c(y)??""}`)),C(ae,de);},ue=ae=>{var de=nt(),S=$e(de);{var se=Y=>{var re=Bo();A(re,"data-src",ye),tt(re,J=>P(q,J),()=>c(q)),U(()=>{A(re,"src",c(Je)?ye:ve),A(re,"alt",o().id);}),G("error",re,()=>{P(ct,true),c(q)||console.log(`<${o().index}>[${o().id}] imgElement 丢失.`);}),C(Y,re);},pe=Y=>{var re=Zo(),J=h(re),fe=h(J);A(fe,"src",Do),C(Y,re);};W(S,Y=>{o().imageList[0]?Y(se):Y(pe,false);},true);}C(ae,de);};W(F,ae=>{s()&&o().category==440?ae(Q):ae(ue,false);});}C(b,N);},On=b=>{var N=Wo(),F=h(N),Q=h(F);A(Q,"src",Ro);var ue=p(F,2);U(ae=>A(ue,"style",`color: ${ae??""}; font-size:16px;`),[()=>It(c(y))],Ue),C(b,N);};W(er,b=>{c(ct)?b(On,false):b(Hn);});}var tr=p(er,2);{var Hr=b=>{var N=Go(),F=h(N);U(()=>A(F,"src",ke().ICON.PREVIEW)),G("click",N,()=>{K.changeState();}),G("mouseover",N,Q=>{P(T,true),K.handleMouseOver(Q,c(q));}),G("keydown",N,Q=>{Q.key==="Escape"&&K.clearPreview();}),C(b,N);};W(tr,b=>{d()&&!c(ct)&&b(Hr);});}var We=p(tr,2),Or=h(We),rr=h(Or),Rr=h(rr),nr=h(Rr);{var Dr=b=>{var N=Uo(),F=$e(N);pt(F,5,()=>c(_),hr,(Q,ue)=>{var ae=Yo();U(()=>A(ae,"src",ke().ICON.PIN)),C(Q,ae);}),C(b,N);};W(nr,b=>{o().status.toppingLevel!="0"&&b(Dr);});}var Fr=p(nr),Rn=p(Fr);{var zr=b=>{var N=Xo();pr(N,"_tag_discount_free",f=="FREE"),pr(N,"_tag_discount_50",f=="PERCENT_50");var F=h(N);U(Q=>D(F,`${m[f]??""}${Q??""}`),[()=>g?":"+L()+"小时":""],Ue),C(b,N);};W(Rn,b=>{f!="NORMAL"&&b(zr);});}var Et=p(Rr,2),qr=p(Et,2),Dn=h(qr),dt=p(rr,2);A(dt,"data-href",E);var kt=h(dt),Fn=p(kt),ir=p(dt,2),Lt=h(ir),Br=h(Lt),Zr=p(ir,2),zn=h(Zr),Wr=h(zn),ar=p(Zr,2);{var qn=b=>{var N=tl(),F=h(N);{var Q=Y=>{var re=Qo();C(Y,re);};W(F,Y=>{(Number(o().labels)&1)===1&&Y(Q);});}var ue=p(F,2);{var ae=Y=>{var re=Jo();C(Y,re);};W(ue,Y=>{(Number(o().labels)&2)===2&&Y(ae);});}var de=p(ue,2);{var S=Y=>{var re=Ko();C(Y,re);};W(de,Y=>{(Number(o().labels)&4)===4&&Y(S);});}var se=p(de,2);{var pe=Y=>{var re=nt(),J=$e(re);pt(J,1,()=>c(k),hr,(fe,be)=>{var we=el(),Mt=h(we);U(()=>{A(we,"style",`background-color: ${c(be).config.bgColor??""}; color: ${c(be).config.color??""}`),D(Mt,c(be).key);}),C(fe,we);}),C(Y,re);};W(se,Y=>{c(k).length!=0&&Y(pe);});}C(b,N);};W(ar,b=>{(Number(o().labels)||c(k).length)&&b(qn);});}var Gr=p(ar,2),Yr=h(Gr),Ur=h(Yr),Bn=p(Gr,2),Xr=h(Bn),sr=h(Xr);Ki(sr);var Qr=p(sr,2),Zn=h(Qr),Jr=p(Xr,2),or=h(Jr),Kr=p(or,2),Wn=h(Kr),en=p(Jr,2),lr=h(en),tn=p(lr,2),Gn=h(tn),cr=p(en,2),ur=h(cr);tt(cr,b=>P(I,b),()=>c(I)),tt(Or,b=>P(le,b),()=>c(le)),tt(We,b=>P(ce,b),()=>c(ce));var vr=p(We,2);{var Yn=b=>{var N=al(),F=h(N);{var Q=S=>{var se=nl(),pe=$e(se);pt(pe,5,()=>c(_),hr,(Y,re)=>{var J=rl();U(()=>A(J,"src",ke().ICON.PIN)),C(Y,J);}),C(S,se);};W(F,S=>{l().topping&&o().status.toppingLevel!="0"&&S(Q);});}var ue=p(F),ae=p(ue);{var de=S=>{var se=il();pr(se,"_tag_discount_free",f=="FREE"),pr(se,"_tag_discount_50",f=="PERCENT_50");var pe=h(se);U(Y=>D(pe,`${m[f]??""}${Y??""}`),[()=>g?":"+L()+"小时":""],Ue),C(S,se);};W(ae,S=>{l().free&&f!="NORMAL"&&S(de);});}U(()=>D(ue,` ${o().index??""}

          `)),C(b,N);};W(vr,b=>{c(u)||b(Yn);});}var Un=p(vr,2);{var rn=b=>{var N=sl(),F=h(N);U(Q=>{A(N,"style",`background-color: ${c(y)??"transparent"}; color:${$??""}`),D(F,Q);},[()=>R(o().size)],Ue),C(b,N);};W(Un,b=>{l().size&&!c(u)&&b(rn);});}var nn=p(vt,2);{var Xn=b=>{var N=pl(),F=h(N);{var Q=J=>{var fe=ol(),be=h(fe),we=h(be);U(()=>D(we,o().smallDescr)),C(J,fe);};W(F,J=>{l().sub_title&&J(Q);});}var ue=p(F,2);{var ae=J=>{var fe=dl(),be=h(fe);{var we=ge=>{var Ke=ll();C(ge,Ke);};W(be,ge=>{(o().labels&1)===1&&ge(we);});}var Mt=p(be,2);{var an=ge=>{var Ke=cl();C(ge,Ke);};W(Mt,ge=>{(o().labels&2)===2&&ge(an);});}var dr=p(Mt,2);{var Qn=ge=>{var Ke=ul();C(ge,Ke);};W(dr,ge=>{(o().labels&4)===4&&ge(Qn);});}var sn=p(dr,2);{var Jn=ge=>{var Ke=nt(),Fa=$e(Ke);pt(Fa,1,()=>c(k),hr,(za,Kn)=>{var ei=vl(),qa=h(ei);U(()=>{A(ei,"style",`background-color: ${c(Kn).config.bgColor??""}; color: ${c(Kn).config.color??""}`),D(qa,c(Kn).key);}),C(za,ei);}),C(ge,Ke);};W(sn,ge=>{c(k).length!=0&&ge(Jn);});}C(J,fe);};W(ue,J=>{l().tags&&(Number(o().labels)||c(k).length)&&J(ae);});}var de=p(ue,2);{var S=J=>{var fe=fl(),be=h(fe);tt(fe,we=>P(z,we),()=>c(z)),U(()=>A(be,"style",`
              background-color: ${(c(y)?c(y):"transparent")??""};
              color: ${$??""} ;
              border: 3px solid transparent;
              border-radius: 14px;
              overflow: hidden;
            `)),G("click",be,we=>{w(o().id,c(z)),we.target.style.display="none";}),C(J,fe);};W(de,J=>{l().download_collect&&J(S);});}var se=p(de,2);{var pe=J=>{var fe=_l(),be=h(fe),we=h(be);U(()=>D(we,`上传时间:${o().createdDate??""}`)),C(J,fe);};W(se,J=>{l().upload_time&&J(pe);});}var Y=p(se,2);{var re=J=>{var fe=hl(),be=h(fe);Ki(be);var we=p(be,2),Mt=h(we),an=p(we,2),dr=p(an,2),Qn=h(dr),sn=p(dr,2),Jn=p(sn,2),ge=h(Jn);U(()=>{D(Mt,o().status.comments),A(an,"src",ke().ICON.SEEDERS),D(Qn,o().status.seeders),A(sn,"src",ke().ICON.LEECHERS),D(ge,o().status.leechers);}),C(J,fe);};W(Y,J=>{l().statistics&&J(re);});}U(()=>A(N,"style",`
        background-color: ${(c(y)?c(y)+"b0":"transparent")??""};
        color: ${$??""}`)),C(b,N);};W(nn,b=>{(l().sub_title||l().tags||l().download_collect||l().upload_time||l().statistics)&&b(Xn);});}tt(Ct,b=>P(V,b),()=>c(V)),U(b=>{Fe(Ct,"--borderRadius",v().enabled?v().value+"px":"0"),A(vt,"style",`min-height: ${c(Ce)+24}px;`),Fe(vt,"--cateColor",c(y)+"b0"),D(Fr,` ${o().index??""}

              `),A(Et,"style",`background-color: ${c(y)??"transparent"}; color:${$??""}`),A(qr,"style",`background-color: ${c(y)??"transparent"}; color:${$??""}`),D(Dn,b),A(dt,"style",`
            height: 40px;
            background-color: ${c(y)??"transparent"};
            color: ${$??""}`),A(kt,"src",c(M)),A(kt,"alt",c(O)),D(Fn,`    ${c(O)??""}`),A(Lt,"href","/detail/"+o().id),A(Lt,"title",o().name),D(Br,o().name),D(Wr,o().smallDescr),D(Ur,`上传时间:${o().createdDate??""}`),D(Zn,o().status.comments),A(or,"src",ke().ICON.SEEDERS),D(Wn,o().status.seeders),A(lr,"src",ke().ICON.LEECHERS),D(Gn,o().status.leechers),A(cr,"style",`
              background-color: ${(c(y)?c(y):"transparent")??""};
              color: ${$??""} ;
              border-radius: 14px;
              overflow: hidden;
            `);},[()=>R(o().size)],Ue),G("click",Et,Xt),G("mousedown",ir,At(b=>{b.stopPropagation();})),G("mousedown",ur,At(b=>{b.stopPropagation();})),G("click",ur,At(b=>{w(o().id,c(I)),b.target.style.display="none";})),G("mouseenter",We,()=>{c(q)&&Se(q,c(q).style.filter="blur(2px)"),Se(ce,c(ce).style.opacity="1"),P(u,true);}),G("mousemove",We,b=>{P(B,true),c(T)&&c(B)&&K.handleMouseMove(b);}),G("mouseleave",We,()=>{c(q)&&Se(q,c(q).style.filter="none"),Se(ce,c(ce).style.opacity="0"),P(u,false),P(B,false),c(T)&&(P(T,false),K.clearPreview());}),G("mousedown",We,Aa(Xt)),C(e,Ct),lt(),n();}var yl=j('<p class="text_center svelte-1vmncc1">没有结果捏</p>'),bl=j('<main><div class="fall_holder svelte-1vmncc1" style=""><!></div></main>');function wl(e,t){var E,$,k,R;ot(t,false);const[r,n]=Ut(),i=()=>oe(yr,"$_card_layout",r),a=te();let s=_e(t,"infoList",8),v=te(s().data);c(v).length;let l=te();jt.get_bg_color(),Object.keys(c(v)).forEach((I,z)=>{Se(v,c(v)[I].index=z+1);}),console.log("Mteam_Fall:First	"+c(v).length);function d(I,z=true){let w=I.data;console.log("Mteam_Fall:New:	"+w.length),z?(o(),Object.keys(w).forEach((T,B)=>{w[T].index=B+1,B==0&&(w[T].pt_fall_highlight=true);}),P(v,[...w])):(Object.keys(w).forEach((T,B)=>{w[T].index=B+1+c(v).length,B==0&&(w[T].pt_fall_highlight=true);}),P(v,[...c(v),...w]));}function o(){P(v,[]);}function u(I,z){z=="top"&&I.scrollIntoView({behavior:"smooth"}),z=="bottom"&&(I.scrollIntoView({behavior:"auto",block:"end",inline:"nearest"}),I.scrollIntoView({behavior:"auto",block:"end",inline:"nearest"}),I.scrollIntoView({behavior:"auto",block:"end",inline:"nearest"}));}function _(I="top"){u(c(l),I);}let f,g,m;try{f=wr(localStorage.getItem("persist:persist")),g=($=(E=f.sysinfo)==null?void 0:E.sysConf)==null?void 0:$.TORRENT_LABEL_CONFIG,m=(R=(k=f.sysinfo)==null?void 0:k.categoryList)==null?void 0:R.categorys,g&&me(Oa,g),m&&me(Ra,m);}catch(I){console.error(I),console.log(f);}yt(()=>c(v),()=>{P(a,[...c(v)]);}),Tr(),xt();var L=bl(),V=h(L),y=h(V);{var x=I=>{ko(I,{animate:true,get items(){return c(a)},get minColWidth(){return i().min},get maxColWidth(){return i().max},get gap(){return i().gap},children:Ts,$$slots:{default:(z,w)=>{const T=Ue(()=>w.item);ml(z,{get torrentInfo(){return c(T)}});}}});},O=I=>{var z=yl();C(I,z);};W(y,I=>{c(a).length?I(x):I(O,false);});}tt(L,I=>P(l,I),()=>c(l)),C(e,L),si(t,"updateList",d),si(t,"clearList",o),si(t,"focusFall",_);var M=lt({updateList:d,clearList:o,focusFall:_});return n(),M}let xl="0.3.9";var Cl=Yt('<svg class="tgme_logo" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle cx="17" cy="17" fill="#40a9ff" r="17"></circle><path d="m7.06510669 16.9258959c5.22739451-2.1065178 8.71314291-3.4952633 10.45724521-4.1662364 4.9797665-1.9157646 6.0145193-2.2485535 6.6889567-2.2595423.1483363-.0024169.480005.0315855.6948461.192827.1814076.1361492.23132.3200675.2552048.4491519.0238847.1290844.0536269.4231419.0299841.65291-.2698553 2.6225356-1.4375148 8.986738-2.0315537 11.9240228-.2513602 1.2428753-.7499132 1.5088847-1.2290685 1.5496672-1.0413153.0886298-1.8284257-.4857912-2.8369905-1.0972863-1.5782048-.9568691-2.5327083-1.3984317-4.0646293-2.3321592-1.7703998-1.0790837-.212559-1.583655.7963867-2.5529189.2640459-.2536609 4.7753906-4.3097041 4.755976-4.431706-.0070494-.0442984-.1409018-.481649-.2457499-.5678447-.104848-.0861957-.2595946-.0567202-.3712641-.033278-.1582881.0332286-2.6794907 1.5745492-7.5636077 4.6239616-.715635.4545193-1.3638349.6759763-1.9445998.6643712-.64024672-.0127938-1.87182452-.334829-2.78737602-.6100966-1.12296117-.3376271-1.53748501-.4966332-1.45976769-1.0700283.04048-.2986597.32581586-.610598.8560076-.935815z" fill="#fff"></path></g></svg>');function El(e,t){let r=_e(t,"height",8,34),n=_e(t,"width",8,34);var i=Cl();U(()=>{A(i,"height",r()),A(i,"width",n());}),C(e,i);}var kl=j('<div class="modal-overlay svelte-1a87xm5" role="button" aria-hidden="true"><div class="modal-content svelte-1a87xm5" role="button" aria-hidden="true"><div class="modal-header svelte-1a87xm5"><h3 class="svelte-1a87xm5">关于 PT-Fall</h3> <button class="close-btn svelte-1a87xm5">&times;</button></div> <div class="modal-body svelte-1a87xm5"><h4 class="svelte-1a87xm5">PT-Fall 是一个专为 M-team 站点量身定制的瀑布流视图插件</h4> <p class="svelte-1a87xm5">Github: <a href="https://github.com/KesaubeEire/PT_Fall-View" target="_blank">https://github.com/KesaubeEire/PT_Fall-View</a></p> <p class="svelte-1a87xm5">GreaseFork: <a href="https://greasyfork.org/zh-CN/scripts/543925" target="_blank">https://greasyfork.org/zh-CN/scripts/543925</a></p></div></div></div>'),Ll=j('<div class="modal-overlay svelte-1a87xm5" role="button" aria-hidden="true"><div class="modal-content svelte-1a87xm5" role="button" aria-hidden="true"><div class="modal-header svelte-1a87xm5"><h3 class="svelte-1a87xm5">FAQ - 常见问题</h3> <button class="close-btn svelte-1a87xm5">&times;</button></div> <div class="modal-body svelte-1a87xm5"><h4 class="svelte-1a87xm5">Q: 如何联系反馈问题</h4> <p class="svelte-1a87xm5"><a class="__btn __btnWide svelte-1a87xm5" href="https://t.me/+Nd_qIisDjQ80ZTc9" target="_blank"><!> &nbsp;Telegram</a></p> <h4 class="svelte-1a87xm5">Q: 找不到悬浮框</h4> <button class="__btn svelte-1a87xm5">重置悬浮框位置</button> <p class="svelte-1a87xm5"><br>可以通过拖拽悬浮框顶部的颜色条来移动悬浮框的位置 <br>从 PTPP 那里来的灵感 ( 感恩 ||T|| 佬 )</p> <h4 class="svelte-1a87xm5">Q: 插件没有生效怎么办</h4> <p class="svelte-1a87xm5">可能是浏览器缓存了请求<br>尝试使用 Ctrl+Shift+R / Ctrl+F5 强制刷新页面</p> <h4 class="svelte-1a87xm5">Q: 如何切换瀑布流视图</h4> <p class="svelte-1a87xm5">点击悬浮面板中的第一个图标(瀑布/列表)按钮<br>即可在瀑布流和原列表视图间切换</p> <h4 class="svelte-1a87xm5">Q: 如何调整卡片布局</h4> <p class="svelte-1a87xm5">点击悬浮面板中的"配置"按钮<br>可以调整卡片的最小 / 最大宽度、间隔等参数</p> <h4 class="svelte-1a87xm5">Q: 快捷键</h4> <p class="svelte-1a87xm5"><span class="modal-code svelte-1a87xm5">x</span> 可以切换瀑布流视图</p> <p class="svelte-1a87xm5"><span class="modal-code svelte-1a87xm5">ESC</span> 可以从 次级菜单 / 配置菜单 / iframe 中退出</p> <h4 class="svelte-1a87xm5">Q: 深色模式颜色有些不对劲怎么办?</h4> <p class="svelte-1a87xm5">先刷新一下试试, 有些字体颜色不能即时更改<br>刷新后就可以了<br>还有颜色不对劲的 telegram 上截图告诉我</p></div></div></div>'),Ml=j('<div class="entry_mteam"><div class="ant-typography" style="line-height: 1.5; text-align: center;"><button class="__btn svelte-1a87xm5" id="_ptFall_about">PT-Fall<br><span style="font-weight: 600;"></span></button> <button class="__btn svelte-1a87xm5" id="_ptFall_faq">常见问题<br>FAQ</button></div></div> <!> <!>',1);function Nl(e,t){ot(t,false);const[r,n]=Ut(),i=()=>oe(xr,"$_isFallView",r),a=()=>oe(Vt,"$_textColor",r);let s=te(false),v=te(false);function l(){P(s,true);}function d(){P(s,false);}function o(){P(v,true);}function u(){P(v,false);}let _=te();yt(()=>i(),()=>{P(_,i()?"#4ff74f":"yellow");}),Tr(),xt();var f=Ml();G("keydown",Er,$=>{$.key==="Escape"&&(d(),u());},true);var g=$e(f),m=h(g),L=h(m),V=p(h(L),2);V.textContent=`[v${xl}]`;var y=p(L,2),x=p(g,2);{var O=$=>{var k=kl(),R=h(k),I=h(R),z=p(h(I),2);U(()=>A(R,"style",`color: ${a().t3}`)),G("click",z,u),G("click",R,At(function(w){Ui.call(this,t,w);})),Rt(3,k,()=>Dt,()=>({duration:200})),G("click",k,u),C($,k);};W(x,$=>{c(v)&&$(O);});}var M=p(x,2);{var E=$=>{var k=Ll(),R=h(k),I=h(R),z=p(h(I),2),w=p(I,2),T=p(h(w),2),B=h(T),K=h(B);El(K,{height:24,width:24});var ce=p(T,4),le=p(ce,18),Ce=h(le),Ee=p(le,2),ct=h(Ee);U(()=>{A(R,"style",`color: ${a().t3}`),A(B,"style",`color: ${a().t2}`),Fe(B,"--hover","#40a9ff"),A(ce,"style",`color: ${a().t2}`),Fe(ce,"--hover","#40a9ff"),A(Ce,"style",`color: ${a().t1}`),A(ct,"style",`color: ${a().t1}`);}),G("click",z,d),G("click",ce,()=>{me(mi,{x:0,y:0});}),G("click",R,At(function(X){Ui.call(this,t,X);})),Rt(3,k,()=>Dt,()=>({duration:200})),G("click",k,d),C($,k);};W(M,$=>{c(s)&&$(E);});}U(()=>{A(L,"style",`color: ${a().t2}`),Fe(L,"--hover","green"),Fe(V,"color",c(_)),A(y,"style",`color: ${a().t2}`),Fe(y,"--hover","#40a9ff");}),G("click",L,o),G("click",y,l),C(e,f),lt(),n();}function $l(e,t){ot(t,false);const[r,n]=Ut(),i=()=>oe(xr,"$_isFallView",r),a=()=>oe(Vt,"$_textColor",r);let s,v,l,d=true,o=false,u=getComputedStyle(document.documentElement).getPropertyValue("--bg-2").trim(),_;const f=te(document.createElement("div"));c(f).classList.add("Fall_DOM"),ft(jt.TL_Selector,y),ft('a[href="/index"][target="_self"]',w=>{if(s)Pt.error("未找到目标链接元素"),console.warn("[FALL]: 未找到目标链接元素");else {w.insertAdjacentHTML("afterend",'<div class="ptFallReadme"></div>');const T=w.parentNode.querySelector(".ptFallReadme");s=Nr(Nl,{target:T});}}),Pn(()=>{z(),console.log("=====> 启动劫持 pushState 方法 <====="),R(),_=new MutationObserver(()=>{const w=getComputedStyle(document.documentElement).getPropertyValue("--bg-2").trim();w!==u&&(u=w,console.log("--bg-2 变化:",u),z());}),_.observe(document.documentElement,{attributes:true,attributeFilter:["style","class","data-theme"]});}),Pa(()=>{_&&_.disconnect(),V();});let g=te(),m=te();function L(){ft(".ant-pagination",w=>{w&&w.parentNode&&w.parentNode!==c(f)&&P(m,w.parentNode),w&&(P(g,w),i()&&c(f).appendChild(c(g)));});}function V(){c(g)&&c(g).parentNode&&c(g).parentNode.removeChild(c(g));}function y(w){if(w.parentNode){console.log("元素已找到，正在插入兄弟节点:",w),po();const T={path:"/search",method:"POST"};window.addEventListener("req>POST->/search",B=>{console.log(`<PT-Fall>[Request]  (${T.method} -> ${T.path})
`,B.detail),B.detail.url.includes("api/torrent/search")&&!B.detail.body.includes('"mode":"waterfall"')?o=true:o=false,d=true,d?v&&v.focusFall():v&&v.focusFall("bottom"),V();}),window.addEventListener("res>POST->/search",B=>{const K=JSON.parse(B.detail.data);if(!o){console.warn(`<PT-Fall>[未被接受的Response] (${T.method}->${T.path})[通过事件捕获]:
`,K);return}console.log(`<PT-Fall>[Response] (${T.method}->${T.path})[通过事件捕获]:
`,K),$(i()),x(w),Pt.success("捕获到 /search !"),l=K.data,v?v.updateList(l,d):v=Nr(wl,{target:c(f),props:{infoList:l}}),L();});}else Pt.error(`找不到指定节点
若总是如此请报告bug`),console.error("无法插入：目标元素没有父节点");}function x(w){const T=w.parentNode.querySelector(".ant-spin-nested-loading"),B=document.createElement("div");B.id="_shield",B.addEventListener("click",()=>{confirm(`[PT-Fall]
如果你认为你被阻挡了请点击确认
这个阻挡效果会被取消
这可能导致显示错误
请确认您不在一般的瀑布流视图下
比如您在逛论坛或者在发种之类的被遮挡了再点`)&&(B.style.display="none");}),T.querySelector("#_shield")||T.appendChild(B);const K=document.createElement("div");K.id="_fallHolder",T.querySelector("#_fallHolder")||(T.appendChild(K),K.appendChild(c(f)));}let O="",M="",E="";function $(w){Se(f,c(f).style.display=w?"block":"none"),ft("#_fallHolder",T=>{T.style.display=w?"block":"none";}),ft("#_shield",T=>{T.style.display=w?"block":"none";}),ft(jt.TL_Selector+".flex",T=>{M||(M=getComputedStyle(T).getPropertyValue("max-width"),E=getComputedStyle(T).getPropertyValue("padding-left")),T.style.maxWidth=w?"none":M,T.style.paddingLeft=w?"80px":E,T.style.paddingRight=w?"80px":E;}),ft(jt.TL_Selector+" .mx-auto",T=>{O||(O=T.style.margin),T.style.margin=w?0:O;});}window.changeFallView=$;const k=history.pushState;function R(){history.pushState=function(w,T,B){console.log(`%c ====> URL跳转劫持: %c${B}`,"color: cyan","color: white"),B.includes("/browse")||B=="/waterfall"?console.log(`--->属于 browse 范围: ${B}`):(console.warn(`[FALL]: --->不属于 browse 范围: ${B}`),$(false)),k.apply(history,arguments);};}function I(w){return getComputedStyle(document.documentElement).getPropertyValue(w).trim()}function z(){he(Vt,H(a).t1=It(I("--bg-1")),H(a)),he(Vt,H(a).t2=It(I("--bg-2")),H(a)),he(Vt,H(a).t3=It(I("--bg-3")),H(a));}yt(()=>(c(f),i(),c(g),c(m)),()=>{c(f)&&(i()&&c(g)&&c(f).appendChild(c(g)),!i()&&c(g)&&c(m)&&c(m).appendChild(c(g)));}),Tr(),xt(),lt(),n();}function ea(e){if(location.hostname.includes("m-team"))return jt}var Sl=j('<div class="switch-container svelte-18ntgfp"><div class="switch-background svelte-18ntgfp"><div class="switch-slider svelte-18ntgfp"></div></div></div>');function Le(e,t){let r=_e(t,"checked",12,false);function n(){r(!r());}var i=Sl(),a=h(i),s=h(a);U(()=>pr(s,"checked",r())),G("click",i,n),C(e,i);}var Vl=Yt(`<svg viewBox="0 0 32 32" width="20" height="20" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><defs><style>.cls-1 {
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2px;
      }</style></defs><g data-name="43-browser" id="_43-browser"><rect class="cls-1" height="30" width="30" x="1" y="1"></rect><line class="cls-1" x1="1" x2="31" y1="9" y2="9"></line><line class="cls-1" x1="5" x2="7" y1="5" y2="5"></line><line class="cls-1" x1="11" x2="13" y1="5" y2="5"></line><line class="cls-1" x1="9" x2="25" y1="16" y2="16"></line><line class="cls-1" x1="7" x2="25" y1="20" y2="20"></line><line class="cls-1" x1="7" x2="25" y1="24" y2="24"></line></g></svg>`);function Tl(e){var t=Vl();C(e,t);}var Al=Yt(`<svg width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><defs><style>.cls-1 {
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2px;
      }</style></defs><g data-name="80-setting" id="_80-setting"><circle class="cls-1" cx="10" cy="6" r="3"></circle><circle class="cls-1" cx="22" cy="16" r="3"></circle><circle class="cls-1" cx="10" cy="26" r="3"></circle><line class="cls-1" x1="7" x2="1" y1="6" y2="6"></line><line class="cls-1" x1="15" x2="1" y1="16" y2="16"></line><line class="cls-1" x1="7" x2="1" y1="26" y2="26"></line><line class="cls-1" x1="31" x2="17" y1="26" y2="26"></line><line class="cls-1" x1="31" x2="25" y1="16" y2="16"></line><line class="cls-1" x1="31" x2="17" y1="6" y2="6"></line></g></svg>`);function Il(e){var t=Al();C(e,t);}var Pl=Yt('<svg enable-background="new 0 0 64 64" width="20" height="20" id="Layer_1" version="1.1" viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19,2.875H3.5c-0.829,0-1.5,0.671-1.5,1.5v19.979c0,0.829,0.671,1.5,1.5,1.5H19c0.829,0,1.5-0.671,1.5-1.5V4.375  C20.5,3.546,19.829,2.875,19,2.875z M17.5,22.854H5V5.875h12.5V22.854z"></path><path d="M19,28.773H3.5c-0.829,0-1.5,0.671-1.5,1.5v6.166c0,0.828,0.671,1.5,1.5,1.5H19c0.829,0,1.5-0.672,1.5-1.5v-6.166  C20.5,29.445,19.829,28.773,19,28.773z M17.5,34.939H5v-3.166h12.5V34.939z"></path><path d="M19,40.859H3.5c-0.829,0-1.5,0.672-1.5,1.5v17.266c0,0.828,0.671,1.5,1.5,1.5H19c0.829,0,1.5-0.672,1.5-1.5V42.359  C20.5,41.531,19.829,40.859,19,40.859z M17.5,58.125H5V43.859h12.5V58.125z"></path><path d="M40,2.875H24.5c-0.829,0-1.5,0.671-1.5,1.5v14.25c0,0.829,0.671,1.5,1.5,1.5H40c0.828,0,1.5-0.671,1.5-1.5V4.375  C41.5,3.546,40.828,2.875,40,2.875z M38.5,17.125H26V5.875h12.5V17.125z"></path><path d="M40,23.125H24.5c-0.829,0-1.5,0.671-1.5,1.5V46.5c0,0.828,0.671,1.5,1.5,1.5H40c0.828,0,1.5-0.672,1.5-1.5V24.625  C41.5,23.796,40.828,23.125,40,23.125z M38.5,45H26V26.125h12.5V45z"></path><path d="M40,51H24.5c-0.829,0-1.5,0.672-1.5,1.5v7.125c0,0.828,0.671,1.5,1.5,1.5H40c0.828,0,1.5-0.672,1.5-1.5V52.5  C41.5,51.672,40.828,51,40,51z M38.5,58.125H26V54h12.5V58.125z"></path><path d="M60.5,2.875H45c-0.828,0-1.5,0.671-1.5,1.5v35.171c0,0.828,0.672,1.5,1.5,1.5h15.5c0.828,0,1.5-0.672,1.5-1.5V4.375  C62,3.546,61.328,2.875,60.5,2.875z M59,38.046H46.5V5.875H59V38.046z"></path><path d="M60.5,44.346H45c-0.828,0-1.5,0.672-1.5,1.5v13.779c0,0.828,0.672,1.5,1.5,1.5h15.5c0.828,0,1.5-0.672,1.5-1.5V45.846  C62,45.018,61.328,44.346,60.5,44.346z M59,58.125H46.5V47.346H59V58.125z"></path></svg>');function jl(e){var t=Pl();C(e,t);}var Hl=j('<div><!></div> <div class="flowBtn_text svelte-1gujon8">瀑布</div>',1),Ol=j('<div><!></div> <div class="flowBtn_text svelte-1gujon8">列表</div>',1),Rl=j('<div class="config-item svelte-1gujon8"><span> </span> <!></div>'),Dl=j('<div class="config-item svelte-1gujon8"><span> </span> <input type="range" min="0" max="40" step="1" class="svelte-1gujon8"></div>'),Fl=j('<div class="config-menu-overlay svelte-1gujon8"><div class="config-menu svelte-1gujon8"><div class="config-menu-header svelte-1gujon8"><span style="font-size: 18px; font-weight: bold;">配置菜单</span> <button class="close-btn svelte-1gujon8">&times;</button></div> <div class="config-menu-content svelte-1gujon8"><h3 class="svelte-1gujon8"># 卡片布局</h3> <div class="config-item svelte-1gujon8"><span> </span> <input type="range" min="200" step="1" list="values" class="svelte-1gujon8"></div> <div class="config-item svelte-1gujon8"><span> </span> <input type="range" step="1" list="values" class="svelte-1gujon8"></div> <div class="config-item svelte-1gujon8"><span> </span> <input type="range" min="0" max="100" step="1" list="values" class="svelte-1gujon8"></div> <div class="config-item svelte-1gujon8"><span> </span> <!></div> <!> <h3 class="svelte-1gujon8"># 卡片常驻信息展示</h3>  <div class="config-item svelte-1gujon8"><span> </span> <!></div> <div class="config-item svelte-1gujon8"><span> </span> <!></div> <div class="config-item svelte-1gujon8"><span> </span> <!></div> <div class="config-item svelte-1gujon8"><span> </span> <!></div> <div class="config-item svelte-1gujon8"><span> </span> <!></div> <div class="config-item svelte-1gujon8"><span> </span> <!></div> <div class="config-item svelte-1gujon8"><span> </span> <!></div> <div class="config-item svelte-1gujon8"><span> </span> <!></div> <div class="config-item svelte-1gujon8"><span> </span> <!></div> <div class="config-item svelte-1gujon8"><span> </span> <!></div> <h3 class="svelte-1gujon8"># 卡片屏蔽</h3> <div class="config-item svelte-1gujon8"><span> </span> <!></div> <h3 class="svelte-1gujon8"># 卡片样式</h3> <div class="config-item svelte-1gujon8"><span> </span> <!></div> <!></div></div></div>'),zl=j('<div class="flowP svelte-1gujon8"><div class="flowPDragger svelte-1gujon8" role="button" tabindex="0" aria-hidden="true"><!></div> <div class="flowPHolder ant-typography svelte-1gujon8"><button class="flowBtn svelte-1gujon8"><!></button> <button class="flowBtn svelte-1gujon8"><div><!></div> <div class="flowBtn_text svelte-1gujon8">配置</div></button> <button class="flowBtn svelte-1gujon8">清除悬浮预览图</button></div></div> <!>',1);function ql(e,t){ot(t,false);const[r,n]=Ut(),i=()=>oe(mi,"$_panelPos",r),a=()=>oe(xr,"$_isFallView",r),s=()=>oe(Vt,"$_textColor",r),v=()=>oe(mr,"$_side_panel_switch",r),l=()=>oe(yr,"$_card_layout",r),d=()=>oe(yi,"$_show_hover_pic",r),o=()=>oe(Cr,"$_state_hover_pic",r),u=()=>oe(Ie,"$_card_detail",r),_=()=>oe(bi,"$_block_gay",r),f=()=>oe(fn,"$_card_radius",r);let g=te(),m=false,L=0,V=0;function y(X,ve,ye){return X<=ve&&(X=ve),X>=ye&&(X=ye),X}const x=X=>{X.preventDefault(),m=true,L=X.clientX-c(g).getBoundingClientRect().left,V=X.clientY-c(g).getBoundingClientRect().top;},O=X=>{if(!m)return;const ve=y(X.clientX-L,0,window.innerWidth-(c(g).getBoundingClientRect().width+5)),ye=y(X.clientY-V,0,window.innerHeight-(c(g).getBoundingClientRect().height+5));me(mi,{x:ve,y:ye});},M=()=>{m=false;};Pn(()=>(window.addEventListener("mousemove",O),window.addEventListener("mouseup",M),()=>{window.removeEventListener("mousemove",O),window.removeEventListener("mouseup",M);})),xt();var E=zl();G("keydown",Er,X=>{X.key==="x"&&(me(xr,!a()),window.changeFallView(a()));},true);var $=$e(E),k=h($),R=h(k);W(R,X=>{});var I=p(k,2),z=h(I),w=h(z);{var T=X=>{var ve=Hl(),ye=$e(ve),q=h(ye);jl(q),C(X,ve);},B=X=>{var ve=Ol(),ye=$e(ve),q=h(ye);Tl(q),C(X,ve);};W(w,X=>{a()?X(T):X(B,false);});}var K=p(z,2),ce=h(K),le=h(ce);Il(le);var Ce=p(K,2);tt($,X=>P(g,X),()=>c(g));var Ee=p($,2);{var ct=X=>{var ve=Fl(),ye=h(ve),q=h(ye),ut=p(h(q),2),Je=p(q,2),Pr=p(h(Je),2),Xt=h(Pr),Ct=h(Xt),Qt=p(Xt,2),jr=p(Pr,2),Jt=h(jr),jn=h(Jt),Kt=p(Jt,2),vt=p(jr,2),er=h(vt),Hn=h(er),On=p(er,2),tr=p(vt,2),Hr=h(tr),We=h(Hr),Or=p(Hr,2);Le(Or,{get checked(){return oi(),d()},set checked(S){me(yi,S);},$$legacy:true});var rr=p(tr,2);{var Rr=S=>{var se=Rl(),pe=h(se),Y=h(pe),re=p(pe,2);Le(re,{get checked(){return oi(),o()},set checked(J){me(Cr,J);},$$legacy:true}),U(()=>D(Y,`预览大图默认状态: ${(o()?"尽量铺满":"尽量原图大小")??""}`)),C(S,se);};W(rr,S=>{d()&&S(Rr);});}var nr=p(rr,4),Dr=h(nr),Fr=h(Dr),Rn=p(Dr,2);Le(Rn,{get checked(){return u().category},set checked(S){he(Ie,H(u).category=S,H(u));},$$legacy:true});var zr=p(nr,2),Et=h(zr),qr=h(Et),Dn=p(Et,2);Le(Dn,{get checked(){return u().title},set checked(S){he(Ie,H(u).title=S,H(u));},$$legacy:true});var dt=p(zr,2),kt=h(dt),Fn=h(kt),ir=p(kt,2);Le(ir,{get checked(){return u().topping},set checked(S){he(Ie,H(u).topping=S,H(u));},$$legacy:true});var Lt=p(dt,2),Br=h(Lt),Zr=h(Br),zn=p(Br,2);Le(zn,{get checked(){return u().free},set checked(S){he(Ie,H(u).free=S,H(u));},$$legacy:true});var Wr=p(Lt,2),ar=h(Wr),qn=h(ar),Gr=p(ar,2);Le(Gr,{get checked(){return u().size},set checked(S){he(Ie,H(u).size=S,H(u));},$$legacy:true});var Yr=p(Wr,2),Ur=h(Yr),Bn=h(Ur),Xr=p(Ur,2);Le(Xr,{get checked(){return u().sub_title},set checked(S){he(Ie,H(u).sub_title=S,H(u));},$$legacy:true});var sr=p(Yr,2),Qr=h(sr),Zn=h(Qr),Jr=p(Qr,2);Le(Jr,{get checked(){return u().tags},set checked(S){he(Ie,H(u).tags=S,H(u));},$$legacy:true});var or=p(sr,2),Kr=h(or),Wn=h(Kr),en=p(Kr,2);Le(en,{get checked(){return u().download_collect},set checked(S){he(Ie,H(u).download_collect=S,H(u));},$$legacy:true});var lr=p(or,2),tn=h(lr),Gn=h(tn),cr=p(tn,2);Le(cr,{get checked(){return u().upload_time},set checked(S){he(Ie,H(u).upload_time=S,H(u));},$$legacy:true});var ur=p(lr,2),vr=h(ur),Yn=h(vr),Un=p(vr,2);Le(Un,{get checked(){return u().statistics},set checked(S){he(Ie,H(u).statistics=S,H(u));},$$legacy:true});var rn=p(ur,4),nn=h(rn),Xn=h(nn),b=p(nn,2);Le(b,{get checked(){return oi(),_()},set checked(S){me(bi,S);},$$legacy:true});var N=p(rn,4),F=h(N),Q=h(F),ue=p(F,2);Le(ue,{get checked(){return f().enabled},set checked(S){he(fn,H(f).enabled=S,H(f));},$$legacy:true});var ae=p(N,2);{var de=S=>{var se=Dl(),pe=h(se),Y=h(pe),re=p(pe,2);U(()=>D(Y,`圆角大小: ${f().value??""} px`)),ln(re,()=>f().value,J=>he(fn,H(f).value=J,H(f))),C(S,se);};W(ae,S=>{f().enabled&&S(de);});}U((S,se,pe,Y,re)=>{Fe(ve,"--get-text-color",S),A(ye,"style",`background-color: ${se??""};`),D(Ct,`最小宽度: ${l().min??""} px`),A(Qt,"max",pe),D(jn,`最大宽度: ${l().max??""} px`),A(Kt,"min",Y),A(Kt,"max",re),D(Hn,`卡片间隔: ${l().gap??""} px`),D(We,`显示鼠标悬浮预览大图: ${d()??""}`),D(Fr,`分区: ${u().category??""}`),D(qr,`标题: ${u().title??""}`),D(Fn,`置顶: ${u().topping??""}`),D(Zr,`免费: ${u().free??""}`),D(qn,`大小: ${u().size??""}`),D(Bn,`副标题: ${u().sub_title??""}`),D(Zn,`标签: ${u().tags??""}`),D(Wn,`下载&收藏: ${u().download_collect??""}`),D(Gn,`上传时间: ${u().upload_time??""}`),D(Yn,`评论/上传/下载: ${u().statistics??""}`),D(Xn,`屏蔽 gay 区: ${_()??""}`),D(Q,`自定义圆角: ${f().enabled??""}`);},[()=>It(ea().get_bg_color()),()=>ea().get_bg_color(),()=>Math.max(400,l().max),()=>Math.min(200,l().min),()=>Math.max(800,l().min*2)],Ue),G("click",ut,()=>me(mr,false)),ln(Qt,()=>l().min,S=>he(yr,H(l).min=S,H(l))),ln(Kt,()=>l().max,S=>he(yr,H(l).max=S,H(l))),ln(On,()=>l().gap,S=>he(yr,H(l).gap=S,H(l))),Rt(3,ve,()=>Dt,()=>({duration:100})),G("click",ve,Aa(()=>me(mr,false))),C(X,ve);};W(Ee,X=>{v()&&X(ct);});}U(()=>{A($,"style",`top:${i().y??""}px; left:${i().x??""}px;`),Fe($,"--isFallView",a()?"#4ff74f":"yellow"),Fe(I,"--get-text-color",s().t2);}),G("mousedown",k,x),G("click",z,()=>{me(xr,!a()),window.changeFallView(a());}),G("click",K,()=>{me(mr,!v());}),G("click",Ce,()=>{window.__clearPreview();}),C(e,E),lt(),n();}var Bl=Yt('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_iconCarrier"><circle cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="1.5"></circle><path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path></g></svg>');function Zl(e){var t=Bl();C(e,t);}var Wl=j('<div id="_iframe" class="svelte-1axpxde"><div class="_iframe svelte-1axpxde"><iframe frameborder="0" style="width: 1000px;" class="svelte-1axpxde"></iframe> <div class="_iframeCloseBtn svelte-1axpxde"><!></div></div></div>');function Gl(e,t){ot(t,false);const[r,n]=Ut(),i=()=>oe(dn,"$_iframe_switch",r),a=()=>oe(Ha,"$_iframe_url",r);let s=_e(t,"_app",8),v;function l(){me(dn,0);}function d(f){f.key==="Escape"&&(me(dn,0),me(mr,false),zt.getInstance()&&zt.getInstance().clearPreview());}v=true,v&&Nr($l,{target:s()}),Nr(ql,{target:s()}),console.log("-------------->  PT_Fall Launch   <--------------"),xt();var o=nt();G("keydown",Er,d,true);var u=$e(o);{var _=f=>{var g=Wl(),m=h(g),L=h(m),V=p(L,2),y=h(V);Zl(y),U(()=>{A(L,"src",a()),A(L,"title",a());}),G("load",L,x=>{const O=x.target.contentDocument||x.target.contentWindow.document;if(!O){console.error("无法访问iframe内容文档, 可能是由于跨域限制。"),Pt.error("无法访问iframe内容文档, 可能是由于跨域限制。");return}const M=()=>{const $=O.querySelector(".ant-card.detail-view");$&&($.scrollIntoView({behavior:"smooth"}),console.log("成功滚动到目标元素！"),clearInterval(E));},E=setInterval(M,500);M();}),G("click",L,At(x=>{x.stopPropagation();})),G("click",V,l),G("click",g,l),Rt(3,g,()=>Dt,()=>({duration:300})),C(f,g);};W(u,f=>{i()&&f(_);});}C(e,o),lt(),n();}const wi=document.createElement("div");document.body.append(wi);Nr(Gl,{target:wi,props:{_app:wi}});

})();