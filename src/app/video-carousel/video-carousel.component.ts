import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-video-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-carousel.component.html',
  styleUrls: ['./video-carousel.component.css']
})
export class VideoCarouselComponent {
  @ViewChild('carouselContainer') carouselContainer: ElementRef | undefined;
  @ViewChildren('videoElement') videoElements: QueryList<ElementRef> | undefined;
  @ViewChildren('videoContainers') videoContainers: QueryList<ElementRef> | undefined;
  @ViewChildren('spans') spans: QueryList<ElementRef> | undefined;

  currentVideoIndex = 0;
  videoStatus: 'playing' | 'paused' | 'ended' = 'playing';

  hightlightsSlides = [
    {
      id: 1,
      textLists: [
        "Enter A17 Pro.",
        "Game changing chip.",
        "Groundbreaking performance.",
      ],
      video: "/assets/videos/highlight-first.mp4",
      videoDuration: 4,
    },
    {
      id: 2,
      textLists: ["Titanium.", "So strong. So light. So Pro."],
      video: "/assets/videos/hightlight-sec.mp4",
      videoDuration: 5,
    },
    {
      id: 3,
      textLists: [
        "iPhone 15 Pro Max has the",
        "longest optical zoom in",
        "iPhone ever. Far out.",
      ],
      video: "/assets/videos/hightlight-third-01.mp4",
      videoDuration: 2,
    },
    {
      id: 4,
      textLists: ["All-new Action button.", "What will yours do?."],
      video: "/assets/videos/hightlight-fourth.mp4",
      videoDuration: 3.63,
    },
  ];

  onVideoEnded(index: number): void {
    if (this.videoContainers && this.videoElements) {
      if (index < this.hightlightsSlides.length - 1) {
        this.scrollToVideo(index + 1);
      } else {
        this.videoStatus = 'ended';
      }
    }
  }

  onVideoPlay(index: number): void {
    this.currentVideoIndex = index;
    this.videoStatus = 'playing';
  }

  onVideoPause(index: number): void {
    this.currentVideoIndex = index;
    this.videoStatus = 'paused';
  }

  scrollToVideo(index: number): void {
    if (this.videoContainers && this.videoElements && this.carouselContainer) {
      const containerElement = this.carouselContainer.nativeElement;
      const nextVideoContainer = this.videoContainers.toArray()[index].nativeElement;
  
      // Calculate the amount to scroll
      const scrollOffset = nextVideoContainer.offsetLeft;
  
      containerElement.scrollTo({
        left: scrollOffset,
        behavior: 'smooth'
      });
  
      const nextVideoElement = this.videoElements.toArray()[index].nativeElement;
      setTimeout(() => {
        nextVideoElement.play();
      }, 1000); // delay to allow for scroll animation to finish
  
      this.currentVideoIndex = index;
      this.videoStatus = 'playing';
    }
  }
  

  playCurrentVideo(): void {
    const currentVideoElement = this.videoElements?.toArray()[this.currentVideoIndex].nativeElement;
    currentVideoElement.play();
    this.videoStatus = 'playing';
  }

  pauseCurrentVideo(): void {
    const currentVideoElement = this.videoElements?.toArray()[this.currentVideoIndex].nativeElement;
    currentVideoElement.pause();
    this.videoStatus = 'paused';
  }

  replayCurrentVideo(): void {
    this.scrollToVideo(0);
  }
  showProgress(number: any, index: number){
    console.log("SHOWPROGRESS -> " + number);
    console.log("SHOWPROGRESS -> " +  index);

    if (number > 19 || number == 19) {
      document.documentElement.style.setProperty('--inppercent', `${number}%`);
    }

    if(index == 0){
      if (this.spans) {
        console.log(this.spans["_results"][0].nativeElement);
        this.spans["_results"][0].nativeElement.classList.add("inprogress");
        if(number == 100){
          this.spans["_results"][0].nativeElement.classList.remove("inprogress");
          document.documentElement.style.setProperty('--inppercent',  `19%`);
        }
      }
    } else if(index == 1) {
        if (this.spans) {
          console.log(this.spans["_results"][1].nativeElement);
          this.spans["_results"][1].nativeElement.classList.add("inprogress");
          if(number == 100){
            this.spans["_results"][1].nativeElement.classList.remove("inprogress");
            document.documentElement.style.setProperty('--inppercent',  `19%`);
          }
        }
    } else if (index == 2){
        if (this.spans) {
          console.log(this.spans["_results"][2].nativeElement);
          this.spans["_results"][2].nativeElement.classList.add("inprogress");
          if(number == 100){
            this.spans["_results"][2].nativeElement.classList.remove("inprogress");
            document.documentElement.style.setProperty('--inppercent',  `19%`);
          }
        }
    } else {
        if (this.spans) {
          console.log(this.spans["_results"][3].nativeElement);
          this.spans["_results"][3].nativeElement.classList.add("inprogress");
          if(number == 100){
            this.spans["_results"][3].nativeElement.classList.remove("inprogress");
            document.documentElement.style.setProperty('--inppercent',  `19%`);
          }
        }
    }
    
  }

  onTimeUpdate(event: any, index: number): void {
    const videoElement = event.target as HTMLVideoElement;
    const percent = (videoElement.currentTime / videoElement.duration) * 100;

    this.showProgress(percent, index)
    
  }
}