</html>
<!--后台管理-->
<head>
<style type="text/css">
    .you {
        width: 60px;
        font-weight: bold;
        color: #F00;
        background-image: url(img/zan.gif);
    }
    a{ text-decoration:none}

    button{
        font-size: 25px;
        width: 150px;
        height: 70px;
    }

</style>
    <script>
        function delete1(key) {
            a = confirm("删除记录？")
            if (a==true)
            window.location.href="http://127.0.0.1/delete.php?key="+key;
        }

        function update(key1) {
            b = confirm("跳转修改页面！")
            if (b==true)
                window.location.href="http://127.0.0.1/form.php?key="+key1;
        }
        function add() {
            c = confirm("跳转添加页面！")
            if (c==true)
                window.location.href="http://127.0.0.1/form.php";
        }
    </script>
</head>
<body>
<h2 style="text-align: center">后台管理系统<h1>
<?php
function delete($id){

    echo '</<script>alert("删除成功");</script>';
}
if(isset($_POST['delete']))
{
    $key = $_POST['delete'];
    delete($key);
}

require 'connect.php';
$sql = "SELECT id,name,pic,course,grade FROM student  ";
$result=$mysqli->query($sql);
echo '<pre>';
//var_dump($result);
echo '<table align="center" width="1000" border="1" cellspacing="0" cellpadding="0">';
echo '<tr align="center">';
echo '<td>ID</td><td>姓名</td><td>头像</td><td>课程</td><td>分数</td><td>修改</td><td>删除</td>';
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
//    $tmp1 = "<td><button style='background-color:#6aa;' onclick='update(".$rows[id].")'>修改</button></td>";
    $tmp1 = "<td><button  onclick='update(".@$rows[id].")'>修改</button></td>";

    echo $tmp1;
//    $tmp2 = "<td><button style='background-color:#F62' onclick='delete1(".$rows[id].")'>删除</button></td>";
$tmp2 = "<td><button  onclick='delete1(".@$rows[id].")'>删除</button></td>";

    echo $tmp2;
    echo '</tr>';
}

echo '</table>';
$mysqli->close();
//$tmp3 = "<div align='center'><button  style='background-color:#6a3;' onclick='add(".$rows[id].")'>添加记录</button></div>";
$tmp3 = "<div align='center'><button  onclick='add(".@$rows[id].")'>添加记录</button></div>";

echo $tmp3;
?>
</body>
</html>