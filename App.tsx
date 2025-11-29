import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/LayoutMain';
import { GrainOverlay } from './components/GrainOverlay';
import { ErrorBoundary } from './components/ErrorBoundary';
import { NotFound } from './pages/NotFound';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Coaching = lazy(() => import('./pages/Coaching').then(module => ({ default: module.Coaching })));
const Speaking = lazy(() => import('./pages/Speaking').then(module => ({ default: module.Speaking })));
const Ventures = lazy(() => import('./pages/Ventures').then(module => ({ default: module.Ventures })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));

// Loading Fallback
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-stone-50">
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 border-4 border-stone-200 border-t-gold rounded-full animate-spin mb-4"></div>
      <p className="text-stone-500 text-xs tracking-widest uppercase animate-pulse">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <HashRouter>
      <GrainOverlay />
      <ErrorBoundary>
        <Layout>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/coaching" element={<Coaching />} />
              <Route path="/speaking" element={<Speaking />} />
              <Route path="/ventures" element={<Ventures />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </ErrorBoundary>
    </HashRouter>
  );
}

export default App;