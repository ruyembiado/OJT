<?php
require_once 'header.php';
require_once '../config/noauth.php'; //session block
if (!isset($_SESSION['ForgotID']) || !isset($_SESSION['ForgotGenerated'])) {
    redirect('index');
}
$userfind = first('users', ['id' => $_SESSION['ForgotID']]);
?>
<div class="col-4 mx-auto bg-dark shadow border-0 card mt-3 p-5 card-radius">
    <div class="col-3 mx-auto mb-2">
        <img class="img-fluid user-logo" src="<?php echo $img; ?>/user-logo.png">
    </div>
    <h4 class="h4 text-light text-center">Is this you <?php echo $userfind['name']; ?>?</h4>
    <p class=" text-light text-center m-0">We`ve sent a verification code in your email <?php echo $userfind['email'] ?></p>
    <form method="post" action="../actions/verifypassword.php">
        <div class="form-group mt-3 text-start">
            <label class="text-size">Verification Code</label>
            <div class="d-flex align-items-center">
                <i class="fa fa-check-circle position-absolute text-light ms-1 border-end border-secodary pe-1"></i>
                <input class="form-control bg-dark text-secondary" name="verificationCode" placeholder="Verification code" style="text-indent:18px">
            </div>
            <?php if (showError('verify')) :
                echo showError('verify');
            endif; ?>
        </div>
        <div class="form-group mt-2">
            <div class="row mx-auto">
                <button class="btn btn-primary" type="submit">Verify</button>
            </div>
        </div>
    </form>
</div>
<?php include 'footer.php'; ?>