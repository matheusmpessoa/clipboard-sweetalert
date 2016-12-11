$('.btn-autocloser').on('click', function () {
    swal({
        title: 'Auto close alert!',
        text: 'I will close in 2 seconds.',
        timer: 2000
    }).then(
        function () {},
        // handling the promise rejection
        function (dismiss) {
            if (dismiss === 'timer') {
                console.log('I was closed by the timer')
            }
        }
    )
});

$('.btn-titleText').on('click', function () {
    swal(
        'The Internet?',
        'That thing is still around?',
        'question'
    )
});

$('.btn-sucesso').on('click', function () {
    swal(
        'Good job!',
        'You clicked the button!',
        'success'
    )
});

$('.btn-customHTML').on('click', function () {
    swal({
        title: '<i>HTML</i> <u>example</u>',
        type: 'info',
        html: 'You can use <b>bold text</b>, ' +
            '<a href="//github.com">links</a> ' +
            'and other HTML tags',
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
        cancelButtonText: '<i class="fa fa-thumbs-down"></i>'
    })
});
