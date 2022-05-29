import {Injectable} from '@angular/core';
import {Icontrato} from './icontrato';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';

const ELEMENT_DATA: Icontrato[] = [
  {
    cpf: '05994793108',
    nome: 'Samuel Alves dos Santos',
    situacao: 'Regular',
    numeroContaAplicacao: '557932-4',
    numeroContaCorrente: '778461-8'
  },
  {
    cpf: '02894633589',
    nome: 'Bruno Oliveira de Souza',
    situacao: 'Irregular',
    numeroContaAplicacao: '557932-4',
    numeroContaCorrente: '736461-7'
  },
];

class Exemplo {
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private snackBar: MatSnackBar) { }

  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'X',
      {
        duration: 4000,
        horizontalPosition: 'left',
        verticalPosition: 'bottom',
        panelClass: isError ? ['msg-error'] : ['msg-sucess']
      }
    );
  }



  read(cpf: string): Icontrato {
    const resposta = ELEMENT_DATA.filter(value => value.cpf === cpf)[0];
    return resposta;
  }
}




