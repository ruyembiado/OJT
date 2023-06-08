<?php include 'header.php';
@include '../config/auth.php'; //session block
?>
<div class="row mx-auto">
    <p class="text-start text-secondary m-0" style="font-size:13px"><i>Pages / Dashboard</i></p>
    <h4 class="h4 text-start text-secondary" style="font-size:17px">Dashboard</h4>
</div>
<!-- Row for smaller cards -->

<div class="row mx-auto mx-5 mt-2" id="emergency">

</div>

<div class="row mx-auto mx-5 mt-2">
    <div class="col-md-3 mb-2">
        <div class="card bg-dark shadow border-0 card-radius">
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <div class="col-md-3 col-3 bg-primary bg-gradient p-2 py-3 card-radius">
                        <i class="fa fa-user text-light" style="font-size:17px"></i>
                    </div>
                    <div class="">
                        <h6 class="h6 text-end text-light">Students</h6>
                        <p class="m-0 text-secondary">
                            <?php echo $count_student; ?>
                        </p>
                    </div>
                </div>
            </div>
            <div class="card-footer border-0 ">
                <p class="m-0 text-secondary text-start" style="font-size:13px"><i>Student registered</i></p>
            </div>
        </div>
    </div>

    <div class=" col-md-3 mb-2">
        <div class="card bg-dark shadow border-0 card-radius">
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <div class="col-md-3 col-3  bg-warning bg-gradient p-2 py-3 card-radius">
                        <i class="fa fa-user text-light" style="font-size:17px"></i>
                    </div>
                    <div class="">
                        <h6 class="h6 text-end text-light">Rescuer</h6>
                        <p class="m-0 text-secondary">
                            <?php echo $count_rescuer; ?>
                        </p>
                    </div>
                </div>
            </div>
            <div class="card-footer border-0 ">
                <p class="m-0 text-secondary text-start" style="font-size:13px"><i>Rescuer registered</i></p>
            </div>
        </div>
    </div>

    <div class=" col-md-3 mb-2">
        <div class="card bg-dark shadow border-0 card-radius">
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <div class="col-md-3 col-3 bg-success bg-gradient p-2 py-3 card-radius">
                        <i class="fa fa-user text-light" style="font-size:17px"></i>
                    </div>
                    <div class="">
                        <h6 class="h6 text-end text-light">Admins</h6>
                        <p class="m-0 text-secondary">
                            <?php echo $count_admin; ?>
                        </p>
                    </div>
                </div>
            </div>
            <div class="card-footer border-0 ">
                <p class="m-0 text-secondary text-start" style="font-size:13px"><i>Admin registered</i></p>
            </div>
        </div>
    </div>

    <div class=" col-md-3 mb-2">
        <div class="card bg-dark shadow border-0 card-radius">
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <div class="col-md-3 col-3 bg-danger bg-gradient p-2 py-3 card-radius">
                        <i class="fa fa-user text-light" style="font-size:17px"></i>
                    </div>
                    <div class="">
                        <h6 class="h6 text-end text-light">Students</h6>
                        <p class="m-0 text-secondary">16</p>
                    </div>
                </div>
            </div>
            <div class="card-footer border-0 ">
                <p class="m-0 text-secondary text-start" style="font-size:13px"><i>Student registered</i></p>
            </div>
        </div>
    </div>
</div>
<!-- Row for graphs -->
<div class="row mx-auto mx-5 mt-3">
    <div class="col-md-4 mb-2">
        <div class="card bg-dark shadow border-0 card-radius" style="height: 100% !important;">
            <div class="card-body bg-primary bg-gradient card-radius mx-4 mt-4">
                <div class="chart">
                    <canvas id="line-chart" class="chart-canvas" height="170"></canvas>
                </div>
            </div>
            <div class="card-footer m-4 ">
                <p class="m-0 text-light text-start">Register Graph</p>
                <p class="m-0 text-light text-start mt-1" style="font-size:12px"><i class="fa fa-info-circle"></i> <i>
                        Representation dates of the
                        registered
                        user</i></p>
            </div>
        </div>
    </div>
    <div class="col-md-4 mb-2">
        <div class="card bg-dark shadow border-0 card-radius" style="height: 100% !important;">
            <div class="card-body bg-success bg-gradient card-radius mx-4 mt-4">
                <div class="chart">
                    <canvas id="bar-chart" class="chart-canvas" height="170"></canvas>
                </div>
            </div>
            <div class="card-footer m-4 ">
                <p class="m-0 text-light text-start">Register Graph</p>
                <p class="m-0 text-light text-start mt-1" style="font-size:12px"><i class="fa fa-info-circle"></i> <i>
                        Representation dates of the
                        registered
                        user</i></p>
            </div>
        </div>
    </div>
    <div class="col-md-4 mb-2">
        <div class="card bg-dark shadow border-0 card-radius">
            <div class="card-body bg-danger bg-gradient card-radius mx-4 mt-4">
                <div class="chart">
                    <canvas id="line-chart" class="chart-canvas" height="170"></canvas>
                </div>
            </div>
            <div class="card-footer m-4 ">
                <p class="m-0 text-light text-start">Register Graph</p>
                <p class="m-0 text-light text-start mt-1" style="font-size:12px"><i class="fa fa-info-circle"></i> <i>
                        Representation dates of the
                        registered
                        user</i></p>
            </div>
        </div>
    </div>
</div>




<?php
require_once 'dashboardFooter.php';
?>