import { IoAdd } from "react-icons/io5";
import Button from "../components/new/Button/Button";
import HorizontalLogo from "../components/new/HorizontalLogo/HorizontalLogo";
import VerticalLogo from "../components/new/VerticalLogo/VerticalLogo";
import TextInput from "../components/new/TextInput/TextInput";
import IconMod from "../components/new/IconMod/IconMod";
import IconUser from "../components/new/IconUser/IconUser";
import MainIcon from "../components/old/MyIcons/MainIcon";
import User from "../components/new/User/User";

function Visualizer() {
  return (
    <div>
      <Button>teste</Button>
      <TextInput />
      <HorizontalLogo />
      <VerticalLogo />
      <IconMod />
      <IconUser />
      <User
        userName="Nome teste"
        profileImgURL="https://lh3.googleusercontent.com/a/ACg8ocKi-1Tya3vdtQAn9rzASWR-6TrzJuSCfiuDa5T1SrL2WW03DXZU=s288-c-no"
      />
    </div>
  );
}

export default Visualizer;
