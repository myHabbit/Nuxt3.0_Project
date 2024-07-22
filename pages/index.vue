<template>
    <div class=" w-full h-full  bg-black  " style="overflow-x:hidden;">
        <!-- 头部 -->
        <header class=" w-full  h-16 flex  justify-between items-center px-8 py-3 ">
            <div class=" mr-6">
                <img src="https://uiverse.io/build/_assets/logo-png-XGWSYHKJ.png" alt="" class=" w-20 h-6 relative top-1 ">
            </div>
            <nav class=" flex-1 flex justify-between">
                <ul class=" flex justify-start flex-1 items-center max-[750px]:hidden">
                    <li @click="active = 1" :class="active === 1 ? 'active' : ''"
                        class="navLi bg-slate-950 px-6 py-2 font-bold rounded-md relative text-sm  cursor-pointer text-white ">
                        <Nuxt-link to="/elements"> ELements</Nuxt-link>
                    </li>
                    <li @click="active = 2" :class="active === 2 ? 'active' : ''"
                        class="navLi  bg-slate-950 px-4 py-2  font-bold  rounded-md relative text-sm  cursor-pointer text-white ml-4">
                        Challenges</li>
                    <li @click="active = 3" :class="active === 3 ? 'active' : ''"
                        class="navLi  bg-slate-950 px-4 py-2  font-bold rounded-md relative text-sm  cursor-pointer text-white ml-4">
                        Spotlight</li>
                </ul>
                <div class="min-[750px]:hidden">
                    <div class="flex items-center" @click="drawer = true">
                        <Icon name="ep:menu" size="23" style="color: white;" />
                    </div>
                    <el-drawer v-model="drawer" title="I am the title" :with-header="false"
                        style="background-color: black; border-left: 1px solid rgba(255 , 255, 255,.2); !important ">
                        <ul class=" flex justify-start w-full flex-col  items-center ">
                            <li @click="active = 1" :class="active === 1 ? 'active' : ''"
                                class="navLi w-full text-center px-6 py-2 font-bold rounded-md relative text-sm  cursor-pointer text-white ">
                                <Nuxt-link to="/elements"> ELements</Nuxt-link>
                            </li>
                            <li @click="active = 2" :class="active === 2 ? 'active' : ''"
                                class="navLi  w-full text-center  px-4 py-2  font-bold  rounded-md relative text-sm  cursor-pointer text-white ">
                                Challenges</li>
                            <li @click="active = 3" :class="active === 3 ? 'active' : ''"
                                class="navLi w-full text-center  px-4 py-2  font-bold rounded-md relative text-sm  cursor-pointer text-white ">
                                Spotlight</li>
                        </ul>
                    </el-drawer>
                </div>
                <div class=" flex-1 flex justify-end items-center max-[610px]:hidden ">
                    <div class="pyramid-loader">
                        <div class="wrapper">
                            <span class="side side1"></span>
                            <span class="side side2"></span>
                            <span class="side side3"></span>
                            <span class="side side4"></span>
                            <span class="shadow"></span>
                        </div>
                    </div>
                    <div v-if="token === ''"
                        class=" text-base font-bold text-white px-4 py-2.5 rounded-xl cursor-pointer font-sans flex items-centerfont-semibold transition-colors duration-200 hover:bg-dark-500  h-[42px]  truncate text-clip  max-[950px]:hidden "
                        style="background-color:rgba(33, 33, 33, .8);" @click="toLoginHandler">
                        Sign In or Create Account
                    </div>
                    <div v-else class=" py-2.5 flex items-center">
                        <div class="bellOutline text-white flex items-center ">
                            <Icon name="teenyicons:bell-outline" class=" text-xl"></Icon>
                        </div>
                        <el-dropdown trigger="click">
                            <el-button type="primary">
                                <Icon style="font-size: 20px;margin-right: 4px;" name="ri:arrow-down-s-line"></Icon>
                                JoyfulWei <span></span>
                            </el-button>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item>Your Profile</el-dropdown-item>
                                    <el-dropdown-item>Send feedback</el-dropdown-item>
                                    <el-dropdown-item @click="logoutHandler">Log out</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </div>
                </div>
            </nav>
        </header>
        <div>
            <NuxtPage />
        </div>
        <!-- 底部 -->
        <Footer />
    </div>
</template>

<script lang="ts" setup>
const active: Ref<number> = ref(1)
import { piniaStore } from '~/store/index';
const router = useRouter()
const drawer = ref(false)
const store = piniaStore()
const token: Ref<string> = ref('')
onMounted(() => {
    token.value = localStorage.getItem('token') as string
})
// 路由中间件
definePageMeta({
    middleware: ['redirect-to']
})
// 登录
const toLoginHandler = () => {
    token.value = localStorage.getItem('token') as string
    if (token.value) {
    } else {
        router.push('/login')
    }
}
// 注销
const logoutHandler = () => {
    ElMessage.success('注销成功')
    localStorage.removeItem('token')
    store.deleteToken()
    setTimeout(() => {
        router.push('/login')
    }, 200);
}
</script>

<style scoped lang="less">
.pyramid-loader {
    position: relative;
    width: 200px;
    height: 40%;
    display: block;
    transform-style: preserve-3d;
    transform: rotateX(-20deg);
}

.wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    animation: spin 4s linear infinite;
    top: 2px;
}

@keyframes spin {
    100% {
        transform: rotateY(360deg);
    }
}

.pyramid-loader .wrapper .side {
    width: 70px;
    height: 62px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transform-origin: center top;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.pyramid-loader .wrapper .side1 {
    transform: rotateZ(-30deg) rotateY(90deg);
    background: conic-gradient(#2BDEAC, #F028FD, #D8CCE6, #2F2585);
}

.pyramid-loader .wrapper .side2 {
    transform: rotateZ(30deg) rotateY(90deg);
    background: conic-gradient(#2F2585, #D8CCE6, #F028FD, #2BDEAC);
}

.pyramid-loader .wrapper .side3 {
    transform: rotateX(30deg);
    background: conic-gradient(#2F2585, #D8CCE6, #F028FD, #2BDEAC);
}

.pyramid-loader .wrapper .side4 {
    transform: rotateX(-30deg);
    background: conic-gradient(#2BDEAC, #F028FD, #D8CCE6, #2F2585);
}

.pyramid-loader .wrapper .shadow {
    width: 60px;
    height: 60px;
    background: #8B5AD5;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transform: rotateX(90deg) translateZ(-40px);
    filter: blur(12px);
}

.navLi,
.asidLi {
    &:hover {
        background-color: rgba(33, 33, 33, .9);
    }
}

// 顶部高亮样式
.active {
    background-color: rgba(33, 33, 33, .9);
}

:deep(.el-drawer__body) {
    padding-left: 0;
    padding-right: 0;
}

:deep(.el-dropdown) {
    width: 100%;
    height: 100%;

    .el-button {
        background-color: black;
        font-weight: 700;
        font-size: 18px;
        border: none;
        padding: 20px 18px;

        &:hover {
            background-color: rgba(33, 33, 33, .9);
        }
    }

}

.bellOutline {
    padding: 12px;
    cursor: pointer;
    margin-right: 8px;

    &:hover {
        background-color: rgba(33, 33, 33, .9);
        border-radius: 10px;
    }
}


:global(.el-dropdown__popper.el-popper) {
    position: absolute;
    inset: 56px auto auto 1718px;
    width: 162px;
    height: auto;
    padding: 4px;
    transition: all .3s;
}

:global(.el-dropdown__popper.el-popper) {
    background-color: rgba(33, 33, 33, .9);
    border: none;
}

:global(.el-scrollbar__view) {
    height: 100%;
}

:global(.el-dropdown__popper.el-popper[data-popper-placement^=bottom] .el-popper__arrow:before) {
    background-color: rgba(33, 33, 33, .9);
    border: none;
}

:global(.el-dropdown-menu) {
    background-color: transparent;
    padding: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 100%;
}

:global(.el-dropdown-menu__item) {
    color: #d1d5db;
    flex: 1;
    border-radius: 4px;
    font-weight: bold;
    padding-top: 4px;
}

:global(.el-dropdown-menu__item:not(.is-disabled):hover) {
    background-color: #5764f0;
    color: white;
}

:global(.el-dropdown-menu__item:not(.is-disabled):focus) {
    background-color: #5764f0;
    color: white;
}
</style>