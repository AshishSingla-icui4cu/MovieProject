using MovieProject.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieProject.Service
{
    public interface IMovieRepository
    {
        List<Movie> Movies { get; }
    }
}
