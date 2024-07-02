import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideoCarouselComponent } from './video-carousel/video-carousel.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { HighlightsComponent } from './components/highlights/highlights.component';
import { IphoneModelComponent } from './components/iphone-model/iphone-model.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,VideoCarouselComponent, NavbarComponent,
    HeroComponent, HighlightsComponent, IphoneModelComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clone2';
}
 