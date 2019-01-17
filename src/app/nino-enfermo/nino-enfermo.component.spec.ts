import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NinoEnfermoComponent } from './nino-enfermo.component';

describe('NinoEnfermoComponent', () => {
  let component: NinoEnfermoComponent;
  let fixture: ComponentFixture<NinoEnfermoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NinoEnfermoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NinoEnfermoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
