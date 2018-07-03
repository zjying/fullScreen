/*获取url参数*/
function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return unescape(r[2]);
	return null;
}
$(function() {
		var opener = GetQueryString("opener");
		if(opener == '1') {
			$("#fullWin").text("关闭").attr("onclick", "exitWin()");
		}
	})
/*全屏*/
function openWin() {
	var screen_width = window.outerWidth;
	var screen_height = window.outerHeigth;
	console.log(document.location, document.location.href)
	win = window.open(document.location.href + "?opener=1", '垫资申请', 'width=' + window.screen.availWidth + ',height=' + window.screen.availHeight + ',location=no,menubar=no,scrollbars=yes');
}
/*关闭全屏*/
function exitWin() {
	window.open("_blank").close();
	window.self.close();
}