export default function Admin() {
  return (
    <>
      <section>
        <div className="list">
          <h1>LIST</h1>
        </div>
        <div>
          <h1>CONTENT</h1>
        </div>
      </section>
      <style jsx>{`
        section {
          display: flex;
          flex-direction: row;
          width: 100%;
          height: 100%;
        }
        .list {
          width: 50%;
        }
      `}</style>
    </>
  );
}
