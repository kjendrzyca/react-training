using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(react_shop.Startup))]

namespace react_shop
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
