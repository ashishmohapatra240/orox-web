import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "OROX app",
    image: "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/products/orox-app.png",
    bgColor: "bg-[#293483]",
    description:
      "OROX is your AI-powered investment platform, offering secure, automated investing. Get steady growth with ODN or crypto exposure with DVOX—all in one place.",
  },
  {
    title: "Opus Diversified Nexus",
    image: "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/products/odn-chart.png",
    bgColor: "bg-[#4A90E2]",
    description:
      "ODN offers risk-adjusted, hands-off investing with a 90-day cycle and market-neutral strategies for long-term stability—no wild swings, no constant monitoring.",
  },
  {
    title: "DVOX utility token",
    image: "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/products/dvox-token.png",
    bgColor: "bg-[#FFD700]",
    description:
      "DVOX offers high-growth potential with less volatility. It gives you auto-balanced exposure to premium digital assets—no stress, just smarter investing.",
  },
];

export const ProductsSection = () => {
  return (
    <section className="w-full px-4 py-24">
      <div className="mx-auto max-w-7xl space-y-12">
        <h2 className="text-center text-4xl font-bold text-[#19191B] md:text-5xl">
          Discover OROX and the
          <br />
          powerful products driving it
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <div key={product.title} className="space-y-4">
              <div className={`relative aspect-[4/3] w-full overflow-hidden rounded-2xl ${product.bgColor}`}>
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-[#19191B]">
                  {product.title}
                </h3>
                <p className="text-gray-600">{product.description}</p>
                <Link href="#" className="inline-flex items-center text-blue-600 hover:underline">
                  Learn more
                  <svg className="ml-1 h-4 w-4" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M1 8h14m0 0L8 1m7 7L8 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 