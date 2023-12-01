import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from 'src/app/components/model/job';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {

  constructor(private db: JobService) {}

  job: Job = new Job();
  submitted = false;

  newPost(): void {
    this.submitted = false;
    this.job = new Job();
  }

  save() {
    this.db.createJob(this.job).subscribe(data => {
      console.log(data)
      this.job = new Job();
    },
    error => console.log(error));
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
  }

  createJob: boolean = false;
}
