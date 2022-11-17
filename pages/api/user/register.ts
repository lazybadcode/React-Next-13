import type { NextApiRequest, NextApiResponse } from "next";
import { findByEmailUser, registerUser } from "../../../services/user.service";

// localhost:4000/api/user/register
export default async function handler( req: NextApiRequest, res: NextApiResponse<any>) {
      const { body: { fullname, email, password, permission }, method } = req;
    
      switch (method) {
        case 'POST':
           //ตรวจสอบอีเมล์ซ้ำ 
          const userExist = await findByEmailUser(email);
          if (userExist !== null) {
            res.status(400).json({message: "มีผู้ใช้งานนี้ในระบบแล้ว"});   
          }  
          const user = await registerUser({fullname, email, password});
          res.status(201).json({
            message: "ลงทะเบียนสมาชิกสำเร็จ",
            data: user
          });


          break
        default:
          res.setHeader('Allow', ['POST'])
          res.status(405).end(`Method ${method} Not Allowed`)
      }
}

