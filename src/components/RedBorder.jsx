export default function RedBorder({ children }) {
    return (
        <div className="border border-2 border-red-400 p-2">
            Red border container:
            <br></br>
            {children}
        </div>
    );
}