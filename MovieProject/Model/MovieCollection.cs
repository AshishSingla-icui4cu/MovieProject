using Newtonsoft.Json;
using System.Collections.Generic;

namespace MovieProject.Model
{
    public class MovieCollection
    {
        [JsonProperty("movies")]
        public List<Movie> Movies { get; set; }
    }
}
