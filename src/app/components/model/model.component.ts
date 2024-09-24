import { Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ModelViewComponent } from '../model-view/model-view.component';
import * as THREE from 'three';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-model',
  standalone: true,
  imports: [ModelViewComponent, CommonModule],
  templateUrl: './model.component.html',
  styleUrl: './model.component.css'
})
export class ModelComponent {
  sizes = [
    { label: '6.1"', value: "small" },
    { label: '6.7"', value: "large" },
  ];
  
  models = [
    {
      id: 1,
      title: "iPhone 15 Pro in Natural Titanium",
      color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
      img: "/assets/images/yellow.jpg"
    },
    {
      id: 2,
      title: "iPhone 15 Pro in Natural Titanium",
      color: ["#53596E", "#6395ff", "#21242e"],
      img: "/assets/images/blue.jpg"
    },
    {
      id: 3,
      title: "iPhone 15 Pro in Natural Titanium",
      color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
      img: "/assets/images/white.jpg"
    },
    {
      id: 4,
      title: "iPhone 15 Pro in Natural Titanium",
      color: ["#454474", "#3b3b3b", "#181819"],
      img: "/assets/images/black.jpg"
    }
  ]

  setModel(model : any){
    this.model = model
  }


  size = 'small';


  changeSize(s: string) {
    this.size = s; // Update the size
    console.log('Selected size:', this.size);
  }

  model = {
    title: "iPhone 15 Pro in Natural Titanium",
    color: ['#8F8A81', '#FFE7B9', '#6F6C64'],
    img: "/assets/images/yellow.jpg"
  }

  // camera control for the model view
  // cameraControlSmall = useRef()
  // cameraControlLarge = useRef()
  cameraControlSmall : any;
  cameraControlLarge : any;

  // model
  small = new THREE.Group()
  large = new THREE.Group()

  // rotation
  smallRotation = 0;
  largeRotation = 0;

  @ViewChild('title') title!: ElementRef;

    








// canva

  @ViewChild('rendererCanvas', { static: true }) rendererCanvas!: ElementRef;

  ngOnInit() {
    const element = this.rendererCanvas.nativeElement;
    element.addEventListener('click', (event : any) => {
      // Handle the click event here
      console.log('Element clicked:', event);
    });
  }

  ngAfterViewInit() {
    this.createScene();
    gsap.to(this.title.nativeElement, { opacity: 1, y: 0 });
  }

  createScene() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: this.rendererCanvas.nativeElement });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();
  }
}








