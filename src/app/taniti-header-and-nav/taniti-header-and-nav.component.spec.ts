import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TanitiHeaderAndNavComponent } from './taniti-header-and-nav.component';

describe('TanitiHeaderAndNavComponent', () => {
  let component: TanitiHeaderAndNavComponent;
  let fixture: ComponentFixture<TanitiHeaderAndNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TanitiHeaderAndNavComponent, RouterTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TanitiHeaderAndNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render navigation links', () => {
    const links = fixture.nativeElement.querySelectorAll('a');
    expect(links.length).toBeGreaterThan(0);
  });
});
