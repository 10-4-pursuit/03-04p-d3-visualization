import React from "react";
import './styles.css'

const FileInput = ({ onFileSelect }) => {
const handleFileChange = (event) => {
    const file = event.target.files[0];
    if(file){
        onFileSelect(file);
    }
}
    return (
        <div className="input-file">
            <input
             className="input-file__input"
             id="file"
             type="file"
             onChange={handleFileChange}
             accept="json"
             />
        </div>
    );
}

export default FileInput