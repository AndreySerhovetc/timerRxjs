import React from 'react';

interface Props {
  timer: number;
}

export const DisplayTimer: React.FC<Props> = (props) => {
  const { timer } = props;
  const sec = `0${Math.floor((timer / 100) % 60)}`;
  const min = `0${Math.floor(timer / 6000)}`;
  const hour = `0${Math.floor((timer / (1000 * 60 * 60)) % 24)}`;

  return (
    <div className="display-timer d-flex justify-content-center fs-2">
      <span>{`${hour.toString().slice(-2)}: `}</span>
      <span>{`${min.toString().slice(-2)}: `}</span>
      <span>{sec.toString().slice(-2)}</span>
    </div>
  );
};
