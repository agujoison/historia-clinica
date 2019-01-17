import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddControlEnfermoComponent } from './add-control-enfermo.component';

describe('AddControlEnfermoComponent', () => {
  let component: AddControlEnfermoComponent;
  let fixture: ComponentFixture<AddControlEnfermoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddControlEnfermoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddControlEnfermoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
