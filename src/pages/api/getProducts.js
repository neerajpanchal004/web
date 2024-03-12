import { Menwear, Mobiles, Shoes, Sports } from "./data";


export default async function handler(req, res) {
    

    if (req.method  == "GET") {
        let data;
        if(req.query.category=="mobiles"){
           data = Mobiles 
        }

        if(req.query.category=="shoes"){
            data = Shoes 
         }

         if(req.query.category=="sports"){
            data = Sports 
         }

         if(req.query.category=="menwear"){
            data = Menwear
         }
      res.status(200).json(data);
    }
      res.status(500).json({ data: "Method Not Allowed" });
  }