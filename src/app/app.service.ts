import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Candidato } from './candidato';

@Injectable({
  providedIn: 'root',
})
export class CandidatosService {
  constructor(private http: HttpClient) {}

  private urlStart = 'http://localhost:8080/api/v1/hiring/start';
  private urlSchedule = 'http://localhost:8080/api/v1/hiring/schedule';
  private urlDisqualify = 'http://localhost:8080/api/v1/hiring/disqualify';
  private urlApprove = 'http://localhost:8080/api/v1/hiring/approve';
  private urlGetStatus = 'http://localhost:8080/api/v1/hiring/status/candidate/';

  public startProcess(candidato: Candidato): Observable<any> {
    return this.http.post<any>(this.urlStart, candidato);
  }

  public scheduleInterview(id: number): Observable<any> {
    return this.http.post<any>(this.urlSchedule, { codCandidato: id });
  }

  public qualifyCandidate(id: number): Observable<any> {
    return this.http.post<any>(this.urlApprove, { codCandidato: id });
  }

  public disqualifyCandidate(id: number): Observable<any> {
    return this.http.post<any>(this.urlDisqualify, { codCandidato: id });
  }

  // public getApprovedList(): Observable<any> {
  //   return this.http.get<any>(this.urlGetApproved);
  // }

  public getCandidateStatus(id: number): Observable<any> {
    return this.http.get<any>(this.urlGetStatus+id);
  }
}
