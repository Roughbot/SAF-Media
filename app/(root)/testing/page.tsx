import "./styles.scss";
const page = () => {
  return (
    <div className="min-h-screen items-center justify-center flex hover:slide-fwd-center">
      <div className="w-116 h-56 testing ">
        <p className="p-6 text-white text-xl font-semibold ">
          This is a test page. You can edit it in the file{" "}
          <code>app/(root)/testing/page.tsx</code>.
        </p>
      </div>
    </div>
  );
};

export default page;
