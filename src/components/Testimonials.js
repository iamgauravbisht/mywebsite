import TestimonialsCard from "./TestimonialsCard";

export default function Testimonials() {
  return (
    <section
      className="mb-24 w-full grid place-items-center "
      id="Testimonials"
    >
      <div className="sm:w-[85%] min-w-[320px] h-[280px] sm:h-[400px] sm:flex  overflow-x-auto snap-y sm:snap-x">
        <TestimonialsCard />
        <TestimonialsCard />
        <TestimonialsCard />
      </div>
    </section>
  );
}
