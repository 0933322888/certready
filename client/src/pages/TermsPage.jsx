import { Link } from 'react-router-dom';

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-display font-bold text-text-primary mb-4">
        Terms &amp; Conditions
      </h1>
      <p className="text-text-muted mb-8">
        Last updated:{' '}
        {new Date().toLocaleDateString(undefined, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>

      <div className="space-y-8 text-sm leading-relaxed text-text-primary">
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p>
            These Terms &amp; Conditions (&quot;Terms&quot;) govern your access to and use of the CertReady
            website, learning platform, and any associated services (collectively, the &quot;Services&quot;).
            By creating an account, purchasing a course, or using the Services in any way, you agree to be
            bound by these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">2. Educational Use Only</h2>
          <p>
            CertReady provides exam preparation and educational materials only. We are not a regulatory body
            and we do not issue licenses or certifications. We are not affiliated with Skilled Trades Ontario
            (STO) or any governmental authority. Passing any certification or licensing exam is not guaranteed.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">3. Accounts and Access</h2>
          <p className="mb-2">
            You are responsible for maintaining the confidentiality of your account credentials and for all
            activities that occur under your account. You agree to:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Provide accurate and complete registration information.</li>
            <li>Notify us promptly of any unauthorized use of your account.</li>
            <li>Not share your login details or allow others to access your account.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">4. Course Purchases and Payments</h2>
          <p className="mb-2">
            Course purchases are processed securely by our payment provider (such as Stripe). By submitting a
            payment, you authorize us and our payment provider to charge your selected payment method for the
            price displayed at checkout, including applicable taxes.
          </p>
          <p>
            Access to purchased digital course content is typically granted immediately after successful
            payment. You are responsible for ensuring that your device and internet connection meet the
            technical requirements to access the course.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">5. Refunds</h2>
          <p>
            Due to the digital nature of our courses and immediate access to the full content after purchase,
            all sales are generally final and non-refundable. You may preview free material (such as the first
            chapter) before purchasing to determine whether a course meets your needs. In exceptional
            circumstances, we may review refund requests on a case-by-case basis at our sole discretion.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">6. License and Permitted Use</h2>
          <p className="mb-2">
            When you purchase a course, CertReady grants you a personal, non-exclusive, non-transferable,
            revocable license to access and use the course content for your own individual study. You agree
            that you will not:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Copy, reproduce, or distribute course materials to others.</li>
            <li>Resell, rent, or sublicense access to any course.</li>
            <li>Share screenshots, downloads, or recordings of the content publicly.</li>
            <li>Use the Services for any unlawful or unauthorized purpose.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">7. Intellectual Property</h2>
          <p>
            All course content, questions, explanations, text, graphics, branding, and other materials are the
            intellectual property of CertReady or its licensors and are protected by copyright and other
            applicable laws. Nothing in these Terms transfers any ownership rights to you. All rights not
            expressly granted are reserved.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">8. Service Changes and Availability</h2>
          <p>
            We may update, modify, or discontinue parts of the Services (including specific course content) at
            any time, for example to reflect changes in official curricula or to improve quality. We will make
            reasonable efforts to avoid materially reducing your access to purchased content, but we do not
            guarantee continuous, uninterrupted availability of the Services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">9. Disclaimer of Warranties</h2>
          <p>
            The Services are provided on an &quot;as is&quot; and &quot;as available&quot; basis. To the fullest
            extent permitted by law, we disclaim all warranties, express or implied, including but not limited
            to warranties of accuracy, fitness for a particular purpose, and non-infringement. You are solely
            responsible for how you use the content and for your exam preparation decisions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">10. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, CertReady and its owners, employees, and contractors will
            not be liable for any indirect, incidental, consequential, or special damages, or for any loss of
            profits, revenue, data, or business opportunities arising out of or in connection with your use of
            the Services. Our total aggregate liability for any claim related to the Services will not exceed
            the amount you paid for the course giving rise to the claim.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">11. User Conduct</h2>
          <p className="mb-2">
            You agree to use the Services in a respectful and lawful manner. In particular, you agree not to:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Attempt to gain unauthorized access to any account or system.</li>
            <li>Interfere with or disrupt the operation of the platform.</li>
            <li>Upload or transmit any malicious code or harmful content.</li>
            <li>Harass, abuse, or harm other users or staff.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">12. Privacy</h2>
          <p>
            Our collection and use of personal information is described in our Privacy Policy. By using the
            Services, you consent to such collection and use. Please review the Privacy Policy for more
            details about how we handle your data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">13. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time, for example to reflect changes in our Services or
            legal requirements. When we make material changes, we will update the &quot;Last updated&quot;
            date above and, where appropriate, provide additional notice. Your continued use of the Services
            after the updated Terms become effective constitutes your acceptance of the changes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">14. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the Province of Ontario and the federal laws of Canada
            applicable therein, without regard to conflict of law principles. Any disputes arising out of or
            relating to these Terms or the Services will be subject to the exclusive jurisdiction of the courts
            located in Ontario, Canada.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">15. Contact Us</h2>
          <p className="mb-2">
            If you have any questions about these Terms or about the Services, you can contact us at:
          </p>
          <p>
            Email:{' '}
            <a
              href="mailto:support@certready.ca"
              className="text-accent hover:text-accent/80"
            >
              support@certready.ca
            </a>
          </p>
        </section>

        <section className="pt-4">
          <Link to="/" className="text-accent hover:text-accent/80 text-sm">
            &larr; Back to Home
          </Link>
        </section>
      </div>
    </div>
  );
}

