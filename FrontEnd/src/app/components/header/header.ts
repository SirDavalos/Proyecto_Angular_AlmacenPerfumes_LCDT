import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
// import {  DropdownComponent, DropdownItemDirective, DropdownMenuDirective, DropdownToggleDirective } from '@coreui/angular'

@Component({
  selector: 'app-header',
  imports: [ RouterLink ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
