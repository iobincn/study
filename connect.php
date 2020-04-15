<!--数据库的连接-->
<style type="text/css">
body,td,th {
	font-size: 40px;
}
</style>
<?php 
header('Content-type:text/html;charset=utf-8');
$host = 'localhost';
$name = 'root';
$password = '905008';
$dbname = 'test2';
$mysqli = new mysqli($host,$name,$password,$dbname);
//var_dump($mysqli);
if($mysqli->connect_errno){
 echo '连接数据库失败'.$mysqli->connect_error;	
 $mysqli->set_charset('utf8');
	}
else
{
 //echo '连接成功！';
 $mysqli->set_charset('utf8');	
}
?>