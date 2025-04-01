"use client";
import Link from "next/link";
import { useState } from "react";

const termsData = [
  {
    title: "Restricted jurisdictions",
    content: (
      <>
        <p>
          You may not have access to certain functions on the OROX Platform (i)
          if you are a resident of any jurisdiction in which OROX is not
          authorised to provide one or more of its Services to you, or (ii)
          where your use of one or more of the Services would be illegal or
          otherwise violate any applicable law.
        </p>
        <br />
        <p>
          OROX&apos;s products and services are currently unavailable to
          residents in the following countries (each a &quot;Restricted
          Jurisdiction&quot;) due to local and international regulations and
          financial sanctions: Afghanistan, Albania, Barbados, Burkina Faso,
          Burundi, Cambodia, Cayman Islands, Central African Republic, Crimea,
          Cuba, Democratic People&apos;s Republic of Korea, Democratic Republic
          of Congo, Guinea-Bissau, Haiti, Iran, Iraq, Jamaica, Jordan, Lebanon,
          Libya, Mali, Malta, Morocco, Myanmar, Nicaragua, Pakistan, Panama,
          Philippines, Russia, Senegal, Somalia, South Sudan, Sudan, Syria,
          Turkey, Uganda, United States, Venezuela, Yemen.
        </p>
        <br />
        <p>
          You hereby represent and warrant that you are not a resident of any of
          the Restricted Jurisdictions.
        </p>
        <br />
        <p>
          You shall not register a OROX Account or use the OROX Platform if you
          are a resident of any of the above jurisdictions. We may implement
          controls to restrict access to the OROX Platform from any of the above
          Restricted Jurisdictions. The list of restricted jurisdiction is
          subject to change without notice.
        </p>
      </>
    ),
  },
  {
    title: "Account registration and verification",
    content: (
      <>
        <p>
          In order to use the Service, you will need to register for an Account
          on the OROX Platform. OROX may require you to provide information
          satisfactory to OROX and relevant third parties that you are not in
          breach of or at risk of being in breach of AML Laws, Anti-Bribery
          Laws, Sanctions Laws, CTF Laws, and other applicable laws. Each
          registration only permits a single individual user’s registration, and
          subject to the discretion and operational requirements of OROX, each
          User (including with respect to any User that is a business or legal
          entity) may only maintain one active Account with OROX, which shall
          not be transferable to any other party. During the registration
          process, you may need to submit necessary and valid information and
          documents in order to verify your legal identity and for
          know-your-client checks to prevent fraud, money laundering and
          financing of terrorism, fraud or any other financial crime (“KYC
          Process”). OROX may engage the assistance of third-party service
          providers for the KYC Process and you hereby irrevocably grant OROX
          the right to share such information with the third-party service
          providers concerned.
        </p>
        <br />
        <p>
          You hereby represent and warrant that information you provide is
          accurate, complete and current, and agree to promptly update the
          information to keep it accurate, complete and current at all times.
          You understand that a change in your state or country of residence may
          impact your eligibility to access and use the OROX Platform, and agree
          to notify us in advance of any change in your state or country of
          residence. If you register on behalf of a business entity or other
          organisation, you represent and warrant that you have full authority
          to provide the information required and bind the organisation to the
          Terms. You acknowledge and agree that we, at our sole discretion, may
          suspend or discontinue your, and refuse any and all current and
          future, access to or use of your OROX Account at any time without
          notice to you.
        </p>
        <br />
        <p>
          We may freeze, suspend or terminate your OROX Account at any time in
          our sole discretion, in addition to taking any action and seeking any
          remedy we may be entitled to in law or in equity, including if we
          suspect your involvement in any fraudulent activity of any kind or
          other misuse of the Services, provision by you of inaccurate or
          misleading information, or your involvement in any money laundering or
          other financial crime related to you or your OROX Account.
        </p>
        <br />
        <p>
          We will collect, use and disclose the information in accordance with
          the Privacy Policy. If there is any reasonable doubt that the
          information provided by you is in part or in whole wrong, untruthful,
          outdated or incomplete, or the provision of the information was by
          illegal or unlawful means (including using a name/identification or
          information which is not yours), we have the right to send you a
          notice to demand a correction or removal of relevant information and
          terminate all or part of the Services to you. Your failure to correct,
          remove or deal with the information in accordance with our notice of
          demand will automatically terminate your rights to bring any claim
          with respect to the Services and the OROX Platform.
        </p>
      </>
    ),
  },
  {
    title: "Legal status of virtual asset in your account",
    content: (
      <>
        <p>
          Your Virtual Assets are held by OROX in custodial wallets. During the
          custody of your Virtual Assets by OROX, while the ownership of your
          Virtual Asset shall be solely vested in you, you do not hold the
          private keys to those wallets and are not the direct holder of the
          crypto assets in those wallets. Although OROX maintains segregated
          books for Users and their accounts, OROX shall have no obligation to
          segregate such Virtual Assets using different blockchain addresses.
        </p>
        <br />
        <p>
          The Services provided through OROX Platform are currently not
          regulated by any banking or securities regulator in any jurisdiction.
          Virtual Assets held in an account with OROX are not protected by any
          depositor or investor protection insurance scheme. Virtual Assets do
          not have legal tender status in virtually any jurisdiction.
        </p>
      </>
    ),
  },
  {
    title: "Intellectual property rights",
    content: (
      <>
        <p>
          All rights, title and interest in and to the OROX Platform and all
          contents provided or made available by OROX thereon (the “Content”)
          and any and all intellectual property contained therein or relating
          thereto, including without limitation any copyright, patent or
          trademark (the “Intellectual Property”), are and will remain the
          exclusive property of OROX or its licensors, as applicable. Subject to
          the Terms, we grant you a limited, non-transferable,
          non-sublicensable, non-exclusive and revocable license to use the OROX
          Platform and the Content for personal use until such time as the Terms
          terminate or expire, or your right to use or access the OROX Platform
          is terminated in accordance with the Terms.
        </p>
        <br />
        <p>
          Any violation of the Terms regarding the Intellectual Property may
          subject you to compensatory and punitive damages, and shall
          specifically also entitle OROX to equitable remedies, including
          injunctive relief, in addition to (and not in substitution or
          replacement for) any other available remedies at law or in equity.
        </p>
      </>
    ),
  },
  {
    title: "Account security and password",
    content: (
      <>
        <p>
          A OROX Account shall only be used by the person who registered the
          account. If you suspect or have discovered unauthorised use of a OROX
          Account and password, you should immediately notify us, and we may
          immediately take measures including suspension of account use.
        </p>
        <br />
        <p>
          We disclaim all liability for any loss or damage arising from your or
          a third party’s use of your OROX Account, whether or not it has been
          approved by you. We reserve the right to suspend, freeze or cancel the
          use of a OROX Account by anyone other than the account registrant.
        </p>
      </>
    ),
  },
  {
    title: "Potentially fraudulent activity",
    content: (
      <>
        <p>
          Any actual or suspected unauthorised access or unauthorised activity
          may be treated by us as potentially fraudulent activity. You agree to
          notify us immediately if you become aware of or suspect any such
          potentially fraudulent activity by submitting a written notice through
          email to{" "}
          <Link
            href="mailto:info@oroxglobal.com"
            className="text-[#2F5DFD] underline"
          >
            info@oroxglobal.com
          </Link>
          . Upon receipt of such written notice, we will take reasonable steps
          to protect your OROX Account.
        </p>
      </>
    ),
  },
  {
    title: "Indemnification",
    content: (
      <>
        <p>
          We may freeze, suspend or terminate your OROX Account at any time in
          our sole discretion, in addition to taking any action and seeking any
          remedy we may be entitled to in law or in equity, including if we
          suspect your involvement in any fraudulent activity of any kind or
          other misuse of the Services, provision by you of inaccurate or
          misleading information, or your involvement in any money laundering or
          other financial crime related to you or your OROX Account.
        </p>
      </>
    ),
  },
  {
    title: "Limitation of liability",
    content: (
      <>
        <p>
          We may freeze, suspend or terminate your OROX Account at any time in
          our sole discretion, in addition to taking any action and seeking any
          remedy we may be entitled to in law or in equity, including if we
          suspect your involvement in any fraudulent activity of any kind or
          other misuse of the Services, provision by you of inaccurate or
          misleading information, or your involvement in any money laundering or
          other financial crime related to you or your OROX Account.
        </p>
      </>
    ),
  },
  {
    title: "Limitation of liability",
    content: (
      <>
        <p>
          We disclaim all liability for any loss or damage arising from your or
          a third party’s use of your OROX Account, whether or not it has been
          approved by you. We reserve the right to suspend, freeze or cancel the
        </p>
      </>
    ),
  },
  {
    title: "Limitation of liability",
    content: (
      <>
        <p>
          We disclaim all liability for any loss or damage arising from your or
          a third party’s use of your OROX Account, whether or not it has been
          approved by you. We reserve the right to suspend, freeze or cancel the
        </p>
        <br />
        <p>
          OROX shall not be liable for the suspension of the Services or the
          failure to use the Services for reasons attributable to you, and shall
          be exempted from liability if the telecommunications service provider
          terminates the telecommunication service or fails to provide the
          service normally.
        </p>
        <br />
        <p>
          OROX is not responsible for any unavoidable obstacles or service
          limitations arising due to the characteristics of Virtual Assets
          including technical limitations or defects inherent to the blockchain
          network of Virtual Asset issuance management system. The Content
          provided by OROX or other information providers in the Service or by
          your email does not suggest or imply any investment. The information
          posted and transmitted may have errors and other inaccuracies, and we
          are not responsible for the reliability, accuracy, etc. thereof. OROX
          shall not be held liable for any transactions or other dealings
          between you or between you and a third party by means of the Service.
        </p>
        <br />
        <p>
          OROX and its affiliates, agents, officers and employees will not be
          liable for any liability whether in contract, tort, negligence, strict
          liability, warranty or otherwise for any indirect, consequential,
          exemplary, incidental, punitive or special damages or loss of profits.
        </p>
        <br />
        <p>
          The total liability of OROX for any claim arising out of or in
          connection with the Terms, regardless of the form of action, is
          limited to the total amount of Virtual Asset, if any, deposited by you
          to access, use or otherwise utilise the OROX Platform and shall not in
          any case be greater than the actual damages incurred due to OROX’s
          wilful misconduct.
        </p>
        <br />
        <p>
          The total liability of OROX for any claim arising out of or in
          connection with the Terms, regardless of the form of action, is
          limited to the total amount of Virtual Asset, if any, deposited by you
          to access, use or otherwise utilise the OROX Platform and shall not in
          any case be greater than the actual damages incurred due to OROX’s
          wilful misconduct.
        </p>
        <br />
        <p>
          Not withstanding anything in these Terms to the contrary, the
          obligations and liabilities of OROX will be without recourse to any
          other subsidiary or affiliate of OROX, or their respective officers,
          employees, directors, contractors, agents or representatives, and you
          agree not to make any claims against any other subsidiary or affiliate
          of OROX, or their respective officers, employees, directors,
          contractors, agents or representatives.
        </p>
        <br />
        <p>
          If OROX incurs loss due to your violation of the Terms, or your use of
          the Service, you shall compensate us for such damages. You shall
          indemnify OROX at your own responsibility and expense, from and
          against any objections, claims for damages or legal actions by third
          parties based on a claim arising from or relating to acts performed by
          you while using the Service illegally or in violation of these Terms.
          You are responsible for reimbursing any damage to OROX caused thereby.
        </p>
        <br />
      </>
    ),
  },
  {
    title: "Remedies",
    content: (
      <>
        <p>
          Without prejudice to other rights of OROX under the Terms, if you
          breach the Terms in any way, OROX may take such action as it deems
          appropriate to deal with the breach, including suspending your access
          to the OROX Platform, prohibiting you from accessing the OROX
          Platform, blocking computers using your IP address from accessing the
          OROX Platform, contacting your internet service or other
          telecommunications provider to request that it block your access to
          the OROX Platform and bringing court proceedings or taking other legal
          action against you. If you violate the Terms, OROX will be entitled,
          at any time, to bring an action or proceeding for specific
          performance, injunctive relief or other equitable relief in addition
          to (and not to the exclusion of or in substitution for) any other
          remedies at law or in equity.
        </p>
      </>
    ),
  },
  {
    title: "Prohibitions; Restrictions",
    content: (
      <>
        <p>
          You agree and understand that OROX does not permit the use of the OROX
          Platform for any prohibited or restricted activity in a OROX Account
          including but not limited to transfers to and/or from services used to
          obscure the source of funds, third party wallets, peer-to-peer and
          other exchanges which do not perform Know Your Customer (KYC)
          screening as part of their onboarding process, or illegal activity
          that would violate, assist in violation of, or cause OROX to violate
          any applicable laws or which would involve process of any unlawful
          activity.
        </p>
        <br />
        <p>
          OROX has the right to immediately freeze and suspend your account,
          return funds and close accounts, if we suspect, in our sole
          discretion, without prior notice to you or your consent, that: (i) you
          are under the age of 18; (ii) your account has been stolen or that
          someone other than you has logged in or used the Service; (iii) your
          account is, or is suspected of, being provided as a loan, transfer or
          collateral; (iv) you have used someone else’s personal information
          during identity verification; or (v) you are an entity registered on a
          list of trade ban or economic sanctions; or if an investigative agency
          requests assistance in a criminal investigation, a court order has
          been issued, a government agency requests an investigation, or we
          suspect illegal use.
        </p>
        <br />
        <p>
          OROX also has the right to prohibit, restrict or limit your use of the
          OROX Platform if it is suspected that you are: selling, sublicensing
          and/or otherwise commercialising any material on OROX Platform, using
          the OROX Platform in any way that is, or may be, damaging to the OROX
          Platform, and/or impacts user access to the OROX Platform, using the
          OROX Platform contrary to applicable laws and regulations, or in a way
          that causes harm to the OROX Platform or to any person or business
          entity, engaging in any data mining, data harvesting, data extracting
          or any other similar activity in relation to the OROX Platform or
          while using the OROX Platform.
        </p>
      </>
    ),
  },
  {
    title: "Termination; Survival of provisions",
    content: (
      <>
        <p>
          If you are not in full compliance with all of the Terms, the
          permissions granted to you under the Terms will automatically
          terminate, and you will no longer use or access, or be entitled to use
          or access, the OROX Platform, the Content or OROX Account.
        </p>
        <br />
        <p>
          OROX may terminate your right to use the OROX Platform, or block you
          from future use, at any time in its sole discretion, with or without
          cause, and without prior notice to you. Some circumstances in which
          OROX may exercise this right to terminate your right to use the OROX
          Platform include, but are not limited to: (i) you have breached any
          provision of the Terms; (ii) you have engaged in conduct which OROX,
          in its sole discretion, considers to be unacceptable; (iii) OROX is
          required by law to do so; or (iv) OROX no longer provides the OROX
          Platform.
        </p>
        <br />
        <p>
          Any ongoing obligations on you according to the Terms which are to
          survive, will survive any termination or expiration of the Terms for
          any reason.
        </p>
      </>
    ),
  },
  {
    title: "No warranties",
    content: (
      <>
        <p>
          OROX Platform and any information or materials provided by OROX are
          provided on an “as is” and “as available” basis, and OROX makes no
          express or implied representations or warranties, of any kind related
          to the OROX Platform or the information or materials contained in the
          OROX Platform. For clarity and without limiting the foregoing, you
          acknowledge that (i) OROX does not represent or warrant that the OROX
          Platform or any information or materials provided or made available by
          OROX are accurate, complete, reliable, current, error-free, or free of
          viruses, other harmful components, or any other defects; and (ii) you
          use the OROX Platform or any information or materials contained in the
          OROX Platform at your sole risk. Nothing contained in the OROX
          Platform shall be construed as providing consultation or advice to
          you.
        </p>
      </>
    ),
  },
  {
    title: "Assignment",
    content: (
      <>
        <p>
          You acknowledge and agree that you may not assign, delegate,
          subcontract or otherwise transfer your rights and obligations under
          the Terms. OROX may assign, delegate, subcontract or otherwise
          transfer its rights and obligations under the Terms without giving you
          prior notice or obtaining your consent.
        </p>
      </>
    ),
  },
  {
    title: "Severability",
    content: (
      <>
        <p>
          If any provision of the Terms is found to be unenforceable or invalid
          under any applicable law, such unenforceability or invalidity shall
          not render the Terms unenforceable or invalid as a whole, and such
          provision shall be deleted without affecting or invalidating the
          remaining provisions.
        </p>
      </>
    ),
  },
  {
    title: "Variation of the terms",
    content: (
      <>
        <p>
          We reserve the right to amend, modify or make changes to the Terms
          (collectively, “modifications”) at any time without limitation,
          liability or notice. It is your responsibility to review the Terms
          from time to time to see if modifications have been made. Your
          continued use of the OROX Platform after any modification of the Terms
          will conclusively indicate that you accept such modifications.
        </p>
      </>
    ),
  },
  {
    title: "Electronic communication",
    content: (
      <>
        <p>
          We may be required to provide certain legal and regulatory
          disclosures, periodic statements and confirmations, notices, tax forms
          and other communications (collectively, “Communications”) to you.
          Unless otherwise specified in the Terms, the Communications delivered
          to you shall be in electronic form, including, without limitation, via
          the email you entered at the time of registration, the OROX Platform,
          by notification messages or otherwise, and similar means. By agreeing
          to the Terms, you consent to OROX delivering such Communications to
          you in electronic form, including e-mail. Consent for electronic
          delivery applies to every year the Communications are furnished.
        </p>
      </>
    ),
  },
  {
    title: "Transfer and processing of data",
    content: (
      <>
        <p>
          By accessing or using the OROX Platform, you consent to the potential
          processing, transfer and storage of information about you in other
          jurisdictions, where you may not have the same rights and protections
          as you do under local law.
        </p>
      </>
    ),
  },
  {
    title: "Fair practices",
    content: (
      <>
        <p>
          You agree not to: (i) make any representations, warranties or
          guarantees on OROX’s behalf or with respect to the OROX Platform or
          any content or data contained on the OROX Platform; (ii) make any
          false or misleading representations with regard to OROX or the OROX
          Platform or any content or data contained on the OROX Platform; or
          (iii) participate or engage in any illegal, deceptive, misleading,
          fraudulent, unethical or improper practices on, through, by means of
          or with respect to the OROX Platform.
        </p>
      </>
    ),
  },
  {
    title: "Third-party websites and content",
    content: (
      <>
        <p>
          The OROX Platform may contain links or connections to third party
          websites or services. Any such link or connection is provided only as
          a convenience and should be used at your own risk. OROX has no control
          over any such other websites or services, the contents thereof or the
          products, services or policies represented (and the availability
          thereof). The existence of any link or other connection does not imply
          any affiliation, sponsorship, endorsement, approval, investigation,
          representation, warranty, verification or monitoring by OROX or create
          any liability on the part of OROX in respect of such link or
          connection. Your use of any such third-party websites or services is
          governed by the terms of service and privacy policies of those sites,
          which we encourage you to review before using such sites.
        </p>
        <br />
        <p>
          OROX will have no responsibility for any liabilities arising from or
          related to the contents of any third party website or service, the use
          or unavailability of any such website or service (including any mobile
          website) or the privacy policies and customer information practices of
          any such website or service.
        </p>
      </>
    ),
  },
  {
    title: "Third-party on-ramp services",
    content: (
      <>
        <p>
          The OROX Platform may provide links or connections to third-party
          on-ramp services through which you can purchase Virtual Assets with
          fiat currencies. Without limiting the generality of the foregoing
          paragraphs or anything else in the Terms, you hereby acknowledge and
          agree that such links or connections to third-party on-ramp services
          are provided to you only as a convenience and we are not responsible
          for any of the products, services, or other materials on those
          services, nor does any of the links or connections provided represent
          or imply an affiliation, approval, endorsement, investigation,
          monitoring, solicitation, sponsorship, verification, or warranty of
          any products or services provided on or via those services. You
          further acknowledge and agree that we will not be liable for any loss
          or damage caused in connection with the use of or reliance on the
          third-party onramp services, or the unavailability thereof. The
          third-party on-ramp services are governed by the terms of service and
          privacy policies of those services, and you should use them at your
          own risk and discretion.
        </p>
      </>
    ),
  },
  {
    title: "Network control",
    content: (
      <>
        <p>
          OROX does not own or control any of the underlying software through
          which blockchain networks are formed and cryptocurrencies are created
          and transacted. In general, the underlying software for blockchain
          networks tends to be open source such that anyone can use, copy,
          modify and distribute it. By using the OROX Platform, you understand
          and acknowledge that OROX is not responsible for the operation of the
          underlying software and networks that support cryptocurrencies and
          that OROX makes no guarantee of functionality, security or
          availability of such software and networks.
        </p>
      </>
    ),
  },
  {
    title: "Forks",
    content: (
      <>
        <p>
          Forked Networks and the available supply of any Forked Assets are
          wholly outside of the control of OROX, and our ability to deliver
          Forked Assets resulting from a Forked Network may depend on third
          parties outside of OROX’s control. You understand and acknowledge that
          Forks may materially affect the value, function, and even the name of
          the Virtual Assets associated with your OROX Account. In the event of
          a Fork, OROX may temporarily suspend certain services on the OROX
          Platform (with or without advance notice to you) while we determine,
          at our sole discretion, which Forked Network(s) to support.
        </p>
        <br />
        <p>
          OROX is unlikely to support most forked networks and most forked
          assets will likely not be made available to you. OROX may determine,
          in our sole discretion, not to support a forked network. You have no
          right, claim, or other privilege against OROX to forked assets on such
          an unsupported forked network. OROX may, in our sole discretion,
          determine our approach to such forked assets, which may include
          abandoning or otherwise electing not to support such forked assets as
          part of our services.
        </p>
      </>
    ),
  },
  {
    title: "No solicitation or offering; No advice",
    content: (
      <>
        <p>
          Except as otherwise expressly noted, the Content and the OROX Platform
          do not constitute an offer to buy or sell or a solicitation of an
          offer to buy or sell investments, loans, securities, partnership
          interests, commodities or any other financial instruments; the Content
          and the OROX Platform also do not constitute, and may not be used for
          or in connection with, an offer or solicitation by anyone in any state
          or jurisdiction in which such an offer or solicitation is not
          authorised or permitted, or to any person to whom it is unlawful to
          make such offer or solicitation.
        </p>
        <br />
        <p>
          The past performance of any investment, loan, security, partnership
          interest, commodity or financial instrument is not a guide to future
          performance. Without limiting anything in the Terms, OROX makes no
          warranties and bears no liability with respect to any fund, any
          investments, securities, partnership interests, loans or the
          performance thereof.
        </p>
        <br />
        <p>
          While OROX may make certain informational Content available to its
          users, under no circumstances does OROX provide legal, tax,
          investment, financial, estate-planning, accounting or any other
          advice. OROX may use automated systems in conjunction with: the
          receipt and handling of orders; the reporting of order
          acknowledgements, cancellations and executions; the settlement of
          transactions; tax and cost basis reporting; and similar record keeping
          and reporting services (collectively, “Automated Systems”). The use of
          Automated Systems entails risks, including but not limited to
          interruption of service, systems of communications failures, delays in
          service, cyberattacks and errors in the design or functionality of
          such Automated Systems that could cause damage, expense or liability
          to the user. OROX makes no representations or warranty of any kind,
          express or implied, with respect to the selection, design, security,
          functionality or operation of such Automated Systems. OROX expressly
          disclaims any representation that any Automated System will operate
          uninterrupted or be error-free.
        </p>
        <br />
        <p>
          Although OROX may provide information relating to investment
          approaches and opportunities to buy or sell assets, you should not
          construe any features, tools or other content as legal, tax,
          investment, financial or other advice. Nothing contained in the Orox
          Platform constitutes a solicitation, recommendation, endorsement or
          offer by OROX or a third party service provider to buy or sell any
          asset or other financial instrument.
        </p>
        <br />
        <p>
          You acknowledge and agree that OROX is not a licensed or registered
          broker-dealer, investment adviser, or other financial services
          provider, and does not provide investment, financial, estate-planning,
          accounting or other advice.
        </p>
        <br />
        <p>
          The Content and the views expressed in the Content do not necessarily
          reflect the views of OROX as a whole, its directors, officers,
          employees, shareholders or any part or member thereof or of any third
          party.
        </p>
      </>
    ),
  },
  {
    title: "Forward-looking statements",
    content: (
      <>
        <p>
          Certain statements on the OROX Platform, including within the Content,
          may constitute forward-looking statements that involve known and
          unknown risks, uncertainties and other factors that may cause actual
          returns of funds, investments, securities or loans to be materially
          different from any future returns or values expressed or implied by
          such forward-looking statements. Forward-looking statements typically
          include words such as may, will, expect, believe, plan, expect,
          anticipate, intend and other similar terminology. These statements
          reflect current expectations regarding future events and speak only as
          of the date of being posted to the OROX Platform. Forward-looking
          statements involve significant risks and uncertainties, should not be
          read as guarantees of future performance or returns, and will not
          necessarily be accurate indications of whether or not such returns
          will be achieved. Given these uncertainties and risks, users of the
          OROX Platform, including any person who may or has invested in any
          offering made by or on behalf of OROX or its subsidiaries or
          affiliates, are cautioned not to place undue reliance on such
          forward-looking statements. Forward-looking statements should not be
          interpreted as advice and are in no way a form of solicitation,
          offering or advice for OROX’s loan product. The purpose of these
          forward-looking statements is merely to further explain our products
          and services and for marketing purposes and should be interpreted as
          purely speculative.
        </p>
        <br />
        <p>
          A variety of factors could cause the actual results and developments
          of any fund, investment, security or loan to differ significantly from
          the results and developments forecasted and implied. Although
          forward-looking statements contained in the OROX Platform, if any, are
          based upon what OROX and its advisors believe are reasonable
          assumptions, OROX cannot assure you that actual results, returns or
          events will be consistent with these forward-looking statements.
          Forward-looking statements are made as of the date of being posted to
          the OROX Platform, and OROX and its subsidiaries and affiliates assume
          no obligation, and expressly disclaim any obligation, to update or
          revise forward-looking statements contained in or incorporated by
          reference into the OROX Platform or the Content or any information
          supplemental thereto to reflect new information, future events or
          circumstances or otherwise.
        </p>
      </>
    ),
  },
  {
    title: "Entire agreement",
    content: (
      <>
        <p>
          The Terms, including the Privacy Policy, any notices and disclaimers
          contained on the OROX Platform, comprise the entire understanding and
          agreement between you and OROX as to the subject matter hereof, and
          supersede any and all prior discussions, agreements and understandings
          of any kind (including without limitation any prior versions of the
          Terms).
        </p>
      </>
    ),
  },
  {
    title: "Governing law; Jurisdiction",
    content: (
      <>
        <p>
          The Terms are governed and construed exclusively by the law of the
          British Virgin islands without giving effect to any rules, principles
          or laws of the conflicts of law.
        </p>
      </>
    ),
  },
];

export const Terms = () => {
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
            Terms of Service
          </h1>
          <div className="text-[14px] font-bold text-[#19191B] leading-[20px]">
            Last updated on {lastUpdated}
          </div>
        </div>

        {/* Introduction */}
        <div className="prose max-w-none mb-[32px] md:mb-[40px]">
          <p className="text-[16px] md:text-[20px] text-[#19191B] leading-[24px] md:leading-[32px]">
            Users of this Platform and holders of OROX Accounts, including
            owners, employees, agents and affiliates of any business,
            corporation, partnership or other entity that is a user, borrower or
            investor (&quot;you&quot; or a &quot;Member&quot;) and OROX
            Management Limited, a company registered in the British Virgin
            Islands, and its subsidiaries, affiliates and, transferees,
            successors, and their officers, directors, employees, and agents,
            including oroxglobal.com (&quot;Company&quot;, &quot;OROX&quot;, or
            &quot;we&quot;), may be collectively referred to in the Terms as the
            &quot;Parties&quot;.
          </p>
          <br />
          <p className="text-[16px] md:text-[20px] text-[#19191B] leading-[24px] md:leading-[32px]">
            The following Terms of Service (the &quot;Terms&quot;, as amended,
            supplemented or modified from time to time) govern access to and use
            of oroxglobal.com and the OROX mobile apps in the version of Android
            and iOS (collectively, the &quot;OROX Platform&quot;). All use and
            access of the services (the &quot;Services&quot;) made available by
            the OROX Platform including your user account accessed via the OROX
            Platform (your &quot;OROX Account&quot;) is subject to the Terms.
          </p>
          <br />
          <p className="text-[16px] md:text-[20px] text-[#19191B] leading-[24px] md:leading-[32px]">
            By applying for your OROX Account or accessing and using the OROX
            Platform, you acknowledge and accept that you have read, understood
            and agree to be bound by, and comply with, the Terms, and the
            personal data and privacy policies adopted by us from time to time
            which is available on the OROX Platform at 
            <Link
              href={"https://oroxglobal.com/privacy-policy"}
              className="text-[#2F5DFD] underline"
            >
              https://oroxglobal.com/privacy-policy
            </Link>
             (the &quot;Privacy Policy&quot;). The Privacy Policy in its
            entirety is hereby incorporated in the Terms by reference.
            Additionally, when using certain Services or subscribing for certain
            products (the &quot;Products&quot;) on the OROX Platform, you may be
            subject to additional terms and conditions applicable to such
            Services or Products. If you do not agree with anything contained in
            the Terms, please do not submit information to, access information
            from, or otherwise utilise your OROX Account or the Platform.
          </p>
          <br />
          <p className="text-[16px] md:text-[20px] text-[#19191B] leading-[24px] md:leading-[32px]">
            All rights in the OROX Platform not otherwise expressly granted to
            you herein are reserved to OROX. The failure of OROX to exercise or
            enforce any right or provision of the Terms shall not constitute a
            waiver of such right or provision. If any provision of the Terms is
            found by a court of competent jurisdiction to be invalid, void,
            unlawful or unenforceable, the Parties agree that the court should
            give effect to the Parties’ intentions as reflected in such
            provision, and the other provisions of the Terms shall remain in
            full force and effect. The section titles in the Terms are for
            convenience only and have no legal or contractual effect. Neither
            the course of conduct between you and OROX, nor trade practice,
            shall act to modify any provision of the Terms. For purposes of the
            Terms, the terms include, includes, including, such as and for
            example, shall be construed as if each term were followed by the
            words, without limitation. Except where context requires otherwise,
            use of the singular form of any noun includes the plural, and use of
            the plural includes the singular.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-[32px] md:space-y-[40px]">
          {termsData.map((section, index) => (
            <div key={index} className="space-y-6">
              <h2 className="text-[28px] font-bold text-[#19191B] leading-[40px]">
                {section.title}
              </h2>
              <div className="text-[16px] md:text-[20px] text-[#19191B] leading-[24px] md:leading-[32px]">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
