// //import React from "react";
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// import Button         from "@material-ui/core/Button";
// import exportFromJSON from "export-from-json";

// export default function XMLExport(props) {
//   const [data, setData] = useState([]);
    
//   axios
//     .get("http://127.0.0.1:8000/master/product/",
             
//               )
//               .then((res) => {
          
//                 setData(res.data);
                
//               });
        
           
//           const xmlData = data
                              
//   function onClick() {
//     const data1 =  xmlData;//dataForXml
//     const fileName = props.fileName ? props.fileName : "exported";
//     let fields = props.fields ? props.fields : [];  //fieldsAsObjects or fieldsAsStrings, empty list means "use all"
//     const exportType = 'xml';
//     exportFromJSON({ data1,fileName, fields, exportType})
     
  

//   }

//   return (
//     <Button onClick={onClick}>
//       download
//     </Button>
//   )

// }


import React, { useState, useEffect } from "react";
import axios from "axios";






export default function XMLExport() {
  const [data, setData] = useState([]);
  
  const [processordernumber,setProcessordernumber]=useState();
  function getData(){
  alert("successfully Get Data")
    axios
    .get(window.url+"/master/shippoint/"+processordernumber+"/",
   
    )
    .then((res) => {

      setData(res.data);
      
    });


  }
  const xmlData = data    
  // alert("anu");
         
       
                            
                    

function convertXML(xmlData, tagName, arrayElementTag = "somMessagebody",arrayElementTag1 = "somMessageHeader", spaces = 0) {
    const tag = tagName
      .replace(/[^_a-zA-Z 0-9:\-\.]/g, "")
      .replace(/^([ 0-9-:\-\.]|(xml))+/i, "")
      .replace(/ +/g, "-");

    const indentSpaces = Array(spaces + 1).join(" ");

    if (xmlData === null || xmlData === undefined) {
      return `${indentSpaces}<${tag} />`;
    }

    const content =
      Object.prototype.toString.call(xmlData) === "[object Array]"
        ? xmlData
            .map((item) =>
              convertXML(item, arrayElementTag, arrayElementTag, spaces + 2)
            )
            .join("\n")
        : typeof xmlData === "object"
        ? Object.keys(xmlData)
            .map((key) => [key, xmlData[key]])
            .map(([key, value]) =>
              convertXML(value, key, arrayElementTag,arrayElementTag1, spaces + 2)
            )
            .join("\n")
        : indentSpaces +
          "  " +
          String(xmlData).replace(/([<>&])/g, (_, $1) => {
            switch ($1) {
              case "<":
                return "&lt;";
              case ">":
                return "&gt;";
              case "&":
                return "&amp;";
              default:
                return "";
            }
          });

    const contentWithWrapper = `${indentSpaces}<${tag}>
            ${content}
            ${indentSpaces}</${tag}>`;

    return contentWithWrapper;
  }

  

function createXMLData(xmlData) {




    const content = `<?xml version="1.0" encoding="utf-8" standalone="yes"?><!DOCTYPE som:SOMsalesShipmentMessage 
    > 
    
    ${convertXML(xmlData, "somSOMSalesShipmentMessage")}
    
    `;
    

    const dataStr =
    "data:text/application/xml;charset=utf-8," + encodeURIComponent(content);
    let downloadData = document.getElementById("downloadData");
    downloadData.setAttribute("href", dataStr);
    downloadData.setAttribute("download", "xmlData.xml");
    downloadData.click();
  }



// useEffect(()=>
// {
//   getData();
// },[]);

return (
  <>
    <div className="row">
      <div className="col-4"></div>
      <div className="col-4" id="colmiddle">
        <h3>Data Export to Xml</h3>
        <hr></hr>
        <h5>Shipping Files</h5>
        <br></br>
        <input type ="text" placeholder="Enter Po number" onChange={(e) => setProcessordernumber(e.target.value)} className="form-control" ></input>
        <a id="downloadData" style={{ display: "none" }}></a>
        <br></br><br></br>
        <button
              type="submit"
              className="btn btn-primary"   
              onClick={getData}
              >
              Get
        </button>
        &nbsp;&nbsp;
        <button id="b1"
        onClick={() => {
          
          createXMLData(xmlData);
        }}
        className="btn btn-success" 
        >
        Download
        </button> 
     
  
        <hr id="hr"></hr>
   
        <h5>Commissioning Files</h5>
        <br></br>
        <input type ="text" placeholder="Enter Po number" onChange={(e) => setProcessordernumber(e.target.value)} className="form-control" ></input>
        <a id="downloadData" style={{ display: "none" }}></a>
        <br></br><br></br>
        <button
              type="submit"
              className="btn btn-primary"   
              onClick={getData}
              >
              Get
        </button>
        &nbsp;&nbsp;
        <button id="b1"
        onClick={() => {
          
          createXMLData(xmlData);
        }}
        className="btn btn-success" 
        >
          Download
        </button> 
        <hr id="hr"></hr>
    
        <h5>Aggreagation Files</h5>
        <br></br>
        <input type ="text" placeholder="Enter Po number" onChange={(e) => setProcessordernumber(e.target.value)} className="form-control" ></input>
        <a id="downloadData" style={{ display: "none" }}></a>
        <br></br><br></br>
        <button
              type="submit"
              className="btn btn-primary"   
              onClick={getData}
              >
              Get
        </button>
        &nbsp;&nbsp;
        <button id="b1"
        onClick={() => {
          
          createXMLData(xmlData);
        }}
        className="btn btn-success" 
        >
          Download
        </button> 
        <hr></hr>
      </div>
 
      <div className="col-4">

      </div>
    </div> 
  </>
  );
}

