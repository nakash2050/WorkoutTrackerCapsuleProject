using System.Collections.Generic;
using WorkoutTracker.Entities;

namespace WorkoutTracker.IRepositories
{
    public interface IWorkoutActiveRepository : IRepository<WorkoutActive>
    {
        WorkoutActive GetWorkoutByWorkoutId(int id);

        List<DurationInMinutes> GetWorkoutTimes();
    }
}
