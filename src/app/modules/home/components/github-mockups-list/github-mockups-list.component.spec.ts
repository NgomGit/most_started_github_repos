import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubMockupsListComponent } from './github-mockups-list.component';

describe('GithubMockupsListComponent', () => {
  let component: GithubMockupsListComponent;
  let fixture: ComponentFixture<GithubMockupsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubMockupsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubMockupsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
