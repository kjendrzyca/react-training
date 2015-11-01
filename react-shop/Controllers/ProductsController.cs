using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace react_shop.Controllers
{
    public class ProductsController : ApiController
    {
        dynamic list = new[]{
            new { id = 1, name = "asus laptop", shortDescription = "super cool asus laptop, screen made from dragon tears", description= "lipsum", price = 2000 }
        };

        // GET api/products
        public IHttpActionResult Get()
        {
            
            return Ok(list);
        }

        //{ id: 2, name: 'macbook', shortDescription: 'overpriced but cool laptop for hipsters', description: lipsum, price: 7200},
        //        { id: 3, name: 'samsung tv', shordDescription: '42" samsung tv with wi-fi and free beers', description: lipsum, price: 1500},
        //        { id: 4, name: 'das keyboard', shortDescription: 'just a normal keyboard with black keys', description: lipsum, price: 800},
        //        { id: 5, name: 'earphones', shortDescription: 'soundproof earphones + bonus: celine dion cd with her greatest hits', description: lipsum, price: 50}

        // GET api/prodcuts/5
        public IHttpActionResult Get(int id)
        {
            return Ok(list[id - 1]);
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
