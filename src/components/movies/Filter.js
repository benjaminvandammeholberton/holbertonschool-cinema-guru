import SearchBar from '../general/SearchBar';
import Input from '../general/Input';
import './movies.css';
import SelectInput from '../general/SelectInput';
import Tag from './Tag';

const Filter = ({
  minYear,
  setMinYear,
  maxYear,
  setMaxYear,
  sort,
  setSort,
  genres,
  setGenres,
  title,
  setTitle,
}) => {
  const tags = [
    `Action`,
    `Drama`,
    `Comedy`,
    `Biography`,
    `Romance`,
    `Thriller`,
    `War`,
    `History`,
    `Sport`,
    `Sci-fi`,
    `Documentary`,
    `Crime`,
    `Fantasy`,
  ];
  return (
    <div className="filter">
      <div className="search">
        <SearchBar />
        <div className="inputs">
          <Input label={'Min Date'} type={'number'} className={'dark'} />
          <Input label={'Max Date'} type={'number'} className={'dark'} />
          <SelectInput
            label={'Sort'}
            className={'dark'}
            options={['latest', 'oldest', 'highestrated', 'lowestrated']}
          />
        </div>
      </div>
      <div className="tags">
        {tags.map((tag, index) => (
          <Tag key={index} genre={tag} />
        ))}
      </div>
    </div>
  );
};

export default Filter;
