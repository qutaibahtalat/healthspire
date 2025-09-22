import { Navigation } from './components/navigation';
import { Router } from './components/router';
import { FloatingElements } from './components/floating-elements';
import { NavigationProvider } from './components/navigation-context';

export default function App() {
  return (
    <NavigationProvider>
      <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Background floating elements */}
        <FloatingElements />
        
        {/* Navigation */}
        <Navigation />
        
        {/* Main content */}
        <Router />
      </div>
    </NavigationProvider>
  );
}