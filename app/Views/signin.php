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

    <title>Sign In | BusBook</title>
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

    <section class="layout-pt-lg layout-pb-lg bg-blue-2">
        <div class="container">
            <div class="row justify-center">
                <div class="col-xl-6 col-lg-7 col-md-9">
                    <div class="px-50 py-50 sm:px-20 sm:py-20 bg-white shadow-4 rounded-4">
                        <?php if (session()->getTempdata("msg") == "error"): ?>
                            <div id="alert-card-error" class="alert-error">
                                Your credentials do not match...!
                            </div>
                        <?php endif; ?>

                        <form method="post" class="row y-gap-20">
                            <div class="col-12">
                                <h1 class="text-22 fw-500">Sign In</h1>
                                <p class="mt-10">Don't have an account?
                                    <a href="<?= base_url() ?>/signup" class="text-blue-1">Sign up</a>
                                </p>
                            </div>

                            <div class="col-12">

                                <div class="form-input ">
                                    <input type="email" name="email" required>
                                    <label class="lh-1 text-14 text-light-1">Email</label>
                                </div>

                            </div>

                            <div class="col-12">

                                <div class="form-input ">
                                    <input type="password" id="password" name="password" required>
                                    <label class="lh-1 text-14 text-light-1">Password</label>
                                </div>

                            </div>

                            <div class="col-12">

                                <button type="submit" class="button -md h-60 bg-blue-1 text-white">
                                    Sign In
                                </button>
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

<script src="<?= base_url() ?>/public/js/vendors.js"></script>
<script src="<?= base_url() ?>/public/js/main.js"></script>
<script src="<?= base_url() ?>/public/js/signup.js"></script>
<script>
</script>
</body>

</html>
<?= $this->endSection(); ?>

