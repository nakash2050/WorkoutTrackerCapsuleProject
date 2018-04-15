using System.Collections.Generic;

namespace WorkoutTracker.Entities.DTO
{
    public class TrackDTO
    {
        public int WorkoutTimeOfDay { get; set; }

        public int WorkoutTimeOfWeek { get; set; }

        public int WorkoutTimeOfMonth { get; set; }

        public IEnumerable<TotalCalories> TotalCaloriesBurntPerWeek { get; set; }

        public IEnumerable<TotalCalories> TotalCaloriesBurntPerMonth { get; set; }

        public IEnumerable<TotalCalories> TotalCaloriesBurntPerYear { get; set; }
    }
}
