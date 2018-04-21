import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';


  ngOnInit(){
    firebase.initializeApp({
    apiKey: "AIzaSyC0gTPZ4PJl8iBDNotuh-LeVSZmTMU8Ln0",
    authDomain: "recipe-book-86475.firebaseapp.com"
    });
  }


onNavigate(feature: string) {
this.loadedFeature = feature;
}
}
