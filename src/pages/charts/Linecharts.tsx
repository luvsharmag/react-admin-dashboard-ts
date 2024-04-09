import AdminSidebar from "../../components/AdminSidebar";
import { LineChart } from "../../components/Charts";
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
function Linecharts() {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="chartContainer">
        <h1>Line Charts</h1>
        <section>
          <LineChart
            data={[
              323,232,32,43,342,32,24,532,123,431,1000,235
            ]}
            label="Users"
            borderColor="rgb(53,162,255)"
            bgColor="rgb(53,162,255,0.5)"
            labels={months}
          />
          <h2>Active Users</h2>
        </section>
        
        <section>
          <LineChart
            data={[
              32,2,34,42,33,32,24,52,12,44,21,23
            ]}
            label="Revenue"
            borderColor="hsla(10,80%,40%,0.4)"
            bgColor="hsl(10,80%,40%)"
            labels={months}
          />
          <h2>Total Products (SKU)</h2>
        </section>

        <section>
          <LineChart
            data={[
              33322,2343,3324,425422,34243,32442,22424,5422,12424,4244,2241,24243
            ]}
            label="Products"
            borderColor="hsla(129,80%,40%,0.4)"
            bgColor="hsl(129,80%,40%)"
            labels={months}
          />
          <h2>Total Revenue</h2>
        </section>

        <section>
          <LineChart
            data={[
              33232,2323,3324,42424,3342,327313,2437,5237,1372,4473,2137,2373
            ]}
            label="Discount"
            borderColor="hsla(29,80%,40%,0.4)"
            bgColor="hsl(29,80%,40%)"
            labels={months}
          />
          <h2>Discount Alloted</h2>
        </section>
      </main>
    </div>
  );
}

export default Linecharts;
