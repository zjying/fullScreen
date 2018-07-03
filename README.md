两种方式
	1.打开新窗口，母窗口与新窗口数据不能同步，但应该可以js赋值
		(1)、兼容ie与其他主浏览器
		(2)、若嵌套iframe,则此模块的iframe需要加allowfullscreen
		(3)、在open里面加scrollbars=yes【否则在火狐下，无滚动条】
	2.在本身基础上进入全屏幕模式，全屏上的数据与关闭全屏后的数据是同步的
		(1)、不兼容ie edge以下版本，不兼容window系统下safari
		(2)、若嵌套iframe,则此模块的iframe需要加allowfullscreen

[demo](https://zjying.github.io/fullScreen/fullScreen.html)
