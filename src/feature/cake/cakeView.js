import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

export default function CakeView() {
  const noOfCakes = useSelector((state) => state.cake.cakeQuant);
  const dispatch = useDispatch();
  return (
    <>
      <div>initial cake:{noOfCakes}</div>
      <button onClick={() => dispatch(ordered())}>order</button>
      <button onClick={() => dispatch(restocked(15))}>restocked</button>
    </>
  );
}
