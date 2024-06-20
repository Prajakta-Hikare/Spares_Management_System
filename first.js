document.addEventListener("DOMContentLoaded", function () {
    var dropdowns = document.getElementsByClassName("dropdown");
    
    // Add event listener for each dropdown
    for (var i = 0; i < dropdowns.length; i++) {
        dropdowns[i].addEventListener("mouseover", function () {
            this.getElementsByClassName("dropdown-content")[0].style.display = "block";
        });

        dropdowns[i].addEventListener("mouseout", function () {
            this.getElementsByClassName("dropdown-content")[0].style.display = "none";
        });
    }
});