<?php
require_once 'header.php';
require_once '../config/auth.php'; //session block
?>

<div class="row m-auto">
    <div class="card col-md-5 col-11 m-auto mt-4 bg-dark p-5 card-sm card-radius border-0">
        <div class="col-3 m-auto">
            <img class="img-fluid user-logo" src="<?php echo $img; ?>/user-logo.png">
        </div>
        <h4 class="h4 text-center text-light mt-2">Register user account</h4>
        <form method="POST" class="text-start" action="../actions/manage_user.php" id="add_user_form">
            <div class="form-group mb-2 mt-3" style="display:none" id="student_id_form">
                <label class="text-light text-size">Student ID</label>
                <input class="form-control bg-dark text-light" name="student_id" value="<?php echo getValue('student_id'); ?>" placeholder="Enter your ID">
                <?php if (showError('student_id')) :
                    echo showError('student_id');
                endif; ?>
            </div>
            <div class="form-group mb-2">
                <label class="text-light text-size">Name</label>
                <input class="form-control bg-dark text-light" name="name" value="<?php echo getValue('name'); ?>" placeholder="Enter your name">
                <?php if (showError('name')) :
                    echo showError('name');
                endif; ?>
            </div>
            <div class="form-group mb-2">
                <label class="text-light text-size">Username</label>
                <input class="form-control bg-dark text-light " name="username" value="<?php echo getValue('username'); ?>" placeholder="Enter your username">
                <?php if (showError('username')) :
                    echo showError('username');
                endif; ?>
            </div>
            <div class="form-group mb-2">
                <label class="text-light text-size">Email</label>
                <input class="form-control bg-dark text-light " name="email" value="<?php echo getValue('email'); ?>" placeholder="Enter your email">
                <?php if (showError('email')) :
                    echo showError('email');
                endif; ?>
            </div>
            <div class="form-group mb-2 ">
                <label class="text-light text-size">Role</label>
                <select name="role" class=" form-select bg-dark text-light" id="role_user">
                    <option value="admin">Admin</option>
                    <option value="student">Student</option>
                    <option value="rescuer">Rescuer</option>
                </select>
            </div>
            <div class="form-group mb-2">
                <label class="text-light text-size">Password</label>
                <input type="password" class="form-control bg-dark text-light" name="password" placeholder="Enter your password">
                <?php if (showError('password')) :
                    echo showError('password');
                endif; ?>
            </div>
            <div class="form-group mb-3 ">
                <label class="text-light text-size">Confirm Password</label>
                <input type="password" class="form-control bg-dark text-light" name="confpassword" placeholder="Re-enter password">
                <?php if (showError('confpassword')) :
                    echo showError('confpassword');
                endif; ?>
            </div>
            <div class="form-group">
                <div class="row m-auto">
                    <button type="submit" class="btn btn-primary" name="register_user" id="add_user_btn">Register</button>
                </div>
            </div>
        </form>
    </div>
</div>
<?php require_once 'footer.php'; ?>