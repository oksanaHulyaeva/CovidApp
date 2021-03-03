import moment from 'moment';

const CountDownBlock:React.FC = () => {
  return (
    <div className={"date-info"}>
      {moment().startOf('day').fromNow()}
    </div>
  );
}

export default CountDownBlock;