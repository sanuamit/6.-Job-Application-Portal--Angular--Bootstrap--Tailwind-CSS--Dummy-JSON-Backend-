import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobListComponent } from './job-list/job-list.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { ApplyJobComponent } from './apply-job/apply-job.component';

const routes: Routes = [
  { path: '', component: JobListComponent },
  { path: 'job/:id', component: JobDetailComponent },
  { path: 'apply/:id', component: ApplyJobComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
