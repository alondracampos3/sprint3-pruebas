import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaptableComponent } from './adaptable.component';

describe('AdaptableComponent', () => {
  let component: AdaptableComponent;
  let fixture: ComponentFixture<AdaptableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdaptableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdaptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
