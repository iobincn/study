<?php
if (isset($_POST['name']))
{
    require 'connect.php';
    $name = $_POST['name'];
    $pic = $_POST['pic'];
    $course = $_POST['course'];
    $grade = $_POST['grade'];

    $sql = "INSERT student(name,pic,course,grade) VALUES('$name','$pic','$course',$grade)";
    if($mysqli->query($sql))
    {
        echo '成功地插入了'.$mysqli->affected_rows.'条记录，记录编号为：'.$mysqli->insert_id;
        echo "<br>3秒后自动跳转";
        echo '<meta http-equiv="refresh" content="3; url=//127.0.0.1/admin.php">';

    }
    else
    {
        echo '插入记录失败!';
        $mysqli->close();
    }
}
else
{
    exit();
}
?>