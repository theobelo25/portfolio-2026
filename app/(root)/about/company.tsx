const Company = ({
  name,
  position,
  location,
}: {
  name: string;
  position: string;
  location: string;
}) => {
  return (
    <div className="py-2 font-questrial">
      <p className="font-play text-xl">{position}</p>
      <p>{name}</p>
      <p>{location}</p>
    </div>
  );
};

export default Company;
