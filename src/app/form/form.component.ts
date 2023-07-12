import { CandidatosService } from '../app.service';
import { Component } from '@angular/core';
import { Candidato } from '../candidato';

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
  public codCandidato: number = 0;

  public buttons: { title: string, func: () => void, className: string }[] = [
    {
      title: 'Marcar entrevista',
      func: this.scheduleInterview.bind(this),
      className: 'schedule-btn',
    },
    {
      title: 'Qualificar Candidato',
      func: this.qualifyCandidate.bind(this),
      className: 'qualify-btn',
    },
    {
      title: 'Desqualificar candidato',
      func: this.disqualifyCandidate.bind(this),
      className: 'disqualify-btn',
    },
    {
      title: 'Verificar Status',
      func: this.checkStatus.bind(this),
      className: 'status-btn',
    },
  ];

  createCandidate(): void {
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
    this.candidatosService.disqualifyCandidate(this.candidato.codCandidato as number).subscribe(
      (res) => {
        alert(res.message);
      },
      (error) => {
        alert(error.error.message);
      }
    );
  }

  qualifyCandidate(): void {
    this.candidatosService.qualifyCandidate(this.candidato.codCandidato as number).subscribe(
      (res) => {
        alert(res.message);
      },
      (error) => {
        alert(error.error.message);
      }
    );
  }
}
