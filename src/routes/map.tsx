import { createFileRoute } from '@tanstack/react-router';
import Map from '../components/Map';

export const Route = createFileRoute('/map')({
  component: () => <Map />,
});
