/**
 * 站点配置封装入口
 */

import { CONFIG as CONFIG_MTeam } from './mteam';

/** 根据域名判断是哪个站点 */
export function getSiteConfig(domain) {
  if (location.hostname.includes('m-team')) {
    return CONFIG_MTeam;
  }
}
