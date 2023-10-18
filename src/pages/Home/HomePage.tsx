import React from "react";
import { Sidebar } from "../../molecules/Sidebar";
import { Header } from "../../molecules/Header";
import { TweetInput } from "../../molecules/TweetInput";
import { UserImage } from "../../atoms/UserImage";
import { Link } from "../../molecules/Link";
import { TweetPublication } from "../../molecules/TweetPublication";
import { TweetPublicationList } from "../../molecules/PublicationList";
import { tweetList } from "../../static/tweetList";

const HomePage: React.FC = () => {
  return (
    <>
      <Sidebar />
      <div className="flex flex-row w-screen">
        <div className="flex flex-col sm:ml-64 w-full sm:basis-1/2">
          <Header name="Home" />
          <TweetInput />
          <div>
            <TweetPublicationList publicationList={tweetList} />
          </div>
        </div>
        <div className="h-screen sm:basis-1/3 border-l-2 border-gray-200"></div>
      </div>
    </>
  );
};

export default HomePage;
