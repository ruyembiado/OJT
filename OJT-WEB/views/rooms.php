<?php
require_once 'header.php';
require_once '../config/auth.php'; //session block
?>
<div class="row mx-auto mt-2">
    <div class="d-flex justify-content-between">
        <div>
            <p class="text-start text-secondary m-0" style="font-size:13px"><i>Pages / Rooms</i></p>
            <h4 class="h4 text-start text-secondary" style="font-size:17px"><?php echo $_GET['building_name']; ?> Rooms</h4>
        </div>
        <form method="post">
            <div class="d-flex pb-3 pt-1 ">
                <input class="form-control form-control-sm text-light" name="search_room" placeholder="Search <?php echo $_GET['building_name']; ?> Rooms..." style="background-color: rgb(51,51,51);" /><button class="btn btn-primary" type="submit"><i class="fa fa-search"></i></button>
            </div>
        </form>
    </div>
</div>
<div class="row mx-auto mx-5">
    <div class="col-md-3 mb-3">
        <div class="card card-radius bg-dark border-0 py-5" style="height:100%">
            <i class="fa fa-plus-circle text-light plus align-self-center" id="addroommodal_btn"></i>
        </div>
    </div>
    <?php if (isset($_POST['search_room'])) {
        $search = $_POST['search_room'];
        if (empty($search)) {
            $result = find_where('room', ['building_id' => $_GET['building_id']]);
        } else {
            $result = find_where('room', [
                'building_id' => $_GET['building_id'],
                'room_num' => $search,
            ]);
        }
    } else {
        $result = find_where('room', ['building_id' => $_GET['building_id']]);
    }
    ?>
    <?php foreach ($result as $row) : ?>
        <div class="col-md-3 mb-3">
            <div class="card card-radius bg-dark border-0 pt-1 px-4 pb-5">
                <div class="card-header mb-3 px-0">
                    <div class="d-flex justify-content-end align-items-center">
                        <i class="fa fa-edit text-primary ms-2 icon_but" onclick="editroom(<?= $row['room_id'] ?>);"></i>
                        <a class="delete m-0 p-0" href="../actions/delete_room.php?room_id=<?= $row['room_id'] ?>&building_id=<?php echo $_GET['building_id'] ?>&building_name=<?php echo $_GET['building_name'] ?>"><i class="fa fa-trash text-danger ms-2 icon_but"></i></a>
                    </div>
                </div>
                <div class="d-flex justify-content-between">
                    <div class="col-md-3 col-3 bg-primary bg-gradient p-2 py-3 card-radius">
                        <i class="fa fa-building text-light" style="font-size:17px"></i>
                    </div>
                    <div>
                        <p class="m-0 text-light text-start">
                            <i class="fa fa-building"></i> Room
                            <?= $row['room_num'] ?>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- edit room Modal -->
        <div class="modal fade" id="editroommodal<?= $row['room_id'] ?>" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content bg-dark">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5 text-light" id="exampleModalLabel"><i class="fa fa-building"></i> Add Rooms</h1>
                    </div>
                    <form method="post" id="addbuilding" action="../actions/manage_rooms.php">
                        <div class="modal-body px-5 py-4 border-secondary">
                            <div class="form-group text-start mb-2">
                                <label>Room Number/Name</label>
                                <input class="form-control bg-dark text-light" name="room_num" value="<?= $row['room_num'] ?>" placeholder="Room Number/Name" />
                                <?php
                                if (isset($_SESSION['errors']['edit_room_id'])) :
                                    if ($_SESSION['errors']['edit_room_id'] == $row['room_id']) {
                                        if (showError('room_num')) :
                                            echo showError('room_num');
                                        endif;
                                    }
                                endif;
                                ?>
                            </div>
                            <input type="hidden" name="room_id" value="<?= $row['room_id']; ?>">
                            <input type="hidden" name="building_id" value="<?php echo $_GET['building_id']; ?>">
                            <input type="hidden" name="building_name" value="<?php echo $_GET['building_name']; ?>">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" onclick="closeditroom(<?= $row['room_id'] ?>)" data-bs-dismiss="modal"><i class="fa fa-close"></i> Close</button>
                            <button type="submit" class="btn btn-primary" name="update_rooms"><i class="fa fa-check"></i> Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    <?php endforeach; ?>
</div>


<!-- Add Building Modal -->
<div class="modal fade" id="addroommodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content bg-dark">
            <div class="modal-header">
                <h1 class="modal-title fs-5 text-light" id="exampleModalLabel"><i class="fa fa-building"></i> Add Rooms</h1>
            </div>
            <form method="post" id="addbuilding" action="../actions/manage_rooms.php">
                <div class="modal-body px-5 py-4 border-secondary">
                    <div class="form-group text-start mb-2">
                        <label>Room Number/Name</label>
                        <input class="form-control bg-dark text-light" name="room_num" value="<?php echo getValue('room_num'); ?>" placeholder="Room Number/Name" />
                        <?php if (showError('room_num')) :
                            echo showError('room_num');
                        endif; ?>
                    </div>
                    <input type="hidden" name="building_id" value="<?php echo $_GET['building_id']; ?>">
                    <input type="hidden" name="building_name" value="<?php echo $_GET['building_name']; ?>">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" id="close_room_modal" data-bs-dismiss="modal"><i class="fa fa-close"></i> Close</button>
                    <button type="submit" class="btn btn-primary" name="add_rooms"><i class="fa fa-check"></i> Save</button>
                </div>
            </form>
        </div>
    </div>
</div>

<?php include 'footer.php'; ?>