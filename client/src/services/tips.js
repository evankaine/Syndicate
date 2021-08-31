import api from './api-config';

export const getAllTips = async () => {
  const resp = await api.get('/tips');
  return resp.data;
}

export const addTipToLegend = async (legendId, tipId) => {
  const resp = await api.get(`/legends/${legendId}/tips/${tipId}`);
  return resp.data;
}

export const postTip = async (tipData, legendId) => {
  const resp = await api.post(`/legends/${legendId}/tips`, { tip: tipData });
  return resp.data;
};

export const putTip = async (tipId, tipData) => {
  const resp = await api.put(`/tips/${tipId}`, { tip: tipData });
  return resp.data;
};

export const deleteTip = async (tipId) => {
  const resp = await api.delete(`/tips/${tipId}`);
  return resp;
};