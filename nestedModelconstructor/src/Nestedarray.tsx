import React, { useEffect, useState } from 'react';
import axios from 'axios';


interface ApiResponse {
    id: number;
    name: string;
    nestedArray: NestedItem[];
  }
  
  interface NestedItem {
    nestedId: number;
    nestedName: string;
    // Other properties
  }
  
  
  class NestedModel {
    nestedId: number;
    nestedName: string;
  
    constructor(nestedItem: NestedItem) {
      this.nestedId = nestedItem.nestedId;
      this.nestedName = nestedItem.nestedName;
      // Other assignments
    }
  }
  
  class MyModel {
    id: number;
    name: string;
    nestedArray: NestedModel[];
  
    constructor(apiResponse: ApiResponse) {
      this.id = apiResponse.id;
      this.name = apiResponse.name;
      this.nestedArray = apiResponse.nestedArray.map(
        (nestedItem) => new NestedModel(nestedItem)
      );
    }
  }
  
  
 
 export default function Nestedarray() {
    const [models, setModels] = useState<MyModel[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get<ApiResponse[]>('https://64520d1ebce0b0a0f73b4d15.mockapi.io/Learning');
          const apiData = response.data;
          const constructedModels = apiData.map((data) => new MyModel(data));
          setModels(constructedModels);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    // Render your component using the models and nested models
    return (
      <div>
        {models.length > 0 ? (
         <table>
            <thead>
                <th>Name</th>
                <th>NestedName</th>
            </thead>
            
            {models.map((model) => (
            <tbody>
                <tr key={model.id}>
                    <td>{model.name}</td>
                    {model.nestedArray.map((nestedModel) => (
                    <td key={nestedModel.nestedId}>{nestedModel.nestedName}</td>
                    ))}
                </tr> 
            </tbody>

            ))}
            
           </table>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  };