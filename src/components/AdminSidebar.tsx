import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { AiFillFileText } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import {
  RiBarChart2Fill,
  RiCoupon2Fill,
  RiDashboard2Fill,
  RiLineChartFill,
  RiPieChart2Fill,
  RiShoppingBag2Fill,
} from "react-icons/ri";
import { Link, Location, useLocation } from "react-router-dom";

export default function AdminSidebar() {
  const location = useLocation();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [phoneActive, setPhoneActive] = useState<boolean>(
    window.innerWidth < 1100
  );
  const resizeHandler = ()=>{
    setPhoneActive(window.innerWidth < 1100);
  };
  useEffect(()=>{
    window.addEventListener("resize",resizeHandler);

    return ()=>{
      window.removeEventListener("resize",resizeHandler);

    }
  },[]);
  return (
    <>
      {phoneActive && (
        <button id="hamburger" onClick={() => setShowModal(true)}>
          <HiMenuAlt4 />
        </button>
      )}
      <aside
        style={
          phoneActive
            ? {
                width: "20rem",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: showModal ? "0" : "-20rem",
                transition: "all 0.5s",
              }
            : {}
        }
      >
        <h2>logo . </h2>
        <Dashboard location={location} />
        <Charts location={location} />
        <Others location={location} />
        {phoneActive && (
          <button id="closeSidebar" onClick={() => setShowModal(false)}>
            Close
          </button>
        )}
      </aside>
    </>
  );
}
function Dashboard({ location }: { location: Location }) {
  return (
    <div>
      <h5>Dashboard</h5>
      <ul>
        <Li
          url="/admin/dashboard"
          text="Dashboard"
          Icon={RiDashboard2Fill}
          location={location}
        />
        <Li
          url="/admin/products"
          text="Product"
          Icon={RiShoppingBag2Fill}
          location={location}
        />
        <Li
          url="/admin/customers"
          text="Customer"
          Icon={IoIosPeople}
          location={location}
        />

        <Li
          url="/admin/transaction"
          text="Transaction"
          Icon={AiFillFileText}
          location={location}
        />
      </ul>
    </div>
  );
}

const Charts = ({ location }: { location: Location }) => {
  return (
    <div>
      <h5>Charts</h5>
      <ul>
        <Li
          url="/admin/chart/bar"
          text="Bar"
          Icon={RiBarChart2Fill}
          location={location}
        />
        <Li
          url="/admin/chart/pie"
          text="Pie"
          Icon={RiPieChart2Fill}
          location={location}
        />
        <Li
          url="/admin/chart/line"
          text="Line"
          Icon={RiLineChartFill}
          location={location}
        />
      </ul>
    </div>
  );
};
const Others = ({ location }: { location: Location }) => {
  return (
    <div>
      <h5>others</h5>
      <ul>
        <Li
          url="/admin/app/coupon"
          text="Coupon"
          Icon={RiCoupon2Fill}
          location={location}
        />
      </ul>
    </div>
  );
};

type LiProps = {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
};
const Li = ({ url, text, location, Icon }: LiProps) => {
  return (
    <li
      style={{
        backgroundColor: location.pathname.includes(url)
          ? "rgba(0,115,255,0.1)"
          : "white",
      }}
    >
      <Link
        to={url}
        style={{
          color: location.pathname.includes(url) ? "rgba(0,115,255)" : "black",
        }}
      >
        <Icon />
        {text}
      </Link>
    </li>
  );
};
