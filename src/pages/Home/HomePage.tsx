import React from "react";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Header } from "../../components/Header/Header";
import { TweetInput } from "../../components/TweetInput/TweetInput";

const HomePage: React.FC = () => {
  return (
    <>
      <Sidebar />
      <div className="flex flex-row w-screen">
        <div className="flex flex-col sm:ml-64 w-full sm:basis-1/2">
          <Header name="Home" />
          <TweetInput />
        </div>
        <div className="h-screen sm:basis-1/3 border-l-2 border-gray-200"></div>
      </div>
    </>
  );
};

export default HomePage;
