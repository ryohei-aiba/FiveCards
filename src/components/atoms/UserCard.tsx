type Props = {
  number: number;
};

export const UserCard = (props: Props) => {
  const { number } = props;
  return (
    <div className="bg-slate-100 border border-stone-600 rounded box-border h-20 w-14 relative">
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{number}</h1>
    </div>
  );
};
