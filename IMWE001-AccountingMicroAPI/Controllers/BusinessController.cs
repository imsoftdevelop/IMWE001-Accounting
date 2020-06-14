using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IMWE001_AccountingMicroAPI.Manager;
using Microsoft.AspNetCore.Mvc;

namespace IMWE001_AccountingMicroAPI.Controllers
{
    [Route("api/v1/business")]
    [ApiController]
    public class BusinessController : ManagerBaseController
    {
        // GET api/values
        [HttpGet("getprofile/{businessid}")]
        public IActionResult getprofilebusinessbyid(string businessid)
        { return ApiSync(() => Ok(base.IBusinessInterface.getbusinessprofilebyid(businessid))); }

    }
}
