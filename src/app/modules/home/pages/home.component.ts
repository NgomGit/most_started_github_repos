import { Component, OnInit, HostListener } from '@angular/core';
import { ApiService } from 'src/app/core/http/api.service';
import {MOST_STARED_GITHUB_REPOS_IN_THE_LAST_30_DAYS_URL} from 'src/app/shared/'
import GithubRepo from 'src/app/shared/models/GithubRepo';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  pageNumber = 2

  githubRepos: [GithubRepo]
  constructor(private apiService:ApiService, private spinner:NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show()
    this.getMostStaredGithubReposInLast30Days()
  }

  getMostStaredGithubReposInLast30Days(){
    this.apiService.getElementList(MOST_STARED_GITHUB_REPOS_IN_THE_LAST_30_DAYS_URL)
      .subscribe((response)=>{
        console.log('Response from the api ', response)
        this.githubRepos = response['items']
        console.log("githubRepos ", this.githubRepos)
        this.spinner.hide()

      }, (error) =>{
        console.log('Error while fetching elements ', error)
        this.spinner.hide()
      })
  }

  trackByFn(index, item) {
    return index; // or item.id
  }

  @HostListener('window:scroll', ['$event']) 
    scrollHandler(event) {
      let scrollHeight = document.documentElement.scrollHeight;
      let scrollPosition = window.scrollY + window.innerHeight

      if(scrollHeight == scrollPosition){
        this.LoadNextPage()
      }
      
    }

    LoadNextPage(){

      this.apiService
        .getElementListByPageNumber(MOST_STARED_GITHUB_REPOS_IN_THE_LAST_30_DAYS_URL,this.pageNumber)
        .subscribe((response)=>{
          console.log('Response ', response)

        }, (error)=>{
          console.log('Error ', error)
        })
    }

}
