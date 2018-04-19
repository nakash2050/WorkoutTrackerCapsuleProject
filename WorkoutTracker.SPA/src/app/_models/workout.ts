export interface Workout {
    workoutId: number;
    categoryId: number;
    workoutTitle: string;
    workoutNote: string;
    startDate: string
    startTime: string;
    endDate: string;    
    endTime: string;
    status: boolean;
    comment: string;
}