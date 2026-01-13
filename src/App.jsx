import React from "react";
import AppBar from "./components/AppBar";
import { Calculator, Check, Search } from "lucide-react";
import Card from "./components/Card";
import IconButton from "./components/IconButton";
import CheckBox from "./components/CheckBox";

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <AppBar />
      <div className="p-4">
        <Card innerClassName="gap-4">
          <IconButton />
          <AppBar />
          <CheckBox />
        </Card>
      </div>
    </div>
  );
};

export default App;
