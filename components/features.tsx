import { FC } from 'react';
import { FiUploadCloud, FiZap, FiLock } from 'react-icons/fi';

interface FeatureProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const Feature: FC<FeatureProps> = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6">
    <Icon className="text-4xl text-primary mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const Features: FC = () => {
  const features = [
    {
      icon: FiUploadCloud,
      title: "Effortless Uploads",
      description: "Drag and drop your files for instant conversion",
    },
    {
      icon: FiZap,
      title: "Unlimited Conversions",
      description: "Convert as many files as you need without any limitations",
    },
    {
      icon: FiLock,
      title: "Bank-Level Security",
      description: "Your files are processed locally with end-to-end encryption",
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Why Choose FileRemix?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;