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
import { Loader2, Send } from "lucide-react";
import { Button } from "./ui/button";

type ConfirmationDialogProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  isPending: boolean;
  onConfirm: () => void;
  title?: string;
  description?: string;
};

export const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  isOpen,
  setIsOpen,
  isPending,
  onConfirm,
  title,
  description,
}) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
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
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Batal</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              onConfirm();
              setIsOpen(false);
            }}
          >
            Kirim
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
