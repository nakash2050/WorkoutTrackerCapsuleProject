import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
//import { TrackerService } from '../_services/tracker.service';
import { Category } from '../_models/category';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { CategoryComponent } from './../category/category.component';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  bsModalRef: BsModalRef;
  subscriptions: Subscription[] = [];
  calories: any = 0;
  categories: Category[] = [];
  isWorkoutAdded: boolean;

  constructor(
    //private trackerService: TrackerService,
    private modalService: BsModalService,
    private changeDetection: ChangeDetectorRef
  ) { }

  ngOnInit() {
    //this.categories = this.trackerService.getCategories();
  }

  addCalories() {
    this.calories = (this.calories * 10 + 0.1 * 10) / 10
  }

  subtractCalories() {
    if (this.calories > 0) {
      this.calories = (this.calories * 10 - 0.1 * 10) / 10
    }
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

  submit(form) {
    //this.isWorkoutAdded = this.trackerService.addWorkout(form.value).length > 0;
    form.reset();
  }
}
