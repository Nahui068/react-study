//import React, {useState} from "react";
import React from "react";
//import axios from 'axios';
import NewsList from './components/NewsList';

/*const App = () => {
  const[data,setData] = useState(null);
  const onClick = async () => {
    try{
      const response = await axios.get(
        //'https://jsonplaceholder.typicode.com/todos/1',
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=8628b58b8b6e4402958ac4380479d648',
        );
      setData(response.data);
    }catch(e){
      console.log(e);
    }
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data,null,2)} readOnly={true}></textarea>}
    </div>
  );
};*/
const App = () => {
  return <NewsList />
}

export default App;
