import ClickButton from "./ClickBotton";

export default function RedBorder({ children }) {
  return (
    <div className="border border-2 border-red-400 p-2">
      Red border container:
      <ClickButton hover afterClickText="You clicked me">
        Click me
      </ClickButton>
      <br></br>
      {children}
    </div>
  );
}
