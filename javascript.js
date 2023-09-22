const form = document.getElementById('myform');
const submitbtn = document.getElementById('submitbtn');
form.addEventListener('input', () => {
    const name = document.getElementById('fname').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    if (name.trim() != '' && email.trim() != '' && mobile.trim() != '') {
        submitbtn.disabled = false;
    }
    else {
        submitbtn.disabled = true;
    }

});
function emailvalidity() {
    submitbtn.disabled = true;
}

function validateEmail() {
    var myemail = $("#email").val();
    //var reexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var reexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (reexp.test(myemail) == true) {
        submitbtn.disabled = false;
    } else {
        submitbtn.disabled = true;
    }
}


$(document).ready(function () {
    $("#submitbtn").click(function () {
        validateEmail();
    });
});


/*
submitbtn.addEventListener('click', (event) => {
    event.preventDefault();
    const dropdown = document.getElementById('gen');
    const selectedoption = dropdown.options[dropdown.selectedIndex].text;
});*/

function myFunction() {
    var myemail = $("#email").val();
    //var reexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var reexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (reexp.test(myemail) == true) {
        submitbtn.disabled = false;
    } else {
        submitbtn.disabled = true;
        alert("Email is invalid write in the form example@gmail.com");
        return ;
    }
    var getSelectedValue = document.querySelector('input[name="s"]:checked');
    var selectelement = document.querySelector('#gen');

    var getSelectedValue = document.querySelector(
        'input[name="bank"]:checked');
    var checkboxes =
        document.getElementsByName('bank');
    var result = "";
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            result += checkboxes[i].value + " , ";
        }
    }

    alert(
        "FIRST NAME:" + document.getElementById("fname").value +
        "\n EMAIL:" + document.getElementById("email").value +
        "\nFIRST PHONE:" + document.getElementById("mobile").value
      
      +  "\n ADDRESS:" + document.getElementById("addr").value 
        + "\n POST CODE:" + document.getElementById("post").value 
        + "\n COUNTRY:" + document.getElementById("cntry").value
        + "\n SECURITY CODE:" + document.getElementById("sec").value
        + "\n NAME ON CARD:" + document.getElementById("nm").value
        + "\n Gender :" + selectelement.value
        + "\n Banks :" + result
    );

}




function myFunction1() {
   
    alert("FIRST NAME:" + document.getElementById("fname").value
        + "\n EMAIL:" + document.getElementById("email").value +
        "\n PHONE:" + document.getElementById("mobile").value +
        "\n ADDRESS:" + document.getElementById("addr").value +
        "\n POST CODE:" + document.getElementById("postt").value +
        "\n COUNTRY:" + document.getElementById("cntry").value
        + "\n SECURITY CODE:" + document.getElementById("sec").value
        + "\n NAME ON CARD:" + document.getElementById("nm").value
        + "\n radio:" + getSelectedValue.value
    );


}

