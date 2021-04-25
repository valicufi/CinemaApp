using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class MovieActivitiesController : BaseApiController
    {
        private readonly DataContext _context;
        public MovieActivitiesController(DataContext context)
        {
            _context = context;

        }

        [HttpGet]
        public async Task<ActionResult<List<MovieActivity>>> GetMovieActivities(){
            return await _context.MovieActivities.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<MovieActivity>> GetMovieActivity(Guid id){
            return await _context.MovieActivities.FindAsync(id);
        }


    }
}