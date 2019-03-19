import { Component, ViewChild } from '@angular/core';

import { SwiperComponent, SwiperConfigInterface} from 'ngx-swiper-wrapper';

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  readonly name: string = 'Angular';
  version: number = 7;
  
  config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 3,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false
  };
  constructor() {}

  @ViewChild(SwiperComponent) componentRef?: SwiperComponent;

  onVersionRelease(): void {
    this.version = this.componentRef.directiveRef.getIndex(true);
  }
}
