import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlugginsComponent } from './pluggins.component';

describe('PlugginsComponent', () => {
  let component: PlugginsComponent;
  let fixture: ComponentFixture<PlugginsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlugginsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlugginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
