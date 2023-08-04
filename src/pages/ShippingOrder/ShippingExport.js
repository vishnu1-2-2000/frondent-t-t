import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";
// import Navbar from "../../components/Navbar";
import Navbar from "../../components/Navigation/Navbar";
function ShippingExport() {
   return (
    <form>
      <table class="table table-borderless productionOrderReportSearchTable" id="productionOrderReportSearchTableID">                              
        <tbody>
          <div>
            <h2>Regulation</h2>
            <label>
              Dava
            </label>
            <input type="radio"/>
          </div>
          <div>
            <label>
              TURKEY
            </label>
            <input type="radio"/>
          </div>                                
          <div>
            <h2>Serial Number Provider</h2>
          </div>
          <div>
            <label>
              Tracelink
            </label>
            <input type="radio"/>
          </div>
          <div>
            <label>
              Sap Attp
            </label>
            <input type="radio"/>
          </div>
          <div>
            <label>
              Sap Attp 2.0
            </label>
            <input type="radio"/>
          </div>
          <div>
            <label>
              Rfxced
            </label>
            <input type="radio"/>
          </div>
          <div>
            <label>
              Axway
            </label>
            <input type="radio"/>
          </div>
          <div>
            <label>
              Sap pharma Network
            </label>
            <input type="radio"/>
          </div>
          <div>
            <label>
              Verify Brand
            </label>
            <input type="radio"/>                            
          </div>
          <div>
            <h2>Other Format</h2>
          </div>
          <div>
            <label>
              Xml
            </label>
            <input type="radio"/>
          </div>
          <div>
            <label>
              Epcis 1.2
            </label>
            <input type="radio"/>
          </div>
          <div>
            <label>
              Epcis 1.0
            </label>
            <input type="radio"/>
          </div>
          <div>
            <label>
              Epcis 1.1
            </label>
            <input type="radio"/>
          </div>
          <div>
            <td>
              <button className="btn btn-primary">OK</button>&nbsp;&nbsp;&nbsp;&nbsp;
              <button className="btn btn-danger">cancel</button>
            </td>
          </div>
        </tbody>
      </table>                                  
    </form>
  )
}

export default ShippingExport
