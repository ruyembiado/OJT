<?php
require_once 'header.php';
require_once '../config/noauth.php'; //session block
if (!isset($_SESSION['verified'])) {
    redirect('index');
}
?>
<div class="col-4 mx-auto bg-dark shadow border-0 card mt-3 p-5 card-radius">
    <h3 class="text-success h3 text-center"><i class="fa fa-check-circle"></i> Verified Successfully</h3>
    <form method="post" action="../actions/forgotupdatepass.php">
        <div class="form-group text-start mt-3 mb-2">
            <label class="text-size">New Password</label>
            <input class="form-control bg-dark text-light" name="confpass" type="password" placeholder="Enter your new password" />
            <?php if (showError('confpass')) :
                echo showError('confpass');
            endif; ?>
        </div>
        <div class="form-group text-start mb-3">
            <label class="text-size">Confirm New Password</label>
            <input class="form-control bg-dark text-light" name="reconfpass" type="password" placeholder="Re-enter your new password" />
            <?php if (showError('reconfpass')) :
                echo showError('reconfpass');
            endif; ?>
        </div>
        <div class="form-group text-start">
            <div class="row mx-auto">
                <button class="btn btn-primary ">Update Password</button>
            </div>
        </div>
    </form>

</div>
<?php include 'footer.php'; ?>