<template>
    <div id="app">
        <transition
            name="fade"
            mode="out-in"
            @beforeLeave="beforeLeave"
            @enter="enter"
            @afterEnter="afterEnter"
        >
            <router-view/>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                prevHeight: 0,
            };
        },
        methods: {
            beforeLeave(element) {
                this.prevHeight = getComputedStyle(element).height;
            },
            enter(element) {
                const { height } = getComputedStyle(element);

                element.style.height = this.prevHeight;

                setTimeout(() => {
                element.style.height = height;
                });
            },
            afterEnter(element) {
                element.style.height = 'auto';
            },
        },
    };
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        width: 100%;
        height: 100%;
    }
    .fade-enter-active,
    .fade-leave-active {
        transition-duration: 0.3s;
        transition-property: height, opacity;
        transition-timing-function: ease;
        overflow: hidden;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }
</style>
