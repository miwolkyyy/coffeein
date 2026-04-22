interface SizeProps {
  selectedSize: string;
  onChange: (value: string) => void;
}

function Size({ selectedSize, onChange }: SizeProps) {
  return (
    <>
      <h1 className="text-lg">size</h1>
      <div className="tabs tabs-box tabs-sm bg-secondary  flex-row flex-nowrap w-full h-full">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab text-primary checked:text-secondary w-full "
          aria-label="S"
          value="S"
          checked={selectedSize === "S"}
          onChange={(e) => onChange(e.currentTarget.value)}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab text-primary checked:text-secondary w-full"
          aria-label="M"
          value="M"
          checked={selectedSize === "M"}
          onChange={(e) => onChange(e.currentTarget.value)}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab text-primary checked:text-secondary w-full"
          aria-label="L"
          value="L"
          checked={selectedSize === "L"}
          onChange={(e) => onChange(e.currentTarget.value)}
        />
      </div>
    </>
  );
}

export default Size;
