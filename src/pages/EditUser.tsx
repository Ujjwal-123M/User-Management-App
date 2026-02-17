import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import UserForm from "../components/UserForm";
import { getUserById, updateUser } from "../services/userService";
import type { User } from "../types/User";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const userId = Number(id);
  const [initialData, setInitialData] = useState<User | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [saving, setSaving] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // Load the existing user so the form can be pre-filled
  useEffect(() => {
    const fetchUser = async () => {
      if (!Number.isFinite(userId)) {
        setError("Invalid user id");
        return;
      }

      try {
        setLoading(true);
        setError("");
        const user = await getUserById(userId);
        setInitialData(user);
      } catch {
        setError("Failed to load user");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  // Handle form submit and call PUT /users/:id
  const handleUpdate = async (data: User) => {
    if (!Number.isFinite(userId)) return;

    try {
      setSaving(true);
      setError("");
      await updateUser(userId, data);
      navigate(`/details/${userId}`);
    } catch {
      setError("Failed to update user");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <Loader label="Loading user" />;

  return (
    <div>
      <div className="card" style={{ marginBottom: 12 }}>
        <div className="cardBody row">
          <div>
            <h2 style={{ margin: 0 }}>Edit User</h2>
            <div className="muted" style={{ marginTop: 6 }}>
             
            </div>
          </div>
          <div className="actions">
            <Link className="btn" to={Number.isFinite(userId) ? `/details/${userId}` : "/"}>
              Cancel
            </Link>
          </div>
        </div>
      </div>

      {error && (
        <div className="errorBanner" style={{ marginBottom: 12 }}>
          {error}
        </div>
      )}

      {initialData ? (
        <UserForm
          key={userId}
          initialData={initialData}
          onSubmit={handleUpdate}
          loading={saving}
        />
      ) : (
        <Loader label="Loading user" />
      )}
    </div>
  );
};

export default EditUser;