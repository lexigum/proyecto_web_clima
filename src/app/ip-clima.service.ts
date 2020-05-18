import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, mergeMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IpClimaService {

  urlAPI = 'https://ipapi.co/json/';

  constructor(private http:HttpClient) { }

  
  datos()
  {
    return this.http.get(this.urlAPI)
    .pipe(
      mergeMap(
        (geoloc: any) => {
          const params = {
            lon: geoloc.longitude,
            lat: geoloc.latitude,
            product: 'civillight',
            output: 'json'
          };
          return this.http.get('http://www.7timer.info/bin/api.pl',{params})
          .pipe(
            map(clima => ({clima, geoloc}))
          );
        }
      )
    );
  }
  
}
