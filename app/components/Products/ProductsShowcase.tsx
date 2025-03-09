import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "OROX app let's you invest on autopilot",
    description: "OROX is your all-in-one investment platform, offering a secure, automated investing experience. Whether you're after steady growth with ODN or crypto exposure with DVOX, our AI-powered platform makes investing effortless. Easily connect with OROX and the new OROX token—all in one place.",
    image: "/images/products/orox-app-phone.png",
    bgColor: "bg-[#293483]",
    textColor: "text-white",
    buttonColor: "bg-white text-[#293483]",
    buttonText: "Learn more",
    buttonLink: "#",
  },
  {
    title: "ODN is your shortcut to stable investment",
    description: "Hands-off investing made simple with Opus Diversified Nexus (ODN). Focused on risk reduction, hands-off investing with a 90-day cycle and market-neutral strategies designed for long-term stability. No wild swings, no constant monitoring—just steady returns while you go about your life.",
    image: "/images/products/odn-chart.png",
    bgColor: "bg-[#4A90E2]",
    textColor: "text-white",
    buttonColor: "bg-white text-[#4A90E2]",
    buttonText: "Learn more",
    buttonLink: "#",
  },
  {
    title: "DVOX lets you HODL with confidence",
    description: "Crypto exposure for real-world investors! DVOX gives you high-growth potential with less volatility. Unlike holding BTC directly, DVOX app uses the OROX token to rebalance to premium digital assets—no stress, just smarter investing. DVOX offers exposure to a professionally managed crypto portfolio—perfect for high-growth without the hassle.",
    image: "/images/products/dvox-token.png",
    bgColor: "bg-[#FFD700]",
    textColor: "text-black",
    buttonColor: "bg-black text-white",
    buttonText: "Learn more",
    buttonLink: "#",
  },
];

export const ProductsShowcase = () => {
  return (
    <section className="w-full px-4 py-16">
      <div className="mx-auto max-w-7xl space-y-16">
        <h2 className="text-center text-3xl font-bold text-[#19191B] md:text-4xl">
          Discover OROX and the
          <br />
          powerful products driving it
        </h2>

        <div className="space-y-16">
          {products.map((product, index) => (
            <div key={product.title} className={`rounded-xl overflow-hidden ${product.bgColor}`}>
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className={`space-y-4 flex flex-col justify-center ${product.textColor}`}>
                  <h3 className="text-2xl font-bold">
                    {product.title}
                  </h3>
                  <p className={index === 2 ? "text-black/80" : "text-white/80"}>
                    {product.description}
                  </p>
                  <div>
                    <Link 
                      href={product.buttonLink} 
                      className={`inline-flex items-center justify-center rounded-full ${product.buttonColor} px-6 py-2 text-sm font-medium`}
                    >
                      {product.buttonText}
                    </Link>
                  </div>
                </div>
                <div className="relative aspect-square max-h-[400px] w-full">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 