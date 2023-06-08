<?php
require_once '../config/noauth.php';
require_once 'header.php';
?>

<div class="card col-md-4 m-auto mt-4 bg-dark p-5 card-sm shadow card-radius border-0 register-card" style="z-index:1">
    <div class="col-6 mx-auto mt-0 mt-md-1 mt-0">
        <img class="img-fluid login-logo" src="<?php echo $img; ?>/login-logo.png">
    </div>
    <h4 class="h5 text-start text-light mt-2 mb-1">Sign up</h4>
    <p class="text-light text-start loginsubtext m-0">Please sign up to continue</p>
    <form method="POST" class="text-start" action="../actions/register.php">
        <div class="form-group mb-2 mt-2">
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
        <div class="form-group mb-2">
            <label class="text-light text-size">Year Level</label>
            <select class="form-select bg-dark text-light" name="year">
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
                <option value="5">5th Year</option>
            </select>
        </div>
        <div class="form-group mb-2">
            <label class="text-light text-size">Course</label>
            <select class="form-select bg-dark text-light" name="course">
                <?php $course = findAll('course');
                foreach ($course as $row) :
                ?>
                    <option value="<?= $row['course_ID'] ?>"><?= $row['course_name'] ?></option>
                <?php endforeach; ?>
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
                <button type="submit" class="btn btn-primary" name="register">Sign up</button>
                <p class="text-center text-light text-size mt-1">Already have an account?<a class="m-0 text-decoration-none" href="index.php"> Sign in Here</a></p>
            </div>
        </div>
    </form>
</div>

<?php
require_once 'footer.php';
?>