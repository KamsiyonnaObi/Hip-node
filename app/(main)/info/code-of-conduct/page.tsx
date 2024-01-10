import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section>
      <div className="xs:max-w-[350px] mx-auto my-[1.25rem] flex max-w-[300px] flex-col gap-[1.25rem] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[1000px]">
        <h1 className="h1-bold">Code of Conduct</h1>
        <p>
          Welcome to Hipnode, a vibrant and inclusive social media platform
          where users can connect, share, and engage in positive interactions.
          To ensure a safe and enjoyable experience for everyone, we have
          established this Code of Conduct. By using Hipnode, you agree to abide
          by these guidelines:
        </p>

        <ul className="flex flex-col gap-[.625rem]">
          <li>
            <strong>Respect and Kindness:</strong> Treat others with courtesy,
            empathy, and respect. Remember that behind every profile is a real
            person with feelings.
          </li>

          <li>
            <strong>No Harassment or Bullying:</strong> Harassment, bullying, or
            any form of intimidation will not be tolerated. This includes but is
            not limited to offensive comments, threats, or any behavior intended
            to harm or demean others.
          </li>

          <li>
            <strong>Inclusive Community:</strong> Embrace diversity. Be
            open-minded and accepting of different opinions, backgrounds,
            cultures, and identities. Avoid discriminatory or prejudiced
            behavior.
          </li>

          <li>
            <strong>Privacy and Consent:</strong> Respect the privacy of others.
            Do not share personal information without consent. Report any
            unauthorized use or distribution of private content immediately.
          </li>

          <li>
            <strong>Content Guidelines:</strong> Share content that is
            appropriate and complies with our community standards. Avoid posting
            offensive, explicit, or illegal material. Ensure that your content
            is respectful and suitable for a diverse audience.
          </li>

          <li>
            <strong>No Hate Speech:</strong> Hate speech, including content that
            promotes violence, discrimination, or harm towards individuals or
            groups based on race, ethnicity, religion, gender, sexual
            orientation, disability, or any other protected characteristic, is
            strictly prohibited.
          </li>

          <li>
            <strong>Positive Engagement:</strong> Foster positive interactions
            by engaging constructively with others. Encourage discussions and
            debates in a civil manner. Disagreements are natural, but maintain a
            respectful tone.
          </li>

          <li>
            <strong>Reporting and Moderation:</strong> If you encounter content
            or behavior that violates our Code of Conduct, report it promptly.
            Our moderation team will review reports and take appropriate action.
          </li>

          <li>
            <strong>No Spam or Malicious Activity:</strong> Do not engage in
            spamming, phishing, or any other form of malicious activity. Respect
            the platform&apos;s integrity and the well-being of its users.
          </li>

          <li>
            <strong>Adherence to Laws and Regulations:</strong> Ensure your
            actions comply with applicable laws and regulations. Any activity
            that violates the law will result in immediate action, including
            reporting to relevant authorities.
          </li>

          <li>
            <strong>Account Responsibility:</strong> Keep your account
            information secure and do not share your login credentials. You are
            responsible for the activities associated with your account.
          </li>

          <li>
            <strong>Continuous Improvement:</strong> Provide feedback to help us
            improve the platform. We strive to create a positive environment and
            welcome your suggestions.
          </li>
        </ul>

        <p>
          Failure to adhere to this Code of Conduct may result in warnings,
          temporary suspension, or permanent removal from Hipnode. Let&apos;s
          work together to create a positive, inclusive, and enjoyable space for
          everyone in the Hipnode community.
        </p>
        <div className="flex justify-center gap-[1.25rem] border-t-[1px]">
          <Link href="/info/privacy-policy">
            <p>Privacy Policy</p>
          </Link>
          <span>|</span>
          <Link href="/info/cookie-policy">
            <p>Cookie Policy</p>
          </Link>
          <span>|</span>
          <Link href="/info/terms-of-service">
            <p>Terms of Service</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default page;
