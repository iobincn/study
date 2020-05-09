<!--后台管理-->
<body>
<h2 style="text-align: center">后台管理系统<h1>
        <table align="center" width="1000" border="1" cellspacing="0" cellpadding="0">
        <tr align="center">
        <td>ID</td><td>姓名</td><td>头像</td><td>课程</td><td>分数</td><td>修改</td><td>删除</td>
        </tr>

        <?php foreach ($info as $rows):?>

            <tr align="center">
                <td><?php echo $rows['id'];?> </td>
                <td><?php echo $rows['name'];?></td>
                <td><img src=<?php echo base_url($rows['pic']);?>></td>
                <td><?php echo $rows['course'];?></td>
                <td><?php echo $rows['grade'];?></td>
                <td><button style='background-color:#6aa;' onclick='update("<?php echo $rows['id'];?>")'>修改</button></td>
                <td><button style='background-color:#F62' onclick='delete1("<?php echo $rows['id'];?>")'>删除</button></td>
            </tr>
        <?php endforeach;?>
        </table>
        <div align='center'><button  onclick='add()'>添加记录</button></div>
</body>
