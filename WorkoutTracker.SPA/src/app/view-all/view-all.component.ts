import { Component, OnInit } from '@angular/core';
import { Workout } from '../_models/workout';
//import { TrackerService } from '../_services/tracker.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  workouts: Workout[] = [];

  constructor(
    //private trackerService: TrackerService,
    private router: Router
  ) { }

  ngOnInit() {
    //this.workouts = this.trackerService.getWorkouts();
  }

  editWorkout(id) {
    this.router.navigate(['/editworkout', id]);
  }

  deleteWorkout(workout: Workout) {
    //this.workouts = this.trackerService.deleteWorkout(workout);
  }

  start(id) {
    this.router.navigate(['/startworkout', id]);
  }

  end(id) {
    this.router.navigate(['/endworkout', id]);
  }
}
