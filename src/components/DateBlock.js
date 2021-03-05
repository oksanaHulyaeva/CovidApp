import moment from 'moment';

export const DateBlock = () => {
  return (
    <div className={"date-info"}>
      {moment().format("MMM Do YY")}
    </div>
  );
}