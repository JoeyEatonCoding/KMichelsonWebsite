export function CTA() {
  return (
    <section 
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "linear-gradient(135deg, #622466 0%, #5a718a 100%)"
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-primary/90"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
          Each clinical trial is unique; there are no "one size fits all" solutions.
        </h2>
      </div>
    </section>
  );
}