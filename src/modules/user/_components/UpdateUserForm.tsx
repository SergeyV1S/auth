import { CalendarIcon } from "lucide-react";

import type { IUsersData } from "@models/user";
import { format } from "date-fns";

import {
  Button,
  Calendar,
  Checkbox,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  typographyVariants
} from "@shared/ui";

import { useUpdateUserForm } from "../hooks";

interface IUpdateUserFormProps extends IUsersData {}

export const UpdateUserForm = (props: IUpdateUserFormProps) => {
  const { state, form, functions } = useUpdateUserForm(props);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(functions.updateUser)} className='space-y-8'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name *</FormLabel>
              <FormControl>
                <Input placeholder='Name' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='surName'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Surname *</FormLabel>
              <FormControl>
                <Input placeholder='Surname' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='fullName'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fullname *</FormLabel>
              <FormControl>
                <Input placeholder='Fullname' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='birthDate'
          render={({ field }) => (
            <FormItem className='flex flex-col'>
              <FormLabel>Дата рождения</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button variant='outline' className={typographyVariants()}>
                      {field.value ? format(field.value, "dd.MM.yyyy") : <span>Pick a date</span>}
                      <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0' align='center'>
                  <Calendar
                    mode='single'
                    selected={new Date(field.value!)}
                    onSelect={field.onChange}
                    disabled={(date) => date > new Date()}
                    captionLayout='dropdown'
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='employment'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Employment</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Select an employment' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='project_manager'>Progect Manager</SelectItem>
                  <SelectItem value='frontend_developer'>Frontend разработчик</SelectItem>
                  <SelectItem value='devops_engineer'>DevOps инженер</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='telephone'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input placeholder='Start with +7' {...field} />
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
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder='Password' {...field} disabled />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='Email' {...field} disabled />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='userAgreement'
          render={({ field }) => (
            <FormItem className='!flex items-center'>
              <FormLabel>User agreement</FormLabel>
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className='w-full'
          type='submit'
          size='lg'
          disabled={state.isPending || !form.formState.isDirty}
        >
          Save
        </Button>
      </form>
    </Form>
  );
};
