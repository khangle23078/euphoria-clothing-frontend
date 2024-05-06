import { apiClient } from './apiClient'

export const deleteFile = (public_id: string) => {
  return apiClient.post(`${import.meta.env.VITE_BACKEND_API}/file/delete`, {
    public_id: public_id,
  })
}
