import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Workout } from '../_models/workout';
//import { TrackerService } from '../_services/tracker.service';
import { keys } from '../_models/keys';
import { Category } from '../_models/category';
import { Observable } from 'rxjs/Observable';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/combineLatest';
import { CategoryComponent } from '../category/category.component';

@Component({
  selector: 'app-edit-workout',
  templateUrl: './edit-workout.component.html',
  styleUrls: ['./edit-workout.component.css']
})
export class EditWorkoutComponent implements OnInit {

  categories: Category[];
  workoutId: any;
  workout: any;
  subscriptions: Subscription[] = [];
  bsModalRef: BsModalRef;

  constructor(
    //private trackerService: TrackerService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private changeDetection: ChangeDetectorRef) { }

  ngOnInit() {
    //this.categories = this.trackerService.getCategories();
    this.workoutId = this.route.snapshot.params.id;
    //this.workout = this.trackerService.get(keys.WORKOUTS, this.workoutId);
  }

  update(workout) {
    //this.trackerService.update(keys.WORKOUTS, workout);
    this.cancel();
  }

  cancel() {
    this.router.navigate(['/viewall']);
  }

  openModalWithComponent() {
    const _combine = Observable.combineLatest(
      this.modalService.onHidden
    ).subscribe(() => this.changeDetection.markForCheck());

    this.subscriptions.push(
      this.modalService.onHidden.subscribe((reason: string) => {
        //this.categories = this.trackerService.getCategories();
        this.unsubscribe();
      })
    );

    this.subscriptions.push(_combine);

    this.bsModalRef = this.modalService.show(CategoryComponent, null);
  }

  unsubscribe() {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
    this.subscriptions = [];
  }
}
