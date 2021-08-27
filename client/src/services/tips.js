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

export const putTip = async (tipData, legendId, tipId) => {
  const resp = await api.put(`/legends/${legendId}/tips/${tipId}`, { tip: tipData });
  return resp.data;
};

export const deleteTip = async (legendId, tipId) => {
  const resp = await api.delete(`/legends/${legendId}/tips/${tipId}`);
  return resp;
};