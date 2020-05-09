<?php


class AdminModel extends CI_Model
{
    public function __construct()//构造函数，若每个方法都用到数据库，则可以写到构造函数里面
    {
        $this->load->database();//这个方法确保你的数据库配置正确。
    }

    public function showAdmin(){
        $a = $this->db->get('student');//获取Student表
        return $a->result_array();// 以数组的方式返回整个表的数据
//        this->load->model('news_model');
//        $this->News_model->detail();
    }
//    public function forupdate(){
//        $a = $this->db->get('student');//获取Student表
//        return $a->row_array();//返回
//    }

    public function add(){   //增加元组
        //获取post参数
        $date['name'] = $this->input->post('name');
        $date['pic'] = $this->input->post('pic');
        $date['course'] = $this->input->post('course');
        $date['grade'] = $this->input->post('grade');
        $aaa = $this->db->insert('student',$date);
        return $aaa;//返回更新结果
    }

    public function update(){  //更新数据库
        $id = $this->input->post('id');
        $name = $this->input->post('name');
        $pic = $this->input->post('pic');
        $course = $this->input->post('course');
        $grade = $this->input->post('grade');
        $sql = "update student set name='${name}',pic='${pic}',course='${course}',grade=${grade} "."where ID = $id";
        echo $sql;
        //执行SQL
        $result = $this->db->query($sql);
        //关闭数据库
        $this->db->close();
        //返回值
        return $result;
    }
    public function delete($id){ //删除表单，很简单
        //防止select出的数据存在乱码问题
        //mysql_query("SET NAMES GBK");

        $sql = "DELETE FROM student WHERE ID = $id";
        $result = $this->db->query($sql);
        $this->db->close();
        return $result;
    }

}