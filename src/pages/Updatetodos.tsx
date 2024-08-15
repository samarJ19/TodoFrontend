import { useEffect, useState, useCallback } from "react";
import { Appbar } from "../components/appbar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useSetRecoilState } from "recoil";
import { reloadState } from "../store/atoms";

interface UpdateData {
  title: string;
  description: string;
}

export const Updatetodo = () => {
  const [updatedata, setData] = useState<UpdateData>({
    title: "",
    description: ""
  });

  const { id } = useParams();
  const Navigate = useNavigate();
  const setReload = useSetRecoilState(reloadState);

  // Memoized function to fetch todo data
  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(BACKEND_URL + "/api/v1/gettodo/" + id, {
        withCredentials: true
      });
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      console.error("Error fetching todo data:", error);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Memoized reloadTodos function
  const reloadTodos = useCallback(() => {
    setReload(prev => !prev);
  }, [setReload]);

  // Grouped and memoized change handler
  const handleInputChange = useCallback((key: keyof UpdateData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData(prev => ({
      ...prev,
      [key]: e.target.value
    }));
  }, []);

  // Memoized handleSubmit function
  const handleSubmit = useCallback(async () => {
    try {
      const response = await axios.put(BACKEND_URL + "/api/v1/updatetodo/" + id, updatedata, {
        withCredentials: true
      });
      reloadTodos();
      if (response.status === 200) {
        Navigate("/todos");
      }
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  }, [id, updatedata, reloadTodos, Navigate]);

  return (
    <div>
      <div className="bg-[url('/b9.jpg')] bg-cover overflow-auto to bg-slate-300">
        <Appbar />
      </div>
      <div className="bg-[url('/b9.jpg')] bg-cover overflow-auto h-screen">
      <div className="justify-center flex m-2">
        <h1 className="text-xl font-semibold">Update Todo</h1>
      </div>
      <div className="m-4 flex justify-center m-auto">
        <input
          type="text"
          id="default-input"
          className="bg-gray-50 border border-gray-300 
            text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block 
            w-[50%] p-2.5 m-4"
          placeholder="Write your title..."
          value={updatedata.title}
          onChange={handleInputChange('title')}
        />
      </div>
      <div className="m-2 flex justify-center m-auto">
        <textarea
          id="message"
          className="block rows-4 p-2.5 w-[50%] text-sm text-gray-900 bg-gray-50
          rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Write your description..."
          value={updatedata.description}
          onChange={handleInputChange('description')}
        />
      </div>
      <div className="m-4 flex justify-center m-auto">
        <button
          type="button"
          className="px-5 py-2.5 text-sm font-medium text-white bg-blue-700
          hover:bg-blue-800 rounded-lg text-center w-[20%] m-4"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      </div>
    </div>
  );
};
