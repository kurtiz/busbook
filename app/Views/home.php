<?= $this->extend("layouts/base"); ?>
<!-- NOTE This keeps this page in the "content" placeholder in the layouts/base.php file  -->
<?= $this->section("content"); ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Google fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap" rel="stylesheet">

    <!-- Stylesheets -->
    <link rel="stylesheet" href="<?= base_url() ?>/public/css/vendors.css">
    <link rel="stylesheet" href="<?= base_url() ?>/public/css/main.css">
    <title>Home | BusBook</title>
</head>

<body>
<div class="preloader js-preloader">
    <div class="preloader__wrap">
        <div class="preloader__icon">
            <a href="<?= base_url() ?>" class="" data-x="" data-x-toggle="is-logo-dark">
                <img width="30px" src="<?= base_url() ?>/public/img/general/busbook-logo.png" alt="logo icon">
            </a>
        </div>
    </div>

    <div class="preloader__title">BusBook</div>
</div>

<main>


    <?= $this->include("widgets/topBar") ?>


    <section data-anim-wrap class="masthead -type-1 z-5">
        <div data-anim-child="fade" class="masthead__bg">
            <img src="#" alt="image" data-src="<?= base_url() ?>/public/img/gallery/1/1.png" class="js-lazy">
        </div>

        <div class="container">
            <div class="row justify-center">
                <div class="col-auto">
                    <div class="text-center">
                        <h1 data-anim-child="slide-up delay-4" class="text-60 lg:text-40 md:text-30 text-white">Find
                            Next Place To Visit</h1>
                        <p data-anim-child="slide-up delay-5" class="text-white mt-6 md:mt-10">Discover amzaing places
                            at exclusive deals</p>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="layout-pt-md layout-pb-lg">
        <div data-anim-wrap class="container">
            <div class="row y-gap-20 justify-between">

                <div data-anim-child="slide-up delay-1" class="col-lg-3 col-sm-6">

                    <div class="featureIcon -type-1 ">
                        <div class="d-flex justify-center">
                            <img src="javascript:void(0)" data-src="<?= base_url() ?>/public/img/featureIcons/1/1.svg"
                                 alt="image" class="js-lazy">
                        </div>

                        <div class="text-center mt-30">
                            <h4 class="text-18 fw-500">Best Price Guarantee</h4>
                            <p class="text-15 mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>

                </div>

                <div data-anim-child="slide-up delay-2" class="col-lg-3 col-sm-6">

                    <div class="featureIcon -type-1 ">
                        <div class="d-flex justify-center">
                            <img src="javascript:void(0)" data-src="<?= base_url() ?>/public/img/featureIcons/1/2.svg"
                                 alt="image" class="js-lazy">
                        </div>

                        <div class="text-center mt-30">
                            <h4 class="text-18 fw-500">Easy & Quick Booking</h4>
                            <p class="text-15 mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>

                </div>

                <div data-anim-child="slide-up delay-3" class="col-lg-3 col-sm-6">

                    <div class="featureIcon -type-1 ">
                        <div class="d-flex justify-center">
                            <img src="javascript:void(0)" data-src="<?= base_url() ?>/public/img/featureIcons/1/3.svg"
                                 alt="image" class="js-lazy">
                        </div>

                        <div class="text-center mt-30">
                            <h4 class="text-18 fw-500">Customer Care 24/7</h4>
                            <p class="text-15 mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>

    <section class="layout-pt-lg layout-pb-lg bg-blue-2">
        <div data-anim-wrap class="container">
            <div class="row y-gap-40 justify-between">
                <div data-anim-child="slide-up delay-1" class="col-xl-5 col-lg-6">
                    <h2 class="text-30">What our customers are<br> saying us?</h2>
                    <p class="mt-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor
                        nibh, sit amet tempor nibh finibus et. Aenean eu enim justo.</p>

                    <div class="row y-gap-30 pt-60 lg:pt-40">
                        <div class="col-sm-5 col-6">
                            <div class="text-30 lh-15 fw-600">13m+</div>
                            <div class="text-light-1 lh-15">Happy People</div>
                        </div>

                        <div class="col-sm-5 col-6">
                            <div class="text-30 lh-15 fw-600">4.88</div>
                            <div class="text-light-1 lh-15">Overall rating</div>

                            <div class="d-flex x-gap-5 items-center pt-10">

                                <div class="icon-star text-blue-1 text-10"></div>

                                <div class="icon-star text-blue-1 text-10"></div>

                                <div class="icon-star text-blue-1 text-10"></div>

                                <div class="icon-star text-blue-1 text-10"></div>

                                <div class="icon-star text-blue-1 text-10"></div>

                            </div>
                        </div>
                    </div>
                </div>

                <div data-anim-child="slide-up delay-2" class="col-lg-6">
                    <div class="overflow-hidden js-testimonials-slider-3" data-scrollbar>
                        <div class="swiper-wrapper">

                            <div class="swiper-slide">
                                <div class="row items-center x-gap-30 y-gap-20">
                                    <div class="col-auto">
                                        <img src="javascript:void(0)" data-src="<?= base_url() ?>/public/img/avatars/1.png"
                                             alt="image" class="js-lazy">
                                    </div>

                                    <div class="col-auto">
                                        <h5 class="text-16 fw-500">Annette Black</h5>
                                        <div class="text-15 text-light-1 lh-15">UX / UI Designer</div>
                                    </div>
                                </div>

                                <p class="text-18 fw-500 text-dark-1 mt-30 sm:mt-20">The place is in a great location in
                                    Gumbet. The area is safe and beautiful. The apartment was comfortable and the host
                                    was kind and responsive to our requests.</p>
                            </div>

                            <div class="swiper-slide">
                                <div class="row items-center x-gap-30 y-gap-20">
                                    <div class="col-auto">
                                        <img src="javascript:void(0)" data-src="<?= base_url() ?>/public/img/avatars/1.png"
                                             alt="image" class="js-lazy">
                                    </div>

                                    <div class="col-auto">
                                        <h5 class="text-16 fw-500">Annette Black</h5>
                                        <div class="text-15 text-light-1 lh-15">UX / UI Designer</div>
                                    </div>
                                </div>

                                <p class="text-18 fw-500 text-dark-1 mt-30 sm:mt-20">The place is in a great location in
                                    Gumbet. The area is safe and beautiful. The apartment was comfortable and the host
                                    was kind and responsive to our requests.</p>
                            </div>

                            <div class="swiper-slide">
                                <div class="row items-center x-gap-30 y-gap-20">
                                    <div class="col-auto">
                                        <img src="javascript:void(0)" data-src="<?= base_url() ?>/public/img/avatars/1.png"
                                             alt="image" class="js-lazy">
                                    </div>

                                    <div class="col-auto">
                                        <h5 class="text-16 fw-500">Annette Black</h5>
                                        <div class="text-15 text-light-1 lh-15">UX / UI Designer</div>
                                    </div>
                                </div>

                                <p class="text-18 fw-500 text-dark-1 mt-30 sm:mt-20">The place is in a great location in
                                    Gumbet. The area is safe and beautiful. The apartment was comfortable and the host
                                    was kind and responsive to our requests.</p>
                            </div>

                        </div>

                        <div class="d-flex items-center mt-60 sm:mt-20 js-testimonials-slider-pag">
                            <div class="text-dark-1 fw-500 js-current">01</div>
                            <div class="slider-scrollbar bg-border ml-20 mr-20 w-max-300 js-scrollbar"></div>
                            <div class="text-dark-1 fw-500 js-all">05</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="layout-pt-md layout-pb-md bg-dark-2">
        <div class="container">
            <div class="row y-gap-30 justify-between items-center">
                <div class="col-auto">
                    <div class="row y-gap-20  flex-wrap items-center">
                        <div class="col-auto">
                            <div class="icon-newsletter text-60 sm:text-40 text-white"></div>
                        </div>

                        <div class="col-auto">
                            <h4 class="text-26 text-white fw-600">Your Travel Journey Starts Here</h4>
                            <div class="text-white">Sign up and we'll send the best deals to you</div>
                        </div>
                    </div>
                </div>

                <div class="col-auto">
                    <div class="single-field -w-410 d-flex x-gap-10 y-gap-20">
                        <div>
                            <input class="bg-white h-60" type="text" placeholder="Your Email">
                        </div>

                        <div>
                            <button class="button -md h-60 bg-blue-1 text-white">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
<?=$this->include("widgets/footer")?>

</main>

<?=$this->include("widgets/options")?>

<!-- JavaScript -->
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAAz77U5XQuEME6TpftaMdX0bBelQxXRlM"></script>
<script src="https://unpkg.com/@googlemaps/markerclusterer/dist/index.min.js"></script>

<script src="<?= base_url() ?>/public/js/vendors.js"></script>
<script src="<?= base_url() ?>/public/js/main.js"></script>
</body>

</html>
<?= $this->endSection(); ?>

