import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { NbaServiceService } from '../service/nba-service.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss']
})
export class TeamDetailsComponent implements OnInit {
  id: String = "";
  teamId: String = "";

  team  = {};
  games = [];

  constructor(private route: ActivatedRoute, private nbaService: NbaServiceService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.teamId = this.route.snapshot.paramMap.get("teamId");

    this.getTeam();
  }

  async getTeam() {
    let year = (new Date()).getFullYear()-1;
    
    let response = await this.nbaService.getTeam(this.id, this.teamId, year).toPromise();

    console.log(response);
    this.team = response["data"]["team"];
    this.games= response["data"]["games"];
  }

}
