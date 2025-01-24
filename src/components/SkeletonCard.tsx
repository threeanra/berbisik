import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "./ui/card";
export function SkeletonCard() {
  return (
    <Card className="w-full md:w-[330px] h-[250px]">
      <CardContent className="mt-8 flex flex-col gap-5 px-6">
        <div className="w-full h-[150px] flex-col gap-3 overflow-hidden items-center flex justify-center">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[250px]" />
        </div>
        <Skeleton className="self-end h-4 w-[80px]" />
      </CardContent>
    </Card>
  );
}
