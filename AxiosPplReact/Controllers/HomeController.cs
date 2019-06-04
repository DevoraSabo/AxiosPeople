using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AxiosPplReact.Data;
using Microsoft.Extensions.Configuration;

namespace AxiosPplReact.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private string _connectionString;

        public HomeController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }


        [Route("person")]
        [HttpGet]
        public Person GetPerson(Person p)
        {
            var repo = new PeopleRepository(_connectionString);
            
            return new Person
            {
                FirstName = p.FirstName,
                LastName = p.LastName,
                Age = p.Age
            };
        }
    }
}