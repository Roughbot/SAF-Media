import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { cn } from "@/utils/cn";
import BlogPostForm from "../blogPostForm/BlogPostForm";
import { fetchBlogPostBySlug } from "@/utils/actions/blogPost.action";

export function UpdateBlog(slug: any) {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary" size="sm" className="neo-btn">
          Update Blog
        </Button>
      </DialogTrigger>
      <DialogContent className=" max-h-screen sm:max-w-[1100px] mb-8">
        <DialogHeader>
          <DialogTitle>Update Blog</DialogTitle>
        </DialogHeader>
        <div className="object-cover overflow-y-auto no-scrollbar pb-8 max-h-screen">
          <UpdateForm slug={slug} />
        </div>
      </DialogContent>
    </Dialog>
  );
}

function UpdateForm({
  className,
  slug,
}: React.ComponentProps<"form"> & { slug: any }) {
  const [existingPost, setExistingPost] = React.useState({});

  React.useEffect(() => {
    fetchBlogPostBySlug(slug.post)
      .then((response) => {
        setExistingPost(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [slug]);

  return (
    <div className={cn("", className)}>
      {existingPost && <BlogPostForm existingPost={existingPost} />}
    </div>
  );
}
