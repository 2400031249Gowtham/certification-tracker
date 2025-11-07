import api from './api';

const certificationService = {
  async getAllCertifications() {
    const response = await api.get('/certifications');
    return response.data;
  },
  async getCertificationById(id) {
    const response = await api.get(`/certifications/${id}`);
    return response.data;
  },
  async createCertification(data) {
    const response = await api.post('/certifications', data);
    return response.data;
  },
  async updateCertification(id, data) {
    const response = await api.put(`/certifications/${id}`, data);
    return response.data;
  },
  async deleteCertification(id) {
    await api.delete(`/certifications/${id}`);
    return true;
  }
};

export default certificationService;
