import moment from 'moment';

const DateBlock = () => {
  return (
    <div className={"date-info"}>
      {moment().format("MMM Do YY")}
    </div>
  );
}

export default DateBlock;