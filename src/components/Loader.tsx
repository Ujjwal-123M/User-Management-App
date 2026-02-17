type LoaderProps = {
  label?: string;
};

const Loader = ({ label = "Loading..." }: LoaderProps) => {
  return (
    <div className="card">
      <div className="cardBody row">
        <div className="row" style={{ gap: 10 }}>
          <div className="spinner" aria-hidden="true" />
          <div>
            <div style={{ fontWeight: 700 }}>{label}</div>
            <div className="muted" style={{ fontSize: 13 }}>
              Please wait
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;


