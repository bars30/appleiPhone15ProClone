import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelViewComponent } from './model-view.component';

describe('ModelViewComponent', () => {
  let component: ModelViewComponent;
  let fixture: ComponentFixture<ModelViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
