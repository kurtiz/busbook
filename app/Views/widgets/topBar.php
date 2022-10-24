<header data-add-bg="bg-dark-1" class="header bg-green js-header" data-x="header" data-x-toggle="is-menu-opened">
    <div data-anim="fade" class="header__container px-30 sm:px-20">
        <div class="row justify-between items-center">

            <div class="col-auto">
                <div class="d-flex items-center">
                    <a href="<?= base_url() ?>" class="header-logo mr-20" data-x="header-logo"
                       data-x-toggle="is-logo-dark">
                        <img width="10px" src="<?= base_url() ?>/public/img/general/busbook-logo.png" alt="logo icon">
                    </a>


                    <div class="header-menu " data-x="mobile-menu" data-x-toggle="is-menu-active">
                        <div class="mobile-overlay"></div>

                        <div class="header-menu__content">
                            <div class="mobile-bg js-mobile-bg"></div>

                            <div class="menu js-navList">
                                <ul class="menu__nav text-white -is-active">

                                    <li>
                                        <a data-barba href="<?= base_url() ?>">
                                            <span class="mr-10">Home</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="<?= base_url() ?>/destinations">
                                            Destinations
                                        </a>
                                    </li>

                                    <li>
                                        <a href="<?= base_url() ?>/contact">Contact</a>
                                    </li>
                                </ul>
                            </div>

                            <div class="mobile-footer px-20 py-20 border-top-light js-mobile-footer">
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div class="col-auto">
                <div class="d-flex items-center">
                    <div class="d-flex items-center ml-20 is-menu-opened-hide md:d-none">
                        <a href="<?= base_url() ?>/login"
                           class="button px-30 fw-400 text-14 -white bg-white h-50 text-dark-1">Sign In</a>
                        <a href="<?= base_url() ?>/signup"
                           class="button px-30 fw-400 text-14 border-white -outline-white h-50 text-white ml-20">Register</a>
                        <?php if (session()->has("logged_user")): ?>
                            <div class="ml-20 text-white">
                                <a data-x-click="lang"
                                   href="javascript:void(0)"
                                   class="d-flex items-center icon-user text-inherit text-22">

                                </a>
                            </div>
                        <?php endif; ?>
                    </div>

                    <div class="d-none xl:d-flex x-gap-20 items-center pl-30 text-white" data-x="header-mobile-icons"
                         data-x-toggle="text-white">
                        <div>
                            <button class="d-flex items-center icon-menu text-inherit text-20"
                                    data-x-click="header, header-logo, header-mobile-icons, mobile-menu"></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</header>