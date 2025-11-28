const University = ({
  degree,
  school,
  location,
}: {
  degree: string;
  school: string;
  location: string;
}) => {
  return (
    <div className="py-2 font-questrial">
      <p className="font-play text-xl">{degree}</p>
      <p>{school}</p>
      <p>{location}</p>
    </div>
  );
};

export default University;
