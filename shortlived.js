const path_regex = /\/shorts\/(.*)/;

function short_redir() {
    var path = document.location.pathname

    var match = path.match(path_regex);

    if (match != null) {
        //document.location.pathname = `/watch?v=${match[1]}`;
        window.location = `https://www.youtube.com/watch?v=${match[1]}`
    }
}


//Poll; it's not pretty, but should work.
setInterval(short_redir, 1000);
