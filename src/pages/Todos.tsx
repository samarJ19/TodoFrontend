import React, { useEffect, useState, useCallback } from "react";
import { Appbar } from "../components/appbar";
import { TodoCard } from "../components/todocard";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useRecoilValue } from "recoil";
import { reloadState } from "../store/atoms";

interface NewTodos {
  id?: string;
  title?: string;
  description?: string;
}

export const Todos = () => {
  const [backendtodos, setTodos] = useState<NewTodos[]>([]);
  const reload = useRecoilValue(reloadState);

  // Memoized function to fetch todos
  const fetchTodos = useCallback(async () => {
    try {
      const response = await axios.get(BACKEND_URL + "/api/v1/bulk", {
        withCredentials: true,
      });
      const newTodos = response.data.usertodos;
      if (JSON.stringify(newTodos) !== JSON.stringify(backendtodos)) {
        setTodos(newTodos);
      }
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  }, [backendtodos]);

  // Use effect to call the fetchTodos function when reload changes
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos, reload]);

  return (
    <div className="bg-[url('/b12.jpg')] overflow-auto bg-cover bg-no-repeat lg:h-[1080px] w-full">
      <Appbar />
      <div className="justify-center">
        <div>
          {backendtodos.map((todo) => (
            <TodoCardMemo
              key={todo.id}
              id={todo.id || ""}
              title={todo.title || ""}
              description={todo.description || ""}
              default_description="Description"
              default_title="Title"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Memoize the TodoCard component to prevent unnecessary re-renders
const TodoCardMemo = React.memo(TodoCard);
