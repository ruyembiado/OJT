<?php
require_once '../config/config.php';

if (isset($_POST['add_tool'])) :
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $tool_name = $_POST['tool_name'];

        $fields = [
            'tool_name' => $tool_name,
        ];

        $validations = [
            'tool_name' => [
                'required' => true,
                'unique' => [
                    'fieldName' => 'tool_name',
                    'tableName' => 'tool',
                ],
            ]
        ];

        $errors = validate($fields, $validations);

        if (empty($errors)) {

            $data = [
                'tool_name' => $tool_name,
            ];

            $save = save('tool', $data);

            if ($save) {
                setFlash('success', 'Added Successfully');
?>
                <script>
                    //make the modal false in local storage so that it wont appear again when its successful
                    function saveToLocalStorageAndRedirect() {
                        localStorage.setItem("addTools", false);
                        window.location.replace('../views/manage_tool.php');
                    }
                    saveToLocalStorageAndRedirect();
                </script>
<?php
            } else {
                setFlash('failed', 'Add Failed');
                redirect('manage_tool');
            }
        } else {
            returnError($errors);
            redirect('manage_tool');
        }
    }

endif;

if (isset($_POST['update_tool'])) :
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $tool_ID = $_POST['tool_ID'];
        $tool_name = $_POST['tool_name'];

        $save = update('tool', ['tool_ID' => $tool_ID], ['tool_name' => $tool_name]);

        if ($save) {
            setFlash('success', 'Updated Successfully');
            redirect('manage_tool');
        } else {
            setFlash('failed', 'Update Failed');
            redirect('manage_tool');
        }
    }
endif;

if (isset($_GET['delete_tool'])) {

    $id = $_GET['tool_ID'];
    $delete_room = delete('tool', ['tool_ID' => $id]);

    if ($delete_room) {
        setFlash('success', 'Deleted Successfully');
        redirect('manage_tool');
    } else {
        setFlash('failed', 'Delete Failed');
        redirect('manage_tool');
    }
}
