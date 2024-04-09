import { ReactElement, useCallback } from "react";
import { Link } from "react-router-dom";
import { Column } from "react-table";
import AdminSidebar from "../components/AdminSidebar";
import TableHOC from "../components/TableHOC";


interface DataType {
  avatar: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Avatar",
    accessor: "avatar",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const arr: DataType[] = [
  {
    avatar: "luv sharma",
    amount: 32313,
    discount: 123,
    quantity: 31,
    status:<span className="green">Completed</span> ,
    action: <Link to={"/admin/transaction/skfnfi"}>Manage</Link>,
  },
  {
    avatar: "Angela Yu",
    amount: 223,
    discount: 3,
    quantity: 11,
    status: <span className="red">Processing</span>,
    action: <Link to={"/admin/transaction/skeri"}>Manage</Link>,
  },
];
export default function Transaction() {
  // const [data,setData] = useState<DataType[]>(arr);
  const Table = useCallback(()=>{
    return TableHOC<DataType>(columns,arr,"transactionBox","Transactions");
  },[]);
  return (
    <div className="adminContainer">
      {/* sidebar */}
      <AdminSidebar />
      {/* Main */}
     <main>{Table()()}</main>
    </div>
  );
}
