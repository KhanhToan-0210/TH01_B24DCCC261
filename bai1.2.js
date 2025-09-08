const { useState } = React;

const Counter = () => {
  const [count, setCount] = useState(0);

  return React.createElement(
    'div',
    null,
    React.createElement(window.DisplayNumber, { value: count }),
    React.createElement(
      'button',
      { onClick: () => setCount(count - 1), style: { fontSize: 20, margin: 5, padding: '10px 20px' } },
      '-'
    ),
    React.createElement(
      'button',
      { onClick: () => setCount(count + 1), style: { fontSize: 20, margin: 5, padding: '10px 20px' } },
      '+'
    )
  );
};

window.Counter = Counter;
