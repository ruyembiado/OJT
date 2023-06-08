<?php
require_once '../config/noauth.php';
require_once 'header.php';
?>
<div class="col-md-7 col-10 m-auto mt-3 bg-dark rounded shadow card-radius">
    <div class="row m-auto">
        <div class="col-6 d-flex align-items-center ps-5 login-side-sm">
            <img class="img-fluid align-self-center" src="<?php echo $img; ?>/login-bg.png">
        </div>
        <div class="col-md-6 col-11 mt-md-5 mb-4 mt-2 px-5 pb-5 pt-2 card-sm">
            <div class="col-6 mx-auto mt-0 mt-md-1 mt-0">
                <img class="img-fluid login-logo" src="<?php echo $img; ?>/login-logo.png">
            </div>
            <h4 class="h5 text-start text-light mt-2 mb-1">Sign in</h4>
            <p class="text-light text-start loginsubtext m-0">Please sign in to continue</p>
            <form method="post" action="../actions/login.php" id="login-form">
                <div class="form-group mb-3 mt-2">
                    <div class="d-flex align-items-center">
                        <i class="fa fa-user text-light position-absolute ms-2 border-end pe-1"></i>
                        <input class="form-control bg-dark text-light text-indent form-round" name="username" value="<?php echo getValue('username'); ?>" placeholder="Enter your username">
                    </div>
                    <?php if (showError('username')) :
                        echo showError('username');
                    endif; ?>
                </div>
                <div class="form-group mb-1">
                    <div class="d-flex align-items-center">
                        <i class="fa fa-lock text-light position-absolute ms-2 border-end pe-1"></i>
                        <input class="form-control bg-dark text-light text-indent form-round" type="password" name="password" placeholder="Enter your password">
                    </div>
                    <?php if (showError('password')) : ?>
                        <?php echo showError('password'); ?>
                    <?php endif; ?>
                </div>
                <div class="d-flex justify-content-between mx-2">
                    <div class="form-check d-flex justify-content-start">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                        <label class="form-check-label ms-1" for="flexCheckChecked" style="font-size:11px; margin-top:4px">
                            <i>Remember me</i>
                        </label>
                    </div>
                    <a class="" href="forgotpassword.php" style="font-size:11px; margin-top:4px">Forgot password?</a>
                </div>
                <div class="form-group">
                    <div class="row m-auto">
                        <button type="submit" name="login" class="btn btn-primary form-round login d-flex align-items-center justify-content-center">
                            Sign in
                        </button>
                        <p class="text-center text-light text-size mt-1">No Account?<a class="m-0 text-decoration-none" href="register.php"> Sign up Here</a></p>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>


<?php
require_once 'footer.php';
?>