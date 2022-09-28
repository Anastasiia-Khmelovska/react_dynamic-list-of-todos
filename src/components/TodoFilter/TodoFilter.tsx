type Props = {
  filterType: string;
  setFilterType: (str: string) => void;
  query: string;
  setQuery: (str: string) => void;
}

export const TodoFilter: React.FC<Props> = ({
  filterType,
  setFilterType,
  query,
  setQuery,
}) => (
  <form
    className="field has-addons"
  >
    <p className="control">
      <span className="select">
        <select
          data-cy="statusSelect"
          value={filterType}
          onChange={event =>(setFilterType(event.target.value))}
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </span>
    </p>

    <p className="control is-expanded has-icons-left has-icons-right">
      <input
        data-cy="searchInput"
        type="text"
        className="input"
        placeholder="Search..."
        value={query}
        onChange={(event)=>setQuery(event.target.value)}
      />
      <span className="icon is-left">
        <i className="fas fa-magnifying-glass" />
      </span>

      <span className="icon is-right" style={{ pointerEvents: 'all' }}>
        {query.length !== 0 && (
        <button
          data-cy="clearSearchButton"
          type="button"
          className="delete"
          onClick={() => setQuery('')}
        />
        )}

      </span>
    </p>
  </form>
);
