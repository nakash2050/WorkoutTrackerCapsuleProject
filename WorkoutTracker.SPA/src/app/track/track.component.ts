import { Component, OnInit } from '@angular/core';
import { Workout } from '../_models/workout';
//import { TrackerService } from '../_services/tracker.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  workouts: Workout[];
  totalWorkoutTime: number = 0;

  constructor(
    //private trackerService: TrackerService
  ) { }

  ngOnInit() {
    //this.workouts = this.trackerService.getWorkouts();
    this.totalWorkoutTime = this.workouts ? Math.round(this.getTotalWorkoutTime(this.workouts)) : 0;
  }

  private getTotalWorkoutTime(workouts: Workout[]) {
    let totalTime: number = 0;
    if (this.workouts.length > 0) {
      for (let workout of this.workouts) {
        if (workout.startDate && workout.startTime && workout.endDate && workout.endTime) {
          var startDateTime = workout.startDate + ' ' + workout.startTime;
          var endDateTime = workout.endDate + ' ' + workout.endTime;
          totalTime += this.calculateDurationInMins(startDateTime, endDateTime);
        }
      }
    }

    return totalTime;
  }

  private calculateDurationInMins(startDateTime, endDateTime) {
    let start = new Date(startDateTime);
    let end = new Date(endDateTime);
    var duration = end.valueOf() - start.valueOf();
    return duration / (1000 * 60);
  }

  public barChartOptions: any = {
    scaleShowVerticalLines: true,
    responsive: true
  };
  public barChartWeekLabels: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  public barChartMonthLabels: string[] = ['Week1', 'Week2', 'Week3', 'Week4', 'Week5'];
  public barChartYearLabels: string[] = ['Y1', 'Y2', 'Y3','Y4','Y5','Y6','Y7','Y8','Y9','Y10','Y11','Y12'];

  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;
  public chartColors = [{ backgroundColor: ['#e03c31', '#006699', '#ce534b', '#0088cc', '#539536', '#ff6633', '#e7ab08', '#38424a', '#ce3607', '#07ce99', '#ff2233', '#9907ce'] }];

  public barChartWeekData: any[] = [
    { data: [850, 1000, 500, 650, 630, 1000, 1200], label: 'Weekly Calories Burnt: 4800' }
  ];

  public barChartMonthData: any[] = [
    { data: [1000, 800, 850, 875, 650], label: 'Monthly Calories Burnt: 18000' }
  ];

  public barChartYearData: any[] = [
    { data: [1000, 850, 700, 750, 600, 730, 900, 1100, 900, 860, 920, 800], label: 'Yearly Calories Burnt: 190000' }
  ];
}
