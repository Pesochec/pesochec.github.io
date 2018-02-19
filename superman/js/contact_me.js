// Contact Form Scripts

$(function() {

    $("#sentMessageTop input").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM€£
            var name = $("input#nameTop").val();
            var email = $("input#emailTop").val();
            var phone = $("input#phoneTop").val();
         //   var message = $("textarea#message").val();
            var message = 'Рассчитать затраты.';
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "././mail/contact_me.php",
                type: "POST",
                data: {
                    name: name,
                    phone: phone,
                    email: email,
                    message: message
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#sentMessageTop .row').hide();
                    $('#sentMessageTop #success').html("<div class='col-lg-12 col-md-12 col-sm-12 text-center' style='display:block;height: 350px;margin-top: 30px'>");
  
                    $('#sentMessageTop #success > div')
                        .append("<div class='intro-lead-in'>Спасибо за заявку!</div>");
                        $('#sentMessageTop #success > div')
                        .append("<div class='intro-heading'>Мы свяжемся с Вами в рабочее время с 9:00 до 19:00 по московскому времени.</div>");
                        $('#sentMessageTop #success > div')
                        .append("<div class='intro-heading'>Запишите наш контактный номер +7-969-034-99-89</div>");
                    $('#sentMessageTop #success > div')
                        .append('</div>');

                    $('#sentMessageTop #success').fadeIn( "slow" );
                    yaCounter46980486.reachGoal('sentMessageTop');
                    //clear all fields
                   // $('.contactForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('.contactForm').trigger("reset");
                },
            });
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

$(function() {

    $("#sentMessageBottom input").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#nameBottom").val();
            var email = $("input#emailBottom").val();
            var phone = $("input#phoneBottom").val();
            //var message = $("textarea#message").val();
            var message = 'Получить план.';
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "././mail/contact_me.php",
                type: "POST",
                data: {
                    name: name,
                    phone: phone,
                    email: email,
                    message: message
                },
                cache: false,
                success: function() {
                    // Success message
                    // Success message
                    $('#sentMessageBottom .row').hide();
                    $('#sentMessageBottom #success').html("<div class='col-lg-12 col-md-12 col-sm-12 text-center'>");
  
                    $('#sentMessageBottom #success > div')
                        .append("<h2>Спасибо, с Вами свяжется наш менеджер в течение 15 минут.</h2>");
                    $('#sentMessageBottom #success > div')
                        .append('</div>');
                    $('#sentMessageBottom #success').fadeIn( "slow" );
                    yaCounter46980486.reachGoal('sentMessageBottom');
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('.contactForm').trigger("reset");
                },
            });
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

$(function() {

    $("#sentMessageDetails input").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#nameDetails").val();
            var email = $("input#emailDetails").val();
            var phone = $("input#phoneDetails").val();
            var message = 'Узнать подробнее';
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "././mail/contact_me.php",
                type: "POST",
                data: {
                    name: name,
                    phone: phone,
                    email: email,
                    message: message
                },
                cache: false,
                success: function() {
                     // Success message
                    $('#sentMessageDetails .row').hide();
                    $('#sentMessageDetails #success').html("<div class='col-lg-12 col-md-12 col-sm-12 text-center'>");
  
                    $('#sentMessageDetails #success > div')
                        .append("<h2>Спасибо, с Вами свяжется наш менеджер в течение 15 минут.</h2>");
                    $('#sentMessageDetails #success > div')
                        .append('</div>');
                    $('#sentMessageDetails #success').fadeIn( "slow" );
                    yaCounter46980486.reachGoal('sentMessageDetails');
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('.contactForm').trigger("reset");
                },
            });
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

$(function() {

    $("#sentMessageBusiness input").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#nameBusiness").val();
            var email = $("input#emailBusiness").val();
            var phone = $("input#phoneBusiness").val();
            var message = 'Получить бизнес-план';
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "././mail/contact_me.php",
                type: "POST",
                data: {
                    name: name,
                    phone: phone,
                    email: email,
                    message: message
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#sentMessageBusiness .row').hide();
                    $('#sentMessageBusiness #success').html("<div class='col-lg-12 col-md-12 col-sm-12 text-center'>");
  
                    $('#sentMessageBusiness #success > div')
                        .append("<h2>Спасибо, с Вами свяжется наш менеджер в течение 15 минут.</h2>");
                    $('#sentMessageBusiness #success > div')
                        .append('</div>');
                    $('#sentMessageBusiness #success').fadeIn( "slow" );
                    yaCounter46980486.reachGoal('sentMessageBusiness');
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('.contactForm').trigger("reset");
                },
            });
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

$(function() {

    $("#sentMessageRebrand input").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#nameRebrand").val();
            var email = $("input#emailRebrand").val();
            var phone = $("input#phoneRebrand").val();
            var message = 'Заявка на ребрендинг';
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "././mail/contact_me.php",
                type: "POST",
                data: {
                    name: name,
                    phone: phone,
                    email: email,
                    message: message
                },
                cache: false,
                success: function() {
                     // Success message
                    $('#sentMessageRebrand .row').hide();
                    $('#sentMessageRebrand #success').html("<div class='col-lg-12 col-md-12 col-sm-12 text-center'>");
  
                    $('#sentMessageRebrand #success > div')
                        .append("<h2  >Спасибо, с Вами свяжется наш менеджер в течение 15 минут.</h2>");
                    $('#sentMessageRebrand #success > div')
                        .append('</div>');
                    $('#sentMessageRebrand #success').fadeIn( "slow" );
                    yaCounter46980486.reachGoal('sentMessageRebrand');

                    //clear all fields
                    $('.contactForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('.contactForm').trigger("reset");
                },
            });
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
