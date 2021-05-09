using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APICall.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace APICall.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private  List<StudentModel> students;
        public StudentController()
        {
 students = new List<StudentModel>()
            {
                new StudentModel { Id = 1, FullName = "Fred",
                                   Age = 8, Course = "Maths", Gender = true },
                new StudentModel { Id = 1, FullName = "Fred",
                                   Age = 8, Course = "Maths", Gender = true }
            };
            
        }
        [HttpGet]
        [Route("GetAllStudents")]
        public IActionResult GetAllStudents()
        {
           
            IActionResult ret;
            try
            {
                ret = StatusCode(StatusCodes.Status200OK, students.ToList());
            }
            catch (Exception ex)
            {
                ret = StatusCode(StatusCodes.Status500InternalServerError, "An error has happened. Please contact admin stating the following: " + ex.Message);
            }
            return ret;
        }
    }
}