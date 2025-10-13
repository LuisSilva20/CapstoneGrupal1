import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExamTreePage } from './exam-tree.page';

describe('ExamTreePage', () => {
  let component: ExamTreePage;
  let fixture: ComponentFixture<ExamTreePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamTreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
