<?php
require_once 'header.php';
require_once '../config/noauth.php'; //session block
?>

<div class="col-4 mx-auto bg-dark shadow border-0 card mt-3 p-5 card-radius">
    <div class="col-md-2 m-auto">
        <img class="img-fluid" src="../public/assets/img/teplogidrostroy-password-manager-png-favpng-P82qN584EwP7VQzK8M5SRv8CE-removebg-preview.png" />
    </div>
    <h4 class="h4 text-light text-center">Forgot your Password?</h4>
    <form method="post" action="../actions/forgotpass_1.php" id="forget-form">
        <div class="form-group text-start mt-2">
            <label class="text-size">Username</label>
            <div class="d-flex align-items-center">
                <i class="fa fa-user position-absolute ms-2 border-secondary text-light border-end pe-1"></i>
                <input class="form-control bg-dark text-light" placeholder="Enter your username" name="username" style="text-indent:20px" />
            </div>
            <?php if (showError('username')) :
                echo showError('username');
            endif; ?>
        </div>
        <div class="form-group text-start mt-2">
            <div class="row mx-auto">
                <button class="btn btn-primary find" name="find">Find your Account</button>
            </div>
        </div>
    </form>
</div>
<?php include 'footer.php'; ?>