using Newtonsoft.Json;
using System.Collections.Generic;

namespace MovieProject.Model
{
    public class Movie
    {
        [JsonProperty("Id")]
        public int Id { get; set; }
        [JsonProperty("Language")]
        public string Language { get; set; }
        [JsonProperty("Location")]
        public string Location { get; set; }
        [JsonProperty("Plot")]
        public string Plot { get; set; }
        [JsonProperty("Poster")]
        public string Poster { get; set; }
        [JsonProperty("SoundEffects")]
        public List<string> SoundEffects { get; set; }
        [JsonProperty("Stills")]
        public List<string> Stills { get; set; }
        [JsonProperty("Title")]
        public string Title { get; set; }
        [JsonProperty("imdbID")]
        public string ImdbID { get; set; }
        [JsonProperty("listingType")]
        public string ListingType { get; set; }
        [JsonProperty("imdbRating")]
        public string ImdbRating { get; set; }
    }
}
