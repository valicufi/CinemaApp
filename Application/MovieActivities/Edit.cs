using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.MovieActivities
{
    public class Edit
    {
        public class Command : IRequest
        {
            public MovieActivity movieActivity { get; set; }
        }


        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var mActivity = await _context.MovieActivities.FindAsync(request.movieActivity.Id);
                
                _mapper.Map(request.movieActivity, mActivity);

                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}