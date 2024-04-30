import "./Users.css";
import axios from "axios";
import { useState } from "react";

function Users() {
  //React hooks
  let [users, setUsers] = useState([]);
  const getUsers = () => {
    axios
      .get("https://randomuser.me/api/?results=50")
      .then((usersdata) => {
        console.log(usersdata.data.results);
        setUsers(usersdata.data.results);
      })
      .catch((errordata) => {
        console.log(errordata);
      });
  };

  return (
    <div className="usersContainer">
      <h2>Users Information</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et quidem
        laudantium velit illum officiis sapiente? Vel totam nemo quaerat, nisi
        provident repellat, laborum quo vero assumenda quae ad accusantium
        soluta itaque, maxime voluptatibus iusto. Error excepturi odit explicabo
        quis repudiandae, sapiente animi eum reprehenderit totam, natus, quod ad
        aspernatur nisi. Deserunt numquam mollitia, beatae veniam magnam
        suscipit quidem dolore sit aut voluptatum inventore voluptatem
        voluptatibus similique officiis delectus ad accusamus, eligendi
        blanditiis fugiat consequuntur eius incidunt corporis dicta! Numquam
        facere modi nostrum doloremque, necessitatibus, perferendis tempore
        voluptatum magnam quisquam consequatur a eveniet, corporis officiis
        cumque aliquid illum facilis asperiores mollitia?
      </p>
      <button onClick={getUsers} className="btn btn-outline-success">
        Get Users Data
      </button>

      <div className="mt-5  m-auto">
        {users.length > 0 ? (
          <table className="table table-hover ">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>IMAGE</th>
                <th>NAME</th>
                <th>GENDER</th>
                <th>EMAIL</th>
              </tr>
            </thead>
            <tbody>
              {users.map(function (user, index) {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>
                      <img src={user.picture.medium} width={70} height={70} />
                    </td>
                    <td>
                      {user.name.first} {user.name.last}
                    </td>
                    <td>{user.gender}</td>
                    <td>{user.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div className="mt-5 text-center text-danger">
            <h2>No User Data To Display</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Users;
