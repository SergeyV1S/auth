import { AuthButton } from "@modules/auth";

export const Header = () => (
  <header className='border-b-border w-full border-b py-5'>
    <div className='flex w-full items-center justify-end'>
      <div className='flex items-center gap-2 sm:gap-6'>
        <AuthButton />
      </div>
    </div>
  </header>
);
