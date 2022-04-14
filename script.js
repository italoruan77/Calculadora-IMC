
//elements div
const img = document.getElementById('img');
const details = document.getElementById('details');
const areaForm = document.getElementById('areaForm')

// buttons
const btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener('click', calcularIMC);

const btnsair = document.getElementById('btnsair');
btnsair.addEventListener('click', newcalculo)

// functions
function calcularIMC(e) {
     e.preventDefault();

    let resutadoIMC = document.getElementById('resultado')
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;

    let newaltura = altura / 100;
    let calc = peso / (newaltura * newaltura);
    let resultadoimc = calc.toFixed(2)
    
    resutadoIMC.innerHTML = resultadoimc;
    console.log(resultadoimc)

    if (resultadoimc <= 18.5) {
        resutadoIMC.classList.remove('text-success')
        resutadoIMC.classList.remove('text-primary')
        resutadoIMC.classList.remove('text-warning')
        resutadoIMC.classList.remove('text-danger')

        resutadoIMC.classList.add('text-secondary')
    } else if (resultadoimc >= 18.5 && resultadoimc <= 24.9) {
        resutadoIMC.classList.remove('text-secondary')
        resutadoIMC.classList.remove('text-primary')
        resutadoIMC.classList.remove('text-warning')
        resutadoIMC.classList.remove('text-danger')

        resutadoIMC.classList.add('text-success')
    } else if (resultadoimc >= 25 && resultadoimc <= 29.9) {
        resutadoIMC.classList.remove('text-secondary')
        resutadoIMC.classList.remove('text-success')
        resutadoIMC.classList.remove('text-warning')
        resutadoIMC.classList.remove('text-danger')

        resutadoIMC.classList.add('text-primary')
    } else if (resultadoimc >= 30 && resultadoimc <= 34.9) {
        resutadoIMC.classList.remove('text-secondary')
        resutadoIMC.classList.remove('text-success')
        resutadoIMC.classList.remove('text-primary')
        resutadoIMC.classList.remove('text-danger')

        resutadoIMC.classList.add('text-warning')
    } else if (resultadoimc >= 35 && resultadoimc <= 39.9) {
        resutadoIMC.classList.remove('text-secondary')
        resutadoIMC.classList.remove('text-success')
        resutadoIMC.classList.remove('text-primary')
        resutadoIMC.classList.remove('text-warning')

        resutadoIMC.classList.add('text-danger')
    } else if (resultadoimc >= 40) {
        resutadoIMC.classList.remove('text-secondary')
        resutadoIMC.classList.remove('text-primary')
        resutadoIMC.classList.remove('text-success')
        resutadoIMC.classList.remove('text-warning')

        resutadoIMC.classList.add('text-danger')
   }

    document.getElementById('altura').value = '';
    document.getElementById('peso').value = '';
    
   if (altura != '' && peso != '') {
    img.classList.add('d-none');
    details.classList.remove('d-none');
    details.classList.add('d-flex');
    areaForm.classList.add('d-none')
   }
    
}

function newcalculo(){
    areaForm.classList.remove('d-none');
    details.classList.add('d-none');
    img.classList.remove('d-none');
}