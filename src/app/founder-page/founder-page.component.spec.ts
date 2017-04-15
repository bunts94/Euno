import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FounderPageComponent } from './founder-page.component';

describe('FounderPageComponent', () => {
  let component: FounderPageComponent;
  let fixture: ComponentFixture<FounderPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FounderPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FounderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
