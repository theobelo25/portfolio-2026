const Description = ({ description }: { description: string }) => {
  return (
    <section className="col-span-1 lg:col-span-2 space-y-4">
      <h2 className="font-play text-2xl text-center">About this Project</h2>
      <p className="font-questrial text-lg">{description}</p>
    </section>
  );
};

export default Description;
