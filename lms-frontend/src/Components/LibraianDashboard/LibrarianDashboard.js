import React, { useState } from "react";
import "./LibrarianDashboard.css";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Table } from "antd";
import ManageBook from "./ManageBook";

const LibrarianDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const generateSampleData = (numItems) => {
    const data = [];
    for (let i = 1; i <= numItems; i++) {
      data.push({
        key: i.toString(),
        id: i,
        name: `User ${i}`,
        age: Math.floor(Math.random() * 50) + 20,
        email: `user${i}@example.com`,
      });
    }
    return data;
  };

  const data = generateSampleData(100);

  const columnTitles = ["ID", "Name", "Age", "Email", "Actions"];
  const columns = columnTitles.map((title, index) => {
    if (title === "Actions") {
      return {
        title: title,
        key: title.toLowerCase(),
        render: (_, record) => (
          <span>
            <a href="#edit">Edit</a> | <a href="#delete">Delete</a> |{" "}
            <a href="#view">View</a>
          </span>
        ),
      };
    } else {
      return {
        title: title,
        dataIndex: title.toLowerCase(),
        key: title.toLowerCase(),
      };
    }
  });

  return (
    <div className="librarian-container">
      <div className="left-side-container">
        <Avatar className="user-avatar" size={80} icon={<UserOutlined />} />
        <p>{user.full_name}</p>
        <div className="categories-buttons">
          <button>Manage Book</button>
          <button>Manage Student</button>
          <button>Reserve Book</button>
        </div>
      </div>
      <div className="table-container">
        <ManageBook dataSource={data} columns={columns} />
      </div>
    </div>
  );
};

export default LibrarianDashboard;
