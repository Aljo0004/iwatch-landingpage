import Image from "next/image";
import BlackWatch from "./BlackWatch";
import GreenWatch from "./GreenWatch";
import SalmonWatch from "./SalmonWatch";


const Watches = () => {
    return (
      <div className="watches">
        <div className="blackwatch">
          <BlackWatch />
        </div>
        <div className="greenwatch">
          <GreenWatch />
        </div>
        <div className="salmonwatch">
          <SalmonWatch />
        </div>
      </div>
    );
}

export default Watches;