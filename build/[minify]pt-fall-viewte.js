// ==UserScript==
// @name            PT瀑布流视图
// @name:en         PT_Fall-View
// @namespace       vite-plugin-monkey
// @version         0.3.3
// @author          Kesa
// @description     PT瀑布流视图(2025重构)
// @description:en  PT Fall/Masonry View (restructured 2025)
// @license         MIT
// @icon            https://avatars.githubusercontent.com/u/23617963
// @match           https://next.m-team.cc/*
// @match           https://kp.m-team.cc/*
// @match           https://xp.m-team.io/*
// @match           https://xp.m-team.cc/*
// @match           https://ap.m-team.cc/*
// @match           https://test2.m-team.cc/*
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

(n=>{if(typeof GM_addStyle=="function"){GM_addStyle(n);return}const r=document.createElement("style");r.textContent=n,document.head.append(r)})(` button:focus,
button:focus-visible {
  /* outline: 2px auto -webkit-focus-ring-color; */
  /* outline: none; */
  outline: 3px solid var(--bg-3);
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
\r
  .card_holder.svelte-1ytaoom {\r
    border-radius: var(--borderRadius);\r
    overflow: hidden;\r
  }\r
\r
  /* \u5361\u7247\u5206\u7C7B */\r
  .card-category.svelte-1ytaoom {\r
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
  .card_category-img.svelte-1ytaoom {\r
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
  .card_category_square.svelte-1ytaoom {\r
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
  .card_pic.svelte-1ytaoom img:where(.svelte-1ytaoom) {\r
    width: 100%;\r
    height: 100%;\r
  }\r
  .lazy-image.svelte-1ytaoom {\r
    opacity: 0.2;\r
    transition: opacity 0.5s ease;\r
  }\r
  /* FIXME: \u4E0D\u77E5\u9053\u4E3A\u5565\u8FD9\u91CC\u4E0D\u8D77\u4F5C\u7528 */\r
  /* (unused) .lazy-image.loaded {\r
    opacity: 1;\r
  }*/\r
  .card_info.svelte-1ytaoom {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    flex-direction: column;\r
\r
    padding: 0px 8px;\r
\r
    & .card_info-item:where(.svelte-1ytaoom) {\r
      display: flex;\r
      justify-content: space-around;\r
      align-items: center;\r
\r
      /* min-height: 32px; */\r
      width: 100%;\r
    }\r
\r
    & .card_info__dl_and_cl:where(.svelte-1ytaoom) {\r
      display: flex;\r
      justify-content: center;\r
      align-items: center;\r
\r
      height: 32px;\r
    }\r
\r
    & .card_info__statistics:where(.svelte-1ytaoom) {\r
      display: flex;\r
      justify-content: center;\r
      align-items: center;\r
    }\r
  }\r
\r
  .card_info__topping.svelte-1ytaoom {\r
    display: flex;\r
    /* justify-content: center; */\r
    align-items: center;\r
  }\r
\r
  .__main_title.svelte-1ytaoom {\r
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
  .cl-tags.svelte-1ytaoom {\r
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
  ._tag.svelte-1ytaoom {\r
    /* padding: 1px 6px; */\r
    height: 1.3em;\r
    line-height: 1.3em;\r
    padding: 0 0.5em;\r
    border-radius: 6px;\r
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r
    font-size: 12px;\r
  }\r
  ._tag_diy.svelte-1ytaoom {\r
    color: #ffffff;\r
    background-color: rgb(90, 189, 72);\r
  }\r
  ._tag_dub.svelte-1ytaoom {\r
    color: #ffffff;\r
    background-color: rgb(90, 59, 20);\r
  }\r
  ._tag_sub.svelte-1ytaoom {\r
    color: #ffffff;\r
    background-color: rgb(59, 74, 127);\r
  }\r
  ._tag_discount_50.svelte-1ytaoom {\r
    background-color: rgb(255, 85, 0);\r
    color: #ffffff;\r
  }\r
  ._tag_discount_free.svelte-1ytaoom {\r
    background-color: rgb(16, 142, 233);\r
    color: #ffffff;\r
  }\r
\r
  .card_pic.svelte-1ytaoom {\r
    position: relative;\r
    display: flex;\r
    align-items: center;\r
    justify-content: center;\r
    background-color: var(--cateColor);\r
  }\r
\r
  .pic_error.svelte-1ytaoom {\r
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
  .card-index.svelte-1ytaoom {\r
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
  .card-index-right.svelte-1ytaoom {\r
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
  .hover-trigger.svelte-1ytaoom {\r
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
  .hover-overlay.svelte-1ytaoom {\r
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
  .overlay-content.svelte-1ytaoom {\r
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
    & .card_info-item:where(.svelte-1ytaoom) {\r
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
    & .__main_title:where(.svelte-1ytaoom) {\r
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
    & .__sub_title:where(.svelte-1ytaoom) {\r
      white-space: pre-wrap;\r
      word-wrap: break-word;\r
      overflow-wrap: break-word;\r
      overflow: hidden;\r
    }\r
\r
    & .card_info__statistics:where(.svelte-1ytaoom) {\r
      display: flex;\r
      justify-content: space-evenly;\r
      align-items: center;\r
\r
      height: 32px;\r
    }\r
  }\r
\r
  .__center.svelte-1ytaoom {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
  }\r
\r
  .__inner_index_and_size.svelte-1ytaoom {\r
    display: flex;\r
    justify-content: space-between;\r
    align-items: center;\r
    position: absolute;\r
    width: 100%;\r
    left: 0;\r
    top: -24px;\r
  }\r
\r
  .__inner_index.svelte-1ytaoom {\r
    position: relative;\r
    width: fit-content;\r
\r
    display: flex;\r
    justify-content: flex-start;\r
    align-items: center;\r
  }\r
\r
  .__inner_size.svelte-1ytaoom {\r
    position: relative;\r
    width: fit-content;\r
\r
    display: flex;\r
    justify-content: flex-end;\r
    align-items: center;\r
  }\r
\r
  .__iframe_button.svelte-1ytaoom {\r
    flex: 1;\r
    padding: 4px 8px;\r
    margin: 0;\r
    border: none;\r
    background: none;\r
    outline: none;\r
    appearance: none;\r
    box-sizing: border-box;\r
    white-space: nowrap;\r
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
  .flowP.svelte-10gi3pg {\r
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
  .flowPDragger.svelte-10gi3pg {\r
    height: 12px;\r
    transition: background-color 0.3s ease-in-out;\r
    background-color: var(--isFallView);\r
\r
    &:hover {\r
      cursor: move; /* \u8BBE\u7F6E\u9F20\u6807\u60AC\u505C\u65F6\u7684\u56FE\u6807\u4E3A\u79FB\u52A8 */\r
    }\r
  }\r
\r
  .flowPHolder.svelte-10gi3pg {\r
    /* position: relative; */\r
    display: flex;\r
    flex-direction: column;\r
    justify-content: center;\r
    align-items: center;\r
    padding-top: 2px;\r
    gap: 4px;\r
  }\r
\r
  .flowBtn.svelte-10gi3pg {\r
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
    color: rgba(0, 0, 0, 0.88);\r
\r
    &:hover {\r
      background-color: var(--bg-3);\r
    }\r
\r
    &:active {\r
      transform: translateY(4px);\r
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\r
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
  .config-menu-overlay.svelte-10gi3pg {\r
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
  .config-menu.svelte-10gi3pg {\r
    background-color: #ffffff;\r
    width: 300px;\r
    height: 100vh;\r
    padding: 20px;\r
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);\r
    overflow-y: auto;\r
  }\r
\r
  .config-menu-header.svelte-10gi3pg {\r
    display: flex;\r
    justify-content: space-between;\r
    align-items: center;\r
    margin-bottom: 12px;\r
  }\r
\r
  .close-btn.svelte-10gi3pg {\r
    background: none;\r
    border: none;\r
    font-size: 24px;\r
    cursor: pointer;\r
    padding: 0 8px;\r
    transform: translateY(-4px);\r
  }\r
\r
  .config-menu-content.svelte-10gi3pg {\r
    display: flex;\r
    flex-direction: column;\r
    gap: 4px;\r
\r
    font-size: 14px;\r
\r
    & h3:where(.svelte-10gi3pg) {\r
      margin-top: 28px;\r
    }\r
  }\r
\r
  .config-item.svelte-10gi3pg {\r
    display: flex;\r
    align-items: center;\r
    justify-content: space-between;\r
  }\r
\r
  .config-item.svelte-10gi3pg input:where(.svelte-10gi3pg) {\r
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

      var Oa=Object.defineProperty;var ki=e=>{throw TypeError(e)};var Ra=(e,t,r)=>t in e?Oa(e,t,{enumerable:true,configurable:true,writable:true,value:r}):e[t]=r;var Li=(e,t,r)=>Ra(e,t+"",r),Yn=(e,t,r)=>t.has(e)||ki("Cannot "+r);var Ge=(e,t,r)=>(Yn(e,t,"read from private field"),r?r.call(e):t.get(e)),lr=(e,t,r)=>t.has(e)?ki("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),Un=(e,t,r,n)=>(Yn(e,t,"write to private field"),t.set(e,r),r),Ni=(e,t,r)=>(Yn(e,t,"access private method"),r);var pn=Array.isArray,Ha=Array.prototype.indexOf,fi=Array.from,ji=Object.defineProperty,_t=Object.getOwnPropertyDescriptor,Yi=Object.getOwnPropertyDescriptors,Da=Object.prototype,Fa=Array.prototype,di=Object.getPrototypeOf;function qa(e){return typeof e=="function"}const Ve=()=>{};function Ba(e){return e()}function Kn(e){for(var t=0;t<e.length;t++)e[t]();}const Me=2,Ui=4,Lr=8,gn=16,Fe=32,Rt=64,an=128,pt=256,sn=512,ge=1024,it=2048,gt=4096,Re=8192,Ht=16384,Xi=32768,mn=65536,Za=1<<17,za=1<<19,Qi=1<<20,ht=Symbol("$state"),Ga=Symbol("legacy props"),Wa=Symbol("");function Ji(e){return e===this.v}function Ki(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function _i(e){return !Ki(e,this.v)}function ja(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Ya(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Ua(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Xa(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Qa(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Ja(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Ka(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function es(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function ts(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let Dt=false;function rs(){Dt=true;}const hi=1,pi=2,ea=4,ns=8,is=16,as=1,ss=2,os=4,ls=8,cs=16,us=1,vs=2,fs=4,ds=1,_s=2,xe=Symbol();function Le(e,t){var r={f:0,v:e,reactions:null,equals:Ji,rv:0,wv:0};return r}function yn(e,t=false){var n;const r=Le(e);return t||(r.equals=_i),Dt&&K!==null&&K.l!==null&&((n=K.l).s??(n.s=[])).push(r),r}function te(e,t=false){return hs(yn(e,t))}function hs(e){return re!==null&&!Ue&&re.f&Me&&(He===null?ks([e]):He.push(e)),e}function Se(e,t){return $(e,R(()=>d(e))),t}function $(e,t){return re!==null&&!Ue&&Sr()&&re.f&(Me|gn)&&(He===null||!He.includes(e))&&ts(),ei(e,t)}function ei(e,t){return e.equals(t)||(e.v,e.v=t,e.wv=ga(),ta(e,it),Sr()&&Y!==null&&Y.f&ge&&!(Y.f&(Fe|Rt))&&(We===null?Ls([e]):We.push(e))),t}function ta(e,t){var r=e.reactions;if(r!==null)for(var n=Sr(),i=r.length,a=0;a<i;a++){var s=r[a],v=s.f;v&it||!n&&s===Y||(Pe(s,t),v&(ge|pt)&&(v&Me?ta(s,gt):kn(s)));}}let ra=false;function Lt(e,t=null,r){if(typeof e!="object"||e===null||ht in e)return e;const n=di(e);if(n!==Da&&n!==Fa)return e;var i=new Map,a=pn(e),s=Le(0);a&&i.set("length",Le(e.length));var v;return new Proxy(e,{defineProperty(u,l,o){(!("value"in o)||o.configurable===false||o.enumerable===false||o.writable===false)&&Ja();var c=i.get(l);return c===undefined?(c=Le(o.value),i.set(l,c)):$(c,Lt(o.value,v)),true},deleteProperty(u,l){var o=i.get(l);if(o===undefined)l in u&&i.set(l,Le(xe));else {if(a&&typeof l=="string"){var c=i.get("length"),f=Number(l);Number.isInteger(f)&&f<c.v&&$(c,f);}$(o,xe),Mi(s);}return  true},get(u,l,o){var w;if(l===ht)return e;var c=i.get(l),f=l in u;if(c===undefined&&(!f||(w=_t(u,l))!=null&&w.writable)&&(c=Le(Lt(f?u[l]:xe,v)),i.set(l,c)),c!==undefined){var _=d(c);return _===xe?undefined:_}return Reflect.get(u,l,o)},getOwnPropertyDescriptor(u,l){var o=Reflect.getOwnPropertyDescriptor(u,l);if(o&&"value"in o){var c=i.get(l);c&&(o.value=d(c));}else if(o===undefined){var f=i.get(l),_=f==null?undefined:f.v;if(f!==undefined&&_!==xe)return {enumerable:true,configurable:true,value:_,writable:true}}return o},has(u,l){var _;if(l===ht)return  true;var o=i.get(l),c=o!==undefined&&o.v!==xe||Reflect.has(u,l);if(o!==undefined||Y!==null&&(!c||(_=_t(u,l))!=null&&_.writable)){o===undefined&&(o=Le(c?Lt(u[l],v):xe),i.set(l,o));var f=d(o);if(f===xe)return  false}return c},set(u,l,o,c){var k;var f=i.get(l),_=l in u;if(a&&l==="length")for(var w=o;w<f.v;w+=1){var m=i.get(w+"");m!==undefined?$(m,xe):w in u&&(m=Le(xe),i.set(w+"",m));}f===undefined?(!_||(k=_t(u,l))!=null&&k.writable)&&(f=Le(undefined),$(f,Lt(o,v)),i.set(l,f)):(_=f.v!==xe,$(f,Lt(o,v)));var E=Reflect.getOwnPropertyDescriptor(u,l);if(E!=null&&E.set&&E.set.call(c,o),!_){if(a&&typeof l=="string"){var x=i.get("length"),g=Number(l);Number.isInteger(g)&&g>=x.v&&$(x,g+1);}Mi(s);}return  true},ownKeys(u){d(s);var l=Reflect.ownKeys(u).filter(f=>{var _=i.get(f);return _===undefined||_.v!==xe});for(var[o,c]of i)c.v!==xe&&!(o in u)&&l.push(o);return l},setPrototypeOf(){Ka();}})}function Mi(e,t=1){$(e,e.v+t);}var yr,na,ia;function ps(){if(yr===undefined){yr=window;var e=Element.prototype,t=Node.prototype;na=_t(t,"firstChild").get,ia=_t(t,"nextSibling").get,e.__click=undefined,e.__className="",e.__attributes=null,e.__styles=null,e.__e=undefined,Text.prototype.__t=undefined;}}function gi(e=""){return document.createTextNode(e)}function $t(e){return na.call(e)}function bn(e){return ia.call(e)}function h(e,t){return $t(e)}function $e(e,t){{var r=$t(e);return r instanceof Comment&&r.data===""?bn(r):r}}function p(e,t=1,r=false){let n=e;for(;t--;)n=bn(n);return n}function gs(e){e.textContent="";}function br(e){var t=Me|it;Y===null?t|=pt:Y.f|=Qi;var r=re!==null&&re.f&Me?re:null;const n={children:null,ctx:K,deps:null,equals:Ji,f:t,fn:e,reactions:null,rv:0,v:null,wv:0,parent:r??Y};return r!==null&&(r.children??(r.children=[])).push(n),n}function Ne(e){const t=br(e);return t.equals=_i,t}function aa(e){var t=e.children;if(t!==null){e.children=null;for(var r=0;r<t.length;r+=1){var n=t[r];n.f&Me?mi(n):nt(n);}}}function ms(e){for(var t=e.parent;t!==null;){if(!(t.f&Me))return t;t=t.parent;}return null}function sa(e){var t,r=Y;Ie(ms(e));try{aa(e),t=ya(e);}finally{Ie(r);}return t}function oa(e){var t=sa(e),r=(ft||e.f&pt)&&e.deps!==null?gt:ge;Pe(e,r),e.equals(t)||(e.v=t,e.wv=ga());}function mi(e){aa(e),xr(e,0),Pe(e,Ht),e.v=e.children=e.deps=e.ctx=e.reactions=null;}function la(e){Y===null&&re===null&&Ua(),re!==null&&re.f&pt&&Ya(),xi&&ja();}function ys(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e);}function Ft(e,t,r,n=true){var i=(e&Rt)!==0,a=Y,s={ctx:K,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|it,first:null,fn:t,last:null,next:null,parent:i?null:a,prev:null,teardown:null,transitions:null,wv:0};if(r){var v=Nt;try{Si(!0),En(s),s.f|=Xi;}catch(o){throw nt(s),o}finally{Si(v);}}else t!==null&&kn(s);var u=r&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(Qi|an))===0;if(!u&&!i&&n&&(a!==null&&ys(s,a),re!==null&&re.f&Me)){var l=re;(l.children??(l.children=[])).push(s);}return s}function yi(e){const t=Ft(Lr,null,false);return Pe(t,ge),t.teardown=e,t}function ti(e){la();var t=Y!==null&&(Y.f&Fe)!==0&&K!==null&&!K.m;if(t){var r=K;(r.e??(r.e=[])).push({fn:e,effect:Y,reaction:re});}else {var n=Nr(e);return n}}function bs(e){return la(),Mr(e)}function ws(e){const t=Ft(Rt,e,true);return (r={})=>new Promise(n=>{r.outro?on(t,()=>{nt(t),n(undefined);}):(nt(t),n(undefined));})}function Nr(e){return Ft(Ui,e,false)}function It(e,t){var r=K,n={effect:null,ran:false};r.l.r1.push(n),n.effect=Mr(()=>{e(),!n.ran&&(n.ran=true,$(r.l.r2,true),R(t));});}function wn(){var e=K;Mr(()=>{if(d(e.l.r2)){for(var t of e.l.r1){var r=t.effect;r.f&ge&&Pe(r,gt),qt(r)&&En(r),t.ran=false;}e.l.r2.v=false;}});}function Mr(e){return Ft(Lr,e,true)}function j(e,t=[],r=br){const n=t.map(r);return bi(()=>e(...n.map(d)))}function bi(e,t=0){return Ft(Lr|gn|t,e,true)}function wr(e,t=true){return Ft(Lr|Fe,e,true,t)}function ca(e){var t=e.teardown;if(t!==null){const r=xi,n=re;Ti(true),De(null);try{t.call(null);}finally{Ti(r),De(n);}}}function ua(e){var t=e.deriveds;if(t!==null){e.deriveds=null;for(var r=0;r<t.length;r+=1)mi(t[r]);}}function va(e,t=false){var r=e.first;for(e.first=e.last=null;r!==null;){var n=r.next;nt(r,t),r=n;}}function xs(e){for(var t=e.first;t!==null;){var r=t.next;t.f&Fe||nt(t),t=r;}}function nt(e,t=true){var r=false;if((t||e.f&za)&&e.nodes_start!==null){for(var n=e.nodes_start,i=e.nodes_end;n!==null;){var a=n===i?null:bn(n);n.remove(),n=a;}r=true;}va(e,t&&!r),ua(e),xr(e,0),Pe(e,Ht);var s=e.transitions;if(s!==null)for(const u of s)u.stop();ca(e);var v=e.parent;v!==null&&v.first!==null&&fa(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null;}function fa(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r));}function on(e,t){var r=[];wi(e,r,true),da(r,()=>{nt(e),t&&t();});}function da(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var i of e)i.out(n);}else t();}function wi(e,t,r){if(!(e.f&Re)){if(e.f^=Re,e.transitions!==null)for(const s of e.transitions)(s.is_global||r)&&t.push(s);for(var n=e.first;n!==null;){var i=n.next,a=(n.f&mn)!==0||(n.f&Fe)!==0;wi(n,t,a?r:false),n=i;}}}function ln(e){_a(e,true);}function _a(e,t){if(e.f&Re){e.f^=Re,e.f&ge||(e.f^=ge),qt(e)&&(Pe(e,it),kn(e));for(var r=e.first;r!==null;){var n=r.next,i=(r.f&mn)!==0||(r.f&Fe)!==0;_a(r,i?t:false),r=n;}if(e.transitions!==null)for(const a of e.transitions)(a.is_global||t)&&a.in();}}let ri=false,ni=[];function Cs(){ri=false;const e=ni.slice();ni=[],Kn(e);}function xn(e){ri||(ri=true,queueMicrotask(Cs)),ni.push(e);}function Es(){throw new Error("https://svelte.dev/e/invalid_default_snippet")}function ha(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let en=false,cn=false,un=null,Nt=false,xi=false;function Si(e){Nt=e;}function Ti(e){xi=e;}let ii=[],pr=0;let re=null,Ue=false;function De(e){re=e;}let Y=null;function Ie(e){Y=e;}let He=null;function ks(e){He=e;}let Ce=null,ke=0,We=null;function Ls(e){We=e;}let pa=1,vn=0,ft=false,K=null;function ga(){return ++pa}function Sr(){return !Dt||K!==null&&K.l===null}function qt(e){var l;var t=e.f;if(t&it)return  true;if(t&gt){var r=e.deps,n=(t&pt)!==0;if(r!==null){var i,a,s=(t&sn)!==0,v=n&&Y!==null&&!ft,u=r.length;if(s||v){for(i=0;i<u;i++)a=r[i],(s||!((l=a==null?undefined:a.reactions)!=null&&l.includes(e)))&&(a.reactions??(a.reactions=[])).push(e);s&&(e.f^=sn);}for(i=0;i<u;i++)if(a=r[i],qt(a)&&oa(a),a.wv>e.wv)return  true}(!n||Y!==null&&!ft)&&Pe(e,ge);}return  false}function Ns(e,t){for(var r=t;r!==null;){if(r.f&an)try{r.fn(e);return}catch{r.f^=an;}r=r.parent;}throw en=false,e}function Ms(e){return (e.f&Ht)===0&&(e.parent===null||(e.parent.f&an)===0)}function Cn(e,t,r,n){if(en){if(r===null&&(en=false),Ms(t))throw e;return}r!==null&&(en=true);{Ns(e,t);return}}function ma(e,t,r=0){var n=e.reactions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];a.f&Me?ma(a,t,r+1):t===a&&(r===0?Pe(a,it):a.f&ge&&Pe(a,gt),kn(a));}}function ya(e){var _;var t=Ce,r=ke,n=We,i=re,a=ft,s=He,v=K,u=Ue,l=e.f;Ce=null,ke=0,We=null,re=l&(Fe|Rt)?null:e,ft=!Nt&&(l&pt)!==0,He=null,K=e.ctx,Ue=false,vn++;try{var o=(0,e.fn)(),c=e.deps;if(Ce!==null){var f;if(xr(e,ke),c!==null&&ke>0)for(c.length=ke+Ce.length,f=0;f<Ce.length;f++)c[ke+f]=Ce[f];else e.deps=c=Ce;if(!ft)for(f=ke;f<c.length;f++)((_=c[f]).reactions??(_.reactions=[])).push(e);}else c!==null&&ke<c.length&&(xr(e,ke),c.length=ke);if(Sr()&&We!==null&&!(e.f&(Me|gt|it)))for(f=0;f<We.length;f++)ma(We[f],e);return i!==null&&vn++,o}finally{Ce=t,ke=r,We=n,re=i,ft=a,He=s,K=v,Ue=u;}}function Ss(e,t){let r=t.reactions;if(r!==null){var n=Ha.call(r,e);if(n!==-1){var i=r.length-1;i===0?r=t.reactions=null:(r[n]=r[i],r.pop());}}r===null&&t.f&Me&&(Ce===null||!Ce.includes(t))&&(Pe(t,gt),t.f&(pt|sn)||(t.f^=sn),xr(t,0));}function xr(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Ss(e,r[n]);}function En(e){var t=e.f;if(!(t&Ht)){Pe(e,ge);var r=Y,n=K;Y=e;try{t&gn?xs(e):va(e),ua(e),ca(e);var i=ya(e);e.teardown=typeof i=="function"?i:null,e.wv=pa;var a=e.deps,s;}catch(v){Cn(v,e,r,n||e.ctx);}finally{Y=r;}}}function Ts(){if(pr>1e3){pr=0;try{Xa();}catch(e){if(un!==null)Cn(e,un,null);else throw e}}pr++;}function As(e){var t=e.length;if(t!==0){Ts();var r=Nt;Nt=true;try{for(var n=0;n<t;n++){var i=e[n];i.f&ge||(i.f^=ge);var a=[];ba(i,a),$s(a);}}finally{Nt=r;}}}function $s(e){var t=e.length;if(t!==0)for(var r=0;r<t;r++){var n=e[r];if(!(n.f&(Ht|Re)))try{qt(n)&&(En(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?fa(n):n.fn=null));}catch(i){Cn(i,n,null,n.ctx);}}}function Is(){if(cn=false,pr>1001)return;const e=ii;ii=[],As(e),cn||(pr=0,un=null);}function kn(e){cn||(cn=true,queueMicrotask(Is)),un=e;for(var t=e;t.parent!==null;){t=t.parent;var r=t.f;if(r&(Rt|Fe)){if(!(r&ge))return;t.f^=ge;}}ii.push(t);}function ba(e,t){var r=e.first,n=[];e:for(;r!==null;){var i=r.f,a=(i&Fe)!==0,s=a&&(i&ge)!==0,v=r.next;if(!s&&!(i&Re))if(i&Lr){if(a)r.f^=ge;else try{qt(r)&&En(r);}catch(c){Cn(c,r,null,r.ctx);}var u=r.first;if(u!==null){r=u;continue}}else i&Ui&&n.push(r);if(v===null){let c=r.parent;for(;c!==null;){if(e===c)break e;var l=c.next;if(l!==null){r=l;continue e}c=c.parent;}}r=v;}for(var o=0;o<n.length;o++)u=n[o],t.push(u),ba(u,t);}function d(e){var o;var t=e.f,r=(t&Me)!==0;if(r&&t&Ht){var n=sa(e);return mi(e),n}if(re!==null&&!Ue){He!==null&&He.includes(e)&&es();var i=re.deps;e.rv<vn&&(e.rv=vn,Ce===null&&i!==null&&i[ke]===e?ke++:Ce===null?Ce=[e]:Ce.push(e));}else if(r&&e.deps===null)for(var a=e,s=a.parent,v=a;s!==null;)if(s.f&Me){var u=s;v=u,s=u.parent;}else {var l=s;(o=l.deriveds)!=null&&o.includes(v)||(l.deriveds??(l.deriveds=[])).push(v);break}return r&&(a=e,qt(a)&&oa(a)),e.v}function R(e){var t=Ue;try{return Ue=!0,e()}finally{Ue=t;}}const Ps=-7169;function Pe(e,t){e.f=e.f&Ps|t;}function at(e,t=false,r){K={p:K,c:null,e:null,m:false,s:e,x:null,l:null},Dt&&!t&&(K.l={s:null,u:null,r1:[],r2:Le(false)});}function st(e){const t=K;if(t!==null){e!==undefined&&(t.x=e);const s=t.e;if(s!==null){var r=Y,n=re;t.e=null;try{for(var i=0;i<s.length;i++){var a=s[i];Ie(a.effect),De(a.reaction),Nr(a.fn);}}finally{Ie(r),De(n);}}K=t.p,t.m=true;}return e||{}}function vt(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(ht in e)ai(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&ht in r&&ai(r);}}}function ai(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{ai(e[n],t);}catch{}const r=di(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=Yi(r);for(let i in n){const a=n[i].get;if(a)try{a.call(e);}catch{}}}}}const Vs=["touchstart","touchmove"];function Os(e){return Vs.includes(e)}let Ai=false;function Rs(){Ai||(Ai=true,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r);});},{capture:true}));}function wa(e){var t=re,r=Y;De(null),Ie(null);try{return e()}finally{De(t),Ie(r);}}function Hs(e,t,r,n=r){e.addEventListener(t,()=>wa(r));const i=e.__on_r;i?e.__on_r=()=>{i(),n(true);}:e.__on_r=()=>n(true),Rs();}const Ds=new Set,$i=new Set;function Fs(e,t,r,n={}){function i(a){if(n.capture||ur.call(t,a),!a.cancelBubble)return wa(()=>r==null?void 0:r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?xn(()=>{t.addEventListener(e,i,n);}):t.addEventListener(e,i,n),i}function Z(e,t,r,n,i){var a={capture:n,passive:i},s=Fs(e,t,r,a);(t===document.body||t===window||t===document)&&yi(()=>{t.removeEventListener(e,s,a);});}function ur(e){var g;var t=this,r=t.ownerDocument,n=e.type,i=((g=e.composedPath)==null?undefined:g.call(e))||[],a=i[0]||e.target,s=0,v=e.__root;if(v){var u=i.indexOf(v);if(u!==-1&&(t===document||t===window)){e.__root=t;return}var l=i.indexOf(t);if(l===-1)return;u<=l&&(s=u);}if(a=i[s]||e.target,a!==t){ji(e,"currentTarget",{configurable:true,get(){return a||r}});var o=re,c=Y;De(null),Ie(null);try{for(var f,_=[];a!==null;){var w=a.assignedSlot||a.parentNode||a.host||null;try{var m=a["__"+n];if(m!==void 0&&!a.disabled)if(pn(m)){var[E,...x]=m;E.apply(a,[e,...x]);}else m.call(a,e);}catch(k){f?_.push(k):f=k;}if(e.cancelBubble||w===t||w===null)break;a=w;}if(f){for(let k of _)queueMicrotask(()=>{throw k});throw f}}finally{e.__root=t,delete e.currentTarget,De(o),Ie(c);}}}function xa(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function fn(e,t){var r=Y;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t);}function I(e,t){var r=(t&ds)!==0,n=(t&_s)!==0,i,a=!e.startsWith("<!>");return ()=>{i===undefined&&(i=xa(a?e:"<!>"+e),r||(i=$t(i)));var s=n?document.importNode(i,true):i.cloneNode(true);if(r){var v=$t(s),u=s.lastChild;fn(v,u);}else fn(s,s);return s}}function Ci(e,t,r="svg"){var n=!e.startsWith("<!>"),i=`<${r}>${n?e:"<!>"+e}</${r}>`,a;return ()=>{if(!a){var s=xa(i),v=$t(s);a=$t(v);}var u=a.cloneNode(true);return fn(u,u),u}}function tt(){var e=document.createDocumentFragment(),t=document.createComment(""),r=gi();return e.append(t,r),fn(t,r),e}function L(e,t){e!==null&&e.before(t);}let si=true;function H(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"");}function Cr(e,t){return qs(e,t)}const Et=new Map;function qs(e,{target:t,anchor:r,props:n={},events:i,context:a,intro:s=true}){ps();var v=new Set,u=c=>{for(var f=0;f<c.length;f++){var _=c[f];if(!v.has(_)){v.add(_);var w=Os(_);t.addEventListener(_,ur,{passive:w});var m=Et.get(_);m===undefined?(document.addEventListener(_,ur,{passive:w}),Et.set(_,1)):Et.set(_,m+1);}}};u(fi(Ds)),$i.add(u);var l=undefined,o=ws(()=>{var c=r??t.appendChild(gi());return wr(()=>{if(a){at({});var f=K;f.c=a;}i&&(n.$$events=i),si=s,l=e(c,n)||{},si=true,a&&st();}),()=>{var w;for(var f of v){t.removeEventListener(f,ur);var _=Et.get(f);--_===0?(document.removeEventListener(f,ur),Et.delete(f)):Et.set(f,_);}$i.delete(u),c!==r&&((w=c.parentNode)==null||w.removeChild(c));}});return Bs.set(l,o),l}let Bs=new WeakMap;function G(e,t,r=false){var n=e,i=null,a=null,s=xe,v=r?mn:0,u=false;const l=(c,f=true)=>{u=true,o(f,c);},o=(c,f)=>{s!==(s=c)&&(s?(i?ln(i):f&&(i=wr(()=>f(n))),a&&on(a,()=>{a=null;})):(a?ln(a):f&&(a=wr(()=>f(n))),i&&on(i,()=>{i=null;})));};bi(()=>{u=false,t(l),u||o(null,null);},v);}let tn=null;function vr(e,t){return t}function Zs(e,t,r,n){for(var i=[],a=t.length,s=0;s<a;s++)wi(t[s].e,i,true);var v=a>0&&i.length===0&&r!==null;if(v){var u=r.parentNode;gs(u),u.append(r),n.clear(),Qe(e,t[0].prev,t[a-1].next);}da(i,()=>{for(var l=0;l<a;l++){var o=t[l];v||(n.delete(o.k),Qe(e,o.prev,o.next)),nt(o.e,!v);}});}function dt(e,t,r,n,i,a=null){var s=e,v={flags:t,items:new Map,first:null},u=(t&ea)!==0;if(u){var l=e;s=l.appendChild(gi());}var o=null,c=false,f=Ne(()=>{var _=r();return pn(_)?_:_==null?[]:fi(_)});bi(()=>{var _=d(f),w=_.length;if(!(c&&w===0)){c=w===0;{var m=re;zs(_,v,s,i,t,(m.f&Re)!==0,n,r);}a!==null&&(w===0?o?ln(o):o=wr(()=>a(s)):o!==null&&on(o,()=>{o=null;})),d(f);}});}function zs(e,t,r,n,i,a,s,v){var ne,D,ae,ie;var u=(i&ns)!==0,l=(i&(hi|pi))!==0,o=e.length,c=t.items,f=t.first,_=f,w,m=null,E,x=[],g=[],k,V,N,C;if(u)for(C=0;C<o;C+=1)k=e[C],V=s(k,C),N=c.get(V),N!==undefined&&((ne=N.a)==null||ne.measure(),(E??(E=new Set)).add(N));for(C=0;C<o;C+=1){if(k=e[C],V=s(k,C),N=c.get(V),N===undefined){var A=_?_.e.nodes_start:r;m=Ws(A,t,m,m===null?t.first:m.next,k,V,C,n,i,v),c.set(V,m),x=[],g=[],_=m.next;continue}if(l&&Gs(N,k,C,i),N.e.f&Re&&(ln(N.e),u&&((D=N.a)==null||D.unfix(),(E??(E=new Set)).delete(N))),N!==_){if(w!==undefined&&w.has(N)){if(x.length<g.length){var T=g[0],O;m=T.prev;var P=x[0],q=x[x.length-1];for(O=0;O<x.length;O+=1)Ii(x[O],T,r);for(O=0;O<g.length;O+=1)w.delete(g[O]);Qe(t,P.prev,q.next),Qe(t,m,P),Qe(t,q,T),_=T,m=q,C-=1,x=[],g=[];}else w.delete(N),Ii(N,_,r),Qe(t,N.prev,N.next),Qe(t,N,m===null?t.first:m.next),Qe(t,m,N),m=N;continue}for(x=[],g=[];_!==null&&_.k!==V;)(a||!(_.e.f&Re))&&(w??(w=new Set)).add(_),g.push(_),_=_.next;if(_===null)continue;N=_;}x.push(N),m=N,_=N.next;}if(_!==null||w!==undefined){for(var B=w===undefined?[]:fi(w);_!==null;)(a||!(_.e.f&Re))&&B.push(_),_=_.next;var Q=B.length;if(Q>0){var le=i&ea&&o===0?r:null;if(u){for(C=0;C<Q;C+=1)(ae=B[C].a)==null||ae.measure();for(C=0;C<Q;C+=1)(ie=B[C].a)==null||ie.fix();}Zs(t,B,le,c);}}u&&xn(()=>{var me;if(E!==undefined)for(N of E)(me=N.a)==null||me.apply();}),Y.first=t.first&&t.first.e,Y.last=m&&m.e;}function Gs(e,t,r,n){n&hi&&ei(e.v,t),n&pi?ei(e.i,r):e.i=r;}function Ws(e,t,r,n,i,a,s,v,u,l){var o=tn,c=(u&hi)!==0,f=(u&is)===0,_=c?f?yn(i):Le(i):i,w=u&pi?Le(s):s,m={i:w,v:_,k:a,a:null,e:null,prev:r,next:n};tn=m;try{return m.e=wr(()=>v(e,_,w,l),ra),m.e.prev=r&&r.e,m.e.next=n&&n.e,r===null?t.first=m:(r.next=m,r.e.next=m.e),n!==null&&(n.prev=m,n.e.prev=m.e),m}finally{tn=o;}}function Ii(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,i=t?t.e.nodes_start:r,a=e.e.nodes_start;a!==n;){var s=bn(a);i.before(a),a=s;}}function Qe(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e);}function Pi(e,t,r,n,i){var v;var a=(v=t.$$slots)==null?undefined:v[r],s=false;a===true&&(a=t.children,s=true),a===undefined?i!==null&&i(e):a(e,s?()=>n:n);}function S(e,t,r,n){var i=e.__attributes??(e.__attributes={});i[t]!==(i[t]=r)&&(t==="style"&&"__styles"in e&&(e.__styles={}),t==="loading"&&(e[Wa]=r),r==null?e.removeAttribute(t):typeof r!="string"&&js(e).includes(t)?e[t]=r:e.setAttribute(t,r));}var Vi=new Map;function js(e){var t=Vi.get(e.nodeName);if(t)return t;Vi.set(e.nodeName,t=[]);for(var r,n=e,i=Element.prototype;i!==n;){r=Yi(n);for(var a in r)r[a].set&&t.push(a);n=di(n);}return t}function Oi(e,t,r){var n=e.__className,i=Ys(t);(n!==i||ra)&&(t==null?e.removeAttribute("class"):e.className=i,e.__className=i);}function Ys(e,t){return (e??"")+""}function fr(e,t,r){if(r){if(e.classList.contains(t))return;e.classList.add(t);}else {if(!e.classList.contains(t))return;e.classList.remove(t);}}function Ke(e,t,r,n){var i=e.__styles??(e.__styles={});i[t]!==r&&(i[t]=r,r==null?e.style.removeProperty(t):e.style.setProperty(t,r,""));}const Us=()=>performance.now(),je={tick:e=>requestAnimationFrame(e),now:()=>Us(),tasks:new Set};function Ca(){const e=je.now();je.tasks.forEach(t=>{t.c(e)||(je.tasks.delete(t),t.f());}),je.tasks.size!==0&&je.tick(Ca);}function Xs(e){let t;return je.tasks.size===0&&je.tick(Ca),{promise:new Promise(r=>{je.tasks.add(t={c:e,f:r});}),abort(){je.tasks.delete(t);}}}function Jr(e,t){e.dispatchEvent(new CustomEvent(t));}function Qs(e){if(e==="float")return "cssFloat";if(e==="offset")return "cssOffset";if(e.startsWith("--"))return e;const t=e.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function Ri(e){const t={},r=e.split(";");for(const n of r){const[i,a]=n.split(":");if(!i||a===undefined)break;const s=Qs(i.trim());t[s]=a.trim();}return t}const Js=e=>e;function Ks(e,t,r){var n=tn,i,a,s,v=null;n.a??(n.a={element:e,measure(){i=this.element.getBoundingClientRect();},apply(){if(s==null||s.abort(),a=this.element.getBoundingClientRect(),i.left!==a.left||i.right!==a.right||i.top!==a.top||i.bottom!==a.bottom){const u=t()(this.element,{from:i,to:a},r==null?undefined:r());s=dn(this.element,u,undefined,1,()=>{s==null||s.abort(),s=undefined;});}},fix(){if(!e.getAnimations().length){var{position:u,width:l,height:o}=getComputedStyle(e);if(u!=="absolute"&&u!=="fixed"){var c=e.style;v={position:c.position,width:c.width,height:c.height,transform:c.transform},c.position="absolute",c.width=l,c.height=o;var f=e.getBoundingClientRect();if(i.left!==f.left||i.top!==f.top){var _=`translate(${i.left-f.left}px, ${i.top-f.top}px)`;c.transform=c.transform?`${c.transform} ${_}`:_;}}}},unfix(){if(v){var u=e.style;u.position=v.position,u.width=v.width,u.height=v.height,u.transform=v.transform;}}}),n.a.element=e;}function Pt(e,t,r,n){var i=(e&us)!==0,a=(e&vs)!==0,s=i&&a,v=(e&fs)!==0,u=s?"both":i?"in":"out",l,o=t.inert,c=t.style.overflow,f,_;function w(){var k=re,V=Y;De(null),Ie(null);try{return l??(l=r()(t,(n==null?void 0:n())??{},{direction:u}))}finally{De(k),Ie(V);}}var m={is_global:v,in(){var k;if(t.inert=o,!i){_==null||_.abort(),(k=_==null?undefined:_.reset)==null||k.call(_);return}a||f==null||f.abort(),Jr(t,"introstart"),f=dn(t,w(),_,1,()=>{Jr(t,"introend"),f==null||f.abort(),f=l=undefined,t.style.overflow=c;});},out(k){if(!a){k==null||k(),l=undefined;return}t.inert=true,Jr(t,"outrostart"),_=dn(t,w(),f,0,()=>{Jr(t,"outroend"),k==null||k();});},stop:()=>{f==null||f.abort(),_==null||_.abort();}},E=Y;if((E.transitions??(E.transitions=[])).push(m),i&&si){var x=v;if(!x){for(var g=E.parent;g&&g.f&mn;)for(;(g=g.parent)&&!(g.f&gn););x=!g||(g.f&Xi)!==0;}x&&Nr(()=>{R(()=>m.in());});}}function dn(e,t,r,n,i){var a=n===1;if(qa(t)){var s,v=false;return xn(()=>{if(!v){var E=t({direction:a?"in":"out"});s=dn(e,E,r,n,i);}}),{abort:()=>{v=true,s==null||s.abort();},deactivate:()=>s.deactivate(),reset:()=>s.reset(),t:()=>s.t()}}if(r==null||r.deactivate(),!(t!=null&&t.duration))return i(),{abort:Ve,deactivate:Ve,reset:Ve,t:()=>n};const{delay:u=0,css:l,tick:o,easing:c=Js}=t;var f=[];if(a&&r===undefined&&(o&&o(0,1),l)){var _=Ri(l(0,1));f.push(_,_);}var w=()=>1-n,m=e.animate(f,{duration:u});return m.onfinish=()=>{var E=(r==null?undefined:r.t())??1-n;r==null||r.abort();var x=n-E,g=t.duration*Math.abs(x),k=[];if(g>0){var V=false;if(l)for(var N=Math.ceil(g/16.666666666666668),C=0;C<=N;C+=1){var A=E+x*c(C/N),T=Ri(l(A,1-A));k.push(T),V||(V=T.overflow==="hidden");}V&&(e.style.overflow="hidden"),w=()=>{var O=m.currentTime;return E+x*c(O/g)},o&&Xs(()=>{if(m.playState!=="running")return  false;var O=w();return o(O,1-O),true});}m=e.animate(k,{duration:g,fill:"forwards"}),m.onfinish=()=>{w=()=>n,o==null||o(n,1-n),i();};},{abort:()=>{m&&(m.cancel(),m.effect=null,m.onfinish=Ve);},deactivate:()=>{i=Ve;},reset:()=>{n===0&&(o==null||o(1,0));},t:()=>w()}}function Kr(e,t,r=t){var n=Sr();Hs(e,"input",i=>{var a=i?e.defaultValue:e.value;if(a=Xn(e)?Qn(a):a,r(a),n&&a!==(a=t())){var s=e.selectionStart,v=e.selectionEnd;e.value=a??"",v!==null&&(e.selectionStart=s,e.selectionEnd=Math.min(v,e.value.length));}}),R(t)==null&&e.value&&r(Xn(e)?Qn(e.value):e.value),Mr(()=>{var i=t();Xn(e)&&i===Qn(e.value)||e.type==="date"&&!i&&!e.value||i!==e.value&&(e.value=i??"");});}function Xn(e){var t=e.type;return t==="number"||t==="range"}function Qn(e){return e===""?null:+e}function Jn(e,t,r){var n=_t(e,t);n&&n.set&&(e[t]=r,yi(()=>{e[t]=null;}));}var et,At,kr,_n,Ea;const hn=class hn{constructor(t){lr(this,_n);lr(this,et,new WeakMap);lr(this,At);lr(this,kr);Un(this,kr,t);}observe(t,r){var n=Ge(this,et).get(t)||new Set;return n.add(r),Ge(this,et).set(t,n),Ni(this,_n,Ea).call(this).observe(t,Ge(this,kr)),()=>{var i=Ge(this,et).get(t);i.delete(r),i.size===0&&(Ge(this,et).delete(t),Ge(this,At).unobserve(t));}}};et=new WeakMap,At=new WeakMap,kr=new WeakMap,_n=new WeakSet,Ea=function(){return Ge(this,At)??Un(this,At,new ResizeObserver(t=>{for(var r of t){hn.entries.set(r.target,r);for(var n of Ge(this,et).get(r.target)||[])n(r);}}))},Li(hn,"entries",new WeakMap);let oi=hn;var eo=new oi({box:"border-box"});function Hi(e,t,r){var n=eo.observe(e,()=>r(e[t]));Nr(()=>(R(()=>r(e[t])),n));}function Di(e,t){return e===t||(e==null?undefined:e[ht])===t}function Je(e={},t,r,n){return Nr(()=>{var i,a;return Mr(()=>{i=a,a=[],R(()=>{e!==r(...a)&&(t(e,...a),i&&Di(r(...i),e)&&t(null,...i));});}),()=>{xn(()=>{a&&Di(r(...a),e)&&t(null,...a);});}}),e}function ka(e){return function(...t){var r=t[0];r.target===this&&(e==null||e.apply(this,t));}}function Mt(e){return function(...t){var r=t[0];return r.stopPropagation(),e==null?undefined:e.apply(this,t)}}function mt(e=false){const t=K,r=t.l.u;if(!r)return;let n=()=>vt(t.s);if(e){let i=0,a={};const s=br(()=>{let v=false;const u=t.s;for(const l in u)u[l]!==a[l]&&(a[l]=u[l],v=true);return v&&i++,i});n=()=>d(s);}r.b.length&&bs(()=>{Fi(t,n),Kn(r.b);}),ti(()=>{const i=R(()=>r.m.map(Ba));return ()=>{for(const a of i)typeof a=="function"&&a();}}),r.a.length&&ti(()=>{Fi(t,n),Kn(r.a);});}function Fi(e,t){if(e.l.s)for(const r of e.l.s)d(r);t();}function to(e){var t=Le(0);return function(){return arguments.length===1?($(t,d(t)+1),arguments[0]):(d(t),e())}}function qi(e,t){var a;var r=(a=e.$$events)==null?undefined:a[t.type],n=pn(r)?r.slice():r==null?[]:[r];for(var i of n)i.call(this,t);}function La(e,t,r){if(e==null)return t(undefined),Ve;const n=R(()=>e.subscribe(t,r));return n.unsubscribe?()=>n.unsubscribe():n}const kt=[];function Ln(e,t=Ve){let r=null;const n=new Set;function i(v){if(Ki(e,v)&&(e=v,r)){const u=!kt.length;for(const l of n)l[1](),kt.push(l,e);if(u){for(let l=0;l<kt.length;l+=2)kt[l][0](kt[l+1]);kt.length=0;}}}function a(v){i(v(e));}function s(v,u=Ve){const l=[v,u];return n.add(l),n.size===1&&(r=t(i,a)||Ve),v(e),()=>{n.delete(l),n.size===0&&r&&(r(),r=null);}}return {set:i,update:a,subscribe:s}}function Na(e){let t;return La(e,r=>t=r)(),t}let dr=false,li=Symbol();function oe(e,t,r){const n=r[t]??(r[t]={store:null,source:yn(undefined),unsubscribe:Ve});if(n.store!==e&&!(li in r))if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=undefined,n.unsubscribe=Ve;else {var i=true;n.unsubscribe=La(e,a=>{i?n.source.v=a:$(n.source,a);}),i=false;}return e&&li in r?Na(e):d(n.source)}function fe(e,t){return e.set(t),t}function Bt(){const e={};function t(){yi(()=>{for(var r in e)e[r].unsubscribe();ji(e,li,{enumerable:false,value:true});});}return [e,t]}function be(e,t,r){return e.set(r),t}function Bi(){dr=true;}function ro(e){var t=dr;try{return dr=!1,[e(),dr]}finally{dr=t;}}function Zi(e){for(var t=Y,r=Y;t!==null&&!(t.f&(Fe|Rt));)t=t.parent;try{return Ie(t),e()}finally{Ie(r);}}function ve(e,t,r,n){var A;var i=(r&as)!==0,a=!Dt||(r&ss)!==0,s=(r&ls)!==0,v=(r&cs)!==0,u=false,l;s?[l,u]=ro(()=>e[t]):l=e[t];var o=ht in e||Ga in e,c=s&&(((A=_t(e,t))==null?undefined:A.set)??(o&&t in e&&(T=>e[t]=T)))||undefined,f=n,_=true,w=false,m=()=>(w=true,_&&(_=false,v?f=R(n):f=n),f);l===undefined&&n!==undefined&&(c&&a&&Qa(),l=m(),c&&c(l));var E;if(a)E=()=>{var T=e[t];return T===undefined?m():(_=true,w=false,T)};else {var x=Zi(()=>(i?br:Ne)(()=>e[t]));x.f|=Za,E=()=>{var T=d(x);return T!==undefined&&(f=undefined),T===undefined?f:T};}if(!(r&os))return E;if(c){var g=e.$$legacy;return function(T,O){return arguments.length>0?((!a||!O||g||u)&&c(O?E():T),T):E()}}var k=false,V=false,N=yn(l),C=Zi(()=>br(()=>{var T=E(),O=d(N);return k?(k=!1,V=!0,O):(V=!1,N.v=T)}));return i||(C.equals=_i),function(T,O){if(arguments.length>0){const P=O?d(C):a&&s?Lt(T):T;return C.equals(P)||(k=true,$(N,P),w&&f!==undefined&&(f=P),R(()=>d(C))),T}return d(C)}}function Nn(e){K===null&&ha(),Dt&&K.l!==null?io(K).m.push(e):ti(()=>{const t=R(e);if(typeof t=="function")return t});}function no(e){K===null&&ha(),Nn(()=>()=>R(e));}function io(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const ao="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ao);rs();const so=e=>e;function Vt(e,{delay:t=0,duration:r=400,easing:n=so}={}){const i=+getComputedStyle(e).opacity;return {delay:t,duration:r,easing:n,css:a=>`opacity: ${a*i}`}}function cr(e,t=()=>{}){if(!e)return;const r=document.querySelector(e);if(r){t(r);return}new MutationObserver((i,a)=>{const s=document.querySelector(e);s&&(a.disconnect(),t(s));}).observe(document.documentElement,{childList:true,subtree:true});}function gr(e){if(typeof e=="string")try{const t=JSON.parse(e);return gr(t)}catch{return e}if(Array.isArray(e))return e.map(t=>gr(t));if(e!==null&&typeof e=="object"){const t={};for(const r in e)e.hasOwnProperty(r)&&(t[r]=gr(e[r]));return t}return e}function Ye(e){if(!e)return "inherit";let t=e.toString().trim();if(t.startsWith("var(")){const s=t.match(/var\(([^)]+)\)/);if(s){const v=s[1],u=getComputedStyle(document.documentElement).getPropertyValue(v).trim();if(u)t=u;else return "inherit"}}if(t.startsWith("rgba(")||t.startsWith("rgb(")){const s=t.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);if(s){const[,v,u,l]=s;return (parseInt(v)*299+parseInt(u)*587+parseInt(l)*114)/1e3<128?"white":"black"}}t=t.replace("#","");let r,n,i;if(t.length===3)r=parseInt(t[0]+t[0],16),n=parseInt(t[1]+t[1],16),i=parseInt(t[2]+t[2],16);else if(t.length===6)r=parseInt(t.substr(0,2),16),n=parseInt(t.substr(2,2),16),i=parseInt(t.substr(4,2),16);else if(t.length===8)r=parseInt(t.substr(0,2),16),n=parseInt(t.substr(2,2),16),i=parseInt(t.substr(4,2),16);else return "black";return (r*299+n*587+i*114)/1e3<128?"white":"black"}const Ma="Kesa:Fall",zi=()=>{try{return gr(localStorage.getItem(Ma))??{}}catch{return {}}},qe=(e,t)=>{const r=zi(),n=e in r?r[e]:t,{subscribe:i,set:a,update:s}=Ln(n);return i(v=>{const u=zi();localStorage.setItem(Ma,JSON.stringify({...u,[e]:v}));}),{subscribe:i,set:v=>{typeof v=="function"?s(v):a(v);},update:s}},St=Ln(0),Sa=Ln(""),mr=qe("_isFallView",true),_r=Ln(0),ci=qe("_panelPos",{x:0,y:0}),ui=qe("_show_hover_pic",1),hr=qe("_card_layout",{min:300,max:600,gap:8}),Te=qe("_card_detail",{all:false,category:true,title:false,topping:true,free:true,size:true,sub_title:false,tags:false,download_collect:false,upload_time:false,statistics:false}),oo=qe("_show_nexus_pic",1),rn=qe("_block_gay",1),nn=qe("_card_radius",{enabled:false,value:16}),Ta=qe("_mt_label",{}),Aa=qe("_mt_categories",{});function lo(e={path:"/search",method:"POST"}){const t=XMLHttpRequest.prototype.open,r=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.open=function(n,i){return this._requestMetadata={method:n.toUpperCase(),url:i,isTarget:i.includes(e.path)&&n.toUpperCase()===e.method},t.apply(this,arguments)},XMLHttpRequest.prototype.send=function(n){var i;if((i=this._requestMetadata)!=null&&i.isTarget){const a=this.onreadystatechange,s=this.onload;this.addEventListener("readystatechange",()=>{this.readyState===4&&this._captureResponseData(),a==null||a.call(this);}),this.onload=l=>{this._captureResponseData(),s==null||s.call(this,l);};const v={url:this._requestMetadata.url,body:n instanceof Document?n.documentElement.outerHTML:n},u=new CustomEvent(`req>${e.method}->${e.path}`,{detail:v});window.dispatchEvent(u);}return r.apply(this,arguments)},XMLHttpRequest.prototype._captureResponseData=function(){if(!this._hasCaptured&&this._requestMetadata.isTarget){try{const n={status:this.status,headers:this.getAllResponseHeaders(),data:this._parseResponse()},i=new CustomEvent(`res>${e.method}->${e.path}`,{detail:n});window.dispatchEvent(i);}catch(n){console.error("<PT-Fall> Capture failed:",n);}this._hasCaptured=true;}},XMLHttpRequest.prototype._parseResponse=function(){var n;try{switch(this.responseType){case "json":return this.response;case "document":return (n=this.responseXML)==null?void 0:n.documentElement.outerHTML;case "arraybuffer":return new Uint8Array(this.response);case "blob":return URL.createObjectURL(this.response);default:return this.responseText}}catch{return this.responseText}};}function co(e){const t=e-1;return t*t*t+1}function uo(e,{from:t,to:r},n={}){var{delay:i=0,duration:a=C=>Math.sqrt(C)*120,easing:s=co}=n,v=getComputedStyle(e),u=v.transform==="none"?"":v.transform,[l,o]=v.transformOrigin.split(" ").map(parseFloat);l/=e.clientWidth,o/=e.clientHeight;var c=vo(e),f=e.clientWidth/r.width/c,_=e.clientHeight/r.height/c,w=t.left+t.width*l,m=t.top+t.height*o,E=r.left+r.width*l,x=r.top+r.height*o,g=(w-E)*f,k=(m-x)*_,V=t.width/r.width,N=t.height/r.height;return {delay:i,duration:typeof a=="function"?a(Math.sqrt(g*g+k*k)):a,easing:s,css:(C,A)=>{var T=A*g,O=A*k,P=C+A*V,q=C+A*N;return `transform: ${u} translate(${T}px, ${O}px) scale(${P}, ${q});`}}}function vo(e){if("currentCSSZoom"in e)return e.currentCSSZoom;for(var t=e,r=1;t!==null;)r*=+getComputedStyle(t).zoom,t=t.parentElement;return r}var fo=I('<span class="svelte-b2jtby"> </span>'),_o=I('<div class="svelte-b2jtby"><!></div>'),ho=I('<span class="svelte-b2jtby"> </span>'),po=I("<div><!></div>"),go=I("<div></div>");function mo(e,t){at(t,false);const r=te(),n=te();let i=ve(t,"animate",8,true),a=ve(t,"columnClass",24,()=>""),s=ve(t,"duration",8,200),v=ve(t,"gap",8,20),u=ve(t,"getId",8,g=>typeof g=="number"||typeof g=="string"?g:g[l()]),l=ve(t,"idKey",24,()=>"id"),o=ve(t,"items",8),c=ve(t,"masonryHeight",12,0),f=ve(t,"masonryWidth",12,0),_=ve(t,"maxColWidth",8,500),w=ve(t,"minColWidth",8,330),m=ve(t,"style",24,()=>""),E=ve(t,"class",24,()=>"");It(()=>(vt(o()),vt(f()),vt(w()),vt(v())),()=>{$(r,Math.min(o().length,Math.floor(f()/(w()+v()))||1));}),It(()=>(vt(o()),d(r)),()=>{$(n,o().reduce((g,k,V)=>(g[V%g.length].push([k,V]),g),Array(d(r)).fill(null).map(()=>[])));}),wn(),mt();var x=go();dt(x,5,()=>d(n),vr,(g,k)=>{var V=po(),N=h(V);{var C=T=>{var O=tt(),P=$e(O);dt(P,9,()=>d(k),([q,B])=>u()(q),(q,B)=>{let Q=()=>d(B)[0],le=()=>d(B)[1];var ne=_o(),D=h(ne);Pi(D,t,"default",{get idx(){return le()},get item(){return Q()}},ae=>{var ie=fo(),me=h(ie);j(()=>H(me,Q())),L(ae,ie);}),Pt(1,ne,()=>Vt,()=>({delay:100,duration:s()})),Pt(2,ne,()=>Vt,()=>({delay:0,duration:s()})),Ks(ne,()=>uo,()=>({duration:s()})),L(q,ne);}),L(T,O);},A=T=>{var O=tt(),P=$e(O);dt(P,1,()=>d(k),([q,B])=>u()(q),(q,B)=>{let Q=()=>d(B)[0],le=()=>d(B)[1];var ne=tt(),D=$e(ne);Pi(D,t,"default",{get idx(){return le()},get item(){return Q()}},ae=>{var ie=ho(),me=h(ie);j(()=>H(me,Q())),L(ae,ie);}),L(q,ne);}),L(T,O);};G(N,T=>{i()?T(C):T(A,false);});}j(()=>{Oi(V,`col ${a()??""} svelte-b2jtby`),S(V,"style",`gap: ${v()??""}px; max-width: ${_()??""}px;`);}),L(g,V);}),j(()=>{Oi(x,`masonry ${E()??""} svelte-b2jtby`),S(x,"style",`gap: ${v()??""}px; ${m()??""}`);}),Hi(x,"clientWidth",f),Hi(x,"clientHeight",c),L(e,x),st();}var Ae=function(){return Ae=Object.assign||function(t){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);}return t},Ae.apply(this,arguments)},yo=function(){function e(t){this.options=t,this.listeners={};}return e.prototype.on=function(t,r){var n=this.listeners[t]||[];this.listeners[t]=n.concat([r]);},e.prototype.triggerEvent=function(t,r){var n=this,i=this.listeners[t]||[];i.forEach(function(a){return a({target:n,event:r})});},e}(),Ot;(function(e){e[e.Add=0]="Add",e[e.Remove=1]="Remove";})(Ot||(Ot={}));var bo=function(){function e(){this.notifications=[];}return e.prototype.push=function(t){this.notifications.push(t),this.updateFn(t,Ot.Add,this.notifications);},e.prototype.splice=function(t,r){var n=this.notifications.splice(t,r)[0];return this.updateFn(n,Ot.Remove,this.notifications),n},e.prototype.indexOf=function(t){return this.notifications.indexOf(t)},e.prototype.onUpdate=function(t){this.updateFn=t;},e}(),rt;(function(e){e.Dismiss="dismiss",e.Click="click";})(rt||(rt={}));var Gi={types:[{type:"success",className:"notyf__toast--success",backgroundColor:"#3dc763",icon:{className:"notyf__icon--success",tagName:"i"}},{type:"error",className:"notyf__toast--error",backgroundColor:"#ed3d3d",icon:{className:"notyf__icon--error",tagName:"i"}}],duration:2e3,ripple:true,position:{x:"right",y:"bottom"},dismissible:false},wo=function(){function e(){this.notifications=[],this.events={},this.X_POSITION_FLEX_MAP={left:"flex-start",center:"center",right:"flex-end"},this.Y_POSITION_FLEX_MAP={top:"flex-start",center:"center",bottom:"flex-end"};var t=document.createDocumentFragment(),r=this._createHTMLElement({tagName:"div",className:"notyf"});t.appendChild(r),document.body.appendChild(t),this.container=r,this.animationEndEventName=this._getAnimationEndEventName(),this._createA11yContainer();}return e.prototype.on=function(t,r){var n;this.events=Ae(Ae({},this.events),(n={},n[t]=r,n));},e.prototype.update=function(t,r){r===Ot.Add?this.addNotification(t):r===Ot.Remove&&this.removeNotification(t);},e.prototype.removeNotification=function(t){var r=this,n=this._popRenderedNotification(t),i;if(n){i=n.node,i.classList.add("notyf__toast--disappear");var a;i.addEventListener(this.animationEndEventName,a=function(s){s.target===i&&(i.removeEventListener(r.animationEndEventName,a),r.container.removeChild(i));});}},e.prototype.addNotification=function(t){var r=this._renderNotification(t);this.notifications.push({notification:t,node:r}),this._announce(t.options.message||"Notification");},e.prototype._renderNotification=function(t){var r,n=this._buildNotificationCard(t),i=t.options.className;return i&&(r=n.classList).add.apply(r,i.split(" ")),this.container.appendChild(n),n},e.prototype._popRenderedNotification=function(t){for(var r=-1,n=0;n<this.notifications.length&&r<0;n++)this.notifications[n].notification===t&&(r=n);if(r!==-1)return this.notifications.splice(r,1)[0]},e.prototype.getXPosition=function(t){var r;return ((r=t==null?undefined:t.position)===null||r===undefined?undefined:r.x)||"right"},e.prototype.getYPosition=function(t){var r;return ((r=t==null?undefined:t.position)===null||r===undefined?undefined:r.y)||"bottom"},e.prototype.adjustContainerAlignment=function(t){var r=this.X_POSITION_FLEX_MAP[this.getXPosition(t)],n=this.Y_POSITION_FLEX_MAP[this.getYPosition(t)],i=this.container.style;i.setProperty("justify-content",n),i.setProperty("align-items",r);},e.prototype._buildNotificationCard=function(t){var r=this,n=t.options,i=n.icon;this.adjustContainerAlignment(n);var a=this._createHTMLElement({tagName:"div",className:"notyf__toast"}),s=this._createHTMLElement({tagName:"div",className:"notyf__ripple"}),v=this._createHTMLElement({tagName:"div",className:"notyf__wrapper"}),u=this._createHTMLElement({tagName:"div",className:"notyf__message"});u.innerHTML=n.message||"";var l=n.background||n.backgroundColor;if(i){var o=this._createHTMLElement({tagName:"div",className:"notyf__icon"});if((typeof i=="string"||i instanceof String)&&(o.innerHTML=new String(i).valueOf()),typeof i=="object"){var c=i.tagName,f=c===undefined?"i":c,_=i.className,w=i.text,m=i.color,E=m===undefined?l:m,x=this._createHTMLElement({tagName:f,className:_,text:w});E&&(x.style.color=E),o.appendChild(x);}v.appendChild(o);}if(v.appendChild(u),a.appendChild(v),l&&(n.ripple?(s.style.background=l,a.appendChild(s)):a.style.background=l),n.dismissible){var g=this._createHTMLElement({tagName:"div",className:"notyf__dismiss"}),k=this._createHTMLElement({tagName:"button",className:"notyf__dismiss-btn"});g.appendChild(k),v.appendChild(g),a.classList.add("notyf__toast--dismissible"),k.addEventListener("click",function(N){var C,A;(A=(C=r.events)[rt.Dismiss])===null||A===undefined||A.call(C,{target:t,event:N}),N.stopPropagation();});}a.addEventListener("click",function(N){var C,A;return (A=(C=r.events)[rt.Click])===null||A===undefined?undefined:A.call(C,{target:t,event:N})});var V=this.getYPosition(n)==="top"?"upper":"lower";return a.classList.add("notyf__toast--"+V),a},e.prototype._createHTMLElement=function(t){var r=t.tagName,n=t.className,i=t.text,a=document.createElement(r);return n&&(a.className=n),a.textContent=i||null,a},e.prototype._createA11yContainer=function(){var t=this._createHTMLElement({tagName:"div",className:"notyf-announcer"});t.setAttribute("aria-atomic","true"),t.setAttribute("aria-live","polite"),t.style.border="0",t.style.clip="rect(0 0 0 0)",t.style.height="1px",t.style.margin="-1px",t.style.overflow="hidden",t.style.padding="0",t.style.position="absolute",t.style.width="1px",t.style.outline="0",document.body.appendChild(t),this.a11yContainer=t;},e.prototype._announce=function(t){var r=this;this.a11yContainer.textContent="",setTimeout(function(){r.a11yContainer.textContent=t;},100);},e.prototype._getAnimationEndEventName=function(){var t=document.createElement("_fake"),r={MozTransition:"animationend",OTransition:"oAnimationEnd",WebkitTransition:"webkitAnimationEnd",transition:"animationend"},n;for(n in r)if(t.style[n]!==undefined)return r[n];return "animationend"},e}(),$a=function(){function e(t){var r=this;this.dismiss=this._removeNotification,this.notifications=new bo,this.view=new wo;var n=this.registerTypes(t);this.options=Ae(Ae({},Gi),t),this.options.types=n,this.notifications.onUpdate(function(i,a){return r.view.update(i,a)}),this.view.on(rt.Dismiss,function(i){var a=i.target,s=i.event;r._removeNotification(a),a.triggerEvent(rt.Dismiss,s);}),this.view.on(rt.Click,function(i){var a=i.target,s=i.event;return a.triggerEvent(rt.Click,s)});}return e.prototype.error=function(t){var r=this.normalizeOptions("error",t);return this.open(r)},e.prototype.success=function(t){var r=this.normalizeOptions("success",t);return this.open(r)},e.prototype.open=function(t){var r=this.options.types.find(function(a){var s=a.type;return s===t.type})||{},n=Ae(Ae({},r),t);this.assignProps(["ripple","position","dismissible"],n);var i=new yo(n);return this._pushNotification(i),i},e.prototype.dismissAll=function(){for(;this.notifications.splice(0,1););},e.prototype.assignProps=function(t,r){var n=this;t.forEach(function(i){r[i]=r[i]==null?n.options[i]:r[i];});},e.prototype._pushNotification=function(t){var r=this;this.notifications.push(t);var n=t.options.duration!==undefined?t.options.duration:this.options.duration;n&&setTimeout(function(){return r._removeNotification(t)},n);},e.prototype._removeNotification=function(t){var r=this.notifications.indexOf(t);r!==-1&&this.notifications.splice(r,1);},e.prototype.normalizeOptions=function(t,r){var n={type:t};return typeof r=="string"?n.message=r:typeof r=="object"&&(n=Ae(Ae({},n),r)),n},e.prototype.registerTypes=function(t){var r=(t&&t.types||[]).slice(),n=Gi.types.map(function(i){var a=-1;r.forEach(function(v,u){v.type===i.type&&(a=u);});var s=a!==-1?r.splice(a,1)[0]:{};return Ae(Ae({},i),s)});return n.concat(r)},e}();new $a({duration:5e3,dismissible:true});const Tt=new $a({duration:3e3,dismissible:true,position:{x:"left",y:"top"},types:[{type:"warning",background:"orange",icon:{className:"material-icons",tagName:"i",text:"warning"}}]}),xo="data:image/svg+xml,%3csvg%20stroke='currentColor'%20fill='currentColor'%20stroke-width='0'%20viewBox='0%200%2024%2024'%20height='25'%20width='25'%20xmlns='http://www.w3.org/2000/svg'%20style='%20vertical-align:%20middle;%20--darkreader-inline-fill:%20currentColor;%20--darkreader-inline-stroke:%20currentColor;'%20%3e%3cpath%20d='M12%205c-3.859%200-7%203.141-7%207s3.141%207%207%207%207-3.141%207-7-3.141-7-7-7zm0%2012c-2.757%200-5-2.243-5-5s2.243-5%205-5%205%202.243%205%205-2.243%205-5%205z'%3e%3c/path%3e%3cpath%20d='M12%209c-1.627%200-3%201.373-3%203s1.373%203%203%203%203-1.373%203-3-1.373-3-3-3z'%3e%3c/path%3e%3c/svg%3e",Co="data:image/svg+xml,%3csvg%20viewBox='64%2064%20896%20896'%20focusable='false'%20data-icon='arrow-up'%20width='1em'%20height='1em'%20fill='green'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M868%20545.5L536.1%20163a31.96%2031.96%200%2000-48.3%200L156%20545.5a7.97%207.97%200%20006%2013.2h81c4.6%200%209-2%2012.1-5.5L474%20300.9V864c0%204.4%203.6%208%208%208h60c4.4%200%208-3.6%208-8V300.9l218.9%20252.3c3%203.5%207.4%205.5%2012.1%205.5h81c6.8%200%2010.5-8%206-13.2z'%3e%3c/path%3e%3c/svg%3e",Eo="data:image/svg+xml,%3csvg%20viewBox='64%2064%20896%20896'%20focusable='false'%20data-icon='arrow-down'%20width='1em'%20height='1em'%20fill='red'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M862%20465.3h-81c-4.6%200-9%202-12.1%205.5L550%20723.1V160c0-4.4-3.6-8-8-8h-60c-4.4%200-8%203.6-8%208v563.1L255.1%20470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8%200-10.5%208.1-6%2013.2L487.9%20861a31.96%2031.96%200%200048.3%200L868%20478.5c4.5-5.2.8-13.2-6-13.2z'%3e%3c/path%3e%3c/svg%3e",ko="data:image/svg+xml,%3csvg%20viewBox='64%2064%20896%20896'%20focusable='false'%20data-icon='download'%20width='1em'%20height='1em'%20fill='currentColor'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M505.7%20661a8%208%200%200012.6%200l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4%200-8%203.6-8%208v338.3H400c-6.7%200-10.4%207.7-6.3%2012.9l112%20141.8zM878%20626h-60c-4.4%200-8%203.6-8%208v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4%200-8%203.6-8%208v198c0%2017.7%2014.3%2032%2032%2032h684c17.7%200%2032-14.3%2032-32V634c0-4.4-3.6-8-8-8z'%3e%3c/path%3e%3c/svg%3e",Lo="data:image/svg+xml,%3csvg%20viewBox='64%2064%20896%20896'%20focusable='false'%20data-icon='star'%20width='1em'%20height='1em'%20fill='currentColor'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M908.1%20353.1l-253.9-36.9L540.7%2086.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9%2014.5L369.8%20316.2l-253.9%2036.9c-7%201-13.4%204.3-18.3%209.3a32.05%2032.05%200%2000.6%2045.3l183.7%20179.1-43.4%20252.9a31.95%2031.95%200%200046.4%2033.7L512%20754l227.1%20119.4c6.2%203.3%2013.4%204.4%2020.3%203.2%2017.4-3%2029.1-19.5%2026.1-36.9l-43.4-252.9%20183.7-179.1c5-4.9%208.3-11.3%209.3-18.3%202.7-17.5-9.5-33.7-27-36.3z'%3e%3c/path%3e%3c/svg%3e",No="data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cstyle%3e%20.cls-1{fill:%232eb1b7;}%20.cls-2{fill:%2356b54e;}%20.cls-3{fill:%235dc6d1;}%20.cls-4{fill:%2360cc5a;}%20.cls-5{fill:%23ffce69;}%20.cls-6{fill:%236c2e7c;}%20%3c/style%3e%3c/defs%3e%3cg%20id='Icons'%3e%3crect%20class='cls-1'%20height='22'%20rx='4'%20width='22'%20x='1'%20y='1'/%3e%3cpath%20class='cls-2'%20d='M23,18v1a4,4,0,0,1-4,4H5a4,4,0,0,1-3.9-3.1l7.19-7.19a1.008,1.008,0,0,1,1.42,0l1.8,1.8a1,1,0,0,0,1.46-.05l2.33-2.65a1,1,0,0,1,1.46-.05Z'/%3e%3cpath%20class='cls-3'%20d='M23,5v9a4.025,4.025,0,0,1-1.17,2.83l-5.07-5.07a1,1,0,0,0-1.46.05l-2.33,2.65a1,1,0,0,1-1.46.05l-1.8-1.8a1.008,1.008,0,0,0-1.42,0L3.36,17.64A3.988,3.988,0,0,1,1,14V5A4,4,0,0,1,5,1H19A4,4,0,0,1,23,5Z'/%3e%3cpath%20class='cls-4'%20d='M21.83,16.83A4.025,4.025,0,0,1,19,18H5a3.931,3.931,0,0,1-1.64-.36l4.93-4.93a1.008,1.008,0,0,1,1.42,0l1.8,1.8a1,1,0,0,0,1.46-.05l2.33-2.65a1,1,0,0,1,1.46-.05Z'/%3e%3ccircle%20class='cls-5'%20cx='7'%20cy='7'%20r='2'/%3e%3c/g%3e%3cg%20data-name='Layer%204'%20id='Layer_4'%3e%3cpath%20class='cls-6'%20d='M19,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,19,0Zm3,19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3Z'/%3e%3cpath%20class='cls-6'%20d='M7,10A3,3,0,1,0,4,7,3,3,0,0,0,7,10ZM7,6A1,1,0,1,1,6,7,1,1,0,0,1,7,6Z'/%3e%3cpath%20class='cls-6'%20d='M16.707,10.293a.956.956,0,0,0-.74-.293,1.006,1.006,0,0,0-.72.341L12.217,13.8l-2.51-2.511a1,1,0,0,0-1.414,0l-4,4a1,1,0,1,0,1.414,1.414L9,13.414l1.9,1.9L8.247,18.341a1,1,0,0,0,1.506,1.318l3.218-3.678.006,0,.007-.011,3.065-3.5,2.244,2.244a1,1,0,0,0,1.414-1.414Z'/%3e%3c/g%3e%3c/svg%3e",F="https://static.m-team.cc/static/cate/",Er={architecture:"Mteam",TL_Selector:"div.app-content__inner",LOADING_PIC:"/static/media/logo.80b63235eaf702e44a8d.png",HOST:"https://test2.m-team.cc",API:{search:{url:"/search",fullUrl:"/api/torrent/search",method:"POST"}},ICON:{SIZE:xo,SEEDERS:Co,LEECHERS:Eo,DOWNLOAD:ko,COLLECTION:Lo,PIN:"/static/trans.gif",PREVIEW:No},CATEGORY:{401:{src:F+"moviesd.png",alt:"電影/SD",color:"#c74854"},402:{src:F+"tvhd.png",alt:"影劇/綜藝/HD",color:"#276fb8"},403:{src:F+"tvsd.png",alt:"影劇/綜藝/SD",color:"#c74854"},404:{src:F+"bbc.png",alt:"紀錄",color:"#23ac38"},405:{src:F+"anime.png",alt:"動畫",color:"#996c34"},406:{src:F+"mv.png",alt:"演唱",color:"#8a57a1"},407:{src:F+"sport.png",alt:"運動",color:"#23ac38"},409:{src:F+"other.png",alt:"Misc(其他)",color:"#996c34"},419:{src:F+"moviehd.png",alt:"電影/HD",color:"#c01a20"},420:{src:F+"moviedvd.png",alt:"電影/DVDiSo",color:"#c74854"},421:{src:F+"moviebd.png",alt:"電影/Blu-Ray",color:"#00a0e9"},422:{src:F+"software.png",alt:"軟體",color:"#f39800"},423:{src:F+"game-pc-3.jpeg",alt:"PC遊戲",color:"#f39800"},427:{src:F+"Study.png",alt:"教育(書面)",color:"#7FC269"},434:{src:F+"flac.png",alt:"Music(無損)",color:"#8a57a1"},435:{src:F+"tvdvd.png",alt:"影劇/綜藝/DVDiSo",color:"#4dbebd"},438:{src:F+"tvbd.png",alt:"影劇/綜藝/BD",color:"#1897d6"},439:{src:F+"movieremux.png",alt:"電影/Remux",color:"#1b2a51"},451:{src:F+"Study_Video.png",alt:"教育(影片)",color:"#7FC269"},442:{src:F+"Study_Audio.png",alt:"有聲書",color:"#7FC269"},448:{src:F+"pcgame.png",alt:"TV遊戲",color:"#f39800"},410:{src:F+"cenhd.png",alt:"AV(有碼)/HD Censored",color:"#F520CB"},411:{src:F+"hgame.png",alt:"H-遊戲",color:"#f49800"},412:{src:F+"hanime.png",alt:"H-動畫",color:"#f49800"},413:{src:F+"hcomic.png",alt:"H-漫畫",color:"#f49800"},424:{src:F+"censd.png",alt:"AV(有碼)/SD Censored",color:"#DA55A9"},425:{src:F+"ivvideo.png",alt:"IV(寫真影集)",color:"#bb1e9a"},426:{src:F+"uendvd.png",alt:"AV(無碼)/DVDiSo Uncensored",color:"#f77afa"},429:{src:F+"uenhd.png",alt:"AV(無碼)/HD Uncensored",color:"#f52bcb"},430:{src:F+"uensd.png",alt:"AV(無碼)/SD Uncensored",color:"#db55a9"},431:{src:F+"cenbd.png",alt:"AV(有碼)/Blu-Ray Censored",color:"#19a7ec"},432:{src:F+"uenbd.png",alt:"AV(無碼)/Blu-Ray Uncensored",color:"#19a7ec"},433:{src:F+"ivpic.png",alt:"IV(寫真圖集)",color:"#bb1e9a"},436:{src:F+"adult0day.png",alt:"AV(網站)/0Day",color:"#bb1e9a"},437:{src:F+"cendvd.png",alt:"AV(有碼)/DVDiSo Censored",color:"#f77afa"},440:{src:F+"gayhd.gif",alt:"AV(Gay)/HD",color:"#f52bcb"}},TAG:{"4k":{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},"8k":{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},hdr:{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},hdr10:{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},"hdr10+":{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},hlg:{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},DoVi:{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},HDRVi:{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},中字:{color:"#ad2a2a",bgColor:"#d14a4a2e"},中配:{color:"#5b3991",bgColor:"#5b399129"}},INDEX:0,Iframe_Width:1260,get_bg_color:function(){return getComputedStyle(document.documentElement).getPropertyValue("--bg-3")},special:function(){let e=Mo(),t=So();return e&&t},pageLoaded:function(){}};function Mo(){const e=Array.from(document.querySelectorAll(".ant-table-row-level-0 .ant-col a[href]"));return e.forEach(function(t){t.addEventListener("click",function(r){r.preventDefault(),_iframe_switch.set(1),_iframe_url.set(t.href);});}),e.length}function So(){document.querySelectorAll(".ant-image-mask").forEach(r=>{r.remove();});const t=Array.from(document.querySelectorAll(".torrent-list__thumbnail"));return t.forEach(r=>{r.classList+=" preview_Origin";}),t.length}const Ei=".preview_Origin";document.body.addEventListener("mouseover",function(e){if(e.target.matches(Ei)){const t=e,r=e.target;handleMouseOver(t,r);}});document.body.addEventListener("mouseout",function(e){e.target.matches(Ei)&&handleMouseOut(e);});document.body.addEventListener("mousemove",function(e){if(e.target.matches(Ei)){const t=e.target;handleMouseMove(e,t);}});var To=Ci('<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="18" width="18" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle;"><path d="M7 7h10v2H7zm0 4h7v2H7z"></path><path d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"></path></svg>');function Wi(e){var t=To();L(e,t);}class Ao{constructor(){this.container=null,this.imgElements=null,this.buffer=null,this.init();}init(){this.container=document.querySelector(".kp_container")||this.createPreview(),document.body.appendChild(this.container);}createPreview(){const t=document.createElement("div");t.className="kp_container",t.style.backgroundColor="rgba(0,0,0,0.8)",t.style.opacity="1",t.style.position="fixed",t.style.zIndex="10000",t.style.pointerEvents="none",t.style.transition="all .3s",t.style.display="none";const r=document.createElement("img");r.className="kp_img",r.style.position="absolute",r.style.zIndex="10002",r.style.pointerEvents="none",r.style.width="100%",r.style.height="100%",r.style.objectFit="contain",t.appendChild(r);const n=document.createElement("img");return n.className="kp_img",n.style.position="absolute",n.style.zIndex="10001",n.style.pointerEvents="none",n.style.width="100%",n.style.height="100%",n.style.objectFit="cover",n.style.filter="blur(8px)",n.style.opacity="0.9",t.appendChild(n),t}handleMouseOver(t,r){if(!r){console.warn("[FALL]: imgEle is null");return}if(Na(oo)){const n=r.getAttribute("src");n&&(document.querySelectorAll(".kp_img").forEach(a=>{a.setAttribute("src",n);}),this.updatePosition(t),this.imgElements=r,this.container.style.display="block");}}handleMouseMove(t){this.container.style.display==="block"&&this.updatePosition(t);}updatePosition(t){const r=this.previewPosition(t);this.container.style.left=r.left,this.container.style.top=r.top,this.container.style.width=r.width,this.container.style.height=r.height;}previewPosition(t){let r=0,n=0;try{r=this.imgElements.naturalWidth,n=this.imgElements.naturalHeight;}catch{}const i=t.clientX,a=t.clientY,s=window.innerWidth,v=window.innerHeight,u={bot:{width:s,height:window.innerHeight-a},top:{width:s,height:a},right:{width:window.innerWidth-i,height:v},left:{width:i,height:v}};let l=0,o="";for(const c in u){const f=Math.min(u[c].width/r,u[c].height/n);f>l&&(l=f,o=c);}return {top:{left:0,top:0,width:s+"px",height:a+"px"},bot:{left:0,top:a+"px",width:s+"px",height:window.innerHeight-a+"px"},left:{left:0,top:0,width:i+"px",height:v+"px"},right:{left:i+"px",top:0,width:window.innerWidth-i+"px",height:v+"px"}}[o]||{left:0,top:0,width:0,height:0}}clearPreview(){document.querySelectorAll(".kp_img").forEach(t=>{t.setAttribute("src","");}),this.container.style.display="none";}destroy(){this.buffer&&clearTimeout(this.buffer),this.container&&(this.container.style.display="none",clearPreview());}}function $o(){document.querySelectorAll(".kp_img").forEach(t=>{t.setAttribute("src","");});const e=document.querySelector(".kp_container");e.style.display="none";}window.__clearPreview=$o;const Io="data:image/svg+xml,%3csvg%20width='256px'%20height='256px'%20viewBox='0%200%2024.00%2024.00'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20transform='matrix(1,%200,%200,%201,%200,%200)'%20%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'%20transform='translate(0,0),%20scale(1)'%20/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%23CCCCCC'%20stroke-width='0.048'%20/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M13%203L13.7071%202.29289C13.5196%202.10536%2013.2652%202%2013%202V3ZM14%2022C14.5523%2022%2015%2021.5523%2015%2021C15%2020.4477%2014.5523%2020%2014%2020V22ZM19%209H20C20%208.73478%2019.8946%208.48043%2019.7071%208.29289L19%209ZM18%2010C18%2010.5523%2018.4477%2011%2019%2011C19.5523%2011%2020%2010.5523%2020%2010H18ZM5.21799%2019.908L4.32698%2020.362H4.32698L5.21799%2019.908ZM6.09202%2020.782L6.54601%2019.891L6.54601%2019.891L6.09202%2020.782ZM6.09202%203.21799L5.63803%202.32698L5.63803%202.32698L6.09202%203.21799ZM5.21799%204.09202L4.32698%203.63803L4.32698%203.63803L5.21799%204.09202ZM13.109%208.45399L14%208V8L13.109%208.45399ZM13.546%208.89101L14%208L13.546%208.89101ZM17.2299%2017.7929C16.8394%2018.1834%2016.8394%2018.8166%2017.2299%2019.2071C17.6204%2019.5976%2018.2536%2019.5976%2018.6441%2019.2071L17.2299%2017.7929ZM15.0316%2015.2507C14.8939%2015.7856%2015.2159%2016.3308%2015.7507%2016.4684C16.2856%2016.6061%2016.8308%2016.2841%2016.9684%2015.7493L15.0316%2015.2507ZM17.9375%2020C17.3852%2020%2016.9375%2020.4477%2016.9375%2021C16.9375%2021.5523%2017.3852%2022%2017.9375%2022V20ZM17.9475%2022C18.4998%2022%2018.9475%2021.5523%2018.9475%2021C18.9475%2020.4477%2018.4998%2020%2017.9475%2020V22ZM13%202H8.2V4H13V2ZM4%206.2V17.8H6V6.2H4ZM8.2%2022H14V20H8.2V22ZM19.7071%208.29289L13.7071%202.29289L12.2929%203.70711L18.2929%209.70711L19.7071%208.29289ZM20%2010V9H18V10H20ZM4%2017.8C4%2018.3436%203.99922%2018.8114%204.03057%2019.195C4.06287%2019.5904%204.13419%2019.9836%204.32698%2020.362L6.10899%2019.454C6.0838%2019.4045%206.04612%2019.3038%206.02393%2019.0322C6.00078%2018.7488%206%2018.3766%206%2017.8H4ZM8.2%2020C7.62345%2020%207.25117%2019.9992%206.96784%2019.9761C6.69617%2019.9539%206.59545%2019.9162%206.54601%2019.891L5.63803%2021.673C6.01641%2021.8658%206.40963%2021.9371%206.80497%2021.9694C7.18864%2022.0008%207.65645%2022%208.2%2022V20ZM4.32698%2020.362C4.6146%2020.9265%205.07354%2021.3854%205.63803%2021.673L6.54601%2019.891C6.35785%2019.7951%206.20487%2019.6422%206.10899%2019.454L4.32698%2020.362ZM8.2%202C7.65645%202%207.18864%201.99922%206.80497%202.03057C6.40963%202.06287%206.01641%202.13419%205.63803%202.32698L6.54601%204.10899C6.59545%204.0838%206.69617%204.04612%206.96784%204.02393C7.25117%204.00078%207.62345%204%208.2%204V2ZM6%206.2C6%205.62345%206.00078%205.25117%206.02393%204.96784C6.04612%204.69617%206.0838%204.59545%206.10899%204.54601L4.32698%203.63803C4.13419%204.01641%204.06287%204.40963%204.03057%204.80497C3.99922%205.18864%204%205.65645%204%206.2H6ZM5.63803%202.32698C5.07354%202.6146%204.6146%203.07354%204.32698%203.63803L6.10899%204.54601C6.20487%204.35785%206.35785%204.20487%206.54601%204.10899L5.63803%202.32698ZM12%203V7.4H14V3H12ZM14.6%2010H19V8H14.6V10ZM12%207.4C12%207.66353%2011.9992%207.92131%2012.0169%208.13823C12.0356%208.36682%2012.0797%208.63656%2012.218%208.90798L14%208C14.0293%208.05751%2014.0189%208.08028%2014.0103%207.97537C14.0008%207.85878%2014%207.69653%2014%207.4H12ZM14.6%208C14.3035%208%2014.1412%207.99922%2014.0246%207.9897C13.9197%207.98113%2013.9425%207.9707%2014%208L13.092%209.78201C13.3634%209.92031%2013.6332%209.96438%2013.8618%209.98305C14.0787%2010.0008%2014.3365%2010%2014.6%2010V8ZM12.218%208.90798C12.4097%209.2843%2012.7157%209.59027%2013.092%209.78201L14%208V8L12.218%208.90798ZM18.937%2016C18.937%2016.1732%2018.8915%2016.3053%2018.6175%2016.5697C18.4638%2016.718%2018.2828%2016.8653%2018.0319%2017.074C17.7936%2017.2723%2017.5141%2017.5087%2017.2299%2017.7929L18.6441%2019.2071C18.86%2018.9913%2019.0805%2018.8033%2019.3109%2018.6116C19.5287%2018.4305%2019.7852%2018.2223%2020.0065%2018.0087C20.4825%2017.5493%2020.937%2016.9314%2020.937%2016H18.937ZM17.937%2015C18.4893%2015%2018.937%2015.4477%2018.937%2016H20.937C20.937%2014.3431%2019.5938%2013%2017.937%2013V15ZM16.9684%2015.7493C17.0795%2015.3177%2017.4724%2015%2017.937%2015V13C16.5377%2013%2015.3645%2013.957%2015.0316%2015.2507L16.9684%2015.7493ZM17.9375%2022H17.9475V20H17.9375V22Z'%20fill='%23c00000'%20/%3e%3c/g%3e%3c/svg%3e",Po="data:image/svg+xml,%3csvg%20viewBox='-2.4%20-2.4%2028.80%2028.80'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23000000'%20%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'%20/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M15.6%2015.6C15.6%2015.6%2014.25%2013.8%2012%2013.8C9.75%2013.8%208.4%2015.6%208.4%2015.6M14.7%209.3H14.709M9.3%209.3H9.309M21%2012C21%2016.9706%2016.9706%2021%2012%2021C7.02944%2021%203%2016.9706%203%2012C3%207.02944%207.02944%203%2012%203C16.9706%203%2021%207.02944%2021%2012ZM15.15%209.3C15.15%209.54853%2014.9485%209.75%2014.7%209.75C14.4515%209.75%2014.25%209.54853%2014.25%209.3C14.25%209.05147%2014.4515%208.85%2014.7%208.85C14.9485%208.85%2015.15%209.05147%2015.15%209.3ZM9.75%209.3C9.75%209.54853%209.54853%209.75%209.3%209.75C9.05147%209.75%208.85%209.54853%208.85%209.3C8.85%209.05147%209.05147%208.85%209.3%208.85C9.54853%208.85%209.75%209.05147%209.75%209.3Z'%20stroke='%23000000'%20stroke-width='1.8'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3c/g%3e%3c/svg%3e";var we=to(()=>Er),Vo=I('<div class="card-category svelte-1ytaoom"><img class="card_category-img svelte-1ytaoom"> </div>'),Oo=I('<a class="__main_title svelte-1ytaoom" target="_blank" rel="noopener noreferrer"> </a>'),Ro=I('<div class="pic_error svelte-1ytaoom"><div><img style="height: 100%; width:60px; border-radius:20px;" alt="pic error" class="svelte-1ytaoom"></div> <div class="ant-typography" style="color: white; font-size:16px;">GAY WARNING<br>同志警告</div></div>'),Ho=I('<img class="lazy-image svelte-1ytaoom">'),Do=I('<div class="pic_error svelte-1ytaoom" style=""><div><img style="height: 100%;width: 100px;" alt="no pic" class="svelte-1ytaoom"></div> <div>本种没有图片</div></div>'),Fo=I('<div class="pic_error svelte-1ytaoom" style=""><div><img style="height: 100%;width: 100px;" alt="pic error" class="svelte-1ytaoom"></div> <div class="ant-typography">图片加载失败</div></div>'),qo=I('<div class="hover-trigger svelte-1ytaoom"><img style="pointer-events: none;" alt="PREVIEW" class="svelte-1ytaoom"></div>'),Bo=I(`<img style="
                    background: url(/static/media/icons.8bb5446ebbbd07050285.gif) 0 -202px;
                    height: 14px;
                    width: 14px;" alt="PIN" class="svelte-1ytaoom">`),Zo=I('<div class="card_info__topping svelte-1ytaoom"></div> &nbsp;',1),zo=I('<div class="_tag svelte-1ytaoom"> </div>'),Go=I('<div class="_tag _tag_diy svelte-1ytaoom">DIY</div>'),Wo=I('<div class="_tag _tag_dub svelte-1ytaoom">国配</div>'),jo=I('<div class="_tag _tag_sub svelte-1ytaoom">中字</div>'),Yo=I('<div class="_tag svelte-1ytaoom"> </div>'),Uo=I('<div class="cl-tags svelte-1ytaoom"><!> <!> <!> <!></div>'),Xo=I(`<img style="
                  background: url(/static/media/icons.8bb5446ebbbd07050285.gif) 0 -202px;
                  height: 14px;
                  width: 14px;" alt="PIN" class="svelte-1ytaoom">`),Qo=I('<div class="card_info__topping svelte-1ytaoom"></div> &nbsp;',1),Jo=I('<div class="_tag svelte-1ytaoom"> </div>'),Ko=I('<div class="card-index svelte-1ytaoom"><!> <!></div>'),el=I('<div class="card-index card-index-right svelte-1ytaoom"> </div>'),tl=I('<div class="card_info-item card_info__sub_title svelte-1ytaoom"><div> </div></div>'),rl=I('<div class="_tag _tag_diy svelte-1ytaoom">DIY</div>'),nl=I('<div class="_tag _tag_dub svelte-1ytaoom">国配</div>'),il=I('<div class="_tag _tag_sub svelte-1ytaoom">中字</div>'),al=I('<div class="_tag svelte-1ytaoom"> </div>'),sl=I('<div class="cl-tags svelte-1ytaoom"><!> <!> <!> <!></div>'),ol=I('<div class="card_info-item card_info__dl_and_cl svelte-1ytaoom"><button title="(原列表的这俩按钮会消失)">下载 & 收藏</button></div>'),ll=I('<div class="card_info-item card_info__upload_time svelte-1ytaoom"><div> </div></div>'),cl=I('<div class="card_info-item card_info__statistics svelte-1ytaoom"><!> &nbsp; <b> </b> &nbsp;&nbsp; <img alt="SVG_Seeders"> &nbsp; <b> </b> &nbsp;&nbsp; <img alt="SVG_Leechers"> &nbsp; <b> </b></div>'),ul=I('<div class="card_info svelte-1ytaoom"><!>  <!> <!> <!> <!></div>'),vl=I('<div class="card_holder svelte-1ytaoom"><!> <div class="card_title"><!></div> <div class="card_pic svelte-1ytaoom"><!> <!>  <div class="hover-overlay svelte-1ytaoom"><div class="overlay-content svelte-1ytaoom"><div class="__inner_index_and_size svelte-1ytaoom"><div class="card-index __inner_index svelte-1ytaoom" style="background-color:black; color:white"><!> <!></div> <button class="__iframe_button svelte-1ytaoom">打开 iframe</button> <div class="card-index card-index-right __inner_index __inner_size svelte-1ytaoom"> </div></div> <div class="card-category card_info-item svelte-1ytaoom"><img class="card_category-img card_category_square svelte-1ytaoom" style="width: 36px;height: 36px;"> </div> <div style="width: 100%;" class="card_info-item card_info__sub_title svelte-1ytaoom"><a class="__main_title __straight svelte-1ytaoom" target="_blank" rel="noopener noreferrer"> </a></div> <div style="width: 100%;" class="card_info-item card_info__sub_title svelte-1ytaoom"><div class="__sub_title svelte-1ytaoom"> </div></div>  <!> <div class="card_info-item card_info__upload_time svelte-1ytaoom"><div> </div></div> <div class="card_info-item card_info__statistics svelte-1ytaoom"><div class="__center svelte-1ytaoom"><!> <b> </b></div> <div class="__center svelte-1ytaoom"><img style="width: 14px; height: 14px;" alt="SVG_Seeders" class="svelte-1ytaoom"> <b> </b></div> <div class="__center svelte-1ytaoom"><img style="width: 14px; height: 14px;" alt="SVG_Leechers" class="svelte-1ytaoom"> <b> </b></div> <button title="(原列表的这俩按钮会消失)">下载&收藏</button></div></div></div> <!> <!></div> <!></div>');function fl(e,t){at(t,false);const[r,n]=Bt(),i=()=>oe(Aa,"$_mt_categories",r),a=()=>oe(Ta,"$_mt_label",r),s=()=>oe(rn,"$_block_gay",r),v=()=>oe(nn,"$_card_radius",r),u=()=>oe(Te,"$_card_detail",r),l=()=>oe(ui,"$_show_hover_pic",r);let o=ve(t,"torrentInfo",8),c=te(false),f=te();o().status.toppingLevel&&$(f,Array(Number(o().status.toppingLevel)).fill());const _=o().status.discount,w=o().status.discountEndTime,m={FREE:"免费",PERCENT_50:"50%"},E=()=>{const y=new Date,M=new Date(w);return Math.floor((M.getTime()-y.getTime())/(1e3*3600))};let x=te(),g=te();const k="rgba(255, 255, 255, 0.5)";let V=te(),N=te();const C=`https://${location.host}/browse?cat=`+o().category;we().CATEGORY[o().category]||($(g,k),Tt.open({type:"warning",message:`存在未知分类: ${o().category}`}),we(we().CATEGORY[o().category]={src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZmMDAwMCIvPjwvc3ZnPg==",alt:"未知分类(TG或论坛联系我)",color:k})),$(V,i()[o().category].nameChs??we().CATEGORY[o().category].alt),$(N,i()[o().category].image?F+i()[o().category].image:we().CATEGORY[o().category].src),$(g,we().CATEGORY[o().category].color??k);let A=te([]);o().labelsNew.length&&$(A,o().labelsNew.map(y=>{if(we().TAG[y])return {key:y,config:we().TAG[y]};if(a()){console.warn("[FALL]: 存在本地没有的 tag: ",y);let M;for(const b in a())if(y==a()[b].tag){M=a()[b];break}if(M)return {key:y,config:M}}return null}).filter(Boolean));function T(y){if(y===0)return "0 B";const M=["B","KB","MB","GB","TB"];let b=0,W=y;for(;W>=1024&&b<M.length-1;)W/=1024,b++;return `${W.toFixed(2).replace(/\.?0+$/,"")} ${M[b]}`}let O=te(),P=te();function q(y,M){const b=document.querySelectorAll(`a[href^="/detail/${y}"]`),W=[];b.forEach(J=>{if(!/\/detail\/\d+/.test(J.href))return;const ee=J.closest("tr");ee&&ee.querySelectorAll("button").forEach(ce=>{ce.querySelector("span.ant-btn-icon")&&W.push(ce);});}),W.length?(W[0].style.margin=0,[...new Set(W)].forEach(ee=>{M.appendChild(ee);})):Tt.error("没找到捏, 建议在种子详情里下载收藏~");}let B=te(false),Q=te(false),le=new Ao,ne=te(),D=te(),ae=te(0);function ie(){d(D)&&$(ae,d(D).offsetHeight);}let me=te(false);const ot="/static/cate/gayhd.gif",lt="https://static.m-team.cc/static/media/logo.80b63235eaf702e44a8d.png";let Oe=o().imageList[0]||lt,z=te(),ct,Be=te(false);const Tr=()=>{d(Be)||(Se(z,d(z).style.width="100%"),Se(z,d(z).src=Oe),d(z).classList.add("loaded"),Se(z,d(z).style.opacity=1),$(Be,true),d(D)&&ie());};function Zt(){fe(Sa,"https://"+location.host+"/detail/"+o().id),fe(St,1);}Nn(()=>{d(Be)||(ct=new IntersectionObserver(y=>{y.forEach(M=>{M.isIntersecting&&(Tr(),ct.unobserve(d(z)));});},{rootMargin:"100px"}),d(z)&&!d(Be)&&ct.observe(d(z)),o().pt_fall_highlight&&d(x).scrollIntoView({behavior:"smooth"}),setTimeout(()=>{},3e3)),ie(),d(z)&&Se(z,d(z).style.width="auto");}),no(()=>{ct&&ct.disconnect();}),It(()=>d(D),()=>{d(D)&&ie();}),It(()=>(vt(o()),s(),d(z),d(D)),()=>{o().category==440&&s()==0&&d(z)&&(Se(z,d(z).style.width="100%"),Se(z,d(z).src=Oe),d(z).classList.add("loaded"),Se(z,d(z).style.opacity=1),$(Be,true),d(D)&&ie());}),wn(),mt();var yt=vl(),bt=h(yt);{var Ar=y=>{var M=Vo();S(M,"data-href",C);var b=h(M),W=p(b);j(J=>{S(M,"style",`
      background-color: ${d(g)??"transparent"};
      color: ${J??""}`),S(b,"src",d(N)),S(b,"alt",d(V)),H(W,`    ${d(V)??""}`);},[()=>d(g)?Ye(d(g)):"black"],Ne),L(y,M);};G(bt,y=>{u().category&&y(Ar);});}var zt=p(bt,2),Mn=h(zt);{var Sn=y=>{var M=Oo(),b=h(M);j(()=>{S(M,"href","/detail/"+o().id),H(b,o().name);}),L(y,M);};G(Mn,y=>{u().title&&y(Sn);});}var ut=p(zt,2),Gt=h(ut);{var Tn=y=>{var M=tt(),b=$e(M);{var W=ee=>{var ce=Ro(),de=h(ce),he=h(de);S(he,"src",ot),j(()=>S(ce,"style",`  background-color: ${d(g)??""}`)),L(ee,ce);},J=ee=>{var ce=tt(),de=$e(ce);{var he=U=>{var se=Ho();S(se,"data-src",Oe),Je(se,X=>$(z,X),()=>d(z)),j(()=>{S(se,"src",d(Be)?Oe:lt),S(se,"alt",o().id);}),Z("error",se,()=>{$(me,true),d(z)||console.log(`<${o().index}>[${o().id}] imgElement 丢失.`);}),L(U,se);},ze=U=>{var se=Do(),X=h(se),ue=h(X);S(ue,"src",Po),L(U,se);};G(de,U=>{o().imageList[0]?U(he):U(ze,false);},true);}L(ee,ce);};G(b,ee=>{s()&&o().category==440?ee(W):ee(J,false);});}L(y,M);},An=y=>{var M=Fo(),b=h(M),W=h(b);S(W,"src",Io);var J=p(b,2);j(ee=>S(J,"style",`color: ${ee??""}; font-size:16px;`),[()=>Ye(d(g))],Ne),L(y,M);};G(Gt,y=>{d(me)?y(An,false):y(Tn);});}var Wt=p(Gt,2);{var $r=y=>{var M=qo(),b=h(M);j(()=>S(b,"src",we().ICON.PREVIEW)),Z("mouseover",M,W=>{$(B,true),le.handleMouseOver(W,d(z));}),L(y,M);};G(Wt,y=>{l()&&!d(me)&&y($r);});}var Ze=p(Wt,2),Ir=h(Ze),jt=h(Ir),Yt=h(jt),Pr=h(Yt);{var $n=y=>{var M=Zo(),b=$e(M);dt(b,5,()=>d(f),vr,(W,J)=>{var ee=Bo();j(()=>S(ee,"src",we().ICON.PIN)),L(W,ee);}),L(y,M);};G(Pr,y=>{o().status.toppingLevel!="0"&&y($n);});}var Ut=p(Pr),Vr=p(Ut);{var In=y=>{var M=zo();fr(M,"_tag_discount_free",_=="FREE"),fr(M,"_tag_discount_50",_=="PERCENT_50");var b=h(M);j(W=>H(b,`${m[_]??""}${W??""}`),[()=>w?":"+E()+"小时":""],Ne),L(y,M);};G(Vr,y=>{_!="NORMAL"&&y(In);});}var Xt=p(Yt,2),Qt=p(Xt,2),Or=h(Qt),wt=p(jt,2);S(wt,"data-href",C);var Jt=h(wt),Rr=p(Jt),xt=p(wt,2),Kt=h(xt),Pn=h(Kt),er=p(xt,2),Hr=h(er),Vn=h(Hr),Dr=p(er,2);{var Fr=y=>{var M=Uo(),b=h(M);{var W=U=>{var se=Go();L(U,se);};G(b,U=>{(Number(o().labels)&1)===1&&U(W);});}var J=p(b,2);{var ee=U=>{var se=Wo();L(U,se);};G(J,U=>{(Number(o().labels)&2)===2&&U(ee);});}var ce=p(J,2);{var de=U=>{var se=jo();L(U,se);};G(ce,U=>{(Number(o().labels)&4)===4&&U(de);});}var he=p(ce,2);{var ze=U=>{var se=tt(),X=$e(se);dt(X,1,()=>d(A),vr,(ue,ye)=>{var pe=Yo(),Ct=h(pe);j(()=>{S(pe,"style",`background-color: ${d(ye).config.bgColor??""}; color: ${d(ye).config.color??""}`),H(Ct,d(ye).key);}),L(ue,pe);}),L(U,se);};G(he,U=>{d(A).length!=0&&U(ze);});}L(y,M);};G(Dr,y=>{(Number(o().labels)||d(A).length)&&y(Fr);});}var tr=p(Dr,2),On=h(tr),Rn=h(On),rr=p(tr,2),nr=h(rr),qr=h(nr);Wi(qr);var Hn=p(qr,2),Br=h(Hn),ir=p(nr,2),Zr=h(ir),Dn=p(Zr,2),zr=h(Dn),ar=p(ir,2),Gr=h(ar),Fn=p(Gr,2),Wr=h(Fn),sr=p(ar,2);Je(rr,y=>$(O,y),()=>d(O)),Je(Ir,y=>$(D,y),()=>d(D)),Je(Ze,y=>$(ne,y),()=>d(ne));var jr=p(Ze,2);{var qn=y=>{var M=Ko(),b=h(M);{var W=de=>{var he=Qo(),ze=$e(he);dt(ze,5,()=>d(f),vr,(U,se)=>{var X=Xo();j(()=>S(X,"src",we().ICON.PIN)),L(U,X);}),L(de,he);};G(b,de=>{u().topping&&o().status.toppingLevel!="0"&&de(W);});}var J=p(b),ee=p(J);{var ce=de=>{var he=Jo();fr(he,"_tag_discount_free",_=="FREE"),fr(he,"_tag_discount_50",_=="PERCENT_50");var ze=h(he);j(U=>H(ze,`${m[_]??""}${U??""}`),[()=>w?":"+E()+"小时":""],Ne),L(de,he);};G(ee,de=>{u().free&&_!="NORMAL"&&de(ce);});}j(()=>H(J,` ${o().index??""}

          `)),L(y,M);};G(jr,y=>{d(c)||y(qn);});}var Yr=p(jr,2);{var Ur=y=>{var M=el(),b=h(M);j((W,J)=>{S(M,"style",`background-color: ${d(g)??"transparent"}; color:${W??""}`),H(b,J);},[()=>d(g)?Ye(d(g)):"black",()=>T(o().size)],Ne),L(y,M);};G(Yr,y=>{u().size&&!d(c)&&y(Ur);});}var Bn=p(ut,2);{var Zn=y=>{var M=ul(),b=h(M);{var W=X=>{var ue=tl(),ye=h(ue),pe=h(ye);j(()=>H(pe,o().smallDescr)),L(X,ue);};G(b,X=>{u().sub_title&&X(W);});}var J=p(b,2);{var ee=X=>{var ue=sl(),ye=h(ue);{var pe=_e=>{var Xe=rl();L(_e,Xe);};G(ye,_e=>{(o().labels&1)===1&&_e(pe);});}var Ct=p(ye,2);{var Xr=_e=>{var Xe=nl();L(_e,Xe);};G(Ct,_e=>{(o().labels&2)===2&&_e(Xr);});}var or=p(Ct,2);{var zn=_e=>{var Xe=il();L(_e,Xe);};G(or,_e=>{(o().labels&4)===4&&_e(zn);});}var Qr=p(or,2);{var Gn=_e=>{var Xe=tt(),Ia=$e(Xe);dt(Ia,1,()=>d(A),vr,(Pa,Wn)=>{var jn=al(),Va=h(jn);j(()=>{S(jn,"style",`background-color: ${d(Wn).config.bgColor??""}; color: ${d(Wn).config.color??""}`),H(Va,d(Wn).key);}),L(Pa,jn);}),L(_e,Xe);};G(Qr,_e=>{d(A).length!=0&&_e(Gn);});}L(X,ue);};G(J,X=>{u().tags&&(Number(o().labels)||d(A).length)&&X(ee);});}var ce=p(J,2);{var de=X=>{var ue=ol(),ye=h(ue);Je(ue,pe=>$(P,pe),()=>d(P)),Z("click",ye,pe=>{q(o().id,d(P)),pe.target.style.display="none";}),L(X,ue);};G(ce,X=>{u().download_collect&&X(de);});}var he=p(ce,2);{var ze=X=>{var ue=ll(),ye=h(ue),pe=h(ye);j(()=>H(pe,`上传时间:${o().createdDate??""}`)),L(X,ue);};G(he,X=>{u().upload_time&&X(ze);});}var U=p(he,2);{var se=X=>{var ue=cl(),ye=h(ue);Wi(ye);var pe=p(ye,2),Ct=h(pe),Xr=p(pe,2),or=p(Xr,2),zn=h(or),Qr=p(or,2),Gn=p(Qr,2),_e=h(Gn);j(()=>{H(Ct,o().status.comments),S(Xr,"src",we().ICON.SEEDERS),H(zn,o().status.seeders),S(Qr,"src",we().ICON.LEECHERS),H(_e,o().status.leechers);}),L(X,ue);};G(U,X=>{u().statistics&&X(se);});}L(y,M);};G(Bn,y=>{(u().sub_title||u().tags||u().download_collect||u().upload_time||u().statistics)&&y(Zn);});}Je(yt,y=>$(x,y),()=>d(x)),j((y,M)=>{Ke(yt,"--borderRadius",v().enabled?v().value+"px":"0"),S(ut,"style",`min-height: ${d(ae)+24}px;`),Ke(ut,"--cateColor",d(g)+"b0"),H(Ut,` ${o().index??""}

              `),S(Xt,"style",`background-color: ${d(g)??"transparent"}; color:${y??""}`),S(Qt,"style",`background-color: ${d(g)??"transparent"}; color:${y??""}`),H(Or,M),S(wt,"style",`
            height: 40px;
            background-color: ${d(g)??"transparent"};
            color: ${y??""}`),S(Jt,"src",d(N)),S(Jt,"alt",d(V)),H(Rr,`    ${d(V)??""}`),S(Kt,"href","/detail/"+o().id),S(Kt,"title",o().name),H(Pn,o().name),H(Vn,o().smallDescr),H(Rn,`上传时间:${o().createdDate??""}`),H(Br,o().status.comments),S(Zr,"src",we().ICON.SEEDERS),H(zr,o().status.seeders),S(Gr,"src",we().ICON.LEECHERS),H(Wr,o().status.leechers);},[()=>d(g)?Ye(d(g)):"black",()=>T(o().size)],Ne),Z("click",Xt,Zt),Z("mousedown",xt,Mt(y=>{y.stopPropagation();})),Z("mousedown",sr,Mt(y=>{y.stopPropagation();})),Z("click",sr,Mt(y=>{q(o().id,d(O)),y.target.style.display="none";})),Z("mouseenter",Ze,()=>{d(z)&&Se(z,d(z).style.filter="blur(2px)"),Se(ne,d(ne).style.opacity="1"),$(c,true);}),Z("mousemove",Ze,y=>{$(Q,true),d(B)&&d(Q)&&le.handleMouseMove(y);}),Z("mouseleave",Ze,()=>{d(z)&&Se(z,d(z).style.filter="none"),Se(ne,d(ne).style.opacity="0"),$(c,false),$(Q,false),d(B)&&($(B,false),le.clearPreview());}),Z("mousedown",Ze,ka(Zt)),L(e,yt),st(),n();}var dl=I('<p class="text_center svelte-1vmncc1">没有结果捏</p>'),_l=I('<main><div class="fall_holder svelte-1vmncc1" style=""><!></div></main>');function hl(e,t){var C,A,T,O;at(t,false);const[r,n]=Bt(),i=()=>oe(hr,"$_card_layout",r),a=te();let s=ve(t,"infoList",8),v=te(s().data);d(v).length;let u=te();Er.get_bg_color(),Object.keys(d(v)).forEach((P,q)=>{Se(v,d(v)[P].index=q+1);}),console.log("Mteam_Fall:First	"+d(v).length);function l(P,q=true){let B=P.data;console.log("Mteam_Fall:New:	"+B.length),q?(o(),Object.keys(B).forEach((Q,le)=>{B[Q].index=le+1,le==0&&(B[Q].pt_fall_highlight=true);}),$(v,[...B])):(Object.keys(B).forEach((Q,le)=>{B[Q].index=le+1+d(v).length,le==0&&(B[Q].pt_fall_highlight=true);}),$(v,[...d(v),...B]));}function o(){$(v,[]);}function c(P,q){q=="top"&&P.scrollIntoView({behavior:"smooth"}),q=="bottom"&&(P.scrollIntoView({behavior:"auto",block:"end",inline:"nearest"}),P.scrollIntoView({behavior:"auto",block:"end",inline:"nearest"}),P.scrollIntoView({behavior:"auto",block:"end",inline:"nearest"}));}function f(P="top"){c(d(u),P);}let _,w,m;try{_=gr(localStorage.getItem("persist:persist")),w=(A=(C=_.sysinfo)==null?void 0:C.sysConf)==null?void 0:A.TORRENT_LABEL_CONFIG,m=(O=(T=_.sysinfo)==null?void 0:T.categoryList)==null?void 0:O.categorys,w&&fe(Ta,w),m&&fe(Aa,m);}catch(P){console.error(P),console.log(_);}It(()=>d(v),()=>{$(a,[...d(v)]);}),wn(),mt();var E=_l(),x=h(E),g=h(x);{var k=P=>{mo(P,{animate:true,get items(){return d(a)},get minColWidth(){return i().min},get maxColWidth(){return i().max},get gap(){return i().gap},children:Es,$$slots:{default:(q,B)=>{const Q=Ne(()=>B.item);fl(q,{get torrentInfo(){return d(Q)}});}}});},V=P=>{var q=dl();L(P,q);};G(g,P=>{d(a).length?P(k):P(V,false);});}Je(E,P=>$(u,P),()=>d(u)),L(e,E),Jn(t,"updateList",l),Jn(t,"clearList",o),Jn(t,"focusFall",f);var N=st({updateList:l,clearList:o,focusFall:f});return n(),N}let pl="0.3.3";var gl=Ci('<svg class="tgme_logo" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle cx="17" cy="17" fill="#40a9ff" r="17"></circle><path d="m7.06510669 16.9258959c5.22739451-2.1065178 8.71314291-3.4952633 10.45724521-4.1662364 4.9797665-1.9157646 6.0145193-2.2485535 6.6889567-2.2595423.1483363-.0024169.480005.0315855.6948461.192827.1814076.1361492.23132.3200675.2552048.4491519.0238847.1290844.0536269.4231419.0299841.65291-.2698553 2.6225356-1.4375148 8.986738-2.0315537 11.9240228-.2513602 1.2428753-.7499132 1.5088847-1.2290685 1.5496672-1.0413153.0886298-1.8284257-.4857912-2.8369905-1.0972863-1.5782048-.9568691-2.5327083-1.3984317-4.0646293-2.3321592-1.7703998-1.0790837-.212559-1.583655.7963867-2.5529189.2640459-.2536609 4.7753906-4.3097041 4.755976-4.431706-.0070494-.0442984-.1409018-.481649-.2457499-.5678447-.104848-.0861957-.2595946-.0567202-.3712641-.033278-.1582881.0332286-2.6794907 1.5745492-7.5636077 4.6239616-.715635.4545193-1.3638349.6759763-1.9445998.6643712-.64024672-.0127938-1.87182452-.334829-2.78737602-.6100966-1.12296117-.3376271-1.53748501-.4966332-1.45976769-1.0700283.04048-.2986597.32581586-.610598.8560076-.935815z" fill="#fff"></path></g></svg>');function ml(e,t){let r=ve(t,"height",8,34),n=ve(t,"width",8,34);var i=gl();j(()=>{S(i,"height",r()),S(i,"width",n());}),L(e,i);}var yl=I('<div class="modal-overlay svelte-1a87xm5" role="button" aria-hidden="true"><div class="modal-content svelte-1a87xm5" role="button" aria-hidden="true"><div class="modal-header svelte-1a87xm5"><h3 class="svelte-1a87xm5">关于 PT-Fall</h3> <button class="close-btn svelte-1a87xm5">&times;</button></div> <div class="modal-body svelte-1a87xm5"><h4 class="svelte-1a87xm5">PT-Fall 是一个专为 M-team 站点量身定制的瀑布流视图插件</h4> <p class="svelte-1a87xm5">Github: <a href="https://github.com/KesaubeEire/PT_Fall-View" target="_blank">https://github.com/KesaubeEire/PT_Fall-View</a></p> <p class="svelte-1a87xm5">GreaseFork: <a href="https://greasyfork.org/zh-CN/scripts/543925" target="_blank">https://greasyfork.org/zh-CN/scripts/543925</a></p></div></div></div>'),bl=I('<div class="modal-overlay svelte-1a87xm5" role="button" aria-hidden="true"><div class="modal-content svelte-1a87xm5" role="button" aria-hidden="true"><div class="modal-header svelte-1a87xm5"><h3 class="svelte-1a87xm5">FAQ - 常见问题</h3> <button class="close-btn svelte-1a87xm5">&times;</button></div> <div class="modal-body svelte-1a87xm5"><h4 class="svelte-1a87xm5">Q: 如何联系反馈问题</h4> <p class="svelte-1a87xm5"><a class="__btn __btnWide svelte-1a87xm5" href="https://t.me/+Nd_qIisDjQ80ZTc9" target="_blank"><!> &nbsp;Telegram</a></p> <h4 class="svelte-1a87xm5">Q: 找不到悬浮框</h4> <button class="__btn svelte-1a87xm5">重置悬浮框位置</button> <p class="svelte-1a87xm5"><br>可以通过拖拽悬浮框顶部的颜色条来移动悬浮框的位置 <br>从 PTPP 那里来的灵感 ( 感恩 ||T|| 佬 )</p> <h4 class="svelte-1a87xm5">Q: 插件没有生效怎么办</h4> <p class="svelte-1a87xm5">可能是浏览器缓存了请求<br>尝试使用 Ctrl+Shift+R / Ctrl+F5 强制刷新页面</p> <h4 class="svelte-1a87xm5">Q: 如何切换瀑布流视图</h4> <p class="svelte-1a87xm5">点击悬浮面板中的"切换显示"按钮即可在瀑布流和原列表视图间切换</p> <h4 class="svelte-1a87xm5">Q: 如何调整卡片布局</h4> <p class="svelte-1a87xm5">点击悬浮面板中的"配置菜单"按钮<br>可以调整卡片的最小 / 最大宽度、间隔等参数</p> <h4 class="svelte-1a87xm5">Q: 快捷键</h4> <p class="svelte-1a87xm5"><span class="modal-code svelte-1a87xm5">x</span> 可以切换瀑布流视图</p> <p class="svelte-1a87xm5"><span class="modal-code svelte-1a87xm5">ESC</span> 可以从 次级菜单 / 配置菜单 / iframe 中退出</p></div></div></div>'),wl=I('<div class="entry_mteam"><div class="ant-typography" style="line-height: 1.5; text-align: center;"><button class="__btn svelte-1a87xm5" id="_ptFall_about">PT-Fall<br><span style="font-weight: 600;"></span></button> <button class="__btn svelte-1a87xm5" id="_ptFall_faq">常见问题<br>FAQ</button></div></div> <!> <!>',1);function xl(e,t){at(t,false);const[r,n]=Bt(),i=()=>oe(mr,"$_isFallView",r);let a=te(false),s=te(false);function v(){$(a,true);}function u(){$(a,false);}function l(){$(s,true);}function o(){$(s,false);}let c=te();It(()=>i(),()=>{$(c,i()?"#4ff74f":"yellow");}),wn(),mt();var f=wl();Z("keydown",yr,C=>{C.key==="Escape"&&(u(),o());},true);var _=$e(f),w=h(_),m=h(w),E=p(h(m),2);E.textContent=`[v${pl}]`;var x=p(m,2),g=p(_,2);{var k=C=>{var A=yl(),T=h(A),O=h(T),P=p(h(O),2);j(q=>S(T,"style",q),[()=>`color: ${Ye("var(--bg-3)")}`],Ne),Z("click",P,o),Z("click",T,Mt(function(q){qi.call(this,t,q);})),Pt(3,A,()=>Vt,()=>({duration:200})),Z("click",A,o),L(C,A);};G(g,C=>{d(s)&&C(k);});}var V=p(g,2);{var N=C=>{var A=bl(),T=h(A),O=h(T),P=p(h(O),2),q=p(O,2),B=p(h(q),2),Q=h(B),le=h(Q);ml(le,{height:24,width:24});var ne=p(B,4),D=p(ne,18),ae=h(D),ie=p(D,2),me=h(ie);j((ot,lt,Oe)=>{S(T,"style",ot),S(Q,"style",lt),Ke(Q,"--hover","#40a9ff"),S(ne,"style",lt),Ke(ne,"--hover","#40a9ff"),S(ae,"style",Oe),S(me,"style",Oe);},[()=>`color: ${Ye("var(--bg-3)")}`,()=>`color: ${Ye("var(--bg-2)")}`,()=>`color: ${Ye("var(--bg-1)")}`],Ne),Z("click",P,u),Z("click",ne,()=>{fe(ci,{x:0,y:0});}),Z("click",T,Mt(function(ot){qi.call(this,t,ot);})),Pt(3,A,()=>Vt,()=>({duration:200})),Z("click",A,u),L(C,A);};G(V,C=>{d(a)&&C(N);});}j(C=>{S(m,"style",C),Ke(m,"--hover","green"),Ke(E,"color",d(c)),S(x,"style",C),Ke(x,"--hover","#40a9ff");},[()=>`color: ${Ye("var(--bg-2)")}`],Ne),Z("click",m,l),Z("click",x,v),L(e,f),st(),n();}function Cl(e,t){at(t,false);const[r,n]=Bt(),i=()=>oe(mr,"$_isFallView",r);let a,s,v,u=true;const l=document.createElement("div");l.classList.add("Fall_DOM"),cr(Er.TL_Selector,o),cr('a[href="/index"][target="_self"]',E=>{if(a)Tt.error("未找到目标链接元素"),console.warn("[FALL]: 未找到目标链接元素");else {E.insertAdjacentHTML("afterend",'<div class="ptFallReadme"></div>');const x=E.parentNode.querySelector(".ptFallReadme");a=Cr(xl,{target:x});}}),Nn(()=>{console.log("=====> 启动劫持 pushState 方法 <====="),m();});function o(E){if(E.parentNode){console.log("元素已找到，正在插入兄弟节点:",E),lo();const x={path:"/search",method:"POST"};window.addEventListener("req>POST->/search",g=>{console.log(`<PT-Fall>[Request]  (${x.method} -> ${x.path})
`,g.detail),u=true,u?s&&s.focusFall():s&&s.focusFall("bottom");}),window.addEventListener("res>POST->/search",g=>{const k=JSON.parse(g.detail.data);console.log(`<PT-Fall>[Response] (${x.method}->${x.path})[通过事件捕获]:
`,k),_(i()),c(E),Tt.success("捕获到 /search !"),v=k.data,s?s.updateList(v,u):s=Cr(hl,{target:l,props:{infoList:v}});});}else Tt.error(`找不到指定节点
若总是如此请报告bug`),console.error("无法插入：目标元素没有父节点");}function c(E){const x=E.parentNode.querySelector(".ant-spin-nested-loading"),g=document.createElement("div");g.id="_shield",g.addEventListener("click",()=>{confirm(`[PT-Fall]
如果你认为你被阻挡了请点击确认
这个阻挡效果会被取消
这可能导致显示错误
请确认您不在一般的瀑布流视图下
比如您在逛论坛或者在发种之类的被遮挡了再点`)&&(g.style.display="none");}),x.querySelector("#_shield")||x.appendChild(g);const k=document.createElement("div");k.id="_fallHolder",x.querySelector("#_fallHolder")||(x.appendChild(k),k.appendChild(l));}let f="";function _(E){l.style.display=E?"block":"none",cr("#_fallHolder",x=>{x.style.display=E?"block":"none";}),cr("#_shield",x=>{x.style.display=E?"block":"none";}),cr(Er.TL_Selector+" .mx-auto",x=>{f||(f=x.style.margin),x.style.margin=E?0:f;});}window.changeFallView=_;const w=history.pushState;function m(){history.pushState=function(E,x,g){console.log(`%c ====> URL跳转劫持: %c${g}`,"color: cyan","color: white"),g.includes("/browse")||g=="/waterfall"?console.log(`--->属于 browse 范围: ${g}`):(console.warn(`[FALL]: --->不属于 browse 范围: ${g}`),_(false)),w.apply(history,arguments);};}mt(),st(),n();}function El(e){if(location.hostname.includes("m-team"))return Er}var kl=I('<div class="switch-container svelte-18ntgfp"><div class="switch-background svelte-18ntgfp"><div class="switch-slider svelte-18ntgfp"></div></div></div>');function Ee(e,t){let r=ve(t,"checked",12,false);function n(){r(!r());}var i=kl(),a=h(i),s=h(a);j(()=>fr(s,"checked",r())),Z("click",i,n),L(e,i);}var Ll=I('<div class="config-item svelte-10gi3pg"><span> </span> <input type="range" min="0" max="40" step="1" class="svelte-10gi3pg"></div>'),Nl=I('<div class="config-menu-overlay svelte-10gi3pg"><div class="config-menu svelte-10gi3pg"><div class="config-menu-header svelte-10gi3pg"><span style="font-size: 18px; font-weight: bold;">配置菜单</span> <button class="close-btn svelte-10gi3pg">&times;</button></div> <div class="config-menu-content svelte-10gi3pg"><h3 class="svelte-10gi3pg"># 卡片布局</h3> <div class="config-item svelte-10gi3pg"><span> </span> <input type="range" min="200" step="1" list="values" class="svelte-10gi3pg"></div> <div class="config-item svelte-10gi3pg"><span> </span> <input type="range" step="1" list="values" class="svelte-10gi3pg"></div> <div class="config-item svelte-10gi3pg"><span> </span> <input type="range" min="0" max="100" step="1" list="values" class="svelte-10gi3pg"></div> <div class="config-item svelte-10gi3pg"><span> </span> <!></div> <h3 class="svelte-10gi3pg"># 卡片常驻信息展示</h3>  <div class="config-item svelte-10gi3pg"><span> </span> <!></div> <div class="config-item svelte-10gi3pg"><span> </span> <!></div> <div class="config-item svelte-10gi3pg"><span> </span> <!></div> <div class="config-item svelte-10gi3pg"><span> </span> <!></div> <div class="config-item svelte-10gi3pg"><span> </span> <!></div> <div class="config-item svelte-10gi3pg"><span> </span> <!></div> <div class="config-item svelte-10gi3pg"><span> </span> <!></div> <div class="config-item svelte-10gi3pg"><span> </span> <!></div> <div class="config-item svelte-10gi3pg"><span> </span> <!></div> <div class="config-item svelte-10gi3pg"><span> </span> <!></div> <h3 class="svelte-10gi3pg"># 卡片屏蔽</h3> <div class="config-item svelte-10gi3pg"><span> </span> <!></div> <h3 class="svelte-10gi3pg"># 卡片样式</h3> <div class="config-item svelte-10gi3pg"><span> </span> <!></div> <!></div></div></div>'),Ml=I('<div class="flowP svelte-10gi3pg"><div class="flowPDragger svelte-10gi3pg" role="button" tabindex="0" aria-hidden="true"></div> <div class="flowPHolder ant-typography svelte-10gi3pg"><button class="flowBtn svelte-10gi3pg">切换显示</button> <button class="flowBtn svelte-10gi3pg">配置菜单</button> <button class="flowBtn svelte-10gi3pg">清除悬浮预览图</button> <button class="flowBtn svelte-10gi3pg">iframe</button> <button class="flowBtn svelte-10gi3pg">屏蔽 Gay</button></div></div> <!>',1);function Sl(e,t){at(t,false);const[r,n]=Bt(),i=()=>oe(ci,"$_panelPos",r),a=()=>oe(mr,"$_isFallView",r),s=()=>oe(_r,"$_side_panel_switch",r),v=()=>oe(St,"$_iframe_switch",r),u=()=>oe(rn,"$_block_gay",r),l=()=>oe(hr,"$_card_layout",r),o=()=>oe(ui,"$_show_hover_pic",r),c=()=>oe(Te,"$_card_detail",r),f=()=>oe(nn,"$_card_radius",r);let _=te(),w=false,m=0,E=0;function x(D,ae,ie){return D<=ae&&(D=ae),D>=ie&&(D=ie),D}const g=D=>{D.preventDefault(),w=true,m=D.clientX-d(_).getBoundingClientRect().left,E=D.clientY-d(_).getBoundingClientRect().top;},k=D=>{if(!w)return;const ae=x(D.clientX-m,0,window.innerWidth-(d(_).getBoundingClientRect().width+5)),ie=x(D.clientY-E,0,window.innerHeight-(d(_).getBoundingClientRect().height+5));fe(ci,{x:ae,y:ie});},V=()=>{w=false;};Nn(()=>(window.addEventListener("mousemove",k),window.addEventListener("mouseup",V),()=>{window.removeEventListener("mousemove",k),window.removeEventListener("mouseup",V);})),mt();var N=Ml();Z("keydown",yr,D=>{D.key==="x"&&(fe(mr,!a()),window.changeFallView(a()));},true);var C=$e(N),A=h(C),T=p(A,2),O=h(T),P=p(O,2),q=p(P,2),B=p(q,2),Q=p(B,2);Je(C,D=>$(_,D),()=>d(_));var le=p(C,2);{var ne=D=>{var ae=Nl(),ie=h(ae),me=h(ie),ot=p(h(me),2),lt=p(me,2),Oe=p(h(lt),2),z=h(Oe),ct=h(z),Be=p(z,2),Tr=p(Oe,2),Zt=h(Tr),yt=h(Zt),bt=p(Zt,2),Ar=p(Tr,2),zt=h(Ar),Mn=h(zt),Sn=p(zt,2),ut=p(Ar,2),Gt=h(ut),Tn=h(Gt),An=p(Gt,2);Ee(An,{get checked(){return Bi(),o()},set checked(b){fe(ui,b);},$$legacy:true});var Wt=p(ut,4),$r=h(Wt),Ze=h($r),Ir=p($r,2);Ee(Ir,{get checked(){return c().category},set checked(b){be(Te,R(c).category=b,R(c));},$$legacy:true});var jt=p(Wt,2),Yt=h(jt),Pr=h(Yt),$n=p(Yt,2);Ee($n,{get checked(){return c().title},set checked(b){be(Te,R(c).title=b,R(c));},$$legacy:true});var Ut=p(jt,2),Vr=h(Ut),In=h(Vr),Xt=p(Vr,2);Ee(Xt,{get checked(){return c().topping},set checked(b){be(Te,R(c).topping=b,R(c));},$$legacy:true});var Qt=p(Ut,2),Or=h(Qt),wt=h(Or),Jt=p(Or,2);Ee(Jt,{get checked(){return c().free},set checked(b){be(Te,R(c).free=b,R(c));},$$legacy:true});var Rr=p(Qt,2),xt=h(Rr),Kt=h(xt),Pn=p(xt,2);Ee(Pn,{get checked(){return c().size},set checked(b){be(Te,R(c).size=b,R(c));},$$legacy:true});var er=p(Rr,2),Hr=h(er),Vn=h(Hr),Dr=p(Hr,2);Ee(Dr,{get checked(){return c().sub_title},set checked(b){be(Te,R(c).sub_title=b,R(c));},$$legacy:true});var Fr=p(er,2),tr=h(Fr),On=h(tr),Rn=p(tr,2);Ee(Rn,{get checked(){return c().tags},set checked(b){be(Te,R(c).tags=b,R(c));},$$legacy:true});var rr=p(Fr,2),nr=h(rr),qr=h(nr),Hn=p(nr,2);Ee(Hn,{get checked(){return c().download_collect},set checked(b){be(Te,R(c).download_collect=b,R(c));},$$legacy:true});var Br=p(rr,2),ir=h(Br),Zr=h(ir),Dn=p(ir,2);Ee(Dn,{get checked(){return c().upload_time},set checked(b){be(Te,R(c).upload_time=b,R(c));},$$legacy:true});var zr=p(Br,2),ar=h(zr),Gr=h(ar),Fn=p(ar,2);Ee(Fn,{get checked(){return c().statistics},set checked(b){be(Te,R(c).statistics=b,R(c));},$$legacy:true});var Wr=p(zr,4),sr=h(Wr),jr=h(sr),qn=p(sr,2);Ee(qn,{get checked(){return Bi(),u()},set checked(b){fe(rn,b);},$$legacy:true});var Yr=p(Wr,4),Ur=h(Yr),Bn=h(Ur),Zn=p(Ur,2);Ee(Zn,{get checked(){return f().enabled},set checked(b){be(nn,R(f).enabled=b,R(f));},$$legacy:true});var y=p(Yr,2);{var M=b=>{var W=Ll(),J=h(W),ee=h(J),ce=p(J,2);j(()=>H(ee,`圆角大小: ${f().value??""} px`)),Kr(ce,()=>f().value,de=>be(nn,R(f).value=de,R(f))),L(b,W);};G(y,b=>{f().enabled&&b(M);});}j((b,W,J,ee)=>{S(ie,"style",`background-color: ${b??""};`),H(ct,`最小宽度: ${l().min??""} px`),S(Be,"max",W),H(yt,`最大宽度: ${l().max??""} px`),S(bt,"min",J),S(bt,"max",ee),H(Mn,`卡片间隔: ${l().gap??""} px`),H(Tn,`显示鼠标悬浮预览大图: ${o()??""}`),H(Ze,`分区: ${c().category??""}`),H(Pr,`标题: ${c().title??""}`),H(In,`置顶: ${c().topping??""}`),H(wt,`免费: ${c().free??""}`),H(Kt,`大小: ${c().size??""}`),H(Vn,`副标题: ${c().sub_title??""}`),H(On,`标签: ${c().tags??""}`),H(qr,`下载&收藏: ${c().download_collect??""}`),H(Zr,`上传时间: ${c().upload_time??""}`),H(Gr,`评论/上传/下载: ${c().statistics??""}`),H(jr,`屏蔽 gay 区: ${u()??""}`),H(Bn,`自定义圆角: ${f().enabled??""}`);},[()=>El().get_bg_color(),()=>Math.max(400,l().max),()=>Math.min(200,l().min),()=>Math.max(800,l().min*2)],Ne),Z("click",ot,()=>fe(_r,false)),Kr(Be,()=>l().min,b=>be(hr,R(l).min=b,R(l))),Kr(bt,()=>l().max,b=>be(hr,R(l).max=b,R(l))),Kr(Sn,()=>l().gap,b=>be(hr,R(l).gap=b,R(l))),Pt(3,ae,()=>Vt,()=>({duration:100})),Z("click",ae,ka(()=>fe(_r,false))),L(D,ae);};G(le,D=>{s()&&D(ne);});}j(()=>{S(C,"style",`top:${i().y??""}px; left:${i().x??""}px;`),Ke(C,"--isFallView",a()?"#4ff74f":"yellow");}),Z("mousedown",A,g),Z("click",O,()=>{fe(mr,!a()),window.changeFallView(a());}),Z("click",P,()=>{fe(_r,!s());}),Z("click",q,()=>{window.__clearPreview();}),Z("click",B,()=>{fe(St,+!v());}),Z("click",Q,()=>{fe(rn,!u());}),L(e,N),st(),n();}var Tl=Ci('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_iconCarrier"><circle cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="1.5"></circle><path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path></g></svg>');function Al(e){var t=Tl();L(e,t);}var $l=I('<div id="_iframe" class="svelte-1axpxde"><div class="_iframe svelte-1axpxde"><iframe frameborder="0" style="width: 1000px;" class="svelte-1axpxde"></iframe> <div class="_iframeCloseBtn svelte-1axpxde"><!></div></div></div>');function Il(e,t){at(t,false);const[r,n]=Bt(),i=()=>oe(St,"$_iframe_switch",r),a=()=>oe(Sa,"$_iframe_url",r);let s=ve(t,"_app",8),v;function u(){fe(St,0);}function l(_){_.key==="Escape"&&(console.log(_),fe(St,0),fe(_r,false));}v=true,v&&Cr(Cl,{target:s()}),Cr(Sl,{target:s()}),console.log("-------------->  PT_Fall Launch   <--------------"),mt();var o=tt();Z("keydown",yr,l,true);var c=$e(o);{var f=_=>{var w=$l(),m=h(w),E=h(m),x=p(E,2),g=h(x);Al(g),j(()=>{S(E,"src",a()),S(E,"title",a());}),Z("load",E,k=>{const V=k.target.contentDocument||k.target.contentWindow.document;if(!V){console.error("无法访问iframe内容文档, 可能是由于跨域限制。"),Tt.error("无法访问iframe内容文档, 可能是由于跨域限制。");return}const N=()=>{const A=V.querySelector(".ant-card.detail-view");A&&(A.scrollIntoView({behavior:"smooth"}),console.log("成功滚动到目标元素！"),clearInterval(C));},C=setInterval(N,500);N();}),Z("click",E,Mt(k=>{k.stopPropagation();})),Z("click",x,u),Z("click",w,u),Pt(3,w,()=>Vt,()=>({duration:300})),L(_,w);};G(c,_=>{i()&&_(f);});}L(e,o),st(),n();}const vi=document.createElement("div");document.body.append(vi);Cr(Il,{target:vi,props:{_app:vi}});

})();