import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-slider-page',
  templateUrl: './slider-page.page.html',
  styleUrls: ['./slider-page.page.scss'],
})
export class SliderPagePage implements OnInit {

  @ViewChild('slider', { static: true }) private slider: IonSlides;
  
  public slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  public toHomePage(): void {
    this.navCtrl.navigateBack('home');
  }

  public async ionSlideDidChange(): Promise<void> {
    console.log('getting index');
    const index = await this.slider.getActiveIndex();
    console.log(`got  index ${index}`);

  }

}
