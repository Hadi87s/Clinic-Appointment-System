export const formatDate = (isoDateString: string) => {
  const date = new Date(isoDateString);

  // Format time in HH:MM AM/PM
  const hours = date.getUTCHours() % 12 || 12; // Convert to 12-hour format
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");
  const dayOrNight = date.getUTCHours() >= 12 ? "PM" : "AM";
  const time = `${hours}:${minutes} ${dayOrNight}`;

  // Format date in MM/DD
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  const formattedDate = `${month}/${day}`;

  // Combine time and date
  return `${time} ${formattedDate}`;
};
