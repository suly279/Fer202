import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import NamePerson from "./component/NamePerson";
import PeopleList from "./component/PeopleList";
import Object from "./component/Object";
import FirstTeenager from "./component/FirstTeenager"
import AreAllTeenagers from "./component/AreAllTeenagers"
import GroupByOccupation from "./component/GroupByOccupation";
import FindOldestAndYoungest from "./component/FindOldestAndYoungest";
import AverageAgeByOccupation from "./component/AverageAgeByOccupation";
import SortByOccupationAndAge from "./component/SortByOccupationAndAge";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <NamePerson />
    <Object />
    <PeopleList />
    <FirstTeenager/>
    <AreAllTeenagers/>
    <SortByOccupationAndAge/>
    <GroupByOccupation/>
    <FindOldestAndYoungest/>
    <AverageAgeByOccupation/>
    
  </React.StrictMode>
);


reportWebVitals();
