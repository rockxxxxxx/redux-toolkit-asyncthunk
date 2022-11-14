import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./userSlice";

export default function UserView() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
  return (
    <>
      {user.loading && <div>loading</div>}
      {!user.loading && user.error ? <div>Error:user.error</div> : null}
      {!user.loading && user.users.length ? (
        <ul>
          {user.users.map((data) => {
            return <li>{data.name}</li>;
          })}
        </ul>
      ) : null}
    </>
  );
}
