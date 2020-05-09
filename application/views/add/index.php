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
<form name="form1" method="post" action="<?php echo site_url('admin/insert')?>">
    <!--https://blog.csdn.net/weixin_40593587/article/details/79376979?utm_source=blogxgwz7-->
    <p>姓名：
        <label for="name"></label>
        <input name="name" type="text" class="da" id="name" value="">
    </p>
    <p>头像：
        <label for="pic"></label>
        <input name="pic" type="text" class="da" id="pic" value="">
    </p>
    <p>课程：
        <label for="course"></label>
        <input name="course" type="text" class="da" id="course" value="">
    </p>
    <p>分数：
        <label for="grade"></label>
        <input name="grade" type="text" class="da" id="grade" value="">
    </p>
    <p>
        <input name="button" type="submit" class="da" id="button" value="添加">&nbsp;
        <input name="button2" type="reset" class="da" id="button2" value="重置">
    </p>
    <p>&nbsp;</p>
</form>
</body>
</html>