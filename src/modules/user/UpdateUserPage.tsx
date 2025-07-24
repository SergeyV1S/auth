import { Spinner } from "@shared/ui";

import { UserForm } from "./_components";
import { useUpdateUserPage } from "./hooks";

const UpdateUserPage = () => {
  const { state } = useUpdateUserPage();

  return (
    <>
      {state.isLoading && <Spinner />}
      {!state.isLoading && state.data && <UserForm formType='updateUser' user={state.data} />}
    </>
  );
};

export default UpdateUserPage;
