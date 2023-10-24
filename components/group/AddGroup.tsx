"use client";
import React, { useState } from "react";

type Props = {};

const AddGroup = (props: Props) => {
  const [formData, setFormData] = useState({
    groupName: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // create formData object
  const newFormData = new FormData();

  // append each formData value
  newFormData.append("groupName", formData.groupName);

  return (
    <>
      <div className="flex w-[20.9375rem] flex-col gap-[1.875rem] p-[1.25rem]">
        <div>
          <div></div>
          <div></div>
        </div>
        <div></div>
        <div>
          <label>Group Name</label>
          <div>
            <input
              type="text"
              name="Group Name"
              placeholder="GroupName"
              value={formData.groupName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default AddGroup;
