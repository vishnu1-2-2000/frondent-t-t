import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
// import Navbar from "../Navigation/Navbar";
import Sidebar from "../../components/Sidnav/Sidebar";
import NativeSelectInput from "@material-ui/core/NativeSelect/NativeSelectInput";
import Select from "react-select";
// import Navbar from "../Navigation/Navbar";
// import Sidebar from "../Sidebar/Sidebar";
import { Box, Button, TextField } from "@mui/material";
import Chart from "highcharts-react-official";
import Highcharts, { dateFormats } from "highcharts";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import * as htmlToImage from "html-to-image";
import HighchartsReact from 'highcharts-react-official';

const Productionreport = () => {
 const [data, setData] = useState([]);
 const [tabledark, setTableDark] = useState("");
 const [batchNumber, setBatchNumber] = useState("");
 const [productionOrderNumber, setProductionOrderNumber] = useState("");
 const [batchNumberOptionsNew, setBatchNumberOptionsNew] = useState("");
 const [lineName, setLineName] = useState("");
 const [productName, setProductName] = useState("");
 const [systemName, setSystemName] = useState("");
 const [status, setStatus] = useState("");
 const[package_name,setPackage] = useState("");
 const[expiry_date,setExpiry] = useState("");
 const [date, setDate] = useState();
 const [time, setTime] = useState();

 const [Accepted, setAcceptedValue] = useState("");
 const [Specimen, setSpecimenValue] = useState("");
 const [Damaged, setDamagedValue] = useState("");
 const [Sample, setSampleValue] = useState("");
 const [Challenged, setChallengedValue] = useState("");
 const [Teach, setTeachValue] = useState("");
 const [InProcess, setInProcessValue] = useState("");
 const [RejectedByCamera, setRejectedByCameraValue] = useState("");
 const [Unused, setUnusedValue] = useState("");
 const [pieChartData, setPieChartData] = useState("");

//  const[A,setA]=useState("");
// const[B,setB]=useState("");
// const[C,setC]=useState("");
// const[D,setD]=useState("");
// const[E,setE]=useState("");
// const[F,setF]=useState("");
// const[G,setG]=useState("");
// const[H,setH]=useState("");
// const[I,setI]=useState("");
// const[J,setJ]=useState("");
// const[K,setK]=useState("");
// const[L,setL]=useState("");
// const[M,setM]=useState("");
// const[N,setN]=useState("");
// const[O,setO]=useState("");
// const[P,setP]=useState("");
// const[Q,setQ]=useState("");
// const[R,setR]=useState("");
// const[S,setS]=useState("");
// const[T,setT]=useState("");
// const[U,setU]=useState("");
// const[V,setV]=useState("");
// const[W,setW]=useState("");
// const[X,setX]=useState("");
// const[Y,setY]=useState("");
// const[Z,setZ]=useState("");
 /// For navigate function
 const navigate = useNavigate();

 function logout() {
 window.localStorage.removeItem("username");
 window.localStorage.removeItem("password");

 navigate("/account/login");
 }
 
 let optionsNew = [];

 var username = window.localStorage.getItem('username')
 var password = window.localStorage.getItem('password')
 var currentUserrole = window.localStorage.getItem('userrole')
 //alert(window.localStorage.getItem('password'));

 /*
 var pieChartData = [
 ['Firefox', 45.0],
 ['IE', 26.8],
 {
 name: 'Chrome',
 y: 12.8,
 sliced: true,
 selected: true
 },
 
 ['Safari', 8.5],
 ['Opera', 6.2],
 ['Others', 0.7]
 ];
 */

 const pieChartOptions = {

    chart: {
        type: "pie"
    },
    title: {
        text: '',
    },
    series: [
    {
        type: 'pie',
        name: 'Browser share',
        data: pieChartData,
        dataLabels: {
            enabled: true, // enable DataLabels
            format: '{point.name}: {y}', // format to replicatte Traditional Web labels
        }
    }
    ]
};


 const batchNumberChoseFunction = event => {
 setBatchNumber(event.value); 
 //alert(event.value);
 axios
 .get(window.url+"/master/ProdOrderReport/"+ event.value +"/",
 
 )
 .then((res) => {
    // alert("anu")
// alert(res.data[0].production_time)
    setProductionOrderNumber(res.data[0].process_order_number);
    setLineName(res.data[0].line_name );
    // setProductName(res.data[0].product_name);
    setSystemName(res.data[0].system_name);
 
    axios
    .get(window.url+"/master/product/"+ res.data[0].product_name +"/",
    
    )
    .then((res1)=>{
        setProductName(res1.data[0].name);
    })

    axios
    .get(window.url+"/master/productionorderidinprintertable/"+ res.data[0].process_order_number +"/",
    
    )
    .then((res2)=>{
        //  alert(res2.data[0].expiry_date)
        setPackage(res2.data[0].packaging_Version)
        setStatus(res2.data[0].status)
        setExpiry(res2.data[0].expiration_date)
        axios
        .get(window.url+"/productionline/registeredsystemline/"+ res2.data[0].line +"/",
        
        )
        .then((res3)=>{

        setLineName(res3.data[0].line);
        setSystemName(res3.data[0].system_name);
        })
    })
 });
 }

 const getBatchNumberTableData = (batchNumberFunctionValue) => {
 //setBatchNumber(event.value);
  
//  alert(batchNumberFunctionValue);
 axios
 .get(window.url+"/master/ProdOrderReport/"+batchNumberFunctionValue +"/",
 
 )
 .then((res) => {
// alert(res.data[0].damagedcount)
        setAcceptedValue(res.data[0].acceptedcount);
        setSpecimenValue(res.data[0].specimencount);
        setDamagedValue(res.data[0].damagedcount);
        setSampleValue(res.data[0].samplecount);
        setChallengedValue(res.data[0].challengedcount);
        setTeachValue(res.data[0].teachcount);
        setInProcessValue(res.data[0].inprocesscount);
        setRejectedByCameraValue(res.data[0].rejectedbycameracount);
        setUnusedValue(res.data[0].unusedcount);
        setTime(res.data[0].current_production_time);
        setDate(res.data[0].current_production_date)
  


setPieChartData(
    [
    ['Accepted', res.data[0].acceptedcount],
    ['Specimen', res.data[0].specimencount],
    ['Damaged', res.data[0].damagedcount],
    ['Sample', res.data[0].samplecount],
    ['Challenged', res.data[0].challengedcount],
    ['Teach', res.data[0].teachcount],
    ['In process', res.data[0].inprocesscount],
    ['Rejected by camera', res.data[0].rejectedbycameracount],
    ['Unused', res.data[0].unusedcount] ,
   
   
   
    ]
   
    );
 
 });
 }

 const getBatchReportData = (batchNumberFunctionValue) => {
    axios
    .get(window.url+"/master/ProdOrderReport/"+batchNumberFunctionValue +"/",
    
    )
    .then((res) => {
   
           setAcceptedValue(res.data[0].accepted);
           setSpecimenValue(res.data[0].specimen);
           setDamagedValue(res.data[0].damaged);
           setSampleValue(res.data[0].sample);
           setChallengedValue(res.data[0].challenged);
           setTeachValue(res.data[0].teach);
           setInProcessValue(res.data[0].inprocess);
           setRejectedByCameraValue(res.data[0].rejectedbycamera);
           setUnusedValue(res.data[0].unused);
           setTime(res.data[0].production_time);
           setDate(res.data[0].production_date)
     
   
   
   setPieChartData(
       [
       ['Accepted', res.data[0].accepted],
       ['Specimen', res.data[0].specimen],
       ['Damaged', res.data[0].damaged],
       ['Sample', res.data[0].sample],
       ['Challenged', res.data[0].challenged],
       ['Teach', res.data[0].teach],
       ['In process', res.data[0].inprocess],
       ['Rejected by camera', res.data[0].rejectedbycamera],
       ['Unused', res.data[0].unused] ,
      
      
      
       ]
      
       );
    
    });
 }

 function getBatchNumbers() {
 axios
 .get(window.url+"/master/ProdOrderReport/",
 
 )
 .then((res) => {
 let batchNumberOptionsInitial = "";
 res.data.map(data => {
 optionsNew.push({ value: data.batch_number, label: data.batch_number });
 });
 
 setBatchNumberOptionsNew(optionsNew);
 });
 }
 
 useEffect(() => {
 getBatchNumbers();
 }, []);


 async function exportReportsToPDF() {
 const doc = new jsPDF("p", "px");
 const elements = document.getElementsByClassName("custom-chart");
 doc.text(15, 40, 'Production Report');
 //doc.autoTable({ html: '#productionOrderReportSearchTableID' });
 doc.autoTable(
 { 
 html: '#productionOrderReportSearchTableID', 
 startY:50,
 margin: { 
 left: 15 
 }, 
 didParseCell: (data) => {
 if (data.column.index === 0 || data.column.index === 2 || data.column.index === 4 || data.column.index === 6) {
 data.cell.styles.fontStyle = "bold";
 }
 },
 }
 );
 doc.text(15, 120, 'Chart');
 const imgData = await htmlToImage.toPng(elements.item(0));
 //doc.html(100, 200, "<");
 doc.addImage(imgData, "PNG",225, 130, 200, 160, `image`);
 doc.autoTable(
 { 
 html: '#productionOrderReportResultTableID', 
 startY:130,
 margin: { 
 left: 15,
 right: 250,
 }, 
 didParseCell: (data) => {
 if (data.row.index === 0) {
 data.cell.styles.fillColor = [245, 226, 188];
 data.cell.styles.fontStyle = "bold";
 }
 if(data.column.index === 1) {
 data.cell.styles.halign = "center";
 }
 },
 
 }
 );
 
//  30=225

//  doc.autoPrint();

 doc.save(`Reports.pdf`);
 }

//  async function exportReportsToprint() {
//   const doc = new jsPDF("p", "px");
//   const elements = document.getElementsByClassName("custom-chart");
//   doc.text(15, 40, 'Production order report');
//   //doc.autoTable({ html: '#productionOrderReportSearchTableID' });
//   doc.autoTable(
//   { 
//   html: '#productionOrderReportSearchTableID', 
//   startY:50,
//   margin: { 
//   left: 15 
//   }, 
//   didParseCell: (data) => {
//   if (data.column.index === 0 || data.column.index === 2 || data.column.index === 4 || data.column.index === 6) {
//   data.cell.styles.fontStyle = "bold";
//   }
//   },
//   }
//   );
//   doc.text(15, 120, 'Chart');
//   const imgData = await htmlToImage.toPng(elements.item(0));
//   //doc.html(100, 200, "<");
//   doc.addImage(imgData, "PNG", 225, 130, 200, 160, `image`);
//   doc.autoTable(
//   { 
//   html: '#productionOrderReportResultTableID', 
//   startY:130,
//   margin: { 
//   left: 15,
//   right: 250,
//   }, 
//   didParseCell: (data) => {
//   if (data.row.index === 0) {
//   data.cell.styles.fillColor = [245, 226, 188];
//   data.cell.styles.fontStyle = "bold";
//   }
//   if(data.column.index === 1) {
//   data.cell.styles.halign = "center";
//   }
//   },
  
//   }
//   );
  

 
//    doc.autoPrint();
// //  window.print()
//    doc.save(`Reports.pdf`);
//   }

    return (
        <>
         
         
            <div class="container-fluid">
                <div class="card shadow mb-4"> 
                    <div class="card-header py-3">
                        <div className='row'>
                            <div className='col-10'>
                              <h5 class="m-0 font-weight-bold text-primary">Production Report</h5>
                            </div>
                        </div>
                                                      
                    </div>

                    <div class="card-body">  
                      {/* {warningDIVstate}  */}
                        <table class="table table-borderless productionOrderReportSearchTable" id="productionOrderReportSearchTableID">
                            <tbody>
                                <tr>
                                    <td class="productionOrderReportSearchTD">Batch number</td>
                                    <td class="productionOrderReportSearchTD">
                                        <Select onChange={batchNumberChoseFunction} options={batchNumberOptionsNew} />
                                    </td>
                                    <td class="productionOrderReportSearchTD">PO number</td>
                                    <td class="productionOrderReportSearchTD">
                                        <input
                                            type="text"
                                            size="5"
                                            value={productionOrderNumber}
                                            className="form-control"
                                        />
                                        {/* <span class="productionOrderReportSearchBoxInvisble">
                                            {productionOrderNumber}
                                        </span> */}
                                    </td>
                                    <td class="productionOrderReportSearchTD">Production Date</td>
                                    <td class="productionOrderReportSearchTD">
                                        <input
                                        type="date"
                                        value={date}
                                        className="form-control"
                                        onChange={(e) => setDate(e.target.value)}
                                        />

                                        {/* <span class="productionOrderReportSearchBoxInvisble">
                                            {dateFrom}
                                        </span> */}
                                    </td>
                                    <td class="productionOrderReportSearchTD">Time</td>
                                    <td class="productionOrderReportSearchTD">
                                        <input
                                        type="time"
                                        className="form-control"
                                        value={time}
                                        onChange={(e) => setTime(e.target.value)}
                                        />

                                        {/* <span class="productionOrderReportSearchBoxInvisble">
                                            {dateTo}
                                        </span> */}

                                    </td>
                                </tr>
                                <tr>
                                    <td class="productionOrderReportSearchTD">Packaging level name</td>
                                    <td class="productionOrderReportSearchTD">
                                        <input
                                        type="text"
                                        className="form-control"
                                    value={package_name}
                                        /> 
                                    </td>
                                    <td class="productionOrderReportSearchTD">Product name</td>
                                    <td class="productionOrderReportSearchTD">{productName}</td>
                                    <td class="productionOrderReportSearchTD">Expiry date</td>
                                    <td class="productionOrderReportSearchTD">
                                        <input
                                        type="date"
                                        className="form-control"
                                        value={expiry_date}
                                        />
                                    </td>
                                    <td class="productionOrderReportSearchTD">Status</td>
                                    <td class="productionOrderReportSearchTD">
                                        <input
                                        type="text"
                                        className="form-control"
                                        value={status}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td class="productionOrderReportSearchTD">Line name</td>
                                    <td class="productionOrderReportSearchTD">{lineName}</td>
                                    <td class="productionOrderReportSearchTD">System name</td>
                                    <td class="productionOrderReportSearchTD">{systemName}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="container">
                            <div class="row">
                                <div class="col-6">
 
                                </div>
                                <div class="col-2">
                                    <button
                                    className="btn btn-success"
                                    onClick={() => getBatchNumberTableData(batchNumber)}
                                    ><i class="fa-solid fa-book"></i>&nbsp;
                                    Current Report Based On Line
                                    </button> 
                                </div>
                                <div class="col-2">
                                    <button
                                    className="btn btn-success"
                                    onClick={() => getBatchReportData(batchNumber)}
                                    ><i class="fa-solid fa-book"></i>&nbsp;
                                   Batch Report After Stop
                                    </button> 
                                </div>
                           
                                {/* <div class="col-2">
                                <button
                                className="btn btn-success"
                                onClick={() => exportReportsToprint()}
                                >
                                Print Page
                                </button> 
                                </div> */}

                                <div class="col-2">
                                    <button
                                    className="btn btn-success"
                                    onClick={() => exportReportsToPDF()}
                                    style={{height:"60px"}}><i class="fa-solid fa-file-pdf"></i>&nbsp;
                                    Export to PDF
                                    </button> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div id="content">
        {/* <Header>      
        </Header> */}
                    <div class="container-fluid">
                        <div class="card shadow mb-4">
                            <div class="card-header py-3">
                                <div class="row">
                                    <div class="col-6">
                                        <h5>
                                            Table
                                        </h5>
                                    </div>
                                    <div class="col-6">
                                        <h5>
                                            Chart
                                        </h5>
                                    </div>
                                </div>                     
                            </div>
                        

                            <div class="card-body">
                                <div class="table-responsive">
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="productionOrderReportResultTableDIVouter">
                                                <div className="productionOrderReportResultTableDIV">
                                                    <table class="productionOrderReportResultTable" id="productionOrderReportResultTableID">
                                                        <tr>
                                                        <th class="productionOrderReportResultTH">Name</th>
                                                        <th class="productionOrderReportResultTH">Count</th>
                                                        </tr>
                                                        <tr>
                                                        <td class="productionOrderReportResultTD">Accepted</td>
                                                        <td class="productionOrderReportResultTD">{Accepted}</td>

                                                        </tr>
                                                        <tr>
                                                        <td class="productionOrderReportResultTD">Specimen</td>
                                                        <td class="productionOrderReportResultTD">{Specimen}</td>

                                                        </tr>
                                                        <tr>
                                                        <td class="productionOrderReportResultTD">Damaged</td>
                                                        <td class="productionOrderReportResultTD">{Damaged}</td>
                                                        </tr>

                                                        <tr>
                                                        <td class="productionOrderReportResultTD">Sample</td>
                                                        <td class="productionOrderReportResultTD">{Sample}</td>
                                                        </tr>

                                                        <tr>
                                                        <td class="productionOrderReportResultTD">Challenged</td>
                                                        <td class="productionOrderReportResultTD">{Challenged}</td>
                                                        </tr>

                                                        <tr>
                                                        <td class="productionOrderReportResultTD">Teach</td>
                                                        <td class="productionOrderReportResultTD">{Teach}</td>
                                                        </tr>

                                                        <tr>
                                                        <td class="productionOrderReportResultTD">In process</td>
                                                        <td class="productionOrderReportResultTD">{InProcess}</td>
                                                        </tr>

                                                        <tr>
                                                        <td class="productionOrderReportResultTD">Rejected by camera</td>
                                                        <td class="productionOrderReportResultTD">{RejectedByCamera}</td>
                                                        </tr>

                                                        <tr>
                                                        <td class="productionOrderReportResultTD">Unused</td>
                                                        <td class="productionOrderReportResultTD">{Unused}</td>
                                                        </tr>


                                                        {/* <tr>
                                                            <td class="productionOrderReportResultTD">A</td>
                                                            <td class="productionOrderReportResultTD">{A}</td>
                                                            </tr>

                                                            <tr>
                                                            <td class="productionOrderReportResultTD">B</td>
                                                            <td class="productionOrderReportResultTD">{B}</td>
                                                            </tr>
                                                            <tr>
                                                            <td class="productionOrderReportResultTD">C</td>
                                                            <td class="productionOrderReportResultTD">{C}</td>
                                                            </tr>

                                                            <tr>
                                                            <td class="productionOrderReportResultTD">D</td>
                                                            <td class="productionOrderReportResultTD">{D}</td>
                                                            </tr>

                                                            <tr>
                                                            <td class="productionOrderReportResultTD">E</td>
                                                            <td class="productionOrderReportResultTD">{E}</td>
                                                            </tr>

                                                            <tr>
                                                            <td class="productionOrderReportResultTD">F</td>
                                                            <td class="productionOrderReportResultTD">{F}</td>
                                                            </tr>

                                                            <tr>
                                                            <td class="productionOrderReportResultTD">G</td>
                                                            <td class="productionOrderReportResultTD">{G}</td>
                                                            </tr>

                                                            <tr>
                                                            <td class="productionOrderReportResultTD">H</td>
                                                            <td class="productionOrderReportResultTD">{H}</td>
                                                            </tr>

                                                            <tr>
                                                            <td class="productionOrderReportResultTD">I</td>
                                                            <td class="productionOrderReportResultTD">{I}</td>
                                                            </tr>

                                                            <tr>
                                                            <td class="productionOrderReportResultTD">J</td>
                                                            <td class="productionOrderReportResultTD">{J}</td>
                                                            </tr>
                                                            <tr>
                                                            <td class="productionOrderReportResultTD">K</td>
                                                            <td class="productionOrderReportResultTD">{K}</td>
                                                            </tr>
                                                            <tr>
                                                            <td class="productionOrderReportResultTD">L</td>
                                                            <td class="productionOrderReportResultTD">{L}</td>
                                                            </tr>

                                                            <tr>
                                                            <td class="productionOrderReportResultTD">M</td>
                                                            <td class="productionOrderReportResultTD">{M}</td>
                                                            </tr>

                                                            <tr>
                                                            <td class="productionOrderReportResultTD">N</td>
                                                            <td class="productionOrderReportResultTD">{N}</td>
                                                            </tr>

                                                            <tr>
                                                            <td class="productionOrderReportResultTD">O</td>
                                                            <td class="productionOrderReportResultTD">{O}</td>
                                                            </tr>

                                                            <tr>
                                                            <td class="productionOrderReportResultTD">P</td>
                                                            <td class="productionOrderReportResultTD">{P}</td>
                                                            </tr>

                                                            <tr>
                                                            <td class="productionOrderReportResultTD">Q</td>
                                                            <td class="productionOrderReportResultTD">{Q}</td>
                                                            </tr>

                                                            <tr>
                                                            <td class="productionOrderReportResultTD">R</td>
                                                            <td class="productionOrderReportResultTD">{R}</td>
                                                            </tr>

                                                            <tr>
                                                            <td class="productionOrderReportResultTD">S</td>
                                                            <td class="productionOrderReportResultTD">{S}</td>
                                                            </tr>
                                                            <tr>
                                                            <td class="productionOrderReportResultTD">T</td>
                                                            <td class="productionOrderReportResultTD">{T}</td>
                                                            </tr>
                                                            <tr>
                                                            <td class="productionOrderReportResultTD">U</td>
                                                            <td class="productionOrderReportResultTD">{U}</td>
                                                            </tr>
                                                            <tr>
                                                            <td class="productionOrderReportResultTD">V</td>
                                                            <td class="productionOrderReportResultTD">{V}</td>
                                                            </tr>
                                                            <tr>
                                                            <td class="productionOrderReportResultTD">W</td>
                                                            <td class="productionOrderReportResultTD">{W}</td>
                                                            </tr>
                                                            <tr>
                                                            <td class="productionOrderReportResultTD">X</td>
                                                            <td class="productionOrderReportResultTD">{X}</td>
                                                            </tr>
                                                            <tr>
                                                            <td class="productionOrderReportResultTD">Y</td>
                                                            <td class="productionOrderReportResultTD">{Y}</td>
                                                            </tr>
                                                            <tr>
                                                            <td class="productionOrderReportResultTD">Z</td>
                                                            <td class="productionOrderReportResultTD">{Z}</td>
                                                        </tr> */}
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div className="custom-chart">
                                            <HighchartsReact highcharts={Highcharts} options={pieChartOptions} /> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                      
        </>
    )
}

export default  Productionreport
