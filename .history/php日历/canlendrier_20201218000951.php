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
    public function index()
    {
        $this->outputs();
    }
 
 
    #输出
    private function outputs()
    {
        echo "<table border='1'>";
            $this->changedate();
            $this->weeks();
            $this->days();
        echo "</table>";
    }
 
 
    #获取周日到周六
    private function weeks()
    {
        $arr = array('日', '一', '二', '三', '四', '五', '六');
 
        echo "<tr>";
            for ($i = 0; $i < count($arr); ++$i) {
                    echo "<td>" .$arr[$i]. "</td>";
            }
        echo "</tr>";
    }
 
 
    #循环获取天数
   private function days()
   {
        echo "<tr>";
 
            for ($b = 0; $b < $this->current_week; ++$b) {
                echo "<td> </td>";
            }
 
 
            for ($a = 1; $a <= $this->month_day; ++$a) {
                $b++;
 
                if ($a == date("d")) {
                    echo "<td style='background:blue;'>" . $a . "</td>";
                } else {
                    echo "<td>" . $a . "</td>";
                }
                if ($b%7 === 0) {
                    echo "<tr></tr>";
                }
 
            }
        echo "</tr>";
   }
 
   //改变年
    private function changeYear($year, $month)
    {
        $year  = $year - 1;
 
        return "year=" . $year . "&month=" . $month;
    }
 
    //改变月份
    private function changeMonth($year, $month)
    {
        if ($month == 1 || $month == "01") {
            $year = $year - 1;
            $month = 12;
        } else {
            $month--;
        }
        return "year=" . $year . "&month=" . $month;
    }
 
    //改变年
    private function changeYearAdd($year, $month)
    {
        $year  = $year + 1;
 
        return "year=" . $year . "&month=" . $month;
    }
 
    //改变月份
    private function changeMonthAdd($year, $month)
    {
        if ($month == 12) {
            $year = $year + 1;
            $month = 1;
        } else {
            $month++;
        }
        return "year=" . $year . "&month=" . $month;
    }
 
   //点击改变年和月
    private function changedate()
    {
        echo "<a href='?".$this->changeYear($this->year, $this->month)."'> <<< </a> ";
        echo "<a href='?".$this->changeMonth($this->year, $this->month)."'> << </a> ";
        echo $this->year ." ". $this->month;
        echo "<a href='?".$this->changeMonthAdd($this->year, $this->month)."'> >> </a>";
        echo " <a href='?".$this->changeYearAdd($this->year, $this->month)."'> >>> </a>";
    }
 
}

最终效果：
 

 

样式很丑，没有去调整，整个流程走了一遍，主要是为了学习。相互学习，相互交流；

欢迎一起学习：微信号：zhaoyufengxixi  QQ号：1526607040


