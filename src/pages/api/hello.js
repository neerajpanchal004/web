export default async function handler(req, res) {

    if (req.method  !== "POST") {
      res.status(200).json({text:'hello'});
    }
      res.status(500).json({ data: "Method Not Allowed" });
  }