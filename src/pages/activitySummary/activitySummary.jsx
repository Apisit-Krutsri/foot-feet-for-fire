import { useState } from "react"
import BarChart from "./BarChart"
import {UserData} from './Data'
import LineChart from "./LineChart"
import PieChart from "./PieChart"
import './activity.css'

const ActivitySummary = () => {

    const [userData,setUserData] = useState({
        labels: UserData.map((data)=> data.year) ,
        datasets: [{
            label: "User Gainer",
            data: UserData.map((data)=>data.userGain),
            backgroundColor: ['salmon','lavender','lightgreen','lightblue'],
        },
        {
            label: "User Lost",
            data: UserData.map((data)=>data.userLost),
            backgroundColor: ['#c6d8cf','#50c7c7','#7986cb','#e5ddd1'],
        }
    ]
    })

    return(
        <div className="activ">
            <div style={{ width: 300}}>
            <BarChart chartData={userData} />
            </div>
            <div style={{ width: 300}}>
            <LineChart chartData={userData} />
            </div>
            <div style={{ width: 200}}>
            <PieChart chartData={userData} />
            </div>
        </div>
    )
}

export default ActivitySummary