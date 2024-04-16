export default (date: Date): string => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  // mm/dd/yyyy Day, HH:MM AM/PM EST
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} ${days[date.getDay()]}, ${date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })} EST`;
}