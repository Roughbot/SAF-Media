export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-6 pt-10 px-6">
        <div className="bg-white p-6 rounded-xl shadow-lg m-3">
          <h1>Number of Posts</h1>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg m-3">
          <h1>Number of views</h1>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg m-3">
          <h1>Number of comments</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 pt-10 px-6">
        <div className="bg-white p-6 rounded-xl shadow-lg m-3">
          <h1>Recent Posts</h1>
        </div>
      </div>
    </div>
  );
}
