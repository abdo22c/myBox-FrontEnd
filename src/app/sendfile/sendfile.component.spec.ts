import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendfileComponent } from './sendfile.component';

describe('SendfileComponent', () => {
  let component: SendfileComponent;
  let fixture: ComponentFixture<SendfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SendfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
