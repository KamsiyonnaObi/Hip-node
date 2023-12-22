import { FormatDate } from "@/lib/formatDate";
import FillIcon from "../icons/FillIcon";
import { Button } from "../ui/Button";

const AdminNotif = () => {
  return (
    <div className="flex items-center justify-end gap-4 text-sm text-secondary3">
      <FormatDate date={new Date()} />
      <Button className="items-center bg-secondary6 p-2 dark:bg-dark4">
        <FillIcon.Notifications className="fill-secondary4 dark:fill-secondary6" />
      </Button>
    </div>
  );
};

export default AdminNotif;
