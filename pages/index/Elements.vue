<template>
    <div class=" w-full  bg-black border-b-2  rounded-b-[60px] shadow-[rgba(0,_0,_0,_0.1)_0px_20px_25px_-5px,_rgba(0,_0,_0,_0.04)_0px_10px_10px_-5px]  mb-12 "
        style="border-color: rgb(53 53 53)">
        <!-- 内容 -->
        <div class=" w-full px-5 flex ">
            <div class=" w-52 h-[calc(100vh_-_66px)] sticky  mr-4 pt-7 overflow-auto -top-3">
                <aside>
                    <ul class="w-full">
                        <li @click="toggleHandler(item.id)" :class="asideToggle === item.id ? 'active' : ''"
                            class="asidLi text-white w-full h-11 cursor-pointer font-bold flex items-center py-2.5 rounded-lg px-4 mb-1"
                            v-for="item in  asideList " :key="item.id">{{ item.title }}</li>
                    </ul>
                </aside>
            </div>
            <div class="flex-1">
                <main class=" text-white ">
                    <div class="mt-9 mr-10 max-md:mb-2.5">
                        <h1 class="mb-1 text-3xl font-bold">Browse all</h1>
                        <p class="text-gray-400 pb-2.5 leading-6">Open-Source UI elements made with CSS or Tailwind</p>
                    </div>
                    <div class="w-full pt-3.5 pb-2.5">
                        <div
                            class="titleNav w-full items-center justify-between hidden gap-2 filters max-lg:items-end lg:flex">
                            <div class=" text-gray-400 page text-sm whitespace-nowrap">First page</div>
                            <div class="flex-1"></div>
                            <div class="flex flex-2">
                                <div class="flex items-center max-[1650px]:hidden">
                                    <div
                                        class="flex items-center px-3 py-2 hover:bg-dark-600 rounded-lg cursor-pointer text-gray-300">
                                        #neumorphism</div>
                                    <div
                                        class="flex items-center px-3 py-2 hover:bg-dark-600 rounded-lg cursor-pointer text-gray-300">
                                        #3d</div>
                                    <div
                                        class="flex items-center px-3 py-2 hover:bg-dark-600 rounded-lg cursor-pointer text-gray-300">
                                        #gradient</div>
                                </div>
                                <div class="flex">
                                    <div
                                        class=" flex items-center cursor-pointer py-2 px-2.5 font-semibold gap-2 rounded-lg text-gray-200">
                                        All</div>
                                    <div
                                        class=" flex items-center cursor-pointer py-2 px-2.5 font-semibold gap-2 hover:bg-dark-600 rounded-lg text-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33"
                                            class="h-5 w-5 mr-1">
                                            <g clip-path="url(#prefix__clip0)">
                                                <path fill="#38bdf8" fill-rule="evenodd"
                                                    d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                                                    clip-rule="evenodd"></path>
                                            </g>
                                            <defs>
                                                <clipPath id="prefix__clip0">
                                                    <path fill="#fff" d="M0 0h54v32.4H0z"></path>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <span>Tailwind</span>
                                    </div>
                                    <div
                                        class=" flex items-center cursor-pointer py-2 px-2.5 font-semibold gap-2 hover:bg-dark-600 rounded-lg text-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                            class="text-blue-600 w-5 h-5">
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path fill="currentColor"
                                                d="M5 3l-.65 3.34h13.59L17.5 8.5H3.92l-.66 3.33h13.59l-.76 3.81-5.48 1.81-4.75-1.81.33-1.64H2.85l-.79 4 7.85 3 9.05-3 1.2-6.03.24-1.21L21.94 3z">
                                            </path>
                                        </svg>
                                        <span>CSS</span>
                                    </div>
                                </div>
                                <div class=" relative">
                                    <button
                                        class="text-gray-100 capitalize font-semibold h-[40px] text-sm dropdown-trigger px-3 py-2  rounded-lg flex items-center justify-center bg-dark-600"><span
                                            class="block mr-1 icon"><svg xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round"
                                                stroke-linejoin="round" stroke-width="2"
                                                class="block w-4 h-4 mr-1 translate-y-[-1px]">
                                                <path
                                                    d="M20 4H4v2.586a1 1 0 0 0 .293.707l5.414 5.414a1 1 0 0 1 .293.707V18l4 3v-7.586a1 1 0 0 1 .293-.707l5.414-5.414A1 1 0 0 0 20 6.586V4Z">
                                                </path>
                                            </svg></span><span class="pr-1 text-gray-300">Sort: </span>Randomized<svg
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                            class="w-4 h-4 ml-[3px]">
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path fill="currentColor"
                                                d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                                        </svg></button>
                                </div>
                                <div class=" relative">
                                    <button
                                        class="text-gray-100 capitalize font-semibold h-[40px] text-sm dropdown-trigger px-3 py-2  rounded-lg flex items-center justify-center">Any
                                        theme<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                                            height="24" class="w-4 h-4 ml-[3px]">
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path fill="currentColor"
                                                d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                                        </svg></button>
                                </div>
                                <div class="active flex items-center rounded-lg max-[1060px]:hidden">
                                    <form
                                        class="flex ml-2 items-center  focus-visible:ring-sky-400 focus-visible:border-sky-400">
                                        <input
                                            class=" border-none bg-inherit rounded-l-lg placeholder:text-gray-400 placeholder:text-sm pr-4 pl-1"
                                            style="background-color: rgba(33, 33, 33, .6);" type="text"
                                            placeholder="Search tags, users, posts...">
                                        <button type="submit" @click.prevent="SearchHandler"
                                            class="cursor-pointer text-sm text-offwhite rounded-r-lg border-none h-[40px] px-4 py-2 font-sans font-semibold"
                                            style="background-color: rgb(44, 44, 44);">Search</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" min-h-[1000px]">

                    </div>
                </main>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
// 侧边栏数组
const asideList: Ref<{ id: number, title: string }[]> = ref([
    { id: 1, title: 'All' },
    { id: 2, title: 'Buttons' },
    { id: 3, title: 'Checkboxes' },
    { id: 4, title: 'Toggle switches' },
    { id: 5, title: 'Cards' },
    { id: 6, title: 'loaders' },
    { id: 7, title: 'Inputs' },
    { id: 8, title: 'Radio buttons' },
    { id: 9, title: 'Forms' },
    { id: 10, title: 'Patterns' },
    { id: 11, title: 'Tooltips' },
])
// 侧边栏切换样式
const asideToggle: Ref<number> = ref(1)
// 侧边栏点击函数
const toggleHandler = (id: number): void => {
    asideToggle.value = id
}
// 搜索点击函数
const SearchHandler = () => {

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

@media (max-width: 1650px) {
    .pyramid-loader {
        width: 100px;
        height: 100px;
    }
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
</style>
