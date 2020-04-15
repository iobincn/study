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

<body>
<form name="form1" method="post" action="ins.php">
  <p>插入记录：</p>
  <p>姓名：
    <label for="name"></label>
    <input name="name" type="text" class="da" id="name">
  </p>
  <p>头像：
    <label for="pic"></label>
    <input name="pic" type="text" class="da" id="pic">
  </p>
  <p>课程：
    <label for="course"></label>
    <input name="course" type="text" class="da" id="course">
  </p>
  <p>分数：
    <label for="grade"></label>
    <input name="grade" type="text" class="da" id="grade">
  </p>
  <p>
    <input name="button" type="submit" class="da" id="button" value="插入记录">
    &nbsp; 
    <input name="button2" type="reset" class="da" id="button2" value="重置">
  </p>
  <p>&nbsp;</p>
</form>
</body>
</html>