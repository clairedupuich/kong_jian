var d1 = new Date();  // 获取当前系统时间 我现在的时间是 2020/12/18 星期5
d1.getFullYear();    // 获取年信息， 2016
d1.getMonth();      // 获取月信息（从0开始 范围：0-11） 3
d1.getDate();      // 获取天信息 此处结果：25
d1.getDay();      // 获取星期信息 （0-6） 此处结果： 1 

//设置 2020年12月18日
var d2 = new Date(2020, 12, 18);    // 月是从0开始计数， 需要减一
d2.getFullYear();          // 2020
d2.getMonth();            // 12
d2.getDate();            // 18
d2.toLocaleDateString();      // "2020/12/18" 证明设置正确 