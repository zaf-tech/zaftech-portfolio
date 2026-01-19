export const metadata = {
  title: "Managed IT Services - Zaftech",
  description:
    "Comprehensive managed IT services including helpdesk support, network monitoring, cybersecurity, cloud management, and IT consulting for small to medium businesses.",
};

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-white via-gray-50/50 to-white bg-grid-animated relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="decorative-blob w-96 h-96 -top-48 -right-48 pulse-glow"></div>
        <div className="decorative-blob w-72 h-72 -bottom-32 -left-32"></div>

        {/* Floating service icons */}
        <div className="absolute top-32 left-16 w-14 h-14 text-accent-teal/20 float-icon hidden lg:block">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        </div>
        <div
          className="absolute bottom-32 right-20 w-12 h-12 text-accent-teal/15 float-icon hidden lg:block"
          style={{ animationDelay: "1.5s" }}
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
            />
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-block mb-6">
                <div className="h-1 w-20 bg-gradient-to-r from-accent to-accent-teal mx-auto rounded-full"></div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6">
                Our Cloud & DevOps Services
              </h1>
              <p className="text-xl md:text-2xl text-text-light max-w-2xl mx-auto leading-relaxed">
                Production-ready infrastructure solutions to accelerate your cloud adoption and innovation
              </p>
            </div>

            {/* Service highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
              <div className="text-center p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-100">
                <div className="text-2xl font-heading font-bold text-accent-teal mb-2">
                  6
                </div>
                <div className="text-sm text-text-light">Cloud Solutions</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-100">
                <div className="text-2xl font-heading font-bold text-accent-teal mb-2">
                  Days
                </div>
                <div className="text-sm text-text-light">To Production</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-100">
                <div className="text-2xl font-heading font-bold text-accent-teal mb-2">
                  100%
                </div>
                <div className="text-sm text-text-light">IaC Automation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Managed IT Services */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-accent/10 to-accent-teal/10 flex items-center justify-center text-accent-teal mb-6">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                  Managed IT Services
                </h2>
                <p className="text-text-light mb-4 leading-relaxed">
                  Complete IT management for your business. We handle all
                  aspects of your technology infrastructure so you can focus on
                  what you do best—running your business.
                </p>
                <p className="text-text-light mb-4 leading-relaxed">
                  Our managed IT services include proactive monitoring, regular
                  maintenance, security management, and ongoing support—all
                  included in one predictable monthly fee. No surprises, no
                  hidden costs.
                </p>
                <p className="text-text-light mb-4 leading-relaxed font-medium">
                  <strong>What's Included:</strong>
                </p>
                <ul className="space-y-2 text-text-light">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-accent-teal mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    24/7 network monitoring and alerting
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-accent-teal mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Proactive maintenance and updates
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-accent-teal mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Helpdesk support for your team
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-accent-teal mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Security management and protection
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-accent-teal mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Cloud and backup management
                  </li>
                </ul>
                <p className="text-text-light mt-4 leading-relaxed">
                  <strong>Who It's For:</strong> Small to medium businesses that
                  want reliable IT management without the cost and complexity of
                  an in-house IT department.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-heading font-bold text-accent/20 mb-4">
                    IaC
                  </div>
                  <p className="text-text-light">Automated Infrastructure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Helpdesk & Support */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="bg-white rounded-xl p-8 h-full flex items-center justify-center order-2 md:order-1">
                <div className="text-center">
                  <div className="text-6xl font-heading font-bold text-accent/20 mb-4">
                    ML
                  </div>
                  <p className="text-text-light">MLOps Pipelines</p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-accent/10 to-accent-teal/10 flex items-center justify-center text-accent-teal mb-6">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                  MLOps & Model Deployment
                </h2>
                <p className="text-text-light mb-4 leading-relaxed">
                  End-to-end ML pipelines with automated training, versioning, and deployment. GPU-optimized infrastructure for AI workloads with monitoring and scaling.
                </p>
                <p className="text-text-light mb-4 leading-relaxed">
                  From data preprocessing to production deployment, we build complete MLOps workflows that enable your data science teams to ship models faster and with confidence.
                </p>
                <ul className="space-y-2 text-text-light">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-accent-teal mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Automated model training & versioning
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-accent-teal mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    GPU-optimized infrastructure setup
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-accent-teal mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Model monitoring & drift detection
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-accent-teal mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    CI/CD integration for model deployment
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cybersecurity */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-accent/10 to-accent-teal/10 flex items-center justify-center text-accent-teal mb-6">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                  DevOps & CI/CD Automation
                </h2>
                <p className="text-text-light mb-4 leading-relaxed">
                  Streamlined deployment pipelines with GitHub Actions, GitLab CI, and Jenkins. Automated testing, security scanning, and zero-downtime deployments.
                </p>
                <p className="text-text-light mb-4 leading-relaxed">
                  We build complete CI/CD workflows that automate your software delivery, from code commit to production deployment, with built-in quality gates and rollback capabilities.
                </p>
                <ul className="space-y-2 text-text-light">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-accent-teal mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    GitHub Actions, GitLab CI, Jenkins pipelines
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-accent-teal mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Automated testing & security scanning
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-accent-teal mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Zero-downtime blue-green deployments
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-accent-teal mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Rollback strategies & quality gates
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-heading font-bold text-accent/20 mb-4">
                    CI/CD
                  </div>
                  <p className="text-text-light">Automated Pipelines</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud & Backup */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="bg-white rounded-xl p-8 h-full flex items-center justify-center order-2 md:order-1">
                <div className="text-center">
                  <div className="text-6xl font-heading font-bold text-accent/20 mb-4">
                    ☁️
                  </div>
                  <p className="text-text-light">Cloud Migration</p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-accent/10 to-accent-teal/10 flex items-center justify-center text-accent-teal mb-6">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                  Cloud Migration & Auto-Scaling
                </h2>
                <p className="text-text-light mb-4 leading-relaxed">
                  Seamless workload migration to AWS, Azure, or GCP with zero data breach risk. Auto-scaling infrastructure that adapts to your traffic and workload demands.
                </p>
                <p className="text-text-light mb-4 leading-relaxed">
                  We handle the complete migration process from assessment to cutover, ensuring minimal downtime and maximum security. Your infrastructure scales automatically based on demand.
                </p>
                <ul className="space-y-2 text-text-light">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-accent-teal mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    AWS, Azure, GCP migration expertise
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-accent-teal mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Automated scaling policies & load balancing
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-accent-teal mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Zero data breach migration strategy
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-accent-teal mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Cost optimization & resource monitoring
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IT Consulting & vCIO */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-accent/10 to-accent-teal/10 flex items-center justify-center text-accent-teal mb-6">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                  Kubernetes & Container Orchestration
                </h2>
                <p className="text-text-light mb-4 leading-relaxed">
                  Production-ready Kubernetes clusters (EKS, GKE, AKS) with service mesh, ingress controllers, and monitoring. Containerize and orchestrate your applications at scale.
                </p>
                <p className="text-text-light mb-4 leading-relaxed">
                  We deploy battle-tested Kubernetes setups with GitOps workflows, automated scaling, and comprehensive observability—giving you enterprise-grade container orchestration.
                </p>
                <ul className="space-y-2 text-text-light">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-accent-teal mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    EKS, GKE, AKS managed clusters
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-accent-teal mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Service mesh (Istio/Linkerd) integration
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-accent-teal mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    GitOps with ArgoCD or Flux
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-accent-teal mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Prometheus/Grafana monitoring stack
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-heading font-bold text-accent/20 mb-4">
                    ☸️
                  </div>
                  <p className="text-text-light">Kubernetes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 6 */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-white rounded-xl p-8 h-full flex items-center justify-center order-2 md:order-1">
                <div className="text-center">
                  <div className="text-6xl font-heading font-bold text-accent/20 mb-4">
                    🚀
                  </div>
                  <p className="text-text-light">Rapid Launch</p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                  MVP & POC Rapid Deployment
                </h2>
                <p className="text-text-light mb-4 leading-relaxed">
                  Launch production-grade MVPs and POCs in days, not months. Pre-configured cloud environments with security, monitoring, and CI/CD built-in from day one.
                </p>
                <p className="text-text-light mb-4 leading-relaxed">
                  We provide turnkey infrastructure templates that let you validate ideas fast—complete with authentication, databases, and deployment pipelines ready to go.
                </p>
                <ul className="space-y-2 text-text-light">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-accent-teal mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Pre-configured cloud templates
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-accent-teal mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Authentication & databases included
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-accent-teal mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    CI/CD pipelines pre-configured
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-accent-teal mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Production-ready in days
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="bg-pattern-dense w-full h-full"></div>
        </div>
        <div className="decorative-blob w-96 h-96 -top-32 -left-32 opacity-20"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Accelerate Your Cloud Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our Infrastructure as Code and DevOps expertise can help you deploy faster and scale confidently.
            </p>
            <a
              href="/contact"
              className="btn-secondary inline-block bg-white text-primary hover:bg-gray-100"
            >
              Schedule a Free Cloud Assessment
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
