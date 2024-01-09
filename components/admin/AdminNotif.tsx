import { FormatDate } from "@/lib/formatDate";
const AdminNotif = () => {
  return (
    <div className="flex items-center justify-end gap-4 text-sm text-secondary3">
      <FormatDate date={new Date()} />
    </div>
  );
};

export default AdminNotif;
