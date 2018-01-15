$(window).on('load', function () { // makes sure the whole site is loaded 
    $('#status').fadeOut(); // will first fade out the loading animation 
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(350).css({ 'overflow': 'visible' });
})


$(document).ready(function () {
    $(".fh").css("min-height", $(window).height());
    console.log("Min-height...");
    console.log("In service script...");

    $('#contactus').css('background', '-webkit-linear-gradient(left, #fe5068, #ffbf13)');

    $('#fullpage').fullpage({
        verticalCentered: true,
        sectionSelector: '.section',
        anchors: ['home1', 'why', 'how', 'projects', 'contact', 'footer'],
        navigation: true,
        autoScrolling: false,
        recordHistory: false,
    });

    $(".demosMenu").change(function () {
        window.location.href = $(this).find("option:selected").attr("id") + '.html';
    });

    $('#contactus').click(function () {
        console.log("Clicked contact us...");
        window.location.href = "#sectionf";
    });

    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        console.log(regex.test(email));
        return regex.test(email);
    }

    function isValidPhone(tphone) {
        // var regexphone = /^(\+?\d{1,3}[- ]?)?\d{10}$/;
        var regexphone = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
        console.log(regexphone.test(tphone));
        return regexphone.test(tphone);
    }

    function checkErrors(vname, vphone, vemail) {
        if (vname.length > 0) {
            if ($('#namee').is(":visible")) { $("#namee").remove(); }
            else {
                console.log("Name error already removed...");
            }
        }
        else if (isValidPhone(vphone)) {
            if ($('#phonee').is(":visible")) { $("#phonee").remove(); }
            else {
                console.log("Phone error already removed...");
            }
        }
        else if (isEmail(vemail)) {
            if ($('#emaile').is(":visible")) { $("#emaile").remove(); }
            else {
                console.log("Email error already removed...");
            }
        }
    }

    function checkName(cname) {
        console.log((cname.length > 0));
        console.log(cname);
        if ((cname.length > 0)) {
            $("#namee").remove();
            $("#name").css('border-bottom-color', '#979797');
        }
        else {
            if (cname.length <= 0)
                console.log("Name still not entered...");
            else {
                $("<span class='mdl-textfield__error' id='namee'>Enter a name</span>").insertAfter("#name");
                $("#name").css('border-bottom-color', 'red');
            }
            // return false;
            // else if((cname.length > 0) && $('#namee').is(":visible"))
            //   $("<span class='mdl-textfield__error' id='namee'>Please enter your name</span>").insertAfter("#name");
        }
    }

    function checkPhone(cphone) {
        if (isValidPhone(cphone) && $('#phonee').is(":visible")) {
            $("#phonee").remove();
            $("#phone").css('border-bottom-color', '#979797');
        }
        else {
            if (cphone.length <= 0)
                console.log("Phone number still not entered");
            // else
            //   $("<span class='mdl-textfield__error' id='phonee'>Enter a valid phone number</span>").insertAfter("#phone");
        }
    }

    function checkEmail(cemail) {
        if (isEmail(cemail) && $('#emaile').is(":visible")) {
            $("#emaile").remove();
            $("#email").css('border-bottom-color', '#979797');
        }
        else {
            if (cemail.length <= 0)
                console.log("Email id still not entered");
            // else
            //   $("<span class='mdl-textfield__error' id='emaile'>Enter a valid email address</span>").insertAfter("#email");
        }
    }


    $("#name").focus(function () {
        console.log("Name focussed..");
        var fname = document.getElementById("name").value;
        checkName(fname);
    });

    $('#name').focusout(function () {
        console.log("Name out of focus..");
        var fname = document.getElementById("name").value;
        checkName(fname);
    })

    $("#phone").focus(function () {
        console.log("Phone focussed..");
        var fphone = document.getElementById("phone").value;
        checkPhone(fphone);
    });

    $('#phone').focusout(function () {
        console.log("Phone out of focus..");
        var fphone = document.getElementById("phone").value;
        checkPhone(fphone);
    })

    $("#email").focus(function () {
        console.log("Email focussed..");
        var femail = document.getElementById("email").value;
        checkEmail(femail);
    })

    $('#email').focusout(function () {
        console.log("Email out of focus..");
        var femail = document.getElementById("email").value;
        checkEmail(femail);
    })

    $('#submit').click(function () {
        // checkfunc();
        var fname = document.getElementById("name").value;
        var fphone = document.getElementById("phone").value;
        var femail = document.getElementById("email").value;
        if (fname.length > 0 && isValidPhone(fphone) && isEmail(femail)) {
            console.log("Clicked submit...");
            if ($('#namee').is(":visible")) { $("#namee").remove(); }
            if ($('#phonee').is(":visible")) { $("#phonee").remove(); }
            if ($('#emaile').is(":visible")) { $("#emaile").remove(); }
            $('#thankyou').css('display', 'block');
            $("<span class='mdl-textfield__error' id='tmessage'>We’ll get right back to you. </span>").insertAfter("#thankyou");
            $('#submit').css('display', 'none');
            // e.preventDefault();



            // var modal = document.getElementById('myModal');
            // modal.style.display = "block";
            url = "https://script.google.com/macros/s/AKfycbwj7pEJUdfaPNvBZ52itUNJ7MAsX5diJpmFfFFjUmykdYkXfIRc/exec";
            console.log("Creating url...");
            var name = $('#name').val();
            var phone = $('#phone').val();
            var email = $('#email').val();
            var message = $('#enquiry').val();
            var nda = $('#nda').val();
            var time = new Date();
            console.log(time);
            time = formatDate(time);
            console.log(time);
            // time = (time.getMonth() + 1) + '/' + time.getDate() + '/' +  time.getFullYear();
            // console.log(time);
            console.log($('#nda').val());
            sdata = "?name=" + name + "&phone=" + phone + "&email=" + email + "&enquiry=" + message + "&nda=" + nda + "&time=" + time;
            console.log(url + sdata);
            url = url + sdata;
            var jqxhr = $.ajax({
                url: url,
                method: "GET",
                success: function () {
                    console.log("Data successfully submitted...");
                    $('#name').val('');
                    $('#phone').val('');
                    $('#email').val('');
                    $('#enquiry').val('');
                }
            })
        }
        else if (fname.length <= 0) {
            // alert("Please enter your name ,number and email id to submit the details.");
            if ($('#namee').is(":visible")) {
                console.log("Name error already displayed...");
            }
            else {
                $("<span class='mdl-textfield__error' id='namee'>Enter a name</span>").insertAfter("#name");
                $("#name").css('border-bottom-color', 'red');
                return false;
            }
        }
        else if (!isValidPhone(fphone)) {
            // alert("Please enter valid phone number to submit the details.");
            if ($('#phonee').is(":visible")) {
                checkName(fname);
                console.log("Phone error already displayed...");
            }
            else {
                $("<span class='mdl-textfield__error' id='phonee'>Enter a valid phone number</span>").insertAfter("#phone");
                $("#phone").css('border-bottom-color', 'red');
                return false;
            }
        }
        else if (!isEmail(femail)) {
            if ($('#emaile').is(":visible")) {
                console.log("email error already displayed...");
            }
            else {
                $("<span class='mdl-textfield__error' id='emaile'>Enter a valid email address</span>").insertAfter("#email");
                $("#email").css('border-bottom-color', 'red');
                // alert("Please enter valid email id to submit the details.");
                return false;
            }
        }
    });
});


function formatDate(dateVal) {
    var newDate = new Date(dateVal);
  
    var sMonth = padValue(newDate.getMonth() + 1);
    var sDay = padValue(newDate.getDate());
    var sYear = newDate.getFullYear();
    var sHour = newDate.getHours();
    var sMinute = padValue(newDate.getMinutes());
    var sAMPM = "AM";
  
    var iHourCheck = parseInt(sHour);
  
    if (iHourCheck > 12) {
      sAMPM = "PM";
      sHour = iHourCheck - 12;
    }
    else if (iHourCheck === 0) {
      sHour = "12";
    }
  
    sHour = padValue(sHour);
    console.log(sDay + "-" + sMonth + "-" + sYear + " " + sHour + ":" + sMinute + " " + sAMPM);
  
    return sDay + "-" + sMonth + "-" + sYear + " " + sHour + ":" + sMinute + " " + sAMPM;
  }
  
  function padValue(value) {
    return (value < 10) ? "0" + value : value;
  }
  
  $(function ($) {
    $('.fbicon').hover(function () {
      $(this).find('img').attr('src', function (i, src) {
        return src.replace('images/Fb.svg', 'images/Fbm.svg')
      })
    }, function () {
      $(this).find('img').attr('src', function (i, src) {
        return src.replace('images/Fbm.svg', 'images/Fb.svg')
      })
    })
    $('.twittericon').hover(function () {
      $(this).find('img').attr('src', function (i, src) {
        return src.replace('images/Twitter.svg', 'images/Twitterm.svg')
      })
    }, function () {
      $(this).find('img').attr('src', function (i, src) {
        return src.replace('images/Twitterm.svg', 'images/Twitter.svg')
      })
    })
    $('.instaicon').hover(function () {
      $(this).find('img').attr('src', function (i, src) {
        return src.replace('images/Insta.svg', 'images/Instam.svg')
      })
    }, function () {
      $(this).find('img').attr('src', function (i, src) {
        return src.replace('images/Instam.svg', 'images/Insta.svg')
      })
    })
    $('.mediumicon').hover(function () {
      $(this).find('img').attr('src', function (i, src) {
        return src.replace('images/Medium.svg', 'images/Mediumm.svg')
      })
    }, function () {
      $(this).find('img').attr('src', function (i, src) {
        return src.replace('images/Mediumm.svg', 'images/Medium.svg')
      })
    })
  })