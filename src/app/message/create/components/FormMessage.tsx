"use client";
import React, { useState } from "react";
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
import { Info, Loader2, Send } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useMutation } from "@tanstack/react-query";
import { postMessage } from "@/app/services/messageService";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/app/hooks/use-toast";

export default function FormMessages() {
  const CHARACTER_LIMIT = 200;
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const form = useForm<FormMessagesSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      message: "",
    },
  });

  const { handleSubmit, control, reset } = form;

  const { mutate: sendMessage, isPending } = useMutation({
    mutationFn: async ({
      name,
      message,
    }: {
      name: string;
      message: string;
    }) => {
      await postMessage({
        name,
        message,
      });
    },
    onSuccess: () => {
      toast({
        description: "Pesanmu berhasil terkirim.",
      });
      reset();
      form.setValue("name", "");
      form.setValue("message", "");
      setIsDialogOpen(false);
    },
    onError: () => {
      setIsDialogOpen(false);
    },
  });

  const onSubmit = (values: FormMessagesSchema) => {
    sendMessage({
      name: values.name.trim() || "anonim",
      message: values.message,
    });
  };

  const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setIsDialogOpen(true);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        onKeyDown={handleEnterKeyPress}
        className="space-y-5 w-full"
      >
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
              Gunakan dengan bijak tanpa unsur menghina, sara, maupun hal yang
              merugikan orang lain.
            </AlertDescription>
          </Alert>
        </div>

        <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <AlertDialogTrigger asChild>
            <Button disabled={isPending}>
              {isPending ? (
                <>
                  <Loader2 className="animate-spin" /> Tunggu
                </>
              ) : (
                <>
                  <Send /> Kirim
                </>
              )}
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="w-11/12 rounded-lg md:w-full">
            <AlertDialogHeader>
              <AlertDialogTitle>Konfirmasi</AlertDialogTitle>
              <AlertDialogDescription>
                Apakah kamu yakin ingin mengirim pesan ini?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Batal</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => {
                  handleSubmit(onSubmit)();
                  setIsDialogOpen(false);
                }}
              >
                Kirim
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </form>
    </Form>
  );
}
