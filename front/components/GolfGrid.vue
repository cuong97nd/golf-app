<script setup lang="ts">
import { data } from "../data";
const vip = [116, 134, 130, 124, 51, 97]
const golfs = data.filter(e => vip.includes(e.id));
</script>
<template>
    <section class="bg-light">
        <div class="container">
            <div class="text-center mb-2-3 mb-lg-6">
                <span class="section-title text-primary">Golf Course List</span>
                <h2 class="h1 mb-0 text-secondary">ゴルフ場一覧</h2>
            </div>
            <div class="row mt-n1-9">
                <div v-for="golf in golfs" class="col-md-6 col-lg-4 mt-1-9">
                    <article class="card card-style4 h-100">
                        <img :src="golf.cover" class="card-img-top" style="height: 177px;" alt="...">
                        
                        <div class="card-body position-relative pb-1-9 pb-lg-2-3 px-1-9 px-lg-2-3 pt-6">
                            <span class="bg-white text-secondary py-2 px-3">{{ golf.city }}</span>
                            <h3>
                                <NuxtLink :to="`/detail?id=${golf.id}`" class="font-weight-500">{{ golf.nameKana }}</NuxtLink>
                            </h3>
                            <p>{{ golf.describe.substring(0, 100)  }} ...</p>
                            <NuxtLink :to="`/detail?id=${golf.id}`" class="text-primary">もっと読む</NuxtLink>
                        </div>
                    </article>
                </div>
                
             
            </div>
        </div>
    </section>
</template>
