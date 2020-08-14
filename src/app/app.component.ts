import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RootObject } from 'src/shared/comic.module';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'comic-zone';
  ffheroe : string = '';
  nobmre : string = '';
  comicx :{};


  constructor (private http : HttpClient){
    let resultado = this.http.get(environment.url);
    
    resultado.subscribe(resultado => {
      console.log("Respuesta json", resultado);
      this.comicx = <RootObject>resultado;
    })
  }

  onClick(){
    this.nobmre = this.ffheroe;
  }
}
