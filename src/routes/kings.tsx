import { createFileRoute } from '@tanstack/react-router';
import Kings from '../components/Kings';

export const Route = createFileRoute('/kings')({
  component: () => <Kings />,
});
