import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ViewportScroller } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { NosService } from '../../components/nos-service/nos-service';
import { Header } from '../../components/header/header';
import { Plateforme } from '../../components/plateforme/plateforme';
import { Footer } from '../../components/footer/footer';
@Component({
  selector: 'app-home',
  imports: [Header,Plateforme,Footer],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],

})
export class Home{

}
