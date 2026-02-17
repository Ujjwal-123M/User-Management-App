import { Link } from "react-router-dom";
import type { User } from "../types/User";

type UserListProps = {
  users: User[];
  onDelete: (id: number) => void;
  deletingId?: number | null;
};

const UserList = ({ users, onDelete, deletingId }: UserListProps) => {
  return (
    <div className="card">
      <div className="cardHeader">
        <div className="row">
          <h2 style={{ margin: 0 }}>Users</h2>
          <div className="muted" style={{ fontSize: 14 }}>
            {users.length} total
          </div>
        </div>
      </div>

      <div className="cardBody">
        <div className="tableWrap">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th style={{ width: 240 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <Link className="link userName" to={`/details/${user.id}`}>
                      {user.name}
                    </Link>
                  </td>
                  <td>
                    <span className="userMeta">{user.email}</span>
                  </td>
                  <td>
                    <span className="userPhone">{user.phone}</span>
                  </td>
                  <td>
                    <div className="actions">
                      <Link className="btn" to={`/edit/${user.id}`}>
                        Edit
                      </Link>
                      <button
                        className="btn btnDanger"
                        onClick={() => onDelete(user.id!)}
                        disabled={deletingId === user.id}
                      >
                        {deletingId === user.id ? "Deleting..." : "Delete"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td colSpan={4} className="muted">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="mobileCards">
          {users.map((user) => (
            <div key={user.id} className="userCard">
              <div className="row userRow">
                <div className="userCardMain">
                  <Link className="link userName" to={`/details/${user.id}`}>
                    {user.name}
                  </Link>
                  <div className="userMeta">{user.email}</div>
                  <div className="userPhone">{user.phone}</div>
                </div>

                <div className="actions">
                  <Link className="btn" to={`/edit/${user.id}`}>
                    Edit
                  </Link>
                  <button
                    className="btn btnDanger"
                    onClick={() => onDelete(user.id!)}
                    disabled={deletingId === user.id}
                  >
                    {deletingId === user.id ? "Deleting..." : "Delete"}
                  </button>
                </div>
              </div>
            </div>
          ))}

          {users.length === 0 && (
            <div className="muted">No users found.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserList;


