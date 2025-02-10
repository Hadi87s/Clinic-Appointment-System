export const formatDate = (isoDateString: string) => {
  const date = new Date(isoDateString);

  // Format time in HH:MM AM/PM (using local time)
  const hours = date.getHours() % 12 || 12; // Convert to 12-hour format
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const dayOrNight = date.getHours() >= 12 ? "PM" : "AM";
  const time = `${hours}:${minutes} ${dayOrNight}`;

  // Format date in MM/DD (using local time)
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const formattedDate = `${month}/${day}`;

  // Combine time and date
  return `${time} ${formattedDate}`;
};
