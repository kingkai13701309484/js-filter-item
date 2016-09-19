var arr = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"];
var obj = {};
var obj1 = {};
//遍历arr，统计每个字母出现次数且记录位置
//debugger;断点，一步步查看代码
arr.forEach(function(x, y) {
	if (obj[x]) {
		obj[x]++;
		obj1[x] += "," + y;
	} else {
		obj[x] = 1;
		obj1[x] = "" + y;
	}
});
// console.log(obj);
// console.log(obj1);

//获取出现最多的字母
var max = 0;
var z;
for (i in obj) {
	if (obj[i] > max) {
		max = obj[i];
		z = i;
	}
}
var but = document.getElementById('but'),
	but1 = document.getElementById('but1'),
	but2 = document.getElementById('but2');

but.onclick = function() {
	alert(z);
}

but1.onclick=function () {
	alert(max);
}

but2.onclick=function() {
	alert(obj1[z]);
}

// console.log("最多的是：" + z);
// console.log("位置分布：" + obj1[z]);