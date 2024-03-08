import SelectedLayoutSegment from "@/component/SelectedLayoutSegment";
import Link from "next/link";

export default function DashboardLayout({
  children,
  view,
  stats,
}: {
  children: React.ReactNode;
  view: React.ReactNode;
  stats: React.ReactNode;
}) {
  return (
    <div className="container max-w-4xl m-auto border border-green-500 rounded-lg p-5 m-2">
      <div className="flex justify-between items-center">
        <p>Dashboard layout</p>
        <SelectedLayoutSegment />
      </div>
      <Link href={"/dashboard/subscriber"}>Go to subscriber stats</Link>
      {view}
      {children}
      {stats}
    </div>
  );
}
