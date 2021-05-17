using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.MovieActivities;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class MovieActivitiesController : BaseApiController
    {

        [HttpGet]
        public async Task<ActionResult<List<MovieActivity>>> GetMovieActivities()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<MovieActivity>> GetMovieActivity(Guid id)
        {
            return await Mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost]
        public async Task<IActionResult> CreateMovieActivity([FromBody]MovieActivity movieActivity)
        {
            return Ok(await Mediator.Send(new Create.Command {movieActivity = movieActivity} ));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditMovieActivity(Guid id, MovieActivity movieActivity)
        {
            movieActivity.Id = id;
            return Ok(await Mediator.Send(new Edit.Command {movieActivity = movieActivity}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMovieActivity(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command{Id = id}));
        }

    }
}