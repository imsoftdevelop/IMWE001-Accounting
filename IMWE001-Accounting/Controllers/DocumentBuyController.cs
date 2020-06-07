using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using IMWE001_Accounting.Models;

namespace IMWE001_Accounting.Controllers
{
    public class DocumentBuyController : Controller
    {
        public IActionResult PurchaseOrder()
        {
            return View();
        }

        public IActionResult PurchaseOrderAdd()
        {
            return View();
        }

        public IActionResult ReceivingInventory()
        {
            return View();
        }

        public IActionResult ReceivingInventoryAdd()
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
