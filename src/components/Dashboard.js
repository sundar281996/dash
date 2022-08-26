import Card from "./Card";

function Dashboard() {
  const data = [
    {
      plan: "EARNINGS (MONTHLY)",
      price: "$40,000",
      theme: "primary",
    },
    {
      plan: "EARNINGS (ANNUAL)",
      price: "$215,000",
      theme: "success",
    },
    {
      plan: "TASKS",
      price: "50%",
      theme: "info",
    },
    {
      plan: "PENDING REQUESTS",
      price: 18,
      theme: "warning",
    },
  ];
  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <a
          href="#"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Generate
          Report
        </a>
      </div>
      <div className="row">
        {data.map((item) => {
          return <Card item={item}></Card>;
        })}
      </div>
    </div>
  );
}
export default Dashboard;
