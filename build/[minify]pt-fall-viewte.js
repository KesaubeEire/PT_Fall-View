// ==UserScript==
// @name            PT瀑布流视图
// @name:en         PT_Fall-View
// @namespace       vite-plugin-monkey
// @version         0.3.4
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

      var Oi=Object.defineProperty;var La=t=>{throw TypeError(t)};var Ri=(t,e,r)=>e in t?Oi(t,e,{enumerable:true,configurable:true,writable:true,value:r}):t[e]=r;var Ma=(t,e,r)=>Ri(t,e+"",r),Un=(t,e,r)=>e.has(t)||La("Cannot "+r);var Yt=(t,e,r)=>(Un(t,e,"read from private field"),r?r.call(t):e.get(t)),sr=(t,e,r)=>e.has(t)?La("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),Xn=(t,e,r,n)=>(Un(t,e,"write to private field"),e.set(t,r),r),Na=(t,e,r)=>(Un(t,e,"access private method"),r);var mn=Array.isArray,Di=Array.prototype.indexOf,_a=Array.from,Ya=Object.defineProperty,he=Object.getOwnPropertyDescriptor,Ua=Object.getOwnPropertyDescriptors,Fi=Object.prototype,zi=Array.prototype,ha=Object.getPrototypeOf;function qi(t){return typeof t=="function"}const Rt=()=>{};function Bi(t){return t()}function ta(t){for(var e=0;e<t.length;e++)t[e]();}const $t=2,Xa=4,xr=8,yn=16,Bt=32,Fe=64,on=128,ge=256,ln=512,bt=1024,oe=2048,me=4096,Ft=8192,ze=16384,Qa=32768,bn=65536,Zi=1<<17,Wi=1<<19,Ja=1<<20,pe=Symbol("$state"),Gi=Symbol("legacy props"),ji=Symbol("");function Ka(t){return t===this.v}function ti(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function pa(t){return !ti(t,this.v)}function Yi(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Ui(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Xi(t){throw new Error("https://svelte.dev/e/effect_orphan")}function Qi(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Ji(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Ki(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ts(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function es(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function rs(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let qe=false;function ns(){qe=true;}const ga=1,ma=2,ei=4,as=8,is=16,ss=1,os=2,ls=4,cs=8,vs=16,us=1,fs=2,ds=4,_s=1,hs=2,Ct=Symbol();function St(t,e){var r={f:0,v:t,reactions:null,equals:Ka,rv:0,wv:0};return r}function wn(t,e=false){var n;const r=St(t);return e||(r.equals=pa),qe&&et!==null&&et.l!==null&&((n=et.l).s??(n.s=[])).push(r),r}function rt(t,e=false){return ps(wn(t,e))}function ps(t){return nt!==null&&!Jt&&nt.f&$t&&(zt===null?Ls([t]):zt.push(t)),t}function Vt(t,e){return A(t,R(()=>u(t))),e}function A(t,e){return nt!==null&&!Jt&&kr()&&nt.f&($t|yn)&&(zt===null||!zt.includes(t))&&rs(),ea(t,e)}function ea(t,e){return t.equals(e)||(t.v,t.v=e,t.wv=mi(),ri(t,oe),kr()&&U!==null&&U.f&bt&&!(U.f&(Bt|Fe))&&(Ut===null?Ms([t]):Ut.push(t))),e}function ri(t,e){var r=t.reactions;if(r!==null)for(var n=kr(),a=r.length,i=0;i<a;i++){var s=r[i],c=s.f;c&oe||!n&&s===U||(Ot(s,e),c&(bt|ge)&&(c&$t?ri(s,me):Mn(s)));}}let ni=false;function Se(t,e=null,r){if(typeof t!="object"||t===null||pe in t)return t;const n=ha(t);if(n!==Fi&&n!==zi)return t;var a=new Map,i=mn(t),s=St(0);i&&a.set("length",St(t.length));var c;return new Proxy(t,{defineProperty(v,o,l){(!("value"in l)||l.configurable===false||l.enumerable===false||l.writable===false)&&Ki();var _=a.get(o);return _===undefined?(_=St(l.value),a.set(o,_)):A(_,Se(l.value,c)),true},deleteProperty(v,o){var l=a.get(o);if(l===undefined)o in v&&a.set(o,St(Ct));else {if(i&&typeof o=="string"){var _=a.get("length"),f=Number(o);Number.isInteger(f)&&f<_.v&&A(_,f);}A(l,Ct),Sa(s);}return  true},get(v,o,l){var w;if(o===pe)return t;var _=a.get(o),f=o in v;if(_===undefined&&(!f||(w=he(v,o))!=null&&w.writable)&&(_=St(Se(f?v[o]:Ct,c)),a.set(o,_)),_!==undefined){var d=u(_);return d===Ct?undefined:d}return Reflect.get(v,o,l)},getOwnPropertyDescriptor(v,o){var l=Reflect.getOwnPropertyDescriptor(v,o);if(l&&"value"in l){var _=a.get(o);_&&(l.value=u(_));}else if(l===undefined){var f=a.get(o),d=f==null?undefined:f.v;if(f!==undefined&&d!==Ct)return {enumerable:true,configurable:true,value:d,writable:true}}return l},has(v,o){var d;if(o===pe)return  true;var l=a.get(o),_=l!==undefined&&l.v!==Ct||Reflect.has(v,o);if(l!==undefined||U!==null&&(!_||(d=he(v,o))!=null&&d.writable)){l===undefined&&(l=St(_?Se(v[o],c):Ct),a.set(o,l));var f=u(l);if(f===Ct)return  false}return _},set(v,o,l,_){var y;var f=a.get(o),d=o in v;if(i&&o==="length")for(var w=l;w<f.v;w+=1){var m=a.get(w+"");m!==undefined?A(m,Ct):w in v&&(m=St(Ct),a.set(w+"",m));}f===undefined?(!d||(y=he(v,o))!=null&&y.writable)&&(f=St(undefined),A(f,Se(l,c)),a.set(o,f)):(d=f.v!==Ct,A(f,Se(l,c)));var M=Reflect.getOwnPropertyDescriptor(v,o);if(M!=null&&M.set&&M.set.call(_,l),!d){if(i&&typeof o=="string"){var S=a.get("length"),p=Number(o);Number.isInteger(p)&&p>=S.v&&A(S,p+1);}Sa(s);}return  true},ownKeys(v){u(s);var o=Reflect.ownKeys(v).filter(f=>{var d=a.get(f);return d===undefined||d.v!==Ct});for(var[l,_]of a)_.v!==Ct&&!(l in v)&&o.push(l);return o},setPrototypeOf(){ts();}})}function Sa(t,e=1){A(t,t.v+e);}var pr,ai,ii;function gs(){if(pr===undefined){pr=window;var t=Element.prototype,e=Node.prototype;ai=he(e,"firstChild").get,ii=he(e,"nextSibling").get,t.__click=undefined,t.__className="",t.__attributes=null,t.__styles=null,t.__e=undefined,Text.prototype.__t=undefined;}}function ya(t=""){return document.createTextNode(t)}function Pe(t){return ai.call(t)}function xn(t){return ii.call(t)}function h(t,e){return Pe(t)}function kt(t,e){{var r=Pe(t);return r instanceof Comment&&r.data===""?xn(r):r}}function g(t,e=1,r=false){let n=t;for(;e--;)n=xn(n);return n}function ms(t){t.textContent="";}function gr(t){var e=$t|oe;U===null?e|=ge:U.f|=Ja;var r=nt!==null&&nt.f&$t?nt:null;const n={children:null,ctx:et,deps:null,equals:Ka,f:e,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??U};return r!==null&&(r.children??(r.children=[])).push(n),n}function mt(t){const e=gr(t);return e.equals=pa,e}function si(t){var e=t.children;if(e!==null){t.children=null;for(var r=0;r<e.length;r+=1){var n=e[r];n.f&$t?ba(n):se(n);}}}function ys(t){for(var e=t.parent;e!==null;){if(!(e.f&$t))return e;e=e.parent;}return null}function oi(t){var e,r=U;Ht(ys(t));try{si(t),e=bi(t);}finally{Ht(r);}return e}function li(t){var e=oi(t),r=(de||t.f&ge)&&t.deps!==null?me:bt;Ot(t,r),t.equals(e)||(t.v=e,t.wv=mi());}function ba(t){si(t),yr(t,0),Ot(t,ze),t.v=t.children=t.deps=t.ctx=t.reactions=null;}function ci(t){U===null&&nt===null&&Xi(),nt!==null&&nt.f&ge&&Ui(),Ea&&Yi();}function bs(t,e){var r=e.last;r===null?e.last=e.first=t:(r.next=t,t.prev=r,e.last=t);}function Be(t,e,r,n=true){var a=(t&Fe)!==0,i=U,s={ctx:et,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|oe,first:null,fn:e,last:null,next:null,parent:a?null:i,prev:null,teardown:null,transitions:null,wv:0};if(r){var c=$e;try{$a(!0),Ln(s),s.f|=Qa;}catch(l){throw se(s),l}finally{$a(c);}}else e!==null&&Mn(s);var v=r&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(Ja|on))===0;if(!v&&!a&&n&&(i!==null&&bs(s,i),nt!==null&&nt.f&$t)){var o=nt;(o.children??(o.children=[])).push(s);}return s}function wa(t){const e=Be(xr,null,false);return Ot(e,bt),e.teardown=t,e}function ra(t){ci();var e=U!==null&&(U.f&Bt)!==0&&et!==null&&!et.m;if(e){var r=et;(r.e??(r.e=[])).push({fn:t,effect:U,reaction:nt});}else {var n=Cr(t);return n}}function ws(t){return ci(),Er(t)}function xs(t){const e=Be(Fe,t,true);return (r={})=>new Promise(n=>{r.outro?cn(e,()=>{se(e),n(undefined);}):(se(e),n(undefined));})}function Cr(t){return Be(Xa,t,false)}function He(t,e){var r=et,n={effect:null,ran:false};r.l.r1.push(n),n.effect=Er(()=>{t(),!n.ran&&(n.ran=true,A(r.l.r2,true),R(e));});}function Cn(){var t=et;Er(()=>{if(u(t.l.r2)){for(var e of t.l.r1){var r=e.effect;r.f&bt&&Ot(r,me),Ze(r)&&Ln(r),e.ran=false;}t.l.r2.v=false;}});}function Er(t){return Be(xr,t,true)}function j(t,e=[],r=gr){const n=e.map(r);return xa(()=>t(...n.map(u)))}function xa(t,e=0){return Be(xr|yn|e,t,true)}function mr(t,e=true){return Be(xr|Bt,t,true,e)}function vi(t){var e=t.teardown;if(e!==null){const r=Ea,n=nt;Ta(true),qt(null);try{e.call(null);}finally{Ta(r),qt(n);}}}function ui(t){var e=t.deriveds;if(e!==null){t.deriveds=null;for(var r=0;r<e.length;r+=1)ba(e[r]);}}function fi(t,e=false){var r=t.first;for(t.first=t.last=null;r!==null;){var n=r.next;se(r,e),r=n;}}function Cs(t){for(var e=t.first;e!==null;){var r=e.next;e.f&Bt||se(e),e=r;}}function se(t,e=true){var r=false;if((e||t.f&Wi)&&t.nodes_start!==null){for(var n=t.nodes_start,a=t.nodes_end;n!==null;){var i=n===a?null:xn(n);n.remove(),n=i;}r=true;}fi(t,e&&!r),ui(t),yr(t,0),Ot(t,ze);var s=t.transitions;if(s!==null)for(const v of s)v.stop();vi(t);var c=t.parent;c!==null&&c.first!==null&&di(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null;}function di(t){var e=t.parent,r=t.prev,n=t.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),e!==null&&(e.first===t&&(e.first=n),e.last===t&&(e.last=r));}function cn(t,e){var r=[];Ca(t,r,true),_i(r,()=>{se(t),e&&e();});}function _i(t,e){var r=t.length;if(r>0){var n=()=>--r||e();for(var a of t)a.out(n);}else e();}function Ca(t,e,r){if(!(t.f&Ft)){if(t.f^=Ft,t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&e.push(s);for(var n=t.first;n!==null;){var a=n.next,i=(n.f&bn)!==0||(n.f&Bt)!==0;Ca(n,e,i?r:false),n=a;}}}function vn(t){hi(t,true);}function hi(t,e){if(t.f&Ft){t.f^=Ft,t.f&bt||(t.f^=bt),Ze(t)&&(Ot(t,oe),Mn(t));for(var r=t.first;r!==null;){var n=r.next,a=(r.f&bn)!==0||(r.f&Bt)!==0;hi(r,a?e:false),r=n;}if(t.transitions!==null)for(const i of t.transitions)(i.is_global||e)&&i.in();}}let na=false,aa=[];function Es(){na=false;const t=aa.slice();aa=[],ta(t);}function En(t){na||(na=true,queueMicrotask(Es)),aa.push(t);}function ks(){throw new Error("https://svelte.dev/e/invalid_default_snippet")}function pi(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let rn=false,un=false,fn=null,$e=false,Ea=false;function $a(t){$e=t;}function Ta(t){Ea=t;}let ia=[],dr=0;let nt=null,Jt=false;function qt(t){nt=t;}let U=null;function Ht(t){U=t;}let zt=null;function Ls(t){zt=t;}let Et=null,Nt=0,Ut=null;function Ms(t){Ut=t;}let gi=1,dn=0,de=false,et=null;function mi(){return ++gi}function kr(){return !qe||et!==null&&et.l===null}function Ze(t){var o;var e=t.f;if(e&oe)return  true;if(e&me){var r=t.deps,n=(e&ge)!==0;if(r!==null){var a,i,s=(e&ln)!==0,c=n&&U!==null&&!de,v=r.length;if(s||c){for(a=0;a<v;a++)i=r[a],(s||!((o=i==null?undefined:i.reactions)!=null&&o.includes(t)))&&(i.reactions??(i.reactions=[])).push(t);s&&(t.f^=ln);}for(a=0;a<v;a++)if(i=r[a],Ze(i)&&li(i),i.wv>t.wv)return  true}(!n||U!==null&&!de)&&Ot(t,bt);}return  false}function Ns(t,e){for(var r=e;r!==null;){if(r.f&on)try{r.fn(t);return}catch{r.f^=on;}r=r.parent;}throw rn=false,t}function Ss(t){return (t.f&ze)===0&&(t.parent===null||(t.parent.f&on)===0)}function kn(t,e,r,n){if(rn){if(r===null&&(rn=false),Ss(e))throw t;return}r!==null&&(rn=true);{Ns(t,e);return}}function yi(t,e,r=0){var n=t.reactions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a];i.f&$t?yi(i,e,r+1):e===i&&(r===0?Ot(i,oe):i.f&bt&&Ot(i,me),Mn(i));}}function bi(t){var d;var e=Et,r=Nt,n=Ut,a=nt,i=de,s=zt,c=et,v=Jt,o=t.f;Et=null,Nt=0,Ut=null,nt=o&(Bt|Fe)?null:t,de=!$e&&(o&ge)!==0,zt=null,et=t.ctx,Jt=false,dn++;try{var l=(0,t.fn)(),_=t.deps;if(Et!==null){var f;if(yr(t,Nt),_!==null&&Nt>0)for(_.length=Nt+Et.length,f=0;f<Et.length;f++)_[Nt+f]=Et[f];else t.deps=_=Et;if(!de)for(f=Nt;f<_.length;f++)((d=_[f]).reactions??(d.reactions=[])).push(t);}else _!==null&&Nt<_.length&&(yr(t,Nt),_.length=Nt);if(kr()&&Ut!==null&&!(t.f&($t|me|oe)))for(f=0;f<Ut.length;f++)yi(Ut[f],t);return a!==null&&dn++,l}finally{Et=e,Nt=r,Ut=n,nt=a,de=i,zt=s,et=c,Jt=v;}}function $s(t,e){let r=e.reactions;if(r!==null){var n=Di.call(r,t);if(n!==-1){var a=r.length-1;a===0?r=e.reactions=null:(r[n]=r[a],r.pop());}}r===null&&e.f&$t&&(Et===null||!Et.includes(e))&&(Ot(e,me),e.f&(ge|ln)||(e.f^=ln),yr(e,0));}function yr(t,e){var r=t.deps;if(r!==null)for(var n=e;n<r.length;n++)$s(t,r[n]);}function Ln(t){var e=t.f;if(!(e&ze)){Ot(t,bt);var r=U,n=et;U=t;try{e&yn?Cs(t):fi(t),ui(t),vi(t);var a=bi(t);t.teardown=typeof a=="function"?a:null,t.wv=gi;var i=t.deps,s;}catch(c){kn(c,t,r,n||t.ctx);}finally{U=r;}}}function Ts(){if(dr>1e3){dr=0;try{Qi();}catch(t){if(fn!==null)kn(t,fn,null);else throw t}}dr++;}function Vs(t){var e=t.length;if(e!==0){Ts();var r=$e;$e=true;try{for(var n=0;n<e;n++){var a=t[n];a.f&bt||(a.f^=bt);var i=[];wi(a,i),As(i);}}finally{$e=r;}}}function As(t){var e=t.length;if(e!==0)for(var r=0;r<e;r++){var n=t[r];if(!(n.f&(ze|Ft)))try{Ze(n)&&(Ln(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?di(n):n.fn=null));}catch(a){kn(a,n,null,n.ctx);}}}function Is(){if(un=false,dr>1001)return;const t=ia;ia=[],Vs(t),un||(dr=0,fn=null);}function Mn(t){un||(un=true,queueMicrotask(Is)),fn=t;for(var e=t;e.parent!==null;){e=e.parent;var r=e.f;if(r&(Fe|Bt)){if(!(r&bt))return;e.f^=bt;}}ia.push(e);}function wi(t,e){var r=t.first,n=[];t:for(;r!==null;){var a=r.f,i=(a&Bt)!==0,s=i&&(a&bt)!==0,c=r.next;if(!s&&!(a&Ft))if(a&xr){if(i)r.f^=bt;else try{Ze(r)&&Ln(r);}catch(_){kn(_,r,null,r.ctx);}var v=r.first;if(v!==null){r=v;continue}}else a&Xa&&n.push(r);if(c===null){let _=r.parent;for(;_!==null;){if(t===_)break t;var o=_.next;if(o!==null){r=o;continue t}_=_.parent;}}r=c;}for(var l=0;l<n.length;l++)v=n[l],e.push(v),wi(v,e);}function u(t){var l;var e=t.f,r=(e&$t)!==0;if(r&&e&ze){var n=oi(t);return ba(t),n}if(nt!==null&&!Jt){zt!==null&&zt.includes(t)&&es();var a=nt.deps;t.rv<dn&&(t.rv=dn,Et===null&&a!==null&&a[Nt]===t?Nt++:Et===null?Et=[t]:Et.push(t));}else if(r&&t.deps===null)for(var i=t,s=i.parent,c=i;s!==null;)if(s.f&$t){var v=s;c=v,s=v.parent;}else {var o=s;(l=o.deriveds)!=null&&l.includes(c)||(o.deriveds??(o.deriveds=[])).push(c);break}return r&&(i=t,Ze(i)&&li(i)),t.v}function R(t){var e=Jt;try{return Jt=!0,t()}finally{Jt=e;}}const Ps=-7169;function Ot(t,e){t.f=t.f&Ps|e;}function le(t,e=false,r){et={p:et,c:null,e:null,m:false,s:t,x:null,l:null},qe&&!e&&(et.l={s:null,u:null,r1:[],r2:St(false)});}function ce(t){const e=et;if(e!==null){t!==undefined&&(e.x=t);const s=e.e;if(s!==null){var r=U,n=nt;e.e=null;try{for(var a=0;a<s.length;a++){var i=s[a];Ht(i.effect),qt(i.reaction),Cr(i.fn);}}finally{Ht(r),qt(n);}}et=e.p,e.m=true;}return t||{}}function fe(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(pe in t)sa(t);else if(!Array.isArray(t))for(let e in t){const r=t[e];typeof r=="object"&&r&&pe in r&&sa(r);}}}function sa(t,e=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!e.has(t)){e.add(t),t instanceof Date&&t.getTime();for(let n in t)try{sa(t[n],e);}catch{}const r=ha(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=Ua(r);for(let a in n){const i=n[a].get;if(i)try{i.call(t);}catch{}}}}}const Hs=["touchstart","touchmove"];function Os(t){return Hs.includes(t)}let Va=false;function Rs(){Va||(Va=true,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{var e;if(!t.defaultPrevented)for(const r of t.target.elements)(e=r.__on_r)==null||e.call(r);});},{capture:true}));}function xi(t){var e=nt,r=U;qt(null),Ht(null);try{return t()}finally{qt(e),Ht(r);}}function Ds(t,e,r,n=r){t.addEventListener(e,()=>xi(r));const a=t.__on_r;a?t.__on_r=()=>{a(),n(true);}:t.__on_r=()=>n(true),Rs();}const Fs=new Set,Aa=new Set;function zs(t,e,r,n={}){function a(i){if(n.capture||or.call(e,i),!i.cancelBubble)return xi(()=>r==null?void 0:r.call(this,i))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?En(()=>{e.addEventListener(t,a,n);}):e.addEventListener(t,a,n),a}function G(t,e,r,n,a){var i={capture:n,passive:a},s=zs(t,e,r,i);(e===document.body||e===window||e===document)&&wa(()=>{e.removeEventListener(t,s,i);});}function or(t){var p;var e=this,r=e.ownerDocument,n=t.type,a=((p=t.composedPath)==null?undefined:p.call(t))||[],i=a[0]||t.target,s=0,c=t.__root;if(c){var v=a.indexOf(c);if(v!==-1&&(e===document||e===window)){t.__root=e;return}var o=a.indexOf(e);if(o===-1)return;v<=o&&(s=v);}if(i=a[s]||t.target,i!==e){Ya(t,"currentTarget",{configurable:true,get(){return i||r}});var l=nt,_=U;qt(null),Ht(null);try{for(var f,d=[];i!==null;){var w=i.assignedSlot||i.parentNode||i.host||null;try{var m=i["__"+n];if(m!==void 0&&!i.disabled)if(mn(m)){var[M,...S]=m;M.apply(i,[t,...S]);}else m.call(i,t);}catch(y){f?d.push(y):f=y;}if(t.cancelBubble||w===e||w===null)break;i=w;}if(f){for(let y of d)queueMicrotask(()=>{throw y});throw f}}finally{t.__root=e,delete t.currentTarget,qt(l),Ht(_);}}}function Ci(t){var e=document.createElement("template");return e.innerHTML=t,e.content}function _n(t,e){var r=U;r.nodes_start===null&&(r.nodes_start=t,r.nodes_end=e);}function I(t,e){var r=(e&_s)!==0,n=(e&hs)!==0,a,i=!t.startsWith("<!>");return ()=>{a===undefined&&(a=Ci(i?t:"<!>"+t),r||(a=Pe(a)));var s=n?document.importNode(a,true):a.cloneNode(true);if(r){var c=Pe(s),v=s.lastChild;_n(c,v);}else _n(s,s);return s}}function We(t,e,r="svg"){var n=!t.startsWith("<!>"),a=`<${r}>${n?t:"<!>"+t}</${r}>`,i;return ()=>{if(!i){var s=Ci(a),c=Pe(s);i=Pe(c);}var v=i.cloneNode(true);return _n(v,v),v}}function ae(){var t=document.createDocumentFragment(),e=document.createComment(""),r=ya();return t.append(e,r),_n(e,r),t}function k(t,e){t!==null&&t.before(e);}let oa=true;function D(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=r,t.nodeValue=r==null?"":r+"");}function br(t,e){return qs(t,e)}const Le=new Map;function qs(t,{target:e,anchor:r,props:n={},events:a,context:i,intro:s=true}){gs();var c=new Set,v=_=>{for(var f=0;f<_.length;f++){var d=_[f];if(!c.has(d)){c.add(d);var w=Os(d);e.addEventListener(d,or,{passive:w});var m=Le.get(d);m===undefined?(document.addEventListener(d,or,{passive:w}),Le.set(d,1)):Le.set(d,m+1);}}};v(_a(Fs)),Aa.add(v);var o=undefined,l=xs(()=>{var _=r??e.appendChild(ya());return mr(()=>{if(i){le({});var f=et;f.c=i;}a&&(n.$$events=a),oa=s,o=t(_,n)||{},oa=true,i&&ce();}),()=>{var w;for(var f of c){e.removeEventListener(f,or);var d=Le.get(f);--d===0?(document.removeEventListener(f,or),Le.delete(f)):Le.set(f,d);}Aa.delete(v),_!==r&&((w=_.parentNode)==null||w.removeChild(_));}});return Bs.set(o,l),o}let Bs=new WeakMap;function Z(t,e,r=false){var n=t,a=null,i=null,s=Ct,c=r?bn:0,v=false;const o=(_,f=true)=>{v=true,l(f,_);},l=(_,f)=>{s!==(s=_)&&(s?(a?vn(a):f&&(a=mr(()=>f(n))),i&&cn(i,()=>{i=null;})):(i?vn(i):f&&(i=mr(()=>f(n))),a&&cn(a,()=>{a=null;})));};xa(()=>{v=false,e(o),v||l(null,null);},c);}let nn=null;function lr(t,e){return e}function Zs(t,e,r,n){for(var a=[],i=e.length,s=0;s<i;s++)Ca(e[s].e,a,true);var c=i>0&&a.length===0&&r!==null;if(c){var v=r.parentNode;ms(v),v.append(r),n.clear(),ee(t,e[0].prev,e[i-1].next);}_i(a,()=>{for(var o=0;o<i;o++){var l=e[o];c||(n.delete(l.k),ee(t,l.prev,l.next)),se(l.e,!c);}});}function _e(t,e,r,n,a,i=null){var s=t,c={flags:e,items:new Map,first:null},v=(e&ei)!==0;if(v){var o=t;s=o.appendChild(ya());}var l=null,_=false,f=mt(()=>{var d=r();return mn(d)?d:d==null?[]:_a(d)});xa(()=>{var d=u(f),w=d.length;if(!(_&&w===0)){_=w===0;{var m=nt;Ws(d,c,s,a,e,(m.f&Ft)!==0,n,r);}i!==null&&(w===0?l?vn(l):l=mr(()=>i(s)):l!==null&&cn(l,()=>{l=null;})),u(f);}});}function Ws(t,e,r,n,a,i,s,c){var at,it,Lt,P;var v=(a&as)!==0,o=(a&(ga|ma))!==0,l=t.length,_=e.items,f=e.first,d=f,w,m=null,M,S=[],p=[],y,L,C,x;if(v)for(x=0;x<l;x+=1)y=t[x],L=s(y,x),C=_.get(L),C!==undefined&&((at=C.a)==null||at.measure(),(M??(M=new Set)).add(C));for(x=0;x<l;x+=1){if(y=t[x],L=s(y,x),C=_.get(L),C===undefined){var V=d?d.e.nodes_start:r;m=js(V,e,m,m===null?e.first:m.next,y,L,x,n,a,c),_.set(L,m),S=[],p=[],d=m.next;continue}if(o&&Gs(C,y,x,a),C.e.f&Ft&&(vn(C.e),v&&((it=C.a)==null||it.unfix(),(M??(M=new Set)).delete(C))),C!==d){if(w!==undefined&&w.has(C)){if(S.length<p.length){var T=p[0],O;m=T.prev;var H=S[0],B=S[S.length-1];for(O=0;O<S.length;O+=1)Ia(S[O],T,r);for(O=0;O<p.length;O+=1)w.delete(p[O]);ee(e,H.prev,B.next),ee(e,m,H),ee(e,B,T),d=T,m=B,x-=1,S=[],p=[];}else w.delete(C),Ia(C,d,r),ee(e,C.prev,C.next),ee(e,C,m===null?e.first:m.next),ee(e,m,C),m=C;continue}for(S=[],p=[];d!==null&&d.k!==L;)(i||!(d.e.f&Ft))&&(w??(w=new Set)).add(d),p.push(d),d=d.next;if(d===null)continue;C=d;}S.push(C),m=C,d=C.next;}if(d!==null||w!==undefined){for(var z=w===undefined?[]:_a(w);d!==null;)(i||!(d.e.f&Ft))&&z.push(d),d=d.next;var J=z.length;if(J>0){var lt=a&ei&&l===0?r:null;if(v){for(x=0;x<J;x+=1)(Lt=z[x].a)==null||Lt.measure();for(x=0;x<J;x+=1)(P=z[x].a)==null||P.fix();}Zs(e,z,lt,_);}}v&&En(()=>{var X;if(M!==undefined)for(C of M)(X=C.a)==null||X.apply();}),U.first=e.first&&e.first.e,U.last=m&&m.e;}function Gs(t,e,r,n){n&ga&&ea(t.v,e),n&ma?ea(t.i,r):t.i=r;}function js(t,e,r,n,a,i,s,c,v,o){var l=nn,_=(v&ga)!==0,f=(v&is)===0,d=_?f?wn(a):St(a):a,w=v&ma?St(s):s,m={i:w,v:d,k:i,a:null,e:null,prev:r,next:n};nn=m;try{return m.e=mr(()=>c(t,d,w,o),ni),m.e.prev=r&&r.e,m.e.next=n&&n.e,r===null?e.first=m:(r.next=m,r.e.next=m.e),n!==null&&(n.prev=m,n.e.prev=m.e),m}finally{nn=l;}}function Ia(t,e,r){for(var n=t.next?t.next.e.nodes_start:r,a=e?e.e.nodes_start:r,i=t.e.nodes_start;i!==n;){var s=xn(i);a.before(i),i=s;}}function ee(t,e,r){e===null?t.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e);}function Pa(t,e,r,n,a){var c;var i=(c=e.$$slots)==null?undefined:c[r],s=false;i===true&&(i=e.children,s=true),i===undefined?a!==null&&a(t):i(t,s?()=>n:n);}function $(t,e,r,n){var a=t.__attributes??(t.__attributes={});a[e]!==(a[e]=r)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[ji]=r),r==null?t.removeAttribute(e):typeof r!="string"&&Ys(t).includes(e)?t[e]=r:t.setAttribute(e,r));}var Ha=new Map;function Ys(t){var e=Ha.get(t.nodeName);if(e)return e;Ha.set(t.nodeName,e=[]);for(var r,n=t,a=Element.prototype;a!==n;){r=Ua(n);for(var i in r)r[i].set&&e.push(i);n=ha(n);}return e}function Oa(t,e,r){var n=t.__className,a=Us(e);(n!==a||ni)&&(e==null?t.removeAttribute("class"):t.className=a,t.__className=a);}function Us(t,e){return (t??"")+""}function cr(t,e,r){if(r){if(t.classList.contains(e))return;t.classList.add(e);}else {if(!t.classList.contains(e))return;t.classList.remove(e);}}function Xt(t,e,r,n){var a=t.__styles??(t.__styles={});a[e]!==r&&(a[e]=r,r==null?t.style.removeProperty(e):t.style.setProperty(e,r,""));}const Xs=()=>performance.now(),Qt={tick:t=>requestAnimationFrame(t),now:()=>Xs(),tasks:new Set};function Ei(){const t=Qt.now();Qt.tasks.forEach(e=>{e.c(t)||(Qt.tasks.delete(e),e.f());}),Qt.tasks.size!==0&&Qt.tick(Ei);}function Qs(t){let e;return Qt.tasks.size===0&&Qt.tick(Ei),{promise:new Promise(r=>{Qt.tasks.add(e={c:t,f:r});}),abort(){Qt.tasks.delete(e);}}}function tn(t,e){t.dispatchEvent(new CustomEvent(e));}function Js(t){if(t==="float")return "cssFloat";if(t==="offset")return "cssOffset";if(t.startsWith("--"))return t;const e=t.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function Ra(t){const e={},r=t.split(";");for(const n of r){const[a,i]=n.split(":");if(!a||i===undefined)break;const s=Js(a.trim());e[s]=i.trim();}return e}const Ks=t=>t;function to(t,e,r){var n=nn,a,i,s,c=null;n.a??(n.a={element:t,measure(){a=this.element.getBoundingClientRect();},apply(){if(s==null||s.abort(),i=this.element.getBoundingClientRect(),a.left!==i.left||a.right!==i.right||a.top!==i.top||a.bottom!==i.bottom){const v=e()(this.element,{from:a,to:i},r==null?undefined:r());s=hn(this.element,v,undefined,1,()=>{s==null||s.abort(),s=undefined;});}},fix(){if(!t.getAnimations().length){var{position:v,width:o,height:l}=getComputedStyle(t);if(v!=="absolute"&&v!=="fixed"){var _=t.style;c={position:_.position,width:_.width,height:_.height,transform:_.transform},_.position="absolute",_.width=o,_.height=l;var f=t.getBoundingClientRect();if(a.left!==f.left||a.top!==f.top){var d=`translate(${a.left-f.left}px, ${a.top-f.top}px)`;_.transform=_.transform?`${_.transform} ${d}`:d;}}}},unfix(){if(c){var v=t.style;v.position=c.position,v.width=c.width,v.height=c.height,v.transform=c.transform;}}}),n.a.element=t;}function Oe(t,e,r,n){var a=(t&us)!==0,i=(t&fs)!==0,s=a&&i,c=(t&ds)!==0,v=s?"both":a?"in":"out",o,l=e.inert,_=e.style.overflow,f,d;function w(){var y=nt,L=U;qt(null),Ht(null);try{return o??(o=r()(e,(n==null?void 0:n())??{},{direction:v}))}finally{qt(y),Ht(L);}}var m={is_global:c,in(){var y;if(e.inert=l,!a){d==null||d.abort(),(y=d==null?undefined:d.reset)==null||y.call(d);return}i||f==null||f.abort(),tn(e,"introstart"),f=hn(e,w(),d,1,()=>{tn(e,"introend"),f==null||f.abort(),f=o=undefined,e.style.overflow=_;});},out(y){if(!i){y==null||y(),o=undefined;return}e.inert=true,tn(e,"outrostart"),d=hn(e,w(),f,0,()=>{tn(e,"outroend"),y==null||y();});},stop:()=>{f==null||f.abort(),d==null||d.abort();}},M=U;if((M.transitions??(M.transitions=[])).push(m),a&&oa){var S=c;if(!S){for(var p=M.parent;p&&p.f&bn;)for(;(p=p.parent)&&!(p.f&yn););S=!p||(p.f&Qa)!==0;}S&&Cr(()=>{R(()=>m.in());});}}function hn(t,e,r,n,a){var i=n===1;if(qi(e)){var s,c=false;return En(()=>{if(!c){var M=e({direction:i?"in":"out"});s=hn(t,M,r,n,a);}}),{abort:()=>{c=true,s==null||s.abort();},deactivate:()=>s.deactivate(),reset:()=>s.reset(),t:()=>s.t()}}if(r==null||r.deactivate(),!(e!=null&&e.duration))return a(),{abort:Rt,deactivate:Rt,reset:Rt,t:()=>n};const{delay:v=0,css:o,tick:l,easing:_=Ks}=e;var f=[];if(i&&r===undefined&&(l&&l(0,1),o)){var d=Ra(o(0,1));f.push(d,d);}var w=()=>1-n,m=t.animate(f,{duration:v});return m.onfinish=()=>{var M=(r==null?undefined:r.t())??1-n;r==null||r.abort();var S=n-M,p=e.duration*Math.abs(S),y=[];if(p>0){var L=false;if(o)for(var C=Math.ceil(p/16.666666666666668),x=0;x<=C;x+=1){var V=M+S*_(x/C),T=Ra(o(V,1-V));y.push(T),L||(L=T.overflow==="hidden");}L&&(t.style.overflow="hidden"),w=()=>{var O=m.currentTime;return M+S*_(O/p)},l&&Qs(()=>{if(m.playState!=="running")return  false;var O=w();return l(O,1-O),true});}m=t.animate(y,{duration:p,fill:"forwards"}),m.onfinish=()=>{w=()=>n,l==null||l(n,1-n),a();};},{abort:()=>{m&&(m.cancel(),m.effect=null,m.onfinish=Rt);},deactivate:()=>{a=Rt;},reset:()=>{n===0&&(l==null||l(1,0));},t:()=>w()}}function en(t,e,r=e){var n=kr();Ds(t,"input",a=>{var i=a?t.defaultValue:t.value;if(i=Qn(t)?Jn(i):i,r(i),n&&i!==(i=e())){var s=t.selectionStart,c=t.selectionEnd;t.value=i??"",c!==null&&(t.selectionStart=s,t.selectionEnd=Math.min(c,t.value.length));}}),R(e)==null&&t.value&&r(Qn(t)?Jn(t.value):t.value),Er(()=>{var a=e();Qn(t)&&a===Jn(t.value)||t.type==="date"&&!a&&!t.value||a!==t.value&&(t.value=a??"");});}function Qn(t){var e=t.type;return e==="number"||e==="range"}function Jn(t){return t===""?null:+t}function Kn(t,e,r){var n=he(t,e);n&&n.set&&(t[e]=r,wa(()=>{t[e]=null;}));}var ne,Ie,wr,pn,ki;const gn=class gn{constructor(e){sr(this,pn);sr(this,ne,new WeakMap);sr(this,Ie);sr(this,wr);Xn(this,wr,e);}observe(e,r){var n=Yt(this,ne).get(e)||new Set;return n.add(r),Yt(this,ne).set(e,n),Na(this,pn,ki).call(this).observe(e,Yt(this,wr)),()=>{var a=Yt(this,ne).get(e);a.delete(r),a.size===0&&(Yt(this,ne).delete(e),Yt(this,Ie).unobserve(e));}}};ne=new WeakMap,Ie=new WeakMap,wr=new WeakMap,pn=new WeakSet,ki=function(){return Yt(this,Ie)??Xn(this,Ie,new ResizeObserver(e=>{for(var r of e){gn.entries.set(r.target,r);for(var n of Yt(this,ne).get(r.target)||[])n(r);}}))},Ma(gn,"entries",new WeakMap);let la=gn;var eo=new la({box:"border-box"});function Da(t,e,r){var n=eo.observe(t,()=>r(t[e]));Cr(()=>(R(()=>r(t[e])),n));}function Fa(t,e){return t===e||(t==null?undefined:t[pe])===e}function re(t={},e,r,n){return Cr(()=>{var a,i;return Er(()=>{a=i,i=[],R(()=>{t!==r(...i)&&(e(t,...i),a&&Fa(r(...a),t)&&e(null,...a));});}),()=>{En(()=>{i&&Fa(r(...i),t)&&e(null,...i);});}}),t}function Li(t){return function(...e){var r=e[0];r.target===this&&(t==null||t.apply(this,e));}}function Te(t){return function(...e){var r=e[0];return r.stopPropagation(),t==null?undefined:t.apply(this,e)}}function ye(t=false){const e=et,r=e.l.u;if(!r)return;let n=()=>fe(e.s);if(t){let a=0,i={};const s=gr(()=>{let c=false;const v=e.s;for(const o in v)v[o]!==i[o]&&(i[o]=v[o],c=true);return c&&a++,a});n=()=>u(s);}r.b.length&&ws(()=>{za(e,n),ta(r.b);}),ra(()=>{const a=R(()=>r.m.map(Bi));return ()=>{for(const i of a)typeof i=="function"&&i();}}),r.a.length&&ra(()=>{za(e,n),ta(r.a);});}function za(t,e){if(t.l.s)for(const r of t.l.s)u(r);e();}function ro(t){var e=St(0);return function(){return arguments.length===1?(A(e,u(e)+1),arguments[0]):(u(e),t())}}function qa(t,e){var i;var r=(i=t.$$events)==null?undefined:i[e.type],n=mn(r)?r.slice():r==null?[]:[r];for(var a of n)a.call(this,e);}function Mi(t,e,r){if(t==null)return e(undefined),Rt;const n=R(()=>t.subscribe(e,r));return n.unsubscribe?()=>n.unsubscribe():n}const Me=[];function Nn(t,e=Rt){let r=null;const n=new Set;function a(c){if(ti(t,c)&&(t=c,r)){const v=!Me.length;for(const o of n)o[1](),Me.push(o,t);if(v){for(let o=0;o<Me.length;o+=2)Me[o][0](Me[o+1]);Me.length=0;}}}function i(c){a(c(t));}function s(c,v=Rt){const o=[c,v];return n.add(o),n.size===1&&(r=e(a,i)||Rt),c(t),()=>{n.delete(o),n.size===0&&r&&(r(),r=null);}}return {set:a,update:i,subscribe:s}}function Ni(t){let e;return Mi(t,r=>e=r)(),e}let vr=false,ca=Symbol();function ut(t,e,r){const n=r[e]??(r[e]={store:null,source:wn(undefined),unsubscribe:Rt});if(n.store!==t&&!(ca in r))if(n.unsubscribe(),n.store=t??null,t==null)n.source.v=undefined,n.unsubscribe=Rt;else {var a=true;n.unsubscribe=Mi(t,i=>{a?n.source.v=i:A(n.source,i);}),a=false;}return t&&ca in r?Ni(t):u(n.source)}function yt(t,e){return t.set(e),e}function Ge(){const t={};function e(){wa(()=>{for(var r in t)t[r].unsubscribe();Ya(t,ca,{enumerable:false,value:true});});}return [t,e]}function wt(t,e,r){return t.set(r),e}function Ba(){vr=true;}function no(t){var e=vr;try{return vr=!1,[t(),vr]}finally{vr=e;}}function Za(t){for(var e=U,r=U;e!==null&&!(e.f&(Bt|Fe));)e=e.parent;try{return Ht(e),t()}finally{Ht(r);}}function vt(t,e,r,n){var V;var a=(r&ss)!==0,i=!qe||(r&os)!==0,s=(r&cs)!==0,c=(r&vs)!==0,v=false,o;s?[o,v]=no(()=>t[e]):o=t[e];var l=pe in t||Gi in t,_=s&&(((V=he(t,e))==null?undefined:V.set)??(l&&e in t&&(T=>t[e]=T)))||undefined,f=n,d=true,w=false,m=()=>(w=true,d&&(d=false,c?f=R(n):f=n),f);o===undefined&&n!==undefined&&(_&&i&&Ji(),o=m(),_&&_(o));var M;if(i)M=()=>{var T=t[e];return T===undefined?m():(d=true,w=false,T)};else {var S=Za(()=>(a?gr:mt)(()=>t[e]));S.f|=Zi,M=()=>{var T=u(S);return T!==undefined&&(f=undefined),T===undefined?f:T};}if(!(r&ls))return M;if(_){var p=t.$$legacy;return function(T,O){return arguments.length>0?((!i||!O||p||v)&&_(O?M():T),T):M()}}var y=false,L=false,C=wn(o),x=Za(()=>gr(()=>{var T=M(),O=u(C);return y?(y=!1,L=!0,O):(L=!1,C.v=T)}));return a||(x.equals=pa),function(T,O){if(arguments.length>0){const H=O?u(x):i&&s?Se(T):T;return x.equals(H)||(y=true,A(C,H),w&&f!==undefined&&(f=H),R(()=>u(x))),T}return u(x)}}function Sn(t){et===null&&pi(),qe&&et.l!==null?io(et).m.push(t):ra(()=>{const e=R(t);if(typeof e=="function")return e});}function ao(t){et===null&&pi(),Sn(()=>()=>R(t));}function io(t){var e=t.l;return e.u??(e.u={a:[],b:[],m:[]})}const so="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(so);ns();const oo=t=>t;function Re(t,{delay:e=0,duration:r=400,easing:n=oo}={}){const a=+getComputedStyle(t).opacity;return {delay:e,duration:r,easing:n,css:i=>`opacity: ${i*a}`}}function Ne(t,e=()=>{}){if(!t)return;const r=document.querySelector(t);if(r){e(r);return}new MutationObserver((a,i)=>{const s=document.querySelector(t);s&&(i.disconnect(),e(s));}).observe(document.documentElement,{childList:true,subtree:true});}function _r(t){if(typeof t=="string")try{const e=JSON.parse(t);return _r(e)}catch{return t}if(Array.isArray(t))return t.map(e=>_r(e));if(t!==null&&typeof t=="object"){const e={};for(const r in t)t.hasOwnProperty(r)&&(e[r]=_r(t[r]));return e}return t}function Pt(t){if(!t)return "inherit";let e=t.toString().trim();if(e.startsWith("var(")){const s=e.match(/var\(([^)]+)\)/);if(s){const c=s[1],v=getComputedStyle(document.documentElement).getPropertyValue(c).trim();if(v)e=v;else return "inherit"}}if(e.startsWith("rgba(")||e.startsWith("rgb(")){const s=e.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);if(s){const[,c,v,o]=s;return (parseInt(c)*299+parseInt(v)*587+parseInt(o)*114)/1e3<128?"white":"black"}}e=e.replace("#","");let r,n,a;if(e.length===3)r=parseInt(e[0]+e[0],16),n=parseInt(e[1]+e[1],16),a=parseInt(e[2]+e[2],16);else if(e.length===6)r=parseInt(e.substr(0,2),16),n=parseInt(e.substr(2,2),16),a=parseInt(e.substr(4,2),16);else if(e.length===8)r=parseInt(e.substr(0,2),16),n=parseInt(e.substr(2,2),16),a=parseInt(e.substr(4,2),16);else return "black";return (r*299+n*587+a*114)/1e3<128?"white":"black"}const Si="Kesa:Fall",Wa=()=>{try{return _r(localStorage.getItem(Si))??{}}catch{return {}}},Zt=(t,e)=>{const r=Wa(),n=t in r?r[t]:e,{subscribe:a,set:i,update:s}=Nn(n);return a(c=>{const v=Wa();localStorage.setItem(Si,JSON.stringify({...v,[t]:c}));}),{subscribe:a,set:c=>{typeof c=="function"?s(c):i(c);},update:s}},an=Nn(0),$i=Nn(""),hr=Zt("_isFallView",true),ur=Nn(0),va=Zt("_panelPos",{x:0,y:0}),ua=Zt("_show_hover_pic",1),fr=Zt("_card_layout",{min:300,max:600,gap:8}),At=Zt("_card_detail",{all:false,category:true,title:false,topping:true,free:true,size:true,sub_title:false,tags:false,download_collect:false,upload_time:false,statistics:false}),lo=Zt("_show_nexus_pic",1),fa=Zt("_block_gay",1),sn=Zt("_card_radius",{enabled:false,value:16}),Ti=Zt("_mt_label",{}),Vi=Zt("_mt_categories",{});function co(t={path:"/search",method:"POST"}){const e=XMLHttpRequest.prototype.open,r=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.open=function(n,a){return this._requestMetadata={method:n.toUpperCase(),url:a,isTarget:a.includes(t.path)&&n.toUpperCase()===t.method},e.apply(this,arguments)},XMLHttpRequest.prototype.send=function(n){var a;if((a=this._requestMetadata)!=null&&a.isTarget){const i=this.onreadystatechange,s=this.onload;this.addEventListener("readystatechange",()=>{this.readyState===4&&this._captureResponseData(),i==null||i.call(this);}),this.onload=o=>{this._captureResponseData(),s==null||s.call(this,o);};const c={url:this._requestMetadata.url,body:n instanceof Document?n.documentElement.outerHTML:n},v=new CustomEvent(`req>${t.method}->${t.path}`,{detail:c});window.dispatchEvent(v);}return r.apply(this,arguments)},XMLHttpRequest.prototype._captureResponseData=function(){if(!this._hasCaptured&&this._requestMetadata.isTarget){try{const n={status:this.status,headers:this.getAllResponseHeaders(),data:this._parseResponse()},a=new CustomEvent(`res>${t.method}->${t.path}`,{detail:n});window.dispatchEvent(a);}catch(n){console.error("<PT-Fall> Capture failed:",n);}this._hasCaptured=true;}},XMLHttpRequest.prototype._parseResponse=function(){var n;try{switch(this.responseType){case "json":return this.response;case "document":return (n=this.responseXML)==null?void 0:n.documentElement.outerHTML;case "arraybuffer":return new Uint8Array(this.response);case "blob":return URL.createObjectURL(this.response);default:return this.responseText}}catch{return this.responseText}};}function vo(t){const e=t-1;return e*e*e+1}function uo(t,{from:e,to:r},n={}){var{delay:a=0,duration:i=x=>Math.sqrt(x)*120,easing:s=vo}=n,c=getComputedStyle(t),v=c.transform==="none"?"":c.transform,[o,l]=c.transformOrigin.split(" ").map(parseFloat);o/=t.clientWidth,l/=t.clientHeight;var _=fo(t),f=t.clientWidth/r.width/_,d=t.clientHeight/r.height/_,w=e.left+e.width*o,m=e.top+e.height*l,M=r.left+r.width*o,S=r.top+r.height*l,p=(w-M)*f,y=(m-S)*d,L=e.width/r.width,C=e.height/r.height;return {delay:a,duration:typeof i=="function"?i(Math.sqrt(p*p+y*y)):i,easing:s,css:(x,V)=>{var T=V*p,O=V*y,H=x+V*L,B=x+V*C;return `transform: ${v} translate(${T}px, ${O}px) scale(${H}, ${B});`}}}function fo(t){if("currentCSSZoom"in t)return t.currentCSSZoom;for(var e=t,r=1;e!==null;)r*=+getComputedStyle(e).zoom,e=e.parentElement;return r}var _o=I('<span class="svelte-b2jtby"> </span>'),ho=I('<div class="svelte-b2jtby"><!></div>'),po=I('<span class="svelte-b2jtby"> </span>'),go=I("<div><!></div>"),mo=I("<div></div>");function yo(t,e){le(e,false);const r=rt(),n=rt();let a=vt(e,"animate",8,true),i=vt(e,"columnClass",24,()=>""),s=vt(e,"duration",8,200),c=vt(e,"gap",8,20),v=vt(e,"getId",8,p=>typeof p=="number"||typeof p=="string"?p:p[o()]),o=vt(e,"idKey",24,()=>"id"),l=vt(e,"items",8),_=vt(e,"masonryHeight",12,0),f=vt(e,"masonryWidth",12,0),d=vt(e,"maxColWidth",8,500),w=vt(e,"minColWidth",8,330),m=vt(e,"style",24,()=>""),M=vt(e,"class",24,()=>"");He(()=>(fe(l()),fe(f()),fe(w()),fe(c())),()=>{A(r,Math.min(l().length,Math.floor(f()/(w()+c()))||1));}),He(()=>(fe(l()),u(r)),()=>{A(n,l().reduce((p,y,L)=>(p[L%p.length].push([y,L]),p),Array(u(r)).fill(null).map(()=>[])));}),Cn(),ye();var S=mo();_e(S,5,()=>u(n),lr,(p,y)=>{var L=go(),C=h(L);{var x=T=>{var O=ae(),H=kt(O);_e(H,9,()=>u(y),([B,z])=>v()(B),(B,z)=>{let J=()=>u(z)[0],lt=()=>u(z)[1];var at=ho(),it=h(at);Pa(it,e,"default",{get idx(){return lt()},get item(){return J()}},Lt=>{var P=_o(),X=h(P);j(()=>D(X,J())),k(Lt,P);}),Oe(1,at,()=>Re,()=>({delay:100,duration:s()})),Oe(2,at,()=>Re,()=>({delay:0,duration:s()})),to(at,()=>uo,()=>({duration:s()})),k(B,at);}),k(T,O);},V=T=>{var O=ae(),H=kt(O);_e(H,1,()=>u(y),([B,z])=>v()(B),(B,z)=>{let J=()=>u(z)[0],lt=()=>u(z)[1];var at=ae(),it=kt(at);Pa(it,e,"default",{get idx(){return lt()},get item(){return J()}},Lt=>{var P=po(),X=h(P);j(()=>D(X,J())),k(Lt,P);}),k(B,at);}),k(T,O);};Z(C,T=>{a()?T(x):T(V,false);});}j(()=>{Oa(L,`col ${i()??""} svelte-b2jtby`),$(L,"style",`gap: ${c()??""}px; max-width: ${d()??""}px;`);}),k(p,L);}),j(()=>{Oa(S,`masonry ${M()??""} svelte-b2jtby`),$(S,"style",`gap: ${c()??""}px; ${m()??""}`);}),Da(S,"clientWidth",f),Da(S,"clientHeight",_),k(t,S),ce();}var It=function(){return It=Object.assign||function(e){for(var r,n=1,a=arguments.length;n<a;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);}return e},It.apply(this,arguments)},bo=function(){function t(e){this.options=e,this.listeners={};}return t.prototype.on=function(e,r){var n=this.listeners[e]||[];this.listeners[e]=n.concat([r]);},t.prototype.triggerEvent=function(e,r){var n=this,a=this.listeners[e]||[];a.forEach(function(i){return i({target:n,event:r})});},t}(),De;(function(t){t[t.Add=0]="Add",t[t.Remove=1]="Remove";})(De||(De={}));var wo=function(){function t(){this.notifications=[];}return t.prototype.push=function(e){this.notifications.push(e),this.updateFn(e,De.Add,this.notifications);},t.prototype.splice=function(e,r){var n=this.notifications.splice(e,r)[0];return this.updateFn(n,De.Remove,this.notifications),n},t.prototype.indexOf=function(e){return this.notifications.indexOf(e)},t.prototype.onUpdate=function(e){this.updateFn=e;},t}(),ie;(function(t){t.Dismiss="dismiss",t.Click="click";})(ie||(ie={}));var Ga={types:[{type:"success",className:"notyf__toast--success",backgroundColor:"#3dc763",icon:{className:"notyf__icon--success",tagName:"i"}},{type:"error",className:"notyf__toast--error",backgroundColor:"#ed3d3d",icon:{className:"notyf__icon--error",tagName:"i"}}],duration:2e3,ripple:true,position:{x:"right",y:"bottom"},dismissible:false},xo=function(){function t(){this.notifications=[],this.events={},this.X_POSITION_FLEX_MAP={left:"flex-start",center:"center",right:"flex-end"},this.Y_POSITION_FLEX_MAP={top:"flex-start",center:"center",bottom:"flex-end"};var e=document.createDocumentFragment(),r=this._createHTMLElement({tagName:"div",className:"notyf"});e.appendChild(r),document.body.appendChild(e),this.container=r,this.animationEndEventName=this._getAnimationEndEventName(),this._createA11yContainer();}return t.prototype.on=function(e,r){var n;this.events=It(It({},this.events),(n={},n[e]=r,n));},t.prototype.update=function(e,r){r===De.Add?this.addNotification(e):r===De.Remove&&this.removeNotification(e);},t.prototype.removeNotification=function(e){var r=this,n=this._popRenderedNotification(e),a;if(n){a=n.node,a.classList.add("notyf__toast--disappear");var i;a.addEventListener(this.animationEndEventName,i=function(s){s.target===a&&(a.removeEventListener(r.animationEndEventName,i),r.container.removeChild(a));});}},t.prototype.addNotification=function(e){var r=this._renderNotification(e);this.notifications.push({notification:e,node:r}),this._announce(e.options.message||"Notification");},t.prototype._renderNotification=function(e){var r,n=this._buildNotificationCard(e),a=e.options.className;return a&&(r=n.classList).add.apply(r,a.split(" ")),this.container.appendChild(n),n},t.prototype._popRenderedNotification=function(e){for(var r=-1,n=0;n<this.notifications.length&&r<0;n++)this.notifications[n].notification===e&&(r=n);if(r!==-1)return this.notifications.splice(r,1)[0]},t.prototype.getXPosition=function(e){var r;return ((r=e==null?undefined:e.position)===null||r===undefined?undefined:r.x)||"right"},t.prototype.getYPosition=function(e){var r;return ((r=e==null?undefined:e.position)===null||r===undefined?undefined:r.y)||"bottom"},t.prototype.adjustContainerAlignment=function(e){var r=this.X_POSITION_FLEX_MAP[this.getXPosition(e)],n=this.Y_POSITION_FLEX_MAP[this.getYPosition(e)],a=this.container.style;a.setProperty("justify-content",n),a.setProperty("align-items",r);},t.prototype._buildNotificationCard=function(e){var r=this,n=e.options,a=n.icon;this.adjustContainerAlignment(n);var i=this._createHTMLElement({tagName:"div",className:"notyf__toast"}),s=this._createHTMLElement({tagName:"div",className:"notyf__ripple"}),c=this._createHTMLElement({tagName:"div",className:"notyf__wrapper"}),v=this._createHTMLElement({tagName:"div",className:"notyf__message"});v.innerHTML=n.message||"";var o=n.background||n.backgroundColor;if(a){var l=this._createHTMLElement({tagName:"div",className:"notyf__icon"});if((typeof a=="string"||a instanceof String)&&(l.innerHTML=new String(a).valueOf()),typeof a=="object"){var _=a.tagName,f=_===undefined?"i":_,d=a.className,w=a.text,m=a.color,M=m===undefined?o:m,S=this._createHTMLElement({tagName:f,className:d,text:w});M&&(S.style.color=M),l.appendChild(S);}c.appendChild(l);}if(c.appendChild(v),i.appendChild(c),o&&(n.ripple?(s.style.background=o,i.appendChild(s)):i.style.background=o),n.dismissible){var p=this._createHTMLElement({tagName:"div",className:"notyf__dismiss"}),y=this._createHTMLElement({tagName:"button",className:"notyf__dismiss-btn"});p.appendChild(y),c.appendChild(p),i.classList.add("notyf__toast--dismissible"),y.addEventListener("click",function(C){var x,V;(V=(x=r.events)[ie.Dismiss])===null||V===undefined||V.call(x,{target:e,event:C}),C.stopPropagation();});}i.addEventListener("click",function(C){var x,V;return (V=(x=r.events)[ie.Click])===null||V===undefined?undefined:V.call(x,{target:e,event:C})});var L=this.getYPosition(n)==="top"?"upper":"lower";return i.classList.add("notyf__toast--"+L),i},t.prototype._createHTMLElement=function(e){var r=e.tagName,n=e.className,a=e.text,i=document.createElement(r);return n&&(i.className=n),i.textContent=a||null,i},t.prototype._createA11yContainer=function(){var e=this._createHTMLElement({tagName:"div",className:"notyf-announcer"});e.setAttribute("aria-atomic","true"),e.setAttribute("aria-live","polite"),e.style.border="0",e.style.clip="rect(0 0 0 0)",e.style.height="1px",e.style.margin="-1px",e.style.overflow="hidden",e.style.padding="0",e.style.position="absolute",e.style.width="1px",e.style.outline="0",document.body.appendChild(e),this.a11yContainer=e;},t.prototype._announce=function(e){var r=this;this.a11yContainer.textContent="",setTimeout(function(){r.a11yContainer.textContent=e;},100);},t.prototype._getAnimationEndEventName=function(){var e=document.createElement("_fake"),r={MozTransition:"animationend",OTransition:"oAnimationEnd",WebkitTransition:"webkitAnimationEnd",transition:"animationend"},n;for(n in r)if(e.style[n]!==undefined)return r[n];return "animationend"},t}(),Ai=function(){function t(e){var r=this;this.dismiss=this._removeNotification,this.notifications=new wo,this.view=new xo;var n=this.registerTypes(e);this.options=It(It({},Ga),e),this.options.types=n,this.notifications.onUpdate(function(a,i){return r.view.update(a,i)}),this.view.on(ie.Dismiss,function(a){var i=a.target,s=a.event;r._removeNotification(i),i.triggerEvent(ie.Dismiss,s);}),this.view.on(ie.Click,function(a){var i=a.target,s=a.event;return i.triggerEvent(ie.Click,s)});}return t.prototype.error=function(e){var r=this.normalizeOptions("error",e);return this.open(r)},t.prototype.success=function(e){var r=this.normalizeOptions("success",e);return this.open(r)},t.prototype.open=function(e){var r=this.options.types.find(function(i){var s=i.type;return s===e.type})||{},n=It(It({},r),e);this.assignProps(["ripple","position","dismissible"],n);var a=new bo(n);return this._pushNotification(a),a},t.prototype.dismissAll=function(){for(;this.notifications.splice(0,1););},t.prototype.assignProps=function(e,r){var n=this;e.forEach(function(a){r[a]=r[a]==null?n.options[a]:r[a];});},t.prototype._pushNotification=function(e){var r=this;this.notifications.push(e);var n=e.options.duration!==undefined?e.options.duration:this.options.duration;n&&setTimeout(function(){return r._removeNotification(e)},n);},t.prototype._removeNotification=function(e){var r=this.notifications.indexOf(e);r!==-1&&this.notifications.splice(r,1);},t.prototype.normalizeOptions=function(e,r){var n={type:e};return typeof r=="string"?n.message=r:typeof r=="object"&&(n=It(It({},n),r)),n},t.prototype.registerTypes=function(e){var r=(e&&e.types||[]).slice(),n=Ga.types.map(function(a){var i=-1;r.forEach(function(c,v){c.type===a.type&&(i=v);});var s=i!==-1?r.splice(i,1)[0]:{};return It(It({},a),s)});return n.concat(r)},t}();new Ai({duration:5e3,dismissible:true});const Ve=new Ai({duration:3e3,dismissible:true,position:{x:"left",y:"top"},types:[{type:"warning",background:"orange",icon:{className:"material-icons",tagName:"i",text:"warning"}}]}),Co="data:image/svg+xml,%3csvg%20stroke='currentColor'%20fill='currentColor'%20stroke-width='0'%20viewBox='0%200%2024%2024'%20height='25'%20width='25'%20xmlns='http://www.w3.org/2000/svg'%20style='%20vertical-align:%20middle;%20--darkreader-inline-fill:%20currentColor;%20--darkreader-inline-stroke:%20currentColor;'%20%3e%3cpath%20d='M12%205c-3.859%200-7%203.141-7%207s3.141%207%207%207%207-3.141%207-7-3.141-7-7-7zm0%2012c-2.757%200-5-2.243-5-5s2.243-5%205-5%205%202.243%205%205-2.243%205-5%205z'%3e%3c/path%3e%3cpath%20d='M12%209c-1.627%200-3%201.373-3%203s1.373%203%203%203%203-1.373%203-3-1.373-3-3-3z'%3e%3c/path%3e%3c/svg%3e",Eo="data:image/svg+xml,%3csvg%20viewBox='64%2064%20896%20896'%20focusable='false'%20data-icon='arrow-up'%20width='1em'%20height='1em'%20fill='green'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M868%20545.5L536.1%20163a31.96%2031.96%200%2000-48.3%200L156%20545.5a7.97%207.97%200%20006%2013.2h81c4.6%200%209-2%2012.1-5.5L474%20300.9V864c0%204.4%203.6%208%208%208h60c4.4%200%208-3.6%208-8V300.9l218.9%20252.3c3%203.5%207.4%205.5%2012.1%205.5h81c6.8%200%2010.5-8%206-13.2z'%3e%3c/path%3e%3c/svg%3e",ko="data:image/svg+xml,%3csvg%20viewBox='64%2064%20896%20896'%20focusable='false'%20data-icon='arrow-down'%20width='1em'%20height='1em'%20fill='red'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M862%20465.3h-81c-4.6%200-9%202-12.1%205.5L550%20723.1V160c0-4.4-3.6-8-8-8h-60c-4.4%200-8%203.6-8%208v563.1L255.1%20470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8%200-10.5%208.1-6%2013.2L487.9%20861a31.96%2031.96%200%200048.3%200L868%20478.5c4.5-5.2.8-13.2-6-13.2z'%3e%3c/path%3e%3c/svg%3e",Lo="data:image/svg+xml,%3csvg%20viewBox='64%2064%20896%20896'%20focusable='false'%20data-icon='download'%20width='1em'%20height='1em'%20fill='currentColor'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M505.7%20661a8%208%200%200012.6%200l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4%200-8%203.6-8%208v338.3H400c-6.7%200-10.4%207.7-6.3%2012.9l112%20141.8zM878%20626h-60c-4.4%200-8%203.6-8%208v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4%200-8%203.6-8%208v198c0%2017.7%2014.3%2032%2032%2032h684c17.7%200%2032-14.3%2032-32V634c0-4.4-3.6-8-8-8z'%3e%3c/path%3e%3c/svg%3e",Mo="data:image/svg+xml,%3csvg%20viewBox='64%2064%20896%20896'%20focusable='false'%20data-icon='star'%20width='1em'%20height='1em'%20fill='currentColor'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M908.1%20353.1l-253.9-36.9L540.7%2086.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9%2014.5L369.8%20316.2l-253.9%2036.9c-7%201-13.4%204.3-18.3%209.3a32.05%2032.05%200%2000.6%2045.3l183.7%20179.1-43.4%20252.9a31.95%2031.95%200%200046.4%2033.7L512%20754l227.1%20119.4c6.2%203.3%2013.4%204.4%2020.3%203.2%2017.4-3%2029.1-19.5%2026.1-36.9l-43.4-252.9%20183.7-179.1c5-4.9%208.3-11.3%209.3-18.3%202.7-17.5-9.5-33.7-27-36.3z'%3e%3c/path%3e%3c/svg%3e",No="data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cstyle%3e%20.cls-1{fill:%232eb1b7;}%20.cls-2{fill:%2356b54e;}%20.cls-3{fill:%235dc6d1;}%20.cls-4{fill:%2360cc5a;}%20.cls-5{fill:%23ffce69;}%20.cls-6{fill:%236c2e7c;}%20%3c/style%3e%3c/defs%3e%3cg%20id='Icons'%3e%3crect%20class='cls-1'%20height='22'%20rx='4'%20width='22'%20x='1'%20y='1'/%3e%3cpath%20class='cls-2'%20d='M23,18v1a4,4,0,0,1-4,4H5a4,4,0,0,1-3.9-3.1l7.19-7.19a1.008,1.008,0,0,1,1.42,0l1.8,1.8a1,1,0,0,0,1.46-.05l2.33-2.65a1,1,0,0,1,1.46-.05Z'/%3e%3cpath%20class='cls-3'%20d='M23,5v9a4.025,4.025,0,0,1-1.17,2.83l-5.07-5.07a1,1,0,0,0-1.46.05l-2.33,2.65a1,1,0,0,1-1.46.05l-1.8-1.8a1.008,1.008,0,0,0-1.42,0L3.36,17.64A3.988,3.988,0,0,1,1,14V5A4,4,0,0,1,5,1H19A4,4,0,0,1,23,5Z'/%3e%3cpath%20class='cls-4'%20d='M21.83,16.83A4.025,4.025,0,0,1,19,18H5a3.931,3.931,0,0,1-1.64-.36l4.93-4.93a1.008,1.008,0,0,1,1.42,0l1.8,1.8a1,1,0,0,0,1.46-.05l2.33-2.65a1,1,0,0,1,1.46-.05Z'/%3e%3ccircle%20class='cls-5'%20cx='7'%20cy='7'%20r='2'/%3e%3c/g%3e%3cg%20data-name='Layer%204'%20id='Layer_4'%3e%3cpath%20class='cls-6'%20d='M19,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,19,0Zm3,19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3Z'/%3e%3cpath%20class='cls-6'%20d='M7,10A3,3,0,1,0,4,7,3,3,0,0,0,7,10ZM7,6A1,1,0,1,1,6,7,1,1,0,0,1,7,6Z'/%3e%3cpath%20class='cls-6'%20d='M16.707,10.293a.956.956,0,0,0-.74-.293,1.006,1.006,0,0,0-.72.341L12.217,13.8l-2.51-2.511a1,1,0,0,0-1.414,0l-4,4a1,1,0,1,0,1.414,1.414L9,13.414l1.9,1.9L8.247,18.341a1,1,0,0,0,1.506,1.318l3.218-3.678.006,0,.007-.011,3.065-3.5,2.244,2.244a1,1,0,0,0,1.414-1.414Z'/%3e%3c/g%3e%3c/svg%3e",q="https://static.m-team.cc/static/cate/",Ae={architecture:"Mteam",TL_Selector:"div.app-content__inner",LOADING_PIC:"/static/media/logo.80b63235eaf702e44a8d.png",HOST:"https://test2.m-team.cc",API:{search:{url:"/search",fullUrl:"/api/torrent/search",method:"POST"}},ICON:{SIZE:Co,SEEDERS:Eo,LEECHERS:ko,DOWNLOAD:Lo,COLLECTION:Mo,PIN:"/static/trans.gif",PREVIEW:No},CATEGORY:{401:{src:q+"moviesd.png",alt:"電影/SD",color:"#c74854"},402:{src:q+"tvhd.png",alt:"影劇/綜藝/HD",color:"#276fb8"},403:{src:q+"tvsd.png",alt:"影劇/綜藝/SD",color:"#c74854"},404:{src:q+"bbc.png",alt:"紀錄",color:"#23ac38"},405:{src:q+"anime.png",alt:"動畫",color:"#996c34"},406:{src:q+"mv.png",alt:"演唱",color:"#8a57a1"},407:{src:q+"sport.png",alt:"運動",color:"#23ac38"},409:{src:q+"other.png",alt:"Misc(其他)",color:"#996c34"},419:{src:q+"moviehd.png",alt:"電影/HD",color:"#c01a20"},420:{src:q+"moviedvd.png",alt:"電影/DVDiSo",color:"#c74854"},421:{src:q+"moviebd.png",alt:"電影/Blu-Ray",color:"#00a0e9"},422:{src:q+"software.png",alt:"軟體",color:"#f39800"},423:{src:q+"game-pc-3.jpeg",alt:"PC遊戲",color:"#f39800"},427:{src:q+"Study.png",alt:"教育(書面)",color:"#7FC269"},434:{src:q+"flac.png",alt:"Music(無損)",color:"#8a57a1"},435:{src:q+"tvdvd.png",alt:"影劇/綜藝/DVDiSo",color:"#4dbebd"},438:{src:q+"tvbd.png",alt:"影劇/綜藝/BD",color:"#1897d6"},439:{src:q+"movieremux.png",alt:"電影/Remux",color:"#1b2a51"},451:{src:q+"Study_Video.png",alt:"教育(影片)",color:"#7FC269"},442:{src:q+"Study_Audio.png",alt:"有聲書",color:"#7FC269"},448:{src:q+"pcgame.png",alt:"TV遊戲",color:"#f39800"},410:{src:q+"cenhd.png",alt:"AV(有碼)/HD Censored",color:"#F520CB"},411:{src:q+"hgame.png",alt:"H-遊戲",color:"#f49800"},412:{src:q+"hanime.png",alt:"H-動畫",color:"#f49800"},413:{src:q+"hcomic.png",alt:"H-漫畫",color:"#f49800"},424:{src:q+"censd.png",alt:"AV(有碼)/SD Censored",color:"#DA55A9"},425:{src:q+"ivvideo.png",alt:"IV(寫真影集)",color:"#bb1e9a"},426:{src:q+"uendvd.png",alt:"AV(無碼)/DVDiSo Uncensored",color:"#f77afa"},429:{src:q+"uenhd.png",alt:"AV(無碼)/HD Uncensored",color:"#f52bcb"},430:{src:q+"uensd.png",alt:"AV(無碼)/SD Uncensored",color:"#db55a9"},431:{src:q+"cenbd.png",alt:"AV(有碼)/Blu-Ray Censored",color:"#19a7ec"},432:{src:q+"uenbd.png",alt:"AV(無碼)/Blu-Ray Uncensored",color:"#19a7ec"},433:{src:q+"ivpic.png",alt:"IV(寫真圖集)",color:"#bb1e9a"},436:{src:q+"adult0day.png",alt:"AV(網站)/0Day",color:"#bb1e9a"},437:{src:q+"cendvd.png",alt:"AV(有碼)/DVDiSo Censored",color:"#f77afa"},440:{src:q+"gayhd.gif",alt:"AV(Gay)/HD",color:"#f52bcb"}},TAG:{"4k":{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},"8k":{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},hdr:{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},hdr10:{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},"hdr10+":{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},hlg:{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},DoVi:{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},HDRVi:{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},中字:{color:"#ad2a2a",bgColor:"#d14a4a2e"},中配:{color:"#5b3991",bgColor:"#5b399129"}},INDEX:0,Iframe_Width:1260,get_bg_color:function(){return getComputedStyle(document.documentElement).getPropertyValue("--bg-3")},special:function(){let t=So(),e=$o();return t&&e},pageLoaded:function(){}};function So(){const t=Array.from(document.querySelectorAll(".ant-table-row-level-0 .ant-col a[href]"));return t.forEach(function(e){e.addEventListener("click",function(r){r.preventDefault(),_iframe_switch.set(1),_iframe_url.set(e.href);});}),t.length}function $o(){document.querySelectorAll(".ant-image-mask").forEach(r=>{r.remove();});const e=Array.from(document.querySelectorAll(".torrent-list__thumbnail"));return e.forEach(r=>{r.classList+=" preview_Origin";}),e.length}const ka=".preview_Origin";document.body.addEventListener("mouseover",function(t){if(t.target.matches(ka)){const e=t,r=t.target;handleMouseOver(e,r);}});document.body.addEventListener("mouseout",function(t){t.target.matches(ka)&&handleMouseOut(t);});document.body.addEventListener("mousemove",function(t){if(t.target.matches(ka)){const e=t.target;handleMouseMove(t,e);}});var To=We('<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="18" width="18" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle;"><path d="M7 7h10v2H7zm0 4h7v2H7z"></path><path d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"></path></svg>');function ja(t){var e=To();k(t,e);}class Vo{constructor(){this.container=null,this.imgElements=null,this.buffer=null,this.init();}init(){this.container=document.querySelector(".kp_container")||this.createPreview(),document.body.appendChild(this.container);}createPreview(){const e=document.createElement("div");e.className="kp_container",e.style.backgroundColor="rgba(0,0,0,0.8)",e.style.opacity="1",e.style.position="fixed",e.style.zIndex="10000",e.style.pointerEvents="none",e.style.transition="all .3s",e.style.display="none";const r=document.createElement("img");r.className="kp_img",r.style.position="absolute",r.style.zIndex="10002",r.style.pointerEvents="none",r.style.width="100%",r.style.height="100%",r.style.objectFit="contain",e.appendChild(r);const n=document.createElement("img");return n.className="kp_img",n.style.position="absolute",n.style.zIndex="10001",n.style.pointerEvents="none",n.style.width="100%",n.style.height="100%",n.style.objectFit="cover",n.style.filter="blur(8px)",n.style.opacity="0.9",e.appendChild(n),e}handleMouseOver(e,r){if(!r){console.warn("[FALL]: imgEle is null");return}if(Ni(lo)){const n=r.getAttribute("src");n&&(document.querySelectorAll(".kp_img").forEach(i=>{i.setAttribute("src",n);}),this.updatePosition(e),this.imgElements=r,this.container.style.display="block");}}handleMouseMove(e){this.container.style.display==="block"&&this.updatePosition(e);}updatePosition(e){const r=this.previewPosition(e);this.container.style.left=r.left,this.container.style.top=r.top,this.container.style.width=r.width,this.container.style.height=r.height;}previewPosition(e){let r=0,n=0;try{r=this.imgElements.naturalWidth,n=this.imgElements.naturalHeight;}catch{}const a=e.clientX,i=e.clientY,s=window.innerWidth,c=window.innerHeight,v={bot:{width:s,height:window.innerHeight-i},top:{width:s,height:i},right:{width:window.innerWidth-a,height:c},left:{width:a,height:c}};let o=0,l="";for(const _ in v){const f=Math.min(v[_].width/r,v[_].height/n);f>o&&(o=f,l=_);}return {top:{left:0,top:0,width:s+"px",height:i+"px"},bot:{left:0,top:i+"px",width:s+"px",height:window.innerHeight-i+"px"},left:{left:0,top:0,width:a+"px",height:c+"px"},right:{left:a+"px",top:0,width:window.innerWidth-a+"px",height:c+"px"}}[l]||{left:0,top:0,width:0,height:0}}clearPreview(){document.querySelectorAll(".kp_img").forEach(e=>{e.setAttribute("src","");}),this.container.style.display="none";}destroy(){this.buffer&&clearTimeout(this.buffer),this.container&&(this.container.style.display="none",clearPreview());}}function Ao(){document.querySelectorAll(".kp_img").forEach(e=>{e.setAttribute("src","");});const t=document.querySelector(".kp_container");t&&(t.style.display="none");}window.__clearPreview=Ao;const Io="data:image/svg+xml,%3csvg%20width='256px'%20height='256px'%20viewBox='0%200%2024.00%2024.00'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20transform='matrix(1,%200,%200,%201,%200,%200)'%20%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'%20transform='translate(0,0),%20scale(1)'%20/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%23CCCCCC'%20stroke-width='0.048'%20/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M13%203L13.7071%202.29289C13.5196%202.10536%2013.2652%202%2013%202V3ZM14%2022C14.5523%2022%2015%2021.5523%2015%2021C15%2020.4477%2014.5523%2020%2014%2020V22ZM19%209H20C20%208.73478%2019.8946%208.48043%2019.7071%208.29289L19%209ZM18%2010C18%2010.5523%2018.4477%2011%2019%2011C19.5523%2011%2020%2010.5523%2020%2010H18ZM5.21799%2019.908L4.32698%2020.362H4.32698L5.21799%2019.908ZM6.09202%2020.782L6.54601%2019.891L6.54601%2019.891L6.09202%2020.782ZM6.09202%203.21799L5.63803%202.32698L5.63803%202.32698L6.09202%203.21799ZM5.21799%204.09202L4.32698%203.63803L4.32698%203.63803L5.21799%204.09202ZM13.109%208.45399L14%208V8L13.109%208.45399ZM13.546%208.89101L14%208L13.546%208.89101ZM17.2299%2017.7929C16.8394%2018.1834%2016.8394%2018.8166%2017.2299%2019.2071C17.6204%2019.5976%2018.2536%2019.5976%2018.6441%2019.2071L17.2299%2017.7929ZM15.0316%2015.2507C14.8939%2015.7856%2015.2159%2016.3308%2015.7507%2016.4684C16.2856%2016.6061%2016.8308%2016.2841%2016.9684%2015.7493L15.0316%2015.2507ZM17.9375%2020C17.3852%2020%2016.9375%2020.4477%2016.9375%2021C16.9375%2021.5523%2017.3852%2022%2017.9375%2022V20ZM17.9475%2022C18.4998%2022%2018.9475%2021.5523%2018.9475%2021C18.9475%2020.4477%2018.4998%2020%2017.9475%2020V22ZM13%202H8.2V4H13V2ZM4%206.2V17.8H6V6.2H4ZM8.2%2022H14V20H8.2V22ZM19.7071%208.29289L13.7071%202.29289L12.2929%203.70711L18.2929%209.70711L19.7071%208.29289ZM20%2010V9H18V10H20ZM4%2017.8C4%2018.3436%203.99922%2018.8114%204.03057%2019.195C4.06287%2019.5904%204.13419%2019.9836%204.32698%2020.362L6.10899%2019.454C6.0838%2019.4045%206.04612%2019.3038%206.02393%2019.0322C6.00078%2018.7488%206%2018.3766%206%2017.8H4ZM8.2%2020C7.62345%2020%207.25117%2019.9992%206.96784%2019.9761C6.69617%2019.9539%206.59545%2019.9162%206.54601%2019.891L5.63803%2021.673C6.01641%2021.8658%206.40963%2021.9371%206.80497%2021.9694C7.18864%2022.0008%207.65645%2022%208.2%2022V20ZM4.32698%2020.362C4.6146%2020.9265%205.07354%2021.3854%205.63803%2021.673L6.54601%2019.891C6.35785%2019.7951%206.20487%2019.6422%206.10899%2019.454L4.32698%2020.362ZM8.2%202C7.65645%202%207.18864%201.99922%206.80497%202.03057C6.40963%202.06287%206.01641%202.13419%205.63803%202.32698L6.54601%204.10899C6.59545%204.0838%206.69617%204.04612%206.96784%204.02393C7.25117%204.00078%207.62345%204%208.2%204V2ZM6%206.2C6%205.62345%206.00078%205.25117%206.02393%204.96784C6.04612%204.69617%206.0838%204.59545%206.10899%204.54601L4.32698%203.63803C4.13419%204.01641%204.06287%204.40963%204.03057%204.80497C3.99922%205.18864%204%205.65645%204%206.2H6ZM5.63803%202.32698C5.07354%202.6146%204.6146%203.07354%204.32698%203.63803L6.10899%204.54601C6.20487%204.35785%206.35785%204.20487%206.54601%204.10899L5.63803%202.32698ZM12%203V7.4H14V3H12ZM14.6%2010H19V8H14.6V10ZM12%207.4C12%207.66353%2011.9992%207.92131%2012.0169%208.13823C12.0356%208.36682%2012.0797%208.63656%2012.218%208.90798L14%208C14.0293%208.05751%2014.0189%208.08028%2014.0103%207.97537C14.0008%207.85878%2014%207.69653%2014%207.4H12ZM14.6%208C14.3035%208%2014.1412%207.99922%2014.0246%207.9897C13.9197%207.98113%2013.9425%207.9707%2014%208L13.092%209.78201C13.3634%209.92031%2013.6332%209.96438%2013.8618%209.98305C14.0787%2010.0008%2014.3365%2010%2014.6%2010V8ZM12.218%208.90798C12.4097%209.2843%2012.7157%209.59027%2013.092%209.78201L14%208V8L12.218%208.90798ZM18.937%2016C18.937%2016.1732%2018.8915%2016.3053%2018.6175%2016.5697C18.4638%2016.718%2018.2828%2016.8653%2018.0319%2017.074C17.7936%2017.2723%2017.5141%2017.5087%2017.2299%2017.7929L18.6441%2019.2071C18.86%2018.9913%2019.0805%2018.8033%2019.3109%2018.6116C19.5287%2018.4305%2019.7852%2018.2223%2020.0065%2018.0087C20.4825%2017.5493%2020.937%2016.9314%2020.937%2016H18.937ZM17.937%2015C18.4893%2015%2018.937%2015.4477%2018.937%2016H20.937C20.937%2014.3431%2019.5938%2013%2017.937%2013V15ZM16.9684%2015.7493C17.0795%2015.3177%2017.4724%2015%2017.937%2015V13C16.5377%2013%2015.3645%2013.957%2015.0316%2015.2507L16.9684%2015.7493ZM17.9375%2022H17.9475V20H17.9375V22Z'%20fill='%23c00000'%20/%3e%3c/g%3e%3c/svg%3e",Po="data:image/svg+xml,%3csvg%20viewBox='-2.4%20-2.4%2028.80%2028.80'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23000000'%20%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'%20/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M15.6%2015.6C15.6%2015.6%2014.25%2013.8%2012%2013.8C9.75%2013.8%208.4%2015.6%208.4%2015.6M14.7%209.3H14.709M9.3%209.3H9.309M21%2012C21%2016.9706%2016.9706%2021%2012%2021C7.02944%2021%203%2016.9706%203%2012C3%207.02944%207.02944%203%2012%203C16.9706%203%2021%207.02944%2021%2012ZM15.15%209.3C15.15%209.54853%2014.9485%209.75%2014.7%209.75C14.4515%209.75%2014.25%209.54853%2014.25%209.3C14.25%209.05147%2014.4515%208.85%2014.7%208.85C14.9485%208.85%2015.15%209.05147%2015.15%209.3ZM9.75%209.3C9.75%209.54853%209.54853%209.75%209.3%209.75C9.05147%209.75%208.85%209.54853%208.85%209.3C8.85%209.05147%209.05147%208.85%209.3%208.85C9.54853%208.85%209.75%209.05147%209.75%209.3Z'%20stroke='%23000000'%20stroke-width='1.8'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3c/g%3e%3c/svg%3e";var xt=ro(()=>Ae),Ho=I('<div class="card-category svelte-1ytaoom"><img class="card_category-img svelte-1ytaoom"> </div>'),Oo=I('<a class="__main_title svelte-1ytaoom" target="_blank" rel="noopener noreferrer"> </a>'),Ro=I('<div class="pic_error svelte-1ytaoom"><div><img style="height: 100%; width:60px; border-radius:20px;" alt="pic error" class="svelte-1ytaoom"></div> <div class="ant-typography" style="color: white; font-size:16px;">GAY WARNING<br>同志警告</div></div>'),Do=I('<img class="lazy-image svelte-1ytaoom">'),Fo=I('<div class="pic_error svelte-1ytaoom" style=""><div><img style="height: 100%;width: 100px;" alt="no pic" class="svelte-1ytaoom"></div> <div>本种没有图片</div></div>'),zo=I('<div class="pic_error svelte-1ytaoom" style=""><div><img style="height: 100%;width: 100px;" alt="pic error" class="svelte-1ytaoom"></div> <div class="ant-typography">图片加载失败</div></div>'),qo=I('<div class="hover-trigger svelte-1ytaoom"><img style="pointer-events: none;" alt="PREVIEW" class="svelte-1ytaoom"></div>'),Bo=I(`<img style="
                    background: url(/static/media/icons.8bb5446ebbbd07050285.gif) 0 -202px;
                    height: 14px;
                    width: 14px;" alt="PIN" class="svelte-1ytaoom">`),Zo=I('<div class="card_info__topping svelte-1ytaoom"></div> &nbsp;',1),Wo=I('<div class="_tag svelte-1ytaoom"> </div>'),Go=I('<div class="_tag _tag_diy svelte-1ytaoom">DIY</div>'),jo=I('<div class="_tag _tag_dub svelte-1ytaoom">国配</div>'),Yo=I('<div class="_tag _tag_sub svelte-1ytaoom">中字</div>'),Uo=I('<div class="_tag svelte-1ytaoom"> </div>'),Xo=I('<div class="cl-tags svelte-1ytaoom"><!> <!> <!> <!></div>'),Qo=I(`<img style="
                  background: url(/static/media/icons.8bb5446ebbbd07050285.gif) 0 -202px;
                  height: 14px;
                  width: 14px;" alt="PIN" class="svelte-1ytaoom">`),Jo=I('<div class="card_info__topping svelte-1ytaoom"></div> &nbsp;',1),Ko=I('<div class="_tag svelte-1ytaoom"> </div>'),tl=I('<div class="card-index svelte-1ytaoom"><!> <!></div>'),el=I('<div class="card-index card-index-right svelte-1ytaoom"> </div>'),rl=I('<div class="card_info-item card_info__sub_title svelte-1ytaoom"><div> </div></div>'),nl=I('<div class="_tag _tag_diy svelte-1ytaoom">DIY</div>'),al=I('<div class="_tag _tag_dub svelte-1ytaoom">国配</div>'),il=I('<div class="_tag _tag_sub svelte-1ytaoom">中字</div>'),sl=I('<div class="_tag svelte-1ytaoom"> </div>'),ol=I('<div class="cl-tags svelte-1ytaoom"><!> <!> <!> <!></div>'),ll=I('<div class="card_info-item card_info__dl_and_cl svelte-1ytaoom"><button title="(原列表的这俩按钮会消失)">下载 & 收藏</button></div>'),cl=I('<div class="card_info-item card_info__upload_time svelte-1ytaoom"><div> </div></div>'),vl=I('<div class="card_info-item card_info__statistics svelte-1ytaoom"><!> &nbsp; <b> </b> &nbsp;&nbsp; <img alt="SVG_Seeders"> &nbsp; <b> </b> &nbsp;&nbsp; <img alt="SVG_Leechers"> &nbsp; <b> </b></div>'),ul=I('<div class="card_info svelte-1ytaoom"><!>  <!> <!> <!> <!></div>'),fl=I(`<div class="card_holder svelte-1ytaoom"><!> <div class="card_title"><!></div> <div class="card_pic svelte-1ytaoom"><!> <!>  <div class="hover-overlay svelte-1ytaoom"><div class="overlay-content svelte-1ytaoom"><div class="__inner_index_and_size svelte-1ytaoom"><div class="card-index __inner_index svelte-1ytaoom" style="background-color:black; color:white"><!> <!></div> <button class="__iframe_button svelte-1ytaoom">打开 iframe</button> <div class="card-index card-index-right __inner_index __inner_size svelte-1ytaoom"> </div></div> <div class="card-category card_info-item svelte-1ytaoom"><img class="card_category-img card_category_square svelte-1ytaoom" style="width: 36px;height: 36px;"> </div> <div style="width: 100%;" class="card_info-item card_info__sub_title svelte-1ytaoom"><a class="__main_title __straight svelte-1ytaoom" target="_blank" rel="noopener noreferrer"> </a></div> <div style="width: 100%;" class="card_info-item card_info__sub_title svelte-1ytaoom"><div class="__sub_title svelte-1ytaoom"> </div></div>  <!> <div class="card_info-item card_info__upload_time svelte-1ytaoom"><div> </div></div> <div class="card_info-item card_info__statistics svelte-1ytaoom"><div class="__center svelte-1ytaoom"><!> <b> </b></div> <div class="__center svelte-1ytaoom"><img style="width: 14px; height: 14px;" alt="SVG_Seeders" class="svelte-1ytaoom"> <b> </b></div> <div class="__center svelte-1ytaoom"><img style="width: 14px; height: 14px;" alt="SVG_Leechers" class="svelte-1ytaoom"> <b> </b></div> <div><button title="(原列表的这俩按钮会消失)" style="
                background-color: inherit; border-color:transparent">下载&收藏</button></div></div></div></div> <!> <!></div> <!></div>`);function dl(t,e){le(e,false);const[r,n]=Ge(),a=()=>ut(Vi,"$_mt_categories",r),i=()=>ut(Ti,"$_mt_label",r),s=()=>ut(fa,"$_block_gay",r),c=()=>ut(sn,"$_card_radius",r),v=()=>ut(At,"$_card_detail",r),o=()=>ut(ua,"$_show_hover_pic",r);let l=vt(e,"torrentInfo",8),_=rt(false),f=rt();l().status.toppingLevel&&A(f,Array(Number(l().status.toppingLevel)).fill());const d=l().status.discount,w=l().status.discountEndTime,m={FREE:"免费",PERCENT_50:"50%"},M=()=>{const b=new Date,N=new Date(w);return Math.floor((N.getTime()-b.getTime())/(1e3*3600))};let S=rt(),p=rt();const y="rgba(255, 255, 255, 0.5)";let L=rt(),C=rt();const x=`https://${location.host}/browse?cat=`+l().category;xt().CATEGORY[l().category]||(A(p,y),Ve.open({type:"warning",message:`存在未知分类: ${l().category}`}),xt(xt().CATEGORY[l().category]={src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZmMDAwMCIvPjwvc3ZnPg==",alt:"未知分类(TG或论坛联系我)",color:y})),A(L,a()[l().category].nameChs??xt().CATEGORY[l().category].alt),A(C,a()[l().category].image?q+a()[l().category].image:xt().CATEGORY[l().category].src),A(p,xt().CATEGORY[l().category].color??y);let V=rt([]);l().labelsNew.length&&A(V,l().labelsNew.map(b=>{if(xt().TAG[b])return {key:b,config:xt().TAG[b]};if(i()){console.warn("[FALL]: 存在本地没有的 tag: ",b);let N;for(const F in i())if(b==i()[F].tag){N=i()[F];break}if(N)return {key:b,config:N}}return null}).filter(Boolean));function T(b){if(b===0)return "0 B";const N=["B","KB","MB","GB","TB"];let F=0,E=b;for(;E>=1024&&F<N.length-1;)E/=1024,F++;return `${E.toFixed(2).replace(/\.?0+$/,"")} ${N[F]}`}let O=rt(),H=rt();function B(b,N){const F=document.querySelectorAll(`a[href^="/detail/${b}"]`),E=[];F.forEach(K=>{if(!/\/detail\/\d+/.test(K.href))return;const tt=K.closest("tr");tt&&tt.querySelectorAll("button").forEach(st=>{st.querySelector("span.ant-btn-icon")&&E.push(st);});}),E.length?(E[0].style.margin=0,[...new Set(E)].forEach(tt=>{N.appendChild(tt);})):Ve.error("没找到捏, 建议在种子详情里下载收藏~");}let z=rt(false),J=rt(false),lt=new Vo,at=rt(),it=rt(),Lt=rt(0);function P(){u(it)&&A(Lt,u(it).offsetHeight);}let X=rt(false);const _t="/static/cate/gayhd.gif",Tt="https://static.m-team.cc/static/media/logo.80b63235eaf702e44a8d.png";let Wt=l().imageList[0]||Tt,W=rt(),Kt,Gt=rt(false);const $n=()=>{u(Gt)||(Vt(W,u(W).style.width="100%"),Vt(W,u(W).src=Wt),u(W).classList.add("loaded"),Vt(W,u(W).style.opacity=1),A(Gt,true),u(it)&&P());};function je(){yt($i,"https://"+location.host+"/detail/"+l().id),yt(an,1);}Sn(()=>{u(Gt)||(Kt=new IntersectionObserver(b=>{b.forEach(N=>{N.isIntersecting&&($n(),Kt.unobserve(u(W)));});},{rootMargin:"100px"}),u(W)&&!u(Gt)&&Kt.observe(u(W)),l().pt_fall_highlight&&u(S).scrollIntoView({behavior:"smooth"}),setTimeout(()=>{},3e3)),P(),u(W)&&Vt(W,u(W).style.width="auto");}),ao(()=>{Kt&&Kt.disconnect();}),He(()=>u(it),()=>{u(it)&&P();}),He(()=>(fe(l()),s(),u(W),u(it)),()=>{l().category==440&&s()==0&&u(W)&&(Vt(W,u(W).style.width="100%"),Vt(W,u(W).src=Wt),u(W).classList.add("loaded"),Vt(W,u(W).style.opacity=1),A(Gt,true),u(it)&&P());}),Cn(),ye();var ve=fl(),Ye=h(ve);{var Tn=b=>{var N=Ho();$(N,"data-href",x);var F=h(N),E=g(F);j(K=>{$(N,"style",`
      background-color: ${u(p)??"transparent"};
      color: ${K??""}`),$(F,"src",u(C)),$(F,"alt",u(L)),D(E,`    ${u(L)??""}`);},[()=>u(p)?Pt(u(p)):"black"],mt),k(b,N);};Z(Ye,b=>{v().category&&b(Tn);});}var be=g(Ye,2),Lr=h(be);{var Mr=b=>{var N=Oo(),F=h(N);j(()=>{$(N,"href","/detail/"+l().id),D(F,l().name);}),k(b,N);};Z(Lr,b=>{v().title&&b(Mr);});}var we=g(be,2),Nr=h(we);{var Sr=b=>{var N=ae(),F=kt(N);{var E=tt=>{var st=Ro(),ht=h(st),ft=h(ht);$(ft,"src",_t),j(()=>$(st,"style",`  background-color: ${u(p)??""}`)),k(tt,st);},K=tt=>{var st=ae(),ht=kt(st);{var ft=Q=>{var ot=Do();$(ot,"data-src",Wt),re(ot,Y=>A(W,Y),()=>u(W)),j(()=>{$(ot,"src",u(Gt)?Wt:Tt),$(ot,"alt",l().id);}),G("error",ot,()=>{A(X,true),u(W)||console.log(`<${l().index}>[${l().id}] imgElement 丢失.`);}),k(Q,ot);},jt=Q=>{var ot=Fo(),Y=h(ot),ct=h(Y);$(ct,"src",Po),k(Q,ot);};Z(ht,Q=>{l().imageList[0]?Q(ft):Q(jt,false);},true);}k(tt,st);};Z(F,tt=>{s()&&l().category==440?tt(E):tt(K,false);});}k(b,N);},$r=b=>{var N=zo(),F=h(N),E=h(F);$(E,"src",Io);var K=g(F,2);j(tt=>$(K,"style",`color: ${tt??""}; font-size:16px;`),[()=>Pt(u(p))],mt),k(b,N);};Z(Nr,b=>{u(X)?b($r,false):b(Sr);});}var Tr=g(Nr,2);{var Vn=b=>{var N=qo(),F=h(N);j(()=>$(F,"src",xt().ICON.PREVIEW)),G("mouseover",N,E=>{A(z,true),lt.handleMouseOver(E,u(W));}),k(b,N);};Z(Tr,b=>{o()&&!u(X)&&b(Vn);});}var Dt=g(Tr,2),Ue=h(Dt),Vr=h(Ue),Ar=h(Vr),Xe=h(Ar);{var Ir=b=>{var N=Zo(),F=kt(N);_e(F,5,()=>u(f),lr,(E,K)=>{var tt=Bo();j(()=>$(tt,"src",xt().ICON.PIN)),k(E,tt);}),k(b,N);};Z(Xe,b=>{l().status.toppingLevel!="0"&&b(Ir);});}var Pr=g(Xe),An=g(Pr);{var Hr=b=>{var N=Wo();cr(N,"_tag_discount_free",d=="FREE"),cr(N,"_tag_discount_50",d=="PERCENT_50");var F=h(N);j(E=>D(F,`${m[d]??""}${E??""}`),[()=>w?":"+M()+"小时":""],mt),k(b,N);};Z(An,b=>{d!="NORMAL"&&b(Hr);});}var xe=g(Ar,2),Or=g(xe,2),In=h(Or),ue=g(Vr,2);$(ue,"data-href",x);var Ce=h(ue),Pn=g(Ce),Qe=g(ue,2),Ee=h(Qe),Rr=h(Ee),Dr=g(Qe,2),Hn=h(Dr),Fr=h(Hn),Je=g(Dr,2);{var On=b=>{var N=Xo(),F=h(N);{var E=Q=>{var ot=Go();k(Q,ot);};Z(F,Q=>{(Number(l().labels)&1)===1&&Q(E);});}var K=g(F,2);{var tt=Q=>{var ot=jo();k(Q,ot);};Z(K,Q=>{(Number(l().labels)&2)===2&&Q(tt);});}var st=g(K,2);{var ht=Q=>{var ot=Yo();k(Q,ot);};Z(st,Q=>{(Number(l().labels)&4)===4&&Q(ht);});}var ft=g(st,2);{var jt=Q=>{var ot=ae(),Y=kt(ot);_e(Y,1,()=>u(V),lr,(ct,gt)=>{var dt=Uo(),ke=h(dt);j(()=>{$(dt,"style",`background-color: ${u(gt).config.bgColor??""}; color: ${u(gt).config.color??""}`),D(ke,u(gt).key);}),k(ct,dt);}),k(Q,ot);};Z(ft,Q=>{u(V).length!=0&&Q(jt);});}k(b,N);};Z(Je,b=>{(Number(l().labels)||u(V).length)&&b(On);});}var zr=g(Je,2),qr=h(zr),Br=h(qr),Rn=g(zr,2),Zr=h(Rn),Ke=h(Zr);ja(Ke);var Wr=g(Ke,2),Dn=h(Wr),Gr=g(Zr,2),tr=h(Gr),jr=g(tr,2),Fn=h(jr),Yr=g(Gr,2),er=h(Yr),Ur=g(er,2),zn=h(Ur),rr=g(Yr,2),nr=h(rr);re(rr,b=>A(O,b),()=>u(O)),re(Ue,b=>A(it,b),()=>u(it)),re(Dt,b=>A(at,b),()=>u(at));var ar=g(Dt,2);{var qn=b=>{var N=tl(),F=h(N);{var E=ht=>{var ft=Jo(),jt=kt(ft);_e(jt,5,()=>u(f),lr,(Q,ot)=>{var Y=Qo();j(()=>$(Y,"src",xt().ICON.PIN)),k(Q,Y);}),k(ht,ft);};Z(F,ht=>{v().topping&&l().status.toppingLevel!="0"&&ht(E);});}var K=g(F),tt=g(K);{var st=ht=>{var ft=Ko();cr(ft,"_tag_discount_free",d=="FREE"),cr(ft,"_tag_discount_50",d=="PERCENT_50");var jt=h(ft);j(Q=>D(jt,`${m[d]??""}${Q??""}`),[()=>w?":"+M()+"小时":""],mt),k(ht,ft);};Z(tt,ht=>{v().free&&d!="NORMAL"&&ht(st);});}j(()=>D(K,` ${l().index??""}

          `)),k(b,N);};Z(ar,b=>{u(_)||b(qn);});}var Bn=g(ar,2);{var Xr=b=>{var N=el(),F=h(N);j((E,K)=>{$(N,"style",`background-color: ${u(p)??"transparent"}; color:${E??""}`),D(F,K);},[()=>u(p)?Pt(u(p)):"black",()=>T(l().size)],mt),k(b,N);};Z(Bn,b=>{v().size&&!u(_)&&b(Xr);});}var Qr=g(we,2);{var Zn=b=>{var N=ul(),F=h(N);{var E=Y=>{var ct=rl(),gt=h(ct),dt=h(gt);j(()=>D(dt,l().smallDescr)),k(Y,ct);};Z(F,Y=>{v().sub_title&&Y(E);});}var K=g(F,2);{var tt=Y=>{var ct=ol(),gt=h(ct);{var dt=pt=>{var te=nl();k(pt,te);};Z(gt,pt=>{(l().labels&1)===1&&pt(dt);});}var ke=g(gt,2);{var Jr=pt=>{var te=al();k(pt,te);};Z(ke,pt=>{(l().labels&2)===2&&pt(Jr);});}var ir=g(ke,2);{var Wn=pt=>{var te=il();k(pt,te);};Z(ir,pt=>{(l().labels&4)===4&&pt(Wn);});}var Kr=g(ir,2);{var Gn=pt=>{var te=ae(),Ii=kt(te);_e(Ii,1,()=>u(V),lr,(Pi,jn)=>{var Yn=sl(),Hi=h(Yn);j(()=>{$(Yn,"style",`background-color: ${u(jn).config.bgColor??""}; color: ${u(jn).config.color??""}`),D(Hi,u(jn).key);}),k(Pi,Yn);}),k(pt,te);};Z(Kr,pt=>{u(V).length!=0&&pt(Gn);});}k(Y,ct);};Z(K,Y=>{v().tags&&(Number(l().labels)||u(V).length)&&Y(tt);});}var st=g(K,2);{var ht=Y=>{var ct=ll(),gt=h(ct);re(ct,dt=>A(H,dt),()=>u(H)),j(dt=>$(gt,"style",`
              background-color: ${(u(p)?u(p):"transparent")??""};
              color: ${dt??""} ;
              border: 3px solid transparent;
              border-radius: 14px;
              overflow: hidden;
            `),[()=>u(p)?Pt(u(p)):"black"],mt),G("click",gt,dt=>{B(l().id,u(H)),dt.target.style.display="none";}),k(Y,ct);};Z(st,Y=>{v().download_collect&&Y(ht);});}var ft=g(st,2);{var jt=Y=>{var ct=cl(),gt=h(ct),dt=h(gt);j(()=>D(dt,`上传时间:${l().createdDate??""}`)),k(Y,ct);};Z(ft,Y=>{v().upload_time&&Y(jt);});}var Q=g(ft,2);{var ot=Y=>{var ct=vl(),gt=h(ct);ja(gt);var dt=g(gt,2),ke=h(dt),Jr=g(dt,2),ir=g(Jr,2),Wn=h(ir),Kr=g(ir,2),Gn=g(Kr,2),pt=h(Gn);j(()=>{D(ke,l().status.comments),$(Jr,"src",xt().ICON.SEEDERS),D(Wn,l().status.seeders),$(Kr,"src",xt().ICON.LEECHERS),D(pt,l().status.leechers);}),k(Y,ct);};Z(Q,Y=>{v().statistics&&Y(ot);});}j(Y=>$(N,"style",`
        background-color: ${(u(p)?u(p)+"b0":"transparent")??""};
        color: ${Y??""}`),[()=>u(p)?Pt(u(p)):"black"],mt),k(b,N);};Z(Qr,b=>{(v().sub_title||v().tags||v().download_collect||v().upload_time||v().statistics)&&b(Zn);});}re(ve,b=>A(S,b),()=>u(S)),j((b,N)=>{Xt(ve,"--borderRadius",c().enabled?c().value+"px":"0"),$(we,"style",`min-height: ${u(Lt)+24}px;`),Xt(we,"--cateColor",u(p)+"b0"),D(Pr,` ${l().index??""}

              `),$(xe,"style",`background-color: ${u(p)??"transparent"}; color:${b??""}`),$(Or,"style",`background-color: ${u(p)??"transparent"}; color:${b??""}`),D(In,N),$(ue,"style",`
            height: 40px;
            background-color: ${u(p)??"transparent"};
            color: ${b??""}`),$(Ce,"src",u(C)),$(Ce,"alt",u(L)),D(Pn,`    ${u(L)??""}`),$(Ee,"href","/detail/"+l().id),$(Ee,"title",l().name),D(Rr,l().name),D(Fr,l().smallDescr),D(Br,`上传时间:${l().createdDate??""}`),D(Dn,l().status.comments),$(tr,"src",xt().ICON.SEEDERS),D(Fn,l().status.seeders),$(er,"src",xt().ICON.LEECHERS),D(zn,l().status.leechers),$(rr,"style",`
              background-color: ${(u(p)?u(p):"transparent")??""};
              color: ${b??""} ;
              border-radius: 14px;
              overflow: hidden;
            `);},[()=>u(p)?Pt(u(p)):"black",()=>T(l().size)],mt),G("click",xe,je),G("mousedown",Qe,Te(b=>{b.stopPropagation();})),G("mousedown",nr,Te(b=>{b.stopPropagation();})),G("click",nr,Te(b=>{B(l().id,u(O)),b.target.style.display="none";})),G("mouseenter",Dt,()=>{u(W)&&Vt(W,u(W).style.filter="blur(2px)"),Vt(at,u(at).style.opacity="1"),A(_,true);}),G("mousemove",Dt,b=>{A(J,true),u(z)&&u(J)&&lt.handleMouseMove(b);}),G("mouseleave",Dt,()=>{u(W)&&Vt(W,u(W).style.filter="none"),Vt(at,u(at).style.opacity="0"),A(_,false),A(J,false),u(z)&&(A(z,false),lt.clearPreview());}),G("mousedown",Dt,Li(je)),k(t,ve),ce(),n();}var _l=I('<p class="text_center svelte-1vmncc1">没有结果捏</p>'),hl=I('<main><div class="fall_holder svelte-1vmncc1" style=""><!></div></main>');function pl(t,e){var x,V,T,O;le(e,false);const[r,n]=Ge(),a=()=>ut(fr,"$_card_layout",r),i=rt();let s=vt(e,"infoList",8),c=rt(s().data);u(c).length;let v=rt();Ae.get_bg_color(),Object.keys(u(c)).forEach((H,B)=>{Vt(c,u(c)[H].index=B+1);}),console.log("Mteam_Fall:First	"+u(c).length);function o(H,B=true){let z=H.data;console.log("Mteam_Fall:New:	"+z.length),B?(l(),Object.keys(z).forEach((J,lt)=>{z[J].index=lt+1,lt==0&&(z[J].pt_fall_highlight=true);}),A(c,[...z])):(Object.keys(z).forEach((J,lt)=>{z[J].index=lt+1+u(c).length,lt==0&&(z[J].pt_fall_highlight=true);}),A(c,[...u(c),...z]));}function l(){A(c,[]);}function _(H,B){B=="top"&&H.scrollIntoView({behavior:"smooth"}),B=="bottom"&&(H.scrollIntoView({behavior:"auto",block:"end",inline:"nearest"}),H.scrollIntoView({behavior:"auto",block:"end",inline:"nearest"}),H.scrollIntoView({behavior:"auto",block:"end",inline:"nearest"}));}function f(H="top"){_(u(v),H);}let d,w,m;try{d=_r(localStorage.getItem("persist:persist")),w=(V=(x=d.sysinfo)==null?void 0:x.sysConf)==null?void 0:V.TORRENT_LABEL_CONFIG,m=(O=(T=d.sysinfo)==null?void 0:T.categoryList)==null?void 0:O.categorys,w&&yt(Ti,w),m&&yt(Vi,m);}catch(H){console.error(H),console.log(d);}He(()=>u(c),()=>{A(i,[...u(c)]);}),Cn(),ye();var M=hl(),S=h(M),p=h(S);{var y=H=>{yo(H,{animate:true,get items(){return u(i)},get minColWidth(){return a().min},get maxColWidth(){return a().max},get gap(){return a().gap},children:ks,$$slots:{default:(B,z)=>{const J=mt(()=>z.item);dl(B,{get torrentInfo(){return u(J)}});}}});},L=H=>{var B=_l();k(H,B);};Z(p,H=>{u(i).length?H(y):H(L,false);});}re(M,H=>A(v,H),()=>u(v)),k(t,M),Kn(e,"updateList",o),Kn(e,"clearList",l),Kn(e,"focusFall",f);var C=ce({updateList:o,clearList:l,focusFall:f});return n(),C}let gl="0.3.4";var ml=We('<svg class="tgme_logo" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle cx="17" cy="17" fill="#40a9ff" r="17"></circle><path d="m7.06510669 16.9258959c5.22739451-2.1065178 8.71314291-3.4952633 10.45724521-4.1662364 4.9797665-1.9157646 6.0145193-2.2485535 6.6889567-2.2595423.1483363-.0024169.480005.0315855.6948461.192827.1814076.1361492.23132.3200675.2552048.4491519.0238847.1290844.0536269.4231419.0299841.65291-.2698553 2.6225356-1.4375148 8.986738-2.0315537 11.9240228-.2513602 1.2428753-.7499132 1.5088847-1.2290685 1.5496672-1.0413153.0886298-1.8284257-.4857912-2.8369905-1.0972863-1.5782048-.9568691-2.5327083-1.3984317-4.0646293-2.3321592-1.7703998-1.0790837-.212559-1.583655.7963867-2.5529189.2640459-.2536609 4.7753906-4.3097041 4.755976-4.431706-.0070494-.0442984-.1409018-.481649-.2457499-.5678447-.104848-.0861957-.2595946-.0567202-.3712641-.033278-.1582881.0332286-2.6794907 1.5745492-7.5636077 4.6239616-.715635.4545193-1.3638349.6759763-1.9445998.6643712-.64024672-.0127938-1.87182452-.334829-2.78737602-.6100966-1.12296117-.3376271-1.53748501-.4966332-1.45976769-1.0700283.04048-.2986597.32581586-.610598.8560076-.935815z" fill="#fff"></path></g></svg>');function yl(t,e){let r=vt(e,"height",8,34),n=vt(e,"width",8,34);var a=ml();j(()=>{$(a,"height",r()),$(a,"width",n());}),k(t,a);}var bl=I('<div class="modal-overlay svelte-1a87xm5" role="button" aria-hidden="true"><div class="modal-content svelte-1a87xm5" role="button" aria-hidden="true"><div class="modal-header svelte-1a87xm5"><h3 class="svelte-1a87xm5">关于 PT-Fall</h3> <button class="close-btn svelte-1a87xm5">&times;</button></div> <div class="modal-body svelte-1a87xm5"><h4 class="svelte-1a87xm5">PT-Fall 是一个专为 M-team 站点量身定制的瀑布流视图插件</h4> <p class="svelte-1a87xm5">Github: <a href="https://github.com/KesaubeEire/PT_Fall-View" target="_blank">https://github.com/KesaubeEire/PT_Fall-View</a></p> <p class="svelte-1a87xm5">GreaseFork: <a href="https://greasyfork.org/zh-CN/scripts/543925" target="_blank">https://greasyfork.org/zh-CN/scripts/543925</a></p></div></div></div>'),wl=I('<div class="modal-overlay svelte-1a87xm5" role="button" aria-hidden="true"><div class="modal-content svelte-1a87xm5" role="button" aria-hidden="true"><div class="modal-header svelte-1a87xm5"><h3 class="svelte-1a87xm5">FAQ - 常见问题</h3> <button class="close-btn svelte-1a87xm5">&times;</button></div> <div class="modal-body svelte-1a87xm5"><h4 class="svelte-1a87xm5">Q: 如何联系反馈问题</h4> <p class="svelte-1a87xm5"><a class="__btn __btnWide svelte-1a87xm5" href="https://t.me/+Nd_qIisDjQ80ZTc9" target="_blank"><!> &nbsp;Telegram</a></p> <h4 class="svelte-1a87xm5">Q: 找不到悬浮框</h4> <button class="__btn svelte-1a87xm5">重置悬浮框位置</button> <p class="svelte-1a87xm5"><br>可以通过拖拽悬浮框顶部的颜色条来移动悬浮框的位置 <br>从 PTPP 那里来的灵感 ( 感恩 ||T|| 佬 )</p> <h4 class="svelte-1a87xm5">Q: 插件没有生效怎么办</h4> <p class="svelte-1a87xm5">可能是浏览器缓存了请求<br>尝试使用 Ctrl+Shift+R / Ctrl+F5 强制刷新页面</p> <h4 class="svelte-1a87xm5">Q: 如何切换瀑布流视图</h4> <p class="svelte-1a87xm5">点击悬浮面板中的第一个图标(瀑布/列表)按钮<br>即可在瀑布流和原列表视图间切换</p> <h4 class="svelte-1a87xm5">Q: 如何调整卡片布局</h4> <p class="svelte-1a87xm5">点击悬浮面板中的"配置"按钮<br>可以调整卡片的最小 / 最大宽度、间隔等参数</p> <h4 class="svelte-1a87xm5">Q: 快捷键</h4> <p class="svelte-1a87xm5"><span class="modal-code svelte-1a87xm5">x</span> 可以切换瀑布流视图</p> <p class="svelte-1a87xm5"><span class="modal-code svelte-1a87xm5">ESC</span> 可以从 次级菜单 / 配置菜单 / iframe 中退出</p> <h4 class="svelte-1a87xm5">Q: 深色模式颜色有些不对劲怎么办?</h4> <p class="svelte-1a87xm5">先刷新一下试试, 有些字体颜色不能即时更改<br>刷新后就可以了<br>还有颜色不对劲的 telegram 上截图告诉我</p></div></div></div>'),xl=I('<div class="entry_mteam"><div class="ant-typography" style="line-height: 1.5; text-align: center;"><button class="__btn svelte-1a87xm5" id="_ptFall_about">PT-Fall<br><span style="font-weight: 600;"></span></button> <button class="__btn svelte-1a87xm5" id="_ptFall_faq">常见问题<br>FAQ</button></div></div> <!> <!>',1);function Cl(t,e){le(e,false);const[r,n]=Ge(),a=()=>ut(hr,"$_isFallView",r);let i=rt(false),s=rt(false);function c(){A(i,true);}function v(){A(i,false);}function o(){A(s,true);}function l(){A(s,false);}let _=rt();He(()=>a(),()=>{A(_,a()?"#4ff74f":"yellow");}),Cn(),ye();var f=xl();G("keydown",pr,x=>{x.key==="Escape"&&(v(),l());},true);var d=kt(f),w=h(d),m=h(w),M=g(h(m),2);M.textContent=`[v${gl}]`;var S=g(m,2),p=g(d,2);{var y=x=>{var V=bl(),T=h(V),O=h(T),H=g(h(O),2);j(B=>$(T,"style",B),[()=>`color: ${Pt("var(--bg-3)")}`],mt),G("click",H,l),G("click",T,Te(function(B){qa.call(this,e,B);})),Oe(3,V,()=>Re,()=>({duration:200})),G("click",V,l),k(x,V);};Z(p,x=>{u(s)&&x(y);});}var L=g(p,2);{var C=x=>{var V=wl(),T=h(V),O=h(T),H=g(h(O),2),B=g(O,2),z=g(h(B),2),J=h(z),lt=h(J);yl(lt,{height:24,width:24});var at=g(z,4),it=g(at,18),Lt=h(it),P=g(it,2),X=h(P);j((_t,Tt,Wt)=>{$(T,"style",_t),$(J,"style",Tt),Xt(J,"--hover","#40a9ff"),$(at,"style",Tt),Xt(at,"--hover","#40a9ff"),$(Lt,"style",Wt),$(X,"style",Wt);},[()=>`color: ${Pt("var(--bg-3)")}`,()=>`color: ${Pt("var(--bg-2)")}`,()=>`color: ${Pt("var(--bg-1)")}`],mt),G("click",H,v),G("click",at,()=>{yt(va,{x:0,y:0});}),G("click",T,Te(function(_t){qa.call(this,e,_t);})),Oe(3,V,()=>Re,()=>({duration:200})),G("click",V,v),k(x,V);};Z(L,x=>{u(i)&&x(C);});}j(x=>{$(m,"style",x),Xt(m,"--hover","green"),Xt(M,"color",u(_)),$(S,"style",x),Xt(S,"--hover","#40a9ff");},[()=>`color: ${Pt("var(--bg-2)")}`],mt),G("click",m,o),G("click",S,c),k(t,f),ce(),n();}function El(t,e){le(e,false);const[r,n]=Ge(),a=()=>ut(hr,"$_isFallView",r);let i,s,c,v=true;const o=document.createElement("div");o.classList.add("Fall_DOM"),Ne(Ae.TL_Selector,l),Ne('a[href="/index"][target="_self"]',p=>{if(i)Ve.error("未找到目标链接元素"),console.warn("[FALL]: 未找到目标链接元素");else {p.insertAdjacentHTML("afterend",'<div class="ptFallReadme"></div>');const y=p.parentNode.querySelector(".ptFallReadme");i=br(Cl,{target:y});}}),Sn(()=>{console.log("=====> 启动劫持 pushState 方法 <====="),S();});function l(p){if(p.parentNode){console.log("元素已找到，正在插入兄弟节点:",p),co();const y={path:"/search",method:"POST"};window.addEventListener("req>POST->/search",L=>{console.log(`<PT-Fall>[Request]  (${y.method} -> ${y.path})
`,L.detail),v=true,v?s&&s.focusFall():s&&s.focusFall("bottom");}),window.addEventListener("res>POST->/search",L=>{const C=JSON.parse(L.detail.data);console.log(`<PT-Fall>[Response] (${y.method}->${y.path})[通过事件捕获]:
`,C),m(a()),_(p),Ve.success("捕获到 /search !"),c=C.data,s?s.updateList(c,v):s=br(pl,{target:o,props:{infoList:c}});});}else Ve.error(`找不到指定节点
若总是如此请报告bug`),console.error("无法插入：目标元素没有父节点");}function _(p){const y=p.parentNode.querySelector(".ant-spin-nested-loading"),L=document.createElement("div");L.id="_shield",L.addEventListener("click",()=>{confirm(`[PT-Fall]
如果你认为你被阻挡了请点击确认
这个阻挡效果会被取消
这可能导致显示错误
请确认您不在一般的瀑布流视图下
比如您在逛论坛或者在发种之类的被遮挡了再点`)&&(L.style.display="none");}),y.querySelector("#_shield")||y.appendChild(L);const C=document.createElement("div");C.id="_fallHolder",y.querySelector("#_fallHolder")||(y.appendChild(C),C.appendChild(o));}let f="",d="",w="";function m(p){o.style.display=p?"block":"none",Ne("#_fallHolder",y=>{y.style.display=p?"block":"none";}),Ne("#_shield",y=>{y.style.display=p?"block":"none";}),Ne(Ae.TL_Selector+".flex",y=>{d||(d=getComputedStyle(y).getPropertyValue("max-width"),w=getComputedStyle(y).getPropertyValue("padding-left")),y.style.maxWidth=p?"none":d,y.style.paddingLeft=p?"80px":w,y.style.paddingRight=p?"80px":w;}),Ne(Ae.TL_Selector+" .mx-auto",y=>{f||(f=y.style.margin),y.style.margin=p?0:f;});}window.changeFallView=m;const M=history.pushState;function S(){history.pushState=function(p,y,L){console.log(`%c ====> URL跳转劫持: %c${L}`,"color: cyan","color: white"),L.includes("/browse")||L=="/waterfall"?console.log(`--->属于 browse 范围: ${L}`):(console.warn(`[FALL]: --->不属于 browse 范围: ${L}`),m(false)),M.apply(history,arguments);};}ye(),ce(),n();}function kl(t){if(location.hostname.includes("m-team"))return Ae}var Ll=I('<div class="switch-container svelte-18ntgfp"><div class="switch-background svelte-18ntgfp"><div class="switch-slider svelte-18ntgfp"></div></div></div>');function Mt(t,e){let r=vt(e,"checked",12,false);function n(){r(!r());}var a=Ll(),i=h(a),s=h(i);j(()=>cr(s,"checked",r())),G("click",a,n),k(t,a);}var Ml=We(`<svg viewBox="0 0 32 32" width="20" height="20" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><defs><style>.cls-1 {
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2px;
      }</style></defs><g data-name="43-browser" id="_43-browser"><rect class="cls-1" height="30" width="30" x="1" y="1"></rect><line class="cls-1" x1="1" x2="31" y1="9" y2="9"></line><line class="cls-1" x1="5" x2="7" y1="5" y2="5"></line><line class="cls-1" x1="11" x2="13" y1="5" y2="5"></line><line class="cls-1" x1="9" x2="25" y1="16" y2="16"></line><line class="cls-1" x1="7" x2="25" y1="20" y2="20"></line><line class="cls-1" x1="7" x2="25" y1="24" y2="24"></line></g></svg>`);function Nl(t){var e=Ml();k(t,e);}var Sl=We(`<svg width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><defs><style>.cls-1 {
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2px;
      }</style></defs><g data-name="80-setting" id="_80-setting"><circle class="cls-1" cx="10" cy="6" r="3"></circle><circle class="cls-1" cx="22" cy="16" r="3"></circle><circle class="cls-1" cx="10" cy="26" r="3"></circle><line class="cls-1" x1="7" x2="1" y1="6" y2="6"></line><line class="cls-1" x1="15" x2="1" y1="16" y2="16"></line><line class="cls-1" x1="7" x2="1" y1="26" y2="26"></line><line class="cls-1" x1="31" x2="17" y1="26" y2="26"></line><line class="cls-1" x1="31" x2="25" y1="16" y2="16"></line><line class="cls-1" x1="31" x2="17" y1="6" y2="6"></line></g></svg>`);function $l(t){var e=Sl();k(t,e);}var Tl=We('<svg enable-background="new 0 0 64 64" width="20" height="20" id="Layer_1" version="1.1" viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19,2.875H3.5c-0.829,0-1.5,0.671-1.5,1.5v19.979c0,0.829,0.671,1.5,1.5,1.5H19c0.829,0,1.5-0.671,1.5-1.5V4.375  C20.5,3.546,19.829,2.875,19,2.875z M17.5,22.854H5V5.875h12.5V22.854z"></path><path d="M19,28.773H3.5c-0.829,0-1.5,0.671-1.5,1.5v6.166c0,0.828,0.671,1.5,1.5,1.5H19c0.829,0,1.5-0.672,1.5-1.5v-6.166  C20.5,29.445,19.829,28.773,19,28.773z M17.5,34.939H5v-3.166h12.5V34.939z"></path><path d="M19,40.859H3.5c-0.829,0-1.5,0.672-1.5,1.5v17.266c0,0.828,0.671,1.5,1.5,1.5H19c0.829,0,1.5-0.672,1.5-1.5V42.359  C20.5,41.531,19.829,40.859,19,40.859z M17.5,58.125H5V43.859h12.5V58.125z"></path><path d="M40,2.875H24.5c-0.829,0-1.5,0.671-1.5,1.5v14.25c0,0.829,0.671,1.5,1.5,1.5H40c0.828,0,1.5-0.671,1.5-1.5V4.375  C41.5,3.546,40.828,2.875,40,2.875z M38.5,17.125H26V5.875h12.5V17.125z"></path><path d="M40,23.125H24.5c-0.829,0-1.5,0.671-1.5,1.5V46.5c0,0.828,0.671,1.5,1.5,1.5H40c0.828,0,1.5-0.672,1.5-1.5V24.625  C41.5,23.796,40.828,23.125,40,23.125z M38.5,45H26V26.125h12.5V45z"></path><path d="M40,51H24.5c-0.829,0-1.5,0.672-1.5,1.5v7.125c0,0.828,0.671,1.5,1.5,1.5H40c0.828,0,1.5-0.672,1.5-1.5V52.5  C41.5,51.672,40.828,51,40,51z M38.5,58.125H26V54h12.5V58.125z"></path><path d="M60.5,2.875H45c-0.828,0-1.5,0.671-1.5,1.5v35.171c0,0.828,0.672,1.5,1.5,1.5h15.5c0.828,0,1.5-0.672,1.5-1.5V4.375  C62,3.546,61.328,2.875,60.5,2.875z M59,38.046H46.5V5.875H59V38.046z"></path><path d="M60.5,44.346H45c-0.828,0-1.5,0.672-1.5,1.5v13.779c0,0.828,0.672,1.5,1.5,1.5h15.5c0.828,0,1.5-0.672,1.5-1.5V45.846  C62,45.018,61.328,44.346,60.5,44.346z M59,58.125H46.5V47.346H59V58.125z"></path></svg>');function Vl(t){var e=Tl();k(t,e);}var Al=I('<div><!></div> <div class="flowBtn_text svelte-3a4txt">瀑布</div>',1),Il=I('<div><!></div> <div class="flowBtn_text svelte-3a4txt">列表</div>',1),Pl=I('<div class="config-item svelte-3a4txt"><span> </span> <input type="range" min="0" max="40" step="1" class="svelte-3a4txt"></div>'),Hl=I('<div class="config-menu-overlay svelte-3a4txt"><div class="config-menu svelte-3a4txt"><div class="config-menu-header svelte-3a4txt"><span style="font-size: 18px; font-weight: bold;">配置菜单</span> <button class="close-btn svelte-3a4txt">&times;</button></div> <div class="config-menu-content svelte-3a4txt"><h3 class="svelte-3a4txt"># 卡片布局</h3> <div class="config-item svelte-3a4txt"><span> </span> <input type="range" min="200" step="1" list="values" class="svelte-3a4txt"></div> <div class="config-item svelte-3a4txt"><span> </span> <input type="range" step="1" list="values" class="svelte-3a4txt"></div> <div class="config-item svelte-3a4txt"><span> </span> <input type="range" min="0" max="100" step="1" list="values" class="svelte-3a4txt"></div> <div class="config-item svelte-3a4txt"><span> </span> <!></div> <h3 class="svelte-3a4txt"># 卡片常驻信息展示</h3>  <div class="config-item svelte-3a4txt"><span> </span> <!></div> <div class="config-item svelte-3a4txt"><span> </span> <!></div> <div class="config-item svelte-3a4txt"><span> </span> <!></div> <div class="config-item svelte-3a4txt"><span> </span> <!></div> <div class="config-item svelte-3a4txt"><span> </span> <!></div> <div class="config-item svelte-3a4txt"><span> </span> <!></div> <div class="config-item svelte-3a4txt"><span> </span> <!></div> <div class="config-item svelte-3a4txt"><span> </span> <!></div> <div class="config-item svelte-3a4txt"><span> </span> <!></div> <div class="config-item svelte-3a4txt"><span> </span> <!></div> <h3 class="svelte-3a4txt"># 卡片屏蔽</h3> <div class="config-item svelte-3a4txt"><span> </span> <!></div> <h3 class="svelte-3a4txt"># 卡片样式</h3> <div class="config-item svelte-3a4txt"><span> </span> <!></div> <!></div></div></div>'),Ol=I('<div class="flowP svelte-3a4txt"><div class="flowPDragger svelte-3a4txt" role="button" tabindex="0" aria-hidden="true"></div> <div class="flowPHolder ant-typography svelte-3a4txt"><button class="flowBtn svelte-3a4txt"><!></button> <button class="flowBtn svelte-3a4txt"><div><!></div> <div class="flowBtn_text svelte-3a4txt">配置</div></button> <button class="flowBtn svelte-3a4txt">清除悬浮预览图</button></div></div> <!>',1);function Rl(t,e){le(e,false);const[r,n]=Ge(),a=()=>ut(va,"$_panelPos",r),i=()=>ut(hr,"$_isFallView",r),s=()=>ut(ur,"$_side_panel_switch",r),c=()=>ut(fr,"$_card_layout",r),v=()=>ut(ua,"$_show_hover_pic",r),o=()=>ut(At,"$_card_detail",r),l=()=>ut(fa,"$_block_gay",r),_=()=>ut(sn,"$_card_radius",r);let f=rt(),d=false,w=0,m=0;function M(P,X,_t){return P<=X&&(P=X),P>=_t&&(P=_t),P}const S=P=>{P.preventDefault(),d=true,w=P.clientX-u(f).getBoundingClientRect().left,m=P.clientY-u(f).getBoundingClientRect().top;},p=P=>{if(!d)return;const X=M(P.clientX-w,0,window.innerWidth-(u(f).getBoundingClientRect().width+5)),_t=M(P.clientY-m,0,window.innerHeight-(u(f).getBoundingClientRect().height+5));yt(va,{x:X,y:_t});},y=()=>{d=false;};Sn(()=>(window.addEventListener("mousemove",p),window.addEventListener("mouseup",y),()=>{window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",y);})),ye();var L=Ol();G("keydown",pr,P=>{P.key==="x"&&(yt(hr,!i()),window.changeFallView(i()));},true);var C=kt(L),x=h(C),V=g(x,2),T=h(V),O=h(T);{var H=P=>{var X=Al(),_t=kt(X),Tt=h(_t);Vl(Tt),k(P,X);},B=P=>{var X=Il(),_t=kt(X),Tt=h(_t);Nl(Tt),k(P,X);};Z(O,P=>{i()?P(H):P(B,false);});}var z=g(T,2),J=h(z),lt=h(J);$l(lt);var at=g(z,2);re(C,P=>A(f,P),()=>u(f));var it=g(C,2);{var Lt=P=>{var X=Hl(),_t=h(X),Tt=h(_t),Wt=g(h(Tt),2),W=g(Tt,2),Kt=g(h(W),2),Gt=h(Kt),$n=h(Gt),je=g(Gt,2),ve=g(Kt,2),Ye=h(ve),Tn=h(Ye),be=g(Ye,2),Lr=g(ve,2),Mr=h(Lr),we=h(Mr),Nr=g(Mr,2),Sr=g(Lr,2),$r=h(Sr),Tr=h($r),Vn=g($r,2);Mt(Vn,{get checked(){return Ba(),v()},set checked(E){yt(ua,E);},$$legacy:true});var Dt=g(Sr,4),Ue=h(Dt),Vr=h(Ue),Ar=g(Ue,2);Mt(Ar,{get checked(){return o().category},set checked(E){wt(At,R(o).category=E,R(o));},$$legacy:true});var Xe=g(Dt,2),Ir=h(Xe),Pr=h(Ir),An=g(Ir,2);Mt(An,{get checked(){return o().title},set checked(E){wt(At,R(o).title=E,R(o));},$$legacy:true});var Hr=g(Xe,2),xe=h(Hr),Or=h(xe),In=g(xe,2);Mt(In,{get checked(){return o().topping},set checked(E){wt(At,R(o).topping=E,R(o));},$$legacy:true});var ue=g(Hr,2),Ce=h(ue),Pn=h(Ce),Qe=g(Ce,2);Mt(Qe,{get checked(){return o().free},set checked(E){wt(At,R(o).free=E,R(o));},$$legacy:true});var Ee=g(ue,2),Rr=h(Ee),Dr=h(Rr),Hn=g(Rr,2);Mt(Hn,{get checked(){return o().size},set checked(E){wt(At,R(o).size=E,R(o));},$$legacy:true});var Fr=g(Ee,2),Je=h(Fr),On=h(Je),zr=g(Je,2);Mt(zr,{get checked(){return o().sub_title},set checked(E){wt(At,R(o).sub_title=E,R(o));},$$legacy:true});var qr=g(Fr,2),Br=h(qr),Rn=h(Br),Zr=g(Br,2);Mt(Zr,{get checked(){return o().tags},set checked(E){wt(At,R(o).tags=E,R(o));},$$legacy:true});var Ke=g(qr,2),Wr=h(Ke),Dn=h(Wr),Gr=g(Wr,2);Mt(Gr,{get checked(){return o().download_collect},set checked(E){wt(At,R(o).download_collect=E,R(o));},$$legacy:true});var tr=g(Ke,2),jr=h(tr),Fn=h(jr),Yr=g(jr,2);Mt(Yr,{get checked(){return o().upload_time},set checked(E){wt(At,R(o).upload_time=E,R(o));},$$legacy:true});var er=g(tr,2),Ur=h(er),zn=h(Ur),rr=g(Ur,2);Mt(rr,{get checked(){return o().statistics},set checked(E){wt(At,R(o).statistics=E,R(o));},$$legacy:true});var nr=g(er,4),ar=h(nr),qn=h(ar),Bn=g(ar,2);Mt(Bn,{get checked(){return Ba(),l()},set checked(E){yt(fa,E);},$$legacy:true});var Xr=g(nr,4),Qr=h(Xr),Zn=h(Qr),b=g(Qr,2);Mt(b,{get checked(){return _().enabled},set checked(E){wt(sn,R(_).enabled=E,R(_));},$$legacy:true});var N=g(Xr,2);{var F=E=>{var K=Pl(),tt=h(K),st=h(tt),ht=g(tt,2);j(()=>D(st,`圆角大小: ${_().value??""} px`)),en(ht,()=>_().value,ft=>wt(sn,R(_).value=ft,R(_))),k(E,K);};Z(N,E=>{_().enabled&&E(F);});}j((E,K,tt,st)=>{$(_t,"style",`background-color: ${E??""};`),D($n,`最小宽度: ${c().min??""} px`),$(je,"max",K),D(Tn,`最大宽度: ${c().max??""} px`),$(be,"min",tt),$(be,"max",st),D(we,`卡片间隔: ${c().gap??""} px`),D(Tr,`显示鼠标悬浮预览大图: ${v()??""}`),D(Vr,`分区: ${o().category??""}`),D(Pr,`标题: ${o().title??""}`),D(Or,`置顶: ${o().topping??""}`),D(Pn,`免费: ${o().free??""}`),D(Dr,`大小: ${o().size??""}`),D(On,`副标题: ${o().sub_title??""}`),D(Rn,`标签: ${o().tags??""}`),D(Dn,`下载&收藏: ${o().download_collect??""}`),D(Fn,`上传时间: ${o().upload_time??""}`),D(zn,`评论/上传/下载: ${o().statistics??""}`),D(qn,`屏蔽 gay 区: ${l()??""}`),D(Zn,`自定义圆角: ${_().enabled??""}`);},[()=>kl().get_bg_color(),()=>Math.max(400,c().max),()=>Math.min(200,c().min),()=>Math.max(800,c().min*2)],mt),G("click",Wt,()=>yt(ur,false)),en(je,()=>c().min,E=>wt(fr,R(c).min=E,R(c))),en(be,()=>c().max,E=>wt(fr,R(c).max=E,R(c))),en(Nr,()=>c().gap,E=>wt(fr,R(c).gap=E,R(c))),Oe(3,X,()=>Re,()=>({duration:100})),G("click",X,Li(()=>yt(ur,false))),k(P,X);};Z(it,P=>{s()&&P(Lt);});}j(P=>{$(C,"style",`top:${a().y??""}px; left:${a().x??""}px;`),Xt(C,"--isFallView",i()?"#4ff74f":"yellow"),Xt(V,"--get-text-color",P);},[()=>Pt("var(--bg-2)")],mt),G("mousedown",x,S),G("click",T,()=>{yt(hr,!i()),window.changeFallView(i());}),G("click",z,()=>{yt(ur,!s());}),G("click",at,()=>{window.__clearPreview();}),k(t,L),ce(),n();}var Dl=We('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_iconCarrier"><circle cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="1.5"></circle><path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path></g></svg>');function Fl(t){var e=Dl();k(t,e);}var zl=I('<div id="_iframe" class="svelte-1axpxde"><div class="_iframe svelte-1axpxde"><iframe frameborder="0" style="width: 1000px;" class="svelte-1axpxde"></iframe> <div class="_iframeCloseBtn svelte-1axpxde"><!></div></div></div>');function ql(t,e){le(e,false);const[r,n]=Ge(),a=()=>ut(an,"$_iframe_switch",r),i=()=>ut($i,"$_iframe_url",r);let s=vt(e,"_app",8),c;function v(){yt(an,0);}function o(d){d.key==="Escape"&&(console.log(d),yt(an,0),yt(ur,false));}c=true,c&&br(El,{target:s()}),br(Rl,{target:s()}),console.log("-------------->  PT_Fall Launch   <--------------"),ye();var l=ae();G("keydown",pr,o,true);var _=kt(l);{var f=d=>{var w=zl(),m=h(w),M=h(m),S=g(M,2),p=h(S);Fl(p),j(()=>{$(M,"src",i()),$(M,"title",i());}),G("load",M,y=>{const L=y.target.contentDocument||y.target.contentWindow.document;if(!L){console.error("无法访问iframe内容文档, 可能是由于跨域限制。"),Ve.error("无法访问iframe内容文档, 可能是由于跨域限制。");return}const C=()=>{const V=L.querySelector(".ant-card.detail-view");V&&(V.scrollIntoView({behavior:"smooth"}),console.log("成功滚动到目标元素！"),clearInterval(x));},x=setInterval(C,500);C();}),G("click",M,Te(y=>{y.stopPropagation();})),G("click",S,v),G("click",w,v),Oe(3,w,()=>Re,()=>({duration:300})),k(d,w);};Z(_,d=>{a()&&d(f);});}k(t,l),ce(),n();}const da=document.createElement("div");document.body.append(da);br(ql,{target:da,props:{_app:da}});

})();