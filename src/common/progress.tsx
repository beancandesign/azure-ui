import ProgressBar from 'react-bootstrap/ProgressBar';

export const AnimatedBar = ({progress, total} : {progress: number, total: number}) => {
  return <ProgressBar animated now={progress} max={total}/>;
}