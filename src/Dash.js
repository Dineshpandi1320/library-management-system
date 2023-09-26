import MenuBookIcon from '@mui/icons-material/MenuBook';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import StrollerIcon from '@mui/icons-material/Stroller';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Chart from "react-apexcharts";
import { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ForwardRoundedIcon from '@mui/icons-material/ForwardRounded';
export function Home() {
const navigate=useNavigate()
  const [chart] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ["Total Book", "Borrowed Book", "Book Issued", "Due", "Returned", "Visitors", "login", "New Edition", 1999]
      }
    },
    series: [
      {
        name: "series-1",
        data: [90, 60, 45, 10, 19, 60, 40, 51]
      }
    ]
  });

  const [state] = useState({
    options: {},
    series: [44, 55, 41, 17, 15],
    labels: ['A', 'B', 'C', 'D', 'E']
  });
  return (
    <div>
      <div className="item">
        <div className="top-row">
          <p className="top1">Total Books<AutoStoriesIcon fontSize="large" color="secondary" /><div className='go'><p className="pa">150</p><IconButton className='bu'  color='error' variant='contained' fontSize="large" onClick={()=>navigate("/books")}><ForwardRoundedIcon /></IconButton></div></p>
          <p className="top2">Visitors<SupervisorAccountIcon fontSize="large" color="secondary" /><p className="pa">50</p></p>
          <p className="top3">Borrowed Books<StrollerIcon fontSize="large" color="secondary" /><p className="pa">100</p></p>
          <p className="top4">New Edition<MenuBookIcon fontSize="large" color="secondary" /><p className="pa">25</p></p>
        </div>
        <div>
          <Chart
            options={chart.options}
            series={chart.series}
            type="area"
            width="900"
            height="400" />
          <p>Over Due Books</p>
          <div className="row1">
            <p>name</p>
            <p>book name</p>
            <p>overdue</p>
            <p>return date</p>
          </div>
          <div className="row">
            <p>ruby</p>
            <p>self love</p>
            <p>2 days</p>
            <p>30/02/2023</p>
          </div>
          <div className="row">
            <p>john</p>
            <p>hard work</p>
            <p>5 days</p>
            <p>01/03/2023</p>
          </div>
          <div className="row">
            <p>mohan</p>
            <p>money</p>
            <p>1 day</p>
            <p>28/02/2023</p>
          </div>
        </div>
      </div>
      <p className="title">Borrowers Details</p>
      <div className="cl">
        <div className="borrow">

          <Card className="card">
            <CardContent>
              <p className="ca">Do It Today</p>
              <p className="ca">Darius Foroux </p>
              <p className="ca"><span>borrower</span>: ruby</p>
              <p className="ca"><span>return</span>: 21/03/2023</p>
            </CardContent>

          </Card>
          <Card className="card">
            <CardContent>
              <p className="ca">The Alchemist</p>
              <p className="ca">Paulo Coelho </p>
              <p className="ca"><span>borrower</span>: mohan</p>
              <p className="ca"><span>return</span>: 25/03/2023</p>
            </CardContent>
          </Card>
          <Card className="card">
            <CardContent>
              <p className="ca">The Theory</p>
              <p className="ca"> Stephen Hawking</p>
              <p className="ca"><span>borrower</span>: john</p>
              <p className="ca"><span>return</span>: 28/02/2023</p>
            </CardContent>
          </Card>
          <Button onClick={()=>navigate("/borrowedlist")} variant="contained" startIcon={<ArrowForwardIcon />} className="buton">more</Button></div>
        <div>
          <p className="title1">Vistors By Age</p>
          <div className="age">
            <p>12-20: <span className="sp1">25.6</span>%</p>
            <p>21-30: <span className="sp2">32.0</span>%</p>
            <p>31-40: <span className="sp3">23.8</span>%</p>
            <p>41-50: <span className="sp4">9.9</span>%</p>
            <p>51-60: <span className="sp5">8.7</span>%</p>
          </div>
          <Chart
            options={state.options}
            series={state.series}
            type="donut"
            width="700"
            height="400" />

        </div>
      </div>

    </div>
  );
}