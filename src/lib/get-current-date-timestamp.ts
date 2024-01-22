export const getCurrentDateTimestamp = (timeStamp: number) => {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };

  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(
    new Date(timeStamp)
  );

  const [month, day, year] = formattedDate.split(' ');

  return `${day.replace(/,/g, '')} ${month} ${year}`;
};
