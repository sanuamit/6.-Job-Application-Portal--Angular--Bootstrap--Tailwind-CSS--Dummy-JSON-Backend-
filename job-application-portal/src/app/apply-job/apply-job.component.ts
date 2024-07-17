import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../job.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-apply-job',
  templateUrl: './apply-job.component.html',
  styleUrls: ['./apply-job.component.css'],
})
export class ApplyJobComponent implements OnInit {
  jobId!: number; // Use the definite assignment assertion operator
  applyForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private jobService: JobService,
    private fb: FormBuilder
  ) {
    this.applyForm = this.fb.group({
      name: [''],
      email: [''],
      resume: [''],
    });
  }

  ngOnInit(): void {
    this.jobId = +this.route.snapshot.params['id']; // Ensure the ID is a number
  }

  onSubmit(): void {
    const application = {
      jobId: this.jobId,
      ...this.applyForm.value,
    };
    this.jobService.applyForJob(application).subscribe((response) => {
      alert('Application submitted successfully!');
    });
  }
}
