import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroContas = 0;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;    
        }      
    }
    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }


    constructor(agencia, cliente){
        this._agencia = agencia;
        this._cliente = cliente;
        this._saldo = 0;
        ContaCorrente.numeroContas++;
    }


    valorSacado;

    sacar(valor){
        if(this._saldo <= valor){
            console.log("Você não tem saldo suficiente");
            return;
        }
        this._saldo -= valor;
        console.log("O saque no valor de " + valor +" foi efetuado");
    }

    depositar(valor){
        if(valor < 0){return;}
        this._saldo += valor;
        console.log("Um deposito no valor de " + valor + " foi feito");

    }

    transferir(valor, ContaCorrente){
        this.sacar(valor);
        ContaCorrente.depositar(valor);
    }
}