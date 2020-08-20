function onlyNumberKey(evt) {

    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    checkAllVelidation();
    return true;
}

function checkName() {
    var value = document.getElementById("fname").value;
    if (value.length <= 20 && value.length > 0 && alpha(value)) {
        return true;
    } else {
        return false;
    }

}

function checkLname() {
    var value = document.getElementById("lname").value;
    if (value.length <= 20 && value.length > 0 && alpha(value)) {
        return true;
    }
    return false;
}

function checkClass() {
    var value = document.getElementById("className").value;
    if (value.length <= 20 && value.length > 0 && alphanumeric(value)) {
        return true;
    }
    return false;
}

function checkYearOfPassing() {
    var value = document.getElementById("year").value;
    if (value.length <= 20 && value.length > 0) {
        if (value <= 2017) {

            return true;
        }
        return false;
    }
    return false;
}

function CheckPercent() {
    var value = document.getElementById("percent").value;
    if (value.length <= 20 && value.length > 0) {
        return true;
    }
    return false;
}

function checkAllVelidation() {
    if (!checkName() || !checkLname() || !checkClass() || !checkYearOfPassing() || !CheckPercent()) {
        console.log("hi");
        var resultData = "<button class=\"deactive\" disabled>Please Fill All Fields</button>"
        document.getElementById("submitButton").innerHTML = resultData;
    } else {
        console.log("bye");
        var resultData = "<input type=\"submit\" id=\"submit\" class=\"active\" onclick=\"checkAllVelidation()\" value=\"Submit\">"
        document.getElementById("submitButton").innerHTML = resultData;
    }

}

function alphanumeric(inputtxt) {
    var letterNumber = /^[0-9a-zA-Z]+$/;
    if (inputtxt.match(letterNumber)) {
        return true;
    } else {
        return false;
    }
}

function alpha(inputtxt) {
    var letterNumber = /^[a-zA-Z]+$/;
    if (inputtxt.match(letterNumber)) {
        return true;
    } else {
        return false;
    }
}