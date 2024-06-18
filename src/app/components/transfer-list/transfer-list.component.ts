import { Component, OnInit } from '@angular/core';
import { TransferService, Transfer } from '../transfer-service';

@Component({
  selector: 'app-transfer-list',
  standalone: true,
  imports: [],
  templateUrl: './transfer-list.component.html',
  styleUrl: './transfer-list.component.css'
})
export class TransferListComponent implements OnInit {

  transfers: Transfer[] = [];

  constructor(private transferService: TransferService) { }

  ngOnInit() {
    this.transferService.getAllTransfers().subscribe({
      next: data => this.transfers = data,
      error: err => console.error('Error fetching transfers', err)
    });
  }
}