const stats = [
  { label: "Founded", value: "2018" },
  { label: "Employees", value: "320+" },
  { label: "Stores", value: "7" },
  { label: "Countries served", value: "12" },
];

const values = [
  {
    title: "Customer First",
    description:
      "Every decision we make starts with the customer in mind. We listen, adapt, and strive to exceed expectations at every touchpoint.",
  },
  {
    title: "Sustainability",
    description:
      "We are committed to responsible sourcing, reducing our carbon footprint, and partnering with suppliers who share our environmental values.",
  },
  {
    title: "Inclusivity",
    description:
      "Fashion is for everyone. We design and curate collections that celebrate diversity in body type, background, and personal style.",
  },
  {
    title: "Transparency",
    description:
      "We believe in honest communication — with our customers, our partners, and our team. No hidden fees, no misleading claims.",
  },
];

const openings = [
  {
    title: "Senior Frontend Developer",
    team: "Engineering",
    location: "Tampere / Remote",
  },
  {
    title: "Visual Merchandiser",
    team: "Retail",
    location: "Helsinki",
  },
  {
    title: "Supply Chain Analyst",
    team: "Operations",
    location: "Tampere",
  },
  {
    title: "Customer Experience Specialist",
    team: "Support",
    location: "Remote",
  },
];

const CompanyPage = () => {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-indigo-600 py-20 px-6 text-center text-white">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          About Us
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-indigo-100">
          We are a European fashion retailer on a mission to make quality style
          accessible to everyone — with stores across Finland and a growing
          online presence.
        </p>
      </section>

      {/* Stats */}
      <section className="border-b border-gray-200 py-14">
        <div className="mx-auto max-w-5xl px-6">
          <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-sm font-medium text-gray-500">{s.label}</dt>
                <dd className="mt-1 text-3xl font-bold text-indigo-600">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We envision a world where getting dressed is a joyful, confident
            experience for every person. By combining thoughtful design,
            fair pricing, and a seamless shopping journey — both in-store and
            online — we aim to be the most trusted fashion destination in
            Northern Europe by 2030.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We are constantly investing in technology and talent to bring
            personalised fashion experiences to our customers, while keeping
            our commitment to ethical and sustainable practices at the core of
            everything we do.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-10">
            Our Values
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100"
              >
                <h3 className="text-base font-semibold text-indigo-600">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-gray-900">Careers</h2>
          <p className="mt-3 text-gray-600 max-w-2xl">
            Join a team that is passionate about fashion, technology, and
            making a positive impact. We offer competitive salaries, flexible
            working arrangements, and a culture of continuous learning.
          </p>
          <div className="mt-8 divide-y divide-gray-200 rounded-xl border border-gray-200 overflow-hidden">
            {openings.map((job) => (
              <div
                key={job.title}
                className="flex items-center justify-between px-6 py-4 bg-white hover:bg-gray-50 transition-colors"
              >
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {job.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {job.team} &middot; {job.location}
                  </p>
                </div>
                <span className="text-xs font-medium text-indigo-600 border border-indigo-200 rounded-full px-3 py-1">
                  Apply
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-indigo-50 py-16 px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
          <p className="mt-3 text-gray-600">
            Have a question, partnership inquiry, or media request? We'd love
            to hear from you.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3 text-sm">
            <div>
              <p className="font-semibold text-gray-900">General Enquiries</p>
              <p className="mt-1 text-gray-600">hello@shopwithzosh.fi</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Press & Media</p>
              <p className="mt-1 text-gray-600">press@shopwithzosh.fi</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Head Office</p>
              <p className="mt-1 text-gray-600">
                Hämeenkatu 14, 33100 Tampere, Finland
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CompanyPage;
