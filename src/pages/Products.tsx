import { ReactElement, useCallback } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Column } from "react-table";
import AdminSidebar from "../components/AdminSidebar";
import TableHOC from "../components/TableHOC";
interface DataType {
  id?: string;
  photo: ReactElement;
  name: string;
  stock: number;
  price: number;
  action: ReactElement;
}
const columns: Column<DataType>[] = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Photo",
    accessor: "photo",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Stock",
    accessor: "stock",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];
const img1 =
  "https://m.media-amazon.com/images/I/41Sf4XUBhKL._SX300_SY300_QL70_FMwebp_.jpg";
const img2 =
  "https://m.media-amazon.com/images/I/51bzAcr39SL._SX300_SY300_QL70_FMwebp_.jpg";

const arr: DataType[] = [
  {
    photo: <img src={img1} alt="laptop" />,
    name: "MSI GF63 Thin, Intel Core i5-11260H",
    stock: 2,
    price: 41990,
    action: <Link to={"/admin/products/sdsfsff"}>Manage</Link>,
  },
  {
    photo: <img src={img2} alt="laptop" />,
    name: "FCS smartwatch screen guard for Casio Vintage Watch-A-158WA-1Q",
    stock: 2,
    price: 139,
    action: <Link to={"/admin/products/ddssg"}>Manage</Link>,
  },
  {
    photo: <img src={img1} alt="laptop" />,
    name: "MSI GF63 Thin, Intel Core i5-11260H",
    stock: 2,
    price: 41990,
    action: <Link to={"/admin/products/sdsfsff"}>Manage</Link>,
  },
  {
    photo: <img src={img2} alt="laptop" />,
    name: "FCS smartwatch screen guard for Casio Vintage Watch-A-158WA-1Q",
    stock: 2,
    price: 139,
    action: <Link to={"/admin/products/ddssg"}>Manage</Link>,
  },
  {
    photo: <img src={img1} alt="laptop" />,
    name: "MSI GF63 Thin, Intel Core i5-11260H",
    stock: 2,
    price: 41990,
    action: <Link to={"/admin/products/sdsfsff"}>Manage</Link>,
  },
  {
    photo: <img src={img1} alt="laptop" />,
    name: "MSI GF63 Thin, Intel Core i5-11260H",
    stock: 2,
    price: 41990,
    action: <Link to={"/admin/products/sdsfsff"}>Manage</Link>,
  },
  {
    photo: <img src={img2} alt="laptop" />,
    name: "FCS smartwatch screen guard for Casio Vintage Watch-A-158WA-1Q",
    stock: 2,
    price: 139,
    action: <Link to={"/admin/products/ddssg"}>Manage</Link>,
  },
  
];

export default function Products() {
  // const [data, setData] = useState<DataType[]>(arr);
  const Table = useCallback(() => {
    return TableHOC<DataType>(columns, arr, "productBox", "Products");
  }, []);
  return (
    <div className="adminContainer">
      {/* sidebar */}
      <AdminSidebar />
      {/* Main */}
      <main>{Table()()}</main>
      <Link to="/admin/products/new" className="create-product-btn">
        <FaPlus />
      </Link>
    </div>
  );
}
