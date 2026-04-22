import { baristaData } from "@/Data/Data";

function Barista() {
  return (
    <>
      <div className="w-full min-h-[50dvh] bg-secondary grid grid-cols-2 md:grid-cols-3 gap-4 px-12 py-6 items-center justify-center ">
        {baristaData.map((p) => {
          return (
            <div key={p.id} className="flex flex-col items-center w-fit rounded-md bg-primary px-1.5 justify-center ">
              <h1 className="text-secondary text-center uppercase font-semibold">barista</h1>
              <figure className="my-1">
                <img className="h-96 md:h-102 w-69.25 object-cover rounded-md" src={p.img} alt={p.name} />
              </figure>
              <p className="text-center text-secondary font-medium capitalize">{p.name}</p>
              <p className="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text  font-medium text-transparent text-center">{p.intagram}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Barista;
