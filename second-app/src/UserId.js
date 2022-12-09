/** @format */

import { useParams } from "react-router-dom";

function UsersId() {
  let {userName} = useParams();
  return (
    <div>
      <a href="/users">Hазад</a>
      <h1>User :{userName}</h1>
    </div>
  );
}

export default UsersId;
