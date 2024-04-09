import AdminSidebar from "../components/AdminSidebar";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import userImg from "../assets/image.png";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";

import data from "../assets/data.json";
import { BarChart, DonutChart } from "../components/Charts";
import { BiMaleFemale } from "react-icons/bi";
import Dashboardtable from "../components/Dashboardtable";
export default function Dashboard() {
  return (
    <div className="adminContainer">
      {/* sidebar */}
      <AdminSidebar />
      {/* Main */}
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users, docs" />
          <FaRegBell />
          <img src={userImg} alt="" />
        </div>
        <section className="widgetContainer">
          <WidgetItem
            heading="Revenue"
            value={31}
            percent={30}
            color="rgb(0,115,255)"
            amount={true}
          />
          <WidgetItem
            heading="Users"
            value={-31}
            percent={-242}
            color="rgb(0 198 202)"
            amount={false}
          />
          <WidgetItem
            heading="Transactions"
            value={80}
            percent={90}
            color="rgb(255 196 0)"
            amount={false}
          />
          <WidgetItem
            heading="Products"
            value={31}
            percent={10}
            color="rgb(76 0 255)"
            amount={true}
          />
        </section>

        <section className="graphContainer">
          <div className="revenueChart">
            <h2>Revenue & transaction</h2>
            {/* graph here */}
            <BarChart
              data_1={[421, 323, 214, 141, 4142, 241, 232]}
              data_2={[921, 2351, 892, 921, 642, 213, 242]}
              title_1="Revenue"
              title_2="Transaction"
              bgColor_1="rgb(0,115,255)"
              bgColor_2="rgba(53,162,235,0.8)"
              horizontal={true}
            />
          </div>
          <div className="productCategory">
            <h2>inventory</h2>
            <div>
              {data.categories.map((item) => (
                <ProductCategoryItem
                  key={item.heading}
                  value={item.value}
                  heading={item.heading}
                  color={`hsl(${item.value * 3},${50}%,50%)`}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="transactionContainer">
          <div className="genderChart">
            <h2>Gender Ratio</h2>
            {/* Chart */}
            <DonutChart
              labels={["female", "Male"]}
              data={[12, 19]}
              backgroundColor={["hsl(340,82%,56%)", "rgba(53,162,235,0.8)"]}
              cutout={80}
            />
            <p>
              <BiMaleFemale />
            </p>
          </div>

          {/* table */}
          <Dashboardtable data={data.transaction} />
        </section>
      </main>
    </div>
  );
}
interface widgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}
const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount,
}: widgetItemProps) => {
  return (
    <article className="widget">
      <div className="widgetInfo">
        <p>{heading}</p>
        <h4>{amount ? `$${value}` : value}</h4>
        {percent > 0 ? (
          <span className="green">
            <HiTrendingUp />+{percent}%{" "}
          </span>
        ) : (
          <span className="red">
            <HiTrendingDown />
            {percent}{" "}
          </span>
        )}
      </div>
      {/* circle */}
      <div
        className="widgetCircle"
        style={{
          background: `conic-gradient(
          ${color} ${360 * (Math.abs(percent) / 100)}deg,
          rgb(255,255,255) 0
        )`,
        }}
      >
        <span style={{ color: `${color}` }}>{percent}%</span>
      </div>
    </article>
  );
};

interface categoryItemType {
  color: string;
  value: number;
  heading: string;
}
const ProductCategoryItem = ({ color, value, heading }: categoryItemType) => {
  return (
    <div className="categoryItem">
      <h5>{heading}</h5>
      <div>
        <div
          style={{
            backgroundColor: color,
            width: `${value}%`,
          }}
        ></div>
      </div>
      <span>{value}%</span>
    </div>
  );
};
