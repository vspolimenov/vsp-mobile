import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.page.html',
  styleUrls: ['./main-app.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MainAppPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
