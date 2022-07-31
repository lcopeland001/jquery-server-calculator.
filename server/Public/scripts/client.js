$(readyNow);

function readyNow(){
    console.log('Ready');
    $('')
}

// POST inputs to server
function sendEquation () {
    $.ajax({
        type: POST,
        url: '/equations',
        data: {
            valueOne: $(`#value-one`).val(),
            ValueTwo: $(`#value-two`).val()
        }
    }).then(function (response) {
        console.log('res', response);
    })
} // end sendEquation



// GET result from the server to put on the DOM