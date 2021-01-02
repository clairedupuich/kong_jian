<?php namespace Admin\Controller;
 
class IndexController extends \Think\Controller
{
 
    private $year;          //年
    private $month;         //月
    private $current_week;  //当前月第一天的周几
    private $month_day;     // 前月的天数
 
    public function __construct()
    {
        date_default_timezone_set("Asia/Shanghai");
 
        $this->year  = isset($_GET['year'])  ?  $_GET['year']  : date("Y");
        $this->month = isset($_GET['month']) ?  $_GET['month'] : date("m");
        $this->current_week = date("w", mktime(0, 0, 0, $this->month, 1, $this->year) );
        $this->month_day    = date("t", mktime(0, 0, 0, $this->month, 1, $this->year));
    }
