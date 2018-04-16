using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Results;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using WorkoutTracker.API.Controllers;
using AutoMapper;
using WorkoutTracker.Entities.DTO;
using System.ComponentModel.DataAnnotations;

namespace WorkoutTracker.Tests
{
    [TestClass]
    public class WorkoutControllerTests
    {
        private static WorkoutController _workoutController;

        [AssemblyInitialize()]
        public static void Initialize(TestContext context)
        {
            _workoutController = new WorkoutController();

            Mapper.Initialize(config =>
            {
                config.AddProfile<MappingProfile>();
            });
        }

        [TestMethod]
        public void ValidateWorkoutModel_InvalidWorkoutTitle_ReturnsFalse()
        {
            var categoryDTO = new WorkoutDTO()
            {
                WorkoutTitle = string.Empty
            };

            var context = new System.ComponentModel.DataAnnotations.ValidationContext(categoryDTO, null, null);
            var results = new List<ValidationResult>();
            var isModelStateValid = Validator.TryValidateObject(categoryDTO, context, results, true);

            Assert.IsFalse(isModelStateValid);
        }

        [TestMethod]
        public void AddNewWorkout_ValidWorkout_ReturnsTrue()
        {
            var workout = new WorkoutDTO()
            {
                WorkoutTitle = "Workout Title",
                WorkoutNote = "Workout Note",
                CategoryId = 1
            };

            IHttpActionResult actionResult = _workoutController.Post(workout);
            var contentResult = actionResult as OkNegotiatedContentResult<bool>;

            Assert.IsNotNull(contentResult);
            Assert.IsNotNull(contentResult.Content);
            Assert.IsTrue(contentResult.Content);
        }

        [TestMethod]
        public void GetWorkout_PassWorkoutId_ReturnsValidWorkout()
        {
            IHttpActionResult actionResult = _workoutController.Get(1);
            var contentResult = actionResult as OkNegotiatedContentResult<WorkoutDTO>;

            Assert.IsNotNull(contentResult);
            Assert.IsNotNull(contentResult.Content);
            Assert.AreEqual(1, contentResult.Content.WorkoutId);
        }

        [TestMethod]
        public void GetWorkouts_All_ReturnsAllWorkouts()
        {
            IHttpActionResult actionResult = _workoutController.Get();
            var contentResult = actionResult as OkNegotiatedContentResult<IEnumerable<WorkoutDTO>>;

            Assert.IsNotNull(contentResult);
            Assert.IsNotNull(contentResult.Content);
        }
    }
}