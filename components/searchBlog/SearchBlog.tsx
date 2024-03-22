"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const SearchBlog = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((e: any) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", "1");

    if (e.target.value) {
      e.target.value.length > 2 && params.set("search", e.target.value);
    } else {
      params.delete("search");
    }

    replace(`${pathname}?${params}`);
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search Blog"
        onChange={handleSearch}
        className="shadow-xl focus:outline-none text-sm rounded-xl bg-slate-500 text-white p-3"
      />
    </div>
  );
};

export default SearchBlog;
