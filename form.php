<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>无标题文档</title>
    <style type="text/css">
        body,td,th {
            font-size: 40px;
        }
        .da {
            font-size: 40px;
        }
    </style>
</head>

<body style="text-align: center">

<form name="form1" method="post" action="<?php if(isset($_GET['key'])) echo 'update.php'; else echo 'insert.php'; ?>">
    <p><?php
        if (isset($_GET['key']))
        {
            echo '修改记录:';
           require 'connect.php';
        $sql = "SELECT id,name,pic,course,grade FROM student where id=".$_GET['key'];
        $result=$mysqli->query($sql);
        $row = $result->fetch_array();


        }
        else
        {
            echo '添加记录:';
        }
        ?></p>
    <p>姓名：
        <label for="name"></label>
        <input name="name" type="text" class="da" id="name" value="<?php if (isset($_GET['key'])) echo $row['name']; ?> ">
    </p>
    <p>头像：
        <label for="pic"></label>
        <input name="pic" type="text" class="da" id="pic" value="<?php if (isset($_GET['key'])) echo $row['pic']; ?> ">
    </p>
    <p>课程：
        <label for="course"></label>
        <input name="course" type="text" class="da" id="course" value="<?php if (isset($_GET['key'])) echo $row['course']; ?> ">
    </p>
    <p>分数：
        <label for="grade"></label>
        <input name="grade" type="text" class="da" id="grade" value="<?php if (isset($_GET['key'])) echo $row['grade']; ?> ">
        <?php
        if (isset($_GET['key']))
        {
            echo '<input name="id" type="text" class="da" id="id" hidden value='.$_GET['key'].">";

        }

        ?>
    </p>
    <p>
        <input name="button" type="submit" class="da" id="button" value="
        <?php
        if(isset($_GET['key']))
            echo "修改";
        else
            echo "添加";
        ?>
">&nbsp;
        <input name="button2" type="reset" class="da" id="button2" value="重置">
    </p>
    <p>&nbsp;</p>
</form>
</body>
</html>