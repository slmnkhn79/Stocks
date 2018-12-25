import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSrapperComponent } from './page-srapper.component';

describe('PageSrapperComponent', () => {
  let component: PageSrapperComponent;
  let fixture: ComponentFixture<PageSrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
