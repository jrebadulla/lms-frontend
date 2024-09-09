import React from "react";
import { Table } from "antd";

const ManageBook = (props) => {
  const { dataSource, columns } = props;

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      pagination={{ pageSize: 5 }}
    />
  );
};

export default ManageBook;
