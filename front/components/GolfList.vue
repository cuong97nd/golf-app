<script setup lang="ts">
import { data } from "../data";
const currentRoute = useRouter().currentRoute;

watch(currentRoute, () => {
    window.scrollTo({ top: 0, behavior: "instant" });
})

const itemsPerPage = 6;
const paginatedItems = computed(() => {
    const currentPage = currentRoute.value.query.currentPage ?? 1;
    const startIndex = (parseInt(currentPage as string) - 1) * itemsPerPage;
    const endIndex = parseInt(currentPage as string) * itemsPerPage;

    return data.filter(e => currentRoute.value.query.categories ? e.city === currentRoute.value.query.categories : true).slice(startIndex, endIndex);
})

</script>
<template>
    <section class="bg-light">
        <div class="container">
            <div class="row mt-n1-9">
                <div class="col-lg-8 mt-1-9">
                    <div class="row">
                        <div v-for="golf in paginatedItems" class="col-lg-12 mt-1-9">
                            <article class="card card-style4 h-100">
                                <img :src="golf.cover" class="card-img-top" alt="...">
                                <div class="card-body position-relative pb-1-9 pb-lg-2-3 px-1-9 px-lg-2-3 pt-6">
                                    <span class="bg-white text-secondary py-2 px-3">{{ golf.city }}</span>
                                    <h3 class="h2">
                                        <NuxtLink :to="`/detail?id=${golf.id}`" class="font-weight-500">{{ golf.nameKana }}
                                        </NuxtLink>
                                    </h3>
                                    <p>{{ golf.describe }}</p>
                                    <div class="flex justify-end">
                                        <div class=" text-end font-bold">料金 <br> {{
                                            golf.giaNgayThuong.toLocaleString('vi-VN') }}ドン</div>
                                    </div>
                                    <NuxtLink :to="`/detail?id=${golf.id}`" class="text-primary">もっと読む </NuxtLink>
                                </div>
                            </article>
                        </div>
                    </div>
                    <nav v-if="!currentRoute.query.categories" aria-label="Page navigation example">
                        <ul class="pagination mt-5">
                            <li class="page-item"><a class="page-link" href="#!">前</a></li>
                            <li v-for="i in Math.ceil(data.length / itemsPerPage)" class="page-item">
                                <NuxtLink class="page-link" :to="`/list?currentPage=${i}`">{{ i }}</NuxtLink>
                            </li>
                            <li class="page-item"><a class="page-link" href="#!">次</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="col-lg-4 ps-lg-5 mt-1-9">
                    <div class="sidebar">
                        <!-- <div class="widget search-box mb-4 p-4">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="">
                                <div class="input-group-append">
                                    <button class="main-btn" type="button"><i class="fa fa-search"></i></button>
                                </div>
                            </div>
                        </div> -->

                        <Categories></Categories>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
@import '@/assets/css/golf-list-plugins.css';
@import '@/assets/css/golf-list-base.css';
@import '@/assets/css/golf-list-search.css';
@import '@/assets/css/golf-list-styles.css';
</style>