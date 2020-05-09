<head>
    <link type="text/css" rel="stylesheet" href="../css/admin.css">
    <script>
        function delete1(key) {
            a = confirm("删除记录？")
            if (a==true)
                window.location.href="<?php echo site_url('admin/delete')?>/"+key;
        }

        function update(key1) {
            b = confirm("跳转修改页面！")
            if (b==true)
                window.location.href="<?php echo site_url('admin/update_stage1')?>/"+key1;
        }
        function add() {
            c = confirm("跳转添加页面！")
            if (c==true)
                window.location.href="<?php echo site_url('admin/add')?>";
        }
    </script>
</head>