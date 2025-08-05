import { Features } from "../Features/Features";

export const ProductODNFeatures = () => {
  const odnFeatures = [
    {
      icon: "/images/features/risk-adjusted.svg",
      title: "Risk-adjusted returns",
      description:
        "All weather strategies designed for consistent, stable yields.",
    },
    {
      icon: "/images/features/hands-off.svg",
      title: "Hands-off investing",
      description:
        "A fully automated system—no market timing, no daily management needed.",
    },
    {
      icon: "/images/features/90-day.svg",
      title: "90-day cycle",
      description:
        "Structured investment periods to optimise performance and reduce risk.",
    },
    {
      icon: "/images/features/secure-transparent.svg",
      title: "Secure and transparent",
      description: "Secure and transparent with blockchain-backed tech.",
    },
  ];

  return (
    <Features
      title="ODN is your shortcut to stable investment"
      description="Invest with confidence. ODN offers risk-adjusted, hands-off investing designed for long-term stability. With a 90-day cycle and market-neutral strategies, ODN minimises volatility while maximising steady returns."
      cta="Get started with DVOX"
      path="https://orox.app/register"
      features={odnFeatures}
    />
  );
};
