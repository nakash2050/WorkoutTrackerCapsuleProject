using System.Web.Http;
using WorkoutTracker.BAL;
using WorkoutTracker.Entities;
using WorkoutTracker.Entities.DTO;

namespace WorkoutTracker.API.Controllers
{
    public class CategoryController : ApiController
    {
        private readonly CategoryBAL _categoryBAL;

        public CategoryController()
        {
            _categoryBAL = new CategoryBAL();
        }
                
        public IHttpActionResult Get()
        {
            var result = _categoryBAL.GetAllWorkoutCategories();
            return Ok(result);
        }

        public IHttpActionResult Get(int id)
        {
            var result = _categoryBAL.GetWorkoutCategory(id);

            if (result == null)
                return NotFound();

            return Ok(result);
        }

        public IHttpActionResult Post(CategoryDTO categoryDTO)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            var result = _categoryBAL.AddWorkoutCategory(categoryDTO);
            return Ok(result);
        }

        public IHttpActionResult Put(int id, CategoryDTO category)
        {
            var result = _categoryBAL.UpdateWorkoutCategory(id, category);
            return Ok(result);
        }

        public IHttpActionResult Delete(int id)
        {
            var result = _categoryBAL.DeleteWorkoutCategory(id);
            return Ok(result);
        }
    }
}
