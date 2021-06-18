using MovieProject.Model;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;

namespace MovieProject.Service
{
    public class MovieRepository : IMovieRepository
    {
        public MovieRepository() {
            Movies = MoviesSeedData();
        }

        private List<Movie> MoviesSeedData()
        {
            StreamReader reader = new StreamReader(Path.GetFullPath(@"App_Data\movies.json"));
            string moviesData = reader.ReadToEnd();

            MovieCollection movieCollection = JsonConvert.DeserializeObject<MovieCollection>(moviesData);
            return movieCollection.Movies;
        }

        public List<Movie> Movies { get; }
    }
}
