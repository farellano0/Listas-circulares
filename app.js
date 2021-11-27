import Base from "./base.js";
import Lista from "./list.js";

function simulacion(){
    
    let list = new Lista();

    let btnAdd = document.getElementById('btnAdd');
    let btnDelete = document.getElementById('btnDelete');
    let btnList = document.getElementById('btnList');
    let btnCreate = document.getElementById('btnCreate');

    btnAdd.addEventListener('click', () => {
        let inpName = document.getElementById('txtName');
        let inpMinutes = document.getElementById('txtMinutes');

        let name = inpName.value;
        let minutes = Number(inpMinutes.value);

        if(!name || !minutes){
            document.getElementById('actions').innerHTML = `<p>Todos los datos son requeridos</p>`;
        } else {
            inpName.value = '';
            inpMinutes.value = '';
            let base = new Base(name, minutes);
            list.agregar(base);
            document.getElementById('actions').innerHTML = `<p>Ha sido agregada correctamente la base ${base.name}</p>`;
            console.log(list);
        }
    })

    btnDelete.addEventListener('click', () => {
        let inpNameDelete = document.getElementById('nameDelete');

        let name = inpNameDelete.value;

        if(!name){
            document.getElementById('actions').innerHTML = `<p>Escriba el nombre de una base para eliminarlo</p>`;
        } else {
            inpNameDelete.value = '';

            list.eliminar(name);
            document.getElementById('actions').innerHTML = `<p>Ha sido eliminada correctamente la base ${name}</p>`;
            console.log(list);
        }
    })

    btnList.addEventListener('click', () => {
        let listar = list.listar();
        document.getElementById('actions').innerHTML = `<br> ${listar} </br>`;
    })

    btnCreate.addEventListener('click', () => {
        let inpNameBase = document.getElementById('txtNameBase');
        let inpHourBase = document.getElementById('txtHourBase');
        let inpMinutesWork = document.getElementById('txtMinutesWork');

        let name = inpNameBase.value;
        let hour = inpHourBase.value;
        let minutes = inpMinutesWork.value;

        if(!list){
            document.getElementById('actions').innerHTML= `<p> No hay bases registradas </p>`
        }
        if(!name || !hour || !minutes){
            document.getElementById('actions').innerHTML= `<p> Debes llenar todos los campos </p>`
        }

        let card = list.crearTarjetas(name, hour, minutes);
        inpNameBase.value = '';
        inpHourBase.value = '';
        inpMinutesWork.value = '';

        if(!card){
            document.getElementById('actions').innerHTML= `<p> La base ${name} no existe </p>`
        } else {
            document.getElementById('details').innerHTML= `<p> La ruta ha comenzado en la base: ${name}</p>`
            document.getElementById('details').innerHTML= `<p> Recorrido:</p> <p>${card}</p>`
        }
    })

}

simulacion();

