import { getIntercomContacts } from "@/lib/intercom-data/intercom-data";
import { Contact } from "@/lib/types/definitions";
import { UserCard } from "./users/UserCard";

const IntercomContacts = async () => {
  const contacts = await getIntercomContacts();

  console.log(contacts);
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-semibold">
          Total Visitors {contacts.data.length}
        </h1>
        <h2 className="text-base font-medium">
          A comprehensive overview of all visited users and their details.
        </h2>
      </div>
      <div className="flex w-full space-x-5 overflow-hidden overflow-x-auto p-2 py-5">
        {contacts.data.map((contact: Contact) => (
          <UserCard key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
};

export default IntercomContacts;
