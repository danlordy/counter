// import styles from ""
export default function Avatar({ alt, src, text }) {
  return (
    <>
      <div className="container">
        <img className="avatar" alt={alt} src={src} title={src} />
        {text && <strong>{text || alt}</strong>}
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
        }
        .avatar {
          border-radius: 50%;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }
        .avatar + strong {
          margin-left: 10px;
        }
      `}</style>
    </>
  )
}
