"use client";
import Link from "next/link";
import { useState } from "react";

const privacyData = [
  {
    title: "Information we may collect about you",
    content: (
      <>
        By the term &quot;personal data,&quot; we refer to information that
        relates to an identified or identifiable individual. Your name, national
        identification number, internet protocol (IP) address, or other pieces
        of information from which you can be directly or indirectly identified
        are typically considered personal data.
        <br />
        The personal data we collect can be grouped into the following
        categories:
      </>
    ),
    table: [
      {
        type: "Identification data",
        examples:
          "First, last, middle, maiden names, date of birth, personal identity code, any other unique sequence of symbols granted to you, intended for personal identification, gender, nationality, citizenship, copy of government-issued identity document (e.g., passport, national identity card, residence permit, driver's license) and its details (e.g., type, number, place and date of issuance, expiry date, MRZ code, signature), country of birth, residential address, copy of proof of address document (e.g., utility bill, identification document bearing your address), photographed image or video recording of your face that you provide through a mobile or desktop camera while going through our identity verification process.",
      },
      {
        type: "Transaction data",
        examples:
          "Account balance, transactional activity, external wallet address, transaction information such as timestamp, virtual asset service provider (VASP) that is a counterparty to the transaction, transaction ID (TXID).",
      },
      {
        type: "Account data",
        examples:
          "ID number, login password, mobile app PIN number, nickname, profile image, referral information (if you use a Referral Code of someone else when you create an account with us or if someone else uses your Referral Code when creating an account with us), push and email notification preferences, history of the actions performed in your account on the OROX Platform.",
      },
      {
        type: "Activities data",
        examples:
          "Technical information, including device type, model, operating system and version, carrier, IP address, browser type and version, location, time zone setting, unique device identifier (e.g., IMEI), unique advertising or vendor identifier (e.g., ADID, IDFA, IDFV), authentication data, crash logs and other diagnostics data, links you interact with across our Products, Services, and the OROX Platform (including links in our emails sent to you), clickstream to, through, and from our Products, Services, or the OROX Platform, access dates and times, pages visited, page response times, download errors, length of visits, types of page interaction (e.g., scrolling, clicks, mouse-overs), external webpage that referred you to our Products, Services, or the OROX Platform",
      },
      {
        type: "Contact data",
        examples:
          "Content you create or submit to the OROX Platform (e.g., posts and comments you upload to our OROX Community Service) including but not limited to texts, links, images, gifs, audio, or video.",
      },
      {
        type: "Data related to AML/CFT/sanctions requirements",
        examples:
          "Information that enables us to perform anti-money laundering (AML) and combating the financing of terrorism (CFT) requirements and ensure the compliance with international sanctions, including the purpose of the business relationship and whether you are a politically exposed person and other data that are required to be processed by us in order to comply with the legal obligation to &quot;know your client&quot; (KYC) (information collected will differ depending on each client's risk score).",
      },
      {
        type: "Data obtained and/or created in order to fulfill the requirements of applicable legislations",
        examples:
          "Information that OROX is required to provide to public authorities (e.g., tax administrators, courts), including information on income, payments, and other information held by us.",
      },
      {
        type: "Contact data",
        examples: "Phone number, e-mail address, residential address.",
      },
      {
        type: "Communications data",
        examples:
          "Information you provide during communication with us (e.g., via emails, chats, or calls with our Support Team).Information you provide during communication with us (e.g., via emails, chats, or calls with our Support Team).",
      },
      {
        type: "Promotional data",
        examples:
          "Survey responses, participation in promotional events, promotion communication preferences.",
      },
      {
        type: "Special category data",
        examples:
          "Biometric data (collected for identity verification required during our KYC process).",
      },
    ],
  },
  {
    title: "How we collect your personal data",
    content: (
      <>
        <p>
          We may collect your personal data in three ways: 1) receive directly
          from you; 2) generate or collect while you visit the OROX Platform or
          use our Products or Services; and 3) receive from third parties.
        </p>
        <br />
        <p className="font-bold">Information received directly from you</p>
        <br />
        <p>
          To create an account such as a OROX Account with us and use our
          Products and/or Services, you need to provide us with certain
          information. We collect such information because it is necessary to
          provide the requested Products or Services (e.g., when you make a
          withdrawal request, we will ask for a withdrawal address), required by
          law (e.g., we collect your selfie and government-issued photo ID to
          verify your identity and comply with relevant AML/CFT regulations), or
          for certain other specific purposes that we will describe in further
          detail below.
        </p>
        <br />
        <p>
          You have a choice regarding whether to provide us with your personal
          data. Please note that if you choose not to provide us with certain
          information that is required by law or under the terms of a contract
          we have with you or are in the process of entering into, we may not be
          able to offer you our Products or Services (e.g., if you do not want
          to provide information necessary to create a OROX Account) or our
          Products or Services may not be best tailored to your interests or
          preferences.
        </p>
        <br />
        <p className="font-bold">
          Information we generate or collect while you visit the OROX Platform
          or use our Products or Services
        </p>
        <br />
        <p>
          When you create a OROX Account, we assign you a unique ID number. This
          allows us to recognise you when you sign in on a new device or through
          a different platform (e.g., say you usually access your account via
          our website{" "}
          <Link
            href={"https://oroxglobal.com"}
            className="text-[#2F5DFD] underline"
          >
            oroxglobal.com
          </Link>
          , but now want to sign in via our OROX mobile app). Once we verify
          your identity through our Know Your Customer (KYC) process, we also
          assign you a unique Referral Code which you may use to invite your
          friends to create a OROX Account and use our Products or Services and
          be eligible for rewards if you meet certain criteria under our
          Referral Program Terms, available prior to program launch.
        </p>
        <br />
        <p>
          In addition, we also collect information about your devices, and your
          interactions with and activities across our Products, Services, and/or
          the OROX Platform (including, without limitation, your transactions).
          We use this information to provide the requested Products, Services,
          or OROX Platform; detect any suspicious activity and prevent fraud;
          offer you more personalised services and features; improve the
          performances of our Products, Services, or the OROX Platform, and
          develop new Products or Services; and address customer support issues.
          For example, collecting your device type allows us to show you the
          best version of the OROX Platform. We may use cookies and other
          similar technologies to collect some of this information.
        </p>
      </>
    ),
  },
  {
    title: "How to contact us",
    content: (
      <>
        If you have any questions, comments, complaints, or requests regarding
        this Privacy Policy or our privacy practices, or if you wish to exercise
        your rights regarding your personal data, please contact us by email at{" "}
        <Link
          className="text-[#2F5DFD] underline"
          href={"mailto:info@oroxglobal.com"}
        >
          info@oroxglobal.com
        </Link>
         .
      </>
    ),
  },
  {
    title: "Global privacy policy",
    content: (
      <>
        This Privacy Policy is global in scope yet is not intended to override
        any legal rights or prohibitions in any jurisdiction where such rights
        or prohibitions prevail. In such event, the rights and obligations set
        out in this Privacy Policy will apply, subject only to amendment under
        any applicable local laws or regulations having precedence.
      </>
    ),
  },
];

export const Privacy = () => {
  const [lastUpdated] = useState("August 2024");

  return (
    <section className="w-full px-[16px] py-[44px] md:px-[80px] md:py-[88px]">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-[32px]">
          <div className="text-[14px] md:text-[16px] font-semibold bg-clip-text text-transparent bg-gradient-to-b from-[#4296E4] to-[#383699] text-center mb-[8px]">
            LEGAL DETAILS
          </div>
          <h1 className="text-[40px] md:text-[64px] font-bold text-[#19191B] mb-[40px] text-center leading-[48px] md:leading-[80px]">
            Privacy Policy
          </h1>
          <div className="text-[14px] font-bold text-[#19191B] leading-[20px]">
            Last updated on {lastUpdated}
          </div>
        </div>

        {/* Introduction */}
        <div className="prose max-w-none mb-[40px]">
          <p className="text-[16px] md:text-[20px] text-[#19191B] leading-[24px] md:leading-[32px]">
            OROX Management Limited, a company registered in the British Virgin
            Islands, and its subsidiaries, affiliates, and transferees,
            successors, and their officers, directors, employees, and agents,
            including oroxglobal.com (&quot;Company&quot;, &quot;OROX&quot;, or
            &quot;we&quot;) respect your privacy and are committed to protecting
            your personal data. To that end, we have prepared this Privacy
            Policy to explain what information we collect about you, how we use
            it, when we share it, and what rights you have with respect to your
            personal data. We encourage you to read this Privacy Policy
            carefully, as it can help you make informed decisions when you visit
            the OROX Platform and/or use our Products or Services. you make
            informed decisions when you visit the OROX Platform and/or use our
            Products or Services.
            <br />
            We review our Privacy Policy regularly to ensure that it reflects
            any changes to our operation, privacy practices, Products, Services,
            or the OROX Platform as well as that we remain compliant with the
            changing regulatory landscape. And we may amend this Privacy Policy
            at any time and without prior notice by posting the updated version,
            along with the &quot;Last revised&quot; date, on this page. Please
            revisit this page regularly to stay informed of any changes. If we
            make a revision that materially changes our privacy practices, we
            will make reasonable efforts to notify you in a timely manner and,
            under applicable laws, obtain your consent before implementing such
            revision. You hereby acknowledge and agree that your continued use
            of the OROX Platform, our Products, and/or our Services shall
            constitute your acceptance of our current Privacy Policy and any
            future amendments thereto. This Privacy Policy and any future
            amendments thereto supplement, and form part of, our Terms of
            Service, available at{" "}
            <Link
              href="https://oroxglobal.com/terms-of-service"
              className="text-[#2F5DFD] underline"
            >
              https://oroxglobal.com/terms-of-service
            </Link>
            , as amended, supplemented, or modified from time to time.
            Accordingly, capitalised terms used, but not defined in this Privacy
            Policy, have the meanings set out in the Terms of Service.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-[32px] md:space-y-[40px]">
          {privacyData.map((section, index) => (
            <div key={index} className="space-y-[24px] mt-[40px]">
              <h2 className="text-[28px] md:text-[28px] font-bold text-[#19191B]">
                {section.title}
              </h2>
              <div className="text-[16px] md:text-[20px] text-[#19191B] leading-[24px] md:leading-[32px]">
                {section.content}
              </div>

              {/* Table for data types if present */}
              {section.table && (
                <div className="mt-8 border rounded-lg overflow-hidden">
                  <div className="bg-[#F4F4F4] px-6 py-4">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="font-bold text-[16px] md:text-[20px] leading-[24px] md:leading-[32px]">
                        Types of personal data
                      </div>
                      <div className="font-bold text-[16px] md:text-[20px] leading-[24px] md:leading-[32px]">
                        Examples of personal data
                      </div>
                    </div>
                  </div>
                  <div className="">
                    {section.table.map((row, idx) => (
                      <div key={idx} className="px-6 py-4">
                        <div className="grid grid-cols-2 gap-6">
                          <div className="text-[#19191B] text-[16px] md:text-[20px] leading-[24px] md:leading-[32px]">
                            {row.type}
                          </div>
                          <div className="text-[#19191B] text-[16px] md:text-[20px] leading-[24px] md:leading-[32px]">
                            {row.examples}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
