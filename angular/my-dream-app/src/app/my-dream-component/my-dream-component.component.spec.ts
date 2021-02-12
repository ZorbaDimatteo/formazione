import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDreamComponentComponent } from './my-dream-component.component';

describe('MyDreamComponentComponent', () => {
  let component: MyDreamComponentComponent;
  let fixture: ComponentFixture<MyDreamComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDreamComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDreamComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
