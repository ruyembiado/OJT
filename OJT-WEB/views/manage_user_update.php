<?php include 'header.php';
@include '../config/auth.php'; //session block
?>

<?php
$id = $_GET['id'];
$users = first('users', ['id' => $id]);
?>

<div class="card col-md-5 col-11 m-auto mt-4 bg-dark p-5 card-sm card-radius">
    <div class="col-3 m-auto">
        <img class="img-fluid user-logo" src="<?php echo $img; ?>/user-logo.png">
    </div>
    <h4 class="h4 text-center text-light mt-2">Update user account</h4>
    <form method="POST" class="text-start" action="../actions/manage_user.php">
        <div class="form-group mb-2 mt-3">
            <label class="text-light text-size">Name</label>
            <input class="form-control bg-dark text-light" name="name" value="<?php echo $users['name']; ?>" placeholder="Enter your name">
            <?php if (showError('name')) :
                echo showError('name');
            endif; ?>
        </div>
        <div class="form-check d-flex align-items-center">
            <input type="checkbox" class="form-check-input" name="email_check" value="1" id="email_check" />
            <label class="ms-1 form-check-label text-size">
                <i>check to update email</i>
            </label>
        </div>
        <div class="form-group mb-2">
            <label class="text-light text-size">Email</label>
            <input class="form-control bg-dark text-light " name="email" value="<?php echo $users['email']; ?>" placeholder="Enter your email">
            <?php if (showError('email')) :
                echo showError('email');
            endif; ?>
        </div>
        <div class="form-check d-flex align-items-center">
            <input type="checkbox" class="form-check-input" name="user_check" value="1" id="user_check" />
            <label class="ms-1 form-check-label text-size">
                <i>check to update username</i>
            </label>
        </div>
        <div class="form-group mb-2">
            <label class="text-light text-size">Username</label>
            <input class="form-control bg-dark text-light " name="username" value="<?php echo $users['username']; ?>" placeholder="Enter your username">
            <?php if (showError('username')) :
                echo showError('username');
            endif; ?>
        </div>
        <div class="form-check d-flex align-items-center">
            <input type="checkbox" class="form-check-input" name="pass_check" value="1" id="pass_check" />
            <label class="ms-1 form-check-label text-size">
                <i>check to update password</i>
            </label>
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
                <input type="hidden" name="id" value="<?php echo $id; ?>" />
                <button type="submit" class="btn btn-primary" name="update_user">Update</button>
            </div>
        </div>
    </form>
</div>


<?php include 'footer.php'; ?>