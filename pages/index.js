import AppLayout from '@/components/AppLayout'
import Google from '@/components/Icons/Google'
import Button from '@/components/Button'

import { colors } from '@/styles/themes'

import { loginWithGoogle } from '@/firebase/client'
import useUser, { USER_STATE } from '@/hooks/useUser'

import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home() {
  const user = useUser()
  const router = useRouter()

  useEffect(() => {
    user && router.replace('/dashboard')
  }, [user])

  const handleClick = () => {
    loginWithGoogle().catch((error) => {
      console.log(error)
    })
  }

  return (
    <>
      <Head>
        <title>Count++</title>
        <meta
          name="description"
          content="LLeva el conteo de tus ingresos diarios"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <section>
          <img src="/cmsa.jpeg" alt="logo" />
          <h1>
            <span>Counter</span>
            <div className="logotipo">
              <span>+</span>
            </div>
          </h1>
          <h2>LLeva el conteo de tus ingresos diarios</h2>
          {user === USER_STATE.NOT_LOGGED && (
            <Button onClick={handleClick}>
              <Google width={24} height={24} /> Login with Google
            </Button>
          )}
          {user === USER_STATE.NOT_KNOW && <span>Loading...</span>}
        </section>
      </AppLayout>
      <style jsx>{`
        img {
          width: 120px;
          margin-lef: 20px;
        }
        h1 {
          display: flex;
          color: ${colors.primary};
          font-weight: 800;
          font-size: 30px;
          margin-bottom: 0;
        }
        h2 {
          color: ${colors.secondary};
          font-size: 18px;
          font-weight: 600;
          text-align: center;
        }
        section {
          display: grid;
          place-items: center;
          place-content: center;
          height: 100%;
        }
        section h1 span {
          margin-right: 5px;
        }
        section h1 .logotipo {
          transform: translateY(-15px);
          background-color: ${colors.secondary};
          color: ${colors.primary};
          border-radius: 50%;
          width: 50px;
          height: 50px;
          text-align: center;
        }
      `}</style>
    </>
  )
}
