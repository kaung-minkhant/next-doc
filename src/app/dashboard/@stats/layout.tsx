export default function StatsLayout({
  children,
  setting
}: {
  children: React.ReactNode;
  setting: React.ReactNode
}) {
  return (
    <div className="border border-green-500 rounded-lg p-5 m-2">
      <p>Stats Layout</p>
      {children}
      {setting}
    </div>
  );
}
