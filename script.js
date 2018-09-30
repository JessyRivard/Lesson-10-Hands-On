$(document).ready(function(){
    $(".nav-item").hover(function(){
        $(this).removeClass("socialButtons");
        $(this).addClass("socialButtonsHover");
    }, function(){
        $(this).removeClass("socialButtonsHover");
        $(this).addClass("socialButtons");
    });
});
let pageLoad = new XMLHttpRequest();
pageLoad.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let repos = JSON.parse(this.responseText);
        for (var i = 0; i < repos.length; i++) {
            $(".error").remove();
            $("#repos").append("<br></br><ul class=\"repos\"><li><b>Name:</b> <a href=\"" + repos[i].html_url + "\">" + repos[i].name + "</a></li><li><b>Description:</b> " + repos[i].description + "</li><li><b>Language:</b> " + repos[i].language + "</li></ul>");
        };
    };
};
pageLoad.open("GET", "https://api.github.com/users/jessyrivard/repos", true);
pageLoad.send();
