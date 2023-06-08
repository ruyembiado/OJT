<?php require_once 'header.php';
require_once '../config/auth.php'; //session block
?>
<div class="col-md-5 col-11 m-auto shadow bg-dark mt-4 rounded pt-4 px-5 pb-5 profile">
    <div class="row mx-auto">
        <div class="col-3 mx-auto px-0">
            <img class="img-fluid" src="../public/assets/img/user-logo.png" />
        </div>
        <p class="m-0 text-light text-center" style="font-size: 21px;">Update Email</p>
    </div>
    <div class="row mx-auto mt-2">
        <form method="post" action="../actions/update_profile.php">
            <div class="form-group text-start mb-3">
                <label class="text-start">Email</label>
                <div class="d-flex">
                    <i class="fa fa-envelope position-absolute ms-2 pe-1 border-end align-self-center text-light"></i>
                    <input class="form-control text-indent bg-dark text-light" name="email"
                        value="<?php echo $_SESSION['email']; ?>" placeholder="Enter your new email" />
                    <input type="hidden" name="id" value="<?php echo $_SESSION['id']; ?>" />
                </div>
                <?php if (showError('email')):
                    echo showError('email');
                endif; ?>
            </div>
            <div class="form-group">
                <div class="row m-auto">
                    <button class="btn btn-primary" name="update_email">Update</button>
                </div>
            </div>
        </form>
    </div>
</div>
<?php include 'footer.php'; ?>