import { Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { VideoCarouselComponent } from '../../video-carousel/video-carousel.component';

@Component({
  selector: 'app-highlights',
  standalone: true,
  imports: [VideoCarouselComponent],
  templateUrl: './highlights.component.html',
  styleUrl: './highlights.component.css'
})
export class HighlightsComponent {
  @ViewChild('title') title!: ElementRef;

  ngAfterViewInit() {
    gsap.to(this.title.nativeElement, { opacity: 1, y: 0 });
    gsap.to('.link', { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  }
}
