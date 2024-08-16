import React, {useState} from "react";
import { LineChart } from "./LineChart";
import { ImageSkeleton } from "../Common";

interface Props{
  x: [],
  y: [],
  x_label: string
}

const BaseChart = ({x, y, x_label}:Props) =>{
  const cahrtdata = {
      labels: x,
      datasets: [{
        label: x_label,
        data: y,
        fill: false,
        borderColor: '#1C92B9',
        tension: 1
      }]
    };
    return (
        <div className="">
            {
              x && y?
               <LineChart data={cahrtdata} legend="Course stats per years" />
              :
                <ImageSkeleton width="100%" height="370px" rounded="10px" />
            }
        </div>
    )
}

export default BaseChart;