import PageHeader from "@/components/PageHeader";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="text-2xl font-semibold text-primary mb-3">{title}</h2>
    <div className="text-foreground/90 leading-relaxed space-y-3">{children}</div>
  </section>
);

const DataProtection = () => (
  <>
    <PageHeader
      title="Data Protection & Security"
      subtitle="How Launch Hub LLC handles, protects, and governs client and marketplace information."
    />
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Section title="1. Data Handling Principles">
          <p>
            Launch Hub LLC only processes client information for authorized business purposes
            related to the services requested by the client.
          </p>
        </Section>

        <Section title="2. Access Control">
          <p>
            Access is limited to authorized personnel based on business need and least-privilege
            principles.
          </p>
        </Section>

        <Section title="3. Credential Management">
          <p>Launch Hub LLC requires:</p>
          <ul className="list-disc pl-6 space-y-1 text-foreground/90">
            <li>Minimum password length of 12 characters</li>
            <li>Uppercase letters</li>
            <li>Lowercase letters</li>
            <li>Numbers</li>
            <li>Special characters</li>
            <li>No password reuse across systems</li>
            <li>No shared credentials</li>
            <li>Encrypted password manager usage</li>
            <li>MFA whenever supported</li>
            <li>Periodic access reviews</li>
            <li>Credential revocation within 24 hours after employee termination or suspected compromise</li>
          </ul>
        </Section>

        <Section title="4. Incident Response">
          <p>Launch Hub LLC maintains an incident response process that includes:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Detection</li>
            <li>Containment</li>
            <li>Investigation</li>
            <li>Mitigation</li>
            <li>Recovery</li>
            <li>Documentation</li>
            <li>Post-incident review</li>
          </ul>
          <p>
            If a security incident involving Amazon Information is detected, Launch Hub LLC
            will restrict affected access, preserve relevant logs, investigate the scope,
            remediate the root cause, and notify Amazon at{" "}
            <a href="mailto:security@amazon.com" className="text-secondary hover:underline">
              security@amazon.com
            </a>{" "}
            within 24 hours when required.
          </p>
        </Section>

        <Section title="5. Data Retention">
          <p>
            Client data is retained only as long as necessary for authorized business purposes,
            contractual obligations, legal obligations, or platform policy requirements.
          </p>
        </Section>

        <Section title="6. Third-Party Access">
          <p>
            Launch Hub LLC does not sell Amazon Information or client data. Client information
            is not shared with unauthorized third parties.
          </p>
        </Section>
      </div>
    </section>
  </>
);

export default DataProtection;