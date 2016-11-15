/* Btn sweetalert and copy to clipboard */
$('.btn-clipboard').on('click', function () {
    // copying to clipboard
    var clipboard = new Clipboard('.btn-clipboard');

    // Alert sweetalert
    swal(
        '',
        '<i class="fa fa-sw fa-clipboard"></i> Copiado para a área de transferência!',
        'success'
    )
});
