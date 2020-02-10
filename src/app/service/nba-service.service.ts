import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import constantes from '../constantes';

@Injectable({
  providedIn: 'root'
})
export class NbaServiceService {

  constructor(private httpClient: HttpClient) {

  }

  getTeams(){
    return this.httpClient.get(constantes.URL + constantes.URL_GET_TEAMS, {});
  }

  getTeam(id, idTeam, year){
    return this.httpClient.get(constantes.URL + constantes.URL_GET_TEAM+id+"/"+idTeam+"/"+year, {});
  }
}
