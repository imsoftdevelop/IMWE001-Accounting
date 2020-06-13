using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;

namespace IMWE001_AccountingMicroAPI.Abstract
{
    //public class NotFoundTextPlainActionResult : IActionResult
    //{
    //    public NotFoundTextPlainActionResult(string message, HttpRequestMessage request, HttpStatusCode statuscode)
    //    {
    //        if (message == null)
    //        {
    //            throw new ArgumentNullException("message");
    //        }

    //        if (request == null)
    //        {
    //            throw new ArgumentNullException("request");
    //        }

    //        Message = message;
    //        Request = request;
    //        StatusCode = statuscode;
    //    }

    //    public string Message { get; private set; }

    //    public HttpStatusCode StatusCode { get; private set; }

    //    public HttpRequestMessage Request { get; private set; }

    //    public Task<HttpResponseMessage> ExecuteAsync(CancellationToken cancellationToken)
    //    {
    //        return Task.FromResult(Execute());
    //    }

    //    public HttpResponseMessage Execute()
    //    {
    //        HttpResponseMessage response = new HttpResponseMessage(StatusCode);
    //        response.Content = new StringContent(Message); // Put the message in the response body (text/plain content).
    //        response.RequestMessage = Request;
    //        return response;
    //    }
    //}

    //public static class ApiControllerExtensions
    //{
    //    public static NotFoundTextPlainActionResult NotFound(this ControllerBase controller, string message)
    //    {
    //        return new NotFoundTextPlainActionResult(message, controller.Request, HttpStatusCode.NotFound);
    //    }

    //    public static NotFoundTextPlainActionResult InternalServerError(this ControllerBase controller, string message)
    //    {
    //        return new NotFoundTextPlainActionResult(message, controller.Request, HttpStatusCode.InternalServerError);
    //    }

    //    public static NotFoundTextPlainActionResult RequestTimeout(this ControllerBase controller, string message)
    //    {
    //        return new NotFoundTextPlainActionResult(message, controller.Request, HttpStatusCode.RequestTimeout);
    //    }
    //}
}
