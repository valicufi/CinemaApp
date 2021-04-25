using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.MovieActivities.Any()) return;
            
            var activities = new List<MovieActivity>
            {
                new MovieActivity
                {
                    Title = "We Broke Up",
                    Description = "Lori and Doug break up right before Lori's sister's wedding and decide to pretend they're still together for the weekend as to not disrupt the fun",
                    Genre = "Comedy",
                    Year = 2021,
                    IMDB = 5.4,
                    Duration = 81,
                    Quality = "HD",                    
                },
                new MovieActivity
                {
                    Title = "Raya and the Last Dragon",
                    Description = "Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it’s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people.",
                    Genre = "Animation",
                    Year = 2021,
                    IMDB = 7.4,
                    Duration = 112,
                    Quality = "HD", 
                },
                new MovieActivity
                {
                    Title = "Boys from County Hell",
                    Description = "A crew of hardy road workers, led by a bickering Father and Son, must survive the night when they accidentally awaken an ancient Irish vampire.",
                    Genre = "Horror",
                    Year = 2021,
                    IMDB = 6.5,
                    Duration = 90,
                    Quality = "HD", 
                },
                new MovieActivity
                {
                    Title = "Trigger Point",
                    Description = "Follows Nicolas Shaw, a retired U.S. special operative who becomes part of an elite invisible team that quietly takes out the worst villains around the world.",
                    Genre = "Horror",
                    Year = 2020,
                    IMDB = 8.0,
                    Duration = 82,
                    Quality = "HD",
                },
                new MovieActivity
                {
                    Title = "The Baby Proposal",
                    Description = "Layla's the co-host of a morning show alongside her charming, but sometimes irritating, colleague Derek. Their lives are turned upside down when they're given a baby to take care of together, learning more about each other in the process.",
                    Genre = "Romance",
                    Year = 2019,
                    IMDB = 6.2,
                    Duration = 90,
                    Quality = "HD",
                },
                new MovieActivity
                {
                    Title = "Clapboard Jungle",
                    Description = "Following five years in the life and career of independent filmmaker Justin McConnell, this documentary explores the struggles of financing, attracting the right talent, working with practical effects and selling the finished product in the hope of turning a profit. ",
                    Genre = "Documentary",
                    Year = 2020,
                    IMDB = 5.2,
                    Duration = 98,
                    Quality = "HD",
                },
                new MovieActivity
                {
                    Title = "One Piece",
                    Description = "Years past, the fearsome pirate king Gol D. Roger has been implemented, leaving a huge heap of treasure and also the most famous One Piece behind. Whoever claims the One Piece is likely to be named the new pirate king.",
                    Genre = "Anime",
                    Year = 1999,
                    IMDB = 10,
                    Duration = 25,
                    Quality = "HD",
                },
                new MovieActivity
                {
                    Title = "Naruto Shippuden",
                    Description = "Konoha, the hidden leaf village in the Land of Fire in the Ninja World is attacked by A beast. In response, the leader of Konoha the Hokage, at the moment, seals the fox in your body of the brand new born Naruto Uzumaki, making Naruto a host of the monster",
                    Genre = "Anime",
                    Year = 2002,
                    IMDB = 9.9,
                    Duration = 25,
                    Quality = "HD",
                },
                new MovieActivity
                {
                    Title = "Mortal Kombat",
                    Description = "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe.",
                    Genre = "Fantasy",
                    Year = 2021,
                    IMDB = 6.9,
                    Duration = 110,
                    Quality = "HD",
                },
                new MovieActivity
                {
                    Title = "Nobody",
                    Description = "Hutch Mansell, a suburban dad, overlooked husband, nothing neighbor — a nobody. When two thieves break into his home one night, Hutch's unknown long-simmering rage is ignited and propels him on a brutal path that will uncover dark secrets he fought to leave behind.",
                    Genre = "Crime",
                    Year = 2021,
                    IMDB = 7.5,
                    Duration = 92,
                    Quality = "HD",
                }
            };

            await context.MovieActivities.AddRangeAsync(activities);
            await context.SaveChangesAsync();
        }
    }
}