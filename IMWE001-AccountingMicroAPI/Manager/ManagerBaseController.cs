using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Web;
using Microsoft.AspNetCore.Http;
using System.Web.Http;
using Newtonsoft.Json;
using IMWE001_AccountingMicroAPI.Interfaces;

namespace IMWE001_AccountingMicroAPI.Manager
{
    public class ManagerBaseController : ControllerBase
    {
        public class UserValidationException : System.Exception { public UserValidationException(string Code, string Message) : base(Message) { ResCode = Code; } public string ResCode { get; set; } }
        public class RequestTimeoutException : System.Exception { public RequestTimeoutException(string Code, string Message) : base(Message) { ResCode = Code; } public string ResCode { get; set; } }

        protected IBusinessManager IBusinessInterface;


        private string strToken = "Weacct-Apim-Subscription-Key";
        public string Subscriptkey
        {
            get
            {
                if (string.IsNullOrWhiteSpace(Request.Headers[strToken]))
                    return string.Empty;

                return Request.Headers[strToken];
            }
        }

        protected IActionResult ApiSync(Func<IActionResult> work)
        {
            try
            {

                if (string.IsNullOrEmpty(Subscriptkey))
                    throw new Exception("please input tokenid.");
                    
                if (IBusinessInterface == null)
                    IBusinessInterface = new BusinessManager();

                return work();
            }
            catch (UserValidationException uex)
            {
                var msg = JsonConvert.SerializeObject(new { ResponseCode = uex.ResCode, ResponseMessage = uex.Message });
                return this.NotFound(msg);
            }
            catch (Exception ex)
            {
                var msg = JsonConvert.SerializeObject(new { ResponseCode = "999", ResponseMessage = ex.Message });
                return this.NotFound(msg);
            }
        }
    }
}
