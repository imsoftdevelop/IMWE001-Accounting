using IMWE001_AccountingModels.Business;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMWE001_AccountingMicroAPI.Interfaces
{
    public interface IBusinessManager : IDisposable
    {
        BusinessProfile getbusinessprofilebyid(string businessid);
    }
}
