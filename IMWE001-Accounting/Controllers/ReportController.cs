using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using IMWE001_Accounting.Models;

namespace IMWE001_Accounting.Controllers
{
    public class ReportController : Controller
    {
        public IActionResult Reportsales()
        {
            return View();
        }

        public IActionResult Reportsalebycustomer()
        {
            return View();
        }

        public IActionResult Reportbillingnote()
        {
            return View();
        }

        public IActionResult Reportreceivables()
        {
            return View();
        }

        public IActionResult Reportpurchaseorder()
        {
            return View();
        }


        public IActionResult Reportreceivinginventory()
        {
            return View();
        }

        public IActionResult Reportexpense()
        {
            return View();
        }
        public IActionResult Reportsalestax()
        {
            return View();
        }

        public IActionResult Reportpurchasevat()
        {
            return View();
        }

        public IActionResult Reportwithholdingtax()
        {
            return View();
        }

        public IActionResult Reportaccountreceivable()
        {
            return View();
        }

        public IActionResult Reportaccountpayable()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
