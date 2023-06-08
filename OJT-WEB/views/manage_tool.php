<?php
require_once 'header.php';
require_once '../config/auth.php'; //session block
?>
<div class="row mx-auto mt-2">
    <div class="d-flex justify-content-between">
        <div>
            <p class="text-start text-secondary m-0" style="font-size:13px"><i>Pages / Tools</i></p>
            <h4 class="h4 text-start text-secondary" style="font-size:17px">Tools</h4>
        </div>
        <form method="post">
            <div class="d-flex pb-3 pt-1 ">
                <input class="form-control form-control-sm text-light" name="search_tool" placeholder="Search..." style="background-color: rgb(51,51,51);" /><button class="btn btn-primary" type="submit"><i class="fa fa-search"></i></button>
            </div>
        </form>
    </div>
</div>
<div class="row mx-auto mx-5">
    <div class="col-md-3 mb-3">
        <div class="card card-radius bg-dark border-0 py-5" style="height:100%">
            <i class="fa fa-plus-circle text-light plus align-self-center" data-bs-toggle="modal" data-bs-target="#addToolmodal"></i>
        </div>
    </div>
    <?php if (isset($_POST['search_tool'])) {
        $search = $_POST['search_tool'];
        $result = like('tool', ['tool_name' => $search, 'tool_location' => $search]);
    } else {
        $result = findAll('tool');
    }
    ?>
    <?php foreach ($result as $row) : ?>
        <div class="col-md-3 mb-3">
            <div class="card card-radius bg-dark border-0 pt-1 px-4 pb-1">
                <div class="card-header mb-3 px-0">
                    <div class="d-flex justify-content-end align-items-center">
                        <i class="fa fa-edit text-primary ms-2 icon_but" data-bs-toggle="modal" data-bs-target="#updateToolmodal<?= $row['tool_ID'] ?>"></i>
                        <a class=" delete m-0 p-0" href="../actions/manage_tools.php?delete_tool&tool_ID=<?= $row['tool_ID'] ?>"><i class="fa fa-trash text-danger ms-2 icon_but"></i></a>
                    </div>
                </div>
                <div class="d-flex justify-content-between">
                    <div class="col-md-3 col-3 bg-primary bg-gradient p-2 py-3 card-radius">
                        <i class="fa fa-tools text-light" style="font-size:17px"></i>
                    </div>
                    <div class="text-light">
                        <i class="fa fa-tools"></i>
                        <?= $row['tool_name'] ?>
                    </div>
                </div>
                <div class="card-footer mt-3 px-0">
                    <p class="m-0 text-light text-start" style="font-size:13px; font-style:italic">
                        <!-- <i class="fa fa-map-marker"></i> -->
                        <!-- Location: -->
                        <!-- <?= $row['building_location'] ?> -->
                    </p>
                </div>
            </div>
        </div>
        <!-- Edit Building Modal -->
        <div class="modal fade" id="updateToolmodal<?= $row['tool_ID'] ?>" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content bg-dark">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5 text-light" id="exampleModalLabel"><i class="fa fa-tool"></i> Update tool</h1>
                    </div>
                    <form method="post" action="../actions/manage_tools.php">
                        <div class="modal-body px-5 py-4 border-secondary">
                            <div class="form-group text-start mb-2">
                                <label>Tool name</label>
                                <input class="form-control bg-dark text-light" name="tool_name" value="<?= $row['tool_name'] ?>" placeholder="tool name" />
                                <?php
                                if (isset($_SESSION['errors']['id'])) :
                                    if ($_SESSION['errors']['id'] == $row['tool_ID']) {
                                        if (showError('tool_name')) :
                                            echo showError('tool_name');
                                        endif;
                                    }
                                endif;
                                ?>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <input type="hidden" name="tool_ID" value="<?= $row['tool_ID'] ?>">
                            <button type="button" class="btn btn-secondary" id="close_tool_modal" data-bs-dismiss="modal"><i class="fa fa-close"></i> Close</button>
                            <button type="submit" class="btn btn-primary" name="update_tool"><i class="fa fa-edit"></i> Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    <?php endforeach; ?>
</div>

<!-- Add Tool Modal -->
<div class="modal fade" id="addToolmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content bg-dark">
            <div class="modal-header">
                <h1 class="modal-title fs-5 text-light" id="exampleModalLabel"><i class="fa fa-tool"></i> Add Tool</h1>
            </div>
            <form method="post" id="addtool" action="../actions/manage_tools.php">
                <div class="modal-body px-5 py-4 border-secondary">
                    <div class="form-group text-start mb-2">
                        <label>Tool name</label>
                        <input class="form-control bg-dark text-light" name="tool_name" value="<?php echo getValue('tool_name'); ?>" placeholder="tool name" />
                        <?php if (showError('tool_name')) :
                            echo showError('tool_name');
                        endif; ?>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" id="close_tool_modal" data-bs-dismiss="modal"><i class="fa fa-close"></i> Close</button>
                    <button type="submit" class="btn btn-primary" name="add_tool"><i class="fa fa-check"></i> Save</button>
                </div>
            </form>
        </div>
    </div>
</div>

<?php include 'footer.php'; ?>