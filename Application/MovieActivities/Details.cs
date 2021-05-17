using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.MovieActivities
{
    public class Details
    {
        public class Query : IRequest<MovieActivity>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, MovieActivity>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<MovieActivity> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.MovieActivities.FindAsync(request.Id);
            }
        }

    }
}