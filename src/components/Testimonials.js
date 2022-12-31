import TestimonialsCard from "./TestimonialsCard";

export default function Testimonials() {
  return (
    <section
      className="mb-24 w-full grid place-items-center "
      id="Testimonials"
    >
      <div className="w-2/4 flex items-center justify-center">
        <TestimonialsCard />
        <TestimonialsCard />
      </div>
    </section>
  );
}
