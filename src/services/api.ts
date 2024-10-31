import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type getTodosParams = {
  page: number;
  limit: number;
  status?: string;
};

type TodosPayload = {
  limit: number;
  page: number;
  statusCount: {
    inprogress: number;
    cancelled: number;
    archived: number;
    open: number;
    completed: number;
  };
  todos: TodoPayload[];
  total: number;
};

type TodoPayload = {
  id?: number;
  name: string;
  status: string;
  priority: number;
  createdAt?: any;
};

type AddTodoParams = { todo: TodoPayload };

export const api = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  tagTypes: ["Tasks"],
  endpoints: (builder) => ({
    addTodo: builder.mutation<TodoPayload, AddTodoParams>({
      query: (todo) => {
        return { url: `/todos`, method: "POST", body: todo };
      },

      async onQueryStarted(newTodo, { dispatch, queryFulfilled }) {
        console.log({ newTodo });

        const patchResult = dispatch(
          api.util.updateQueryData(
            "getAllTodos",
            { page: 1, limit: 10, status: "" },
            (draft) => {
              draft.todos.unshift({
                ...newTodo,
                id: 11,
                createdAt: new Date().toISOString(),
              } as TodoPayload);
              draft.total += 1;
              draft.statusCount[newTodo.status] =
                (draft.statusCount[newTodo.status] || 0) + 1;
            }
          )
        );
        try {
          const { data } = await queryFulfilled;
          dispatch(
            api.util.updateQueryData(
              "getAllTodos",
              { page: 1, limit: 10 },
              (draft) => {
                const addedTodoIndex = draft.todos.findIndex(
                  (todo) => todo.id === 11
                );
                if (addedTodoIndex !== -1) draft.todos[addedTodoIndex] = data;
              }
            )
          );
        } catch {
          patchResult.undo();
        }
      },
    }),

    getAllTodos: builder.query<TodosPayload, getTodosParams>({
      query: (params) => {
        return { url: `/todos`, params };
      },

      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },

      merge: (currentCache, newItems) => {
        currentCache.todos.push(...newItems.todos);
      },
    }),

    getTodoDetails: builder.query<any, any>({
      query: (params) => {
        const { id } = params;
        return { url: `/todos/${id}` };
      },
    }),

    editTodo: builder.mutation<TodoPayload, any>({
      query: (params) => {
        const { id, todo } = params;
        return { url: `/todos/${id}`, method: "PUT", body: todo };
      },
    }),

    deleteTodo: builder.mutation<any, { id: number }>({
      query: (params) => {
        const { id } = params;
        return { url: `/todos/${id}`, method: "DELETE", body: {} };
      },

      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          api.util.updateQueryData(
            "getAllTodos",
            { page: 1, limit: 10 },
            (draft) => {
              const todoIndex = draft.todos.findIndex(
                (index) => index.id === id
              );
              console.log({ todoIndex });

              if (todoIndex !== -1) {
                const deletedTodo = draft.todos[todoIndex] as TodoPayload;
                draft.todos.splice(todoIndex, 1);
                draft.total -= 1;
                draft.statusCount[deletedTodo?.status] -= 1;
              }
            }
          )
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
  }),
});

export const {
  useGetAllTodosQuery,
  useGetTodoDetailsQuery,
  useAddTodoMutation,
  useEditTodoMutation,
  useDeleteTodoMutation,
} = api;
