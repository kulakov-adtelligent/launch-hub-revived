import PageHeader from "@/components/PageHeader";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-semibold text-primary mb-3">{title}</h2>
    <div className="text-foreground/90 leading-relaxed space-y-3">{children}</div>
  </section>
);

const Terms = () => (
  <>
    <PageHeader title="Terms of Service" subtitle="Standard business terms for engagements with Launch Hub LLC." />
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Section title="Services">
          <p>
            Launch Hub LLC provides marketplace operations consulting, catalog support,
            inventory planning, fulfillment coordination, advertising and performance
            reporting, and operational workflow optimization, as defined in each client
            engagement.
          </p>
        </Section>
        <Section title="Client Responsibilities">
          <p>
            Clients are responsible for providing accurate information, maintaining ownership
            of their marketplace accounts, complying with all applicable platform policies, and
            granting only the access necessary for the agreed scope.
          </p>
        </Section>
        <Section title="No Guarantee of Marketplace Results">
          <p>
            Launch Hub LLC does not guarantee marketplace approval, sales results, account
            status outcomes, or platform decisions.
          </p>
        </Section>
        <Section title="Compliance">
          <p>
            Both parties agree to operate in compliance with applicable laws and the policies
            of any marketplace involved in the engagement.
          </p>
        </Section>
        <Section title="Confidentiality">
          <p>
            Each party will protect the other party's confidential information and use it only
            for the purposes of the engagement.
          </p>
        </Section>
        <Section title="Data Protection">
          <p>
            Launch Hub LLC follows the practices described in its Data Protection & Security
            page, including least-privilege access, secure credential management, and a
            defined incident response process.
          </p>
        </Section>
        <Section title="Limitation of Liability">
          <p>
            To the maximum extent permitted by law, Launch Hub LLC's liability is limited to
            the fees paid by the client for the services giving rise to the claim.
          </p>
        </Section>
        <Section title="Termination">
          <p>
            Either party may terminate an engagement in accordance with the applicable
            written agreement. Upon termination, access to client information will be revoked
            in line with our access control and data retention practices.
          </p>
        </Section>
        <Section title="Contact">
          <p>
            Questions about these Terms can be sent to{" "}
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

export default Terms;