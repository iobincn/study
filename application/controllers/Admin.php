<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('adminModel'); //加载adminModel这个模块，相当与全局变量的意思
//        $this->load->helper('url_helper');
    }



    public function admin() //后台管理界面
    {
        $data['info'] = $this->adminModel->showAdmin();  //从数据库中获取数据
        if (isset($this))
        {

            $this->load->view('admin/header',$data);
            $this->load->view('admin/admin',$data);
            $this->load->view('admin/footer',$data);
//            var_dump($data);
        }else{
            echo "404";
            exit();
        }

    }


    public function add(){
//        $date['key'] = $this->uri->segment(2);//获取参数
        $this->load->view('add/index');
    }
    public function insert(){    //插入数据

    $date['status'] = $this->adminModel->add(); //

    if ($date['status']==true){
        $this->load->view('insert/insert',$date);
    }
    else
    {
        $this->load->view('insert/insert',$date);
    }



    }


    public function update_stage2(){  //提交修改表单后处理
        $date = $this->adminModel->update();
        if ($date==1){
            echo "更新成功";
        }
    }
    public function update_stage1(){  //更新表单前暂时要修改的数据，等待下一步提交表单

        $data = $this->adminModel->showAdmin();
        $i = $this->uri->segment(3);
        if (!isset($data[$i-1]))
        {
            echo "error";
            exit();
        }
//        echo var_dump($data[$i-1]);
        $this->load->view('update/update',$data[$i-1]);  //传要修改的id到model
    }


    public function delete(){  //删除表单
        $id = $this->uri->segment(3);
        $data = $this->adminModel->delete($id);
        if ($data==1)
        {
            echo "删除成功！";
            exit();
        }

    }
//    public function login(){
//        //初始化，登录后台
//        $this->load->view('login');
//    }

    public function error(){    //定义404页面
        $this->load->view('error/404.html');
    }

}
?>