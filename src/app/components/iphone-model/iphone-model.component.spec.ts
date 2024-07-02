import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IphoneModelComponent } from './iphone-model.component';

describe('IphoneModelComponent', () => {
  let component: IphoneModelComponent;
  let fixture: ComponentFixture<IphoneModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IphoneModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IphoneModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
