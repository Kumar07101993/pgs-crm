"use client";

import {
  Bot,
  Brain,
  MessageSquare,
  Phone,
  TrendingUp,
} from "lucide-react";

export default function AIAgentsPage() {
  const agents = [
    {
      title: "Lead Scoring AI",
      score: "95%",
      desc: "Ranks leads based on conversion probability",
      icon: Brain,
    },
    {
      title: "Call Summary AI",
      score: "Active",
      desc: "Generates automatic call summaries",
      icon: Phone,
    },
    {
      title: "WhatsApp Reply AI",
      score: "Active",
      desc: "Auto-suggests WhatsApp replies",
      icon: MessageSquare,
    },
    {
      title: "Sales Prediction AI",
      score: "89%",
      desc: "Predicts monthly sales performance",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F6EF] p-6">

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-[#0B2545]">
          AI Agents
        </h1>

        <p className="text-slate-500 mt-2">
          AI powered assistants for your CRM
        </p>

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        {agents.map((agent, index) => {
          const Icon = agent.icon;

          return (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-lg"
            >

              <div className="w-14 h-14 rounded-2xl bg-[#0B2545] text-white flex items-center justify-center mb-4">
                <Icon size={28} />
              </div>

              <h3 className="font-bold text-xl">
                {agent.title}
              </h3>

              <p className="text-slate-500 mt-2">
                {agent.desc}
              </p>

              <div className="mt-4 text-2xl font-bold text-[#0B2545]">
                {agent.score}
              </div>

              <button className="mt-5 w-full bg-[#0B2545] text-white py-3 rounded-xl">
                Open Agent
              </button>

            </div>
          );
        })}

      </div>

      <div className="bg-white rounded-3xl p-6 shadow-lg mt-8">

        <div className="flex items-center gap-3 mb-4">

          <Bot
            size={24}
            className="text-[#0B2545]"
          />

          <h2 className="text-2xl font-bold">
            AI Insights
          </h2>

        </div>

        <ul className="space-y-3">

          <li>
            🔥 18 high-priority leads detected today
          </li>

          <li>
            📞 34 followups are overdue
          </li>

          <li>
            💰 Expected conversion this week: ₹4.8 Lakhs
          </li>

          <li>
            🎯 Madurai Team has highest conversion rate
          </li>

        </ul>

      </div>

    </div>
  );
}