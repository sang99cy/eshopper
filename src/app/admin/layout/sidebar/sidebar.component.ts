import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy, } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
