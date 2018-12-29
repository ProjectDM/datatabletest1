$(document).ready(function () {
    $('#example').DataTable({

        dom: 'Bfrtip',
        columnDefs: [{
            targets: 1,
            className: 'noVis'
        }],
        buttons: [{
            extend: 'colvis',
            columns: ':not(.noVis)'
        }]

        //searching: false,
        // select: {             // 列選択状態
        //     style: 'single'
        // },
    });
});