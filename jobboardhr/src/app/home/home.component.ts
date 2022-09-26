import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ijobs } from '../interface/jobs';
import { JobsService } from '../Service/jobs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private jobsService: JobsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  jobs: Ijobs[] = [];
  ngOnInit(): void {
    this.getJobs();
  }
  getJobs() {
    this.jobsService.getJobs().subscribe((res) => {
      console.log(res);
      this.jobs = res;
    });
  }
  getId(id: number) {
    this.router.navigate([`/job-details/${id}`], {
      relativeTo: this.route,
    });
  }
}
