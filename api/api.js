const apiKey = "?apikey=mpDymrFmnMuhABAarvse0ufqqSALYQVf"; //Api Key de accuweather.com, obs: essa key ja foi desativada, não é possivel utiliza-lá, deverá criar uma para teste.
const cityId = "35952"; //Id de florianopolis de acordo com a api

export const fetchToApi = async () => {
    const data = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${cityId}${apiKey}`);
    const response = await data.json();
    return response[0];
}

