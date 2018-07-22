// div#header 태그에 /html/header.html 내용을 삽입한다.
$.get(serverRoot + "/tamlaisjeju/html/header.html", (data) => {
	$("#header").html(data);
	loadLoginUser();
});

function loadLoginUser() {
	$.getJSON(serverRoot + "/json/auth/loginUser", (data) => {
		$("#username").text(data.id);
		$("#logoutBtn").click((e) => {
			e.preventDefault(); // 클릭했을 때 원래 하던 일이 있는데 그것을 하지 말라!
			$.get(serverRoot + "/json/auth/logout", () => {
				location.href = serverRoot + "/tamlaisjeju/html/auth/login.html";
			});
		});
	}).fail(() => {
		location.href = serverRoot + "/tamlaisjeju/html/auth/login.html";
	});
}



