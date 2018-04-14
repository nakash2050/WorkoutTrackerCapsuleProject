import { Component, OnInit } from '@angular/core';
import { Workout } from '../_models/workout';
//import { TrackerService } from '../_services/tracker.service';
import { Router, ActivatedRoute } from '@angular/router';
import { keys } from '../_models/keys';

@Component({
  selector: 'app-end-workout',
  templateUrl: './end-workout.component.html',
  styleUrls: ['./end-workout.component.css']
})
export class EndWorkoutComponent implements OnInit {

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
    this.workout.endDate = new Date().toLocaleDateString();
    this.workout.endTime = new Date().toLocaleTimeString('it-IT');
  }

  end(workout: Workout) {
    workout.status = false;
    //this.trackerService.updateWorkout(workout);
    this.cancel();
  }

  cancel() {
    this.router.navigate(['/viewall']);
  }

}
