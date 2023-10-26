export function handleDate(date) {
  const d = new Date(date);

  const day = d.getDate();

  const month = d.getMonth();

  const year = d.getFullYear();

  return `${day}/${month}/${year}`;
}
