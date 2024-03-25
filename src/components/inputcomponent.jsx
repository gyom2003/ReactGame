import React, { useState } from 'react';
import {inputStyle} from '../components/style/stylebase';
import {labelStyle} from '../components/style/stylebase';
import CardFunc from './cardComponent';

function InputTeam() {
    const initialFormData = {
        firstname: '',
        lastname: '',
        nationality: '',
        team: ''
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleClickButton = () => {
        console.log(formData);
    };


    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px', fontFamily: 'Arial, sans-serif' }}>
            <div style={{"margin-top": '15px'}}>
                <label style={labelStyle}>Prénom: </label>
                <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} />
            </div>

            <div style={{"margin-top": '15px'}}>
                <label style={labelStyle}>Nom: </label>
                <input type="text" name="lastname" style={inputStyle} value={formData.lastname} onChange={handleChange} />
            </div>

            <div style={{"margin-top": '15px'}}>
                <label style={labelStyle}>Nationalité: </label>
                <input type="text" name="nationality" style={inputStyle} value={formData.nationality} onChange={handleChange} />
            </div>

            <div style={{"margin-top": '15px'}}>
                <label style={labelStyle}>Équipe: </label>
                <input type="text" name="team" style={inputStyle} value={formData.team} onChange={handleChange} />
            </div>

            <button style={{ marginTop: '45px', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={handleClickButton}>Créer le soldat</button>

            {formData.firstname && formData.lastname && formData.nationality && formData.team && <CardFunc />}
        </div>
    );
}

export default InputTeam;
