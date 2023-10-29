import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { updateUsername } from "../../store";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userName) return;
    dispatch(updateUsername(userName));
    setUserName("");
    navigate("/menu");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 text-center">
      <p className="text-xl">🖐Welcome! Start by telling us your name</p>
      <input
        type="text"
        placeholder="your username"
        className="input"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      {userName && (
        <Button primary className="px-4 py-2">
          start ordering
        </Button>
      )}
    </form>
  );
}

export default CreateUser;
