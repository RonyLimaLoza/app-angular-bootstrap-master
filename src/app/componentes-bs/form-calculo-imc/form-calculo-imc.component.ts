import { Component } from '@angular/core';

@Component({
  selector: 'app-form-calculo-imc',
  templateUrl: './form-calculo-imc.component.html',
  styleUrls: ['./form-calculo-imc.component.scss']
})
export class FormCalculoImcComponent {

  frmImc = {
    nombre: null,
    peso: null,
    talla: null,
    imc: 0
  }

  resultado = ""

  lstPacientes: Paciente = []

  calcularIMC(){
    let tallam = Number(this.frmImc.talla) / 100;
    this.frmImc.imc = Number(tallam) / (Number(this.frmImc.peso) * Number(this.frmImc.peso))
    this.resultado = "Su IMC es "+ this.frmImc.imc
    this.lstPacientes.push({nombre: String(this.frmImc.nombre), imc: this.frmImc.imc})
  }
}
type Paciente = Array<{nombre: string, imc: number }>;