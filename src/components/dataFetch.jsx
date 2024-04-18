
import axios from 'axios';
import { labelStyle } from './style/stylebase';
import * as React from 'react';

export default class GetData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [], 
            loading: false,
            error: null, 
        };
    }

    componentDidMount() {
        this.fetchData();
    }
    fetchData = async () => {
        try {
            const response = await axios.get("https://countriesnow.space/api/v0.1/countries/");
            const resultCountries = response.data.data.slice(0, 16);
            this.setState({countries: resultCountries, loading: false})
        } catch(error) {
            this.setState({error: error, loading: false})
        }
    };

    handleSelectCountry = (event) => {
        const selectedCountry = event.target.value;
        this.props.onSelectCountry(selectedCountry);

    };

    render() {
        const {countries, loading, error} = this.state;
        if (loading) {
            return <div>Loading</div>;
        }
        if (error) {
            return <div>error while loading data</div>;
        }

        return (
            <div style={{ marginTop: '15px' }}>
                <label style={labelStyle}>Nationality: </label>
                <select name="nationality" onChange={this.handleSelectCountry}>
                    <option value="">Select a country</option>
                    {countries.map(country => (
                        <option key={country.country} value={country.country}>
                            {country.country}
                        </option>
                    ))}
                </select>
            </div>
        );
    }
}

