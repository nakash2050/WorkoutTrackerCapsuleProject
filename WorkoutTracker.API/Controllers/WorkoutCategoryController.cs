using System.Web.Http;
using WorkoutTracker.BAL;
using WorkoutTracker.Entities;

namespace WorkoutTracker.API.Controllers
{
    public class WorkoutCategoryController : ApiController
    {
        private readonly WorkoutCategoryBAL _categoryBAL;

        public WorkoutCategoryController()
        {
            _categoryBAL = new WorkoutCategoryBAL();
        }
                
        public IHttpActionResult Get()
        {
            var result = _categoryBAL.GetAllWorkoutCategories();
            return Ok(result);
        }

        public IHttpActionResult Get(int id)
        {
            var result = _categoryBAL.GetWorkoutCategory(id);
            return Ok(result);
        }

        public IHttpActionResult Post(WorkoutCategory category)
        {
            var result = _categoryBAL.AddWorkoutCategory(category);
            return Ok(result);
        }

        public IHttpActionResult Put(int id, WorkoutCategory workout)
        {
            var result = _categoryBAL.UpdateWorkoutCategory(id, workout);
            return Ok(result);
        }

        public IHttpActionResult Delete(int id)
        {
            var result = _categoryBAL.DeleteWorkoutCategory(id);
            return Ok(result);
        }
    }
}
