"use client"
export default function HowItWorks() {
  const steps = [
    {
      title: "Register",
      description: "Sign up for an account to get started."
    },
    {
      title: "Choose Numbers",
      description: "Select your lucky numbers for the draw."
    },
    {
      title: "Win Big",
      description: "Match the numbers and claim your prize!"
    }
  ];

  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}