class No{
    constructor(value) {
        this.value = value;
        this.prox = null;
    }
}
export class Lista{
    #elemento = null;
    #tamanho = 0; 
    constructor(...params) {
        params.forEach(element=> this.add(element)); 
    }

    add(value){
        if(this.#elemento == null){
            this.#elemento = new No(value); 
            
        }else{
            let atual = this.#elemento; 
            while(atual?.prox != null){
                atual = atual.prox; 
            }
            atual.prox = new No(value); 
        }
        this.#tamanho++; 
    }
    mostrar(){
        let atual = this.#elemento; 
         while(atual!= null){
            console.log(atual.value);
            atual = atual.prox;  
         }
    }
    size(){
        return this.#tamanho; 
    }  
    
    delete(value){
        if(this.#elemento == null){
            return; 
        }

        if(this.#elemento.value === value){
            this.#elemento = this.#elemento.prox; 
        }

        let atual = this.#elemento; 

        while (atual != null && atual.prox != null && atual.prox.value !== value) {
            atual = atual.prox;
        }

        if (atual != null && atual.prox != null) {
            atual.prox = atual.prox.prox;
        }

    }

    quanto(value){ 
        let atual  = this.#elemento; 
        let count = 0; 
        while(atual !=null){
            if(atual.value == value){
                count++; 
            }
            atual = atual.prox; 
        }
        return count; 
    }

    replace(value, newValue){
        if(this.#elemento == null){
            return; 
        }
        if(this.#elemento.value === value){
            this.#elemento.value = newValue; 
        }

        let atual = this.#elemento; 

        while (atual!= null) {
            if(atual.value === value){
                atual.value = newValue;
                break;  
            }
            atual = atual.prox;    
        }
    }
    toArray() {
        let arr = [];
        let atual = this.#elemento;
        while (atual != null) {
            arr.push(atual.value);
            atual = atual.prox;
        }
        return arr;
    }


    sort() {
        let arr = this.toArray();
        arr.sort((a, b) => a - b);
        this.#elemento = null;
        this.#tamanho = 0;
        arr.forEach(valor => this.add(valor));
    }
}