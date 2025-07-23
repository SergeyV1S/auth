import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input
} from "@shared/ui";

import { useLoginForm } from "../hooks";

export const LoginForm = () => {
  const { state, form, functions } = useLoginForm();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(functions.login)} className='space-y-8'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email *</FormLabel>
              <FormControl>
                <Input placeholder='Email' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password *</FormLabel>
              <FormControl>
                <Input placeholder='Password' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' disabled={state.isPending || !form.formState.isDirty}>
          Login
        </Button>
      </form>
    </Form>
  );
};
