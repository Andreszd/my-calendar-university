import { baseUrl } from '../config/api.config';
import { API } from './axios.config';

const getInfoByCareer = async (idCareer) => {
  try {
    const { data } = await API.get(`${baseUrl}/${idCareer}`);
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};

const getAssignaturesByLevel = async ({ idCareer, level }) => {
  try {
    const data = await getInfoByCareer(idCareer);
    return data?.levels?.filter((lvl) => lvl.code === level);
  } catch (err) {
    console.error(err);
  }
};

export { getAssignaturesByLevel, getInfoByCareer };
