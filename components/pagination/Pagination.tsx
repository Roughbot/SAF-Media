"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "../ui/button";

const Pagination = ({ count }: { count: number }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page: any = searchParams.get("page") || 1;
  const params = new URLSearchParams(searchParams);

  const item_per_page = 6; //also change in parent page

  const hasPrevious = item_per_page * (parseInt(page) - 1) > 0;
  const hasNext = item_per_page * (parseInt(page) - 1) + item_per_page < count;

  const handleChangePage = (direction: string) => {
    const newPage =
      direction === "next" ? parseInt(page) + 1 : parseInt(page) - 1;
    params.set("page", newPage.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-row justify-between pt-5">
      <Button
        disabled={!hasPrevious}
        onClick={() => {
          handleChangePage("previous");
        }}
        variant="secondary"
      >
        Previous
      </Button>
      <Button
        disabled={!hasNext}
        onClick={() => {
          handleChangePage("next");
        }}
        variant="secondary"
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
