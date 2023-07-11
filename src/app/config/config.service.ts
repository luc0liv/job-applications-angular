import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Candidato } from './candidato';

@Injectable({
  providedIn: 'root'
})

export class CandidatosService {
  constructor(private http:HttpClient){};

  private urlStart = 'http://localhost:8080/api/v1/hiring/start';
  private urlSchedule = 'http://localhost:8080/api/v1/hiring/schedule';
  private urlDisqualify = 'http://localhost:8080/api/v1/hiring/start';
  private urlApprove = 'http://localhost:8080/api/v1/hiring/approve';
  private urlGetApproved = 'http://localhost:8080/api/v1/hiring/approve';
  private urlGetStatus = 'http://localhost:8080/api/v1/hiring/approve';

  public startProcess(candidato: Candidato): Observable<any>{
      return this.http.post<any>(this.urlStart, candidato);
  }

  public scheduleInterview(id: number): Observable<any>{
      return this.http.post<any>(this.urlSchedule, {codCandidato: id});
  }

  // public adicionaUsuario(usuario:Usuario): Observable<any>{
  //     return this.http.post<Usuario>(this.urlApiUsuario, usuario);
  // }

  // public removeUsuario(id:number): Observable<any>{
  //     return this.http.delete<Usuario>(this.urlApiUsuario+'?id='+id);
  // }

  // public atualizaUsuario(usuario:Usuario): Observable<any>{
  //     return this.http.put<Usuario>(this.urlApiUsuario, usuario);
  // }
}
