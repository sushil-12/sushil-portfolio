import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie, Settings, Shield, Check } from 'lucide-react';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    } else {
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
      // Initialize analytics if consented
      if (savedPreferences.analytics) {
        initializeAnalytics();
      }
    }
  }, []);

  const initializeAnalytics = () => {
    // Load Google Analytics only after consent
    if (typeof window !== 'undefined' && !window.gtag) {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-K1VM6TBZF6';
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;
      
      gtag('js', new Date());
      gtag('config', 'G-K1VM6TBZF6', {
        anonymize_ip: true,
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
      });
    }
  };

  const acceptAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(newPreferences);
    localStorage.setItem('cookie-consent', JSON.stringify(newPreferences));
    setShowBanner(false);
    initializeAnalytics();
  };

  const acceptNecessary = () => {
    const newPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    setPreferences(newPreferences);
    localStorage.setItem('cookie-consent', JSON.stringify(newPreferences));
    setShowBanner(false);
  };

  const savePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setShowSettings(false);
    setShowBanner(false);
    
    if (preferences.analytics) {
      initializeAnalytics();
    }
  };

  const updatePreference = (key: keyof CookiePreferences, value: boolean) => {
    if (key === 'necessary') return; // Can't change necessary cookies
    setPreferences(prev => ({ ...prev, [key]: value }));
  };

  if (!showBanner && !showSettings) return null;

  return (
    <AnimatePresence>
      {(showBanner || showSettings) && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-neutral-200 shadow-lg"
        >
          <div className="max-w-4xl mx-auto">
            {showBanner && !showSettings ? (
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="flex items-center gap-3 flex-1">
                  <Cookie className="w-6 h-6 text-neutral-600" />
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">
                      We use cookies to enhance your experience
                    </h3>
                    <p className="text-sm text-neutral-600">
                      We use cookies to analyze site usage, personalize content, and improve our services. 
                      By continuing to use our site, you consent to our use of cookies.{' '}
                      <a href="/privacy-policy" className="text-neutral-900 underline hover:no-underline">
                        Learn more
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowSettings(true)}
                    className="px-4 py-2 text-sm border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors"
                  >
                    <Settings className="w-4 h-4 inline mr-1" />
                    Settings
                  </button>
                  <button
                    onClick={acceptNecessary}
                    className="px-4 py-2 text-sm border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors"
                  >
                    Necessary Only
                  </button>
                  <button
                    onClick={acceptAll}
                    className="px-4 py-2 text-sm bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors"
                  >
                    Accept All
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-neutral-900 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Cookie Preferences
                  </h3>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="p-1 hover:bg-neutral-100 rounded"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-neutral-900">Necessary Cookies</h4>
                      <p className="text-sm text-neutral-600">
                        Essential for the website to function properly. Cannot be disabled.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-neutral-600">Always Active</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 border border-neutral-200 rounded-lg">
                    <div>
                      <h4 className="font-medium text-neutral-900">Analytics Cookies</h4>
                      <p className="text-sm text-neutral-600">
                        Help us understand how visitors interact with our website.
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) => updatePreference('analytics', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-neutral-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-neutral-900"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-3 border border-neutral-200 rounded-lg">
                    <div>
                      <h4 className="font-medium text-neutral-900">Marketing Cookies</h4>
                      <p className="text-sm text-neutral-600">
                        Used to track visitors across websites for advertising purposes.
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={(e) => updatePreference('marketing', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-neutral-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-neutral-900"></div>
                    </label>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    onClick={() => setShowSettings(false)}
                    className="px-4 py-2 text-sm border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={savePreferences}
                    className="px-4 py-2 text-sm bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors"
                  >
                    Save Preferences
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
