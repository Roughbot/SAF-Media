import PostCards from "../postCards/PostCards";
import { Skeleton } from "../ui/skeleton";

const PostCardLists = ({ posts }: any) => {
  if (!posts.length) {
    return (
      <div>
        {[1, 2, 3, 4, 5].map((index) => (
          <Skeleton key={index} className="h-20" />
        ))}
      </div>
    );
  }

  return (
    <div>
      {posts.map((post: any) => (
        <PostCards key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostCardLists;
