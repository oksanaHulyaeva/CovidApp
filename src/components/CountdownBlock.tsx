import moment from 'moment';

export const CountDownBlock:React.FC = () => {
  return (
    <div className={"date-info"}>
      {moment().startOf('day').fromNow()}
    </div>
  );
}