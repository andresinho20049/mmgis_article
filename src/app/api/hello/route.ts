import { NextApiRequest, NextApiResponse } from "next";

export async function GET(request: NextApiRequest, response: NextApiResponse){
  return response.send({msg: 'success', status: 200});
}
