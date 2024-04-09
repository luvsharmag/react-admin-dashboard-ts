import React from "react";
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";
import {
  useSortBy,
  Column,
  useTable,
  TableOptions,
  usePagination,
} from "react-table";

function TableHOC<T extends Object>(
  columns: Column<T>[],
  data: T[],
  containerClass: string,
  heading: string,
  showPagination: boolean = true
) {
  return function HOC() {
    const options: TableOptions<T> = {
      columns,
      data,
      initialState: {
        pageSize: 6,
      },
    };

    const {
      headerGroups,
      getTableProps,
      getTableBodyProps,
      page,
      prepareRow,
      nextPage,
      canNextPage,
      previousPage,
      canPreviousPage,
      pageCount,
      state: { pageIndex },
    } = useTable(options, useSortBy, usePagination);
    return (
      <div className={containerClass}>
        <h2 className="heading">{heading} </h2>

        <table className="table" {...getTableProps()}>
          <thead>
            {headerGroups.map((hg) => (
              // group
              <tr {...hg.getHeaderGroupProps()}>
                {/* headers */}
                {hg.headers.map((columns) => (
                  <th
                    {...columns.getHeaderProps(columns.getSortByToggleProps())}
                  >
                    {columns.render("Header")}
                    {columns.isSorted && (
                      <span>
                        {" "}
                        {columns.isSortedDesc ? (
                          <AiOutlineSortDescending />
                        ) : (
                          <AiOutlineSortAscending />
                        )}
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        {showPagination && (
          <div className="tablepagination">
            <button onClick={previousPage} disabled={!canPreviousPage}>
              Prev
            </button>
            <span>{`${pageIndex + 1} of ${pageCount}`}</span>
            <button onClick={nextPage} disabled={!canNextPage}>
              Next
            </button>
          </div>
        )}
      </div>
    );
  };
}
export default TableHOC;
// const table_data = [
//   {
//     id: 1,
//     gender: "Male",
//     salary: 40000,
//   },
//   {
//     id: 2,
//     gender: "Male",
//     salary: 60000,
//   },
//   {
//     id: 3,
//     gender: "female",
//     salary: 80000,
//   },
// ];
// const columns = [
//   {
//     Header: "ID",
//     accessor: "id",
//   },
//   {
//     Header: "Gender",
//     accessor: "gender",
//   },
//   {
//     Header: "Salary",
//     accessor: "salary",
//   },
// ];

// export default function TableHOC() {
//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//     useTable(
//       {
//         columns,
//         table_data,
//       },
//       useSortBy
//     );
//   const props = getTableProps();
//   return (
//     <div className="container">
//       <table {...props}>
//         <thead>
//           {headerGroups.map((hg) => {
//             <tr {...hg.getHeaderGroupProps()}>
//               {hg.headers.map((column) => (
//                 <th {...column.getHeaderProps(column.getSortByToggleProps())}>
//                   {column.render("Header")}
//                   {
//                     column.isSorted && <span>{column.isSortedDesc?"⬆":"⬇"}</span>
//                   }
//                 </th>
//               ))}
//             </tr>;
//           })}
//           {/* <tr>
//             <th>Id</th>
//             <th>Gender</th>
//             <th>Salary</th>
//           </tr> */}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {rows.map((row) => {
//             prepareRow(row);
//             return (
//               <tr {...row.getRowProps()}>
//                 {row.cells.map((cell) => (
//                   <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
//                 ))}
//               </tr>
//             );
//           })}

//           {/* {table_data.map((item) => (
//             <tr key={item.id}>
//               <td>{item.id}</td>
//               <td>{item.gender}</td>
//               <td>{item.salary}</td>
//             </tr>
//           ))} */}
//         </tbody>
//       </table>
//     </div>
//   );
// }
