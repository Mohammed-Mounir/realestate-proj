import { areas } from '@/data/real-estate-data';
import Header from './components/Header';
import Marker from './components/Marker';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Header />
      <svg
        viewBox="0 0 2048 2048"
        width="100vw"
        height="100vh"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <image href="/images/main.jpg" width="2048" height="2048" />
        {areas.map((area) => (
          <Marker key={area.id} location={area} />
        ))}
      </svg>
    </main>
  );
}
