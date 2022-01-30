import Avatar from '@/components/Avatar'
import Button from '@/components/Button'
import { logout } from '@/firebase/client'
import useUser, { USER_STATE } from '@/hooks/useUser'

export default function User() {
  const user = useUser()

  return (
    <>
      <section>
        <header className="head"></header>
        <div className="container">
          <div className="aside">
            <header className="header"></header>
            <div className="warning"></div>
            <div className="search"></div>
            <div className="list"></div>
          </div>
          <div className="content">
            <div>
              <button onClick={logout}>Logout</button>
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          * {
            margin: 0;
            padding: 0;
          }

          section {
            position: relative;
            width: 100%;
            height: 100vh;
            background: #e8e4de;
          }

          section .head {
            background: #00a884;
            width: 100%;
            height: 127px;
          }

          section .container {
            display: grid;
            grid-template-columns: minmax(300px, 30%) 1fr;
            grid-template-rows: 1fr;
            gap: 1px;
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

          section .container .aside {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            background: #f0f2f5;
          }

          section div .content {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            background: #f8f8f8;
            border-bottom: 5px solid #00a884;
          }

          section div .content > div {
            width: 60%;
            height: 90%;
            border: 2px solid black;
          }

          .aside header,
          .aside div:not(:last-child) {
            border-bottom: 1px solid rgb(0, 0, 0);
          }

          .header {
            background: #f0f2f5;
            height: 40px;
            padding: 10px 16px;
          }

          .warning {
            background: #f0f2f5;
            height: 60px;
            padding: 13px 12px;
          }

          .search {
            background: #f0f2f5;
            height: 35px;
            padding: 10px 5px;
          }

          .list {
            background: #f0f2f5;
            height: 100%;
          }
        `}
      </style>
    </>
  )
}
