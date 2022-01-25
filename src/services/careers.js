import { baseUrl } from 'config/api.config';
import { API } from 'config/axios.config';

const getCareers = async () => {
  try {
    const { data } = await API.get(baseUrl);
    return data;
  } catch (err) {
    console.log(err);
  }
};

const getCareer = async (idCareer) => {
  try {
    const { data } = await API.get(`${baseUrl}/${idCareer}`);
    return data;
  } catch (err) {
    console.error(err);
  }
};

export { getCareers, getCareer };
