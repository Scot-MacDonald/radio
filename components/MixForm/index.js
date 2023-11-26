export default function MixForm({ value, onSubmit, isEditMode }) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="mix-input">
        {isEditMode ? "Edit the mix" : "Enter a new mix"}
      </label>
      <input type="text" id="joke-input" name="joke" defaultValue={value} />
      <input type="text" id="title" name="title" defaultValue={value} />

      <button type="submit">Submit</button>
    </form>
  );
}
