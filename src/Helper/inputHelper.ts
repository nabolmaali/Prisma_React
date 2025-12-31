import React from "react";

const inputHelper = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >,
  data: any
) => {
  //to spread out the data
  const tempData: any = { ...data };
  //to asign the target value
  tempData[e.target.name] = e.target.value;
  return tempData;
};

export default inputHelper;