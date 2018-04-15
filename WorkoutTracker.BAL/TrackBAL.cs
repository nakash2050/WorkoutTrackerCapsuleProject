using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WorkoutTracker.DAL;
using WorkoutTracker.DAL.Repositories;
using WorkoutTracker.Entities;
using WorkoutTracker.Entities.DTO;

namespace WorkoutTracker.BAL
{
    public class TrackBAL
    {
        public TrackDTO GetWorkoutTimes()
        {
            TrackDTO trackDTO = null;

            using (var unitOfWork = new UnitOfWork(new WorkoutTrackerContext()))
            {
                var workoutTimes = unitOfWork.WorkoutActive.GetWorkoutTimes();
                if(workoutTimes != null && workoutTimes.Count() > 0)
                {
                    trackDTO = new TrackDTO()
                    {
                        WorkoutTimeOfDay = workoutTimes[0].TotalTimeInMinutes,
                        WorkoutTimeOfWeek = workoutTimes[1].TotalTimeInMinutes,
                        WorkoutTimeOfMonth = workoutTimes[2].TotalTimeInMinutes,
                    };
                }
            }

            return trackDTO;
        }
    }
}
