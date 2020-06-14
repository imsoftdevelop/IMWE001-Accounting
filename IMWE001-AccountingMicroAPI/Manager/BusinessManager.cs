using IMWE001_AccountingMicroAPI.Interfaces;
using IMWE001_AccountingModels.Business;
using IMWE001_AccountingRepository.Repository.Business;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMWE001_AccountingMicroAPI.Manager
{
    public class BusinessManager : IBusinessManager
    {
        public void Dispose()
        {
            GC.SuppressFinalize(this);
        }

        public BusinessProfile getbusinessprofilebyid(string businessid)
        {
            BusinessProfile response = new BusinessProfile();
            using (BusinessProfileRepository BusinessProfileRepositor = new BusinessProfileRepository())
                response = BusinessProfileRepositor.GetDataAll().FirstOrDefault();
            return response;
        }
    }
}
