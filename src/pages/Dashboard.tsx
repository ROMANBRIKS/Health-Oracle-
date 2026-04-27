
import { motion } from 'motion/react';
import SubsidyAuditor from '../components/SubsidyAuditor';
import HSASync from '../components/HSASync';
import MedicareCap from '../components/MedicareCap';
import GLP1Module from '../components/GLP1Module';
import ProcedureMap from '../components/ProcedureMap';

export default function Dashboard() {
  return (
    <div className="grid grid-cols-12 gap-6 w-full">
      {/* 01. SUBSIDY SHOCK */}
      <div className="col-span-12">
        <SubsidyAuditor />
      </div>

      {/* 02. HSA Tax Sync */}
      <div className="col-span-12 lg:col-span-4">
        <HSASync />
      </div>

      {/* 03. Medicare Cap Visualizer */}
      <div className="col-span-12 lg:col-span-4">
        <MedicareCap />
      </div>

      {/* 04. GLP-1 Intelligence */}
      <div className="col-span-12 lg:col-span-4">
        <GLP1Module />
      </div>

      {/* 05. Procedure Map */}
      <div className="col-span-12">
        <ProcedureMap />
      </div>
    </div>
  );
}
