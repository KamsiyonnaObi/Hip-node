import { columns } from "@/components/admin/users/columns";
import { DataTable } from "@/components/admin/users/data-table";
import { getAlLUsers } from "@/utils/actions/user.action";

const UserManagementPage = async () => {
  const users = await getAlLUsers();

  return (
    <div>
      <h1 className="text-2xl font-semibold text-primary">Users</h1>
      <DataTable columns={columns} data={JSON.parse(JSON.stringify(users))} />
    </div>
  );
};

export default UserManagementPage;
