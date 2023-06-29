const convertTimeToString = ({ time }: { time: Date }) => {
  let hours = time.getHours();
  let period = "AM";
  if (hours >= 12) {
    period = "PM";
    if (hours > 12) {
      hours -= 12;
    }
  }
  const minutes = time.getMinutes();
  return `${hours}:${minutes < 10 ? "0" + minutes : minutes} ${period}`;
};

export { convertTimeToString };
