using API.Data;
using Microsoft.EntityFrameworkCore;

IConfiguration configuration = new ConfigurationBuilder()
                            .AddJsonFile("appsettings.json")
                            .Build();
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<StoreContext>(opt=>{
    opt.UseSqlite(configuration.GetConnectionString("DefaultConnection"));
});
var app = builder.Build();

using var scope = app.Services.CreateScope();
var context = scope.ServiceProvider.GetRequiredService<StoreContext>();

//logger

var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();
try{
    context.Database.Migrate();
    DbInitializer.Initialize(context);
}
catch(Exception ex){
logger.LogError(ex,"Problem migrate the data");
} 
    
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI();
}

//app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();
 
app.Run();
