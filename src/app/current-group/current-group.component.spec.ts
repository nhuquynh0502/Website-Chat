import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentGroupComponent } from './current-group.component';

describe('CurrentGroupComponent', () => {
  let component: CurrentGroupComponent;
  let fixture: ComponentFixture<CurrentGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
