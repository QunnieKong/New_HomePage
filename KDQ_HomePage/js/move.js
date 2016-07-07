window.onload = function () {
    var logo = document.getElementById("hello_logo");
    var logo_pass = document.getElementById("hello_logo_pass");
    logo.onmouseover = function () {
    	document.getElementById("hello_logo").setAttribute("style","display:none");
        document.getElementById("hello_logo_pass").setAttribute("style", "display:block");        
        }
    logo_pass.onmouseout = function () {
        document.getElementById("hello_logo_pass").setAttribute("style", "display:none");
        document.getElementById("hello_logo").setAttribute("style", "display:block");
        } 
}


