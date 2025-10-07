import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TreeDetailPage } from './tree-detail.page';

describe('TreeDetailPage', () => {
  let component: TreeDetailPage;
  let fixture: ComponentFixture<TreeDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
