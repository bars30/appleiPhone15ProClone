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
    this.currentVideoIndex = 0;
  }
 
  scrollToVideo(index: number): void {
    if (this.videoContainers && this.videoElements && this.carouselContainer) {
      // Reset the progress of all dots and update the active class
      this.spans?.forEach((span, idx) => {
        span.nativeElement.classList.remove('inprogress');
        span.nativeElement.classList.remove('active'); // Remove active class from all spans
  
        // Add active class to the current index
        if (idx === index) {
          span.nativeElement.classList.add('active');
        }
      });


      const containerElement = this.carouselContainer.nativeElement;
      const nextVideoContainer = this.videoContainers.toArray()[index].nativeElement;
  
      // Calculate the amount to scroll
      const scrollOffset = nextVideoContainer.offsetLeft;
  
      containerElement.scrollTo({
        left: scrollOffset,
        behavior: 'smooth'
      });
  
      const nextVideoElement = this.videoElements.toArray()[index].nativeElement;
  
      
  
      // Start playing the new video after scrolling
      setTimeout(() => {
        nextVideoElement.play();
      }, 1000); // delay to allow for scroll animation to finish
  
      this.currentVideoIndex = index;
      this.videoStatus = 'playing';
    }
  }
  dotClicked(i: number): void {
    // Pause the current video before switching
    const currentVideoElement = this.videoElements?.toArray()[this.currentVideoIndex].nativeElement;
    if (currentVideoElement) {
      currentVideoElement.pause();
    }
  
    // Update the video status
    this.videoStatus = 'paused';
  
    // Remove all 'inprogress' and 'active' classes from spans
    this.spans?.forEach((span, idx) => {
      span.nativeElement.classList.remove('inprogress');
      span.nativeElement.classList.remove('active');
    });
  
    // Scroll to the selected video
    this.scrollToVideo(i);
  }
  
  
  showProgress(number: any, index: number) {
    if (number >= 19) {
      document.documentElement.style.setProperty('--inppercent', `${number}%`);
    }
  
    if (this.currentVideoIndex === index) { // Only update the progress for the current video
      const span = this.spans?.toArray()[index]?.nativeElement; // Use toArray() here
      span?.classList.add('inprogress');
  
      if (number === 100) {
        span?.classList.remove('inprogress');
        document.documentElement.style.setProperty('--inppercent', `19%`);
      }
    }
  }
  
  

  onTimeUpdate(event: any, index: number): void {
    const videoElement = event.target as HTMLVideoElement;
    const percent = (videoElement.currentTime / videoElement.duration) * 100;

    this.showProgress(percent, index)
    
  }
}