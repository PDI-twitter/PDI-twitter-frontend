import { useDispatch } from "react-redux";
import { AuthState, logout } from "../redux/authSlice";
import { useSelector } from "react-redux";
import { UserImage } from "../atoms/UserImage";
import { Link } from "./Link";
import {
  arrowUpFromBracketSVG,
  commentSVG,
  heartSVG,
  retweetSVG,
} from "../static/publicationSVG";
import { IPublication } from "../models/publication";

type TweetPostProps = {
  tweet: IPublication;
};

export const TweetPublication: React.FC<TweetPostProps> = ({ tweet }) => {
  return (
    <div className="border-solid border-b-2 border-gray-200 pb-4">
      <div className="flex flex-row p-4  justify-between">
        <div>
          <UserImage />
        </div>
        <div className="flex flex-col w-full px-3">
          <div className="flex flex-row w-full">
            <p className="w-fit flex text-[13px] text-gray-700 font-bold">
              {tweet.userName}
            </p>
            <Link label={tweet.userIdentifier} />
          </div>
          <p className="text-[13px]">{tweet.publication}</p>
        </div>
      </div>
      <div className="flex flex-row w-full justify-evenly">
        <Link label={tweet.comments} svg={commentSVG} />
        <Link label={tweet.retweets} svg={retweetSVG} rotateSVG />
        <Link label={tweet.likes} svg={heartSVG} />
        <Link svg={arrowUpFromBracketSVG} />
      </div>
    </div>
  );
};
