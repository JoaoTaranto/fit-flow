import { Flow } from "@/types/flow";

import FlowCard from "../FlowCard/FlowCard";

interface FlowSectionProps {
  title: string;
  flows: Flow[];
}

const FlowSection = ({ title, flows }: FlowSectionProps) => {
  return (
    <section className="px-6 py-8">
      <h2 className="mb-6 text-2xl font-bold">{title}</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {flows.map((flow) => (
          <FlowCard key={flow.id} flow={flow} />
        ))}
      </div>
    </section>
  );
};

export default FlowSection;
