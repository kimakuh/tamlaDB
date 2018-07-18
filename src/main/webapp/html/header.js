// div#header 태그에 /html/header.html 내용을 삽입한다.
$.get("/tamlaDB/html/header.html", (data) => {
	$("#header").html(data);
	loadLoginUser();
});

function loadLoginUser() {
	
	$.getJSON("/tamlaDB/json/auth/loginUser", (data) => {
		$("#username").text(data.id);
		$("#logoutBtn").click((e) => {
			e.preventDefault(); // 클릭했을 때 원래 하던 일이 있는데 그것을 하지 말라!
			$.get("/tamlaDB/json/auth/logout", () => {
				location.href = "/tamlaDB/html/auth/login.html";
			});
		});
	}).fail(() => {
		location.href = "/tamlaDB/html/auth/login.html";
	});
	
}




