import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { temporarydata , customerColumn} from "./TempData";
// import Container from "@mui/material/Container";

export default function TableMain() {
  
  // const printData = () => {
  //   const arr = getTablesMockData();
  //   for(let x in arr){
  //     console.log(arr[x]["columns"]);
  //   }
  // }
  // printData();
  return (
    <div  style={{ height: 320, width: "100%"}}>
      <DataGrid
        columns={customerColumn}
        rows={temporarydata["customers"]}
        getEstimatedRowHeight={() => 50}
        // sx={{backgroundColor:"#ffffff"}}
        getRowHeight={() => 'auto'}
        components={{ Toolbar: GridToolbar }}
        getRowId={(row) => row.customerID}
      />
    </div>
  );
}
