<style type="text/css">
.you {
	font-weight: bold;
	color: #F00;
	background-image: url(img/zan.gif);
}
</style>
<?php 
require 'connect.php';
$sql = "SELECT id,name,pic,course,grade FROM student  ";
$result=$mysqli->query($sql);
echo '<pre>';
//var_dump($result);
echo '<table align="center" width="1000" border="1" cellspacing="0" cellpadding="0">';
echo '<tr align="center">';
echo '<td>ID</td><td>姓名</td><td>头像</td><td>课程</td><td>分数</td>';   
echo '</tr>';
while($rows=$result->fetch_array()){
	echo '<tr align="center">';
	echo '<td>'.$rows['id'].'</td>';
	echo '<td>'.$rows['name'].'</td>';
	echo '<td><img src="'.$rows['pic'].'"></td>';
	echo '<td>'.$rows['course'].'</td>';
	if($rows['grade']>=80){
	echo '<td class="you">'.$rows['grade'].'</td>';
		}
	else
	{echo '<td>'.$rows['grade'].'</td>';
		}
	
	echo '</tr>';	
	}
echo '</table>';
$mysqli->close();  
	
//var_dump($mysqli);
?>