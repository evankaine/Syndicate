import api from './api-config';

export const getAllLegends = async () => {
  const resp = await api.get('/legends');
  return resp.data;
};

export const getOneLegend = async (id) => {
  const resp = await api.get(`/legends/${id}`);
  return resp.data;
};
