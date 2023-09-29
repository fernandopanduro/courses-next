import Image from "next/image";

type Props = {};

const Logo = (props: Props) => {
  return <Image width={130} height={130} src={`/logo.svg`} alt={`Logo`} />;
};

export default Logo;
