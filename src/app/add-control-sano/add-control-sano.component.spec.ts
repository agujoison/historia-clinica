import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddControlSanoComponent } from './add-control-sano.component';

describe('AddControlSanoComponent', () => {
  let component: AddControlSanoComponent;
  let fixture: ComponentFixture<AddControlSanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddControlSanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddControlSanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
