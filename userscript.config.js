/**
 * 油猴头信息
 */
// NOTE: 经常修改这里就行了
export let version = '0.3.6';

export function config(mode) {
  console.log('<-------------------------- [userscript.config.js]');
  console.log('环境mode:\t' + mode);
  console.log('<-------------------------- [userscript.config.js]');

  return {
    version,
    name: {
      '': 'PT瀑布流视图' + (mode == 'development' ? `[测试]` : ''),
      en: 'PT_Fall-View' + (mode == 'development' ? `[test]` : '')
    },
    icon: 'https://avatars.githubusercontent.com/u/23617963',
    // namespace: 'https://github.com/KesaubeEire/PT_Masonry_View_Svelte',
    description: {
      '': 'PT瀑布流视图(2025重构)',
      en: 'PT Fall/Masonry View (restructured 2025)'
    },
    author: 'Kesa',
    match: [
      // 暂不考虑其他站点
      // 'https://kamept.com/*',
      // "https://pterclub.com/*",

      // M-Team
      'https://kp.m-team.cc/*',
      'https://zp.m-team.io/*',
      'https://xp.m-team.cc/*',
      'https://ap.m-team.cc/*',
      'https://next.m-team.cc/*',
      // 江苏专用
      'https://xp.m-team.io/*',
      // 测试站
      'https://test2.m-team.cc/*',
      // M-Team 旧风格域名
      'https://ob.m-team.cc/*'
    ],
    exclude: [
      // np
      '*/offers.php*',
      '*/index.php*',
      '*/forums.php*',
      '*/viewrequests.php*',
      '*/seek.php*',

      // M-Team
      '*m-team*/detail/*',
      '*m-team*/showcase*',
      '*m-team*/showcaseDetail*'
    ],

    // 暂时弃用这个设计, 可能没啥用还容易导致 bug
    // "run-at": "document-start",
    // "run-at": "document-idle",

    grant: 'none',
    license: 'MIT'
  };
}
