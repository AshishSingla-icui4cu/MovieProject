using MovieProject.Model;
using System.Collections.Generic;

namespace MovieProject.ClientViews
{
    public class MovieView
    {
        public IEnumerable<Movie> Movies { get; set; }
        public IEnumerable<string> Locations { get; set; }
        public IEnumerable<string> Languages { get; set; }
    }
}
