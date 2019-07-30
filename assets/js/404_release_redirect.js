window.onload = function() {
    if (window.location.pathname.startsWith("/MultiController/changelog/")) {
        var directories = window.location.pathname.split("/");
        if (directories.length > 3)
            window.location.replace("/MultiController/releases#v"+ directories[3]);
    }
}