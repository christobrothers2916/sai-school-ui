import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderNavsComponent } from './header-navs.component';

describe('HeaderNavsComponent', () => {
  let component: HeaderNavsComponent;
  let fixture: ComponentFixture<HeaderNavsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderNavsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderNavsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
