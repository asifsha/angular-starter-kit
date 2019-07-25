import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSnakebarComponent } from './custom-snakebar.component';

describe('CustomSnakebarComponent', () => {
  let component: CustomSnakebarComponent;
  let fixture: ComponentFixture<CustomSnakebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomSnakebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSnakebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
