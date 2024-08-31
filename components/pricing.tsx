import { FC } from 'react';
import { Button } from './ui/button';

interface PlanProps {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

const Plan: FC<PlanProps> = ({ name, price, features, recommended }) => (
  <div className={`bg-card p-8 rounded-lg shadow-lg ${recommended ? 'border-2 border-primary' : ''}`}>
    {recommended && <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-sm mb-4 inline-block">Recommended</span>}
    <h3 className="text-2xl font-bold mb-4">{name}</h3>
    <p className="text-3xl font-bold mb-6">{price}<span className="text-lg font-normal text-muted-foreground">/month</span></p>
    <ul className="mb-8 space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          {feature}
        </li>
      ))}
    </ul>
    <Button className="w-full" variant={recommended ? 'default' : 'outline'}>Choose Plan</Button>
  </div>
);

const Pricing: FC = () => {
  const plans = [
    {
      name: "Basic",
      price: "$0",
      features: ["unlimited conversions/day", "Basic file formats", "5mb max file size"],
    },
    {
      name: "Pro",
      price: "$9.99",
      features: ["Unlimited conversions", "All file formats", "10GB max file size", "Priority support"],
      recommended: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Custom solutions", "API access", "Dedicated support", "SLA"],
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Simple, Transparent Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Plan key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
