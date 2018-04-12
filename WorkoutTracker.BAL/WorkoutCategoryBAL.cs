using System.Collections.Generic;
using WorkoutTracker.DAL;
using WorkoutTracker.DAL.Repositories;
using WorkoutTracker.Entities;

namespace WorkoutTracker.BAL
{
    public class WorkoutCategoryBAL
    {
        public bool AddWorkoutCategory(WorkoutCategory category)
        {
            using (var unitOfWork = new UnitOfWork(new WorkoutTrackerContext()))
            {
                unitOfWork.WorkoutCategory.Add(category);
                var result = unitOfWork.Complete();
                return result == 1;
            }
        }

        public WorkoutCategory GetWorkoutCategory(int id)
        {
            using (var unitOfWork = new UnitOfWork(new WorkoutTrackerContext()))
            {
                var result = unitOfWork.WorkoutCategory.Get(id);
                return result;
            }
        }

        public IEnumerable<WorkoutCategory> GetAllWorkoutCategories()
        {
            using (var unitOfWork = new UnitOfWork(new WorkoutTrackerContext()))
            {
                var result = unitOfWork.WorkoutCategory.GetAll();
                return result;
            }
        }
    }
}
