import { SignupDetails } from "./data";
export default async function handler(req, res) {
    if(req.method === 'POST'){
        const data = req.body;
        SignupDetails.push({...data});
        console.log('Sign Up Data')
        
        res.status(200).json({message: "This is a GET request"})
    } else res.status(500).json({error: "Invalid method!"});
}



// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { email ,password} = req.body;

//     // Send confirmation email
//     const transporter = nodemailer.createTransport({
//       // Configure your email provider here
//       // For development, you can use services like ethereal.email
//     });

//     try {
//       await transporter.sendMail({
//         from: 'kelate5194@cmheia.com',
//         to: email,
//         subject: 'Thank you for signing up',
//         text: 'Thank you for signing up!',
//       });
//       res.status(200).json({ message: 'Thank you for signing up! Please check your email for confirmation.' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'An error occurred while sending the confirmation email.' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }
