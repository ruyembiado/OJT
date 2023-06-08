<?php
require_once 'header.php';
require_once '../config/auth.php'; //session block
?>
<div class="row mx-auto">
    <p class="text-start text-secondary m-0" style="font-size:13px"><i>Pages / Colleges</i></p>
    <h4 class="h4 text-start text-secondary" style="font-size:17px">Colleges</h4>
</div>
<div class="row m-auto px-3">
    <div class="col-sm-10 col-md-6 col-lg-6 mx-sm-auto mt-2">
        <div class="card rounded bg-dark p-5 table-responsive-lg shadow card-radius border-0">
            <div class="d-flex justify-content-between mb-4">
                <h5 class="text-light text-start">Colleges</h5>
                <button class="btn btn-primary btn-sm" id="add_college" data-bs-toggle="modal" data-bs-target="#addColleges"><i class="fa fa-building"></i> Add College</button>
            </div>
            <table id="example" class="table table-striped" style="width:100%">
                <thead>
                    <tr>
                        <th>Colleges</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <?php $result = findAll('colleges'); ?>
                    <?php foreach ($result as $row) : ?>
                        <tr>
                            <td><?= $row['colleges_name'] ?></td>
                            <td class="text-center">
                                <a class="btn btn-primary btn-sm border border-primary" data-bs-toggle="modal" data-bs-target="#editcolleges<?= $row['colleges_ID'] ?>" style="font-size:12px;"><i class="fa fa-edit"></i> Update</a>
                            </td>
                            <td class="text-center">
                                <a class="btn btn-danger btn-sm delete" href="../actions/delete_college.php?colleges_ID=<?= $row['colleges_ID'] ?>" style="font-size:12px;"><i class="fa fa-trash"></i> Delete</a>
                            </td>
                        </tr>
                        <!-- modal udpate-->
                        <div class="modal fade" id="editcolleges<?= $row['colleges_ID'] ?>" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content bg-dark">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5 text-light" id="exampleModalLabel"><i class="fa fa-building"></i> Add Rooms</h1>
                                    </div>
                                    <form method="post" action="../actions/manage_colleges.php">
                                        <div class="modal-body px-5 py-4 border-secondary">
                                            <div class="form-group text-start mb-2">
                                                <label>College Name</label>
                                                <input class="form-control bg-dark text-light" name="colleges_name" value="<?= $row['colleges_name'] ?>" placeholder="College Name" />
                                            </div>
                                            <input type="hidden" name="colleges_ID" value="<?= $row['colleges_ID']; ?>">
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"><i class="fa fa-close"></i> Close</button>
                                            <button type="submit" class="btn btn-primary" name="update_colleges"><i class="fa fa-check"></i> Update</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <!-- endmodal -->
                    <?php endforeach; ?>
                </tbody>
            </table>
        </div>
    </div>
    <div class="col-sm-10 col-md-6 col-lg-6 mx-sm-auto mt-2">
        <div class="card rounded bg-dark p-5 table-responsive-lg shadow card-radius border-0">
            <div class="d-flex justify-content-between mb-4">
                <h5 class="text-light text-start">Courses</h5>
                <button class="btn btn-primary btn-sm" id="add_course" data-bs-toggle="modal" data-bs-target="#addCourse"><i class="fa fa-building"></i> Add Course</button>
            </div>
            <table id="example1" class="table table-striped" style="width:100%">
                <thead>
                    <tr>
                        <th>Course</th>
                        <th>Colleges</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <?php $result = joinTable("course", [["colleges", "course.colleges_ID", "colleges.colleges_ID"]]); ?>
                    <?php foreach ($result as $row) : ?>
                        <tr>
                            <td><?= $row['course_name'] ?></td>
                            <td><?= $row['colleges_name'] ?></td>
                            <td class="text-center">
                                <a class="btn btn-primary btn-sm border border-primary" data-bs-toggle="modal" data-bs-target="#editcourse<?= $row['course_ID'] ?>" style="font-size:12px;"><i class="fa fa-edit"></i> Update</a>
                            </td>
                            <td class="text-center">
                                <a class="btn btn-danger btn-sm delete" href="../actions/delete_college.php?course_ID=<?= $row['course_ID'] ?>" style="font-size:12px;"><i class="fa fa-trash"></i> Delete</a>
                            </td>
                        </tr>

                        <div class="modal fade" id="editcourse<?= $row['course_ID'] ?>" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content bg-dark">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5 text-light" id="exampleModalLabel"><i class="fa fa-building"></i> Add Rooms</h1>
                                    </div>
                                    <form method="post" action="../actions/manage_colleges.php">
                                        <div class="modal-body px-5 py-4 border-secondary">
                                            <div class="form-group text-start mb-2">
                                                <label>Colleges</label>
                                                <select class="form-select bg-dark text-light" name="colleges_ID">
                                                    <?php $colleges = findAll('colleges');
                                                    foreach ($colleges as $rows) :
                                                    ?>
                                                        <option value="<?= $rows['colleges_ID'] ?>" <?php echo $rows['colleges_ID'] == $row['colleges_ID'] ? "selected" : ""; ?>><?= $rows['colleges_name'] ?></option>
                                                    <?php endforeach; ?>
                                                </select>
                                            </div>
                                            <div class="form-group text-start mb-2">
                                                <label>Course Name</label>
                                                <input class="form-control bg-dark text-light" name="course_name" value="<?= $row['course_name'] ?>" placeholder="Course name" />
                                                <input type="hidden" name="course_ID" value="<?= $row['course_ID'] ?>">
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"><i class="fa fa-close"></i> Close</button>
                                            <button type="submit" class="btn btn-primary" name="update_course"><i class="fa fa-check"></i> Update</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </div>
    </div>

    <!-- College Add Modal -->
    <div class="modal fade" id="addColleges" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content bg-dark">
                <div class="modal-header">
                    <h1 class="modal-title fs-5 text-light" id="exampleModalLabel"><i class="fa fa-building"></i> Add Colleges</h1>
                </div>
                <form method="post" id="addbuilding" action="../actions/manage_colleges.php">
                    <div class="modal-body px-5 py-4 border-secondary">
                        <div class="form-group text-start mb-2">
                            <label>College</label>
                            <input class="form-control bg-dark text-light" name="colleges_name" value="<?php echo getValue('college_name'); ?>" placeholder="College name" />
                            <?php if (showError('colleges_name')) :
                                echo showError('colleges_name');
                            endif; ?>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" id="closeColleges" data-bs-dismiss="modal"><i class="fa fa-close"></i> Close</button>
                        <button type="submit" class="btn btn-primary" name="add_college"><i class="fa fa-check"></i> Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- Course Add Modal -->
    <div class="modal fade" id="addCourse" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content bg-dark">
                <div class="modal-header">
                    <h1 class="modal-title fs-5 text-light" id="exampleModalLabel"><i class="fa fa-building"></i> Add Course</h1>
                </div>
                <form method="post" id="addbuilding" action="../actions/manage_colleges.php">
                    <div class="modal-body px-5 py-4 border-secondary">
                        <div class="form-group text-start mb-2">
                            <label>Colleges</label>
                            <select class="form-select bg-dark text-light" name="colleges_ID">
                                <?php $colleges = findAll('colleges');
                                foreach ($colleges as $college) :
                                ?>
                                    <option class="text-light" value="<?= $college['colleges_ID'] ?>"><?= $college['colleges_name'] ?></option>
                                <?php endforeach; ?>
                            </select>
                        </div>
                        <div class="form-group text-start mb-2">
                            <label>Courses</label>
                            <input class="form-control bg-dark text-light" name="course_name" value="<?php echo getValue('course_name'); ?>" placeholder="Course name" />
                            <?php if (showError('course_name')) :
                                echo showError('course_name');
                            endif; ?>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" id="closeCourses" class="btn btn-secondary" data-bs-dismiss="modal"><i class="fa fa-close"></i> Close</button>
                        <button type="submit" class="btn btn-primary" name="add_course"><i class="fa fa-check"></i> Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<?php include 'footer.php'; ?>