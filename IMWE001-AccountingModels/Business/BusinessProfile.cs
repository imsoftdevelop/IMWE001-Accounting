using System;
using System.Collections.Generic;
using System.Text;

namespace IMWE001_AccountingModels.Business
{
   public  class BusinessProfile
    {
       public  Guid UID { get; set; }
        public string UserType { get; set; }
        public string BusinessName { get; set; }
    }
}
