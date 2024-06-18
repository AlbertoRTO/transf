import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-transfer-service',
  standalone: true,
  imports: [],
  templateUrl: './transfer-service.component.html',
  styleUrl: './transfer-service.component.css'
})
export class TransferServiceComponent {

}

export interface Transfer {
  id?: number;
  sourceAccount: string;
  destinationAccount: string;
  amount: number;
  fee?: number;
  transferDate: string;
  scheduleDate?: string;
}

@Injectable({ 
  providedIn: 'root'
})
export class TransferService {

  private apiUrl = 'http://localhost:8080/api/transfers';

  constructor(private http: HttpClient) { }

  scheduleTransfer(transfer: Transfer): Observable<Transfer> {
    return this.http.post<Transfer>(this.apiUrl, transfer);
  }

  getAllTransfers(): Observable<Transfer[]> {
    return this.http.get<Transfer[]>(this.apiUrl);
  }
}