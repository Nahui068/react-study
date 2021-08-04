import React from "react";
import ColorBox from "./components/colorBox";
//import ColorContext from "./contexts/color";
import { ColorProvider } from "./contexts/color";
import SelectColors from "./components/SelectColors";

const App = () => {
  return (
    <div>
      {/* <ColorContext.Provider value = {{ color: 'red'}}>*/} {/* Provider을 사용하면 Context의 value를 변경할 수 있음 */}
      <ColorProvider>  
        <div>
          <SelectColors />
          <ColorBox />
        </div>
      </ColorProvider>
      {/*</ColorContext.Provider>*/}
      
    </div>
  );
};

export default App;
