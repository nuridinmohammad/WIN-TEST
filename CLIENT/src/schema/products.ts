import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "Required!"),
  description: z.string().min(1, "Required!"),
  price: z.number({ message: "Required!" }),
});
