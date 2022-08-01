$(readyNow);

function readyNow(){
    console.log('Ready');
    $('#equals-button').on('click', sendEquation);
    $('.op-button').on('click', opButton);
    $('#clear-button').on('click', clearButton);
    
    addEquation();
    clearButton();
    
}

let operation = '';

function opButton() {
    //console.log('in opButton');
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

function sendEquation () {
    //console.log('in sendEquation');
    $.ajax({
        type: 'POST',
        url: '/equation',
        data: {
            valueOne: $(`#value-one`).val(),
            valueTwo: $(`#value-two`).val(),
            operationIn: operation
        }
    }).then(function (response) {
        console.log('response:', response);
        addEquation();
    }).catch(function (error) {
        console.log(error);
        alert('Something went wrong oh nooooo!!!');
      })
      //console.log(valueOne, operationIn, valueTwo);
} // end sendEquation

function addEquation() {
    $.ajax({
        type: 'GET',
        url: '/equation',
    }).then(function (response) {
        $('#calc-list').empty();
        for (let i = 0; i < response.length; i++) {
            let values = response[i];
            $('#calc-list').append(`
                <li>${values.valueOne} ${values.operationIn} ${values.valueTwo} = ${values.calculation}</li>
            `);
           $('#answer-text').empty().append(`${values.calculation}`);
        }
    }).catch(function (error) {
        console.log(error);
        alert('Something went wrong');
    })
} // end addEquation

function clearButton() {
    $('#value-one').val('');
    $('#value-two').val('');
    $('#answer-text').empty();
    $('#answer-text').append('[Answer]');
}
