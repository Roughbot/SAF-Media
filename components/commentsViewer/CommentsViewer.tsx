import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Label } from "@/components/ui/label";
import { cn } from "@/utils/cn";
import { deleteComment, getComments } from "@/utils/actions/comments.action";

export function ManageComment({ slug }: any) {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary" size="sm" className="btn-back-pink">
          Comment
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Manage Comment</DialogTitle>
        </DialogHeader>
        <ProfileForm slug={slug} />
      </DialogContent>
    </Dialog>
  );
}

function ProfileForm({
  className,
  slug,
}: React.ComponentProps<"form"> & { slug: any }) {
  const [comments, setComments] = React.useState([]);

  React.useEffect(() => {
    getComments(slug)
      .then((response) => {
        setComments(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [slug]);

  const handleDeleteComment = (id: string) => {
    deleteComment(id).then(() => {
      const updatedComments = comments.filter(
        (comment: any) => comment._id !== id
      );
      setComments(updatedComments);
    });
  };

  return (
    <form className={cn("grid items-start gap-4", className)}>
      {comments.map((comment: any, index: number) => {
        return (
          <div key={index} className="flex flex-row justify-between">
            <div className="flex flex-col">
              <Label
                htmlFor="name"
                className="text-sm font-medium text-gray-900"
              >
                {comment.name}
              </Label>
              <p className="text-sm text-gray-500">{comment.message}</p>
            </div>
            <Button
              variant="destructive"
              onClick={(e) => {
                e.preventDefault();
                handleDeleteComment(comment._id);
              }}
              size="sm"
            >
              Delete
            </Button>
          </div>
        );
      })}
    </form>
  );
}
