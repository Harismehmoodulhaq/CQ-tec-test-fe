import LinearProgress from "@mui/material/LinearProgress";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
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
    field: "bookName",
    headerName: "Book name",
    width: 130,
  },
  {
    field: "authorName",
    headerName: "Author name",
    width: 130,
  },
  {
    field: "borrowedBy",
    headerName: "Borrowed by",
    width: 160,
  },
  {
    field: "dateOfBorrow",
    headerName: "Date of borrow",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    type: "string",
    width: 375,
    valueGetter: (params) => {
      return `${
        params.row.dateOfBorrow ? new Date(params.row.dateOfBorrow) : " "
      }`;
    },
  },
  {
    field: "expectedDateOfReturn",
    headerName: "Expected date of return",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    type: "string",
    width: 375,
    valueGetter: (params) => {
      return `${
        params.row.expectedDateOfReturn
          ? new Date(params.row.expectedDateOfReturn)
          : " "
      }`;
    },
  },
];

function Books() {
  const { books, isLoading, isError } = useSelector(({ bookPage }) => bookPage);
  const { setCurrentBook, getBooks } = useActionCreator();
  const navigate = useNavigate();
  useEffect(() => {
    getBooks();
  }, []);
  return (
    <>
      <div
        style={{
          height: "calc( 100vh - 150px )",
          width: "100%",
        }}
      >
        {isLoading ? <LinearProgress /> : <div></div>}
        <DataGrid
          onRowClick={({ row }) => {
            setCurrentBook(row);
            navigate(`/books/${row.id}`, {
              replace: true,
            });
          }}
          rows={books}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />
      </div>
    </>
  );
}

export default Books;
