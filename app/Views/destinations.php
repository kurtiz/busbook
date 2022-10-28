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

    <title>Destinations | BusBook</title>
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

    <section class="layout-pt-md layout-pb-md mt-70">
        <div class="container">
            <div class="row y-gap-20 justify-between items-end">
                <div class="col-auto">
                    <div class="sectionTitle -md">
                        <h2 class="sectionTitle__title">Featured Holiday Rentals</h2>
                        <p class=" sectionTitle__text mt-5 sm:mt-0">Interdum et malesuada fames ac ante ipsum</p>
                    </div>
                </div>

            </div>

            <div class="row y-gap-30 pt-40 sm:pt-20">

                <div class="col-xl-3 col-lg-3 col-sm-6">

                    <a href="rental-single.html" class="rentalCard -type-1 rounded-4 ">
                        <div class="rentalCard__image">

                            <div class="cardImage ratio ratio-1:1">
                                <div class="cardImage__content">

                                    <img class="rounded-4 col-12 js-lazy" src="destinations.html#" data-src="<?=base_url()?>/public/img/rentals/1.png" alt="image">


                                </div>

                                <div class="cardImage__wishlist">
                                    <button class="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                        <i class="icon-heart text-12"></i>
                                    </button>
                                </div>


                            </div>

                        </div>

                        <div class="rentalCard__content mt-10">
                            <div class="text-14 text-light-1 lh-14 mb-5">Westminster Borough, London</div>

                            <h4 class="rentalCard__title text-dark-1 text-18 lh-16 fw-500">
                                <span>Luxury New Apartment With Private Garden</span>
                            </h4>

                            <p class="text-light-1 lh-14 text-14 mt-5"></p>

                            <div class="d-flex items-center mt-5">
                                <div class="text-14 text-light-1">2 guests</div>
                                <div class="size-3 bg-light-1 rounded-full ml-10 mr-10"></div>
                                <div class="text-14 text-light-1">1 bedroom</div>
                                <div class="size-3 bg-light-1 rounded-full ml-10 mr-10"></div>
                                <div class="text-14 text-light-1">1 bed</div>
                            </div>

                            <div class="d-flex items-center mt-20">
                                <div class="flex-center bg-blue-1 rounded-4 size-30 text-12 fw-600 text-white">4.8</div>
                                <div class="text-14 text-dark-1 fw-500 ml-10">Exceptional</div>
                                <div class="text-14 text-light-1 ml-10">3,014 reviews</div>
                            </div>

                            <div class="mt-5">
                                <div class="text-light-1">
                                    <span class="fw-500 text-dark-1">US$72</span> / per night
                                </div>
                            </div>
                        </div>
                    </a>

                </div>

                <div class="col-xl-3 col-lg-3 col-sm-6">

                    <a href="rental-single.html" class="rentalCard -type-1 rounded-4 ">
                        <div class="rentalCard__image">

                            <div class="cardImage ratio ratio-1:1">
                                <div class="cardImage__content">


                                    <div class="cardImage-slider rounded-4 overflow-hidden js-cardImage-slider">
                                        <div class="swiper-wrapper">

                                            <div class="swiper-slide">
                                                <img class="col-12 js-lazy" src="destinations.html#" data-src="<?=base_url()?>/public/img/rentals/2.png" alt="image">
                                            </div>

                                            <div class="swiper-slide">
                                                <img class="col-12 js-lazy" src="destinations.html#" data-src="<?=base_url()?>/public/img/rentals/3.png" alt="image">
                                            </div>

                                            <div class="swiper-slide">
                                                <img class="col-12 js-lazy" src="destinations.html#" data-src="<?=base_url()?>/public/img/rentals/1.png" alt="image">
                                            </div>

                                        </div>

                                        <div class="cardImage-slider__pagination js-pagination"></div>

                                        <div class="cardImage-slider__nav -prev">
                                            <button class="button -blue-1 bg-white size-30 rounded-full shadow-2 js-prev">
                                                <i class="icon-chevron-left text-10"></i>
                                            </button>
                                        </div>

                                        <div class="cardImage-slider__nav -next">
                                            <button class="button -blue-1 bg-white size-30 rounded-full shadow-2 js-next">
                                                <i class="icon-chevron-right text-10"></i>
                                            </button>
                                        </div>
                                    </div>

                                </div>

                                <div class="cardImage__wishlist">
                                    <button class="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                        <i class="icon-heart text-12"></i>
                                    </button>
                                </div>


                            </div>

                        </div>

                        <div class="rentalCard__content mt-10">
                            <div class="text-14 text-light-1 lh-14 mb-5">Ciutat Vella, Barcelona</div>

                            <h4 class="rentalCard__title text-dark-1 text-18 lh-16 fw-500">
                                <span>Premium One Bedroom Luxury Living in the Heart of Mayfair</span>
                            </h4>

                            <p class="text-light-1 lh-14 text-14 mt-5"></p>

                            <div class="d-flex items-center mt-5">
                                <div class="text-14 text-light-1">2 guests</div>
                                <div class="size-3 bg-light-1 rounded-full ml-10 mr-10"></div>
                                <div class="text-14 text-light-1">1 bedroom</div>
                                <div class="size-3 bg-light-1 rounded-full ml-10 mr-10"></div>
                                <div class="text-14 text-light-1">1 bed</div>
                            </div>

                            <div class="d-flex items-center mt-20">
                                <div class="flex-center bg-blue-1 rounded-4 size-30 text-12 fw-600 text-white">4.8</div>
                                <div class="text-14 text-dark-1 fw-500 ml-10">Exceptional</div>
                                <div class="text-14 text-light-1 ml-10">3,014 reviews</div>
                            </div>

                            <div class="mt-5">
                                <div class="text-light-1">
                                    <span class="fw-500 text-dark-1">US$72</span> / per night
                                </div>
                            </div>
                        </div>
                    </a>

                </div>

                <div class="col-xl-3 col-lg-3 col-sm-6">

                    <a href="rental-single.html" class="rentalCard -type-1 rounded-4 ">
                        <div class="rentalCard__image">

                            <div class="cardImage ratio ratio-1:1">
                                <div class="cardImage__content">

                                    <img class="rounded-4 col-12 js-lazy" src="destinations.html#" data-src="<?=base_url()?>/public/img/rentals/3.png" alt="image">


                                </div>

                                <div class="cardImage__wishlist">
                                    <button class="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                        <i class="icon-heart text-12"></i>
                                    </button>
                                </div>


                                <div class="cardImage__leftBadge">
                                    <div class="py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase bg-blue-1 text-white">
                                        Best Seller
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div class="rentalCard__content mt-10">
                            <div class="text-14 text-light-1 lh-14 mb-5">Manhattan, New York</div>

                            <h4 class="rentalCard__title text-dark-1 text-18 lh-16 fw-500">
                                <span>Style, Charm & Comfort in Camberwell</span>
                            </h4>

                            <p class="text-light-1 lh-14 text-14 mt-5"></p>

                            <div class="d-flex items-center mt-5">
                                <div class="text-14 text-light-1">2 guests</div>
                                <div class="size-3 bg-light-1 rounded-full ml-10 mr-10"></div>
                                <div class="text-14 text-light-1">1 bedroom</div>
                                <div class="size-3 bg-light-1 rounded-full ml-10 mr-10"></div>
                                <div class="text-14 text-light-1">1 bed</div>
                            </div>

                            <div class="d-flex items-center mt-20">
                                <div class="flex-center bg-blue-1 rounded-4 size-30 text-12 fw-600 text-white">4.8</div>
                                <div class="text-14 text-dark-1 fw-500 ml-10">Exceptional</div>
                                <div class="text-14 text-light-1 ml-10">3,014 reviews</div>
                            </div>

                            <div class="mt-5">
                                <div class="text-light-1">
                                    <span class="fw-500 text-dark-1">US$72</span> / per night
                                </div>
                            </div>
                        </div>
                    </a>

                </div>

                <div class="col-xl-3 col-lg-3 col-sm-6">

                    <a href="rental-single.html" class="rentalCard -type-1 rounded-4 ">
                        <div class="rentalCard__image">

                            <div class="cardImage ratio ratio-1:1">
                                <div class="cardImage__content">

                                    <img class="rounded-4 col-12 js-lazy" src="destinations.html#" data-src="<?=base_url()?>/public/img/rentals/4.png" alt="image">


                                </div>

                                <div class="cardImage__wishlist">
                                    <button class="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                        <i class="icon-heart text-12"></i>
                                    </button>
                                </div>


                                <div class="cardImage__leftBadge">
                                    <div class="py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase bg-yellow-1 text-dark-1">
                                        Top Rated
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div class="rentalCard__content mt-10">
                            <div class="text-14 text-light-1 lh-14 mb-5">Vaticano Prati, Rome</div>

                            <h4 class="rentalCard__title text-dark-1 text-18 lh-16 fw-500">
                                <span>Marylebone - Oxford Street 1 bed apt with WiFi</span>
                            </h4>

                            <p class="text-light-1 lh-14 text-14 mt-5"></p>

                            <div class="d-flex items-center mt-5">
                                <div class="text-14 text-light-1">2 guests</div>
                                <div class="size-3 bg-light-1 rounded-full ml-10 mr-10"></div>
                                <div class="text-14 text-light-1">1 bedroom</div>
                                <div class="size-3 bg-light-1 rounded-full ml-10 mr-10"></div>
                                <div class="text-14 text-light-1">1 bed</div>
                            </div>

                            <div class="d-flex items-center mt-20">
                                <div class="flex-center bg-blue-1 rounded-4 size-30 text-12 fw-600 text-white">4.8</div>
                                <div class="text-14 text-dark-1 fw-500 ml-10">Exceptional</div>
                                <div class="text-14 text-light-1 ml-10">3,014 reviews</div>
                            </div>

                            <div class="mt-5">
                                <div class="text-light-1">
                                    <span class="fw-500 text-dark-1">US$72</span> / per night
                                </div>
                            </div>
                        </div>
                    </a>

                </div>

            </div>
            <div class="row y-gap-30 pt-40 sm:pt-20">

                <div class="col-xl-3 col-lg-3 col-sm-6">

                    <a href="rental-single.html" class="rentalCard -type-1 rounded-4 ">
                        <div class="rentalCard__image">

                            <div class="cardImage ratio ratio-1:1">
                                <div class="cardImage__content">

                                    <img class="rounded-4 col-12 js-lazy" src="destinations.html#" data-src="<?=base_url()?>/public/img/rentals/1.png" alt="image">


                                </div>

                                <div class="cardImage__wishlist">
                                    <button class="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                        <i class="icon-heart text-12"></i>
                                    </button>
                                </div>


                            </div>

                        </div>

                        <div class="rentalCard__content mt-10">
                            <div class="text-14 text-light-1 lh-14 mb-5">Westminster Borough, London</div>

                            <h4 class="rentalCard__title text-dark-1 text-18 lh-16 fw-500">
                                <span>Luxury New Apartment With Private Garden</span>
                            </h4>

                            <p class="text-light-1 lh-14 text-14 mt-5"></p>

                            <div class="d-flex items-center mt-5">
                                <div class="text-14 text-light-1">2 guests</div>
                                <div class="size-3 bg-light-1 rounded-full ml-10 mr-10"></div>
                                <div class="text-14 text-light-1">1 bedroom</div>
                                <div class="size-3 bg-light-1 rounded-full ml-10 mr-10"></div>
                                <div class="text-14 text-light-1">1 bed</div>
                            </div>

                            <div class="d-flex items-center mt-20">
                                <div class="flex-center bg-blue-1 rounded-4 size-30 text-12 fw-600 text-white">4.8</div>
                                <div class="text-14 text-dark-1 fw-500 ml-10">Exceptional</div>
                                <div class="text-14 text-light-1 ml-10">3,014 reviews</div>
                            </div>

                            <div class="mt-5">
                                <div class="text-light-1">
                                    <span class="fw-500 text-dark-1">US$72</span> / per night
                                </div>
                            </div>
                        </div>
                    </a>

                </div>

                <div class="col-xl-3 col-lg-3 col-sm-6">

                    <a href="rental-single.html" class="rentalCard -type-1 rounded-4 ">
                        <div class="rentalCard__image">

                            <div class="cardImage ratio ratio-1:1">
                                <div class="cardImage__content">


                                    <div class="cardImage-slider rounded-4 overflow-hidden js-cardImage-slider">
                                        <div class="swiper-wrapper">

                                            <div class="swiper-slide">
                                                <img class="col-12 js-lazy" src="destinations.html#" data-src="<?=base_url()?>/public/img/rentals/2.png" alt="image">
                                            </div>

                                            <div class="swiper-slide">
                                                <img class="col-12 js-lazy" src="destinations.html#" data-src="<?=base_url()?>/public/img/rentals/3.png" alt="image">
                                            </div>

                                            <div class="swiper-slide">
                                                <img class="col-12 js-lazy" src="destinations.html#" data-src="<?=base_url()?>/public/img/rentals/1.png" alt="image">
                                            </div>

                                        </div>

                                        <div class="cardImage-slider__pagination js-pagination"></div>

                                        <div class="cardImage-slider__nav -prev">
                                            <button class="button -blue-1 bg-white size-30 rounded-full shadow-2 js-prev">
                                                <i class="icon-chevron-left text-10"></i>
                                            </button>
                                        </div>

                                        <div class="cardImage-slider__nav -next">
                                            <button class="button -blue-1 bg-white size-30 rounded-full shadow-2 js-next">
                                                <i class="icon-chevron-right text-10"></i>
                                            </button>
                                        </div>
                                    </div>

                                </div>

                                <div class="cardImage__wishlist">
                                    <button class="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                        <i class="icon-heart text-12"></i>
                                    </button>
                                </div>


                            </div>

                        </div>

                        <div class="rentalCard__content mt-10">
                            <div class="text-14 text-light-1 lh-14 mb-5">Ciutat Vella, Barcelona</div>

                            <h4 class="rentalCard__title text-dark-1 text-18 lh-16 fw-500">
                                <span>Premium One Bedroom Luxury Living in the Heart of Mayfair</span>
                            </h4>

                            <p class="text-light-1 lh-14 text-14 mt-5"></p>

                            <div class="d-flex items-center mt-5">
                                <div class="text-14 text-light-1">2 guests</div>
                                <div class="size-3 bg-light-1 rounded-full ml-10 mr-10"></div>
                                <div class="text-14 text-light-1">1 bedroom</div>
                                <div class="size-3 bg-light-1 rounded-full ml-10 mr-10"></div>
                                <div class="text-14 text-light-1">1 bed</div>
                            </div>

                            <div class="d-flex items-center mt-20">
                                <div class="flex-center bg-blue-1 rounded-4 size-30 text-12 fw-600 text-white">4.8</div>
                                <div class="text-14 text-dark-1 fw-500 ml-10">Exceptional</div>
                                <div class="text-14 text-light-1 ml-10">3,014 reviews</div>
                            </div>

                            <div class="mt-5">
                                <div class="text-light-1">
                                    <span class="fw-500 text-dark-1">US$72</span> / per night
                                </div>
                            </div>
                        </div>
                    </a>

                </div>

                <div class="col-xl-3 col-lg-3 col-sm-6">

                    <a href="rental-single.html" class="rentalCard -type-1 rounded-4 ">
                        <div class="rentalCard__image">

                            <div class="cardImage ratio ratio-1:1">
                                <div class="cardImage__content">

                                    <img class="rounded-4 col-12 js-lazy" src="destinations.html#" data-src="<?=base_url()?>/public/img/rentals/3.png" alt="image">


                                </div>

                                <div class="cardImage__wishlist">
                                    <button class="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                        <i class="icon-heart text-12"></i>
                                    </button>
                                </div>


                                <div class="cardImage__leftBadge">
                                    <div class="py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase bg-blue-1 text-white">
                                        Best Seller
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div class="rentalCard__content mt-10">
                            <div class="text-14 text-light-1 lh-14 mb-5">Manhattan, New York</div>

                            <h4 class="rentalCard__title text-dark-1 text-18 lh-16 fw-500">
                                <span>Style, Charm & Comfort in Camberwell</span>
                            </h4>

                            <p class="text-light-1 lh-14 text-14 mt-5"></p>

                            <div class="d-flex items-center mt-5">
                                <div class="text-14 text-light-1">2 guests</div>
                                <div class="size-3 bg-light-1 rounded-full ml-10 mr-10"></div>
                                <div class="text-14 text-light-1">1 bedroom</div>
                                <div class="size-3 bg-light-1 rounded-full ml-10 mr-10"></div>
                                <div class="text-14 text-light-1">1 bed</div>
                            </div>

                            <div class="d-flex items-center mt-20">
                                <div class="flex-center bg-blue-1 rounded-4 size-30 text-12 fw-600 text-white">4.8</div>
                                <div class="text-14 text-dark-1 fw-500 ml-10">Exceptional</div>
                                <div class="text-14 text-light-1 ml-10">3,014 reviews</div>
                            </div>

                            <div class="mt-5">
                                <div class="text-light-1">
                                    <span class="fw-500 text-dark-1">US$72</span> / per night
                                </div>
                            </div>
                        </div>
                    </a>

                </div>

                <div class="col-xl-3 col-lg-3 col-sm-6">

                    <a href="rental-single.html" class="rentalCard -type-1 rounded-4 ">
                        <div class="rentalCard__image">

                            <div class="cardImage ratio ratio-1:1">
                                <div class="cardImage__content">

                                    <img class="rounded-4 col-12 js-lazy" src="destinations.html#" data-src="<?=base_url()?>/public/img/rentals/4.png" alt="image">


                                </div>

                                <div class="cardImage__wishlist">
                                    <button class="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                        <i class="icon-heart text-12"></i>
                                    </button>
                                </div>


                                <div class="cardImage__leftBadge">
                                    <div class="py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase bg-yellow-1 text-dark-1">
                                        Top Rated
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div class="rentalCard__content mt-10">
                            <div class="text-14 text-light-1 lh-14 mb-5">Vaticano Prati, Rome</div>

                            <h4 class="rentalCard__title text-dark-1 text-18 lh-16 fw-500">
                                <span>Marylebone - Oxford Street 1 bed apt with WiFi</span>
                            </h4>

                            <p class="text-light-1 lh-14 text-14 mt-5"></p>

                            <div class="d-flex items-center mt-5">
                                <div class="text-14 text-light-1">2 guests</div>
                                <div class="size-3 bg-light-1 rounded-full ml-10 mr-10"></div>
                                <div class="text-14 text-light-1">1 bedroom</div>
                                <div class="size-3 bg-light-1 rounded-full ml-10 mr-10"></div>
                                <div class="text-14 text-light-1">1 bed</div>
                            </div>

                            <div class="d-flex items-center mt-20">
                                <div class="flex-center bg-blue-1 rounded-4 size-30 text-12 fw-600 text-white">4.8</div>
                                <div class="text-14 text-dark-1 fw-500 ml-10">Exceptional</div>
                                <div class="text-14 text-light-1 ml-10">3,014 reviews</div>
                            </div>

                            <div class="mt-5">
                                <div class="text-light-1">
                                    <span class="fw-500 text-dark-1">US$72</span> / per night
                                </div>
                            </div>
                        </div>
                    </a>

                </div>

            </div>
            <div class="row y-gap-30 pt-40 sm:pt-20">

                <div class="col-xl-3 col-lg-3 col-sm-6">

                    <a href="rental-single.html" class="rentalCard -type-1 rounded-4 ">
                        <div class="rentalCard__image">

                            <div class="cardImage ratio ratio-1:1">
                                <div class="cardImage__content">

                                    <img class="rounded-4 col-12 js-lazy" src="destinations.html#" data-src="<?=base_url()?>/public/img/rentals/1.png" alt="image">


                                </div>

                                <div class="cardImage__wishlist">
                                    <button class="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                        <i class="icon-heart text-12"></i>
                                    </button>
                                </div>


                            </div>

                        </div>

                        <div class="rentalCard__content mt-10">
                            <div class="text-14 text-light-1 lh-14 mb-5">Westminster Borough, London</div>

                            <h4 class="rentalCard__title text-dark-1 text-18 lh-16 fw-500">
                                <span>Luxury New Apartment With Private Garden</span>
                            </h4>

                            <p class="text-light-1 lh-14 text-14 mt-5"></p>

                            <div class="d-flex items-center mt-5">
                                <div class="text-14 text-light-1">2 guests</div>
                                <div class="size-3 bg-light-1 rounded-full ml-10 mr-10"></div>
                                <div class="text-14 text-light-1">1 bedroom</div>
                                <div class="size-3 bg-light-1 rounded-full ml-10 mr-10"></div>
                                <div class="text-14 text-light-1">1 bed</div>
                            </div>

                            <div class="d-flex items-center mt-20">
                                <div class="flex-center bg-blue-1 rounded-4 size-30 text-12 fw-600 text-white">4.8</div>
                                <div class="text-14 text-dark-1 fw-500 ml-10">Exceptional</div>
                                <div class="text-14 text-light-1 ml-10">3,014 reviews</div>
                            </div>

                            <div class="mt-5">
                                <div class="text-light-1">
                                    <span class="fw-500 text-dark-1">US$72</span> / per night
                                </div>
                            </div>
                        </div>
                    </a>

                </div>

                <div class="col-xl-3 col-lg-3 col-sm-6">

                    <a href="rental-single.html" class="rentalCard -type-1 rounded-4 ">
                        <div class="rentalCard__image">

                            <div class="cardImage ratio ratio-1:1">
                                <div class="cardImage__content">


                                    <div class="cardImage-slider rounded-4 overflow-hidden js-cardImage-slider">
                                        <div class="swiper-wrapper">

                                            <div class="swiper-slide">
                                                <img class="col-12 js-lazy" src="destinations.html#" data-src="<?=base_url()?>/public/img/rentals/2.png" alt="image">
                                            </div>

                                            <div class="swiper-slide">
                                                <img class="col-12 js-lazy" src="destinations.html#" data-src="<?=base_url()?>/public/img/rentals/3.png" alt="image">
                                            </div>

                                            <div class="swiper-slide">
                                                <img class="col-12 js-lazy" src="destinations.html#" data-src="<?=base_url()?>/public/img/rentals/1.png" alt="image">
                                            </div>

                                        </div>

                                        <div class="cardImage-slider__pagination js-pagination"></div>

                                        <div class="cardImage-slider__nav -prev">
                                            <button class="button -blue-1 bg-white size-30 rounded-full shadow-2 js-prev">
                                                <i class="icon-chevron-left text-10"></i>
                                            </button>
                                        </div>

                                        <div class="cardImage-slider__nav -next">
                                            <button class="button -blue-1 bg-white size-30 rounded-full shadow-2 js-next">
                                                <i class="icon-chevron-right text-10"></i>
                                            </button>
                                        </div>
                                    </div>

                                </div>

                                <div class="cardImage__wishlist">
                                    <button class="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                        <i class="icon-heart text-12"></i>
                                    </button>
                                </div>


                            </div>

                        </div>

                        <div class="rentalCard__content mt-10">
                            <div class="text-14 text-light-1 lh-14 mb-5">Ciutat Vella, Barcelona</div>

                            <h4 class="rentalCard__title text-dark-1 text-18 lh-16 fw-500">
                                <span>Premium One Bedroom Luxury Living in the Heart of Mayfair</span>
                            </h4>

                            <p class="text-light-1 lh-14 text-14 mt-5"></p>

                            <div class="d-flex items-center mt-5">
                                <div class="text-14 text-light-1">2 guests</div>
                                <div class="size-3 bg-light-1 rounded-full ml-10 mr-10"></div>
                                <div class="text-14 text-light-1">1 bedroom</div>
                                <div class="size-3 bg-light-1 rounded-full ml-10 mr-10"></div>
                                <div class="text-14 text-light-1">1 bed</div>
                            </div>

                            <div class="d-flex items-center mt-20">
                                <div class="flex-center bg-blue-1 rounded-4 size-30 text-12 fw-600 text-white">4.8</div>
                                <div class="text-14 text-dark-1 fw-500 ml-10">Exceptional</div>
                                <div class="text-14 text-light-1 ml-10">3,014 reviews</div>
                            </div>

                            <div class="mt-5">
                                <div class="text-light-1">
                                    <span class="fw-500 text-dark-1">US$72</span> / per night
                                </div>
                            </div>
                        </div>
                    </a>

                </div>

                <div class="col-xl-3 col-lg-3 col-sm-6">

                    <a href="rental-single.html" class="rentalCard -type-1 rounded-4 ">
                        <div class="rentalCard__image">

                            <div class="cardImage ratio ratio-1:1">
                                <div class="cardImage__content">

                                    <img class="rounded-4 col-12 js-lazy" src="destinations.html#" data-src="<?=base_url()?>/public/img/rentals/3.png" alt="image">


                                </div>

                                <div class="cardImage__wishlist">
                                    <button class="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                        <i class="icon-heart text-12"></i>
                                    </button>
                                </div>


                                <div class="cardImage__leftBadge">
                                    <div class="py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase bg-blue-1 text-white">
                                        Best Seller
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div class="rentalCard__content mt-10">
                            <div class="text-14 text-light-1 lh-14 mb-5">Manhattan, New York</div>

                            <h4 class="rentalCard__title text-dark-1 text-18 lh-16 fw-500">
                                <span>Style, Charm & Comfort in Camberwell</span>
                            </h4>

                            <p class="text-light-1 lh-14 text-14 mt-5"></p>

                            <div class="d-flex items-center mt-5">
                                <div class="text-14 text-light-1">2 guests</div>
                                <div class="size-3 bg-light-1 rounded-full ml-10 mr-10"></div>
                                <div class="text-14 text-light-1">1 bedroom</div>
                                <div class="size-3 bg-light-1 rounded-full ml-10 mr-10"></div>
                                <div class="text-14 text-light-1">1 bed</div>
                            </div>

                            <div class="d-flex items-center mt-20">
                                <div class="flex-center bg-blue-1 rounded-4 size-30 text-12 fw-600 text-white">4.8</div>
                                <div class="text-14 text-dark-1 fw-500 ml-10">Exceptional</div>
                                <div class="text-14 text-light-1 ml-10">3,014 reviews</div>
                            </div>

                            <div class="mt-5">
                                <div class="text-light-1">
                                    <span class="fw-500 text-dark-1">US$72</span> / per night
                                </div>
                            </div>
                        </div>
                    </a>

                </div>

                <div class="col-xl-3 col-lg-3 col-sm-6">

                    <a href="rental-single.html" class="rentalCard -type-1 rounded-4 ">
                        <div class="rentalCard__image">

                            <div class="cardImage ratio ratio-1:1">
                                <div class="cardImage__content">

                                    <img class="rounded-4 col-12 js-lazy" src="destinations.html#" data-src="<?=base_url()?>/public/img/rentals/4.png" alt="image">


                                </div>

                                <div class="cardImage__wishlist">
                                    <button class="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                        <i class="icon-heart text-12"></i>
                                    </button>
                                </div>


                                <div class="cardImage__leftBadge">
                                    <div class="py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase bg-yellow-1 text-dark-1">
                                        Top Rated
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div class="rentalCard__content mt-10">
                            <div class="text-14 text-light-1 lh-14 mb-5">Vaticano Prati, Rome</div>

                            <h4 class="rentalCard__title text-dark-1 text-18 lh-16 fw-500">
                                <span>Marylebone - Oxford Street 1 bed apt with WiFi</span>
                            </h4>

                            <p class="text-light-1 lh-14 text-14 mt-5"></p>

                            <div class="d-flex items-center mt-5">
                                <div class="text-14 text-light-1">2 guests</div>
                                <div class="size-3 bg-light-1 rounded-full ml-10 mr-10"></div>
                                <div class="text-14 text-light-1">1 bedroom</div>
                                <div class="size-3 bg-light-1 rounded-full ml-10 mr-10"></div>
                                <div class="text-14 text-light-1">1 bed</div>
                            </div>

                            <div class="d-flex items-center mt-20">
                                <div class="flex-center bg-blue-1 rounded-4 size-30 text-12 fw-600 text-white">4.8</div>
                                <div class="text-14 text-dark-1 fw-500 ml-10">Exceptional</div>
                                <div class="text-14 text-light-1 ml-10">3,014 reviews</div>
                            </div>

                            <div class="mt-5">
                                <div class="text-light-1">
                                    <span class="fw-500 text-dark-1">US$72</span> / per night
                                </div>
                            </div>
                        </div>
                    </a>

                </div>

            </div>
            <div class="row y-gap-30 pt-40 sm:pt-20">

                <div class="col-xl-3 col-lg-3 col-sm-6">

                    <a href="rental-single.html" class="rentalCard -type-1 rounded-4 ">
                        <div class="rentalCard__image">

                            <div class="cardImage ratio ratio-1:1">
                                <div class="cardImage__content">

                                    <img class="rounded-4 col-12 js-lazy" src="destinations.html#" data-src="<?=base_url()?>/public/img/rentals/1.png" alt="image">


                                </div>

                                <div class="cardImage__wishlist">
                                    <button class="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                        <i class="icon-heart text-12"></i>
                                    </button>
                                </div>


                            </div>

                        </div>

                        <div class="rentalCard__content mt-10">
                            <div class="text-14 text-light-1 lh-14 mb-5">Westminster Borough, London</div>

                            <h4 class="rentalCard__title text-dark-1 text-18 lh-16 fw-500">
                                <span>Luxury New Apartment With Private Garden</span>
                            </h4>

                            <p class="text-light-1 lh-14 text-14 mt-5"></p>

                            <div class="d-flex items-center mt-5">
                                <div class="text-14 text-light-1">2 guests</div>
                                <div class="size-3 bg-light-1 rounded-full ml-10 mr-10"></div>
                                <div class="text-14 text-light-1">1 bedroom</div>
                                <div class="size-3 bg-light-1 rounded-full ml-10 mr-10"></div>
                                <div class="text-14 text-light-1">1 bed</div>
                            </div>

                            <div class="d-flex items-center mt-20">
                                <div class="flex-center bg-blue-1 rounded-4 size-30 text-12 fw-600 text-white">4.8</div>
                                <div class="text-14 text-dark-1 fw-500 ml-10">Exceptional</div>
                                <div class="text-14 text-light-1 ml-10">3,014 reviews</div>
                            </div>

                            <div class="mt-5">
                                <div class="text-light-1">
                                    <span class="fw-500 text-dark-1">US$72</span> / per night
                                </div>
                            </div>
                        </div>
                    </a>

                </div>

                <div class="col-xl-3 col-lg-3 col-sm-6">

                    <a href="rental-single.html" class="rentalCard -type-1 rounded-4 ">
                        <div class="rentalCard__image">

                            <div class="cardImage ratio ratio-1:1">
                                <div class="cardImage__content">


                                    <div class="cardImage-slider rounded-4 overflow-hidden js-cardImage-slider">
                                        <div class="swiper-wrapper">

                                            <div class="swiper-slide">
                                                <img class="col-12 js-lazy" src="destinations.html#" data-src="<?=base_url()?>/public/img/rentals/2.png" alt="image">
                                            </div>

                                            <div class="swiper-slide">
                                                <img class="col-12 js-lazy" src="destinations.html#" data-src="<?=base_url()?>/public/img/rentals/3.png" alt="image">
                                            </div>

                                            <div class="swiper-slide">
                                                <img class="col-12 js-lazy" src="destinations.html#" data-src="<?=base_url()?>/public/img/rentals/1.png" alt="image">
                                            </div>

                                        </div>

                                        <div class="cardImage-slider__pagination js-pagination"></div>

                                        <div class="cardImage-slider__nav -prev">
                                            <button class="button -blue-1 bg-white size-30 rounded-full shadow-2 js-prev">
                                                <i class="icon-chevron-left text-10"></i>
                                            </button>
                                        </div>

                                        <div class="cardImage-slider__nav -next">
                                            <button class="button -blue-1 bg-white size-30 rounded-full shadow-2 js-next">
                                                <i class="icon-chevron-right text-10"></i>
                                            </button>
                                        </div>
                                    </div>

                                </div>

                                <div class="cardImage__wishlist">
                                    <button class="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                        <i class="icon-heart text-12"></i>
                                    </button>
                                </div>


                            </div>

                        </div>

                        <div class="rentalCard__content mt-10">
                            <div class="text-14 text-light-1 lh-14 mb-5">Ciutat Vella, Barcelona</div>

                            <h4 class="rentalCard__title text-dark-1 text-18 lh-16 fw-500">
                                <span>Premium One Bedroom Luxury Living in the Heart of Mayfair</span>
                            </h4>

                            <p class="text-light-1 lh-14 text-14 mt-5"></p>

                            <div class="d-flex items-center mt-5">
                                <div class="text-14 text-light-1">2 guests</div>
                                <div class="size-3 bg-light-1 rounded-full ml-10 mr-10"></div>
                                <div class="text-14 text-light-1">1 bedroom</div>
                                <div class="size-3 bg-light-1 rounded-full ml-10 mr-10"></div>
                                <div class="text-14 text-light-1">1 bed</div>
                            </div>

                            <div class="d-flex items-center mt-20">
                                <div class="flex-center bg-blue-1 rounded-4 size-30 text-12 fw-600 text-white">4.8</div>
                                <div class="text-14 text-dark-1 fw-500 ml-10">Exceptional</div>
                                <div class="text-14 text-light-1 ml-10">3,014 reviews</div>
                            </div>

                            <div class="mt-5">
                                <div class="text-light-1">
                                    <span class="fw-500 text-dark-1">US$72</span> / per night
                                </div>
                            </div>
                        </div>
                    </a>

                </div>

                <div class="col-xl-3 col-lg-3 col-sm-6">

                    <a href="rental-single.html" class="rentalCard -type-1 rounded-4 ">
                        <div class="rentalCard__image">

                            <div class="cardImage ratio ratio-1:1">
                                <div class="cardImage__content">

                                    <img class="rounded-4 col-12 js-lazy" src="destinations.html#" data-src="<?=base_url()?>/public/img/rentals/3.png" alt="image">


                                </div>

                                <div class="cardImage__wishlist">
                                    <button class="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                        <i class="icon-heart text-12"></i>
                                    </button>
                                </div>


                                <div class="cardImage__leftBadge">
                                    <div class="py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase bg-blue-1 text-white">
                                        Best Seller
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div class="rentalCard__content mt-10">
                            <div class="text-14 text-light-1 lh-14 mb-5">Manhattan, New York</div>

                            <h4 class="rentalCard__title text-dark-1 text-18 lh-16 fw-500">
                                <span>Style, Charm & Comfort in Camberwell</span>
                            </h4>

                            <p class="text-light-1 lh-14 text-14 mt-5"></p>

                            <div class="d-flex items-center mt-5">
                                <div class="text-14 text-light-1">2 guests</div>
                                <div class="size-3 bg-light-1 rounded-full ml-10 mr-10"></div>
                                <div class="text-14 text-light-1">1 bedroom</div>
                                <div class="size-3 bg-light-1 rounded-full ml-10 mr-10"></div>
                                <div class="text-14 text-light-1">1 bed</div>
                            </div>

                            <div class="d-flex items-center mt-20">
                                <div class="flex-center bg-blue-1 rounded-4 size-30 text-12 fw-600 text-white">4.8</div>
                                <div class="text-14 text-dark-1 fw-500 ml-10">Exceptional</div>
                                <div class="text-14 text-light-1 ml-10">3,014 reviews</div>
                            </div>

                            <div class="mt-5">
                                <div class="text-light-1">
                                    <span class="fw-500 text-dark-1">US$72</span> / per night
                                </div>
                            </div>
                        </div>
                    </a>

                </div>

                <div class="col-xl-3 col-lg-3 col-sm-6">

                    <a href="rental-single.html" class="rentalCard -type-1 rounded-4 ">
                        <div class="rentalCard__image">

                            <div class="cardImage ratio ratio-1:1">
                                <div class="cardImage__content">

                                    <img class="rounded-4 col-12 js-lazy" src="destinations.html#" data-src="<?=base_url()?>/public/img/rentals/4.png" alt="image">


                                </div>

                                <div class="cardImage__wishlist">
                                    <button class="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                        <i class="icon-heart text-12"></i>
                                    </button>
                                </div>


                                <div class="cardImage__leftBadge">
                                    <div class="py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase bg-yellow-1 text-dark-1">
                                        Top Rated
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div class="rentalCard__content mt-10">
                            <div class="text-14 text-light-1 lh-14 mb-5">Vaticano Prati, Rome</div>

                            <h4 class="rentalCard__title text-dark-1 text-18 lh-16 fw-500">
                                <span>Marylebone - Oxford Street 1 bed apt with WiFi</span>
                            </h4>

                            <p class="text-light-1 lh-14 text-14 mt-5"></p>

                            <div class="d-flex items-center mt-5">
                                <div class="text-14 text-light-1">2 guests</div>
                                <div class="size-3 bg-light-1 rounded-full ml-10 mr-10"></div>
                                <div class="text-14 text-light-1">1 bedroom</div>
                                <div class="size-3 bg-light-1 rounded-full ml-10 mr-10"></div>
                                <div class="text-14 text-light-1">1 bed</div>
                            </div>

                            <div class="d-flex items-center mt-20">
                                <div class="flex-center bg-blue-1 rounded-4 size-30 text-12 fw-600 text-white">4.8</div>
                                <div class="text-14 text-dark-1 fw-500 ml-10">Exceptional</div>
                                <div class="text-14 text-light-1 ml-10">3,014 reviews</div>
                            </div>

                            <div class="mt-5">
                                <div class="text-light-1">
                                    <span class="fw-500 text-dark-1">US$72</span> / per night
                                </div>
                            </div>
                        </div>
                    </a>

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

