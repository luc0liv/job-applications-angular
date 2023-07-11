import { CandidatosService } from './../config/config.service';
import { Component } from '@angular/core';
import { Candidato } from '../config/candidato';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass'],
})
export class FormComponent {
  constructor(
    private candidatosService: CandidatosService
  ) {}

  public candidato: Candidato = new Candidato();
  public isCreated: boolean = false;
  public errorMessage: string = '';
  public codCandidato: number = 0;
  public aprovados: string[] = [];

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
    },
  ];

  createCandidate(): void {
    this.errorMessage = '';
    this.candidatosService.startProcess(this.candidato).subscribe(
      (res) => {
        alert('Candidato cadastrado');
        this.candidato.setCodCandidato(res.codCandidato);
      },
      (error) => {
        alert(error.error.message);
      }
    );
  }

  scheduleInterview(): void {
    this.errorMessage = '';
    this.candidatosService.scheduleInterview(this.candidato.codCandidato as number).subscribe(
      (res) => {
        alert(res.message);
      },
      (error) => {
        alert(error.error.message);
      }
    );
  }

  checkStatus(): void {
    this.errorMessage = '';
    this.candidatosService.getCandidateStatus(this.candidato.codCandidato as number).subscribe(
      (res) => {
        alert(`O status do Candidato é: ${res.status}`);
      },
      (error) => {
        alert(error.error.message);
      }
    );
  }

  disqualifyCandidate(): void {
    this.errorMessage = '';
    this.candidatosService.disqualifyCandidate(this.candidato.codCandidato as number).subscribe(
      (res) => {
        alert(res.message);
      },
      (error) => {
        this.errorMessage = error.error.message;
      }
    );
  }

  qualifyCandidate(): void {
    this.errorMessage = '';
    this.candidatosService.qualifyCandidate(this.candidato.codCandidato as number).subscribe(
      (res) => {
        alert(res.message);
      },
      (error) => {
        this.errorMessage = error.error.message;
      }
    );
  }

  getApprovedList(): void {
    this.errorMessage = '';
    this.candidatosService.getApprovedList().subscribe(
      (res) => {
        this.aprovados = res;
      },
      (error) => {
        this.errorMessage = error.error.message;
      }
    );
  }
}
