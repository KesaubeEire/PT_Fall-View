// ==UserScript==
// @name            PT瀑布流视图
// @name:en         PT_Fall-View
// @namespace       vite-plugin-monkey
// @version         0.3.1
// @author          Kesa
// @description     PT瀑布流视图(2025重构)
// @description:en  PT Fall/Masonry View (restructured 2025)
// @license         MIT
// @icon            https://avatars.githubusercontent.com/u/23617963
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
  /* \u5361\u7247\u5206\u7C7B */\r
  .card-category.svelte-aspv9f {\r
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
  .card_category-img.svelte-aspv9f {\r
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
  .card_category_square.svelte-aspv9f {\r
    width: 40px;\r
    height: 40px;\r
    padding-top: 0;\r
    border-radius: 10px;\r
  }\r
\r
  .card_new_page_highlight.svelte-aspv9f {\r
    /* position: absolute; */\r
    top: 0;\r
    left: 0;\r
    width: 100%;\r
    height: 100%;\r
    background-color: rgba(8, 68, 0, 0.5);\r
    color: white;\r
    text-align: center;\r
    padding: 8px 8px;\r
  }\r
  .card_pic.svelte-aspv9f img:where(.svelte-aspv9f) {\r
    width: 100%;\r
    height: 100%;\r
  }\r
  .lazy-image.svelte-aspv9f {\r
    opacity: 0.2;\r
    transition: opacity 0.5s ease;\r
  }\r
  /* FIXME: \u4E0D\u77E5\u9053\u4E3A\u5565\u8FD9\u91CC\u4E0D\u8D77\u4F5C\u7528 */\r
  /* (unused) .lazy-image.loaded {\r
    opacity: 1;\r
  }*/\r
  .card_info.svelte-aspv9f {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    flex-direction: column;\r
\r
    padding: 0px 8px;\r
\r
    & .card_info-item:where(.svelte-aspv9f) {\r
      display: flex;\r
      justify-content: space-around;\r
      align-items: center;\r
\r
      /* min-height: 32px; */\r
      width: 100%;\r
    }\r
\r
    & .card_info__dl_and_cl:where(.svelte-aspv9f) {\r
      display: flex;\r
      justify-content: center;\r
      align-items: center;\r
\r
      height: 32px;\r
    }\r
\r
    & .card_info__statistics:where(.svelte-aspv9f) {\r
      display: flex;\r
      justify-content: center;\r
      align-items: center;\r
    }\r
  }\r
\r
  .card_info__topping.svelte-aspv9f {\r
    display: flex;\r
    /* justify-content: center; */\r
    align-items: center;\r
  }\r
\r
  .__main_title.svelte-aspv9f {\r
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
  .cl-tags.svelte-aspv9f {\r
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
  ._tag.svelte-aspv9f {\r
    /* padding: 1px 6px; */\r
    height: 1.3em;\r
    line-height: 1.3em;\r
    padding: 0 0.5em;\r
    border-radius: 6px;\r
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r
    font-size: 12px;\r
  }\r
  ._tag_diy.svelte-aspv9f {\r
    color: #ffffff;\r
    background-color: rgb(90, 189, 72);\r
  }\r
  ._tag_dub.svelte-aspv9f {\r
    color: #ffffff;\r
    background-color: rgb(90, 59, 20);\r
  }\r
  ._tag_sub.svelte-aspv9f {\r
    color: #ffffff;\r
    background-color: rgb(59, 74, 127);\r
  }\r
  ._tag_discount_50.svelte-aspv9f {\r
    background-color: rgb(255, 85, 0);\r
    color: #ffffff;\r
  }\r
  ._tag_discount_free.svelte-aspv9f {\r
    background-color: rgb(16, 142, 233);\r
    color: #ffffff;\r
  }\r
\r
  .card_pic.svelte-aspv9f {\r
    position: relative;\r
    display: flex;\r
    align-items: center;\r
    justify-content: center;\r
    background-color: var(--cateColor);\r
  }\r
\r
  .pic_error.svelte-aspv9f {\r
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
  .card-index.svelte-aspv9f {\r
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
  .card-index-right.svelte-aspv9f {\r
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
  .hover-trigger.svelte-aspv9f {\r
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
  .hover-overlay.svelte-aspv9f {\r
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
  .overlay-content.svelte-aspv9f {\r
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
    & .card_info-item:where(.svelte-aspv9f) {\r
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
    & .__main_title:where(.svelte-aspv9f) {\r
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
    & .__sub_title:where(.svelte-aspv9f) {\r
      white-space: pre-wrap;\r
      word-wrap: break-word;\r
      overflow-wrap: break-word;\r
    }\r
\r
    & .card_info__statistics:where(.svelte-aspv9f) {\r
      display: flex;\r
      justify-content: space-evenly;\r
      align-items: center;\r
\r
      height: 32px;\r
    }\r
  }\r
\r
  .__center.svelte-aspv9f {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
  }\r
\r
  .__inner_index_and_size.svelte-aspv9f {\r
    display: flex;\r
    justify-content: space-between;\r
    align-items: center;\r
    position: absolute;\r
    width: 100%;\r
    left: 0;\r
    top: -24px;\r
  }\r
\r
  .__inner_index.svelte-aspv9f {\r
    position: relative;\r
    width: fit-content;\r
\r
    display: flex;\r
    justify-content: flex-start;\r
    align-items: center;\r
  }\r
\r
  .__inner_size.svelte-aspv9f {\r
    position: relative;\r
    width: fit-content;\r
\r
    display: flex;\r
    justify-content: flex-end;\r
    align-items: center;\r
  }\r
\r
  .__iframe_button.svelte-aspv9f {\r
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
  .fall_holder.svelte-1nf4wjl {\r
    border: 0px solid #6495ed;\r
    border-radius: 8px;\r
    /* background-color: rgb(188, 202, 214); */\r
    /* padding: 12px; */\r
    /* margin-top: 16px; */\r
\r
    overflow: hidden;\r
  }\r
\r
  .text_center.svelte-1nf4wjl {\r
    text-align: center;\r
    padding: 8px 0;\r
    margin: 0;\r
  }\r

\r
  .faq-btn.svelte-19468gw {\r
    background-color: var(--bg-2);\r
    color: white;\r
    border: none;\r
    padding: 4px 8px;\r
    border-radius: 4px;\r
    font-size: 14px;\r
    transition: background-color 0.3s;\r
  }\r
\r
  .faq-btn.svelte-19468gw:hover {\r
    background-color: var(--hover);\r
  }\r
\r
  .modal-overlay.svelte-19468gw {\r
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
  .modal-content.svelte-19468gw {\r
    background: var(--bg-3);\r
    border-radius: 8px;\r
    width: 500px;\r
    max-width: 90vw;\r
    max-height: 80vh;\r
    overflow-y: auto;\r
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\r
  }\r
\r
  .modal-header.svelte-19468gw {\r
    display: flex;\r
    justify-content: space-between;\r
    align-items: center;\r
    padding: 16px 20px;\r
    border-bottom: 1px solid #f0f0f0;\r
  }\r
\r
  .modal-header.svelte-19468gw h3:where(.svelte-19468gw) {\r
    margin: 0;\r
    font-size: 16px;\r
  }\r
\r
  .close-btn.svelte-19468gw {\r
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
  .modal-body.svelte-19468gw {\r
    padding: 20px;\r
    line-height: 1.6;\r
  }\r
\r
  .modal-body.svelte-19468gw h4:where(.svelte-19468gw) {\r
    margin: 16px 0 8px 0;\r
    color: #1890ff;\r
  }\r
\r
  .modal-body.svelte-19468gw p:where(.svelte-19468gw) {\r
    margin: 0 0 12px 0;\r
    color: #666;\r
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
  .flowP.svelte-ewpy9m {\r
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
  .flowPDragger.svelte-ewpy9m {\r
    height: 12px;\r
    transition: background-color 0.3s ease-in-out;\r
    background-color: var(--isFallView);\r
\r
    &:hover {\r
      cursor: move; /* \u8BBE\u7F6E\u9F20\u6807\u60AC\u505C\u65F6\u7684\u56FE\u6807\u4E3A\u79FB\u52A8 */\r
    }\r
  }\r
\r
  .flowPHolder.svelte-ewpy9m {\r
    /* position: relative; */\r
    display: flex;\r
    flex-direction: column;\r
    justify-content: center;\r
    align-items: center;\r
    padding-top: 2px;\r
    gap: 4px;\r
  }\r
\r
  .flowBtn.svelte-ewpy9m {\r
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
  .config-menu-overlay.svelte-ewpy9m {\r
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
  .config-menu.svelte-ewpy9m {\r
    background-color: #ffffff;\r
    width: 300px;\r
    height: 100vh;\r
    padding: 20px;\r
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);\r
    overflow-y: auto;\r
  }\r
\r
  .config-menu-header.svelte-ewpy9m {\r
    display: flex;\r
    justify-content: space-between;\r
    align-items: center;\r
    margin-bottom: 12px;\r
  }\r
\r
  .close-btn.svelte-ewpy9m {\r
    background: none;\r
    border: none;\r
    font-size: 24px;\r
    cursor: pointer;\r
    padding: 0 8px;\r
    transform: translateY(-4px);\r
  }\r
\r
  .config-menu-content.svelte-ewpy9m {\r
    display: flex;\r
    flex-direction: column;\r
    gap: 4px;\r
\r
    font-size: 14px;\r
\r
    & h3:where(.svelte-ewpy9m) {\r
      margin-top: 8px;\r
    }\r
  }\r
\r
  .config-item.svelte-ewpy9m {\r
    display: flex;\r
    align-items: center;\r
    justify-content: space-between;\r
  }\r
\r
  .config-item.svelte-ewpy9m input:where(.svelte-ewpy9m) {\r
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

      var ma=Object.defineProperty;var vi=t=>{throw TypeError(t)};var ya=(t,e,r)=>e in t?ma(t,e,{enumerable:true,configurable:true,writable:true,value:r}):t[e]=r;var fi=(t,e,r)=>ya(t,e+"",r),On=(t,e,r)=>e.has(t)||vi("Cannot "+r);var qt=(t,e,r)=>(On(t,e,"read from private field"),r?r.call(t):e.get(t)),Ge=(t,e,r)=>e.has(t)?vi("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),Dn=(t,e,r,n)=>(On(t,e,"write to private field"),e.set(t,r),r),di=(t,e,r)=>(On(t,e,"access private method"),r);var cn=Array.isArray,wa=Array.prototype.indexOf,Qn=Array.from,Oi=Object.defineProperty,ne=Object.getOwnPropertyDescriptor,Di=Object.getOwnPropertyDescriptors,ba=Object.prototype,xa=Array.prototype,Jn=Object.getPrototypeOf;function Ca(t){return typeof t=="function"}const At=()=>{};function Ea(t){return t()}function Hn(t){for(var e=0;e<t.length;e++)t[e]();}const yt=2,Ii=4,cr=8,un=16,Ht=32,ke=64,Kr=128,ae=256,Qr=512,ct=1024,Xt=2048,se=4096,Pt=8192,Le=16384,Pi=32768,vn=65536,ka=1<<17,La=1<<19,Vi=1<<20,ie=Symbol("$state"),Ma=Symbol("legacy props"),Na=Symbol("");function Ri(t){return t===this.v}function Hi(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function ti(t){return !Hi(t,this.v)}function Sa(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Ta(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Aa(t){throw new Error("https://svelte.dev/e/effect_orphan")}function $a(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Oa(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Da(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Ia(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Pa(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function Va(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let Me=false;function Ra(){Me=true;}const ei=1,ri=2,Fi=4,Ha=8,Fa=16,qa=1,Ba=2,za=4,Za=8,Ga=16,ja=1,Wa=2,Ya=4,Ua=1,Xa=2,dt=Symbol();function Lt(t,e){var r={f:0,v:t,reactions:null,equals:Ri,rv:0,wv:0};return r}function fn(t,e=false){var n;const r=Lt(t);return e||(r.equals=ti),Me&&G!==null&&G.l!==null&&((n=G.l).s??(n.s=[])).push(r),r}function Q(t,e=false){return Ka(fn(t,e))}function Ka(t){return U!==null&&!Zt&&U.f&yt&&(Vt===null?os([t]):Vt.push(t)),t}function Et(t,e){return I(t,V(()=>p(t))),e}function I(t,e){return U!==null&&!Zt&&fr()&&U.f&(yt|un)&&(Vt===null||!Vt.includes(t))&&Va(),Fn(t,e)}function Fn(t,e){return t.equals(e)||(t.v,t.v=e,t.wv=na(),qi(t,Xt),fr()&&Z!==null&&Z.f&ct&&!(Z.f&(Ht|ke))&&(Bt===null?ls([t]):Bt.push(t))),e}function qi(t,e){var r=t.reactions;if(r!==null)for(var n=fr(),i=r.length,a=0;a<i;a++){var o=r[a],s=o.f;s&Xt||!n&&o===Z||(St(o,e),s&(ct|ae)&&(s&yt?qi(o,se):mn(o)));}}let Bi=false;function _e(t,e=null,r){if(typeof t!="object"||t===null||ie in t)return t;const n=Jn(t);if(n!==ba&&n!==xa)return t;var i=new Map,a=cn(t),o=Lt(0);a&&i.set("length",Lt(t.length));var s;return new Proxy(t,{defineProperty(u,l,f){(!("value"in f)||f.configurable===false||f.enumerable===false||f.writable===false)&&Da();var c=i.get(l);return c===undefined?(c=Lt(f.value),i.set(l,c)):I(c,_e(f.value,s)),true},deleteProperty(u,l){var f=i.get(l);if(f===undefined)l in u&&i.set(l,Lt(dt));else {if(a&&typeof l=="string"){var c=i.get("length"),v=Number(l);Number.isInteger(v)&&v<c.v&&I(c,v);}I(f,dt),_i(o);}return  true},get(u,l,f){var b;if(l===ie)return t;var c=i.get(l),v=l in u;if(c===undefined&&(!v||(b=ne(u,l))!=null&&b.writable)&&(c=Lt(_e(v?u[l]:dt,s)),i.set(l,c)),c!==undefined){var d=p(c);return d===dt?undefined:d}return Reflect.get(u,l,f)},getOwnPropertyDescriptor(u,l){var f=Reflect.getOwnPropertyDescriptor(u,l);if(f&&"value"in f){var c=i.get(l);c&&(f.value=p(c));}else if(f===undefined){var v=i.get(l),d=v==null?undefined:v.v;if(v!==undefined&&d!==dt)return {enumerable:true,configurable:true,value:d,writable:true}}return f},has(u,l){var d;if(l===ie)return  true;var f=i.get(l),c=f!==undefined&&f.v!==dt||Reflect.has(u,l);if(f!==undefined||Z!==null&&(!c||(d=ne(u,l))!=null&&d.writable)){f===undefined&&(f=Lt(c?_e(u[l],s):dt),i.set(l,f));var v=p(f);if(v===dt)return  false}return c},set(u,l,f,c){var w;var v=i.get(l),d=l in u;if(a&&l==="length")for(var b=f;b<v.v;b+=1){var h=i.get(b+"");h!==undefined?I(h,dt):b in u&&(h=Lt(dt),i.set(b+"",h));}v===undefined?(!d||(w=ne(u,l))!=null&&w.writable)&&(v=Lt(undefined),I(v,_e(f,s)),i.set(l,v)):(d=v.v!==dt,I(v,_e(f,s)));var C=Reflect.getOwnPropertyDescriptor(u,l);if(C!=null&&C.set&&C.set.call(c,f),!d){if(a&&typeof l=="string"){var x=i.get("length"),m=Number(l);Number.isInteger(m)&&m>=x.v&&I(x,m+1);}_i(o);}return  true},ownKeys(u){p(o);var l=Reflect.ownKeys(u).filter(v=>{var d=i.get(v);return d===undefined||d.v!==dt});for(var[f,c]of i)c.v!==dt&&!(f in u)&&l.push(f);return l},setPrototypeOf(){Ia();}})}function _i(t,e=1){I(t,t.v+e);}var nr,zi,Zi;function Qa(){if(nr===undefined){nr=window;var t=Element.prototype,e=Node.prototype;zi=ne(e,"firstChild").get,Zi=ne(e,"nextSibling").get,t.__click=undefined,t.__className="",t.__attributes=null,t.__styles=null,t.__e=undefined,Text.prototype.__t=undefined;}}function ni(t=""){return document.createTextNode(t)}function we(t){return zi.call(t)}function dn(t){return Zi.call(t)}function _(t,e){return we(t)}function It(t,e){{var r=we(t);return r instanceof Comment&&r.data===""?dn(r):r}}function g(t,e=1,r=false){let n=t;for(;e--;)n=dn(n);return n}function Ja(t){t.textContent="";}function ir(t){var e=yt|Xt;Z===null?e|=ae:Z.f|=Vi;var r=U!==null&&U.f&yt?U:null;const n={children:null,ctx:G,deps:null,equals:Ri,f:e,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??Z};return r!==null&&(r.children??(r.children=[])).push(n),n}function Dt(t){const e=ir(t);return e.equals=ti,e}function Gi(t){var e=t.children;if(e!==null){t.children=null;for(var r=0;r<e.length;r+=1){var n=e[r];n.f&yt?ii(n):Ut(n);}}}function ts(t){for(var e=t.parent;e!==null;){if(!(e.f&yt))return e;e=e.parent;}return null}function ji(t){var e,r=Z;Nt(ts(t));try{Gi(t),e=aa(t);}finally{Nt(r);}return e}function Wi(t){var e=ji(t),r=(re||t.f&ae)&&t.deps!==null?se:ct;St(t,r),t.equals(e)||(t.v=e,t.wv=na());}function ii(t){Gi(t),sr(t,0),St(t,Le),t.v=t.children=t.deps=t.ctx=t.reactions=null;}function Yi(t){Z===null&&U===null&&Aa(),U!==null&&U.f&ae&&Ta(),li&&Sa();}function es(t,e){var r=e.last;r===null?e.last=e.first=t:(r.next=t,t.prev=r,e.last=t);}function Ne(t,e,r,n=true){var i=(t&ke)!==0,a=Z,o={ctx:G,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|Xt,first:null,fn:e,last:null,next:null,parent:i?null:a,prev:null,teardown:null,transitions:null,wv:0};if(r){var s=he;try{pi(!0),gn(o),o.f|=Pi;}catch(f){throw Ut(o),f}finally{pi(s);}}else e!==null&&mn(o);var u=r&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&(Vi|Kr))===0;if(!u&&!i&&n&&(a!==null&&es(o,a),U!==null&&U.f&yt)){var l=U;(l.children??(l.children=[])).push(o);}return o}function ai(t){const e=Ne(cr,null,false);return St(e,ct),e.teardown=t,e}function qn(t){Yi();var e=Z!==null&&(Z.f&Ht)!==0&&G!==null&&!G.m;if(e){var r=G;(r.e??(r.e=[])).push({fn:t,effect:Z,reaction:U});}else {var n=ur(t);return n}}function rs(t){return Yi(),vr(t)}function ns(t){const e=Ne(ke,t,true);return (r={})=>new Promise(n=>{r.outro?Jr(e,()=>{Ut(e),n(undefined);}):(Ut(e),n(undefined));})}function ur(t){return Ne(Ii,t,false)}function be(t,e){var r=G,n={effect:null,ran:false};r.l.r1.push(n),n.effect=vr(()=>{t(),!n.ran&&(n.ran=true,I(r.l.r2,true),V(e));});}function _n(){var t=G;vr(()=>{if(p(t.l.r2)){for(var e of t.l.r1){var r=e.effect;r.f&ct&&St(r,se),Se(r)&&gn(r),e.ran=false;}t.l.r2.v=false;}});}function vr(t){return Ne(cr,t,true)}function Y(t,e=[],r=ir){const n=e.map(r);return si(()=>t(...n.map(p)))}function si(t,e=0){return Ne(cr|un|e,t,true)}function ar(t,e=true){return Ne(cr|Ht,t,true,e)}function Ui(t){var e=t.teardown;if(e!==null){const r=li,n=U;hi(true),Rt(null);try{e.call(null);}finally{hi(r),Rt(n);}}}function Xi(t){var e=t.deriveds;if(e!==null){t.deriveds=null;for(var r=0;r<e.length;r+=1)ii(e[r]);}}function Ki(t,e=false){var r=t.first;for(t.first=t.last=null;r!==null;){var n=r.next;Ut(r,e),r=n;}}function is(t){for(var e=t.first;e!==null;){var r=e.next;e.f&Ht||Ut(e),e=r;}}function Ut(t,e=true){var r=false;if((e||t.f&La)&&t.nodes_start!==null){for(var n=t.nodes_start,i=t.nodes_end;n!==null;){var a=n===i?null:dn(n);n.remove(),n=a;}r=true;}Ki(t,e&&!r),Xi(t),sr(t,0),St(t,Le);var o=t.transitions;if(o!==null)for(const u of o)u.stop();Ui(t);var s=t.parent;s!==null&&s.first!==null&&Qi(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null;}function Qi(t){var e=t.parent,r=t.prev,n=t.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),e!==null&&(e.first===t&&(e.first=n),e.last===t&&(e.last=r));}function Jr(t,e){var r=[];oi(t,r,true),Ji(r,()=>{Ut(t),e&&e();});}function Ji(t,e){var r=t.length;if(r>0){var n=()=>--r||e();for(var i of t)i.out(n);}else e();}function oi(t,e,r){if(!(t.f&Pt)){if(t.f^=Pt,t.transitions!==null)for(const o of t.transitions)(o.is_global||r)&&e.push(o);for(var n=t.first;n!==null;){var i=n.next,a=(n.f&vn)!==0||(n.f&Ht)!==0;oi(n,e,a?r:false),n=i;}}}function tn(t){ta(t,true);}function ta(t,e){if(t.f&Pt){t.f^=Pt,t.f&ct||(t.f^=ct),Se(t)&&(St(t,Xt),mn(t));for(var r=t.first;r!==null;){var n=r.next,i=(r.f&vn)!==0||(r.f&Ht)!==0;ta(r,i?e:false),r=n;}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||e)&&a.in();}}let Bn=false,zn=[];function as(){Bn=false;const t=zn.slice();zn=[],Hn(t);}function pn(t){Bn||(Bn=true,queueMicrotask(as)),zn.push(t);}function ss(){throw new Error("https://svelte.dev/e/invalid_default_snippet")}function ea(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let Yr=false,en=false,rn=null,he=false,li=false;function pi(t){he=t;}function hi(t){li=t;}let Zn=[],Qe=0;let U=null,Zt=false;function Rt(t){U=t;}let Z=null;function Nt(t){Z=t;}let Vt=null;function os(t){Vt=t;}let _t=null,mt=0,Bt=null;function ls(t){Bt=t;}let ra=1,nn=0,re=false,G=null;function na(){return ++ra}function fr(){return !Me||G!==null&&G.l===null}function Se(t){var l;var e=t.f;if(e&Xt)return  true;if(e&se){var r=t.deps,n=(e&ae)!==0;if(r!==null){var i,a,o=(e&Qr)!==0,s=n&&Z!==null&&!re,u=r.length;if(o||s){for(i=0;i<u;i++)a=r[i],(o||!((l=a==null?undefined:a.reactions)!=null&&l.includes(t)))&&(a.reactions??(a.reactions=[])).push(t);o&&(t.f^=Qr);}for(i=0;i<u;i++)if(a=r[i],Se(a)&&Wi(a),a.wv>t.wv)return  true}(!n||Z!==null&&!re)&&St(t,ct);}return  false}function cs(t,e){for(var r=e;r!==null;){if(r.f&Kr)try{r.fn(t);return}catch{r.f^=Kr;}r=r.parent;}throw Yr=false,t}function us(t){return (t.f&Le)===0&&(t.parent===null||(t.parent.f&Kr)===0)}function hn(t,e,r,n){if(Yr){if(r===null&&(Yr=false),us(e))throw t;return}r!==null&&(Yr=true);{cs(t,e);return}}function ia(t,e,r=0){var n=t.reactions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];a.f&yt?ia(a,e,r+1):e===a&&(r===0?St(a,Xt):a.f&ct&&St(a,se),mn(a));}}function aa(t){var d;var e=_t,r=mt,n=Bt,i=U,a=re,o=Vt,s=G,u=Zt,l=t.f;_t=null,mt=0,Bt=null,U=l&(Ht|ke)?null:t,re=!he&&(l&ae)!==0,Vt=null,G=t.ctx,Zt=false,nn++;try{var f=(0,t.fn)(),c=t.deps;if(_t!==null){var v;if(sr(t,mt),c!==null&&mt>0)for(c.length=mt+_t.length,v=0;v<_t.length;v++)c[mt+v]=_t[v];else t.deps=c=_t;if(!re)for(v=mt;v<c.length;v++)((d=c[v]).reactions??(d.reactions=[])).push(t);}else c!==null&&mt<c.length&&(sr(t,mt),c.length=mt);if(fr()&&Bt!==null&&!(t.f&(yt|se|Xt)))for(v=0;v<Bt.length;v++)ia(Bt[v],t);return i!==null&&nn++,f}finally{_t=e,mt=r,Bt=n,U=i,re=a,Vt=o,G=s,Zt=u;}}function vs(t,e){let r=e.reactions;if(r!==null){var n=wa.call(r,t);if(n!==-1){var i=r.length-1;i===0?r=e.reactions=null:(r[n]=r[i],r.pop());}}r===null&&e.f&yt&&(_t===null||!_t.includes(e))&&(St(e,se),e.f&(ae|Qr)||(e.f^=Qr),sr(e,0));}function sr(t,e){var r=t.deps;if(r!==null)for(var n=e;n<r.length;n++)vs(t,r[n]);}function gn(t){var e=t.f;if(!(e&Le)){St(t,ct);var r=Z,n=G;Z=t;try{e&un?is(t):Ki(t),Xi(t),Ui(t);var i=aa(t);t.teardown=typeof i=="function"?i:null,t.wv=ra;var a=t.deps,o;}catch(s){hn(s,t,r,n||t.ctx);}finally{Z=r;}}}function fs(){if(Qe>1e3){Qe=0;try{$a();}catch(t){if(rn!==null)hn(t,rn,null);else throw t}}Qe++;}function ds(t){var e=t.length;if(e!==0){fs();var r=he;he=true;try{for(var n=0;n<e;n++){var i=t[n];i.f&ct||(i.f^=ct);var a=[];sa(i,a),_s(a);}}finally{he=r;}}}function _s(t){var e=t.length;if(e!==0)for(var r=0;r<e;r++){var n=t[r];if(!(n.f&(Le|Pt)))try{Se(n)&&(gn(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?Qi(n):n.fn=null));}catch(i){hn(i,n,null,n.ctx);}}}function ps(){if(en=false,Qe>1001)return;const t=Zn;Zn=[],ds(t),en||(Qe=0,rn=null);}function mn(t){en||(en=true,queueMicrotask(ps)),rn=t;for(var e=t;e.parent!==null;){e=e.parent;var r=e.f;if(r&(ke|Ht)){if(!(r&ct))return;e.f^=ct;}}Zn.push(e);}function sa(t,e){var r=t.first,n=[];t:for(;r!==null;){var i=r.f,a=(i&Ht)!==0,o=a&&(i&ct)!==0,s=r.next;if(!o&&!(i&Pt))if(i&cr){if(a)r.f^=ct;else try{Se(r)&&gn(r);}catch(c){hn(c,r,null,r.ctx);}var u=r.first;if(u!==null){r=u;continue}}else i&Ii&&n.push(r);if(s===null){let c=r.parent;for(;c!==null;){if(t===c)break t;var l=c.next;if(l!==null){r=l;continue t}c=c.parent;}}r=s;}for(var f=0;f<n.length;f++)u=n[f],e.push(u),sa(u,e);}function p(t){var f;var e=t.f,r=(e&yt)!==0;if(r&&e&Le){var n=ji(t);return ii(t),n}if(U!==null&&!Zt){Vt!==null&&Vt.includes(t)&&Pa();var i=U.deps;t.rv<nn&&(t.rv=nn,_t===null&&i!==null&&i[mt]===t?mt++:_t===null?_t=[t]:_t.push(t));}else if(r&&t.deps===null)for(var a=t,o=a.parent,s=a;o!==null;)if(o.f&yt){var u=o;s=u,o=u.parent;}else {var l=o;(f=l.deriveds)!=null&&f.includes(s)||(l.deriveds??(l.deriveds=[])).push(s);break}return r&&(a=t,Se(a)&&Wi(a)),t.v}function V(t){var e=Zt;try{return Zt=!0,t()}finally{Zt=e;}}const hs=-7169;function St(t,e){t.f=t.f&hs|e;}function Kt(t,e=false,r){G={p:G,c:null,e:null,m:false,s:t,x:null,l:null},Me&&!e&&(G.l={s:null,u:null,r1:[],r2:Lt(false)});}function Qt(t){const e=G;if(e!==null){t!==undefined&&(e.x=t);const o=e.e;if(o!==null){var r=Z,n=U;e.e=null;try{for(var i=0;i<o.length;i++){var a=o[i];Nt(a.effect),Rt(a.reaction),ur(a.fn);}}finally{Nt(r),Rt(n);}}G=e.p,e.m=true;}return t||{}}function ee(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ie in t)Gn(t);else if(!Array.isArray(t))for(let e in t){const r=t[e];typeof r=="object"&&r&&ie in r&&Gn(r);}}}function Gn(t,e=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!e.has(t)){e.add(t),t instanceof Date&&t.getTime();for(let n in t)try{Gn(t[n],e);}catch{}const r=Jn(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=Di(r);for(let i in n){const a=n[i].get;if(a)try{a.call(t);}catch{}}}}}const gs=["touchstart","touchmove"];function ms(t){return gs.includes(t)}let gi=false;function ys(){gi||(gi=true,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{var e;if(!t.defaultPrevented)for(const r of t.target.elements)(e=r.__on_r)==null||e.call(r);});},{capture:true}));}function oa(t){var e=U,r=Z;Rt(null),Nt(null);try{return t()}finally{Rt(e),Nt(r);}}function ws(t,e,r,n=r){t.addEventListener(e,()=>oa(r));const i=t.__on_r;i?t.__on_r=()=>{i(),n(true);}:t.__on_r=()=>n(true),ys();}const bs=new Set,mi=new Set;function xs(t,e,r,n={}){function i(a){if(n.capture||We.call(e,a),!a.cancelBubble)return oa(()=>r==null?void 0:r.call(this,a))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?pn(()=>{e.addEventListener(t,i,n);}):e.addEventListener(t,i,n),i}function B(t,e,r,n,i){var a={capture:n,passive:i},o=xs(t,e,r,a);(e===document.body||e===window||e===document)&&ai(()=>{e.removeEventListener(t,o,a);});}function We(t){var m;var e=this,r=e.ownerDocument,n=t.type,i=((m=t.composedPath)==null?undefined:m.call(t))||[],a=i[0]||t.target,o=0,s=t.__root;if(s){var u=i.indexOf(s);if(u!==-1&&(e===document||e===window)){t.__root=e;return}var l=i.indexOf(e);if(l===-1)return;u<=l&&(o=u);}if(a=i[o]||t.target,a!==e){Oi(t,"currentTarget",{configurable:true,get(){return a||r}});var f=U,c=Z;Rt(null),Nt(null);try{for(var v,d=[];a!==null;){var b=a.assignedSlot||a.parentNode||a.host||null;try{var h=a["__"+n];if(h!==void 0&&!a.disabled)if(cn(h)){var[C,...x]=h;C.apply(a,[t,...x]);}else h.call(a,t);}catch(w){v?d.push(w):v=w;}if(t.cancelBubble||b===e||b===null)break;a=b;}if(v){for(let w of d)queueMicrotask(()=>{throw w});throw v}}finally{t.__root=e,delete t.currentTarget,Rt(f),Nt(c);}}}function la(t){var e=document.createElement("template");return e.innerHTML=t,e.content}function an(t,e){var r=Z;r.nodes_start===null&&(r.nodes_start=t,r.nodes_end=e);}function $(t,e){var r=(e&Ua)!==0,n=(e&Xa)!==0,i,a=!t.startsWith("<!>");return ()=>{i===undefined&&(i=la(a?t:"<!>"+t),r||(i=we(i)));var o=n?document.importNode(i,true):i.cloneNode(true);if(r){var s=we(o),u=o.lastChild;an(s,u);}else an(o,o);return o}}function ci(t,e,r="svg"){var n=!t.startsWith("<!>"),i=`<${r}>${n?t:"<!>"+t}</${r}>`,a;return ()=>{if(!a){var o=la(i),s=we(o);a=we(s);}var u=a.cloneNode(true);return an(u,u),u}}function ge(){var t=document.createDocumentFragment(),e=document.createComment(""),r=ni();return t.append(e,r),an(e,r),t}function S(t,e){t!==null&&t.before(e);}let jn=true;function R(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=r,t.nodeValue=r==null?"":r+"");}function or(t,e){return Cs(t,e)}const fe=new Map;function Cs(t,{target:e,anchor:r,props:n={},events:i,context:a,intro:o=true}){Qa();var s=new Set,u=c=>{for(var v=0;v<c.length;v++){var d=c[v];if(!s.has(d)){s.add(d);var b=ms(d);e.addEventListener(d,We,{passive:b});var h=fe.get(d);h===undefined?(document.addEventListener(d,We,{passive:b}),fe.set(d,1)):fe.set(d,h+1);}}};u(Qn(bs)),mi.add(u);var l=undefined,f=ns(()=>{var c=r??e.appendChild(ni());return ar(()=>{if(a){Kt({});var v=G;v.c=a;}i&&(n.$$events=i),jn=o,l=t(c,n)||{},jn=true,a&&Qt();}),()=>{var b;for(var v of s){e.removeEventListener(v,We);var d=fe.get(v);--d===0?(document.removeEventListener(v,We),fe.delete(v)):fe.set(v,d);}mi.delete(u),c!==r&&((b=c.parentNode)==null||b.removeChild(c));}});return Es.set(l,f),l}let Es=new WeakMap;function q(t,e,r=false){var n=t,i=null,a=null,o=dt,s=r?vn:0,u=false;const l=(c,v=true)=>{u=true,f(v,c);},f=(c,v)=>{o!==(o=c)&&(o?(i?tn(i):v&&(i=ar(()=>v(n))),a&&Jr(a,()=>{a=null;})):(a?tn(a):v&&(a=ar(()=>v(n))),i&&Jr(i,()=>{i=null;})));};si(()=>{u=false,e(l),u||f(null,null);},s);}let Ur=null;function Wn(t,e){return e}function ks(t,e,r,n){for(var i=[],a=e.length,o=0;o<a;o++)oi(e[o].e,i,true);var s=a>0&&i.length===0&&r!==null;if(s){var u=r.parentNode;Ja(u),u.append(r),n.clear(),Gt(t,e[0].prev,e[a-1].next);}Ji(i,()=>{for(var l=0;l<a;l++){var f=e[l];s||(n.delete(f.k),Gt(t,f.prev,f.next)),Ut(f.e,!s);}});}function Je(t,e,r,n,i,a=null){var o=t,s={flags:e,items:new Map,first:null},u=(e&Fi)!==0;if(u){var l=t;o=l.appendChild(ni());}var f=null,c=false,v=Dt(()=>{var d=r();return cn(d)?d:d==null?[]:Qn(d)});si(()=>{var d=p(v),b=d.length;if(!(c&&b===0)){c=b===0;{var h=U;Ls(d,s,o,i,e,(h.f&Pt)!==0,n,r);}a!==null&&(b===0?f?tn(f):f=ar(()=>a(o)):f!==null&&Jr(f,()=>{f=null;})),p(v);}});}function Ls(t,e,r,n,i,a,o,s){var H,T,et,it;var u=(i&Ha)!==0,l=(i&(ei|ri))!==0,f=t.length,c=e.items,v=e.first,d=v,b,h=null,C,x=[],m=[],w,M,E,k;if(u)for(k=0;k<f;k+=1)w=t[k],M=o(w,k),E=c.get(M),E!==undefined&&((H=E.a)==null||H.measure(),(C??(C=new Set)).add(E));for(k=0;k<f;k+=1){if(w=t[k],M=o(w,k),E=c.get(M),E===undefined){var D=d?d.e.nodes_start:r;h=Ns(D,e,h,h===null?e.first:h.next,w,M,k,n,i,s),c.set(M,h),x=[],m=[],d=h.next;continue}if(l&&Ms(E,w,k,i),E.e.f&Pt&&(tn(E.e),u&&((T=E.a)==null||T.unfix(),(C??(C=new Set)).delete(E))),E!==d){if(b!==undefined&&b.has(E)){if(x.length<m.length){var N=m[0],A;h=N.prev;var tt=x[0],J=x[x.length-1];for(A=0;A<x.length;A+=1)yi(x[A],N,r);for(A=0;A<m.length;A+=1)b.delete(m[A]);Gt(e,tt.prev,J.next),Gt(e,h,tt),Gt(e,J,N),d=N,h=J,k-=1,x=[],m=[];}else b.delete(E),yi(E,d,r),Gt(e,E.prev,E.next),Gt(e,E,h===null?e.first:h.next),Gt(e,h,E),h=E;continue}for(x=[],m=[];d!==null&&d.k!==M;)(a||!(d.e.f&Pt))&&(b??(b=new Set)).add(d),m.push(d),d=d.next;if(d===null)continue;E=d;}x.push(E),h=E,d=E.next;}if(d!==null||b!==undefined){for(var rt=b===undefined?[]:Qn(b);d!==null;)(a||!(d.e.f&Pt))&&rt.push(d),d=d.next;var pt=rt.length;if(pt>0){var $t=i&Fi&&f===0?r:null;if(u){for(k=0;k<pt;k+=1)(et=rt[k].a)==null||et.measure();for(k=0;k<pt;k+=1)(it=rt[k].a)==null||it.fix();}ks(e,rt,$t,c);}}u&&pn(()=>{var Ot;if(C!==undefined)for(E of C)(Ot=E.a)==null||Ot.apply();}),Z.first=e.first&&e.first.e,Z.last=h&&h.e;}function Ms(t,e,r,n){n&ei&&Fn(t.v,e),n&ri?Fn(t.i,r):t.i=r;}function Ns(t,e,r,n,i,a,o,s,u,l){var f=Ur,c=(u&ei)!==0,v=(u&Fa)===0,d=c?v?fn(i):Lt(i):i,b=u&ri?Lt(o):o,h={i:b,v:d,k:a,a:null,e:null,prev:r,next:n};Ur=h;try{return h.e=ar(()=>s(t,d,b,l),Bi),h.e.prev=r&&r.e,h.e.next=n&&n.e,r===null?e.first=h:(r.next=h,r.e.next=h.e),n!==null&&(n.prev=h,n.e.prev=h.e),h}finally{Ur=f;}}function yi(t,e,r){for(var n=t.next?t.next.e.nodes_start:r,i=e?e.e.nodes_start:r,a=t.e.nodes_start;a!==n;){var o=dn(a);i.before(a),a=o;}}function Gt(t,e,r){e===null?t.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e);}function wi(t,e,r,n,i){var s;var a=(s=e.$$slots)==null?undefined:s[r],o=false;a===true&&(a=e.children,o=true),a===undefined?i!==null&&i(t):a(t,o?()=>n:n);}function O(t,e,r,n){var i=t.__attributes??(t.__attributes={});i[e]!==(i[e]=r)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[Na]=r),r==null?t.removeAttribute(e):typeof r!="string"&&Ss(t).includes(e)?t[e]=r:t.setAttribute(e,r));}var bi=new Map;function Ss(t){var e=bi.get(t.nodeName);if(e)return e;bi.set(t.nodeName,e=[]);for(var r,n=t,i=Element.prototype;i!==n;){r=Di(n);for(var a in r)r[a].set&&e.push(a);n=Jn(n);}return e}function xi(t,e,r){var n=t.__className,i=Ts(e);(n!==i||Bi)&&(e==null?t.removeAttribute("class"):t.className=i,t.__className=i);}function Ts(t,e){return (t??"")+""}function Ye(t,e,r){if(r){if(t.classList.contains(e))return;t.classList.add(e);}else {if(!t.classList.contains(e))return;t.classList.remove(e);}}function pe(t,e,r,n){var i=t.__styles??(t.__styles={});i[e]!==r&&(i[e]=r,r==null?t.style.removeProperty(e):t.style.setProperty(e,r,""));}const As=()=>performance.now(),zt={tick:t=>requestAnimationFrame(t),now:()=>As(),tasks:new Set};function ca(){const t=zt.now();zt.tasks.forEach(e=>{e.c(t)||(zt.tasks.delete(e),e.f());}),zt.tasks.size!==0&&zt.tick(ca);}function $s(t){let e;return zt.tasks.size===0&&zt.tick(ca),{promise:new Promise(r=>{zt.tasks.add(e={c:t,f:r});}),abort(){zt.tasks.delete(e);}}}function Wr(t,e){t.dispatchEvent(new CustomEvent(e));}function Os(t){if(t==="float")return "cssFloat";if(t==="offset")return "cssOffset";if(t.startsWith("--"))return t;const e=t.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function Ci(t){const e={},r=t.split(";");for(const n of r){const[i,a]=n.split(":");if(!i||a===undefined)break;const o=Os(i.trim());e[o]=a.trim();}return e}const Ds=t=>t;function Is(t,e,r){var n=Ur,i,a,o,s=null;n.a??(n.a={element:t,measure(){i=this.element.getBoundingClientRect();},apply(){if(o==null||o.abort(),a=this.element.getBoundingClientRect(),i.left!==a.left||i.right!==a.right||i.top!==a.top||i.bottom!==a.bottom){const u=e()(this.element,{from:i,to:a},r==null?undefined:r());o=sn(this.element,u,undefined,1,()=>{o==null||o.abort(),o=undefined;});}},fix(){if(!t.getAnimations().length){var{position:u,width:l,height:f}=getComputedStyle(t);if(u!=="absolute"&&u!=="fixed"){var c=t.style;s={position:c.position,width:c.width,height:c.height,transform:c.transform},c.position="absolute",c.width=l,c.height=f;var v=t.getBoundingClientRect();if(i.left!==v.left||i.top!==v.top){var d=`translate(${i.left-v.left}px, ${i.top-v.top}px)`;c.transform=c.transform?`${c.transform} ${d}`:d;}}}},unfix(){if(s){var u=t.style;u.position=s.position,u.width=s.width,u.height=s.height,u.transform=s.transform;}}}),n.a.element=t;}function xe(t,e,r,n){var i=(t&ja)!==0,a=(t&Wa)!==0,o=i&&a,s=(t&Ya)!==0,u=o?"both":i?"in":"out",l,f=e.inert,c=e.style.overflow,v,d;function b(){var w=U,M=Z;Rt(null),Nt(null);try{return l??(l=r()(e,(n==null?void 0:n())??{},{direction:u}))}finally{Rt(w),Nt(M);}}var h={is_global:s,in(){var w;if(e.inert=f,!i){d==null||d.abort(),(w=d==null?undefined:d.reset)==null||w.call(d);return}a||v==null||v.abort(),Wr(e,"introstart"),v=sn(e,b(),d,1,()=>{Wr(e,"introend"),v==null||v.abort(),v=l=undefined,e.style.overflow=c;});},out(w){if(!a){w==null||w(),l=undefined;return}e.inert=true,Wr(e,"outrostart"),d=sn(e,b(),v,0,()=>{Wr(e,"outroend"),w==null||w();});},stop:()=>{v==null||v.abort(),d==null||d.abort();}},C=Z;if((C.transitions??(C.transitions=[])).push(h),i&&jn){var x=s;if(!x){for(var m=C.parent;m&&m.f&vn;)for(;(m=m.parent)&&!(m.f&un););x=!m||(m.f&Pi)!==0;}x&&ur(()=>{V(()=>h.in());});}}function sn(t,e,r,n,i){var a=n===1;if(Ca(e)){var o,s=false;return pn(()=>{if(!s){var C=e({direction:a?"in":"out"});o=sn(t,C,r,n,i);}}),{abort:()=>{s=true,o==null||o.abort();},deactivate:()=>o.deactivate(),reset:()=>o.reset(),t:()=>o.t()}}if(r==null||r.deactivate(),!(e!=null&&e.duration))return i(),{abort:At,deactivate:At,reset:At,t:()=>n};const{delay:u=0,css:l,tick:f,easing:c=Ds}=e;var v=[];if(a&&r===undefined&&(f&&f(0,1),l)){var d=Ci(l(0,1));v.push(d,d);}var b=()=>1-n,h=t.animate(v,{duration:u});return h.onfinish=()=>{var C=(r==null?undefined:r.t())??1-n;r==null||r.abort();var x=n-C,m=e.duration*Math.abs(x),w=[];if(m>0){var M=false;if(l)for(var E=Math.ceil(m/16.666666666666668),k=0;k<=E;k+=1){var D=C+x*c(k/E),N=Ci(l(D,1-D));w.push(N),M||(M=N.overflow==="hidden");}M&&(t.style.overflow="hidden"),b=()=>{var A=h.currentTime;return C+x*c(A/m)},f&&$s(()=>{if(h.playState!=="running")return  false;var A=b();return f(A,1-A),true});}h=t.animate(w,{duration:m,fill:"forwards"}),h.onfinish=()=>{b=()=>n,f==null||f(n,1-n),i();};},{abort:()=>{h&&(h.cancel(),h.effect=null,h.onfinish=At);},deactivate:()=>{i=At;},reset:()=>{n===0&&(f==null||f(1,0));},t:()=>b()}}function In(t,e,r=e){var n=fr();ws(t,"input",i=>{var a=i?t.defaultValue:t.value;if(a=Pn(t)?Vn(a):a,r(a),n&&a!==(a=e())){var o=t.selectionStart,s=t.selectionEnd;t.value=a??"",s!==null&&(t.selectionStart=o,t.selectionEnd=Math.min(s,t.value.length));}}),V(e)==null&&t.value&&r(Pn(t)?Vn(t.value):t.value),vr(()=>{var i=e();Pn(t)&&i===Vn(t.value)||t.type==="date"&&!i&&!t.value||i!==t.value&&(t.value=i??"");});}function Pn(t){var e=t.type;return e==="number"||e==="range"}function Vn(t){return t===""?null:+t}function Rn(t,e,r){var n=ne(t,e);n&&n.set&&(t[e]=r,ai(()=>{t[e]=null;}));}var Wt,ye,lr,on,ua;const ln=class ln{constructor(e){Ge(this,on);Ge(this,Wt,new WeakMap);Ge(this,ye);Ge(this,lr);Dn(this,lr,e);}observe(e,r){var n=qt(this,Wt).get(e)||new Set;return n.add(r),qt(this,Wt).set(e,n),di(this,on,ua).call(this).observe(e,qt(this,lr)),()=>{var i=qt(this,Wt).get(e);i.delete(r),i.size===0&&(qt(this,Wt).delete(e),qt(this,ye).unobserve(e));}}};Wt=new WeakMap,ye=new WeakMap,lr=new WeakMap,on=new WeakSet,ua=function(){return qt(this,ye)??Dn(this,ye,new ResizeObserver(e=>{for(var r of e){ln.entries.set(r.target,r);for(var n of qt(this,Wt).get(r.target)||[])n(r);}}))},fi(ln,"entries",new WeakMap);let Yn=ln;var Ps=new Yn({box:"border-box"});function Ei(t,e,r){var n=Ps.observe(t,()=>r(t[e]));ur(()=>(V(()=>r(t[e])),n));}function ki(t,e){return t===e||(t==null?undefined:t[ie])===e}function jt(t={},e,r,n){return ur(()=>{var i,a;return vr(()=>{i=a,a=[],V(()=>{t!==r(...a)&&(e(t,...a),i&&ki(r(...i),t)&&e(null,...i));});}),()=>{pn(()=>{a&&ki(r(...a),t)&&e(null,...a);});}}),t}function va(t){return function(...e){var r=e[0];r.target===this&&(t==null||t.apply(this,e));}}function tr(t){return function(...e){var r=e[0];return r.stopPropagation(),t==null?undefined:t.apply(this,e)}}function Te(t=false){const e=G,r=e.l.u;if(!r)return;let n=()=>ee(e.s);if(t){let i=0,a={};const o=ir(()=>{let s=false;const u=e.s;for(const l in u)u[l]!==a[l]&&(a[l]=u[l],s=true);return s&&i++,i});n=()=>p(o);}r.b.length&&rs(()=>{Li(e,n),Hn(r.b);}),qn(()=>{const i=V(()=>r.m.map(Ea));return ()=>{for(const a of i)typeof a=="function"&&a();}}),r.a.length&&qn(()=>{Li(e,n),Hn(r.a);});}function Li(t,e){if(t.l.s)for(const r of t.l.s)p(r);e();}function Vs(t,e){var a;var r=(a=t.$$events)==null?undefined:a[e.type],n=cn(r)?r.slice():r==null?[]:[r];for(var i of n)i.call(this,e);}function fa(t,e,r){if(t==null)return e(undefined),At;const n=V(()=>t.subscribe(e,r));return n.unsubscribe?()=>n.unsubscribe():n}const de=[];function yn(t,e=At){let r=null;const n=new Set;function i(s){if(Hi(t,s)&&(t=s,r)){const u=!de.length;for(const l of n)l[1](),de.push(l,t);if(u){for(let l=0;l<de.length;l+=2)de[l][0](de[l+1]);de.length=0;}}}function a(s){i(s(t));}function o(s,u=At){const l=[s,u];return n.add(l),n.size===1&&(r=e(i,a)||At),s(t),()=>{n.delete(l),n.size===0&&r&&(r(),r=null);}}return {set:i,update:a,subscribe:o}}function da(t){let e;return fa(t,r=>e=r)(),e}let Ue=false,Un=Symbol();function lt(t,e,r){const n=r[e]??(r[e]={store:null,source:fn(undefined),unsubscribe:At});if(n.store!==t&&!(Un in r))if(n.unsubscribe(),n.store=t??null,t==null)n.source.v=undefined,n.unsubscribe=At;else {var i=true;n.unsubscribe=fa(t,a=>{i?n.source.v=a:I(n.source,a);}),i=false;}return t&&Un in r?da(t):p(n.source)}function vt(t,e){return t.set(e),e}function Ae(){const t={};function e(){ai(()=>{for(var r in t)t[r].unsubscribe();Oi(t,Un,{enumerable:false,value:true});});}return [t,e]}function gt(t,e,r){return t.set(r),e}function Mi(){Ue=true;}function Rs(t){var e=Ue;try{return Ue=!1,[t(),Ue]}finally{Ue=e;}}function Ni(t){for(var e=Z,r=Z;e!==null&&!(e.f&(Ht|ke));)e=e.parent;try{return Nt(e),t()}finally{Nt(r);}}function nt(t,e,r,n){var D;var i=(r&qa)!==0,a=!Me||(r&Ba)!==0,o=(r&Za)!==0,s=(r&Ga)!==0,u=false,l;o?[l,u]=Rs(()=>t[e]):l=t[e];var f=ie in t||Ma in t,c=o&&(((D=ne(t,e))==null?undefined:D.set)??(f&&e in t&&(N=>t[e]=N)))||undefined,v=n,d=true,b=false,h=()=>(b=true,d&&(d=false,s?v=V(n):v=n),v);l===undefined&&n!==undefined&&(c&&a&&Oa(),l=h(),c&&c(l));var C;if(a)C=()=>{var N=t[e];return N===undefined?h():(d=true,b=false,N)};else {var x=Ni(()=>(i?ir:Dt)(()=>t[e]));x.f|=ka,C=()=>{var N=p(x);return N!==undefined&&(v=undefined),N===undefined?v:N};}if(!(r&za))return C;if(c){var m=t.$$legacy;return function(N,A){return arguments.length>0?((!a||!A||m||u)&&c(A?C():N),N):C()}}var w=false,M=false,E=fn(l),k=Ni(()=>ir(()=>{var N=C(),A=p(E);return w?(w=!1,M=!0,A):(M=!1,E.v=N)}));return i||(k.equals=ti),function(N,A){if(arguments.length>0){const tt=A?p(k):a&&o?_e(N):N;return k.equals(tt)||(w=true,I(E,tt),b&&v!==undefined&&(v=tt),V(()=>p(k))),N}return p(k)}}function wn(t){G===null&&ea(),Me&&G.l!==null?Fs(G).m.push(t):qn(()=>{const e=V(t);if(typeof e=="function")return e});}function Hs(t){G===null&&ea(),wn(()=>()=>V(t));}function Fs(t){var e=t.l;return e.u??(e.u={a:[],b:[],m:[]})}const qs="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(qs);Ra();const Bs=t=>t;function Ce(t,{delay:e=0,duration:r=400,easing:n=Bs}={}){const i=+getComputedStyle(t).opacity;return {delay:e,duration:r,easing:n,css:a=>`opacity: ${a*i}`}}const _a="Kesa:Fall",Si=()=>{try{return JSON.parse(localStorage.getItem(_a))??{}}catch{return {}}},oe=(t,e)=>{const r=Si(),n=t in r?r[t]:e,{subscribe:i,set:a,update:o}=yn(n);return i(s=>{const u=Si();localStorage.setItem(_a,JSON.stringify({...u,[t]:s}));}),{subscribe:i,set:s=>{typeof s=="function"?o(s):a(s);},update:o}},me=yn(0),pa=yn(""),er=oe("_isFallView",true),Xe=yn(0),Ti=oe("_panelPos",{x:0,y:0}),Xn=oe("_show_hover_pic",1),Ke=oe("_card_layout",{min:240,max:400,gap:12}),kt=oe("_card_detail",{all:false,category:true,title:true,topping:true,free:true,size:true,sub_title:false,tags:false,download_collect:false,upload_time:false,statistics:false}),zs=oe("_show_nexus_pic",1),Xr=oe("_block_gay",1);function Zs(t={path:"/search",method:"POST"}){const e=XMLHttpRequest.prototype.open,r=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.open=function(n,i){return this._requestMetadata={method:n.toUpperCase(),url:i,isTarget:i.includes(t.path)&&n.toUpperCase()===t.method},e.apply(this,arguments)},XMLHttpRequest.prototype.send=function(n){var i;if((i=this._requestMetadata)!=null&&i.isTarget){const a=this.onreadystatechange,o=this.onload;this.addEventListener("readystatechange",()=>{this.readyState===4&&this._captureResponseData(),a==null||a.call(this);}),this.onload=l=>{this._captureResponseData(),o==null||o.call(this,l);};const s={url:this._requestMetadata.url,body:n instanceof Document?n.documentElement.outerHTML:n},u=new CustomEvent(`req>${t.method}->${t.path}`,{detail:s});window.dispatchEvent(u);}return r.apply(this,arguments)},XMLHttpRequest.prototype._captureResponseData=function(){if(!this._hasCaptured&&this._requestMetadata.isTarget){try{const n={status:this.status,headers:this.getAllResponseHeaders(),data:this._parseResponse()},i=new CustomEvent(`res>${t.method}->${t.path}`,{detail:n});window.dispatchEvent(i);}catch(n){console.error("<PT-Fall> Capture failed:",n);}this._hasCaptured=true;}},XMLHttpRequest.prototype._parseResponse=function(){var n;try{switch(this.responseType){case "json":return this.response;case "document":return (n=this.responseXML)==null?void 0:n.documentElement.outerHTML;case "arraybuffer":return new Uint8Array(this.response);case "blob":return URL.createObjectURL(this.response);default:return this.responseText}}catch{return this.responseText}};}function Gs(t){const e=t-1;return e*e*e+1}function js(t,{from:e,to:r},n={}){var{delay:i=0,duration:a=k=>Math.sqrt(k)*120,easing:o=Gs}=n,s=getComputedStyle(t),u=s.transform==="none"?"":s.transform,[l,f]=s.transformOrigin.split(" ").map(parseFloat);l/=t.clientWidth,f/=t.clientHeight;var c=Ws(t),v=t.clientWidth/r.width/c,d=t.clientHeight/r.height/c,b=e.left+e.width*l,h=e.top+e.height*f,C=r.left+r.width*l,x=r.top+r.height*f,m=(b-C)*v,w=(h-x)*d,M=e.width/r.width,E=e.height/r.height;return {delay:i,duration:typeof a=="function"?a(Math.sqrt(m*m+w*w)):a,easing:o,css:(k,D)=>{var N=D*m,A=D*w,tt=k+D*M,J=k+D*E;return `transform: ${u} translate(${N}px, ${A}px) scale(${tt}, ${J});`}}}function Ws(t){if("currentCSSZoom"in t)return t.currentCSSZoom;for(var e=t,r=1;e!==null;)r*=+getComputedStyle(e).zoom,e=e.parentElement;return r}var Ys=$('<span class="svelte-b2jtby"> </span>'),Us=$('<div class="svelte-b2jtby"><!></div>'),Xs=$('<span class="svelte-b2jtby"> </span>'),Ks=$("<div><!></div>"),Qs=$("<div></div>");function Js(t,e){Kt(e,false);const r=Q(),n=Q();let i=nt(e,"animate",8,true),a=nt(e,"columnClass",24,()=>""),o=nt(e,"duration",8,200),s=nt(e,"gap",8,20),u=nt(e,"getId",8,m=>typeof m=="number"||typeof m=="string"?m:m[l()]),l=nt(e,"idKey",24,()=>"id"),f=nt(e,"items",8),c=nt(e,"masonryHeight",12,0),v=nt(e,"masonryWidth",12,0),d=nt(e,"maxColWidth",8,500),b=nt(e,"minColWidth",8,330),h=nt(e,"style",24,()=>""),C=nt(e,"class",24,()=>"");be(()=>(ee(f()),ee(v()),ee(b()),ee(s())),()=>{I(r,Math.min(f().length,Math.floor(v()/(b()+s()))||1));}),be(()=>(ee(f()),p(r)),()=>{I(n,f().reduce((m,w,M)=>(m[M%m.length].push([w,M]),m),Array(p(r)).fill(null).map(()=>[])));}),_n(),Te();var x=Qs();Je(x,5,()=>p(n),Wn,(m,w)=>{var M=Ks(),E=_(M);{var k=N=>{var A=ge(),tt=It(A);Je(tt,9,()=>p(w),([J,rt])=>u()(J),(J,rt)=>{let pt=()=>p(rt)[0],$t=()=>p(rt)[1];var H=Us(),T=_(H);wi(T,e,"default",{get idx(){return $t()},get item(){return pt()}},et=>{var it=Ys(),Ot=_(it);Y(()=>R(Ot,pt())),S(et,it);}),xe(1,H,()=>Ce,()=>({delay:100,duration:o()})),xe(2,H,()=>Ce,()=>({delay:0,duration:o()})),Is(H,()=>js,()=>({duration:o()})),S(J,H);}),S(N,A);},D=N=>{var A=ge(),tt=It(A);Je(tt,1,()=>p(w),([J,rt])=>u()(J),(J,rt)=>{let pt=()=>p(rt)[0],$t=()=>p(rt)[1];var H=ge(),T=It(H);wi(T,e,"default",{get idx(){return $t()},get item(){return pt()}},et=>{var it=Xs(),Ot=_(it);Y(()=>R(Ot,pt())),S(et,it);}),S(J,H);}),S(N,A);};q(E,N=>{i()?N(k):N(D,false);});}Y(()=>{xi(M,`col ${a()??""} svelte-b2jtby`),O(M,"style",`gap: ${s()??""}px; max-width: ${d()??""}px;`);}),S(m,M);}),Y(()=>{xi(x,`masonry ${C()??""} svelte-b2jtby`),O(x,"style",`gap: ${s()??""}px; ${h()??""}`);}),Ei(x,"clientWidth",v),Ei(x,"clientHeight",c),S(t,x),Qt();}var Mt=function(){return Mt=Object.assign||function(e){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);}return e},Mt.apply(this,arguments)},to=function(){function t(e){this.options=e,this.listeners={};}return t.prototype.on=function(e,r){var n=this.listeners[e]||[];this.listeners[e]=n.concat([r]);},t.prototype.triggerEvent=function(e,r){var n=this,i=this.listeners[e]||[];i.forEach(function(a){return a({target:n,event:r})});},t}(),Ee;(function(t){t[t.Add=0]="Add",t[t.Remove=1]="Remove";})(Ee||(Ee={}));var eo=function(){function t(){this.notifications=[];}return t.prototype.push=function(e){this.notifications.push(e),this.updateFn(e,Ee.Add,this.notifications);},t.prototype.splice=function(e,r){var n=this.notifications.splice(e,r)[0];return this.updateFn(n,Ee.Remove,this.notifications),n},t.prototype.indexOf=function(e){return this.notifications.indexOf(e)},t.prototype.onUpdate=function(e){this.updateFn=e;},t}(),Yt;(function(t){t.Dismiss="dismiss",t.Click="click";})(Yt||(Yt={}));var Ai={types:[{type:"success",className:"notyf__toast--success",backgroundColor:"#3dc763",icon:{className:"notyf__icon--success",tagName:"i"}},{type:"error",className:"notyf__toast--error",backgroundColor:"#ed3d3d",icon:{className:"notyf__icon--error",tagName:"i"}}],duration:2e3,ripple:true,position:{x:"right",y:"bottom"},dismissible:false},ro=function(){function t(){this.notifications=[],this.events={},this.X_POSITION_FLEX_MAP={left:"flex-start",center:"center",right:"flex-end"},this.Y_POSITION_FLEX_MAP={top:"flex-start",center:"center",bottom:"flex-end"};var e=document.createDocumentFragment(),r=this._createHTMLElement({tagName:"div",className:"notyf"});e.appendChild(r),document.body.appendChild(e),this.container=r,this.animationEndEventName=this._getAnimationEndEventName(),this._createA11yContainer();}return t.prototype.on=function(e,r){var n;this.events=Mt(Mt({},this.events),(n={},n[e]=r,n));},t.prototype.update=function(e,r){r===Ee.Add?this.addNotification(e):r===Ee.Remove&&this.removeNotification(e);},t.prototype.removeNotification=function(e){var r=this,n=this._popRenderedNotification(e),i;if(n){i=n.node,i.classList.add("notyf__toast--disappear");var a;i.addEventListener(this.animationEndEventName,a=function(o){o.target===i&&(i.removeEventListener(r.animationEndEventName,a),r.container.removeChild(i));});}},t.prototype.addNotification=function(e){var r=this._renderNotification(e);this.notifications.push({notification:e,node:r}),this._announce(e.options.message||"Notification");},t.prototype._renderNotification=function(e){var r,n=this._buildNotificationCard(e),i=e.options.className;return i&&(r=n.classList).add.apply(r,i.split(" ")),this.container.appendChild(n),n},t.prototype._popRenderedNotification=function(e){for(var r=-1,n=0;n<this.notifications.length&&r<0;n++)this.notifications[n].notification===e&&(r=n);if(r!==-1)return this.notifications.splice(r,1)[0]},t.prototype.getXPosition=function(e){var r;return ((r=e==null?undefined:e.position)===null||r===undefined?undefined:r.x)||"right"},t.prototype.getYPosition=function(e){var r;return ((r=e==null?undefined:e.position)===null||r===undefined?undefined:r.y)||"bottom"},t.prototype.adjustContainerAlignment=function(e){var r=this.X_POSITION_FLEX_MAP[this.getXPosition(e)],n=this.Y_POSITION_FLEX_MAP[this.getYPosition(e)],i=this.container.style;i.setProperty("justify-content",n),i.setProperty("align-items",r);},t.prototype._buildNotificationCard=function(e){var r=this,n=e.options,i=n.icon;this.adjustContainerAlignment(n);var a=this._createHTMLElement({tagName:"div",className:"notyf__toast"}),o=this._createHTMLElement({tagName:"div",className:"notyf__ripple"}),s=this._createHTMLElement({tagName:"div",className:"notyf__wrapper"}),u=this._createHTMLElement({tagName:"div",className:"notyf__message"});u.innerHTML=n.message||"";var l=n.background||n.backgroundColor;if(i){var f=this._createHTMLElement({tagName:"div",className:"notyf__icon"});if((typeof i=="string"||i instanceof String)&&(f.innerHTML=new String(i).valueOf()),typeof i=="object"){var c=i.tagName,v=c===undefined?"i":c,d=i.className,b=i.text,h=i.color,C=h===undefined?l:h,x=this._createHTMLElement({tagName:v,className:d,text:b});C&&(x.style.color=C),f.appendChild(x);}s.appendChild(f);}if(s.appendChild(u),a.appendChild(s),l&&(n.ripple?(o.style.background=l,a.appendChild(o)):a.style.background=l),n.dismissible){var m=this._createHTMLElement({tagName:"div",className:"notyf__dismiss"}),w=this._createHTMLElement({tagName:"button",className:"notyf__dismiss-btn"});m.appendChild(w),s.appendChild(m),a.classList.add("notyf__toast--dismissible"),w.addEventListener("click",function(E){var k,D;(D=(k=r.events)[Yt.Dismiss])===null||D===undefined||D.call(k,{target:e,event:E}),E.stopPropagation();});}a.addEventListener("click",function(E){var k,D;return (D=(k=r.events)[Yt.Click])===null||D===undefined?undefined:D.call(k,{target:e,event:E})});var M=this.getYPosition(n)==="top"?"upper":"lower";return a.classList.add("notyf__toast--"+M),a},t.prototype._createHTMLElement=function(e){var r=e.tagName,n=e.className,i=e.text,a=document.createElement(r);return n&&(a.className=n),a.textContent=i||null,a},t.prototype._createA11yContainer=function(){var e=this._createHTMLElement({tagName:"div",className:"notyf-announcer"});e.setAttribute("aria-atomic","true"),e.setAttribute("aria-live","polite"),e.style.border="0",e.style.clip="rect(0 0 0 0)",e.style.height="1px",e.style.margin="-1px",e.style.overflow="hidden",e.style.padding="0",e.style.position="absolute",e.style.width="1px",e.style.outline="0",document.body.appendChild(e),this.a11yContainer=e;},t.prototype._announce=function(e){var r=this;this.a11yContainer.textContent="",setTimeout(function(){r.a11yContainer.textContent=e;},100);},t.prototype._getAnimationEndEventName=function(){var e=document.createElement("_fake"),r={MozTransition:"animationend",OTransition:"oAnimationEnd",WebkitTransition:"webkitAnimationEnd",transition:"animationend"},n;for(n in r)if(e.style[n]!==undefined)return r[n];return "animationend"},t}(),ha=function(){function t(e){var r=this;this.dismiss=this._removeNotification,this.notifications=new eo,this.view=new ro;var n=this.registerTypes(e);this.options=Mt(Mt({},Ai),e),this.options.types=n,this.notifications.onUpdate(function(i,a){return r.view.update(i,a)}),this.view.on(Yt.Dismiss,function(i){var a=i.target,o=i.event;r._removeNotification(a),a.triggerEvent(Yt.Dismiss,o);}),this.view.on(Yt.Click,function(i){var a=i.target,o=i.event;return a.triggerEvent(Yt.Click,o)});}return t.prototype.error=function(e){var r=this.normalizeOptions("error",e);return this.open(r)},t.prototype.success=function(e){var r=this.normalizeOptions("success",e);return this.open(r)},t.prototype.open=function(e){var r=this.options.types.find(function(a){var o=a.type;return o===e.type})||{},n=Mt(Mt({},r),e);this.assignProps(["ripple","position","dismissible"],n);var i=new to(n);return this._pushNotification(i),i},t.prototype.dismissAll=function(){for(;this.notifications.splice(0,1););},t.prototype.assignProps=function(e,r){var n=this;e.forEach(function(i){r[i]=r[i]==null?n.options[i]:r[i];});},t.prototype._pushNotification=function(e){var r=this;this.notifications.push(e);var n=e.options.duration!==undefined?e.options.duration:this.options.duration;n&&setTimeout(function(){return r._removeNotification(e)},n);},t.prototype._removeNotification=function(e){var r=this.notifications.indexOf(e);r!==-1&&this.notifications.splice(r,1);},t.prototype.normalizeOptions=function(e,r){var n={type:e};return typeof r=="string"?n.message=r:typeof r=="object"&&(n=Mt(Mt({},n),r)),n},t.prototype.registerTypes=function(e){var r=(e&&e.types||[]).slice(),n=Ai.types.map(function(i){var a=-1;r.forEach(function(s,u){s.type===i.type&&(a=u);});var o=a!==-1?r.splice(a,1)[0]:{};return Mt(Mt({},i),o)});return n.concat(r)},t}();new ha({duration:5e3,dismissible:true});const rr=new ha({duration:3e3,dismissible:true,position:{x:"left",y:"top"},types:[{type:"warning",background:"orange",icon:{className:"material-icons",tagName:"i",text:"warning"}}]}),no="data:image/svg+xml,%3csvg%20stroke='currentColor'%20fill='currentColor'%20stroke-width='0'%20viewBox='0%200%2024%2024'%20height='25'%20width='25'%20xmlns='http://www.w3.org/2000/svg'%20style='%20vertical-align:%20middle;%20--darkreader-inline-fill:%20currentColor;%20--darkreader-inline-stroke:%20currentColor;'%20%3e%3cpath%20d='M12%205c-3.859%200-7%203.141-7%207s3.141%207%207%207%207-3.141%207-7-3.141-7-7-7zm0%2012c-2.757%200-5-2.243-5-5s2.243-5%205-5%205%202.243%205%205-2.243%205-5%205z'%3e%3c/path%3e%3cpath%20d='M12%209c-1.627%200-3%201.373-3%203s1.373%203%203%203%203-1.373%203-3-1.373-3-3-3z'%3e%3c/path%3e%3c/svg%3e",io="data:image/svg+xml,%3csvg%20viewBox='64%2064%20896%20896'%20focusable='false'%20data-icon='arrow-up'%20width='1em'%20height='1em'%20fill='green'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M868%20545.5L536.1%20163a31.96%2031.96%200%2000-48.3%200L156%20545.5a7.97%207.97%200%20006%2013.2h81c4.6%200%209-2%2012.1-5.5L474%20300.9V864c0%204.4%203.6%208%208%208h60c4.4%200%208-3.6%208-8V300.9l218.9%20252.3c3%203.5%207.4%205.5%2012.1%205.5h81c6.8%200%2010.5-8%206-13.2z'%3e%3c/path%3e%3c/svg%3e",ao="data:image/svg+xml,%3csvg%20viewBox='64%2064%20896%20896'%20focusable='false'%20data-icon='arrow-down'%20width='1em'%20height='1em'%20fill='red'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M862%20465.3h-81c-4.6%200-9%202-12.1%205.5L550%20723.1V160c0-4.4-3.6-8-8-8h-60c-4.4%200-8%203.6-8%208v563.1L255.1%20470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8%200-10.5%208.1-6%2013.2L487.9%20861a31.96%2031.96%200%200048.3%200L868%20478.5c4.5-5.2.8-13.2-6-13.2z'%3e%3c/path%3e%3c/svg%3e",so="data:image/svg+xml,%3csvg%20viewBox='64%2064%20896%20896'%20focusable='false'%20data-icon='download'%20width='1em'%20height='1em'%20fill='currentColor'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M505.7%20661a8%208%200%200012.6%200l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4%200-8%203.6-8%208v338.3H400c-6.7%200-10.4%207.7-6.3%2012.9l112%20141.8zM878%20626h-60c-4.4%200-8%203.6-8%208v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4%200-8%203.6-8%208v198c0%2017.7%2014.3%2032%2032%2032h684c17.7%200%2032-14.3%2032-32V634c0-4.4-3.6-8-8-8z'%3e%3c/path%3e%3c/svg%3e",oo="data:image/svg+xml,%3csvg%20viewBox='64%2064%20896%20896'%20focusable='false'%20data-icon='star'%20width='1em'%20height='1em'%20fill='currentColor'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M908.1%20353.1l-253.9-36.9L540.7%2086.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9%2014.5L369.8%20316.2l-253.9%2036.9c-7%201-13.4%204.3-18.3%209.3a32.05%2032.05%200%2000.6%2045.3l183.7%20179.1-43.4%20252.9a31.95%2031.95%200%200046.4%2033.7L512%20754l227.1%20119.4c6.2%203.3%2013.4%204.4%2020.3%203.2%2017.4-3%2029.1-19.5%2026.1-36.9l-43.4-252.9%20183.7-179.1c5-4.9%208.3-11.3%209.3-18.3%202.7-17.5-9.5-33.7-27-36.3z'%3e%3c/path%3e%3c/svg%3e",lo="data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cstyle%3e%20.cls-1{fill:%232eb1b7;}%20.cls-2{fill:%2356b54e;}%20.cls-3{fill:%235dc6d1;}%20.cls-4{fill:%2360cc5a;}%20.cls-5{fill:%23ffce69;}%20.cls-6{fill:%236c2e7c;}%20%3c/style%3e%3c/defs%3e%3cg%20id='Icons'%3e%3crect%20class='cls-1'%20height='22'%20rx='4'%20width='22'%20x='1'%20y='1'/%3e%3cpath%20class='cls-2'%20d='M23,18v1a4,4,0,0,1-4,4H5a4,4,0,0,1-3.9-3.1l7.19-7.19a1.008,1.008,0,0,1,1.42,0l1.8,1.8a1,1,0,0,0,1.46-.05l2.33-2.65a1,1,0,0,1,1.46-.05Z'/%3e%3cpath%20class='cls-3'%20d='M23,5v9a4.025,4.025,0,0,1-1.17,2.83l-5.07-5.07a1,1,0,0,0-1.46.05l-2.33,2.65a1,1,0,0,1-1.46.05l-1.8-1.8a1.008,1.008,0,0,0-1.42,0L3.36,17.64A3.988,3.988,0,0,1,1,14V5A4,4,0,0,1,5,1H19A4,4,0,0,1,23,5Z'/%3e%3cpath%20class='cls-4'%20d='M21.83,16.83A4.025,4.025,0,0,1,19,18H5a3.931,3.931,0,0,1-1.64-.36l4.93-4.93a1.008,1.008,0,0,1,1.42,0l1.8,1.8a1,1,0,0,0,1.46-.05l2.33-2.65a1,1,0,0,1,1.46-.05Z'/%3e%3ccircle%20class='cls-5'%20cx='7'%20cy='7'%20r='2'/%3e%3c/g%3e%3cg%20data-name='Layer%204'%20id='Layer_4'%3e%3cpath%20class='cls-6'%20d='M19,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,19,0Zm3,19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3Z'/%3e%3cpath%20class='cls-6'%20d='M7,10A3,3,0,1,0,4,7,3,3,0,0,0,7,10ZM7,6A1,1,0,1,1,6,7,1,1,0,0,1,7,6Z'/%3e%3cpath%20class='cls-6'%20d='M16.707,10.293a.956.956,0,0,0-.74-.293,1.006,1.006,0,0,0-.72.341L12.217,13.8l-2.51-2.511a1,1,0,0,0-1.414,0l-4,4a1,1,0,1,0,1.414,1.414L9,13.414l1.9,1.9L8.247,18.341a1,1,0,0,0,1.506,1.318l3.218-3.678.006,0,.007-.011,3.065-3.5,2.244,2.244a1,1,0,0,0,1.414-1.414Z'/%3e%3c/g%3e%3c/svg%3e",at={architecture:"Mteam",TL_Selector:"div.app-content__inner",LOADING_PIC:"/static/media/logo.80b63235eaf702e44a8d.png",HOST:"https://test2.m-team.cc",API:{search:{url:"/search",fullUrl:"/api/torrent/search",method:"POST"},genDlToken:{url:"/genDlToken",fullUrl:"/api/torrent/genDlToken",method:"POST",type:"formData",contentForm:{name1:"id"}},collection:{url:"/collection",fullUrl:"/api/torrent/collection",method:"POST",type:"formData",contentForm:{name1:"id",name2:"make"}}},ICON:{SIZE:no,SEEDERS:io,LEECHERS:ao,DOWNLOAD:so,COLLECTION:oo,PIN:"/static/trans.gif",PREVIEW:lo},CATEGORY:{401:{src:"https://static.m-team.cc/static/cate/moviesd.png",alt:"電影/SD",color:"#c74854"},402:{src:"https://static.m-team.cc/static/cate/tvhd.png",alt:"影劇/綜藝/HD",color:"#276fb8"},403:{src:"https://static.m-team.cc/static/cate/tvsd.png",alt:"影劇/綜藝/SD",color:"#c74854"},404:{src:"https://static.m-team.cc/static/cate/bbc.png",alt:"紀錄",color:"#23ac38"},405:{src:"https://static.m-team.cc/static/cate/anime.png",alt:"動畫",color:"#996c34"},406:{src:"https://static.m-team.cc/static/cate/mv.png",alt:"演唱",color:"#8a57a1"},407:{src:"https://static.m-team.cc/static/cate/sport.png",alt:"運動",color:"#23ac38"},409:{src:"https://static.m-team.cc/static/cate/other.png",alt:"Misc(其他)",color:"#996c34"},419:{src:"https://static.m-team.cc/static/cate/moviehd.png",alt:"電影/HD",color:"#c01a20"},420:{src:"https://static.m-team.cc/static/cate/moviedvd.png",alt:"電影/DVDiSo",color:"#c74854"},421:{src:"https://static.m-team.cc/static/cate/moviebd.png",alt:"電影/Blu-Ray",color:"#00a0e9"},422:{src:"https://static.m-team.cc/static/cate/software.png",alt:"軟體",color:"#f39800"},423:{src:"https://static.m-team.cc/static/cate/game-pc-3.jpeg",alt:"PC遊戲",color:"#f39800"},427:{src:"https://static.m-team.cc/static/cate/Study.png",alt:"教育(書面)",color:"#7FC269"},434:{src:"https://static.m-team.cc/static/cate/flac.png",alt:"Music(無損)",color:"#8a57a1"},435:{src:"https://static.m-team.cc/static/cate/tvdvd.png",alt:"影劇/綜藝/DVDiSo",color:"#4dbebd"},438:{src:"https://static.m-team.cc/static/cate/tvbd.png",alt:"影劇/綜藝/BD",color:"#1897d6"},439:{src:"https://static.m-team.cc/static/cate/movieremux.png",alt:"電影/Remux",color:"#1b2a51"},441:{src:"https://static.m-team.cc/static/cate/Study_Video.png",alt:"教育(影片)",color:"#7FC269"},442:{src:"https://static.m-team.cc/static/cate/Study_Audio.png",alt:"有聲書",color:"#7FC269"},448:{src:"https://static.m-team.cc/static/cate/pcgame.png",alt:"TV遊戲",color:"#f39800"},410:{src:"https://static.m-team.cc/static/cate/cenhd.png",alt:"AV(有碼)/HD Censored",color:"#F520CB"},411:{src:"https://static.m-team.cc/static/cate/hgame.png",alt:"H-遊戲",color:"#f49800"},412:{src:"https://static.m-team.cc/static/cate/hanime.png",alt:"H-動畫",color:"#f49800"},413:{src:"https://static.m-team.cc/static/cate/hcomic.png",alt:"H-漫畫",color:"#f49800"},424:{src:"https://static.m-team.cc/static/cate/censd.png",alt:"AV(有碼)/SD Censored",color:"#DA55A9"},425:{src:"https://static.m-team.cc/static/cate/ivvideo.png",alt:"IV(寫真影集)",color:"#bb1e9a"},426:{src:"https://static.m-team.cc/static/cate/uendvd.png",alt:"AV(無碼)/DVDiSo Uncensored",color:"#f77afa"},429:{src:"https://static.m-team.cc/static/cate/uenhd.png",alt:"AV(無碼)/HD Uncensored",color:"#f52bcb"},430:{src:"https://static.m-team.cc/static/cate/uensd.png",alt:"AV(無碼)/SD Uncensored",color:"#db55a9"},431:{src:"https://static.m-team.cc/static/cate/cenbd.png",alt:"AV(有碼)/Blu-Ray Censored",color:"#19a7ec"},432:{src:"https://static.m-team.cc/static/cate/uenbd.png",alt:"AV(無碼)/Blu-Ray Uncensored",color:"#19a7ec"},433:{src:"https://static.m-team.cc/static/cate/ivpic.png",alt:"IV(寫真圖集)",color:"#bb1e9a"},436:{src:"https://static.m-team.cc/static/cate/adult0day.png",alt:"AV(網站)/0Day",color:"#bb1e9a"},437:{src:"https://static.m-team.cc/static/cate/cendvd.png",alt:"AV(有碼)/DVDiSo Censored",color:"#f77afa"},440:{src:"https://static.m-team.cc/static/cate/gayhd.gif",alt:"AV(Gay)/HD",color:"#f52bcb"}},CATEGORY_COLOR:{115:"#f52bcb",120:"#f52bcb",410:"#f52bcb",429:"#f52bcb",424:"#DA55A9",430:"#db55a9",437:"#f77afa",426:"#f77afa",431:"#19a7ec",432:"#19a7ec",440:"#f52bcb",436:"#bb1e9a",425:"#bb1e9a",433:"#bb1e9a",411:"#f49800",412:"#f49800",413:"#f49800",100:"#c74854",401:"#c74854",419:"#c01a20",420:"#c74854",421:"#00a0e9",439:"#1b2a51",105:"#276fb8",403:"#c74854",402:"#276fb8",435:"#4dbebd",438:"#1897d6",444:"#23ac38",404:"#23ac38",449:"#996c34",405:"#996c34",443:"#7FC269",427:"#7FC269",441:"#7FC269",442:"#7FC269",447:"#f39800",423:"#f39800",448:"#f39800",450:"#996c34",407:"#23ac38",422:"#f39800",409:"#996c34",110:"#8a57a1",406:"#8a57a1",408:"#8a57a1",434:"#8a57a1"},CATEGORY_NAME:{115:"AV(有码)",120:"AV(无码)",410:"有码 HD",429:"无码 HD",424:"有码 Xvid",430:"无码 Xvid",437:"有码 DVD",426:"无码 DVD",431:"有码 BluRay",432:"无码 BluRay",440:"GAY",436:"0 day",425:"写真 video",433:"写真 pic",411:"H-Game",412:"H-Anime",413:"H-Comic",100:"Movie",401:"Movie SD",419:"Movie HD",420:"Movie DVD",421:"Movie BluRay",439:"Movie Remux",105:"TV",403:"TV SD",402:"TV HD",435:"TV DVDiSo",438:"TV BluRay",444:"Documentary",404:"Documentary",449:"Anime",405:"Anime",443:"教育",427:"教育文档",441:"教育影片",442:"教育音频",447:"Game",423:"Game",448:"TV Game",450:"其他",407:"Sport",422:"软件",409:"Other",110:"Music",406:"MV",408:"Music AAC/ALAC",434:"Music 无损"},INDEX:0,Iframe_Width:1260,get_bg_color:function(){return getComputedStyle(document.documentElement).getPropertyValue("--bg-3")},special:function(){let t=co(),e=uo();return t&&e},pageLoaded:function(){}};function co(){const t=Array.from(document.querySelectorAll(".ant-table-row-level-0 .ant-col a[href]"));return t.forEach(function(e){e.addEventListener("click",function(r){r.preventDefault(),_iframe_switch.set(1),_iframe_url.set(e.href);});}),t.length}function uo(){document.querySelectorAll(".ant-image-mask").forEach(r=>{r.remove();});const e=Array.from(document.querySelectorAll(".torrent-list__thumbnail"));return e.forEach(r=>{r.classList+=" preview_Origin";}),e.length}const ui=".preview_Origin";document.body.addEventListener("mouseover",function(t){if(t.target.matches(ui)){const e=t,r=t.target;handleMouseOver(e,r);}});document.body.addEventListener("mouseout",function(t){t.target.matches(ui)&&handleMouseOut(t);});document.body.addEventListener("mousemove",function(t){if(t.target.matches(ui)){const e=t.target;handleMouseMove(t,e);}});var vo=ci('<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="18" width="18" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle;"><path d="M7 7h10v2H7zm0 4h7v2H7z"></path><path d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"></path></svg>');function $i(t){var e=vo();S(t,e);}class fo{constructor(){this.container=null,this.imgElements=null,this.buffer=null,this.init();}init(){this.container=document.querySelector(".kp_container")||this.createPreview(),document.body.appendChild(this.container);}createPreview(){const e=document.createElement("div");e.className="kp_container",e.style.backgroundColor="rgba(0,0,0,0.8)",e.style.opacity="1",e.style.position="fixed",e.style.zIndex="10000",e.style.pointerEvents="none",e.style.transition="all .3s",e.style.display="none";const r=document.createElement("img");r.className="kp_img",r.style.position="absolute",r.style.zIndex="10002",r.style.pointerEvents="none",r.style.width="100%",r.style.height="100%",r.style.objectFit="contain",e.appendChild(r);const n=document.createElement("img");return n.className="kp_img",n.style.position="absolute",n.style.zIndex="10001",n.style.pointerEvents="none",n.style.width="100%",n.style.height="100%",n.style.objectFit="cover",n.style.filter="blur(8px)",n.style.opacity="0.9",e.appendChild(n),e}handleMouseOver(e,r){if(!r){console.warn("imgEle is null");return}if(da(zs)){const n=r.getAttribute("src");n&&(document.querySelectorAll(".kp_img").forEach(a=>{a.setAttribute("src",n);}),this.updatePosition(e),this.imgElements=r,this.container.style.display="block");}}handleMouseMove(e){this.container.style.display==="block"&&this.updatePosition(e);}updatePosition(e){const r=this.previewPosition(e);this.container.style.left=r.left,this.container.style.top=r.top,this.container.style.width=r.width,this.container.style.height=r.height;}previewPosition(e){let r=0,n=0;try{r=this.imgElements.naturalWidth,n=this.imgElements.naturalHeight;}catch{}const i=e.clientX,a=e.clientY,o=window.innerWidth,s=window.innerHeight,u={bot:{width:o,height:window.innerHeight-a},top:{width:o,height:a},right:{width:window.innerWidth-i,height:s},left:{width:i,height:s}};let l=0,f="";for(const c in u){const v=Math.min(u[c].width/r,u[c].height/n);v>l&&(l=v,f=c);}return {top:{left:0,top:0,width:o+"px",height:a+"px"},bot:{left:0,top:a+"px",width:o+"px",height:window.innerHeight-a+"px"},left:{left:0,top:0,width:i+"px",height:s+"px"},right:{left:i+"px",top:0,width:window.innerWidth-i+"px",height:s+"px"}}[f]||{left:0,top:0,width:0,height:0}}clearPreview(){document.querySelectorAll(".kp_img").forEach(e=>{e.setAttribute("src","");}),this.container.style.display="none";}destroy(){this.buffer&&clearTimeout(this.buffer),this.container&&(this.container.style.display="none",clearPreview());}}function _o(){document.querySelectorAll(".kp_img").forEach(e=>{e.setAttribute("src","");});const t=document.querySelector(".kp_container");t.style.display="none";}window.__clearPreview=_o;const po="data:image/svg+xml,%3csvg%20width='256px'%20height='256px'%20viewBox='0%200%2024.00%2024.00'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20transform='matrix(1,%200,%200,%201,%200,%200)'%20%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'%20transform='translate(0,0),%20scale(1)'%20/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%23CCCCCC'%20stroke-width='0.048'%20/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M13%203L13.7071%202.29289C13.5196%202.10536%2013.2652%202%2013%202V3ZM14%2022C14.5523%2022%2015%2021.5523%2015%2021C15%2020.4477%2014.5523%2020%2014%2020V22ZM19%209H20C20%208.73478%2019.8946%208.48043%2019.7071%208.29289L19%209ZM18%2010C18%2010.5523%2018.4477%2011%2019%2011C19.5523%2011%2020%2010.5523%2020%2010H18ZM5.21799%2019.908L4.32698%2020.362H4.32698L5.21799%2019.908ZM6.09202%2020.782L6.54601%2019.891L6.54601%2019.891L6.09202%2020.782ZM6.09202%203.21799L5.63803%202.32698L5.63803%202.32698L6.09202%203.21799ZM5.21799%204.09202L4.32698%203.63803L4.32698%203.63803L5.21799%204.09202ZM13.109%208.45399L14%208V8L13.109%208.45399ZM13.546%208.89101L14%208L13.546%208.89101ZM17.2299%2017.7929C16.8394%2018.1834%2016.8394%2018.8166%2017.2299%2019.2071C17.6204%2019.5976%2018.2536%2019.5976%2018.6441%2019.2071L17.2299%2017.7929ZM15.0316%2015.2507C14.8939%2015.7856%2015.2159%2016.3308%2015.7507%2016.4684C16.2856%2016.6061%2016.8308%2016.2841%2016.9684%2015.7493L15.0316%2015.2507ZM17.9375%2020C17.3852%2020%2016.9375%2020.4477%2016.9375%2021C16.9375%2021.5523%2017.3852%2022%2017.9375%2022V20ZM17.9475%2022C18.4998%2022%2018.9475%2021.5523%2018.9475%2021C18.9475%2020.4477%2018.4998%2020%2017.9475%2020V22ZM13%202H8.2V4H13V2ZM4%206.2V17.8H6V6.2H4ZM8.2%2022H14V20H8.2V22ZM19.7071%208.29289L13.7071%202.29289L12.2929%203.70711L18.2929%209.70711L19.7071%208.29289ZM20%2010V9H18V10H20ZM4%2017.8C4%2018.3436%203.99922%2018.8114%204.03057%2019.195C4.06287%2019.5904%204.13419%2019.9836%204.32698%2020.362L6.10899%2019.454C6.0838%2019.4045%206.04612%2019.3038%206.02393%2019.0322C6.00078%2018.7488%206%2018.3766%206%2017.8H4ZM8.2%2020C7.62345%2020%207.25117%2019.9992%206.96784%2019.9761C6.69617%2019.9539%206.59545%2019.9162%206.54601%2019.891L5.63803%2021.673C6.01641%2021.8658%206.40963%2021.9371%206.80497%2021.9694C7.18864%2022.0008%207.65645%2022%208.2%2022V20ZM4.32698%2020.362C4.6146%2020.9265%205.07354%2021.3854%205.63803%2021.673L6.54601%2019.891C6.35785%2019.7951%206.20487%2019.6422%206.10899%2019.454L4.32698%2020.362ZM8.2%202C7.65645%202%207.18864%201.99922%206.80497%202.03057C6.40963%202.06287%206.01641%202.13419%205.63803%202.32698L6.54601%204.10899C6.59545%204.0838%206.69617%204.04612%206.96784%204.02393C7.25117%204.00078%207.62345%204%208.2%204V2ZM6%206.2C6%205.62345%206.00078%205.25117%206.02393%204.96784C6.04612%204.69617%206.0838%204.59545%206.10899%204.54601L4.32698%203.63803C4.13419%204.01641%204.06287%204.40963%204.03057%204.80497C3.99922%205.18864%204%205.65645%204%206.2H6ZM5.63803%202.32698C5.07354%202.6146%204.6146%203.07354%204.32698%203.63803L6.10899%204.54601C6.20487%204.35785%206.35785%204.20487%206.54601%204.10899L5.63803%202.32698ZM12%203V7.4H14V3H12ZM14.6%2010H19V8H14.6V10ZM12%207.4C12%207.66353%2011.9992%207.92131%2012.0169%208.13823C12.0356%208.36682%2012.0797%208.63656%2012.218%208.90798L14%208C14.0293%208.05751%2014.0189%208.08028%2014.0103%207.97537C14.0008%207.85878%2014%207.69653%2014%207.4H12ZM14.6%208C14.3035%208%2014.1412%207.99922%2014.0246%207.9897C13.9197%207.98113%2013.9425%207.9707%2014%208L13.092%209.78201C13.3634%209.92031%2013.6332%209.96438%2013.8618%209.98305C14.0787%2010.0008%2014.3365%2010%2014.6%2010V8ZM12.218%208.90798C12.4097%209.2843%2012.7157%209.59027%2013.092%209.78201L14%208V8L12.218%208.90798ZM18.937%2016C18.937%2016.1732%2018.8915%2016.3053%2018.6175%2016.5697C18.4638%2016.718%2018.2828%2016.8653%2018.0319%2017.074C17.7936%2017.2723%2017.5141%2017.5087%2017.2299%2017.7929L18.6441%2019.2071C18.86%2018.9913%2019.0805%2018.8033%2019.3109%2018.6116C19.5287%2018.4305%2019.7852%2018.2223%2020.0065%2018.0087C20.4825%2017.5493%2020.937%2016.9314%2020.937%2016H18.937ZM17.937%2015C18.4893%2015%2018.937%2015.4477%2018.937%2016H20.937C20.937%2014.3431%2019.5938%2013%2017.937%2013V15ZM16.9684%2015.7493C17.0795%2015.3177%2017.4724%2015%2017.937%2015V13C16.5377%2013%2015.3645%2013.957%2015.0316%2015.2507L16.9684%2015.7493ZM17.9375%2022H17.9475V20H17.9375V22Z'%20fill='%23c00000'%20/%3e%3c/g%3e%3c/svg%3e",ho="data:image/svg+xml,%3csvg%20viewBox='-2.4%20-2.4%2028.80%2028.80'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23000000'%20%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'%20/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M15.6%2015.6C15.6%2015.6%2014.25%2013.8%2012%2013.8C9.75%2013.8%208.4%2015.6%208.4%2015.6M14.7%209.3H14.709M9.3%209.3H9.309M21%2012C21%2016.9706%2016.9706%2021%2012%2021C7.02944%2021%203%2016.9706%203%2012C3%207.02944%207.02944%203%2012%203C16.9706%203%2021%207.02944%2021%2012ZM15.15%209.3C15.15%209.54853%2014.9485%209.75%2014.7%209.75C14.4515%209.75%2014.25%209.54853%2014.25%209.3C14.25%209.05147%2014.4515%208.85%2014.7%208.85C14.9485%208.85%2015.15%209.05147%2015.15%209.3ZM9.75%209.3C9.75%209.54853%209.54853%209.75%209.3%209.75C9.05147%209.75%208.85%209.54853%208.85%209.3C8.85%209.05147%209.05147%208.85%209.3%208.85C9.54853%208.85%209.75%209.05147%209.75%209.3Z'%20stroke='%23000000'%20stroke-width='1.8'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3c/g%3e%3c/svg%3e";var go=$('<div class="card_new_page_highlight svelte-aspv9f"> </div>'),mo=$('<div class="card-category svelte-aspv9f"><img class="card_category-img svelte-aspv9f"> </div>'),yo=$('<a class="__main_title svelte-aspv9f" target="_blank" rel="noopener noreferrer"> </a>'),wo=$('<div class="pic_error svelte-aspv9f"><div><img style="height: 100%; width:60px; border-radius:20px;" alt="pic error" class="svelte-aspv9f"></div> <div class="ant-typography" style="color: white; font-size:16px;">GAY WARNING<br>同志警告</div></div>'),bo=$('<img class="lazy-image svelte-aspv9f">'),xo=$('<div class="pic_error svelte-aspv9f" style=""><div><img style="height: 100%;width: 100px;" alt="no pic" class="svelte-aspv9f"></div> <div>本种没有图片</div></div>'),Co=$('<div class="pic_error svelte-aspv9f" style=""><div><img style="height: 100%;width: 100px;" alt="pic error" class="svelte-aspv9f"></div> <div class="ant-typography">图片加载失败</div></div>'),Eo=$('<div class="hover-trigger svelte-aspv9f"><img style="pointer-events: none;" alt="PREVIEW" class="svelte-aspv9f"></div>'),ko=$(`<img style="
                    background: url(/static/media/icons.8bb5446ebbbd07050285.gif) 0 -202px;
                    height: 14px;
                    width: 14px;" alt="PIN" class="svelte-aspv9f">`),Lo=$('<div class="card_info__topping svelte-aspv9f"></div> &nbsp;',1),Mo=$('<div class="_tag svelte-aspv9f"> </div>'),No=$('<div class="_tag _tag_diy svelte-aspv9f">DIY</div>'),So=$('<div class="_tag _tag_dub svelte-aspv9f">国配</div>'),To=$('<div class="_tag _tag_sub svelte-aspv9f">中字</div>'),Ao=$('<div class="cl-tags svelte-aspv9f"><!> <!> <!></div>'),$o=$(`<img style="
                  background: url(/static/media/icons.8bb5446ebbbd07050285.gif) 0 -202px;
                  height: 14px;
                  width: 14px;" alt="PIN" class="svelte-aspv9f">`),Oo=$('<div class="card_info__topping svelte-aspv9f"></div> &nbsp;',1),Do=$('<div class="_tag svelte-aspv9f"> </div>'),Io=$('<div class="card-index svelte-aspv9f"><!> <!></div>'),Po=$('<div class="card-index card-index-right svelte-aspv9f"> </div>'),Vo=$('<div class="card_info-item card_info__sub_title svelte-aspv9f"><div> </div></div>'),Ro=$('<div class="_tag _tag_diy svelte-aspv9f">DIY</div>'),Ho=$('<div class="_tag _tag_dub svelte-aspv9f">国配</div>'),Fo=$('<div class="_tag _tag_sub svelte-aspv9f">中字</div>'),qo=$('<div class="cl-tags svelte-aspv9f"><!> <!> <!></div>'),Bo=$('<div class="card_info-item card_info__dl_and_cl svelte-aspv9f"><button title="(原列表的这俩按钮会消失)">下载 & 收藏</button></div>'),zo=$('<div class="card_info-item card_info__upload_time svelte-aspv9f"><div> </div></div>'),Zo=$('<div class="card_info-item card_info__statistics svelte-aspv9f"><!> &nbsp; <b> </b> &nbsp;&nbsp; <img alt="SVG_Seeders"> &nbsp; <b> </b> &nbsp;&nbsp; <img alt="SVG_Leechers"> &nbsp; <b> </b></div>'),Go=$('<div class="card_info svelte-aspv9f"><!>  <!> <!> <!> <!></div>'),jo=$('<div class="card_holder"><!> <!> <div class="card_title"><!></div> <div class="card_pic svelte-aspv9f"><!> <!>  <div class="hover-overlay svelte-aspv9f"><div class="overlay-content svelte-aspv9f"><div class="__inner_index_and_size svelte-aspv9f"><div class="card-index __inner_index svelte-aspv9f" style="background-color:black; color:white"><!> <!></div> <button class="__iframe_button svelte-aspv9f">打开 iframe</button> <div class="card-index card-index-right __inner_index __inner_size svelte-aspv9f"> </div></div> <div class="card-category card_info-item svelte-aspv9f"><img class="card_category-img card_category_square svelte-aspv9f" style="width: 36px;height: 36px;"> </div> <div style="width: 100%;" class="card_info-item card_info__sub_title svelte-aspv9f"><a class="__main_title __straight svelte-aspv9f" target="_blank" rel="noopener noreferrer"> </a></div> <div style="width: 100%;" class="card_info-item card_info__sub_title svelte-aspv9f"><div class="__sub_title svelte-aspv9f"> </div></div>  <!> <div class="card_info-item card_info__upload_time svelte-aspv9f"><div> </div></div> <div class="card_info-item card_info__statistics svelte-aspv9f"><div class="__center svelte-aspv9f"><!> <b> </b></div> <div class="__center svelte-aspv9f"><img style="width: 14px; height: 14px;" alt="SVG_Seeders" class="svelte-aspv9f"> <b> </b></div> <div class="__center svelte-aspv9f"><img style="width: 14px; height: 14px;" alt="SVG_Leechers" class="svelte-aspv9f"> <b> </b></div> <button title="(原列表的这俩按钮会消失)">下载&收藏</button></div></div></div> <!> <!></div> <!></div>');function Wo(t,e){Kt(e,false);const[r,n]=Ae(),i=()=>lt(Xr,"$_block_gay",r),a=()=>lt(kt,"$_card_detail",r),o=()=>lt(Xn,"$_show_hover_pic",r);let s=nt(e,"torrentInfo",8),u=Q(false),l=Q();s().status.toppingLevel&&I(l,Array(Number(s().status.toppingLevel)).fill());const f=s().status.discount,c=s().status.discountEndTime,v={FREE:"免费",PERCENT_50:"50%"},d=()=>{const y=new Date,L=new Date(c);return Math.floor((L.getTime()-y.getTime())/(1e3*3600))};let b=Q();const h=at.CATEGORY[s().category].color;function C(y){const L=y.replace("#",""),P=parseInt(L.substr(0,2),16),z=parseInt(L.substr(2,2),16),X=parseInt(L.substr(4,2),16);return (P*299+z*587+X*114)/1e3<128?"white":"black"}function x(y){if(y===0)return "0 B";const L=["B","KB","MB","GB","TB"];let P=0,z=y;for(;z>=1024&&P<L.length-1;)z/=1024,P++;return `${z.toFixed(2).replace(/\.?0+$/,"")} ${L[P]}`}let m=Q(),w=Q();function M(y,L){const P=document.querySelectorAll(`a[href^="/detail/${y}"]`),z=[];P.forEach(X=>{if(!/\/detail\/\d+/.test(X.href))return;const K=X.closest("tr");K&&K.querySelectorAll("button").forEach(ot=>{ot.querySelector("span.ant-btn-icon")&&z.push(ot);});}),z.length?(z[0].style.margin=0,[...new Set(z)].forEach(K=>{L.appendChild(K);})):rr.error("没找到捏, 建议在种子详情里下载收藏~");}let E=Q(false),k=Q(false),D=new fo,N=Q(),A=Q(),tt=Q(0);function J(){p(A)&&I(tt,p(A).offsetHeight);}let rt=Q(false);const pt="/static/cate/gayhd.gif",$t="https://static.m-team.cc/static/media/logo.80b63235eaf702e44a8d.png";let H=s().imageList[0]||$t,T=Q(),et,it=Q(false);const Ot=()=>{p(it)||(Et(T,p(T).style.width="100%"),Et(T,p(T).src=H),p(T).classList.add("loaded"),Et(T,p(T).style.opacity=1),I(it,true),p(A)&&J());};function dr(){vt(pa,"https://"+location.host+"/detail/"+s().id),vt(me,1);}let $e=Q(true);wn(()=>{p(it)||(et=new IntersectionObserver(y=>{y.forEach(L=>{L.isIntersecting&&(Ot(),et.unobserve(p(T)));});},{rootMargin:"100px"}),p(T)&&!p(it)&&et.observe(p(T)),s().pt_fall_highlight&&p(b).scrollIntoView({behavior:"smooth"}),setTimeout(()=>{I($e,false);},3e3)),J(),p(T)&&Et(T,p(T).style.width="auto");}),Hs(()=>{et&&et.disconnect();}),be(()=>p(A),()=>{p(A)&&J();}),be(()=>(ee(s()),i(),p(T),p(A)),()=>{s().category==440&&i()==0&&p(T)&&(Et(T,p(T).style.width="100%"),Et(T,p(T).src=H),p(T).classList.add("loaded"),Et(T,p(T).style.opacity=1),I(it,true),p(A)&&J());}),_n(),Te();var le=jo(),_r=_(le);{var pr=y=>{var L=go(),P=_(L);Y(()=>R(P,`新页面 (${s().index??""}+)`)),xe(3,L,()=>Ce,()=>({duration:500})),S(y,L);};q(_r,y=>{s().pt_fall_highlight&&p($e)&&y(pr);});}var Oe=g(_r,2);{var hr=y=>{var L=mo(),P=_(L),z=g(P);Y(X=>{O(L,"data-href",`https://${location.host}/browse?cat=`+s().category),O(L,"style",`
      background-color: ${h??"transparent"};
      color: ${X??""}`),O(P,"src",at.CATEGORY[s().category].src),O(P,"alt",at.CATEGORY[s().category].alt),R(z,`    ${at.CATEGORY[s().category].alt??""}`);},[()=>h?C(h):"black"],Dt),S(y,L);};q(Oe,y=>{a().category&&y(hr);});}var gr=g(Oe,2),De=_(gr);{var mr=y=>{var L=yo(),P=_(L);Y(()=>{O(L,"href","/detail/"+s().id),R(P,s().name);}),S(y,L);};q(De,y=>{a().title&&y(mr);});}var Jt=g(gr,2),yr=_(Jt);{var bn=y=>{var L=ge(),P=It(L);{var z=K=>{var ot=wo();O(ot,"style",`  background-color: ${h??""}`);var ut=_(ot),j=_(ut);O(j,"src",pt),S(K,ot);},X=K=>{var ot=ge(),ut=It(ot);{var j=wt=>{var bt=bo();O(bt,"data-src",H),jt(bt,W=>I(T,W),()=>p(T)),Y(()=>{O(bt,"src",p(it)?H:$t),O(bt,"alt",s().id);}),B("error",bt,()=>{I(rt,true),p(T)||console.log(`<${s().index}>[${s().id}] imgElement 丢失.`);}),S(wt,bt);},ht=wt=>{var bt=xo(),W=_(bt),st=_(W);O(st,"src",ho),S(wt,bt);};q(ut,wt=>{s().imageList[0]?wt(j):wt(ht,false);},true);}S(K,ot);};q(P,K=>{i()&&s().category==440?K(z):K(X,false);});}S(y,L);},wr=y=>{var L=Co(),P=_(L),z=_(P);O(z,"src",po);var X=g(P,2);Y(K=>O(X,"style",`color: ${K??""}; font-size:16px;`),[()=>C(h)],Dt),S(y,L);};q(yr,y=>{p(rt)?y(wr,false):y(bn);});}var Ie=g(yr,2);{var xn=y=>{var L=Eo(),P=_(L);Y(()=>O(P,"src",at.ICON.PREVIEW)),B("mouseover",L,z=>{I(E,true),D.handleMouseOver(z,p(T));}),S(y,L);};q(Ie,y=>{o()&&!p(rt)&&y(xn);});}var Ft=g(Ie,2),Pe=_(Ft),Ve=_(Pe),br=_(Ve),xr=_(br);{var Cr=y=>{var L=Lo(),P=It(L);Je(P,5,()=>p(l),Wn,(z,X)=>{var K=ko();Y(()=>O(K,"src",at.ICON.PIN)),S(z,K);}),S(y,L);};q(xr,y=>{s().status.toppingLevel!="0"&&y(Cr);});}var Re=g(xr),Cn=g(Re);{var En=y=>{var L=Mo();Ye(L,"_tag_discount_free",f=="FREE"),Ye(L,"_tag_discount_50",f=="PERCENT_50");var P=_(L);Y(z=>R(P,`${v[f]??""}${z??""}`),[()=>c?":"+d()+"小时":""],Dt),S(y,L);};q(Cn,y=>{f!="NORMAL"&&y(En);});}var ce=g(br,2),He=g(ce,2),kn=_(He),ue=g(Ve,2),ve=_(ue),Er=g(ve),Fe=g(ue,2),qe=_(Fe),kr=_(qe),Be=g(Fe,2),Ln=_(Be),Mn=_(Ln),ze=g(Be,2);{var Lr=y=>{var L=Ao(),P=_(L);{var z=j=>{var ht=No();S(j,ht);};q(P,j=>{(s().labels&1)===1&&j(z);});}var X=g(P,2);{var K=j=>{var ht=So();S(j,ht);};q(X,j=>{(s().labels&2)===2&&j(K);});}var ot=g(X,2);{var ut=j=>{var ht=To();S(j,ht);};q(ot,j=>{(s().labels&4)===4&&j(ut);});}S(y,L);};q(ze,y=>{s().labels!=0&&y(Lr);});}var Mr=g(ze,2),Nn=_(Mr),Nr=_(Nn),Ze=g(Mr,2),Sr=_(Ze),Tr=_(Sr);$i(Tr);var Ar=g(Tr,2),$r=_(Ar),Or=g(Sr,2),Dr=_(Or),Ir=g(Dr,2),Pr=_(Ir),Vr=g(Or,2),Rr=_(Vr),Hr=g(Rr,2),Fr=_(Hr),qr=g(Vr,2);jt(Ze,y=>I(m,y),()=>p(m)),jt(Pe,y=>I(A,y),()=>p(A)),jt(Ft,y=>I(N,y),()=>p(N));var Br=g(Ft,2);{var Sn=y=>{var L=Io(),P=_(L);{var z=ut=>{var j=Oo(),ht=It(j);Je(ht,5,()=>p(l),Wn,(wt,bt)=>{var W=$o();Y(()=>O(W,"src",at.ICON.PIN)),S(wt,W);}),S(ut,j);};q(P,ut=>{a().topping&&s().status.toppingLevel!="0"&&ut(z);});}var X=g(P),K=g(X);{var ot=ut=>{var j=Do();Ye(j,"_tag_discount_free",f=="FREE"),Ye(j,"_tag_discount_50",f=="PERCENT_50");var ht=_(j);Y(wt=>R(ht,`${v[f]??""}${wt??""}`),[()=>c?":"+d()+"小时":""],Dt),S(ut,j);};q(K,ut=>{a().free&&f!="NORMAL"&&ut(ot);});}Y(()=>R(X,` ${s().index??""}

          `)),S(y,L);};q(Br,y=>{p(u)||y(Sn);});}var zr=g(Br,2);{var Tn=y=>{var L=Po(),P=_(L);Y((z,X)=>{O(L,"style",`background-color: ${h??"transparent"}; color:${z??""}`),R(P,X);},[()=>h?C(h):"black",()=>x(s().size)],Dt),S(y,L);};q(zr,y=>{a().size&&!p(u)&&y(Tn);});}var An=g(Jt,2);{var F=y=>{var L=Go(),P=_(L);{var z=W=>{var st=Vo(),Tt=_(st),xt=_(Tt);Y(()=>R(xt,s().smallDescr)),S(W,st);};q(P,W=>{a().sub_title&&W(z);});}var X=g(P,2);{var K=W=>{var st=qo(),Tt=_(st);{var xt=ft=>{var te=Ro();S(ft,te);};q(Tt,ft=>{(s().labels&1)===1&&ft(xt);});}var Zr=g(Tt,2);{var Gr=ft=>{var te=Ho();S(ft,te);};q(Zr,ft=>{(s().labels&2)===2&&ft(Gr);});}var jr=g(Zr,2);{var $n=ft=>{var te=Fo();S(ft,te);};q(jr,ft=>{(s().labels&4)===4&&ft($n);});}S(W,st);};q(X,W=>{a().tags&&s().labels!=0&&W(K);});}var ot=g(X,2);{var ut=W=>{var st=Bo(),Tt=_(st);jt(st,xt=>I(w,xt),()=>p(w)),B("click",Tt,xt=>{M(s().id,p(w)),xt.target.style.display="none";}),S(W,st);};q(ot,W=>{a().download_collect&&W(ut);});}var j=g(ot,2);{var ht=W=>{var st=zo(),Tt=_(st),xt=_(Tt);Y(()=>R(xt,`上传时间:${s().createdDate??""}`)),S(W,st);};q(j,W=>{a().upload_time&&W(ht);});}var wt=g(j,2);{var bt=W=>{var st=Zo(),Tt=_(st);$i(Tt);var xt=g(Tt,2),Zr=_(xt),Gr=g(xt,2),jr=g(Gr,2),$n=_(jr),ft=g(jr,2),te=g(ft,2),ga=_(te);Y(()=>{R(Zr,s().status.comments),O(Gr,"src",at.ICON.SEEDERS),R($n,s().status.seeders),O(ft,"src",at.ICON.LEECHERS),R(ga,s().status.leechers);}),S(W,st);};q(wt,W=>{a().statistics&&W(bt);});}S(y,L);};q(An,y=>{(a().sub_title||a().tags||a().download_collect||a().upload_time||a().statistics)&&y(F);});}jt(le,y=>I(b,y),()=>p(b)),Y((y,L)=>{O(Jt,"style",`min-height: ${p(tt)+24}px;`),pe(Jt,"--cateColor",h+"b0"),R(Re,` ${s().index??""}

              `),O(ce,"style",`background-color: ${h??"transparent"}; color:${y??""}`),O(He,"style",`background-color: ${h??"transparent"}; color:${y??""}`),R(kn,L),O(ue,"data-href",`https://${location.host}/browse?cat=`+s().category),O(ue,"style",`
            height: 40px;
            background-color: ${h??"transparent"};
            color: ${y??""}`),O(ve,"src",at.CATEGORY[s().category].src),O(ve,"alt",at.CATEGORY[s().category].alt),R(Er,`    ${at.CATEGORY[s().category].alt??""}`),O(qe,"href","/detail/"+s().id),O(qe,"title",s().name),R(kr,s().name),R(Mn,s().smallDescr),R(Nr,`上传时间:${s().createdDate??""}`),R($r,s().status.comments),O(Dr,"src",at.ICON.SEEDERS),R(Pr,s().status.seeders),O(Rr,"src",at.ICON.LEECHERS),R(Fr,s().status.leechers);},[()=>h?C(h):"black",()=>x(s().size)],Dt),B("click",ce,dr),B("mousedown",Fe,tr(y=>{y.stopPropagation();})),B("mousedown",qr,tr(y=>{y.stopPropagation();})),B("click",qr,tr(y=>{M(s().id,p(m)),y.target.style.display="none";})),B("mouseenter",Ft,()=>{p(T)&&Et(T,p(T).style.filter="blur(2px)"),Et(N,p(N).style.opacity="1"),I(u,true);}),B("mousemove",Ft,y=>{I(k,true),p(E)&&p(k)&&D.handleMouseMove(y);}),B("mouseleave",Ft,()=>{p(T)&&Et(T,p(T).style.filter="none"),Et(N,p(N).style.opacity="0"),I(u,false),I(k,false),p(E)&&(I(E,false),D.clearPreview());}),B("mousedown",Ft,va(dr)),S(t,le),Qt(),n();}var Yo=$('<p class="text_center svelte-1nf4wjl">没有结果捏</p>'),Uo=$('<main><div class="fall_holder svelte-1nf4wjl"><!></div></main>');function Xo(t,e){Kt(e,false);const[r,n]=Ae(),i=()=>lt(Ke,"$_card_layout",r),a=Q();let o=nt(e,"infoList",8),s=Q(o().data);p(s).length;let u=Q();const l=at.get_bg_color();Object.keys(p(s)).forEach((M,E)=>{Et(s,p(s)[M].index=E+1);}),console.log("Mteam_Fall:First	"+p(s).length);function f(M,E=true){let k=M.data;console.log("Mteam_Fall:New:	"+k.length),E?(c(),Object.keys(k).forEach((D,N)=>{k[D].index=N+1,N==0&&(k[D].pt_fall_highlight=true);}),I(s,[...k])):(Object.keys(k).forEach((D,N)=>{k[D].index=N+1+p(s).length,N==0&&(k[D].pt_fall_highlight=true);}),I(s,[...p(s),...k]));}function c(){I(s,[]);}function v(M,E){E=="top"&&M.scrollIntoView({behavior:"smooth"}),E=="bottom"&&(M.scrollIntoView({behavior:"auto",block:"end",inline:"nearest"}),M.scrollIntoView({behavior:"auto",block:"end",inline:"nearest"}),M.scrollIntoView({behavior:"auto",block:"end",inline:"nearest"}));}function d(M="top"){v(p(u),M);}be(()=>p(s),()=>{I(a,[...p(s)]);}),_n(),Te();var b=Uo(),h=_(b);O(h,"style",`background-color:${l??""}`);var C=_(h);{var x=M=>{Js(M,{animate:true,get items(){return p(a)},get minColWidth(){return i().min},get maxColWidth(){return i().max},get gap(){return i().gap},children:ss,$$slots:{default:(E,k)=>{const D=Dt(()=>k.item);Wo(E,{get torrentInfo(){return p(D)}});}}});},m=M=>{var E=Yo();S(M,E);};q(C,M=>{p(a).length?M(x):M(m,false);});}jt(b,M=>I(u,M),()=>p(u)),S(t,b),Rn(e,"updateList",f),Rn(e,"clearList",c),Rn(e,"focusFall",d);var w=Qt({updateList:f,clearList:c,focusFall:d});return n(),w}let Ko="0.3.1";var Qo=ci('<svg class="tgme_logo" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle cx="17" cy="17" fill="#40a9ff" r="17"></circle><path d="m7.06510669 16.9258959c5.22739451-2.1065178 8.71314291-3.4952633 10.45724521-4.1662364 4.9797665-1.9157646 6.0145193-2.2485535 6.6889567-2.2595423.1483363-.0024169.480005.0315855.6948461.192827.1814076.1361492.23132.3200675.2552048.4491519.0238847.1290844.0536269.4231419.0299841.65291-.2698553 2.6225356-1.4375148 8.986738-2.0315537 11.9240228-.2513602 1.2428753-.7499132 1.5088847-1.2290685 1.5496672-1.0413153.0886298-1.8284257-.4857912-2.8369905-1.0972863-1.5782048-.9568691-2.5327083-1.3984317-4.0646293-2.3321592-1.7703998-1.0790837-.212559-1.583655.7963867-2.5529189.2640459-.2536609 4.7753906-4.3097041 4.755976-4.431706-.0070494-.0442984-.1409018-.481649-.2457499-.5678447-.104848-.0861957-.2595946-.0567202-.3712641-.033278-.1582881.0332286-2.6794907 1.5745492-7.5636077 4.6239616-.715635.4545193-1.3638349.6759763-1.9445998.6643712-.64024672-.0127938-1.87182452-.334829-2.78737602-.6100966-1.12296117-.3376271-1.53748501-.4966332-1.45976769-1.0700283.04048-.2986597.32581586-.610598.8560076-.935815z" fill="#fff"></path></g></svg>');function Jo(t,e){let r=nt(e,"height",8,34),n=nt(e,"width",8,34);var i=Qo();Y(()=>{O(i,"height",r()),O(i,"width",n());}),S(t,i);}var tl=$('<div class="modal-overlay svelte-19468gw" role="button" aria-hidden="true"><div class="modal-content svelte-19468gw" role="button" aria-hidden="true"><div class="modal-header svelte-19468gw"><h3 class="svelte-19468gw">FAQ - 常见问题</h3> <button class="close-btn svelte-19468gw">&times;</button></div> <div class="modal-body svelte-19468gw"><h4 class="svelte-19468gw">Q: 如何联系反馈问题？</h4> <p class="svelte-19468gw"><a class="faq-btn svelte-19468gw" href="https://t.me/+Nd_qIisDjQ80ZTc9" target="_blank" style="height:40px; display: flex; align-items: center; justify-content: center;"><!> &nbsp;Telegram</a></p> <h4 class="svelte-19468gw">Q: 插件没有生效怎么办？</h4> <p class="svelte-19468gw">可能是浏览器缓存了请求，尝试使用 Ctrl+Shift+R / Ctrl+F5 强制刷新页面。</p> <h4 class="svelte-19468gw">Q: 如何切换瀑布流视图？</h4> <p class="svelte-19468gw">点击悬浮面板中的"切换显示"按钮即可在瀑布流和原列表视图间切换。</p> <h4 class="svelte-19468gw">Q: 如何调整卡片布局？</h4> <p class="svelte-19468gw">点击悬浮面板中的"配置菜单"按钮，可以调整卡片的最小 / 最大宽度、间隔等参数。</p> <h4 class="svelte-19468gw">Q: 快捷键？</h4> <p class="svelte-19468gw">x 可以切换瀑布流视图</p> <p class="svelte-19468gw">Esc 可以从 次级菜单 / 配置菜单 / iframe 中退出。</p></div></div></div>'),el=$('<div class="entry_mteam"><div class="ant-typography" style="line-height: 1.5; text-align: center;"><button class="faq-btn svelte-19468gw">PT-Fall 插件 <span style="font-weight: 600;"></span></button> <button class="faq-btn svelte-19468gw" style="cursor: pointer;">常见问题 FAQ</button></div></div> <!>',1);function rl(t,e){Kt(e,false);const[r,n]=Ae(),i=()=>lt(er,"$_isFallView",r);let a=Q(false);function o(){I(a,true);}function s(){I(a,false);}let u=Q();be(()=>i(),()=>{I(u,i()?"#4ff74f":"yellow");}),_n();var l=el();B("keydown",nr,x=>{x.key==="Escape"&&s();},true);var f=It(l),c=_(f),v=_(c);pe(v,"--hover","green");var d=g(_(v));d.textContent=`[v${Ko}]`;var b=g(v,2);pe(b,"--hover","#40a9ff");var h=g(f,2);{var C=x=>{var m=tl(),w=_(m),M=_(w),E=g(_(M),2),k=g(M,2),D=g(_(k),2),N=_(D);pe(N,"--hover","#40a9ff");var A=_(N);Jo(A,{height:24,width:24}),B("click",E,s),B("click",w,tr(function(tt){Vs.call(this,e,tt);})),xe(3,m,()=>Ce,()=>({duration:200})),B("click",m,s),S(x,m);};q(h,x=>{p(a)&&x(C);});}Y(()=>pe(d,"color",p(u))),B("click",b,o),S(t,l),Qt(),n();}function je(t,e=()=>{}){if(!t)return;const r=document.querySelector(t);if(r){e(r);return}new MutationObserver((i,a)=>{const o=document.querySelector(t);o&&(a.disconnect(),e(o));}).observe(document.documentElement,{childList:true,subtree:true});}function nl(t,e){Kt(e,false);const[r,n]=Ae(),i=()=>lt(er,"$_isFallView",r);let a,o,s,u=true;const l=document.createElement("div");l.classList.add("Fall_DOM"),je(at.TL_Selector,f),je('a[href="/index"][target="_self"]',C=>{if(a)rr.error("未找到目标链接元素"),console.warn("未找到目标链接元素");else {C.insertAdjacentHTML("afterend",'<div class="ptFallReadme"></div>');const x=C.parentNode.querySelector(".ptFallReadme");a=or(rl,{target:x});}}),wn(()=>{console.log("=====> 启动劫持 pushState 方法 <====="),h();});function f(C){if(C.parentNode){console.log("元素已找到，正在插入兄弟节点:",C),Zs();const x={path:"/search",method:"POST"};window.addEventListener("req>POST->/search",m=>{console.log(`<PT-Fall>[Request]  (${x.method} -> ${x.path})
`,m.detail),u=true,u?o&&o.focusFall():o&&o.focusFall("bottom");}),window.addEventListener("res>POST->/search",m=>{const w=JSON.parse(m.detail.data);console.log(`<PT-Fall>[Response] (${x.method}->${x.path})[通过事件捕获]:
`,w),d(i()),c(C),rr.success("捕获到 /search !"),s=w.data,o?o.updateList(s,u):o=or(Xo,{target:l,props:{infoList:s}});});}else rr.error(`找不到指定节点
若总是如此请报告bug`),console.error("无法插入：目标元素没有父节点");}function c(C){const x=C.parentNode.querySelector(".ant-spin-nested-loading"),m=document.createElement("div");m.id="_shield",m.style.position="absolute",m.style.top="0",m.style.left="0",m.style.width="100%",m.style.height="100%",m.style.backgroundColor="rgba(0, 0, 0, 0.5)",m.style.zIndex="100",x.querySelector("#_shield")||x.appendChild(m);const w=document.createElement("div");w.id="fallHolder",w.style.position="absolute",w.style.top="0",w.style.left="0",w.style.width="100%",w.style.minHeight="200px",w.style.zIndex="101",x.querySelector("#fallHolder")||(x.appendChild(w),w.appendChild(l));}let v="";function d(C){l.style.display=C?"block":"none",je("#fallHolder",x=>{x.style.display=C?"block":"none";}),je("#_shield",x=>{x.style.display=C?"block":"none";}),je(at.TL_Selector+" .mx-auto",x=>{v||(v=x.style.margin),x.style.margin=C?0:v;});}window.changeFallView=d;const b=history.pushState;function h(){history.pushState=function(C,x,m){console.log(`%c ====> URL跳转劫持: %c${m}`,"color: cyan","color: white"),m.includes("/browse")||m=="/waterfall"?console.log(`--->属于 browse 范围: ${m}`):(console.warn(`--->不属于 browse 范围: ${m}`),d(false)),b.apply(history,arguments);};}Te(),Qt(),n();}function il(t){if(location.hostname.includes("m-team"))return at}var al=$('<div class="switch-container svelte-18ntgfp"><div class="switch-background svelte-18ntgfp"><div class="switch-slider svelte-18ntgfp"></div></div></div>');function Ct(t,e){let r=nt(e,"checked",12,false);function n(){r(!r());}var i=al(),a=_(i),o=_(a);Y(()=>Ye(o,"checked",r())),B("click",i,n),S(t,i);}var sl=$('<div class="config-menu-overlay svelte-ewpy9m"><div class="config-menu svelte-ewpy9m"><div class="config-menu-header svelte-ewpy9m"><span style="font-size: 18px; font-weight: bold;">配置菜单</span> <button class="close-btn svelte-ewpy9m">&times;</button></div> <div class="config-menu-content svelte-ewpy9m"><h3 class="svelte-ewpy9m"># 卡片布局</h3> <div class="config-item svelte-ewpy9m"><span> </span> <input type="range" min="200" step="1" list="values" class="svelte-ewpy9m"></div> <div class="config-item svelte-ewpy9m"><span> </span> <input type="range" step="1" list="values" class="svelte-ewpy9m"></div> <div class="config-item svelte-ewpy9m"><span> </span> <input type="range" min="0" max="100" step="1" list="values" class="svelte-ewpy9m"></div> <div class="config-item svelte-ewpy9m"><span> </span> <!></div> <h3 class="svelte-ewpy9m"># 卡片常驻信息展示</h3>  <div class="config-item svelte-ewpy9m"><span> </span> <!></div> <div class="config-item svelte-ewpy9m"><span> </span> <!></div> <div class="config-item svelte-ewpy9m"><span> </span> <!></div> <div class="config-item svelte-ewpy9m"><span> </span> <!></div> <div class="config-item svelte-ewpy9m"><span> </span> <!></div> <div class="config-item svelte-ewpy9m"><span> </span> <!></div> <div class="config-item svelte-ewpy9m"><span> </span> <!></div> <div class="config-item svelte-ewpy9m"><span> </span> <!></div> <div class="config-item svelte-ewpy9m"><span> </span> <!></div> <div class="config-item svelte-ewpy9m"><span> </span> <!></div> <h3 class="svelte-ewpy9m"># 卡片屏蔽</h3> <div class="config-item svelte-ewpy9m"><span> </span> <!></div></div></div></div>'),ol=$('<div class="flowP svelte-ewpy9m"><div class="flowPDragger svelte-ewpy9m" role="button" tabindex="0" aria-hidden="true"></div> <div class="flowPHolder ant-typography svelte-ewpy9m"><button class="flowBtn svelte-ewpy9m">切换显示</button> <button class="flowBtn svelte-ewpy9m">配置菜单</button> <button class="flowBtn svelte-ewpy9m">清除悬浮预览图</button> <button class="flowBtn svelte-ewpy9m">iframe</button> <button class="flowBtn svelte-ewpy9m">屏蔽 Gay</button></div></div> <!>',1);function ll(t,e){Kt(e,false);const[r,n]=Ae(),i=()=>lt(Ti,"$_panelPos",r),a=()=>lt(er,"$_isFallView",r),o=()=>lt(Xe,"$_side_panel_switch",r),s=()=>lt(me,"$_iframe_switch",r),u=()=>lt(Xr,"$_block_gay",r),l=()=>lt(Ke,"$_card_layout",r),f=()=>lt(Xn,"$_show_hover_pic",r),c=()=>lt(kt,"$_card_detail",r);let v=Q(),d=false,b=0,h=0;function C(H,T,et){return H<=T&&(H=T),H>=et&&(H=et),H}const x=H=>{H.preventDefault(),d=true,b=H.clientX-p(v).getBoundingClientRect().left,h=H.clientY-p(v).getBoundingClientRect().top;},m=H=>{if(!d)return;const T=C(H.clientX-b,0,window.innerWidth-(p(v).getBoundingClientRect().width+5)),et=C(H.clientY-h,0,window.innerHeight-(p(v).getBoundingClientRect().height+5));vt(Ti,{x:T,y:et});},w=()=>{d=false;};wn(()=>(window.addEventListener("mousemove",m),window.addEventListener("mouseup",w),()=>{window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",w);})),Te();var M=ol();B("keydown",nr,H=>{H.key==="x"&&(vt(er,!a()),window.changeFallView(a()));},true);var E=It(M),k=_(E),D=g(k,2),N=_(D),A=g(N,2),tt=g(A,2),J=g(tt,2),rt=g(J,2);jt(E,H=>I(v,H),()=>p(v));var pt=g(E,2);{var $t=H=>{var T=sl(),et=_(T),it=_(et),Ot=g(_(it),2),dr=g(it,2),$e=g(_(dr),2),le=_($e),_r=_(le),pr=g(le,2),Oe=g($e,2),hr=_(Oe),gr=_(hr),De=g(hr,2),mr=g(Oe,2),Jt=_(mr),yr=_(Jt),bn=g(Jt,2),wr=g(mr,2),Ie=_(wr),xn=_(Ie),Ft=g(Ie,2);Ct(Ft,{get checked(){return Mi(),f()},set checked(F){vt(Xn,F);},$$legacy:true});var Pe=g(wr,4),Ve=_(Pe),br=_(Ve),xr=g(Ve,2);Ct(xr,{get checked(){return c().category},set checked(F){gt(kt,V(c).category=F,V(c));},$$legacy:true});var Cr=g(Pe,2),Re=_(Cr),Cn=_(Re),En=g(Re,2);Ct(En,{get checked(){return c().title},set checked(F){gt(kt,V(c).title=F,V(c));},$$legacy:true});var ce=g(Cr,2),He=_(ce),kn=_(He),ue=g(He,2);Ct(ue,{get checked(){return c().topping},set checked(F){gt(kt,V(c).topping=F,V(c));},$$legacy:true});var ve=g(ce,2),Er=_(ve),Fe=_(Er),qe=g(Er,2);Ct(qe,{get checked(){return c().free},set checked(F){gt(kt,V(c).free=F,V(c));},$$legacy:true});var kr=g(ve,2),Be=_(kr),Ln=_(Be),Mn=g(Be,2);Ct(Mn,{get checked(){return c().size},set checked(F){gt(kt,V(c).size=F,V(c));},$$legacy:true});var ze=g(kr,2),Lr=_(ze),Mr=_(Lr),Nn=g(Lr,2);Ct(Nn,{get checked(){return c().sub_title},set checked(F){gt(kt,V(c).sub_title=F,V(c));},$$legacy:true});var Nr=g(ze,2),Ze=_(Nr),Sr=_(Ze),Tr=g(Ze,2);Ct(Tr,{get checked(){return c().tags},set checked(F){gt(kt,V(c).tags=F,V(c));},$$legacy:true});var Ar=g(Nr,2),$r=_(Ar),Or=_($r),Dr=g($r,2);Ct(Dr,{get checked(){return c().download_collect},set checked(F){gt(kt,V(c).download_collect=F,V(c));},$$legacy:true});var Ir=g(Ar,2),Pr=_(Ir),Vr=_(Pr),Rr=g(Pr,2);Ct(Rr,{get checked(){return c().upload_time},set checked(F){gt(kt,V(c).upload_time=F,V(c));},$$legacy:true});var Hr=g(Ir,2),Fr=_(Hr),qr=_(Fr),Br=g(Fr,2);Ct(Br,{get checked(){return c().statistics},set checked(F){gt(kt,V(c).statistics=F,V(c));},$$legacy:true});var Sn=g(Hr,4),zr=_(Sn),Tn=_(zr),An=g(zr,2);Ct(An,{get checked(){return Mi(),u()},set checked(F){vt(Xr,F);},$$legacy:true}),Y((F,y,L,P)=>{O(et,"style",`background-color: ${F??""};`),R(_r,`最小宽度: ${l().min??""} px`),O(pr,"max",y),R(gr,`最大宽度: ${l().max??""} px`),O(De,"min",L),O(De,"max",P),R(yr,`卡片间隔: ${l().gap??""} px`),R(xn,`显示鼠标悬浮预览大图: ${f()??""}`),R(br,`分区: ${c().category??""}`),R(Cn,`标题: ${c().title??""}`),R(kn,`置顶: ${c().topping??""}`),R(Fe,`免费: ${c().free??""}`),R(Ln,`大小: ${c().size??""}`),R(Mr,`副标题: ${c().sub_title??""}`),R(Sr,`标签: ${c().tags??""}`),R(Or,`下载&收藏: ${c().download_collect??""}`),R(Vr,`上传时间: ${c().upload_time??""}`),R(qr,`评论/上传/下载: ${c().statistics??""}`),R(Tn,`屏蔽 gay 区: ${u()??""}`);},[()=>il().get_bg_color(),()=>Math.max(400,l().max),()=>Math.min(200,l().min),()=>Math.max(800,l().min*2)],Dt),B("click",Ot,()=>vt(Xe,false)),In(pr,()=>l().min,F=>gt(Ke,V(l).min=F,V(l))),In(De,()=>l().max,F=>gt(Ke,V(l).max=F,V(l))),In(bn,()=>l().gap,F=>gt(Ke,V(l).gap=F,V(l))),xe(3,T,()=>Ce,()=>({duration:100})),B("click",T,va(()=>vt(Xe,false))),S(H,T);};q(pt,H=>{o()&&H($t);});}Y(()=>{O(E,"style",`top:${i().y??""}px; left:${i().x??""}px;`),pe(E,"--isFallView",a()?"#4ff74f":"yellow");}),B("mousedown",k,x),B("click",N,()=>{vt(er,!a()),window.changeFallView(a());}),B("click",A,()=>{vt(Xe,!o());}),B("click",tt,()=>{window.__clearPreview();}),B("click",J,()=>{vt(me,+!s());}),B("click",rt,()=>{vt(Xr,!u());}),S(t,M),Qt(),n();}var cl=ci('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_iconCarrier"><circle cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="1.5"></circle><path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path></g></svg>');function ul(t){var e=cl();S(t,e);}var vl=$('<div id="_iframe" class="svelte-1axpxde"><div class="_iframe svelte-1axpxde"><iframe frameborder="0" style="width: 1000px;" class="svelte-1axpxde"></iframe> <div class="_iframeCloseBtn svelte-1axpxde"><!></div></div></div>');function fl(t,e){Kt(e,false);const[r,n]=Ae(),i=()=>lt(me,"$_iframe_switch",r),a=()=>lt(pa,"$_iframe_url",r);let o=nt(e,"_app",8),s;function u(){vt(me,0);}function l(d){d.key==="Escape"&&(console.log(d),vt(me,0),vt(Xe,false));}s=true,s&&or(nl,{target:o()}),or(ll,{target:o()}),console.log("-------------->  PT_Fall Launch   <--------------"),Te();var f=ge();B("keydown",nr,l,true);var c=It(f);{var v=d=>{var b=vl(),h=_(b),C=_(h),x=g(C,2),m=_(x);ul(m),Y(()=>{O(C,"src",a()),O(C,"title",a());}),B("load",C,w=>{const M=w.target.contentDocument||w.target.contentWindow.document;if(!M){console.error("无法访问iframe内容文档, 可能是由于跨域限制。"),rr.error("无法访问iframe内容文档, 可能是由于跨域限制。");return}const E=()=>{const D=M.querySelector(".ant-card.detail-view");D&&(D.scrollIntoView({behavior:"smooth"}),console.log("成功滚动到目标元素！"),clearInterval(k));},k=setInterval(E,500);E();}),B("click",C,tr(w=>{w.stopPropagation();})),B("click",x,u),B("click",b,u),xe(3,b,()=>Ce,()=>({duration:300})),S(d,b);};q(c,d=>{i()&&d(v);});}S(t,f),Qt(),n();}const Kn=document.createElement("div");document.body.append(Kn);or(fl,{target:Kn,props:{_app:Kn}});

})();