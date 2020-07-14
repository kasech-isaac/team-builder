import React from "react";

const Forms =props => {
console.log(props)
    
const [name, setName] = React.useState("");
const [email, setEmail] = React.useState("");
const [role, setRole]= React.useState("");

const handleName = event => setName(event.target.value);
const handleEmail = event => setEmail(event.target.value);
const handelRole =event =>setRole(event.target.value);

const handleSubmit = event => {
  event.preventDefault();
  if (name, email, role) {
    props.setNotes([...props.notes, { name, email,role }]);
    resetState();
  }
};

const resetState = () => {
    setName("");
    setEmail("");
    setRole("");
};

return (
  <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
    <input
      onChange={handleName}
      type="text"
      name="name"
      value={name}
      placeholder="Your Name"
    />
    <label htmlFor="email">Email:</label>
    <input
      onChange={handleEmail}
      type="text"
      name="email"
      value={email}
      placeholder="Email"
    />
<label htmlFor="role">Your Role:</label>
<input
      onChange={handelRole}
      type="text"
      name="role"
      value={role}
      placeholder="role"
    />
    <button type="submit">Click To Submit!</button>
  </form>
);
};





export default Forms;
