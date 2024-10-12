import {
  MedusaRequest,
  MedusaResponse,
  ProductService,
} from "@medusajs/medusa";

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
  res.status(200);
  console.log("Body", req.body);
  console.log("Raw Body:", req.rawBody);
};
