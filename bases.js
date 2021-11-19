class Bases {
    constructor(name, minutes){
        this.name = name;
        this.minutes = minutes;
        this.next = null;
        this.previous = null;
    }

    info(){
        return `${this.name} ${this.minutes} minutos.`
    }
}