import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FridgeComponent } from './fridge.component';

describe('FridgeComponent', () => {
  let component: FridgeComponent;
  let fixture: ComponentFixture<FridgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FridgeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
