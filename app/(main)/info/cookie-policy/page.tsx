import Link from "next/link";
import React from "react";

const route = () => {
  return (
    <section>
      <div className="xs:max-w-[350px] mx-auto my-[1.25rem] flex max-w-[300px] flex-col gap-[1.25rem] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[1000px]">
        <div className="flex flex-col gap-[.625rem]">
          <header>
            <h1>Hipnode - Cookie Policy</h1>
          </header>

          <section>
            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your device when you access
              our website. They help improve your user experience by remembering
              your preferences and settings.
            </p>
          </section>

          <section>
            <h2>2. How We Use Cookies</h2>
            <p>
              We use cookies for various purposes, including but not limited to:
            </p>
            <ul>
              <li>Providing personalized content</li>
              <li>Analyzing website traffic and usage patterns</li>
              <li>Improving our services</li>
            </ul>
          </section>

          <section>
            <h2>3. Types of Cookies</h2>
            <p>
              We use both session and persistent cookies. Session cookies are
              temporary and expire when you close your browser, while persistent
              cookies remain on your device for a set period.
            </p>
          </section>

          <section>
            <h2>4. Managing Cookies</h2>
            <p>
              You can control and/or delete cookies as you wish. Most browsers
              allow you to refuse cookies or delete them. However, doing so may
              impact your experience on our website.
            </p>
          </section>

          <section>
            <h2>5. Third-Party Cookies</h2>
            <p>
              We may use third-party services that use cookies. These cookies
              are governed by the respective privacy policies of the third
              parties.
            </p>
          </section>

          <section>
            <h2>6. Changes to Cookie Policy</h2>
            <p>
              We may update our Cookie Policy to reflect changes in our
              practices or for other operational, legal, or regulatory reasons.
              Any changes will be effective immediately upon posting the updated
              policy on our website.
            </p>
          </section>

          <footer>
            <p>Effective Date: [Date]</p>
            <p>Contact: [Your Contact Information]</p>
          </footer>
          <div className="flex justify-center gap-[1.25rem] border-t-[1px]">
            <Link href="/info/privacy-policy">
              <p>Privacy Policy</p>
            </Link>
            <span>|</span>
            <Link href="/info/code-of-conduct">
              <p>Code of Conduct</p>
            </Link>
            <span>|</span>
            <Link href="/info/terms-of-service">
              <p>Terms of Service</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default route;
