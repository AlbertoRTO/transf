import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransferService, Transfer } from '../transfer-service';

@Component({
  selector: 'app-transfer-form-component',
  standalone: true,
  imports: [],
  templateUrl: './transfer-form-component.component.html',
  styleUrl: './transfer-form-component.component.css'
})
export class TransferFormComponentComponent {


  transferForm: FormGroup;

  constructor(private fb: FormBuilder, private transferService: TransferService) {
    this.transferForm = this.fb.group({
      sourceAccount: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      destinationAccount: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      amount: ['', [Validators.required, Validators.min(0.01)]],
      transferDate: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.transferForm.valid) {
      const transfer: Transfer = this.transferForm.value;
      this.transferService.scheduleTransfer(transfer).subscribe({
        next: response => console.log('Transfer scheduled', response),
        error: err => console.error('Error scheduling transfer', err)
      });
    }
  }

}
