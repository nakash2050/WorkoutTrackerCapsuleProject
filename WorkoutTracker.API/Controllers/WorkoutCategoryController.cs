using System.Web.Http;
using WorkoutTracker.BAL;
using WorkoutTracker.Entities;

namespace WorkoutTracker.API.Controllers
{
    [RoutePrefix("api/category/")]
    public class WorkoutCategoryController : ApiController
    {
        private readonly WorkoutCategoryBAL _categoryBAL;

        public WorkoutCategoryController()
        {
            _categoryBAL = new WorkoutCategoryBAL();
        }

        public IHttpActionResult PostCategory(WorkoutCategory category)
        {
            var result = _categoryBAL.AddWorkoutCategory(category);
            return Ok(result);
        }

        [HttpGet]
        public IHttpActionResult GetAllCategories()
        {
            var result = _categoryBAL.GetAllWorkoutCategories();
            return Ok(result);
        }
    }
}
