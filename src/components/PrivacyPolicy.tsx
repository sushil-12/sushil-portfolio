import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose prose-neutral max-w-none space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Cookie Usage</h2>
          <p className="text-neutral-600 leading-relaxed">
            We use cookies to enhance your browsing experience and analyze site traffic. 
            You can control cookie preferences through our cookie consent banner.
          </p>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3">Necessary Cookies</h3>
          <p className="text-neutral-600 leading-relaxed">
            Essential for the website to function properly. These cookies cannot be disabled 
            and are required for basic website functionality, security, and accessibility.
          </p>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3">Analytics Cookies</h3>
          <p className="text-neutral-600 leading-relaxed">
            Help us understand how visitors use our website using Google Analytics. 
            These cookies collect anonymous information about page views, user interactions, 
            and website performance to help us improve our services.
          </p>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3">Marketing Cookies</h3>
          <p className="text-neutral-600 leading-relaxed">
            Used for advertising and marketing purposes. These cookies track visitors 
            across websites to display relevant advertisements and measure campaign effectiveness.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Data Collection</h2>
          <p className="text-neutral-600 leading-relaxed">
            We collect minimal data necessary for website functionality and analytics. 
            This includes:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-neutral-600">
            <li>Page views and website interactions</li>
            <li>Browser type and device information</li>
            <li>IP address (anonymized for analytics)</li>
            <li>Contact form submissions (when provided)</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p className="text-neutral-600 leading-relaxed">
            Under GDPR and other privacy laws, you have the right to:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-neutral-600">
            <li>Access your personal data</li>
            <li>Modify or update your information</li>
            <li>Delete your personal data</li>
            <li>Withdraw consent for data processing</li>
            <li>Object to data processing</li>
            <li>Data portability</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="text-neutral-600 leading-relaxed">
            If you have any questions about this privacy policy or your data rights, 
            please contact us at: <a href="mailto:developer.er.sushil@gmail.com" className="text-neutral-900 underline hover:no-underline">developer.er.sushil@gmail.com</a>
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
          <p className="text-neutral-600 leading-relaxed">
            We may update this privacy policy from time to time. Any changes will be 
            posted on this page with an updated revision date.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
