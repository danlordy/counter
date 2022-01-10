// import styles from "./Avatar.module.css"
export default function Avatar({ alt, src }) {
  return (
    <>
      <img className="avatar" alt={alt} src={src} title={src} />
      <style jsx>{`
        .avatar {
          border-radius: 9999px;
          width: 50px;
          height: 50px;
          cursor: pointer;
        }
      `}</style>
    </>
  )
}
