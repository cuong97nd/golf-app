<script setup lang="ts">
import { data } from "../data";

const router = useRouter()
const golf = data.find(e => e.id.toString() === router.currentRoute.value.query.id)!
</script>
<template>
    <section class="bg-light">
        <div class="container">
            <div class="row mt-n1-9">
                <div class="col-lg-8 mt-1-9">
                    <div class="row">
                        <div class="col-lg-12 mb-6">
                            <article class="card card-style1 border-0">
                                <img :src="golf.cover" class="card-img-top" alt="...">
                                <div class="card-body p-1-9 p-lg-2-3">
                                    <ul class="list-unstyled">
                                        <li class="d-inline-block me-4">
                                            <div class="media">
                                                <a href="#!" class="font-weight-500 text-dark">
                                                    <i class="far fa-calendar-check me-1 text-primary"></i> {{ golf.city }}
                                                </a>
                                            </div>
                                        </li>

                                    </ul>
                                    <h2>{{ golf.nameKana }}</h2>
                                    <h5>料金</h5>
                                    <p>平日の料：<strong>{{ golf.giaNgayThuong.toLocaleString('vi-VN') }}</strong>ドン<br>
                                        週末の料：<strong>{{ (golf.giaNgayCuoiTuan ?? golf.giaNgayThuong).toLocaleString('vi-VN')
                                        }}</strong>ドン<br>
                                        祝日の料：<strong>{{ (golf.giaNgayLe ?? golf.giaNgayThuong).toLocaleString('vi-VN') }}</strong>ドン</p>

                                    <h5>ゴルフ場紹介</h5>
                                    <p class="mb-4">
                                        {{ golf.describe }}
                                    </p>
                                    <h5>住所</h5>
                                    <p class="mb-4">
                                        {{ golf.address }}
                                    </p>
                                    <h5>ホームページ（自社）URL</h5>
                                    <a class="mb-4" :href="golf.aboutUsUrl" target="_blank">
                                        {{ golf.aboutUsUrl }}
                                    </a>
                                    <h5 class="mt-4">評価</h5>
                                    <div class="flex items-center space-x-1">
                                        <svg class="w-4 h-4 " :class="golf.star >= 1 ? 'text-yellow-300' : 'text-gray-300'"
                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                            viewBox="0 0 22 20">
                                            <path
                                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg class="w-4 h-4 " :class="golf.star >= 2 ? 'text-yellow-300' : 'text-gray-300'"
                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                            viewBox="0 0 22 20">
                                            <path
                                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg class="w-4 h-4 " :class="golf.star >= 3 ? 'text-yellow-300' : 'text-gray-300'"
                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                            viewBox="0 0 22 20">
                                            <path
                                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg class="w-4 h-4 " :class="golf.star >= 4 ? 'text-yellow-300' : 'text-gray-300'"
                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                            viewBox="0 0 22 20">
                                            <path
                                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg class="w-4 h-4 " :class="golf.star >= 5 ? 'text-yellow-300' : 'text-gray-300'"
                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                            viewBox="0 0 22 20">
                                            <path
                                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                    </div>

                                </div>
                            </article>
                        </div>
                        <!-- comment -->
                        <!-- <div class="bg-white p-1-9 p-lg-2-3 rounded">
                            <span class="section-title text-primary mb-4">Comments</span>
                            <div class="d-flex mb-2-9">
                                <div class="flex-shrink-0">
                                    <img src="https://img.freepik.com/free-photo/user-profile-icon-front-side-with-white-background_187299-40010.jpg?q=10&h=200" alt="..."
                                        class="rounded-circle h-[80px] w-[80px]">
                                </div>
                                <div class="flex-grow-1 ms-4">
                                    <div class="d-sm-flex justify-content-between align-items-center mb-2">
                                        <h4 class="h6 mb-1">田中 <span class="small ml-2 text-muted">17日前</span></h4>
                                    </div>
                                    <p class="mb-1">
                                        綺麗！
                                    </p>
                                    <a class="text-primary  small" href="#!">Reply</a>
                                </div>
                            </div>
                            
                            <div class="d-flex">
                                <div class="flex-shrink-0">
                                    <img src="https://img.freepik.com/free-photo/user-profile-icon-front-side-with-white-background_187299-40010.jpg?q=10&h=200" alt="..."
                                        class="rounded-circle h-[80px] w-[80px]">
                                </div>
                                <div class="flex-grow-1 ms-4">
                                    <div class="d-sm-flex justify-content-between align-items-center mb-2">
                                        <h4 class="h6 mb-1">成田 <span class="small ml-2 text-muted">5ヶ月前</span></h4>
                                    </div>

                                    <p class="mb-1">
                                        楽しい！
                                    </p>
                                    <a class="text-primary anim-link-2 small" href="#!">Reply</a>
                                </div>
                            </div>
                        </div> -->
                        <!-- end comment-->

                        <!-- <div class="bg-white p-1-9 p-lg-2-3 rounded">
                            <div class="mb-4">
                                <span class="section-title text-primary mb-0">Leave a reply</span>
                            </div>

                          
                            <form>
                                <div class="row">
                                    <div class="col-sm">
                                        <div class="form-group">
                                            <input type="text" class="form-control" name="name" placeholder="お名前">
                                        </div>
                                    </div>
                                    <div class="col-sm">
                                        <div class="form-group">
                                            <input type="email" class="form-control" name="email"
                                                placeholder="メールアドレス">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <textarea name="reply" rows="6" class="form-control"
                                        placeholder="コメント"></textarea>
                                </div>
                                <div>
                                    <button class="butn" type="submit">送信</button>
                                </div>
                            </form>

                        </div> -->

                    </div>
                </div>
                <div class="col-lg-4 ps-lg-5 mt-1-9">
                    <div class="sidebar">
                        <!-- <div class="widget search-box mb-4 p-4">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search here...">
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
@import '@/assets/css/golf-list-styles.css';</style>