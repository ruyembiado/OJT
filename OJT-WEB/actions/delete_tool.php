<?php
require_once '../config/config.php';

if (isset($_GET['delete_tool'])) {

    $id = $_GET['tool_ID'];
    $delete_room = delete('tool', ['tool_ID' => $id]);

    if ($delete_room) {
        setFlash('success', 'Deleted Successfully');
        redirect('rooms', $returnData);
    } else {
        setFlash('failed', 'Delete Failed');
        redirect('rooms', $returnData);
    }
}
