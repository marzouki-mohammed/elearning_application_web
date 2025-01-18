using Microsoft.AspNetCore.Mvc;

namespace Elearning_Application_Web.Controllers
{
    public class AuthController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
