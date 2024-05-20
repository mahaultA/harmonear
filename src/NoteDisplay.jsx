export default function NoteDisplay({ currentNote }) {
  return (
    <div className="flex my-4 flex-col text-center">
      <span className="text-xl">Degree</span>
      <span className="text-8xl">{currentNote ? currentNote : ""}</span>
    </div>
  );
}
