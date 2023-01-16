import personImg from "../assets/images/profile-1.jpg";

export default function TestimonialsCard() {
  return (
    <div className="sm:mx-3 sm:p-4 p-2  rounded-xl border-teal-300 border-2 grid place-items-center min-w-[300px] snap-center">
      <img src={personImg} className="rounded-full " />
      <p className="text-xl font-bold">Name</p>
      <p className="text-sm">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi at
        tenetur, enim dolores nisi similique nam. Voluptate sapiente,
      </p>
    </div>
  );
}
