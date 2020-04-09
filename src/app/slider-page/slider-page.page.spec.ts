import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SliderPagePage } from './slider-page.page';

describe('SliderPagePage', () => {
  let component: SliderPagePage;
  let fixture: ComponentFixture<SliderPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SliderPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
