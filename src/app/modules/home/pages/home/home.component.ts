import { Component, OnInit, HostListener } from '@angular/core';
import { ApiService } from 'src/app/core/http/api.service';
import {MOST_STARED_GITHUB_REPOS_IN_THE_LAST_30_DAYS_URL,
        ALERT_TYPE_ERROR} from 'src/app/shared/'
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService } from 'src/app/core/services/alert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  nextPageNumber = 2
  githubRepos:any[] = new Array()

  constructor(private apiService:ApiService,
              private alertService: AlertService,
              private spinner:NgxSpinnerService
             ) { }

  ngOnInit() {
    this.spinner.show()
    this.getMostStaredGithubReposInLast30Days()
  }

  getMostStaredGithubReposInLast30Days(){
    this.apiService.getElementList(MOST_STARED_GITHUB_REPOS_IN_THE_LAST_30_DAYS_URL)
      .subscribe((response)=>{
        this.githubRepos = response['items'];
        this.spinner.hide();
      }, (error) =>{
        this.spinner.hide();
        this.alertService.showMessage("Error",error['message'],ALERT_TYPE_ERROR);
      })
  }

  trackByFn(index, item) {
    return index; 
  }

  @HostListener('window:scroll', ['$event']) 
    scrollHandler() {
      let scrollHeight = document.documentElement.scrollHeight;
      let scrollPosition = window.scrollY + window.innerHeight
      if(scrollHeight == scrollPosition){
          this.spinner.show()
          this.LoadNextPage()
      }
  }

  LoadNextPage(){
    this.apiService
      .getElementListByPageNumber(MOST_STARED_GITHUB_REPOS_IN_THE_LAST_30_DAYS_URL,this.nextPageNumber)
        .subscribe((response)=>{
          this.nextPageNumber += 1;
          this.addNewElements(response['items'])
          console.log(" lenght ",this.githubRepos.length);
          this.spinner.hide();
        }, (error)=>{
          this.spinner.hide();
          this.alertService.showMessage("Error",error['message'],ALERT_TYPE_ERROR)
        })
  }

  addNewElements(repos) {
    for (let item of repos){
      this.githubRepos.push(item)
    }
  }
}
