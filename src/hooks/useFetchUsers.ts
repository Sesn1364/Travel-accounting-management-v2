// src/hooks/useFetchUsers.ts

import { useState, useEffect } from "react";
import { fetchUsers } from "../utils/apiUtils"; // ایمپورت از apiUtils

const useFetchUsers = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    getUsers();
  }, []);

  return users;
};

export default useFetchUsers;
