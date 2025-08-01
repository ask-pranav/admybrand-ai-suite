type PricingCardProps = {
  title: string;
  price: string;
  features: string[];
  highlight?: boolean;
};

export default function PricingCard({ title, price, features, highlight }: PricingCardProps) {
  return (
    <div
      className={`p-8 rounded-2xl border ${
        highlight ? "border-purple-500 bg-purple-900/20" : "border-gray-700 bg-white/10"
      } backdrop-blur-md shadow-xl transition-transform hover:scale-105`}
    >
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-4xl font-extrabold text-white mt-4">{price}</p>
      <ul className="mt-6 space-y-3 text-gray-300">
        {features.map((feature, index) => (
          <li key={index}>✔ {feature}</li>
        ))}
      </ul>
      <button className={`mt-6 w-full py-2 rounded-md font-semibold ${
        highlight ? "bg-purple-600 hover:bg-purple-700" : "bg-white text-black hover:bg-gray-200"
      }`}>
        Choose Plan
      </button>
    </div>
  );
}
