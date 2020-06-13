using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Web;
using Microsoft.AspNetCore.Http;
using System.Web.Http;
using Newtonsoft.Json;

namespace IMWE001_AccountingMicroAPI.Manager
{
    public class ManagerBaseController : ControllerBase
    {
        public class UserValidationException : System.Exception { public UserValidationException(string Code, string Message) : base(Message) { ResCode = Code; } public string ResCode { get; set; } }
        public class RequestTimeoutException : System.Exception { public RequestTimeoutException(string Code, string Message) : base(Message) { ResCode = Code; } public string ResCode { get; set; } }

        protected IActionResult ApiSync(Func<IActionResult> work)
        {
            try
            {
                return work();
            }
            catch (UserValidationException uex)
            {
                var msg = JsonConvert.SerializeObject(new { ResponseCode = uex.ResCode, ResponseMessage = uex.Message });
                return this.NotFound(msg);
            }
        }
    }
}
