export default function Page() {
  const faqs = [
    {
      q: 'Which invoicing platforms do you support?',
      a: 'We integrate with FreshBooks, Wave, and Invoice Ninja via their APIs, with more platforms coming soon.'
    },
    {
      q: 'How are late fees calculated?',
      a: 'You define your terms — flat fee or percentage, grace period, and compounding rules. We apply them automatically when invoices go overdue.'
    },
    {
      q: 'Can I customize the client notification emails?',
      a: 'Yes. You can edit the subject line and body of every automated email sent to your clients when a late fee is applied.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Freelancers &amp; Small Agencies
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Automatically add late fees to<br />
          <span className="text-[#58a6ff]">overdue invoices</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your invoicing tool, set your contract terms once, and let us handle the rest — late fee calculation, invoice updates, and client notifications on autopilot.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $8/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>
      </section>

      {/* Features strip */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        {[
          { icon: '⚡', title: 'Real-time webhooks', desc: 'Invoice status updates the moment they change.' },
          { icon: '📐', title: 'Custom fee rules', desc: 'Flat or % fees, grace periods, compounding.' },
          { icon: '📧', title: 'Auto notifications', desc: 'Branded emails sent to clients automatically.' }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <div className="font-semibold text-white text-sm mb-1">{f.title}</div>
            <div className="text-xs text-[#8b949e]">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-6">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-4xl font-extrabold text-white mb-1">$8<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <div className="text-[#8b949e] text-sm mb-6">Everything included. No tiers.</div>
          <ul className="text-left space-y-2 mb-8">
            {[
              'Unlimited invoices monitored',
              'Custom late fee rules per client',
              'Automated client email notifications',
              'Webhook integrations',
              'Email support'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get started — $8/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white text-sm mb-2">{faq.q}</div>
              <div className="text-[#8b949e] text-sm">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681] pb-8">
        &copy; {new Date().getFullYear()} Invoice Late Fee Automator. All rights reserved.
      </footer>
    </main>
  )
}
