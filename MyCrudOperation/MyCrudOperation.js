import "./MyCrudOperation.css";
import React, { useState } from "react";

const MyCrudOperation = () => {
  const [uname, setUname] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [users, setUsers] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editUser, setEditUser] = useState(null);

  const Submit = (e) => {
    e.preventDefault();
    const user = {
      uname,
      age,
      country,
    };

    if (edit) {
      let copy = users;
      Object.assign(copy[editUser], user);
      setUsers([...copy]);
    setEdit(false);

    } else {
      setUsers([...users, user]);
    }
    // console.log(user);
    setUname("");
    setAge("");
    setCountry("");
  };

  const OnEdit = (index) => {
    const user = users[index];

    setUname(user.uname);
    setAge(user.age);
    setCountry(user.country);
    setEdit(true);
    setEditUser(index);
    setEdit(true);
  };

  const DeleteUser = (user) => {
    let copy = users.filter((item) => item !== user);

    setUsers([...copy]);
  };

  return (
    <div id="container">
      {/* Input Form   */}
      <div id="form">
        <form onSubmit={Submit}>
          <label>Name &emsp;</label>
          <input
          className="input"
            type="text"
            value={uname}
            onChange={(e) => {
              setUname(e.target.value);
            }}
          />
          <br />
          <label>Age &emsp; &nbsp;</label>
          <input className="input"
            type="number"
            min="0"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
          <br />
          <label>Country </label>
          <input 
          className="input"
            type="text"
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
          <br /> 
          <button id="sbtn" type="submit">
            {!edit ? "Submit" : "Update"}
          </button>
        </form>
      </div>

      {/* data table  */}

      <div id="data">
        <table id="table">
          <thead>
            <tr>
              <td>Name</td>
              <td>Age</td>
              <td>Country</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => {
              return (
                <tr>
                  <td>{user.uname}</td>
                  <td>{user.age}</td>
                  <td>{user.country}</td>
                  <td>
                    <button
                      onClick={() => {
                        OnEdit(index);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button onClick={() => DeleteUser(user)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default MyCrudOperation;
