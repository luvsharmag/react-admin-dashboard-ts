import AdminSidebar from "../../components/AdminSidebar";
import { BarChart } from "../../components/Charts";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function BarCharts() {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="chartContainer">
        <h1>Bar Charts</h1>
        <section>
          <BarChart
            data_1={[221, 124, 921, 224, 284, 385, 284, 932]}
            data_2={[918, 283, 483, 294, 284, 384, 383, 383]}
            title_1="Products"
            title_2="users"
            bgColor_1={`hsl(260,50%,30%)`}
            bgColor_2={`hsl(360,90%,90%)`}
          />
          <h2>top selling products & top customers</h2>
        </section>
        <section>
          <BarChart
            horizontal={true}
            data_1={[221, 124, 921, 224, 284, 385, 284, 932,292,249,243,923]}
            data_2={[]}
            title_1="Products"
            title_2="users"
            bgColor_1={`hsl(260,50%,30%)`}
            bgColor_2=""
            labels={months}
          />
          <h2>Orders throughout the year</h2>
        </section>
      </main>
    </div>
  );
}

export default BarCharts;
