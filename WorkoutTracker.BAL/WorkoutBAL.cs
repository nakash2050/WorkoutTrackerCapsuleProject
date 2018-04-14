using AutoMapper;
using System.Collections.Generic;
using System.Linq;
using WorkoutTracker.DAL;
using WorkoutTracker.DAL.Repositories;
using WorkoutTracker.Entities;
using WorkoutTracker.Entities.DTO;

namespace WorkoutTracker.BAL
{
    public class WorkoutBAL
    {
        public bool AddWorkout(WorkoutDTO workoutDTO)
        {
            var workout = Mapper.Map<WorkoutCollection>(workoutDTO);

            using (var unitOfWork = new UnitOfWork(new WorkoutTrackerContext()))
            {
                unitOfWork.WorkoutCollection.Add(workout);
                var result = unitOfWork.Complete();
                return result == 1;
            }
        }

        public IEnumerable<WorkoutDTO> GetAllWorkouts()
        {
            using (var unitOfWork = new UnitOfWork(new WorkoutTrackerContext()))
            {
                var result = unitOfWork.WorkoutCollection.GetAll().Select(Mapper.Map<WorkoutCollection, WorkoutDTO>);
                return result;
            }
        }

        public WorkoutDTO GetWorkout(int id)
        {
            using (var unitOfWork = new UnitOfWork(new WorkoutTrackerContext()))
            {
                var result = unitOfWork.WorkoutCollection.Get(id);
                var workout = Mapper.Map<WorkoutDTO>(result);
                return workout;
            }
        }

        public bool UpdateWorkout(int id, WorkoutDTO workoutDTO)
        {
            int result = 0;

            using (var unitOfWork = new UnitOfWork(new WorkoutTrackerContext()))
            {
                var workoutInDB = unitOfWork.WorkoutCollection.Get(id);

                if (workoutInDB != null)
                {
                    workoutDTO.WorkoutId = id;
                    Mapper.Map(workoutDTO, workoutInDB);
                    result = unitOfWork.Complete();
                }

                return result == 1;
            }
        }

        public bool DeleteWorkout(int id)
        {
            int result = 0;

            using (var unitOfWork = new UnitOfWork(new WorkoutTrackerContext()))
            {
                var workoutInDB = unitOfWork.WorkoutCollection.Get(id);

                if (workoutInDB != null)
                {
                    unitOfWork.WorkoutCollection.Remove(workoutInDB);
                    result = unitOfWork.Complete();
                }

                return result == 1;
            }
        }
    }
}
