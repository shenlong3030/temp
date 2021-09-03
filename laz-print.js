$('.print-pick-list table tbody td').html(function(index,html){
    return html.replace('[HCM]','');
});
$(".print-pick-list table").tablesorter();
