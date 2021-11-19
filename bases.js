class Bases {
    consturctor(){
        this.start = null;
    }

    agregar(base){
        if(this.start == null){
            this.start = base;
            base.next = this.start;
            nuevo.previous = this.start;
        } else {
            let last = this.start.previous;
            base.next = this.start;
            base.previous = last;
            last.next = base;
            this.start.previous = base;
        }
    }

    listar(){
        let res = "";
        let temp = this.start;
        if(this.start != null){
            do{
                res += temp.info();
                temp = temp.next;
            } while (temp != this.start);
        }

        return res;
    }
}