import { artists } from '../../data';

export default function StylePage() {
  // Collect all the styles from the artists
  const allStyles = artists.reduce((acc, artist) => {
    artist.style.forEach((style) => {
      if (!acc.includes(style)) {
        acc.push(style);
      }
    });
    return acc;
  }, []);

  return (
    <div>
      <h1>Styles</h1>
      <ul>
        {allStyles.map((style) => (
          <li key={style}>{style}</li>
        ))}
      </ul>
    </div>
  );
}