var xhttp;
xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        var resultData = "";
        var top = 0;
        var totalMarks;
        data.sort(GetSortOrder("name"));
        for (var i = 0; i < data.length; i++) {

            var tag = "pass";
            totalMarks = parseInt(data[i].marks.Maths) + parseInt(data[i].marks.English) + parseInt(data[i].marks.Science);
            if (top < totalMarks) {
                top = totalMarks;
            }
        }
        for (var i = 0; i < data.length; i++) {
            var total;
            var tag = "pass";
            for (var j in data[i].marks) {
                if (parseInt(data[i].marks.Maths) < 20 || parseInt(data[i].marks.English) < 20 || parseInt(data[i].marks.Science) < 20) {
                    tag = "fail"
                }
                total = parseInt(data[i].marks.Maths) + parseInt(data[i].marks.English) + parseInt(data[i].marks.Science);
            }
            if (tag == "fail") {
                resultData = resultData + "<tr class='tableRow fail' ><td >" + data[i].name.charAt(0).toUpperCase() + data[i].name.slice(1) + "</td><td>" + data[i].rollNumber + "</td><td>" + total + "</td><td ><span class='failStatus' >Fail</span></td></tr>";

            } else if (top == total) {
                resultData = resultData + "<tr class='tableRow topper'  ><td >" + data[i].name.charAt(0).toUpperCase() + data[i].name.slice(1) + "</td><td>" + data[i].rollNumber + "</td><td>" + total + "</td><td ><span class='topperStatus'>Topper</span></td></tr>";
            } else {
                resultData = resultData + "<tr class='tableRow pass' ><td >" + data[i].name.charAt(0).toUpperCase() + data[i].name.slice(1) + "</td><td>" + data[i].rollNumber + "</td><td>" + total + "</td><td><span class='passStatus'>Pass</span></td></tr>";
            }
        }
        document.getElementById("result").innerHTML = resultData;
    }
};
xhttp.open("GET", "http://localhost/dummy/getResult.json", true);
xhttp.send();

function GetSortOrder(prop) {
    return function(a, b) {
        if (a[prop] > b[prop]) {
            return 1;
        } else if (a[prop] < b[prop]) {
            return -1;
        }
        return 0;
    }
}