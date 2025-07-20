/* eslint-disable @typescript-eslint/consistent-type-imports */

type TApiRequestConfig = import("axios").AxiosRequestConfig;

interface IMutationSettings<Params = void, Func = unknown> {
  config?: TApiRequestConfig;
  options?: import("@tanstack/react-query").UseMutationOptions<
    Awaited<ReturnType<Func>>,
    any,
    Params,
    any
  >;
}

interface IQuerySettings<Func = unknown> {
  config?: TApiRequestConfig;
  options?: Omit<
    import("@tanstack/react-query").UseQueryOptions<
      Awaited<ReturnType<Func>>,
      any,
      Awaited<ReturnType<Func>>,
      any
    >,
    "queryKey"
  >;
}

type TRequestConfig<Params = undefined> = Params extends undefined
  ? { config?: TApiRequestConfig }
  : { params: Params; config?: TApiRequestConfig };
