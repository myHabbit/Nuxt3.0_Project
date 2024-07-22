<template>
    <div class="w-full h-full bg-slate-800 ">
        <div class="w-full min-h-96  flex justify-center pt-60 px-10" style="min-width: 256px;">
            <!-- 登录 -->
            <form v-if="isLogin" class="form w-96  h-80" @submit.prevent="loginHandler">
                <p class="form-title pb-2">Sign in to your account</p>
                <div class="input-container w-full pb-2">
                    <input placeholder="Enter email" type="email" v-model="userInfo.email" class=" w-full">
                    <span>
                        <svg @click="userInfo.email.includes('@') ? '' : userInfo.email += '@'" class=" cursor-pointer"
                            stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
                        </svg>
                    </span>
                </div>
                <div class="input-container pb-2">
                    <input placeholder="Enter password" :type="showPassword ? 'text' : 'password'"
                        v-model.trim="userInfo.password" class=" w-full">
                    <span>
                        <svg class=" cursor-pointer" @click="showPassword = !showPassword" stroke="currentColor"
                            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke-width="2" stroke-linejoin="round"
                                stroke-linecap="round">
                            </path>
                            <path
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
                        </svg>
                    </span>
                </div>
                <button class="submit" type="submit">
                    Sign in
                </button>
                <p class="signup-link pt-2">
                    No account?
                    <a href="" @click.prevent=" isLogin = !isLogin">Sign up</a>
                </p>
            </form>

            <!-- 注册 -->
            <form v-else class="form w-96" style="height: 26rem;" @submit.prevent="loginHandler">
                <p class="form-title pb-2">Song in to your account</p>
                <div class="input-container w-full pb-2">
                    <input placeholder="Enter email" type="email" v-model="userInfo.email" class=" w-full">
                    <span>
                        <svg @click="userInfo.email.includes('@') ? '' : userInfo.email += '@'" class=" cursor-pointer"
                            stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
                        </svg>
                    </span>
                </div>
                <div class="input-container pb-2">
                    <input placeholder="Enter password" :type="showPassword ? 'text' : 'password'"
                        v-model.trim="userInfo.password" class=" w-full">
                    <span>
                        <svg class=" cursor-pointer" @click="showPassword = !showPassword" stroke="currentColor"
                            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke-width="2" stroke-linejoin="round"
                                stroke-linecap="round">
                            </path>
                            <path
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
                        </svg>
                    </span>
                </div>
                <div class="input-container pb-2">
                    <input placeholder="Enter password" :type="showPassword ? 'text' : 'password'"
                        v-model.trim="userInfo.password2" class=" w-full">
                    <span>
                        <svg class=" cursor-pointer" @click="showPassword = !showPassword" stroke="currentColor"
                            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke-width="2" stroke-linejoin="round"
                                stroke-linecap="round">
                            </path>
                            <path
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
                        </svg>
                    </span>
                </div>
                <button class="submit" type="submit" @click="logonHandler">
                    Sogn in
                </button>
                <p class="signup-link pt-2">
                    Yes account?
                    <a href="" @click.prevent="isLogin = !isLogin">Sogn up</a>
                </p>
            </form>

        </div>
    </div>
</template>

<script lang="ts" setup>
import {piniaStore} from '~/store/index';
const store = piniaStore()
// 定义登录的数据
const userInfo: Ref<{ email: string, password: string, password2?: string }> = ref({
    email: '',
    password: '',
    password2: ''
})

// 控制小眼睛看见输入文本
const showPassword: Ref<boolean> = ref(false)
// 切换登录注册
const isLogin: Ref<boolean> = ref(true)
// 登录处理函数
const loginHandler = () => {
    const { email, password } = JSON.parse(localStorage.getItem('userinfo') as string)
    if (userInfo.value.email === email.trim() && userInfo.value.password === password.trim()) {
        $fetch('http://localhost:3000/api/login', {
            method: 'post',
            body: {
                email: userInfo.value.email,
                password: userInfo.value.password
            }
        }).then((res: any) => {
            const { token } = res
            if (token) {
                localStorage.setItem('token', token)
                store.setToken(token)
                ElMessage.success('登陆成功')
                // // router.push('/')
                setTimeout(() => {
                    navigateTo('/')
                }, 300);
            } else {
                ElMessage.error('登陆失败,请检查邮箱或密码')
            }
        })

    } else {
        ElMessage.error('信息错误,请重新输入')
        userInfo.value = { email: '', password: '' }
    }
}

// 注册按钮逻辑
const logonHandler = (): void => {
    if (userInfo.value.email && userInfo.value.password === userInfo.value.password2) {
        ElMessage.success('注册成功,请登录')
        isLogin.value = !isLogin.value
        localStorage.setItem('userinfo', JSON.stringify(userInfo.value))
    } else {
        ElMessage.error('信息错误,请重新输入')
        userInfo.value = { email: '', password: '', password2: '' }
    }
}
</script>

<style scoped lang="less">
.form {
    background-color: #fff;
    display: block;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.form-title {
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 600;
    text-align: center;
    color: #000;
}

.input-container {
    position: relative;
}

.input-container input,
.form button {
    outline: none;
    border: 1px solid #e5e7eb;
    margin: 8px 0;
}

.input-container input {
    background-color: #fff;
    padding: 1rem;
    padding-right: 3rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    // width: 300px;
    border-radius: 0.5rem;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.input-container span {
    display: grid;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    padding-left: 1rem;
    padding-right: 1rem;
    place-content: center;
}

.input-container span svg {
    color: #9CA3AF;
    width: 1rem;
    height: 1rem;
}

.submit {
    display: block;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    background-color: #4F46E5;
    color: #ffffff;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    width: 100%;
    border-radius: 0.5rem;
    text-transform: uppercase;
}

.signup-link {
    color: #6B7280;
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-align: center;
}

.signup-link a {
    text-decoration: underline;
}
</style>