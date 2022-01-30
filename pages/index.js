import AppLayout from '@/components/AppLayout'
import Google from '@/components/Icons/Google'
import Button from '@/components/Button'

import { colors } from '@/styles/themes'

import { loginWithGoogle } from '@/firebase/client'
import useUser, { USER_STATE } from '@/hooks/useUser'

import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import style from '@/styles/Home.module.css'

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
      <section className={style.app}>
        <header className={style.head}></header>
        <div className={style.container}>
          <div className={style.content}>
            <div>
              <section className={style.sub_container}>
                <img src="/cmsa.jpeg" alt="logo" />
                <h1>
                  <span>Counter</span>
                  <div classNameName={style.logotipo}>
                    <span>+</span>
                  </div>
                </h1>
                <h2>LLeva el conteo de tus ingresos diarios</h2>
                {user === USER_STATE.NOT_LOGGED && (
                  <Button onClick={handleClick}>
                    <Google width={24} height={24} /> Login
                  </Button>
                )}
                {user === USER_STATE.NOT_KNOW && <span>Loading...</span>}
              </section>
            </div>
          </div>
        </div>
      </section>

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
          margin-bottom: 5em;
        }
      `}</style>
    </>
  )
}
