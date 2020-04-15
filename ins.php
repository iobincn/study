<style type="text/css">
body,td,th {
	font-size: 40px;
}
</style>
<a href="fetch_array.php">查看结果
</a>
<?php 
require 'connect.php';
$name = $_POST['name'];
$pic= $_POST['pic'];
$course = $_POST['course'];
$grade =(int)$_POST['grade'];
$sql = "INSERT INTO student(name,pic,course,grade) VALUES('$name','$pic','$course','$grade')";
if($mysqli->query($sql))
 {
	echo '成功地插入了'.$mysqli->affected_rows.'条记录，记录编号为：'.$mysqli->insert_id; 
	 
	 }
 else
 {echo '插入记录失败!';
	$mysqli->close(); 
	 }
//var_dump($mysqli);
?>