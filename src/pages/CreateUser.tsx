import { useNavigate } from "react-router-dom";
import { useState } from "react";
import UserForm from "../components/UserForm";
import { createUser } from "../services/userService";
import type { User } from "../types/User";

const CreateUser = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // Handle form submit and call POST /users
  const handleCreate = async (data: User) => {
    try {
      setLoading(true);
      setError("");
      await createUser(data);
      navigate("/");
    } catch {
      setError("Failed to create user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="card" style={{ marginBottom: 12 }}>
        <div className="cardBody">
          <h2 style={{ margin: 0 }}>Create User</h2>
          <div className="muted" style={{ marginTop: 6 }}>
              </div>
        </div>
      </div>

      {error && (
        <div className="errorBanner" style={{ marginBottom: 12 }}>
          {error}
        </div>
      )}
      <UserForm onSubmit={handleCreate} loading={loading} />
    </div>
  );
};

export default CreateUser;
