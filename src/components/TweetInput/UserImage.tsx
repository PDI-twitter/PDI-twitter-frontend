import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
type UserImageProps = {};

export const UserImage: React.FC<UserImageProps> = ({}) => {
  return (
    <div className="flex rounded-full bg-gray-100 w-10 h-10 justify-center items-center">
      <FontAwesomeIcon icon={faUser} />
    </div>
  );
};
