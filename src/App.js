import './App.css';

import BarCharts from './BarChart';
import { useState } from 'react';
import FileInput from './FileInput';

function App() {
    const [data, setData] = useState([]);

    const onFileSelect = (file) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const jsonData = JSON.parse(event.target.result);
                setData(jsonData.data);
            } catch (error) {
                console.log("Error parsing JSON file:", error);
            }
        };

        reader.readAsText(file); 
    }

    return (
        <div className="App">
            <FileInput onFileSelect={onFileSelect} />
            <BarCharts data={data} />
        </div>
    );
}

export default App;

