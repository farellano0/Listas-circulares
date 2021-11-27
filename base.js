export default class Base {

    constructor(name, minutes){
        this.name = name;
        this.minutes = minutes;
        this.next = null;
        this.previous = null;
    }

    infoHTML(){
        return ` <div>
                    <p>Nombre: ${this.name}</p>
                    <p>Minutos: ${this.minutes}</p>
                </div>`;
    }

    infoAllHTML(){
        return `<div>
                    <p>Nombre: ${this.name}</p>
                    <p>Minutos: ${this.minutes}</p>
                    <p>Siguiente: ${this.next.name}</p>
                    <p>Anterior: ${this.previous.name}</p>
                </div>`;
    }

    actualInfo(hour, minutes){
        return `<div>
                    <p>Base actual: ${this.name}</p>
                    <p>Hora de llegada: ${hour}</p>
                    <p>Minutos restantes: ${minutes}</p>                                 
                </div>`;
    }
}