import { formatDistanceToNow } from 'date-fns';

const formatRelativeTime = (date: Date): string => {
  const resultDate = formatDistanceToNow(date, { addSuffix: true });
  return resultDate;
  
};

export { formatRelativeTime };