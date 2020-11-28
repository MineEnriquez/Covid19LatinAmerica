import React, { Component } from 'react';
import moment from 'moment';
class FetchDataVirus extends Component {
  static displayName = FetchDataVirus.name;

  constructor(props) {
    super(props);
    this.state = { tabledata: [], loading: true, total: 0, totalCases: 0, paises: [], lastUpdate: "", selectedCountry: "All" };
    this.handleChange = this.handleChange.bind(this);   // Country filtering event 
    this.handleSort = this.handleSort.bind(this);       // Data custom sorting
    this.pais = this.props.defaultCountry;
    this.countries = [this.props.defaultCountry];
    this.dataset = "";
  }
  componentDidMount() {
    var queryParam;
    if (this.pais === this.props.defaultCountry) queryParam = "";
    else queryParam = "?country=" + this.pais;

    var url = "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats" + queryParam;
    console.log(url);
    this.addLatamCountries();
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
        this.dataset = data.data.covid19Stats;  //shortening the name.
        console.log(data.data.covid19Stats[0]);
        data.data.covid19Stats = ""; // releasing memmory.

        for (var i = 0; i < this.dataset.length; i++) {
          sum = sum + this.dataset[i].deaths;
          cases = cases + this.dataset[i].confirmed;
          if (this.countries.indexOf(this.dataset[i].country) === -1) 
            this.countries.push(this.dataset[i].country);
          
          let removestr = ", " + this.dataset[i].country;
          this.dataset[i].prov = this.dataset[i].keyId.replace(removestr, "");

          this.dataset[i].confirmed === null ? this.dataset[i].confirmed = 0
            : this.dataset[i].confirmed = this.dataset[i].confirmed;

          this.dataset[i].deaths === null ? this.dataset[i].deaths = 0
            : this.dataset[i].deaths = this.dataset[i].deaths;

        }
        /* Component:  Set State*/
        this.setState({
          tabledata: this.dataset,
          loading: false,
          total: Number(sum).toLocaleString("en-us"),
          totalCases: Number(cases).toLocaleString("en-us"),
          lastUpdate: moment(this.dataset[0]).format('MMMM Do YYYY, hh:mm:sss')
        });
        console.log("Sample record", this.dataset[0]);
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

  addLatamCountries() {
    /* Prioritizing the list to hispanic communities */
    if (this.countries.indexOf("US") === -1) {
      this.countries.push("US");
      this.countries.push("Argentina");
      this.countries.push("Bolivia");
      this.countries.push("Brazil");
      this.countries.push("Chile");
      this.countries.push("Colombia");
      this.countries.push("Costa Rica");
      this.countries.push("Cuba");
      this.countries.push("Dominican Republic");
      this.countries.push("Ecuador");
      this.countries.push("El Salvador");
      this.countries.push("Guatemala");
      this.countries.push("Haiti");
      this.countries.push("Honduras");
      this.countries.push("Mexico");
      this.countries.push("Nicaragua");
      this.countries.push("Panama");
      this.countries.push("Paraguay");
      this.countries.push("Peru");
      this.countries.push("Puerto Rico");
      this.countries.push("Uruguay");
      this.countries.push("Venezuela");
      this.countries.push("--- Otros paises ---");
    }
  }
  handleSort(e) {
    /* Custom Sort*/
    console.log(e.target.value);
    const data = this.state.tabledata;

    if (e.target.value === 'nameasc' && this.pais === this.props.defaultCountry)
      data.sort((a, b) => a['country'].localeCompare(b['country']));

    else if (e.target.value === 'nameasc' && this.pais !== this.props.defaultCountry)
      data.sort((a, b) => a['keyId'].localeCompare(b['keyId']));

    else if (e.target.value === 'namedesc' && this.pais === this.props.defaultCountry)
      data.sort((a, b) => a['country'].localeCompare(b['country'])).reverse()

    else if (e.target.value === 'namedesc' && this.pais !== this.props.defaultCountry)
      data.sort((a, b) => a['keyId'].localeCompare(b['keyId'])).reverse()

    else if (e.target.value === 'confirmed')
      data.sort((a, b) => { return b['confirmed'] - a['confirmed'] })

    else if (e.target.value === 'deaths')
      data.sort((a, b) => { return b['deaths'] - a['deaths'] })

    this.setState({ data })
  }

  static renderAllCountriesTable(tabledata) {
    return (
      <div>
        <table className="table-wrapper">
          <thead>
            <tr role='rowheader' className='dataTable headers'>
              <th>Pais</th>
              <th>Provincia, Estado</th>
              <th>Num. Casos</th>
              <th>Muertes</th>
            </tr>
          </thead>
          <tbody>
            {tabledata.map(forecast =>
              <tr role='row' key={forecast.keyId}>
                <td className="bolder-text">{forecast.country}</td>
                <td className="bolder-text">{forecast.prov}</td>
                <td>{forecast.confirmed.toLocaleString("en-US")}</td>
                <td className="redtext bolder-text">{forecast.deaths.toLocaleString("en-US")}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
  static renderCountryTable(tabledata) {
    return (
      <div>
        <table className="table-wrapper">
          <thead>
            <tr role='rowheader' className='dataTable headers'>
              <th>Provincia, Estado</th>
              <th>Num. Casos</th>
              <th>Muertes</th>
            </tr>
          </thead>
          <tbody>
            {tabledata.map(forecast =>
              <tr role='row' key={forecast.keyId}>
                <td className="small-text bolder-text">{forecast.prov}</td>
                <td className="bolder-text">{forecast.confirmed.toLocaleString("en-US")}</td>
                <td className="redtext bolder-text">{forecast.deaths.toLocaleString("en-US")}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
  render() {
    let contents;
    if (this.state.loading) {
      contents = <p><em>Loading...</em></p>
    } else {
      if (this.pais === this.props.defaultCountry) {
        contents = FetchDataVirus.renderAllCountriesTable(this.state.tabledata);
      } else {
        contents = FetchDataVirus.renderCountryTable(this.state.tabledata);
      }
    }
    let interactiveMapUrl;
    let windowGlobal = typeof window !== 'undefined' && window;
    console.log(windowGlobal.innerWidth);
    if (windowGlobal.innerWidth > 390){
      interactiveMapUrl = "https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6";
    } else {
      interactiveMapUrl = "https://www.arcgis.com/apps/opsdashboard/index.html#/85320e2ea5424dfaaa75ae62e5c06e61";
    }
    return (
      <div>
        <section id="filteringAndSorting" className="submain style1">
          <div className="grid-wrapper">
            <div className="col-8">
              Seleccione un pais:
              <select
                defaultValue={this.state.selectValue}
                name="country"
                onChange={this.handleChange} >
                {this.countries.map((e) => {
                  return <option key={e} value={e}>{e}</option>;
                })}
              </select>
              <p className='small-text'>Los valores en esta tabla incluye los ultimos datos en <strong className="red">{this.pais.toUpperCase()}</strong> reportados hasta <strong> {this.state.lastUpdate} </strong></p>
            </div>
            <div className="col-4">
              Ordenado por:
              <select
                defaultValue={this.state.selectValue}
                name="sortingchoice"
                onChange={this.handleSort} >
                <option key="1" value="nameasc"> Nombre (Ascendente)</option>
                <option key="2" value="namedesc"> Nombre (Descendente)</option>
                <option key="3" value="confirmed"> Casos confirmados (Descendente)</option>
                <option key="4" value="deaths"> Numero de muertes (Descendente)</option>
              </select>
            </div>
          </div>
        </section>
        <section id="summary" className="submain style1">
          <div className="grid-wrapper">
            <div className="col-8">
              <h4> {this.state.totalCases} casos confirmados.</h4>
            </div>
            <div className="col-4">
              <h4> {this.state.total} personas fallecidas. </h4>
            </div>
          </div>
        </section>
        <section id="one" className="submain style1">
          <div className="transparent">
            {contents}
          </div>
          <p className='small-text'> * This program uses an API with publicly available data about current confirmed cases, deaths, and recoveries of the COVID-19 virus AKA Coronavirus compiled by Johns Hopkins University. </p>
        </section>
        <section>
          <h3>Mapa interactivo:</h3>
          <div className="embed-container"><iframe frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" title="COVID-19" src={interactiveMapUrl}></iframe></div>         
        </section>
      </div>
    );
  }
}

export default FetchDataVirus;