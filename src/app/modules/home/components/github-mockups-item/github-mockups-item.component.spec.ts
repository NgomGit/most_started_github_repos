import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubMockupsItemComponent } from './github-mockups-item.component';

describe('GithubMockupsItemComponent', () => {
  let component: GithubMockupsItemComponent;
  let fixture: ComponentFixture<GithubMockupsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubMockupsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubMockupsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
