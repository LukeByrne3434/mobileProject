import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StepCounterPage } from './step-counter.page';

describe('StepCounterPage', () => {
  let component: StepCounterPage;
  let fixture: ComponentFixture<StepCounterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepCounterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StepCounterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
