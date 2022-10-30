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

    <title>Sign Up | BusBook</title>
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
                        <?php if (session()->getTempdata("msg") == "success"): ?>
                            <div id="alert-card-success" class="alert-success">
                                Your account has been created successfully!
                                <a href="<?= base_url() ?>/login">Login</a>
                            </div>
                        <?php endif; ?>

                        <?php if (session()->getTempdata("msg") == "error"): ?>
                            <div id="alert-card-error" class="alert-error">
                                An error occurred! Please try again later...
                            </div>
                        <?php endif; ?>

                        <form method="post" class="row y-gap-20">
                            <div class="col-12">
                                <h1 class="text-22 fw-500">Create an account</h1>
                                <p class="mt-10">Already have an account?
                                    <a href="<?= base_url() ?>/login" class="text-blue-1">Log in</a>
                                </p>
                            </div>

                            <div class="col-12">

                                <div class="form-input ">
                                    <input type="text" name="firstname" required>
                                    <label class="lh-1 text-14 text-light-1">First Name</label>
                                </div>

                            </div>

                            <div class="col-12">

                                <div class="form-input">
                                    <input type="text" name="lastname" required>
                                    <label class="lh-1 text-14 text-light-1">Last Name</label>
                                </div>

                            </div>

                            <div class="col-12">

                                <div class="form-input ">
                                    <input type="email" name="email" required>
                                    <label class="lh-1 text-14 text-light-1">Email</label>
                                </div>

                            </div>

                            <div class="col-12">

                                <div class="form-input ">
                                    <input type="tel" id="contact" name="contact" required>
                                    <label class="lh-1 text-14 text-light-1">Contact</label>
                                </div>
                                <div class="pl-10 errorMsg" style="display: none; color: tomato; font-size: 15px;">
                                    The passwords do not match!
                                </div>

                            </div>

                            <div class="col-12">

                                <div class="form-input ">
                                    <input type="password" id="password" name="password" required>
                                    <label class="lh-1 text-14 text-light-1">Password</label>
                                </div>
                                <div class="pl-10 errorMsg" style="display: none; color: tomato; font-size: 15px;">
                                    The passwords do not match!
                                </div>

                            </div>
                            <?php
                            /*
                            <div class="col-12">

                                <div class="form-input ">
                                    <input type="password" id="confirmPassword" class="form-control-danger" required>
                                    <label class="lh-1 text-14 text-light-1">Confirm Password</label>
                                </div>
                                <div class="pl-10 errorMsg" style="display: none; color: tomato; font-size: 15px;">
                                    The passwords do not match!
                                </div>
                            </div>
                            */
                            ?>
                            <div class="col-12">

                                <button type="submit" class="button -md h-60 bg-blue-1 text-white">
                                    Sign Up
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

