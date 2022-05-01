import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakingNewsStripComponent } from './breaking-news-strip.component';

describe('BreakingNewsStripComponent', () => {
  let component: BreakingNewsStripComponent;
  let fixture: ComponentFixture<BreakingNewsStripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreakingNewsStripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakingNewsStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
