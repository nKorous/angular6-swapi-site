import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class GetapiService {

  constructor(private _http: HttpClient) { }

  resources = {
    "films": "https://swapi.co/api/films/",
    "people": "https://swapi.co/api/people/",
    "planets": "https://swapi.co/api/planets/",
    "species": "https://swapi.co/api/species/",
    "starships": "https://swapi.co/api/starships/",
    "vehicles": "https://swapi.co/api/vehicles/"
      }

  getInfo(endpoint, thing, isWookie?){

    if(isWookie){
      var wookie = '/?format=wookie'
    } else {
      var wookie = '/?format='
    }
    return this._http.get(endpoint + '/?search=' + thing + wookie)
  }


}