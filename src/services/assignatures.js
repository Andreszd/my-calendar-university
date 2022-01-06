import { baseUrl } from '../config/api.config';
import { API } from './axios.config';

const getCareer = async (idCareer) => {
  try {
    const { data } = await API.get(`${baseUrl}/${idCareer}`);
    return data;
  } catch (err) {
    console.error(err);
  }
};

export { getCareer };
