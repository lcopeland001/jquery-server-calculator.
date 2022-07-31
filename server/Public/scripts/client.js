$(readyNow);

function readyNow(){
    console.log('Ready');
    $('#equals-button').on('click', sendEquation);
    $('.op-button').on('click', opButton);

    addEquation();
}

let operation = '';

function opButton() {
    console.log('in opButton');
    if ($(this).data('op') === 'add') {
        operation = '+';
    } else if ($(this).data('op') === 'subtract') {
        operation = '-';
    } else if ($(this).data('op') === 'multiply') {
        operation = '*';
    } else if ($(this).data('op') === 'divide') {
        operation = '/';
    }
    console.log('operation is', operation);
} // end opButton

// POST inputs to server
function sendEquation () {
    console.log('in sendEquation');
    $.ajax({
        type: 'POST',
        url: '/equation',
        data: {
            valueOne: $(`#value-one`).val(),
            valueTwo: $(`#value-two`).val(),
            operationIn: operation
        }
    }).then(function (response) {
        console.log('res:', response);
    }).catch(function (error) {
        console.log(error);
        alert('Something went wrong oh nooooo!!!')
      })

      //console.log(valueOne, operationIn, valueTwo);
} // end sendEquation

function addEquation() {
    console.log('data');
} // end addEquation



// GET result from the server to put on the DOM