import React from 'react';

interface Props {
  start: () => void;
  wait: () => void;
  reset: () => void;
}

export const Buttons: React.FC<Props> = (props) => {
  const { start, wait, reset } = props;

  return (
    <div className="d-flex justify-content-center mt-4">
      <button
        className="btn btn-success mx-3"
        type="button"
        onClick={start}
      >
        Start
      </button>
      <button
        className="btn btn-primary me-3"
        type="button"
        onClick={wait}
      >
        Wait
      </button>
      <button
        className="btn btn-danger"
        type="button"
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
};
