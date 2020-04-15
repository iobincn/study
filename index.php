<?php 
class Demo { 
    private $file = 'index.php';
    public function __construct($file) { 
        $this->file = $file; 
    }
    function __destruct() { 
        echo @highlight_file($this->file, true); 
    }
    function __wakeup() { 
        if ($this->file != 'index.php') { 
            //the secret is in the fl4g.php
            $this->file = 'index.php'; 
        } 
    } 
}


//Demo类

if (isset($_GET['var'])) { //如果存在var这个变量
    $var = base64_decode($_GET['var']); //用base64解码
    if (preg_match('/[oc]:\d+:/i', $var)) {  //匹配正则表达式，匹配成功的话，显示stop hacking
        die('stop hacking!');     
    } else {
        //或者执行反序列化
        @unserialize($var); 
    } 
} else { 
    highlight_file("index.php"); 
} 


?>