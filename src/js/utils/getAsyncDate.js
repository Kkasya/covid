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
            population: response.population,
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

export function createArrayCountries() {
    Object.values(countries).forEach((value) => {
        const endUrl = `countries/${value}`;
        setData(endUrl);
    });
    setData(constants.forAll);
}

function calcCases(dataCases, perThou) {
    return Object.entries(dataCases).map(([key, value]) => (value * perThou).toFixed(2));
}

function setDataHistorical(forData) {
    const endUrl = `historical/${forData}?lastdays=all`;
    const { population } = constants.arrayDataCountries[forData];

    getData(endUrl).then((response) => {
        const perThou = constants.forPer / population;
if (forData === constants.forAll) {
    constants.arrayDataGraph[forData] = {

        allPeriod: {
            cases: response.cases,
            deaths: response.deaths,
            recovered: response.recovered,
        },
        allPeriodPerThou: {
            cases: calcCases(response.cases, perThou),
            deaths: calcCases(response.deaths, perThou),
            recovered: calcCases(response.recovered, perThou),
        },

    };
} else {
    constants.arrayDataGraph[forData] = {
        allPeriod: {
            cases: response.timeline.cases,
            deaths: response.timeline.deaths,
            recovered: response.timeline.recovered,
        },
        allPeriodPerThou: {
            cases: calcCases(response.timeline.cases, perThou),
            deaths: calcCases(response.timeline.deaths, perThou),
            recovered: calcCases(response.timeline.recovered, perThou),
        },

    };
}
    });
}

export function createArrayHistorical() {
    Object.values(countries).forEach((value) => setDataHistorical(value));
    setDataHistorical(constants.forAll);
}
