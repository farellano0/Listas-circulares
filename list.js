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
}

module.exports = Lista;