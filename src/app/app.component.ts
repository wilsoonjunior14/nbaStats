import { Component } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {InputTextModule} from 'primeng/inputtext';
import {NbaServiceService} from './service/nba-service.service';
import {CardModule} from 'primeng/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nbaStats';
  teams = [];

  teamsWest    = [];
  teamsEast = [];

  constructor(private nbaService: NbaServiceService){
    this.getTeams();
  }

  async getTeams(){
    let response = await this.nbaService.getTeams().toPromise();
    this.teams = response["data"];

    this.teams.forEach((item) => {
      if (item.conference == 'West') this.teamsWest.push(item);
      if (item.conference == 'East') this.teamsEast.push(item);
    });
  }

  print(){
    window.print();
  }


}
