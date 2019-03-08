$(document).ready(function () {
    $("#myBtn").mouseleave(function () {
        $("#demo").hide();
    });
});
window.onload = function (e) {
    document.getElementById("myBtn").addEventListener("click", function () {
        Prime();

    });
    document.getElementById("myBtn").addEventListener("click", function () {

    });

    function Prime() {
        number = Number(document.getElementById("N").value);
        localStorage.setItem("isPrime", PrimeOrNot(number));
        if (localStorage.getItem("isPrime") == 0) {
            // window.alert(number+"-The inputed number is Prime");
            document.getElementById("result").innerHTML = "Given number is Prime";
        }
        else {
            // window.alert(number+"-The inputted number is not Prime");
            document.getElementById("result").innerHTML = "Given number is not Prime";
        }
    }
}


function PrimeOrNot(value) {


    var i, flag = 0, number;
    number = Number(document.getElementById("N").value);

    for (i = 2; i <= number / 2; i++) {
        if (number % i == 0) {
            flag = 1;
            break;
        }
    }
    if (flag == 0) {
        // window.alert(number+"-The inputed number is Prime");
        return 0;
    }
    else {
        // window.alert(number+"-The inputted number is not Prime");
        return 1;
    }

}

function loadDoc() {
    $("#demo").show();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML =
                this.responseText;
        }
    };
    xhttp.open("GET", "prime.txt", true);
    xhttp.send();
}
 