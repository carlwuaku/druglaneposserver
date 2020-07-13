
//JQUERY
const server_url = "http://localhost/stock/";

function showNotification(msg, type, delay) {
    if (type === "fail") {
        $("#successmsg").removeClass("alert-success background-success");
        $("#successmsg").addClass("alert-danger background-danger");
    }
    if (type === "success") {
        $("#successmsg").removeClass("alert-danger background-danger");
        $("#successmsg").addClass("alert-success background-success");
    }
    $("#successmsg").html(msg);
    $("#successmsg").show();
    setTimeout(function(){
      $("#successmsg").fadeOut("fast");
    },delay);

}

function noConnectionNotification(){
  this.hideLoading();
  this.showNotification("Unable to send data to server. Please try again or contact admin", "fail", 3000);
}

function successNotification(text){
  this.showNotification(text, "success", 3000);
}

function failNotification(text){
  this.hideLoading();
  this.showNotification(text, "fail", 3000);
}

function notPermitted(){
  this.hideLoading();
  this.showNotification("You are not permitted to view the page", "fail", 3000);
}

function showLoading(){
  $("#loading").show();
}

function hideLoading(){
  $("#loading").fadeOut("fast");
}

function showUpNotification(msg){
  $("#notification").html(msg);
  $("#notification").show();
}
function hideUpNotification(){
  $("#notification").html("");
  $("#notification").hide();
}


$(document).ready(function () {
 
    
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

    function readURL(input) {

        if (input.files && input.files[0]) {
            var reader = new FileReader();
            console.log(input.files[0].size);
            if (input.files[0].size > 200000) {
                input.files[0] = "";
                alert("The file is too large. Please make sure the size is less than 200KB");
                return false;
            }
            $("#file_info").text(input.files[0].name);

        }
    }

    $("#file_uploader").change(function () {
        readURL(this);
    });
    $(document).on("click", ".backBtn", function(){
      window.history.back();
    })

    $(document).on("click", "#activatebtn", function(){
        $("#details").fadeOut("fast");
        
        var key = $("#key").val()    
        $.get(server_url + "api_admin/findBranchByKey", {
            k: key
        }).done(function (data) {
            var js = JSON.parse(data);
            if(js.status == '1'){
              $("#activation_key_div").fadeOut("fast")
                $("#details").fadeIn("fast");
                $("#name").html(js.data.name);
                $("#address").html(js.data.address);
                $("#digital_address").html(js.data.digital_address);
                $("#phone").html(js.data.phone);
                $("#email").html(js.data.email);

                $("#act_name_input").val(js.data.name);
                $("#act_address_input").val(js.data.address);
                $("#act_digital_address_input").val(js.data.digital_address);
                $("#act_phone_input").val(js.data.phone);
                $("#act_email_input").val(js.data.email);
            }
            else{
              
                alert('Invalid key entered. Please try again')
            }
            
        }).error(function () {
            alert('Network error. Please check your internet connection and try again')
            
        });
    })
  

});