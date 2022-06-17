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
import { Box } from "@mui/system";
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
  const [theme, setTheme] = React.useState("github");
 
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
          <IconButton onClick={refreshDataFunc}>
             <RefreshIcon  style={{backgroundColor:"rgb(25 118 210)" , borderRadius:"50%", padding:"1px",color:"white"}}/>
          </IconButton>
          </Tooltip>
          <Tooltip title="Copy Query" placement="top">
          <IconButton onClick={copyToClipboard}>
              <ContentCopyIcon style={{color:"rgb(25 118 210)"}}/>
          </IconButton>
          </Tooltip>
          <Button 
          variant="outlined" 
          color="success" 
          sx={{marginLeft:"10px",marginTop:"1px",border: "2px solid",fontWeight: "bold",paddingBottom:"2px"}}
          onClick={() => setShowTabsList(p => !p)}>TABS</Button>

          <DropMenu setTheme={setTheme}/>
          </div>
         <div >
          <Button 
           onClick={onSubmit} 
            variant="contained"
            color="success"
            style={{marginTop:"1.5px",border: "1px solid",fontWeight: "bold"}}
          // className="buttonQuerySubmit"
           >Run Query<PlayArrowIcon/>
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
