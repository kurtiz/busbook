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
                        <h2 class="sectionTitle__title">Browse through the available trips</h2>
                        <p class=" sectionTitle__text mt-5 sm:mt-0">Find your trip and book with us</p>
                    </div>
                </div>

            </div>

            <div class="row y-gap-30 pt-40 sm:pt-20">
                <?php if (isset($tickets)): ?>
                    <?php if (is_array($tickets)): ?>
                        <?php for ($i = 0; $i < count($tickets); $i++): ?>
                            <div class="col-xl-3 col-lg-3 col-sm-6">

                                <a href="<?=base_url()?>/destinations/view/<?=$tickets[$i]['ticket_id']?>" class="rentalCard -type-1 rounded-4 ">
                                    <div class="rentalCard__image">

                                        <div class="cardImage ratio ratio-1:1">
                                            <div class="cardImage__content">

                                                <img class="rounded-4 col-12 js-lazy" src="javascript:void(0)"
                                                     data-src="<?= $adminUrl . "/public/uploads/tickets/" . $tickets[$i]["ticket_image"] ?>"
                                                     alt="image">


                                            </div>

                                            <div class="cardImage__wishlist">
                                                <button class="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                                    <i class="icon-heart text-12"></i>
                                                </button>
                                            </div>


                                        </div>

                                    </div>

                                    <div class="rentalCard__content mt-10">
                                        <div class="text-14 text-light-1 lh-14 mb-5"><?= $tickets[$i]["departure_date"] ?>   ➡️ <?= $tickets[$i]["departure_time"] ?></div>
                                        <h4 class="rentalCard__title text-dark-1 text-18 lh-16 fw-500">
                                            <span><?= $from[$i] ?>   ➡️ <?= $to[$i] ?></span>
                                        </h4>
                                        <p class="text-light-1 lh-14 text-14"></p>

                                        <div class="mt-5">
                                            <div class="text-light-1">
                                                <span class="fw-500 text-dark-1">GH¢ <?= $tickets[$i]["ticket_cost"] ?></span>
                                                / per ticket
                                            </div>
                                        </div>
                                    </div>
                                </a>

                            </div>
                        <?php endfor; ?>
                    <?php endif; ?>
                <?php endif; ?>
            </div>
            <div class="row mt-10">
                <div class="col-md-12">
                    <?php if ($pager) : ?>
                        <?php $pagi_path = '/destinations'; ?>
                        <?php $pager->setPath($pagi_path); ?>
                        <?= $pager->links() ?>
                    <?php endif ?>
                </div>
            </div>
            <style>

            </style>
        </div>
    </section>

    <?= $this->include("widgets/footer") ?>

</main>

<?= $this->include("widgets/options") ?>

<!-- JavaScript -->
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAAz77U5XQuEME6TpftaMdX0bBelQxXRlM"></script>
<script src="https://unpkg.com/@googlemaps/markerclusterer/dist/index.min.js"></script>

<script src="<?= base_url() ?>/public/js/vendors.js"></script>
<script src="<?= base_url() ?>/public/js/main.js"></script>
</body>

</html>
<?= $this->endSection(); ?>

