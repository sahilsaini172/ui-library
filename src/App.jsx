import Accordian, {
  AccordianContent,
  AccordianItem,
  AccordianTrigger,
} from "./components/Accordian";
import AppBar from "./components/AppBar";
import ButtonGroup from "./components/ButtonGroup";
import Buttons from "./components/Buttons";
import DarkModeToggle from "./components/DarkModeToggle";

const App = () => {
  return (
    <div className="bg-surface-variant-100 min-h-screen">
      <AppBar />
      <div className="flex gap-4 p-4">
        <Buttons />
        <Buttons variant="secondary" />
        <Buttons variant="tertiary" />
        <Buttons variant="standard" />
        <Buttons variant="text" />
      </div>
      <ButtonGroup className="m-4">
        <Buttons />
        <Buttons variant="secondary" />
        <Buttons variant="tertiary" />
        <Buttons variant="standard" />
        <Buttons variant="text" className={"text-surface-100"} />
      </ButtonGroup>
      <Accordian className={"m-4"} type="multi">
        <AccordianItem value="item-1">
          <AccordianTrigger>Product Information</AccordianTrigger>
          <AccordianContent>
            <p>
              Our flagship product combines cutting-edge technology with sleek
              design. Built with premium materials, it offers unparalleled
              performance and reliability.
            </p>
            <p>
              Key features include advanced processing capabilities, and an
              intuitive user interface designed for both beginners and experts.
            </p>
          </AccordianContent>
        </AccordianItem>
        <AccordianItem value="item-2">
          <AccordianTrigger>Product Information</AccordianTrigger>
          <AccordianContent>
            <p>
              Our flagship product combines cutting-edge technology with sleek
              design. Built with premium materials, it offers unparalleled
              performance and reliability.
            </p>
            <p>
              Key features include advanced processing capabilities, and an
              intuitive user interface designed for both beginners and experts.
            </p>
          </AccordianContent>
        </AccordianItem>
      </Accordian>
      <DarkModeToggle />
    </div>
  );
};

export default App;
