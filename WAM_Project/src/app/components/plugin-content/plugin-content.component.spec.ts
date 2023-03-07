import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginContentComponent } from './plugin-content.component';

describe('PluginContentComponent', () => {
  let component: PluginContentComponent;
  let fixture: ComponentFixture<PluginContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PluginContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PluginContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
