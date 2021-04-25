using System;

namespace Domain
{
    public class MovieActivity
    {
        public Guid Id { get; set; }
        public string Title { get; set; }

        public string Description { get; set; }

        public string Genre { get; set; }

        public int Year  { get; set; }

        public double IMDB  { get; set; }

        public double Duration { get; set; }

        public string Quality { get; set; }



    }
}