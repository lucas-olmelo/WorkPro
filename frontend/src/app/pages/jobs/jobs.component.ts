import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Job } from 'src/app/components/model/job';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {

  constructor(private db: JobService, private auth: AuthenticationService, private router: Router) {}

  user = this.auth.getUserInfo()?.firstName + " " + this.auth.getUserInfo()?.lastName
  job: Job = new Job(this.user);
  submitted = false;

  save() {
    this.db.createJob(this.job).subscribe(data => {
      console.log(data)
      this.job = new Job(this.user);
    },
    error => console.log(error));
  }

  createButton(){
    if(this.auth.isAuthenticated() === false){
      this.router.navigate(['login']);
    } else {
      this.createJob = true
    }
  }

  onSubmit() {
    this.submitted = true;
    this.save();   
    this.createJob = false;
  }

  jobs!: Observable<Job[]>;

  ngOnInit() {
    this.reloadData();
    console.log(this.jobs);
  }

  reloadData() {
    this.jobs = this.db.getJobsList();
    this.jobs = this.jobs.pipe(
      tap(results => {
        results.sort((a: Job, b: Job) => {
          let da: any = new Date(a.timestamp),
              db: any = new Date(b.timestamp);
          return db - da;
        })
      })
    )
  }

  createJob: boolean = false;
}
