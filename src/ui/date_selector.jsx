function DateSelector({ labelText, id, htmlFor, selectedDate, onDateChange }) {
  const handleDateSelect = (e) => {
    onDateChange(e.target.value); // Update parent
  };

  return (
    <div className="grid w-fit space-y-2">
      <label className="font-medium" htmlFor={htmlFor}>
        {labelText}
      </label>
      <input
        id={id}
        type="date"
        name="childs_dob"
        className="rounded-md border bg-slate-200 px-5 py-2"
        value={selectedDate}
        onChange={handleDateSelect}
      />
    </div>
  );
}

export default DateSelector;
