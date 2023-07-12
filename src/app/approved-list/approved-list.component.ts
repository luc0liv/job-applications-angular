import { Component } from '@angular/core';
import { ApprovedListService } from './approved-list.service';

@Component({
  selector: 'app-approved-list',
  templateUrl: './approved-list.component.html',
  styleUrls: ['./approved-list.component.sass'],
})
export class ApprovedListComponent {
  constructor(private approvedListService: ApprovedListService) {}

  public aprovados: string[] = [];
  public mockedAprovados: string[] = ["Luciana", "Maria", "Pedro", "João", "Raíssa", "Kelly", "Manuela", "Luciana", "Maria", "Pedro", "João", "Raíssa", "Kelly", "Manuela"]

  getApprovedList(): void {
    this.aprovados = this.mockedAprovados;
    // this.approvedListService.getApprovedList().subscribe(
    //   (res) => {
    //     this.aprovados = res;
    //   },
    //   (error) => {
    //     alert(error.error.message);
    //   }
    // );
  }
}
