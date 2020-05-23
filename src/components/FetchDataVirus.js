import React, { Component } from 'react';
import Countries from './countries';
class FetchDataVirus extends Component {
  static displayName = FetchDataVirus.name;
  
  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true, total: 0, totalCases: 0, paises: [], lastUpdate: "", selectedCountry: "All" };
    this.handleChange = this.handleChange.bind(this);
    this.pais = this.props.defaultCountry;
    this.countries = [this.props.defaultCountry];
  }
  componentDidMount() {
    var queryParam;
    if (this.pais === this.props.defaultCountry) queryParam = "";
    else queryParam = "?country=" + this.pais;
    var url = "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats" + queryParam;
    console.log(url);
    fetch(url, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
        "x-rapidapi-key": "16183f2d8dmshfc400b5f552be7ap142362jsnc31c7e278a45"
      }
    })
      .then(response => response.json())
      .then(data => {
        var sum = 0;
        var cases = 0;

        for (var i = 0; i < data.data.covid19Stats.length; i++) {
          sum = sum + data.data.covid19Stats[i].deaths;
          cases = cases + data.data.covid19Stats[i].confirmed;
          if (this.countries.length<189) {
            if (this.countries.indexOf(data.data.covid19Stats[i].country) === -1) this.countries.push(data.data.covid19Stats[i].country);
          }
          data.data.covid19Stats[i].confirmed = data.data.covid19Stats[i].confirmed.toLocaleString("en-US");

        }
        
        this.setState({
          forecasts: data.data.covid19Stats,
          loading: false,
          total: Number(sum).toLocaleString("en-us"),
          totalCases: Number(cases).toLocaleString("en-us"),
          lastUpdate: data.data.covid19Stats[0].lastUpdate
        });
        console.log("Sample record", data.data.covid19Stats[0]);
        console.log("total paises:", this.countries.length);
      })
      .catch(err => {
        console.log(err);
      });
  }
  handleChange(e) {
    this.pais = e.target.value;
    console.log(this.pais);
    this.componentDidMount();
  }

  static renderForecastsTable(forecasts) {
    return (
      <div>

        <table >
          <thead>
            <tr role='rowheader' className='dataTable headers'>
              <th>Pais</th>
              <th>Provincia</th>
              <th>Ciudad</th>
              <th>Casos Confirmados</th>
              <th>Muertes</th>
              <th>Recuperados</th>
            </tr>
          </thead>
          <tbody>
            {forecasts.map(forecast =>
              <tr role='row' key={forecast.keyId}>
                <td>{forecast.country}</td>
                <td>{forecast.province}</td>
                <td>{forecast.city}</td>

                <td>{forecast.confirmed}</td>
                <td>{forecast.deaths}</td>
                <td>{forecast.recovered}</td>
              </tr>
            )}
          </tbody>
        </table>

      </div>


    );

  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchDataVirus.renderForecastsTable(this.state.forecasts);
    return (
      <div>
        <div className="grid-wrapper">

          <div className="col-6">
            <h4> {this.state.totalCases} casos confirmados.</h4>
          </div>
          <div className="col-6">
            <h4> {this.state.total} personas fallecidas. </h4>
          </div>
        </div>
        <div>
          <select
          defaultValue={this.state.selectValue} 
            name="country"
            onChange={this.handleChange} >
            {this.countries.map((e) => {
              return <option key={e} value={e}>{e}</option>;
            })}
          </select>
        </div>
        <p className='small-text'>Los valores en esta tabla reflejan los ultimos datos reportados hasta  {this.state.lastUpdate} ordenados por casos confirmados. <br />
        * This program uses an API with publicly available data about current confirmed cases, deaths, and recoveries of the COVID-19 virus AKA Coronavirus compiled by Johns Hopkins University. </p>
        {contents}
      </div>
    );
  }
}

export default FetchDataVirus;