using System.Linq;
using WorkoutTracker.Entities;
using WorkoutTracker.IRepositories;

namespace WorkoutTracker.DAL.Repositories
{
    public class WorkoutActiveRepository : Repository<WorkoutActive>, IWorkoutActiveRepository
    {
        public WorkoutTrackerContext WorkoutTrackerContext
        {
            get
            {
                return Context as WorkoutTrackerContext;
            }
        }

        public WorkoutActiveRepository(WorkoutTrackerContext context) :
            base(context)
        {

        }

        public WorkoutActive GetWorkoutByWorkoutId(int id)
        {
            return WorkoutTrackerContext.WorkoutActive.Where(workout => workout.WorkoutId == id).FirstOrDefault();
        }
    }
}
