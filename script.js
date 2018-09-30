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
            let languages = new XMLHttpRequest();
            languages.onreadystatechange = function(){
                if (this.readyState == 4 && this.status == 200) {
                    let lang = JSON.parse(this.responseText);
                    return Object.keys(lang)[0];
                };
            };
            languages.open("GET", "https://api.github.com/repos/JessyRivard/" + repos[i].name + "/languages", true);
            languages.send();
            $("#repos").append("<ul class=\"repoitem\"><li>Name: <a href=\"" + repos[i].html_url + "\">" + repos[i].name + "</a></li><li>Description: " + repos[i].description + "</li><li>Language: " + languages + "</li></ul>");
        };
    };
};
pageLoad.open("GET", "https://api.github.com/users/jessyrivard/repos", true);
pageLoad.send();
