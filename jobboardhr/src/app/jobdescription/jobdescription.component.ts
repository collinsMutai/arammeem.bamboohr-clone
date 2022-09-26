import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ijobs } from '../interface/jobs';
import { JobsService } from '../Service/jobs.service';

@Component({
  selector: 'app-jobdescription',
  templateUrl: './jobdescription.component.html',
  styleUrls: ['./jobdescription.component.css'],
})
export class JobdescriptionComponent implements OnInit {
  id!: number;
  job: any = [];
  constructor(
    private jobsService: JobsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.id = param['id'];
    });
    this.jobsService.getJob(this.id).subscribe((res) => {
      this.job = res;
      console.log(this.job['position']);
    });
  }
}
