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
        <div className="flex justify-center content-center border-black border-2 p-4">
            <div className="m-3 w-72">
            <BarChart chartData={userData} />
            </div>
            <div className="m-3 w-72">
            <LineChart chartData={userData} />
            </div>
            <div className="m-3 w-72">
            <PieChart chartData={userData} />
            </div>
        </div>
    )
}

export default ActivitySummary