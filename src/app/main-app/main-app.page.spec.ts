import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainAppPage } from './main-app.page';

describe('MainAppPage', () => {
  let component: MainAppPage;
  let fixture: ComponentFixture<MainAppPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MainAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
