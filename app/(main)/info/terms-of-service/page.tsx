import Link from "next/link";
import React from "react";

const route = () => {
  return (
    <section>
      <div className="xs:max-w-[350px] mx-auto my-[1.25rem] flex max-w-[300px] flex-col gap-[1.25rem] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[1000px]">
        <div className="flex flex-col gap-[.625rem]">
          <header>
            <h1>Hipnode - Terms of Service</h1>
          </header>

          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using Hipnode the socail media platofrm, you agree
              to comply with and be bound by these Terms of Service.
            </p>
          </section>

          <section>
            <h2>2. User Conduct</h2>
            <p>
              Users are responsible for their actions on Hipnode. Prohibited
              activities include, but are not limited to, engaging in illegal or
              harmful behavior, violating the rights of others, and using the
              service for commercial purposes without authorization.
            </p>
          </section>

          <section>
            <h2>3. Content</h2>
            <p>
              Hipnode does not claim ownership of user-generated content. Users
              retain their rights but grant Hipnode a license to use, display,
              and distribute their content on the platform.
            </p>
          </section>

          <section>
            <h2>4. Privacy</h2>
            <p>
              Our Privacy Policy outlines how we collect, use, and protect your
              personal information. By using Hipnode, you consent to our privacy
              practices as described in the Privacy Policy.
            </p>
          </section>

          <section>
            <h2>5. Termination</h2>
            <p>
              Hipnode reserves the right to terminate or suspend user accounts
              for violations of these Terms of Service or for any other reason
              at our discretion.
            </p>
          </section>

          <section>
            <h2>6. Disclaimer</h2>
            <p>
              Hipnode is provided as is without warranties of any kind. We do
              not guarantee the accuracy, completeness, or reliability of the
              service.
            </p>
          </section>

          <section>
            <h2>7. Changes to Terms</h2>
            <p>
              Hipnode may update these Terms of Service from time to time. Users
              will be notified of changes, and continued use of the service
              after changes constitute acceptance of the new terms.
            </p>
          </section>

          <footer>
            <p>Effective Date: 1/1/2924</p>
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
            <Link href="/info/cookie-policy">
              <p>Cookie Policy</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default route;
