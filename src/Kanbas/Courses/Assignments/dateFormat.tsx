function formatDate(dateStr: string) {
  // Create a date object assuming dateStr is in UTC
  const date = new Date(dateStr + 'T00:00:00Z');
  const options: Intl.DateTimeFormatOptions = { month: 'short', day: '2-digit' };
  const formattedDate = date.toLocaleDateString('en-US', options);
  
  return formattedDate.replace(',', '');
}

export default formatDate;