import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})

export class ApprovedListService {
  constructor(private http: HttpClient) {}

  private urlGetApproved = 'http://localhost:8080/api/v1/hiring/approved';

public getApprovedList(): Observable<any> {
  return this.http.get<any>(this.urlGetApproved);
}
}
