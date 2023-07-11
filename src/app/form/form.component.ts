import { CandidatosService } from './../config/config.service';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Candidato } from '../config/candidato';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent {
  applicationForm = this.formBuilder.group({
    nome: '',
    codCandidato: 0,
  });

  constructor(
    private formBuilder: FormBuilder,
    private candidatosService: CandidatosService,
    ) {}

  public candidato: Candidato = new Candidato();
  public isCreated: boolean = false;
  public errorMessage: string = '';
  public codCandidato: number = 0;

  public buttons = [
    {
      title: 'Marcar entrevista',
      func: this.scheduleInterview.bind(this),
      className: '',
    },
    {
      title: 'Qualificar Candidato',
      func: this.qualifyCandidate.bind(this),
      className: '',
    },
    {
      title: 'Desqualificar candidato',
      func: this.disqualifyCandidate.bind(this),
      className: '',
    },
    {
      title: 'Verificar Status',
      func: this.checkStatus.bind(this),
      className: '',
    }
  ]


  createCandidate(): void {
    this.errorMessage = "";
    this.candidatosService.startProcess(this.candidato).subscribe(
      resposta => {
     alert("Candidato cadastrado")
     console.log(resposta);

     this.isCreated = true;
   },
   error => {
     this.errorMessage = error.error.message;
     console.log(error.error.message);
   });
  }

  scheduleInterview(): void {
    this.errorMessage = "";
    this.candidatosService.scheduleInterview(this.codCandidato).subscribe(
      resposta => {
        alert(resposta.message)
      },
      error => {
        this.errorMessage = error.error.message;
      }
    )
  }

  checkStatus(): void {
    this.errorMessage = "";
    console.log(this.codCandidato);
  }

  disqualifyCandidate(): void {
    this.errorMessage = "";
    console.log("disqualify")
  }

  qualifyCandidate(): void {
    this.errorMessage = "";
    console.log("qualify")
  }
}
