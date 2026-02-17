import { useEffect, useState } from "react";
import { deleteUser, getUsers } from "../services/userService";
import type { User } from "../types/User";
import Loader from "../components/Loader";
import UserList from "../components/UserList";

const Home = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [deletingId, setDeletingId] = useState<number | null>(null);

  // Fetch users when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const data = await getUsers();
        setUsers(data);
      } catch {
        setError("Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm("Delete this user?");
    if (!confirmed) return;

    try {
      setDeletingId(id);
      await deleteUser(id);
      setUsers((prev) => prev.filter((u) => u.id !== id));
    } catch {
      setError("Failed to delete user");
    } finally {
      setDeletingId(null);
    }
  };

  if (loading) return <Loader label="Fetching users" />;

  return (
    <div>
      {error && (
        <div className="errorBanner" style={{ marginBottom: 12 }}>
          {error}
        </div>
      )}
      <UserList users={users} onDelete={handleDelete} deletingId={deletingId} />
    </div>
  );
};

export default Home;
