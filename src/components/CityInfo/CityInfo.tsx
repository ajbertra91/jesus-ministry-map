import { useGetCities } from '../../hooks/useGetCities';
import InfoSection from '../InfoSection';
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
      <InfoSection label="Name" detail="resources v.2361.188">
        <h2>{data?.title}</h2>
      </InfoSection>
      <InfoSection label="Details" detail="dtl_dlcas_8D0095">
        <p className="text-cyan">{data?.description}</p>
        <p className="text-cyan"><strong>Founded:</strong> {data?.founded}</p>
        <p className="text-cyan"><strong>Population:</strong> {data?.population}</p>
      </InfoSection>
      {data?.scriptureReferences && (
        <div className="scripture-sections">
          <InfoSection label="Scriptures" detail="scripture kjv 1611.20">
            <div className="refs-grid">
              {Object.entries(data.scriptureReferences).map(([section, refs]) => (
                <div className="scripture-section" key={section}>
                  <h3 className="testemant-heading text-cyan">{section.charAt(0).toUpperCase() + section.slice(1)}</h3>
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
          </InfoSection>
        </div>
      )}
    </div>
  );
};

export default CityInfo;