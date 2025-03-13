import Image from "next/image";

const upcomingProducts = [
  {
    title: "Fast, secure and frictionless asset swap",
    description:
      "Easily swap between assets using the OROX app. No more waiting for transactions or dealing with complex exchanges of your assets.",
    image: "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/products/asset-swap.png",
  },
  {
    title: "Spend your gains with the OROX card",
    description:
      "Coming soon: Use your OROX card to spend your gains without selling your assets. Make purchases online or in-store without extra hassle for your everyday expenses.",
    image: "https://raw.githubusercontent.com/ashishmohapatra240/orox-web/refs/heads/main/public/images/products/orox-card.png",
  },
];

export const UpcomingProducts = () => {
  return (
    <section className="w-full bg-[#0F1033] px-4 py-16">
      <div className="mx-auto max-w-7xl space-y-12">
        <h2 className="text-center text-3xl font-bold text-white md:text-4xl">
          New products coming soon to OROX
        </h2>
        <p className="text-center text-white/80 max-w-2xl mx-auto">
          We&apos;re building something new together with marketplace and
          products designed for flexibility, security, and ease.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {upcomingProducts.map((product) => (
            <div
              key={product.title}
              className="bg-white rounded-xl overflow-hidden"
            >
              <div className="p-8">
                <div className="relative aspect-video w-full mb-6">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#19191B] mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
