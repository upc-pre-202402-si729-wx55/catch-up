import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceItemComponent } from './source-item.component';

describe('SourceItemComponent', () => {
  let component: SourceItemComponent;
  let fixture: ComponentFixture<SourceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SourceItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SourceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
