import { Spinner } from "@shared/ui";

import { UpdateUserForm } from "./_components";
import { useUpdateUserPage } from "./hooks";

const UpdateUserPage = () => {
  const { state } = useUpdateUserPage();

  return (
    <>
      {state.isLoading && <Spinner />}
      {!state.isLoading && state.data && <UpdateUserForm {...state.data} />}
    </>
  );
};

export default UpdateUserPage;
