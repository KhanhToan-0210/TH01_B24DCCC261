const DisplayNumber = ({ value }) => {
  return React.createElement('h1', null, `Số hiện tại: ${value}`);
};

window.DisplayNumber = DisplayNumber;
