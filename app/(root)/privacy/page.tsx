import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Right Hand Venture",
  description:
    "Privacy Policy of Right Hand Venture. We are a digital marketing agency that specializes in SEO, Web Development, and Social Media Marketing. We help businesses grow their online presence and increase their revenue. We are a team of experts who are passionate about helping businesses succeed online. We offer a wide range of services to help businesses reach their goals. Our team is dedicated to providing the best possible service to our clients. We are committed to helping businesses succeed online and we are here to help you grow your business. Contact us today to learn more about how we can help you grow your business online",
  keywords: "Marketing,Trending,SEO,Web Development, Social Media Marketing",
};

const PrivacyPage: React.FC = () => {
  return (
    <div className="py-32 sm:py-10 md:py-40 ">
      <div className="py-10 terms_bg border-b-2 border-white">
        <h1 className=" text-6xl pb-2 text-white text-center">
          Privacy Policy
        </h1>
      </div>
      <p className="text-left text-gray-700">Last updated: April 14, 2024</p>
      <div>
        <p className="text-white p-8 md:p-20 text-justify text-lg md:text-xl">
          Right Hand Venture and its subsidiaries and affiliates{" "}
          <span className="text-gray-400 font-semibold">
            (“We”, “Our”, “Us” or “PDM”)
          </span>{" "}
          work to maintain a high standard of data privacy following your data
          protection rights under applicable law. The protection and proper use
          of the personal information that you entrust to Us is a responsibility
          We take seriously. This privacy notice explains what personal
          information We may collect through{" "}
          <span className="text-gray-400 font-semibold">
            <a
              href="https://powerdigitalmarketing.com/"
              target="_blank"
              className="hover:text-blue-600"
            >
              (“Power Digital Marketing Site”)
            </a>
          </span>
          , how We may use it, and the rights that you have concerning that data{" "}
          <span className="text-gray-400 font-semibold">
            (“Privacy Notice”)
          </span>
          .
        </p>

        <p className="text-white px-8 md:px-20 pb-10 text-justify text-lg md:text-xl">
          We provide access to our Site and related information, services and
          features, including the Nova platform{" "}
          <span className="text-gray-400 font-semibold">(“Services”)</span> to
          you conditioned upon your acceptance of all terms, conditions,
          policies and notices stated in this Privacy Notice and our Terms of
          Use found here:{" "}
          <span className="text-gray-400 font-semibold">
            <a
              href="https://powerdigitalmarketing.com/terms-of-use/"
              target="_blank"
              className="hover:text-blue-600"
            >
              (“Terms of Use”)
            </a>
          </span>
          . By providing your Personal Information or using the Site you consent
          to the practices outlined in this Privacy Notice, the Terms of Use and
          to Our collection, processing, transfer or use of your Personal
          Information. If you do not consent to any collection, processing,
          transfer or use of such information, please do not use or access any
          part of the Site or submit Personal Information.
        </p>
      </div>
      <div>
        <div className="py-10 terms_bg border-b-2 border-white">
          <h1 className=" text-3xl pb-2 text-white text-center">General</h1>
        </div>
        <div className="text-white px-8 py-10 sm:px-8 md:px-20 ">
          <div className="space-y-6">
            <p className="text-white text-justify text-lg md:text-xl">
              When you provide personal information about yourself through the
              Sites, We only process your personal information when We have a
              lawful basis to do so. We collect certain information that
              identifies, relates to, describes, is reasonably capable of being
              associated with, or could reasonably be linked, directly or
              indirectly, with a consumer or household{" "}
              <span className="text-gray-400 font-semibold">
                (“Personal Information”)
              </span>
              . Personal Information does not include de-identified or
              aggregated consumer information. We collect Personal Information
              from individuals visiting our Site, including as you browse our
              Site.
            </p>
            <p className="text-white text-justify text-lg md:text-xl">
              By accessing the Site, you acknowledge this Privacy Notice and
              agree to be bound by the terms hereof.
            </p>
            <p className="text-white text-justify text-lg md:text-xl">
              Our legal bases for processing your Personal Information include
            </p>
          </div>
          <ol className="list-decimal  list-inside space-y-3 text-lg md:text-xl pt-4">
            <li>Your consent;</li>
            <li>Fulfilment of a contractual obligation; and</li>
            <li>
              where We have a legitimate interest in processing your Personal
              Information consistent with applicable law. Our legitimate
              interests include:
              <ol className="list-disc list-inside space-y-3 text-lg md:text-xl pt-3 px-3 md:px-10">
                <li>
                  Investigating, preventing, and protecting against fraud,
                  security risks, threats to you and others, and violations of
                  this Privacy Notice;
                </li>
                <li>
                  Protecting and defending our rights and properties, including
                  intellectual property;
                </li>
                <li>
                  Complying with laws and regulations that apply to Us, as well
                  as responding to requests from law enforcement or government
                  authorities or as otherwise required by law;
                </li>
                <li>Improving your experiences with our Site;</li>
                <li>
                  Understanding and improving our Site, user experience, and
                  customer relationships; and
                </li>
                <li>Enabling our business operations.</li>
              </ol>
            </li>
          </ol>
          <p className="text-white text-justify text-lg md:text-xl pt-8">
            Where We rely on your consent to process your Personal Information,
            you have the right to change, withdraw or withhold your consent.
            Notwithstanding the foregoing, the processing of IP addresses is a
            necessary part of providing access to the Sites, so We cannot
            provide access to the Sites without this information.
          </p>
        </div>
      </div>
      <div>
        <div className="py-10 terms_bg border-b-2 border-white">
          <h1 className=" text-3xl pb-2 text-white text-center">
            Information we May Collect
          </h1>
        </div>
        <div className="text-white px-8 py-10 sm:px-8 md:px-20">
          <div className="space-y-6">
            <p className="text-white text-justify text-lg md:text-xl">
              We collect Personal Information that you choose to share with Us
              as well as information provided directly by your browser or device
              when you visit our Site.
            </p>
            <p className="text-white underline text-justify text-lg md:text-4xl">
              Information Collected from You
            </p>
          </div>
          <div className="space-y-5">
            <div className="grid md:grid-cols-2 grid-cols-1 pt-6 pb-3 border-b-2 border-white border-opacity-5">
              <div>
                <p className="text-white text-justify font-bold text-2xl md:text-xl">
                  Contact Us:
                </p>
              </div>
              <div>
                <ol className="list-disc list-inside space-y-5 text-lg md:text-xl pt-3 px-3 md:px-10">
                  <li>
                    When you contact Us via the Site, We ask for your email
                    address. We will also collect the content of your message,
                    which will include any additional information you choose to
                    share with Us.
                  </li>
                  <li>
                    We collect this information when you initiate contact with
                    Us to respond to your communication.
                  </li>
                </ol>
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 pt-6 pb-3 border-b-2 border-white border-opacity-5">
              <div>
                <p className="text-white text-justify font-bold text-2xl md:text-xl">
                  Mailing List:
                </p>
              </div>
              <div>
                <ol className="list-disc list-inside space-y-5 text-lg md:text-xl pt-3 px-3 md:px-10">
                  <li>
                    When you join Our mailing list, We will collect your first
                    and last name and email address.
                  </li>
                  <li>
                    We collect this information when you initiate contact with
                    Us to respond to your communication.
                  </li>
                </ol>
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 pt-6 pb-3 border-b-2 border-white border-opacity-5">
              <div>
                <p className="text-white text-justify font-bold text-2xl md:text-xl">
                  Submitting a Proposal:
                </p>
              </div>
              <div>
                <ol className="list-disc list-inside space-y-5 text-lg md:text-xl pt-3 px-3 md:px-10">
                  <li>
                    When you submit a proposal, You provide Your company’s name,
                    the state that Your company is located in and other business
                    information such as Your Company’s monthly marketing budget,
                    Your company’s business classification and the information
                    that You choose to provide when responding to how You heard
                    about Us.
                  </li>
                  <li>
                    We collect this information to establish Your account and to
                    recommend services or products that may be of interest to
                    you.
                  </li>
                </ol>
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 pt-6 pb-3 border-b-2 border-white border-opacity-5">
              <div>
                <p className="text-white text-justify font-bold text-2xl md:text-xl">
                  Creating an Account:
                </p>
              </div>
              <div>
                <ol className="list-disc list-inside space-y-5 text-lg md:text-xl pt-3 px-3 md:px-10">
                  <li>
                    When you create an account, We collect the client’s first
                    and last name, email address and phone number. We collect
                    this information to establish Your account and enable Your
                    purchases.
                  </li>
                </ol>
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 pt-6 pb-3 border-b-2 border-white border-opacity-5">
              <div>
                <p className="text-white  font-bold text-2xl md:text-xl">
                  Interact with Our Platforms:
                </p>
              </div>
              <div>
                <ol className="list-disc list-inside space-y-5 text-lg md:text-xl pt-3 px-3 md:px-10">
                  <li>
                    If you have created an account, we also collect information
                    about your purchases, account funding, customer service
                    inquiries, and product reviews We collect this information
                    to administer your account, recommend products, and improve
                    your user experience.
                  </li>
                </ol>
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 pt-6 pb-3 border-b-2 border-white border-opacity-5">
              <div>
                <p className="text-white text-justify font-bold text-2xl md:text-xl">
                  Other Information:
                </p>
              </div>
              <div>
                <ol className="list-disc list-inside space-y-5 text-lg md:text-xl pt-3 px-3 md:px-10">
                  <li>
                    When you purchase something from any of our Sites as part of
                    the buying process we collect the personal information you
                    give us such as your name, address and email address. We use
                    this information to process and provide you with the items
                    you purchased.
                  </li>
                  <li>
                    We collect this information for the purpose of fulfilling
                    your order, including updating you on your order status.
                    Additionally, if you choose to receive future communications
                    from us regarding our products and offers, we will use the
                    personal data you provide through the order process for such
                    purposes.
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="pt-10">
            <p className="text-white underline  text-lg md:text-4xl">
              Information Collected from your Browser and other Web-based
              Technologies
            </p>
          </div>
          <div className="space-y-5">
            <div className="grid md:grid-cols-2 grid-cols-1 pt-6 pb-3 border-b-2 border-white border-opacity-5">
              <div>
                <p className="text-white  font-bold text-2xl md:text-xl">
                  Browser or Device Information:
                </p>
              </div>
              <div>
                <ol className="list-disc list-inside space-y-5 text-lg md:text-xl pt-3 px-3 md:px-10">
                  <li>
                    We also collect information sent to Us automatically by your
                    web browser when you view and navigate the Site. This
                    information is collected on an aggregate basis and is not
                    associated with you individually. This information typically
                    includes your IP address, usage details, operating system
                    information, the date and time of your visit, and the pages
                    you visit. We collect this data to help Us:
                  </li>
                  <li>Provide the Site and improve your user experience;</li>
                  <li>Analyse Site trends and aggregate usage;</li>
                  <li>Promote and improve the Site, or</li>
                  <li>Fulfill your requests and contact you.</li>
                </ol>
              </div>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 pt-6 pb-3 border-b-2 border-white border-opacity-5">
              <div>
                <p className="text-white  font-bold text-2xl md:text-xl">
                  Cookies and Web Beacons:
                </p>
              </div>
              <div>
                <ol className="list-disc list-inside space-y-5 text-lg md:text-xl pt-3 px-3 md:px-10">
                  <li>
                    We may set persistent and session cookies on your computer
                    or device to customize the user experience.{" "}
                    <span className="font-semibold"> “Cookies”</span> are small
                    files placed on your computer or device by your browser and
                    are often used to make websites work, as well as provide
                    information to the website operator.
                  </li>
                  <li>
                    We collect this information to conduct analyses on our web
                    traffic and improve a user’s experience while visiting our
                    Site. When you first visit our Site, you will be asked to
                    consent to our use of cookies, and you can withhold,
                    withdraw, or change your consent at any time. You also can
                    decline cookies by modifying the settings in your browser.
                    If you decline or disable cookies, please note that certain
                    functionalities of our Site may no longer work.
                  </li>
                  <li>
                    We place two types of cookies on our Sites:
                    <ol className="list-decimal list-inside text-lg md:text-xl pt-5 space-y-6">
                      <li>
                        Session Cookies: Session cookies typically only last for
                        as long as your session, which is usually the duration
                        of your current visit to our Sites or for as long as you
                        keep the browser open that was used to visit our Site.
                        We use our session cookies to store information about
                        your visit (referring website, landing page, etc.). We
                        also use session cookies to track and record the number
                        of visits to our Site.
                      </li>
                      <li>
                        Persistent Cookies: Persistent cookies are cookies that
                        remain on your browser and are read when you return to
                        our Sites. We may use persistent cookies to remember
                        your preferences, personalize your experience, and help
                        secure your visit to our Sites. We use persistent
                        cookies to remember the contents of your shopping cart
                        (which is stored for two weeks), and, ifapplicable,
                        determine if you have access credentials to the Site.
                      </li>
                    </ol>
                  </li>
                </ol>
              </div>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 pt-6 pb-3 border-b-2 border-white border-opacity-5">
              <div>
                <p className="text-white  font-bold text-2xl md:text-xl">
                  Third Party Cookies and Web Beacons:
                </p>
              </div>
              <div>
                <ol className="list-disc list-inside space-y-5 text-lg md:text-xl pt-3 px-3 md:px-10">
                  <li>
                    Some content or applications on our Site are served by third
                    parties, including service providers. These third parties
                    may use cookies alone or in conjunction with web beacons or
                    other tracking technologies already in your browser to
                    collect information about you when you visit our Site. The
                    information they collect may be associated with your
                    Personal Information or they may collect information,
                    including Personal Information, about your online activities
                    over time and across different websites and other services.
                    These third-party web technologies may also allow Us to
                    share our content with you when you visit the websites of
                    our third-party partners, such as Facebook.
                  </li>
                  <li>
                    Among the third-party cookies used for purposes of
                    optimising the Site is Google Analytics, a web analytics
                    service provided by Google, Inc. Google Analytics uses
                    cookies or other tracking technologies to help Us analyse
                    how users interact with and use the Site, compile reports on
                    the Site’s activity, and provide other services related to
                    our Sites’ activity and usage. The technologies used by
                    Google may collect information such as your IP address, time
                    of visit, whether you are a return visitor and any referring
                    website. The Site does not use Google Analytics to gather
                    information that personally identifies you. The information
                    generated by Google Analytics will be transmitted to and
                    stored by Google and will be subject to Google’s{" "}
                    <span className="font-semibold text-blue-600">
                      <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                      >
                        privacy policies
                      </a>
                    </span>
                    . To learn more about Google’s partner services and to learn
                    how to opt out of tracking of analytics by Google,{" "}
                    <span className="font-semibold text-blue-600">
                      <a
                        href="https://support.google.com/analytics/answer/9019185?hl=en&ref_topic=2919631&sjid=10342855544703966993-AP#zippy=%2Cin-this-article"
                        target="_blank"
                      >
                        click here
                      </a>
                    </span>
                    .
                  </li>
                  <li>
                    Most web browsers let you choose whether to accept cookies.
                    Most also let you delete cookies already set. The choices
                    available, and the mechanism used, will vary from browser to
                    browser. Such browser settings are typically found in the
                    “options”, “tools” or “preferences” menu. You may also
                    consult the browser’s “help” menu. There are online tools
                    available for clearing all cookies left behind by the
                    websites you have visited, such as{" "}
                    <span className="font-semibold text-blue-600">
                      <a href="https://www.allaboutcookies.org" target="_blank">
                        www.allaboutcookies.org
                      </a>
                    </span>
                    . Usually, deletion of cookies will anonymise the
                    information associated with the pixel and a website will not
                    receive any further associated information. Please note at
                    this time, we do not recognise automated browser signals
                    regarding tracking mechanisms, which may include “do not
                    track” instructions.
                  </li>
                </ol>
              </div>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 pt-6 pb-3 border-b-2 border-white border-opacity-5">
              <div>
                <p className="text-white text-justify font-bold text-2xl md:text-xl">
                  Social Media:
                </p>
              </div>
              <div>
                <ol className="list-disc list-inside space-y-5 text-lg md:text-xl pt-3 px-3 md:px-10">
                  <li>
                    Our Site may include social media “widgets,” small icons
                    that allow you to access our content posted on social media
                    sites (Facebook, Instagram, Twitter, and LinkedIn).
                  </li>
                  <li>
                    If you are logged into your account on these social media
                    platforms, your access to our social media pages and our
                    Sites will be linked to your account.
                  </li>
                  <li>
                    When you interact with Us or the Site through a social media
                    platform (such as by clicking on a social media icon linked
                    from our Site), We may collect the Personal Information that
                    you make available to Us on that page, including your
                    account ID or username and other information included in
                    your posts. If you choose to log in to your account with or
                    through a social networking service, We and that service may
                    share certain information about you and your activities.
                  </li>
                  <li>
                    If you contact Us via social media, you authorise Us to
                    share information with your social media account provider,
                    and you understand that the use of the information We share
                    will be governed by the social media site’s privacy Notice.
                    Your interactions with Our business pages on these social
                    media platforms are governed by the privacy practices of
                    these platforms.
                  </li>
                </ol>
              </div>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 pt-6 pb-3 border-b-2 border-white border-opacity-5">
              <div>
                <p className="text-white  font-bold text-2xl md:text-xl">
                  Payment Processor and Third Party Vendors:
                </p>
              </div>
              <div>
                <ol className="list-disc list-inside space-y-5 text-lg md:text-xl pt-3 px-3 md:px-10">
                  <li>
                    The Site may contain links to other websites, applications
                    or platforms. Please read the privacy policies of these
                    third-party websites, applications or platforms that collect
                    personally identifiable information to understand their
                    privacy policies and data collection practices. This Privacy
                    Notice applies solely to Information collected and processed
                    by Stadium or on its behalf.
                  </li>
                  <li>
                    We engage third-party vendors to help provide the Services
                    and Site to you, including Our third-party payment
                    processor, Stripe. Stripe processes Your actual payments. We
                    securely transmit Your credit card information to Stripe.
                    Stripe, however, does store this information. Stripe
                    maintains that it is PCI compliant. Stripe uses Personal
                    Information, including credit card information, You provide.
                    Please visit Stripe’s privacy policy for information
                    regarding Stripe’s collection, use, and transfer of Personal
                    Information, currently available at{" "}
                    <span className="font-semibold text-blue-600">
                      <a
                        href="https://www.stripe.com/us/privacy"
                        target="_blank"
                      >
                        stripe.com/us/privacy
                      </a>
                    </span>
                    .
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="py-10 terms_bg border-b-2 border-white">
          <h1 className=" text-3xl pb-2 text-white text-center">
            How we Use The Personal Information
          </h1>
        </div>
        <div className="text-white px-8 py-10 sm:px-8 md:px-20">
          <div>
            <p className="text-white text-justify text-lg md:text-xl">
              We only use your Personal Information following this Privacy
              Notice and as permitted by law and/or our agreements with you. We
              may use your Personal Information to:
            </p>
          </div>
          <ol className="list-disc md:px-6 px-3 list-inside space-y-3 text-lg md:text-xl pt-4">
            <li>
              To fulfil or meet the reason for which the information is
              provided, for example, to provide the information and services you
              request;
            </li>
            <li>
              Keep a record of your contact information and correspondence;
            </li>
            <li>
              To contact you with newsletters, marketing or promotional
              materials and other information that may be of interest to you.
            </li>
            <li>Personalise our communications with you;</li>
            <li>Improve our marketing efforts;</li>
            <li>Administer the Site;</li>
            <li>
              Analyse Site usage to improve the design, functionality, and
              content of the Site;
            </li>
            <li>
              Comply with applicable law or legal or government request; and
            </li>
            <li>
              Maintain security, protect our rights or property or the rights
              and property of others, and prevent fraud.
            </li>
          </ol>
        </div>
      </div>

      <div>
        <div className="py-10 terms_bg border-b-2 border-white">
          <h1 className=" text-3xl pb-2 text-white text-center">
            When We Share Personal Information
          </h1>
        </div>
        <div className="text-white px-8 py-10 sm:px-8 md:px-20">
          <div>
            <p className="text-white text-justify text-lg md:text-xl">
              In certain circumstances, We may disclose your Personal
              Information to provide services requested by you or as required by
              law or for a business necessity, including:
            </p>
          </div>
          <ol className="list-disc md:px-6 px-3 list-inside space-y-3 text-lg md:text-xl pt-4">
            <li>Fulfilling the purpose for which you provide it;</li>
            <li>
              Sharing your Personal Information with service providers We have
              retained to perform services on Our behalf;
            </li>
            <li>Disclosing your Personal Information with your consent;</li>
            <li>
              Complying with applicable laws or responding to a request from
              government authorities;
            </li>
            <li>
              Preventing or investigating a possible crime, such as fraud or
              identity theft, or protecting our rights or property or the
              rights, property or safety of others; and
            </li>
            <li>
              To evaluate or conduct a merger, divestiture, restructuring,
              reorganisation, dissolution, or other sale or transfer of some or
              all of our assets, whether as a going concern or as part of
              bankruptcy, liquidation, or similar proceeding, in which personal
              information held by us is among the assets transferred.
            </li>
          </ol>
          <div className="pt-8">
            <p className="text-white text-justify text-lg md:text-xl">
              In the preceding twelve (12) months, we have not sold any Personal
              Information for a third party’s commercial purpose or monetary
              value however we do disclose Personal Information for internal
              business purposes. We also have not and will not sell the Personal
              Information of minors under 16 years of age to non-affiliated
              third parties without affirmative consent. We take reasonable
              steps to ensure that companies with which We share your Personal
              Information are contractually obligated to keep the Personal
              Information that We provide to them confidential and to use such
              information only as We permit.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="py-10 terms_bg border-b-2 border-white">
          <h1 className=" text-3xl pb-2 text-white text-center">
            Your Choices and Rights
          </h1>
        </div>
        <div className="space-y-5 text-white px-8 py-10 sm:px-8 md:px-20">
          <div className="grid md:grid-cols-2 grid-cols-1 pt-6 pb-3 border-b-2 border-white border-opacity-5">
            <div>
              <p className="text-white text-justify font-bold text-2xl md:text-xl">
                General:
              </p>
            </div>
            <div>
              <ol className="list-disc list-inside space-y-5 text-lg md:text-xl pt-3 px-3 md:px-10">
                <li>
                  You may update or delete information from your profile at any
                  time, or request that We do so; however, because we archive
                  past transactions, You cannot delete this information. You may
                  also request that we delete Your account entirely by
                  contacting us. Terminating Your registration will not
                  necessarily remove previous public comments or other user
                  content on public display on the Services. If you wish to
                  cancel Your account on the Services or delete Your information
                  previously provided to Us, You may send Your request here:{" "}
                  <span className="text-blue-600">
                    Admin@righthandventure.com
                  </span>
                </li>
                <li>
                  If You do not receive a response from us to any emails you
                  send to us within ten (10) business days, please send Us
                  another email, as Your original email may not have been
                  received.
                </li>
              </ol>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 pt-6 pb-3 border-b-2 border-white border-opacity-5">
            <div>
              <p className="text-white text-justify font-bold text-2xl md:text-xl">
                Email:
              </p>
            </div>
            <div>
              <ol className="list-disc list-inside space-y-5 text-lg md:text-xl pt-3 px-3 md:px-10">
                <li>
                  You may choose not to subscribe to email communications other
                  than servicerelated communications such as payment
                  confirmation. If You do choose to receive email communications
                  such as email newsletters and promotional emails, You may
                  later opt out by following the instructions provided at the
                  bottom of each email, clicking the “unsubscribe” button at the
                  bottom of emails We sent You.
                </li>
              </ol>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 pt-6 pb-3 border-b-2 border-white border-opacity-5">
            <div>
              <p className="text-white  font-bold text-2xl md:text-xl">
                Advertising and Marketing and Website Analytics:
              </p>
            </div>
            <div>
              <ol className="list-disc list-inside space-y-5 text-lg md:text-xl pt-3 px-3 md:px-10">
                <li>
                  You can learn more about ad-serving companies and the options
                  available to limit their collection and use of your
                  information by visiting the Services for the Network
                  Advertising Initiative, the Digital Advertising Alliance, and
                  the European Interactive Advertising Digital Alliance European
                  (EDAA). Similarly, you can learn about your options to opt out
                  of mobile app tracking by certain advertising networks through
                  your device settings and by resetting the advertiser ID on
                  your Apple or Android device. For more information about how
                  to change these settings go to:
                  <ol className="list-decimal list-inside text-lg md:text-xl pt-3 md:px-4 space-y-6">
                    <li>
                      Apple:{" "}
                      <span className="font-semibold text-blue-600">
                        <a
                          href="https://support.apple.com/kb/HT4228"
                          target="_blank"
                        >
                          Apple Support
                        </a>
                      </span>
                    </li>
                    <li>
                      Android:{" "}
                      <span className="font-semibold text-blue-600">
                        <a
                          href="https://www.google.com/policies/technologies/ads/"
                          target="_blank"
                        >
                          Android Support
                        </a>
                      </span>
                    </li>
                    <li>
                      Windows:{" "}
                      <span className="font-semibold text-blue-600">
                        <a
                          href="https://choice.microsoft.com/en-US/optout"
                          target="_blank"
                        >
                          Microsoft Support
                        </a>
                      </span>
                    </li>
                  </ol>
                </li>
                <li>
                  The DAA’s AppChoices App provides options regarding the
                  collection of crossapp data for your device.
                </li>
                <li>
                  Additional resources or tools may exist that streamline the
                  process of submitting opt-out requests–for example, TRUSTe’s
                  Ad Preference Manager. We do not review or warrant the
                  representations made by these tools and cannot guarantee their
                  effectiveness.
                </li>
                <li>
                  To opt out of Google Analytics Advertising Features, visit
                  Google’s Ad Settings page. Website users can also access the
                  Google Analytics Opt Out Browser{" "}
                  <span className="font-semibold text-blue-600">
                    <a
                      href="https://support.google.com/analytics/answ
                        er/181881?hl=en"
                      target="_blank"
                    >
                      Add-on.
                    </a>
                  </span>
                </li>
                <li>
                  Please note that opting out of advertising network services
                  does not mean that You will not receive advertising while
                  using our Services or on other Services, nor will it prevent
                  the receipt of interest-based advertising from third parties
                  that do not participate in these programs. It will, however,
                  exclude You from interestbased advertising conducted through
                  participating networks, as provided by their policies and
                  choice mechanisms. If You delete your cookies, You may also
                  delete your opt-out preferences. If You use multiple browsers
                  or devices You may need to execute this opt-out on each
                  browser or device.
                </li>
              </ol>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 pt-6 pb-3 border-b-2 border-white border-opacity-5">
            <div>
              <p className="text-white text-justify font-bold text-2xl md:text-xl">
                International Users:
              </p>
            </div>
            <div>
              <ol className="list-disc list-inside space-y-5 text-lg md:text-xl pt-3 px-3 md:px-10">
                <li>
                  For international users, please note that it may be necessary
                  to transfer your information internationally and, in
                  particular, your information may be transferred to and
                  processed in the United States. It is important to know that
                  data protection laws in some jurisdictions may not be as
                  strong as those in your country. If applicable, you may have a
                  right to claim compensation for damages caused by a breach of
                  relevant data protection laws. By using the Site, you agree to
                  have your information used and transferred to the United
                  States as outlined in this Privacy Notice. To ensure the
                  continued protection of your Personal Information while in our
                  care, We take appropriate organisational and technical
                  measures.
                </li>
              </ol>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 pt-6 pb-3 border-b-2 border-white border-opacity-5">
            <div>
              <p className="text-white text-justify font-bold text-2xl md:text-xl">
                EU Data Subject Rights:
              </p>
            </div>
            <div>
              <ol className="list-disc list-inside space-y-5 text-lg md:text-xl pt-3 px-3 md:px-10">
                <li>
                  If you are an EU data subject, we provide you with choices
                  about the collection, use and disclosure of your data. You may
                  exercise these rights by contacting us in writing by
                  electronic mail, postal mail, or commercial courier at the
                  address or email address provided at the end of this Privacy
                  Notice under the heading “Contact Information.” Unless
                  explicitly stated otherwise, we will respond to your request
                  as soon as possible, but at the latest within one month.
                </li>
                <li>
                  Your rights include:
                  <ol className="list-decimal list-inside text-lg md:text-xl pt-3 md:px-4 space-y-6">
                    <li>
                      Accessing your data to know what information we have
                      collected about you and how it has been shared;
                    </li>
                    <li>
                      Requesting the deletion of all or some of your data;
                    </li>
                    <li>
                      Changing or correcting inaccurate or outdated information;
                    </li>
                    <li>
                      Objecting to, limiting or restricting the use of all or
                      some of your data; and
                    </li>
                    <li>
                      Requesting a copy of your data, including in a portable
                      format.
                    </li>
                    <li>
                      You also have the right to complain to your supervisory
                      authority if you believe we have violated your privacy
                      rights or applicable laws and regulations.
                    </li>
                  </ol>
                </li>
                <li>
                  All EU Data Subject Rights extend to Right Hand Venture and
                  owned applications including nova, DataQ, and sub-applications
                  thereunder.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="py-10 terms_bg border-b-2 border-white">
          <h1 className=" text-3xl pb-2 text-white text-center">
            Privacy Statement for California
          </h1>
        </div>
        <div className="space-y-5 text-white px-8 py-10 sm:px-8 md:px-20">
          <div className="grid md:grid-cols-2 grid-cols-1 pt-6 pb-3 border-b-2 border-white border-opacity-5">
            <div>
              <p className="text-white text-justify font-bold text-2xl md:text-xl">
                Information We Collect:
              </p>
            </div>
            <div>
              <ol className="list-disc list-inside space-y-5 text-lg md:text-xl pt-3 px-3 md:px-10">
                <li>
                  This Privacy Statement for California users supplements the
                  information contained in our Privacy Notice above and applies
                  solely to all visitors, users, and others who reside in the
                  State of California (”consumers” or “you”). We adopt this
                  notice to comply with the California Consumer Privacy Act of
                  2018 (CCPA) and other California privacy laws. Any terms
                  defined in the CCPA have the same meaning when used in this
                  notice. In the preceding 12 months we have:
                  <ol className="list-decimal list-inside text-lg md:text-xl pt-3 md:px-4 space-y-6">
                    <li>
                      collected the categories of Personal Information from the
                      sources listed below table, and
                    </li>
                    <li>
                      disclosed such Personal Information to the below listed
                      third parties as follows.
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 pt-6 pb-3 border-b-2 border-white border-opacity-5">
            <div>
              <p className="text-white  font-bold text-2xl md:text-xl">
                Sharing of Personal Information:
              </p>
            </div>
            <div>
              <ol className="list-disc list-inside space-y-5 text-lg md:text-xl pt-3 px-3 md:px-10">
                <li>
                  In the preceding (12) months, we have not sold any Personal
                  Information for a third party’s commercial purpose or monetary
                  value however we do disclose Personal Information for internal
                  business purposes. Such internal business purposes are
                  described above.
                </li>
              </ol>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 pt-6 pb-3 border-b-2 border-white border-opacity-5">
            <div>
              <p className="text-white  font-bold text-2xl md:text-xl">
                Use of Personal Information:
              </p>
            </div>
            <div>
              <ol className="list-disc list-inside space-y-5 text-lg md:text-xl pt-3 px-3 md:px-10">
                <li>
                  We use or disclose Personal Information for the following
                  business purposes:
                  <ol className="list-decimal list-inside text-lg md:text-xl pt-3 md:px-4 space-y-6">
                    <li>
                      To fulfil or meet the reason for which the information is
                      provided.
                    </li>
                    <li>
                      To provide you with information, products or services that
                      you request from Us.
                    </li>
                    <li>
                      To provide you with email alerts, event registrations and
                      other notices concerning Our products or services, or
                      events or news, that may be of interest to you.
                    </li>
                    <li>
                      To support you and to respond to your inquiries, including
                      investigating and addressing your concerns and monitoring
                      and improving Our responses.
                    </li>
                    <li>
                      To provide you with information, products or services that
                      you request from us.
                    </li>
                    <li>
                      To carry out our obligations and enforce our rights
                      arising from any contracts entered into between you and
                      us, as applicable.
                    </li>
                    <li>
                      To improve our Site and present its contents to you.
                    </li>
                    <li>
                      As necessary or appropriate to protect the rights,
                      property or safety of us, our customers, consumers or
                      others.
                    </li>
                    <li>
                      To respond to law enforcement requests and as required by
                      applicable law, court order, or governmental regulations.
                    </li>
                    <li>
                      As described to you when collecting your Personal
                      Information or as otherwise outlined in the CCPA.
                    </li>
                    <li>
                      To evaluate or conduct a merger, divestiture,
                      restructuring, reorganisation, dissolution, or other sale
                      or transfer of some or all of our assets, whether as a
                      going concern or as part of bankruptcy, liquidation, or
                      similar proceeding, in which Personal Information held by
                      us is among the assets transferred.
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="py-10 terms_bg border-b-2 border-white">
          <h1 className=" text-3xl pb-2 text-white text-center">Your Right</h1>
        </div>
        <div className="text-white px-8 py-10 sm:px-8 md:px-20">
          <div className="pt-8">
            <p className="text-white text-justify text-lg md:text-xl">
              We provide our California customers with specific rights regarding
              their Personal Information. The section describes the rights that
              you have under California law and explains how to exercise those
              rights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 pt-6 pb-3 border-b-2 border-white border-opacity-5">
            <div>
              <p className="text-white  font-bold text-2xl md:text-xl">
                Right to Know About Personal Information Collected, Used, or
                Disclosed:
              </p>
            </div>
            <div>
              <ol className="list-disc list-inside space-y-5 text-lg md:text-xl pt-3 px-3 md:px-10">
                <li>
                  You have the right to request that We disclose certain
                  information to you about our collection, use and disclosure of
                  your Personal Information over the past 12 months. Once We
                  receive your request and verify your identity, We will
                  disclose to you:
                  <ol className="list-decimal list-inside text-lg md:text-xl pt-3 md:px-4 space-y-6">
                    <li>
                      the categories of information We collected about you;
                    </li>
                    <li>the categories of sources for the information;</li>
                    <li>
                      our business or commercial purpose for collecting or
                      disclosing that information;
                    </li>
                    <li>
                      the categories of third parties with whom We shared that
                      information; and
                    </li>
                    <li>
                      the categories of information We collected about you in
                      the preceding 12 months.
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 pt-6 pb-3 border-b-2 border-white border-opacity-5">
            <div>
              <p className="text-white  font-bold text-2xl md:text-xl">
                Right to Delete Personal Information Collected or Maintained:
              </p>
            </div>
            <div>
              <ol className="list-disc list-inside space-y-5 text-lg md:text-xl pt-3 px-3 md:px-10">
                <li>
                  You have the right to request that We delete any of the
                  information that We collected from you and retain it, subject
                  to certain exceptions. Once We receive and confirm your
                  request and verify your identity, We will permanently delete
                  (and direct our service providers to delete) your information
                  from our records, unless a legal exception to deletion
                  applies. In our response to your request to delete, We will
                  specify how We have deleted your information or, if We must
                  deny your deletion request, the basis for this refusal.
                </li>
              </ol>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 pt-6 pb-3 border-b-2 border-white border-opacity-5">
            <div>
              <p className="text-white  font-bold text-2xl md:text-xl">
                Right to Non-Discrimination for Exercise of Privacy Rights:
              </p>
            </div>
            <div>
              <ol className="list-disc list-inside space-y-5 text-lg md:text-xl pt-3 px-3 md:px-10">
                <li>
                  We will not discriminate against you for exercising any of
                  your rights by:
                  <ol className="list-decimal list-inside text-lg md:text-xl pt-3 md:px-4 space-y-6">
                    <li>
                      denying you goods or services (except concerning IP
                      addresses since We cannot provide our Site to you without
                      collecting the IP address from which you access the Site);
                    </li>
                    <li>
                      charging you different prices or rates for goods or
                      services, including through granting discounts or other
                      benefits, or imposing penalties;
                    </li>
                    <li>
                      providing you a different level or quality of goods or
                      services;
                    </li>
                    <li>
                      suggest that you may receive a different price or rate for
                      goods or services or a different level or quality of goods
                      or services.
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 pt-6 pb-3 border-b-2 border-white border-opacity-5">
            <div>
              <p className="text-white text-justify font-bold text-2xl md:text-xl">
                Exercising Your Rights:
              </p>
            </div>
            <div>
              <ol className="list-disc list-inside space-y-5 text-lg md:text-xl pt-3 px-3 md:px-10">
                <li>
                  To exercise the rights described above, please submit a
                  verifiable consumer request to Us by either:
                  <ol className="list-decimal list-inside text-lg md:text-xl pt-3 md:px-4 space-y-6">
                    <li>Calling Us at: (+91)8882786072</li>
                    <li>Emailing Us at: Admin@righthandventure.com</li>
                  </ol>
                </li>
              </ol>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 pt-6 pb-3 border-b-2 border-white border-opacity-5">
            <div>
              <p className="text-white text-justify font-bold text-2xl md:text-xl">
                Authorising an Agent:
              </p>
            </div>
            <div>
              <ol className="list-disc list-inside space-y-5 text-lg md:text-xl pt-3 px-3 md:px-10">
                <li>
                  You may designate an authorised agent to submit your consumer
                  request on your behalf, so long the authorised agent has your
                  written permission to do so and you have taken steps to verify
                  your identity directly with Us.
                </li>
              </ol>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 pt-6 pb-3 border-b-2 border-white border-opacity-5">
            <div>
              <p className="text-white text-justify font-bold text-2xl md:text-xl">
                Verifying Your Request:
              </p>
            </div>
            <div>
              <ol className="list-disc list-inside space-y-5 text-lg md:text-xl pt-3 px-3 md:px-10">
                <li>
                  We cannot respond to your request or provide you with
                  information if We cannot verify your identity or authority to
                  make the request and confirm the information relates to you.
                  Making a verifiable consumer request does not require you to
                  create an account with Us. We will only Use the information
                  provided in a verifiable consumer request to verify your
                  identity or authority to make the request. You may only make a
                  verifiable consumer request for access or data portability
                  twice within 12 months.
                </li>

                <li>
                  To verify your identity, We ask that you provide Us with the
                  following information when you submit your request:
                  <ol className="list-decimal list-inside text-lg md:text-xl pt-3 md:px-4 space-y-6">
                    <li>first name,</li>
                    <li>last name, and</li>
                    <li>phone number or email</li>
                  </ol>
                </li>
                <li>
                  We will use the above information to verify your identity.
                  Depending on your type of request or the information requested
                  by you, We may require additional information to verify your
                  identity and fulfil your request.
                </li>
                <li>
                  You may make such a request by contacting Us in writing by
                  electronic mail, postal mail, or commercial courier at the
                  address or email address provided at the end of this Privacy
                  Notice under the heading “Contact Information” with a
                  preference on how our response to your request should be sent.
                </li>
              </ol>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 pt-6 pb-3 border-b-2 border-white border-opacity-5">
            <div>
              <p className="text-white text-justify font-bold text-2xl md:text-xl">
                Do-Not-Track Requests:
              </p>
            </div>
            <div>
              <ol className="list-disc list-inside space-y-5 text-lg md:text-xl pt-3 px-3 md:px-10">
                <li>
                  California law also requires that We disclose how We respond
                  to “do-not-track requests” from our users. At this time, We do
                  not currently respond to “do-nottrack” requests from our
                  users’ browsers.
                </li>
              </ol>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 pt-6 pb-3 border-b-2 border-white border-opacity-5">
            <div>
              <p className="text-white text-justify font-bold text-2xl md:text-xl">
                Shine the Light:
              </p>
            </div>
            <div>
              <ol className="list-disc list-inside space-y-5 text-lg md:text-xl pt-3 px-3 md:px-10">
                <li>
                  California law permits customers in California to request
                  certain details about how their personal information is shared
                  with third parties and, in some cases, affiliates if the
                  personal information is shared for those third parties’ and
                  affiliates’ own direct marketing purposes. We do not share
                  personal information with third parties or affiliates for
                  those third parties or affiliates’ own direct marketing
                  purposes. Californians may request and obtain from us once a
                  year, free of charge, information about the personal
                  information (if any) that We disclosed to third parties for
                  direct marketing purposes in the preceding calendar year.
                </li>
                <li>
                  To make a request, please provide sufficient information for
                  us to determine if this applies to You, attest to the fact
                  that You are a California resident, and provide your current
                  California address to which We will send our response. Your
                  inquiry must specify “California Shine the Light Privacy
                  Rights Request” in the subject line of the email or the first
                  line of the letter, and include Your name, street address,
                  city, state, and ZIP code. Please note that We are only
                  required to respond to one request per customer each year.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="py-10 terms_bg border-b-2 border-white">
          <h1 className=" text-3xl pb-2 text-white text-center">
            Other Important Information
          </h1>
        </div>
        <div className="text-white px-8 py-10 sm:px-8 md:px-20">
          <div className="grid md:grid-cols-2 grid-cols-1 pt-6 pb-3 border-b-2 border-white border-opacity-5">
            <div>
              <p className="text-white text-justify font-bold text-2xl md:text-xl">
                Privacy Notice Changes:
              </p>
            </div>
            <div>
              <ol className="list-disc list-inside space-y-5 text-lg md:text-xl pt-3 px-3 md:px-10">
                <li>
                  We reserve the right to change or update this Privacy Notice
                  by posting such changes or updates to the Site. Amendments to
                  this Privacy Notice will be posted at this URL and will be
                  effective when posted. You can tell if the Notice has changed
                  by checking the last modified date that appears at the end of
                  this Privacy Notice. Your continued use of the Site following
                  the posting of any amendment, modification or change shall
                  constitute your acceptance thereof.
                </li>
              </ol>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 pt-6 pb-3 border-b-2 border-white border-opacity-5">
            <div>
              <p className="text-white  font-bold text-2xl md:text-xl">
                Cross-Border Data Transfers:
              </p>
            </div>
            <div>
              <ol className="list-disc list-inside space-y-5 text-lg md:text-xl pt-3 px-3 md:px-10">
                <li>
                  We process data both inside and outside the United States,
                  either directly or through third-party service providers. It
                  is important to know that data protection laws in some
                  jurisdictions may not be as strong as those in your country.
                  Where we transfer your data from the European Economic Area
                  (the UK or Switzerland) (“EEA”) to a location outside the EEA,
                  we will only transfer your data if an appropriate level of
                  protection for your personal data is guaranteed, such as where
                  we have contractual obligations to protect or transfer data
                  with certain safeguards in place. To ensure the continued
                  protection of your data while in our care, we take appropriate
                  organisational and technical measures. In addition, we may
                  transfer your personal data if one of the legal exceptions for
                  such transfer can be invoked, such as with your consent or in
                  the execution of an agreement you have with us.
                </li>
              </ol>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 pt-6 pb-3 border-b-2 border-white border-opacity-5">
            <div>
              <p className="text-white text-justify font-bold text-2xl md:text-xl">
                Data Retention:
              </p>
            </div>
            <div>
              <ol className="list-disc list-inside space-y-5 text-lg md:text-xl pt-3 px-3 md:px-10">
                <li>
                  We will retain your Personal Information for as long as We
                  have a legitimate legal, business, or regulatory need. We will
                  retain your data for as long as we have a legitimate legal,
                  business, or regulatory need. If You are an EU data subject,
                  You may exercise Your right to data deletion at any time by
                  contacting us here: Admin@righthandventure.com
                </li>
                <li>
                  If You choose a direct payment gateway to complete Your
                  purchase, then Stripe stores Your credit card data. Your
                  purchase transaction data is stored only as long as necessary
                  to complete Your purchase transaction. After that is complete,
                  Your purchase transaction data is deleted.
                </li>
              </ol>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 pt-6 pb-3 border-b-2 border-white border-opacity-5">
            <div>
              <p className="text-white text-justify font-bold text-2xl md:text-xl">
                Children Under the Age of 16:
              </p>
            </div>
            <div>
              <ol className="list-disc list-inside space-y-5 text-lg md:text-xl pt-3 px-3 md:px-10">
                <li>
                  We do not knowingly collect Personal Information from
                  individuals under the age of 16, unless the Personal
                  Information is submitted by a provider for use of our services
                  and with parental consent. Our Site is not intended for anyone
                  under the age of 16, and no one under the age of 16 may
                  provide information on the Site.
                </li>
              </ol>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 pt-6 pb-3 border-b-2 border-white border-opacity-5">
            <div>
              <p className="text-white text-justify font-bold text-2xl md:text-xl">
                Third-Party Websites:
              </p>
            </div>
            <div>
              <ol className="list-disc list-inside space-y-5 text-lg md:text-xl pt-3 px-3 md:px-10">
                <li>
                  Our Site may contain links to other websites of interest.
                  However, once you have used these links to leave our site, you
                  should note that We do not have any control over that other
                  website. Therefore, We cannot be responsible for the
                  protection and privacy of any information that you provide
                  while visiting such sites and such sites are not governed by
                  this privacy statement. You should exercise caution and look
                  at the privacy statement applicable to the website in
                  question.
                </li>
              </ol>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 pt-6 pb-3 border-b-2 border-white border-opacity-5">
            <div>
              <p className="text-white text-justify font-bold text-2xl md:text-xl">
                Security:
              </p>
            </div>
            <div>
              <ol className="list-disc list-inside space-y-5 text-lg md:text-xl pt-3 px-3 md:px-10">
                <li>
                  We have implemented organisational and technical safeguards
                  for protecting the Personal Information that you share with
                  Us, including Secure Socket Layer (SSL) security software
                  encryption for all personal customer information.
                  Notwithstanding the foregoing, no website is one-hundred
                  percent (100%) secure and transmitting information over the
                  internet inherently poses a risk, therefore, We cannot
                  guarantee absolute security.
                </li>
                <li>
                  Please note that e-mail is not encrypted and is not considered
                  to be a secure means of transmitting credit card information,
                  so please do not send us your credit card number by email. Any
                  payment transactions will be encrypted
                </li>
              </ol>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 pt-6 pb-3 border-b-2 border-white border-opacity-5">
            <div>
              <p className="text-white  text-justify font-bold text-2xl md:text-xl">
                Contact Information:
              </p>
            </div>
            <div>
              <ol className="list-disc list-inside space-y-5 text-lg md:text-xl pt-3 px-3 md:px-10">
                <li>
                  If there are any questions regarding this Privacy Notice you
                  may contact Us using the information below.
                </li>
                <li>
                  Address: LG 332 Gaur City Center, Noida Extension, Uttar
                  Pradesh, 201306
                </li>
                <li>Email: Admin@righthandventure.com</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
