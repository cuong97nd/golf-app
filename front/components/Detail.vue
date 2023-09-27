<template>
    <section class="bg-light">
        <div class="container">
            <div class="row mt-n1-9">
                <div class="col-lg-8 mt-1-9">
                    <div class="row">
                        <div class="col-lg-12 mb-6">
                            <article class="card card-style1 border-0">
                                <img src="https://golf.websitelayout.net/img/blog/blog-detail-01.jpg" class="card-img-top"
                                    alt="...">
                                <div class="card-body p-1-9 p-lg-2-3">
                                    <ul class="list-unstyled">
                                        <li class="d-inline-block me-4">
                                            <div class="media">
                                                <a href="#!" class="font-weight-500 text-dark">
                                                    <i class="far fa-calendar-check me-1 text-primary"></i> ハノイ
                                                </a>
                                            </div>
                                        </li>

                                    </ul>
                                    <h2>ザ・ブラッジス・ゴルフ・クラブ</h2>
                                    <p class="mb-4">
                                        ザ・ブラッジス・ゴルフ・クラブはベトナムで最も有名なゴルフリゾートの一つで、美しい自然環境に囲まれています。チャンピオンシップコースとして知られ、雄大な景色が楽しめます。
                                    </p>

                                </div>
                            </article>
                        </div>
                        <!-- comment -->
                        <div class="bg-white p-1-9 p-lg-2-3 rounded">
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
                        </div>
                        <!-- end comment-->

                        <div class="bg-white p-1-9 p-lg-2-3 rounded">
                            <div class="mb-4">
                                <span class="section-title text-primary mb-0">Leave a reply</span>
                            </div>

                            <!-- Form -->
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
                            <!-- End Form -->

                        </div>

                    </div>
                </div>
                <div class="col-lg-4 ps-lg-5 mt-1-9">
                    <div class="sidebar">
                        <div class="widget search-box mb-4 p-4">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search here...">
                                <div class="input-group-append">
                                    <button class="main-btn" type="button"><i class="fa fa-search"></i></button>
                                </div>
                            </div>
                        </div>

                    <Categories></Categories>
                </div>
            </div>
        </div>
    </div>
</section></template>

<style scoped>@import '@/assets/css/golf-list-plugins.css';
@import '@/assets/css/golf-list-base.css';
@import '@/assets/css/golf-list-search.css';
@import '@/assets/css/golf-list-styles.css';</style>