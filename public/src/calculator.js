var total = 0;
var calculated_history = "";
var typed_prev = "";
var typed_cur = "";
var operation = "";
var is_calculated = false;

function send_update () {
    var typed_view = document.getElementById('calc-typed');
    typed_view.innerHTML = calculated_history;
}

function update_typed (num) {
    calculated_history = calculated_history + num;
    typed_cur = typed_cur + num;
    send_update();
}

function update_operator (ope) {
    operation = ope;
    if (!is_calculated) {
        typed_prev = typed_cur;
    } else {
        calculated_history = total + "";
    }
    typed_cur = "";
    calculated_history = calculated_history + ope;
    send_update();
}

function calculate () {
    console.log("typed_cur = " + typed_cur);
    console.log("typed_prev = " + typed_prev);
    typed_cur = parseFloat(typed_cur);
    typed_prev = parseFloat(typed_prev);
    switch (operation) {
        case '+':
            total = typed_prev + typed_cur;
            break;
        case '-':
            total = typed_prev - typed_cur;
            break;
        case '*':
            total = typed_prev * typed_cur;
            break;
        case '/':
            total = typed_prev / typed_cur;
            break;
        case '%':
            total = typed_prev % typed_cur;
            break;
        case '!=':
            if (typed_prev != typed_cur) {
                total = 1;
            } else {
                total = 0;
            }
            break;
        default:
            console.log("Invalid operation");
            break;
    }
    document.getElementById('calc-typed').innerHTML = total;
    document.getElementById('calc-operation').innerHTML = calculated_history;
    typed_prev = total + "";
    console.log("typed_prev after calculate" + typed_prev);
    is_calculated = true;
}

function reset () {
    total = 0;
    calculated_history = "";
    typed_prev = "";
    typed_cur = "";
    operation = "";
    is_calculated = false;
    document.getElementById('calc-typed').innerHTML = 0;
    document.getElementById('calc-operation').innerHTML = 0;
}

