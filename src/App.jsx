import AppBar from "./components/AppBar";
import Card from "./components/Card";
import IconButton from "./components/IconButton";
import CheckBox from "./components/CheckBox";
import Buttons from "./components/Buttons.jsx";
import Chips from "./components/Chips.jsx";
import Divider from "./components/Divider.jsx";
import Loading from "./components/Loading.jsx";
import ProgressIndicator from "./ProgressIndicator.jsx";

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <AppBar />
      <div className="p-4">
        <Card innerClassName="gap-4">
          <IconButton />
          <AppBar />
          <CheckBox />
          <div className={"flex items-center gap-4"}>
            <Buttons />
            <Buttons variant="filled" />
            <Buttons variant="tonal" />
            <Buttons variant="outline" />
            <Buttons variant="text" />
          </div>
          <Divider />
          <div className={"flex items-center gap-4"}>
            <Chips />
          </div>
          <Loading />
          <ProgressIndicator progress={28} />
        </Card>
      </div>
    </div>
  );
};

export default App;
