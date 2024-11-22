import { api } from '@/lib/axios'

interface UpdateProfileResponse {
  name: string
  description: string
}

export async function updateProfile({
  description,
  name,
}: UpdateProfileResponse) {
  const response = await api.put('/profile', {
    description,
    name,
  })

  return response.data
}
