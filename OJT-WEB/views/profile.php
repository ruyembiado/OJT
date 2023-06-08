<?php require_once 'header.php';
require_once '../config/auth.php'; //session block
?>
<div class="col-md-5 col-11 m-auto shadow bg-dark mt-4 rounded py-5 px-4 profile card-radius">
    <div class="row m-auto">
        <div class="col-3 m-auto px-0">
            <img class="img-fluid" src="../public/assets/img/user-logo.png" />
        </div>
        <p class="m-0 text-light d-flex ms-1  justify-content-center align-items-center text-center" style="font-size: 21px;">
            <?php echo $_SESSION['name']; ?>
            <a href="update_profile_name.php"><i class="fa fa-edit text-light button-size m-0 ms-1"></i></a>
        </p>
        <p class="m-0 text-light ms-1 text-center" style="font-size: 12px;">
            <i>
                (
                <?php echo $_SESSION['role']; ?>
                )
            </i>
        </p>
    </div>
    <div class="row m-auto mt-2 mb-5 profile-detail">
        <div class="col-9 m-auto p-0 mt-3">
            <div class="d-flex justify-content-between mb-3 align-items-center profile-dets">
                <p class="m-0 text-light text-start button-size">Username:
                    <?php echo $_SESSION['username']; ?>
                </p>
                <a href="update_profile_username.php"><i class="fa fa-edit text-light button-size"></i></a>
            </div>
            <div class="d-flex justify-content-between mb-3 align-items-center profile-dets">
                <p class="m-0 text-light text-start button-size" style="display:flex; flex-wrap:shrink;">Email:
                    <?php echo $_SESSION['email']; ?>
                </p>
                <a href="update_profile_email.php"><i class="fa fa-edit text-light button-size"></i></a>
            </div>
            <div class="d-flex justify-content-between align-items-center profile-dets">
                <p class="m-0 text-light text-start button-size">Password: **********</p>
                <a href="update_profile_password.php"><i class="fa fa-edit text-light button-size"></i></a>
            </div>
        </div>
    </div>
</div>
<?php include 'footer.php'; ?>