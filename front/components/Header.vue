
<script setup lang="ts">
function contact() {
    document.getElementById('contact')?.scrollIntoView({
        behavior: 'smooth'
    });
}
const togge = ref(false)
onMounted(() => {
    if (process.client) {
        resizeHandel()

        window.addEventListener('resize', () => {
            resizeHandel()
        })
    }
})

function resizeHandel() {
    if (window.innerWidth > 900) {
        togge.value = true
    } else {
        togge.value = false
    };
}
</script>
<template>
    <header class="header-style2 scrollHeader">

        <div class="navbar-default">

            <!-- start top search -->
            <!-- end top search -->
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-12 col-lg-12">
                        <div class="menu_area">
                            <nav class="navbar navbar-expand-lg navbar-light p-0 current">

                                <div class="navbar-header navbar-header-custom">
                                    <!-- start logo -->
                                    <NuxtLink to="/" class="navbar-brand logodefault"><img id="logo" :src="'/logo1.png'"
                                            alt="logo"></NuxtLink>
                                    <!-- end logo -->
                                </div>

                                <div class="navbar-toggler" @click="togge = !togge"></div>

                                <!-- menu area -->
                                <ul class="navbar-nav ms-auto" :style="{ 'display': togge ? 'block' : 'none' }" id="nav"
                                    style="">
                                    <li @click="togge = false; resizeHandel()">
                                        <NuxtLink to="/">ホーム</NuxtLink>
                                    </li>
                                    <li @click="togge = false; resizeHandel()">
                                        <NuxtLink to="/list">ゴルフ場一覧</NuxtLink>
                                    </li>

                                    <li class="active"><a @click="contact(); togge = false; resizeHandel()" href="#!"
                                            onclick="return false;">コンタクト</a></li>
                                </ul>
                                <!-- end menu area -->
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </header>
</template>