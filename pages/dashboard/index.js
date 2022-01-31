import Avatar from '@/components/Avatar'
import Button from '@/components/Button'
import { logout } from '@/firebase/client'
import useUser, { USER_STATE } from '@/hooks/useUser'

import style from '@/styles/Dashboard.module.css'

export default function User() {
  const user = useUser()

  const data = [
    { day: 'lunes', date: '27/02/2022', count: 200.0 },
    { day: 'martes', date: '27/02/2022', count: 200.0 },
    { day: 'miercoles', date: '27/02/2022', count: 200.0 },
    { day: 'jueves', date: '27/02/2022', count: 200.0 },
    { day: 'viernes', date: '27/02/2022', count: 200.0 },
    { day: 'sabado', date: '27/02/2022', count: 200.0 },
  ]

  return (
    <>
      <section className={style.section}>
        <header className={style.head}></header>
        <div className={style.container}>
          <div className={style.aside}>
            <header className={style.header}>
              <div className={style.avatar}>
                {user === USER_STATE.NOT_KNOW && (
                  <>
                    {' '}
                    <div className={style.pulse}></div>
                    <div className={style.pulse}></div>
                  </>
                )}
                {user && (
                  <>
                    <div>
                      <Avatar
                        alt={user.displayName}
                        src={user.photoURL}
                        title={user.displayName}
                      />
                    </div>
                    <div>{user.displayName}</div>
                  </>
                )}
              </div>
              <div className={style.options}>
                <Button onClick={logout}>Logout</Button>
              </div>
            </header>
            <div className={style.warning}>
              <div>
                <svg viewBox="0 0 48 48" width="48" height="48" className="">
                  <path
                    fill="currentColor"
                    d="M24.154 2C11.919 2 2 11.924 2 24.165S11.919 46.33 24.154 46.33s22.154-9.924 22.154-22.165S36.389 2 24.154 2zm-.744 15.428v-.618c0-.706.618-1.324 1.324-1.324s1.323.618 1.323 1.324v.618c2.559.618 4.412 2.823 4.412 5.559v3.176l-8.294-8.294a5.056 5.056 0 0 1 1.235-.441zm1.323 15.706a1.77 1.77 0 0 1-1.765-1.765h3.529a1.768 1.768 0 0 1-1.764 1.765zm7.236-.883-1.765-1.765H17.233v-.882l1.765-1.765v-4.853a5.56 5.56 0 0 1 .794-2.912l-2.559-2.559 1.147-1.147 14.735 14.736-1.146 1.147z"
                  ></path>
                </svg>
              </div>
              <div>Los Avisos se mostraran en este espacio.</div>
            </div>
            <div className={style.search}>
              <div>
                <input type="search" placeholder="Buscar por dia, més o año" />
              </div>
            </div>
            <div className={style.list}>
              <div className={style.list_container}>
                {data.map((item, index) => {
                  return (
                    <div key={index} className={style.item_container}>
                      <div className={style.container_avatar}>
                        {user === USER_STATE.NOT_KNOW && (
                          <div
                            className={`${style.avatar} ${style.pulse}`}
                          ></div>
                        )}
                        {user && (
                          <Avatar
                            alt={user.displayName}
                            src={user.photoURL}
                            title={user.displayName}
                          />
                        )}
                      </div>
                      <div className={style.item_content}>
                        <div className={style.time}>
                          <span className={style.day}>{item.day}</span>
                          <span className={style.date}>{item.date}</span>
                        </div>
                        <div className={style.container_count}>
                          <span className={style.count}>
                            CUENTA: RD${item.count}{' '}
                          </span>
                          <span className={style.item_status}>completo</span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className={style.content}>
            <header className={style.content_header}>
              <div className={style.content_header_container}>
                <div className={style.content_details_avatar}>
                  <div className={style.details_avatar}>
                    {user === USER_STATE.NOT_KNOW && (
                      <div
                        className={`${style.pulse} ${style.placeholder_avatar}`}
                      ></div>
                    )}
                    {user && (
                      <>
                        <div>
                          <Avatar
                            alt={user.displayName}
                            src={user.photoURL}
                            title={user.displayName}
                          />
                        </div>
                      </>
                    )}
                  </div>
                  <div>
                    <div>Nombre</div>
                    <div>Datos</div>
                  </div>
                </div>
                <div>Otros</div>
              </div>
            </header>
            <div className={style.content_list}>LIST</div>
            <footer className={style.content_footer}>FOOTER</footer>
          </div>
        </div>
      </section>
      <style jsx>{``}</style>
    </>
  )
}
