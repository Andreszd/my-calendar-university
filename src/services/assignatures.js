import { baseUrl } from "../config/api.config";

const getInfoByCareer = async ({ idCareer }) => {
    try {
        const data = await axios.get(`${baseUrl}/${idCareer}`);
        return data;
    } catch (err) {
        console.error(err);
    }
};

const getAssignaturesByLevel = async ({ idCareer, level }) => {
    try {
        const data = await getInfoByCareer(idCareer);
        return data?.levels?.filter((level) => level.code === level);
    } catch (err) {
        console.error(err);
    }
};

export { getAssignaturesByLevel, getInfoByCareer };
