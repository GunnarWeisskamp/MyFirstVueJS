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
    public class DoctorController : ControllerBase
    {
        private static List<DoctorModel> doctors;
        public DoctorController()
        {
            doctors = new List<DoctorModel>()
            {
                new DoctorModel { Id = 1, FullName = "Fred",
                                   Age = 43, TypeOfDoctor = "Heart surgeon", Gender = true },
                new DoctorModel { Id = 2, FullName = "Mary",
                                   Age = 32, TypeOfDoctor = "Brain surgeon", Gender = false }
            };

        }
        [HttpGet]
        [Route("GetAllDoctors")]
        public IActionResult GetAllDoctors()
        {

            IActionResult ret;
            try
            {
                ret = StatusCode(StatusCodes.Status200OK, doctors.ToList());
            }
            catch (Exception ex)
            {
                ret = StatusCode(StatusCodes.Status500InternalServerError, "An error has happened. Please contact admin stating the following: " + ex.Message);
            }
            return ret;
        }

        [HttpPost]
        [Route("InsertDoctor")]
        public async Task<IActionResult> InsertDoctor(DoctorModel newDoctor)
        {

            IActionResult ret;
            try
            {
                int newID = doctors.Max(i => i.Id);
                newDoctor.Id = newID + 1;
                doctors.Add(newDoctor);
                ret = StatusCode(StatusCodes.Status200OK, "Insert Done");
            }
            catch (Exception ex)
            {
                ret = StatusCode(StatusCodes.Status500InternalServerError, "An error has happened. Please contact admin stating the following: " + ex.Message);
            }
            return ret;
        }

        [HttpPost]
        [Route("InsertDoctorTwo")]
        public async Task<IActionResult> InsertDoctorTwo(string a)
        {

            IActionResult ret;
            try
            {

                ret = StatusCode(StatusCodes.Status200OK, "Insert Done");
            }
            catch (Exception ex)
            {
                ret = StatusCode(StatusCodes.Status500InternalServerError, "An error has happened. Please contact admin stating the following: " + ex.Message);
            }
            return ret;
        }
    }
}