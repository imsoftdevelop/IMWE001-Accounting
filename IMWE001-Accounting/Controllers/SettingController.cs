using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using IMWE001_Accounting.Models;
using System.Net;
using System.IO;
using Newtonsoft.Json;
using IMWE001_Accounting.Common;
using IMWE001_AccountingModels.Business;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;

namespace IMWE001_Accounting.Controllers
{
    [Produces("application/json")]
    public class SettingController : Controller
    {
        protected IConfiguration _config;
        public SettingController()
        {
            _config = ApiConfigureServices.ConfigureAppSetting();
        }

        public IActionResult CompanyProfile()
        {
            return View();
        }

        public IActionResult UserProfile()
        {
            return View();
        }

        public IActionResult DocumentRuning()
        {
            return View();
        }


        public IActionResult DocumentRemark()
        {
            return View();
        }

        public IActionResult BankAccount()
        {
            return View();
        }
        public IActionResult ManageUser()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        public IActionResult GetBusinessProfile(string key)
        {
            try
            {
                string pathlink = _config["Micro-API_WeAccount:Path"];
                BusinessProfile responseval = new BusinessProfile();
                WebRequest tRequest = WebRequest.Create(pathlink + "business/getprofile/d976337a-ae44-11ea-b90b-42010a940007");
                tRequest.Method = "get";
                tRequest.ContentType = "application/json";
                tRequest.Headers.Add("Weacct-Apim-Subscription-Key", "dcmGV25hZFzc3VudDM6cGzdCdvQ=");
                tRequest.Credentials = CredentialCache.DefaultCredentials;

                // Get the response.  
                WebResponse responseapi = tRequest.GetResponse();

                using (Stream dataStream = responseapi.GetResponseStream())
                {
                    StreamReader tReader = new StreamReader(dataStream);
                    // Read the content.  
                    String sResponseFromServer = tReader.ReadToEnd();
                    responseval = JsonConvert.DeserializeObject<BusinessProfile>(sResponseFromServer);
                }

                return WriteJson(new
                {
                    responsecode = ((int)Common.Abstract.ResponseCode.SuccessTransaction).ToString(),
                    responsedata = responseval
                });

            }
            catch (Exception ex)
            {
                return WriteJson(new { responsecode = ((int)Common.Abstract.ResponseCode.ErrorTransaction).ToString(), errormessage = ex.Message });
            }
        }

        [NonAction]
        public virtual JsonResult WriteJson(object data)
        {
            //HttpResponse response = ControllerContext.HttpContext.Response;

            //response.ContentType = "application/json";

            //using (JsonTextWriter writer = new JsonTextWriter(response.) { Formatting = Formatting.Indented })
            //{

            //    JsonSerializer serializer = JsonSerializer.Create(sett);

            //    serializer.Serialize(writer, data);

            //    writer.Flush();
            //}

            JsonSerializerSettings sett = new JsonSerializerSettings();
            sett.Converters.Add(new UtcDateTimeConverter());
            return new JsonResult(data, sett);
        }

    }
}
