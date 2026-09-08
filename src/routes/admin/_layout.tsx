import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AdminLayout } from "@/components/admin/AdminLayout";

export const Route = createFileRoute("/admin/_layout")({
  head: () => ({
    meta: [
      { title: "CMS Dashboard — Solvix IT Solutions" },
      { name: "description", content: "Content management dashboard overview." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminLayoutWrapper,
});

function AdminLayoutWrapper() {
  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  );
}
