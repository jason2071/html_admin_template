$(document).ready(function () {
    $('#customer-table').DataTable({
        searching: true,
        processing: true,
        responsive: true
    });
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
    $('.dropdown-trigger').dropdown({
        closeOnClick: true,
        constrainWidth: false
    });
    $('select').formSelect();
   
});