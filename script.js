$(document).ready(function(){
    $('#icon').click(function(){
        $('ul').toggleClass('show');
    });
});
      







function myfunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
      



window.data-toggle function(event) {
  if (!event.target.matches('.collapse')) {
    var dropdowns = document.getElementsByClassName("collapse show");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 