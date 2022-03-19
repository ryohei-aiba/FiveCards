import { UserCard } from "../atoms/UserCard";

export const Game = () => {
  return (
    <>
      <div>
        <div className="bg-slate-100 border border-stone-600 rounded box-border h-1/6 w-full mx-auto flex absolute top-0">
          <UserCard number={1}></UserCard>
          <UserCard number={2}></UserCard>
          <UserCard number={3}></UserCard>
          <UserCard number={4}></UserCard>
          <UserCard number={5}></UserCard>
        </div>
        <div className="bg-slate-100 border border-stone-600 rounded box-border h-1/3 w-full mx-auto absolute top-1/2 -translate-y-1/2"></div>
        <div className="bg-slate-100 border border-stone-600 rounded box-border h-1/6 w-full mx-auto flex absolute bottom-0">
          <UserCard number={1}></UserCard>
          <UserCard number={2}></UserCard>
          <UserCard number={3}></UserCard>
          <UserCard number={4}></UserCard>
          <UserCard number={5}></UserCard>
        </div>
      </div>
    </>
  );
};
