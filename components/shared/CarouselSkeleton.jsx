import { Skeleton } from "../ui/skeleton";

export default function CarouselSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-14 main-container max-screen-width">
      <Skeleton className="w-full h-[350px] rounded-xl bg-darkBlue" />
      <Skeleton className="w-full h-[350px] rounded-xl bg-darkBlue hidden md:block" />
      <Skeleton className="w-full h-[350px] rounded-xl bg-darkBlue hidden lg:block" />
    </div>
  );
}
