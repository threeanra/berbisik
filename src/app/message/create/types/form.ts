import { z } from "zod";

export const formSchema = z.object({
  name: z.string().optional().default(""),
  message: z
    .string()
    .min(1, {
      message: "Isi pesanmu terlebih dahulu",
    })
    .max(200, {
      message: "Pesan maksimal 200 karakter",
    }),
});

export type FormMessagesSchema = z.infer<typeof formSchema>;
