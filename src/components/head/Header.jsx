import img from "../../assets/img/logo.png";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faBars,
  faMagnifyingGlass,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="h-[78px] flex items-center justify-between border p-2">
      <Button
        label={<FontAwesomeIcon icon={faBars} className="text-[20px]" />}
        className={"p-3 bg-transparent "}
      />
      <Button
        label={
          <img
            src="https://lynvn.com/cdn/shop/files/lyn_acc.png?v=1726474548&width=120"
            className="h-full"
          />
        }
        className={"bg-transparent h-full"}
      />

      <div className="h-full flex items-center justify-evenly gap-x-2">
        <Button
          label={<FontAwesomeIcon icon={faUserTie} className="text-[20px] " />}
          className={"p-3 bg-transparent"}
        />
        <Button
          label={
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-[20px] "
            />
          }
          className={"p-3 bg-transparent"}
        />
        <Button
          label={
            <FontAwesomeIcon icon={faBagShopping} className="text-[20px] " />
          }
          className={"p-3 bg-transparent"}
        />
      </div>
    </div>
  );
}

export default Header;
