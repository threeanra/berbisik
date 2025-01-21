"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormMessagesSchema, formSchema } from "../types/form";
import { Textarea } from "@/components/ui/textarea";
import { Info, Send } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function FormMessages() {
  const CHARACTER_LIMIT = 200;
  const form = useForm<FormMessagesSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      message: "",
    },
  });

  const { handleSubmit, control, reset } = form;

  const onSubmit = (values: FormMessagesSchema) => {
    console.log(values);
    reset();
    form.setValue("name", "");
    form.setValue("message", "");
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 w-full">
        <FormField
          control={control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama (Opsional)</FormLabel>
              <FormControl>
                <Input placeholder="Nama" {...field} />
              </FormControl>
              <FormDescription className="font-light">
                Nama ini akan muncul sebagai pengirim pesan.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="message"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel>Pesan</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tulis pesanmu"
                  {...field}
                  maxLength={CHARACTER_LIMIT}
                  className=" h-60"
                />
              </FormControl>
              <span className="absolute bottom-2 right-4 text-sm text-gray-500">
                {CHARACTER_LIMIT - (field.value?.length ?? 0)}
              </span>
              <FormMessage className="absolute" />
            </FormItem>
          )}
        />
        <div className="pt-5">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Catatan</AlertTitle>
            <AlertDescription>
              Gunakanlah dengan bijak tanpa unsur menghina, sara, maupun hal
              yang merugikan orang lain.
            </AlertDescription>
          </Alert>
        </div>

        <Button type="submit">
          <Send />
          Kirim
        </Button>
      </form>
    </Form>
  );
}
