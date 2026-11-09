import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ViewportScroller } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { NosService } from '../../components/nos-service/nos-service';
import { Header } from '../header/header';
import { Navbar } from '../header/navbar/navbar';
import { GoogleMap, MapMarker } from '@angular/google-maps';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-about',
  imports: [Navbar,GoogleMap,MapMarker,Footer],
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
  animations:[
      trigger('slideIn', [
      state('hidden', style({
        opacity: 0,
        transform: 'translateY(50px)'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('hidden => visible', [
        animate('700ms ease-out')
      ])
    ])
  ]
})
export class About {
 visibleItems: boolean[] = [];
  test: number[] = [];
  currentIndex = 0;
  autoSlideInterval: any;
  mois = [
    "Janvier","Février","Mars","Avril","Mai","Juin","Juillet",
    "Août","Septembre","Octobre","Novembre","Decembre"
  ]
constructor(private viewportScroller: ViewportScroller,
  private dialog: MatDialog, private cdr: ChangeDetectorRef // 💡 important
) {
  this.visibleItems = new Array(10).fill(false);
  this.test = new Array(5);
}
  ngOnInit() {
    this.startAutoSlide();
  }
scrollToSection(sectionId: string) {
    this.viewportScroller.scrollToAnchor(sectionId);
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const elements = document.querySelectorAll('.service,.container-client');
    elements.forEach((el, index) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        this.visibleItems[index] = true;
      }
    });
  }

  openPopup(num:number){
    const dialogRef = this.dialog.open(NosService,{
      width:'50%',
      exitAnimationDuration : '500ms',
      enterAnimationDuration: '500ms',
      data:{
        'num': num
      }
    })
  }


  /** Calcule la position actuelle du slider */
  getTransform() {
    return `translateX(-${this.currentIndex * 684}px)`;
  }

  /** Passe à l'image suivante */
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.test.length;
    this.restartAutoSlide();
  }

  /** Passe à l'image précédente */
  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.test.length) % this.test.length;
    this.restartAutoSlide();
  }

  /** Démarre le défilement automatique */
  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
      this.cdr.detectChanges();
    }, 4000); // 4 secondes
  }

  /** Redémarre le timer après une interaction manuelle */
  restartAutoSlide() {
    clearInterval(this.autoSlideInterval);
    this.startAutoSlide();
  }

  //MAP
  center: google.maps.LatLngLiteral = { lat: -21.4522, lng: 47.0857 };

  mapOptions: google.maps.MapOptions = {
    disableDefaultUI: false,
    zoomControl: true
  };
}
