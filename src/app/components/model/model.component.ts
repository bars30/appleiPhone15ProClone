import { Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ModelViewComponent } from '../model-view/model-view.component';

@Component({
  selector: 'app-model',
  standalone: true,
  imports: [ModelViewComponent],
  templateUrl: './model.component.html',
  styleUrl: './model.component.css'
})
export class ModelComponent {
  @ViewChild('title') title!: ElementRef;
  ngAfterViewInit() {
    gsap.to(this.title.nativeElement, { opacity: 1, y: 0 });
  }
}
 