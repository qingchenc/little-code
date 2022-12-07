<!--
+----------------------------------------------------------------------
| 配置组件-上传图片
+----------------------------------------------------------------------
| date: 2022-11-28 17:37
+----------------------------------------------------------------------
| Author: 清晨 <1849003043@qq.com>
+----------------------------------------------------------------------
| GitHub: https://github.com/shenshulong
+----------------------------------------------------------------------
-->

<template>
    <config-item :label='label'>
        <el-upload v-model="mValue" v-bind="mOptions" :action="uploadUrl" :name="uploadName" :data="uploadData" :show-file-list="false" list-type="picture-card" :on-progress="onProgress" :on-success="onSuccess">
            <i v-if="!fileUrl" class="el-icon-plus"></i>
            <img v-else class="upload-image" :src="fileUrl" alt="加载失败" />
        </el-upload>
    </config-item>
</template>

<script type="text/javascript">
    import schemaMixin from "@/mixin/schemaMixin";

    export default {
        name: "SchemaUpload",

        mixins: [schemaMixin],

        data () {
            return {
                uploadUrl: '',
                uploadName: '',
                uploadData: {},
                fileId: '',
                fileUrl: ''
            }
        },

        watch: {
            // fileUrl: {
            //     immediate: true,
            //     deep: true,
            //     handler(newVal,oldVal) {
            //         this.mValue = this.newVal;
            //     }
            // }

            fileUrl(newValue, oldValue) {
                if (newValue) {
                    this.mValue = newValue;
                }
            }
        },

        mounted:function(){
            let that         = this;
            let configInfo   = that.$util.getConfigInfo();
            let requestId 	 = that.$util.generateUUID();
            let signGet 	 = that.$util.getSystemRequestHexMd5Sign(configInfo.appKeyGet,configInfo.appSecretGet,requestId);

            that.uploadUrl  = configInfo.requestDomainUrl+configInfo.uploadFileUrl+'/'+requestId+'/'+signGet
            that.uploadName = configInfo.uploadFileName;
        },

        methods: {
            /**
             * 文件上传中的回调函数
             *
             * @param e
             */
            onProgress:function(e){
                // console.log(e);
            },

            /**
             * 文件上传成功的回调函数
             *
             * @param e
             */
            onSuccess:function(e){
                let that = this;

                if(e){
                    let uploadFileInfo = e.data;

                    // that.mValue  = that.fileUrl;
                    that.fileId  = uploadFileInfo.file;
                    that.fileUrl = uploadFileInfo._file_json.url;
                }
            }
        }
    };
</script>