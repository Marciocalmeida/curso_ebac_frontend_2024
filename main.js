$(document).ready(function() {
    $('#formTarefa').submit(function(e) {
        e.preventDefault();
        
        var nomeTarefa = $('#nomeTarefa').val();
        if (nomeTarefa) {
            $('#listaTarefas').append('<li>' + nomeTarefa + '</li>');
            $('#nomeTarefa').val('');
        }
    });

    $('#listaTarefas').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});