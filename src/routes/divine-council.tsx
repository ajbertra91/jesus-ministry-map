import { createFileRoute } from '@tanstack/react-router';
import DivineCouncilPage from '../components/DivineCouncilPage';

export const Route = createFileRoute('/divine-council')({
  component: () => <DivineCouncilPage />,
});
