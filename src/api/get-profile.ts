import { api } from '@/lib/axios'

interface GetProfileResponse {
  id: string
  email: string
  name: string
  phone: string
  role: 'manager' | 'customer'
  createdAt: string
  updatedAt: string
}

export async function getProfile() {
  const response = await api.get<GetProfileResponse>('/me')

  return response.data
}
