import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferFormComponentComponent } from './transfer-form-component.component';

describe('TransferFormComponentComponent', () => {
  let component: TransferFormComponentComponent;
  let fixture: ComponentFixture<TransferFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferFormComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransferFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
