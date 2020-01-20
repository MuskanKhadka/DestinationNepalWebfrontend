
        $(document).ready(function () {
            var tok = localStorage.getItem('token');
            if (tok) {
                $.ajax({
                    type: 'get',
                    url: 'http://localhost:9000/users/me',
                    beforeSend: function (xhr) {
                        if (tok) {
                            xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
                        }
                    },
                    success: function (res) {
                        
                        location.href = "Home.html";
                             
                    },
                    error: function () {
                   
                    }
                });
            }
           function validations() {
                username = $("#username").val();
                password = $("#password").val();

                if (username == "") {
                    $("#username").focus();
                    return false;
                }else if (password == "") {
                    $("#password").focus();
                    return false;
                }else{
                    return true;
                }
            }


            $('#login').click(function (e) {
                e.preventDefault();
              
               if(validations()){
                logindata= {
                    'username': username,
                    'password': password
                }
 console.log(logindata)
                $.ajax({
                    url: 'http://localhost:5000/login',
                    type: 'post',
                    dataType:'json',
                    data: logindata,
                    success: function (res, textStatus, xhr) {
                        if (res.token != null) {
                            localStorage.setItem('token', res.token);
                              location.href = "Home.html";
                        } else {
                            alert(res.message);
                        }


                    },
                    error: function (xhr, textStatus, errorThrown) {

                    }
                });
            }
            });
        
        });