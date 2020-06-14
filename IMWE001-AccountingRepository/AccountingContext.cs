using IMWE001_AccountingModels.Business;
using Microsoft.EntityFrameworkCore;
using System;

namespace IMWE001_AccountingRepository
{
    public class AccountingContext : DbContext
    {
        public readonly string _connectionString = string.Empty;

        public string ConnectionString
        {
            get => _connectionString;
        }

        public AccountingContext()
        {
            Database.SetCommandTimeout(1500000);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //optionsBuilder.UseSqlServer(_connectionString);
            optionsBuilder.UseNpgsql("User ID =risk;Password=p@ssw0rd;Server=35.240.164.180;Port=5432;Database=postaccount_uat;Integrated Security=true;Pooling=true;");
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<BusinessProfile>(entity =>
            {
                entity.HasKey(e => e.UID);
            });

        }
    }

}
