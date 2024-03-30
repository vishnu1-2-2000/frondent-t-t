import React, { useState,useEffect } from 'react'
import axios from "axios";
import { useNavigate } from "react-router";

const TaskTable = () => {
  const [history,setHistory]=useState([]);
  
  let optionsnew=[];
  let historyDivelements;

  function getHistory(){
    axios.get(window.url+"/accounts/history/")
    .then((res)=>{
      var i=0
      res.data.map((data2)=>{
      // alert(data2)
        var len=res.data.length
        if(len>10){
          if(i<10){
            historyDivelements=<span>{historyDivelements}{`\u29BF`+"  "+data2.description}<br></br></span>
            //  alert(historyDivelements)
          }
        }
          else{
            historyDivelements=<span>{historyDivelements}{`\u29BF`+"  "+data2.description}<br></br></span>
          }
          i=i+1
       
        setHistory(historyDivelements)
      })
    })
  }




  useEffect(() => {
    getHistory();

  }, []);

  return (
    <div class="productionOrderReportResultTableDIVouter" style={{backgroundColor:"lightskyblue"}}>
      <div className="productionOrderReportResultTableDIV" style={{backgroundColor:"lightskyblue"}}>
        <table class="productionOrderReportResultTable" id="productionOrderReportResultTableID">
          <tr>
            {/* <th class="productionOrderReportResultTH">Event:</th> */}
            <th class="productionOrderReportResultTH" style={{backgroundColor:"lightskyblue"}} >Task</th>
          </tr>
          <tr>
            {/* <th class="productionOrderReportResultTH">Event:</th> */}
            <td class="productionOrderReportResultTH">{history}</td>
          </tr>
        </table>
      </div>
    </div>            
  )
}

export default TaskTable;

