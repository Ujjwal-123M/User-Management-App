import { useState } from "react";
import type { User } from "../types/User";

interface UserFormProps {
  initialData?: User;
  onSubmit: (data: User) => Promise<void>;
  loading?: boolean;
}

const UserForm = ({ initialData, onSubmit, loading }: UserFormProps) => {
  const [formData, setFormData] = useState<User>(
    initialData || { name: "", email: "", phone: "" }
  );

  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      setError("All fields are required");
      return;
    }

    setError("");
    await onSubmit(formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {error && <div className="errorBanner">{error}</div>}

      <div className="field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Jane Doe"
          autoComplete="name"
        />
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="jane@example.com"
          autoComplete="email"
        />
      </div>

      <div className="field">
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="(555) 123-4567"
          autoComplete="tel"
        />
      </div>

      <div className="actions">
        <button className="btn btnPrimary" type="submit" disabled={loading}>
          {loading ? "Processing..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default UserForm;
