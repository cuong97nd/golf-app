<script setup lang="ts">
import { data } from "../data";
const golfCourses = data;
const cityCount :{ [key: string]: number }= {};

// 配列をループして都市の数を数える
for (const course of golfCourses) {
    const city = course.city;
    if (city) {
        if (cityCount[city]) {
            cityCount[city]++;
        } else {
            cityCount[city] = 1;
        }
    }
}
</script>

<template>
    <div class="widget mb-4 p-4 mt-5">
        <div class="mb-4">
            <span class="section-title text-primary mb-0">Categories</span>
        </div>
        <ul class="list-style2 list-unstyled mb-0 ps-0">
            <li v-for="( count, city) in cityCount"><NuxtLink :to="`/list?categories=${city}`">{{ city }} <span class="float-end">({{ count }})</span></NuxtLink></li>
        </ul>
    </div>
</template>
