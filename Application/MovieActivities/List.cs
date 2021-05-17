using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.MovieActivities
{
    public class List
    {
        public class Query : IRequest<List<MovieActivity>> { }


        public class Handler : IRequestHandler<Query, List<MovieActivity>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<MovieActivity>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.MovieActivities.ToListAsync();
            }
        }
    }
}