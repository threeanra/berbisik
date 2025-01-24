"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Info } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postMessage } from "@/app/services/messageService";
import { useToast } from "@/app/hooks/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import { useRouter } from "next/navigation";
import { ConfirmationDialog } from "@/components/ConfirmationDialog";

export default function FormMessages() {
  const CHARACTER_LIMIT = 300;
  const queryClient = useQueryClient();
  const route = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();
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
      const data = await postMessage({
        name,
        message,
      });
      return data;
    },
    onSuccess: (data) => {
      toast({
        title: "Berhasil",
        description: "Pesanmu berhasil terkirim.",
        action: (
          <ToastAction
            className="h-9 px-4 py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90"
            onClick={() => route.push(`/message/detail/${data[0].id}`)}
            altText="Lihat"
          >
            Lihat
          </ToastAction>
        ),
      });
      reset();
      form.setValue("name", "");
      form.setValue("message", "");
      setIsDialogOpen(false);
      queryClient.invalidateQueries({ queryKey: ["latestMessage"] });
      queryClient.invalidateQueries({ queryKey: ["allMessages"] });
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

  const handleKey = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setIsDialogOpen(true);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        onKeyDown={handleKey}
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

        <ConfirmationDialog
          isOpen={isDialogOpen}
          setIsOpen={setIsDialogOpen}
          title="Konfirmasi"
          description="Apakah kamu yakin ingin mengirim pesan ini?"
          isPending={isPending}
          onConfirm={handleSubmit(onSubmit)}
        />
      </form>
    </Form>
  );
}
