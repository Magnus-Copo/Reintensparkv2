'use client';

import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(metric);
    }
    
    // You can send to analytics in production
    // Example: sendToAnalytics(metric);
    
    // Highlight LCP issues
    if (metric.name === 'LCP' && metric.value > 2500) {
      console.warn('⚠️ LCP is high:', metric.value, 'ms - Target: < 2500ms');
    } else if (metric.name === 'LCP') {
      console.log('✅ LCP is good:', metric.value, 'ms');
    }
  });

  return null;
}
