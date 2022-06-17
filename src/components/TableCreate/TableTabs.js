import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Editor from '../Editor/EditorMain';
// import "react-tabs/style/react-tabs.css";
import AddBoxIcon from '@mui/icons-material/AddBox';
import './styles.css';
import IconButton from "@mui/material/IconButton";


export default function TableTabs() {
  const [arrHead, setArrHead] = React.useState(["Tab 1"]);
  const [arrBody, setArrBody] = React.useState([""]);
  const [arrResult, setArrResult] = React.useState([false]);

  const AddTabFunc = () => {
    setArrHead((prev) => {
      const r = "Tab " + (arrHead.length+1);
      return [...prev, r]
    })
    setArrBody((prev) => {
        return [...prev, ""]
    })
    setArrResult((prev) => {
        return [...prev, false]
    })
  }

  return (
    <div className="App">
      <Tabs>
        <div>
          <TabList>
          {
              arrHead.map((val,index) => {
                  return <Tab><p >{val}</p></Tab>
              })
              
          }
          
          </TabList>
          <TabList style={{height:"5%",padding:"0px"}}>
            <button onClick={AddTabFunc} className="buttonCreateNewTab"> 
                {/* <AddBoxIcon /> */}
                ADD TAB
            </button>
          </TabList>
        </div>
        {
            arrBody.map((val,index) => {
                return <TabPanel>
                    <div className="panel-content">
                        <Editor 
                          arrBody={arrBody} 
                          arrIndex={index} 
                          setArrBody={setArrBody} 
                          setArrResult = {setArrResult}
                          arrResult={arrResult}
                        />
                    </div>
                </TabPanel>
            })
        }
        
      </Tabs>

      
    </div>
  );
}

