import { Component } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.components';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent,AboutComponent,ContactComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  helloWorld:string = "Hello, world from TS!";
  pClassName: string= "blue";
  clickMe(){
    alert("Beni Tıkladın")
  }
  changeHelloWorldVariable(event:any){
    this.helloWorld = event.target.value;

    

  }
}
