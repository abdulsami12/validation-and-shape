
function showfun() {
    let x = document.getElementById('ePassword')

    if (x.type = "password") {
        x.type = "text";
    }
    else {
        x.type = "password";
    }
}

function validation() {
    var frst = document.getElementById('firstname')
    var last = document.getElementById('lastname')
    var email = document.getElementById('emailadd')
    var pass = document.getElementById('ePassword')
    var num = document.getElementById('number')

    console.log(frst.value)
    console.log(last.value)
    console.log(email.value)
    console.log(pass.value)
    console.log(num.value)
    let message = []

    if (frst.value == '') {
        alert("Fill first name:")
        frst.focus()
    }

    if (last.value == '') {
        alert("Fill the last name:");
    }
    if (email.value == '') {
        alert("Fill your email");
    }
    if (pass.value == '') {
        alert("Enter your password");
    }
    if (num.value == '') {
        alert("enter your number")

    }
    
    if (frst.value.length >= 10 || last.value.length >= 10) {
        alert("Please write less then 10 chracter in name")
    }
var a=email.value;
var b=a.indexOf("@")
if(a[b] == '@'){

}else{
    alert("@ is missing")
}

    if (num.value.length > 11) {
        alert("write correct phone number")
    }

}


