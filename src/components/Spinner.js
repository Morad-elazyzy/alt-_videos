const Spinner = ({ spinnerStyle }) => {
  const defaultStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={{ ...defaultStyle, ...spinnerStyle }}>
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export default Spinner;
