using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Swashbuckle.AspNetCore.Swagger;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace IMWE001_AccountingMicroAPI.Swagger
{
    public class SwaggerHeaderFilter : IOperationFilter
    {
      

        public void Apply(Operation operation, OperationFilterContext context)
        {
            operation.Parameters.Add(new NonBodyParameter
            {
                Name = "Weacct-Apim-Subscription-Key",
                In = "header",
                Type = "string",
                Required = true // set to false if this is optional
            });
        }
    }
}
