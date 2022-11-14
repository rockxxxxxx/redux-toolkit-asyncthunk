import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

export default function IceCreamView() {
  const noOfIce = useSelector((state) => state.icecream.icecreamQuant);
  const dispatch = useDispatch();
  return (
    <>
      <div>initial cake:{noOfIce}</div>
      <button onClick={() => dispatch(ordered())}>order</button>
      <button onClick={() => dispatch(restocked(15))}>restocked</button>
    </>
  );
}
