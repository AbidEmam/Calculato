function getHistory() {
    return document.getElementById("historyValue").innerText;
}
function printHistory(num) {
    document.getElementById("historyValue").innerText = num;
}
function getOutput() {
    return document.getElementById("outputValue").innerText;
}
function printOutput(num) {
    if (num == "") {
        document.getElementById("outputValue").innerText = num;
    }else{
        document.getElementById("outputValue").innerText = formatNumber(num);
    }
    
}

function formatNumber(num) {
    let n = Number(num);
    let value = n.toLocaleString("en");
    return value;
}
let history;
let number = document.getElementsByClassName("number");
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function () {
        history = getHistory();
        history += this.id;
        printHistory(history);
    })
}
let oparator = document.getElementsByClassName("oparator");
for (let i = 0; i < oparator.length; i++) {
    oparator[i].addEventListener("click", function () {
        if (this.id == "clear") {
            printHistory("");
            printOutput("");
        }
        else if (this.id == "backspace") {
            history = getHistory();
            history = history.substr(0, history.length-1);
            printHistory(history);
            printOutput("");
        }
        else if (this.id == "=") {
            history = getHistory();
            let result = eval(history);
            printOutput(result);
            printHistory(history);
        }
        else{
            history = getHistory();
            history += this.id;
            printHistory(history);
        }
    })
    
}