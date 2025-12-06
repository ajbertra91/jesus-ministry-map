import { useGetCities } from '../../hooks/useGetCities';
import './CityInfo.css';

interface CityProps {
  city: string | undefined;
}

const CityInfo = ({ city }: CityProps) => {
  const { data, isLoading, error } = useGetCities(city || '');

  if (error) {
    return <p>Error loading city info.</p>;
  }

  if (isLoading) {
    return <p>Loading city info...</p>;
  }

  return (
    <div className='city-info'>
      <h2>{data?.title}</h2>
      <p>{data?.description}</p>
      <p><strong>Founded:</strong> {data?.founded}</p>
      <p><strong>Population:</strong> {data?.population}</p>
          {data?.scriptureReferences && (
            <div className="scripture-sections">
              <h3>Scripture References:</h3>
              <div className="refs-grid">
                {Object.entries(data.scriptureReferences).map(([section, refs]) => (
                  <div className="scripture-section" key={section}>
                    <h4>{section.charAt(0).toUpperCase() + section.slice(1)}</h4>
                    <div className="ref-block">
                      {Object.entries(refs).map(([book, verses]) => (
                        <p className="ref-line" key={book}>
                          <strong className="ref-book">{book}:</strong>
                          <span className="ref-verses"> {verses.join(', ')}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
    </div>
  );
};

export default CityInfo;