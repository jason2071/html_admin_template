// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable').DataTable({
    "searching": false,
    "pageLength": 20,
    "bLengthChange": false,
    "responsive": true
  });
});
