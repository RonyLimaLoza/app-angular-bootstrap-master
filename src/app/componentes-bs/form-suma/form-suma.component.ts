import { Component } from '@angular/core';

@Component({
  selector: 'app-form-suma',
  templateUrl: './form-suma.component.html',
  styleUrls: ['./form-suma.component.scss']
})
export class FormSumaComponent {

  resultado = ""

  frmSuma = {
    numero1: null,
    numero2: null    
  }


  calcularSuma(){
    let suma = Number(this.frmSuma.numero1) + Number(this.frmSuma.numero2);
    this.resultado = "La suma es: " + suma;
  }
}
