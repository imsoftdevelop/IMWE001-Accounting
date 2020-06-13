using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMWE001_AccountingMicroAPI.Manager
{
    public class ErrorMessage
    {
        public Exception except { get; set; }

        public string[] Messages { get; set; }

        public override string ToString()
        {
            return string.Join(",", Messages);
        }
    }
}
