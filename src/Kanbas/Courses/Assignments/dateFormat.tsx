function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = { month: 'short', day: '2-digit' };
  const formattedDate = date.toLocaleDateString('en-US', options);
  
  return formattedDate.replace(',', '');
}

export default formatDate;