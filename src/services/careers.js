import { baseUrl } from '../config/api.config';
import { API } from './axios.config';

const getCareers = async () => {
  try {
    const { data } = await API.get(baseUrl);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export { getCareers };
