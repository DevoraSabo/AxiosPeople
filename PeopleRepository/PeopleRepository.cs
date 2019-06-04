using PeopleRepository;
using System;
using System.Collections.Generic;
using System.Text;

namespace AxiosPplReact.Data
{
    public class PeopleRepository
    {
        private readonly string _connectionString;

        public PeopleRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void Add(Person p)
        {
            using (var context = new PeopleContext(_connectionString))
            {
                context.People.Add(p);
                context.SaveChanges();
            }
        }

        public IEnumerable<Person> GetPeople ()
        {
            using (var context = new PeopleContext(_connectionString))
            {
                return context.People;
            }
        }

        //public ShortenedUrl GetByOriginalUrl(string originalUrl)
        //{
        //    using (var context = new UrlShortenerContext(_connectionString))
        //    {
        //        return context.ShortenedUrls
        //            .FirstOrDefault(u => u.OriginalUrl == originalUrl && u.UserId == null);
        //    }
        //}

        //public void AddView(int urlId)
        //{
        //    using (var context = new UrlShortenerContext(_connectionString))
        //    {
        //        context.Database.ExecuteSqlCommand("UPDATE ShortenedUrls SET Views = Views + 1 WHERE Id = @id",
        //            new SqlParameter("@id", urlId));
        //    }
        //}
    }
}
