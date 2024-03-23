import "./styles.scss";

export default function LoadingComponent() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="thing ">
        <div className="ring ring--1"></div>
        <div className="ring ring--2"></div>
        <div className="ring ring--3"></div>
      </div>
    </div>
  );
}
