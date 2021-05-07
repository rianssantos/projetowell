import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Clientes', url: 'clientes', icon: 'people' },
    { title: 'Trabalhos', url: 'trabalhos', icon: 'code-working' },
    { title: 'Presentes', url: 'presentes', icon: 'gift' },
    { title: 'Pais', url: 'pais', icon: 'globe' },
    { title: 'login', url:'login', icon:'people'},
    { title: 'cadastro', url:'cadastro', icon:'people'}
    
  ];
 
  constructor() {}
}
