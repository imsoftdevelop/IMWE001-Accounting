using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMWE001_Accounting.Common
{
    public class Abstract
    {
        public enum ResponseCode : int
        {
            SuccessTransaction = 200,
            NotFoundTransaction = 202,
            ErrorTransaction = 400,
            TimeoutTransaction = 501,
            InternalServerError = 500
        }
    }
}
