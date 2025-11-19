export default function OwnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar placeholder */}
      <aside className="w-64 bg-blue-600 text-white p-4">
        <h2 className="text-xl font-bold">Owner Panel</h2>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 bg-gray-50">{children}</main>
    </div>
  );
}
