using Microsoft.AspNetCore.Mvc;
using MovieProject.Service;

namespace MovieProject.Controllers
{
    [Route("api/[controller]")]
    public class MovieController : Controller
    {
        private readonly IMovieRepository movieRepository = null;

        public MovieController(IMovieRepository repository) {
            movieRepository = repository;
        }

        [HttpGet("[action]")]
        public ActionResult GetMovies()
        {
            return Json(movieRepository.Movies);
        }
    }
}
