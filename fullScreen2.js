/*全屏*/
function fullScreen() {
	var docElm = document.getElementById("allwin");
	//var  docElm =top.window.document.documentElement;
	//docElm.webkitRequestFullScreen();  
	if(docElm.requestFullscreen) {
		docElm.requestFullscreen();
	} else if(docElm.mozRequestFullScreen) {
		docElm.mozRequestFullScreen();
	} else if(docElm.webkitRequestFullScreen) {
		var br = getBroswer();
		var version = br.version.split(".")[0];
		if(br.broswer == "Safari" && parseInt(version) <= 5) {
			alert("该浏览器不支持全屏显示");
		} else {
			docElm.webkitRequestFullScreen();
		}
	} else if(docElm.msRequestFullscreen) {
		docElm.msRequestFullscreen();
	} else if(typeof window.ActiveXObject !== "undefined") { //for Internet Explorer
		var wscript = new ActiveXObject("WScript.Shell");
		if(wscript !== null) {
			alert("该浏览器不支持全屏显示");
		}
	}
}
/*关闭全屏*/
function exitFull(obj) {
	var docElm = document.getElementById("allwin");
	if(docElm.exitFullscreen) {
		docElm.exitFullscreen();
	} else if(docElm.mozCancelFullScreen) {
		docElm.mozCancelFullScreen();
	} else if(docElm.webkitCancelFullScreen) {
		docElm.webkitCancelFullScreen();
	} else if(docElm.msExitFullscreen) {
		docElm.msExitFullscreen();
	}

}
/*获取浏览器以及版本*/
function getBroswer() { 
	var Sys = {};
	var ua = navigator.userAgent.toLowerCase();
	var s;
	(s = ua.match(/edge\/([\d.]+)/)) ? Sys.edge = s[1]:
		(s = ua.match(/rv:([\d.]+)\) like gecko/)) ? Sys.ie = s[1] :
		(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
		(s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
		(s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
		(s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
		(s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;

	if(Sys.edge) return {
		broswer: "Edge",
		version: Sys.edge
	};
	if(Sys.ie) return {
		broswer: "IE",
		version: Sys.ie
	};
	if(Sys.firefox) return {
		broswer: "Firefox",
		version: Sys.firefox
	};
	if(Sys.chrome) return {
		broswer: "Chrome",
		version: Sys.chrome
	};
	if(Sys.opera) return {
		broswer: "Opera",
		version: Sys.opera
	};
	if(Sys.safari) return {
		broswer: "Safari",
		version: Sys.safari
	};

	return {
		broswer: "",
		version: "0"
	};
}