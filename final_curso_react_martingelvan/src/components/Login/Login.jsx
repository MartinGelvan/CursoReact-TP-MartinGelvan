import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext/useAuthContext";
import { Navigate, useNavigate } from "react-router-dom";

export const Login = () => {
  const [userForm, setUserForm] = useState({ name: "", password: "" });
  const { user, login } = useAuthContext();

  const navigate = useNavigate();

  if (user) {
    return <Navigate to="/admin/alta-productos"></Navigate>;
  }

  const handleChanche = (e) => {
    const { name, value } = e.target;
    setUserForm({ ...userForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(userForm.name, userForm.password);
    if (success) {
      navigate("/admin/alta-productos");
    } else {
      alert("Credenciales incorrectas");
      setUserForm({ name: "", password: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Nombre</label>
        <input
          type="text"
          name="name"
          value={userForm.name}
          onChange={handleChanche}
        />
      </div>
      <div>
        <label htmlFor="">Contraseña</label>
        <input
          type="text"
          name="password"
          value={userForm.password}
          onChange={handleChanche}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};
