import Chart from "react-google-charts";
import { useLoaderData } from "react-router-dom";

const Statistics = () => {
  const donated = JSON.parse(localStorage.getItem("donated"));
  const cards = useLoaderData();

  const totalDonations = JSON.parse(cards).length;
  const yourDonations = donated ? donated.length : 0;

  const yourDonationPercentage = (yourDonations / totalDonations) * 100;

  const totalDonationPercentage = ((totalDonations - yourDonations) / totalDonations) * 100;

  const data = [
    ["Donation Type", "Percentage"],
    ["Your Donation", yourDonationPercentage],
    ["Total Donation", totalDonationPercentage],
  ];

  return (
    <div>
      <Chart chartType="PieChart" 
      data={data} 
      width={"100%"} 
      height={"400px"} />
    </div>
  );
};

export default Statistics;
