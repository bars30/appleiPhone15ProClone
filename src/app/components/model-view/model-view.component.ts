import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-model-view',
  standalone: true,
  imports: [],
  templateUrl: './model-view.component.html',
  styleUrl: './model-view.component.css'
})
export class ModelViewComponent {
  @Input() index!: any;
  @Input() groupRef!: any;
  @Input() gsapType!: any;
  @Input() controlRef = {};
  @Input() setRoatationState = {};
  @Input() item = {};
  @Input() size: any;
}
 