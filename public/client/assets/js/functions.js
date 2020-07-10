
//JQUERY
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

  

});