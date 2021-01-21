import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/http/api.service';
import {MOST_STARED_GITHUB_REPOS_IN_THE_LAST_30_DAYS_URL} from 'src/app/shared/'
import GithubRepo from 'src/app/shared/models/GithubRepo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  githubRepos: [GithubRepo]
  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.getMostStaredGithubReposInLast30Days()
  }

  getMostStaredGithubReposInLast30Days(){
    this.apiService.getElementList(MOST_STARED_GITHUB_REPOS_IN_THE_LAST_30_DAYS_URL)
      .subscribe((response)=>{
        console.log('Response from the api ', response)
        this.githubRepos = response['items']
        console.log("githubRepos ", this.githubRepos)

      }, (error) =>{
        console.log('Error while fetching elements ', error)
      })
  }

}
