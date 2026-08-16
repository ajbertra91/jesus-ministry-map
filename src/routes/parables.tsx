import { createFileRoute } from '@tanstack/react-router';
import ParablesPage from '../components/ParablesPage';

export const Route = createFileRoute('/parables')({
  component: () => <ParablesPage />,
});
