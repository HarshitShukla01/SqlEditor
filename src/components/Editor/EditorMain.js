import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-eclipse";
import "ace-builds/src-noconflict/theme-cobalt";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-one_dark";
import RefreshIcon from '@mui/icons-material/Refresh';
import TableMain from "../TableCreate/TableMain";
import DropMenu from "./DropMenu";
import { Button, IconButton } from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Tooltip from '@mui/material/Tooltip';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Divider } from "@mui/material";

const Editor = ({arrBody,arrIndex,setArrBody,setArrResult,arrResult,setShowTabsList}) => {
  const [value, setValue] = React.useState(arrBody[arrIndex]);
  const [displayResult, setDisplayResult] = React.useState(arrResult[arrIndex]);
  const onChange = (newValue) => {
    arrBody[arrIndex] = newValue;
    setArrBody(arrBody);
    setValue(newValue);
  };
  const [theme, setTheme] = React.useState("cobalt");
  
  const onSubmit = () => {
    if(value.length > 0){
      arrResult[arrIndex] = true;
      setArrResult(arrResult);
      setDisplayResult(true);
    }
    else{
      alert("Please enter a query");
    }
  };
 
  const refreshDataFunc = () => {
    arrResult[arrIndex] = false;
    setArrResult(arrResult);
    setDisplayResult(false);
    onChange("");
  }
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(value);
  }
  return (
    <>
        <div style={{display: "flex" ,justifyContent: "space-between",paddingLeft:"5px",paddingRight:"5px",borderBottom:"1px solid black"}}>
        <div className="leftMenuItemClass">    
          <Tooltip title="Refresh Data" placement="top">
          <IconButton onClick={refreshDataFunc} className="refreshIconClass"> 
             <RefreshIcon  className="marginLeftDeviceClass" style={{backgroundColor:"rgb(25 118 210)" , borderRadius:"50%", padding:"1px",color:"white"}}/>
          </IconButton>
          </Tooltip>
          <Tooltip title="Copy Query" placement="top">
          <IconButton onClick={copyToClipboard} className="marginLeftDeviceClass">
              <ContentCopyIcon className="marginLeftDeviceClass" style={{color:"rgb(25 118 210)"}}/>
          </IconButton>
          </Tooltip>
          <DropMenu setTheme={setTheme}/>
          <Button 
          variant="outlined" 
          className="marginLeftDeviceClass tabButtonShowClass"
          sx={{marginLeft:"10px",marginTop:"1px",border: "2px solid",fontWeight: "bold",paddingBottom:"2px",color:"rgb(25 118 210)"}}
          onClick={() => setShowTabsList(p => !p)}>
          TABS</Button>
          
          </div>
         <div className="divQuerySubmitButton">
          <Button 
           onClick={onSubmit} 
            variant="contained"
            color="success"
            style={{marginTop:"1.5px",border: "1px solid",fontWeight: "bold"}}
            className="querySubmitButton"
           > <span className="runBtnShowClass">Run Query</span><PlayArrowIcon/>
           </Button>
           </div>
          
        </div>
        <AceEditor
          id="editor"
          aria-label="editor"
          mode="mysql"
          theme={theme}
          name="editor"
          fontSize={18}
          minLines={12}
          maxLines={15}
          width="100%"
          showPrintMargin={false}
          showGutter
          placeholder="Write your Query here..."
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
          }}
          value={value}
          onChange={onChange}
          showLineNumbers
        />
        <Divider style={{borderBottom:"1px solid black"}}/>
        {/* <div style={{textAlign:"start"}}>
         <button onClick={onSubmit} className="buttonQuerySubmit">Run Query</button>
        </div> */}
        {displayResult ? <TableMain query={value}/> : null}
  </>
  );
};

export default Editor;
