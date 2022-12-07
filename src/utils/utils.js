// +----------------------------------------------------------------------
// | 全局工具方法
// +----------------------------------------------------------------------
// | date: 2022-12-02 14:35
// +----------------------------------------------------------------------
// | Author: 清晨 <1849003043@qq.com>
// +----------------------------------------------------------------------

import md5    from '@/utils/md5'
import config from '@/config/config'

let utils = {
    /**
     * 生成uuid
     *
     * @return
     *   [String] 返回uuid字符串
     */
    generateUUID:function(){
        let s 	      = [];
        let hexDigits = "0123456789abcdef";
        for (let i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4";
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
        s[8]  = s[13] = s[18] = s[23] = "-";
        
        return s.join("").replace(/-/g, "");
    },
    
    /**
     * 获取MD5加密后的值
     *
     * @param {String} value:需要加密的字符串
     *
     * @return
     *   [String] 加密后的字符串
     */
    getHexMd5Sign:function(value){
        return md5.hexMD5(value);
    },
    
    /**
     * 获取当前系统接口请求的加密值
     *
     * @param {String} appKey
     * @param {String} appSecret
     * @param {String} requestId
     *
     * @return
     *   [String] 处理加密后的字符串
     */
    getSystemRequestHexMd5Sign:function(appKey,appSecret,requestId){
        let that  = this;
        let value = appKey + "^" + appSecret + "^" + requestId;
        
        return that.getHexMd5Sign(value);
    },
    
    /**
     * 获取config文件的配置信息
     *
     * @param key
     * @returns {*}
     */
    getConfigInfo:function(key = ''){
        if(!key){
            return config;
        }
        
        return config[key];
    }
};

export default utils;