function DateSelector({ labelText, id, htmlFor, selectedDate, onDateChange }) {
  const handleDateSelect = (e) => {
    onDateChange(e.target.value); // Update parent
  };

  return (
    <div className="grid w-fit gap-1.5">
      <label
        className="font-fredoka text-sm font-medium text-ink"
        htmlFor={htmlFor}
      >
        {labelText} <span className="text-xs text-ink-muted">(required)</span>
      </label>
      <input
        id={id}
        type="date"
        name="childs_dob"
        className="rounded-xl border border-line bg-white px-4 py-2.5 text-ink focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
        value={selectedDate}
        onChange={handleDateSelect}
      />
    </div>
  );
}

export default DateSelector;
