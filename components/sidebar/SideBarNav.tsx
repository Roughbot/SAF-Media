import dynamic from "next/dynamic";

const SideNavBarNoSSR = dynamic(() => import("./SideBar"), { ssr: false });

export default function SideBarNav() {
  return <SideNavBarNoSSR />;
}
