import AdminTable from "../features/admin/AdminTable";

export default function AdminPage() {
  return (
    <div className="bg-[#FDE047]">
      <h1 className="font-bold text-6xl text-[#7E22CE] text-center pt-16 mb-12">
        WELCOME ADMIN
      </h1>
      <div>
        <AdminTable />
      </div>
    </div>
  );
}
