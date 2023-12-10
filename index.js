const precio = 400000
let cantidad = 0

const cantidadEquipos = document.querySelector('.cantidad');
const precioInicial = document.querySelector('.precio-inicial');
const precioTotal = document.querySelector('.valor-total');
const btnAumentar = document.querySelector('button:nth-of-type(1)');
const btnDisminuir = document.querySelector('button:nth-of-type(2)');

cantidadEquipos.textContent = cantidad;
precioInicial.textContent = precio;
precioTotal.textContent = '0';

btnAumentar.addEventListener('click', function(){
    cantidad=cantidad+1;
    Actualizar();
});

btnDisminuir.addEventListener('click', function (){
    if (cantidad>0){
        cantidad=cantidad-1;
        Actualizar();
    }
})

function Actualizar(){
    cantidadEquipos.textContent = cantidad;
    total = cantidad * precio;
    precioTotal.textContent = total;
}