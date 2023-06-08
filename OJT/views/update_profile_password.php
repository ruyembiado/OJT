<?php require_once 'header.php';
require_once '../config/auth.php'; //session block

?>
<div class="col-md-5 col-11 m-auto shadow bg-dark mt-4 rounded pt-4 px-5 pb-5 profile">
    <div class="row mx-auto">
        <div class="col-3 mx-auto px-0">
            <img class="img-fluid" src="../public/assets/img/user-logo.png" />
        </div>
        <p class="m-0 text-light text-center" style="font-size: 21px;">Update Password</p>
    </div>
    <div class="row mx-auto mt-2">
        <form method="post" action="../actions/update_profile.php">
            <input type="hidden" value="<?php echo $_SESSION['id']; ?>" name="id">
            <div class="form-group text-start mb-2">
                <label class="text-start">Current Password</label>
                <div class="d-flex align-items-center">
                    <input class="form-control bg-dark text-light" name="current_pass" type="password"
                        placeholder="Enter your current password" id="password" />
                    <i class="fa fa-eye text-secondary" style="margin-left: -30px;"
                        onclick="togglePassword('password')"></i>
                </div>
                <?php if (showError('current_pass')):
                    echo showError('current_pass');
                endif; ?>
            </div>
            <div class="form-group text-start mb-2">
                <label class="text-start">New Password</label>
                <div class="d-flex align-items-center">
                    <input class="form-control bg-dark text-light" name="new_pass" type="password"
                        placeholder="Enter your new password" id="newpass" />
                    <i class="fa fa-eye text-secondary" style="margin-left: -30px;"
                        onclick="togglePassword('newpass')"></i>
                </div>
                <?php if (showError('new_pass')):
                    echo showError('new_pass');
                endif; ?>
            </div>
            <div class="form-group text-start mb-3">
                <label class="text-start">Confirm New Password</label>
                <div class="d-flex align-items-center">
                    <input class="form-control bg-dark text-light" name="conf_new_pass" type="password"
                        placeholder="Re-nter your new password" id="re-pass" />
                    <i class="fa fa-eye text-secondary" style="margin-left: -30px;"
                        onclick="togglePassword('re-pass')"></i>
                </div>
                <?php if (showError('conf_new_pass')):
                    echo showError('conf_new_pass');
                endif; ?>
            </div>
            <div class="form-group">
                <div class="row m-auto">
                    <button class="btn btn-primary" name="update_password">Update</button>
                </div>
            </div>
        </form>
    </div>
</div>
<?php include 'footer.php'; ?>