<script setup lang="ts">
// import { PrismaClient } from '@prisma/client';

// const data = await useAsyncData('usersadasdads', async () => {
//     // await prisma.user.create({
//     //     data: {
//     //         email: "ádadasd@ádasd.com"
//     //     }
//     // })
//     const prisma = new PrismaClient();

//     const user = await prisma.user.findMany()
//     console.log("user");

//     return user;
// })

// console.log(data.status)
</script>


<template>
    <Header />
    <div class="h-[90px]"></div>
    <Service1 />
    <Service />
    <AboutUs />
    <GolfGrid></GolfGrid>
    <Contact />
    <Footer />
</template>
  