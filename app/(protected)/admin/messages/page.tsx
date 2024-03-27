import { Message, columns } from "./columns";
import { DataTable } from "./data-table";
import { getContactData } from "@/utils/actions/contact.action";

async function getMessages(): Promise<Message[]> {
  const response: any = await getContactData();

  return response;
}

const page = async () => {
  const data = await getMessages();

  return (
    <div className="p-8 ">
      <div className="p-3 rounded-3xl bg-slate-200 gradient_purple shadow-2xl">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default page;
