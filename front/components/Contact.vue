<template>
    <section>
        <div class="container">
            <div class="text-center mb-2-3 mb-lg-6">
                <span class="section-title text-primary">Contact Info</span>
                <h2 class="h1 mb-0 text-secondary">We`re here to help you</h2>
            </div>
            <div class="row">
                <div class="col-md-6 col-lg-4 mb-1-9 mb-lg-0">
                    <div class="card card-style3 text-center h-100">
                        <div class="card-body py-2-3 px-1-9">
                            <div class="flex justify-center"><img src="https://golf.websitelayout.net/img/content/contact-icon-01.png" alt="..." class="mb-4"></div>
                            <h3 class="h4">Location</h3>
                            <p class="mb-0">66 Guild Street 512B,<br> Great North Town.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 mb-1-9 mb-lg-0">
                    <div class="card card-style3 text-center h-100">
                        <div class="card-body py-2-3 px-1-9">
                            <div class="flex justify-center"><img src="https://golf.websitelayout.net/img/content/contact-icon-02.png" alt="..." class="mb-4"></div>
                            <h3 class="h4">Call Us</h3>
                            <p class="mb-0">(+44) 123 456 789</p>
                            <p class="mb-0">+ (124) 1523-567-9874</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card card-style3 text-center h-100">
                        <div class="card-body py-2-3 px-1-9">
                            <div class="flex justify-center"><img src="https://golf.websitelayout.net/img/content/contact-icon-03.png" alt="..." class="mb-4"></div>
                            <h3 class="h4">Email</h3>
                            <p class="mb-0">info@yourdomain.com</p>
                            <p class="mb-0">example@yourdomain.com</p>
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
                            <h2 class="h1 mb-4">Call Us or Fill The Form</h2>
                            <form class="quform" action="quform/contact.php" method="post" enctype="multipart/form-data"
                                onclick="">
                                <div class="quform-elements">
                                    <div class="row">
                                        <!-- Begin Text input element -->
                                        <div class="col-md-6">
                                            <div class="quform-element form-group">
                                                <label for="name">Your Name <span class="quform-required">*</span></label>
                                                <div class="quform-input">
                                                    <input class="form-control" id="name" type="text" name="name"
                                                        placeholder="Your name here">
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End Text input element -->

                                        <!-- Begin Text input element -->
                                        <div class="col-md-6">
                                            <div class="quform-element form-group">
                                                <label for="email">Your Email <span class="quform-required">*</span></label>
                                                <div class="quform-input">
                                                    <input class="form-control" id="email" type="text" name="email"
                                                        placeholder="Your email here">
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End Text input element -->

                                        <!-- Begin Text input element -->
                                        <div class="col-md-6">
                                            <div class="quform-element form-group quform-select-replaced">
                                                <label for="subject">Your Subject <span
                                                        class="quform-required">*</span></label>
                                                <div class="quform-input">
                                                    <input class="form-control" id="subject" type="text" name="subject"
                                                        placeholder="Your subject here">
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End Text input element -->

                                        <!-- Begin Text input element -->
                                        <div class="col-md-6">
                                            <div class="quform-element form-group">
                                                <label for="phone">Contact Number</label>
                                                <div class="quform-input">
                                                    <input class="form-control" id="phone" type="text" name="phone"
                                                        placeholder="Your phone here">
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End Text input element -->

                                        <!-- Begin Textarea element -->
                                        <div class="col-md-12">
                                            <div class="quform-element form-group">
                                                <label for="message">Message <span class="quform-required">*</span></label>
                                                <div class="quform-input">
                                                    <textarea class="form-control" id="message" name="message" rows="3"
                                                        placeholder="Tell us a few words"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End Textarea element -->

                                        <!-- Begin Submit button -->
                                        <div class="col-md-12">
                                            <div class="quform-submit-inner">
                                                <button class="butn" type="submit"><span>Send Message</span></button>
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