import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MastermindContainerComponent } from './mastermind-container.component';

describe('MastermindContainerComponent', () => {
  let component: MastermindContainerComponent;
  let fixture: ComponentFixture<MastermindContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MastermindContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MastermindContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
