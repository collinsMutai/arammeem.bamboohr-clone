import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobdetails',
  templateUrl: './jobdetails.component.html',
  styleUrls: ['./jobdetails.component.css'],
})
export class JobdetailsComponent implements OnInit {
  value = true;
  url = "https://arammeem.bamboohr.com/jobs"
  
  constructor(private router:Router) {}

  ngOnInit(): void {}
  toggleDetails() {
    const viewToggleBtn = document.getElementById('apply') as HTMLLinkElement;

    this.value = !this.value;
    console.log(this.value);
    if (!this.value) {
      viewToggleBtn.textContent = 'View Job Description';
      
      this.router.navigate(['/job-details/apply'])
    } else {
      viewToggleBtn.textContent = 'Apply For This Job';
      this.router.navigate(['/job-details'])
    }

   
 
  }
 
}
