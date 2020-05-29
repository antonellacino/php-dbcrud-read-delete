function init() {
    getListPaganti();

    //Eliminazione pagante
    $('#paganti').on('click', 'span.delete', function(e) {
        var pagante = $(this).parent();
        deletePagante(pagante);
    })
}

//FUNZIONI----------------------------------------
function getListPaganti() {
    $.ajax({
        "url": "getPagantiList.php",
        "method": "POST",
        "success": function(data) {
            printPagantiList(data);
        },
        "error": function(data) {
            console.log('Errore!');
        }
    })
}

//-------------------------------------------------------
function printPagantiList(paganti) {
    var source = $('#paganti-template').html();
    var template = Handlebars.compile(source);

    for (pagante of paganti) {
        var context = {
            "id": pagante.id,
            "name": pagante.name,
            "lastname": pagante.lastname,
            "address": pagante.address
        };
        var html = template(context);
        $('#paganti').append(html);
    }
}
//---------------------------------------------------------
function deletePagante(pagante) {
    var idPagante = pagante.data('id');
    console.log(idPagante);
    $.ajax({
        "url": "deletePaganteById.php",
        "method": "POST",
        "data": {
            "id": idPagante
        },
        "success": function(reponse) {
            pagante.fadeOut();
        },
        "error": function() {
            console.log('Errore')
        }
    })

}
//--------------------------------------------------------
$(document).ready(init);