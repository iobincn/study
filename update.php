<?php
if (isset($_POST['id'])) {
    require 'connect.php';
    $name = $_POST['name'];
    $pic = $_POST['pic'];
    $course = $_POST['course'];
    $grade = $_POST['grade'];
    $id = $_POST['id'];
    $sql = "UPDATE student SET name='$name',pic='$pic',course='$course',grade='$grade' where id='$id'";
    if ($mysqli->query($sql)) {
        echo '成功地修改了' . $mysqli->affected_rows . '条记录';
        echo "<br>3秒后自动跳转";
        echo '<meta http-equiv="refresh" content="3; url=//127.0.0.1/admin.php">';
    } else {
        echo '更新记录失败!请检查输入';
        $mysqli->close();

    }
//var_dump($mysqli);
}
else
{
    echo "2";
    exit();
}
?>