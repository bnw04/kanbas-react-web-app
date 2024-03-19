function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  const userTimezoneOffset = date.getTimezoneOffset() * 60000;
  const adjustedDate = new Date(date.getTime() + userTimezoneOffset);

  const options: Intl.DateTimeFormatOptions = { month: 'short', day: '2-digit' };
  const formattedDate = adjustedDate.toLocaleDateString('en-US', options);
  
  return formattedDate.replace(',', '');
}

export default formatDate;