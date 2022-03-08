import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercicio03';

  mostrarNumero : number = 0;

  incrementar(): void {
    this.mostrarNumero = this.mostrarNumero + 1
  }

  decrementar(): void{
    if(this.mostrarNumero > 0){
      this.mostrarNumero = this.mostrarNumero - 1
    }
  }
}

