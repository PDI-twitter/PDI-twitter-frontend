import React from "react";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Header } from "../../components/Header/Header";
import { TweetInput } from "../../components/TweetInput/TweetInput";

const HomePage: React.FC = () => {
  return (
    <div className="">
      <Sidebar />
      <div className="flex flex-col sm:ml-64">
        <Header name="Home" />
        <TweetInput />
      </div>
    </div>
  );
};

export default HomePage;
