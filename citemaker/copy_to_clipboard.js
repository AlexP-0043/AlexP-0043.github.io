function copyDivToClipboard() {
                    var range = document.createRange();
                    range.selectNode(document.getElementById("final"));
                    window.getSelection().removeAllRanges(); 
                    window.getSelection().addRange(range); 
                    document.execCommand("copy");
                    window.getSelection().removeAllRanges();
}
