import { MapPinIcon, ClockIcon, PhoneIcon } from "@heroicons/react/24/outline";

const stores = [
  {
    city: "Tampere",
    address: "Hämeenkatu 14, 33100 Tampere",
    phone: "+358 3 123 4567",
    hours: {
      weekdays: "10:00 – 20:00",
      saturday: "10:00 – 18:00",
      sunday: "12:00 – 17:00",
    },
    note: "Flagship store — largest collection, personal styling available.",
  },
  {
    city: "Helsinki",
    address: "Aleksanterinkatu 28, 00100 Helsinki",
    phone: "+358 9 876 5432",
    hours: {
      weekdays: "10:00 – 21:00",
      saturday: "10:00 – 19:00",
      sunday: "12:00 – 18:00",
    },
    note: "City centre location inside Kamppi Shopping Centre.",
  },
  {
    city: "Turku",
    address: "Yliopistonkatu 11, 20100 Turku",
    phone: "+358 2 234 5678",
    hours: {
      weekdays: "10:00 – 19:00",
      saturday: "10:00 – 17:00",
      sunday: "Closed",
    },
    note: "Located in the heart of Turku city centre.",
  },
  {
    city: "Oulu",
    address: "Kirkkokatu 4, 90100 Oulu",
    phone: "+358 8 345 6789",
    hours: {
      weekdays: "10:00 – 19:00",
      saturday: "10:00 – 17:00",
      sunday: "Closed",
    },
    note: "Newly opened — full menswear and womenswear collections.",
  },
  {
    city: "Lahti",
    address: "Aleksanterinkatu 16, 15110 Lahti",
    phone: "+358 3 456 7890",
    hours: {
      weekdays: "10:00 – 18:00",
      saturday: "10:00 – 16:00",
      sunday: "Closed",
    },
    note: "Compact store focused on seasonal bestsellers.",
  },
  {
    city: "Vaasa",
    address: "Kauppapuistikko 21, 65100 Vaasa",
    phone: "+358 6 567 8901",
    hours: {
      weekdays: "10:00 – 18:00",
      saturday: "10:00 – 16:00",
      sunday: "Closed",
    },
    note: "Bilingual store with staff fluent in Finnish and Swedish.",
  },
  {
    city: "Jyväskylä",
    address: "Kauppakatu 30, 40100 Jyväskylä",
    phone: "+358 14 678 9012",
    hours: {
      weekdays: "10:00 – 19:00",
      saturday: "10:00 – 17:00",
      sunday: "Closed",
    },
    note: "Located near Jyväskylä city market square.",
  },
];

const StoresPage = () => {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-indigo-600 py-20 px-6 text-center text-white">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Our Stores
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-indigo-100">
          Visit us in person at one of our locations across Finland. Our
          in-store teams are here to help you find the perfect look.
        </p>
      </section>

      {/* Store list */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {stores.map((store) => (
            <div
              key={store.city}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 rounded-full bg-indigo-50 p-2">
                  <MapPinIcon className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900">
                    {store.city}
                  </h2>
                  <p className="text-sm text-gray-500 mt-0.5">{store.address}</p>
                </div>
              </div>

              {store.note && (
                <p className="mt-4 text-sm text-indigo-700 bg-indigo-50 rounded-lg px-3 py-2">
                  {store.note}
                </p>
              )}

              <div className="mt-4 space-y-2 text-sm text-gray-600">
                <div className="flex items-start gap-2">
                  <ClockIcon className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-400" />
                  <div>
                    <p>Mon – Fri: {store.hours.weekdays}</p>
                    <p>Saturday: {store.hours.saturday}</p>
                    <p>Sunday: {store.hours.sunday}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneIcon className="h-4 w-4 flex-shrink-0 text-gray-400" />
                  <p>{store.phone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-50 py-14 px-6 text-center">
        <h2 className="text-xl font-bold text-gray-900">Can't visit in person?</h2>
        <p className="mt-2 text-gray-600 text-sm max-w-md mx-auto">
          Shop our full collection online with free delivery on orders over €50
          and free returns within 30 days.
        </p>
        <a
          href="/"
          className="mt-6 inline-block rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
        >
          Shop Online
        </a>
      </section>

    </div>
  );
};

export default StoresPage;
