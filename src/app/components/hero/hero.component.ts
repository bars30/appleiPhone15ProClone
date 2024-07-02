import { Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  videoSrc = "/assets/videos/hero.mp4"
  @ViewChild('h1Element') h1Element!: ElementRef;
  @ViewChild('video') videoElement!: ElementRef;
  @ViewChild('buyButton') buyButton!: ElementRef;

  ngOnInit(){
    
    
    if (window.innerWidth < 760) {
      this.videoSrc = "/assets/videos/smallHero.mp4";
      return;
    }
    this.videoSrc = "/assets/videos/hero.mp4"
  }

  ngAfterViewInit() {
    console.log(this.videoElement);
    this.videoElement.nativeElement.muted = true;
    this.videoElement.nativeElement.play()
    gsap.to(this.h1Element.nativeElement, { opacity: 1, delay: 1.5 });
    gsap.to(this.buyButton.nativeElement, { opacity: 1, y: -35, delay: 1.5 });
  }
}
 