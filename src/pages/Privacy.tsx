import PageHeader from "@/components/PageHeader";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-semibold text-primary mb-3">{title}</h2>
    <div className="text-foreground/90 leading-relaxed space-y-3">{children}</div>
  </section>
);

const Privacy = () => (
  <>
    <PageHeader title="Privacy Policy" subtitle="How Launch Hub LLC collects, uses, and protects information." />
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Section title="Information We Collect">
          <p>
            We collect information that clients provide directly, including business contact
            details, company information, and operational data necessary to deliver the
            services requested.
          </p>
        </Section>
        <Section title="How We Use Information">
          <p>
            Information is used to provide and improve our consulting services, communicate
            with clients, fulfill contractual obligations, and meet legal and regulatory
            requirements.
          </p>
        </Section>
        <Section title="Amazon Information Handling">
          <p>
            Launch Hub LLC may process Amazon Information only when authorized by the
            applicable Selling Partner and only for the purpose of providing marketplace
            operations, reporting, catalog, inventory, fulfillment, and advertising support
            services.
          </p>
          <p>
            Launch Hub LLC does not sell Amazon Information, does not use Amazon Information
            for unauthorized purposes, and does not share Amazon Information with unauthorized
            third parties.
          </p>
          <p>
            Access to Amazon Information is limited to authorized personnel with a business
            need, protected by role-based access controls, MFA where supported, and secure
            credential management practices.
          </p>
        </Section>
        <Section title="Data Sharing">
          <p>
            We do not sell client information. We share information only with authorized
            service providers strictly as needed to deliver services, or as required by law.
          </p>
        </Section>
        <Section title="Data Security">
          <p>
            We apply administrative, technical, and physical safeguards including role-based
            access controls, MFA where supported, encrypted credential management, and
            documented incident response procedures.
          </p>
        </Section>
        <Section title="Data Retention">
          <p>
            Information is retained only as long as needed for authorized business purposes,
            contractual obligations, legal requirements, or applicable platform policies.
          </p>
        </Section>
        <Section title="Client Rights">
          <p>
            Clients may request access, correction, or deletion of their information, subject
            to legal and contractual obligations.
          </p>
        </Section>
        <Section title="Contact Information">
          <p>
            Questions about this Privacy Policy can be sent to{" "}
            <a href="mailto:info@launchhub.us" className="text-secondary hover:underline">
              info@launchhub.us
            </a>
            .
          </p>
        </Section>
      </div>
    </section>
  </>
);

export default Privacy;