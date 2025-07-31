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

      var Di=Object.defineProperty;var Ma=t=>{throw TypeError(t)};var Fi=(t,e,r)=>e in t?Di(t,e,{enumerable:true,configurable:true,writable:true,value:r}):t[e]=r;var Na=(t,e,r)=>Fi(t,e+"",r),Xn=(t,e,r)=>e.has(t)||Ma("Cannot "+r);var jt=(t,e,r)=>(Xn(t,e,"read from private field"),r?r.call(t):e.get(t)),sr=(t,e,r)=>e.has(t)?Ma("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),Qn=(t,e,r,n)=>(Xn(t,e,"write to private field"),e.set(t,r),r),Sa=(t,e,r)=>(Xn(t,e,"access private method"),r);var En=Array.isArray,zi=Array.prototype.indexOf,ha=Array.from,Ua=Object.defineProperty,pe=Object.getOwnPropertyDescriptor,Xa=Object.getOwnPropertyDescriptors,qi=Object.prototype,Bi=Array.prototype,pa=Object.getPrototypeOf;function Zi(t){return typeof t=="function"}const Dt=()=>{};function Wi(t){return t()}function ea(t){for(var e=0;e<t.length;e++)t[e]();}const $t=2,Qa=4,xr=8,kn=16,Zt=32,De=64,dn=128,me=256,_n=512,wt=1024,se=2048,ye=4096,zt=8192,Fe=16384,Ja=32768,Ln=65536,Gi=1<<17,ji=1<<19,Ka=1<<20,ge=Symbol("$state"),Yi=Symbol("legacy props"),Ui=Symbol("");function ti(t){return t===this.v}function ei(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function ga(t){return !ei(t,this.v)}function Xi(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Qi(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Ji(t){throw new Error("https://svelte.dev/e/effect_orphan")}function Ki(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ts(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function es(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function rs(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ns(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function as(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let ze=false;function is(){ze=true;}const ma=1,ya=2,ri=4,ss=8,os=16,ls=1,cs=2,us=4,vs=8,fs=16,ds=1,_s=2,hs=4,ps=1,gs=2,Et=Symbol();function St(t,e){var r={f:0,v:t,reactions:null,equals:ti,rv:0,wv:0};return r}function Mn(t,e=false){var n;const r=St(t);return e||(r.equals=ga),ze&&tt!==null&&tt.l!==null&&((n=tt.l).s??(n.s=[])).push(r),r}function et(t,e=false){return ms(Mn(t,e))}function ms(t){return rt!==null&&!Jt&&rt.f&$t&&(qt===null?Ns([t]):qt.push(t)),t}function Vt(t,e){return P(t,I(()=>v(t))),e}function P(t,e){return rt!==null&&!Jt&&kr()&&rt.f&($t|kn)&&(qt===null||!qt.includes(t))&&as(),ra(t,e)}function ra(t,e){return t.equals(e)||(t.v,t.v=e,t.wv=yi(),ni(t,se),kr()&&X!==null&&X.f&wt&&!(X.f&(Zt|De))&&(Yt===null?Ss([t]):Yt.push(t))),e}function ni(t,e){var r=t.reactions;if(r!==null)for(var n=kr(),a=r.length,i=0;i<a;i++){var o=r[i],c=o.f;c&se||!n&&o===X||(Ht(o,e),c&(wt|me)&&(c&$t?ni(o,ye):An(o)));}}let ai=false;function Ne(t,e=null,r){if(typeof t!="object"||t===null||ge in t)return t;const n=pa(t);if(n!==qi&&n!==Bi)return t;var a=new Map,i=En(t),o=St(0);i&&a.set("length",St(t.length));var c;return new Proxy(t,{defineProperty(l,u,s){(!("value"in s)||s.configurable===false||s.enumerable===false||s.writable===false)&&es();var _=a.get(u);return _===undefined?(_=St(s.value),a.set(u,_)):P(_,Ne(s.value,c)),true},deleteProperty(l,u){var s=a.get(u);if(s===undefined)u in l&&a.set(u,St(Et));else {if(i&&typeof u=="string"){var _=a.get("length"),f=Number(u);Number.isInteger(f)&&f<_.v&&P(_,f);}P(s,Et),$a(o);}return  true},get(l,u,s){var w;if(u===ge)return t;var _=a.get(u),f=u in l;if(_===undefined&&(!f||(w=pe(l,u))!=null&&w.writable)&&(_=St(Ne(f?l[u]:Et,c)),a.set(u,_)),_!==undefined){var d=v(_);return d===Et?undefined:d}return Reflect.get(l,u,s)},getOwnPropertyDescriptor(l,u){var s=Reflect.getOwnPropertyDescriptor(l,u);if(s&&"value"in s){var _=a.get(u);_&&(s.value=v(_));}else if(s===undefined){var f=a.get(u),d=f==null?undefined:f.v;if(f!==undefined&&d!==Et)return {enumerable:true,configurable:true,value:d,writable:true}}return s},has(l,u){var d;if(u===ge)return  true;var s=a.get(u),_=s!==undefined&&s.v!==Et||Reflect.has(l,u);if(s!==undefined||X!==null&&(!_||(d=pe(l,u))!=null&&d.writable)){s===undefined&&(s=St(_?Ne(l[u],c):Et),a.set(u,s));var f=v(s);if(f===Et)return  false}return _},set(l,u,s,_){var C;var f=a.get(u),d=u in l;if(i&&u==="length")for(var w=s;w<f.v;w+=1){var m=a.get(w+"");m!==undefined?P(m,Et):w in l&&(m=St(Et),a.set(w+"",m));}f===undefined?(!d||(C=pe(l,u))!=null&&C.writable)&&(f=St(undefined),P(f,Ne(s,c)),a.set(u,f)):(d=f.v!==Et,P(f,Ne(s,c)));var k=Reflect.getOwnPropertyDescriptor(l,u);if(k!=null&&k.set&&k.set.call(_,s),!d){if(i&&typeof u=="string"){var $=a.get("length"),g=Number(u);Number.isInteger(g)&&g>=$.v&&P($,g+1);}$a(o);}return  true},ownKeys(l){v(o);var u=Reflect.ownKeys(l).filter(f=>{var d=a.get(f);return d===undefined||d.v!==Et});for(var[s,_]of a)_.v!==Et&&!(s in l)&&u.push(s);return u},setPrototypeOf(){rs();}})}function $a(t,e=1){P(t,t.v+e);}var pr,ii,si;function ys(){if(pr===undefined){pr=window;var t=Element.prototype,e=Node.prototype;ii=pe(e,"firstChild").get,si=pe(e,"nextSibling").get,t.__click=undefined,t.__className="",t.__attributes=null,t.__styles=null,t.__e=undefined,Text.prototype.__t=undefined;}}function ba(t=""){return document.createTextNode(t)}function Ie(t){return ii.call(t)}function Nn(t){return si.call(t)}function h(t,e){return Ie(t)}function Lt(t,e){{var r=Ie(t);return r instanceof Comment&&r.data===""?Nn(r):r}}function p(t,e=1,r=false){let n=t;for(;e--;)n=Nn(n);return n}function bs(t){t.textContent="";}function gr(t){var e=$t|se;X===null?e|=me:X.f|=Ka;var r=rt!==null&&rt.f&$t?rt:null;const n={children:null,ctx:tt,deps:null,equals:ti,f:e,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??X};return r!==null&&(r.children??(r.children=[])).push(n),n}function At(t){const e=gr(t);return e.equals=ga,e}function oi(t){var e=t.children;if(e!==null){t.children=null;for(var r=0;r<e.length;r+=1){var n=e[r];n.f&$t?wa(n):ie(n);}}}function ws(t){for(var e=t.parent;e!==null;){if(!(e.f&$t))return e;e=e.parent;}return null}function li(t){var e,r=X;Pt(ws(t));try{oi(t),e=wi(t);}finally{Pt(r);}return e}function ci(t){var e=li(t),r=(de||t.f&me)&&t.deps!==null?ye:wt;Ht(t,r),t.equals(e)||(t.v=e,t.wv=yi());}function wa(t){oi(t),yr(t,0),Ht(t,Fe),t.v=t.children=t.deps=t.ctx=t.reactions=null;}function ui(t){X===null&&rt===null&&Ji(),rt!==null&&rt.f&me&&Qi(),ka&&Xi();}function xs(t,e){var r=e.last;r===null?e.last=e.first=t:(r.next=t,t.prev=r,e.last=t);}function qe(t,e,r,n=true){var a=(t&De)!==0,i=X,o={ctx:tt,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|se,first:null,fn:e,last:null,next:null,parent:a?null:i,prev:null,teardown:null,transitions:null,wv:0};if(r){var c=$e;try{Va(!0),Tn(o),o.f|=Ja;}catch(s){throw ie(o),s}finally{Va(c);}}else e!==null&&An(o);var l=r&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&(Ka|dn))===0;if(!l&&!a&&n&&(i!==null&&xs(o,i),rt!==null&&rt.f&$t)){var u=rt;(u.children??(u.children=[])).push(o);}return o}function xa(t){const e=qe(xr,null,false);return Ht(e,wt),e.teardown=t,e}function na(t){ui();var e=X!==null&&(X.f&Zt)!==0&&tt!==null&&!tt.m;if(e){var r=tt;(r.e??(r.e=[])).push({fn:t,effect:X,reaction:rt});}else {var n=Cr(t);return n}}function Cs(t){return ui(),Er(t)}function Es(t){const e=qe(De,t,true);return (r={})=>new Promise(n=>{r.outro?hn(e,()=>{ie(e),n(undefined);}):(ie(e),n(undefined));})}function Cr(t){return qe(Qa,t,false)}function Pe(t,e){var r=tt,n={effect:null,ran:false};r.l.r1.push(n),n.effect=Er(()=>{t(),!n.ran&&(n.ran=true,P(r.l.r2,true),I(e));});}function Sn(){var t=tt;Er(()=>{if(v(t.l.r2)){for(var e of t.l.r1){var r=e.effect;r.f&wt&&Ht(r,ye),Be(r)&&Tn(r),e.ran=false;}t.l.r2.v=false;}});}function Er(t){return qe(xr,t,true)}function j(t,e=[],r=gr){const n=e.map(r);return Ca(()=>t(...n.map(v)))}function Ca(t,e=0){return qe(xr|kn|e,t,true)}function mr(t,e=true){return qe(xr|Zt,t,true,e)}function vi(t){var e=t.teardown;if(e!==null){const r=ka,n=rt;Ta(true),Bt(null);try{e.call(null);}finally{Ta(r),Bt(n);}}}function fi(t){var e=t.deriveds;if(e!==null){t.deriveds=null;for(var r=0;r<e.length;r+=1)wa(e[r]);}}function di(t,e=false){var r=t.first;for(t.first=t.last=null;r!==null;){var n=r.next;ie(r,e),r=n;}}function ks(t){for(var e=t.first;e!==null;){var r=e.next;e.f&Zt||ie(e),e=r;}}function ie(t,e=true){var r=false;if((e||t.f&ji)&&t.nodes_start!==null){for(var n=t.nodes_start,a=t.nodes_end;n!==null;){var i=n===a?null:Nn(n);n.remove(),n=i;}r=true;}di(t,e&&!r),fi(t),yr(t,0),Ht(t,Fe);var o=t.transitions;if(o!==null)for(const l of o)l.stop();vi(t);var c=t.parent;c!==null&&c.first!==null&&_i(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null;}function _i(t){var e=t.parent,r=t.prev,n=t.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),e!==null&&(e.first===t&&(e.first=n),e.last===t&&(e.last=r));}function hn(t,e){var r=[];Ea(t,r,true),hi(r,()=>{ie(t),e&&e();});}function hi(t,e){var r=t.length;if(r>0){var n=()=>--r||e();for(var a of t)a.out(n);}else e();}function Ea(t,e,r){if(!(t.f&zt)){if(t.f^=zt,t.transitions!==null)for(const o of t.transitions)(o.is_global||r)&&e.push(o);for(var n=t.first;n!==null;){var a=n.next,i=(n.f&Ln)!==0||(n.f&Zt)!==0;Ea(n,e,i?r:false),n=a;}}}function pn(t){pi(t,true);}function pi(t,e){if(t.f&zt){t.f^=zt,t.f&wt||(t.f^=wt),Be(t)&&(Ht(t,se),An(t));for(var r=t.first;r!==null;){var n=r.next,a=(r.f&Ln)!==0||(r.f&Zt)!==0;pi(r,a?e:false),r=n;}if(t.transitions!==null)for(const i of t.transitions)(i.is_global||e)&&i.in();}}let aa=false,ia=[];function Ls(){aa=false;const t=ia.slice();ia=[],ea(t);}function $n(t){aa||(aa=true,queueMicrotask(Ls)),ia.push(t);}function Ms(){throw new Error("https://svelte.dev/e/invalid_default_snippet")}function gi(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let cn=false,gn=false,mn=null,$e=false,ka=false;function Va(t){$e=t;}function Ta(t){ka=t;}let sa=[],dr=0;let rt=null,Jt=false;function Bt(t){rt=t;}let X=null;function Pt(t){X=t;}let qt=null;function Ns(t){qt=t;}let kt=null,Nt=0,Yt=null;function Ss(t){Yt=t;}let mi=1,yn=0,de=false,tt=null;function yi(){return ++mi}function kr(){return !ze||tt!==null&&tt.l===null}function Be(t){var u;var e=t.f;if(e&se)return  true;if(e&ye){var r=t.deps,n=(e&me)!==0;if(r!==null){var a,i,o=(e&_n)!==0,c=n&&X!==null&&!de,l=r.length;if(o||c){for(a=0;a<l;a++)i=r[a],(o||!((u=i==null?undefined:i.reactions)!=null&&u.includes(t)))&&(i.reactions??(i.reactions=[])).push(t);o&&(t.f^=_n);}for(a=0;a<l;a++)if(i=r[a],Be(i)&&ci(i),i.wv>t.wv)return  true}(!n||X!==null&&!de)&&Ht(t,wt);}return  false}function $s(t,e){for(var r=e;r!==null;){if(r.f&dn)try{r.fn(t);return}catch{r.f^=dn;}r=r.parent;}throw cn=false,t}function Vs(t){return (t.f&Fe)===0&&(t.parent===null||(t.parent.f&dn)===0)}function Vn(t,e,r,n){if(cn){if(r===null&&(cn=false),Vs(e))throw t;return}r!==null&&(cn=true);{$s(t,e);return}}function bi(t,e,r=0){var n=t.reactions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a];i.f&$t?bi(i,e,r+1):e===i&&(r===0?Ht(i,se):i.f&wt&&Ht(i,ye),An(i));}}function wi(t){var d;var e=kt,r=Nt,n=Yt,a=rt,i=de,o=qt,c=tt,l=Jt,u=t.f;kt=null,Nt=0,Yt=null,rt=u&(Zt|De)?null:t,de=!$e&&(u&me)!==0,qt=null,tt=t.ctx,Jt=false,yn++;try{var s=(0,t.fn)(),_=t.deps;if(kt!==null){var f;if(yr(t,Nt),_!==null&&Nt>0)for(_.length=Nt+kt.length,f=0;f<kt.length;f++)_[Nt+f]=kt[f];else t.deps=_=kt;if(!de)for(f=Nt;f<_.length;f++)((d=_[f]).reactions??(d.reactions=[])).push(t);}else _!==null&&Nt<_.length&&(yr(t,Nt),_.length=Nt);if(kr()&&Yt!==null&&!(t.f&($t|ye|se)))for(f=0;f<Yt.length;f++)bi(Yt[f],t);return a!==null&&yn++,s}finally{kt=e,Nt=r,Yt=n,rt=a,de=i,qt=o,tt=c,Jt=l;}}function Ts(t,e){let r=e.reactions;if(r!==null){var n=zi.call(r,t);if(n!==-1){var a=r.length-1;a===0?r=e.reactions=null:(r[n]=r[a],r.pop());}}r===null&&e.f&$t&&(kt===null||!kt.includes(e))&&(Ht(e,ye),e.f&(me|_n)||(e.f^=_n),yr(e,0));}function yr(t,e){var r=t.deps;if(r!==null)for(var n=e;n<r.length;n++)Ts(t,r[n]);}function Tn(t){var e=t.f;if(!(e&Fe)){Ht(t,wt);var r=X,n=tt;X=t;try{e&kn?ks(t):di(t),fi(t),vi(t);var a=wi(t);t.teardown=typeof a=="function"?a:null,t.wv=mi;var i=t.deps,o;}catch(c){Vn(c,t,r,n||t.ctx);}finally{X=r;}}}function As(){if(dr>1e3){dr=0;try{Ki();}catch(t){if(mn!==null)Vn(t,mn,null);else throw t}}dr++;}function Is(t){var e=t.length;if(e!==0){As();var r=$e;$e=true;try{for(var n=0;n<e;n++){var a=t[n];a.f&wt||(a.f^=wt);var i=[];xi(a,i),Ps(i);}}finally{$e=r;}}}function Ps(t){var e=t.length;if(e!==0)for(var r=0;r<e;r++){var n=t[r];if(!(n.f&(Fe|zt)))try{Be(n)&&(Tn(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?_i(n):n.fn=null));}catch(a){Vn(a,n,null,n.ctx);}}}function Hs(){if(gn=false,dr>1001)return;const t=sa;sa=[],Is(t),gn||(dr=0,mn=null);}function An(t){gn||(gn=true,queueMicrotask(Hs)),mn=t;for(var e=t;e.parent!==null;){e=e.parent;var r=e.f;if(r&(De|Zt)){if(!(r&wt))return;e.f^=wt;}}sa.push(e);}function xi(t,e){var r=t.first,n=[];t:for(;r!==null;){var a=r.f,i=(a&Zt)!==0,o=i&&(a&wt)!==0,c=r.next;if(!o&&!(a&zt))if(a&xr){if(i)r.f^=wt;else try{Be(r)&&Tn(r);}catch(_){Vn(_,r,null,r.ctx);}var l=r.first;if(l!==null){r=l;continue}}else a&Qa&&n.push(r);if(c===null){let _=r.parent;for(;_!==null;){if(t===_)break t;var u=_.next;if(u!==null){r=u;continue t}_=_.parent;}}r=c;}for(var s=0;s<n.length;s++)l=n[s],e.push(l),xi(l,e);}function v(t){var s;var e=t.f,r=(e&$t)!==0;if(r&&e&Fe){var n=li(t);return wa(t),n}if(rt!==null&&!Jt){qt!==null&&qt.includes(t)&&ns();var a=rt.deps;t.rv<yn&&(t.rv=yn,kt===null&&a!==null&&a[Nt]===t?Nt++:kt===null?kt=[t]:kt.push(t));}else if(r&&t.deps===null)for(var i=t,o=i.parent,c=i;o!==null;)if(o.f&$t){var l=o;c=l,o=l.parent;}else {var u=o;(s=u.deriveds)!=null&&s.includes(c)||(u.deriveds??(u.deriveds=[])).push(c);break}return r&&(i=t,Be(i)&&ci(i)),t.v}function I(t){var e=Jt;try{return Jt=!0,t()}finally{Jt=e;}}const Os=-7169;function Ht(t,e){t.f=t.f&Os|e;}function oe(t,e=false,r){tt={p:tt,c:null,e:null,m:false,s:t,x:null,l:null},ze&&!e&&(tt.l={s:null,u:null,r1:[],r2:St(false)});}function le(t){const e=tt;if(e!==null){t!==undefined&&(e.x=t);const o=e.e;if(o!==null){var r=X,n=rt;e.e=null;try{for(var a=0;a<o.length;a++){var i=o[a];Pt(i.effect),Bt(i.reaction),Cr(i.fn);}}finally{Pt(r),Bt(n);}}tt=e.p,e.m=true;}return t||{}}function fe(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ge in t)oa(t);else if(!Array.isArray(t))for(let e in t){const r=t[e];typeof r=="object"&&r&&ge in r&&oa(r);}}}function oa(t,e=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!e.has(t)){e.add(t),t instanceof Date&&t.getTime();for(let n in t)try{oa(t[n],e);}catch{}const r=pa(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=Xa(r);for(let a in n){const i=n[a].get;if(i)try{i.call(t);}catch{}}}}}const Rs=["touchstart","touchmove"];function Ds(t){return Rs.includes(t)}let Aa=false;function Fs(){Aa||(Aa=true,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{var e;if(!t.defaultPrevented)for(const r of t.target.elements)(e=r.__on_r)==null||e.call(r);});},{capture:true}));}function Ci(t){var e=rt,r=X;Bt(null),Pt(null);try{return t()}finally{Bt(e),Pt(r);}}function zs(t,e,r,n=r){t.addEventListener(e,()=>Ci(r));const a=t.__on_r;a?t.__on_r=()=>{a(),n(true);}:t.__on_r=()=>n(true),Fs();}const qs=new Set,Ia=new Set;function Bs(t,e,r,n={}){function a(i){if(n.capture||or.call(e,i),!i.cancelBubble)return Ci(()=>r==null?void 0:r.call(this,i))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?$n(()=>{e.addEventListener(t,a,n);}):e.addEventListener(t,a,n),a}function W(t,e,r,n,a){var i={capture:n,passive:a},o=Bs(t,e,r,i);(e===document.body||e===window||e===document)&&xa(()=>{e.removeEventListener(t,o,i);});}function or(t){var g;var e=this,r=e.ownerDocument,n=t.type,a=((g=t.composedPath)==null?undefined:g.call(t))||[],i=a[0]||t.target,o=0,c=t.__root;if(c){var l=a.indexOf(c);if(l!==-1&&(e===document||e===window)){t.__root=e;return}var u=a.indexOf(e);if(u===-1)return;l<=u&&(o=l);}if(i=a[o]||t.target,i!==e){Ua(t,"currentTarget",{configurable:true,get(){return i||r}});var s=rt,_=X;Bt(null),Pt(null);try{for(var f,d=[];i!==null;){var w=i.assignedSlot||i.parentNode||i.host||null;try{var m=i["__"+n];if(m!==void 0&&!i.disabled)if(En(m)){var[k,...$]=m;k.apply(i,[t,...$]);}else m.call(i,t);}catch(C){f?d.push(C):f=C;}if(t.cancelBubble||w===e||w===null)break;i=w;}if(f){for(let C of d)queueMicrotask(()=>{throw C});throw f}}finally{t.__root=e,delete t.currentTarget,Bt(s),Pt(_);}}}function Ei(t){var e=document.createElement("template");return e.innerHTML=t,e.content}function bn(t,e){var r=X;r.nodes_start===null&&(r.nodes_start=t,r.nodes_end=e);}function H(t,e){var r=(e&ps)!==0,n=(e&gs)!==0,a,i=!t.startsWith("<!>");return ()=>{a===undefined&&(a=Ei(i?t:"<!>"+t),r||(a=Ie(a)));var o=n?document.importNode(a,true):a.cloneNode(true);if(r){var c=Ie(o),l=o.lastChild;bn(c,l);}else bn(o,o);return o}}function Ze(t,e,r="svg"){var n=!t.startsWith("<!>"),a=`<${r}>${n?t:"<!>"+t}</${r}>`,i;return ()=>{if(!i){var o=Ei(a),c=Ie(o);i=Ie(c);}var l=i.cloneNode(true);return bn(l,l),l}}function ne(){var t=document.createDocumentFragment(),e=document.createComment(""),r=ba();return t.append(e,r),bn(e,r),t}function M(t,e){t!==null&&t.before(e);}let la=true;function R(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=r,t.nodeValue=r==null?"":r+"");}function br(t,e){return Zs(t,e)}const ke=new Map;function Zs(t,{target:e,anchor:r,props:n={},events:a,context:i,intro:o=true}){ys();var c=new Set,l=_=>{for(var f=0;f<_.length;f++){var d=_[f];if(!c.has(d)){c.add(d);var w=Ds(d);e.addEventListener(d,or,{passive:w});var m=ke.get(d);m===undefined?(document.addEventListener(d,or,{passive:w}),ke.set(d,1)):ke.set(d,m+1);}}};l(ha(qs)),Ia.add(l);var u=undefined,s=Es(()=>{var _=r??e.appendChild(ba());return mr(()=>{if(i){oe({});var f=tt;f.c=i;}a&&(n.$$events=a),la=o,u=t(_,n)||{},la=true,i&&le();}),()=>{var w;for(var f of c){e.removeEventListener(f,or);var d=ke.get(f);--d===0?(document.removeEventListener(f,or),ke.delete(f)):ke.set(f,d);}Ia.delete(l),_!==r&&((w=_.parentNode)==null||w.removeChild(_));}});return Ws.set(u,s),u}let Ws=new WeakMap;function B(t,e,r=false){var n=t,a=null,i=null,o=Et,c=r?Ln:0,l=false;const u=(_,f=true)=>{l=true,s(f,_);},s=(_,f)=>{o!==(o=_)&&(o?(a?pn(a):f&&(a=mr(()=>f(n))),i&&hn(i,()=>{i=null;})):(i?pn(i):f&&(i=mr(()=>f(n))),a&&hn(a,()=>{a=null;})));};Ca(()=>{l=false,e(u),l||s(null,null);},c);}let un=null;function lr(t,e){return e}function Gs(t,e,r,n){for(var a=[],i=e.length,o=0;o<i;o++)Ea(e[o].e,a,true);var c=i>0&&a.length===0&&r!==null;if(c){var l=r.parentNode;bs(l),l.append(r),n.clear(),te(t,e[0].prev,e[i-1].next);}hi(a,()=>{for(var u=0;u<i;u++){var s=e[u];c||(n.delete(s.k),te(t,s.prev,s.next)),ie(s.e,!c);}});}function _e(t,e,r,n,a,i=null){var o=t,c={flags:e,items:new Map,first:null},l=(e&ri)!==0;if(l){var u=t;o=u.appendChild(ba());}var s=null,_=false,f=At(()=>{var d=r();return En(d)?d:d==null?[]:ha(d)});Ca(()=>{var d=v(f),w=d.length;if(!(_&&w===0)){_=w===0;{var m=rt;js(d,c,o,a,e,(m.f&zt)!==0,n,r);}i!==null&&(w===0?s?pn(s):s=mr(()=>i(o)):s!==null&&hn(s,()=>{s=null;})),v(f);}});}function js(t,e,r,n,a,i,o,c){var at,nt,Ct,pt;var l=(a&ss)!==0,u=(a&(ma|ya))!==0,s=t.length,_=e.items,f=e.first,d=f,w,m=null,k,$=[],g=[],C,O,N,E;if(l)for(E=0;E<s;E+=1)C=t[E],O=o(C,E),N=_.get(O),N!==undefined&&((at=N.a)==null||at.measure(),(k??(k=new Set)).add(N));for(E=0;E<s;E+=1){if(C=t[E],O=o(C,E),N=_.get(O),N===undefined){var x=d?d.e.nodes_start:r;m=Us(x,e,m,m===null?e.first:m.next,C,O,E,n,a,c),_.set(O,m),$=[],g=[],d=m.next;continue}if(u&&Ys(N,C,E,a),N.e.f&zt&&(pn(N.e),l&&((nt=N.a)==null||nt.unfix(),(k??(k=new Set)).delete(N))),N!==d){if(w!==undefined&&w.has(N)){if($.length<g.length){var b=g[0],L;m=b.prev;var A=$[0],G=$[$.length-1];for(L=0;L<$.length;L+=1)Pa($[L],b,r);for(L=0;L<g.length;L+=1)w.delete(g[L]);te(e,A.prev,G.next),te(e,m,A),te(e,G,b),d=b,m=G,E-=1,$=[],g=[];}else w.delete(N),Pa(N,d,r),te(e,N.prev,N.next),te(e,N,m===null?e.first:m.next),te(e,m,N),m=N;continue}for($=[],g=[];d!==null&&d.k!==O;)(i||!(d.e.f&zt))&&(w??(w=new Set)).add(d),g.push(d),d=d.next;if(d===null)continue;N=d;}$.push(N),m=N,d=N.next;}if(d!==null||w!==undefined){for(var q=w===undefined?[]:ha(w);d!==null;)(i||!(d.e.f&zt))&&q.push(d),d=d.next;var Q=q.length;if(Q>0){var ot=a&ri&&s===0?r:null;if(l){for(E=0;E<Q;E+=1)(Ct=q[E].a)==null||Ct.measure();for(E=0;E<Q;E+=1)(pt=q[E].a)==null||pt.fix();}Gs(e,q,ot,_);}}l&&$n(()=>{var D;if(k!==undefined)for(N of k)(D=N.a)==null||D.apply();}),X.first=e.first&&e.first.e,X.last=m&&m.e;}function Ys(t,e,r,n){n&ma&&ra(t.v,e),n&ya?ra(t.i,r):t.i=r;}function Us(t,e,r,n,a,i,o,c,l,u){var s=un,_=(l&ma)!==0,f=(l&os)===0,d=_?f?Mn(a):St(a):a,w=l&ya?St(o):o,m={i:w,v:d,k:i,a:null,e:null,prev:r,next:n};un=m;try{return m.e=mr(()=>c(t,d,w,u),ai),m.e.prev=r&&r.e,m.e.next=n&&n.e,r===null?e.first=m:(r.next=m,r.e.next=m.e),n!==null&&(n.prev=m,n.e.prev=m.e),m}finally{un=s;}}function Pa(t,e,r){for(var n=t.next?t.next.e.nodes_start:r,a=e?e.e.nodes_start:r,i=t.e.nodes_start;i!==n;){var o=Nn(i);a.before(i),i=o;}}function te(t,e,r){e===null?t.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e);}function Ha(t,e,r,n,a){var c;var i=(c=e.$$slots)==null?undefined:c[r],o=false;i===true&&(i=e.children,o=true),i===undefined?a!==null&&a(t):i(t,o?()=>n:n);}function T(t,e,r,n){var a=t.__attributes??(t.__attributes={});a[e]!==(a[e]=r)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[Ui]=r),r==null?t.removeAttribute(e):typeof r!="string"&&Xs(t).includes(e)?t[e]=r:t.setAttribute(e,r));}var Oa=new Map;function Xs(t){var e=Oa.get(t.nodeName);if(e)return e;Oa.set(t.nodeName,e=[]);for(var r,n=t,a=Element.prototype;a!==n;){r=Xa(n);for(var i in r)r[i].set&&e.push(i);n=pa(n);}return e}function Ra(t,e,r){var n=t.__className,a=Qs(e);(n!==a||ai)&&(e==null?t.removeAttribute("class"):t.className=a,t.__className=a);}function Qs(t,e){return (t??"")+""}function cr(t,e,r){if(r){if(t.classList.contains(e))return;t.classList.add(e);}else {if(!t.classList.contains(e))return;t.classList.remove(e);}}function Xt(t,e,r,n){var a=t.__styles??(t.__styles={});a[e]!==r&&(a[e]=r,r==null?t.style.removeProperty(e):t.style.setProperty(e,r,""));}const Js=()=>performance.now(),Qt={tick:t=>requestAnimationFrame(t),now:()=>Js(),tasks:new Set};function ki(){const t=Qt.now();Qt.tasks.forEach(e=>{e.c(t)||(Qt.tasks.delete(e),e.f());}),Qt.tasks.size!==0&&Qt.tick(ki);}function Ks(t){let e;return Qt.tasks.size===0&&Qt.tick(ki),{promise:new Promise(r=>{Qt.tasks.add(e={c:t,f:r});}),abort(){Qt.tasks.delete(e);}}}function on(t,e){t.dispatchEvent(new CustomEvent(e));}function to(t){if(t==="float")return "cssFloat";if(t==="offset")return "cssOffset";if(t.startsWith("--"))return t;const e=t.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function Da(t){const e={},r=t.split(";");for(const n of r){const[a,i]=n.split(":");if(!a||i===undefined)break;const o=to(a.trim());e[o]=i.trim();}return e}const eo=t=>t;function ro(t,e,r){var n=un,a,i,o,c=null;n.a??(n.a={element:t,measure(){a=this.element.getBoundingClientRect();},apply(){if(o==null||o.abort(),i=this.element.getBoundingClientRect(),a.left!==i.left||a.right!==i.right||a.top!==i.top||a.bottom!==i.bottom){const l=e()(this.element,{from:a,to:i},r==null?undefined:r());o=wn(this.element,l,undefined,1,()=>{o==null||o.abort(),o=undefined;});}},fix(){if(!t.getAnimations().length){var{position:l,width:u,height:s}=getComputedStyle(t);if(l!=="absolute"&&l!=="fixed"){var _=t.style;c={position:_.position,width:_.width,height:_.height,transform:_.transform},_.position="absolute",_.width=u,_.height=s;var f=t.getBoundingClientRect();if(a.left!==f.left||a.top!==f.top){var d=`translate(${a.left-f.left}px, ${a.top-f.top}px)`;_.transform=_.transform?`${_.transform} ${d}`:d;}}}},unfix(){if(c){var l=t.style;l.position=c.position,l.width=c.width,l.height=c.height,l.transform=c.transform;}}}),n.a.element=t;}function He(t,e,r,n){var a=(t&ds)!==0,i=(t&_s)!==0,o=a&&i,c=(t&hs)!==0,l=o?"both":a?"in":"out",u,s=e.inert,_=e.style.overflow,f,d;function w(){var C=rt,O=X;Bt(null),Pt(null);try{return u??(u=r()(e,(n==null?void 0:n())??{},{direction:l}))}finally{Bt(C),Pt(O);}}var m={is_global:c,in(){var C;if(e.inert=s,!a){d==null||d.abort(),(C=d==null?undefined:d.reset)==null||C.call(d);return}i||f==null||f.abort(),on(e,"introstart"),f=wn(e,w(),d,1,()=>{on(e,"introend"),f==null||f.abort(),f=u=undefined,e.style.overflow=_;});},out(C){if(!i){C==null||C(),u=undefined;return}e.inert=true,on(e,"outrostart"),d=wn(e,w(),f,0,()=>{on(e,"outroend"),C==null||C();});},stop:()=>{f==null||f.abort(),d==null||d.abort();}},k=X;if((k.transitions??(k.transitions=[])).push(m),a&&la){var $=c;if(!$){for(var g=k.parent;g&&g.f&Ln;)for(;(g=g.parent)&&!(g.f&kn););$=!g||(g.f&Ja)!==0;}$&&Cr(()=>{I(()=>m.in());});}}function wn(t,e,r,n,a){var i=n===1;if(Zi(e)){var o,c=false;return $n(()=>{if(!c){var k=e({direction:i?"in":"out"});o=wn(t,k,r,n,a);}}),{abort:()=>{c=true,o==null||o.abort();},deactivate:()=>o.deactivate(),reset:()=>o.reset(),t:()=>o.t()}}if(r==null||r.deactivate(),!(e!=null&&e.duration))return a(),{abort:Dt,deactivate:Dt,reset:Dt,t:()=>n};const{delay:l=0,css:u,tick:s,easing:_=eo}=e;var f=[];if(i&&r===undefined&&(s&&s(0,1),u)){var d=Da(u(0,1));f.push(d,d);}var w=()=>1-n,m=t.animate(f,{duration:l});return m.onfinish=()=>{var k=(r==null?undefined:r.t())??1-n;r==null||r.abort();var $=n-k,g=e.duration*Math.abs($),C=[];if(g>0){var O=false;if(u)for(var N=Math.ceil(g/16.666666666666668),E=0;E<=N;E+=1){var x=k+$*_(E/N),b=Da(u(x,1-x));C.push(b),O||(O=b.overflow==="hidden");}O&&(t.style.overflow="hidden"),w=()=>{var L=m.currentTime;return k+$*_(L/g)},s&&Ks(()=>{if(m.playState!=="running")return  false;var L=w();return s(L,1-L),true});}m=t.animate(C,{duration:g,fill:"forwards"}),m.onfinish=()=>{w=()=>n,s==null||s(n,1-n),a();};},{abort:()=>{m&&(m.cancel(),m.effect=null,m.onfinish=Dt);},deactivate:()=>{a=Dt;},reset:()=>{n===0&&(s==null||s(1,0));},t:()=>w()}}function ln(t,e,r=e){var n=kr();zs(t,"input",a=>{var i=a?t.defaultValue:t.value;if(i=Jn(t)?Kn(i):i,r(i),n&&i!==(i=e())){var o=t.selectionStart,c=t.selectionEnd;t.value=i??"",c!==null&&(t.selectionStart=o,t.selectionEnd=Math.min(c,t.value.length));}}),I(e)==null&&t.value&&r(Jn(t)?Kn(t.value):t.value),Er(()=>{var a=e();Jn(t)&&a===Kn(t.value)||t.type==="date"&&!a&&!t.value||a!==t.value&&(t.value=a??"");});}function Jn(t){var e=t.type;return e==="number"||e==="range"}function Kn(t){return t===""?null:+t}function ta(t,e,r){var n=pe(t,e);n&&n.set&&(t[e]=r,xa(()=>{t[e]=null;}));}var re,Ae,wr,xn,Li;const Cn=class Cn{constructor(e){sr(this,xn);sr(this,re,new WeakMap);sr(this,Ae);sr(this,wr);Qn(this,wr,e);}observe(e,r){var n=jt(this,re).get(e)||new Set;return n.add(r),jt(this,re).set(e,n),Sa(this,xn,Li).call(this).observe(e,jt(this,wr)),()=>{var a=jt(this,re).get(e);a.delete(r),a.size===0&&(jt(this,re).delete(e),jt(this,Ae).unobserve(e));}}};re=new WeakMap,Ae=new WeakMap,wr=new WeakMap,xn=new WeakSet,Li=function(){return jt(this,Ae)??Qn(this,Ae,new ResizeObserver(e=>{for(var r of e){Cn.entries.set(r.target,r);for(var n of jt(this,re).get(r.target)||[])n(r);}}))},Na(Cn,"entries",new WeakMap);let ca=Cn;var no=new ca({box:"border-box"});function Fa(t,e,r){var n=no.observe(t,()=>r(t[e]));Cr(()=>(I(()=>r(t[e])),n));}function za(t,e){return t===e||(t==null?undefined:t[ge])===e}function ee(t={},e,r,n){return Cr(()=>{var a,i;return Er(()=>{a=i,i=[],I(()=>{t!==r(...i)&&(e(t,...i),a&&za(r(...a),t)&&e(null,...a));});}),()=>{$n(()=>{i&&za(r(...i),t)&&e(null,...i);});}}),t}function Mi(t){return function(...e){var r=e[0];r.target===this&&(t==null||t.apply(this,e));}}function Ve(t){return function(...e){var r=e[0];return r.stopPropagation(),t==null?undefined:t.apply(this,e)}}function be(t=false){const e=tt,r=e.l.u;if(!r)return;let n=()=>fe(e.s);if(t){let a=0,i={};const o=gr(()=>{let c=false;const l=e.s;for(const u in l)l[u]!==i[u]&&(i[u]=l[u],c=true);return c&&a++,a});n=()=>v(o);}r.b.length&&Cs(()=>{qa(e,n),ea(r.b);}),na(()=>{const a=I(()=>r.m.map(Wi));return ()=>{for(const i of a)typeof i=="function"&&i();}}),r.a.length&&na(()=>{qa(e,n),ea(r.a);});}function qa(t,e){if(t.l.s)for(const r of t.l.s)v(r);e();}function ao(t){var e=St(0);return function(){return arguments.length===1?(P(e,v(e)+1),arguments[0]):(v(e),t())}}function Ba(t,e){var i;var r=(i=t.$$events)==null?undefined:i[e.type],n=En(r)?r.slice():r==null?[]:[r];for(var a of n)a.call(this,e);}function Ni(t,e,r){if(t==null)return e(undefined),Dt;const n=I(()=>t.subscribe(e,r));return n.unsubscribe?()=>n.unsubscribe():n}const Le=[];function In(t,e=Dt){let r=null;const n=new Set;function a(c){if(ei(t,c)&&(t=c,r)){const l=!Le.length;for(const u of n)u[1](),Le.push(u,t);if(l){for(let u=0;u<Le.length;u+=2)Le[u][0](Le[u+1]);Le.length=0;}}}function i(c){a(c(t));}function o(c,l=Dt){const u=[c,l];return n.add(u),n.size===1&&(r=e(a,i)||Dt),c(t),()=>{n.delete(u),n.size===0&&r&&(r(),r=null);}}return {set:a,update:i,subscribe:o}}function Si(t){let e;return Ni(t,r=>e=r)(),e}let ur=false,ua=Symbol();function st(t,e,r){const n=r[e]??(r[e]={store:null,source:Mn(undefined),unsubscribe:Dt});if(n.store!==t&&!(ua in r))if(n.unsubscribe(),n.store=t??null,t==null)n.source.v=undefined,n.unsubscribe=Dt;else {var a=true;n.unsubscribe=Ni(t,i=>{a?n.source.v=i:P(n.source,i);}),a=false;}return t&&ua in r?Si(t):v(n.source)}function bt(t,e){return t.set(e),e}function We(){const t={};function e(){xa(()=>{for(var r in t)t[r].unsubscribe();Ua(t,ua,{enumerable:false,value:true});});}return [t,e]}function ht(t,e,r){return t.set(r),e}function Za(){ur=true;}function io(t){var e=ur;try{return ur=!1,[t(),ur]}finally{ur=e;}}function Wa(t){for(var e=X,r=X;e!==null&&!(e.f&(Zt|De));)e=e.parent;try{return Pt(e),t()}finally{Pt(r);}}function ft(t,e,r,n){var x;var a=(r&ls)!==0,i=!ze||(r&cs)!==0,o=(r&vs)!==0,c=(r&fs)!==0,l=false,u;o?[u,l]=io(()=>t[e]):u=t[e];var s=ge in t||Yi in t,_=o&&(((x=pe(t,e))==null?undefined:x.set)??(s&&e in t&&(b=>t[e]=b)))||undefined,f=n,d=true,w=false,m=()=>(w=true,d&&(d=false,c?f=I(n):f=n),f);u===undefined&&n!==undefined&&(_&&i&&ts(),u=m(),_&&_(u));var k;if(i)k=()=>{var b=t[e];return b===undefined?m():(d=true,w=false,b)};else {var $=Wa(()=>(a?gr:At)(()=>t[e]));$.f|=Gi,k=()=>{var b=v($);return b!==undefined&&(f=undefined),b===undefined?f:b};}if(!(r&us))return k;if(_){var g=t.$$legacy;return function(b,L){return arguments.length>0?((!i||!L||g||l)&&_(L?k():b),b):k()}}var C=false,O=false,N=Mn(u),E=Wa(()=>gr(()=>{var b=k(),L=v(N);return C?(C=!1,O=!0,L):(O=!1,N.v=b)}));return a||(E.equals=ga),function(b,L){if(arguments.length>0){const A=L?v(E):i&&o?Ne(b):b;return E.equals(A)||(C=true,P(N,A),w&&f!==undefined&&(f=A),I(()=>v(E))),b}return v(E)}}function Pn(t){tt===null&&gi(),ze&&tt.l!==null?so(tt).m.push(t):na(()=>{const e=I(t);if(typeof e=="function")return e});}function $i(t){tt===null&&gi(),Pn(()=>()=>I(t));}function so(t){var e=t.l;return e.u??(e.u={a:[],b:[],m:[]})}const oo="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(oo);is();const lo=t=>t;function Oe(t,{delay:e=0,duration:r=400,easing:n=lo}={}){const a=+getComputedStyle(t).opacity;return {delay:e,duration:r,easing:n,css:i=>`opacity: ${i*a}`}}function Me(t,e=()=>{}){if(!t)return;const r=document.querySelector(t);if(r){e(r);return}new MutationObserver((a,i)=>{const o=document.querySelector(t);o&&(i.disconnect(),e(o));}).observe(document.documentElement,{childList:true,subtree:true});}function _r(t){if(typeof t=="string")try{const e=JSON.parse(t);return _r(e)}catch{return t}if(Array.isArray(t))return t.map(e=>_r(e));if(t!==null&&typeof t=="object"){const e={};for(const r in t)t.hasOwnProperty(r)&&(e[r]=_r(t[r]));return e}return t}function Ut(t){if(!t)return "inherit";let e=t.toString().trim();if(e.startsWith("var(")){const o=e.match(/var\(([^)]+)\)/);if(o){const c=o[1],l=getComputedStyle(document.documentElement).getPropertyValue(c).trim();if(l)e=l;else return "inherit"}}if(e.startsWith("rgba(")||e.startsWith("rgb(")){const o=e.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);if(o){const[,c,l,u]=o;return (parseInt(c)*299+parseInt(l)*587+parseInt(u)*114)/1e3<128?"white":"black"}}e=e.replace("#","");let r,n,a;if(e.length===3)r=parseInt(e[0]+e[0],16),n=parseInt(e[1]+e[1],16),a=parseInt(e[2]+e[2],16);else if(e.length===6)r=parseInt(e.substr(0,2),16),n=parseInt(e.substr(2,2),16),a=parseInt(e.substr(4,2),16);else if(e.length===8)r=parseInt(e.substr(0,2),16),n=parseInt(e.substr(2,2),16),a=parseInt(e.substr(4,2),16);else return "inherit";return (r*299+n*587+a*114)/1e3<128?"white":"black"}const Vi="Kesa:Fall",Ga=()=>{try{return _r(localStorage.getItem(Vi))??{}}catch{return {}}},Ft=(t,e)=>{const r=Ga(),n=t in r?r[t]:e,{subscribe:a,set:i,update:o}=In(n);return a(c=>{const l=Ga();localStorage.setItem(Vi,JSON.stringify({...l,[t]:c}));}),{subscribe:a,set:c=>{typeof c=="function"?o(c):i(c);},update:o}},vn=In(0),Ti=In(""),hr=Ft("_isFallView",true),vr=In(0),va=Ft("_panelPos",{x:0,y:0}),fa=Ft("_show_hover_pic",1),fr=Ft("_card_layout",{min:300,max:600,gap:8}),Tt=Ft("_card_detail",{all:false,category:true,title:false,topping:true,free:true,size:true,sub_title:false,tags:false,download_collect:false,upload_time:false,statistics:false}),co=Ft("_show_nexus_pic",1),da=Ft("_block_gay",1),fn=Ft("_card_radius",{enabled:false,value:16}),Ai=Ft("_mt_label",{}),Ii=Ft("_mt_categories",{}),Se=Ft("_textColor",{t1:"black",t2:"black",t3:"black"});function uo(t={path:"/search",method:"POST"}){const e=XMLHttpRequest.prototype.open,r=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.open=function(n,a){return this._requestMetadata={method:n.toUpperCase(),url:a,isTarget:a.includes(t.path)&&n.toUpperCase()===t.method},e.apply(this,arguments)},XMLHttpRequest.prototype.send=function(n){var a;if((a=this._requestMetadata)!=null&&a.isTarget){const i=this.onreadystatechange,o=this.onload;this.addEventListener("readystatechange",()=>{this.readyState===4&&this._captureResponseData(),i==null||i.call(this);}),this.onload=u=>{this._captureResponseData(),o==null||o.call(this,u);};const c={url:this._requestMetadata.url,body:n instanceof Document?n.documentElement.outerHTML:n},l=new CustomEvent(`req>${t.method}->${t.path}`,{detail:c});window.dispatchEvent(l);}return r.apply(this,arguments)},XMLHttpRequest.prototype._captureResponseData=function(){if(!this._hasCaptured&&this._requestMetadata.isTarget){try{const n={status:this.status,headers:this.getAllResponseHeaders(),data:this._parseResponse()},a=new CustomEvent(`res>${t.method}->${t.path}`,{detail:n});window.dispatchEvent(a);}catch(n){console.error("<PT-Fall> Capture failed:",n);}this._hasCaptured=true;}},XMLHttpRequest.prototype._parseResponse=function(){var n;try{switch(this.responseType){case "json":return this.response;case "document":return (n=this.responseXML)==null?void 0:n.documentElement.outerHTML;case "arraybuffer":return new Uint8Array(this.response);case "blob":return URL.createObjectURL(this.response);default:return this.responseText}}catch{return this.responseText}};}function vo(t){const e=t-1;return e*e*e+1}function fo(t,{from:e,to:r},n={}){var{delay:a=0,duration:i=E=>Math.sqrt(E)*120,easing:o=vo}=n,c=getComputedStyle(t),l=c.transform==="none"?"":c.transform,[u,s]=c.transformOrigin.split(" ").map(parseFloat);u/=t.clientWidth,s/=t.clientHeight;var _=_o(t),f=t.clientWidth/r.width/_,d=t.clientHeight/r.height/_,w=e.left+e.width*u,m=e.top+e.height*s,k=r.left+r.width*u,$=r.top+r.height*s,g=(w-k)*f,C=(m-$)*d,O=e.width/r.width,N=e.height/r.height;return {delay:a,duration:typeof i=="function"?i(Math.sqrt(g*g+C*C)):i,easing:o,css:(E,x)=>{var b=x*g,L=x*C,A=E+x*O,G=E+x*N;return `transform: ${l} translate(${b}px, ${L}px) scale(${A}, ${G});`}}}function _o(t){if("currentCSSZoom"in t)return t.currentCSSZoom;for(var e=t,r=1;e!==null;)r*=+getComputedStyle(e).zoom,e=e.parentElement;return r}var ho=H('<span class="svelte-b2jtby"> </span>'),po=H('<div class="svelte-b2jtby"><!></div>'),go=H('<span class="svelte-b2jtby"> </span>'),mo=H("<div><!></div>"),yo=H("<div></div>");function bo(t,e){oe(e,false);const r=et(),n=et();let a=ft(e,"animate",8,true),i=ft(e,"columnClass",24,()=>""),o=ft(e,"duration",8,200),c=ft(e,"gap",8,20),l=ft(e,"getId",8,g=>typeof g=="number"||typeof g=="string"?g:g[u()]),u=ft(e,"idKey",24,()=>"id"),s=ft(e,"items",8),_=ft(e,"masonryHeight",12,0),f=ft(e,"masonryWidth",12,0),d=ft(e,"maxColWidth",8,500),w=ft(e,"minColWidth",8,330),m=ft(e,"style",24,()=>""),k=ft(e,"class",24,()=>"");Pe(()=>(fe(s()),fe(f()),fe(w()),fe(c())),()=>{P(r,Math.min(s().length,Math.floor(f()/(w()+c()))||1));}),Pe(()=>(fe(s()),v(r)),()=>{P(n,s().reduce((g,C,O)=>(g[O%g.length].push([C,O]),g),Array(v(r)).fill(null).map(()=>[])));}),Sn(),be();var $=yo();_e($,5,()=>v(n),lr,(g,C)=>{var O=mo(),N=h(O);{var E=b=>{var L=ne(),A=Lt(L);_e(A,9,()=>v(C),([G,q])=>l()(G),(G,q)=>{let Q=()=>v(q)[0],ot=()=>v(q)[1];var at=po(),nt=h(at);Ha(nt,e,"default",{get idx(){return ot()},get item(){return Q()}},Ct=>{var pt=ho(),D=h(pt);j(()=>R(D,Q())),M(Ct,pt);}),He(1,at,()=>Oe,()=>({delay:100,duration:o()})),He(2,at,()=>Oe,()=>({delay:0,duration:o()})),ro(at,()=>fo,()=>({duration:o()})),M(G,at);}),M(b,L);},x=b=>{var L=ne(),A=Lt(L);_e(A,1,()=>v(C),([G,q])=>l()(G),(G,q)=>{let Q=()=>v(q)[0],ot=()=>v(q)[1];var at=ne(),nt=Lt(at);Ha(nt,e,"default",{get idx(){return ot()},get item(){return Q()}},Ct=>{var pt=go(),D=h(pt);j(()=>R(D,Q())),M(Ct,pt);}),M(G,at);}),M(b,L);};B(N,b=>{a()?b(E):b(x,false);});}j(()=>{Ra(O,`col ${i()??""} svelte-b2jtby`),T(O,"style",`gap: ${c()??""}px; max-width: ${d()??""}px;`);}),M(g,O);}),j(()=>{Ra($,`masonry ${k()??""} svelte-b2jtby`),T($,"style",`gap: ${c()??""}px; ${m()??""}`);}),Fa($,"clientWidth",f),Fa($,"clientHeight",_),M(t,$),le();}var It=function(){return It=Object.assign||function(e){for(var r,n=1,a=arguments.length;n<a;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);}return e},It.apply(this,arguments)},wo=function(){function t(e){this.options=e,this.listeners={};}return t.prototype.on=function(e,r){var n=this.listeners[e]||[];this.listeners[e]=n.concat([r]);},t.prototype.triggerEvent=function(e,r){var n=this,a=this.listeners[e]||[];a.forEach(function(i){return i({target:n,event:r})});},t}(),Re;(function(t){t[t.Add=0]="Add",t[t.Remove=1]="Remove";})(Re||(Re={}));var xo=function(){function t(){this.notifications=[];}return t.prototype.push=function(e){this.notifications.push(e),this.updateFn(e,Re.Add,this.notifications);},t.prototype.splice=function(e,r){var n=this.notifications.splice(e,r)[0];return this.updateFn(n,Re.Remove,this.notifications),n},t.prototype.indexOf=function(e){return this.notifications.indexOf(e)},t.prototype.onUpdate=function(e){this.updateFn=e;},t}(),ae;(function(t){t.Dismiss="dismiss",t.Click="click";})(ae||(ae={}));var ja={types:[{type:"success",className:"notyf__toast--success",backgroundColor:"#3dc763",icon:{className:"notyf__icon--success",tagName:"i"}},{type:"error",className:"notyf__toast--error",backgroundColor:"#ed3d3d",icon:{className:"notyf__icon--error",tagName:"i"}}],duration:2e3,ripple:true,position:{x:"right",y:"bottom"},dismissible:false},Co=function(){function t(){this.notifications=[],this.events={},this.X_POSITION_FLEX_MAP={left:"flex-start",center:"center",right:"flex-end"},this.Y_POSITION_FLEX_MAP={top:"flex-start",center:"center",bottom:"flex-end"};var e=document.createDocumentFragment(),r=this._createHTMLElement({tagName:"div",className:"notyf"});e.appendChild(r),document.body.appendChild(e),this.container=r,this.animationEndEventName=this._getAnimationEndEventName(),this._createA11yContainer();}return t.prototype.on=function(e,r){var n;this.events=It(It({},this.events),(n={},n[e]=r,n));},t.prototype.update=function(e,r){r===Re.Add?this.addNotification(e):r===Re.Remove&&this.removeNotification(e);},t.prototype.removeNotification=function(e){var r=this,n=this._popRenderedNotification(e),a;if(n){a=n.node,a.classList.add("notyf__toast--disappear");var i;a.addEventListener(this.animationEndEventName,i=function(o){o.target===a&&(a.removeEventListener(r.animationEndEventName,i),r.container.removeChild(a));});}},t.prototype.addNotification=function(e){var r=this._renderNotification(e);this.notifications.push({notification:e,node:r}),this._announce(e.options.message||"Notification");},t.prototype._renderNotification=function(e){var r,n=this._buildNotificationCard(e),a=e.options.className;return a&&(r=n.classList).add.apply(r,a.split(" ")),this.container.appendChild(n),n},t.prototype._popRenderedNotification=function(e){for(var r=-1,n=0;n<this.notifications.length&&r<0;n++)this.notifications[n].notification===e&&(r=n);if(r!==-1)return this.notifications.splice(r,1)[0]},t.prototype.getXPosition=function(e){var r;return ((r=e==null?undefined:e.position)===null||r===undefined?undefined:r.x)||"right"},t.prototype.getYPosition=function(e){var r;return ((r=e==null?undefined:e.position)===null||r===undefined?undefined:r.y)||"bottom"},t.prototype.adjustContainerAlignment=function(e){var r=this.X_POSITION_FLEX_MAP[this.getXPosition(e)],n=this.Y_POSITION_FLEX_MAP[this.getYPosition(e)],a=this.container.style;a.setProperty("justify-content",n),a.setProperty("align-items",r);},t.prototype._buildNotificationCard=function(e){var r=this,n=e.options,a=n.icon;this.adjustContainerAlignment(n);var i=this._createHTMLElement({tagName:"div",className:"notyf__toast"}),o=this._createHTMLElement({tagName:"div",className:"notyf__ripple"}),c=this._createHTMLElement({tagName:"div",className:"notyf__wrapper"}),l=this._createHTMLElement({tagName:"div",className:"notyf__message"});l.innerHTML=n.message||"";var u=n.background||n.backgroundColor;if(a){var s=this._createHTMLElement({tagName:"div",className:"notyf__icon"});if((typeof a=="string"||a instanceof String)&&(s.innerHTML=new String(a).valueOf()),typeof a=="object"){var _=a.tagName,f=_===undefined?"i":_,d=a.className,w=a.text,m=a.color,k=m===undefined?u:m,$=this._createHTMLElement({tagName:f,className:d,text:w});k&&($.style.color=k),s.appendChild($);}c.appendChild(s);}if(c.appendChild(l),i.appendChild(c),u&&(n.ripple?(o.style.background=u,i.appendChild(o)):i.style.background=u),n.dismissible){var g=this._createHTMLElement({tagName:"div",className:"notyf__dismiss"}),C=this._createHTMLElement({tagName:"button",className:"notyf__dismiss-btn"});g.appendChild(C),c.appendChild(g),i.classList.add("notyf__toast--dismissible"),C.addEventListener("click",function(N){var E,x;(x=(E=r.events)[ae.Dismiss])===null||x===undefined||x.call(E,{target:e,event:N}),N.stopPropagation();});}i.addEventListener("click",function(N){var E,x;return (x=(E=r.events)[ae.Click])===null||x===undefined?undefined:x.call(E,{target:e,event:N})});var O=this.getYPosition(n)==="top"?"upper":"lower";return i.classList.add("notyf__toast--"+O),i},t.prototype._createHTMLElement=function(e){var r=e.tagName,n=e.className,a=e.text,i=document.createElement(r);return n&&(i.className=n),i.textContent=a||null,i},t.prototype._createA11yContainer=function(){var e=this._createHTMLElement({tagName:"div",className:"notyf-announcer"});e.setAttribute("aria-atomic","true"),e.setAttribute("aria-live","polite"),e.style.border="0",e.style.clip="rect(0 0 0 0)",e.style.height="1px",e.style.margin="-1px",e.style.overflow="hidden",e.style.padding="0",e.style.position="absolute",e.style.width="1px",e.style.outline="0",document.body.appendChild(e),this.a11yContainer=e;},t.prototype._announce=function(e){var r=this;this.a11yContainer.textContent="",setTimeout(function(){r.a11yContainer.textContent=e;},100);},t.prototype._getAnimationEndEventName=function(){var e=document.createElement("_fake"),r={MozTransition:"animationend",OTransition:"oAnimationEnd",WebkitTransition:"webkitAnimationEnd",transition:"animationend"},n;for(n in r)if(e.style[n]!==undefined)return r[n];return "animationend"},t}(),Pi=function(){function t(e){var r=this;this.dismiss=this._removeNotification,this.notifications=new xo,this.view=new Co;var n=this.registerTypes(e);this.options=It(It({},ja),e),this.options.types=n,this.notifications.onUpdate(function(a,i){return r.view.update(a,i)}),this.view.on(ae.Dismiss,function(a){var i=a.target,o=a.event;r._removeNotification(i),i.triggerEvent(ae.Dismiss,o);}),this.view.on(ae.Click,function(a){var i=a.target,o=a.event;return i.triggerEvent(ae.Click,o)});}return t.prototype.error=function(e){var r=this.normalizeOptions("error",e);return this.open(r)},t.prototype.success=function(e){var r=this.normalizeOptions("success",e);return this.open(r)},t.prototype.open=function(e){var r=this.options.types.find(function(i){var o=i.type;return o===e.type})||{},n=It(It({},r),e);this.assignProps(["ripple","position","dismissible"],n);var a=new wo(n);return this._pushNotification(a),a},t.prototype.dismissAll=function(){for(;this.notifications.splice(0,1););},t.prototype.assignProps=function(e,r){var n=this;e.forEach(function(a){r[a]=r[a]==null?n.options[a]:r[a];});},t.prototype._pushNotification=function(e){var r=this;this.notifications.push(e);var n=e.options.duration!==undefined?e.options.duration:this.options.duration;n&&setTimeout(function(){return r._removeNotification(e)},n);},t.prototype._removeNotification=function(e){var r=this.notifications.indexOf(e);r!==-1&&this.notifications.splice(r,1);},t.prototype.normalizeOptions=function(e,r){var n={type:e};return typeof r=="string"?n.message=r:typeof r=="object"&&(n=It(It({},n),r)),n},t.prototype.registerTypes=function(e){var r=(e&&e.types||[]).slice(),n=ja.types.map(function(a){var i=-1;r.forEach(function(c,l){c.type===a.type&&(i=l);});var o=i!==-1?r.splice(i,1)[0]:{};return It(It({},a),o)});return n.concat(r)},t}();new Pi({duration:5e3,dismissible:true});const he=new Pi({duration:3e3,dismissible:true,position:{x:"left",y:"top"},types:[{type:"warning",background:"orange",icon:{className:"material-icons",tagName:"i",text:"warning"}}]}),Eo="data:image/svg+xml,%3csvg%20stroke='currentColor'%20fill='currentColor'%20stroke-width='0'%20viewBox='0%200%2024%2024'%20height='25'%20width='25'%20xmlns='http://www.w3.org/2000/svg'%20style='%20vertical-align:%20middle;%20--darkreader-inline-fill:%20currentColor;%20--darkreader-inline-stroke:%20currentColor;'%20%3e%3cpath%20d='M12%205c-3.859%200-7%203.141-7%207s3.141%207%207%207%207-3.141%207-7-3.141-7-7-7zm0%2012c-2.757%200-5-2.243-5-5s2.243-5%205-5%205%202.243%205%205-2.243%205-5%205z'%3e%3c/path%3e%3cpath%20d='M12%209c-1.627%200-3%201.373-3%203s1.373%203%203%203%203-1.373%203-3-1.373-3-3-3z'%3e%3c/path%3e%3c/svg%3e",ko="data:image/svg+xml,%3csvg%20viewBox='64%2064%20896%20896'%20focusable='false'%20data-icon='arrow-up'%20width='1em'%20height='1em'%20fill='green'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M868%20545.5L536.1%20163a31.96%2031.96%200%2000-48.3%200L156%20545.5a7.97%207.97%200%20006%2013.2h81c4.6%200%209-2%2012.1-5.5L474%20300.9V864c0%204.4%203.6%208%208%208h60c4.4%200%208-3.6%208-8V300.9l218.9%20252.3c3%203.5%207.4%205.5%2012.1%205.5h81c6.8%200%2010.5-8%206-13.2z'%3e%3c/path%3e%3c/svg%3e",Lo="data:image/svg+xml,%3csvg%20viewBox='64%2064%20896%20896'%20focusable='false'%20data-icon='arrow-down'%20width='1em'%20height='1em'%20fill='red'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M862%20465.3h-81c-4.6%200-9%202-12.1%205.5L550%20723.1V160c0-4.4-3.6-8-8-8h-60c-4.4%200-8%203.6-8%208v563.1L255.1%20470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8%200-10.5%208.1-6%2013.2L487.9%20861a31.96%2031.96%200%200048.3%200L868%20478.5c4.5-5.2.8-13.2-6-13.2z'%3e%3c/path%3e%3c/svg%3e",Mo="data:image/svg+xml,%3csvg%20viewBox='64%2064%20896%20896'%20focusable='false'%20data-icon='download'%20width='1em'%20height='1em'%20fill='currentColor'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M505.7%20661a8%208%200%200012.6%200l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4%200-8%203.6-8%208v338.3H400c-6.7%200-10.4%207.7-6.3%2012.9l112%20141.8zM878%20626h-60c-4.4%200-8%203.6-8%208v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4%200-8%203.6-8%208v198c0%2017.7%2014.3%2032%2032%2032h684c17.7%200%2032-14.3%2032-32V634c0-4.4-3.6-8-8-8z'%3e%3c/path%3e%3c/svg%3e",No="data:image/svg+xml,%3csvg%20viewBox='64%2064%20896%20896'%20focusable='false'%20data-icon='star'%20width='1em'%20height='1em'%20fill='currentColor'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M908.1%20353.1l-253.9-36.9L540.7%2086.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9%2014.5L369.8%20316.2l-253.9%2036.9c-7%201-13.4%204.3-18.3%209.3a32.05%2032.05%200%2000.6%2045.3l183.7%20179.1-43.4%20252.9a31.95%2031.95%200%200046.4%2033.7L512%20754l227.1%20119.4c6.2%203.3%2013.4%204.4%2020.3%203.2%2017.4-3%2029.1-19.5%2026.1-36.9l-43.4-252.9%20183.7-179.1c5-4.9%208.3-11.3%209.3-18.3%202.7-17.5-9.5-33.7-27-36.3z'%3e%3c/path%3e%3c/svg%3e",So="data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cstyle%3e%20.cls-1{fill:%232eb1b7;}%20.cls-2{fill:%2356b54e;}%20.cls-3{fill:%235dc6d1;}%20.cls-4{fill:%2360cc5a;}%20.cls-5{fill:%23ffce69;}%20.cls-6{fill:%236c2e7c;}%20%3c/style%3e%3c/defs%3e%3cg%20id='Icons'%3e%3crect%20class='cls-1'%20height='22'%20rx='4'%20width='22'%20x='1'%20y='1'/%3e%3cpath%20class='cls-2'%20d='M23,18v1a4,4,0,0,1-4,4H5a4,4,0,0,1-3.9-3.1l7.19-7.19a1.008,1.008,0,0,1,1.42,0l1.8,1.8a1,1,0,0,0,1.46-.05l2.33-2.65a1,1,0,0,1,1.46-.05Z'/%3e%3cpath%20class='cls-3'%20d='M23,5v9a4.025,4.025,0,0,1-1.17,2.83l-5.07-5.07a1,1,0,0,0-1.46.05l-2.33,2.65a1,1,0,0,1-1.46.05l-1.8-1.8a1.008,1.008,0,0,0-1.42,0L3.36,17.64A3.988,3.988,0,0,1,1,14V5A4,4,0,0,1,5,1H19A4,4,0,0,1,23,5Z'/%3e%3cpath%20class='cls-4'%20d='M21.83,16.83A4.025,4.025,0,0,1,19,18H5a3.931,3.931,0,0,1-1.64-.36l4.93-4.93a1.008,1.008,0,0,1,1.42,0l1.8,1.8a1,1,0,0,0,1.46-.05l2.33-2.65a1,1,0,0,1,1.46-.05Z'/%3e%3ccircle%20class='cls-5'%20cx='7'%20cy='7'%20r='2'/%3e%3c/g%3e%3cg%20data-name='Layer%204'%20id='Layer_4'%3e%3cpath%20class='cls-6'%20d='M19,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,19,0Zm3,19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3Z'/%3e%3cpath%20class='cls-6'%20d='M7,10A3,3,0,1,0,4,7,3,3,0,0,0,7,10ZM7,6A1,1,0,1,1,6,7,1,1,0,0,1,7,6Z'/%3e%3cpath%20class='cls-6'%20d='M16.707,10.293a.956.956,0,0,0-.74-.293,1.006,1.006,0,0,0-.72.341L12.217,13.8l-2.51-2.511a1,1,0,0,0-1.414,0l-4,4a1,1,0,1,0,1.414,1.414L9,13.414l1.9,1.9L8.247,18.341a1,1,0,0,0,1.506,1.318l3.218-3.678.006,0,.007-.011,3.065-3.5,2.244,2.244a1,1,0,0,0,1.414-1.414Z'/%3e%3c/g%3e%3c/svg%3e",z="https://static.m-team.cc/static/cate/",Te={architecture:"Mteam",TL_Selector:"div.app-content__inner",LOADING_PIC:"/static/media/logo.80b63235eaf702e44a8d.png",HOST:"https://test2.m-team.cc",API:{search:{url:"/search",fullUrl:"/api/torrent/search",method:"POST"}},ICON:{SIZE:Eo,SEEDERS:ko,LEECHERS:Lo,DOWNLOAD:Mo,COLLECTION:No,PIN:"/static/trans.gif",PREVIEW:So},CATEGORY:{401:{src:z+"moviesd.png",alt:"電影/SD",color:"#c74854"},402:{src:z+"tvhd.png",alt:"影劇/綜藝/HD",color:"#276fb8"},403:{src:z+"tvsd.png",alt:"影劇/綜藝/SD",color:"#c74854"},404:{src:z+"bbc.png",alt:"紀錄",color:"#23ac38"},405:{src:z+"anime.png",alt:"動畫",color:"#996c34"},406:{src:z+"mv.png",alt:"演唱",color:"#8a57a1"},407:{src:z+"sport.png",alt:"運動",color:"#23ac38"},409:{src:z+"other.png",alt:"Misc(其他)",color:"#996c34"},419:{src:z+"moviehd.png",alt:"電影/HD",color:"#c01a20"},420:{src:z+"moviedvd.png",alt:"電影/DVDiSo",color:"#c74854"},421:{src:z+"moviebd.png",alt:"電影/Blu-Ray",color:"#00a0e9"},422:{src:z+"software.png",alt:"軟體",color:"#f39800"},423:{src:z+"game-pc-3.jpeg",alt:"PC遊戲",color:"#f39800"},427:{src:z+"Study.png",alt:"教育(書面)",color:"#7FC269"},434:{src:z+"flac.png",alt:"Music(無損)",color:"#8a57a1"},435:{src:z+"tvdvd.png",alt:"影劇/綜藝/DVDiSo",color:"#4dbebd"},438:{src:z+"tvbd.png",alt:"影劇/綜藝/BD",color:"#1897d6"},439:{src:z+"movieremux.png",alt:"電影/Remux",color:"#1b2a51"},451:{src:z+"Study_Video.png",alt:"教育(影片)",color:"#7FC269"},442:{src:z+"Study_Audio.png",alt:"有聲書",color:"#7FC269"},448:{src:z+"pcgame.png",alt:"TV遊戲",color:"#f39800"},410:{src:z+"cenhd.png",alt:"AV(有碼)/HD Censored",color:"#F520CB"},411:{src:z+"hgame.png",alt:"H-遊戲",color:"#f49800"},412:{src:z+"hanime.png",alt:"H-動畫",color:"#f49800"},413:{src:z+"hcomic.png",alt:"H-漫畫",color:"#f49800"},424:{src:z+"censd.png",alt:"AV(有碼)/SD Censored",color:"#DA55A9"},425:{src:z+"ivvideo.png",alt:"IV(寫真影集)",color:"#bb1e9a"},426:{src:z+"uendvd.png",alt:"AV(無碼)/DVDiSo Uncensored",color:"#f77afa"},429:{src:z+"uenhd.png",alt:"AV(無碼)/HD Uncensored",color:"#f52bcb"},430:{src:z+"uensd.png",alt:"AV(無碼)/SD Uncensored",color:"#db55a9"},431:{src:z+"cenbd.png",alt:"AV(有碼)/Blu-Ray Censored",color:"#19a7ec"},432:{src:z+"uenbd.png",alt:"AV(無碼)/Blu-Ray Uncensored",color:"#19a7ec"},433:{src:z+"ivpic.png",alt:"IV(寫真圖集)",color:"#bb1e9a"},436:{src:z+"adult0day.png",alt:"AV(網站)/0Day",color:"#bb1e9a"},437:{src:z+"cendvd.png",alt:"AV(有碼)/DVDiSo Censored",color:"#f77afa"},440:{src:z+"gayhd.gif",alt:"AV(Gay)/HD",color:"#f52bcb"}},TAG:{"4k":{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},"8k":{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},hdr:{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},hdr10:{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},"hdr10+":{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},hlg:{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},DoVi:{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},HDRVi:{color:"#4e5561",bgColor:"#ffffff8f",colorV2:"#4a5156",bgColorV2:"#e9e9e9"},中字:{color:"#ad2a2a",bgColor:"#d14a4a2e"},中配:{color:"#5b3991",bgColor:"#5b399129"}},INDEX:0,Iframe_Width:1260,get_bg_color:function(){return getComputedStyle(document.documentElement).getPropertyValue("--bg-3")},special:function(){let t=$o(),e=Vo();return t&&e},pageLoaded:function(){}};function $o(){const t=Array.from(document.querySelectorAll(".ant-table-row-level-0 .ant-col a[href]"));return t.forEach(function(e){e.addEventListener("click",function(r){r.preventDefault(),_iframe_switch.set(1),_iframe_url.set(e.href);});}),t.length}function Vo(){document.querySelectorAll(".ant-image-mask").forEach(r=>{r.remove();});const e=Array.from(document.querySelectorAll(".torrent-list__thumbnail"));return e.forEach(r=>{r.classList+=" preview_Origin";}),e.length}const La=".preview_Origin";document.body.addEventListener("mouseover",function(t){if(t.target.matches(La)){const e=t,r=t.target;handleMouseOver(e,r);}});document.body.addEventListener("mouseout",function(t){t.target.matches(La)&&handleMouseOut(t);});document.body.addEventListener("mousemove",function(t){if(t.target.matches(La)){const e=t.target;handleMouseMove(t,e);}});var To=Ze('<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="18" width="18" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle;"><path d="M7 7h10v2H7zm0 4h7v2H7z"></path><path d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"></path></svg>');function Ya(t){var e=To();M(t,e);}class Ao{constructor(){this.container=null,this.imgElements=null,this.buffer=null,this.init();}init(){this.container=document.querySelector(".kp_container")||this.createPreview(),document.body.appendChild(this.container);}createPreview(){const e=document.createElement("div");e.className="kp_container",e.style.backgroundColor="rgba(0,0,0,0.8)",e.style.opacity="1",e.style.position="fixed",e.style.zIndex="10000",e.style.pointerEvents="none",e.style.transition="all .3s",e.style.display="none";const r=document.createElement("img");r.className="kp_img",r.style.position="absolute",r.style.zIndex="10002",r.style.pointerEvents="none",r.style.width="100%",r.style.height="100%",r.style.objectFit="contain",e.appendChild(r);const n=document.createElement("img");return n.className="kp_img",n.style.position="absolute",n.style.zIndex="10001",n.style.pointerEvents="none",n.style.width="100%",n.style.height="100%",n.style.objectFit="cover",n.style.filter="blur(8px)",n.style.opacity="0.9",e.appendChild(n),e}handleMouseOver(e,r){if(!r){console.warn("[FALL]: imgEle is null");return}if(Si(co)){const n=r.getAttribute("src");n&&(document.querySelectorAll(".kp_img").forEach(i=>{i.setAttribute("src",n);}),this.updatePosition(e),this.imgElements=r,this.container.style.display="block");}}handleMouseMove(e){this.container.style.display==="block"&&this.updatePosition(e);}updatePosition(e){const r=this.previewPosition(e);this.container.style.left=r.left,this.container.style.top=r.top,this.container.style.width=r.width,this.container.style.height=r.height;}previewPosition(e){let r=0,n=0;try{r=this.imgElements.naturalWidth,n=this.imgElements.naturalHeight;}catch{}const a=e.clientX,i=e.clientY,o=window.innerWidth,c=window.innerHeight,l={bot:{width:o,height:window.innerHeight-i},top:{width:o,height:i},right:{width:window.innerWidth-a,height:c},left:{width:a,height:c}};let u=0,s="";for(const _ in l){const f=Math.min(l[_].width/r,l[_].height/n);f>u&&(u=f,s=_);}return {top:{left:0,top:0,width:o+"px",height:i+"px"},bot:{left:0,top:i+"px",width:o+"px",height:window.innerHeight-i+"px"},left:{left:0,top:0,width:a+"px",height:c+"px"},right:{left:a+"px",top:0,width:window.innerWidth-a+"px",height:c+"px"}}[s]||{left:0,top:0,width:0,height:0}}clearPreview(){document.querySelectorAll(".kp_img").forEach(e=>{e.setAttribute("src","");}),this.container.style.display="none";}destroy(){this.buffer&&clearTimeout(this.buffer),this.container&&(this.container.style.display="none",clearPreview());}}function Io(){document.querySelectorAll(".kp_img").forEach(e=>{e.setAttribute("src","");});const t=document.querySelector(".kp_container");t&&(t.style.display="none");}window.__clearPreview=Io;const Po="data:image/svg+xml,%3csvg%20width='256px'%20height='256px'%20viewBox='0%200%2024.00%2024.00'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20transform='matrix(1,%200,%200,%201,%200,%200)'%20%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'%20transform='translate(0,0),%20scale(1)'%20/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%23CCCCCC'%20stroke-width='0.048'%20/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M13%203L13.7071%202.29289C13.5196%202.10536%2013.2652%202%2013%202V3ZM14%2022C14.5523%2022%2015%2021.5523%2015%2021C15%2020.4477%2014.5523%2020%2014%2020V22ZM19%209H20C20%208.73478%2019.8946%208.48043%2019.7071%208.29289L19%209ZM18%2010C18%2010.5523%2018.4477%2011%2019%2011C19.5523%2011%2020%2010.5523%2020%2010H18ZM5.21799%2019.908L4.32698%2020.362H4.32698L5.21799%2019.908ZM6.09202%2020.782L6.54601%2019.891L6.54601%2019.891L6.09202%2020.782ZM6.09202%203.21799L5.63803%202.32698L5.63803%202.32698L6.09202%203.21799ZM5.21799%204.09202L4.32698%203.63803L4.32698%203.63803L5.21799%204.09202ZM13.109%208.45399L14%208V8L13.109%208.45399ZM13.546%208.89101L14%208L13.546%208.89101ZM17.2299%2017.7929C16.8394%2018.1834%2016.8394%2018.8166%2017.2299%2019.2071C17.6204%2019.5976%2018.2536%2019.5976%2018.6441%2019.2071L17.2299%2017.7929ZM15.0316%2015.2507C14.8939%2015.7856%2015.2159%2016.3308%2015.7507%2016.4684C16.2856%2016.6061%2016.8308%2016.2841%2016.9684%2015.7493L15.0316%2015.2507ZM17.9375%2020C17.3852%2020%2016.9375%2020.4477%2016.9375%2021C16.9375%2021.5523%2017.3852%2022%2017.9375%2022V20ZM17.9475%2022C18.4998%2022%2018.9475%2021.5523%2018.9475%2021C18.9475%2020.4477%2018.4998%2020%2017.9475%2020V22ZM13%202H8.2V4H13V2ZM4%206.2V17.8H6V6.2H4ZM8.2%2022H14V20H8.2V22ZM19.7071%208.29289L13.7071%202.29289L12.2929%203.70711L18.2929%209.70711L19.7071%208.29289ZM20%2010V9H18V10H20ZM4%2017.8C4%2018.3436%203.99922%2018.8114%204.03057%2019.195C4.06287%2019.5904%204.13419%2019.9836%204.32698%2020.362L6.10899%2019.454C6.0838%2019.4045%206.04612%2019.3038%206.02393%2019.0322C6.00078%2018.7488%206%2018.3766%206%2017.8H4ZM8.2%2020C7.62345%2020%207.25117%2019.9992%206.96784%2019.9761C6.69617%2019.9539%206.59545%2019.9162%206.54601%2019.891L5.63803%2021.673C6.01641%2021.8658%206.40963%2021.9371%206.80497%2021.9694C7.18864%2022.0008%207.65645%2022%208.2%2022V20ZM4.32698%2020.362C4.6146%2020.9265%205.07354%2021.3854%205.63803%2021.673L6.54601%2019.891C6.35785%2019.7951%206.20487%2019.6422%206.10899%2019.454L4.32698%2020.362ZM8.2%202C7.65645%202%207.18864%201.99922%206.80497%202.03057C6.40963%202.06287%206.01641%202.13419%205.63803%202.32698L6.54601%204.10899C6.59545%204.0838%206.69617%204.04612%206.96784%204.02393C7.25117%204.00078%207.62345%204%208.2%204V2ZM6%206.2C6%205.62345%206.00078%205.25117%206.02393%204.96784C6.04612%204.69617%206.0838%204.59545%206.10899%204.54601L4.32698%203.63803C4.13419%204.01641%204.06287%204.40963%204.03057%204.80497C3.99922%205.18864%204%205.65645%204%206.2H6ZM5.63803%202.32698C5.07354%202.6146%204.6146%203.07354%204.32698%203.63803L6.10899%204.54601C6.20487%204.35785%206.35785%204.20487%206.54601%204.10899L5.63803%202.32698ZM12%203V7.4H14V3H12ZM14.6%2010H19V8H14.6V10ZM12%207.4C12%207.66353%2011.9992%207.92131%2012.0169%208.13823C12.0356%208.36682%2012.0797%208.63656%2012.218%208.90798L14%208C14.0293%208.05751%2014.0189%208.08028%2014.0103%207.97537C14.0008%207.85878%2014%207.69653%2014%207.4H12ZM14.6%208C14.3035%208%2014.1412%207.99922%2014.0246%207.9897C13.9197%207.98113%2013.9425%207.9707%2014%208L13.092%209.78201C13.3634%209.92031%2013.6332%209.96438%2013.8618%209.98305C14.0787%2010.0008%2014.3365%2010%2014.6%2010V8ZM12.218%208.90798C12.4097%209.2843%2012.7157%209.59027%2013.092%209.78201L14%208V8L12.218%208.90798ZM18.937%2016C18.937%2016.1732%2018.8915%2016.3053%2018.6175%2016.5697C18.4638%2016.718%2018.2828%2016.8653%2018.0319%2017.074C17.7936%2017.2723%2017.5141%2017.5087%2017.2299%2017.7929L18.6441%2019.2071C18.86%2018.9913%2019.0805%2018.8033%2019.3109%2018.6116C19.5287%2018.4305%2019.7852%2018.2223%2020.0065%2018.0087C20.4825%2017.5493%2020.937%2016.9314%2020.937%2016H18.937ZM17.937%2015C18.4893%2015%2018.937%2015.4477%2018.937%2016H20.937C20.937%2014.3431%2019.5938%2013%2017.937%2013V15ZM16.9684%2015.7493C17.0795%2015.3177%2017.4724%2015%2017.937%2015V13C16.5377%2013%2015.3645%2013.957%2015.0316%2015.2507L16.9684%2015.7493ZM17.9375%2022H17.9475V20H17.9375V22Z'%20fill='%23c00000'%20/%3e%3c/g%3e%3c/svg%3e",Ho="data:image/svg+xml,%3csvg%20viewBox='-2.4%20-2.4%2028.80%2028.80'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23000000'%20%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'%20/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M15.6%2015.6C15.6%2015.6%2014.25%2013.8%2012%2013.8C9.75%2013.8%208.4%2015.6%208.4%2015.6M14.7%209.3H14.709M9.3%209.3H9.309M21%2012C21%2016.9706%2016.9706%2021%2012%2021C7.02944%2021%203%2016.9706%203%2012C3%207.02944%207.02944%203%2012%203C16.9706%203%2021%207.02944%2021%2012ZM15.15%209.3C15.15%209.54853%2014.9485%209.75%2014.7%209.75C14.4515%209.75%2014.25%209.54853%2014.25%209.3C14.25%209.05147%2014.4515%208.85%2014.7%208.85C14.9485%208.85%2015.15%209.05147%2015.15%209.3ZM9.75%209.3C9.75%209.54853%209.54853%209.75%209.3%209.75C9.05147%209.75%208.85%209.54853%208.85%209.3C8.85%209.05147%209.05147%208.85%209.3%208.85C9.54853%208.85%209.75%209.05147%209.75%209.3Z'%20stroke='%23000000'%20stroke-width='1.8'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3c/g%3e%3c/svg%3e";var xt=ao(()=>Te),Oo=H('<div class="card-category svelte-1ytaoom"><img class="card_category-img svelte-1ytaoom"> </div>'),Ro=H('<a class="__main_title svelte-1ytaoom" target="_blank" rel="noopener noreferrer"> </a>'),Do=H('<div class="pic_error svelte-1ytaoom"><div><img style="height: 100%; width:60px; border-radius:20px;" alt="pic error" class="svelte-1ytaoom"></div> <div class="ant-typography" style="color: white; font-size:16px;">GAY WARNING<br>同志警告</div></div>'),Fo=H('<img class="lazy-image svelte-1ytaoom">'),zo=H('<div class="pic_error svelte-1ytaoom" style=""><div><img style="height: 100%;width: 100px;" alt="no pic" class="svelte-1ytaoom"></div> <div>本种没有图片</div></div>'),qo=H('<div class="pic_error svelte-1ytaoom" style=""><div><img style="height: 100%;width: 100px;" alt="pic error" class="svelte-1ytaoom"></div> <div class="ant-typography">图片加载失败</div></div>'),Bo=H('<div class="hover-trigger svelte-1ytaoom"><img style="pointer-events: none;" alt="PREVIEW" class="svelte-1ytaoom"></div>'),Zo=H(`<img style="
                    background: url(/static/media/icons.8bb5446ebbbd07050285.gif) 0 -202px;
                    height: 14px;
                    width: 14px;" alt="PIN" class="svelte-1ytaoom">`),Wo=H('<div class="card_info__topping svelte-1ytaoom"></div> &nbsp;',1),Go=H('<div class="_tag svelte-1ytaoom"> </div>'),jo=H('<div class="_tag _tag_diy svelte-1ytaoom">DIY</div>'),Yo=H('<div class="_tag _tag_dub svelte-1ytaoom">国配</div>'),Uo=H('<div class="_tag _tag_sub svelte-1ytaoom">中字</div>'),Xo=H('<div class="_tag svelte-1ytaoom"> </div>'),Qo=H('<div class="cl-tags svelte-1ytaoom"><!> <!> <!> <!></div>'),Jo=H(`<img style="
                  background: url(/static/media/icons.8bb5446ebbbd07050285.gif) 0 -202px;
                  height: 14px;
                  width: 14px;" alt="PIN" class="svelte-1ytaoom">`),Ko=H('<div class="card_info__topping svelte-1ytaoom"></div> &nbsp;',1),tl=H('<div class="_tag svelte-1ytaoom"> </div>'),el=H('<div class="card-index svelte-1ytaoom"><!> <!></div>'),rl=H('<div class="card-index card-index-right svelte-1ytaoom"> </div>'),nl=H('<div class="card_info-item card_info__sub_title svelte-1ytaoom"><div> </div></div>'),al=H('<div class="_tag _tag_diy svelte-1ytaoom">DIY</div>'),il=H('<div class="_tag _tag_dub svelte-1ytaoom">国配</div>'),sl=H('<div class="_tag _tag_sub svelte-1ytaoom">中字</div>'),ol=H('<div class="_tag svelte-1ytaoom"> </div>'),ll=H('<div class="cl-tags svelte-1ytaoom"><!> <!> <!> <!></div>'),cl=H('<div class="card_info-item card_info__dl_and_cl svelte-1ytaoom"><button title="(原列表的这俩按钮会消失)">下载 & 收藏</button></div>'),ul=H('<div class="card_info-item card_info__upload_time svelte-1ytaoom"><div> </div></div>'),vl=H('<div class="card_info-item card_info__statistics svelte-1ytaoom"><!> &nbsp; <b> </b> &nbsp;&nbsp; <img alt="SVG_Seeders"> &nbsp; <b> </b> &nbsp;&nbsp; <img alt="SVG_Leechers"> &nbsp; <b> </b></div>'),fl=H('<div class="card_info svelte-1ytaoom"><!>  <!> <!> <!> <!></div>'),dl=H(`<div class="card_holder svelte-1ytaoom"><!> <div class="card_title"><!></div> <div class="card_pic svelte-1ytaoom"><!> <!>  <div class="hover-overlay svelte-1ytaoom"><div class="overlay-content svelte-1ytaoom"><div class="__inner_index_and_size svelte-1ytaoom"><div class="card-index __inner_index svelte-1ytaoom" style="background-color:black; color:white"><!> <!></div> <button class="__iframe_button svelte-1ytaoom">打开 iframe</button> <div class="card-index card-index-right __inner_index __inner_size svelte-1ytaoom"> </div></div> <div class="card-category card_info-item svelte-1ytaoom"><img class="card_category-img card_category_square svelte-1ytaoom" style="width: 36px;height: 36px;"> </div> <div style="width: 100%;" class="card_info-item card_info__sub_title svelte-1ytaoom"><a class="__main_title __straight svelte-1ytaoom" target="_blank" rel="noopener noreferrer"> </a></div> <div style="width: 100%;" class="card_info-item card_info__sub_title svelte-1ytaoom"><div class="__sub_title svelte-1ytaoom"> </div></div>  <!> <div class="card_info-item card_info__upload_time svelte-1ytaoom"><div> </div></div> <div class="card_info-item card_info__statistics svelte-1ytaoom"><div class="__center svelte-1ytaoom"><!> <b> </b></div> <div class="__center svelte-1ytaoom"><img style="width: 14px; height: 14px;" alt="SVG_Seeders" class="svelte-1ytaoom"> <b> </b></div> <div class="__center svelte-1ytaoom"><img style="width: 14px; height: 14px;" alt="SVG_Leechers" class="svelte-1ytaoom"> <b> </b></div> <div><button title="(原列表的这俩按钮会消失)" style="
                background-color: inherit; border-color:transparent">下载&收藏</button></div></div></div></div> <!> <!></div> <!></div>`);function _l(t,e){oe(e,false);const[r,n]=We(),a=()=>st(Ii,"$_mt_categories",r),i=()=>st(Ai,"$_mt_label",r),o=()=>st(da,"$_block_gay",r),c=()=>st(fn,"$_card_radius",r),l=()=>st(Tt,"$_card_detail",r),u=()=>st(fa,"$_show_hover_pic",r);let s=ft(e,"torrentInfo",8),_=et(false),f=et();s().status.toppingLevel&&P(f,Array(Number(s().status.toppingLevel)).fill());const d=s().status.discount,w=s().status.discountEndTime,m={FREE:"免费",PERCENT_50:"50%"},k=()=>{const y=new Date,V=new Date(w);return Math.floor((V.getTime()-y.getTime())/(1e3*3600))};let $=et(),g=et();const C="rgba(255, 255, 255, 0.5)";let O=et(),N=et();const E=`https://${location.host}/browse?cat=`+s().category;xt().CATEGORY[s().category]||(P(g,C),he.open({type:"warning",message:`存在未知分类: ${s().category}`}),xt(xt().CATEGORY[s().category]={src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZmMDAwMCIvPjwvc3ZnPg==",alt:"未知分类(TG或论坛联系我)",color:C})),P(O,a()[s().category].nameChs??xt().CATEGORY[s().category].alt),P(N,a()[s().category].image?z+a()[s().category].image:xt().CATEGORY[s().category].src),P(g,xt().CATEGORY[s().category].color??C);let x=et([]);s().labelsNew.length&&P(x,s().labelsNew.map(y=>{if(xt().TAG[y])return {key:y,config:xt().TAG[y]};if(i()){console.warn("[FALL]: 存在本地没有的 tag: ",y);let V;for(const F in i())if(y==i()[F].tag){V=i()[F];break}if(V)return {key:y,config:V}}return null}).filter(Boolean));function b(y){if(y===0)return "0 B";const V=["B","KB","MB","GB","TB"];let F=0,Y=y;for(;Y>=1024&&F<V.length-1;)Y/=1024,F++;return `${Y.toFixed(2).replace(/\.?0+$/,"")} ${V[F]}`}let L=et(),A=et();function G(y,V){const F=document.querySelectorAll(`a[href^="/detail/${y}"]`),Y=[];F.forEach(S=>{if(!/\/detail\/\d+/.test(S.href))return;const K=S.closest("tr");K&&K.querySelectorAll("button").forEach(it=>{it.querySelector("span.ant-btn-icon")&&Y.push(it);});}),Y.length?(Y[0].style.margin=0,[...new Set(Y)].forEach(K=>{V.appendChild(K);})):he.error("没找到捏, 建议在种子详情里下载收藏~");}let q=et(false),Q=et(false),ot=new Ao,at=et(),nt=et(),Ct=et(0);function pt(){v(nt)&&P(Ct,v(nt).offsetHeight);}let D=et(false);const ct="/static/cate/gayhd.gif",mt="https://static.m-team.cc/static/media/logo.80b63235eaf702e44a8d.png";let Ot=s().imageList[0]||mt,Z=et(),ce,Wt=et(false);const Lr=()=>{v(Wt)||(Vt(Z,v(Z).style.width="100%"),Vt(Z,v(Z).src=Ot),v(Z).classList.add("loaded"),Vt(Z,v(Z).style.opacity=1),P(Wt,true),v(nt)&&pt());};function Mr(){bt(Ti,"https://"+location.host+"/detail/"+s().id),bt(vn,1);}Pn(()=>{v(Wt)||(ce=new IntersectionObserver(y=>{y.forEach(V=>{V.isIntersecting&&(Lr(),ce.unobserve(v(Z)));});},{rootMargin:"100px"}),v(Z)&&!v(Wt)&&ce.observe(v(Z)),s().pt_fall_highlight&&v($).scrollIntoView({behavior:"smooth"}),setTimeout(()=>{},3e3)),pt(),v(Z)&&Vt(Z,v(Z).style.width="auto");}),$i(()=>{ce&&ce.disconnect();}),Pe(()=>v(nt),()=>{v(nt)&&pt();}),Pe(()=>(fe(s()),o(),v(Z),v(nt)),()=>{s().category==440&&o()==0&&v(Z)&&(Vt(Z,v(Z).style.width="100%"),Vt(Z,v(Z).src=Ot),v(Z).classList.add("loaded"),Vt(Z,v(Z).style.opacity=1),P(Wt,true),v(nt)&&pt());}),Sn(),be();var ue=dl(),Ge=h(ue);{var Nr=y=>{var V=Oo();T(V,"data-href",E);var F=h(V),Y=p(F);j(S=>{T(V,"style",`
      background-color: ${v(g)??"transparent"};
      color: ${S??""}`),T(F,"src",v(N)),T(F,"alt",v(O)),R(Y,`    ${v(O)??""}`);},[()=>v(g)?Ut(v(g)):"black"],At),M(y,V);};B(Ge,y=>{l().category&&y(Nr);});}var Sr=p(Ge,2),je=h(Sr);{var $r=y=>{var V=Ro(),F=h(V);j(()=>{T(V,"href","/detail/"+s().id),R(F,s().name);}),M(y,V);};B(je,y=>{l().title&&y($r);});}var ve=p(Sr,2),Vr=h(ve);{var Hn=y=>{var V=ne(),F=Lt(V);{var Y=K=>{var it=Do(),ut=h(it),dt=h(ut);T(dt,"src",ct),j(()=>T(it,"style",`  background-color: ${v(g)??""}`)),M(K,it);},S=K=>{var it=ne(),ut=Lt(it);{var dt=J=>{var lt=Fo();T(lt,"data-src",Ot),ee(lt,U=>P(Z,U),()=>v(Z)),j(()=>{T(lt,"src",v(Wt)?Ot:mt),T(lt,"alt",s().id);}),W("error",lt,()=>{P(D,true),v(Z)||console.log(`<${s().index}>[${s().id}] imgElement 丢失.`);}),M(J,lt);},Rt=J=>{var lt=zo(),U=h(lt),vt=h(U);T(vt,"src",Ho),M(J,lt);};B(ut,J=>{s().imageList[0]?J(dt):J(Rt,false);},true);}M(K,it);};B(F,K=>{o()&&s().category==440?K(Y):K(S,false);});}M(y,V);},Tr=y=>{var V=qo(),F=h(V),Y=h(F);T(Y,"src",Po);var S=p(F,2);j(K=>T(S,"style",`color: ${K??""}; font-size:16px;`),[()=>Ut(v(g))],At),M(y,V);};B(Vr,y=>{v(D)?y(Tr,false):y(Hn);});}var Ye=p(Vr,2);{var On=y=>{var V=Bo(),F=h(V);j(()=>T(F,"src",xt().ICON.PREVIEW)),W("mouseover",V,Y=>{P(q,true),ot.handleMouseOver(Y,v(Z));}),M(y,V);};B(Ye,y=>{u()&&!v(D)&&y(On);});}var Gt=p(Ye,2),Ue=h(Gt),Xe=h(Ue),Ar=h(Xe),Ir=h(Ar);{var Pr=y=>{var V=Wo(),F=Lt(V);_e(F,5,()=>v(f),lr,(Y,S)=>{var K=Zo();j(()=>T(K,"src",xt().ICON.PIN)),M(Y,K);}),M(y,V);};B(Ir,y=>{s().status.toppingLevel!="0"&&y(Pr);});}var Qe=p(Ir),Rn=p(Qe);{var Dn=y=>{var V=Go();cr(V,"_tag_discount_free",d=="FREE"),cr(V,"_tag_discount_50",d=="PERCENT_50");var F=h(V);j(Y=>R(F,`${m[d]??""}${Y??""}`),[()=>w?":"+k()+"小时":""],At),M(y,V);};B(Rn,y=>{d!="NORMAL"&&y(Dn);});}var we=p(Ar,2),Je=p(we,2),Fn=h(Je),xe=p(Xe,2);T(xe,"data-href",E);var Ce=h(xe),Hr=p(Ce),Ke=p(xe,2),tr=h(Ke),Or=h(tr),er=p(Ke,2),zn=h(er),qn=h(zn),rr=p(er,2);{var Rr=y=>{var V=Qo(),F=h(V);{var Y=J=>{var lt=jo();M(J,lt);};B(F,J=>{(Number(s().labels)&1)===1&&J(Y);});}var S=p(F,2);{var K=J=>{var lt=Yo();M(J,lt);};B(S,J=>{(Number(s().labels)&2)===2&&J(K);});}var it=p(S,2);{var ut=J=>{var lt=Uo();M(J,lt);};B(it,J=>{(Number(s().labels)&4)===4&&J(ut);});}var dt=p(it,2);{var Rt=J=>{var lt=ne(),U=Lt(lt);_e(U,1,()=>v(x),lr,(vt,yt)=>{var _t=Xo(),Ee=h(_t);j(()=>{T(_t,"style",`background-color: ${v(yt).config.bgColor??""}; color: ${v(yt).config.color??""}`),R(Ee,v(yt).key);}),M(vt,_t);}),M(J,lt);};B(dt,J=>{v(x).length!=0&&J(Rt);});}M(y,V);};B(rr,y=>{(Number(s().labels)||v(x).length)&&y(Rr);});}var Dr=p(rr,2),Bn=h(Dr),Fr=h(Bn),zr=p(Dr,2),qr=h(zr),Br=h(qr);Ya(Br);var Zr=p(Br,2),Wr=h(Zr),Gr=p(qr,2),jr=h(Gr),Yr=p(jr,2),Ur=h(Yr),Xr=p(Gr,2),Qr=h(Xr),Jr=p(Qr,2),Kr=h(Jr),nr=p(Xr,2),tn=h(nr);ee(nr,y=>P(L,y),()=>v(L)),ee(Ue,y=>P(nt,y),()=>v(nt)),ee(Gt,y=>P(at,y),()=>v(at));var ar=p(Gt,2);{var en=y=>{var V=el(),F=h(V);{var Y=ut=>{var dt=Ko(),Rt=Lt(dt);_e(Rt,5,()=>v(f),lr,(J,lt)=>{var U=Jo();j(()=>T(U,"src",xt().ICON.PIN)),M(J,U);}),M(ut,dt);};B(F,ut=>{l().topping&&s().status.toppingLevel!="0"&&ut(Y);});}var S=p(F),K=p(S);{var it=ut=>{var dt=tl();cr(dt,"_tag_discount_free",d=="FREE"),cr(dt,"_tag_discount_50",d=="PERCENT_50");var Rt=h(dt);j(J=>R(Rt,`${m[d]??""}${J??""}`),[()=>w?":"+k()+"小时":""],At),M(ut,dt);};B(K,ut=>{l().free&&d!="NORMAL"&&ut(it);});}j(()=>R(S,` ${s().index??""}

          `)),M(y,V);};B(ar,y=>{v(_)||y(en);});}var Zn=p(ar,2);{var Wn=y=>{var V=rl(),F=h(V);j((Y,S)=>{T(V,"style",`background-color: ${v(g)??"transparent"}; color:${Y??""}`),R(F,S);},[()=>v(g)?Ut(v(g)):"black",()=>b(s().size)],At),M(y,V);};B(Zn,y=>{l().size&&!v(_)&&y(Wn);});}var rn=p(ve,2);{var nn=y=>{var V=fl(),F=h(V);{var Y=U=>{var vt=nl(),yt=h(vt),_t=h(yt);j(()=>R(_t,s().smallDescr)),M(U,vt);};B(F,U=>{l().sub_title&&U(Y);});}var S=p(F,2);{var K=U=>{var vt=ll(),yt=h(vt);{var _t=gt=>{var Kt=al();M(gt,Kt);};B(yt,gt=>{(s().labels&1)===1&&gt(_t);});}var Ee=p(yt,2);{var an=gt=>{var Kt=il();M(gt,Kt);};B(Ee,gt=>{(s().labels&2)===2&&gt(an);});}var ir=p(Ee,2);{var Gn=gt=>{var Kt=sl();M(gt,Kt);};B(ir,gt=>{(s().labels&4)===4&&gt(Gn);});}var sn=p(ir,2);{var jn=gt=>{var Kt=ne(),Hi=Lt(Kt);_e(Hi,1,()=>v(x),lr,(Oi,Yn)=>{var Un=ol(),Ri=h(Un);j(()=>{T(Un,"style",`background-color: ${v(Yn).config.bgColor??""}; color: ${v(Yn).config.color??""}`),R(Ri,v(Yn).key);}),M(Oi,Un);}),M(gt,Kt);};B(sn,gt=>{v(x).length!=0&&gt(jn);});}M(U,vt);};B(S,U=>{l().tags&&(Number(s().labels)||v(x).length)&&U(K);});}var it=p(S,2);{var ut=U=>{var vt=cl(),yt=h(vt);ee(vt,_t=>P(A,_t),()=>v(A)),j(_t=>T(yt,"style",`
              background-color: ${(v(g)?v(g):"transparent")??""};
              color: ${_t??""} ;
              border: 3px solid transparent;
              border-radius: 14px;
              overflow: hidden;
            `),[()=>v(g)?Ut(v(g)):"black"],At),W("click",yt,_t=>{G(s().id,v(A)),_t.target.style.display="none";}),M(U,vt);};B(it,U=>{l().download_collect&&U(ut);});}var dt=p(it,2);{var Rt=U=>{var vt=ul(),yt=h(vt),_t=h(yt);j(()=>R(_t,`上传时间:${s().createdDate??""}`)),M(U,vt);};B(dt,U=>{l().upload_time&&U(Rt);});}var J=p(dt,2);{var lt=U=>{var vt=vl(),yt=h(vt);Ya(yt);var _t=p(yt,2),Ee=h(_t),an=p(_t,2),ir=p(an,2),Gn=h(ir),sn=p(ir,2),jn=p(sn,2),gt=h(jn);j(()=>{R(Ee,s().status.comments),T(an,"src",xt().ICON.SEEDERS),R(Gn,s().status.seeders),T(sn,"src",xt().ICON.LEECHERS),R(gt,s().status.leechers);}),M(U,vt);};B(J,U=>{l().statistics&&U(lt);});}j(U=>T(V,"style",`
        background-color: ${(v(g)?v(g)+"b0":"transparent")??""};
        color: ${U??""}`),[()=>v(g)?Ut(v(g)):"black"],At),M(y,V);};B(rn,y=>{(l().sub_title||l().tags||l().download_collect||l().upload_time||l().statistics)&&y(nn);});}ee(ue,y=>P($,y),()=>v($)),j((y,V)=>{Xt(ue,"--borderRadius",c().enabled?c().value+"px":"0"),T(ve,"style",`min-height: ${v(Ct)+24}px;`),Xt(ve,"--cateColor",v(g)+"b0"),R(Qe,` ${s().index??""}

              `),T(we,"style",`background-color: ${v(g)??"transparent"}; color:${y??""}`),T(Je,"style",`background-color: ${v(g)??"transparent"}; color:${y??""}`),R(Fn,V),T(xe,"style",`
            height: 40px;
            background-color: ${v(g)??"transparent"};
            color: ${y??""}`),T(Ce,"src",v(N)),T(Ce,"alt",v(O)),R(Hr,`    ${v(O)??""}`),T(tr,"href","/detail/"+s().id),T(tr,"title",s().name),R(Or,s().name),R(qn,s().smallDescr),R(Fr,`上传时间:${s().createdDate??""}`),R(Wr,s().status.comments),T(jr,"src",xt().ICON.SEEDERS),R(Ur,s().status.seeders),T(Qr,"src",xt().ICON.LEECHERS),R(Kr,s().status.leechers),T(nr,"style",`
              background-color: ${(v(g)?v(g):"transparent")??""};
              color: ${y??""} ;
              border-radius: 14px;
              overflow: hidden;
            `);},[()=>v(g)?Ut(v(g)):"black",()=>b(s().size)],At),W("click",we,Mr),W("mousedown",Ke,Ve(y=>{y.stopPropagation();})),W("mousedown",tn,Ve(y=>{y.stopPropagation();})),W("click",tn,Ve(y=>{G(s().id,v(L)),y.target.style.display="none";})),W("mouseenter",Gt,()=>{v(Z)&&Vt(Z,v(Z).style.filter="blur(2px)"),Vt(at,v(at).style.opacity="1"),P(_,true);}),W("mousemove",Gt,y=>{P(Q,true),v(q)&&v(Q)&&ot.handleMouseMove(y);}),W("mouseleave",Gt,()=>{v(Z)&&Vt(Z,v(Z).style.filter="none"),Vt(at,v(at).style.opacity="0"),P(_,false),P(Q,false),v(q)&&(P(q,false),ot.clearPreview());}),W("mousedown",Gt,Mi(Mr)),M(t,ue),le(),n();}var hl=H('<p class="text_center svelte-1vmncc1">没有结果捏</p>'),pl=H('<main><div class="fall_holder svelte-1vmncc1" style=""><!></div></main>');function gl(t,e){var E,x,b,L;oe(e,false);const[r,n]=We(),a=()=>st(fr,"$_card_layout",r),i=et();let o=ft(e,"infoList",8),c=et(o().data);v(c).length;let l=et();Te.get_bg_color(),Object.keys(v(c)).forEach((A,G)=>{Vt(c,v(c)[A].index=G+1);}),console.log("Mteam_Fall:First	"+v(c).length);function u(A,G=true){let q=A.data;console.log("Mteam_Fall:New:	"+q.length),G?(s(),Object.keys(q).forEach((Q,ot)=>{q[Q].index=ot+1,ot==0&&(q[Q].pt_fall_highlight=true);}),P(c,[...q])):(Object.keys(q).forEach((Q,ot)=>{q[Q].index=ot+1+v(c).length,ot==0&&(q[Q].pt_fall_highlight=true);}),P(c,[...v(c),...q]));}function s(){P(c,[]);}function _(A,G){G=="top"&&A.scrollIntoView({behavior:"smooth"}),G=="bottom"&&(A.scrollIntoView({behavior:"auto",block:"end",inline:"nearest"}),A.scrollIntoView({behavior:"auto",block:"end",inline:"nearest"}),A.scrollIntoView({behavior:"auto",block:"end",inline:"nearest"}));}function f(A="top"){_(v(l),A);}let d,w,m;try{d=_r(localStorage.getItem("persist:persist")),w=(x=(E=d.sysinfo)==null?void 0:E.sysConf)==null?void 0:x.TORRENT_LABEL_CONFIG,m=(L=(b=d.sysinfo)==null?void 0:b.categoryList)==null?void 0:L.categorys,w&&bt(Ai,w),m&&bt(Ii,m);}catch(A){console.error(A),console.log(d);}Pe(()=>v(c),()=>{P(i,[...v(c)]);}),Sn(),be();var k=pl(),$=h(k),g=h($);{var C=A=>{bo(A,{animate:true,get items(){return v(i)},get minColWidth(){return a().min},get maxColWidth(){return a().max},get gap(){return a().gap},children:Ms,$$slots:{default:(G,q)=>{const Q=At(()=>q.item);_l(G,{get torrentInfo(){return v(Q)}});}}});},O=A=>{var G=hl();M(A,G);};B(g,A=>{v(i).length?A(C):A(O,false);});}ee(k,A=>P(l,A),()=>v(l)),M(t,k),ta(e,"updateList",u),ta(e,"clearList",s),ta(e,"focusFall",f);var N=le({updateList:u,clearList:s,focusFall:f});return n(),N}let ml="0.3.4";var yl=Ze('<svg class="tgme_logo" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle cx="17" cy="17" fill="#40a9ff" r="17"></circle><path d="m7.06510669 16.9258959c5.22739451-2.1065178 8.71314291-3.4952633 10.45724521-4.1662364 4.9797665-1.9157646 6.0145193-2.2485535 6.6889567-2.2595423.1483363-.0024169.480005.0315855.6948461.192827.1814076.1361492.23132.3200675.2552048.4491519.0238847.1290844.0536269.4231419.0299841.65291-.2698553 2.6225356-1.4375148 8.986738-2.0315537 11.9240228-.2513602 1.2428753-.7499132 1.5088847-1.2290685 1.5496672-1.0413153.0886298-1.8284257-.4857912-2.8369905-1.0972863-1.5782048-.9568691-2.5327083-1.3984317-4.0646293-2.3321592-1.7703998-1.0790837-.212559-1.583655.7963867-2.5529189.2640459-.2536609 4.7753906-4.3097041 4.755976-4.431706-.0070494-.0442984-.1409018-.481649-.2457499-.5678447-.104848-.0861957-.2595946-.0567202-.3712641-.033278-.1582881.0332286-2.6794907 1.5745492-7.5636077 4.6239616-.715635.4545193-1.3638349.6759763-1.9445998.6643712-.64024672-.0127938-1.87182452-.334829-2.78737602-.6100966-1.12296117-.3376271-1.53748501-.4966332-1.45976769-1.0700283.04048-.2986597.32581586-.610598.8560076-.935815z" fill="#fff"></path></g></svg>');function bl(t,e){let r=ft(e,"height",8,34),n=ft(e,"width",8,34);var a=yl();j(()=>{T(a,"height",r()),T(a,"width",n());}),M(t,a);}var wl=H('<div class="modal-overlay svelte-1a87xm5" role="button" aria-hidden="true"><div class="modal-content svelte-1a87xm5" role="button" aria-hidden="true"><div class="modal-header svelte-1a87xm5"><h3 class="svelte-1a87xm5">关于 PT-Fall</h3> <button class="close-btn svelte-1a87xm5">&times;</button></div> <div class="modal-body svelte-1a87xm5"><h4 class="svelte-1a87xm5">PT-Fall 是一个专为 M-team 站点量身定制的瀑布流视图插件</h4> <p class="svelte-1a87xm5">Github: <a href="https://github.com/KesaubeEire/PT_Fall-View" target="_blank">https://github.com/KesaubeEire/PT_Fall-View</a></p> <p class="svelte-1a87xm5">GreaseFork: <a href="https://greasyfork.org/zh-CN/scripts/543925" target="_blank">https://greasyfork.org/zh-CN/scripts/543925</a></p></div></div></div>'),xl=H('<div class="modal-overlay svelte-1a87xm5" role="button" aria-hidden="true"><div class="modal-content svelte-1a87xm5" role="button" aria-hidden="true"><div class="modal-header svelte-1a87xm5"><h3 class="svelte-1a87xm5">FAQ - 常见问题</h3> <button class="close-btn svelte-1a87xm5">&times;</button></div> <div class="modal-body svelte-1a87xm5"><h4 class="svelte-1a87xm5">Q: 如何联系反馈问题</h4> <p class="svelte-1a87xm5"><a class="__btn __btnWide svelte-1a87xm5" href="https://t.me/+Nd_qIisDjQ80ZTc9" target="_blank"><!> &nbsp;Telegram</a></p> <h4 class="svelte-1a87xm5">Q: 找不到悬浮框</h4> <button class="__btn svelte-1a87xm5">重置悬浮框位置</button> <p class="svelte-1a87xm5"><br>可以通过拖拽悬浮框顶部的颜色条来移动悬浮框的位置 <br>从 PTPP 那里来的灵感 ( 感恩 ||T|| 佬 )</p> <h4 class="svelte-1a87xm5">Q: 插件没有生效怎么办</h4> <p class="svelte-1a87xm5">可能是浏览器缓存了请求<br>尝试使用 Ctrl+Shift+R / Ctrl+F5 强制刷新页面</p> <h4 class="svelte-1a87xm5">Q: 如何切换瀑布流视图</h4> <p class="svelte-1a87xm5">点击悬浮面板中的第一个图标(瀑布/列表)按钮<br>即可在瀑布流和原列表视图间切换</p> <h4 class="svelte-1a87xm5">Q: 如何调整卡片布局</h4> <p class="svelte-1a87xm5">点击悬浮面板中的"配置"按钮<br>可以调整卡片的最小 / 最大宽度、间隔等参数</p> <h4 class="svelte-1a87xm5">Q: 快捷键</h4> <p class="svelte-1a87xm5"><span class="modal-code svelte-1a87xm5">x</span> 可以切换瀑布流视图</p> <p class="svelte-1a87xm5"><span class="modal-code svelte-1a87xm5">ESC</span> 可以从 次级菜单 / 配置菜单 / iframe 中退出</p> <h4 class="svelte-1a87xm5">Q: 深色模式颜色有些不对劲怎么办?</h4> <p class="svelte-1a87xm5">先刷新一下试试, 有些字体颜色不能即时更改<br>刷新后就可以了<br>还有颜色不对劲的 telegram 上截图告诉我</p></div></div></div>'),Cl=H('<div class="entry_mteam"><div class="ant-typography" style="line-height: 1.5; text-align: center;"><button class="__btn svelte-1a87xm5" id="_ptFall_about">PT-Fall<br><span style="font-weight: 600;"></span></button> <button class="__btn svelte-1a87xm5" id="_ptFall_faq">常见问题<br>FAQ</button></div></div> <!> <!>',1);function El(t,e){oe(e,false);const[r,n]=We(),a=()=>st(hr,"$_isFallView",r),i=()=>st(Se,"$_textColor",r);let o=et(false),c=et(false);function l(){P(o,true);}function u(){P(o,false);}function s(){P(c,true);}function _(){P(c,false);}let f=et();Pe(()=>a(),()=>{P(f,a()?"#4ff74f":"yellow");}),Sn(),be();var d=Cl();W("keydown",pr,x=>{x.key==="Escape"&&(u(),_());},true);var w=Lt(d),m=h(w),k=h(m),$=p(h(k),2);$.textContent=`[v${ml}]`;var g=p(k,2),C=p(w,2);{var O=x=>{var b=wl(),L=h(b),A=h(L),G=p(h(A),2);j(()=>T(L,"style",`color: ${i().t3}`)),W("click",G,_),W("click",L,Ve(function(q){Ba.call(this,e,q);})),He(3,b,()=>Oe,()=>({duration:200})),W("click",b,_),M(x,b);};B(C,x=>{v(c)&&x(O);});}var N=p(C,2);{var E=x=>{var b=xl(),L=h(b),A=h(L),G=p(h(A),2),q=p(A,2),Q=p(h(q),2),ot=h(Q),at=h(ot);bl(at,{height:24,width:24});var nt=p(Q,4),Ct=p(nt,18),pt=h(Ct),D=p(Ct,2),ct=h(D);j(()=>{T(L,"style",`color: ${i().t3}`),T(ot,"style",`color: ${i().t2}`),Xt(ot,"--hover","#40a9ff"),T(nt,"style",`color: ${i().t2}`),Xt(nt,"--hover","#40a9ff"),T(pt,"style",`color: ${i().t1}`),T(ct,"style",`color: ${i().t1}`);}),W("click",G,u),W("click",nt,()=>{bt(va,{x:0,y:0});}),W("click",L,Ve(function(mt){Ba.call(this,e,mt);})),He(3,b,()=>Oe,()=>({duration:200})),W("click",b,u),M(x,b);};B(N,x=>{v(o)&&x(E);});}j(()=>{T(k,"style",`color: ${i().t2}`),Xt(k,"--hover","green"),Xt($,"color",v(f)),T(g,"style",`color: ${i().t2}`),Xt(g,"--hover","#40a9ff");}),W("click",k,s),W("click",g,l),M(t,d),le(),n();}function kl(t,e){oe(e,false);const[r,n]=We(),a=()=>st(hr,"$_isFallView",r),i=()=>st(Se,"$_textColor",r);let o,c,l,u=true,s=getComputedStyle(document.documentElement).getPropertyValue("--bg-2").trim(),_;const f=document.createElement("div");f.classList.add("Fall_DOM"),Me(Te.TL_Selector,d),Me('a[href="/index"][target="_self"]',x=>{if(o)he.error("未找到目标链接元素"),console.warn("[FALL]: 未找到目标链接元素");else {x.insertAdjacentHTML("afterend",'<div class="ptFallReadme"></div>');const b=x.parentNode.querySelector(".ptFallReadme");o=br(El,{target:b});}}),Pn(()=>{E(),console.log("=====> 启动劫持 pushState 方法 <====="),O(),_=new MutationObserver(()=>{const x=getComputedStyle(document.documentElement).getPropertyValue("--bg-2").trim();x!==s&&(s=x,console.log("--bg-2 变化:",s),he.open({type:"warning",message:`--bg-2 变化: ${s}`}),E());}),_.observe(document.documentElement,{attributes:true,attributeFilter:["style","class","data-theme"]});}),$i(()=>{_&&_.disconnect();});function d(x){if(x.parentNode){console.log("元素已找到，正在插入兄弟节点:",x),uo();const b={path:"/search",method:"POST"};window.addEventListener("req>POST->/search",L=>{console.log(`<PT-Fall>[Request]  (${b.method} -> ${b.path})
`,L.detail),u=true,u?c&&c.focusFall():c&&c.focusFall("bottom");}),window.addEventListener("res>POST->/search",L=>{const A=JSON.parse(L.detail.data);console.log(`<PT-Fall>[Response] (${b.method}->${b.path})[通过事件捕获]:
`,A),g(a()),w(x),he.success("捕获到 /search !"),l=A.data,c?c.updateList(l,u):c=br(gl,{target:f,props:{infoList:l}});});}else he.error(`找不到指定节点
若总是如此请报告bug`),console.error("无法插入：目标元素没有父节点");}function w(x){const b=x.parentNode.querySelector(".ant-spin-nested-loading"),L=document.createElement("div");L.id="_shield",L.addEventListener("click",()=>{confirm(`[PT-Fall]
如果你认为你被阻挡了请点击确认
这个阻挡效果会被取消
这可能导致显示错误
请确认您不在一般的瀑布流视图下
比如您在逛论坛或者在发种之类的被遮挡了再点`)&&(L.style.display="none");}),b.querySelector("#_shield")||b.appendChild(L);const A=document.createElement("div");A.id="_fallHolder",b.querySelector("#_fallHolder")||(b.appendChild(A),A.appendChild(f));}let m="",k="",$="";function g(x){f.style.display=x?"block":"none",Me("#_fallHolder",b=>{b.style.display=x?"block":"none";}),Me("#_shield",b=>{b.style.display=x?"block":"none";}),Me(Te.TL_Selector+".flex",b=>{k||(k=getComputedStyle(b).getPropertyValue("max-width"),$=getComputedStyle(b).getPropertyValue("padding-left")),b.style.maxWidth=x?"none":k,b.style.paddingLeft=x?"80px":$,b.style.paddingRight=x?"80px":$;}),Me(Te.TL_Selector+" .mx-auto",b=>{m||(m=b.style.margin),b.style.margin=x?0:m;});}window.changeFallView=g;const C=history.pushState;function O(){history.pushState=function(x,b,L){console.log(`%c ====> URL跳转劫持: %c${L}`,"color: cyan","color: white"),L.includes("/browse")||L=="/waterfall"?console.log(`--->属于 browse 范围: ${L}`):(console.warn(`[FALL]: --->不属于 browse 范围: ${L}`),g(false)),C.apply(history,arguments);};}function N(x){return getComputedStyle(document.documentElement).getPropertyValue(x).trim()}function E(){ht(Se,I(i).t1=Ut(N("--bg-1")),I(i)),ht(Se,I(i).t2=Ut(N("--bg-2")),I(i)),ht(Se,I(i).t3=Ut(N("--bg-3")),I(i));}be(),le(),n();}function Ll(t){if(location.hostname.includes("m-team"))return Te}var Ml=H('<div class="switch-container svelte-18ntgfp"><div class="switch-background svelte-18ntgfp"><div class="switch-slider svelte-18ntgfp"></div></div></div>');function Mt(t,e){let r=ft(e,"checked",12,false);function n(){r(!r());}var a=Ml(),i=h(a),o=h(i);j(()=>cr(o,"checked",r())),W("click",a,n),M(t,a);}var Nl=Ze(`<svg viewBox="0 0 32 32" width="20" height="20" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><defs><style>.cls-1 {
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2px;
      }</style></defs><g data-name="43-browser" id="_43-browser"><rect class="cls-1" height="30" width="30" x="1" y="1"></rect><line class="cls-1" x1="1" x2="31" y1="9" y2="9"></line><line class="cls-1" x1="5" x2="7" y1="5" y2="5"></line><line class="cls-1" x1="11" x2="13" y1="5" y2="5"></line><line class="cls-1" x1="9" x2="25" y1="16" y2="16"></line><line class="cls-1" x1="7" x2="25" y1="20" y2="20"></line><line class="cls-1" x1="7" x2="25" y1="24" y2="24"></line></g></svg>`);function Sl(t){var e=Nl();M(t,e);}var $l=Ze(`<svg width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><defs><style>.cls-1 {
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2px;
      }</style></defs><g data-name="80-setting" id="_80-setting"><circle class="cls-1" cx="10" cy="6" r="3"></circle><circle class="cls-1" cx="22" cy="16" r="3"></circle><circle class="cls-1" cx="10" cy="26" r="3"></circle><line class="cls-1" x1="7" x2="1" y1="6" y2="6"></line><line class="cls-1" x1="15" x2="1" y1="16" y2="16"></line><line class="cls-1" x1="7" x2="1" y1="26" y2="26"></line><line class="cls-1" x1="31" x2="17" y1="26" y2="26"></line><line class="cls-1" x1="31" x2="25" y1="16" y2="16"></line><line class="cls-1" x1="31" x2="17" y1="6" y2="6"></line></g></svg>`);function Vl(t){var e=$l();M(t,e);}var Tl=Ze('<svg enable-background="new 0 0 64 64" width="20" height="20" id="Layer_1" version="1.1" viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19,2.875H3.5c-0.829,0-1.5,0.671-1.5,1.5v19.979c0,0.829,0.671,1.5,1.5,1.5H19c0.829,0,1.5-0.671,1.5-1.5V4.375  C20.5,3.546,19.829,2.875,19,2.875z M17.5,22.854H5V5.875h12.5V22.854z"></path><path d="M19,28.773H3.5c-0.829,0-1.5,0.671-1.5,1.5v6.166c0,0.828,0.671,1.5,1.5,1.5H19c0.829,0,1.5-0.672,1.5-1.5v-6.166  C20.5,29.445,19.829,28.773,19,28.773z M17.5,34.939H5v-3.166h12.5V34.939z"></path><path d="M19,40.859H3.5c-0.829,0-1.5,0.672-1.5,1.5v17.266c0,0.828,0.671,1.5,1.5,1.5H19c0.829,0,1.5-0.672,1.5-1.5V42.359  C20.5,41.531,19.829,40.859,19,40.859z M17.5,58.125H5V43.859h12.5V58.125z"></path><path d="M40,2.875H24.5c-0.829,0-1.5,0.671-1.5,1.5v14.25c0,0.829,0.671,1.5,1.5,1.5H40c0.828,0,1.5-0.671,1.5-1.5V4.375  C41.5,3.546,40.828,2.875,40,2.875z M38.5,17.125H26V5.875h12.5V17.125z"></path><path d="M40,23.125H24.5c-0.829,0-1.5,0.671-1.5,1.5V46.5c0,0.828,0.671,1.5,1.5,1.5H40c0.828,0,1.5-0.672,1.5-1.5V24.625  C41.5,23.796,40.828,23.125,40,23.125z M38.5,45H26V26.125h12.5V45z"></path><path d="M40,51H24.5c-0.829,0-1.5,0.672-1.5,1.5v7.125c0,0.828,0.671,1.5,1.5,1.5H40c0.828,0,1.5-0.672,1.5-1.5V52.5  C41.5,51.672,40.828,51,40,51z M38.5,58.125H26V54h12.5V58.125z"></path><path d="M60.5,2.875H45c-0.828,0-1.5,0.671-1.5,1.5v35.171c0,0.828,0.672,1.5,1.5,1.5h15.5c0.828,0,1.5-0.672,1.5-1.5V4.375  C62,3.546,61.328,2.875,60.5,2.875z M59,38.046H46.5V5.875H59V38.046z"></path><path d="M60.5,44.346H45c-0.828,0-1.5,0.672-1.5,1.5v13.779c0,0.828,0.672,1.5,1.5,1.5h15.5c0.828,0,1.5-0.672,1.5-1.5V45.846  C62,45.018,61.328,44.346,60.5,44.346z M59,58.125H46.5V47.346H59V58.125z"></path></svg>');function Al(t){var e=Tl();M(t,e);}var Il=H('<div><!></div> <div class="flowBtn_text svelte-3a4txt">瀑布</div>',1),Pl=H('<div><!></div> <div class="flowBtn_text svelte-3a4txt">列表</div>',1),Hl=H('<div class="config-item svelte-3a4txt"><span> </span> <input type="range" min="0" max="40" step="1" class="svelte-3a4txt"></div>'),Ol=H('<div class="config-menu-overlay svelte-3a4txt"><div class="config-menu svelte-3a4txt"><div class="config-menu-header svelte-3a4txt"><span style="font-size: 18px; font-weight: bold;">配置菜单</span> <button class="close-btn svelte-3a4txt">&times;</button></div> <div class="config-menu-content svelte-3a4txt"><h3 class="svelte-3a4txt"># 卡片布局</h3> <div class="config-item svelte-3a4txt"><span> </span> <input type="range" min="200" step="1" list="values" class="svelte-3a4txt"></div> <div class="config-item svelte-3a4txt"><span> </span> <input type="range" step="1" list="values" class="svelte-3a4txt"></div> <div class="config-item svelte-3a4txt"><span> </span> <input type="range" min="0" max="100" step="1" list="values" class="svelte-3a4txt"></div> <div class="config-item svelte-3a4txt"><span> </span> <!></div> <h3 class="svelte-3a4txt"># 卡片常驻信息展示</h3>  <div class="config-item svelte-3a4txt"><span> </span> <!></div> <div class="config-item svelte-3a4txt"><span> </span> <!></div> <div class="config-item svelte-3a4txt"><span> </span> <!></div> <div class="config-item svelte-3a4txt"><span> </span> <!></div> <div class="config-item svelte-3a4txt"><span> </span> <!></div> <div class="config-item svelte-3a4txt"><span> </span> <!></div> <div class="config-item svelte-3a4txt"><span> </span> <!></div> <div class="config-item svelte-3a4txt"><span> </span> <!></div> <div class="config-item svelte-3a4txt"><span> </span> <!></div> <div class="config-item svelte-3a4txt"><span> </span> <!></div> <h3 class="svelte-3a4txt"># 卡片屏蔽</h3> <div class="config-item svelte-3a4txt"><span> </span> <!></div> <h3 class="svelte-3a4txt"># 卡片样式</h3> <div class="config-item svelte-3a4txt"><span> </span> <!></div> <!></div></div></div>'),Rl=H('<div class="flowP svelte-3a4txt"><div class="flowPDragger svelte-3a4txt" role="button" tabindex="0" aria-hidden="true"></div> <div class="flowPHolder ant-typography svelte-3a4txt"><button class="flowBtn svelte-3a4txt"><!></button> <button class="flowBtn svelte-3a4txt"><div><!></div> <div class="flowBtn_text svelte-3a4txt">配置</div></button> <button class="flowBtn svelte-3a4txt">清除悬浮预览图</button></div></div> <!>',1);function Dl(t,e){oe(e,false);const[r,n]=We(),a=()=>st(va,"$_panelPos",r),i=()=>st(hr,"$_isFallView",r),o=()=>st(Se,"$_textColor",r),c=()=>st(vr,"$_side_panel_switch",r),l=()=>st(fr,"$_card_layout",r),u=()=>st(fa,"$_show_hover_pic",r),s=()=>st(Tt,"$_card_detail",r),_=()=>st(da,"$_block_gay",r),f=()=>st(fn,"$_card_radius",r);let d=et(),w=false,m=0,k=0;function $(D,ct,mt){return D<=ct&&(D=ct),D>=mt&&(D=mt),D}const g=D=>{D.preventDefault(),w=true,m=D.clientX-v(d).getBoundingClientRect().left,k=D.clientY-v(d).getBoundingClientRect().top;},C=D=>{if(!w)return;const ct=$(D.clientX-m,0,window.innerWidth-(v(d).getBoundingClientRect().width+5)),mt=$(D.clientY-k,0,window.innerHeight-(v(d).getBoundingClientRect().height+5));bt(va,{x:ct,y:mt});},O=()=>{w=false;};Pn(()=>(window.addEventListener("mousemove",C),window.addEventListener("mouseup",O),()=>{window.removeEventListener("mousemove",C),window.removeEventListener("mouseup",O);})),be();var N=Rl();W("keydown",pr,D=>{D.key==="x"&&(bt(hr,!i()),window.changeFallView(i()));},true);var E=Lt(N),x=h(E),b=p(x,2),L=h(b),A=h(L);{var G=D=>{var ct=Il(),mt=Lt(ct),Ot=h(mt);Al(Ot),M(D,ct);},q=D=>{var ct=Pl(),mt=Lt(ct),Ot=h(mt);Sl(Ot),M(D,ct);};B(A,D=>{i()?D(G):D(q,false);});}var Q=p(L,2),ot=h(Q),at=h(ot);Vl(at);var nt=p(Q,2);ee(E,D=>P(d,D),()=>v(d));var Ct=p(E,2);{var pt=D=>{var ct=Ol(),mt=h(ct),Ot=h(mt),Z=p(h(Ot),2),ce=p(Ot,2),Wt=p(h(ce),2),Lr=h(Wt),Mr=h(Lr),ue=p(Lr,2),Ge=p(Wt,2),Nr=h(Ge),Sr=h(Nr),je=p(Nr,2),$r=p(Ge,2),ve=h($r),Vr=h(ve),Hn=p(ve,2),Tr=p($r,2),Ye=h(Tr),On=h(Ye),Gt=p(Ye,2);Mt(Gt,{get checked(){return Za(),u()},set checked(S){bt(fa,S);},$$legacy:true});var Ue=p(Tr,4),Xe=h(Ue),Ar=h(Xe),Ir=p(Xe,2);Mt(Ir,{get checked(){return s().category},set checked(S){ht(Tt,I(s).category=S,I(s));},$$legacy:true});var Pr=p(Ue,2),Qe=h(Pr),Rn=h(Qe),Dn=p(Qe,2);Mt(Dn,{get checked(){return s().title},set checked(S){ht(Tt,I(s).title=S,I(s));},$$legacy:true});var we=p(Pr,2),Je=h(we),Fn=h(Je),xe=p(Je,2);Mt(xe,{get checked(){return s().topping},set checked(S){ht(Tt,I(s).topping=S,I(s));},$$legacy:true});var Ce=p(we,2),Hr=h(Ce),Ke=h(Hr),tr=p(Hr,2);Mt(tr,{get checked(){return s().free},set checked(S){ht(Tt,I(s).free=S,I(s));},$$legacy:true});var Or=p(Ce,2),er=h(Or),zn=h(er),qn=p(er,2);Mt(qn,{get checked(){return s().size},set checked(S){ht(Tt,I(s).size=S,I(s));},$$legacy:true});var rr=p(Or,2),Rr=h(rr),Dr=h(Rr),Bn=p(Rr,2);Mt(Bn,{get checked(){return s().sub_title},set checked(S){ht(Tt,I(s).sub_title=S,I(s));},$$legacy:true});var Fr=p(rr,2),zr=h(Fr),qr=h(zr),Br=p(zr,2);Mt(Br,{get checked(){return s().tags},set checked(S){ht(Tt,I(s).tags=S,I(s));},$$legacy:true});var Zr=p(Fr,2),Wr=h(Zr),Gr=h(Wr),jr=p(Wr,2);Mt(jr,{get checked(){return s().download_collect},set checked(S){ht(Tt,I(s).download_collect=S,I(s));},$$legacy:true});var Yr=p(Zr,2),Ur=h(Yr),Xr=h(Ur),Qr=p(Ur,2);Mt(Qr,{get checked(){return s().upload_time},set checked(S){ht(Tt,I(s).upload_time=S,I(s));},$$legacy:true});var Jr=p(Yr,2),Kr=h(Jr),nr=h(Kr),tn=p(Kr,2);Mt(tn,{get checked(){return s().statistics},set checked(S){ht(Tt,I(s).statistics=S,I(s));},$$legacy:true});var ar=p(Jr,4),en=h(ar),Zn=h(en),Wn=p(en,2);Mt(Wn,{get checked(){return Za(),_()},set checked(S){bt(da,S);},$$legacy:true});var rn=p(ar,4),nn=h(rn),y=h(nn),V=p(nn,2);Mt(V,{get checked(){return f().enabled},set checked(S){ht(fn,I(f).enabled=S,I(f));},$$legacy:true});var F=p(rn,2);{var Y=S=>{var K=Hl(),it=h(K),ut=h(it),dt=p(it,2);j(()=>R(ut,`圆角大小: ${f().value??""} px`)),ln(dt,()=>f().value,Rt=>ht(fn,I(f).value=Rt,I(f))),M(S,K);};B(F,S=>{f().enabled&&S(Y);});}j((S,K,it,ut)=>{T(mt,"style",`background-color: ${S??""};`),R(Mr,`最小宽度: ${l().min??""} px`),T(ue,"max",K),R(Sr,`最大宽度: ${l().max??""} px`),T(je,"min",it),T(je,"max",ut),R(Vr,`卡片间隔: ${l().gap??""} px`),R(On,`显示鼠标悬浮预览大图: ${u()??""}`),R(Ar,`分区: ${s().category??""}`),R(Rn,`标题: ${s().title??""}`),R(Fn,`置顶: ${s().topping??""}`),R(Ke,`免费: ${s().free??""}`),R(zn,`大小: ${s().size??""}`),R(Dr,`副标题: ${s().sub_title??""}`),R(qr,`标签: ${s().tags??""}`),R(Gr,`下载&收藏: ${s().download_collect??""}`),R(Xr,`上传时间: ${s().upload_time??""}`),R(nr,`评论/上传/下载: ${s().statistics??""}`),R(Zn,`屏蔽 gay 区: ${_()??""}`),R(y,`自定义圆角: ${f().enabled??""}`);},[()=>Ll().get_bg_color(),()=>Math.max(400,l().max),()=>Math.min(200,l().min),()=>Math.max(800,l().min*2)],At),W("click",Z,()=>bt(vr,false)),ln(ue,()=>l().min,S=>ht(fr,I(l).min=S,I(l))),ln(je,()=>l().max,S=>ht(fr,I(l).max=S,I(l))),ln(Hn,()=>l().gap,S=>ht(fr,I(l).gap=S,I(l))),He(3,ct,()=>Oe,()=>({duration:100})),W("click",ct,Mi(()=>bt(vr,false))),M(D,ct);};B(Ct,D=>{c()&&D(pt);});}j(()=>{T(E,"style",`top:${a().y??""}px; left:${a().x??""}px;`),Xt(E,"--isFallView",i()?"#4ff74f":"yellow"),Xt(b,"--get-text-color",o().t2);}),W("mousedown",x,g),W("click",L,()=>{bt(hr,!i()),window.changeFallView(i());}),W("click",Q,()=>{bt(vr,!c());}),W("click",nt,()=>{window.__clearPreview();}),M(t,N),le(),n();}var Fl=Ze('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_iconCarrier"><circle cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="1.5"></circle><path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path></g></svg>');function zl(t){var e=Fl();M(t,e);}var ql=H('<div id="_iframe" class="svelte-1axpxde"><div class="_iframe svelte-1axpxde"><iframe frameborder="0" style="width: 1000px;" class="svelte-1axpxde"></iframe> <div class="_iframeCloseBtn svelte-1axpxde"><!></div></div></div>');function Bl(t,e){oe(e,false);const[r,n]=We(),a=()=>st(vn,"$_iframe_switch",r),i=()=>st(Ti,"$_iframe_url",r);let o=ft(e,"_app",8),c;function l(){bt(vn,0);}function u(d){d.key==="Escape"&&(console.log(d),bt(vn,0),bt(vr,false));}c=true,c&&br(kl,{target:o()}),br(Dl,{target:o()}),console.log("-------------->  PT_Fall Launch   <--------------"),be();var s=ne();W("keydown",pr,u,true);var _=Lt(s);{var f=d=>{var w=ql(),m=h(w),k=h(m),$=p(k,2),g=h($);zl(g),j(()=>{T(k,"src",i()),T(k,"title",i());}),W("load",k,C=>{const O=C.target.contentDocument||C.target.contentWindow.document;if(!O){console.error("无法访问iframe内容文档, 可能是由于跨域限制。"),he.error("无法访问iframe内容文档, 可能是由于跨域限制。");return}const N=()=>{const x=O.querySelector(".ant-card.detail-view");x&&(x.scrollIntoView({behavior:"smooth"}),console.log("成功滚动到目标元素！"),clearInterval(E));},E=setInterval(N,500);N();}),W("click",k,Ve(C=>{C.stopPropagation();})),W("click",$,l),W("click",w,l),He(3,w,()=>Oe,()=>({duration:300})),M(d,w);};B(_,d=>{a()&&d(f);});}M(t,s),le(),n();}const _a=document.createElement("div");document.body.append(_a);br(Bl,{target:_a,props:{_app:_a}});

})();