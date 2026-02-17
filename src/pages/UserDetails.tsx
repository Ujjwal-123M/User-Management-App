import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { deleteUser, getUserById } from "../services/userService";
import type { User } from "../types/User";

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const userId = Number(id);

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [deleting, setDeleting] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // Load a single user by id when this page mounts
  useEffect(() => {
    const fetchUser = async () => {
      if (!Number.isFinite(userId)) {
        setError("Invalid user id");
        return;
      }

      try {
        setLoading(true);
        setError("");
        const data = await getUserById(userId);
        setUser(data);
      } catch {
        setError("Failed to fetch user details");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  // Call DELETE /users/:id when the delete button is clicked
  const handleDelete = async () => {
    if (!Number.isFinite(userId)) return;
    const confirmed = window.confirm("Delete this user?");
    if (!confirmed) return;

    try {
      setDeleting(true);
      setError("");
      await deleteUser(userId);
      navigate("/", { replace: true });
    } catch {
      setError("Failed to delete user");
    } finally {
      setDeleting(false);
    }
  };

  if (loading) return <Loader label="Fetching user details" />;

  return (
    <div>
      {error && (
        <div className="errorBanner" style={{ marginBottom: 12 }}>
          {error}
        </div>
      )}

      <div className="card">
        <div className="cardBody">
          <div className="row" style={{ marginBottom: 10 }}>
            <div>
              <h2 style={{ margin: 0 }}>{user?.name ?? "User"}</h2>
              <div className="muted" style={{ marginTop: 6 }}>
                ID: {Number.isFinite(userId) ? userId : "-"}
              </div>
            </div>
            <div className="actions">
              <Link className="btn" to="/">
                Back
              </Link>
              <Link className="btn" to={Number.isFinite(userId) ? `/edit/${userId}` : "/"}>
                Edit
              </Link>
              <button className="btn btnDanger" onClick={handleDelete} disabled={deleting}>
                {deleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>

          {user && (
            <div style={{ display: "grid", gap: 6 }}>
              <div>
                <span className="muted">Email: </span>
                <span>{user.email}</span>
              </div>
              <div>
                <span className="muted">Phone: </span>
                <span>{user.phone}</span>
              </div>
            </div>
          )}

          {!user && !error && (
            <div className="muted">No user data to display.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;


