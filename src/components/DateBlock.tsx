const DateBlock:React.FC = () => {
  return (
    <div>
      {new Date().toDateString()}
    </div>
  );
}

export default DateBlock;