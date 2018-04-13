import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Workout } from '../_models/workout';
//import { TrackerService } from '../_services/tracker.service';
import { keys } from '../_models/keys';

@Component({
  selector: 'app-start-workout',
  templateUrl: './start-workout.component.html',
  styleUrls: ['./start-workout.component.css']
})
export class StartWorkoutComponent implements OnInit {

  workoutId: any;
  workout: Workout;

  constructor(
    //private trackerService: TrackerService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.workoutId = this.route.snapshot.params['id'];
    //this.workout = this.trackerService.get(keys.WORKOUTS, this.workoutId);
    this.workout.startDate = new Date().toLocaleDateString();
    this.workout.startTime = new Date().toLocaleTimeString('it-IT');
    this.workout.endDate = null;
    this.workout.endTime = null;
  }

  start(workout: Workout) {
    workout.isStarted = true;
    //this.trackerService.updateWorkout(workout);
    this.cancel();
  }

  cancel() {
    this.router.navigate(['/viewall']);
  }
}
