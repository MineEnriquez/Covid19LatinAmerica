import React, { Component } from 'react';
import moment from 'moment';
class FetchDataVirus extends Component {
  static displayName = FetchDataVirus.name;

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true, total: 0, totalCases: 0, paises: [], lastUpdate: "", selectedCountry: "All" };
    this.handleChange = this.handleChange.bind(this);   // Country filtering event 
    this.handleSort = this.handleSort.bind(this);       // Data custom sortin
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
        var dataset = data.data.covid19Stats;  //shortening the name.
        data.data.covid19Stats = ""; // releasing memmory.
        for (var i = 0; i < dataset.length; i++) {
          sum = sum + dataset[i].deaths;
          cases = cases + dataset[i].confirmed;
          if (this.countries.length < 189) {
            if (this.countries.indexOf(dataset[i].country) === -1) this.countries.push(dataset[i].country);
          }
          dataset[i].confirmed_localized = dataset[i].confirmed.toLocaleString("en-US");
        }
        /* Component:  Set State*/
        this.setState({
          forecasts: dataset,
          loading: false,
          total: Number(sum).toLocaleString("en-us"),
          totalCases: Number(cases).toLocaleString("en-us"),
          lastUpdate: moment(dataset[0]).format('MMMM Do YYYY, hh:mm:sss')
        });
        console.log("Sample record", dataset[0]);
        console.log("total paises:", this.countries.length);
      })
      .catch(err => {
        console.log(err);
      });
  }
  handleChange(e) {
    /* Country Filtering. */
    this.pais = e.target.value;
    console.log(this.pais);
    this.componentDidMount();
  }
  handleSort(e) {
    /* Custom Sort*/
    let sortKey = e.target.value;
    const data = this.state.forecasts;
    data.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
    /* TODO: add input fields to select different sort scenarios below:
       ** onClick={this.handleSort} **
     data.sort((a, b) => a[sortKey].localeCompare(b[sortKey])).reverse()    // text sortKey desc
     data.sort((a, b) => {return b[sortKey]- a[sortKey]})                   // numeric sortKey descending (like confirmed cases and deaths)
     data.sort((a, b) => {return a[sortKey]- b[sortKey]})                   // numeric sortKey ascending
     */
    this.setState({ data })
  }
  static renderForecastsTable(forecasts) {
    return (
      <div>
        <table >
          <thead>
            <tr role='rowheader' className='dataTable headers'>
              <th>Pais</th>
              <th>Provincia/Estado</th>
              <th>Casos Confirmados</th>
              <th>Muertes</th>
              <th>Recuperados</th>
            </tr>
          </thead>
          <tbody>
            {forecasts.map(forecast =>
              <tr role='row' className="table-condensed table-hover table-bordered" key={forecast.keyId}>
                <td>{forecast.country}</td>
                <td>{forecast.province}</td>
                <td>{forecast.confirmed_localized}</td>
                <td className="redtext">{forecast.deaths}</td>
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
          <div className="col-4">
            Seleccione un pais:
          </div>
          <div className="col-8">
            <select
              defaultValue={this.state.selectValue}
              name="country"
              onChange={this.handleChange} >
              {this.countries.map((e) => {
                return <option key={e} value={e}>{e}</option>;
              })}
            </select>
          </div>
        </div>
        <p className='small-text'>Los valores en esta tabla incluye los ultimos datos en <strong>{this.pais}</strong> reportados hasta <strong> {this.state.lastUpdate} </strong>, y ordenados por casos confirmados.</p>
        <div className="transparent">
          {contents}
        </div>
        <p> * This program uses an API with publicly available data about current confirmed cases, deaths, and recoveries of the COVID-19 virus AKA Coronavirus compiled by Johns Hopkins University. </p>
      </div>
    );
  }
}

export default FetchDataVirus;