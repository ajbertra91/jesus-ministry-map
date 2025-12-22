import { createFileRoute } from '@tanstack/react-router';
import DanielPage from '../components/DanielPage';

export const Route = createFileRoute('/daniel')({
  component: () => <DanielPage />,
});
