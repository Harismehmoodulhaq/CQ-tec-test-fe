import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useActionCreator } from "../../state/actions/actions";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 130,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 130,
  },

  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

function Students() {
  const { students, isLoading, isError } = useSelector(
    ({ studentPage }) => studentPage
  );
  const { setCurrentStudent, getStudents } = useActionCreator();
  const navigate = useNavigate();
  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div
      style={{
        height: "calc( 100vh - 150px )",
        width: "100%",
      }}
    >
      <DataGrid
        onRowClick={({ row }) => {
          setCurrentStudent(row);
          navigate(`/students/${row.id}`, { replace: true });
        }}
        rows={students}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}

export default Students;
