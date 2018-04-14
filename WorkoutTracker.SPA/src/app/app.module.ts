import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { CreateComponent } from './create/create.component';
import { TrackComponent } from './track/track.component';
import { CategoryComponent } from './category/category.component';
import { WorkoutFilterPipe } from './_pipes/workout-filter.pipe';
import { CategoryFilterPipe } from './_pipes/category-filter.pipe';
import { ContentEditableModelDirective } from './_directives/content-editable-model.directive';
import { EditWorkoutComponent } from './edit-workout/edit-workout.component';
import { StartWorkoutComponent } from './start-workout/start-workout.component';
import { EndWorkoutComponent } from './end-workout/end-workout.component';

import { CategoryService } from './_services/category.service';
import { WorkoutService } from './_services/workout.service';

import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { ChartsModule } from 'ng2-charts';

const routes: Routes = [
  { path: 'viewall', component: ViewAllComponent },
  { path: 'create', component: CreateComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'track', component: TrackComponent },
  { path: 'editworkout/:id', component: EditWorkoutComponent },
  { path: 'startworkout/:id', component: StartWorkoutComponent },
  { path: 'endworkout/:id', component: EndWorkoutComponent },
  { path: '**', redirectTo: 'viewall', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ViewAllComponent,
    CreateComponent,
    TrackComponent,
    CategoryComponent,
    WorkoutFilterPipe,
    CategoryFilterPipe,
    ContentEditableModelDirective,
    EditWorkoutComponent,
    StartWorkoutComponent,
    EndWorkoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ModalModule.forRoot(),
    ChartsModule,
    HttpModule
  ],
  providers: [
    BsModalService,
    CategoryService,
    WorkoutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
