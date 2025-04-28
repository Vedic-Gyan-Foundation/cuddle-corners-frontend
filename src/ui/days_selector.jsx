function DaysSelector({ title, selectedDay = [], onDayChange }) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const handleSelectedDay = (day) => {
    let updatedDays = [];

    if (selectedDay.includes(day)) {
      updatedDays = selectedDay.filter((d) => d !== day);
    } else {
      updatedDays = [...selectedDay, day];
    }

    onDayChange(updatedDays); // Update parent
  };

  return (
    <div className="flex flex-col gap-3">
      <p>{title}</p>
      {days.map((day, index) => (
        <div className="space-x-5" key={index}>
          <input
            type="checkbox"
            name="day"
            id={day.toLowerCase()}
            checked={selectedDay.includes(day)}
            onChange={() => handleSelectedDay(day)}
            className="border px-5 py-2 accent-primary-700"
          />
          <label htmlFor={day.toLowerCase()} className="font-medium">
            {day}
          </label>
        </div>
      ))}
    </div>
  );
}

export default DaysSelector;
