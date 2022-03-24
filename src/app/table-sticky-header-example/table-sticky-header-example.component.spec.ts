import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStickyHeaderExampleComponent } from './table-sticky-header-example.component';

describe('TableStickyHeaderExampleComponent', () => {
  let component: TableStickyHeaderExampleComponent;
  let fixture: ComponentFixture<TableStickyHeaderExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableStickyHeaderExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableStickyHeaderExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
