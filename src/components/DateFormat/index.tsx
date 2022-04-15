import { formatDate } from 'libs/utils';
import { HtmlHTMLAttributes } from 'react';

interface DateFormatProps extends HtmlHTMLAttributes<HTMLParagraphElement> {
  date?: Date;
  format: string;
}
const DateFormat = (props: DateFormatProps) => {
  const { date = new Date(), format, ...rest } = props;
  const _date = formatDate(format, date);
  return <p {...rest}>{_date}</p>;
};

export default DateFormat;
