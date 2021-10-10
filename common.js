///<reference path="C:\IDE\jquery.d.ts" />
$(document).ready(function (event) {

    $("*[data-toggle='modal']").click(function (event) {
        var target = $(this).attr("data-target");
        $(target).addClass("show");
    });
    $(".modal").click(function (event) {
        var target = this;
        var contentTag = $(target).children(".model-dialog");
        var closeFlag = true;
        contentTag.each((i,item) => {
            if (item.contains(event.target))
                closeFlag = false;
        });
        if (closeFlag) {
            $(target).removeClass("show"); 
        }
    });
});
    
    
