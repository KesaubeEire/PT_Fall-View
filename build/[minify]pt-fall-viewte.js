// ==UserScript==
// @name            PT瀑布流视图
// @name:en         PT_Fall-View
// @namespace       vite-plugin-monkey
// @version         0.3.2
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

      var wa=Object.defineProperty;var di=t=>{throw TypeError(t)};var ba=(t,e,r)=>e in t?wa(t,e,{enumerable:true,configurable:true,writable:true,value:r}):t[e]=r;var _i=(t,e,r)=>ba(t,e+"",r),Dn=(t,e,r)=>e.has(t)||di("Cannot "+r);var qt=(t,e,r)=>(Dn(t,e,"read from private field"),r?r.call(t):e.get(t)),je=(t,e,r)=>e.has(t)?di("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),Pn=(t,e,r,n)=>(Dn(t,e,"write to private field"),e.set(t,r),r),pi=(t,e,r)=>(Dn(t,e,"access private method"),r);var ln=Array.isArray,xa=Array.prototype.indexOf,ti=Array.from,Di=Object.defineProperty,ne=Object.getOwnPropertyDescriptor,Pi=Object.getOwnPropertyDescriptors,Ca=Object.prototype,Ea=Array.prototype,ei=Object.getPrototypeOf;function ka(t){return typeof t=="function"}const $t=()=>{};function Ma(t){return t()}function qn(t){for(var e=0;e<t.length;e++)t[e]();}const bt=2,Ri=4,ur=8,cn=16,Ht=32,Le=64,Xr=128,ae=256,Qr=512,ct=1024,Xt=2048,se=4096,Pt=8192,Ne=16384,Vi=32768,un=65536,La=1<<17,Na=1<<19,Hi=1<<20,ie=Symbol("$state"),Sa=Symbol("legacy props"),Ta=Symbol("");function Fi(t){return t===this.v}function qi(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function ri(t){return !qi(t,this.v)}function Aa(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function $a(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Ia(t){throw new Error("https://svelte.dev/e/effect_orphan")}function Oa(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Da(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Pa(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Ra(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Va(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function Ha(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let Se=false;function Fa(){Se=true;}const ni=1,ii=2,Bi=4,qa=8,Ba=16,Za=1,za=2,Ga=4,ja=8,Wa=16,Ya=1,Ua=2,Xa=4,Qa=1,Ka=2,pt=Symbol();function wt(t,e){var r={f:0,v:t,reactions:null,equals:Fi,rv:0,wv:0};return r}function vn(t,e=false){var n;const r=wt(t);return e||(r.equals=ri),Se&&W!==null&&W.l!==null&&((n=W.l).s??(n.s=[])).push(r),r}function J(t,e=false){return Ja(vn(t,e))}function Ja(t){return X!==null&&!zt&&X.f&bt&&(Rt===null?cs([t]):Rt.push(t)),t}function Mt(t,e){return A(t,R(()=>_(t))),e}function A(t,e){return X!==null&&!zt&&dr()&&X.f&(bt|cn)&&(Rt===null||!Rt.includes(t))&&Ha(),Bn(t,e)}function Bn(t,e){return t.equals(e)||(t.v,t.v=e,t.wv=aa(),Zi(t,Xt),dr()&&z!==null&&z.f&ct&&!(z.f&(Ht|Le))&&(Bt===null?us([t]):Bt.push(t))),e}function Zi(t,e){var r=t.reactions;if(r!==null)for(var n=dr(),i=r.length,a=0;a<i;a++){var o=r[a],s=o.f;s&Xt||!n&&o===z||(Tt(o,e),s&(ct|ae)&&(s&bt?Zi(o,se):gn(o)));}}let zi=false;function pe(t,e=null,r){if(typeof t!="object"||t===null||ie in t)return t;const n=ei(t);if(n!==Ca&&n!==Ea)return t;var i=new Map,a=ln(t),o=wt(0);a&&i.set("length",wt(t.length));var s;return new Proxy(t,{defineProperty(u,l,f){(!("value"in f)||f.configurable===false||f.enumerable===false||f.writable===false)&&Pa();var c=i.get(l);return c===undefined?(c=wt(f.value),i.set(l,c)):A(c,pe(f.value,s)),true},deleteProperty(u,l){var f=i.get(l);if(f===undefined)l in u&&i.set(l,wt(pt));else {if(a&&typeof l=="string"){var c=i.get("length"),v=Number(l);Number.isInteger(v)&&v<c.v&&A(c,v);}A(f,pt),hi(o);}return  true},get(u,l,f){var x;if(l===ie)return t;var c=i.get(l),v=l in u;if(c===undefined&&(!v||(x=ne(u,l))!=null&&x.writable)&&(c=wt(pe(v?u[l]:pt,s)),i.set(l,c)),c!==undefined){var d=_(c);return d===pt?undefined:d}return Reflect.get(u,l,f)},getOwnPropertyDescriptor(u,l){var f=Reflect.getOwnPropertyDescriptor(u,l);if(f&&"value"in f){var c=i.get(l);c&&(f.value=_(c));}else if(f===undefined){var v=i.get(l),d=v==null?undefined:v.v;if(v!==undefined&&d!==pt)return {enumerable:true,configurable:true,value:d,writable:true}}return f},has(u,l){var d;if(l===ie)return  true;var f=i.get(l),c=f!==undefined&&f.v!==pt||Reflect.has(u,l);if(f!==undefined||z!==null&&(!c||(d=ne(u,l))!=null&&d.writable)){f===undefined&&(f=wt(c?pe(u[l],s):pt),i.set(l,f));var v=_(f);if(v===pt)return  false}return c},set(u,l,f,c){var b;var v=i.get(l),d=l in u;if(a&&l==="length")for(var x=f;x<v.v;x+=1){var h=i.get(x+"");h!==undefined?A(h,pt):x in u&&(h=wt(pt),i.set(x+"",h));}v===undefined?(!d||(b=ne(u,l))!=null&&b.writable)&&(v=wt(undefined),A(v,pe(f,s)),i.set(l,v)):(d=v.v!==pt,A(v,pe(f,s)));var C=Reflect.getOwnPropertyDescriptor(u,l);if(C!=null&&C.set&&C.set.call(c,f),!d){if(a&&typeof l=="string"){var w=i.get("length"),m=Number(l);Number.isInteger(m)&&m>=w.v&&A(w,m+1);}hi(o);}return  true},ownKeys(u){_(o);var l=Reflect.ownKeys(u).filter(v=>{var d=i.get(v);return d===undefined||d.v!==pt});for(var[f,c]of i)c.v!==pt&&!(f in u)&&l.push(f);return l},setPrototypeOf(){Ra();}})}function hi(t,e=1){A(t,t.v+e);}var nr,Gi,ji;function ts(){if(nr===undefined){nr=window;var t=Element.prototype,e=Node.prototype;Gi=ne(e,"firstChild").get,ji=ne(e,"nextSibling").get,t.__click=undefined,t.__className="",t.__attributes=null,t.__styles=null,t.__e=undefined,Text.prototype.__t=undefined;}}function ai(t=""){return document.createTextNode(t)}function xe(t){return Gi.call(t)}function fn(t){return ji.call(t)}function p(t,e){return xe(t)}function Dt(t,e){{var r=xe(t);return r instanceof Comment&&r.data===""?fn(r):r}}function g(t,e=1,r=false){let n=t;for(;e--;)n=fn(n);return n}function es(t){t.textContent="";}function ir(t){var e=bt|Xt;z===null?e|=ae:z.f|=Hi;var r=X!==null&&X.f&bt?X:null;const n={children:null,ctx:W,deps:null,equals:Fi,f:e,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??z};return r!==null&&(r.children??(r.children=[])).push(n),n}function Ot(t){const e=ir(t);return e.equals=ri,e}function Wi(t){var e=t.children;if(e!==null){t.children=null;for(var r=0;r<e.length;r+=1){var n=e[r];n.f&bt?si(n):Ut(n);}}}function rs(t){for(var e=t.parent;e!==null;){if(!(e.f&bt))return e;e=e.parent;}return null}function Yi(t){var e,r=z;St(rs(t));try{Wi(t),e=oa(t);}finally{St(r);}return e}function Ui(t){var e=Yi(t),r=(re||t.f&ae)&&t.deps!==null?se:ct;Tt(t,r),t.equals(e)||(t.v=e,t.wv=aa());}function si(t){Wi(t),sr(t,0),Tt(t,Ne),t.v=t.children=t.deps=t.ctx=t.reactions=null;}function Xi(t){z===null&&X===null&&Ia(),X!==null&&X.f&ae&&$a(),ui&&Aa();}function ns(t,e){var r=e.last;r===null?e.last=e.first=t:(r.next=t,t.prev=r,e.last=t);}function Te(t,e,r,n=true){var i=(t&Le)!==0,a=z,o={ctx:W,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|Xt,first:null,fn:e,last:null,next:null,parent:i?null:a,prev:null,teardown:null,transitions:null,wv:0};if(r){var s=ge;try{gi(!0),hn(o),o.f|=Vi;}catch(f){throw Ut(o),f}finally{gi(s);}}else e!==null&&gn(o);var u=r&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&(Hi|Xr))===0;if(!u&&!i&&n&&(a!==null&&ns(o,a),X!==null&&X.f&bt)){var l=X;(l.children??(l.children=[])).push(o);}return o}function oi(t){const e=Te(ur,null,false);return Tt(e,ct),e.teardown=t,e}function Zn(t){Xi();var e=z!==null&&(z.f&Ht)!==0&&W!==null&&!W.m;if(e){var r=W;(r.e??(r.e=[])).push({fn:t,effect:z,reaction:X});}else {var n=vr(t);return n}}function is(t){return Xi(),fr(t)}function as(t){const e=Te(Le,t,true);return (r={})=>new Promise(n=>{r.outro?Kr(e,()=>{Ut(e),n(undefined);}):(Ut(e),n(undefined));})}function vr(t){return Te(Ri,t,false)}function Ce(t,e){var r=W,n={effect:null,ran:false};r.l.r1.push(n),n.effect=fr(()=>{t(),!n.ran&&(n.ran=true,A(r.l.r2,true),R(e));});}function dn(){var t=W;fr(()=>{if(_(t.l.r2)){for(var e of t.l.r1){var r=e.effect;r.f&ct&&Tt(r,se),Ae(r)&&hn(r),e.ran=false;}t.l.r2.v=false;}});}function fr(t){return Te(ur,t,true)}function j(t,e=[],r=ir){const n=e.map(r);return li(()=>t(...n.map(_)))}function li(t,e=0){return Te(ur|cn|e,t,true)}function ar(t,e=true){return Te(ur|Ht,t,true,e)}function Qi(t){var e=t.teardown;if(e!==null){const r=ui,n=X;mi(true),Vt(null);try{e.call(null);}finally{mi(r),Vt(n);}}}function Ki(t){var e=t.deriveds;if(e!==null){t.deriveds=null;for(var r=0;r<e.length;r+=1)si(e[r]);}}function Ji(t,e=false){var r=t.first;for(t.first=t.last=null;r!==null;){var n=r.next;Ut(r,e),r=n;}}function ss(t){for(var e=t.first;e!==null;){var r=e.next;e.f&Ht||Ut(e),e=r;}}function Ut(t,e=true){var r=false;if((e||t.f&Na)&&t.nodes_start!==null){for(var n=t.nodes_start,i=t.nodes_end;n!==null;){var a=n===i?null:fn(n);n.remove(),n=a;}r=true;}Ji(t,e&&!r),Ki(t),sr(t,0),Tt(t,Ne);var o=t.transitions;if(o!==null)for(const u of o)u.stop();Qi(t);var s=t.parent;s!==null&&s.first!==null&&ta(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null;}function ta(t){var e=t.parent,r=t.prev,n=t.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),e!==null&&(e.first===t&&(e.first=n),e.last===t&&(e.last=r));}function Kr(t,e){var r=[];ci(t,r,true),ea(r,()=>{Ut(t),e&&e();});}function ea(t,e){var r=t.length;if(r>0){var n=()=>--r||e();for(var i of t)i.out(n);}else e();}function ci(t,e,r){if(!(t.f&Pt)){if(t.f^=Pt,t.transitions!==null)for(const o of t.transitions)(o.is_global||r)&&e.push(o);for(var n=t.first;n!==null;){var i=n.next,a=(n.f&un)!==0||(n.f&Ht)!==0;ci(n,e,a?r:false),n=i;}}}function Jr(t){ra(t,true);}function ra(t,e){if(t.f&Pt){t.f^=Pt,t.f&ct||(t.f^=ct),Ae(t)&&(Tt(t,Xt),gn(t));for(var r=t.first;r!==null;){var n=r.next,i=(r.f&un)!==0||(r.f&Ht)!==0;ra(r,i?e:false),r=n;}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||e)&&a.in();}}let zn=false,Gn=[];function os(){zn=false;const t=Gn.slice();Gn=[],qn(t);}function _n(t){zn||(zn=true,queueMicrotask(os)),Gn.push(t);}function ls(){throw new Error("https://svelte.dev/e/invalid_default_snippet")}function na(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let Wr=false,tn=false,en=null,ge=false,ui=false;function gi(t){ge=t;}function mi(t){ui=t;}let jn=[],Je=0;let X=null,zt=false;function Vt(t){X=t;}let z=null;function St(t){z=t;}let Rt=null;function cs(t){Rt=t;}let ht=null,yt=0,Bt=null;function us(t){Bt=t;}let ia=1,rn=0,re=false,W=null;function aa(){return ++ia}function dr(){return !Se||W!==null&&W.l===null}function Ae(t){var l;var e=t.f;if(e&Xt)return  true;if(e&se){var r=t.deps,n=(e&ae)!==0;if(r!==null){var i,a,o=(e&Qr)!==0,s=n&&z!==null&&!re,u=r.length;if(o||s){for(i=0;i<u;i++)a=r[i],(o||!((l=a==null?undefined:a.reactions)!=null&&l.includes(t)))&&(a.reactions??(a.reactions=[])).push(t);o&&(t.f^=Qr);}for(i=0;i<u;i++)if(a=r[i],Ae(a)&&Ui(a),a.wv>t.wv)return  true}(!n||z!==null&&!re)&&Tt(t,ct);}return  false}function vs(t,e){for(var r=e;r!==null;){if(r.f&Xr)try{r.fn(t);return}catch{r.f^=Xr;}r=r.parent;}throw Wr=false,t}function fs(t){return (t.f&Ne)===0&&(t.parent===null||(t.parent.f&Xr)===0)}function pn(t,e,r,n){if(Wr){if(r===null&&(Wr=false),fs(e))throw t;return}r!==null&&(Wr=true);{vs(t,e);return}}function sa(t,e,r=0){var n=t.reactions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];a.f&bt?sa(a,e,r+1):e===a&&(r===0?Tt(a,Xt):a.f&ct&&Tt(a,se),gn(a));}}function oa(t){var d;var e=ht,r=yt,n=Bt,i=X,a=re,o=Rt,s=W,u=zt,l=t.f;ht=null,yt=0,Bt=null,X=l&(Ht|Le)?null:t,re=!ge&&(l&ae)!==0,Rt=null,W=t.ctx,zt=false,rn++;try{var f=(0,t.fn)(),c=t.deps;if(ht!==null){var v;if(sr(t,yt),c!==null&&yt>0)for(c.length=yt+ht.length,v=0;v<ht.length;v++)c[yt+v]=ht[v];else t.deps=c=ht;if(!re)for(v=yt;v<c.length;v++)((d=c[v]).reactions??(d.reactions=[])).push(t);}else c!==null&&yt<c.length&&(sr(t,yt),c.length=yt);if(dr()&&Bt!==null&&!(t.f&(bt|se|Xt)))for(v=0;v<Bt.length;v++)sa(Bt[v],t);return i!==null&&rn++,f}finally{ht=e,yt=r,Bt=n,X=i,re=a,Rt=o,W=s,zt=u;}}function ds(t,e){let r=e.reactions;if(r!==null){var n=xa.call(r,t);if(n!==-1){var i=r.length-1;i===0?r=e.reactions=null:(r[n]=r[i],r.pop());}}r===null&&e.f&bt&&(ht===null||!ht.includes(e))&&(Tt(e,se),e.f&(ae|Qr)||(e.f^=Qr),sr(e,0));}function sr(t,e){var r=t.deps;if(r!==null)for(var n=e;n<r.length;n++)ds(t,r[n]);}function hn(t){var e=t.f;if(!(e&Ne)){Tt(t,ct);var r=z,n=W;z=t;try{e&cn?ss(t):Ji(t),Ki(t),Qi(t);var i=oa(t);t.teardown=typeof i=="function"?i:null,t.wv=ia;var a=t.deps,o;}catch(s){pn(s,t,r,n||t.ctx);}finally{z=r;}}}function _s(){if(Je>1e3){Je=0;try{Oa();}catch(t){if(en!==null)pn(t,en,null);else throw t}}Je++;}function ps(t){var e=t.length;if(e!==0){_s();var r=ge;ge=true;try{for(var n=0;n<e;n++){var i=t[n];i.f&ct||(i.f^=ct);var a=[];la(i,a),hs(a);}}finally{ge=r;}}}function hs(t){var e=t.length;if(e!==0)for(var r=0;r<e;r++){var n=t[r];if(!(n.f&(Ne|Pt)))try{Ae(n)&&(hn(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?ta(n):n.fn=null));}catch(i){pn(i,n,null,n.ctx);}}}function gs(){if(tn=false,Je>1001)return;const t=jn;jn=[],ps(t),tn||(Je=0,en=null);}function gn(t){tn||(tn=true,queueMicrotask(gs)),en=t;for(var e=t;e.parent!==null;){e=e.parent;var r=e.f;if(r&(Le|Ht)){if(!(r&ct))return;e.f^=ct;}}jn.push(e);}function la(t,e){var r=t.first,n=[];t:for(;r!==null;){var i=r.f,a=(i&Ht)!==0,o=a&&(i&ct)!==0,s=r.next;if(!o&&!(i&Pt))if(i&ur){if(a)r.f^=ct;else try{Ae(r)&&hn(r);}catch(c){pn(c,r,null,r.ctx);}var u=r.first;if(u!==null){r=u;continue}}else i&Ri&&n.push(r);if(s===null){let c=r.parent;for(;c!==null;){if(t===c)break t;var l=c.next;if(l!==null){r=l;continue t}c=c.parent;}}r=s;}for(var f=0;f<n.length;f++)u=n[f],e.push(u),la(u,e);}function _(t){var f;var e=t.f,r=(e&bt)!==0;if(r&&e&Ne){var n=Yi(t);return si(t),n}if(X!==null&&!zt){Rt!==null&&Rt.includes(t)&&Va();var i=X.deps;t.rv<rn&&(t.rv=rn,ht===null&&i!==null&&i[yt]===t?yt++:ht===null?ht=[t]:ht.push(t));}else if(r&&t.deps===null)for(var a=t,o=a.parent,s=a;o!==null;)if(o.f&bt){var u=o;s=u,o=u.parent;}else {var l=o;(f=l.deriveds)!=null&&f.includes(s)||(l.deriveds??(l.deriveds=[])).push(s);break}return r&&(a=t,Ae(a)&&Ui(a)),t.v}function R(t){var e=zt;try{return zt=!0,t()}finally{zt=e;}}const ms=-7169;function Tt(t,e){t.f=t.f&ms|e;}function Qt(t,e=false,r){W={p:W,c:null,e:null,m:false,s:t,x:null,l:null},Se&&!e&&(W.l={s:null,u:null,r1:[],r2:wt(false)});}function Kt(t){const e=W;if(e!==null){t!==undefined&&(e.x=t);const o=e.e;if(o!==null){var r=z,n=X;e.e=null;try{for(var i=0;i<o.length;i++){var a=o[i];St(a.effect),Vt(a.reaction),vr(a.fn);}}finally{St(r),Vt(n);}}W=e.p,e.m=true;}return t||{}}function ee(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ie in t)Wn(t);else if(!Array.isArray(t))for(let e in t){const r=t[e];typeof r=="object"&&r&&ie in r&&Wn(r);}}}function Wn(t,e=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!e.has(t)){e.add(t),t instanceof Date&&t.getTime();for(let n in t)try{Wn(t[n],e);}catch{}const r=ei(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=Pi(r);for(let i in n){const a=n[i].get;if(a)try{a.call(t);}catch{}}}}}const ys=["touchstart","touchmove"];function ws(t){return ys.includes(t)}let yi=false;function bs(){yi||(yi=true,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{var e;if(!t.defaultPrevented)for(const r of t.target.elements)(e=r.__on_r)==null||e.call(r);});},{capture:true}));}function ca(t){var e=X,r=z;Vt(null),St(null);try{return t()}finally{Vt(e),St(r);}}function xs(t,e,r,n=r){t.addEventListener(e,()=>ca(r));const i=t.__on_r;i?t.__on_r=()=>{i(),n(true);}:t.__on_r=()=>n(true),bs();}const Cs=new Set,wi=new Set;function Es(t,e,r,n={}){function i(a){if(n.capture||Ye.call(e,a),!a.cancelBubble)return ca(()=>r==null?void 0:r.call(this,a))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?_n(()=>{e.addEventListener(t,i,n);}):e.addEventListener(t,i,n),i}function B(t,e,r,n,i){var a={capture:n,passive:i},o=Es(t,e,r,a);(e===document.body||e===window||e===document)&&oi(()=>{e.removeEventListener(t,o,a);});}function Ye(t){var m;var e=this,r=e.ownerDocument,n=t.type,i=((m=t.composedPath)==null?undefined:m.call(t))||[],a=i[0]||t.target,o=0,s=t.__root;if(s){var u=i.indexOf(s);if(u!==-1&&(e===document||e===window)){t.__root=e;return}var l=i.indexOf(e);if(l===-1)return;u<=l&&(o=u);}if(a=i[o]||t.target,a!==e){Di(t,"currentTarget",{configurable:true,get(){return a||r}});var f=X,c=z;Vt(null),St(null);try{for(var v,d=[];a!==null;){var x=a.assignedSlot||a.parentNode||a.host||null;try{var h=a["__"+n];if(h!==void 0&&!a.disabled)if(ln(h)){var[C,...w]=h;C.apply(a,[t,...w]);}else h.call(a,t);}catch(b){v?d.push(b):v=b;}if(t.cancelBubble||x===e||x===null)break;a=x;}if(v){for(let b of d)queueMicrotask(()=>{throw b});throw v}}finally{t.__root=e,delete t.currentTarget,Vt(f),St(c);}}}function ua(t){var e=document.createElement("template");return e.innerHTML=t,e.content}function nn(t,e){var r=z;r.nodes_start===null&&(r.nodes_start=t,r.nodes_end=e);}function $(t,e){var r=(e&Qa)!==0,n=(e&Ka)!==0,i,a=!t.startsWith("<!>");return ()=>{i===undefined&&(i=ua(a?t:"<!>"+t),r||(i=xe(i)));var o=n?document.importNode(i,true):i.cloneNode(true);if(r){var s=xe(o),u=o.lastChild;nn(s,u);}else nn(o,o);return o}}function vi(t,e,r="svg"){var n=!t.startsWith("<!>"),i=`<${r}>${n?t:"<!>"+t}</${r}>`,a;return ()=>{if(!a){var o=ua(i),s=xe(o);a=xe(s);}var u=a.cloneNode(true);return nn(u,u),u}}function me(){var t=document.createDocumentFragment(),e=document.createComment(""),r=ai();return t.append(e,r),nn(e,r),t}function N(t,e){t!==null&&t.before(e);}let Yn=true;function V(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=r,t.nodeValue=r==null?"":r+"");}function or(t,e){return ks(t,e)}const de=new Map;function ks(t,{target:e,anchor:r,props:n={},events:i,context:a,intro:o=true}){ts();var s=new Set,u=c=>{for(var v=0;v<c.length;v++){var d=c[v];if(!s.has(d)){s.add(d);var x=ws(d);e.addEventListener(d,Ye,{passive:x});var h=de.get(d);h===undefined?(document.addEventListener(d,Ye,{passive:x}),de.set(d,1)):de.set(d,h+1);}}};u(ti(Cs)),wi.add(u);var l=undefined,f=as(()=>{var c=r??e.appendChild(ai());return ar(()=>{if(a){Qt({});var v=W;v.c=a;}i&&(n.$$events=i),Yn=o,l=t(c,n)||{},Yn=true,a&&Kt();}),()=>{var x;for(var v of s){e.removeEventListener(v,Ye);var d=de.get(v);--d===0?(document.removeEventListener(v,Ye),de.delete(v)):de.set(v,d);}wi.delete(u),c!==r&&((x=c.parentNode)==null||x.removeChild(c));}});return Ms.set(l,f),l}let Ms=new WeakMap;function q(t,e,r=false){var n=t,i=null,a=null,o=pt,s=r?un:0,u=false;const l=(c,v=true)=>{u=true,f(v,c);},f=(c,v)=>{o!==(o=c)&&(o?(i?Jr(i):v&&(i=ar(()=>v(n))),a&&Kr(a,()=>{a=null;})):(a?Jr(a):v&&(a=ar(()=>v(n))),i&&Kr(i,()=>{i=null;})));};li(()=>{u=false,e(l),u||f(null,null);},s);}let Yr=null;function Un(t,e){return e}function Ls(t,e,r,n){for(var i=[],a=e.length,o=0;o<a;o++)ci(e[o].e,i,true);var s=a>0&&i.length===0&&r!==null;if(s){var u=r.parentNode;es(u),u.append(r),n.clear(),Gt(t,e[0].prev,e[a-1].next);}ea(i,()=>{for(var l=0;l<a;l++){var f=e[l];s||(n.delete(f.k),Gt(t,f.prev,f.next)),Ut(f.e,!s);}});}function tr(t,e,r,n,i,a=null){var o=t,s={flags:e,items:new Map,first:null},u=(e&Bi)!==0;if(u){var l=t;o=l.appendChild(ai());}var f=null,c=false,v=Ot(()=>{var d=r();return ln(d)?d:d==null?[]:ti(d)});li(()=>{var d=_(v),x=d.length;if(!(c&&x===0)){c=x===0;{var h=X;Ns(d,s,o,i,e,(h.f&Pt)!==0,n,r);}a!==null&&(x===0?f?Jr(f):f=ar(()=>a(o)):f!==null&&Kr(f,()=>{f=null;})),_(v);}});}function Ns(t,e,r,n,i,a,o,s){var H,tt,T,it;var u=(i&qa)!==0,l=(i&(ni|ii))!==0,f=t.length,c=e.items,v=e.first,d=v,x,h=null,C,w=[],m=[],b,M,k,E;if(u)for(E=0;E<f;E+=1)b=t[E],M=o(b,E),k=c.get(M),k!==undefined&&((H=k.a)==null||H.measure(),(C??(C=new Set)).add(k));for(E=0;E<f;E+=1){if(b=t[E],M=o(b,E),k=c.get(M),k===undefined){var O=d?d.e.nodes_start:r;h=Ts(O,e,h,h===null?e.first:h.next,b,M,E,n,i,s),c.set(M,h),w=[],m=[],d=h.next;continue}if(l&&Ss(k,b,E,i),k.e.f&Pt&&(Jr(k.e),u&&((tt=k.a)==null||tt.unfix(),(C??(C=new Set)).delete(k))),k!==d){if(x!==undefined&&x.has(k)){if(w.length<m.length){var S=m[0],D;h=S.prev;var G=w[0],rt=w[w.length-1];for(D=0;D<w.length;D+=1)bi(w[D],S,r);for(D=0;D<m.length;D+=1)x.delete(m[D]);Gt(e,G.prev,rt.next),Gt(e,h,G),Gt(e,rt,S),d=S,h=rt,E-=1,w=[],m=[];}else x.delete(k),bi(k,d,r),Gt(e,k.prev,k.next),Gt(e,k,h===null?e.first:h.next),Gt(e,h,k),h=k;continue}for(w=[],m=[];d!==null&&d.k!==M;)(a||!(d.e.f&Pt))&&(x??(x=new Set)).add(d),m.push(d),d=d.next;if(d===null)continue;k=d;}w.push(k),h=k,d=k.next;}if(d!==null||x!==undefined){for(var et=x===undefined?[]:ti(x);d!==null;)(a||!(d.e.f&Pt))&&et.push(d),d=d.next;var ut=et.length;if(ut>0){var Ft=i&Bi&&f===0?r:null;if(u){for(E=0;E<ut;E+=1)(T=et[E].a)==null||T.measure();for(E=0;E<ut;E+=1)(it=et[E].a)==null||it.fix();}Ls(e,et,Ft,c);}}u&&_n(()=>{var vt;if(C!==undefined)for(k of C)(vt=k.a)==null||vt.apply();}),z.first=e.first&&e.first.e,z.last=h&&h.e;}function Ss(t,e,r,n){n&ni&&Bn(t.v,e),n&ii?Bn(t.i,r):t.i=r;}function Ts(t,e,r,n,i,a,o,s,u,l){var f=Yr,c=(u&ni)!==0,v=(u&Ba)===0,d=c?v?vn(i):wt(i):i,x=u&ii?wt(o):o,h={i:x,v:d,k:a,a:null,e:null,prev:r,next:n};Yr=h;try{return h.e=ar(()=>s(t,d,x,l),zi),h.e.prev=r&&r.e,h.e.next=n&&n.e,r===null?e.first=h:(r.next=h,r.e.next=h.e),n!==null&&(n.prev=h,n.e.prev=h.e),h}finally{Yr=f;}}function bi(t,e,r){for(var n=t.next?t.next.e.nodes_start:r,i=e?e.e.nodes_start:r,a=t.e.nodes_start;a!==n;){var o=fn(a);i.before(a),a=o;}}function Gt(t,e,r){e===null?t.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e);}function xi(t,e,r,n,i){var s;var a=(s=e.$$slots)==null?undefined:s[r],o=false;a===true&&(a=e.children,o=true),a===undefined?i!==null&&i(t):a(t,o?()=>n:n);}function I(t,e,r,n){var i=t.__attributes??(t.__attributes={});i[e]!==(i[e]=r)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[Ta]=r),r==null?t.removeAttribute(e):typeof r!="string"&&As(t).includes(e)?t[e]=r:t.setAttribute(e,r));}var Ci=new Map;function As(t){var e=Ci.get(t.nodeName);if(e)return e;Ci.set(t.nodeName,e=[]);for(var r,n=t,i=Element.prototype;i!==n;){r=Pi(n);for(var a in r)r[a].set&&e.push(a);n=ei(n);}return e}function Ei(t,e,r){var n=t.__className,i=$s(e);(n!==i||zi)&&(e==null?t.removeAttribute("class"):t.className=i,t.__className=i);}function $s(t,e){return (t??"")+""}function Ue(t,e,r){if(r){if(t.classList.contains(e))return;t.classList.add(e);}else {if(!t.classList.contains(e))return;t.classList.remove(e);}}function he(t,e,r,n){var i=t.__styles??(t.__styles={});i[e]!==r&&(i[e]=r,r==null?t.style.removeProperty(e):t.style.setProperty(e,r,""));}const Is=()=>performance.now(),Zt={tick:t=>requestAnimationFrame(t),now:()=>Is(),tasks:new Set};function va(){const t=Zt.now();Zt.tasks.forEach(e=>{e.c(t)||(Zt.tasks.delete(e),e.f());}),Zt.tasks.size!==0&&Zt.tick(va);}function Os(t){let e;return Zt.tasks.size===0&&Zt.tick(va),{promise:new Promise(r=>{Zt.tasks.add(e={c:t,f:r});}),abort(){Zt.tasks.delete(e);}}}function jr(t,e){t.dispatchEvent(new CustomEvent(e));}function Ds(t){if(t==="float")return "cssFloat";if(t==="offset")return "cssOffset";if(t.startsWith("--"))return t;const e=t.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function ki(t){const e={},r=t.split(";");for(const n of r){const[i,a]=n.split(":");if(!i||a===undefined)break;const o=Ds(i.trim());e[o]=a.trim();}return e}const Ps=t=>t;function Rs(t,e,r){var n=Yr,i,a,o,s=null;n.a??(n.a={element:t,measure(){i=this.element.getBoundingClientRect();},apply(){if(o==null||o.abort(),a=this.element.getBoundingClientRect(),i.left!==a.left||i.right!==a.right||i.top!==a.top||i.bottom!==a.bottom){const u=e()(this.element,{from:i,to:a},r==null?undefined:r());o=an(this.element,u,undefined,1,()=>{o==null||o.abort(),o=undefined;});}},fix(){if(!t.getAnimations().length){var{position:u,width:l,height:f}=getComputedStyle(t);if(u!=="absolute"&&u!=="fixed"){var c=t.style;s={position:c.position,width:c.width,height:c.height,transform:c.transform},c.position="absolute",c.width=l,c.height=f;var v=t.getBoundingClientRect();if(i.left!==v.left||i.top!==v.top){var d=`translate(${i.left-v.left}px, ${i.top-v.top}px)`;c.transform=c.transform?`${c.transform} ${d}`:d;}}}},unfix(){if(s){var u=t.style;u.position=s.position,u.width=s.width,u.height=s.height,u.transform=s.transform;}}}),n.a.element=t;}function Ee(t,e,r,n){var i=(t&Ya)!==0,a=(t&Ua)!==0,o=i&&a,s=(t&Xa)!==0,u=o?"both":i?"in":"out",l,f=e.inert,c=e.style.overflow,v,d;function x(){var b=X,M=z;Vt(null),St(null);try{return l??(l=r()(e,(n==null?void 0:n())??{},{direction:u}))}finally{Vt(b),St(M);}}var h={is_global:s,in(){var b;if(e.inert=f,!i){d==null||d.abort(),(b=d==null?undefined:d.reset)==null||b.call(d);return}a||v==null||v.abort(),jr(e,"introstart"),v=an(e,x(),d,1,()=>{jr(e,"introend"),v==null||v.abort(),v=l=undefined,e.style.overflow=c;});},out(b){if(!a){b==null||b(),l=undefined;return}e.inert=true,jr(e,"outrostart"),d=an(e,x(),v,0,()=>{jr(e,"outroend"),b==null||b();});},stop:()=>{v==null||v.abort(),d==null||d.abort();}},C=z;if((C.transitions??(C.transitions=[])).push(h),i&&Yn){var w=s;if(!w){for(var m=C.parent;m&&m.f&un;)for(;(m=m.parent)&&!(m.f&cn););w=!m||(m.f&Vi)!==0;}w&&vr(()=>{R(()=>h.in());});}}function an(t,e,r,n,i){var a=n===1;if(ka(e)){var o,s=false;return _n(()=>{if(!s){var C=e({direction:a?"in":"out"});o=an(t,C,r,n,i);}}),{abort:()=>{s=true,o==null||o.abort();},deactivate:()=>o.deactivate(),reset:()=>o.reset(),t:()=>o.t()}}if(r==null||r.deactivate(),!(e!=null&&e.duration))return i(),{abort:$t,deactivate:$t,reset:$t,t:()=>n};const{delay:u=0,css:l,tick:f,easing:c=Ps}=e;var v=[];if(a&&r===undefined&&(f&&f(0,1),l)){var d=ki(l(0,1));v.push(d,d);}var x=()=>1-n,h=t.animate(v,{duration:u});return h.onfinish=()=>{var C=(r==null?undefined:r.t())??1-n;r==null||r.abort();var w=n-C,m=e.duration*Math.abs(w),b=[];if(m>0){var M=false;if(l)for(var k=Math.ceil(m/16.666666666666668),E=0;E<=k;E+=1){var O=C+w*c(E/k),S=ki(l(O,1-O));b.push(S),M||(M=S.overflow==="hidden");}M&&(t.style.overflow="hidden"),x=()=>{var D=h.currentTime;return C+w*c(D/m)},f&&Os(()=>{if(h.playState!=="running")return  false;var D=x();return f(D,1-D),true});}h=t.animate(b,{duration:m,fill:"forwards"}),h.onfinish=()=>{x=()=>n,f==null||f(n,1-n),i();};},{abort:()=>{h&&(h.cancel(),h.effect=null,h.onfinish=$t);},deactivate:()=>{i=$t;},reset:()=>{n===0&&(f==null||f(1,0));},t:()=>x()}}function Rn(t,e,r=e){var n=dr();xs(t,"input",i=>{var a=i?t.defaultValue:t.value;if(a=Vn(t)?Hn(a):a,r(a),n&&a!==(a=e())){var o=t.selectionStart,s=t.selectionEnd;t.value=a??"",s!==null&&(t.selectionStart=o,t.selectionEnd=Math.min(s,t.value.length));}}),R(e)==null&&t.value&&r(Vn(t)?Hn(t.value):t.value),fr(()=>{var i=e();Vn(t)&&i===Hn(t.value)||t.type==="date"&&!i&&!t.value||i!==t.value&&(t.value=i??"");});}function Vn(t){var e=t.type;return e==="number"||e==="range"}function Hn(t){return t===""?null:+t}function Fn(t,e,r){var n=ne(t,e);n&&n.set&&(t[e]=r,oi(()=>{t[e]=null;}));}var Wt,be,cr,sn,fa;const on=class on{constructor(e){je(this,sn);je(this,Wt,new WeakMap);je(this,be);je(this,cr);Pn(this,cr,e);}observe(e,r){var n=qt(this,Wt).get(e)||new Set;return n.add(r),qt(this,Wt).set(e,n),pi(this,sn,fa).call(this).observe(e,qt(this,cr)),()=>{var i=qt(this,Wt).get(e);i.delete(r),i.size===0&&(qt(this,Wt).delete(e),qt(this,be).unobserve(e));}}};Wt=new WeakMap,be=new WeakMap,cr=new WeakMap,sn=new WeakSet,fa=function(){return qt(this,be)??Pn(this,be,new ResizeObserver(e=>{for(var r of e){on.entries.set(r.target,r);for(var n of qt(this,Wt).get(r.target)||[])n(r);}}))},_i(on,"entries",new WeakMap);let Xn=on;var Vs=new Xn({box:"border-box"});function Mi(t,e,r){var n=Vs.observe(t,()=>r(t[e]));vr(()=>(R(()=>r(t[e])),n));}function Li(t,e){return t===e||(t==null?undefined:t[ie])===e}function jt(t={},e,r,n){return vr(()=>{var i,a;return fr(()=>{i=a,a=[],R(()=>{t!==r(...a)&&(e(t,...a),i&&Li(r(...i),t)&&e(null,...i));});}),()=>{_n(()=>{a&&Li(r(...a),t)&&e(null,...a);});}}),t}function da(t){return function(...e){var r=e[0];r.target===this&&(t==null||t.apply(this,e));}}function er(t){return function(...e){var r=e[0];return r.stopPropagation(),t==null?undefined:t.apply(this,e)}}function $e(t=false){const e=W,r=e.l.u;if(!r)return;let n=()=>ee(e.s);if(t){let i=0,a={};const o=ir(()=>{let s=false;const u=e.s;for(const l in u)u[l]!==a[l]&&(a[l]=u[l],s=true);return s&&i++,i});n=()=>_(o);}r.b.length&&is(()=>{Ni(e,n),qn(r.b);}),Zn(()=>{const i=R(()=>r.m.map(Ma));return ()=>{for(const a of i)typeof a=="function"&&a();}}),r.a.length&&Zn(()=>{Ni(e,n),qn(r.a);});}function Ni(t,e){if(t.l.s)for(const r of t.l.s)_(r);e();}function Hs(t){var e=wt(0);return function(){return arguments.length===1?(A(e,_(e)+1),arguments[0]):(_(e),t())}}function Fs(t,e){var a;var r=(a=t.$$events)==null?undefined:a[e.type],n=ln(r)?r.slice():r==null?[]:[r];for(var i of n)i.call(this,e);}function _a(t,e,r){if(t==null)return e(undefined),$t;const n=R(()=>t.subscribe(e,r));return n.unsubscribe?()=>n.unsubscribe():n}const _e=[];function mn(t,e=$t){let r=null;const n=new Set;function i(s){if(qi(t,s)&&(t=s,r)){const u=!_e.length;for(const l of n)l[1](),_e.push(l,t);if(u){for(let l=0;l<_e.length;l+=2)_e[l][0](_e[l+1]);_e.length=0;}}}function a(s){i(s(t));}function o(s,u=$t){const l=[s,u];return n.add(l),n.size===1&&(r=e(i,a)||$t),s(t),()=>{n.delete(l),n.size===0&&r&&(r(),r=null);}}return {set:i,update:a,subscribe:o}}function pa(t){let e;return _a(t,r=>e=r)(),e}let Xe=false,Qn=Symbol();function lt(t,e,r){const n=r[e]??(r[e]={store:null,source:vn(undefined),unsubscribe:$t});if(n.store!==t&&!(Qn in r))if(n.unsubscribe(),n.store=t??null,t==null)n.source.v=undefined,n.unsubscribe=$t;else {var i=true;n.unsubscribe=_a(t,a=>{i?n.source.v=a:A(n.source,a);}),i=false;}return t&&Qn in r?pa(t):_(n.source)}function dt(t,e){return t.set(e),e}function Ie(){const t={};function e(){oi(()=>{for(var r in t)t[r].unsubscribe();Di(t,Qn,{enumerable:false,value:true});});}return [t,e]}function mt(t,e,r){return t.set(r),e}function Si(){Xe=true;}function qs(t){var e=Xe;try{return Xe=!1,[t(),Xe]}finally{Xe=e;}}function Ti(t){for(var e=z,r=z;e!==null&&!(e.f&(Ht|Le));)e=e.parent;try{return St(e),t()}finally{St(r);}}function nt(t,e,r,n){var O;var i=(r&Za)!==0,a=!Se||(r&za)!==0,o=(r&ja)!==0,s=(r&Wa)!==0,u=false,l;o?[l,u]=qs(()=>t[e]):l=t[e];var f=ie in t||Sa in t,c=o&&(((O=ne(t,e))==null?undefined:O.set)??(f&&e in t&&(S=>t[e]=S)))||undefined,v=n,d=true,x=false,h=()=>(x=true,d&&(d=false,s?v=R(n):v=n),v);l===undefined&&n!==undefined&&(c&&a&&Da(),l=h(),c&&c(l));var C;if(a)C=()=>{var S=t[e];return S===undefined?h():(d=true,x=false,S)};else {var w=Ti(()=>(i?ir:Ot)(()=>t[e]));w.f|=La,C=()=>{var S=_(w);return S!==undefined&&(v=undefined),S===undefined?v:S};}if(!(r&Ga))return C;if(c){var m=t.$$legacy;return function(S,D){return arguments.length>0?((!a||!D||m||u)&&c(D?C():S),S):C()}}var b=false,M=false,k=vn(l),E=Ti(()=>ir(()=>{var S=C(),D=_(k);return b?(b=!1,M=!0,D):(M=!1,k.v=S)}));return i||(E.equals=ri),function(S,D){if(arguments.length>0){const G=D?_(E):a&&o?pe(S):S;return E.equals(G)||(b=true,A(k,G),x&&v!==undefined&&(v=G),R(()=>_(E))),S}return _(E)}}function yn(t){W===null&&na(),Se&&W.l!==null?Zs(W).m.push(t):Zn(()=>{const e=R(t);if(typeof e=="function")return e});}function Bs(t){W===null&&na(),yn(()=>()=>R(t));}function Zs(t){var e=t.l;return e.u??(e.u={a:[],b:[],m:[]})}const zs="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(zs);Fa();const Gs=t=>t;function ke(t,{delay:e=0,duration:r=400,easing:n=Gs}={}){const i=+getComputedStyle(t).opacity;return {delay:e,duration:r,easing:n,css:a=>`opacity: ${a*i}`}}const ha="Kesa:Fall",Ai=()=>{try{return JSON.parse(localStorage.getItem(ha))??{}}catch{return {}}},oe=(t,e)=>{const r=Ai(),n=t in r?r[t]:e,{subscribe:i,set:a,update:o}=mn(n);return i(s=>{const u=Ai();localStorage.setItem(ha,JSON.stringify({...u,[t]:s}));}),{subscribe:i,set:s=>{typeof s=="function"?o(s):a(s);},update:o}},ye=mn(0),ga=mn(""),rr=oe("_isFallView",true),Qe=mn(0),$i=oe("_panelPos",{x:0,y:0}),Kn=oe("_show_hover_pic",1),Ke=oe("_card_layout",{min:240,max:400,gap:12}),Lt=oe("_card_detail",{all:false,category:true,title:true,topping:true,free:true,size:true,sub_title:false,tags:false,download_collect:false,upload_time:false,statistics:false}),js=oe("_show_nexus_pic",1),Ur=oe("_block_gay",1);function Ws(t={path:"/search",method:"POST"}){const e=XMLHttpRequest.prototype.open,r=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.open=function(n,i){return this._requestMetadata={method:n.toUpperCase(),url:i,isTarget:i.includes(t.path)&&n.toUpperCase()===t.method},e.apply(this,arguments)},XMLHttpRequest.prototype.send=function(n){var i;if((i=this._requestMetadata)!=null&&i.isTarget){const a=this.onreadystatechange,o=this.onload;this.addEventListener("readystatechange",()=>{this.readyState===4&&this._captureResponseData(),a==null||a.call(this);}),this.onload=l=>{this._captureResponseData(),o==null||o.call(this,l);};const s={url:this._requestMetadata.url,body:n instanceof Document?n.documentElement.outerHTML:n},u=new CustomEvent(`req>${t.method}->${t.path}`,{detail:s});window.dispatchEvent(u);}return r.apply(this,arguments)},XMLHttpRequest.prototype._captureResponseData=function(){if(!this._hasCaptured&&this._requestMetadata.isTarget){try{const n={status:this.status,headers:this.getAllResponseHeaders(),data:this._parseResponse()},i=new CustomEvent(`res>${t.method}->${t.path}`,{detail:n});window.dispatchEvent(i);}catch(n){console.error("<PT-Fall> Capture failed:",n);}this._hasCaptured=true;}},XMLHttpRequest.prototype._parseResponse=function(){var n;try{switch(this.responseType){case "json":return this.response;case "document":return (n=this.responseXML)==null?void 0:n.documentElement.outerHTML;case "arraybuffer":return new Uint8Array(this.response);case "blob":return URL.createObjectURL(this.response);default:return this.responseText}}catch{return this.responseText}};}function Ys(t){const e=t-1;return e*e*e+1}function Us(t,{from:e,to:r},n={}){var{delay:i=0,duration:a=E=>Math.sqrt(E)*120,easing:o=Ys}=n,s=getComputedStyle(t),u=s.transform==="none"?"":s.transform,[l,f]=s.transformOrigin.split(" ").map(parseFloat);l/=t.clientWidth,f/=t.clientHeight;var c=Xs(t),v=t.clientWidth/r.width/c,d=t.clientHeight/r.height/c,x=e.left+e.width*l,h=e.top+e.height*f,C=r.left+r.width*l,w=r.top+r.height*f,m=(x-C)*v,b=(h-w)*d,M=e.width/r.width,k=e.height/r.height;return {delay:i,duration:typeof a=="function"?a(Math.sqrt(m*m+b*b)):a,easing:o,css:(E,O)=>{var S=O*m,D=O*b,G=E+O*M,rt=E+O*k;return `transform: ${u} translate(${S}px, ${D}px) scale(${G}, ${rt});`}}}function Xs(t){if("currentCSSZoom"in t)return t.currentCSSZoom;for(var e=t,r=1;e!==null;)r*=+getComputedStyle(e).zoom,e=e.parentElement;return r}var Qs=$('<span class="svelte-b2jtby"> </span>'),Ks=$('<div class="svelte-b2jtby"><!></div>'),Js=$('<span class="svelte-b2jtby"> </span>'),to=$("<div><!></div>"),eo=$("<div></div>");function ro(t,e){Qt(e,false);const r=J(),n=J();let i=nt(e,"animate",8,true),a=nt(e,"columnClass",24,()=>""),o=nt(e,"duration",8,200),s=nt(e,"gap",8,20),u=nt(e,"getId",8,m=>typeof m=="number"||typeof m=="string"?m:m[l()]),l=nt(e,"idKey",24,()=>"id"),f=nt(e,"items",8),c=nt(e,"masonryHeight",12,0),v=nt(e,"masonryWidth",12,0),d=nt(e,"maxColWidth",8,500),x=nt(e,"minColWidth",8,330),h=nt(e,"style",24,()=>""),C=nt(e,"class",24,()=>"");Ce(()=>(ee(f()),ee(v()),ee(x()),ee(s())),()=>{A(r,Math.min(f().length,Math.floor(v()/(x()+s()))||1));}),Ce(()=>(ee(f()),_(r)),()=>{A(n,f().reduce((m,b,M)=>(m[M%m.length].push([b,M]),m),Array(_(r)).fill(null).map(()=>[])));}),dn(),$e();var w=eo();tr(w,5,()=>_(n),Un,(m,b)=>{var M=to(),k=p(M);{var E=S=>{var D=me(),G=Dt(D);tr(G,9,()=>_(b),([rt,et])=>u()(rt),(rt,et)=>{let ut=()=>_(et)[0],Ft=()=>_(et)[1];var H=Ks(),tt=p(H);xi(tt,e,"default",{get idx(){return Ft()},get item(){return ut()}},T=>{var it=Qs(),vt=p(it);j(()=>V(vt,ut())),N(T,it);}),Ee(1,H,()=>ke,()=>({delay:100,duration:o()})),Ee(2,H,()=>ke,()=>({delay:0,duration:o()})),Rs(H,()=>Us,()=>({duration:o()})),N(rt,H);}),N(S,D);},O=S=>{var D=me(),G=Dt(D);tr(G,1,()=>_(b),([rt,et])=>u()(rt),(rt,et)=>{let ut=()=>_(et)[0],Ft=()=>_(et)[1];var H=me(),tt=Dt(H);xi(tt,e,"default",{get idx(){return Ft()},get item(){return ut()}},T=>{var it=Js(),vt=p(it);j(()=>V(vt,ut())),N(T,it);}),N(rt,H);}),N(S,D);};q(k,S=>{i()?S(E):S(O,false);});}j(()=>{Ei(M,`col ${a()??""} svelte-b2jtby`),I(M,"style",`gap: ${s()??""}px; max-width: ${d()??""}px;`);}),N(m,M);}),j(()=>{Ei(w,`masonry ${C()??""} svelte-b2jtby`),I(w,"style",`gap: ${s()??""}px; ${h()??""}`);}),Mi(w,"clientWidth",v),Mi(w,"clientHeight",c),N(t,w),Kt();}var Nt=function(){return Nt=Object.assign||function(e){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);}return e},Nt.apply(this,arguments)},no=function(){function t(e){this.options=e,this.listeners={};}return t.prototype.on=function(e,r){var n=this.listeners[e]||[];this.listeners[e]=n.concat([r]);},t.prototype.triggerEvent=function(e,r){var n=this,i=this.listeners[e]||[];i.forEach(function(a){return a({target:n,event:r})});},t}(),Me;(function(t){t[t.Add=0]="Add",t[t.Remove=1]="Remove";})(Me||(Me={}));var io=function(){function t(){this.notifications=[];}return t.prototype.push=function(e){this.notifications.push(e),this.updateFn(e,Me.Add,this.notifications);},t.prototype.splice=function(e,r){var n=this.notifications.splice(e,r)[0];return this.updateFn(n,Me.Remove,this.notifications),n},t.prototype.indexOf=function(e){return this.notifications.indexOf(e)},t.prototype.onUpdate=function(e){this.updateFn=e;},t}(),Yt;(function(t){t.Dismiss="dismiss",t.Click="click";})(Yt||(Yt={}));var Ii={types:[{type:"success",className:"notyf__toast--success",backgroundColor:"#3dc763",icon:{className:"notyf__icon--success",tagName:"i"}},{type:"error",className:"notyf__toast--error",backgroundColor:"#ed3d3d",icon:{className:"notyf__icon--error",tagName:"i"}}],duration:2e3,ripple:true,position:{x:"right",y:"bottom"},dismissible:false},ao=function(){function t(){this.notifications=[],this.events={},this.X_POSITION_FLEX_MAP={left:"flex-start",center:"center",right:"flex-end"},this.Y_POSITION_FLEX_MAP={top:"flex-start",center:"center",bottom:"flex-end"};var e=document.createDocumentFragment(),r=this._createHTMLElement({tagName:"div",className:"notyf"});e.appendChild(r),document.body.appendChild(e),this.container=r,this.animationEndEventName=this._getAnimationEndEventName(),this._createA11yContainer();}return t.prototype.on=function(e,r){var n;this.events=Nt(Nt({},this.events),(n={},n[e]=r,n));},t.prototype.update=function(e,r){r===Me.Add?this.addNotification(e):r===Me.Remove&&this.removeNotification(e);},t.prototype.removeNotification=function(e){var r=this,n=this._popRenderedNotification(e),i;if(n){i=n.node,i.classList.add("notyf__toast--disappear");var a;i.addEventListener(this.animationEndEventName,a=function(o){o.target===i&&(i.removeEventListener(r.animationEndEventName,a),r.container.removeChild(i));});}},t.prototype.addNotification=function(e){var r=this._renderNotification(e);this.notifications.push({notification:e,node:r}),this._announce(e.options.message||"Notification");},t.prototype._renderNotification=function(e){var r,n=this._buildNotificationCard(e),i=e.options.className;return i&&(r=n.classList).add.apply(r,i.split(" ")),this.container.appendChild(n),n},t.prototype._popRenderedNotification=function(e){for(var r=-1,n=0;n<this.notifications.length&&r<0;n++)this.notifications[n].notification===e&&(r=n);if(r!==-1)return this.notifications.splice(r,1)[0]},t.prototype.getXPosition=function(e){var r;return ((r=e==null?undefined:e.position)===null||r===undefined?undefined:r.x)||"right"},t.prototype.getYPosition=function(e){var r;return ((r=e==null?undefined:e.position)===null||r===undefined?undefined:r.y)||"bottom"},t.prototype.adjustContainerAlignment=function(e){var r=this.X_POSITION_FLEX_MAP[this.getXPosition(e)],n=this.Y_POSITION_FLEX_MAP[this.getYPosition(e)],i=this.container.style;i.setProperty("justify-content",n),i.setProperty("align-items",r);},t.prototype._buildNotificationCard=function(e){var r=this,n=e.options,i=n.icon;this.adjustContainerAlignment(n);var a=this._createHTMLElement({tagName:"div",className:"notyf__toast"}),o=this._createHTMLElement({tagName:"div",className:"notyf__ripple"}),s=this._createHTMLElement({tagName:"div",className:"notyf__wrapper"}),u=this._createHTMLElement({tagName:"div",className:"notyf__message"});u.innerHTML=n.message||"";var l=n.background||n.backgroundColor;if(i){var f=this._createHTMLElement({tagName:"div",className:"notyf__icon"});if((typeof i=="string"||i instanceof String)&&(f.innerHTML=new String(i).valueOf()),typeof i=="object"){var c=i.tagName,v=c===undefined?"i":c,d=i.className,x=i.text,h=i.color,C=h===undefined?l:h,w=this._createHTMLElement({tagName:v,className:d,text:x});C&&(w.style.color=C),f.appendChild(w);}s.appendChild(f);}if(s.appendChild(u),a.appendChild(s),l&&(n.ripple?(o.style.background=l,a.appendChild(o)):a.style.background=l),n.dismissible){var m=this._createHTMLElement({tagName:"div",className:"notyf__dismiss"}),b=this._createHTMLElement({tagName:"button",className:"notyf__dismiss-btn"});m.appendChild(b),s.appendChild(m),a.classList.add("notyf__toast--dismissible"),b.addEventListener("click",function(k){var E,O;(O=(E=r.events)[Yt.Dismiss])===null||O===undefined||O.call(E,{target:e,event:k}),k.stopPropagation();});}a.addEventListener("click",function(k){var E,O;return (O=(E=r.events)[Yt.Click])===null||O===undefined?undefined:O.call(E,{target:e,event:k})});var M=this.getYPosition(n)==="top"?"upper":"lower";return a.classList.add("notyf__toast--"+M),a},t.prototype._createHTMLElement=function(e){var r=e.tagName,n=e.className,i=e.text,a=document.createElement(r);return n&&(a.className=n),a.textContent=i||null,a},t.prototype._createA11yContainer=function(){var e=this._createHTMLElement({tagName:"div",className:"notyf-announcer"});e.setAttribute("aria-atomic","true"),e.setAttribute("aria-live","polite"),e.style.border="0",e.style.clip="rect(0 0 0 0)",e.style.height="1px",e.style.margin="-1px",e.style.overflow="hidden",e.style.padding="0",e.style.position="absolute",e.style.width="1px",e.style.outline="0",document.body.appendChild(e),this.a11yContainer=e;},t.prototype._announce=function(e){var r=this;this.a11yContainer.textContent="",setTimeout(function(){r.a11yContainer.textContent=e;},100);},t.prototype._getAnimationEndEventName=function(){var e=document.createElement("_fake"),r={MozTransition:"animationend",OTransition:"oAnimationEnd",WebkitTransition:"webkitAnimationEnd",transition:"animationend"},n;for(n in r)if(e.style[n]!==undefined)return r[n];return "animationend"},t}(),ma=function(){function t(e){var r=this;this.dismiss=this._removeNotification,this.notifications=new io,this.view=new ao;var n=this.registerTypes(e);this.options=Nt(Nt({},Ii),e),this.options.types=n,this.notifications.onUpdate(function(i,a){return r.view.update(i,a)}),this.view.on(Yt.Dismiss,function(i){var a=i.target,o=i.event;r._removeNotification(a),a.triggerEvent(Yt.Dismiss,o);}),this.view.on(Yt.Click,function(i){var a=i.target,o=i.event;return a.triggerEvent(Yt.Click,o)});}return t.prototype.error=function(e){var r=this.normalizeOptions("error",e);return this.open(r)},t.prototype.success=function(e){var r=this.normalizeOptions("success",e);return this.open(r)},t.prototype.open=function(e){var r=this.options.types.find(function(a){var o=a.type;return o===e.type})||{},n=Nt(Nt({},r),e);this.assignProps(["ripple","position","dismissible"],n);var i=new no(n);return this._pushNotification(i),i},t.prototype.dismissAll=function(){for(;this.notifications.splice(0,1););},t.prototype.assignProps=function(e,r){var n=this;e.forEach(function(i){r[i]=r[i]==null?n.options[i]:r[i];});},t.prototype._pushNotification=function(e){var r=this;this.notifications.push(e);var n=e.options.duration!==undefined?e.options.duration:this.options.duration;n&&setTimeout(function(){return r._removeNotification(e)},n);},t.prototype._removeNotification=function(e){var r=this.notifications.indexOf(e);r!==-1&&this.notifications.splice(r,1);},t.prototype.normalizeOptions=function(e,r){var n={type:e};return typeof r=="string"?n.message=r:typeof r=="object"&&(n=Nt(Nt({},n),r)),n},t.prototype.registerTypes=function(e){var r=(e&&e.types||[]).slice(),n=Ii.types.map(function(i){var a=-1;r.forEach(function(s,u){s.type===i.type&&(a=u);});var o=a!==-1?r.splice(a,1)[0]:{};return Nt(Nt({},i),o)});return n.concat(r)},t}();new ma({duration:5e3,dismissible:true});const we=new ma({duration:3e3,dismissible:true,position:{x:"left",y:"top"},types:[{type:"warning",background:"orange",icon:{className:"material-icons",tagName:"i",text:"warning"}}]}),so="data:image/svg+xml,%3csvg%20stroke='currentColor'%20fill='currentColor'%20stroke-width='0'%20viewBox='0%200%2024%2024'%20height='25'%20width='25'%20xmlns='http://www.w3.org/2000/svg'%20style='%20vertical-align:%20middle;%20--darkreader-inline-fill:%20currentColor;%20--darkreader-inline-stroke:%20currentColor;'%20%3e%3cpath%20d='M12%205c-3.859%200-7%203.141-7%207s3.141%207%207%207%207-3.141%207-7-3.141-7-7-7zm0%2012c-2.757%200-5-2.243-5-5s2.243-5%205-5%205%202.243%205%205-2.243%205-5%205z'%3e%3c/path%3e%3cpath%20d='M12%209c-1.627%200-3%201.373-3%203s1.373%203%203%203%203-1.373%203-3-1.373-3-3-3z'%3e%3c/path%3e%3c/svg%3e",oo="data:image/svg+xml,%3csvg%20viewBox='64%2064%20896%20896'%20focusable='false'%20data-icon='arrow-up'%20width='1em'%20height='1em'%20fill='green'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M868%20545.5L536.1%20163a31.96%2031.96%200%2000-48.3%200L156%20545.5a7.97%207.97%200%20006%2013.2h81c4.6%200%209-2%2012.1-5.5L474%20300.9V864c0%204.4%203.6%208%208%208h60c4.4%200%208-3.6%208-8V300.9l218.9%20252.3c3%203.5%207.4%205.5%2012.1%205.5h81c6.8%200%2010.5-8%206-13.2z'%3e%3c/path%3e%3c/svg%3e",lo="data:image/svg+xml,%3csvg%20viewBox='64%2064%20896%20896'%20focusable='false'%20data-icon='arrow-down'%20width='1em'%20height='1em'%20fill='red'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M862%20465.3h-81c-4.6%200-9%202-12.1%205.5L550%20723.1V160c0-4.4-3.6-8-8-8h-60c-4.4%200-8%203.6-8%208v563.1L255.1%20470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8%200-10.5%208.1-6%2013.2L487.9%20861a31.96%2031.96%200%200048.3%200L868%20478.5c4.5-5.2.8-13.2-6-13.2z'%3e%3c/path%3e%3c/svg%3e",co="data:image/svg+xml,%3csvg%20viewBox='64%2064%20896%20896'%20focusable='false'%20data-icon='download'%20width='1em'%20height='1em'%20fill='currentColor'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M505.7%20661a8%208%200%200012.6%200l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4%200-8%203.6-8%208v338.3H400c-6.7%200-10.4%207.7-6.3%2012.9l112%20141.8zM878%20626h-60c-4.4%200-8%203.6-8%208v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4%200-8%203.6-8%208v198c0%2017.7%2014.3%2032%2032%2032h684c17.7%200%2032-14.3%2032-32V634c0-4.4-3.6-8-8-8z'%3e%3c/path%3e%3c/svg%3e",uo="data:image/svg+xml,%3csvg%20viewBox='64%2064%20896%20896'%20focusable='false'%20data-icon='star'%20width='1em'%20height='1em'%20fill='currentColor'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M908.1%20353.1l-253.9-36.9L540.7%2086.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9%2014.5L369.8%20316.2l-253.9%2036.9c-7%201-13.4%204.3-18.3%209.3a32.05%2032.05%200%2000.6%2045.3l183.7%20179.1-43.4%20252.9a31.95%2031.95%200%200046.4%2033.7L512%20754l227.1%20119.4c6.2%203.3%2013.4%204.4%2020.3%203.2%2017.4-3%2029.1-19.5%2026.1-36.9l-43.4-252.9%20183.7-179.1c5-4.9%208.3-11.3%209.3-18.3%202.7-17.5-9.5-33.7-27-36.3z'%3e%3c/path%3e%3c/svg%3e",vo="data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cstyle%3e%20.cls-1{fill:%232eb1b7;}%20.cls-2{fill:%2356b54e;}%20.cls-3{fill:%235dc6d1;}%20.cls-4{fill:%2360cc5a;}%20.cls-5{fill:%23ffce69;}%20.cls-6{fill:%236c2e7c;}%20%3c/style%3e%3c/defs%3e%3cg%20id='Icons'%3e%3crect%20class='cls-1'%20height='22'%20rx='4'%20width='22'%20x='1'%20y='1'/%3e%3cpath%20class='cls-2'%20d='M23,18v1a4,4,0,0,1-4,4H5a4,4,0,0,1-3.9-3.1l7.19-7.19a1.008,1.008,0,0,1,1.42,0l1.8,1.8a1,1,0,0,0,1.46-.05l2.33-2.65a1,1,0,0,1,1.46-.05Z'/%3e%3cpath%20class='cls-3'%20d='M23,5v9a4.025,4.025,0,0,1-1.17,2.83l-5.07-5.07a1,1,0,0,0-1.46.05l-2.33,2.65a1,1,0,0,1-1.46.05l-1.8-1.8a1.008,1.008,0,0,0-1.42,0L3.36,17.64A3.988,3.988,0,0,1,1,14V5A4,4,0,0,1,5,1H19A4,4,0,0,1,23,5Z'/%3e%3cpath%20class='cls-4'%20d='M21.83,16.83A4.025,4.025,0,0,1,19,18H5a3.931,3.931,0,0,1-1.64-.36l4.93-4.93a1.008,1.008,0,0,1,1.42,0l1.8,1.8a1,1,0,0,0,1.46-.05l2.33-2.65a1,1,0,0,1,1.46-.05Z'/%3e%3ccircle%20class='cls-5'%20cx='7'%20cy='7'%20r='2'/%3e%3c/g%3e%3cg%20data-name='Layer%204'%20id='Layer_4'%3e%3cpath%20class='cls-6'%20d='M19,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,19,0Zm3,19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3Z'/%3e%3cpath%20class='cls-6'%20d='M7,10A3,3,0,1,0,4,7,3,3,0,0,0,7,10ZM7,6A1,1,0,1,1,6,7,1,1,0,0,1,7,6Z'/%3e%3cpath%20class='cls-6'%20d='M16.707,10.293a.956.956,0,0,0-.74-.293,1.006,1.006,0,0,0-.72.341L12.217,13.8l-2.51-2.511a1,1,0,0,0-1.414,0l-4,4a1,1,0,1,0,1.414,1.414L9,13.414l1.9,1.9L8.247,18.341a1,1,0,0,0,1.506,1.318l3.218-3.678.006,0,.007-.011,3.065-3.5,2.244,2.244a1,1,0,0,0,1.414-1.414Z'/%3e%3c/g%3e%3c/svg%3e",lr={architecture:"Mteam",TL_Selector:"div.app-content__inner",LOADING_PIC:"/static/media/logo.80b63235eaf702e44a8d.png",HOST:"https://test2.m-team.cc",API:{search:{url:"/search",fullUrl:"/api/torrent/search",method:"POST"},genDlToken:{url:"/genDlToken",fullUrl:"/api/torrent/genDlToken",method:"POST",type:"formData",contentForm:{name1:"id"}},collection:{url:"/collection",fullUrl:"/api/torrent/collection",method:"POST",type:"formData",contentForm:{name1:"id",name2:"make"}}},ICON:{SIZE:so,SEEDERS:oo,LEECHERS:lo,DOWNLOAD:co,COLLECTION:uo,PIN:"/static/trans.gif",PREVIEW:vo},CATEGORY:{401:{src:"https://static.m-team.cc/static/cate/moviesd.png",alt:"電影/SD",color:"#c74854"},402:{src:"https://static.m-team.cc/static/cate/tvhd.png",alt:"影劇/綜藝/HD",color:"#276fb8"},403:{src:"https://static.m-team.cc/static/cate/tvsd.png",alt:"影劇/綜藝/SD",color:"#c74854"},404:{src:"https://static.m-team.cc/static/cate/bbc.png",alt:"紀錄",color:"#23ac38"},405:{src:"https://static.m-team.cc/static/cate/anime.png",alt:"動畫",color:"#996c34"},406:{src:"https://static.m-team.cc/static/cate/mv.png",alt:"演唱",color:"#8a57a1"},407:{src:"https://static.m-team.cc/static/cate/sport.png",alt:"運動",color:"#23ac38"},409:{src:"https://static.m-team.cc/static/cate/other.png",alt:"Misc(其他)",color:"#996c34"},419:{src:"https://static.m-team.cc/static/cate/moviehd.png",alt:"電影/HD",color:"#c01a20"},420:{src:"https://static.m-team.cc/static/cate/moviedvd.png",alt:"電影/DVDiSo",color:"#c74854"},421:{src:"https://static.m-team.cc/static/cate/moviebd.png",alt:"電影/Blu-Ray",color:"#00a0e9"},422:{src:"https://static.m-team.cc/static/cate/software.png",alt:"軟體",color:"#f39800"},423:{src:"https://static.m-team.cc/static/cate/game-pc-3.jpeg",alt:"PC遊戲",color:"#f39800"},427:{src:"https://static.m-team.cc/static/cate/Study.png",alt:"教育(書面)",color:"#7FC269"},434:{src:"https://static.m-team.cc/static/cate/flac.png",alt:"Music(無損)",color:"#8a57a1"},435:{src:"https://static.m-team.cc/static/cate/tvdvd.png",alt:"影劇/綜藝/DVDiSo",color:"#4dbebd"},438:{src:"https://static.m-team.cc/static/cate/tvbd.png",alt:"影劇/綜藝/BD",color:"#1897d6"},439:{src:"https://static.m-team.cc/static/cate/movieremux.png",alt:"電影/Remux",color:"#1b2a51"},451:{src:"https://static.m-team.cc/static/cate/Study_Video.png",alt:"教育(影片)",color:"#7FC269"},442:{src:"https://static.m-team.cc/static/cate/Study_Audio.png",alt:"有聲書",color:"#7FC269"},448:{src:"https://static.m-team.cc/static/cate/pcgame.png",alt:"TV遊戲",color:"#f39800"},410:{src:"https://static.m-team.cc/static/cate/cenhd.png",alt:"AV(有碼)/HD Censored",color:"#F520CB"},411:{src:"https://static.m-team.cc/static/cate/hgame.png",alt:"H-遊戲",color:"#f49800"},412:{src:"https://static.m-team.cc/static/cate/hanime.png",alt:"H-動畫",color:"#f49800"},413:{src:"https://static.m-team.cc/static/cate/hcomic.png",alt:"H-漫畫",color:"#f49800"},424:{src:"https://static.m-team.cc/static/cate/censd.png",alt:"AV(有碼)/SD Censored",color:"#DA55A9"},425:{src:"https://static.m-team.cc/static/cate/ivvideo.png",alt:"IV(寫真影集)",color:"#bb1e9a"},426:{src:"https://static.m-team.cc/static/cate/uendvd.png",alt:"AV(無碼)/DVDiSo Uncensored",color:"#f77afa"},429:{src:"https://static.m-team.cc/static/cate/uenhd.png",alt:"AV(無碼)/HD Uncensored",color:"#f52bcb"},430:{src:"https://static.m-team.cc/static/cate/uensd.png",alt:"AV(無碼)/SD Uncensored",color:"#db55a9"},431:{src:"https://static.m-team.cc/static/cate/cenbd.png",alt:"AV(有碼)/Blu-Ray Censored",color:"#19a7ec"},432:{src:"https://static.m-team.cc/static/cate/uenbd.png",alt:"AV(無碼)/Blu-Ray Uncensored",color:"#19a7ec"},433:{src:"https://static.m-team.cc/static/cate/ivpic.png",alt:"IV(寫真圖集)",color:"#bb1e9a"},436:{src:"https://static.m-team.cc/static/cate/adult0day.png",alt:"AV(網站)/0Day",color:"#bb1e9a"},437:{src:"https://static.m-team.cc/static/cate/cendvd.png",alt:"AV(有碼)/DVDiSo Censored",color:"#f77afa"},440:{src:"https://static.m-team.cc/static/cate/gayhd.gif",alt:"AV(Gay)/HD",color:"#f52bcb"}},CATEGORY_COLOR:{115:"#f52bcb",120:"#f52bcb",410:"#f52bcb",429:"#f52bcb",424:"#DA55A9",430:"#db55a9",437:"#f77afa",426:"#f77afa",431:"#19a7ec",432:"#19a7ec",440:"#f52bcb",436:"#bb1e9a",425:"#bb1e9a",433:"#bb1e9a",411:"#f49800",412:"#f49800",413:"#f49800",100:"#c74854",401:"#c74854",419:"#c01a20",420:"#c74854",421:"#00a0e9",439:"#1b2a51",105:"#276fb8",403:"#c74854",402:"#276fb8",435:"#4dbebd",438:"#1897d6",444:"#23ac38",404:"#23ac38",449:"#996c34",405:"#996c34",443:"#7FC269",427:"#7FC269",441:"#7FC269",442:"#7FC269",447:"#f39800",423:"#f39800",448:"#f39800",450:"#996c34",407:"#23ac38",422:"#f39800",409:"#996c34",110:"#8a57a1",406:"#8a57a1",408:"#8a57a1",434:"#8a57a1"},CATEGORY_NAME:{115:"AV(有码)",120:"AV(无码)",410:"有码 HD",429:"无码 HD",424:"有码 Xvid",430:"无码 Xvid",437:"有码 DVD",426:"无码 DVD",431:"有码 BluRay",432:"无码 BluRay",440:"GAY",436:"0 day",425:"写真 video",433:"写真 pic",411:"H-Game",412:"H-Anime",413:"H-Comic",100:"Movie",401:"Movie SD",419:"Movie HD",420:"Movie DVD",421:"Movie BluRay",439:"Movie Remux",105:"TV",403:"TV SD",402:"TV HD",435:"TV DVDiSo",438:"TV BluRay",444:"Documentary",404:"Documentary",449:"Anime",405:"Anime",443:"教育",427:"教育文档",441:"教育影片",442:"教育音频",447:"Game",423:"Game",448:"TV Game",450:"其他",407:"Sport",422:"软件",409:"Other",110:"Music",406:"MV",408:"Music AAC/ALAC",434:"Music 无损"},INDEX:0,Iframe_Width:1260,get_bg_color:function(){return getComputedStyle(document.documentElement).getPropertyValue("--bg-3")},special:function(){let t=fo(),e=_o();return t&&e},pageLoaded:function(){}};function fo(){const t=Array.from(document.querySelectorAll(".ant-table-row-level-0 .ant-col a[href]"));return t.forEach(function(e){e.addEventListener("click",function(r){r.preventDefault(),_iframe_switch.set(1),_iframe_url.set(e.href);});}),t.length}function _o(){document.querySelectorAll(".ant-image-mask").forEach(r=>{r.remove();});const e=Array.from(document.querySelectorAll(".torrent-list__thumbnail"));return e.forEach(r=>{r.classList+=" preview_Origin";}),e.length}const fi=".preview_Origin";document.body.addEventListener("mouseover",function(t){if(t.target.matches(fi)){const e=t,r=t.target;handleMouseOver(e,r);}});document.body.addEventListener("mouseout",function(t){t.target.matches(fi)&&handleMouseOut(t);});document.body.addEventListener("mousemove",function(t){if(t.target.matches(fi)){const e=t.target;handleMouseMove(t,e);}});var po=vi('<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="18" width="18" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle;"><path d="M7 7h10v2H7zm0 4h7v2H7z"></path><path d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"></path></svg>');function Oi(t){var e=po();N(t,e);}class ho{constructor(){this.container=null,this.imgElements=null,this.buffer=null,this.init();}init(){this.container=document.querySelector(".kp_container")||this.createPreview(),document.body.appendChild(this.container);}createPreview(){const e=document.createElement("div");e.className="kp_container",e.style.backgroundColor="rgba(0,0,0,0.8)",e.style.opacity="1",e.style.position="fixed",e.style.zIndex="10000",e.style.pointerEvents="none",e.style.transition="all .3s",e.style.display="none";const r=document.createElement("img");r.className="kp_img",r.style.position="absolute",r.style.zIndex="10002",r.style.pointerEvents="none",r.style.width="100%",r.style.height="100%",r.style.objectFit="contain",e.appendChild(r);const n=document.createElement("img");return n.className="kp_img",n.style.position="absolute",n.style.zIndex="10001",n.style.pointerEvents="none",n.style.width="100%",n.style.height="100%",n.style.objectFit="cover",n.style.filter="blur(8px)",n.style.opacity="0.9",e.appendChild(n),e}handleMouseOver(e,r){if(!r){console.warn("imgEle is null");return}if(pa(js)){const n=r.getAttribute("src");n&&(document.querySelectorAll(".kp_img").forEach(a=>{a.setAttribute("src",n);}),this.updatePosition(e),this.imgElements=r,this.container.style.display="block");}}handleMouseMove(e){this.container.style.display==="block"&&this.updatePosition(e);}updatePosition(e){const r=this.previewPosition(e);this.container.style.left=r.left,this.container.style.top=r.top,this.container.style.width=r.width,this.container.style.height=r.height;}previewPosition(e){let r=0,n=0;try{r=this.imgElements.naturalWidth,n=this.imgElements.naturalHeight;}catch{}const i=e.clientX,a=e.clientY,o=window.innerWidth,s=window.innerHeight,u={bot:{width:o,height:window.innerHeight-a},top:{width:o,height:a},right:{width:window.innerWidth-i,height:s},left:{width:i,height:s}};let l=0,f="";for(const c in u){const v=Math.min(u[c].width/r,u[c].height/n);v>l&&(l=v,f=c);}return {top:{left:0,top:0,width:o+"px",height:a+"px"},bot:{left:0,top:a+"px",width:o+"px",height:window.innerHeight-a+"px"},left:{left:0,top:0,width:i+"px",height:s+"px"},right:{left:i+"px",top:0,width:window.innerWidth-i+"px",height:s+"px"}}[f]||{left:0,top:0,width:0,height:0}}clearPreview(){document.querySelectorAll(".kp_img").forEach(e=>{e.setAttribute("src","");}),this.container.style.display="none";}destroy(){this.buffer&&clearTimeout(this.buffer),this.container&&(this.container.style.display="none",clearPreview());}}function go(){document.querySelectorAll(".kp_img").forEach(e=>{e.setAttribute("src","");});const t=document.querySelector(".kp_container");t.style.display="none";}window.__clearPreview=go;const mo="data:image/svg+xml,%3csvg%20width='256px'%20height='256px'%20viewBox='0%200%2024.00%2024.00'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20transform='matrix(1,%200,%200,%201,%200,%200)'%20%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'%20transform='translate(0,0),%20scale(1)'%20/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke='%23CCCCCC'%20stroke-width='0.048'%20/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M13%203L13.7071%202.29289C13.5196%202.10536%2013.2652%202%2013%202V3ZM14%2022C14.5523%2022%2015%2021.5523%2015%2021C15%2020.4477%2014.5523%2020%2014%2020V22ZM19%209H20C20%208.73478%2019.8946%208.48043%2019.7071%208.29289L19%209ZM18%2010C18%2010.5523%2018.4477%2011%2019%2011C19.5523%2011%2020%2010.5523%2020%2010H18ZM5.21799%2019.908L4.32698%2020.362H4.32698L5.21799%2019.908ZM6.09202%2020.782L6.54601%2019.891L6.54601%2019.891L6.09202%2020.782ZM6.09202%203.21799L5.63803%202.32698L5.63803%202.32698L6.09202%203.21799ZM5.21799%204.09202L4.32698%203.63803L4.32698%203.63803L5.21799%204.09202ZM13.109%208.45399L14%208V8L13.109%208.45399ZM13.546%208.89101L14%208L13.546%208.89101ZM17.2299%2017.7929C16.8394%2018.1834%2016.8394%2018.8166%2017.2299%2019.2071C17.6204%2019.5976%2018.2536%2019.5976%2018.6441%2019.2071L17.2299%2017.7929ZM15.0316%2015.2507C14.8939%2015.7856%2015.2159%2016.3308%2015.7507%2016.4684C16.2856%2016.6061%2016.8308%2016.2841%2016.9684%2015.7493L15.0316%2015.2507ZM17.9375%2020C17.3852%2020%2016.9375%2020.4477%2016.9375%2021C16.9375%2021.5523%2017.3852%2022%2017.9375%2022V20ZM17.9475%2022C18.4998%2022%2018.9475%2021.5523%2018.9475%2021C18.9475%2020.4477%2018.4998%2020%2017.9475%2020V22ZM13%202H8.2V4H13V2ZM4%206.2V17.8H6V6.2H4ZM8.2%2022H14V20H8.2V22ZM19.7071%208.29289L13.7071%202.29289L12.2929%203.70711L18.2929%209.70711L19.7071%208.29289ZM20%2010V9H18V10H20ZM4%2017.8C4%2018.3436%203.99922%2018.8114%204.03057%2019.195C4.06287%2019.5904%204.13419%2019.9836%204.32698%2020.362L6.10899%2019.454C6.0838%2019.4045%206.04612%2019.3038%206.02393%2019.0322C6.00078%2018.7488%206%2018.3766%206%2017.8H4ZM8.2%2020C7.62345%2020%207.25117%2019.9992%206.96784%2019.9761C6.69617%2019.9539%206.59545%2019.9162%206.54601%2019.891L5.63803%2021.673C6.01641%2021.8658%206.40963%2021.9371%206.80497%2021.9694C7.18864%2022.0008%207.65645%2022%208.2%2022V20ZM4.32698%2020.362C4.6146%2020.9265%205.07354%2021.3854%205.63803%2021.673L6.54601%2019.891C6.35785%2019.7951%206.20487%2019.6422%206.10899%2019.454L4.32698%2020.362ZM8.2%202C7.65645%202%207.18864%201.99922%206.80497%202.03057C6.40963%202.06287%206.01641%202.13419%205.63803%202.32698L6.54601%204.10899C6.59545%204.0838%206.69617%204.04612%206.96784%204.02393C7.25117%204.00078%207.62345%204%208.2%204V2ZM6%206.2C6%205.62345%206.00078%205.25117%206.02393%204.96784C6.04612%204.69617%206.0838%204.59545%206.10899%204.54601L4.32698%203.63803C4.13419%204.01641%204.06287%204.40963%204.03057%204.80497C3.99922%205.18864%204%205.65645%204%206.2H6ZM5.63803%202.32698C5.07354%202.6146%204.6146%203.07354%204.32698%203.63803L6.10899%204.54601C6.20487%204.35785%206.35785%204.20487%206.54601%204.10899L5.63803%202.32698ZM12%203V7.4H14V3H12ZM14.6%2010H19V8H14.6V10ZM12%207.4C12%207.66353%2011.9992%207.92131%2012.0169%208.13823C12.0356%208.36682%2012.0797%208.63656%2012.218%208.90798L14%208C14.0293%208.05751%2014.0189%208.08028%2014.0103%207.97537C14.0008%207.85878%2014%207.69653%2014%207.4H12ZM14.6%208C14.3035%208%2014.1412%207.99922%2014.0246%207.9897C13.9197%207.98113%2013.9425%207.9707%2014%208L13.092%209.78201C13.3634%209.92031%2013.6332%209.96438%2013.8618%209.98305C14.0787%2010.0008%2014.3365%2010%2014.6%2010V8ZM12.218%208.90798C12.4097%209.2843%2012.7157%209.59027%2013.092%209.78201L14%208V8L12.218%208.90798ZM18.937%2016C18.937%2016.1732%2018.8915%2016.3053%2018.6175%2016.5697C18.4638%2016.718%2018.2828%2016.8653%2018.0319%2017.074C17.7936%2017.2723%2017.5141%2017.5087%2017.2299%2017.7929L18.6441%2019.2071C18.86%2018.9913%2019.0805%2018.8033%2019.3109%2018.6116C19.5287%2018.4305%2019.7852%2018.2223%2020.0065%2018.0087C20.4825%2017.5493%2020.937%2016.9314%2020.937%2016H18.937ZM17.937%2015C18.4893%2015%2018.937%2015.4477%2018.937%2016H20.937C20.937%2014.3431%2019.5938%2013%2017.937%2013V15ZM16.9684%2015.7493C17.0795%2015.3177%2017.4724%2015%2017.937%2015V13C16.5377%2013%2015.3645%2013.957%2015.0316%2015.2507L16.9684%2015.7493ZM17.9375%2022H17.9475V20H17.9375V22Z'%20fill='%23c00000'%20/%3e%3c/g%3e%3c/svg%3e",yo="data:image/svg+xml,%3csvg%20viewBox='-2.4%20-2.4%2028.80%2028.80'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23000000'%20%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'%20/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M15.6%2015.6C15.6%2015.6%2014.25%2013.8%2012%2013.8C9.75%2013.8%208.4%2015.6%208.4%2015.6M14.7%209.3H14.709M9.3%209.3H9.309M21%2012C21%2016.9706%2016.9706%2021%2012%2021C7.02944%2021%203%2016.9706%203%2012C3%207.02944%207.02944%203%2012%203C16.9706%203%2021%207.02944%2021%2012ZM15.15%209.3C15.15%209.54853%2014.9485%209.75%2014.7%209.75C14.4515%209.75%2014.25%209.54853%2014.25%209.3C14.25%209.05147%2014.4515%208.85%2014.7%208.85C14.9485%208.85%2015.15%209.05147%2015.15%209.3ZM9.75%209.3C9.75%209.54853%209.54853%209.75%209.3%209.75C9.05147%209.75%208.85%209.54853%208.85%209.3C8.85%209.05147%209.05147%208.85%209.3%208.85C9.54853%208.85%209.75%209.05147%209.75%209.3Z'%20stroke='%23000000'%20stroke-width='1.8'%20stroke-linecap='round'%20stroke-linejoin='round'%20/%3e%3c/g%3e%3c/svg%3e";var st=Hs(()=>lr),wo=$('<div class="card_new_page_highlight svelte-aspv9f"> </div>'),bo=$('<div class="card-category svelte-aspv9f"><img class="card_category-img svelte-aspv9f"> </div>'),xo=$('<a class="__main_title svelte-aspv9f" target="_blank" rel="noopener noreferrer"> </a>'),Co=$('<div class="pic_error svelte-aspv9f"><div><img style="height: 100%; width:60px; border-radius:20px;" alt="pic error" class="svelte-aspv9f"></div> <div class="ant-typography" style="color: white; font-size:16px;">GAY WARNING<br>同志警告</div></div>'),Eo=$('<img class="lazy-image svelte-aspv9f">'),ko=$('<div class="pic_error svelte-aspv9f" style=""><div><img style="height: 100%;width: 100px;" alt="no pic" class="svelte-aspv9f"></div> <div>本种没有图片</div></div>'),Mo=$('<div class="pic_error svelte-aspv9f" style=""><div><img style="height: 100%;width: 100px;" alt="pic error" class="svelte-aspv9f"></div> <div class="ant-typography">图片加载失败</div></div>'),Lo=$('<div class="hover-trigger svelte-aspv9f"><img style="pointer-events: none;" alt="PREVIEW" class="svelte-aspv9f"></div>'),No=$(`<img style="
                    background: url(/static/media/icons.8bb5446ebbbd07050285.gif) 0 -202px;
                    height: 14px;
                    width: 14px;" alt="PIN" class="svelte-aspv9f">`),So=$('<div class="card_info__topping svelte-aspv9f"></div> &nbsp;',1),To=$('<div class="_tag svelte-aspv9f"> </div>'),Ao=$('<div class="_tag _tag_diy svelte-aspv9f">DIY</div>'),$o=$('<div class="_tag _tag_dub svelte-aspv9f">国配</div>'),Io=$('<div class="_tag _tag_sub svelte-aspv9f">中字</div>'),Oo=$('<div class="cl-tags svelte-aspv9f"><!> <!> <!></div>'),Do=$(`<img style="
                  background: url(/static/media/icons.8bb5446ebbbd07050285.gif) 0 -202px;
                  height: 14px;
                  width: 14px;" alt="PIN" class="svelte-aspv9f">`),Po=$('<div class="card_info__topping svelte-aspv9f"></div> &nbsp;',1),Ro=$('<div class="_tag svelte-aspv9f"> </div>'),Vo=$('<div class="card-index svelte-aspv9f"><!> <!></div>'),Ho=$('<div class="card-index card-index-right svelte-aspv9f"> </div>'),Fo=$('<div class="card_info-item card_info__sub_title svelte-aspv9f"><div> </div></div>'),qo=$('<div class="_tag _tag_diy svelte-aspv9f">DIY</div>'),Bo=$('<div class="_tag _tag_dub svelte-aspv9f">国配</div>'),Zo=$('<div class="_tag _tag_sub svelte-aspv9f">中字</div>'),zo=$('<div class="cl-tags svelte-aspv9f"><!> <!> <!></div>'),Go=$('<div class="card_info-item card_info__dl_and_cl svelte-aspv9f"><button title="(原列表的这俩按钮会消失)">下载 & 收藏</button></div>'),jo=$('<div class="card_info-item card_info__upload_time svelte-aspv9f"><div> </div></div>'),Wo=$('<div class="card_info-item card_info__statistics svelte-aspv9f"><!> &nbsp; <b> </b> &nbsp;&nbsp; <img alt="SVG_Seeders"> &nbsp; <b> </b> &nbsp;&nbsp; <img alt="SVG_Leechers"> &nbsp; <b> </b></div>'),Yo=$('<div class="card_info svelte-aspv9f"><!>  <!> <!> <!> <!></div>'),Uo=$('<div class="card_holder"><!> <!> <div class="card_title"><!></div> <div class="card_pic svelte-aspv9f"><!> <!>  <div class="hover-overlay svelte-aspv9f"><div class="overlay-content svelte-aspv9f"><div class="__inner_index_and_size svelte-aspv9f"><div class="card-index __inner_index svelte-aspv9f" style="background-color:black; color:white"><!> <!></div> <button class="__iframe_button svelte-aspv9f">打开 iframe</button> <div class="card-index card-index-right __inner_index __inner_size svelte-aspv9f"> </div></div> <div class="card-category card_info-item svelte-aspv9f"><img class="card_category-img card_category_square svelte-aspv9f" style="width: 36px;height: 36px;"> </div> <div style="width: 100%;" class="card_info-item card_info__sub_title svelte-aspv9f"><a class="__main_title __straight svelte-aspv9f" target="_blank" rel="noopener noreferrer"> </a></div> <div style="width: 100%;" class="card_info-item card_info__sub_title svelte-aspv9f"><div class="__sub_title svelte-aspv9f"> </div></div>  <!> <div class="card_info-item card_info__upload_time svelte-aspv9f"><div> </div></div> <div class="card_info-item card_info__statistics svelte-aspv9f"><div class="__center svelte-aspv9f"><!> <b> </b></div> <div class="__center svelte-aspv9f"><img style="width: 14px; height: 14px;" alt="SVG_Seeders" class="svelte-aspv9f"> <b> </b></div> <div class="__center svelte-aspv9f"><img style="width: 14px; height: 14px;" alt="SVG_Leechers" class="svelte-aspv9f"> <b> </b></div> <button title="(原列表的这俩按钮会消失)">下载&收藏</button></div></div></div> <!> <!></div> <!></div>');function Xo(t,e){Qt(e,false);const[r,n]=Ie(),i=()=>lt(Ur,"$_block_gay",r),a=()=>lt(Lt,"$_card_detail",r),o=()=>lt(Kn,"$_show_hover_pic",r);let s=nt(e,"torrentInfo",8),u=J(false),l=J();s().status.toppingLevel&&A(l,Array(Number(s().status.toppingLevel)).fill());const f=s().status.discount,c=s().status.discountEndTime,v={FREE:"免费",PERCENT_50:"50%"},d=()=>{const y=new Date,L=new Date(c);return Math.floor((L.getTime()-y.getTime())/(1e3*3600))};let x=J(),h=J();const C="rgba(255, 255, 255, 0.5)";st().CATEGORY[s().category]?A(h,st().CATEGORY[s().category].color??C):(A(h,C),we.open({type:"warning",message:`存在未知分类: ${s().category}`}),st(st().CATEGORY[s().category]={src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZmMDAwMCIvPjwvc3ZnPg==",alt:"未知分类(TG或论坛联系我)",color:C}));function w(y){const L=y.replace("#",""),P=parseInt(L.substr(0,2),16),Z=parseInt(L.substr(2,2),16),Q=parseInt(L.substr(4,2),16);return (P*299+Z*587+Q*114)/1e3<128?"white":"black"}function m(y){if(y===0)return "0 B";const L=["B","KB","MB","GB","TB"];let P=0,Z=y;for(;Z>=1024&&P<L.length-1;)Z/=1024,P++;return `${Z.toFixed(2).replace(/\.?0+$/,"")} ${L[P]}`}let b=J(),M=J();function k(y,L){const P=document.querySelectorAll(`a[href^="/detail/${y}"]`),Z=[];P.forEach(Q=>{if(!/\/detail\/\d+/.test(Q.href))return;const K=Q.closest("tr");K&&K.querySelectorAll("button").forEach(ot=>{ot.querySelector("span.ant-btn-icon")&&Z.push(ot);});}),Z.length?(Z[0].style.margin=0,[...new Set(Z)].forEach(K=>{L.appendChild(K);})):we.error("没找到捏, 建议在种子详情里下载收藏~");}let E=J(false),O=J(false),S=new ho,D=J(),G=J(),rt=J(0);function et(){_(G)&&A(rt,_(G).offsetHeight);}let ut=J(false);const Ft="/static/cate/gayhd.gif",H="https://static.m-team.cc/static/media/logo.80b63235eaf702e44a8d.png";let tt=s().imageList[0]||H,T=J(),it,vt=J(false);const wn=()=>{_(vt)||(Mt(T,_(T).style.width="100%"),Mt(T,_(T).src=tt),_(T).classList.add("loaded"),Mt(T,_(T).style.opacity=1),A(vt,true),_(G)&&et());};function Oe(){dt(ga,"https://"+location.host+"/detail/"+s().id),dt(ye,1);}let De=J(true);yn(()=>{_(vt)||(it=new IntersectionObserver(y=>{y.forEach(L=>{L.isIntersecting&&(wn(),it.unobserve(_(T)));});},{rootMargin:"100px"}),_(T)&&!_(vt)&&it.observe(_(T)),s().pt_fall_highlight&&_(x).scrollIntoView({behavior:"smooth"}),setTimeout(()=>{A(De,false);},3e3)),et(),_(T)&&Mt(T,_(T).style.width="auto");}),Bs(()=>{it&&it.disconnect();}),Ce(()=>_(G),()=>{_(G)&&et();}),Ce(()=>(ee(s()),i(),_(T),_(G)),()=>{s().category==440&&i()==0&&_(T)&&(Mt(T,_(T).style.width="100%"),Mt(T,_(T).src=tt),_(T).classList.add("loaded"),Mt(T,_(T).style.opacity=1),A(vt,true),_(G)&&et());}),dn(),$e();var Pe=Uo(),Re=p(Pe);{var _r=y=>{var L=wo(),P=p(L);j(()=>V(P,`新页面 (${s().index??""}+)`)),Ee(3,L,()=>ke,()=>({duration:500})),N(y,L);};q(Re,y=>{s().pt_fall_highlight&&_(De)&&y(_r);});}var Ve=g(Re,2);{var bn=y=>{var L=bo(),P=p(L),Z=g(P);j(Q=>{I(L,"data-href",`https://${location.host}/browse?cat=`+s().category),I(L,"style",`
      background-color: ${_(h)??"transparent"};
      color: ${Q??""}`),I(P,"src",st().CATEGORY[s().category].src),I(P,"alt",st().CATEGORY[s().category].alt),V(Z,`    ${st().CATEGORY[s().category].alt??""}`);},[()=>_(h)?w(_(h)):"black"],Ot),N(y,L);};q(Ve,y=>{a().category&&y(bn);});}var le=g(Ve,2),pr=p(le);{var hr=y=>{var L=xo(),P=p(L);j(()=>{I(L,"href","/detail/"+s().id),V(P,s().name);}),N(y,L);};q(pr,y=>{a().title&&y(hr);});}var ce=g(le,2),gr=p(ce);{var mr=y=>{var L=me(),P=Dt(L);{var Z=K=>{var ot=Co(),ft=p(ot),Y=p(ft);I(Y,"src",Ft),j(()=>I(ot,"style",`  background-color: ${_(h)??""}`)),N(K,ot);},Q=K=>{var ot=me(),ft=Dt(ot);{var Y=xt=>{var Ct=Eo();I(Ct,"data-src",tt),jt(Ct,U=>A(T,U),()=>_(T)),j(()=>{I(Ct,"src",_(vt)?tt:H),I(Ct,"alt",s().id);}),B("error",Ct,()=>{A(ut,true),_(T)||console.log(`<${s().index}>[${s().id}] imgElement 丢失.`);}),N(xt,Ct);},gt=xt=>{var Ct=ko(),U=p(Ct),at=p(U);I(at,"src",yo),N(xt,Ct);};q(ft,xt=>{s().imageList[0]?xt(Y):xt(gt,false);},true);}N(K,ot);};q(P,K=>{i()&&s().category==440?K(Z):K(Q,false);});}N(y,L);},yr=y=>{var L=Mo(),P=p(L),Z=p(P);I(Z,"src",mo);var Q=g(P,2);j(K=>I(Q,"style",`color: ${K??""}; font-size:16px;`),[()=>w(_(h))],Ot),N(y,L);};q(gr,y=>{_(ut)?y(yr,false):y(mr);});}var wr=g(gr,2);{var xn=y=>{var L=Lo(),P=p(L);j(()=>I(P,"src",st().ICON.PREVIEW)),B("mouseover",L,Z=>{A(E,true),S.handleMouseOver(Z,_(T));}),N(y,L);};q(wr,y=>{o()&&!_(ut)&&y(xn);});}var It=g(wr,2),He=p(It),br=p(He),xr=p(br),Fe=p(xr);{var Cr=y=>{var L=So(),P=Dt(L);tr(P,5,()=>_(l),Un,(Z,Q)=>{var K=No();j(()=>I(K,"src",st().ICON.PIN)),N(Z,K);}),N(y,L);};q(Fe,y=>{s().status.toppingLevel!="0"&&y(Cr);});}var Er=g(Fe),Cn=g(Er);{var kr=y=>{var L=To();Ue(L,"_tag_discount_free",f=="FREE"),Ue(L,"_tag_discount_50",f=="PERCENT_50");var P=p(L);j(Z=>V(P,`${v[f]??""}${Z??""}`),[()=>c?":"+d()+"小时":""],Ot),N(y,L);};q(Cn,y=>{f!="NORMAL"&&y(kr);});}var ue=g(xr,2),Mr=g(ue,2),En=p(Mr),Jt=g(br,2),ve=p(Jt),kn=g(ve),qe=g(Jt,2),fe=p(qe),Lr=p(fe),Nr=g(qe,2),Mn=p(Nr),Sr=p(Mn),Be=g(Nr,2);{var Ln=y=>{var L=Oo(),P=p(L);{var Z=Y=>{var gt=Ao();N(Y,gt);};q(P,Y=>{(s().labels&1)===1&&Y(Z);});}var Q=g(P,2);{var K=Y=>{var gt=$o();N(Y,gt);};q(Q,Y=>{(s().labels&2)===2&&Y(K);});}var ot=g(Q,2);{var ft=Y=>{var gt=Io();N(Y,gt);};q(ot,Y=>{(s().labels&4)===4&&Y(ft);});}N(y,L);};q(Be,y=>{s().labels!=0&&y(Ln);});}var Tr=g(Be,2),Ar=p(Tr),$r=p(Ar),Ir=g(Tr,2),Or=p(Ir),Ze=p(Or);Oi(Ze);var Dr=g(Ze,2),Nn=p(Dr),Pr=g(Or,2),ze=p(Pr),Rr=g(ze,2),Sn=p(Rr),Vr=g(Pr,2),Ge=p(Vr),Hr=g(Ge,2),Tn=p(Hr),Fr=g(Vr,2);jt(Ir,y=>A(b,y),()=>_(b)),jt(He,y=>A(G,y),()=>_(G)),jt(It,y=>A(D,y),()=>_(D));var qr=g(It,2);{var Br=y=>{var L=Vo(),P=p(L);{var Z=ft=>{var Y=Po(),gt=Dt(Y);tr(gt,5,()=>_(l),Un,(xt,Ct)=>{var U=Do();j(()=>I(U,"src",st().ICON.PIN)),N(xt,U);}),N(ft,Y);};q(P,ft=>{a().topping&&s().status.toppingLevel!="0"&&ft(Z);});}var Q=g(P),K=g(Q);{var ot=ft=>{var Y=Ro();Ue(Y,"_tag_discount_free",f=="FREE"),Ue(Y,"_tag_discount_50",f=="PERCENT_50");var gt=p(Y);j(xt=>V(gt,`${v[f]??""}${xt??""}`),[()=>c?":"+d()+"小时":""],Ot),N(ft,Y);};q(K,ft=>{a().free&&f!="NORMAL"&&ft(ot);});}j(()=>V(Q,` ${s().index??""}

          `)),N(y,L);};q(qr,y=>{_(u)||y(Br);});}var An=g(qr,2);{var $n=y=>{var L=Ho(),P=p(L);j((Z,Q)=>{I(L,"style",`background-color: ${_(h)??"transparent"}; color:${Z??""}`),V(P,Q);},[()=>_(h)?w(_(h)):"black",()=>m(s().size)],Ot),N(y,L);};q(An,y=>{a().size&&!_(u)&&y($n);});}var F=g(ce,2);{var In=y=>{var L=Yo(),P=p(L);{var Z=U=>{var at=Fo(),At=p(at),Et=p(At);j(()=>V(Et,s().smallDescr)),N(U,at);};q(P,U=>{a().sub_title&&U(Z);});}var Q=g(P,2);{var K=U=>{var at=zo(),At=p(at);{var Et=_t=>{var te=qo();N(_t,te);};q(At,_t=>{(s().labels&1)===1&&_t(Et);});}var Zr=g(At,2);{var zr=_t=>{var te=Bo();N(_t,te);};q(Zr,_t=>{(s().labels&2)===2&&_t(zr);});}var Gr=g(Zr,2);{var On=_t=>{var te=Zo();N(_t,te);};q(Gr,_t=>{(s().labels&4)===4&&_t(On);});}N(U,at);};q(Q,U=>{a().tags&&s().labels!=0&&U(K);});}var ot=g(Q,2);{var ft=U=>{var at=Go(),At=p(at);jt(at,Et=>A(M,Et),()=>_(M)),B("click",At,Et=>{k(s().id,_(M)),Et.target.style.display="none";}),N(U,at);};q(ot,U=>{a().download_collect&&U(ft);});}var Y=g(ot,2);{var gt=U=>{var at=jo(),At=p(at),Et=p(At);j(()=>V(Et,`上传时间:${s().createdDate??""}`)),N(U,at);};q(Y,U=>{a().upload_time&&U(gt);});}var xt=g(Y,2);{var Ct=U=>{var at=Wo(),At=p(at);Oi(At);var Et=g(At,2),Zr=p(Et),zr=g(Et,2),Gr=g(zr,2),On=p(Gr),_t=g(Gr,2),te=g(_t,2),ya=p(te);j(()=>{V(Zr,s().status.comments),I(zr,"src",st().ICON.SEEDERS),V(On,s().status.seeders),I(_t,"src",st().ICON.LEECHERS),V(ya,s().status.leechers);}),N(U,at);};q(xt,U=>{a().statistics&&U(Ct);});}N(y,L);};q(F,y=>{(a().sub_title||a().tags||a().download_collect||a().upload_time||a().statistics)&&y(In);});}jt(Pe,y=>A(x,y),()=>_(x)),j((y,L)=>{I(ce,"style",`min-height: ${_(rt)+24}px;`),he(ce,"--cateColor",_(h)+"b0"),V(Er,` ${s().index??""}

              `),I(ue,"style",`background-color: ${_(h)??"transparent"}; color:${y??""}`),I(Mr,"style",`background-color: ${_(h)??"transparent"}; color:${y??""}`),V(En,L),I(Jt,"data-href",`https://${location.host}/browse?cat=`+s().category),I(Jt,"style",`
            height: 40px;
            background-color: ${_(h)??"transparent"};
            color: ${y??""}`),I(ve,"src",st().CATEGORY[s().category].src),I(ve,"alt",st().CATEGORY[s().category].alt),V(kn,`    ${st().CATEGORY[s().category].alt??""}`),I(fe,"href","/detail/"+s().id),I(fe,"title",s().name),V(Lr,s().name),V(Sr,s().smallDescr),V($r,`上传时间:${s().createdDate??""}`),V(Nn,s().status.comments),I(ze,"src",st().ICON.SEEDERS),V(Sn,s().status.seeders),I(Ge,"src",st().ICON.LEECHERS),V(Tn,s().status.leechers);},[()=>_(h)?w(_(h)):"black",()=>m(s().size)],Ot),B("click",ue,Oe),B("mousedown",qe,er(y=>{y.stopPropagation();})),B("mousedown",Fr,er(y=>{y.stopPropagation();})),B("click",Fr,er(y=>{k(s().id,_(b)),y.target.style.display="none";})),B("mouseenter",It,()=>{_(T)&&Mt(T,_(T).style.filter="blur(2px)"),Mt(D,_(D).style.opacity="1"),A(u,true);}),B("mousemove",It,y=>{A(O,true),_(E)&&_(O)&&S.handleMouseMove(y);}),B("mouseleave",It,()=>{_(T)&&Mt(T,_(T).style.filter="none"),Mt(D,_(D).style.opacity="0"),A(u,false),A(O,false),_(E)&&(A(E,false),S.clearPreview());}),B("mousedown",It,da(Oe)),N(t,Pe),Kt(),n();}var Qo=$('<p class="text_center svelte-1nf4wjl">没有结果捏</p>'),Ko=$('<main><div class="fall_holder svelte-1nf4wjl"><!></div></main>');function Jo(t,e){Qt(e,false);const[r,n]=Ie(),i=()=>lt(Ke,"$_card_layout",r),a=J();let o=nt(e,"infoList",8),s=J(o().data);_(s).length;let u=J();const l=lr.get_bg_color();Object.keys(_(s)).forEach((M,k)=>{Mt(s,_(s)[M].index=k+1);}),console.log("Mteam_Fall:First	"+_(s).length);function f(M,k=true){let E=M.data;console.log("Mteam_Fall:New:	"+E.length),k?(c(),Object.keys(E).forEach((O,S)=>{E[O].index=S+1,S==0&&(E[O].pt_fall_highlight=true);}),A(s,[...E])):(Object.keys(E).forEach((O,S)=>{E[O].index=S+1+_(s).length,S==0&&(E[O].pt_fall_highlight=true);}),A(s,[..._(s),...E]));}function c(){A(s,[]);}function v(M,k){k=="top"&&M.scrollIntoView({behavior:"smooth"}),k=="bottom"&&(M.scrollIntoView({behavior:"auto",block:"end",inline:"nearest"}),M.scrollIntoView({behavior:"auto",block:"end",inline:"nearest"}),M.scrollIntoView({behavior:"auto",block:"end",inline:"nearest"}));}function d(M="top"){v(_(u),M);}Ce(()=>_(s),()=>{A(a,[..._(s)]);}),dn(),$e();var x=Ko(),h=p(x);I(h,"style",`background-color:${l??""}`);var C=p(h);{var w=M=>{ro(M,{animate:true,get items(){return _(a)},get minColWidth(){return i().min},get maxColWidth(){return i().max},get gap(){return i().gap},children:ls,$$slots:{default:(k,E)=>{const O=Ot(()=>E.item);Xo(k,{get torrentInfo(){return _(O)}});}}});},m=M=>{var k=Qo();N(M,k);};q(C,M=>{_(a).length?M(w):M(m,false);});}jt(x,M=>A(u,M),()=>_(u)),N(t,x),Fn(e,"updateList",f),Fn(e,"clearList",c),Fn(e,"focusFall",d);var b=Kt({updateList:f,clearList:c,focusFall:d});return n(),b}let tl="0.3.2";var el=vi('<svg class="tgme_logo" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle cx="17" cy="17" fill="#40a9ff" r="17"></circle><path d="m7.06510669 16.9258959c5.22739451-2.1065178 8.71314291-3.4952633 10.45724521-4.1662364 4.9797665-1.9157646 6.0145193-2.2485535 6.6889567-2.2595423.1483363-.0024169.480005.0315855.6948461.192827.1814076.1361492.23132.3200675.2552048.4491519.0238847.1290844.0536269.4231419.0299841.65291-.2698553 2.6225356-1.4375148 8.986738-2.0315537 11.9240228-.2513602 1.2428753-.7499132 1.5088847-1.2290685 1.5496672-1.0413153.0886298-1.8284257-.4857912-2.8369905-1.0972863-1.5782048-.9568691-2.5327083-1.3984317-4.0646293-2.3321592-1.7703998-1.0790837-.212559-1.583655.7963867-2.5529189.2640459-.2536609 4.7753906-4.3097041 4.755976-4.431706-.0070494-.0442984-.1409018-.481649-.2457499-.5678447-.104848-.0861957-.2595946-.0567202-.3712641-.033278-.1582881.0332286-2.6794907 1.5745492-7.5636077 4.6239616-.715635.4545193-1.3638349.6759763-1.9445998.6643712-.64024672-.0127938-1.87182452-.334829-2.78737602-.6100966-1.12296117-.3376271-1.53748501-.4966332-1.45976769-1.0700283.04048-.2986597.32581586-.610598.8560076-.935815z" fill="#fff"></path></g></svg>');function rl(t,e){let r=nt(e,"height",8,34),n=nt(e,"width",8,34);var i=el();j(()=>{I(i,"height",r()),I(i,"width",n());}),N(t,i);}var nl=$('<div class="modal-overlay svelte-19468gw" role="button" aria-hidden="true"><div class="modal-content svelte-19468gw" role="button" aria-hidden="true"><div class="modal-header svelte-19468gw"><h3 class="svelte-19468gw">FAQ - 常见问题</h3> <button class="close-btn svelte-19468gw">&times;</button></div> <div class="modal-body svelte-19468gw"><h4 class="svelte-19468gw">Q: 如何联系反馈问题？</h4> <p class="svelte-19468gw"><a class="faq-btn svelte-19468gw" href="https://t.me/+Nd_qIisDjQ80ZTc9" target="_blank" style="height:40px; display: flex; align-items: center; justify-content: center;"><!> &nbsp;Telegram</a></p> <h4 class="svelte-19468gw">Q: 插件没有生效怎么办？</h4> <p class="svelte-19468gw">可能是浏览器缓存了请求，尝试使用 Ctrl+Shift+R / Ctrl+F5 强制刷新页面。</p> <h4 class="svelte-19468gw">Q: 如何切换瀑布流视图？</h4> <p class="svelte-19468gw">点击悬浮面板中的"切换显示"按钮即可在瀑布流和原列表视图间切换。</p> <h4 class="svelte-19468gw">Q: 如何调整卡片布局？</h4> <p class="svelte-19468gw">点击悬浮面板中的"配置菜单"按钮，可以调整卡片的最小 / 最大宽度、间隔等参数。</p> <h4 class="svelte-19468gw">Q: 快捷键？</h4> <p class="svelte-19468gw">x 可以切换瀑布流视图</p> <p class="svelte-19468gw">Esc 可以从 次级菜单 / 配置菜单 / iframe 中退出。</p></div></div></div>'),il=$('<div class="entry_mteam"><div class="ant-typography" style="line-height: 1.5; text-align: center;"><button class="faq-btn svelte-19468gw">PT-Fall 插件 <span style="font-weight: 600;"></span></button> <button class="faq-btn svelte-19468gw" style="cursor: pointer;">常见问题 FAQ</button></div></div> <!>',1);function al(t,e){Qt(e,false);const[r,n]=Ie(),i=()=>lt(rr,"$_isFallView",r);let a=J(false);function o(){A(a,true);}function s(){A(a,false);}let u=J();Ce(()=>i(),()=>{A(u,i()?"#4ff74f":"yellow");}),dn();var l=il();B("keydown",nr,w=>{w.key==="Escape"&&s();},true);var f=Dt(l),c=p(f),v=p(c);he(v,"--hover","green");var d=g(p(v));d.textContent=`[v${tl}]`;var x=g(v,2);he(x,"--hover","#40a9ff");var h=g(f,2);{var C=w=>{var m=nl(),b=p(m),M=p(b),k=g(p(M),2),E=g(M,2),O=g(p(E),2),S=p(O);he(S,"--hover","#40a9ff");var D=p(S);rl(D,{height:24,width:24}),B("click",k,s),B("click",b,er(function(G){Fs.call(this,e,G);})),Ee(3,m,()=>ke,()=>({duration:200})),B("click",m,s),N(w,m);};q(h,w=>{_(a)&&w(C);});}j(()=>he(d,"color",_(u))),B("click",x,o),N(t,l),Kt(),n();}function We(t,e=()=>{}){if(!t)return;const r=document.querySelector(t);if(r){e(r);return}new MutationObserver((i,a)=>{const o=document.querySelector(t);o&&(a.disconnect(),e(o));}).observe(document.documentElement,{childList:true,subtree:true});}function sl(t,e){Qt(e,false);const[r,n]=Ie(),i=()=>lt(rr,"$_isFallView",r);let a,o,s,u=true;const l=document.createElement("div");l.classList.add("Fall_DOM"),We(lr.TL_Selector,f),We('a[href="/index"][target="_self"]',C=>{if(a)we.error("未找到目标链接元素"),console.warn("未找到目标链接元素");else {C.insertAdjacentHTML("afterend",'<div class="ptFallReadme"></div>');const w=C.parentNode.querySelector(".ptFallReadme");a=or(al,{target:w});}}),yn(()=>{console.log("=====> 启动劫持 pushState 方法 <====="),h();});function f(C){if(C.parentNode){console.log("元素已找到，正在插入兄弟节点:",C),Ws();const w={path:"/search",method:"POST"};window.addEventListener("req>POST->/search",m=>{console.log(`<PT-Fall>[Request]  (${w.method} -> ${w.path})
`,m.detail),u=true,u?o&&o.focusFall():o&&o.focusFall("bottom");}),window.addEventListener("res>POST->/search",m=>{const b=JSON.parse(m.detail.data);console.log(`<PT-Fall>[Response] (${w.method}->${w.path})[通过事件捕获]:
`,b),d(i()),c(C),we.success("捕获到 /search !"),s=b.data,o?o.updateList(s,u):o=or(Jo,{target:l,props:{infoList:s}});});}else we.error(`找不到指定节点
若总是如此请报告bug`),console.error("无法插入：目标元素没有父节点");}function c(C){const w=C.parentNode.querySelector(".ant-spin-nested-loading"),m=document.createElement("div");m.id="_shield",m.style.position="absolute",m.style.top="0",m.style.left="0",m.style.width="100%",m.style.height="100%",m.style.backgroundColor="rgba(0, 0, 0, 0.5)",m.style.zIndex="100",w.querySelector("#_shield")||w.appendChild(m);const b=document.createElement("div");b.id="fallHolder",b.style.position="absolute",b.style.top="0",b.style.left="0",b.style.width="100%",b.style.minHeight="200px",b.style.zIndex="101",w.querySelector("#fallHolder")||(w.appendChild(b),b.appendChild(l));}let v="";function d(C){l.style.display=C?"block":"none",We("#fallHolder",w=>{w.style.display=C?"block":"none";}),We("#_shield",w=>{w.style.display=C?"block":"none";}),We(lr.TL_Selector+" .mx-auto",w=>{v||(v=w.style.margin),w.style.margin=C?0:v;});}window.changeFallView=d;const x=history.pushState;function h(){history.pushState=function(C,w,m){console.log(`%c ====> URL跳转劫持: %c${m}`,"color: cyan","color: white"),m.includes("/browse")||m=="/waterfall"?console.log(`--->属于 browse 范围: ${m}`):(console.warn(`--->不属于 browse 范围: ${m}`),d(false)),x.apply(history,arguments);};}$e(),Kt(),n();}function ol(t){if(location.hostname.includes("m-team"))return lr}var ll=$('<div class="switch-container svelte-18ntgfp"><div class="switch-background svelte-18ntgfp"><div class="switch-slider svelte-18ntgfp"></div></div></div>');function kt(t,e){let r=nt(e,"checked",12,false);function n(){r(!r());}var i=ll(),a=p(i),o=p(a);j(()=>Ue(o,"checked",r())),B("click",i,n),N(t,i);}var cl=$('<div class="config-menu-overlay svelte-ewpy9m"><div class="config-menu svelte-ewpy9m"><div class="config-menu-header svelte-ewpy9m"><span style="font-size: 18px; font-weight: bold;">配置菜单</span> <button class="close-btn svelte-ewpy9m">&times;</button></div> <div class="config-menu-content svelte-ewpy9m"><h3 class="svelte-ewpy9m"># 卡片布局</h3> <div class="config-item svelte-ewpy9m"><span> </span> <input type="range" min="200" step="1" list="values" class="svelte-ewpy9m"></div> <div class="config-item svelte-ewpy9m"><span> </span> <input type="range" step="1" list="values" class="svelte-ewpy9m"></div> <div class="config-item svelte-ewpy9m"><span> </span> <input type="range" min="0" max="100" step="1" list="values" class="svelte-ewpy9m"></div> <div class="config-item svelte-ewpy9m"><span> </span> <!></div> <h3 class="svelte-ewpy9m"># 卡片常驻信息展示</h3>  <div class="config-item svelte-ewpy9m"><span> </span> <!></div> <div class="config-item svelte-ewpy9m"><span> </span> <!></div> <div class="config-item svelte-ewpy9m"><span> </span> <!></div> <div class="config-item svelte-ewpy9m"><span> </span> <!></div> <div class="config-item svelte-ewpy9m"><span> </span> <!></div> <div class="config-item svelte-ewpy9m"><span> </span> <!></div> <div class="config-item svelte-ewpy9m"><span> </span> <!></div> <div class="config-item svelte-ewpy9m"><span> </span> <!></div> <div class="config-item svelte-ewpy9m"><span> </span> <!></div> <div class="config-item svelte-ewpy9m"><span> </span> <!></div> <h3 class="svelte-ewpy9m"># 卡片屏蔽</h3> <div class="config-item svelte-ewpy9m"><span> </span> <!></div></div></div></div>'),ul=$('<div class="flowP svelte-ewpy9m"><div class="flowPDragger svelte-ewpy9m" role="button" tabindex="0" aria-hidden="true"></div> <div class="flowPHolder ant-typography svelte-ewpy9m"><button class="flowBtn svelte-ewpy9m">切换显示</button> <button class="flowBtn svelte-ewpy9m">配置菜单</button> <button class="flowBtn svelte-ewpy9m">清除悬浮预览图</button> <button class="flowBtn svelte-ewpy9m">iframe</button> <button class="flowBtn svelte-ewpy9m">屏蔽 Gay</button></div></div> <!>',1);function vl(t,e){Qt(e,false);const[r,n]=Ie(),i=()=>lt($i,"$_panelPos",r),a=()=>lt(rr,"$_isFallView",r),o=()=>lt(Qe,"$_side_panel_switch",r),s=()=>lt(ye,"$_iframe_switch",r),u=()=>lt(Ur,"$_block_gay",r),l=()=>lt(Ke,"$_card_layout",r),f=()=>lt(Kn,"$_show_hover_pic",r),c=()=>lt(Lt,"$_card_detail",r);let v=J(),d=false,x=0,h=0;function C(H,tt,T){return H<=tt&&(H=tt),H>=T&&(H=T),H}const w=H=>{H.preventDefault(),d=true,x=H.clientX-_(v).getBoundingClientRect().left,h=H.clientY-_(v).getBoundingClientRect().top;},m=H=>{if(!d)return;const tt=C(H.clientX-x,0,window.innerWidth-(_(v).getBoundingClientRect().width+5)),T=C(H.clientY-h,0,window.innerHeight-(_(v).getBoundingClientRect().height+5));dt($i,{x:tt,y:T});},b=()=>{d=false;};yn(()=>(window.addEventListener("mousemove",m),window.addEventListener("mouseup",b),()=>{window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",b);})),$e();var M=ul();B("keydown",nr,H=>{H.key==="x"&&(dt(rr,!a()),window.changeFallView(a()));},true);var k=Dt(M),E=p(k),O=g(E,2),S=p(O),D=g(S,2),G=g(D,2),rt=g(G,2),et=g(rt,2);jt(k,H=>A(v,H),()=>_(v));var ut=g(k,2);{var Ft=H=>{var tt=cl(),T=p(tt),it=p(T),vt=g(p(it),2),wn=g(it,2),Oe=g(p(wn),2),De=p(Oe),Pe=p(De),Re=g(De,2),_r=g(Oe,2),Ve=p(_r),bn=p(Ve),le=g(Ve,2),pr=g(_r,2),hr=p(pr),ce=p(hr),gr=g(hr,2),mr=g(pr,2),yr=p(mr),wr=p(yr),xn=g(yr,2);kt(xn,{get checked(){return Si(),f()},set checked(F){dt(Kn,F);},$$legacy:true});var It=g(mr,4),He=p(It),br=p(He),xr=g(He,2);kt(xr,{get checked(){return c().category},set checked(F){mt(Lt,R(c).category=F,R(c));},$$legacy:true});var Fe=g(It,2),Cr=p(Fe),Er=p(Cr),Cn=g(Cr,2);kt(Cn,{get checked(){return c().title},set checked(F){mt(Lt,R(c).title=F,R(c));},$$legacy:true});var kr=g(Fe,2),ue=p(kr),Mr=p(ue),En=g(ue,2);kt(En,{get checked(){return c().topping},set checked(F){mt(Lt,R(c).topping=F,R(c));},$$legacy:true});var Jt=g(kr,2),ve=p(Jt),kn=p(ve),qe=g(ve,2);kt(qe,{get checked(){return c().free},set checked(F){mt(Lt,R(c).free=F,R(c));},$$legacy:true});var fe=g(Jt,2),Lr=p(fe),Nr=p(Lr),Mn=g(Lr,2);kt(Mn,{get checked(){return c().size},set checked(F){mt(Lt,R(c).size=F,R(c));},$$legacy:true});var Sr=g(fe,2),Be=p(Sr),Ln=p(Be),Tr=g(Be,2);kt(Tr,{get checked(){return c().sub_title},set checked(F){mt(Lt,R(c).sub_title=F,R(c));},$$legacy:true});var Ar=g(Sr,2),$r=p(Ar),Ir=p($r),Or=g($r,2);kt(Or,{get checked(){return c().tags},set checked(F){mt(Lt,R(c).tags=F,R(c));},$$legacy:true});var Ze=g(Ar,2),Dr=p(Ze),Nn=p(Dr),Pr=g(Dr,2);kt(Pr,{get checked(){return c().download_collect},set checked(F){mt(Lt,R(c).download_collect=F,R(c));},$$legacy:true});var ze=g(Ze,2),Rr=p(ze),Sn=p(Rr),Vr=g(Rr,2);kt(Vr,{get checked(){return c().upload_time},set checked(F){mt(Lt,R(c).upload_time=F,R(c));},$$legacy:true});var Ge=g(ze,2),Hr=p(Ge),Tn=p(Hr),Fr=g(Hr,2);kt(Fr,{get checked(){return c().statistics},set checked(F){mt(Lt,R(c).statistics=F,R(c));},$$legacy:true});var qr=g(Ge,4),Br=p(qr),An=p(Br),$n=g(Br,2);kt($n,{get checked(){return Si(),u()},set checked(F){dt(Ur,F);},$$legacy:true}),j((F,In,y,L)=>{I(T,"style",`background-color: ${F??""};`),V(Pe,`最小宽度: ${l().min??""} px`),I(Re,"max",In),V(bn,`最大宽度: ${l().max??""} px`),I(le,"min",y),I(le,"max",L),V(ce,`卡片间隔: ${l().gap??""} px`),V(wr,`显示鼠标悬浮预览大图: ${f()??""}`),V(br,`分区: ${c().category??""}`),V(Er,`标题: ${c().title??""}`),V(Mr,`置顶: ${c().topping??""}`),V(kn,`免费: ${c().free??""}`),V(Nr,`大小: ${c().size??""}`),V(Ln,`副标题: ${c().sub_title??""}`),V(Ir,`标签: ${c().tags??""}`),V(Nn,`下载&收藏: ${c().download_collect??""}`),V(Sn,`上传时间: ${c().upload_time??""}`),V(Tn,`评论/上传/下载: ${c().statistics??""}`),V(An,`屏蔽 gay 区: ${u()??""}`);},[()=>ol().get_bg_color(),()=>Math.max(400,l().max),()=>Math.min(200,l().min),()=>Math.max(800,l().min*2)],Ot),B("click",vt,()=>dt(Qe,false)),Rn(Re,()=>l().min,F=>mt(Ke,R(l).min=F,R(l))),Rn(le,()=>l().max,F=>mt(Ke,R(l).max=F,R(l))),Rn(gr,()=>l().gap,F=>mt(Ke,R(l).gap=F,R(l))),Ee(3,tt,()=>ke,()=>({duration:100})),B("click",tt,da(()=>dt(Qe,false))),N(H,tt);};q(ut,H=>{o()&&H(Ft);});}j(()=>{I(k,"style",`top:${i().y??""}px; left:${i().x??""}px;`),he(k,"--isFallView",a()?"#4ff74f":"yellow");}),B("mousedown",E,w),B("click",S,()=>{dt(rr,!a()),window.changeFallView(a());}),B("click",D,()=>{dt(Qe,!o());}),B("click",G,()=>{window.__clearPreview();}),B("click",rt,()=>{dt(ye,+!s());}),B("click",et,()=>{dt(Ur,!u());}),N(t,M),Kt(),n();}var fl=vi('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_iconCarrier"><circle cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="1.5"></circle><path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path></g></svg>');function dl(t){var e=fl();N(t,e);}var _l=$('<div id="_iframe" class="svelte-1axpxde"><div class="_iframe svelte-1axpxde"><iframe frameborder="0" style="width: 1000px;" class="svelte-1axpxde"></iframe> <div class="_iframeCloseBtn svelte-1axpxde"><!></div></div></div>');function pl(t,e){Qt(e,false);const[r,n]=Ie(),i=()=>lt(ye,"$_iframe_switch",r),a=()=>lt(ga,"$_iframe_url",r);let o=nt(e,"_app",8),s;function u(){dt(ye,0);}function l(d){d.key==="Escape"&&(console.log(d),dt(ye,0),dt(Qe,false));}s=true,s&&or(sl,{target:o()}),or(vl,{target:o()}),console.log("-------------->  PT_Fall Launch   <--------------"),$e();var f=me();B("keydown",nr,l,true);var c=Dt(f);{var v=d=>{var x=_l(),h=p(x),C=p(h),w=g(C,2),m=p(w);dl(m),j(()=>{I(C,"src",a()),I(C,"title",a());}),B("load",C,b=>{const M=b.target.contentDocument||b.target.contentWindow.document;if(!M){console.error("无法访问iframe内容文档, 可能是由于跨域限制。"),we.error("无法访问iframe内容文档, 可能是由于跨域限制。");return}const k=()=>{const O=M.querySelector(".ant-card.detail-view");O&&(O.scrollIntoView({behavior:"smooth"}),console.log("成功滚动到目标元素！"),clearInterval(E));},E=setInterval(k,500);k();}),B("click",C,er(b=>{b.stopPropagation();})),B("click",w,u),B("click",x,u),Ee(3,x,()=>ke,()=>({duration:300})),N(d,x);};q(c,d=>{i()&&d(v);});}N(t,f),Kt(),n();}const Jn=document.createElement("div");document.body.append(Jn);or(pl,{target:Jn,props:{_app:Jn}});

})();