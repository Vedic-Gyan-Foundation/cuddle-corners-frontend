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
    const updatedDays = selectedDay.includes(day)
      ? selectedDay.filter((d) => d !== day)
      : [...selectedDay, day];
    onDayChange(updatedDays); // Update parent
  };

  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="font-fredoka text-sm font-medium text-ink">
        {title} <span className="text-xs text-ink-muted">(required)</span>
      </legend>
      <div className="mt-1 flex flex-wrap gap-2">
        {days.map((day) => {
          const active = selectedDay.includes(day);
          return (
            <label
              key={day}
              className={`flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors ${
                active
                  ? "border-primary-400 bg-primary-50 text-primary-800"
                  : "border-line text-ink-soft hover:border-primary-200"
              }`}
            >
              <input
                type="checkbox"
                name="day"
                checked={active}
                onChange={() => handleSelectedDay(day)}
                className="accent-primary-600"
              />
              {day}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

export default DaysSelector;
