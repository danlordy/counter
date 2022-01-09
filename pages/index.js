import Head from "next/head";
import AppLayout from "../components/AppLayout";
// import Image from "next/image";
import { colors } from "../styles/themes";
import Google from "../components/Icons/Google";
import Button from "../components/Button";
import { loginWithGoogle, onStateChanged } from "../firebase/client";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    onStateChanged(setUser);
  }, []);
  const handleClick = () => {
    loginWithGoogle()
      .then((user) => {
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
        // ...
      });
  };

  return (
    <>
      <Head>
        <title>Counter</title>
        <meta
          name="description"
          content="LLeva el conteo de tus ingresos diarios"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <section>
          <img src="/cmsa.jpeg" alt="logo" />
          <h1>Counter</h1>
          <h2>LLeva el conteo de tus ingresos diarios</h2>
          {user === null && (
            <Button onClick={handleClick}>
              <Google width={24} height={24} /> Login with Google
            </Button>
          )}
          {user && (
            <div>
              <img src={user.photoURL} />
              <strong>{user.displayName}</strong>
            </div>
          )}
        </section>
      </AppLayout>
      <style jsx>{`
        img {
          width: 120px;
          margin-lef: 20px;
        }
        h1 {
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
      `}</style>
    </>
  );
}
