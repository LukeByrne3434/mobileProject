import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalcPagePage } from './calc-page.page';

describe('CalcPagePage', () => {
  let component: CalcPagePage;
  let fixture: ComponentFixture<CalcPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalcPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
