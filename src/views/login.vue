<template>
    <div class="login">
        <div class="left"></div>
        <div class="mid">
            <div class="logo">pivot</div>
            <input type="password" v-model="password">
            <button @click="login()">Login</button>
        </div>
        <div class="right"></div>
    </div>
</template>

<script>
export default {
    name: 'PivotLogin',

    data() {
        return {
            password: '',
        };
    },

    mounted() {
    },

    methods: {
        login() {
            if (this.password == this.$store.state.at()) {
                this.$store.state.login = true;
                this.$router.push('/home');
                this.$message('登录成功', 'success');
            } else {
                this.$message('登录失败', 'danger')
            }
        }
    },
};
</script>
<style lang="scss" scoped>
.login {
    display: flex;
    position: relative;

    >.left {
        width: 50%;
        height: 100%;
        background-image: linear-gradient(128deg, var(--color-login-bg-0), var(--color-login-bg-1));
    }

    >.right {
        width: 50%;
        height: 100%;
        background-image: linear-gradient(-128deg, var(--color-login-bg-0), var(--color-login-bg-1));
    }

    >.mid {
        position: absolute;
        min-width: 80%;
        min-height: 50%;
        max-width: 800px;
        max-height: 500px;
        background-color: var(--color-white);
        border-radius: 11px;
        box-shadow: 0 3px 7px var(--color-shadow);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        align-content: center;
        overflow: visible;
        gap: 20px 0;

        >.logo {
            position: absolute;
            top: -30%;
            width: 100%;
            text-align: center;
            padding-bottom: 100px;
            font-size: 48px;
            font-weight: bold;
            color: var(--color-white);
        }

        input {
            text-align: center;
            max-width: 80%;
        }
    }
}
</style>