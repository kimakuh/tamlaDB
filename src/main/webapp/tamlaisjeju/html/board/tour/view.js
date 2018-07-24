var contentid = $(location).attr('search').slice($(location).attr('search').indexOf('=') + 1);

// console.log(contentid);




var serviceKey = "5fTAWN079L8Yfhs%2F9YQ7zBKyOO6%2BKpeQJ15u5GiLJY4AN%2Bx96uwIQHWmIyyxcQwhOxdfQw8s23QzN%2B22icuKbw%3D%3D";

$(function () {
    $.getJSON("http://api.visitkorea.or.kr/openapi/service/rest/KorService/detailCommon?ServiceKey=" + serviceKey +
        "&contentId=" + contentid +
        "&defaultYN=Y&firstImageYN=Y&addrinfoYN=Y&overviewYN=Y&MobileOS=ETC&MobileApp=AppTesting&_type=json",
        function (contentId) {
            // json 객체 내부 접근하기
            // console.dir(contentId);
            // console.log(contentId);
            // console.log(contentId.response);
            // console.log(contentId.response.body);
            // console.log(contentId.response.body.items);
            // console.log(contentId.response.body.items.item);

            var items = contentId.response.body.items.item;
        
            var temp2 = $('#codeTemp').html();
            var template = Handlebars.compile(temp2);
            
            var html = template(items);
            // console.log(items);
            // console.log(html);
            
            $('#result').html(html);

        });
});