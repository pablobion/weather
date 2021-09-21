import {fetchToApi} from './api/api.js'

const fetch = async () => {
    const response = await fetchToApi()
    console.log(response)
    setData(response)
}

const setData = (data) => {
    const temperature = document.getElementById('temperature');
    temperature.setAttribute('temperature', data.Temperature.Metric.Value.toFixed(0));
}

fetch()

