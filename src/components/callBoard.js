import React from "react";
import "../App.css";


function callBoard() {
    return (
        <div class="wrap">
          <iframe
            title="callBoard"           
            sandbox="allow-same-origin allow-forms allow-scripts"  
            src="https://synovus.clearviewportal.com/Admin/WallboardView.aspx?id=4eeaa788-2b49-4bba-ba18-b5bcb91f7c86"
          ></iframe>
        </div>  
        );
    }
    
    export default callBoard;