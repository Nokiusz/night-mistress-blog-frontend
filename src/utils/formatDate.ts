export default function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getFullYear() % 100;
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString()
    .padStart(2, '0');
  return `${day}.${month}.${year}`;
}
  