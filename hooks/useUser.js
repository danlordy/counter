import { useEffect, useState } from 'react'
import { onStateChanged } from '@/firebase/client'
import { useRouter } from 'next/router'

export const USER_STATE = {
  NOT_LOGGED: null,
  NOT_KNOW: undefined,
}

export default function useUser() {
  const router = useRouter()
  const [user, setUser] = useState(USER_STATE.NOT_KNOW)

  useEffect(() => {
    onStateChanged(setUser)
  }, [])

  useEffect(() => {
    user === USER_STATE.NOT_LOGGED && router.replace('/')
  }, [user])

  return user
}
