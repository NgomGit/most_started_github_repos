import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/http/api.service';
import {mostStartedGithubReposInLast30Days} from 'src/app/shared/'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.getMostStaredGithubReposInLast30Days()
  }

  getMostStaredGithubReposInLast30Days(){
    this.apiService.getElementList(mostStartedGithubReposInLast30Days)
      .subscribe((response)=>{
        console.log('Response from the api ', response)
      }, (error) =>{
        console.log('Error while fetching elements ', error)
      })
  }

}
