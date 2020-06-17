using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace IMWE001_Accounting.Common
{
    public class ApiConfigureServices
    {
        public static IConfiguration ConfigureAppSetting()
        {
            var configurationBuilder = new ConfigurationBuilder();
            var path = Path.Combine(Directory.GetCurrentDirectory(), "appsettings.json");
            configurationBuilder.AddJsonFile(path, false);
            return configurationBuilder.Build();
        }
    }
}
