import { colors } from "../../styles/themes"

export default function Button({ children, onClick }) {
  return (
    <>
      <button onClick={onClick}>{children}</button>
      <style jsx>{`
        button {
          display: flex;
          align-items: center;
          background: ${colors.red};
          border: 0;
          border-radius: 50px;
          color: ${colors.white};
          font-size: 16px;
          font-weight: 600;
          margin: 0;
          padding: 8px 20px;
          transition: opacity 0.3s ease;
          cursor: pointer;
        }
        button:hover {
          opacity: 0.8;
        }

        Button > :global(svg) {
          margin-right: 8px;
        }
      `}</style>
    </>
  )
}
