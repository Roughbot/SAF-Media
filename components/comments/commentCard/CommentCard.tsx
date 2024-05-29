import { getComments } from "@/utils/actions/comments.action";
import parse from "html-react-parser";
import CommentSubmitFrom from "../commentSubmitForm/CommentSubmitForm";

const CommentForm = async ({ slug }: any) => {
  const comments = await getComments(slug);

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8 text-black">
        <h3 className="text-xl mb-8 font-semibold border-b pb-4">
          Leave a Reply
        </h3>
        <CommentSubmitFrom slug={slug} />
      </div>
      <div>
        {comments.length > 0 && (
          <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
            <h3 className="text-xl mb-8 text-black font-semibold border-b pb-4">
              {comments.length} Comments
            </h3>
            {comments.map((comment: any, index: number) => (
              <div key={index} className="border-b border-gray-100 mb-4 pb-4">
                <p className="mb-4">
                  <span className="font-semibold text-2xl text-black">
                    {comment.name}
                  </span>{" "}
                  on {new Date(comment.createdAt).toLocaleDateString()}
                </p>
                <p className="whitespace-pre-line text-gray-600 w-full">
                  {parse(comment.message)}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CommentForm;
