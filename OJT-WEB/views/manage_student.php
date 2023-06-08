<?php
require_once 'header.php';
require_once '../config/auth.php'; //session block
?>
<div class="row mx-auto">
    <p class="text-start text-secondary m-0" style="font-size:13px"><i>Pages / Users</i></p>
    <h4 class="h4 text-start text-secondary" style="font-size:17px">Users</h4>
</div>
<div class="row m-auto px-3">
    <div class="col-12 m-auto mt-2 rounded bg-dark p-5 table-responsive-lg shadow card-radius">
        <div class="d-flex justify-content-between pb-2 mb-3">
            <div class="btn-group" role="group" aria-label="Basic example">
                <a type="button" href="manage_student.php" class="btn btn-primary btn-sm">Student</a>
                <a type="button" href="manage_user.php" class="btn btn-success text-light btn-sm">Others</a>
            </div>
            <a class="btn btn-primary float-end btn-sm px-3" href="add_user.php" style="font-size: 13px;"><i class="fa fa-user-plus"></i> Register</a>
        </div>

        <table id="example" class="table table-striped" style="width:100%">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Role</th>
                    <th>Email</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>

                <?php $result = find_where('users', ['role' => 'student']); ?>
                <?php foreach ($result as $row) : ?>
                    <tr>
                        <td>
                            <?= $row['name'] ?>
                        </td>
                        <td>
                            <?= $row['username'] ?>
                        </td>
                        <td>
                            <?= $row['role'] ?>
                        </td>
                        <td>
                            <?= $row['email'] ?>
                        </td>
                        <td class="text-center">
                            <div class="row mx-auto mb-0 ">
                                <a class="btn btn-primary btn-sm border border-primary" href="manage_user_update.php?id=<?= $row['id'] ?>" style="font-size:12px;"><i class="fa fa-edit"></i> Update</a>
                            </div>
                        </td>
                        <td class="text-center px-4">
                            <div class="row mx-auto mb-0"><a class="btn <?php if ($row['user_status'] === 1) {
                                                                            echo 'btn-danger deactivate';
                                                                        } else {
                                                                            echo 'btn-success activate';
                                                                        } ?> btn-sm" href="../actions/activation.php?id=<?= $row['id'] ?>" style="font-size:12px;"><i class="fa fa-power-off"></i> <?php if ($row['user_status'] === 1) {
                                                                                                                                                                                                        echo 'Deactivated';
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                        echo 'Activate';
                                                                                                                                                                                                    } ?></a></div>
                        </td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
</div>
<?php include 'footer.php'; ?>