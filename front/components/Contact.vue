<template>
    <section id="contact">
        <div class="container">
            <div class="text-center mb-2-3 mb-lg-6">
                <span class="section-title text-primary">Contact Info</span>
                <h2 class="h1 mb-0 text-secondary">いつでもご連絡してください</h2>
            </div>
            <div class="row">
                <div class="col-md-6 col-lg-4 mb-1-9 mb-lg-0">
                    <div class="card card-style3 text-center h-100">
                        <div class="card-body py-2-3 px-1-9">
                            <div class="flex justify-center"><img src="https://golf.websitelayout.net/img/content/contact-icon-01.png" alt="..." class="mb-4"></div>
                            <h3 class="h4">住所</h3>
                            <p class="mb-0">linhlang hanoi,<br> vietnam.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 mb-1-9 mb-lg-0">
                    <div class="card card-style3 text-center h-100">
                        <div class="card-body py-2-3 px-1-9">
                            <div class="flex justify-center"><img src="https://golf.websitelayout.net/img/content/contact-icon-02.png" alt="..." class="mb-4"></div>
                            <h3 class="h4">電話番号</h3>
                            <p class="mb-0">+ (81) 123 456 789</p>
                            <p class="mb-0">+ (84) 1523-567-9874</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card card-style3 text-center h-100">
                        <div class="card-body py-2-3 px-1-9">
                            <div class="flex justify-center"><img src="https://golf.websitelayout.net/img/content/contact-icon-03.png" alt="..." class="mb-4"></div>
                            <h3 class="h4">メールアドレス</h3>
                            <p class="mb-0">info@info.com</p>
                            <p class="mb-0">example@example.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="bg-light">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="card card-style1 border-0">
                        <div class="card-body p-4 p-md-5">
                            <span class="section-title text-primary">Get In Touch</span>
                            <h5 class="h1 mb-4">お電話いただくかフォームに記入ください</h5>
                            <form class="quform"  method="post" enctype="multipart/form-data"
                                onclick="">
                                <div class="quform-elements">
                                    <div class="row">
                                        <!-- Begin Text input element -->
                                        <div class="col-md-6">
                                            <div class="quform-element form-group">
                                                <label for="name">お名前 <span class="quform-required">*</span></label>
                                                <div class="quform-input">
                                                    <input class="form-control" id="name" type="text" name="name"
                                                        placeholder="お名前">
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End Text input element -->

                                        <!-- Begin Text input element -->
                                        <div class="col-md-6">
                                            <div class="quform-element form-group">
                                                <label for="email">メールアドレス <span class="quform-required">*</span></label>
                                                <div class="quform-input">
                                                    <input class="form-control" id="email" type="text" name="email"
                                                        placeholder="メールアドレス">
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End Text input element -->

                                        <!-- Begin Text input element -->
                                        <div class="col-md-6">
                                            <div class="quform-element form-group quform-select-replaced">
                                                <label for="subject">件名 <span
                                                        class="quform-required">*</span></label>
                                                <div class="quform-input">
                                                    <input class="form-control" id="subject" type="text" name="subject"
                                                        placeholder="件名">
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End Text input element -->

                                        <!-- Begin Text input element -->
                                        <div class="col-md-6">
                                            <div class="quform-element form-group">
                                                <label for="phone">電話番号</label>
                                                <div class="quform-input">
                                                    <input class="form-control" id="phone" type="text" name="phone"
                                                        placeholder="電話番号">
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End Text input element -->

                                        <!-- Begin Textarea element -->
                                        <div class="col-md-12">
                                            <div class="quform-element form-group">
                                                <label for="message">メッセージ <span class="quform-required">*</span></label>
                                                <div class="quform-input">
                                                    <textarea class="form-control" id="message" name="message" rows="3"
                                                        placeholder="メッセージ"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End Textarea element -->

                                        <!-- Begin Submit button -->
                                        <div class="col-md-12">
                                            <div class="quform-submit-inner">
                                                <button class="butn" type="submit"><span>送信</span></button>
                                            </div>
                                            <div class="quform-loading-wrap text-start"><span class="quform-loading"></span>
                                            </div>
                                        </div>
                                        <!-- End Submit button -->

                                    </div>
                                </div>
                            </form>
                        </div>
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