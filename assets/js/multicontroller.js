function updateDL() {
    $.get("https://api.github.com/repos/saltyTT/MultiController/releases", function(data, status) {
        for (var i = 0; i < data.length; i++)
            $("#dlc" + data[i].tag_name.replace(/\./g ,"_")).html(data[i].assets[0].download_count + " downloads");
    })
}