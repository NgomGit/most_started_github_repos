import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-github-mockups-list',
  templateUrl: './github-mockups-list.component.html',
  styleUrls: ['./github-mockups-list.component.scss']
})
export class GithubMockupsListComponent implements OnInit {

  @Input() githubRepos

  constructor() { }

  ngOnInit() {
  }

}
