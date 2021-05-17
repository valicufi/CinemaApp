using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.MovieActivities
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
               var mActivity = await _context.MovieActivities.FindAsync(request.Id);
               _context.Remove(mActivity);
               await _context.SaveChangesAsync();
               return Unit.Value;
            }
        }
    }
}