import React, { useState } from 'react';
import {inputStyle} from '../components/style/stylebase';
import {labelStyle} from '../components/style/stylebase';
import CardFunc from './cardComponent';
import GetData from './dataFetch';

function InputTeam() {
    const initialFormData = {
        class: '',
        firstname: '',
        lastname: '',
        nationality: '',
        team: '', 
    };

    const [formData, setFormData] = useState(initialFormData);
    const [formDataArray, setFormDataArray] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

        const handleClickButton = (onSelectCountry) => { 
            //TODO: ajouter nationality
            if (isOpen === true) {
                setFormDataArray([...formDataArray, formData])
                setFormData(formData)
            } else {
                setIsOpen(!isOpen)
            }
        };

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px', fontFamily: 'Arial, sans-serif' }}>
            <div style={{"marginTop": '15px'}}>
            <label style={labelStyle}>Classes: </label>
                <select name="class" style={inputStyle} value={formData.class} onChange={handleChange}>
                    <option value="artilleur">Artilleur</option>
                    <option value="medecin">Medecin</option>
                    <option value="sniper">Sniper</option>
                    <option value="soldat">Soldat</option>
                </select>
            </div>
            <div style={{"marginTop": '15px'}}>
                <label style={labelStyle}>Firstname: </label>
                <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} />
            </div>

            <div style={{"marginTop": '15px'}}>
                <label style={labelStyle}>Lastname: </label>
                <input type="text" name="lastname" style={inputStyle} value={formData.lastname} onChange={handleChange} />
            </div>
            
            <div style={{"marginTop": '15px'}}>
                <GetData onSelectCountry={handleClickButton}/>
            </div>

            <div style={{"marginTop": '15px'}}>
                <label style={labelStyle}>Team: </label>
                <select name="team" style={inputStyle} value={formData.team} onChange={handleChange}>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                </select>
            </div>

            <button onClick={handleClickButton} style={{ marginTop: '45px', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }} 
            >Créer le soldat</button>
            {formDataArray.map((formData, index) => (
                <CardFunc key={index} formDataCard={formData} ></CardFunc>
            ))}
        </div>
        
    );
}

export default InputTeam;
