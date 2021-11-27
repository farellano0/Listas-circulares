class Lista {
    consturctor(){
        this.start = null;
        this.number = 0;
    }

    agregar(base){
        if(this.start == null){
            this.start = base;
            base.next = this.start;
            base.previous = this.start;
            this.number++;
            console.log("Agregado sin Inicio");
        } else {
            let last = this.start.previous;
            base.next = this.start;
            base.previous = last;
            last.next = base;
            this.start.previous = base;
            this.number++;
            console.log("Último agregado");
        }
    }

    eliminar(baseName){
        let del = null;
        let now = this.start;
        let prev = null
        let next = null

        if(this.start == null){
            return null;
        } 
        
        if(this.start != null && this.number == 1){  
            del = this.start;
            this.start = null;
            del.next = null;
            del.previous = null;
            this.number--;
            console.log("Eliminado 1");
        } else {
            do{
                if(now.name == baseName){
                    del = now;
                    prev = del.previous;
                    next = del.next;
                    now = next;
                    now.previous = prev;
                    now.previous.next = now;
                    this.number --;
                    console.log("Eliminado");

                    del.previous = null;
                    del.next = null;

                    return del;
                }
                now = now.next;

            } while(now != this.start);
        }
            

        
    }

    listar(){
        let text = "";
        let base = this.start;
        let i = 1;

        if(base == null){
            text = "No hay ninguna base registrada"
        } else {
            do{
                text += base.infoAllHTML() + '\n' + `------BASE ${i}------`;
                base = base.next;
                i++;
            } while(base != this.start);
        }

        return text;
    }

    crearTarjetas(base, hour, minutes){
        let card = "";
        let minutesHour = 0;
        let baseStart = this._searchBaseByName(base);

        if(baseStart == null){
            return null;
        } else {
            while(minutes >= 0){
                card += baseStart.actualInfo(this._getHour(hour, minutesHour), minutes) + '\n' + '------------------------------';

                minutesHour += baseStart.next.minutes;
                minutes -= baseStart.next.minutes;
                baseStart = baseStart.next;
            }

            return card;
        }
    }
    
    //Private Classes
    _searchBaseByName(nameBase){
        let baseN = this.start;

        if(baseN == null){
            return null;
        } else {
            do{
                if(baseN.name == nameBase){
                    return baseN;
                } else {
                    baseN = baseN.next;
                }
            } while(baseN != this.start);
        }
    }

    _getHour(hour, minutes){
        let hourMinutes = ((hour * 60) + minutes) / 60;
        let hours = Math.trunc(hourMinutes);
        let minute = Math.round((hourMinutes - hours) * 60);

        if(minute < 10){
            return `${hours}:0${minute}`;
        } else {
            return `${hours}:${minute}`;
        }
    }
}

module.exports = Lista;