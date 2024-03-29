import Atom from "@/components/atoms";

import KaKaoLogo from "../../../public/assets/svgs/KakaoLogo.svg";

export default function KakaoLogin({ ...rest }) {
  return (
    <Atom.Button name="kakao" size="md" variant="kakao" {...rest}>
      <div className="flex items-center justify-center gap-3">
        <KaKaoLogo /> 카카오 로그인
      </div>
    </Atom.Button>
  );
}
