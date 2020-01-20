$(document).ready(function () {
  function validations() {
    if (userFullname == "") {
      $("#fullname").focus();
      return false;
    }
    else if (email == "") {
      $("#email").focus();
      return false;
    }
    else if (username == "") {
      $("#username").focus();
      return false;
    }
    else if (password == "") {
      $("#password").focus();
      return false;
    } else if (cpassword == "") {
      $("#cpassword").focus();
      return false;
    }
    else if (password != cpassword) {
      $("#password").focus();
      $("#cpassword").focus();
      alert('Password doesnt match');
      return false;
    }
    else {
      return true;
    }
  }

  $('#register').click(function (e) {
    e.preventDefault();

    userFullname = $("#fullname").val();
    email = $("#email").val();
    username = $("#username").val();
    password = $("#password").val();
    cpassword = $("#cpassword").val();
    if (validations()) {
      regdata = {
        'userFullname': userFullname,
        'email': email,
        'username': username,
        'password': password,
      }
      console.log(regdata);
      $.ajax({
        url: 'http://localhost:5000/Register',
        type: 'post',
        dataType: 'json',
        data: regdata,
        success: function (res, textStatus, xhr) {
          if (res.message == "Register complete") {
            location.href = "Destination Nepal Login.html";
          } else {
            console.log(res.message)
            alert(res.message);
          }

        },
        error: function (xhr, textStatus, errorThrown) {

        }
      });
    }
  });

});