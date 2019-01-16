import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NinoSanoComponent } from './nino-sano.component';

describe('NinoSanoComponent', () => {
  let component: NinoSanoComponent;
  let fixture: ComponentFixture<NinoSanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NinoSanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NinoSanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
