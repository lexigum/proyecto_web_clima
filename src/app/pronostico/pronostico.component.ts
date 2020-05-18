import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IpClimaService } from '../ip-clima.service';

@Component({
  selector: 'app-pronostico',
  templateUrl: './pronostico.component.html',
  styleUrls: ['./pronostico.component.css']
})
export class PronosticoComponent implements OnInit {

  climaDeHoy: any;
  climaOtros: any;
  d = new Date();
  carga = false;
  fecha: any;
  dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
  meses = [null, "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  

  constructor( private http: HttpClient, private IpAndClima: IpClimaService ){}

  ngOnInit() {
    this.IpAndClima.datos().subscribe(
      info => {

        this.carga = true;
        this.climaDeHoy = info.clima.dataseries[0];
        this.climaOtros = info.clima.dataseries;
      },error => {
        alert('Houston we have a problem u.u');
        console.log(console.error);
      }
    );
  }

  diaNombre(year: any, mes: any, dia: any)
  {
    var date = new Date(parseInt(year), parseInt(mes)-1, parseInt(dia));
    var dateAux = date.getDay();
    var diaAux = this.dias[dateAux]; 
    console.log(date);
    return diaAux;
  }

  diaNumero(year: any, mes: any, dia: any)
  {
    var date = new Date(parseInt(year), parseInt(mes)-1, parseInt(dia));
    var dateAux = date.getDay();
    console.log(date);
    return dateAux;
  }

  selecImagen(clima: any)
  {
    var imagen = '';
    if(clima == 'clear')
      imagen = 'assets/soleado.png'
    if(clima == 'cloudy')
      imagen = 'assets/nublado.png'
    if(clima == 'ts')
      imagen = 'assets/tormenta.png'
    if(clima == 'rain')
      imagen = 'assets/lluvia.png'  

      return imagen;
  }

  selectClima(clima: any)
  {
    var nombreClima = '';
    if(clima == 'clear')
      nombreClima = 'Soleado'
    if(clima == 'cloudy')
      nombreClima = 'Nublado'
    if(clima == 'ts')
      nombreClima = 'Tormenta con truenos'
    if(clima == 'rain')
      nombreClima = 'Lluvioso'  

      return nombreClima;
  }



}
