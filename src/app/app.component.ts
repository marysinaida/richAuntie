import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent{

  title = 'maryE-commerce';
  today = new Date();

}

