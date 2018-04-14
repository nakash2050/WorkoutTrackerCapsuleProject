import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './../_shared/data.service';
import { Workout } from '../_models/workout';

@Injectable()
export class WorkoutService extends DataService {
  private controllerName: string = "workout";

  constructor(http: Http) {
    super(http);
  } 

  getAllWorkouts() {
    return this.get(this.controllerName);
  }

  addWorkout(workout: Workout) {
    return this.post(this.controllerName, workout);
  }
}
