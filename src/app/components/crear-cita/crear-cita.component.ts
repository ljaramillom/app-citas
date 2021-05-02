import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent implements OnInit {
  nombre='';
  fecha='';
  hora='';
  sintomas='';
  formularioValido = false;
  @Output() nuevaCita = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  agregarCita() {
    if(this.nombre == '' || this.fecha == '' || this.hora == '' || this.sintomas == '') {
      this.formularioValido = true;
      return;
    }
    this.formularioValido = false;

    const cita = {
      nombre: this.nombre,
      fecha: this.fecha,
      hora: this.hora,
      sintomas: this.sintomas
    }

    this.nuevaCita.emit(cita);
    this.reset();
  }

  reset() {
    this.nombre = '';
    this.fecha = '';
    this.hora = '';
    this.sintomas = '';
  }

}
