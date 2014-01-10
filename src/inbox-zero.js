function switchNoMailMessage() {
    if (window.location.hash == '#inbox') {
        var target = document.getElementsByClassName('TC')[0];
        if (typeof(target) != 'undefined' && target.textContent == "No new mail!") {
            var imgUrl = chrome.extension.getURL("inbox-zero.jpg");
            var img = "<img src='" + imgUrl + "' />";
            target.innerHTML = img;
        }
    }
}

window.onload = switchNoMailMessage;
// TODO: be more efficient with and catch keyboard shortcuts too
document.onmouseup = switchNoMailMessage;
