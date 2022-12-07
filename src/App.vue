<template>
    <div id="app">
        <!--头部组件-->
        <Header></Header>
        <div class="content">
            <router-view />
        </div>
    </div>
</template>

<script type="text/javascript">
    import Header  from "./components/public/Header";

    export default {
        name: 'App',

        components:{
            Header
        },
    }
</script>

<style>
    @import "../static/css/common.css";
</style>
