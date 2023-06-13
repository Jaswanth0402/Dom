
import { useEffect, useState } from 'react';
import axios from 'axios';

interface ApiResponse {
  id: number;
  Name:string;
  Email: string;
  
}

class MyModel {
  id: number;
  Name: string;
  Email: string;
  
  constructor(apiResponse: ApiResponse) {
    this.id = apiResponse.id;
    this.Name = apiResponse.Name;
    this.Email =apiResponse.Email;
    
  }
}


export default function Singleapi() {
  const [model, setModel] = useState<MyModel[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ApiResponse[]>('https://6451f642a2860c9ed4fe7357.mockapi.io/user/Curd');
        const apiData = response.data;
        const constructedModel = apiData.map((data)=>new MyModel(data));
        
        setModel(constructedModel);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Render your component using the model
  return (
    <div id='center'>
        
    
      {model.length > 0 ? (
        
        <table id='table'>
        <thead>
            <th>Name</th>
            <th>Email</th>
        </thead>
        {model.map((item)=>(
        <tbody >
          <tr key ={item.id}>
          <td>{item.Name}</td>
          <td>{item.Email}</td>
          </tr>
        </tbody>
        ))
        
    }
    
       </table>
      ): (
        <p>Loading...</p>
      )}
      <h4>Total User:{model.length}</h4>

    </div>
   
  );
}
