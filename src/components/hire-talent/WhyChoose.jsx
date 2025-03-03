const WhyChoose = () => {
  const cards = [
    {
      title: "AI-Powered Talent Matching System",
      icon: "🔍",
      description:
        "Automatically find the best candidates using AI-driven selection for precise hiring decisions.",
    },
    {
      title: "Pre-Tested & Verified Candidates",
      icon: "✅",
      description:
        "All applicants undergo rigorous skill assessments before applying, ensuring top-tier talent.",
    },
    {
      title: "Smart & Efficient Screening Process",
      icon: "📊",
      description:
        "AI analyzes and filters CVs, shortlisting only the most qualified talents for your job openings.",
    },
    {
      title: "Comprehensive Professional Assessment Tests",
      icon: "📝",
      description:
        "Ready Hire creates and evaluates skill tests to ensure accurate assessments of job applicants' abilities.",
    },
    {
      title: "Secure Financial Transactions & Contracts",
      icon: "💰",
      description:
        "Ensuring safe transactions and legally secure contracts between freelancers and employers.",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center gap-10 p-5 bg-[#EFF5F1]">
        <h2 className="font-bold mr-3">
          Why Choose <span className="text_secondary font-bold">READY</span>{" "}
          HIRE?
        </h2>
        <div className="flex items-center justify-center gap-10 flex-wrap">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col m-5 items-center gap-2 text-2xl hover:shadow-lg transition-all duration-300 shadow-md h-[300px] w-[300px] p-6 rounded-lg bg-white cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span className="">{card.icon}</span>
                <h3 className="text-2xl font-semibold text-center">
                  {card.title}
                </h3>
              </div>
              <p className="text-center text-gray-500 text-lg p-3">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WhyChoose;
