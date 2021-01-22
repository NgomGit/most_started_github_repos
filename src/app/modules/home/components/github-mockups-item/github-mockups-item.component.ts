import { Component, OnInit, Input } from '@angular/core';
import { DateService } from 'src/app/core/services/date.service';

@Component({
  selector: 'app-github-mockups-item',
  templateUrl: './github-mockups-item.component.html',
  styleUrls: ['./github-mockups-item.component.scss']
})
export class GithubMockupsItemComponent implements OnInit {

  @Input() githubRepo
  constructor(private dateService: DateService) { }

  ngOnInit() {
   this.setFormatedDate()
  }

  setFormatedDate(){
    this.githubRepo['timeInterval'] = this.dateService
    .reformatDateTimeInterval(this.githubRepo.created_at)
  }

}
