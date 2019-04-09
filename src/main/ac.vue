<template>
    <div>
        <h1>这是ac组件</h1>
        <router-link to="/login">登录</router-link>
        <router-link to="/re">注册</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "ac"
    }
</script>

<style scoped lang="scss">
body{
    div{
        font-style: italic;
    }
}
</style>