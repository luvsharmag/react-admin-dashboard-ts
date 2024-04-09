import { categories } from "../../assets/data.json";
import AdminSidebar from "../../components/AdminSidebar";
import { DonutChart, PieChart } from "../../components/Charts";
function PieCharts() {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="chartContainer">
        <h1>Pie & Doughnut Charts</h1>
        <section>
          <div>
            <PieChart
              labels={["Processing", "Delivered", "Shipped"]}
              data={[12, 9, 14]}
              backgroundColor={[
                `hsl(110,80%,80%)`,
                `hsl(110,80%,50%)`,
                `hsl(110,40%,50%)`,
              ]}
              offset={[0, 0, 50]}
            />
          </div>
          <h2>Order Fulfillment Ratio</h2>
        </section>

        <section>
          <div>
            <DonutChart
              labels={categories.map((item) => item.heading)}
              data={categories.map((item) => item.value)}
              backgroundColor={categories.map(
                (i) => `hsl(${i.value * 4},${i.value}%,50%)`
              )}
              offset={[0, 0,0, 50]}
              legends={false}
            />
          </div>
          <h2>Product Categories Ratio</h2>
        </section>

        <section>
          <div>
            <DonutChart
              labels={["In Stock", "Out of stock"]}
              data={[40, 30]}
              backgroundColor={["hsl(269,80%,40%)", "rgb(53,162,255)"]}
              offset={[0, 80]}
              cutout={"70%"}
              // legends={false}
            />
          </div>
          <h2>Stock Availability</h2>
        </section>

        <section>
          <div>
            <DonutChart
              labels={[
                "Marketing Cost",
                "Discount",
                "Burnt",
                "Production Cost",
                "Net Margin",
              ]}
              data={[24, 241, 124, 123, 22]}
              backgroundColor={[
                "hsl(269,80%,40%)",
                "hsl(23,80%,40%)",
                "hsl(21,80%,40%)",
                "hsl(11,80%,40%)",
                "rgb(53,162,255)",
              ]}
              offset={[20, 30, 20, 30, 80]}
              legends={false}
            />
          </div>
          <h2>Revenue Distribution</h2>
        </section>

        <section>
          <div>
            <PieChart
              labels={["Teenager(<20)", "Adult(20-39)", "Older(>= 40)"]}
              data={[30, 229, 14]}
              backgroundColor={[
                `hsl(10,80%,50%)`,
                `hsl(10,80%,80%)`,
                `hsl(10,40%,50%)`,
              ]}
              offset={[0, 0, 50]}
            />
          </div>
          <h2>User Age Group</h2>
        </section>

        <section>
          <div>
            <DonutChart
              labels={["Admin", "Customers"]}
              data={[40, 230]}
              backgroundColor={["hsl(423,80%,40%)", "hsl(49,90%,40%)"]}
              offset={[0, 80]}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default PieCharts;
