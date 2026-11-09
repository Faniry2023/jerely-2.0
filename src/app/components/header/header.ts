import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Start } from './start/start';

@Component({
  selector: 'app-header',
  imports: [Navbar,Start,MatIcon],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
