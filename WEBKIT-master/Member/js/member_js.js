// function show(){
// 	document.getElementsByClassName("col-md-2")[0].style.display = "block";
// 	document.getElementsByClassName("icon-content-back")[0].style.display = "block";
// 	document.getElementsByClassName("icon-content")[0].style.display = "none";
// }
// function hide(){
// 	document.getElementsByClassName("col-md-2")[0].style.display = "none";
// 	document.getElementsByClassName("icon-content-back")[0].style.display = "none";
// 	document.getElementsByClassName("icon-content")[0].style.display = "block";
// }
//CHỈNH SỬA TÀI KHOản
function rename_username(){
	document.getElementById("rename_username").innerHTML = "<input type='text' placeholder='Nhập tên đăng nhập mới:'>";
}
function rename_pass(){
	document.getElementById("rename_pass").innerHTML = "<input type='text' placeholder='Nhập mật khẩu cũ:'> <br><br> <input type='text' placeholder='Nhập mật khẩu mới:'> <br><br> <input type='text' placeholder='Nhập lại mật khẩu mới:'>";
}
function rename_email(){
	document.getElementById("rename_email").innerHTML = "<input type='text' placeholder='Nhập email:'>";
}
function rename_phone(){
	document.getElementById("rename_phone").innerHTML = "<input type='text' placeholder='Nhập số điện thoại:'>";
}
function rename_class(){
	document.getElementById("rename_class").innerHTML = "<input type='text' placeholder='Nhập tên lớp:'>";
}
function rename_avatar(){
	document.getElementById("rename_avatar").innerHTML = "<input type='file'>";
}


$(document).ready(function(){
	$(".icon-content").click(function(){
		$(".col-md-2").css({
			left: "0"
		});
		$(".icon-content").css({
            display: "none"
		});
		$(".icon-content-back").css({
            left: "205px"
		});
	});
	$(".icon-content-back").click(function(){
		$(".col-md-2").css({
			left: "-240px"
		});
		$(".icon-content").css({
            display: "block"
		});
		$(".icon-content-back").css({
            left: "-35px"
		});
	});
});
function opentabs(tabName){
	var i;
	var x=document.getElementsByClassName("content");
		for(i=0; i < x.length ; i++)
			{
				x[i].style.display="none";
			}
		document.getElementById(tabName).style.display="block";
}

// đổi background khi click thanh menu.
$(document).ready(function () {
	$(".item-menu-products").click(function() {
        // Clear
		$(".item-menu-products").removeClass("background");
		$(".item-menu-dashboard").removeClass("background");
        // Thêm Class
		$(this).addClass("background");
	});
	$('.item-menu-dashboard').click(function() {
        $(".item-menu-products").removeClass("background");
		$(this).addClass('background');
	});
});

