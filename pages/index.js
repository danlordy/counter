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
      <section>
        <header className="head"></header>
        <div className="container">
          <div className="content">
            <div>
              <section className="sub-container">
                <img src="/cmsa.jpeg" alt="logo" />
                <h1>
                  <span>Counter</span>
                  <div classNameName="logotipo">
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

        .sub-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }

        .sub-container h1 .logotipo {
          transform: translateY(-15px);
          background-color: ${colors.secondary};
          color: ${colors.primary};
          border-radius: 50%;
          width: 50px;
          height: 50px;
          text-align: center;
        }
        .sub-container h1 span {
          margin-right: 5px;
        }

        section {
          position: relative;
          width: 100%;
          height: 100vh;
        }

        section .head {
          background: #00a884;
          width: 100%;
          height: 127px;
        }

        section .container {
          display: grid;
          grid-template-columns: minmax1fr;
          grid-template-rows: 1fr;
          gap: 1px;
          border-bottom: 4px solid #00a884;
          background: #fff;
          position: absolute;
          width: 90%;
          height: 95vh;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 19px;
          box-shadow: 0px 2px 31px 4px rgba(0, 0, 0, 0.54);
        }

        section div .content {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }

        section div .content > div {
          max-width: 380px;
          width: 60%;
          height: 90%;
          border: 1px solid #00000033;
          box-shadow: -2px 12px 18px 9px #0000002e;
        }
      `}</style>
    </>
  )
}
