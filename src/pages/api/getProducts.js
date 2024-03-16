import { Menwear, Mobiles, Shoes, Sports } from "./data";


export default async function handler(req, res) {
    

    if (req.method  == "GET") {
        let data;
        const { category } = req.query;
        if(category=="mobiles"){
           data = Mobiles 
        }

        if(category=="shoes"){
            data = Shoes 
         }

         if(category=="sports"){
            data = Sports 
         }

         if(category=="menwear"){
            data = Menwear
         }
      res.status(200).json(data);
    }
      res.status(500).json({ data: "Method Not Allowed" });
  }