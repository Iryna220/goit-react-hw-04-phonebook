import css from './Filter.module.css';
const Filter = ({ value, onChange }) => {
  return (
    <div className={css.filterSection}>
      <label className={css.filterLabel}>
        Find contacts by name
        <input
          className={css.filterInput}
          type="name"
          name="filter"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default Filter;
