<?php
//删除记录
if(@isset($_GET[key]))
{
//    echo '<script></script>';
    $key = $_GET['key'];
    require 'connect.php';
    $sql = "delete from student where id='$key'";
    if($mysqli->query($sql))
    {
        echo '成功地删除了'.$mysqli->affected_rows.'条记录';
        echo "<br>3秒后自动跳转";
        echo '<meta http-equiv="refresh" content="3; url=//127.0.0.1/admin.php">';
    }
    else
    {echo '删除记录失败!';
        $mysqli->close();
    }
//var_dump($mysqli);
}
else
{
    echo "请正确操作！";
    exit();
}

?>