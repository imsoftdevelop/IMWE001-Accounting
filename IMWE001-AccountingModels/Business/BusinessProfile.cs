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
        public string Address { get; set; }
        public string TaxID { get; set; }
        public string BranchType { get; set; }
        public string OfficePhone { get; set; }
        public string MobilePhone { get; set; }
        public string Fax { get; set; }
        public string WebsiteURL{ get; set; }
        public string LogoPath { get; set; }
        public Guid? ParentUID { get; set; }
        public string BranchCode { get; set; }
        public string BranchName { get; set; }
        public string IsRegisterTax { get; set; }
        public string ThumnailLogo { get; set; }
        public DateTime? CreateDate { get; set; }
        public string CreateBy { get; set; }
        public DateTime? UpdateDate { get; set; }
        public string UpdateBy { get; set; }
    }
}
