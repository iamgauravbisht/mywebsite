import personImg from "../assets/images/profile-1.jpg";

export default function TestimonialsCard() {
  return (
    <div className="mx-3 p-4 rounded-xl border-teal-300 border-2 grid place-items-center">
      <img src={personImg} className="rounded-full " />
      <p className="text-2xl font-bold">Name</p>
      <p className="text-md font-bold">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi at
        tenetur, enim dolores nisi similique nam. Voluptate sapiente,
      </p>
    </div>
  );
}
