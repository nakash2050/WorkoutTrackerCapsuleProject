using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using WorkoutTracker.Entities.DTO;
using AutoMapper;
using WorkoutTracker.API.Controllers;
using System.Web.Http;
using System.Web.Http.Results;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel.DataAnnotations;

namespace WorkoutTracker.Tests
{
    [TestClass]
    public class CategoryControllerTests
    {        
        private static CategoryController _categoryController;

        [ClassInitialize]
        public static void Initialize(TestContext context)
        {
            _categoryController = new CategoryController();

            Mapper.Initialize(config =>
            {
                config.AddProfile<MappingProfile>();
            });
        }

        [TestMethod]
        public void GetCategories_All_ReturnsAllCategories()
        {
            IHttpActionResult actionResult = _categoryController.Get();
            var contentResult = actionResult as OkNegotiatedContentResult<IOrderedEnumerable<CategoryDTO>>;

            Assert.IsNotNull(contentResult);
            Assert.IsNotNull(contentResult.Content);
        }

        [TestMethod]
        public void GetWorkoutCategory_PassCategoryId_ReturnsValidCategory()
        {
            IHttpActionResult actionResult = _categoryController.Get(4);
            var contentResult = actionResult as OkNegotiatedContentResult<CategoryDTO>;

            Assert.IsNotNull(contentResult);
            Assert.IsNotNull(contentResult.Content);
            Assert.AreEqual(4, contentResult.Content.CategoryId);
        }

        [TestMethod]
        public void AddNewWorkoutCategory_ValidCategory_ReturnsTrue()
        {
            var category = new CategoryDTO()
            {
                CategoryName = "Category1"
            };

            IHttpActionResult actionResult = _categoryController.Post(category);
            var contentResult = actionResult as OkNegotiatedContentResult<IEnumerable<CategoryDTO>>;

            Assert.IsNotNull(contentResult);
            Assert.IsNotNull(contentResult.Content);
        }

        [TestMethod]
        public void ValidateWorkoutCategoryModel_ValidCategory_ReturnsTrue()
        {
            var categoryDTO = new CategoryDTO()
            {
                CategoryName = "Category"
            };

            var context = new System.ComponentModel.DataAnnotations.ValidationContext(categoryDTO, null, null);
            var results = new List<ValidationResult>();
            var isModelStateValid = Validator.TryValidateObject(categoryDTO, context, results, true);

            Assert.IsTrue(isModelStateValid);
        }

        [TestMethod]
        public void ValidateWorkoutCategoryModel_InvalidCategory_ReturnsFalse()
        {
            var categoryDTO = new CategoryDTO()
            {
                CategoryName = string.Empty
            };

            var context = new System.ComponentModel.DataAnnotations.ValidationContext(categoryDTO, null, null);
            var results = new List<ValidationResult>();
            var isModelStateValid = Validator.TryValidateObject(categoryDTO, context, results, true);

            Assert.IsFalse(isModelStateValid);
        }
    }
}
