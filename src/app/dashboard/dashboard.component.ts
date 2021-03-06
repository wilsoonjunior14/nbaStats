import { Component, OnInit } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {InputTextModule} from 'primeng/inputtext';
import {NbaServiceService} from '../service/nba-service.service';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'nbaStats';
  teams = [];
  request: Boolean = false;

  teamsWest    = [];
  teamsEast = [];

  constructor(private nbaService: NbaServiceService){
    this.getTeams();
  }

  ngOnInit() {
  }

  async getTeams(){
    this.request = true;
    let response = await this.nbaService.getTeams().toPromise();
    this.teams = response["data"];

    this.teams.forEach((item) => {
      if (item.conference == 'West') this.teamsWest.push(item);
      if (item.conference == 'East') this.teamsEast.push(item);
    });
    this.request = false;
  }

  print(){
    window.print();
  }

}
