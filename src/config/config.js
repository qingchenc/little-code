// +----------------------------------------------------------------------
// | 项目配置文件
// +----------------------------------------------------------------------
// | date: 2022-11-30 14:05
// +----------------------------------------------------------------------
// | Author: 清晨 <1849003043@qq.com>
// +----------------------------------------------------------------------

//开发环境的请求域名
let developmentDomainUrl = "https://saas.peck-life.cn/";

//配置信息
let config = {
    //请求的域名地址
    requestDomainUrl: developmentDomainUrl,
    //上传文件路径（url）
    uploadFileUrl: 'api/data/file/uploadSingle',
    uploadFileName: 'file',
    
    //为了验签的productId
    productSignId: 'PRODUCT_POWERBOS_CONSOLE',
    //验签post请求接口验签
    appKeySignPost: '2e6fe3b0e224cafa962a08012d03c72c',
    //验签post请求接口验签
    appSecretSignPost: '8302d339813121ee6cac250c1eb8a45e',
    
    //本app的产品id
    productId: 'PRODUCT_CRM_DESIGNER_APP',
    //本app的产品的post请求接口验签
    appKeyPost: '56fa0f2d2cbf9d3282b014625951e61b',
    //本app的产品的post请求接口验签
    appSecretPost: '25f821b55904654f35f8256fb12152ed',
    
    //系统get请求接口验签
    appKeyGet: '2e6fe3b0e224cafa962a08012d03c72c',
    //系统get请求接口验签
    appSecretGet: '8302d339813121ee6cac250c1eb8a45e',
    
    //是否直接刷新全局code
    //true：代表刷新整个系统的请求接口code，false：按照模块刷新code
    requestIsMain: true
};

export default config