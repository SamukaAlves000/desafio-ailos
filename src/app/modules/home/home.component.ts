import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HomeService} from './home.service';
import {Icontrato} from './icontrato';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  firstFormGroup: FormGroup;
  dadosTela: Icontrato = {
    nome: '',
    numeroContaCorrente: '',
    numeroContaAplicacao: '',
    situacao: '',
    cpf: ''
  };
  isMostrarInfo: boolean;

  constructor(private formBuilder: FormBuilder, private service: HomeService) {}

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      cpf: ['', Validators.required],
    });
  }

  consultar(): void {
    const resposta = this.service.read(this.firstFormGroup.value.cpf);
    if (resposta){
      this.dadosTela = resposta;
      this.isMostrarInfo =  true;
    }else{
      this.isMostrarInfo =  false;
      this.service.showMessage('CPF inserido não é valido', true);
    }
  }

  reset(): void {
    this.isMostrarInfo = false;
  }
}
