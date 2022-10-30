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
    <link rel="stylesheet" href="<?= base_url() ?>/public/js/jquery-toast-plugin/dist/jquery.toast.min.css">

    <title>Trip Details | BusBook</title>
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

    <section class="mt-80 pt-40">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="galleryGrid -type-1 relative">

                        <div class="galleryGrid__item">
                            <img src="<?= $adminUrl . "/public/uploads/tickets/". $ticket->ticket_image?>" alt="image"
                                 class="rounded-4">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="pt-40">
        <div class="container js-pin-container">
            <div class="row y-gap-30">
                <div class="col-lg-8">

                    <div class="border-top-light mt-40 mb-40"></div>

                    <div>
                        <h3 class="text-22 fw-500"><?=$from->destination?> ➡️ <?=$to->destination?></h3>
                        <p>
                            <h4 class="text-15">Date:</h4> <?=$ticket->departure_date?>
                            <h4 class="text-15">Time:</h4> <?=$ticket->departure_time?>
                            <h4 class="text-15">Bus:</h4> <?=$bus->bus_model?>
                            <h4 class="text-15">Driver:</h4> <?=$driver->driver_name?>
                    </div>

                </div>

                <div class="col-lg-4">
                    <div class="d-flex justify-end js-pin-content" data-offset="450">
                        <form method="post" class="px-30 py-30 rounded-4 border-light bg-white w-360">
                            <div class="row y-gap-15 items-center justify-between">
                                <div class="col-auto">
                                    <div class="text-14 text-light-1">
                                        <span class="text-20 fw-500 text-dark-1 mr-5">GH¢ <?=$ticket->ticket_cost?></span>
                                    </div>
                                    <div class="form-input w-250">
                                        <input type="number" min="1" value="1" name="tk_quantity" required>
                                        <label class="lh-1 text-14 text-light-1">Quantity</label>
                                    </div>
                                </div>

                            </div>

                            <div class="row y-gap-20 pt-20">
                                <div class="col-12">
                                    <button class="button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-blue-1 text-white">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <?= $this->include("widgets/footer") ?>

</main>

<?= $this->include("widgets/options") ?>

<!-- JavaScript -->
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAAz77U5XQuEME6TpftaMdX0bBelQxXRlM"></script>
<script src="https://unpkg.com/@googlemaps/markerclusterer/dist/index.min.js"></script>

<script src="<?= base_url() ?>/public/js/jquery.min.js"></script>
<script src="<?= base_url() ?>/public/js/vendors.js"></script>
<script src="<?= base_url() ?>/public/js/main.js"></script>
<script src="<?= base_url() ?>/public/js/jquery-toast-plugin/dist/jquery.toast.min.js"></script>
</body>
<script>
    <?php if(session()->has("success")):?>
    $.toast({
        text: '<?=session()->getTempdata("success")?>',
        showHideTransition: 'fade',
        icon: 'success',
        position: "top-right",
        bgColor: '#2dce89',
        textColor: 'white'
    })
    <?php endif;?>

    <?php if(session()->has("error")):?>
    $.toast({
        text: '<?=session()->getTempdata("error")?>',
        showHideTransition: 'fade',
        icon: 'error',
        position: "top-right",
        bgColor: '#ce2d2d',
        textColor: 'white'
    })
    <?php endif;?>
</script>
</html>
<?= $this->endSection(); ?>

