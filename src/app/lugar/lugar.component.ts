import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IpClimaService } from '../ip-clima.service';
import { parse } from 'querystring';

@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.component.html',
  styleUrls: ['./lugar.component.css']
})
export class LugarComponent implements OnInit {
  
  climaDeHoy: any;
  infoCiudad: any;
  d = new Date();
  tiempo = '';
  carga = false;
  fecha: any;
  diaAux = '';
  dia = '';
  dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
  mes = '';
  mesAux = '';
  meses = [null, "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  year='';

  constructor(private http:HttpClient, private IpAndClima: IpClimaService) { }

  ngOnInit() {
    this.IpAndClima.datos().subscribe(
      info => {
        this.carga = true;
        this.infoCiudad = info.geoloc;
        this.tiempo = this.d.toTimeString().slice(0,5);
      },error => {
        alert('Houston we have a problem u.u');
        console.log(console.error);
      }
    );
  }




}
