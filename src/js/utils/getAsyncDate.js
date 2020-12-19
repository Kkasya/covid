import * as constants from '../data/constants';
import countries from '../data/listCountries';

async function getData(endUrl) {
    const url = `${constants.urlCases}${endUrl}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

function setData(endUrl) {
    getData(endUrl).then((response) => {
      //  console.log(response);
        const perThou = constants.forPer / response.population;
        const id = (endUrl === constants.forAll) ? constants.forAll : response.countryInfo.iso2;
        constants.arrayDataCountries[id] = {
            allPeriod: {
                cases: response.cases,
                deaths: response.deaths,
                recovered: response.recovered,
            },
            today: {
                cases: response.todayCases,
                deaths: response.todayDeaths,
                recovered: response.todayRecovered,
            },
            allPeriodPerThou: {
                cases: (response.cases * perThou).toFixed(2),
                deaths: (response.deaths * perThou).toFixed(2),
                recovered: (response.recovered * perThou).toFixed(2),
            },
            todayPerThou: {
                cases: (response.todayCases * perThou).toFixed(2),
                deaths: (response.todayDeaths * perThou).toFixed(2),
                recovered: (response.todayRecovered * perThou).toFixed(2),
            },
        };
        if (endUrl !== constants.forAll) {
            constants.arrayDataCountries[id].countryInfo = {
                country: response.country,
                flag: response.countryInfo.flag,
                    lat: response.countryInfo.lat.toFixed(6),
                    long: response.countryInfo.long.toFixed(6),
            };
        }
    });
}

export default function createArrayCountries() {
    Object.values(countries).forEach((value) => {
        const endUrl = `countries/${value}`;
        setData(endUrl);
    });
    setData(constants.forAll);
}
