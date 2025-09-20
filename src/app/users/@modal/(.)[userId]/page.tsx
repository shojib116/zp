import UserView from "../../[userId]/view";
import { Modal } from "./modal";

export default async function UserModalPage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;

  return (
    <Modal>
      <UserView id={userId} />
    </Modal>
  );
}
