import React, { useState } from "react";
import ModalComp from "./modal";
import { useDispatch, useSelector } from "react-redux";
import { open_modal } from "../../redux/diff";
const Updateparentcat = () => {
  return (
    <div>
      <ModalComp>from update parent category</ModalComp>
    </div>
  );
};

export default Updateparentcat;
