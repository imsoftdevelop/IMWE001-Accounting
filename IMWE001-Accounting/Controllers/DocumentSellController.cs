using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using IMWE001_Accounting.Models;

namespace IMWE001_Accounting.Controllers
{
    public class DocumentSellController : Controller
    {
        public IActionResult Quotation()
        {
            return View();
        }

        public IActionResult QuotationAdd()
        {
            return View();
        }

        public IActionResult BillingNote()
        {
            return View();
        }

        public IActionResult Invoice()
        {
            return View();
        }

        public IActionResult Receipt()
        {
            return View();
        }

        public IActionResult CashSale()
        {
            return View();
        }

        public IActionResult CreditNote()
        {
            return View();
        }

        public IActionResult DebitNote()
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
